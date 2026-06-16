// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkZonesResponseBodyNetworkZones extends $dara.Model {
  /**
   * @remarks
   * The description of the network zone.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR blocks.
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * The network zone ID.
   * 
   * @example
   * network_m223wbvc3sn3uakfnxvhbxxxxx
   */
  networkZoneId?: string;
  /**
   * @remarks
   * The network zone name.
   * 
   * @example
   * test_name
   */
  networkZoneName?: string;
  /**
   * @remarks
   * The type of the network zone.
   * 
   * @example
   * arn:alibaba:idaas:network:zone:classic
   */
  networkZoneType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1usdmfqcgoy5ebxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      ipv4Cidrs: 'Ipv4Cidrs',
      ipv6Cidrs: 'Ipv6Cidrs',
      networkZoneId: 'NetworkZoneId',
      networkZoneName: 'NetworkZoneName',
      networkZoneType: 'NetworkZoneType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      ipv6Cidrs: { 'type': 'array', 'itemType': 'string' },
      networkZoneId: 'string',
      networkZoneName: 'string',
      networkZoneType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Cidrs)) {
      $dara.Model.validateArray(this.ipv4Cidrs);
    }
    if(Array.isArray(this.ipv6Cidrs)) {
      $dara.Model.validateArray(this.ipv6Cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of network zones.
   */
  networkZones?: ListNetworkZonesResponseBodyNetworkZones[];
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The token that is used to retrieve the previous page of results.
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkZones: 'NetworkZones',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkZones: { 'type': 'array', 'itemType': ListNetworkZonesResponseBodyNetworkZones },
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkZones)) {
      $dara.Model.validateArray(this.networkZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

