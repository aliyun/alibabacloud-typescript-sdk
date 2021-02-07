// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbortChangeRequest extends $tea.Model {
  changeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeResponseBody extends $tea.Model {
  envChange?: AbortChangeResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: AbortChangeResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbortChangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortChangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppEnvRequest extends $tea.Model {
  envName?: string;
  envDescription?: string;
  stackId?: string;
  appId?: string;
  pkgVersionId?: string;
  optionSettings?: string;
  profileName?: string;
  sourceEnvId?: string;
  templateId?: string;
  dryRun?: boolean;
  extraProperties?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envName: 'EnvName',
      envDescription: 'EnvDescription',
      stackId: 'StackId',
      appId: 'AppId',
      pkgVersionId: 'PkgVersionId',
      optionSettings: 'OptionSettings',
      profileName: 'ProfileName',
      sourceEnvId: 'SourceEnvId',
      templateId: 'TemplateId',
      dryRun: 'DryRun',
      extraProperties: 'ExtraProperties',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envName: 'string',
      envDescription: 'string',
      stackId: 'string',
      appId: 'string',
      pkgVersionId: 'string',
      optionSettings: 'string',
      profileName: 'string',
      sourceEnvId: 'string',
      templateId: 'string',
      dryRun: 'boolean',
      extraProperties: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppEnvResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  envChangeDetail?: CreateAppEnvResponseBodyEnvChangeDetail;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      envChangeDetail: 'EnvChangeDetail',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      envChangeDetail: CreateAppEnvResponseBodyEnvChangeDetail,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  appName?: string;
  appDescription?: string;
  categoryName?: string;
  usingSharedStorage?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appDescription: 'AppDescription',
      categoryName: 'CategoryName',
      usingSharedStorage: 'UsingSharedStorage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appDescription: 'string',
      categoryName: 'string',
      usingSharedStorage: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  application?: CreateApplicationResponseBodyApplication;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      application: CreateApplicationResponseBodyApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateRequest extends $tea.Model {
  templateName?: string;
  templateDescription?: string;
  appId?: string;
  stackId?: string;
  sourceTemplateId?: string;
  sourceEnvId?: string;
  profileName?: string;
  pkgVersionId?: string;
  optionSettings?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      templateDescription: 'TemplateDescription',
      appId: 'AppId',
      stackId: 'StackId',
      sourceTemplateId: 'SourceTemplateId',
      sourceEnvId: 'SourceEnvId',
      profileName: 'ProfileName',
      pkgVersionId: 'PkgVersionId',
      optionSettings: 'OptionSettings',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      templateDescription: 'string',
      appId: 'string',
      stackId: 'string',
      sourceTemplateId: 'string',
      sourceEnvId: 'string',
      profileName: 'string',
      pkgVersionId: 'string',
      optionSettings: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateResponseBody extends $tea.Model {
  configTemplate?: CreateConfigTemplateResponseBodyConfigTemplate;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      configTemplate: 'ConfigTemplate',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTemplate: CreateConfigTemplateResponseBodyConfigTemplate,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConfigTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  productName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  orderDetail?: CreateOrderResponseBodyOrderDetail;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      orderDetail: 'OrderDetail',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDetail: CreateOrderResponseBodyOrderDetail,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePkgVersionRequest extends $tea.Model {
  pkgVersionLabel?: string;
  pkgVersionDescription?: string;
  appId?: string;
  packageSource?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pkgVersionLabel: 'PkgVersionLabel',
      pkgVersionDescription: 'PkgVersionDescription',
      appId: 'AppId',
      packageSource: 'PackageSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pkgVersionLabel: 'string',
      pkgVersionDescription: 'string',
      appId: 'string',
      packageSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePkgVersionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  pkgVersion?: CreatePkgVersionResponseBodyPkgVersion;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      pkgVersion: 'PkgVersion',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      pkgVersion: CreatePkgVersionResponseBodyPkgVersion,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePkgVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePkgVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePkgVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageRequest extends $tea.Model {
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

export class CreateStorageResponseBody extends $tea.Model {
  storage?: CreateStorageResponseBodyStorage;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      storage: 'Storage',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storage: CreateStorageResponseBodyStorage,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppEnvRequest extends $tea.Model {
  envId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppEnvResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChangeRequest extends $tea.Model {
  changeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChangeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteChangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigTemplateRequest extends $tea.Model {
  templateId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConfigTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePkgVersionRequest extends $tea.Model {
  pkgVersionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pkgVersionId: 'PkgVersionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pkgVersionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePkgVersionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePkgVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePkgVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePkgVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAppEnvRequest extends $tea.Model {
  envId?: string;
  batchSize?: number;
  batchPercent?: number;
  batchInterval?: number;
  pauseBetweenBatches?: boolean;
  pkgVersionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      batchSize: 'BatchSize',
      batchPercent: 'BatchPercent',
      batchInterval: 'BatchInterval',
      pauseBetweenBatches: 'PauseBetweenBatches',
      pkgVersionId: 'PkgVersionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      batchSize: 'number',
      batchPercent: 'number',
      batchInterval: 'number',
      pauseBetweenBatches: 'boolean',
      pkgVersionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAppEnvResponseBody extends $tea.Model {
  envChange?: DeployAppEnvResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: DeployAppEnvResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvInstanceHealthRequest extends $tea.Model {
  envId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvInstanceHealthResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  envInstanceHealth?: DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealth;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      envInstanceHealth: 'EnvInstanceHealth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      envInstanceHealth: DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealth,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvInstanceHealthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppEnvInstanceHealthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppEnvInstanceHealthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvsRequest extends $tea.Model {
  envId?: string;
  appId?: string;
  includeTerminated?: boolean;
  pageSize?: number;
  pageNumber?: number;
  envName?: string;
  envSearch?: string;
  recentUpdated?: boolean;
  stackSearch?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      appId: 'AppId',
      includeTerminated: 'IncludeTerminated',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      envName: 'EnvName',
      envSearch: 'EnvSearch',
      recentUpdated: 'RecentUpdated',
      stackSearch: 'StackSearch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      appId: 'string',
      includeTerminated: 'boolean',
      pageSize: 'number',
      pageNumber: 'number',
      envName: 'string',
      envSearch: 'string',
      recentUpdated: 'boolean',
      stackSearch: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  appEnvs?: DescribeAppEnvsResponseBodyAppEnvs;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      appEnvs: 'AppEnvs',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      appEnvs: DescribeAppEnvsResponseBodyAppEnvs,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppEnvsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppEnvsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvStatusRequest extends $tea.Model {
  envId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  envStatus?: DescribeAppEnvStatusResponseBodyEnvStatus;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      envStatus: 'EnvStatus',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      envStatus: DescribeAppEnvStatusResponseBodyEnvStatus,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppEnvStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppEnvStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsRequest extends $tea.Model {
  appId?: string;
  pageSize?: number;
  pageNumber?: number;
  appName?: string;
  appSearch?: string;
  envSearch?: string;
  stackSearch?: string;
  categorySearch?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      appName: 'AppName',
      appSearch: 'AppSearch',
      envSearch: 'EnvSearch',
      stackSearch: 'StackSearch',
      categorySearch: 'CategorySearch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      appName: 'string',
      appSearch: 'string',
      envSearch: 'string',
      stackSearch: 'string',
      categorySearch: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  applications?: DescribeApplicationsResponseBodyApplications;
  pageNumber?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      applications: 'Applications',
      pageNumber: 'PageNumber',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      applications: DescribeApplicationsResponseBodyApplications,
      pageNumber: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesRequest extends $tea.Model {
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

export class DescribeCategoriesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  categories?: DescribeCategoriesResponseBodyCategories;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      categories: 'Categories',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      categories: DescribeCategoriesResponseBodyCategories,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeRequest extends $tea.Model {
  envId?: string;
  changeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      changeId: 'ChangeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      changeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  change?: DescribeChangeResponseBodyChange;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      change: 'Change',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      change: DescribeChangeResponseBodyChange,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangesRequest extends $tea.Model {
  envId?: string;
  actionName?: string;
  pageSize?: number;
  pageNumber?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      actionName: 'ActionName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      actionName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangesResponseBody extends $tea.Model {
  changes?: DescribeChangesResponseBodyChanges;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      changes: 'Changes',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changes: DescribeChangesResponseBodyChanges,
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChangesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChangesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexRequest extends $tea.Model {
  stackId?: string;
  envId?: string;
  profileName?: string;
  templateId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      envId: 'EnvId',
      profileName: 'ProfileName',
      templateId: 'TemplateId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      envId: 'string',
      profileName: 'string',
      templateId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  configGroups?: DescribeConfigIndexResponseBodyConfigGroups;
  code?: string;
  stackName?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      configGroups: 'ConfigGroups',
      code: 'Code',
      stackName: 'StackName',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      configGroups: DescribeConfigIndexResponseBodyConfigGroups,
      code: 'string',
      stackName: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOptionsRequest extends $tea.Model {
  stackId?: string;
  envId?: string;
  profileName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      envId: 'EnvId',
      profileName: 'ProfileName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      envId: 'string',
      profileName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOptionsResponseBody extends $tea.Model {
  stackConfigOption?: DescribeConfigOptionsResponseBodyStackConfigOption;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      stackConfigOption: 'StackConfigOption',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackConfigOption: DescribeConfigOptionsResponseBodyStackConfigOption,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOptionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigOptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigOptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigSettingsRequest extends $tea.Model {
  envId?: string;
  templateId?: string;
  pathName?: string;
  optionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      templateId: 'TemplateId',
      pathName: 'PathName',
      optionName: 'OptionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      templateId: 'string',
      pathName: 'string',
      optionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigSettingsResponseBody extends $tea.Model {
  configSettings?: DescribeConfigSettingsResponseBodyConfigSettings;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      configSettings: 'ConfigSettings',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSettings: DescribeConfigSettingsResponseBodyConfigSettings,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigTemplatesRequest extends $tea.Model {
  appId?: string;
  templateName?: string;
  templateSearch?: string;
  pageSize?: number;
  pageNumber?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateName: 'TemplateName',
      templateSearch: 'TemplateSearch',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      templateName: 'string',
      templateSearch: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigTemplatesResponseBody extends $tea.Model {
  configTemplates?: DescribeConfigTemplatesResponseBodyConfigTemplates;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      configTemplates: 'ConfigTemplates',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTemplates: DescribeConfigTemplatesResponseBodyConfigTemplates,
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceRequest extends $tea.Model {
  envId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  envResource?: DescribeEnvResourceResponseBodyEnvResource;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      envResource: 'EnvResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      envResource: DescribeEnvResourceResponseBodyEnvResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEnvResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEnvResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $tea.Model {
  envId?: string;
  startTime?: number;
  endTime?: number;
  pageSize?: number;
  pageNumber?: number;
  changeId?: string;
  lastChangeEvents?: boolean;
  reverseByTimestamp?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      changeId: 'ChangeId',
      lastChangeEvents: 'LastChangeEvents',
      reverseByTimestamp: 'ReverseByTimestamp',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      startTime: 'number',
      endTime: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      changeId: 'string',
      lastChangeEvents: 'boolean',
      reverseByTimestamp: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  events?: DescribeEventsResponseBodyEvents;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      events: 'Events',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      events: DescribeEventsResponseBodyEvents,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherLogResultRequest extends $tea.Model {
  changeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherLogResultResponseBody extends $tea.Model {
  gatherLogResult?: DescribeGatherLogResultResponseBodyGatherLogResult;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      gatherLogResult: 'GatherLogResult',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatherLogResult: DescribeGatherLogResultResponseBodyGatherLogResult,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherLogResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGatherLogResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGatherLogResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherStatsResultRequest extends $tea.Model {
  changeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherStatsResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  gatherStatsResult?: DescribeGatherStatsResultResponseBodyGatherStatsResult;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      gatherStatsResult: 'GatherStatsResult',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      gatherStatsResult: DescribeGatherStatsResultResponseBodyGatherStatsResult,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherStatsResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGatherStatsResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGatherStatsResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHealthRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHealthResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  instanceHealth?: DescribeInstanceHealthResponseBodyInstanceHealth;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      instanceHealth: 'InstanceHealth',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      instanceHealth: DescribeInstanceHealthResponseBodyInstanceHealth,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHealthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceHealthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceHealthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePkgVersionsRequest extends $tea.Model {
  appId?: string;
  pageSize?: number;
  pageNumber?: number;
  pkgVersionLabel?: string;
  pkgVersionSearch?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      pkgVersionLabel: 'PkgVersionLabel',
      pkgVersionSearch: 'PkgVersionSearch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      pkgVersionLabel: 'string',
      pkgVersionSearch: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePkgVersionsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  pkgVersions?: DescribePkgVersionsResponseBodyPkgVersions;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      pkgVersions: 'PkgVersions',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      pkgVersions: DescribePkgVersionsResponseBodyPkgVersions,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePkgVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePkgVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePkgVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublicConfigTemplatesRequest extends $tea.Model {
  categoryName?: string;
  pageSize?: number;
  pageNumber?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublicConfigTemplatesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  publicConfigTemplates?: DescribePublicConfigTemplatesResponseBodyPublicConfigTemplates;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      publicConfigTemplates: 'PublicConfigTemplates',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      publicConfigTemplates: DescribePublicConfigTemplatesResponseBodyPublicConfigTemplates,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublicConfigTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePublicConfigTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePublicConfigTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStacksRequest extends $tea.Model {
  recommendedOnly?: boolean;
  categoryName?: string;
  pageSize?: number;
  pageNumber?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      recommendedOnly: 'RecommendedOnly',
      categoryName: 'CategoryName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendedOnly: 'boolean',
      categoryName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStacksResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  stacks?: DescribeStacksResponseBodyStacks;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      stacks: 'Stacks',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      stacks: DescribeStacksResponseBodyStacks,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageRequest extends $tea.Model {
  usingSharedStorage?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      usingSharedStorage: 'UsingSharedStorage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usingSharedStorage: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageResponseBody extends $tea.Model {
  storage?: DescribeStorageResponseBodyStorage;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      storage: 'Storage',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storage: DescribeStorageResponseBodyStorage,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvLogRequest extends $tea.Model {
  envId?: string;
  targetInstances?: string;
  logPath?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      targetInstances: 'TargetInstances',
      logPath: 'LogPath',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      targetInstances: 'string',
      logPath: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvLogResponseBody extends $tea.Model {
  envChange?: GatherAppEnvLogResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: GatherAppEnvLogResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GatherAppEnvLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GatherAppEnvLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvStatsRequest extends $tea.Model {
  envId?: string;
  targetInstances?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      targetInstances: 'TargetInstances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      targetInstances: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvStatsResponseBody extends $tea.Model {
  envChange?: GatherAppEnvStatsResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: GatherAppEnvStatsResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvStatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GatherAppEnvStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GatherAppEnvStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseChangeRequest extends $tea.Model {
  changeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseChangeResponseBody extends $tea.Model {
  envChange?: PauseChangeResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: PauseChangeResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseChangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PauseChangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PauseChangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppEnvRequest extends $tea.Model {
  envId?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppEnvResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  envChangeDetail?: RebuildAppEnvResponseBodyEnvChangeDetail;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      envChangeDetail: 'EnvChangeDetail',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      envChangeDetail: RebuildAppEnvResponseBodyEnvChangeDetail,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RebuildAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebuildAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppEnvRequest extends $tea.Model {
  envId?: string;
  batchSize?: number;
  batchPercent?: number;
  batchInterval?: number;
  pauseBetweenBatches?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      batchSize: 'BatchSize',
      batchPercent: 'BatchPercent',
      batchInterval: 'BatchInterval',
      pauseBetweenBatches: 'PauseBetweenBatches',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      batchSize: 'number',
      batchPercent: 'number',
      batchInterval: 'number',
      pauseBetweenBatches: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppEnvResponseBody extends $tea.Model {
  envChange?: RestartAppEnvResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: RestartAppEnvResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeChangeRequest extends $tea.Model {
  changeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeChangeResponseBody extends $tea.Model {
  envChange?: ResumeChangeResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: ResumeChangeResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeChangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeChangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeChangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppEnvRequest extends $tea.Model {
  envId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppEnvResponseBody extends $tea.Model {
  envChange?: StartAppEnvResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: StartAppEnvResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppEnvRequest extends $tea.Model {
  envId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppEnvResponseBody extends $tea.Model {
  envChange?: StopAppEnvResponseBodyEnvChange;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      envChange: 'EnvChange',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envChange: StopAppEnvResponseBodyEnvChange,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAppEnvRequest extends $tea.Model {
  envId?: string;
  dryRun?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      dryRun: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAppEnvResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  envChangeDetail?: TerminateAppEnvResponseBodyEnvChangeDetail;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      envChangeDetail: 'EnvChangeDetail',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      envChangeDetail: TerminateAppEnvResponseBodyEnvChangeDetail,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TerminateAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TerminateAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppEnvRequest extends $tea.Model {
  envDescription?: string;
  envId?: string;
  pkgVersionId?: string;
  optionSettings?: string;
  stackId?: string;
  dryRun?: boolean;
  extraProperties?: string;
  batchSize?: string;
  batchPercent?: string;
  batchInterval?: string;
  pauseBetweenBatches?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envDescription: 'EnvDescription',
      envId: 'EnvId',
      pkgVersionId: 'PkgVersionId',
      optionSettings: 'OptionSettings',
      stackId: 'StackId',
      dryRun: 'DryRun',
      extraProperties: 'ExtraProperties',
      batchSize: 'BatchSize',
      batchPercent: 'BatchPercent',
      batchInterval: 'BatchInterval',
      pauseBetweenBatches: 'PauseBetweenBatches',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envDescription: 'string',
      envId: 'string',
      pkgVersionId: 'string',
      optionSettings: 'string',
      stackId: 'string',
      dryRun: 'boolean',
      extraProperties: 'string',
      batchSize: 'string',
      batchPercent: 'string',
      batchInterval: 'string',
      pauseBetweenBatches: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppEnvResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  envChangeDetail?: UpdateAppEnvResponseBodyEnvChangeDetail;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      envChangeDetail: 'EnvChangeDetail',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      envChangeDetail: UpdateAppEnvResponseBodyEnvChangeDetail,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationRequest extends $tea.Model {
  appId?: string;
  appDescription?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appDescription: 'AppDescription',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appDescription: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  application?: UpdateApplicationResponseBodyApplication;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      application: UpdateApplicationResponseBodyApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigTemplateRequest extends $tea.Model {
  templateDescription?: string;
  templateId?: string;
  optionSettings?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      optionSettings: 'OptionSettings',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDescription: 'string',
      templateId: 'string',
      optionSettings: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigTemplateResponseBody extends $tea.Model {
  configTemplate?: UpdateConfigTemplateResponseBodyConfigTemplate;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      configTemplate: 'ConfigTemplate',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTemplate: UpdateConfigTemplateResponseBodyConfigTemplate,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConfigSettingRequest extends $tea.Model {
  envId?: string;
  templateId?: string;
  stackId?: string;
  optionSettings?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      templateId: 'TemplateId',
      stackId: 'StackId',
      optionSettings: 'OptionSettings',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      templateId: 'string',
      stackId: 'string',
      optionSettings: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConfigSettingResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  configValidationResults?: ValidateConfigSettingResponseBodyConfigValidationResults;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      configValidationResults: 'ConfigValidationResults',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      configValidationResults: ValidateConfigSettingResponseBodyConfigValidationResults,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConfigSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateConfigSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateConfigSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppEnvResponseBodyEnvChangeDetailOperationsOperation extends $tea.Model {
  operationDescription?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      operationDescription: 'OperationDescription',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationDescription: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppEnvResponseBodyEnvChangeDetailOperations extends $tea.Model {
  operation?: CreateAppEnvResponseBodyEnvChangeDetailOperationsOperation[];
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: { 'type': 'array', 'itemType': CreateAppEnvResponseBodyEnvChangeDetailOperationsOperation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppEnvResponseBodyEnvChangeDetail extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  operations?: CreateAppEnvResponseBodyEnvChangeDetailOperations;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
      operations: 'Operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
      operations: CreateAppEnvResponseBodyEnvChangeDetailOperations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplication extends $tea.Model {
  createUsername?: string;
  appName?: string;
  updateTime?: number;
  updateUsername?: string;
  createTime?: number;
  appId?: string;
  categoryName?: string;
  usingSharedStorage?: boolean;
  appDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createUsername: 'CreateUsername',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      updateUsername: 'UpdateUsername',
      createTime: 'CreateTime',
      appId: 'AppId',
      categoryName: 'CategoryName',
      usingSharedStorage: 'UsingSharedStorage',
      appDescription: 'AppDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUsername: 'string',
      appName: 'string',
      updateTime: 'number',
      updateUsername: 'string',
      createTime: 'number',
      appId: 'string',
      categoryName: 'string',
      usingSharedStorage: 'boolean',
      appDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateResponseBodyConfigTemplate extends $tea.Model {
  updateTime?: number;
  createTime?: number;
  templateType?: string;
  stackName?: string;
  pkgVersionId?: string;
  templateName?: string;
  templateDescription?: string;
  appName?: string;
  stackId?: string;
  pkgVersionLabel?: string;
  appId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      templateType: 'TemplateType',
      stackName: 'StackName',
      pkgVersionId: 'PkgVersionId',
      templateName: 'TemplateName',
      templateDescription: 'TemplateDescription',
      appName: 'AppName',
      stackId: 'StackId',
      pkgVersionLabel: 'PkgVersionLabel',
      appId: 'AppId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      createTime: 'number',
      templateType: 'string',
      stackName: 'string',
      pkgVersionId: 'string',
      templateName: 'string',
      templateDescription: 'string',
      appName: 'string',
      stackId: 'string',
      pkgVersionLabel: 'string',
      appId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyOrderDetail extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePkgVersionResponseBodyPkgVersion extends $tea.Model {
  appName?: string;
  updateTime?: number;
  pkgVersionLabel?: string;
  createTime?: number;
  appId?: string;
  packageSource?: string;
  pkgVersionId?: string;
  pkgVersionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      updateTime: 'UpdateTime',
      pkgVersionLabel: 'PkgVersionLabel',
      createTime: 'CreateTime',
      appId: 'AppId',
      packageSource: 'PackageSource',
      pkgVersionId: 'PkgVersionId',
      pkgVersionDescription: 'PkgVersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      updateTime: 'number',
      pkgVersionLabel: 'string',
      createTime: 'number',
      appId: 'string',
      packageSource: 'string',
      pkgVersionId: 'string',
      pkgVersionDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageResponseBodyStorage extends $tea.Model {
  updateTime?: number;
  createTime?: number;
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      createTime: 'number',
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAppEnvResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealthInstanceHealthListInstanceHealth extends $tea.Model {
  appStatus?: string;
  instanceId?: string;
  disconnectedTime?: string;
  agentStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      instanceId: 'InstanceId',
      disconnectedTime: 'DisconnectedTime',
      agentStatus: 'AgentStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      instanceId: 'string',
      disconnectedTime: 'string',
      agentStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealthInstanceHealthList extends $tea.Model {
  instanceHealth?: DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealthInstanceHealthListInstanceHealth[];
  static names(): { [key: string]: string } {
    return {
      instanceHealth: 'InstanceHealth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceHealth: { 'type': 'array', 'itemType': DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealthInstanceHealthListInstanceHealth },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealth extends $tea.Model {
  enableHealthCheck?: boolean;
  envName?: string;
  envId?: string;
  instanceHealthList?: DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealthInstanceHealthList;
  static names(): { [key: string]: string } {
    return {
      enableHealthCheck: 'EnableHealthCheck',
      envName: 'EnvName',
      envId: 'EnvId',
      instanceHealthList: 'InstanceHealthList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableHealthCheck: 'boolean',
      envName: 'string',
      envId: 'string',
      instanceHealthList: DescribeAppEnvInstanceHealthResponseBodyEnvInstanceHealthInstanceHealthList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvsResponseBodyAppEnvsAppEnv extends $tea.Model {
  updateTime?: number;
  totalInstances?: number;
  pkgVersionStorageKey?: string;
  latestChangeId?: string;
  envStatus?: string;
  createTime?: number;
  lastEnvStatus?: string;
  pkgVersionId?: string;
  envDescription?: string;
  applyingChange?: boolean;
  envType?: string;
  appName?: string;
  createUsername?: string;
  appId?: string;
  dataRoot?: string;
  storageBase?: string;
  updateUsername?: string;
  envName?: string;
  logBase?: string;
  stackName?: string;
  categoryName?: string;
  usingSharedStorage?: boolean;
  changeBanner?: string;
  stackId?: string;
  pkgVersionLabel?: string;
  envId?: string;
  abortingChange?: boolean;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      totalInstances: 'TotalInstances',
      pkgVersionStorageKey: 'PkgVersionStorageKey',
      latestChangeId: 'LatestChangeId',
      envStatus: 'EnvStatus',
      createTime: 'CreateTime',
      lastEnvStatus: 'LastEnvStatus',
      pkgVersionId: 'PkgVersionId',
      envDescription: 'EnvDescription',
      applyingChange: 'ApplyingChange',
      envType: 'EnvType',
      appName: 'AppName',
      createUsername: 'CreateUsername',
      appId: 'AppId',
      dataRoot: 'DataRoot',
      storageBase: 'StorageBase',
      updateUsername: 'UpdateUsername',
      envName: 'EnvName',
      logBase: 'LogBase',
      stackName: 'StackName',
      categoryName: 'CategoryName',
      usingSharedStorage: 'UsingSharedStorage',
      changeBanner: 'ChangeBanner',
      stackId: 'StackId',
      pkgVersionLabel: 'PkgVersionLabel',
      envId: 'EnvId',
      abortingChange: 'AbortingChange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      totalInstances: 'number',
      pkgVersionStorageKey: 'string',
      latestChangeId: 'string',
      envStatus: 'string',
      createTime: 'number',
      lastEnvStatus: 'string',
      pkgVersionId: 'string',
      envDescription: 'string',
      applyingChange: 'boolean',
      envType: 'string',
      appName: 'string',
      createUsername: 'string',
      appId: 'string',
      dataRoot: 'string',
      storageBase: 'string',
      updateUsername: 'string',
      envName: 'string',
      logBase: 'string',
      stackName: 'string',
      categoryName: 'string',
      usingSharedStorage: 'boolean',
      changeBanner: 'string',
      stackId: 'string',
      pkgVersionLabel: 'string',
      envId: 'string',
      abortingChange: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvsResponseBodyAppEnvs extends $tea.Model {
  appEnv?: DescribeAppEnvsResponseBodyAppEnvsAppEnv[];
  static names(): { [key: string]: string } {
    return {
      appEnv: 'AppEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnv: { 'type': 'array', 'itemType': DescribeAppEnvsResponseBodyAppEnvsAppEnv },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvStatusResponseBodyEnvStatusInstanceAgentStatus extends $tea.Model {
  connectedInstances?: number;
  disconnectedInstances?: number;
  static names(): { [key: string]: string } {
    return {
      connectedInstances: 'ConnectedInstances',
      disconnectedInstances: 'DisconnectedInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectedInstances: 'number',
      disconnectedInstances: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvStatusResponseBodyEnvStatusInstanceAppStatus extends $tea.Model {
  healthyInstances?: number;
  stoppedInstances?: number;
  unhealthyInstances?: number;
  unknownInstances?: number;
  static names(): { [key: string]: string } {
    return {
      healthyInstances: 'HealthyInstances',
      stoppedInstances: 'StoppedInstances',
      unhealthyInstances: 'UnhealthyInstances',
      unknownInstances: 'UnknownInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthyInstances: 'number',
      stoppedInstances: 'number',
      unhealthyInstances: 'number',
      unknownInstances: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvStatusResponseBodyEnvStatus extends $tea.Model {
  changeBanner?: string;
  latestChangeId?: string;
  envStatus?: string;
  envName?: string;
  instanceAgentStatus?: DescribeAppEnvStatusResponseBodyEnvStatusInstanceAgentStatus;
  lastEnvStatus?: string;
  instanceAppStatus?: DescribeAppEnvStatusResponseBodyEnvStatusInstanceAppStatus;
  envId?: string;
  abortingChange?: boolean;
  applyingChange?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeBanner: 'ChangeBanner',
      latestChangeId: 'LatestChangeId',
      envStatus: 'EnvStatus',
      envName: 'EnvName',
      instanceAgentStatus: 'InstanceAgentStatus',
      lastEnvStatus: 'LastEnvStatus',
      instanceAppStatus: 'InstanceAppStatus',
      envId: 'EnvId',
      abortingChange: 'AbortingChange',
      applyingChange: 'ApplyingChange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeBanner: 'string',
      latestChangeId: 'string',
      envStatus: 'string',
      envName: 'string',
      instanceAgentStatus: DescribeAppEnvStatusResponseBodyEnvStatusInstanceAgentStatus,
      lastEnvStatus: 'string',
      instanceAppStatus: DescribeAppEnvStatusResponseBodyEnvStatusInstanceAppStatus,
      envId: 'string',
      abortingChange: 'boolean',
      applyingChange: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponseBodyApplicationsApplication extends $tea.Model {
  totalEnvs?: number;
  updateTime?: number;
  updateUsername?: string;
  runningEnvs?: number;
  createTime?: number;
  categoryName?: string;
  usingSharedStorage?: string;
  createUsername?: string;
  appName?: string;
  appId?: string;
  terminatedEnvs?: number;
  appDescription?: string;
  static names(): { [key: string]: string } {
    return {
      totalEnvs: 'TotalEnvs',
      updateTime: 'UpdateTime',
      updateUsername: 'UpdateUsername',
      runningEnvs: 'RunningEnvs',
      createTime: 'CreateTime',
      categoryName: 'CategoryName',
      usingSharedStorage: 'UsingSharedStorage',
      createUsername: 'CreateUsername',
      appName: 'AppName',
      appId: 'AppId',
      terminatedEnvs: 'TerminatedEnvs',
      appDescription: 'AppDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalEnvs: 'number',
      updateTime: 'number',
      updateUsername: 'string',
      runningEnvs: 'number',
      createTime: 'number',
      categoryName: 'string',
      usingSharedStorage: 'string',
      createUsername: 'string',
      appName: 'string',
      appId: 'string',
      terminatedEnvs: 'number',
      appDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponseBodyApplications extends $tea.Model {
  application?: DescribeApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': DescribeApplicationsResponseBodyApplicationsApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponseBodyCategoriesCategoryDemoProjectsDemoProject extends $tea.Model {
  sourceUrl?: string;
  packageDownloadUrl?: string;
  packageUrl?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceUrl: 'SourceUrl',
      packageDownloadUrl: 'PackageDownloadUrl',
      packageUrl: 'PackageUrl',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUrl: 'string',
      packageDownloadUrl: 'string',
      packageUrl: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponseBodyCategoriesCategoryDemoProjects extends $tea.Model {
  demoProject?: DescribeCategoriesResponseBodyCategoriesCategoryDemoProjectsDemoProject[];
  static names(): { [key: string]: string } {
    return {
      demoProject: 'DemoProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoProject: { 'type': 'array', 'itemType': DescribeCategoriesResponseBodyCategoriesCategoryDemoProjectsDemoProject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponseBodyCategoriesCategory extends $tea.Model {
  categoryLogo?: string;
  updateTime?: string;
  demoProjects?: DescribeCategoriesResponseBodyCategoriesCategoryDemoProjects;
  createTime?: string;
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
  static names(): { [key: string]: string } {
    return {
      categoryLogo: 'CategoryLogo',
      updateTime: 'UpdateTime',
      demoProjects: 'DemoProjects',
      createTime: 'CreateTime',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      categoryDescription: 'CategoryDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryLogo: 'string',
      updateTime: 'string',
      demoProjects: DescribeCategoriesResponseBodyCategoriesCategoryDemoProjects,
      createTime: 'string',
      categoryId: 'string',
      categoryName: 'string',
      categoryDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoriesResponseBodyCategories extends $tea.Model {
  category?: DescribeCategoriesResponseBodyCategoriesCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': DescribeCategoriesResponseBodyCategoriesCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeResponseBodyChange extends $tea.Model {
  changePaused?: boolean;
  changeDescription?: string;
  finishTime?: number;
  updateTime?: number;
  changeTimedout?: boolean;
  createTime?: number;
  changeMessage?: string;
  actionName?: string;
  changeFinished?: boolean;
  createUsername?: string;
  changeId?: string;
  changeAborted?: boolean;
  changeSucceed?: boolean;
  envId?: string;
  changeName?: string;
  static names(): { [key: string]: string } {
    return {
      changePaused: 'ChangePaused',
      changeDescription: 'ChangeDescription',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
      changeTimedout: 'ChangeTimedout',
      createTime: 'CreateTime',
      changeMessage: 'ChangeMessage',
      actionName: 'ActionName',
      changeFinished: 'ChangeFinished',
      createUsername: 'CreateUsername',
      changeId: 'ChangeId',
      changeAborted: 'ChangeAborted',
      changeSucceed: 'ChangeSucceed',
      envId: 'EnvId',
      changeName: 'ChangeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePaused: 'boolean',
      changeDescription: 'string',
      finishTime: 'number',
      updateTime: 'number',
      changeTimedout: 'boolean',
      createTime: 'number',
      changeMessage: 'string',
      actionName: 'string',
      changeFinished: 'boolean',
      createUsername: 'string',
      changeId: 'string',
      changeAborted: 'boolean',
      changeSucceed: 'boolean',
      envId: 'string',
      changeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangesResponseBodyChangesChange extends $tea.Model {
  changePaused?: boolean;
  changeDescription?: string;
  finishTime?: number;
  updateTime?: number;
  changeTimedout?: boolean;
  createTime?: number;
  changeMessage?: string;
  actionName?: string;
  changeFinished?: boolean;
  createUsername?: string;
  changeId?: string;
  changeAborted?: boolean;
  changeSucceed?: boolean;
  envId?: string;
  changeName?: string;
  static names(): { [key: string]: string } {
    return {
      changePaused: 'ChangePaused',
      changeDescription: 'ChangeDescription',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
      changeTimedout: 'ChangeTimedout',
      createTime: 'CreateTime',
      changeMessage: 'ChangeMessage',
      actionName: 'ActionName',
      changeFinished: 'ChangeFinished',
      createUsername: 'CreateUsername',
      changeId: 'ChangeId',
      changeAborted: 'ChangeAborted',
      changeSucceed: 'ChangeSucceed',
      envId: 'EnvId',
      changeName: 'ChangeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePaused: 'boolean',
      changeDescription: 'string',
      finishTime: 'number',
      updateTime: 'number',
      changeTimedout: 'boolean',
      createTime: 'number',
      changeMessage: 'string',
      actionName: 'string',
      changeFinished: 'boolean',
      createUsername: 'string',
      changeId: 'string',
      changeAborted: 'boolean',
      changeSucceed: 'boolean',
      envId: 'string',
      changeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangesResponseBodyChanges extends $tea.Model {
  change?: DescribeChangesResponseBodyChangesChange[];
  static names(): { [key: string]: string } {
    return {
      change: 'Change',
    };
  }

  static types(): { [key: string]: any } {
    return {
      change: { 'type': 'array', 'itemType': DescribeChangesResponseBodyChangesChange },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPathConfigOptionsConfigOption extends $tea.Model {
  regexDesc?: string;
  maxValue?: number;
  editorType?: string;
  minValue?: number;
  optionLabel?: string;
  defaultValue?: string;
  maxLength?: number;
  regexPattern?: string;
  changeSeverity?: string;
  optionDescription?: string;
  optionName?: string;
  pathName?: string;
  hiddenOption?: boolean;
  valueType?: string;
  minLength?: number;
  valueOptions?: string;
  readonlyOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regexDesc: 'RegexDesc',
      maxValue: 'MaxValue',
      editorType: 'EditorType',
      minValue: 'MinValue',
      optionLabel: 'OptionLabel',
      defaultValue: 'DefaultValue',
      maxLength: 'MaxLength',
      regexPattern: 'RegexPattern',
      changeSeverity: 'ChangeSeverity',
      optionDescription: 'OptionDescription',
      optionName: 'OptionName',
      pathName: 'PathName',
      hiddenOption: 'HiddenOption',
      valueType: 'ValueType',
      minLength: 'MinLength',
      valueOptions: 'ValueOptions',
      readonlyOption: 'ReadonlyOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regexDesc: 'string',
      maxValue: 'number',
      editorType: 'string',
      minValue: 'number',
      optionLabel: 'string',
      defaultValue: 'string',
      maxLength: 'number',
      regexPattern: 'string',
      changeSeverity: 'string',
      optionDescription: 'string',
      optionName: 'string',
      pathName: 'string',
      hiddenOption: 'boolean',
      valueType: 'string',
      minLength: 'number',
      valueOptions: 'string',
      readonlyOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPathConfigOptions extends $tea.Model {
  configOption?: DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPathConfigOptionsConfigOption[];
  static names(): { [key: string]: string } {
    return {
      configOption: 'ConfigOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configOption: { 'type': 'array', 'itemType': DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPathConfigOptionsConfigOption },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPath extends $tea.Model {
  pathName?: string;
  hiddenPath?: boolean;
  configOptions?: DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPathConfigOptions;
  pathLabel?: string;
  static names(): { [key: string]: string } {
    return {
      pathName: 'PathName',
      hiddenPath: 'HiddenPath',
      configOptions: 'ConfigOptions',
      pathLabel: 'PathLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathName: 'string',
      hiddenPath: 'boolean',
      configOptions: DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPathConfigOptions,
      pathLabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPaths extends $tea.Model {
  configPath?: DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPath[];
  static names(): { [key: string]: string } {
    return {
      configPath: 'ConfigPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configPath: { 'type': 'array', 'itemType': DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPathsConfigPath },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponseBodyConfigGroupsConfigGroup extends $tea.Model {
  configPaths?: DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPaths;
  groupName?: string;
  groupLabel?: string;
  static names(): { [key: string]: string } {
    return {
      configPaths: 'ConfigPaths',
      groupName: 'GroupName',
      groupLabel: 'GroupLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configPaths: DescribeConfigIndexResponseBodyConfigGroupsConfigGroupConfigPaths,
      groupName: 'string',
      groupLabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigIndexResponseBodyConfigGroups extends $tea.Model {
  configGroup?: DescribeConfigIndexResponseBodyConfigGroupsConfigGroup[];
  static names(): { [key: string]: string } {
    return {
      configGroup: 'ConfigGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configGroup: { 'type': 'array', 'itemType': DescribeConfigIndexResponseBodyConfigGroupsConfigGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOptionsResponseBodyStackConfigOptionConfigOptionsConfigOption extends $tea.Model {
  regexDesc?: string;
  maxValue?: number;
  editorType?: string;
  minValue?: number;
  defaultValue?: string;
  maxLength?: number;
  optionLabel?: string;
  regexPattern?: string;
  changeSeverity?: string;
  optionDescription?: string;
  optionName?: string;
  pathName?: string;
  hiddenOption?: boolean;
  valueType?: string;
  minLength?: number;
  valueOptions?: string;
  readonlyOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regexDesc: 'RegexDesc',
      maxValue: 'MaxValue',
      editorType: 'EditorType',
      minValue: 'MinValue',
      defaultValue: 'DefaultValue',
      maxLength: 'MaxLength',
      optionLabel: 'OptionLabel',
      regexPattern: 'RegexPattern',
      changeSeverity: 'ChangeSeverity',
      optionDescription: 'OptionDescription',
      optionName: 'OptionName',
      pathName: 'PathName',
      hiddenOption: 'HiddenOption',
      valueType: 'ValueType',
      minLength: 'MinLength',
      valueOptions: 'ValueOptions',
      readonlyOption: 'ReadonlyOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regexDesc: 'string',
      maxValue: 'number',
      editorType: 'string',
      minValue: 'number',
      defaultValue: 'string',
      maxLength: 'number',
      optionLabel: 'string',
      regexPattern: 'string',
      changeSeverity: 'string',
      optionDescription: 'string',
      optionName: 'string',
      pathName: 'string',
      hiddenOption: 'boolean',
      valueType: 'string',
      minLength: 'number',
      valueOptions: 'string',
      readonlyOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOptionsResponseBodyStackConfigOptionConfigOptions extends $tea.Model {
  configOption?: DescribeConfigOptionsResponseBodyStackConfigOptionConfigOptionsConfigOption[];
  static names(): { [key: string]: string } {
    return {
      configOption: 'ConfigOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configOption: { 'type': 'array', 'itemType': DescribeConfigOptionsResponseBodyStackConfigOptionConfigOptionsConfigOption },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOptionsResponseBodyStackConfigOption extends $tea.Model {
  stackId?: string;
  configOptions?: DescribeConfigOptionsResponseBodyStackConfigOptionConfigOptions;
  stackName?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      configOptions: 'ConfigOptions',
      stackName: 'StackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      configOptions: DescribeConfigOptionsResponseBodyStackConfigOptionConfigOptions,
      stackName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigSettingsResponseBodyConfigSettingsConfigSetting extends $tea.Model {
  optionName?: string;
  pathName?: string;
  settingValue?: string;
  static names(): { [key: string]: string } {
    return {
      optionName: 'OptionName',
      pathName: 'PathName',
      settingValue: 'SettingValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionName: 'string',
      pathName: 'string',
      settingValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigSettingsResponseBodyConfigSettings extends $tea.Model {
  configSetting?: DescribeConfigSettingsResponseBodyConfigSettingsConfigSetting[];
  static names(): { [key: string]: string } {
    return {
      configSetting: 'ConfigSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSetting: { 'type': 'array', 'itemType': DescribeConfigSettingsResponseBodyConfigSettingsConfigSetting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigTemplatesResponseBodyConfigTemplatesConfigTemplate extends $tea.Model {
  templateDescription?: string;
  appName?: string;
  updateTime?: number;
  stackId?: string;
  pkgVersionLabel?: string;
  createTime?: number;
  appId?: string;
  stackName?: string;
  pkgVersionId?: string;
  templateName?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateDescription: 'TemplateDescription',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      stackId: 'StackId',
      pkgVersionLabel: 'PkgVersionLabel',
      createTime: 'CreateTime',
      appId: 'AppId',
      stackName: 'StackName',
      pkgVersionId: 'PkgVersionId',
      templateName: 'TemplateName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDescription: 'string',
      appName: 'string',
      updateTime: 'number',
      stackId: 'string',
      pkgVersionLabel: 'string',
      createTime: 'number',
      appId: 'string',
      stackName: 'string',
      pkgVersionId: 'string',
      templateName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigTemplatesResponseBodyConfigTemplates extends $tea.Model {
  configTemplate?: DescribeConfigTemplatesResponseBodyConfigTemplatesConfigTemplate[];
  static names(): { [key: string]: string } {
    return {
      configTemplate: 'ConfigTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTemplate: { 'type': 'array', 'itemType': DescribeConfigTemplatesResponseBodyConfigTemplatesConfigTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceVSwitchesVSwitch extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceVSwitches extends $tea.Model {
  vSwitch?: DescribeEnvResourceResponseBodyEnvResourceVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeEnvResourceResponseBodyEnvResourceVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceVpc extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceMonitorGroup extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancerListenersListener extends $tea.Model {
  protocol?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancerListeners extends $tea.Model {
  listener?: DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancerListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancerListenersListener },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancer extends $tea.Model {
  imported?: boolean;
  protocol?: string;
  addressType?: string;
  listeners?: DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancerListeners;
  port?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      imported: 'Imported',
      protocol: 'Protocol',
      addressType: 'AddressType',
      listeners: 'Listeners',
      port: 'Port',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imported: 'boolean',
      protocol: 'string',
      addressType: 'string',
      listeners: DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancerListeners,
      port: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceLoadBalancers extends $tea.Model {
  loadBalancer?: DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancer[];
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: { 'type': 'array', 'itemType': DescribeEnvResourceResponseBodyEnvResourceLoadBalancersLoadBalancer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceInstancesInstance extends $tea.Model {
  imported?: boolean;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      imported: 'Imported',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imported: 'boolean',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceInstances extends $tea.Model {
  instance?: DescribeEnvResourceResponseBodyEnvResourceInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeEnvResourceResponseBodyEnvResourceInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceDefaultSecurityGroupsSecurityGroup extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceDefaultSecurityGroups extends $tea.Model {
  securityGroup?: DescribeEnvResourceResponseBodyEnvResourceDefaultSecurityGroupsSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeEnvResourceResponseBodyEnvResourceDefaultSecurityGroupsSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceScalingGroup extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceDomainsDomain extends $tea.Model {
  isDefault?: boolean;
  hostedBy?: string;
  subDomain?: string;
  domainName?: string;
  managedBy?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      hostedBy: 'HostedBy',
      subDomain: 'SubDomain',
      domainName: 'DomainName',
      managedBy: 'ManagedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      hostedBy: 'string',
      subDomain: 'string',
      domainName: 'string',
      managedBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceDomains extends $tea.Model {
  domain?: DescribeEnvResourceResponseBodyEnvResourceDomainsDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': DescribeEnvResourceResponseBodyEnvResourceDomainsDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceRdsInstancesRdsInstance extends $tea.Model {
  imported?: boolean;
  databaseName?: string;
  id?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      imported: 'Imported',
      databaseName: 'DatabaseName',
      id: 'Id',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imported: 'boolean',
      databaseName: 'string',
      id: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResourceRdsInstances extends $tea.Model {
  rdsInstance?: DescribeEnvResourceResponseBodyEnvResourceRdsInstancesRdsInstance[];
  static names(): { [key: string]: string } {
    return {
      rdsInstance: 'RdsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstance: { 'type': 'array', 'itemType': DescribeEnvResourceResponseBodyEnvResourceRdsInstancesRdsInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvResourceResponseBodyEnvResource extends $tea.Model {
  launchTemplateId?: string;
  envName?: string;
  vSwitches?: DescribeEnvResourceResponseBodyEnvResourceVSwitches;
  vpc?: DescribeEnvResourceResponseBodyEnvResourceVpc;
  monitorGroup?: DescribeEnvResourceResponseBodyEnvResourceMonitorGroup;
  launchConfigurationId?: string;
  loadBalancers?: DescribeEnvResourceResponseBodyEnvResourceLoadBalancers;
  instances?: DescribeEnvResourceResponseBodyEnvResourceInstances;
  defaultSecurityGroups?: DescribeEnvResourceResponseBodyEnvResourceDefaultSecurityGroups;
  scalingGroup?: DescribeEnvResourceResponseBodyEnvResourceScalingGroup;
  domains?: DescribeEnvResourceResponseBodyEnvResourceDomains;
  rdsInstances?: DescribeEnvResourceResponseBodyEnvResourceRdsInstances;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      launchTemplateId: 'LaunchTemplateId',
      envName: 'EnvName',
      vSwitches: 'VSwitches',
      vpc: 'Vpc',
      monitorGroup: 'MonitorGroup',
      launchConfigurationId: 'LaunchConfigurationId',
      loadBalancers: 'LoadBalancers',
      instances: 'Instances',
      defaultSecurityGroups: 'DefaultSecurityGroups',
      scalingGroup: 'ScalingGroup',
      domains: 'Domains',
      rdsInstances: 'RdsInstances',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateId: 'string',
      envName: 'string',
      vSwitches: DescribeEnvResourceResponseBodyEnvResourceVSwitches,
      vpc: DescribeEnvResourceResponseBodyEnvResourceVpc,
      monitorGroup: DescribeEnvResourceResponseBodyEnvResourceMonitorGroup,
      launchConfigurationId: 'string',
      loadBalancers: DescribeEnvResourceResponseBodyEnvResourceLoadBalancers,
      instances: DescribeEnvResourceResponseBodyEnvResourceInstances,
      defaultSecurityGroups: DescribeEnvResourceResponseBodyEnvResourceDefaultSecurityGroups,
      scalingGroup: DescribeEnvResourceResponseBodyEnvResourceScalingGroup,
      domains: DescribeEnvResourceResponseBodyEnvResourceDomains,
      rdsInstances: DescribeEnvResourceResponseBodyEnvResourceRdsInstances,
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventsEventObjectAttrsObjectAttr extends $tea.Model {
  attributeName?: string;
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventsEventObjectAttrs extends $tea.Model {
  objectAttr?: DescribeEventsResponseBodyEventsEventObjectAttrsObjectAttr[];
  static names(): { [key: string]: string } {
    return {
      objectAttr: 'ObjectAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectAttr: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventsEventObjectAttrsObjectAttr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventsEventMsgParams extends $tea.Model {
  msgParam?: string[];
  static names(): { [key: string]: string } {
    return {
      msgParam: 'MsgParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgParam: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventsEvent extends $tea.Model {
  primaryUserName?: string;
  objectType?: string;
  enventName?: string;
  eventTimestamp?: number;
  secondUserName?: string;
  msgCode?: string;
  objectName?: string;
  eventMessage?: string;
  eventId?: string;
  objectAttrs?: DescribeEventsResponseBodyEventsEventObjectAttrs;
  appId?: string;
  eventLevel?: string;
  objectId?: string;
  msgParams?: DescribeEventsResponseBodyEventsEventMsgParams;
  primaryUserId?: string;
  envId?: string;
  traceId?: string;
  secondUserId?: string;
  static names(): { [key: string]: string } {
    return {
      primaryUserName: 'PrimaryUserName',
      objectType: 'ObjectType',
      enventName: 'EnventName',
      eventTimestamp: 'EventTimestamp',
      secondUserName: 'SecondUserName',
      msgCode: 'MsgCode',
      objectName: 'ObjectName',
      eventMessage: 'EventMessage',
      eventId: 'EventId',
      objectAttrs: 'ObjectAttrs',
      appId: 'AppId',
      eventLevel: 'EventLevel',
      objectId: 'ObjectId',
      msgParams: 'MsgParams',
      primaryUserId: 'PrimaryUserId',
      envId: 'EnvId',
      traceId: 'TraceId',
      secondUserId: 'SecondUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryUserName: 'string',
      objectType: 'string',
      enventName: 'string',
      eventTimestamp: 'number',
      secondUserName: 'string',
      msgCode: 'string',
      objectName: 'string',
      eventMessage: 'string',
      eventId: 'string',
      objectAttrs: DescribeEventsResponseBodyEventsEventObjectAttrs,
      appId: 'string',
      eventLevel: 'string',
      objectId: 'string',
      msgParams: DescribeEventsResponseBodyEventsEventMsgParams,
      primaryUserId: 'string',
      envId: 'string',
      traceId: 'string',
      secondUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEvents extends $tea.Model {
  event?: DescribeEventsResponseBodyEventsEvent[];
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventsEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherLogResultResponseBodyGatherLogResultChange extends $tea.Model {
  changePaused?: boolean;
  changeDescription?: string;
  finishTime?: number;
  updateTime?: number;
  changeTimedout?: boolean;
  createTime?: number;
  changeMessage?: string;
  actionName?: string;
  changeFinished?: boolean;
  createUsername?: string;
  changeSucceeded?: boolean;
  changeId?: string;
  changeAborted?: boolean;
  envId?: string;
  changeName?: string;
  static names(): { [key: string]: string } {
    return {
      changePaused: 'ChangePaused',
      changeDescription: 'ChangeDescription',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
      changeTimedout: 'ChangeTimedout',
      createTime: 'CreateTime',
      changeMessage: 'ChangeMessage',
      actionName: 'ActionName',
      changeFinished: 'ChangeFinished',
      createUsername: 'CreateUsername',
      changeSucceeded: 'ChangeSucceeded',
      changeId: 'ChangeId',
      changeAborted: 'ChangeAborted',
      envId: 'EnvId',
      changeName: 'ChangeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePaused: 'boolean',
      changeDescription: 'string',
      finishTime: 'number',
      updateTime: 'number',
      changeTimedout: 'boolean',
      createTime: 'number',
      changeMessage: 'string',
      actionName: 'string',
      changeFinished: 'boolean',
      createUsername: 'string',
      changeSucceeded: 'boolean',
      changeId: 'string',
      changeAborted: 'boolean',
      envId: 'string',
      changeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherLogResultResponseBodyGatherLogResultInstanceResultsInstanceResult extends $tea.Model {
  taskMessage?: string;
  storageKey?: string;
  instanceId?: string;
  taskSucceeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskMessage: 'TaskMessage',
      storageKey: 'StorageKey',
      instanceId: 'InstanceId',
      taskSucceeded: 'TaskSucceeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskMessage: 'string',
      storageKey: 'string',
      instanceId: 'string',
      taskSucceeded: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherLogResultResponseBodyGatherLogResultInstanceResults extends $tea.Model {
  instanceResult?: DescribeGatherLogResultResponseBodyGatherLogResultInstanceResultsInstanceResult[];
  static names(): { [key: string]: string } {
    return {
      instanceResult: 'InstanceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResult: { 'type': 'array', 'itemType': DescribeGatherLogResultResponseBodyGatherLogResultInstanceResultsInstanceResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherLogResultResponseBodyGatherLogResult extends $tea.Model {
  logPath?: string;
  change?: DescribeGatherLogResultResponseBodyGatherLogResultChange;
  instanceResults?: DescribeGatherLogResultResponseBodyGatherLogResultInstanceResults;
  static names(): { [key: string]: string } {
    return {
      logPath: 'LogPath',
      change: 'Change',
      instanceResults: 'InstanceResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logPath: 'string',
      change: DescribeGatherLogResultResponseBodyGatherLogResultChange,
      instanceResults: DescribeGatherLogResultResponseBodyGatherLogResultInstanceResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherStatsResultResponseBodyGatherStatsResultChange extends $tea.Model {
  changePaused?: boolean;
  changeDescription?: string;
  finishTime?: number;
  updateTime?: number;
  changeTimedout?: boolean;
  createTime?: number;
  changeMessage?: string;
  actionName?: string;
  changeFinished?: boolean;
  createUsername?: string;
  changeSucceeded?: boolean;
  changeId?: string;
  changeAborted?: boolean;
  envId?: string;
  changeName?: string;
  static names(): { [key: string]: string } {
    return {
      changePaused: 'ChangePaused',
      changeDescription: 'ChangeDescription',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
      changeTimedout: 'ChangeTimedout',
      createTime: 'CreateTime',
      changeMessage: 'ChangeMessage',
      actionName: 'ActionName',
      changeFinished: 'ChangeFinished',
      createUsername: 'CreateUsername',
      changeSucceeded: 'ChangeSucceeded',
      changeId: 'ChangeId',
      changeAborted: 'ChangeAborted',
      envId: 'EnvId',
      changeName: 'ChangeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePaused: 'boolean',
      changeDescription: 'string',
      finishTime: 'number',
      updateTime: 'number',
      changeTimedout: 'boolean',
      createTime: 'number',
      changeMessage: 'string',
      actionName: 'string',
      changeFinished: 'boolean',
      createUsername: 'string',
      changeSucceeded: 'boolean',
      changeId: 'string',
      changeAborted: 'boolean',
      envId: 'string',
      changeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherStatsResultResponseBodyGatherStatsResultInstanceResultsInstanceResult extends $tea.Model {
  taskMessage?: string;
  storageKey?: string;
  instanceId?: string;
  taskSucceeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskMessage: 'TaskMessage',
      storageKey: 'StorageKey',
      instanceId: 'InstanceId',
      taskSucceeded: 'TaskSucceeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskMessage: 'string',
      storageKey: 'string',
      instanceId: 'string',
      taskSucceeded: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherStatsResultResponseBodyGatherStatsResultInstanceResults extends $tea.Model {
  instanceResult?: DescribeGatherStatsResultResponseBodyGatherStatsResultInstanceResultsInstanceResult[];
  static names(): { [key: string]: string } {
    return {
      instanceResult: 'InstanceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResult: { 'type': 'array', 'itemType': DescribeGatherStatsResultResponseBodyGatherStatsResultInstanceResultsInstanceResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatherStatsResultResponseBodyGatherStatsResult extends $tea.Model {
  change?: DescribeGatherStatsResultResponseBodyGatherStatsResultChange;
  instanceResults?: DescribeGatherStatsResultResponseBodyGatherStatsResultInstanceResults;
  static names(): { [key: string]: string } {
    return {
      change: 'Change',
      instanceResults: 'InstanceResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      change: DescribeGatherStatsResultResponseBodyGatherStatsResultChange,
      instanceResults: DescribeGatherStatsResultResponseBodyGatherStatsResultInstanceResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHealthResponseBodyInstanceHealth extends $tea.Model {
  appStatus?: string;
  instanceId?: string;
  disconnectedTime?: number;
  agentStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      instanceId: 'InstanceId',
      disconnectedTime: 'DisconnectedTime',
      agentStatus: 'AgentStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      instanceId: 'string',
      disconnectedTime: 'number',
      agentStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePkgVersionsResponseBodyPkgVersionsPkgVersion extends $tea.Model {
  createUsername?: string;
  appName?: string;
  updateTime?: number;
  pkgVersionLabel?: string;
  createTime?: number;
  packageSource?: string;
  appId?: string;
  packageETag?: string;
  pkgVersionId?: string;
  pkgVersionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createUsername: 'CreateUsername',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      pkgVersionLabel: 'PkgVersionLabel',
      createTime: 'CreateTime',
      packageSource: 'PackageSource',
      appId: 'AppId',
      packageETag: 'PackageETag',
      pkgVersionId: 'PkgVersionId',
      pkgVersionDescription: 'PkgVersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUsername: 'string',
      appName: 'string',
      updateTime: 'number',
      pkgVersionLabel: 'string',
      createTime: 'number',
      packageSource: 'string',
      appId: 'string',
      packageETag: 'string',
      pkgVersionId: 'string',
      pkgVersionDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePkgVersionsResponseBodyPkgVersions extends $tea.Model {
  pkgVersion?: DescribePkgVersionsResponseBodyPkgVersionsPkgVersion[];
  static names(): { [key: string]: string } {
    return {
      pkgVersion: 'PkgVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pkgVersion: { 'type': 'array', 'itemType': DescribePkgVersionsResponseBodyPkgVersionsPkgVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublicConfigTemplatesResponseBodyPublicConfigTemplatesPublicConfigTemplate extends $tea.Model {
  templateDescription?: string;
  updateTime?: number;
  stackId?: string;
  templateLogo?: string;
  createTime?: number;
  packageSource?: string;
  stackName?: string;
  templateName?: string;
  categoryName?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateDescription: 'TemplateDescription',
      updateTime: 'UpdateTime',
      stackId: 'StackId',
      templateLogo: 'TemplateLogo',
      createTime: 'CreateTime',
      packageSource: 'PackageSource',
      stackName: 'StackName',
      templateName: 'TemplateName',
      categoryName: 'CategoryName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDescription: 'string',
      updateTime: 'number',
      stackId: 'string',
      templateLogo: 'string',
      createTime: 'number',
      packageSource: 'string',
      stackName: 'string',
      templateName: 'string',
      categoryName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublicConfigTemplatesResponseBodyPublicConfigTemplates extends $tea.Model {
  publicConfigTemplate?: DescribePublicConfigTemplatesResponseBodyPublicConfigTemplatesPublicConfigTemplate[];
  static names(): { [key: string]: string } {
    return {
      publicConfigTemplate: 'PublicConfigTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicConfigTemplate: { 'type': 'array', 'itemType': DescribePublicConfigTemplatesResponseBodyPublicConfigTemplatesPublicConfigTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStacksResponseBodyStacksStack extends $tea.Model {
  updateTime?: number;
  stackId?: string;
  createTime?: number;
  recommendedStack?: boolean;
  stackName?: string;
  categoryName?: string;
  versionCode?: number;
  latestStack?: boolean;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      stackId: 'StackId',
      createTime: 'CreateTime',
      recommendedStack: 'RecommendedStack',
      stackName: 'StackName',
      categoryName: 'CategoryName',
      versionCode: 'VersionCode',
      latestStack: 'LatestStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      stackId: 'string',
      createTime: 'number',
      recommendedStack: 'boolean',
      stackName: 'string',
      categoryName: 'string',
      versionCode: 'number',
      latestStack: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStacksResponseBodyStacks extends $tea.Model {
  stack?: DescribeStacksResponseBodyStacksStack[];
  static names(): { [key: string]: string } {
    return {
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stack: { 'type': 'array', 'itemType': DescribeStacksResponseBodyStacksStack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageResponseBodyStorage extends $tea.Model {
  updateTime?: number;
  keyPrefix?: string;
  pkgKeyPrefix?: string;
  createTime?: number;
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      keyPrefix: 'KeyPrefix',
      pkgKeyPrefix: 'PkgKeyPrefix',
      createTime: 'CreateTime',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      keyPrefix: 'string',
      pkgKeyPrefix: 'string',
      createTime: 'number',
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvLogResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatherAppEnvStatsResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseChangeResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppEnvResponseBodyEnvChangeDetailOperationsOperation extends $tea.Model {
  operationDescription?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      operationDescription: 'OperationDescription',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationDescription: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppEnvResponseBodyEnvChangeDetailOperations extends $tea.Model {
  operation?: RebuildAppEnvResponseBodyEnvChangeDetailOperationsOperation[];
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: { 'type': 'array', 'itemType': RebuildAppEnvResponseBodyEnvChangeDetailOperationsOperation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppEnvResponseBodyEnvChangeDetail extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  operations?: RebuildAppEnvResponseBodyEnvChangeDetailOperations;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
      operations: 'Operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
      operations: RebuildAppEnvResponseBodyEnvChangeDetailOperations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppEnvResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeChangeResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppEnvResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppEnvResponseBodyEnvChange extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAppEnvResponseBodyEnvChangeDetailOperationsOperation extends $tea.Model {
  operationDescription?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      operationDescription: 'OperationDescription',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationDescription: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAppEnvResponseBodyEnvChangeDetailOperations extends $tea.Model {
  operation?: TerminateAppEnvResponseBodyEnvChangeDetailOperationsOperation[];
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: { 'type': 'array', 'itemType': TerminateAppEnvResponseBodyEnvChangeDetailOperationsOperation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAppEnvResponseBodyEnvChangeDetail extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  operations?: TerminateAppEnvResponseBodyEnvChangeDetailOperations;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
      operations: 'Operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
      operations: TerminateAppEnvResponseBodyEnvChangeDetailOperations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppEnvResponseBodyEnvChangeDetailOperationsOperation extends $tea.Model {
  operationDescription?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      operationDescription: 'OperationDescription',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationDescription: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppEnvResponseBodyEnvChangeDetailOperations extends $tea.Model {
  operation?: UpdateAppEnvResponseBodyEnvChangeDetailOperationsOperation[];
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: { 'type': 'array', 'itemType': UpdateAppEnvResponseBodyEnvChangeDetailOperationsOperation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppEnvResponseBodyEnvChangeDetail extends $tea.Model {
  startTime?: string;
  changeId?: string;
  envId?: string;
  operations?: UpdateAppEnvResponseBodyEnvChangeDetailOperations;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      changeId: 'ChangeId',
      envId: 'EnvId',
      operations: 'Operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      changeId: 'string',
      envId: 'string',
      operations: UpdateAppEnvResponseBodyEnvChangeDetailOperations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplication extends $tea.Model {
  appName?: string;
  createUsername?: string;
  updateTime?: number;
  updateUsername?: string;
  createTime?: number;
  appId?: string;
  categoryName?: string;
  appDescription?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createUsername: 'CreateUsername',
      updateTime: 'UpdateTime',
      updateUsername: 'UpdateUsername',
      createTime: 'CreateTime',
      appId: 'AppId',
      categoryName: 'CategoryName',
      appDescription: 'AppDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createUsername: 'string',
      updateTime: 'number',
      updateUsername: 'string',
      createTime: 'number',
      appId: 'string',
      categoryName: 'string',
      appDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigTemplateResponseBodyConfigTemplate extends $tea.Model {
  appName?: string;
  updateTime?: number;
  stackId?: string;
  createTime?: number;
  appId?: string;
  stackName?: string;
  templateName?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      updateTime: 'UpdateTime',
      stackId: 'StackId',
      createTime: 'CreateTime',
      appId: 'AppId',
      stackName: 'StackName',
      templateName: 'TemplateName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      updateTime: 'number',
      stackId: 'string',
      createTime: 'number',
      appId: 'string',
      stackName: 'string',
      templateName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConfigSettingResponseBodyConfigValidationResultsConfigValidationResultConfigOption extends $tea.Model {
  regexDesc?: string;
  maxValue?: number;
  editorType?: string;
  minValue?: number;
  defaultValue?: string;
  maxLength?: number;
  optionLabel?: string;
  regexPattern?: string;
  changeSeverity?: string;
  optionDescription?: string;
  optionName?: string;
  pathName?: string;
  hiddenOption?: boolean;
  valueType?: string;
  minLength?: number;
  valueOptions?: string;
  readonlyOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regexDesc: 'RegexDesc',
      maxValue: 'MaxValue',
      editorType: 'EditorType',
      minValue: 'MinValue',
      defaultValue: 'DefaultValue',
      maxLength: 'MaxLength',
      optionLabel: 'OptionLabel',
      regexPattern: 'RegexPattern',
      changeSeverity: 'ChangeSeverity',
      optionDescription: 'OptionDescription',
      optionName: 'OptionName',
      pathName: 'PathName',
      hiddenOption: 'HiddenOption',
      valueType: 'ValueType',
      minLength: 'MinLength',
      valueOptions: 'ValueOptions',
      readonlyOption: 'ReadonlyOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regexDesc: 'string',
      maxValue: 'number',
      editorType: 'string',
      minValue: 'number',
      defaultValue: 'string',
      maxLength: 'number',
      optionLabel: 'string',
      regexPattern: 'string',
      changeSeverity: 'string',
      optionDescription: 'string',
      optionName: 'string',
      pathName: 'string',
      hiddenOption: 'boolean',
      valueType: 'string',
      minLength: 'number',
      valueOptions: 'string',
      readonlyOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConfigSettingResponseBodyConfigValidationResultsConfigValidationResult extends $tea.Model {
  optionName?: string;
  pathName?: string;
  resultMessage?: string;
  resultSeverity?: string;
  configOption?: ValidateConfigSettingResponseBodyConfigValidationResultsConfigValidationResultConfigOption;
  static names(): { [key: string]: string } {
    return {
      optionName: 'OptionName',
      pathName: 'PathName',
      resultMessage: 'ResultMessage',
      resultSeverity: 'ResultSeverity',
      configOption: 'ConfigOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionName: 'string',
      pathName: 'string',
      resultMessage: 'string',
      resultSeverity: 'string',
      configOption: ValidateConfigSettingResponseBodyConfigValidationResultsConfigValidationResultConfigOption,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConfigSettingResponseBodyConfigValidationResults extends $tea.Model {
  configValidationResult?: ValidateConfigSettingResponseBodyConfigValidationResultsConfigValidationResult[];
  static names(): { [key: string]: string } {
    return {
      configValidationResult: 'ConfigValidationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValidationResult: { 'type': 'array', 'itemType': ValidateConfigSettingResponseBodyConfigValidationResultsConfigValidationResult },
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
    this._endpointMap = {
      'cn-beijing': "webplus.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou': "webplus.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "webplus.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "webplus.cn-hangzhou.aliyuncs.com",
      'ap-northeast-1': "webplus.aliyuncs.com",
      'ap-south-1': "webplus.aliyuncs.com",
      'ap-southeast-1': "webplus.aliyuncs.com",
      'ap-southeast-2': "webplus.aliyuncs.com",
      'ap-southeast-3': "webplus.aliyuncs.com",
      'ap-southeast-5': "webplus.aliyuncs.com",
      'cn-chengdu': "webplus.aliyuncs.com",
      'cn-hongkong': "webplus-vpc.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "webplus.aliyuncs.com",
      'cn-qingdao': "webplus.aliyuncs.com",
      'eu-central-1': "webplus.aliyuncs.com",
      'eu-west-1': "webplus.aliyuncs.com",
      'me-east-1': "webplus.aliyuncs.com",
      'us-east-1': "webplus.aliyuncs.com",
      'us-west-1': "webplus.aliyuncs.com",
      'cn-hangzhou-finance': "webplus.aliyuncs.com",
      'cn-shenzhen-finance-1': "webplus.aliyuncs.com",
      'cn-shanghai-finance-1': "webplus.aliyuncs.com",
      'cn-north-2-gov-1': "webplus.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("webplus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abortChange(request: AbortChangeRequest): Promise<AbortChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortChangeWithOptions(request, headers, runtime);
  }

  async abortChangeWithOptions(request: AbortChangeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortChangeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeId)) {
      body["ChangeId"] = request.changeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<AbortChangeResponse>(await this.doROARequestWithForm("AbortChange", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/change/abort`, "json", req, runtime), new AbortChangeResponse({}));
  }

  async createAppEnv(request: CreateAppEnvRequest): Promise<CreateAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppEnvWithOptions(request, headers, runtime);
  }

  async createAppEnvWithOptions(request: CreateAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envName)) {
      body["EnvName"] = request.envName;
    }

    if (!Util.isUnset(request.envDescription)) {
      body["EnvDescription"] = request.envDescription;
    }

    if (!Util.isUnset(request.stackId)) {
      body["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pkgVersionId)) {
      body["PkgVersionId"] = request.pkgVersionId;
    }

    if (!Util.isUnset(request.optionSettings)) {
      body["OptionSettings"] = request.optionSettings;
    }

    if (!Util.isUnset(request.profileName)) {
      body["ProfileName"] = request.profileName;
    }

    if (!Util.isUnset(request.sourceEnvId)) {
      body["SourceEnvId"] = request.sourceEnvId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.extraProperties)) {
      body["ExtraProperties"] = request.extraProperties;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateAppEnvResponse>(await this.doROARequestWithForm("CreateAppEnv", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv`, "json", req, runtime), new CreateAppEnvResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationWithOptions(request, headers, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appDescription)) {
      body["AppDescription"] = request.appDescription;
    }

    if (!Util.isUnset(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!Util.isUnset(request.usingSharedStorage)) {
      body["UsingSharedStorage"] = request.usingSharedStorage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateApplicationResponse>(await this.doROARequestWithForm("CreateApplication", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/application`, "json", req, runtime), new CreateApplicationResponse({}));
  }

  async createConfigTemplate(request: CreateConfigTemplateRequest): Promise<CreateConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigTemplateWithOptions(request, headers, runtime);
  }

  async createConfigTemplateWithOptions(request: CreateConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateDescription)) {
      body["TemplateDescription"] = request.templateDescription;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.stackId)) {
      body["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.sourceTemplateId)) {
      body["SourceTemplateId"] = request.sourceTemplateId;
    }

    if (!Util.isUnset(request.sourceEnvId)) {
      body["SourceEnvId"] = request.sourceEnvId;
    }

    if (!Util.isUnset(request.profileName)) {
      body["ProfileName"] = request.profileName;
    }

    if (!Util.isUnset(request.pkgVersionId)) {
      body["PkgVersionId"] = request.pkgVersionId;
    }

    if (!Util.isUnset(request.optionSettings)) {
      body["OptionSettings"] = request.optionSettings;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateConfigTemplateResponse>(await this.doROARequestWithForm("CreateConfigTemplate", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/configTemplate`, "json", req, runtime), new CreateConfigTemplateResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOrderWithOptions(request, headers, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productName)) {
      body["ProductName"] = request.productName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateOrderResponse>(await this.doROARequestWithForm("CreateOrder", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/paas/createOrder`, "json", req, runtime), new CreateOrderResponse({}));
  }

  async createPkgVersion(request: CreatePkgVersionRequest): Promise<CreatePkgVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPkgVersionWithOptions(request, headers, runtime);
  }

  async createPkgVersionWithOptions(request: CreatePkgVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePkgVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pkgVersionLabel)) {
      body["PkgVersionLabel"] = request.pkgVersionLabel;
    }

    if (!Util.isUnset(request.pkgVersionDescription)) {
      body["PkgVersionDescription"] = request.pkgVersionDescription;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.packageSource)) {
      body["PackageSource"] = request.packageSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreatePkgVersionResponse>(await this.doROARequestWithForm("CreatePkgVersion", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/pkgVersion`, "json", req, runtime), new CreatePkgVersionResponse({}));
  }

  async createStorage(request: CreateStorageRequest): Promise<CreateStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createStorageWithOptions(request, headers, runtime);
  }

  async createStorageWithOptions(request: CreateStorageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateStorageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateStorageResponse>(await this.doROARequest("CreateStorage", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/storage`, "json", req, runtime), new CreateStorageResponse({}));
  }

  async deleteAppEnv(request: DeleteAppEnvRequest): Promise<DeleteAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppEnvWithOptions(request, headers, runtime);
  }

  async deleteAppEnvWithOptions(request: DeleteAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteAppEnvResponse>(await this.doROARequest("DeleteAppEnv", "2019-03-20", "HTTPS", "DELETE", "AK", `/pop/v1/wam/appEnv`, "json", req, runtime), new DeleteAppEnvResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(request, headers, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteApplicationResponse>(await this.doROARequest("DeleteApplication", "2019-03-20", "HTTPS", "DELETE", "AK", `/pop/v1/wam/application`, "json", req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteChange(request: DeleteChangeRequest): Promise<DeleteChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteChangeWithOptions(request, headers, runtime);
  }

  async deleteChangeWithOptions(request: DeleteChangeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteChangeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeId)) {
      query["ChangeId"] = request.changeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteChangeResponse>(await this.doROARequest("DeleteChange", "2019-03-20", "HTTPS", "DELETE", "AK", `/pop/v1/wam/change`, "json", req, runtime), new DeleteChangeResponse({}));
  }

  async deleteConfigTemplate(request: DeleteConfigTemplateRequest): Promise<DeleteConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigTemplateWithOptions(request, headers, runtime);
  }

  async deleteConfigTemplateWithOptions(request: DeleteConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteConfigTemplateResponse>(await this.doROARequest("DeleteConfigTemplate", "2019-03-20", "HTTPS", "DELETE", "AK", `/pop/v1/wam/configTemplate`, "json", req, runtime), new DeleteConfigTemplateResponse({}));
  }

  async deletePkgVersion(request: DeletePkgVersionRequest): Promise<DeletePkgVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePkgVersionWithOptions(request, headers, runtime);
  }

  async deletePkgVersionWithOptions(request: DeletePkgVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePkgVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pkgVersionId)) {
      query["PkgVersionId"] = request.pkgVersionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeletePkgVersionResponse>(await this.doROARequest("DeletePkgVersion", "2019-03-20", "HTTPS", "DELETE", "AK", `/pop/v1/wam/pkgVersion`, "json", req, runtime), new DeletePkgVersionResponse({}));
  }

  async deployAppEnv(request: DeployAppEnvRequest): Promise<DeployAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployAppEnvWithOptions(request, headers, runtime);
  }

  async deployAppEnvWithOptions(request: DeployAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.batchSize)) {
      body["BatchSize"] = request.batchSize;
    }

    if (!Util.isUnset(request.batchPercent)) {
      body["BatchPercent"] = request.batchPercent;
    }

    if (!Util.isUnset(request.batchInterval)) {
      body["BatchInterval"] = request.batchInterval;
    }

    if (!Util.isUnset(request.pauseBetweenBatches)) {
      body["PauseBetweenBatches"] = request.pauseBetweenBatches;
    }

    if (!Util.isUnset(request.pkgVersionId)) {
      body["PkgVersionId"] = request.pkgVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<DeployAppEnvResponse>(await this.doROARequestWithForm("DeployAppEnv", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/deploy`, "json", req, runtime), new DeployAppEnvResponse({}));
  }

  async describeAppEnvInstanceHealth(request: DescribeAppEnvInstanceHealthRequest): Promise<DescribeAppEnvInstanceHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppEnvInstanceHealthWithOptions(request, headers, runtime);
  }

  async describeAppEnvInstanceHealthWithOptions(request: DescribeAppEnvInstanceHealthRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppEnvInstanceHealthResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAppEnvInstanceHealthResponse>(await this.doROARequest("DescribeAppEnvInstanceHealth", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/appEnv/instanceHealth`, "json", req, runtime), new DescribeAppEnvInstanceHealthResponse({}));
  }

  async describeAppEnvs(request: DescribeAppEnvsRequest): Promise<DescribeAppEnvsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppEnvsWithOptions(request, headers, runtime);
  }

  async describeAppEnvsWithOptions(request: DescribeAppEnvsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppEnvsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.includeTerminated)) {
      query["IncludeTerminated"] = request.includeTerminated;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.envName)) {
      query["EnvName"] = request.envName;
    }

    if (!Util.isUnset(request.envSearch)) {
      query["EnvSearch"] = request.envSearch;
    }

    if (!Util.isUnset(request.recentUpdated)) {
      query["RecentUpdated"] = request.recentUpdated;
    }

    if (!Util.isUnset(request.stackSearch)) {
      query["StackSearch"] = request.stackSearch;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAppEnvsResponse>(await this.doROARequest("DescribeAppEnvs", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/appEnv`, "json", req, runtime), new DescribeAppEnvsResponse({}));
  }

  async describeAppEnvStatus(request: DescribeAppEnvStatusRequest): Promise<DescribeAppEnvStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppEnvStatusWithOptions(request, headers, runtime);
  }

  async describeAppEnvStatusWithOptions(request: DescribeAppEnvStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppEnvStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAppEnvStatusResponse>(await this.doROARequest("DescribeAppEnvStatus", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/appEnv/status`, "json", req, runtime), new DescribeAppEnvStatusResponse({}));
  }

  async describeApplications(request: DescribeApplicationsRequest): Promise<DescribeApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationsWithOptions(request, headers, runtime);
  }

  async describeApplicationsWithOptions(request: DescribeApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appSearch)) {
      query["AppSearch"] = request.appSearch;
    }

    if (!Util.isUnset(request.envSearch)) {
      query["EnvSearch"] = request.envSearch;
    }

    if (!Util.isUnset(request.stackSearch)) {
      query["StackSearch"] = request.stackSearch;
    }

    if (!Util.isUnset(request.categorySearch)) {
      query["CategorySearch"] = request.categorySearch;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeApplicationsResponse>(await this.doROARequest("DescribeApplications", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/application`, "json", req, runtime), new DescribeApplicationsResponse({}));
  }

  async describeCategories(request: DescribeCategoriesRequest): Promise<DescribeCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCategoriesWithOptions(request, headers, runtime);
  }

  async describeCategoriesWithOptions(request: DescribeCategoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCategoriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeCategoriesResponse>(await this.doROARequest("DescribeCategories", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/category`, "json", req, runtime), new DescribeCategoriesResponse({}));
  }

  async describeChange(request: DescribeChangeRequest): Promise<DescribeChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChangeWithOptions(request, headers, runtime);
  }

  async describeChangeWithOptions(request: DescribeChangeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChangeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.changeId)) {
      query["ChangeId"] = request.changeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChangeResponse>(await this.doROARequest("DescribeChange", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/changeInfo`, "json", req, runtime), new DescribeChangeResponse({}));
  }

  async describeChanges(request: DescribeChangesRequest): Promise<DescribeChangesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChangesWithOptions(request, headers, runtime);
  }

  async describeChangesWithOptions(request: DescribeChangesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChangesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChangesResponse>(await this.doROARequest("DescribeChanges", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/change`, "json", req, runtime), new DescribeChangesResponse({}));
  }

  async describeConfigIndex(request: DescribeConfigIndexRequest): Promise<DescribeConfigIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigIndexWithOptions(request, headers, runtime);
  }

  async describeConfigIndexWithOptions(request: DescribeConfigIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigIndexResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.profileName)) {
      query["ProfileName"] = request.profileName;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeConfigIndexResponse>(await this.doROARequest("DescribeConfigIndex", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/config/configIndex`, "json", req, runtime), new DescribeConfigIndexResponse({}));
  }

  async describeConfigOptions(request: DescribeConfigOptionsRequest): Promise<DescribeConfigOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigOptionsWithOptions(request, headers, runtime);
  }

  async describeConfigOptionsWithOptions(request: DescribeConfigOptionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigOptionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.profileName)) {
      query["ProfileName"] = request.profileName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeConfigOptionsResponse>(await this.doROARequest("DescribeConfigOptions", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/config/configOption`, "json", req, runtime), new DescribeConfigOptionsResponse({}));
  }

  async describeConfigSettings(request: DescribeConfigSettingsRequest): Promise<DescribeConfigSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigSettingsWithOptions(request, headers, runtime);
  }

  async describeConfigSettingsWithOptions(request: DescribeConfigSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigSettingsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.pathName)) {
      query["PathName"] = request.pathName;
    }

    if (!Util.isUnset(request.optionName)) {
      query["OptionName"] = request.optionName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeConfigSettingsResponse>(await this.doROARequest("DescribeConfigSettings", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/config/configSetting`, "json", req, runtime), new DescribeConfigSettingsResponse({}));
  }

  async describeConfigTemplates(request: DescribeConfigTemplatesRequest): Promise<DescribeConfigTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigTemplatesWithOptions(request, headers, runtime);
  }

  async describeConfigTemplatesWithOptions(request: DescribeConfigTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateSearch)) {
      query["TemplateSearch"] = request.templateSearch;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeConfigTemplatesResponse>(await this.doROARequest("DescribeConfigTemplates", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/configTemplate`, "json", req, runtime), new DescribeConfigTemplatesResponse({}));
  }

  async describeEnvResource(request: DescribeEnvResourceRequest): Promise<DescribeEnvResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEnvResourceWithOptions(request, headers, runtime);
  }

  async describeEnvResourceWithOptions(request: DescribeEnvResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEnvResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeEnvResourceResponse>(await this.doROARequest("DescribeEnvResource", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/envResource`, "json", req, runtime), new DescribeEnvResourceResponse({}));
  }

  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEventsWithOptions(request, headers, runtime);
  }

  async describeEventsWithOptions(request: DescribeEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.changeId)) {
      query["ChangeId"] = request.changeId;
    }

    if (!Util.isUnset(request.lastChangeEvents)) {
      query["LastChangeEvents"] = request.lastChangeEvents;
    }

    if (!Util.isUnset(request.reverseByTimestamp)) {
      query["ReverseByTimestamp"] = request.reverseByTimestamp;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeEventsResponse>(await this.doROARequest("DescribeEvents", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/event`, "json", req, runtime), new DescribeEventsResponse({}));
  }

  async describeGatherLogResult(request: DescribeGatherLogResultRequest): Promise<DescribeGatherLogResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGatherLogResultWithOptions(request, headers, runtime);
  }

  async describeGatherLogResultWithOptions(request: DescribeGatherLogResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeGatherLogResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeId)) {
      query["ChangeId"] = request.changeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeGatherLogResultResponse>(await this.doROARequest("DescribeGatherLogResult", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/appEnv/gatherLog`, "json", req, runtime), new DescribeGatherLogResultResponse({}));
  }

  async describeGatherStatsResult(request: DescribeGatherStatsResultRequest): Promise<DescribeGatherStatsResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGatherStatsResultWithOptions(request, headers, runtime);
  }

  async describeGatherStatsResultWithOptions(request: DescribeGatherStatsResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeGatherStatsResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeId)) {
      query["ChangeId"] = request.changeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeGatherStatsResultResponse>(await this.doROARequest("DescribeGatherStatsResult", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/appEnv/gatherStats`, "json", req, runtime), new DescribeGatherStatsResultResponse({}));
  }

  async describeInstanceHealth(request: DescribeInstanceHealthRequest): Promise<DescribeInstanceHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceHealthWithOptions(request, headers, runtime);
  }

  async describeInstanceHealthWithOptions(request: DescribeInstanceHealthRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceHealthResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeInstanceHealthResponse>(await this.doROARequest("DescribeInstanceHealth", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/instance/health`, "json", req, runtime), new DescribeInstanceHealthResponse({}));
  }

  async describePkgVersions(request: DescribePkgVersionsRequest): Promise<DescribePkgVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePkgVersionsWithOptions(request, headers, runtime);
  }

  async describePkgVersionsWithOptions(request: DescribePkgVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePkgVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pkgVersionLabel)) {
      query["PkgVersionLabel"] = request.pkgVersionLabel;
    }

    if (!Util.isUnset(request.pkgVersionSearch)) {
      query["PkgVersionSearch"] = request.pkgVersionSearch;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribePkgVersionsResponse>(await this.doROARequest("DescribePkgVersions", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/pkgVersion`, "json", req, runtime), new DescribePkgVersionsResponse({}));
  }

  async describePublicConfigTemplates(request: DescribePublicConfigTemplatesRequest): Promise<DescribePublicConfigTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePublicConfigTemplatesWithOptions(request, headers, runtime);
  }

  async describePublicConfigTemplatesWithOptions(request: DescribePublicConfigTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePublicConfigTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribePublicConfigTemplatesResponse>(await this.doROARequest("DescribePublicConfigTemplates", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/publicConfigTemplate`, "json", req, runtime), new DescribePublicConfigTemplatesResponse({}));
  }

  async describeStacks(request: DescribeStacksRequest): Promise<DescribeStacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeStacksWithOptions(request, headers, runtime);
  }

  async describeStacksWithOptions(request: DescribeStacksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeStacksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.recommendedOnly)) {
      query["RecommendedOnly"] = request.recommendedOnly;
    }

    if (!Util.isUnset(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeStacksResponse>(await this.doROARequest("DescribeStacks", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/stack`, "json", req, runtime), new DescribeStacksResponse({}));
  }

  async describeStorage(request: DescribeStorageRequest): Promise<DescribeStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeStorageWithOptions(request, headers, runtime);
  }

  async describeStorageWithOptions(request: DescribeStorageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeStorageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.usingSharedStorage)) {
      query["UsingSharedStorage"] = request.usingSharedStorage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeStorageResponse>(await this.doROARequest("DescribeStorage", "2019-03-20", "HTTPS", "GET", "AK", `/pop/v1/wam/storage`, "json", req, runtime), new DescribeStorageResponse({}));
  }

  async gatherAppEnvLog(request: GatherAppEnvLogRequest): Promise<GatherAppEnvLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.gatherAppEnvLogWithOptions(request, headers, runtime);
  }

  async gatherAppEnvLogWithOptions(request: GatherAppEnvLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GatherAppEnvLogResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.targetInstances)) {
      body["TargetInstances"] = request.targetInstances;
    }

    if (!Util.isUnset(request.logPath)) {
      body["LogPath"] = request.logPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<GatherAppEnvLogResponse>(await this.doROARequestWithForm("GatherAppEnvLog", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/gatherLog`, "json", req, runtime), new GatherAppEnvLogResponse({}));
  }

  async gatherAppEnvStats(request: GatherAppEnvStatsRequest): Promise<GatherAppEnvStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.gatherAppEnvStatsWithOptions(request, headers, runtime);
  }

  async gatherAppEnvStatsWithOptions(request: GatherAppEnvStatsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GatherAppEnvStatsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.targetInstances)) {
      body["TargetInstances"] = request.targetInstances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<GatherAppEnvStatsResponse>(await this.doROARequestWithForm("GatherAppEnvStats", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/gatherStats`, "json", req, runtime), new GatherAppEnvStatsResponse({}));
  }

  async pauseChange(request: PauseChangeRequest): Promise<PauseChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseChangeWithOptions(request, headers, runtime);
  }

  async pauseChangeWithOptions(request: PauseChangeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PauseChangeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeId)) {
      body["ChangeId"] = request.changeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<PauseChangeResponse>(await this.doROARequestWithForm("PauseChange", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/change/pause`, "json", req, runtime), new PauseChangeResponse({}));
  }

  async rebuildAppEnv(request: RebuildAppEnvRequest): Promise<RebuildAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rebuildAppEnvWithOptions(request, headers, runtime);
  }

  async rebuildAppEnvWithOptions(request: RebuildAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RebuildAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<RebuildAppEnvResponse>(await this.doROARequestWithForm("RebuildAppEnv", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/rebuild`, "json", req, runtime), new RebuildAppEnvResponse({}));
  }

  async restartAppEnv(request: RestartAppEnvRequest): Promise<RestartAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartAppEnvWithOptions(request, headers, runtime);
  }

  async restartAppEnvWithOptions(request: RestartAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.batchSize)) {
      body["BatchSize"] = request.batchSize;
    }

    if (!Util.isUnset(request.batchPercent)) {
      body["BatchPercent"] = request.batchPercent;
    }

    if (!Util.isUnset(request.batchInterval)) {
      body["BatchInterval"] = request.batchInterval;
    }

    if (!Util.isUnset(request.pauseBetweenBatches)) {
      body["PauseBetweenBatches"] = request.pauseBetweenBatches;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<RestartAppEnvResponse>(await this.doROARequestWithForm("RestartAppEnv", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/restart`, "json", req, runtime), new RestartAppEnvResponse({}));
  }

  async resumeChange(request: ResumeChangeRequest): Promise<ResumeChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeChangeWithOptions(request, headers, runtime);
  }

  async resumeChangeWithOptions(request: ResumeChangeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeChangeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeId)) {
      body["ChangeId"] = request.changeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<ResumeChangeResponse>(await this.doROARequestWithForm("ResumeChange", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/change/resume`, "json", req, runtime), new ResumeChangeResponse({}));
  }

  async startAppEnv(request: StartAppEnvRequest): Promise<StartAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAppEnvWithOptions(request, headers, runtime);
  }

  async startAppEnvWithOptions(request: StartAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<StartAppEnvResponse>(await this.doROARequestWithForm("StartAppEnv", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/start`, "json", req, runtime), new StartAppEnvResponse({}));
  }

  async stopAppEnv(request: StopAppEnvRequest): Promise<StopAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAppEnvWithOptions(request, headers, runtime);
  }

  async stopAppEnvWithOptions(request: StopAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<StopAppEnvResponse>(await this.doROARequestWithForm("StopAppEnv", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/stop`, "json", req, runtime), new StopAppEnvResponse({}));
  }

  async terminateAppEnv(request: TerminateAppEnvRequest): Promise<TerminateAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateAppEnvWithOptions(request, headers, runtime);
  }

  async terminateAppEnvWithOptions(request: TerminateAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TerminateAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<TerminateAppEnvResponse>(await this.doROARequestWithForm("TerminateAppEnv", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/appEnv/terminate`, "json", req, runtime), new TerminateAppEnvResponse({}));
  }

  async updateAppEnv(request: UpdateAppEnvRequest): Promise<UpdateAppEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppEnvWithOptions(request, headers, runtime);
  }

  async updateAppEnvWithOptions(request: UpdateAppEnvRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppEnvResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envDescription)) {
      body["EnvDescription"] = request.envDescription;
    }

    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.pkgVersionId)) {
      body["PkgVersionId"] = request.pkgVersionId;
    }

    if (!Util.isUnset(request.optionSettings)) {
      body["OptionSettings"] = request.optionSettings;
    }

    if (!Util.isUnset(request.stackId)) {
      body["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.extraProperties)) {
      body["ExtraProperties"] = request.extraProperties;
    }

    if (!Util.isUnset(request.batchSize)) {
      body["BatchSize"] = request.batchSize;
    }

    if (!Util.isUnset(request.batchPercent)) {
      body["BatchPercent"] = request.batchPercent;
    }

    if (!Util.isUnset(request.batchInterval)) {
      body["BatchInterval"] = request.batchInterval;
    }

    if (!Util.isUnset(request.pauseBetweenBatches)) {
      body["PauseBetweenBatches"] = request.pauseBetweenBatches;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateAppEnvResponse>(await this.doROARequestWithForm("UpdateAppEnv", "2019-03-20", "HTTPS", "PUT", "AK", `/pop/v1/wam/appEnv`, "json", req, runtime), new UpdateAppEnvResponse({}));
  }

  async updateApplication(request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationWithOptions(request, headers, runtime);
  }

  async updateApplicationWithOptions(request: UpdateApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appDescription)) {
      body["AppDescription"] = request.appDescription;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateApplicationResponse>(await this.doROARequestWithForm("UpdateApplication", "2019-03-20", "HTTPS", "PUT", "AK", `/pop/v1/wam/application`, "json", req, runtime), new UpdateApplicationResponse({}));
  }

  async updateConfigTemplate(request: UpdateConfigTemplateRequest): Promise<UpdateConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigTemplateWithOptions(request, headers, runtime);
  }

  async updateConfigTemplateWithOptions(request: UpdateConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConfigTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateDescription)) {
      body["TemplateDescription"] = request.templateDescription;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.optionSettings)) {
      body["OptionSettings"] = request.optionSettings;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateConfigTemplateResponse>(await this.doROARequestWithForm("UpdateConfigTemplate", "2019-03-20", "HTTPS", "PUT", "AK", `/pop/v1/wam/configTemplate`, "json", req, runtime), new UpdateConfigTemplateResponse({}));
  }

  async validateConfigSetting(request: ValidateConfigSettingRequest): Promise<ValidateConfigSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateConfigSettingWithOptions(request, headers, runtime);
  }

  async validateConfigSettingWithOptions(request: ValidateConfigSettingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateConfigSettingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.stackId)) {
      body["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.optionSettings)) {
      body["OptionSettings"] = request.optionSettings;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<ValidateConfigSettingResponse>(await this.doROARequestWithForm("ValidateConfigSetting", "2019-03-20", "HTTPS", "POST", "AK", `/pop/v1/wam/config/configSetting/validate`, "json", req, runtime), new ValidateConfigSettingResponse({}));
  }

}
