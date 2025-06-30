// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZoneInfoResponseBodyBindEdgeDnsClusters } from "./DescribeZoneInfoResponseBodyBindEdgeDnsClusters";
import { DescribeZoneInfoResponseBodyBindVpcs } from "./DescribeZoneInfoResponseBodyBindVpcs";


export class DescribeZoneInfoResponseBody extends $dara.Model {
  bindEdgeDnsClusters?: DescribeZoneInfoResponseBodyBindEdgeDnsClusters;
  /**
   * @remarks
   * The VPCs associated with the zone.
   */
  bindVpcs?: DescribeZoneInfoResponseBodyBindVpcs;
  /**
   * @remarks
   * The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the zone.
   * 
   * @example
   * 141339776561****
   */
  creator?: string;
  /**
   * @remarks
   * The type of the creator.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The logical location type of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   **NORMAL_ZONE**: regular module
   * *   **FAST_ZONE**: acceleration module
   * 
   * @example
   * FAST_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * Indicates whether the zone is being removed to another logical location. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  dnsGroupChanging?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is a reverse lookup zone. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPtr?: boolean;
  /**
   * @remarks
   * Indicates whether the recursive resolution proxy for subdomain names is enabled. Valid values:
   * 
   * *   ZONE: The recursive resolution proxy for subdomain names is disabled. In this case, NXDOMAIN is returned if the queried domain name does not exist in the zone.
   * *   RECORD: The recursive resolution proxy for subdomain names is enabled. In this case, if the queried domain name does not exist in the zone, DNS requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The total number of DNS records added in the zone.
   * 
   * @example
   * 2
   */
  recordCount?: number;
  /**
   * @remarks
   * The description of the zone.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F73F41A3-B6DD-42CA-A793-FFF93277835D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the zone belongs.
   * 
   * @example
   * rg-acfmykd63gt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone. Valid values:
   * 
   * *   **true**: The secondary DNS feature is enabled.
   * *   **false**: The secondary DNS feature is disabled.
   * 
   * @example
   * true
   */
  slaveDns?: boolean;
  /**
   * @remarks
   * The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * zone-test.cn
   */
  zoneName?: string;
  /**
   * @remarks
   * The tag added to the zone.
   * 
   * @example
   * pvtz
   */
  zoneTag?: string;
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   **AUTH_ZONE**: authoritative zone
   * *   **CLOUD_PRODUCT_ZONE**: authoritative zone for cloud services
   * 
   * @example
   * CLOUD_PRODUCT_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      bindEdgeDnsClusters: 'BindEdgeDnsClusters',
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorType: 'CreatorType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveDns: 'SlaveDns',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindEdgeDnsClusters: DescribeZoneInfoResponseBodyBindEdgeDnsClusters,
      bindVpcs: DescribeZoneInfoResponseBodyBindVpcs,
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDns: 'boolean',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(this.bindEdgeDnsClusters && typeof (this.bindEdgeDnsClusters as any).validate === 'function') {
      (this.bindEdgeDnsClusters as any).validate();
    }
    if(this.bindVpcs && typeof (this.bindVpcs as any).validate === 'function') {
      (this.bindVpcs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

