// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateAnycastEipAddressRequest extends $tea.Model {
  bandwidth?: string;
  clientToken?: string;
  description?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  name?: string;
  resourceGroupId?: string;
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      clientToken: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateAnycastEipAddressResponseBody extends $tea.Model {
  anycastId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocateAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressRequest extends $tea.Model {
  anycastId?: string;
  associationMode?: string;
  bindInstanceId?: string;
  bindInstanceRegionId?: string;
  bindInstanceType?: string;
  clientToken?: string;
  dryRun?: boolean;
  popLocations?: AssociateAnycastEipAddressRequestPopLocations[];
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      popLocations: 'PopLocations',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      associationMode: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      popLocations: { 'type': 'array', 'itemType': AssociateAnycastEipAddressRequestPopLocations },
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressRequest extends $tea.Model {
  anycastId?: string;
  bindInstanceId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bindInstanceId: 'BindInstanceId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bindInstanceId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBody extends $tea.Model {
  aliUid?: number;
  anycastEipBindInfoList?: DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList[];
  anycastId?: string;
  bandwidth?: number;
  bid?: string;
  businessStatus?: string;
  createTime?: string;
  description?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  ipAddress?: string;
  name?: string;
  requestId?: string;
  resourceGroupId?: string;
  serviceLocation?: string;
  status?: string;
  tags?: DescribeAnycastEipAddressResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      anycastEipBindInfoList: 'AnycastEipBindInfoList',
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
      bid: 'Bid',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      anycastEipBindInfoList: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList },
      anycastId: 'string',
      bandwidth: 'number',
      bid: 'string',
      businessStatus: 'string',
      createTime: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsRequest extends $tea.Model {
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsResponseBody extends $tea.Model {
  anycastPopLocationList?: DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList[];
  count?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastPopLocationList: 'AnycastPopLocationList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastPopLocationList: { 'type': 'array', 'itemType': DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList },
      count: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnycastPopLocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAnycastPopLocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsRequest extends $tea.Model {
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsResponseBody extends $tea.Model {
  anycastServerRegionList?: DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList[];
  count?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastServerRegionList: 'AnycastServerRegionList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastServerRegionList: { 'type': 'array', 'itemType': DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList },
      count: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnycastServerRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAnycastServerRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesRequest extends $tea.Model {
  anycastEipAddress?: string;
  anycastId?: string;
  anycastIds?: string[];
  bindInstanceIds?: string[];
  businessStatus?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  resourceGroupId?: string;
  serviceLocation?: string;
  status?: string;
  tags?: ListAnycastEipAddressesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      anycastEipAddress: 'AnycastEipAddress',
      anycastId: 'AnycastId',
      anycastIds: 'AnycastIds',
      bindInstanceIds: 'BindInstanceIds',
      businessStatus: 'BusinessStatus',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastEipAddress: 'string',
      anycastId: 'string',
      anycastIds: { 'type': 'array', 'itemType': 'string' },
      bindInstanceIds: { 'type': 'array', 'itemType': 'string' },
      businessStatus: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAnycastEipAddressesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBody extends $tea.Model {
  anycastList?: ListAnycastEipAddressesResponseBodyAnycastList[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      anycastList: 'AnycastList',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastList: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastList },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnycastEipAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnycastEipAddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressAttributeRequest extends $tea.Model {
  anycastId?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAnycastEipAddressAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAnycastEipAddressAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressSpecRequest extends $tea.Model {
  anycastId?: string;
  bandwidth?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressSpecResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAnycastEipAddressSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAnycastEipAddressSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseAnycastEipAddressRequest extends $tea.Model {
  anycastId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseAnycastEipAddressResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateAnycastEipAddressRequest extends $tea.Model {
  anycastId?: string;
  bindInstanceId?: string;
  bindInstanceRegionId?: string;
  bindInstanceType?: string;
  clientToken?: string;
  dryRun?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'string',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateAnycastEipAddressResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnassociateAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnassociateAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequest extends $tea.Model {
  anycastId?: string;
  associationMode?: string;
  bindInstanceId?: string;
  clientToken?: string;
  dryRun?: boolean;
  popLocationAddList?: UpdateAnycastEipAddressAssociationsRequestPopLocationAddList[];
  popLocationDeleteList?: UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList[];
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      popLocationAddList: 'PopLocationAddList',
      popLocationDeleteList: 'PopLocationDeleteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      associationMode: 'string',
      bindInstanceId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      popLocationAddList: { 'type': 'array', 'itemType': UpdateAnycastEipAddressAssociationsRequestPopLocationAddList },
      popLocationDeleteList: { 'type': 'array', 'itemType': UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAnycastEipAddressAssociationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAnycastEipAddressAssociationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressRequestPopLocations extends $tea.Model {
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations extends $tea.Model {
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList extends $tea.Model {
  associationMode?: string;
  bindInstanceId?: string;
  bindInstanceRegionId?: string;
  bindInstanceType?: string;
  bindTime?: string;
  popLocations?: DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations[];
  privateIpAddress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      bindTime: 'BindTime',
      popLocations: 'PopLocations',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationMode: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      bindTime: 'string',
      popLocations: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations },
      privateIpAddress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList extends $tea.Model {
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList extends $tea.Model {
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesRequestTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList extends $tea.Model {
  bindInstanceId?: string;
  bindInstanceRegionId?: string;
  bindInstanceType?: string;
  bindTime?: string;
  static names(): { [key: string]: string } {
    return {
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      bindTime: 'BindTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      bindTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBodyAnycastListTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBodyAnycastList extends $tea.Model {
  aliUid?: number;
  anycastEipBindInfoList?: ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList[];
  anycastId?: string;
  bandwidth?: number;
  businessStatus?: string;
  createTime?: string;
  description?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  ipAddress?: string;
  name?: string;
  resourceGroupId?: string;
  serviceLocation?: string;
  serviceManaged?: number;
  status?: string;
  tags?: ListAnycastEipAddressesResponseBodyAnycastListTags[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      anycastEipBindInfoList: 'AnycastEipBindInfoList',
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      anycastEipBindInfoList: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList },
      anycastId: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      createTime: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      serviceManaged: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastListTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequestPopLocationAddList extends $tea.Model {
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList extends $tea.Model {
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eipanycast", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async allocateAnycastEipAddressWithOptions(request: AllocateAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new AllocateAnycastEipAddressResponse({}));
  }

  async allocateAnycastEipAddress(request: AllocateAnycastEipAddressRequest): Promise<AllocateAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateAnycastEipAddressWithOptions(request, runtime);
  }

  async associateAnycastEipAddressWithOptions(request: AssociateAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.associationMode)) {
      query["AssociationMode"] = request.associationMode;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.bindInstanceRegionId)) {
      query["BindInstanceRegionId"] = request.bindInstanceRegionId;
    }

    if (!Util.isUnset(request.bindInstanceType)) {
      query["BindInstanceType"] = request.bindInstanceType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.popLocations)) {
      query["PopLocations"] = request.popLocations;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new AssociateAnycastEipAddressResponse({}));
  }

  async associateAnycastEipAddress(request: AssociateAnycastEipAddressRequest): Promise<AssociateAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAnycastEipAddressWithOptions(request, runtime);
  }

  async describeAnycastEipAddressWithOptions(request: DescribeAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new DescribeAnycastEipAddressResponse({}));
  }

  async describeAnycastEipAddress(request: DescribeAnycastEipAddressRequest): Promise<DescribeAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnycastEipAddressWithOptions(request, runtime);
  }

  async describeAnycastPopLocationsWithOptions(request: DescribeAnycastPopLocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnycastPopLocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnycastPopLocations",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnycastPopLocationsResponse>(await this.callApi(params, req, runtime), new DescribeAnycastPopLocationsResponse({}));
  }

  async describeAnycastPopLocations(request: DescribeAnycastPopLocationsRequest): Promise<DescribeAnycastPopLocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnycastPopLocationsWithOptions(request, runtime);
  }

  async describeAnycastServerRegionsWithOptions(request: DescribeAnycastServerRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnycastServerRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnycastServerRegions",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnycastServerRegionsResponse>(await this.callApi(params, req, runtime), new DescribeAnycastServerRegionsResponse({}));
  }

  async describeAnycastServerRegions(request: DescribeAnycastServerRegionsRequest): Promise<DescribeAnycastServerRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnycastServerRegionsWithOptions(request, runtime);
  }

  async listAnycastEipAddressesWithOptions(request: ListAnycastEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<ListAnycastEipAddressesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastEipAddress)) {
      query["AnycastEipAddress"] = request.anycastEipAddress;
    }

    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.anycastIds)) {
      query["AnycastIds"] = request.anycastIds;
    }

    if (!Util.isUnset(request.bindInstanceIds)) {
      query["BindInstanceIds"] = request.bindInstanceIds;
    }

    if (!Util.isUnset(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnycastEipAddresses",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAnycastEipAddressesResponse>(await this.callApi(params, req, runtime), new ListAnycastEipAddressesResponse({}));
  }

  async listAnycastEipAddresses(request: ListAnycastEipAddressesRequest): Promise<ListAnycastEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnycastEipAddressesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyAnycastEipAddressAttributeWithOptions(request: ModifyAnycastEipAddressAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAnycastEipAddressAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAnycastEipAddressAttribute",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAnycastEipAddressAttributeResponse>(await this.callApi(params, req, runtime), new ModifyAnycastEipAddressAttributeResponse({}));
  }

  async modifyAnycastEipAddressAttribute(request: ModifyAnycastEipAddressAttributeRequest): Promise<ModifyAnycastEipAddressAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAnycastEipAddressAttributeWithOptions(request, runtime);
  }

  async modifyAnycastEipAddressSpecWithOptions(request: ModifyAnycastEipAddressSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAnycastEipAddressSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAnycastEipAddressSpec",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAnycastEipAddressSpecResponse>(await this.callApi(params, req, runtime), new ModifyAnycastEipAddressSpecResponse({}));
  }

  async modifyAnycastEipAddressSpec(request: ModifyAnycastEipAddressSpecRequest): Promise<ModifyAnycastEipAddressSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAnycastEipAddressSpecWithOptions(request, runtime);
  }

  async releaseAnycastEipAddressWithOptions(request: ReleaseAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new ReleaseAnycastEipAddressResponse({}));
  }

  async releaseAnycastEipAddress(request: ReleaseAnycastEipAddressRequest): Promise<ReleaseAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseAnycastEipAddressWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unassociateAnycastEipAddressWithOptions(request: UnassociateAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.bindInstanceRegionId)) {
      query["BindInstanceRegionId"] = request.bindInstanceRegionId;
    }

    if (!Util.isUnset(request.bindInstanceType)) {
      query["BindInstanceType"] = request.bindInstanceType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnassociateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnassociateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new UnassociateAnycastEipAddressResponse({}));
  }

  async unassociateAnycastEipAddress(request: UnassociateAnycastEipAddressRequest): Promise<UnassociateAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateAnycastEipAddressWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAnycastEipAddressAssociationsWithOptions(request: UpdateAnycastEipAddressAssociationsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAnycastEipAddressAssociationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.associationMode)) {
      query["AssociationMode"] = request.associationMode;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.popLocationAddList)) {
      query["PopLocationAddList"] = request.popLocationAddList;
    }

    if (!Util.isUnset(request.popLocationDeleteList)) {
      query["PopLocationDeleteList"] = request.popLocationDeleteList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAnycastEipAddressAssociations",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAnycastEipAddressAssociationsResponse>(await this.callApi(params, req, runtime), new UpdateAnycastEipAddressAssociationsResponse({}));
  }

  async updateAnycastEipAddressAssociations(request: UpdateAnycastEipAddressAssociationsRequest): Promise<UpdateAnycastEipAddressAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAnycastEipAddressAssociationsWithOptions(request, runtime);
  }

}
