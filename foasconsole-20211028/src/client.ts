// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConvertInstanceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  isAutoRenew?: boolean;
  namespaceResourceSpecs?: ConvertInstanceRequestNamespaceResourceSpecs[];
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecs: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecs: { 'type': 'array', 'itemType': ConvertInstanceRequestNamespaceResourceSpecs },
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceShrinkRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  isAutoRenew?: boolean;
  namespaceResourceSpecsShrink?: string;
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecsShrink: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecsShrink: 'string',
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertInstanceResponseBody;
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
      body: ConvertInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  architectureType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  duration?: number;
  extra?: string;
  ha?: boolean;
  haResourceSpec?: CreateInstanceRequestHaResourceSpec;
  haVSwitchIds?: string[];
  haZoneId?: string;
  instanceName?: string;
  monitorType?: string;
  pricingCycle?: string;
  promotionCode?: string;
  region?: string;
  resourceGroupId?: string;
  resourceSpec?: CreateInstanceRequestResourceSpec;
  storage?: CreateInstanceRequestStorage;
  tag?: CreateInstanceRequestTag[];
  usePromotionCode?: boolean;
  vSwitchIds?: string[];
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      extra: 'Extra',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      tag: 'Tag',
      usePromotionCode: 'UsePromotionCode',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      extra: 'string',
      ha: 'boolean',
      haResourceSpec: CreateInstanceRequestHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      haZoneId: 'string',
      instanceName: 'string',
      monitorType: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceSpec: CreateInstanceRequestResourceSpec,
      storage: CreateInstanceRequestStorage,
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      usePromotionCode: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShrinkRequest extends $tea.Model {
  architectureType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  duration?: number;
  extra?: string;
  ha?: boolean;
  haResourceSpecShrink?: string;
  haVSwitchIdsShrink?: string;
  haZoneId?: string;
  instanceName?: string;
  monitorType?: string;
  pricingCycle?: string;
  promotionCode?: string;
  region?: string;
  resourceGroupId?: string;
  resourceSpecShrink?: string;
  storageShrink?: string;
  tagShrink?: string;
  usePromotionCode?: boolean;
  vSwitchIdsShrink?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      extra: 'Extra',
      ha: 'Ha',
      haResourceSpecShrink: 'HaResourceSpec',
      haVSwitchIdsShrink: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceSpecShrink: 'ResourceSpec',
      storageShrink: 'Storage',
      tagShrink: 'Tag',
      usePromotionCode: 'UsePromotionCode',
      vSwitchIdsShrink: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      extra: 'string',
      ha: 'boolean',
      haResourceSpecShrink: 'string',
      haVSwitchIdsShrink: 'string',
      haZoneId: 'string',
      instanceName: 'string',
      monitorType: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceSpecShrink: 'string',
      storageShrink: 'string',
      tagShrink: 'string',
      usePromotionCode: 'boolean',
      vSwitchIdsShrink: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  orderInfo?: CreateInstanceResponseBodyOrderInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderInfo: 'OrderInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderInfo: CreateInstanceResponseBodyOrderInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  ha?: boolean;
  instanceId?: string;
  namespace?: string;
  region?: string;
  resourceSpec?: CreateNamespaceRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpec: CreateNamespaceRequestResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceShrinkRequest extends $tea.Model {
  ha?: boolean;
  instanceId?: string;
  namespace?: string;
  region?: string;
  resourceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
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

export class CreateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNamespaceResponseBody;
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
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
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
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
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

export class DeleteNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNamespaceResponseBody;
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
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  architectureType?: string;
  chargeType?: string;
  instanceId?: string;
  pageIndex?: number;
  pageSize?: number;
  region?: string;
  resourceGroupId?: string;
  tags?: DescribeInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      chargeType: 'string',
      instanceId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeInstancesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesShrinkRequest extends $tea.Model {
  architectureType?: string;
  chargeType?: string;
  instanceId?: string;
  pageIndex?: number;
  pageSize?: number;
  region?: string;
  resourceGroupId?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      chargeType: 'string',
      instanceId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
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
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequest extends $tea.Model {
  ha?: boolean;
  instanceId?: string;
  namespace?: string;
  pageIndex?: number;
  pageSize?: number;
  region?: string;
  tags?: DescribeNamespacesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
      tags: { 'type': 'array', 'itemType': DescribeNamespacesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesShrinkRequest extends $tea.Model {
  ha?: boolean;
  instanceId?: string;
  namespace?: string;
  pageIndex?: number;
  pageSize?: number;
  region?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBody extends $tea.Model {
  namespaces?: DescribeNamespacesResponseBodyNamespaces[];
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyNamespaces },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespacesResponseBody;
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
      body: DescribeNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportedRegionsResponseBody extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  regions?: DescribeSupportedRegionsResponseBodyRegions[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      regions: { 'type': 'array', 'itemType': DescribeSupportedRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportedRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSupportedRegionsResponseBody;
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
      body: DescribeSupportedRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportedZonesRequest extends $tea.Model {
  architectureType?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportedZonesResponseBody extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportedZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSupportedZonesResponseBody;
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
      body: DescribeSupportedZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
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
  success?: boolean;
  tagReponseId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagReponseId: 'TagReponseId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagReponseId: 'string',
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

export class ModifyPrepayInstanceSpecRequest extends $tea.Model {
  ha?: boolean;
  haResourceSpec?: ModifyPrepayInstanceSpecRequestHaResourceSpec;
  haVSwitchIds?: string[];
  haZoneId?: string;
  instanceId?: string;
  region?: string;
  resourceSpec?: ModifyPrepayInstanceSpecRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpec: ModifyPrepayInstanceSpecRequestHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      haZoneId: 'string',
      instanceId: 'string',
      region: 'string',
      resourceSpec: ModifyPrepayInstanceSpecRequestResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecShrinkRequest extends $tea.Model {
  ha?: boolean;
  haResourceSpecShrink?: string;
  haVSwitchIdsShrink?: string;
  haZoneId?: string;
  instanceId?: string;
  region?: string;
  resourceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpecShrink: 'HaResourceSpec',
      haVSwitchIdsShrink: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpecShrink: 'string',
      haVSwitchIdsShrink: 'string',
      haZoneId: 'string',
      instanceId: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPrepayInstanceSpecResponseBody;
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
      body: ModifyPrepayInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  region?: string;
  resourceSpec?: ModifyPrepayNamespaceSpecRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpec: ModifyPrepayNamespaceSpecRequestResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecShrinkRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  region?: string;
  resourceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecResponseBody extends $tea.Model {
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

export class ModifyPrepayNamespaceSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPrepayNamespaceSpecResponseBody;
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
      body: ModifyPrepayNamespaceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  isAutoRenew?: boolean;
  namespaceResourceSpecs?: QueryConvertInstancePriceRequestNamespaceResourceSpecs[];
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecs: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecs: { 'type': 'array', 'itemType': QueryConvertInstancePriceRequestNamespaceResourceSpecs },
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceShrinkRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  isAutoRenew?: boolean;
  namespaceResourceSpecsShrink?: string;
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecsShrink: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecsShrink: 'string',
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBody extends $tea.Model {
  priceInfo?: QueryConvertInstancePriceResponseBodyPriceInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: QueryConvertInstancePriceResponseBodyPriceInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryConvertInstancePriceResponseBody;
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
      body: QueryConvertInstancePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceRequest extends $tea.Model {
  architectureType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  duration?: number;
  extra?: string;
  ha?: boolean;
  haResourceSpec?: QueryCreateInstancePriceRequestHaResourceSpec;
  instanceName?: string;
  pricingCycle?: string;
  promotionCode?: string;
  region?: string;
  resourceSpec?: QueryCreateInstancePriceRequestResourceSpec;
  storage?: QueryCreateInstancePriceRequestStorage;
  usePromotionCode?: boolean;
  vSwitchIds?: string[];
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      extra: 'Extra',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      instanceName: 'InstanceName',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      usePromotionCode: 'UsePromotionCode',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      extra: 'string',
      ha: 'boolean',
      haResourceSpec: QueryCreateInstancePriceRequestHaResourceSpec,
      instanceName: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceSpec: QueryCreateInstancePriceRequestResourceSpec,
      storage: QueryCreateInstancePriceRequestStorage,
      usePromotionCode: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceShrinkRequest extends $tea.Model {
  architectureType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  duration?: number;
  extra?: string;
  ha?: boolean;
  haResourceSpecShrink?: string;
  instanceName?: string;
  pricingCycle?: string;
  promotionCode?: string;
  region?: string;
  resourceSpecShrink?: string;
  storageShrink?: string;
  usePromotionCode?: boolean;
  vSwitchIdsShrink?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      extra: 'Extra',
      ha: 'Ha',
      haResourceSpecShrink: 'HaResourceSpec',
      instanceName: 'InstanceName',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
      storageShrink: 'Storage',
      usePromotionCode: 'UsePromotionCode',
      vSwitchIdsShrink: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      extra: 'string',
      ha: 'boolean',
      haResourceSpecShrink: 'string',
      instanceName: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
      storageShrink: 'string',
      usePromotionCode: 'boolean',
      vSwitchIdsShrink: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBody extends $tea.Model {
  priceInfo?: QueryCreateInstancePriceResponseBodyPriceInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: QueryCreateInstancePriceResponseBodyPriceInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCreateInstancePriceResponseBody;
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
      body: QueryCreateInstancePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceRequest extends $tea.Model {
  ha?: boolean;
  haResourceSpec?: QueryModifyInstancePriceRequestHaResourceSpec;
  haVSwitchIds?: string[];
  haZoneId?: string;
  instanceId?: string;
  region?: string;
  resourceSpec?: QueryModifyInstancePriceRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpec: QueryModifyInstancePriceRequestHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      haZoneId: 'string',
      instanceId: 'string',
      region: 'string',
      resourceSpec: QueryModifyInstancePriceRequestResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceShrinkRequest extends $tea.Model {
  ha?: boolean;
  haResourceSpecShrink?: string;
  haVSwitchIdsShrink?: string;
  haZoneId?: string;
  instanceId?: string;
  region?: string;
  resourceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpecShrink: 'HaResourceSpec',
      haVSwitchIdsShrink: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpecShrink: 'string',
      haVSwitchIdsShrink: 'string',
      haZoneId: 'string',
      instanceId: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceResponseBody extends $tea.Model {
  priceInfo?: QueryModifyInstancePriceResponseBodyPriceInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: QueryModifyInstancePriceResponseBodyPriceInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryModifyInstancePriceResponseBody;
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
      body: QueryModifyInstancePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceResponseBody extends $tea.Model {
  priceInfo?: QueryRenewInstancePriceResponseBodyPriceInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: QueryRenewInstancePriceResponseBodyPriceInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRenewInstancePriceResponseBody;
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
      body: QueryRenewInstancePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewInstanceResponseBody;
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
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagResponseId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagResponseId: 'TagResponseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResponseId: 'string',
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

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagResponseId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagResponseId: 'TagResponseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResponseId: 'string',
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

export class ConvertInstanceRequestNamespaceResourceSpecsResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceRequestNamespaceResourceSpecs extends $tea.Model {
  namespace?: string;
  resourceSpec?: ConvertInstanceRequestNamespaceResourceSpecsResourceSpec;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resourceSpec: ConvertInstanceRequestNamespaceResourceSpecsResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestHaResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestStorageOss extends $tea.Model {
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestStorage extends $tea.Model {
  oss?: CreateInstanceRequestStorageOss;
  static names(): { [key: string]: string } {
    return {
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: CreateInstanceRequestStorageOss,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTag extends $tea.Model {
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

export class CreateInstanceResponseBodyOrderInfo extends $tea.Model {
  instanceId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTags extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstancesHaResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesHostAliases extends $tea.Model {
  hostNames?: string[];
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostNames: 'HostNames',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostNames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesStorageOss extends $tea.Model {
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesStorage extends $tea.Model {
  oss?: DescribeInstancesResponseBodyInstancesStorageOss;
  static names(): { [key: string]: string } {
    return {
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: DescribeInstancesResponseBodyInstancesStorageOss,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesTags extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  architectureType?: string;
  askClusterId?: string;
  chargeType?: string;
  clusterStatus?: string;
  ha?: boolean;
  haResourceSpec?: DescribeInstancesResponseBodyInstancesHaResourceSpec;
  haVSwitchIds?: string[];
  haZoneId?: string;
  hostAliases?: DescribeInstancesResponseBodyInstancesHostAliases[];
  instanceId?: string;
  instanceName?: string;
  monitorType?: string;
  orderState?: string;
  region?: string;
  resourceCreateTime?: number;
  resourceExpiredTime?: number;
  resourceGroupId?: string;
  resourceId?: string;
  resourceSpec?: DescribeInstancesResponseBodyInstancesResourceSpec;
  storage?: DescribeInstancesResponseBodyInstancesStorage;
  tags?: DescribeInstancesResponseBodyInstancesTags[];
  uid?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      askClusterId: 'AskClusterId',
      chargeType: 'ChargeType',
      clusterStatus: 'ClusterStatus',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      hostAliases: 'HostAliases',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      orderState: 'OrderState',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceExpiredTime: 'ResourceExpiredTime',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      tags: 'Tags',
      uid: 'Uid',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      askClusterId: 'string',
      chargeType: 'string',
      clusterStatus: 'string',
      ha: 'boolean',
      haResourceSpec: DescribeInstancesResponseBodyInstancesHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      haZoneId: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesHostAliases },
      instanceId: 'string',
      instanceName: 'string',
      monitorType: 'string',
      orderState: 'string',
      region: 'string',
      resourceCreateTime: 'number',
      resourceExpiredTime: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceSpec: DescribeInstancesResponseBodyInstancesResourceSpec,
      storage: DescribeInstancesResponseBodyInstancesStorage,
      tags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesTags },
      uid: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequestTags extends $tea.Model {
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

export class DescribeNamespacesResponseBodyNamespacesResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyNamespacesResourceUsed extends $tea.Model {
  cpu?: number;
  cu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      cu: 'Cu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      cu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyNamespacesTags extends $tea.Model {
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

export class DescribeNamespacesResponseBodyNamespaces extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  ha?: boolean;
  namespace?: string;
  resourceSpec?: DescribeNamespacesResponseBodyNamespacesResourceSpec;
  resourceUsed?: DescribeNamespacesResponseBodyNamespacesResourceUsed;
  status?: string;
  tags?: DescribeNamespacesResponseBodyNamespacesTags[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ha: 'Ha',
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
      resourceUsed: 'ResourceUsed',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      ha: 'boolean',
      namespace: 'string',
      resourceSpec: DescribeNamespacesResponseBodyNamespacesResourceSpec,
      resourceUsed: DescribeNamespacesResponseBodyNamespacesResourceUsed,
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyNamespacesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportedRegionsResponseBodyRegions extends $tea.Model {
  region?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      regionName: 'string',
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

export class ModifyPrepayInstanceSpecRequestHaResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequestNamespaceResourceSpecs extends $tea.Model {
  namespace?: string;
  resourceSpec?: QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resourceSpec: QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBodyPriceInfoDepreciateInfo extends $tea.Model {
  cheapRate?: string;
  cheapStandAmount?: string;
  isShow?: boolean;
  monthPrice?: string;
  originalStandAmount?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      isShow: 'IsShow',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'string',
      cheapStandAmount: 'string',
      isShow: 'boolean',
      monthPrice: 'string',
      originalStandAmount: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions extends $tea.Model {
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionNo?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBodyPriceInfo extends $tea.Model {
  code?: string;
  currency?: string;
  depreciateInfo?: QueryConvertInstancePriceResponseBodyPriceInfoDepreciateInfo;
  discountAmount?: number;
  isContractActivity?: boolean;
  message?: string;
  optionalPromotions?: QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  originalAmount?: number;
  rules?: QueryConvertInstancePriceResponseBodyPriceInfoRules[];
  standDiscountPrice?: string;
  standPrice?: string;
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      rules: 'Rules',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currency: 'string',
      depreciateInfo: QueryConvertInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryConvertInstancePriceResponseBodyPriceInfoRules },
      standDiscountPrice: 'string',
      standPrice: 'string',
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceRequestHaResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceRequestStorageOss extends $tea.Model {
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceRequestStorage extends $tea.Model {
  oss?: QueryCreateInstancePriceRequestStorageOss;
  static names(): { [key: string]: string } {
    return {
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: QueryCreateInstancePriceRequestStorageOss,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo extends $tea.Model {
  cheapRate?: string;
  cheapStandAmount?: string;
  isShow?: boolean;
  monthPrice?: string;
  originalStandAmount?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      isShow: 'IsShow',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'string',
      cheapStandAmount: 'string',
      isShow: 'boolean',
      monthPrice: 'string',
      originalStandAmount: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBodyPriceInfoOptionalPromotions extends $tea.Model {
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionNo?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBodyPriceInfo extends $tea.Model {
  code?: string;
  currency?: string;
  depreciateInfo?: QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo;
  discountAmount?: number;
  isContractActivity?: boolean;
  message?: string;
  optionalPromotions?: QueryCreateInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  originalAmount?: number;
  rules?: QueryCreateInstancePriceResponseBodyPriceInfoRules[];
  standDiscountPrice?: string;
  standPrice?: string;
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      rules: 'Rules',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currency: 'string',
      depreciateInfo: QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryCreateInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryCreateInstancePriceResponseBodyPriceInfoRules },
      standDiscountPrice: 'string',
      standPrice: 'string',
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceRequestHaResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceResponseBodyPriceInfoDepreciateInfo extends $tea.Model {
  cheapRate?: string;
  cheapStandAmount?: string;
  isShow?: boolean;
  monthPrice?: string;
  originalStandAmount?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      isShow: 'IsShow',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'string',
      cheapStandAmount: 'string',
      isShow: 'boolean',
      monthPrice: 'string',
      originalStandAmount: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceResponseBodyPriceInfoOptionalPromotions extends $tea.Model {
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionNo?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceResponseBodyPriceInfo extends $tea.Model {
  code?: string;
  currency?: string;
  depreciateInfo?: QueryModifyInstancePriceResponseBodyPriceInfoDepreciateInfo;
  discountAmount?: number;
  isContractActivity?: boolean;
  message?: string;
  optionalPromotions?: QueryModifyInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  originalAmount?: number;
  rules?: QueryModifyInstancePriceResponseBodyPriceInfoRules[];
  standDiscountPrice?: string;
  standPrice?: string;
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      rules: 'Rules',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currency: 'string',
      depreciateInfo: QueryModifyInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyInstancePriceResponseBodyPriceInfoRules },
      standDiscountPrice: 'string',
      standPrice: 'string',
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceResponseBodyPriceInfoDepreciateInfo extends $tea.Model {
  cheapRate?: string;
  cheapStandAmount?: string;
  isShow?: boolean;
  monthPrice?: string;
  originalStandAmount?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      isShow: 'IsShow',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'string',
      cheapStandAmount: 'string',
      isShow: 'boolean',
      monthPrice: 'string',
      originalStandAmount: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceResponseBodyPriceInfoOptionalPromotions extends $tea.Model {
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionNo?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceResponseBodyPriceInfo extends $tea.Model {
  code?: string;
  currency?: string;
  depreciateInfo?: QueryRenewInstancePriceResponseBodyPriceInfoDepreciateInfo;
  discountAmount?: number;
  isContractActivity?: boolean;
  message?: string;
  optionalPromotions?: QueryRenewInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  originalAmount?: number;
  rules?: QueryRenewInstancePriceResponseBodyPriceInfoRules[];
  standDiscountPrice?: string;
  standPrice?: string;
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      rules: 'Rules',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currency: 'string',
      depreciateInfo: QueryRenewInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryRenewInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryRenewInstancePriceResponseBodyPriceInfoRules },
      standDiscountPrice: 'string',
      standPrice: 'string',
      tradeAmount: 'number',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("foasconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async convertInstanceWithOptions(tmpReq: ConvertInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConvertInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new ConvertInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.namespaceResourceSpecs)) {
      request.namespaceResourceSpecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaceResourceSpecs, "NamespaceResourceSpecs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isAutoRenew)) {
      body["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!Util.isUnset(request.namespaceResourceSpecsShrink)) {
      body["NamespaceResourceSpecs"] = request.namespaceResourceSpecsShrink;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConvertInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertInstanceResponse>(await this.callApi(params, req, runtime), new ConvertInstanceResponse({}));
  }

  async convertInstance(request: ConvertInstanceRequest): Promise<ConvertInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertInstanceWithOptions(request, runtime);
  }

  async createInstanceWithOptions(tmpReq: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!Util.isUnset(tmpReq.haVSwitchIds)) {
      request.haVSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVSwitchIds, "HaVSwitchIds", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    if (!Util.isUnset(tmpReq.storage)) {
      request.storageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storage, "Storage", "json");
    }

    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    if (!Util.isUnset(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.architectureType)) {
      body["ArchitectureType"] = request.architectureType;
    }

    if (!Util.isUnset(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!Util.isUnset(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!Util.isUnset(request.haVSwitchIdsShrink)) {
      body["HaVSwitchIds"] = request.haVSwitchIdsShrink;
    }

    if (!Util.isUnset(request.haZoneId)) {
      body["HaZoneId"] = request.haZoneId;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.monitorType)) {
      body["MonitorType"] = request.monitorType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    if (!Util.isUnset(request.storageShrink)) {
      body["Storage"] = request.storageShrink;
    }

    if (!Util.isUnset(request.tagShrink)) {
      body["Tag"] = request.tagShrink;
    }

    if (!Util.isUnset(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    if (!Util.isUnset(request.vSwitchIdsShrink)) {
      body["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createNamespaceWithOptions(tmpReq: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateNamespaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(tmpReq: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeNamespacesWithOptions(tmpReq: DescribeNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeNamespacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaces",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespacesResponse>(await this.callApi(params, req, runtime), new DescribeNamespacesResponse({}));
  }

  async describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNamespacesWithOptions(request, runtime);
  }

  async describeSupportedRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeSupportedRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeSupportedRegions",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSupportedRegionsResponse>(await this.callApi(params, req, runtime), new DescribeSupportedRegionsResponse({}));
  }

  async describeSupportedRegions(): Promise<DescribeSupportedRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportedRegionsWithOptions(runtime);
  }

  async describeSupportedZonesWithOptions(request: DescribeSupportedZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSupportedZonesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSupportedZones",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSupportedZonesResponse>(await this.callApi(params, req, runtime), new DescribeSupportedZonesResponse({}));
  }

  async describeSupportedZones(request: DescribeSupportedZonesRequest): Promise<DescribeSupportedZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportedZonesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2021-10-28",
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

  /**
    * @deprecated : ModifyPrepayInstanceSpec is deprecated, please use foasconsole::2021-10-28::ModifyInstanceSpec instead.
    *
    * @param tmpReq ModifyPrepayInstanceSpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyPrepayInstanceSpecResponse
   */
  // Deprecated
  async modifyPrepayInstanceSpecWithOptions(tmpReq: ModifyPrepayInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrepayInstanceSpecResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyPrepayInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!Util.isUnset(tmpReq.haVSwitchIds)) {
      request.haVSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVSwitchIds, "HaVSwitchIds", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!Util.isUnset(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!Util.isUnset(request.haVSwitchIdsShrink)) {
      body["HaVSwitchIds"] = request.haVSwitchIdsShrink;
    }

    if (!Util.isUnset(request.haZoneId)) {
      body["HaZoneId"] = request.haZoneId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPrepayInstanceSpec",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPrepayInstanceSpecResponse>(await this.callApi(params, req, runtime), new ModifyPrepayInstanceSpecResponse({}));
  }

  /**
    * @deprecated : ModifyPrepayInstanceSpec is deprecated, please use foasconsole::2021-10-28::ModifyInstanceSpec instead.
    *
    * @param request ModifyPrepayInstanceSpecRequest
    * @return ModifyPrepayInstanceSpecResponse
   */
  // Deprecated
  async modifyPrepayInstanceSpec(request: ModifyPrepayInstanceSpecRequest): Promise<ModifyPrepayInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrepayInstanceSpecWithOptions(request, runtime);
  }

  /**
    * @deprecated : ModifyPrepayNamespaceSpec is deprecated, please use foasconsole::2021-10-28::ModifyNamespaceSpec instead.
    *
    * @param tmpReq ModifyPrepayNamespaceSpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyPrepayNamespaceSpecResponse
   */
  // Deprecated
  async modifyPrepayNamespaceSpecWithOptions(tmpReq: ModifyPrepayNamespaceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrepayNamespaceSpecResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyPrepayNamespaceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPrepayNamespaceSpec",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPrepayNamespaceSpecResponse>(await this.callApi(params, req, runtime), new ModifyPrepayNamespaceSpecResponse({}));
  }

  /**
    * @deprecated : ModifyPrepayNamespaceSpec is deprecated, please use foasconsole::2021-10-28::ModifyNamespaceSpec instead.
    *
    * @param request ModifyPrepayNamespaceSpecRequest
    * @return ModifyPrepayNamespaceSpecResponse
   */
  // Deprecated
  async modifyPrepayNamespaceSpec(request: ModifyPrepayNamespaceSpecRequest): Promise<ModifyPrepayNamespaceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrepayNamespaceSpecWithOptions(request, runtime);
  }

  async queryConvertInstancePriceWithOptions(tmpReq: QueryConvertInstancePriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryConvertInstancePriceResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryConvertInstancePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.namespaceResourceSpecs)) {
      request.namespaceResourceSpecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaceResourceSpecs, "NamespaceResourceSpecs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isAutoRenew)) {
      body["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!Util.isUnset(request.namespaceResourceSpecsShrink)) {
      body["NamespaceResourceSpecs"] = request.namespaceResourceSpecsShrink;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryConvertInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryConvertInstancePriceResponse>(await this.callApi(params, req, runtime), new QueryConvertInstancePriceResponse({}));
  }

  async queryConvertInstancePrice(request: QueryConvertInstancePriceRequest): Promise<QueryConvertInstancePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConvertInstancePriceWithOptions(request, runtime);
  }

  async queryCreateInstancePriceWithOptions(tmpReq: QueryCreateInstancePriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryCreateInstancePriceResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryCreateInstancePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    if (!Util.isUnset(tmpReq.storage)) {
      request.storageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storage, "Storage", "json");
    }

    if (!Util.isUnset(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.architectureType)) {
      body["ArchitectureType"] = request.architectureType;
    }

    if (!Util.isUnset(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!Util.isUnset(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.promotionCode)) {
      body["PromotionCode"] = request.promotionCode;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    if (!Util.isUnset(request.storageShrink)) {
      body["Storage"] = request.storageShrink;
    }

    if (!Util.isUnset(request.usePromotionCode)) {
      body["UsePromotionCode"] = request.usePromotionCode;
    }

    if (!Util.isUnset(request.vSwitchIdsShrink)) {
      body["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryCreateInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCreateInstancePriceResponse>(await this.callApi(params, req, runtime), new QueryCreateInstancePriceResponse({}));
  }

  async queryCreateInstancePrice(request: QueryCreateInstancePriceRequest): Promise<QueryCreateInstancePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCreateInstancePriceWithOptions(request, runtime);
  }

  async queryModifyInstancePriceWithOptions(tmpReq: QueryModifyInstancePriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryModifyInstancePriceResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryModifyInstancePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.haResourceSpec)) {
      request.haResourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haResourceSpec, "HaResourceSpec", "json");
    }

    if (!Util.isUnset(tmpReq.haVSwitchIds)) {
      request.haVSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVSwitchIds, "HaVSwitchIds", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSpec)) {
      request.resourceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSpec, "ResourceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ha)) {
      body["Ha"] = request.ha;
    }

    if (!Util.isUnset(request.haResourceSpecShrink)) {
      body["HaResourceSpec"] = request.haResourceSpecShrink;
    }

    if (!Util.isUnset(request.haVSwitchIdsShrink)) {
      body["HaVSwitchIds"] = request.haVSwitchIdsShrink;
    }

    if (!Util.isUnset(request.haZoneId)) {
      body["HaZoneId"] = request.haZoneId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceSpecShrink)) {
      body["ResourceSpec"] = request.resourceSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryModifyInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryModifyInstancePriceResponse>(await this.callApi(params, req, runtime), new QueryModifyInstancePriceResponse({}));
  }

  async queryModifyInstancePrice(request: QueryModifyInstancePriceRequest): Promise<QueryModifyInstancePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryModifyInstancePriceWithOptions(request, runtime);
  }

  async queryRenewInstancePriceWithOptions(request: QueryRenewInstancePriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryRenewInstancePriceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryRenewInstancePrice",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRenewInstancePriceResponse>(await this.callApi(params, req, runtime), new QueryRenewInstancePriceResponse({}));
  }

  async queryRenewInstancePrice(request: QueryRenewInstancePriceRequest): Promise<QueryRenewInstancePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRenewInstancePriceWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2021-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "TagResources",
      version: "2021-10-28",
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

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

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
      version: "2021-10-28",
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

}
