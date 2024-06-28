// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddServiceSharedAccountsRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  serviceId?: string;
  sharedAccounts?: AddServiceSharedAccountsRequestSharedAccounts[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      sharedAccounts: 'SharedAccounts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      sharedAccounts: { 'type': 'array', 'itemType': AddServiceSharedAccountsRequestSharedAccounts },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsResponseBody extends $tea.Model {
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

export class AddServiceSharedAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddServiceSharedAccountsResponseBody;
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
      body: AddServiceSharedAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  parameters?: string;
  regionId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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

export class CreateArtifactRequest extends $tea.Model {
  artifactId?: string;
  artifactProperty?: CreateArtifactRequestArtifactProperty;
  artifactType?: string;
  description?: string;
  name?: string;
  resourceGroupId?: string;
  supportRegionIds?: string[];
  tag?: CreateArtifactRequestTag[];
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: CreateArtifactRequestArtifactProperty,
      artifactType: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactRequestTag },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactShrinkRequest extends $tea.Model {
  artifactId?: string;
  artifactPropertyShrink?: string;
  artifactType?: string;
  description?: string;
  name?: string;
  resourceGroupId?: string;
  supportRegionIds?: string[];
  tag?: CreateArtifactShrinkRequestTag[];
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      artifactType: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactShrinkRequestTag },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactResponseBody extends $tea.Model {
  artifactId?: string;
  artifactProperty?: string;
  artifactType?: string;
  artifactVersion?: string;
  description?: string;
  gmtModified?: string;
  maxVersion?: number;
  name?: string;
  requestId?: string;
  status?: string;
  supportRegionIds?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      requestId: 'string',
      status: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateArtifactResponseBody;
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
      body: CreateArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  alarmMetadata?: string;
  approvalType?: string;
  buildParameters?: string;
  clientToken?: string;
  deployMetadata?: string;
  deployType?: string;
  duration?: number;
  isSupportOperated?: boolean;
  licenseMetadata?: string;
  logMetadata?: string;
  operationMetadata?: string;
  policyNames?: string;
  regionId?: string;
  resellable?: boolean;
  resourceGroupId?: string;
  serviceId?: string;
  serviceInfo?: CreateServiceRequestServiceInfo[];
  serviceType?: string;
  shareType?: string;
  sourceServiceId?: string;
  sourceServiceVersion?: string;
  tag?: CreateServiceRequestTag[];
  tenantType?: string;
  trialDuration?: number;
  upgradeMetadata?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      buildParameters: 'BuildParameters',
      clientToken: 'ClientToken',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      tag: 'Tag',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      buildParameters: 'string',
      clientToken: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfo },
      serviceType: 'string',
      shareType: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceRequestTag },
      tenantType: 'string',
      trialDuration: 'number',
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  requestId?: string;
  serviceId?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceResponseBody;
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
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endTime?: string;
  name?: string;
  parameters?: { [key: string]: any };
  regionId?: string;
  resourceGroupId?: string;
  serviceId?: string;
  serviceVersion?: string;
  specificationName?: string;
  tag?: CreateServiceInstanceRequestTag[];
  templateName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      name: 'Name',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endTime: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endTime?: string;
  name?: string;
  parametersShrink?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceId?: string;
  serviceVersion?: string;
  specificationName?: string;
  tag?: CreateServiceInstanceShrinkRequestTag[];
  templateName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      name: 'Name',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endTime: 'string',
      name: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceShrinkRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponseBody extends $tea.Model {
  requestId?: string;
  serviceInstanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteArtifactRequest extends $tea.Model {
  artifactId?: string;
  artifactVersion?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactResponseBody extends $tea.Model {
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

export class DeleteArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteArtifactResponseBody;
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
      body: DeleteArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceResponseBody;
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
      body: DeleteServiceResponseBody,
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

export class DeployServiceInstanceRequest extends $tea.Model {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployServiceInstanceResponseBody;
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
      body: DeployServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRequest extends $tea.Model {
  artifactId?: string;
  artifactName?: string;
  artifactVersion?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactName: 'ArtifactName',
      artifactVersion: 'ArtifactVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactName: 'string',
      artifactVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponseBody extends $tea.Model {
  artifactId?: string;
  artifactProperty?: string;
  artifactType?: string;
  artifactVersion?: string;
  description?: string;
  gmtModified?: string;
  maxVersion?: number;
  name?: string;
  progress?: string;
  requestId?: string;
  resourceGroupId?: string;
  status?: string;
  supportRegionIds?: string;
  tags?: GetArtifactResponseBodyTags[];
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      progress: 'Progress',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      tags: 'Tags',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      progress: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      supportRegionIds: 'string',
      tags: { 'type': 'array', 'itemType': GetArtifactResponseBodyTags },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactResponseBody;
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
      body: GetArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsRequest extends $tea.Model {
  artifactType?: string;
  deployRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      deployRegionId: 'DeployRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      deployRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBody extends $tea.Model {
  availableResources?: GetArtifactRepositoryCredentialsResponseBodyAvailableResources[];
  credentials?: GetArtifactRepositoryCredentialsResponseBodyCredentials;
  expireDate?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      credentials: 'Credentials',
      expireDate: 'ExpireDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': GetArtifactRepositoryCredentialsResponseBodyAvailableResources },
      credentials: GetArtifactRepositoryCredentialsResponseBodyCredentials,
      expireDate: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactRepositoryCredentialsResponseBody;
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
      body: GetArtifactRepositoryCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  filterAliUid?: boolean;
  regionId?: string;
  serviceId?: string;
  serviceVersion?: string;
  sharedAccountType?: string;
  showDetail?: string[];
  static names(): { [key: string]: string } {
    return {
      filterAliUid: 'FilterAliUid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      sharedAccountType: 'SharedAccountType',
      showDetail: 'ShowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterAliUid: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      sharedAccountType: 'string',
      showDetail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
  alarmMetadata?: string;
  approvalType?: string;
  buildInfo?: string;
  categories?: string;
  commodity?: GetServiceResponseBodyCommodity;
  commodityCode?: string;
  createTime?: string;
  crossRegionConnectionStatus?: string;
  defaultLicenseDays?: number;
  deployMetadata?: string;
  deployType?: string;
  duration?: number;
  entitySource?: { [key: string]: string };
  isSupportOperated?: boolean;
  licenseMetadata?: string;
  logMetadata?: string;
  operationMetadata?: string;
  payFromType?: string;
  payType?: string;
  permission?: string;
  policyNames?: string;
  progress?: number;
  publishTime?: string;
  registrationId?: string;
  requestId?: string;
  resellable?: boolean;
  resourceGroupId?: string;
  serviceAuditDocumentUrl?: string;
  serviceDiscoverable?: string;
  serviceDocUrl?: string;
  serviceId?: string;
  serviceInfos?: GetServiceResponseBodyServiceInfos[];
  serviceProductUrl?: string;
  serviceType?: string;
  shareType?: string;
  shareTypeStatus?: string;
  sourceServiceId?: string;
  sourceServiceVersion?: string;
  sourceSupplierName?: string;
  statistic?: GetServiceResponseBodyStatistic;
  status?: string;
  statusDetail?: string;
  supplierName?: string;
  supplierUrl?: string;
  tags?: GetServiceResponseBodyTags[];
  tenantType?: string;
  testStatus?: string;
  trialDuration?: number;
  trialType?: string;
  updateTime?: string;
  upgradeMetadata?: string;
  version?: string;
  versionName?: string;
  virtualInternetService?: string;
  virtualInternetServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      buildInfo: 'BuildInfo',
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      crossRegionConnectionStatus: 'CrossRegionConnectionStatus',
      defaultLicenseDays: 'DefaultLicenseDays',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      entitySource: 'EntitySource',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      payFromType: 'PayFromType',
      payType: 'PayType',
      permission: 'Permission',
      policyNames: 'PolicyNames',
      progress: 'Progress',
      publishTime: 'PublishTime',
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
      resellable: 'Resellable',
      resourceGroupId: 'ResourceGroupId',
      serviceAuditDocumentUrl: 'ServiceAuditDocumentUrl',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceDocUrl: 'ServiceDocUrl',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      shareTypeStatus: 'ShareTypeStatus',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      sourceSupplierName: 'SourceSupplierName',
      statistic: 'Statistic',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      testStatus: 'TestStatus',
      trialDuration: 'TrialDuration',
      trialType: 'TrialType',
      updateTime: 'UpdateTime',
      upgradeMetadata: 'UpgradeMetadata',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
      virtualInternetServiceId: 'VirtualInternetServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      buildInfo: 'string',
      categories: 'string',
      commodity: GetServiceResponseBodyCommodity,
      commodityCode: 'string',
      createTime: 'string',
      crossRegionConnectionStatus: 'string',
      defaultLicenseDays: 'number',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      entitySource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      payFromType: 'string',
      payType: 'string',
      permission: 'string',
      policyNames: 'string',
      progress: 'number',
      publishTime: 'string',
      registrationId: 'string',
      requestId: 'string',
      resellable: 'boolean',
      resourceGroupId: 'string',
      serviceAuditDocumentUrl: 'string',
      serviceDiscoverable: 'string',
      serviceDocUrl: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      shareType: 'string',
      shareTypeStatus: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      sourceSupplierName: 'string',
      statistic: GetServiceResponseBodyStatistic,
      status: 'string',
      statusDetail: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': GetServiceResponseBodyTags },
      tenantType: 'string',
      testStatus: 'string',
      trialDuration: 'number',
      trialType: 'string',
      updateTime: 'string',
      upgradeMetadata: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
      virtualInternetServiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceResponseBody;
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
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostRequest extends $tea.Model {
  clientToken?: string;
  commodity?: GetServiceEstimateCostRequestCommodity;
  parameters?: { [key: string]: any };
  regionId?: string;
  serviceId?: string;
  serviceInstanceId?: string;
  serviceVersion?: string;
  specificationName?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: GetServiceEstimateCostRequestCommodity,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostShrinkRequest extends $tea.Model {
  clientToken?: string;
  commodityShrink?: string;
  parametersShrink?: string;
  regionId?: string;
  serviceId?: string;
  serviceInstanceId?: string;
  serviceVersion?: string;
  specificationName?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityShrink: 'Commodity',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityShrink: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponseBody extends $tea.Model {
  commodity?: { [key: string]: any };
  requestId?: string;
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceEstimateCostResponseBody;
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
      body: GetServiceEstimateCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceRequest extends $tea.Model {
  regionId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  createTime?: string;
  enableInstanceOps?: boolean;
  enableUserPrometheus?: boolean;
  endTime?: string;
  grafanaDashBoardUrl?: string;
  isOperated?: boolean;
  licenseMetadata?: string;
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
  rdAccountLoginUrl?: string;
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
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      isOperated: 'IsOperated',
      licenseMetadata: 'LicenseMetadata',
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
      rdAccountLoginUrl: 'RdAccountLoginUrl',
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
      createTime: 'string',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      isOperated: 'boolean',
      licenseMetadata: 'string',
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
      rdAccountLoginUrl: 'string',
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
  templateName?: string;
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
      templateName: 'TemplateName',
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
      templateName: 'string',
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

export class GetUploadCredentialsRequest extends $tea.Model {
  fileName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponseBody extends $tea.Model {
  code?: string;
  data?: GetUploadCredentialsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUploadCredentialsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadCredentialsResponseBody;
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
      body: GetUploadCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesRequest extends $tea.Model {
  artifactType?: string;
  maxResults?: number;
  nextToken?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  repositories?: ListAcrImageRepositoriesResponseBodyRepositories[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      repositories: { 'type': 'array', 'itemType': ListAcrImageRepositoriesResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAcrImageRepositoriesResponseBody;
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
      body: ListAcrImageRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsRequest extends $tea.Model {
  artifactType?: string;
  maxResults?: number;
  nextToken?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponseBody extends $tea.Model {
  images?: ListAcrImageTagsResponseBodyImages[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListAcrImageTagsResponseBodyImages },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAcrImageTagsResponseBody;
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
      body: ListAcrImageTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsRequest extends $tea.Model {
  artifactId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponseBody extends $tea.Model {
  artifacts?: ListArtifactVersionsResponseBodyArtifacts[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactVersionsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactVersionsResponseBody;
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
      body: ListArtifactVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequest extends $tea.Model {
  filter?: ListArtifactsRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  resourceGroupId?: string;
  tag?: ListArtifactsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListArtifactsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListArtifactsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBody extends $tea.Model {
  artifacts?: ListArtifactsResponseBodyArtifacts[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactsResponseBody;
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
      body: ListArtifactsResponseBody,
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
  showDeleted?: boolean;
  tag?: ListServiceInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showDeleted: 'ShowDeleted',
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
      showDeleted: 'boolean',
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

export class ListServiceUsagesRequest extends $tea.Model {
  filter?: ListServiceUsagesRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  supplierRole?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      supplierRole: 'SupplierRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceUsagesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      supplierRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  serviceUsages?: ListServiceUsagesResponseBodyServiceUsages[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceUsages: 'ServiceUsages',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceUsages: { 'type': 'array', 'itemType': ListServiceUsagesResponseBodyServiceUsages },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceUsagesResponseBody;
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
      body: ListServiceUsagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  allVersions?: boolean;
  filter?: ListServicesRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  tag?: ListServicesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      allVersions: 'AllVersions',
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
      allVersions: 'boolean',
      filter: { 'type': 'array', 'itemType': ListServicesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListServicesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  services?: ListServicesResponseBodyServices[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
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
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesRequest extends $tea.Model {
  resources?: string;
  serviceInstanceId?: string;
  serviceInstanceResourcesAction?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      serviceInstanceResourcesAction: 'ServiceInstanceResourcesAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      serviceInstanceId: 'string',
      serviceInstanceResourcesAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesResponseBody extends $tea.Model {
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

export class ModifyServiceInstanceResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyServiceInstanceResourcesResponseBody;
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
      body: ModifyServiceInstanceResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataRequest extends $tea.Model {
  metering?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      metering: 'Metering',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metering: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponseBody extends $tea.Model {
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

export class PushMeteringDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMeteringDataResponseBody;
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
      body: PushMeteringDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterServiceResponseBody;
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
      body: RegisterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactRequest extends $tea.Model {
  artifactId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactResponseBody extends $tea.Model {
  artifactId?: string;
  artifactProperty?: string;
  artifactType?: string;
  artifactVersion?: string;
  description?: string;
  gmtModified?: string;
  requestId?: string;
  status?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      status: 'Status',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      requestId: 'string',
      status: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseArtifactResponseBody;
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
      body: ReleaseArtifactResponseBody,
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

export class UpdateArtifactRequest extends $tea.Model {
  artifactId?: string;
  artifactProperty?: UpdateArtifactRequestArtifactProperty;
  description?: string;
  supportRegionIds?: string[];
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      description: 'Description',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: UpdateArtifactRequestArtifactProperty,
      description: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactShrinkRequest extends $tea.Model {
  artifactId?: string;
  artifactPropertyShrink?: string;
  description?: string;
  supportRegionIds?: string[];
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      description: 'Description',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      description: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactResponseBody extends $tea.Model {
  artifactId?: string;
  artifactProperty?: string;
  artifactType?: string;
  artifactVersion?: string;
  description?: string;
  gmtModified?: string;
  requestId?: string;
  status?: string;
  supportRegionIds?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      requestId: 'string',
      status: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateArtifactResponseBody;
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
      body: UpdateArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
  alarmMetadata?: string;
  approvalType?: string;
  clientToken?: string;
  deployMetadata?: string;
  deployType?: string;
  duration?: number;
  isSupportOperated?: boolean;
  licenseMetadata?: string;
  logMetadata?: string;
  operationMetadata?: string;
  policyNames?: string;
  regionId?: string;
  resellable?: boolean;
  serviceId?: string;
  serviceInfo?: UpdateServiceRequestServiceInfo[];
  serviceType?: string;
  serviceVersion?: string;
  shareType?: string;
  tenantType?: string;
  trialDuration?: number;
  updateOption?: UpdateServiceRequestUpdateOption;
  upgradeMetadata?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      clientToken: 'ClientToken',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
      shareType: 'ShareType',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      updateOption: 'UpdateOption',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      clientToken: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfo },
      serviceType: 'string',
      serviceVersion: 'string',
      shareType: 'string',
      tenantType: 'string',
      trialDuration: 'number',
      updateOption: UpdateServiceRequestUpdateOption,
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequest extends $tea.Model {
  alarmMetadata?: string;
  approvalType?: string;
  clientToken?: string;
  deployMetadata?: string;
  deployType?: string;
  duration?: number;
  isSupportOperated?: boolean;
  licenseMetadata?: string;
  logMetadata?: string;
  operationMetadata?: string;
  policyNames?: string;
  regionId?: string;
  resellable?: boolean;
  serviceId?: string;
  serviceInfo?: UpdateServiceShrinkRequestServiceInfo[];
  serviceType?: string;
  serviceVersion?: string;
  shareType?: string;
  tenantType?: string;
  trialDuration?: number;
  updateOptionShrink?: string;
  upgradeMetadata?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      clientToken: 'ClientToken',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
      shareType: 'ShareType',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      updateOptionShrink: 'UpdateOption',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      clientToken: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfo },
      serviceType: 'string',
      serviceVersion: 'string',
      shareType: 'string',
      tenantType: 'string',
      trialDuration: 'number',
      updateOptionShrink: 'string',
      upgradeMetadata: 'string',
      versionName: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceResponseBody;
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
      body: UpdateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeRequest extends $tea.Model {
  endTime?: string;
  regionId?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeResponseBody extends $tea.Model {
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

export class UpdateServiceInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceAttributeResponseBody;
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
      body: UpdateServiceInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecRequest extends $tea.Model {
  clientToken?: string;
  enableUserPrometheus?: boolean;
  operationName?: string;
  parameters?: { [key: string]: any };
  predefinedParametersName?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
  enableUserPrometheus?: boolean;
  operationName?: string;
  parametersShrink?: string;
  predefinedParametersName?: string;
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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

export class UpgradeServiceInstanceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: string;
  parameters?: { [key: string]: any };
  regionId?: string;
  serviceInstanceId?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceShrinkRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: string;
  parametersShrink?: string;
  regionId?: string;
  serviceInstanceId?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponseBody extends $tea.Model {
  requestId?: string;
  serviceInstanceId?: string;
  status?: string;
  upgradeRequiredParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
      upgradeRequiredParameters: 'UpgradeRequiredParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
      upgradeRequiredParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeServiceInstanceResponseBody;
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
      body: UpgradeServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsRequestSharedAccounts extends $tea.Model {
  permission?: string;
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      userAliUid: 'string',
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

export class CreateArtifactRequestArtifactProperty extends $tea.Model {
  commodityCode?: string;
  commodityVersion?: string;
  fileScriptMetadata?: string;
  imageId?: string;
  regionId?: string;
  repoId?: string;
  repoName?: string;
  scriptMetadata?: string;
  tag?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      fileScriptMetadata: 'FileScriptMetadata',
      imageId: 'ImageId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      scriptMetadata: 'ScriptMetadata',
      tag: 'Tag',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      fileScriptMetadata: 'string',
      imageId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      scriptMetadata: 'string',
      tag: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestTag extends $tea.Model {
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

export class CreateArtifactShrinkRequestTag extends $tea.Model {
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

export class CreateServiceRequestServiceInfoAgreements extends $tea.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceInfo extends $tea.Model {
  agreements?: CreateServiceRequestServiceInfoAgreements[];
  image?: string;
  locale?: string;
  longDescriptionUrl?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestTag extends $tea.Model {
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

export class GetArtifactResponseBodyTags extends $tea.Model {
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

export class GetArtifactRepositoryCredentialsResponseBodyAvailableResources extends $tea.Model {
  path?: string;
  regionId?: string;
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      regionId: 'RegionId',
      repositoryName: 'RepositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      regionId: 'string',
      repositoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBodyCredentials extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  password?: string;
  securityToken?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      password: 'Password',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      password: 'string',
      securityToken: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataComponentsMappings extends $tea.Model {
  mappings?: { [key: string]: string };
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      mappings: 'Mappings',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos extends $tea.Model {
  entityId?: string;
  metricName?: string;
  promql?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings extends $tea.Model {
  entityIds?: string;
  specificationName?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadata extends $tea.Model {
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos[];
  meteringEntityMappings?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataComponentsMappings },
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos extends $tea.Model {
  entityId?: string;
  metricName?: string;
  promql?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings extends $tea.Model {
  entityIds?: string;
  specificationName?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $tea.Model {
  specificationCode?: string;
  specificationName?: string;
  templateName?: string;
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $tea.Model {
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos[];
  meteringEntityMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings[];
  specificationMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings },
      specificationMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMeteringEntities extends $tea.Model {
  entityId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommoditySpecifications extends $tea.Model {
  code?: string;
  name?: string;
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodity extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  components?: string[];
  cssMetadata?: GetServiceResponseBodyCommodityCssMetadata;
  marketplaceMetadata?: GetServiceResponseBodyCommodityMarketplaceMetadata;
  meteringEntities?: GetServiceResponseBodyCommodityMeteringEntities[];
  saasBoostMetadata?: string;
  specifications?: GetServiceResponseBodyCommoditySpecifications[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      components: 'Components',
      cssMetadata: 'CssMetadata',
      marketplaceMetadata: 'MarketplaceMetadata',
      meteringEntities: 'MeteringEntities',
      saasBoostMetadata: 'SaasBoostMetadata',
      specifications: 'Specifications',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': 'string' },
      cssMetadata: GetServiceResponseBodyCommodityCssMetadata,
      marketplaceMetadata: GetServiceResponseBodyCommodityMarketplaceMetadata,
      meteringEntities: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMeteringEntities },
      saasBoostMetadata: 'string',
      specifications: { 'type': 'array', 'itemType': GetServiceResponseBodyCommoditySpecifications },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosAgreements extends $tea.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfos extends $tea.Model {
  agreements?: GetServiceResponseBodyServiceInfosAgreements[];
  image?: string;
  locale?: string;
  longDescriptionUrl?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfosAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyStatistic extends $tea.Model {
  accumulativeInstanceCount?: number;
  accumulativePocAmount?: number;
  accumulativeUserCount?: number;
  averagePocAmount?: number;
  averagePocDuration?: number;
  averagePocUnitAmount?: number;
  deployedServiceInstanceCount?: number;
  deployedUserCount?: number;
  submittedUsageCount?: number;
  static names(): { [key: string]: string } {
    return {
      accumulativeInstanceCount: 'AccumulativeInstanceCount',
      accumulativePocAmount: 'AccumulativePocAmount',
      accumulativeUserCount: 'AccumulativeUserCount',
      averagePocAmount: 'AveragePocAmount',
      averagePocDuration: 'AveragePocDuration',
      averagePocUnitAmount: 'AveragePocUnitAmount',
      deployedServiceInstanceCount: 'DeployedServiceInstanceCount',
      deployedUserCount: 'DeployedUserCount',
      submittedUsageCount: 'SubmittedUsageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeInstanceCount: 'number',
      accumulativePocAmount: 'number',
      accumulativeUserCount: 'number',
      averagePocAmount: 'number',
      averagePocDuration: 'number',
      averagePocUnitAmount: 'number',
      deployedServiceInstanceCount: 'number',
      deployedUserCount: 'number',
      submittedUsageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyTags extends $tea.Model {
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

export class GetServiceEstimateCostRequestCommodity extends $tea.Model {
  payPeriod?: number;
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payPeriod: 'number',
      payPeriodUnit: 'string',
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
  endpointServiceId?: string;
  privateZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateZoneName: 'PrivateZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      endpointServiceId: 'string',
      privateZoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $tea.Model {
  endpointId?: string;
  endpointServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfig extends $tea.Model {
  endpointId?: string;
  endpointServiceId?: string;
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateVpcConnections: 'PrivateVpcConnections',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
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

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints extends $tea.Model {
  allowedValues?: string[];
  associationParameterNames?: string[];
  behavior?: string;
  behaviorReason?: string;
  originalConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
  parameterKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      associationParameterNames: 'AssociationParameterNames',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
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
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  expireDate?: string;
  key?: string;
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expireDate: 'ExpireDate',
      key: 'Key',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expireDate: 'string',
      key: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponseBodyRepositories extends $tea.Model {
  createTime?: string;
  modifiedTime?: string;
  repoId?: string;
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      repoId: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponseBodyImages extends $tea.Model {
  createTime?: string;
  imageSize?: string;
  modifiedTime?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageSize: 'ImageSize',
      modifiedTime: 'ModifiedTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageSize: 'string',
      modifiedTime: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponseBodyArtifacts extends $tea.Model {
  artifactId?: string;
  artifactProperty?: string;
  artifactType?: string;
  artifactVersion?: string;
  gmtCreate?: string;
  gmtModified?: string;
  imageDelivery?: { [key: string]: string };
  progress?: string;
  resultFile?: string;
  securityAuditResult?: string;
  status?: string;
  supportRegionIds?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageDelivery: 'ImageDelivery',
      progress: 'Progress',
      resultFile: 'ResultFile',
      securityAuditResult: 'SecurityAuditResult',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageDelivery: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      progress: 'string',
      resultFile: 'string',
      securityAuditResult: 'string',
      status: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequestFilter extends $tea.Model {
  name?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequestTag extends $tea.Model {
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

export class ListArtifactsResponseBodyArtifactsTags extends $tea.Model {
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

export class ListArtifactsResponseBodyArtifacts extends $tea.Model {
  artifactId?: string;
  artifactType?: string;
  description?: string;
  gmtModified?: string;
  maxVersion?: string;
  name?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: ListArtifactsResponseBodyArtifactsTags[];
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactType: 'ArtifactType',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactType: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'string',
      name: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifactsTags },
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
  deployMetadata?: string;
  deployType?: string;
  enablePrivateVpcConnection?: boolean;
  publishTime?: string;
  serviceId?: string;
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  serviceType?: string;
  sourceSupplierName?: string;
  status?: string;
  supplierName?: string;
  supplierUrl?: string;
  version?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      publishTime: 'PublishTime',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      enablePrivateVpcConnection: 'boolean',
      publishTime: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
      serviceType: 'string',
      sourceSupplierName: 'string',
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
  isOperated?: boolean;
  name?: string;
  operatedServiceInstanceId?: string;
  operationEndTime?: string;
  operationStartTime?: string;
  parameters?: string;
  payType?: string;
  progress?: number;
  resourceGroupId?: string;
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  serviceInstanceId?: string;
  serviceType?: string;
  source?: string;
  status?: string;
  statusDetail?: string;
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
  templateName?: string;
  updateTime?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      endTime: 'EndTime',
      isOperated: 'IsOperated',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      parameters: 'Parameters',
      payType: 'PayType',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      endTime: 'string',
      isOperated: 'boolean',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      parameters: 'string',
      payType: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesRequestFilter extends $tea.Model {
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

export class ListServiceUsagesResponseBodyServiceUsages extends $tea.Model {
  comments?: string;
  createTime?: string;
  serviceId?: string;
  serviceName?: string;
  status?: string;
  supplierName?: string;
  updateTime?: string;
  userAliUid?: number;
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      supplierName: 'SupplierName',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createTime: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      supplierName: 'string',
      updateTime: 'string',
      userAliUid: 'number',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestFilter extends $tea.Model {
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

export class ListServicesRequestTag extends $tea.Model {
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

export class ListServicesResponseBodyServicesCommodity extends $tea.Model {
  commodityCode?: string;
  saasBoostMetadata?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      saasBoostMetadata: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesServiceInfos extends $tea.Model {
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

export class ListServicesResponseBodyServicesTags extends $tea.Model {
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

export class ListServicesResponseBodyServices extends $tea.Model {
  approvalType?: string;
  artifactId?: string;
  artifactVersion?: string;
  buildInfo?: string;
  categories?: string;
  commodity?: ListServicesResponseBodyServicesCommodity;
  commodityCode?: string;
  createTime?: string;
  defaultVersion?: boolean;
  deployType?: string;
  hasBeta?: boolean;
  hasDraft?: boolean;
  latestResellSourceServiceVersion?: string;
  publishTime?: string;
  relationType?: string;
  resellApplyStatus?: string;
  resellServiceId?: string;
  resourceGroupId?: string;
  serviceDiscoverable?: string;
  serviceId?: string;
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
  serviceType?: string;
  shareType?: string;
  sourceImage?: string;
  sourceServiceId?: string;
  sourceServiceVersion?: string;
  sourceSupplierName?: string;
  status?: string;
  supplierName?: string;
  supplierUrl?: string;
  tags?: ListServicesResponseBodyServicesTags[];
  tenantType?: string;
  trialType?: string;
  updateTime?: string;
  version?: string;
  versionName?: string;
  virtualInternetService?: string;
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
      buildInfo: 'BuildInfo',
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      defaultVersion: 'DefaultVersion',
      deployType: 'DeployType',
      hasBeta: 'HasBeta',
      hasDraft: 'HasDraft',
      latestResellSourceServiceVersion: 'LatestResellSourceServiceVersion',
      publishTime: 'PublishTime',
      relationType: 'RelationType',
      resellApplyStatus: 'ResellApplyStatus',
      resellServiceId: 'ResellServiceId',
      resourceGroupId: 'ResourceGroupId',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceImage: 'SourceImage',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialType: 'TrialType',
      updateTime: 'UpdateTime',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      artifactId: 'string',
      artifactVersion: 'string',
      buildInfo: 'string',
      categories: 'string',
      commodity: ListServicesResponseBodyServicesCommodity,
      commodityCode: 'string',
      createTime: 'string',
      defaultVersion: 'boolean',
      deployType: 'string',
      hasBeta: 'boolean',
      hasDraft: 'boolean',
      latestResellSourceServiceVersion: 'string',
      publishTime: 'string',
      relationType: 'string',
      resellApplyStatus: 'string',
      resellServiceId: 'string',
      resourceGroupId: 'string',
      serviceDiscoverable: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfos },
      serviceType: 'string',
      shareType: 'string',
      sourceImage: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      sourceSupplierName: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesTags },
      tenantType: 'string',
      trialType: 'string',
      updateTime: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactProperty extends $tea.Model {
  commodityCode?: string;
  commodityVersion?: string;
  fileScriptMetadata?: string;
  imageId?: string;
  regionId?: string;
  scriptMetadata?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      fileScriptMetadata: 'FileScriptMetadata',
      imageId: 'ImageId',
      regionId: 'RegionId',
      scriptMetadata: 'ScriptMetadata',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      fileScriptMetadata: 'string',
      imageId: 'string',
      regionId: 'string',
      scriptMetadata: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfoAgreements extends $tea.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfo extends $tea.Model {
  agreements?: UpdateServiceRequestServiceInfoAgreements[];
  image?: string;
  locale?: string;
  longDescriptionUrl?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestUpdateOption extends $tea.Model {
  updateFrom?: string;
  static names(): { [key: string]: string } {
    return {
      updateFrom: 'UpdateFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequestServiceInfoAgreements extends $tea.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequestServiceInfo extends $tea.Model {
  agreements?: UpdateServiceShrinkRequestServiceInfoAgreements[];
  image?: string;
  locale?: string;
  longDescriptionUrl?: string;
  name?: string;
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
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

  /**
   * @summary Adds a shared account of a service.
   *
   * @param request AddServiceSharedAccountsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccountsWithOptions(request: AddServiceSharedAccountsRequest, runtime: $Util.RuntimeOptions): Promise<AddServiceSharedAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.sharedAccounts)) {
      query["SharedAccounts"] = request.sharedAccounts;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new AddServiceSharedAccountsResponse({}));
  }

  /**
   * @summary Adds a shared account of a service.
   *
   * @param request AddServiceSharedAccountsRequest
   * @return AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccounts(request: AddServiceSharedAccountsRequest): Promise<AddServiceSharedAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
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
      version: "2021-05-21",
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
   * @param request ContinueDeployServiceInstanceRequest
   * @return ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 创建部署物
   *
   * @param tmpReq CreateArtifactRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateArtifactResponse
   */
  async createArtifactWithOptions(tmpReq: CreateArtifactRequest, runtime: $Util.RuntimeOptions): Promise<CreateArtifactResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateArtifactResponse>(await this.callApi(params, req, runtime), new CreateArtifactResponse({}));
  }

  /**
   * @summary 创建部署物
   *
   * @param request CreateArtifactRequest
   * @return CreateArtifactResponse
   */
  async createArtifact(request: CreateArtifactRequest): Promise<CreateArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createArtifactWithOptions(request, runtime);
  }

  /**
   * @summary 创建新服务版本
   *
   * @param request CreateServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateServiceResponse
   */
  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!Util.isUnset(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!Util.isUnset(request.buildParameters)) {
      query["BuildParameters"] = request.buildParameters;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!Util.isUnset(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!Util.isUnset(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!Util.isUnset(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!Util.isUnset(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sourceServiceId)) {
      query["SourceServiceId"] = request.sourceServiceId;
    }

    if (!Util.isUnset(request.sourceServiceVersion)) {
      query["SourceServiceVersion"] = request.sourceServiceVersion;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!Util.isUnset(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!Util.isUnset(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  /**
   * @summary 创建新服务版本
   *
   * @param request CreateServiceRequest
   * @return CreateServiceResponse
   */
  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  /**
   * @summary 商家侧创建服务实例
   *
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

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!Util.isUnset(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceInstance",
      version: "2021-05-21",
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
   * @summary 商家侧创建服务实例
   *
   * @param request CreateServiceInstanceRequest
   * @return CreateServiceInstanceResponse
   */
  async createServiceInstance(request: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 删除部署物
   *
   * @param request DeleteArtifactRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteArtifactResponse
   */
  async deleteArtifactWithOptions(request: DeleteArtifactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteArtifactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteArtifactResponse>(await this.callApi(params, req, runtime), new DeleteArtifactResponse({}));
  }

  /**
   * @summary 删除部署物
   *
   * @param request DeleteArtifactRequest
   * @return DeleteArtifactResponse
   */
  async deleteArtifact(request: DeleteArtifactRequest): Promise<DeleteArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteArtifactWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a service.
   *
   * @param request DeleteServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteServiceResponse
   */
  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  /**
   * @summary Deletes a service.
   *
   * @param request DeleteServiceRequest
   * @return DeleteServiceResponse
   */
  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  /**
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
      version: "2021-05-21",
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
   * @param request DeleteServiceInstancesRequest
   * @return DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * @param request DeployServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeployServiceInstanceResponse
   */
  async deployServiceInstanceWithOptions(request: DeployServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeployServiceInstanceResponse> {
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
      action: "DeployServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new DeployServiceInstanceResponse({}));
  }

  /**
   * @param request DeployServiceInstanceRequest
   * @return DeployServiceInstanceResponse
   */
  async deployServiceInstance(request: DeployServiceInstanceRequest): Promise<DeployServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 获取部署物信息
   *
   * @param request GetArtifactRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetArtifactResponse
   */
  async getArtifactWithOptions(request: GetArtifactRequest, runtime: $Util.RuntimeOptions): Promise<GetArtifactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactName)) {
      query["ArtifactName"] = request.artifactName;
    }

    if (!Util.isUnset(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetArtifactResponse>(await this.callApi(params, req, runtime), new GetArtifactResponse({}));
  }

  /**
   * @summary 获取部署物信息
   *
   * @param request GetArtifactRequest
   * @return GetArtifactResponse
   */
  async getArtifact(request: GetArtifactRequest): Promise<GetArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArtifactWithOptions(request, runtime);
  }

  /**
   * @summary 获取部署物仓库访问凭证
   *
   * @param request GetArtifactRepositoryCredentialsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentialsWithOptions(request: GetArtifactRepositoryCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetArtifactRepositoryCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArtifactRepositoryCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetArtifactRepositoryCredentialsResponse>(await this.callApi(params, req, runtime), new GetArtifactRepositoryCredentialsResponse({}));
  }

  /**
   * @summary 获取部署物仓库访问凭证
   *
   * @param request GetArtifactRepositoryCredentialsRequest
   * @return GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentials(request: GetArtifactRepositoryCredentialsRequest): Promise<GetArtifactRepositoryCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArtifactRepositoryCredentialsWithOptions(request, runtime);
  }

  /**
   * @summary 查询服务详情
   *
   * @param request GetServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetServiceResponse
   */
  async getServiceWithOptions(request: GetServiceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterAliUid)) {
      query["FilterAliUid"] = request.filterAliUid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.sharedAccountType)) {
      query["SharedAccountType"] = request.sharedAccountType;
    }

    if (!Util.isUnset(request.showDetail)) {
      query["ShowDetail"] = request.showDetail;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  /**
   * @summary 查询服务详情
   *
   * @param request GetServiceRequest
   * @return GetServiceResponse
   */
  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  /**
   * @summary 计算巢服务部署询价
   *
   * @param tmpReq GetServiceEstimateCostRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetServiceEstimateCostResponse
   */
  async getServiceEstimateCostWithOptions(tmpReq: GetServiceEstimateCostRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceEstimateCostResponse> {
    Util.validateModel(tmpReq);
    let request = new GetServiceEstimateCostShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceEstimateCost",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceEstimateCostResponse>(await this.callApi(params, req, runtime), new GetServiceEstimateCostResponse({}));
  }

  /**
   * @summary 计算巢服务部署询价
   *
   * @param request GetServiceEstimateCostRequest
   * @return GetServiceEstimateCostResponse
   */
  async getServiceEstimateCost(request: GetServiceEstimateCostRequest): Promise<GetServiceEstimateCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceEstimateCostWithOptions(request, runtime);
  }

  /**
   * @param request GetServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetServiceInstanceResponse
   */
  async getServiceInstanceWithOptions(request: GetServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
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
      version: "2021-05-21",
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
   * @param request GetServiceInstanceRequest
   * @return GetServiceInstanceResponse
   */
  async getServiceInstance(request: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 获取ROS模板参数限制
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

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceTemplateParameterConstraints",
      version: "2021-05-21",
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
   * @summary 获取ROS模板参数限制
   *
   * @param request GetServiceTemplateParameterConstraintsRequest
   * @return GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: GetServiceTemplateParameterConstraintsRequest): Promise<GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * @param request GetUploadCredentialsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUploadCredentialsResponse
   */
  async getUploadCredentialsWithOptions(request: GetUploadCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadCredentialsResponse>(await this.callApi(params, req, runtime), new GetUploadCredentialsResponse({}));
  }

  /**
   * @param request GetUploadCredentialsRequest
   * @return GetUploadCredentialsResponse
   */
  async getUploadCredentials(request: GetUploadCredentialsRequest): Promise<GetUploadCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadCredentialsWithOptions(request, runtime);
  }

  /**
   * @summary 展示部署物
   *
   * @param request ListAcrImageRepositoriesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositoriesWithOptions(request: ListAcrImageRepositoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAcrImageRepositoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAcrImageRepositories",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAcrImageRepositoriesResponse>(await this.callApi(params, req, runtime), new ListAcrImageRepositoriesResponse({}));
  }

  /**
   * @summary 展示部署物
   *
   * @param request ListAcrImageRepositoriesRequest
   * @return ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositories(request: ListAcrImageRepositoriesRequest): Promise<ListAcrImageRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAcrImageRepositoriesWithOptions(request, runtime);
  }

  /**
   * @summary 展示部署物
   *
   * @param request ListAcrImageTagsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAcrImageTagsResponse
   */
  async listAcrImageTagsWithOptions(request: ListAcrImageTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListAcrImageTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAcrImageTags",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAcrImageTagsResponse>(await this.callApi(params, req, runtime), new ListAcrImageTagsResponse({}));
  }

  /**
   * @summary 展示部署物
   *
   * @param request ListAcrImageTagsRequest
   * @return ListAcrImageTagsResponse
   */
  async listAcrImageTags(request: ListAcrImageTagsRequest): Promise<ListAcrImageTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAcrImageTagsWithOptions(request, runtime);
  }

  /**
   * @summary 展示部署物版本
   *
   * @param request ListArtifactVersionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListArtifactVersionsResponse
   */
  async listArtifactVersionsWithOptions(request: ListArtifactVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListArtifactVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListArtifactVersions",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListArtifactVersionsResponse>(await this.callApi(params, req, runtime), new ListArtifactVersionsResponse({}));
  }

  /**
   * @summary 展示部署物版本
   *
   * @param request ListArtifactVersionsRequest
   * @return ListArtifactVersionsResponse
   */
  async listArtifactVersions(request: ListArtifactVersionsRequest): Promise<ListArtifactVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArtifactVersionsWithOptions(request, runtime);
  }

  /**
   * @summary 展示部署物
   *
   * @param request ListArtifactsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListArtifactsResponse
   */
  async listArtifactsWithOptions(request: ListArtifactsRequest, runtime: $Util.RuntimeOptions): Promise<ListArtifactsResponse> {
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
      action: "ListArtifacts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListArtifactsResponse>(await this.callApi(params, req, runtime), new ListArtifactsResponse({}));
  }

  /**
   * @summary 展示部署物
   *
   * @param request ListArtifactsRequest
   * @return ListArtifactsResponse
   */
  async listArtifacts(request: ListArtifactsRequest): Promise<ListArtifactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArtifactsWithOptions(request, runtime);
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

    if (!Util.isUnset(request.showDeleted)) {
      query["ShowDeleted"] = request.showDeleted;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceInstances",
      version: "2021-05-21",
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
   * @summary 商家获取服务使用申请接口
   *
   * @param request ListServiceUsagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListServiceUsagesResponse
   */
  async listServiceUsagesWithOptions(request: ListServiceUsagesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceUsagesResponse> {
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

    if (!Util.isUnset(request.supplierRole)) {
      query["SupplierRole"] = request.supplierRole;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceUsages",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceUsagesResponse>(await this.callApi(params, req, runtime), new ListServiceUsagesResponse({}));
  }

  /**
   * @summary 商家获取服务使用申请接口
   *
   * @param request ListServiceUsagesRequest
   * @return ListServiceUsagesResponse
   */
  async listServiceUsages(request: ListServiceUsagesRequest): Promise<ListServiceUsagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceUsagesWithOptions(request, runtime);
  }

  /**
   * @summary 查询服务
   *
   * @param request ListServicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListServicesResponse
   */
  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allVersions)) {
      query["AllVersions"] = request.allVersions;
    }

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
      action: "ListServices",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  /**
   * @summary 查询服务
   *
   * @param request ListServicesRequest
   * @return ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  /**
   * @summary 修改服务实例资源
   *
   * @param request ModifyServiceInstanceResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResourcesWithOptions(request: ModifyServiceInstanceResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyServiceInstanceResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceInstanceResourcesAction)) {
      query["ServiceInstanceResourcesAction"] = request.serviceInstanceResourcesAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyServiceInstanceResources",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new ModifyServiceInstanceResourcesResponse({}));
  }

  /**
   * @summary 修改服务实例资源
   *
   * @param request ModifyServiceInstanceResourcesRequest
   * @return ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResources(request: ModifyServiceInstanceResourcesRequest): Promise<ModifyServiceInstanceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * @param request PushMeteringDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: PushMeteringDataRequest, runtime: $Util.RuntimeOptions): Promise<PushMeteringDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metering)) {
      query["Metering"] = request.metering;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushMeteringData",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushMeteringDataResponse>(await this.callApi(params, req, runtime), new PushMeteringDataResponse({}));
  }

  /**
   * @param request PushMeteringDataRequest
   * @return PushMeteringDataResponse
   */
  async pushMeteringData(request: PushMeteringDataRequest): Promise<PushMeteringDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

  /**
   * @param request RegisterServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RegisterServiceResponse
   */
  async registerServiceWithOptions(request: RegisterServiceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterServiceResponse>(await this.callApi(params, req, runtime), new RegisterServiceResponse({}));
  }

  /**
   * @param request RegisterServiceRequest
   * @return RegisterServiceResponse
   */
  async registerService(request: RegisterServiceRequest): Promise<RegisterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerServiceWithOptions(request, runtime);
  }

  /**
   * @summary Publishes an artifact.
   *
   * @param request ReleaseArtifactRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseArtifactResponse
   */
  async releaseArtifactWithOptions(request: ReleaseArtifactRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseArtifactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseArtifactResponse>(await this.callApi(params, req, runtime), new ReleaseArtifactResponse({}));
  }

  /**
   * @summary Publishes an artifact.
   *
   * @param request ReleaseArtifactRequest
   * @return ReleaseArtifactResponse
   */
  async releaseArtifact(request: ReleaseArtifactRequest): Promise<ReleaseArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseArtifactWithOptions(request, runtime);
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
      version: "2021-05-21",
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
      version: "2021-05-21",
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
      version: "2021-05-21",
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
   * @summary 更新部署物
   *
   * @param tmpReq UpdateArtifactRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateArtifactResponse
   */
  async updateArtifactWithOptions(tmpReq: UpdateArtifactRequest, runtime: $Util.RuntimeOptions): Promise<UpdateArtifactResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateArtifactResponse>(await this.callApi(params, req, runtime), new UpdateArtifactResponse({}));
  }

  /**
   * @summary 更新部署物
   *
   * @param request UpdateArtifactRequest
   * @return UpdateArtifactResponse
   */
  async updateArtifact(request: UpdateArtifactRequest): Promise<UpdateArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateArtifactWithOptions(request, runtime);
  }

  /**
   * @param tmpReq UpdateServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateServiceResponse
   */
  async updateServiceWithOptions(tmpReq: UpdateServiceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateOption)) {
      request.updateOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateOption, "UpdateOption", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!Util.isUnset(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!Util.isUnset(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!Util.isUnset(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!Util.isUnset(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!Util.isUnset(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!Util.isUnset(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!Util.isUnset(request.updateOptionShrink)) {
      query["UpdateOption"] = request.updateOptionShrink;
    }

    if (!Util.isUnset(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
  }

  /**
   * @param request UpdateServiceRequest
   * @return UpdateServiceResponse
   */
  async updateService(request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceWithOptions(request, runtime);
  }

  /**
   * @summary 更新服务实例属性
   *
   * @param request UpdateServiceInstanceAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttributeWithOptions(request: UpdateServiceInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "UpdateServiceInstanceAttribute",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceInstanceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceAttributeResponse({}));
  }

  /**
   * @summary 更新服务实例属性
   *
   * @param request UpdateServiceInstanceAttributeRequest
   * @return UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttribute(request: UpdateServiceInstanceAttributeRequest): Promise<UpdateServiceInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Updates the configurations of a service instance.
   *
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
      version: "2021-05-21",
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
   * @summary Updates the configurations of a service instance.
   *
   * @param request UpdateServiceInstanceSpecRequest
   * @return UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: UpdateServiceInstanceSpecRequest): Promise<UpdateServiceInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

  /**
   * @param tmpReq UpgradeServiceInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstanceWithOptions(tmpReq: UpgradeServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeServiceInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpgradeServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeServiceInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeServiceInstanceResponse({}));
  }

  /**
   * @param request UpgradeServiceInstanceRequest
   * @return UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstance(request: UpgradeServiceInstanceRequest): Promise<UpgradeServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeServiceInstanceWithOptions(request, runtime);
  }

}
