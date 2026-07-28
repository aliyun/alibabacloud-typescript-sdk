// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcGatewayEndpointsResponseBodyEndpointsTags extends $dara.Model {
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

export class ListVpcGatewayEndpointsResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The IDs of the route tables associated with the gateway endpoint.
   */
  associatedRouteTables?: string[];
  /**
   * @remarks
   * The time when the gateway endpoint was created. The time is displayed in UTC in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2021-09-08T08:43:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the gateway endpoint.
   * 
   * @example
   * test_description
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The endpoint instance ID of the gateway endpoint.
   * 
   * @example
   * vpce-bp1i1212ss2whuwyw****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the gateway endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The status of the gateway endpoint. Valid values:
   * 
   * - **Creating**: being created.
   * - **Created**: created and in a normal state.
   * - **Modifying**: being modified.
   * - **Associating**: being associated.
   * - **Dissociating**: being disassociated.
   * - **Deleting**: being deleted.
   * 
   * @example
   * Created
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The access policy for the cloud service.
   * 
   * For more information about the syntax and structure of access policies, see [Policy structure and syntax](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the resource group to which the gateway endpoint belongs.
   * 
   * @example
   * rg-acfmxvfvazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service name of the endpoint service.
   * 
   * @example
   * com.aliyun.cn-hangzhou.oss
   */
  serviceName?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListVpcGatewayEndpointsResponseBodyEndpointsTags[];
  /**
   * @remarks
   * The ID of the VPC to which the gateway endpoint belongs.
   * 
   * @example
   * vpc-bp1gsk7h12ew7oegk****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedRouteTables: 'AssociatedRouteTables',
      creationTime: 'CreationTime',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      policyDocument: 'PolicyDocument',
      resourceGroupId: 'ResourceGroupId',
      serviceName: 'ServiceName',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedRouteTables: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'string',
      endpointDescription: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      policyDocument: 'string',
      resourceGroupId: 'string',
      serviceName: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcGatewayEndpointsResponseBodyEndpointsTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedRouteTables)) {
      $dara.Model.validateArray(this.associatedRouteTables);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcGatewayEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of gateway endpoints.
   */
  endpoints?: ListVpcGatewayEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates whether a next query token is available. Valid values:
   * - If **NextToken** is empty, no more results are available.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AB1129F-32C1-5E4D-9E22-E4A859CA46EB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
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
      endpoints: { 'type': 'array', 'itemType': ListVpcGatewayEndpointsResponseBodyEndpoints },
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

