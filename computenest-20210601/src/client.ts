// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  option?: string[];
  parameters?: string;
  regionId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      option: 'Option',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      option: { 'type': 'array', 'itemType': 'string' },
      parameters: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBody extends $tea.Model {
  dryRunResult?: ContinueDeployServiceInstanceResponseBodyDryRunResult;
  requestId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: ContinueDeployServiceInstanceResponseBodyDryRunResult,
      requestId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinueDeployServiceInstanceResponseBody;
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
      body: ContinueDeployServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  commodity?: CreateServiceInstanceRequestCommodity;
  contactGroup?: string;
  dryRun?: boolean;
  enableInstanceOps?: boolean;
  enableUserPrometheus?: boolean;
  name?: string;
  operationMetadata?: CreateServiceInstanceRequestOperationMetadata;
  parameters?: { [key: string]: any };
  regionId?: string;
  resourceAutoPay?: boolean;
  resourceGroupId?: string;
  serviceId?: string;
  serviceVersion?: string;
  specificationCode?: string;
  specificationName?: string;
  tag?: CreateServiceInstanceRequestTag[];
  templateName?: string;
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      contactGroup: 'ContactGroup',
      dryRun: 'DryRun',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      name: 'Name',
      operationMetadata: 'OperationMetadata',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceAutoPay: 'ResourceAutoPay',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: CreateServiceInstanceRequestCommodity,
      contactGroup: 'string',
      dryRun: 'boolean',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      name: 'string',
      operationMetadata: CreateServiceInstanceRequestOperationMetadata,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceAutoPay: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationCode: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceRequestTag },
      templateName: 'string',
      trialType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequest extends $tea.Model {
  clientToken?: string;
  commodity?: CreateServiceInstanceShrinkRequestCommodity;
  contactGroup?: string;
  dryRun?: boolean;
  enableInstanceOps?: boolean;
  enableUserPrometheus?: boolean;
  name?: string;
  operationMetadata?: CreateServiceInstanceShrinkRequestOperationMetadata;
  parametersShrink?: string;
  regionId?: string;
  resourceAutoPay?: boolean;
  resourceGroupId?: string;
  serviceId?: string;
  serviceVersion?: string;
  specificationCode?: string;
  specificationName?: string;
  tag?: CreateServiceInstanceShrinkRequestTag[];
  templateName?: string;
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      contactGroup: 'ContactGroup',
      dryRun: 'DryRun',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      name: 'Name',
      operationMetadata: 'OperationMetadata',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceAutoPay: 'ResourceAutoPay',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: CreateServiceInstanceShrinkRequestCommodity,
      contactGroup: 'string',
      dryRun: 'boolean',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      name: 'string',
      operationMetadata: CreateServiceInstanceShrinkRequestOperationMetadata,
      parametersShrink: 'string',
      regionId: 'string',
      resourceAutoPay: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationCode: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceShrinkRequestTag },
      templateName: 'string',
      trialType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponseBody extends $tea.Model {
  marketInstanceId?: string;
  orderId?: string;
  requestId?: string;
  serviceInstanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      marketInstanceId: 'MarketInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceInstanceResponseBody;
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
      body: CreateServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceInstancesResponseBody;
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
      body: DeleteServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceRequest extends $tea.Model {
  marketInstanceId?: string;
  regionId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      marketInstanceId: 'MarketInstanceId',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketInstanceId: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBody extends $tea.Model {
  bizStatus?: string;
  components?: string;
  createTime?: string;
  enableInstanceOps?: boolean;
  enableUserPrometheus?: boolean;
  endTime?: string;
  grafanaDashBoardUrl?: string;
  isOperated?: boolean;
  licenseEndTime?: string;
  marketInstanceId?: string;
  name?: string;
  networkConfig?: GetServiceInstanceResponseBodyNetworkConfig;
  operatedServiceInstanceId?: string;
  operationEndTime?: string;
  operationStartTime?: string;
  outputs?: string;
  parameters?: string;
  payType?: string;
  predefinedParameterName?: string;
  progress?: number;
  requestId?: string;
  resourceGroupId?: string;
  resources?: string;
  service?: GetServiceInstanceResponseBodyService;
  serviceInstanceId?: string;
  serviceType?: string;
  source?: string;
  status?: string;
  statusDetail?: string;
  supplierUid?: number;
  tags?: GetServiceInstanceResponseBodyTags[];
  templateName?: string;
  updateTime?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      components: 'Components',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      isOperated: 'IsOperated',
      licenseEndTime: 'LicenseEndTime',
      marketInstanceId: 'MarketInstanceId',
      name: 'Name',
      networkConfig: 'NetworkConfig',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      predefinedParameterName: 'PredefinedParameterName',
      progress: 'Progress',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierUid: 'SupplierUid',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      components: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      isOperated: 'boolean',
      licenseEndTime: 'string',
      marketInstanceId: 'string',
      name: 'string',
      networkConfig: GetServiceInstanceResponseBodyNetworkConfig,
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      predefinedParameterName: 'string',
      progress: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      service: GetServiceInstanceResponseBodyService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      supplierUid: 'number',
      tags: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceInstanceResponseBody;
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
      body: GetServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsRequest extends $tea.Model {
  clientToken?: string;
  deployRegionId?: string;
  enablePrivateVpcConnection?: boolean;
  parameters?: GetServiceTemplateParameterConstraintsRequestParameters[];
  regionId?: string;
  serviceId?: string;
  serviceInstanceId?: string;
  serviceVersion?: string;
  specificationName?: string;
  templateName?: string;
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deployRegionId: 'DeployRegionId',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deployRegionId: 'string',
      enablePrivateVpcConnection: 'boolean',
      parameters: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsRequestParameters },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBody extends $tea.Model {
  familyConstraints?: string[];
  parameterConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      familyConstraints: 'FamilyConstraints',
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familyConstraints: { 'type': 'array', 'itemType': 'string' },
      parameterConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceTemplateParameterConstraintsResponseBody;
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
      body: GetServiceTemplateParameterConstraintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsRequest extends $tea.Model {
  logSource?: string;
  logstore?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      logSource: 'LogSource',
      logstore: 'Logstore',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSource: 'string',
      logstore: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  serviceInstancesLogs?: ListServiceInstanceLogsResponseBodyServiceInstancesLogs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstancesLogs: 'ServiceInstancesLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstancesLogs: { 'type': 'array', 'itemType': ListServiceInstanceLogsResponseBodyServiceInstancesLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstanceLogsResponseBody;
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
      body: ListServiceInstanceLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesRequest extends $tea.Model {
  expireTimeEnd?: string;
  expireTimeStart?: string;
  maxResults?: number;
  nextToken?: string;
  payType?: string;
  regionId?: string;
  resourceARN?: string[];
  serviceInstanceId?: string;
  serviceInstanceResourceType?: string;
  tag?: ListServiceInstanceResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      expireTimeEnd: 'ExpireTimeEnd',
      expireTimeStart: 'ExpireTimeStart',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      serviceInstanceId: 'ServiceInstanceId',
      serviceInstanceResourceType: 'ServiceInstanceResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTimeEnd: 'string',
      expireTimeStart: 'string',
      maxResults: 'number',
      nextToken: 'string',
      payType: 'string',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      serviceInstanceId: 'string',
      serviceInstanceResourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListServiceInstanceResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  resources?: ListServiceInstanceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListServiceInstanceResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstanceResourcesResponseBody;
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
      body: ListServiceInstanceResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $tea.Model {
  filter?: ListServiceInstancesRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  tag?: ListServiceInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListServiceInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  serviceInstances?: ListServiceInstancesResponseBodyServiceInstances[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstances: 'ServiceInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstances: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstances },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstancesResponseBody;
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
      body: ListServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  serviceInstanceId?: string;
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
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceResponseBody extends $tea.Model {
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

export class RestartServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartServiceInstanceResponseBody;
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
      body: RestartServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  serviceInstanceId?: string;
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
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceResponseBody extends $tea.Model {
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

export class StartServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartServiceInstanceResponseBody;
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
      body: StartServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  serviceInstanceId?: string;
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
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceResponseBody extends $tea.Model {
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

export class StopServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopServiceInstanceResponseBody;
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
      body: StopServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecRequest extends $tea.Model {
  clientToken?: string;
  commodity?: UpdateServiceInstanceSpecRequestCommodity;
  dryRun?: boolean;
  enableUserPrometheus?: boolean;
  operationName?: string;
  parameters?: { [key: string]: any };
  predefinedParametersName?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      dryRun: 'DryRun',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parameters: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: UpdateServiceInstanceSpecRequestCommodity,
      dryRun: 'boolean',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecShrinkRequest extends $tea.Model {
  clientToken?: string;
  commodity?: UpdateServiceInstanceSpecShrinkRequestCommodity;
  dryRun?: boolean;
  enableUserPrometheus?: boolean;
  operationName?: string;
  parametersShrink?: string;
  predefinedParametersName?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      dryRun: 'DryRun',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parametersShrink: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: UpdateServiceInstanceSpecShrinkRequestCommodity,
      dryRun: 'boolean',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parametersShrink: 'string',
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceSpecResponseBody;
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
      body: UpdateServiceInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBodyDryRunResult extends $tea.Model {
  parametersAllowedToBeModified?: string[];
  parametersConditionallyAllowedToBeModified?: string[];
  parametersNotAllowedToBeModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestCommodity extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  payPeriod?: number;
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestOperationMetadata extends $tea.Model {
  endTime?: string;
  extraInfo?: string;
  resources?: string;
  serviceInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extraInfo: 'ExtraInfo',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extraInfo: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestTag extends $tea.Model {
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

export class CreateServiceInstanceShrinkRequestCommodity extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  payPeriod?: number;
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequestOperationMetadata extends $tea.Model {
  endTime?: string;
  extraInfo?: string;
  resources?: string;
  serviceInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extraInfo: 'ExtraInfo',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extraInfo: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequestTag extends $tea.Model {
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

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs extends $tea.Model {
  connectBandwidth?: number;
  domainName?: string;
  endpointIps?: string[];
  ingressEndpointStatus?: string;
  networkServiceStatus?: string;
  regionId?: string;
  securityGroups?: string[];
  vSwitches?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectBandwidth: 'ConnectBandwidth',
      domainName: 'DomainName',
      endpointIps: 'EndpointIps',
      ingressEndpointStatus: 'IngressEndpointStatus',
      networkServiceStatus: 'NetworkServiceStatus',
      regionId: 'RegionId',
      securityGroups: 'SecurityGroups',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectBandwidth: 'number',
      domainName: 'string',
      endpointIps: { 'type': 'array', 'itemType': 'string' },
      ingressEndpointStatus: 'string',
      networkServiceStatus: 'string',
      regionId: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections extends $tea.Model {
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  endpointId?: string;
  privateZoneId?: string;
  privateZoneName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      privateZoneId: 'PrivateZoneId',
      privateZoneName: 'PrivateZoneName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      privateZoneId: 'string',
      privateZoneName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $tea.Model {
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfig extends $tea.Model {
  endpointId?: string;
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  privateZoneId?: string;
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      privateVpcConnections: 'PrivateVpcConnections',
      privateZoneId: 'PrivateZoneId',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
      privateZoneId: 'string',
      reversePrivateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceServiceInfos extends $tea.Model {
  image?: string;
  locale?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyService extends $tea.Model {
  deployMetadata?: string;
  deployType?: string;
  publishTime?: string;
  serviceDocUrl?: string;
  serviceId?: string;
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  serviceProductUrl?: string;
  serviceType?: string;
  status?: string;
  supplierName?: string;
  supplierUrl?: string;
  upgradableServiceVersions?: string[];
  upgradeMetadata?: string;
  version?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceDocUrl: 'ServiceDocUrl',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      upgradableServiceVersions: 'UpgradableServiceVersions',
      upgradeMetadata: 'UpgradeMetadata',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      publishTime: 'string',
      serviceDocUrl: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      upgradableServiceVersions: { 'type': 'array', 'itemType': 'string' },
      upgradeMetadata: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyTags extends $tea.Model {
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

export class GetServiceTemplateParameterConstraintsRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints extends $tea.Model {
  allowedValues?: string[];
  propertyName?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      propertyName: 'PropertyName',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      propertyName: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors extends $tea.Model {
  errorMessage?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints extends $tea.Model {
  allowedValues?: string[];
  associationParameterNames?: string[];
  behavior?: string;
  behaviorReason?: string;
  originalConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
  parameterKey?: string;
  queryErrors?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      associationParameterNames: 'AssociationParameterNames',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
      queryErrors: 'QueryErrors',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      originalConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints },
      parameterKey: 'string',
      queryErrors: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponseBodyServiceInstancesLogs extends $tea.Model {
  content?: string;
  logType?: string;
  resourceId?: string;
  resourceType?: string;
  source?: string;
  status?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      logType: 'LogType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      source: 'Source',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      logType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      source: 'string',
      status: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesRequestTag extends $tea.Model {
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

export class ListServiceInstanceResourcesResponseBodyResources extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  payType?: string;
  productCode?: string;
  productType?: string;
  renewStatus?: string;
  renewalPeriod?: number;
  renewalPeriodUnit?: string;
  resourceARN?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewStatus: 'RenewStatus',
      renewalPeriod: 'RenewalPeriod',
      renewalPeriodUnit: 'RenewalPeriodUnit',
      resourceARN: 'ResourceARN',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      payType: 'string',
      productCode: 'string',
      productType: 'string',
      renewStatus: 'string',
      renewalPeriod: 'number',
      renewalPeriodUnit: 'string',
      resourceARN: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestFilter extends $tea.Model {
  name?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestTag extends $tea.Model {
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

export class ListServiceInstancesResponseBodyServiceInstancesServiceCommodity extends $tea.Model {
  saasBoostMetadata?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saasBoostMetadata: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos extends $tea.Model {
  image?: string;
  locale?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesService extends $tea.Model {
  commodity?: ListServiceInstancesResponseBodyServiceInstancesServiceCommodity;
  deployType?: string;
  publishTime?: string;
  serviceId?: string;
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  serviceType?: string;
  status?: string;
  supplierName?: string;
  supplierUrl?: string;
  version?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: ListServiceInstancesResponseBodyServiceInstancesServiceCommodity,
      deployType: 'string',
      publishTime: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesTags extends $tea.Model {
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

export class ListServiceInstancesResponseBodyServiceInstances extends $tea.Model {
  bizStatus?: string;
  createTime?: string;
  enableInstanceOps?: boolean;
  endTime?: string;
  marketInstanceId?: string;
  name?: string;
  operatedServiceInstanceId?: string;
  operationEndTime?: string;
  operationStartTime?: string;
  orderId?: string;
  outputs?: string;
  parameters?: string;
  payType?: string;
  progress?: number;
  resourceGroupId?: string;
  resources?: string;
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  serviceInstanceId?: string;
  serviceType?: string;
  source?: string;
  status?: string;
  statusDetail?: string;
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
  templateName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      endTime: 'EndTime',
      marketInstanceId: 'MarketInstanceId',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      orderId: 'OrderId',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      endTime: 'string',
      marketInstanceId: 'string',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      orderId: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      resources: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecRequestCommodity extends $tea.Model {
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecShrinkRequestCommodity extends $tea.Model {
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
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

  /**
   * @summary 资源组转组
   *
   * @param request ChangeResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * @summary 资源组转组
   *
   * @param request ChangeResourceGroupRequest
   * @return ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary 继续部署服务实例
   *
   * @param request ContinueDeployServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstanceWithOptions(request: ContinueDeployServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ContinueDeployServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ContinueDeployServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinueDeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new ContinueDeployServiceInstanceResponse({}));
  }

  /**
   * @summary 继续部署服务实例
   *
   * @param request ContinueDeployServiceInstanceRequest
   * @return ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @param tmpReq CreateServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateServiceInstanceResponse
   */
  async createServiceInstanceWithOptions(tmpReq: CreateServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!Util.isUnset(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.enableInstanceOps)) {
      query["EnableInstanceOps"] = request.enableInstanceOps;
    }

    if (!Util.isUnset(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceAutoPay)) {
      query["ResourceAutoPay"] = request.resourceAutoPay;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.specificationCode)) {
      query["SpecificationCode"] = request.specificationCode;
    }

    if (!Util.isUnset(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceInstanceResponse>(await this.callApi(params, req, runtime), new CreateServiceInstanceResponse({}));
  }

  /**
   * @param request CreateServiceInstanceRequest
   * @return CreateServiceInstanceResponse
   */
  async createServiceInstance(request: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 删除服务实例
   *
   * @param request DeleteServiceInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteServiceInstancesResponse
   */
  async deleteServiceInstancesWithOptions(request: DeleteServiceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceInstances",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteServiceInstancesResponse({}));
  }

  /**
   * @summary 删除服务实例
   *
   * @param request DeleteServiceInstancesRequest
   * @return DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 查询服务实例详情
   *
   * @param request GetServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetServiceInstanceResponse
   */
  async getServiceInstanceWithOptions(request: GetServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marketInstanceId)) {
      query["MarketInstanceId"] = request.marketInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceInstanceResponse>(await this.callApi(params, req, runtime), new GetServiceInstanceResponse({}));
  }

  /**
   * @summary 查询服务实例详情
   *
   * @param request GetServiceInstanceRequest
   * @return GetServiceInstanceResponse
   */
  async getServiceInstance(request: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 获取ROS参数限制
   *
   * @param request GetServiceTemplateParameterConstraintsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraintsWithOptions(request: GetServiceTemplateParameterConstraintsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceTemplateParameterConstraintsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!Util.isUnset(request.enablePrivateVpcConnection)) {
      query["EnablePrivateVpcConnection"] = request.enablePrivateVpcConnection;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceTemplateParameterConstraints",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new GetServiceTemplateParameterConstraintsResponse({}));
  }

  /**
   * @summary 获取ROS参数限制
   *
   * @param request GetServiceTemplateParameterConstraintsRequest
   * @return GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: GetServiceTemplateParameterConstraintsRequest): Promise<GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * @summary 查询服务实例部署升级以及应用日志
   *
   * @param request ListServiceInstanceLogsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogsWithOptions(request: ListServiceInstanceLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceInstanceLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logSource)) {
      query["LogSource"] = request.logSource;
    }

    if (!Util.isUnset(request.logstore)) {
      query["Logstore"] = request.logstore;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceInstanceLogs",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceInstanceLogsResponse>(await this.callApi(params, req, runtime), new ListServiceInstanceLogsResponse({}));
  }

  /**
   * @summary 查询服务实例部署升级以及应用日志
   *
   * @param request ListServiceInstanceLogsRequest
   * @return ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogs(request: ListServiceInstanceLogsRequest): Promise<ListServiceInstanceLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceInstanceLogsWithOptions(request, runtime);
  }

  /**
   * @summary 展示实例资源
   *
   * @param request ListServiceInstanceResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResourcesWithOptions(request: ListServiceInstanceResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceInstanceResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expireTimeEnd)) {
      query["ExpireTimeEnd"] = request.expireTimeEnd;
    }

    if (!Util.isUnset(request.expireTimeStart)) {
      query["ExpireTimeStart"] = request.expireTimeStart;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceInstanceResourceType)) {
      query["ServiceInstanceResourceType"] = request.serviceInstanceResourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceInstanceResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new ListServiceInstanceResourcesResponse({}));
  }

  /**
   * @summary 展示实例资源
   *
   * @param request ListServiceInstanceResourcesRequest
   * @return ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResources(request: ListServiceInstanceResourcesRequest): Promise<ListServiceInstanceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * @param request ListServiceInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListServiceInstancesResponse
   */
  async listServiceInstancesWithOptions(request: ListServiceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceInstances",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new ListServiceInstancesResponse({}));
  }

  /**
   * @param request ListServiceInstancesRequest
   * @return ListServiceInstancesResponse
   */
  async listServiceInstances(request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 重启服务实例
   *
   * @param request RestartServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RestartServiceInstanceResponse
   */
  async restartServiceInstanceWithOptions(request: RestartServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartServiceInstanceResponse>(await this.callApi(params, req, runtime), new RestartServiceInstanceResponse({}));
  }

  /**
   * @summary 重启服务实例
   *
   * @param request RestartServiceInstanceRequest
   * @return RestartServiceInstanceResponse
   */
  async restartServiceInstance(request: RestartServiceInstanceRequest): Promise<RestartServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 启动服务实例
   *
   * @param request StartServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartServiceInstanceResponse
   */
  async startServiceInstanceWithOptions(request: StartServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartServiceInstanceResponse>(await this.callApi(params, req, runtime), new StartServiceInstanceResponse({}));
  }

  /**
   * @summary 启动服务实例
   *
   * @param request StartServiceInstanceRequest
   * @return StartServiceInstanceResponse
   */
  async startServiceInstance(request: StartServiceInstanceRequest): Promise<StartServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 停止服务实例
   *
   * @param request StopServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopServiceInstanceResponse
   */
  async stopServiceInstanceWithOptions(request: StopServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopServiceInstanceResponse>(await this.callApi(params, req, runtime), new StopServiceInstanceResponse({}));
  }

  /**
   * @summary 停止服务实例
   *
   * @param request StopServiceInstanceRequest
   * @return StopServiceInstanceResponse
   */
  async stopServiceInstance(request: StopServiceInstanceRequest): Promise<StopServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @param tmpReq UpdateServiceInstanceSpecRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpecWithOptions(tmpReq: UpdateServiceInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceInstanceSpecResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateServiceInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!Util.isUnset(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.predefinedParametersName)) {
      query["PredefinedParametersName"] = request.predefinedParametersName;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceInstanceSpec",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceInstanceSpecResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceSpecResponse({}));
  }

  /**
   * @param request UpdateServiceInstanceSpecRequest
   * @return UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: UpdateServiceInstanceSpecRequest): Promise<UpdateServiceInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

}
