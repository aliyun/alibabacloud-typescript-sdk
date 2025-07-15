// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcGatewayEndpointsResponseBodyEndpointsTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
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
   * The ID of the route table associated with the gateway endpoint.
   */
  associatedRouteTables?: string[];
  /**
   * @remarks
   * The time when the endpoint was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
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
   * The ID of the gateway endpoint.
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
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Associating**
   * *   **Dissociating**
   * *   **Deleting**
   * 
   * @example
   * Created
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The access policy for the cloud service.
   * 
   * For more information about the syntax and structure of the access policy, see [Policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
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
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyun.cn-hangzhou.oss
   */
  serviceName?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListVpcGatewayEndpointsResponseBodyEndpointsTags[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the gateway endpoint belongs.
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
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
   * The number of entries returned.
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

