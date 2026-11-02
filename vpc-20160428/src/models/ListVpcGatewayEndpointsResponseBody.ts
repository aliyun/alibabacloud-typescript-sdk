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
   * The IDs of the route tables associated with the VPC gateway endpoint.
   */
  associatedRouteTables?: string[];
  /**
   * @remarks
   * The time when the VPC gateway endpoint was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2021-09-08T08:43:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the VPC gateway endpoint.
   * 
   * @example
   * test_description
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The gateway endpoint instance ID.
   * 
   * @example
   * vpce-bp1i1212ss2whuwyw****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the VPC gateway endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The status of the VPC gateway endpoint. Valid values:
   * 
   * - **Creating**: The endpoint is being created.
   * - **Created**: The endpoint is created and in a normal state.
   * - **Modifying**: The endpoint is being modified.
   * - **Associating**: The endpoint is being associated.
   * - **Dissociating**: The endpoint is being disassociated.
   * - **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Created
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The access policy for the cloud service.
   * 
   * For more information about the syntax and structure of access policies, see [Policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the resource group to which the VPC gateway endpoint belongs.
   * 
   * @example
   * rg-acfmxvfvazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The endpoint service name.
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
   * The ID of the VPC to which the VPC gateway endpoint belongs.
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
   * The list of VPC gateway endpoints.
   */
  endpoints?: ListVpcGatewayEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - If **NextToken** is empty, no subsequent query is required.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AB1129F-32C1-5E4D-9E22-E4A859CA46EB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

