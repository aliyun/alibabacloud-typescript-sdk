// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelServiceRegistrationRequest extends $tea.Model {
  regionId?: string;
  registrationId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      registrationId: 'RegistrationId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      registrationId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelServiceRegistrationResponseBody extends $tea.Model {
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

export class CancelServiceRegistrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelServiceRegistrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelServiceRegistrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  regionId?: string;
  supplierName?: string;
  supplierUrl?: string;
  clientToken?: string;
  serviceId?: string;
  deployType?: string;
  deployMetadata?: string;
  serviceType?: string;
  serviceInfo?: CreateServiceRequestServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      deployType: 'DeployType',
      deployMetadata: 'DeployMetadata',
      serviceType: 'ServiceType',
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      clientToken: 'string',
      serviceId: 'string',
      deployType: 'string',
      deployMetadata: 'string',
      serviceType: 'string',
      serviceInfo: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  version?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      version: 'Version',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      version: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
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

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceResponseBody,
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
  status?: string;
  updateTime?: string;
  requestId?: string;
  serviceInstanceId?: string;
  createTime?: string;
  userId?: number;
  service?: GetServiceInstanceResponseBodyService;
  parameters?: string;
  statusDetail?: string;
  progress?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      createTime: 'CreateTime',
      userId: 'UserId',
      service: 'Service',
      parameters: 'Parameters',
      statusDetail: 'StatusDetail',
      progress: 'Progress',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      requestId: 'string',
      serviceInstanceId: 'string',
      createTime: 'string',
      userId: 'number',
      service: GetServiceInstanceResponseBodyService,
      parameters: 'string',
      statusDetail: 'string',
      progress: 'number',
      templateName: 'string',
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

