// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointZonesResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint ENI.
   * 
   * @example
   * eni-hp3c8qj1tyct8aqy****
   */
  eniId?: string;
  /**
   * @remarks
   * The IP address of the endpoint ENI.
   * 
   * @example
   * 192.168.2.23
   */
  eniIp?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. The system automatically creates an endpoint elastic network interface (ENI) in the vSwitch.
   * 
   * @example
   * vsw-hjkshjvdkdvd****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The domain name of the zone.
   * 
   * After the endpoint in the zone is connected to the endpoint service, you can access the service resources of the endpoint service by using the domain name of the zone.
   * 
   * @example
   * ep-hp3f033dp24c5yc9****-cn-huhehaote.epsrv-hp3itcpowf37m3d5****.cn-huhehaote-a.privatelink.aliyuncs.com
   */
  zoneDomain?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-huhehaote-a
   */
  zoneId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service supports IPv6. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  zoneIpv6Address?: string;
  /**
   * @remarks
   * The state of the zone. Valid values:
   * 
   * *   **Creating**: The zone is being created.
   * *   **Wait**: The zone is to be connected.
   * *   **Connected**: The zone is connected.
   * *   **Deleting**: The zone is being deleted.
   * *   **Disconnecting**: The zone is being disconnected.
   * *   **Disconnected**: The zone is disconnected.
   * *   **Connecting**: The zone is being connected.
   * 
   * @example
   * Wait
   */
  zoneStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniIp: 'EniIp',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      zoneDomain: 'ZoneDomain',
      zoneId: 'ZoneId',
      zoneIpv6Address: 'ZoneIpv6Address',
      zoneStatus: 'ZoneStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniIp: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      zoneDomain: 'string',
      zoneId: 'string',
      zoneIpv6Address: 'string',
      zoneStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next requests are performed.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the zones.
   */
  zones?: ListVpcEndpointZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      zones: { 'type': 'array', 'itemType': ListVpcEndpointZonesResponseBodyZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

