// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointConnectionsResponseBodyConnectionsZones extends $dara.Model {
  /**
   * @remarks
   * The endpoint ENI ID.
   * 
   * @example
   * eni-hp32lk0pyv6o94hs****
   */
  eniId?: string;
  /**
   * @remarks
   * The ID of the endpoint ENI that is replaced in the smooth migration scenario.
   * 
   * @example
   * eni-hp32lk0pyv6o94hs****
   */
  replacedEniId?: string;
  /**
   * @remarks
   * The ID of the service resource that is replaced in the smooth migration scenario.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  replacedResourceId?: string;
  /**
   * @remarks
   * The service resource ID.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The vSwitch to which the endpoint belongs.
   * 
   * @example
   * vsw-hp3uf6045ljdhd5zr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The domain name of the zone.
   * 
   * @example
   * ep-hp34jaz8ykl0exwt****-cn-huhehaote.epsrv-hp3vpx8yqxblby3i****.cn-huhehaote-b.privatelink.aliyuncs.com
   */
  zoneDomain?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The state of the zone. Valid values:
   * - **Creating**: The zone is being created.
   * - **Wait**: The zone is waiting to be connected.
   * - **Connected**: The zone is connected.
   * - **Deleting**: The zone is being deleted.
   * - **Disconnecting**: The zone is being disconnected.
   * - **Disconnected**: The zone is disconnected.
   * - **Connecting**: The zone is being connected.
   * - **Migrating**: The zone is being migrated.
   * - **Migrated**: The zone is migrated.
   * 
   * @example
   * Connected
   */
  zoneStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      replacedEniId: 'ReplacedEniId',
      replacedResourceId: 'ReplacedResourceId',
      resourceId: 'ResourceId',
      vSwitchId: 'VSwitchId',
      zoneDomain: 'ZoneDomain',
      zoneId: 'ZoneId',
      zoneStatus: 'ZoneStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      replacedEniId: 'string',
      replacedResourceId: 'string',
      resourceId: 'string',
      vSwitchId: 'string',
      zoneDomain: 'string',
      zoneId: 'string',
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

export class ListVpcEndpointConnectionsResponseBodyConnections extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 3072
   */
  bandwidth?: number;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * - **Pending**: The endpoint connection is being modified.
   * 
   * - **Connecting**: The endpoint connection is being established.
   * 
   * - **Connected**: The endpoint is connected to the endpoint service.
   * 
   * - **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * 
   * - **Disconnected**: The endpoint is disconnected from the endpoint service.
   * 
   * - **Deleting**: The endpoint connection is being deleted.
   * 
   * - **ServiceDeleted**: The corresponding endpoint service is deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the endpoint belongs.
   * 
   * @example
   * 25346073170691****
   */
  endpointOwnerId?: number;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * @example
   * cn-hangzhou
   */
  endpointRegionId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the endpoint belongs.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  endpointVpcId?: string;
  /**
   * @remarks
   * The time when the connection was modified.
   * 
   * @example
   * 2021-09-28T10:34:46Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the resource group to which the endpoint belongs.
   * 
   * @example
   * rg-acfmw353z35v***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint and the endpoint service belong to the same Alibaba Cloud account. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  resourceOwner?: boolean;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * @example
   * cn-huhehaote
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * - Scalability: automatic scaling. In this mode, the bandwidth configured for the endpoint connection does not take effect.
   * 
   * - BandwidthLimit: the bandwidth limit of the endpoint connection. The bandwidth limit is the value of Bandwidth.
   * 
   * @example
   * BandwidthLimit
   */
  trafficControlMode?: string;
  /**
   * @remarks
   * The zone information.
   */
  zones?: ListVpcEndpointConnectionsResponseBodyConnectionsZones[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointOwnerId: 'EndpointOwnerId',
      endpointRegionId: 'EndpointRegionId',
      endpointVpcId: 'EndpointVpcId',
      modifiedTime: 'ModifiedTime',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      serviceId: 'ServiceId',
      serviceRegionId: 'ServiceRegionId',
      trafficControlMode: 'TrafficControlMode',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connectionStatus: 'string',
      endpointId: 'string',
      endpointOwnerId: 'number',
      endpointRegionId: 'string',
      endpointVpcId: 'string',
      modifiedTime: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'boolean',
      serviceId: 'string',
      serviceRegionId: 'string',
      trafficControlMode: 'string',
      zones: { 'type': 'array', 'itemType': ListVpcEndpointConnectionsResponseBodyConnectionsZones },
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

export class ListVpcEndpointConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoint connections.
   */
  connections?: ListVpcEndpointConnectionsResponseBodyConnections[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * - If **NextToken** is empty, no next query is to be sent.
   * - If a value of **NextToken** is returned, the value is the token that is used for the next query.
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
   * The number of entries returned in the endpoint connection list.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListVpcEndpointConnectionsResponseBodyConnections },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