export class GetSupplierInformationRequest extends $tea.Model {
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

export class GetSupplierInformationResponseBody extends $tea.Model {
  requestId?: string;
  supplierName?: string;
  supplierUrl?: string;
  supplierDesc?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      supplierDesc: 'SupplierDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      supplierDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplierInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSupplierInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSupplierInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchServiceRequest extends $tea.Model {
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchServiceResponseBody extends $tea.Model {
  requestId?: string;
  serviceId?: string;
  version?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      version: 'Version',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
      version: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LaunchServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LaunchServiceResponseBody,
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
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
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

export class ListServiceRegistrationsRequest extends $tea.Model {
  regionId?: string;
  maxResults?: string;
  nextToken?: string;
  filter?: ListServiceRegistrationsRequestFilter[];
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
      filter: { 'type': 'array', 'itemType': ListServiceRegistrationsRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRegistrationsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  maxResults?: number;
  serviceRegistrations?: ListServiceRegistrationsResponseBodyServiceRegistrations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      serviceRegistrations: 'ServiceRegistrations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      maxResults: 'number',
      serviceRegistrations: { 'type': 'array', 'itemType': ListServiceRegistrationsResponseBodyServiceRegistrations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRegistrationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceRegistrationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceRegistrationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: string;
  nextToken?: string;
  allVersions?: boolean;
  filter?: ListServicesRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      allVersions: 'AllVersions',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      allVersions: 'boolean',
      filter: { 'type': 'array', 'itemType': ListServicesRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  maxResults?: number;
  services?: ListServicesResponseBodyServices[];
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
      maxResults: 'number',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceRequest extends $tea.Model {
  regionId?: string;
  serviceId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceResponseBody extends $tea.Model {
  registrationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
  regionId?: string;
  supplierName?: string;
  supplierUrl?: string;
  deployType?: string;
  deployMetadata?: string;
  clientToken?: string;
  serviceId?: string;
  serviceType?: string;
  serviceInfo?: UpdateServiceRequestServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      deployType: 'DeployType',
      deployMetadata: 'DeployMetadata',
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      serviceType: 'ServiceType',
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      deployType: 'string',
      deployMetadata: 'string',
      clientToken: 'string',
      serviceId: 'string',
      serviceType: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $tea.Model {
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

export class UpdateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawServiceRequest extends $tea.Model {
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawServiceResponseBody extends $tea.Model {
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

export class WithdrawServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WithdrawServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WithdrawServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceInfo extends $tea.Model {
  locale?: string;
  shortDescription?: string;
  image?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'Locale',
      shortDescription: 'ShortDescription',
      image: 'Image',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      shortDescription: 'string',
      image: 'string',
      name: 'string',
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
  deployType?: string;
  serviceId?: string;
  supplierUrl?: string;
  serviceType?: string;
  supplierName?: string;
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  deployMetadata?: string;
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
      deployMetadata: 'DeployMetadata',
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
      serviceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceServiceInfos },
      deployMetadata: 'string',
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
  updateTime?: string;
  serviceInstanceId?: string;
  createTime?: string;
  userId?: number;
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  parameters?: string;
  statusDetail?: string;
  progress?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      serviceInstanceId: 'ServiceInstanceId',
      createTime: 'CreateTime',
      userId: 'UserId',
      service: 'Service',
      parameters: 'Parameters',
      statusDetail: 'StatusDetail',
      progress: 'Progress',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      serviceInstanceId: 'string',
      createTime: 'string',
      userId: 'number',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      parameters: 'string',
      statusDetail: 'string',
      progress: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRegistrationsRequestFilter extends $tea.Model {
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

export class ListServiceRegistrationsResponseBodyServiceRegistrations extends $tea.Model {
  status?: string;
  registrationId?: string;
  finishTime?: string;
  comment?: string;
  serviceId?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      registrationId: 'RegistrationId',
      finishTime: 'FinishTime',
      comment: 'Comment',
      serviceId: 'ServiceId',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      registrationId: 'string',
      finishTime: 'string',
      comment: 'string',
      serviceId: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestFilter extends $tea.Model {
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

export class ListServicesResponseBodyServicesServiceInfos extends $tea.Model {
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

export class ListServicesResponseBodyServices extends $tea.Model {
  status?: string;
  defaultVersion?: boolean;
  publishTime?: string;
  version?: string;
  deployType?: string;
  serviceId?: string;
  supplierUrl?: string;
  serviceType?: string;
  supplierName?: string;
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      defaultVersion: 'DefaultVersion',
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
      defaultVersion: 'boolean',
      publishTime: 'string',
      version: 'string',
      deployType: 'string',
      serviceId: 'string',
      supplierUrl: 'string',
      serviceType: 'string',
      supplierName: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfos },
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfo extends $tea.Model {
  locale?: string;
  shortDescription?: string;
  image?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'Locale',
      shortDescription: 'ShortDescription',
      image: 'Image',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      shortDescription: 'string',
      image: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("computenestsupplier", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelServiceRegistrationWithOptions(request: CancelServiceRegistrationRequest, runtime: $Util.RuntimeOptions): Promise<CancelServiceRegistrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelServiceRegistrationResponse>(await this.doRPCRequest("CancelServiceRegistration", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new CancelServiceRegistrationResponse({}));
  }

  async cancelServiceRegistration(request: CancelServiceRegistrationRequest): Promise<CancelServiceRegistrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelServiceRegistrationWithOptions(request, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceResponse>(await this.doRPCRequest("CreateService", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServiceResponse>(await this.doRPCRequest("DeleteService", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  async getServiceWithOptions(request: GetServiceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceResponse>(await this.doRPCRequest("GetService", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceResponse({}));
  }

  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  async getServiceInstanceWithOptions(request: GetServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceInstanceResponse>(await this.doRPCRequest("GetServiceInstance", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceInstanceResponse({}));
  }

  async getServiceInstance(request: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  async getSupplierInformationWithOptions(request: GetSupplierInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetSupplierInformationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSupplierInformationResponse>(await this.doRPCRequest("GetSupplierInformation", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetSupplierInformationResponse({}));
  }

  async getSupplierInformation(request: GetSupplierInformationRequest): Promise<GetSupplierInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupplierInformationWithOptions(request, runtime);
  }

  async launchServiceWithOptions(request: LaunchServiceRequest, runtime: $Util.RuntimeOptions): Promise<LaunchServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LaunchServiceResponse>(await this.doRPCRequest("LaunchService", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new LaunchServiceResponse({}));
  }

  async launchService(request: LaunchServiceRequest): Promise<LaunchServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchServiceWithOptions(request, runtime);
  }

  async listServiceInstancesWithOptions(request: ListServiceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServiceInstancesResponse>(await this.doRPCRequest("ListServiceInstances", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListServiceInstancesResponse({}));
  }

  async listServiceInstances(request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  async listServiceRegistrationsWithOptions(request: ListServiceRegistrationsRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceRegistrationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServiceRegistrationsResponse>(await this.doRPCRequest("ListServiceRegistrations", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListServiceRegistrationsResponse({}));
  }

  async listServiceRegistrations(request: ListServiceRegistrationsRequest): Promise<ListServiceRegistrationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceRegistrationsWithOptions(request, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServicesResponse>(await this.doRPCRequest("ListServices", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListServicesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  async registerServiceWithOptions(request: RegisterServiceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterServiceResponse>(await this.doRPCRequest("RegisterService", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterServiceResponse({}));
  }

  async registerService(request: RegisterServiceRequest): Promise<RegisterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerServiceWithOptions(request, runtime);
  }

  async updateServiceWithOptions(request: UpdateServiceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateServiceResponse>(await this.doRPCRequest("UpdateService", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateServiceResponse({}));
  }

  async updateService(request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceWithOptions(request, runtime);
  }

  async withdrawServiceWithOptions(request: WithdrawServiceRequest, runtime: $Util.RuntimeOptions): Promise<WithdrawServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WithdrawServiceResponse>(await this.doRPCRequest("WithdrawService", "2021-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new WithdrawServiceResponse({}));
  }

  async withdrawService(request: WithdrawServiceRequest): Promise<WithdrawServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.withdrawServiceWithOptions(request, runtime);
  }

}
