// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZoneRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The location of the built-in authoritative zone. Valid values:
   * 
   * - **NORMAL_ZONE**: Standard zone. DNS responses are cached. If a cache miss occurs, the query is sent to the built-in authoritative standard zone. The time to live (TTL) value affects the time when a DNS record change takes effect. You cannot use custom DNS lines or weighted round-robin.
   * 
   * - **FAST_ZONE**: Accelerated zone (recommended). DNS queries are directly responded to with the lowest latency. DNS record changes take effect in real time. You can use custom DNS lines and weighted round-robin.
   * 
   * Default value: **NORMAL_ZONE**.
   * 
   * > The built-in authoritative accelerated zone is located before the cache module. DNS responses are not cached. This may increase the number of DNS queries and your costs.
   * 
   * <props="china">
   * 
   * > Starting from April 30, 2025 (UTC+8), when new users activate Alibaba Cloud DNS PrivateZone, added zones are set as accelerated zones by default.
   * 
   * @example
   * FAST_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable subdomain recursive proxy. Valid values:
   * 
   * - **ZONE**: Disables the feature. If a DNS query for a subdomain that does not exist under the current domain name is received, an NXDOMAIN error is returned.
   * 
   * - **RECORD**: Enables the feature. If a DNS query for a subdomain that does not exist under the current domain name is received, the query is processed by the forwarding and recursion modules in sequence. The final result is used to respond to the DNS query.
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
   * The name of the zone to add.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  /**
   * @remarks
   * This parameter is not available to users. You do not need to specify this parameter.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string;
  /**
   * @remarks
   * This parameter is not available to users. You do not need to specify this parameter.
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

