// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointsResponseBodyEndpointsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag added to the resource.
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
   * The protocol. Valid values:
   * 
   * *   **IPv4**
   * *   **DualStack**
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * *   **Pending**: The endpoint connection is being modified.
   * *   **Connecting**: The endpoint connection is being established.
   * *   **Connected**: The endpoint connection is established.
   * *   **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * *   **Disconnected**: The endpoint is disconnected from the endpoint service.
   * *   **Deleting**: The endpoint connection is being deleted.
   * *   **ServiceDeleted**: The corresponding service is deleted.
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
   * The service state of the endpoint. Valid values:
   * 
   * *   **Normal**: The endpoint runs as expected.
   * *   **FinancialLocked**: The endpoint is locked due to overdue payments.
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
   * The state of the endpoint. Valid values:
   * 
   * *   **Creating**: The endpoint is being created.
   * *   **Active**: The endpoint is available.
   * *   **Pending**: The endpoint is being modified.
   * *   **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Interface**: interface endpoint
   * *   **Reverse**: reverse endpoint
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) policy. For more information about policy definitions, see [Policy elements](https://help.aliyun.com/document_detail/93738.html).
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  resourceOwner?: boolean;
  /**
   * @remarks
   * The ID of the endpoint service that is associated with the endpoint.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service that is associated with the endpoint.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The tags added to the resource.
   */
  tags?: ListVpcEndpointsResponseBodyEndpointsTags[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the endpoint belongs.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether the domain name of the nearest endpoint that is associated with the endpoint service is resolved first. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The information about the endpoints.
   */
  endpoints?: ListVpcEndpointsResponseBodyEndpoints[];
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of **NextToken** that is returned from the last call.
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
   * The total number of entries returned.
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

