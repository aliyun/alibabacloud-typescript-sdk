// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointsResponseBodyEndpointsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The IP address family. Valid values:
   * 
   * - **IPv4**: IPv4.
   * 
   * - **DualStack**: dual stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The connection bandwidth of the endpoint, in Mbps.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The connection status of the endpoint. Valid values:
   * 
   * - **Pending**: The connection is being modified.
   * 
   * - **Connecting**: The endpoint is being connected.
   * 
   * - **Connected**: The endpoint is connected.
   * 
   * - **Disconnecting**: The endpoint is being disconnected.
   * 
   * - **Disconnected**: The endpoint is disconnected.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * - **ServiceDeleted**: The associated endpoint service has been deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2021-09-24T18:00:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The bandwidth of the cross-region connection, in Mbps.
   * 
   * @example
   * 1000
   */
  crossRegionBandwidth?: number;
  /**
   * @remarks
   * The business status of the endpoint. Valid values:
   * 
   * - **Normal**: The endpoint is running as expected.
   * 
   * - **FinancialLocked**: The endpoint is locked due to an overdue payment.
   * 
   * @example
   * Normal
   */
  endpointBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * - **Creating**: The endpoint is being created.
   * 
   * - **Active**: The endpoint is available.
   * 
   * - **Pending**: The endpoint is being modified.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Interface**: an interface endpoint.
   * 
   * - **Reverse**: a reverse endpoint.
   * 
   * - **GatewayLoadBalancer**: a gateway load balancer endpoint.
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The RAM access policy. For details on the policy syntax, see [Basic elements of a RAM policy](https://help.aliyun.com/document_detail/93738.html).
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the region that contains the endpoint.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 1
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
   * The ID of the associated endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the associated endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The ID of the region where the associated endpoint service is deployed.
   * 
   * @example
   * cn-huhehaote
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListVpcEndpointsResponseBodyEndpointsTags[];
  /**
   * @remarks
   * The ID of the VPC to which the endpoint belongs.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether zone-aware DNS resolution is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      createTime: 'CreateTime',
      crossRegionBandwidth: 'CrossRegionBandwidth',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      endpointDomain: 'EndpointDomain',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      endpointType: 'EndpointType',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceRegionId: 'ServiceRegionId',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      bandwidth: 'number',
      connectionStatus: 'string',
      createTime: 'string',
      crossRegionBandwidth: 'number',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      endpointType: 'string',
      policyDocument: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'boolean',
      serviceId: 'string',
      serviceName: 'string',
      serviceRegionId: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyEndpointsTags },
      vpcId: 'string',
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of endpoints.
   */
  endpoints?: ListVpcEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * - If **NextToken** is empty, no next page exists.
   * 
   * - If a value is returned, use it in your next request to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
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
   * The total number of entries that match the query.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyEndpoints },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

