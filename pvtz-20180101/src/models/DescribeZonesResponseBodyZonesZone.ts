// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZonesZoneResourceTags } from "./DescribeZonesResponseBodyZonesZoneResourceTags";


export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1514466483000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the zone.
   * 
   * @example
   * 546356****
   */
  creator?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * *   **CUSTOMER**: Alibaba Cloud account
   * *   **SUB**: RAM user
   * *   **STS**: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   **OTHER**: other types
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The logical location type of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   **NORMAL_ZONE**: regular module
   * *   **FAST_ZONE**: acceleration module
   * 
   * @example
   * NORMAL_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * Indicates whether the zone is being removed to another logical location. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dnsGroupChanging?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is a reverse lookup zone. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isPtr?: boolean;
  /**
   * @remarks
   * Indicates whether the recursive resolution proxy for subdomain names is enabled. Valid values:
   * 
   * *   **ZONE**: The recursive resolution proxy for subdomain names is disabled. In this case, NXDOMAIN is returned if the queried domain name does not exist in the zone.
   * *   **RECORD**: The recursive resolution proxy for subdomain names is enabled. In this case, if the queried domain name does not exist in the zone, DNS requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The number of Domain Name System (DNS) records added in the zone.
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
   * The ID of the resource group to which the zone belongs.
   * 
   * @example
   * rg-aekz2qj7awz****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the zone.
   */
  resourceTags?: DescribeZonesResponseBodyZonesZoneResourceTags;
  slaveDnsStatus?: string;
  /**
   * @remarks
   * The time when the zone was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-03T08:57Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1514969843000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * 6d83e3b31aa60ca4aaa7161f1b6b**95
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * test.com
   */
  zoneName?: string;
  /**
   * @remarks
   * The type of the cloud service. Valid values:
   * 
   * *   If ZoneType is set to AUTH_ZONE, no value is returned for this parameter.
   * *   If ZoneType is set to CLOUD_PRODUCT_ZONE, the type of the cloud service is returned.
   * 
   * @example
   * BLINK
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
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      resourceTags: 'ResourceTags',
      slaveDnsStatus: 'SlaveDnsStatus',
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
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      resourceTags: DescribeZonesResponseBodyZonesZoneResourceTags,
      slaveDnsStatus: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(this.resourceTags && typeof (this.resourceTags as any).validate === 'function') {
      (this.resourceTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

