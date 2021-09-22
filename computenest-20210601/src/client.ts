// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DeleteServiceInstancesRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  serviceInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponseBody extends $tea.Model {
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

export class DeleteServiceInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceRequest extends $tea.Model {
  serviceInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceInstanceId: 'ServiceInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBody extends $tea.Model {
  outputs?: string;
  status?: string;
  templateName?: string;
  updateTime?: string;
  progress?: number;
  parameters?: string;
  requestId?: string;
  serviceInstanceId?: string;
  createTime?: string;
  statusDetail?: string;
  resources?: string;
  service?: GetServiceInstanceResponseBodyService;
  operationStartTime?: string;
  operationEndTime?: string;
  operatedServiceInstanceId?: string;
  enableInstanceOps?: boolean;
  isOperated?: boolean;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      status: 'Status',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      progress: 'Progress',
      parameters: 'Parameters',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      createTime: 'CreateTime',
      statusDetail: 'StatusDetail',
      resources: 'Resources',
      service: 'Service',
      operationStartTime: 'OperationStartTime',
      operationEndTime: 'OperationEndTime',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      enableInstanceOps: 'EnableInstanceOps',
      isOperated: 'IsOperated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      status: 'string',
      templateName: 'string',
      updateTime: 'string',
      progress: 'number',
      parameters: 'string',
      requestId: 'string',
      serviceInstanceId: 'string',
      createTime: 'string',
      statusDetail: 'string',
      resources: 'string',
      service: GetServiceInstanceResponseBodyService,
      operationStartTime: 'string',
      operationEndTime: 'string',
      operatedServiceInstanceId: 'string',
      enableInstanceOps: 'boolean',
      isOperated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsRequest extends $tea.Model {
  regionId?: string;
  maxResults?: string;
  nextToken?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  serviceInstancesLogs?: ListServiceInstanceLogsResponseBodyServiceInstancesLogs[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      serviceInstancesLogs: 'ServiceInstancesLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
      serviceInstancesLogs: { 'type': 'array', 'itemType': ListServiceInstanceLogsResponseBodyServiceInstancesLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceInstanceLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceInstanceLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequest extends $tea.Model {
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  parameters?: { [key: string]: any };
  clientToken?: string;
  enableInstanceOps?: boolean;
  enableAccountOps?: boolean;
  templateName?: string;
  operationMetadata?: CreateServiceInstanceRequestOperationMetadata;
  requestTags?: CreateServiceInstanceRequestRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      parameters: 'Parameters',
      clientToken: 'ClientToken',
      enableInstanceOps: 'EnableInstanceOps',
      enableAccountOps: 'EnableAccountOps',
      templateName: 'TemplateName',
      operationMetadata: 'OperationMetadata',
      requestTags: 'RequestTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      enableInstanceOps: 'boolean',
      enableAccountOps: 'boolean',
      templateName: 'string',
      operationMetadata: CreateServiceInstanceRequestOperationMetadata,
      requestTags: { 'type': 'array', 'itemType': CreateServiceInstanceRequestRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequest extends $tea.Model {
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  parametersShrink?: string;
  clientToken?: string;
  enableInstanceOps?: boolean;
  enableAccountOps?: boolean;
  templateName?: string;
  operationMetadata?: CreateServiceInstanceShrinkRequestOperationMetadata;
  requestTags?: CreateServiceInstanceShrinkRequestRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      parametersShrink: 'Parameters',
      clientToken: 'ClientToken',
      enableInstanceOps: 'EnableInstanceOps',
      enableAccountOps: 'EnableAccountOps',
      templateName: 'TemplateName',
      operationMetadata: 'OperationMetadata',
      requestTags: 'RequestTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      parametersShrink: 'string',
      clientToken: 'string',
      enableInstanceOps: 'boolean',
      enableAccountOps: 'boolean',
      templateName: 'string',
      operationMetadata: CreateServiceInstanceShrinkRequestOperationMetadata,
      requestTags: { 'type': 'array', 'itemType': CreateServiceInstanceShrinkRequestRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  serviceInstanceId?: string;
  regionId?: string;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceInstanceId: 'ServiceInstanceId',
      regionId: 'RegionId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceInstanceId: 'string',
      regionId: 'string',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBody extends $tea.Model {
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

export class ContinueDeployServiceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ContinueDeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ContinueDeployServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableOperationServiceInstanceRequest extends $tea.Model {
  serviceInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceInstanceId: 'ServiceInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableOperationServiceInstanceResponseBody extends $tea.Model {
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

export class DisableOperationServiceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableOperationServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableOperationServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  serviceInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceInstanceId: 'ServiceInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceResponseBody extends $tea.Model {
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

export class DeployServiceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: string;
  nextToken?: string;
  filter?: ListServiceInstancesRequestFilter[];
  requestTags?: ListServiceInstancesRequestRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      filter: 'Filter',
      requestTags: 'RequestTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
      requestTags: { 'type': 'array', 'itemType': ListServiceInstancesRequestRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  maxResults?: string;
  serviceInstances?: ListServiceInstancesResponseBodyServiceInstances[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      serviceInstances: 'ServiceInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      maxResults: 'string',
      serviceInstances: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  requestId?: string;
  nextToken?: string;
  policies?: ListPoliciesResponseBodyPolicies[];
  maxResults?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      policies: 'Policies',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      policies: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicies },
      maxResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInuseServicesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: string;
  nextToken?: string;
  filter?: ListInuseServicesRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      filter: { 'type': 'array', 'itemType': ListInuseServicesRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInuseServicesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  maxResults?: string;
  services?: ListInuseServicesResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      maxResults: 'string',
      services: { 'type': 'array', 'itemType': ListInuseServicesResponseBodyServices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInuseServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInuseServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInuseServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOperationServiceInstanceRequest extends $tea.Model {
  serviceInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceInstanceId: 'ServiceInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOperationServiceInstanceResponseBody extends $tea.Model {
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

export class EnableOperationServiceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableOperationServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableOperationServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
  status?: string;
  deployMetadata?: string;
  publishTime?: string;
  requestId?: string;
  version?: string;
  deployType?: string;
  serviceId?: string;
  supplierUrl?: string;
  serviceType?: string;
  supplierName?: string;
  serviceInfos?: GetServiceResponseBodyServiceInfos[];
  commodityCode?: string;
  isSupportOperated?: boolean;
  policyNames?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deployMetadata: 'DeployMetadata',
      publishTime: 'PublishTime',
      requestId: 'RequestId',
      version: 'Version',
      deployType: 'DeployType',
      serviceId: 'ServiceId',
      supplierUrl: 'SupplierUrl',
      serviceType: 'ServiceType',
      supplierName: 'SupplierName',
      serviceInfos: 'ServiceInfos',
      commodityCode: 'CommodityCode',
      isSupportOperated: 'IsSupportOperated',
      policyNames: 'PolicyNames',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      deployMetadata: 'string',
      publishTime: 'string',
      requestId: 'string',
      version: 'string',
      deployType: 'string',
      serviceId: 'string',
      supplierUrl: 'string',
      serviceType: 'string',
      supplierName: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfos },
      commodityCode: 'string',
      isSupportOperated: 'boolean',
      policyNames: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceServiceInfos extends $tea.Model {
  locale?: string;
  image?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'Locale',
      image: 'Image',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      image: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyService extends $tea.Model {
  status?: string;
  publishTime?: string;
  version?: string;
  deployMetadata?: string;
  deployType?: string;
  serviceId?: string;
  supplierUrl?: string;
  serviceType?: string;
  supplierName?: string;
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      publishTime: 'PublishTime',
      version: 'Version',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      serviceId: 'ServiceId',
      supplierUrl: 'SupplierUrl',
      serviceType: 'ServiceType',
      supplierName: 'SupplierName',
      serviceInfos: 'ServiceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      publishTime: 'string',
      version: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      serviceId: 'string',
      supplierUrl: 'string',
      serviceType: 'string',
      supplierName: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceServiceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponseBodyServiceInstancesLogs extends $tea.Model {
  timestamp?: string;
  serviceInstanceId?: string;
  source?: string;
  phase?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      serviceInstanceId: 'ServiceInstanceId',
      source: 'Source',
      phase: 'Phase',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
      serviceInstanceId: 'string',
      source: 'string',
      phase: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestOperationMetadata extends $tea.Model {
  startTime?: string;
  endTime?: string;
  resources?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestRequestTags extends $tea.Model {
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

export class CreateServiceInstanceShrinkRequestOperationMetadata extends $tea.Model {
  startTime?: string;
  endTime?: string;
  resources?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequestRequestTags extends $tea.Model {
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

export class ListServiceInstancesRequestFilter extends $tea.Model {
  value?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestRequestTags extends $tea.Model {
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

export class ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos extends $tea.Model {
  locale?: string;
  image?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'Locale',
      image: 'Image',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      image: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesService extends $tea.Model {
  status?: string;
  publishTime?: string;
  version?: string;
  deployType?: string;
  serviceId?: string;
  supplierUrl?: string;
  serviceType?: string;
  supplierName?: string;
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      publishTime: 'PublishTime',
      version: 'Version',
      deployType: 'DeployType',
      serviceId: 'ServiceId',
      supplierUrl: 'SupplierUrl',
      serviceType: 'ServiceType',
      supplierName: 'SupplierName',
      serviceInfos: 'ServiceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      publishTime: 'string',
      version: 'string',
      deployType: 'string',
      serviceId: 'string',
      supplierUrl: 'string',
      serviceType: 'string',
      supplierName: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstances extends $tea.Model {
  status?: string;
  outputs?: string;
  updateTime?: string;
  parameters?: string;
  serviceInstanceId?: string;
  createTime?: string;
  statusDetail?: string;
  progress?: number;
  resources?: string;
  templateName?: string;
  operatedServiceInstanceId?: string;
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  operationStartTime?: string;
  operationEndTime?: string;
  enableInstanceOps?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      outputs: 'Outputs',
      updateTime: 'UpdateTime',
      parameters: 'Parameters',
      serviceInstanceId: 'ServiceInstanceId',
      createTime: 'CreateTime',
      statusDetail: 'StatusDetail',
      progress: 'Progress',
      resources: 'Resources',
      templateName: 'TemplateName',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      service: 'Service',
      operationStartTime: 'OperationStartTime',
      operationEndTime: 'OperationEndTime',
      enableInstanceOps: 'EnableInstanceOps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      outputs: 'string',
      updateTime: 'string',
      parameters: 'string',
      serviceInstanceId: 'string',
      createTime: 'string',
      statusDetail: 'string',
      progress: 'number',
      resources: 'string',
      templateName: 'string',
      operatedServiceInstanceId: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      operationStartTime: 'string',
      operationEndTime: 'string',
      enableInstanceOps: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicies extends $tea.Model {
  description?: string;
  policyName?: string;
  policyType?: string;
  policyDocument?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      policyDocument: 'PolicyDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      policyName: 'string',
      policyType: 'string',
      policyDocument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInuseServicesRequestFilter extends $tea.Model {
  value?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInuseServicesResponseBodyServicesServiceInfos extends $tea.Model {
  locale?: string;
  image?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'Locale',
      image: 'Image',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      image: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInuseServicesResponseBodyServices extends $tea.Model {
  status?: string;
  publishTime?: string;
  version?: string;
  deployType?: string;
  serviceId?: string;
  supplierUrl?: string;
  serviceType?: string;
  supplierName?: string;
  serviceInfos?: ListInuseServicesResponseBodyServicesServiceInfos[];
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      publishTime: 'PublishTime',
      version: 'Version',
      deployType: 'DeployType',
      serviceId: 'ServiceId',
      supplierUrl: 'SupplierUrl',
      serviceType: 'ServiceType',
      supplierName: 'SupplierName',
      serviceInfos: 'ServiceInfos',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      publishTime: 'string',
      version: 'string',
      deployType: 'string',
      serviceId: 'string',
      supplierUrl: 'string',
      serviceType: 'string',
      supplierName: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListInuseServicesResponseBodyServicesServiceInfos },
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfos extends $tea.Model {
  locale?: string;
  image?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'Locale',
      image: 'Image',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      image: 'string',
      name: 'string',
      shortDescription: 'string',
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
    this._endpoint = this.getEndpoint("computenest", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async deleteServiceInstancesWithOptions(request: DeleteServiceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServiceInstancesResponse>(await this.doRPCRequest("DeleteServiceInstances", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServiceInstancesResponse({}));
  }

  async deleteServiceInstances(request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  async getServiceInstanceWithOptions(request: GetServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceInstanceResponse>(await this.doRPCRequest("GetServiceInstance", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceInstanceResponse({}));
  }

  async getServiceInstance(request: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  async listServiceInstanceLogsWithOptions(request: ListServiceInstanceLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceInstanceLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServiceInstanceLogsResponse>(await this.doRPCRequest("ListServiceInstanceLogs", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListServiceInstanceLogsResponse({}));
  }

  async listServiceInstanceLogs(request: ListServiceInstanceLogsRequest): Promise<ListServiceInstanceLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceInstanceLogsWithOptions(request, runtime);
  }

  async createServiceInstanceWithOptions(tmpReq: CreateServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceInstanceResponse>(await this.doRPCRequest("CreateServiceInstance", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceInstanceResponse({}));
  }

  async createServiceInstance(request: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  async continueDeployServiceInstanceWithOptions(request: ContinueDeployServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ContinueDeployServiceInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ContinueDeployServiceInstanceResponse>(await this.doRPCRequest("ContinueDeployServiceInstance", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ContinueDeployServiceInstanceResponse({}));
  }

  async continueDeployServiceInstance(request: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  async disableOperationServiceInstanceWithOptions(request: DisableOperationServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DisableOperationServiceInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableOperationServiceInstanceResponse>(await this.doRPCRequest("DisableOperationServiceInstance", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableOperationServiceInstanceResponse({}));
  }

  async disableOperationServiceInstance(request: DisableOperationServiceInstanceRequest): Promise<DisableOperationServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableOperationServiceInstanceWithOptions(request, runtime);
  }

  async deployServiceInstanceWithOptions(request: DeployServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeployServiceInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployServiceInstanceResponse>(await this.doRPCRequest("DeployServiceInstance", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeployServiceInstanceResponse({}));
  }

  async deployServiceInstance(request: DeployServiceInstanceRequest): Promise<DeployServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployServiceInstanceWithOptions(request, runtime);
  }

  async listServiceInstancesWithOptions(request: ListServiceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServiceInstancesResponse>(await this.doRPCRequest("ListServiceInstances", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListServiceInstancesResponse({}));
  }

  async listServiceInstances(request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPoliciesResponse>(await this.doRPCRequest("ListPolicies", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPoliciesResponse({}));
  }

  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  async listInuseServicesWithOptions(request: ListInuseServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListInuseServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInuseServicesResponse>(await this.doRPCRequest("ListInuseServices", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInuseServicesResponse({}));
  }

  async listInuseServices(request: ListInuseServicesRequest): Promise<ListInuseServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInuseServicesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async enableOperationServiceInstanceWithOptions(request: EnableOperationServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<EnableOperationServiceInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableOperationServiceInstanceResponse>(await this.doRPCRequest("EnableOperationServiceInstance", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableOperationServiceInstanceResponse({}));
  }

  async enableOperationServiceInstance(request: EnableOperationServiceInstanceRequest): Promise<EnableOperationServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableOperationServiceInstanceWithOptions(request, runtime);
  }

  async getServiceWithOptions(request: GetServiceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceResponse>(await this.doRPCRequest("GetService", "2021-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceResponse({}));
  }

  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

}
