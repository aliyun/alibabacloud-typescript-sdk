// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataItemsModelDataValue extends $tea.Model {
  id?: string;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  subType?: string;
  moduleId?: string;
  content?: string;
  appId?: string;
  linked?: boolean;
  linkModuleId?: string;
  linkModelId?: string;
  schemaVersion?: string;
  description?: string;
  props?: string;
  visibility?: string;
  modelDigest?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      subType: 'SubType',
      moduleId: 'ModuleId',
      content: 'Content',
      appId: 'AppId',
      linked: 'Linked',
      linkModuleId: 'LinkModuleId',
      linkModelId: 'LinkModelId',
      schemaVersion: 'SchemaVersion',
      description: 'Description',
      props: 'Props',
      visibility: 'Visibility',
      modelDigest: 'ModelDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      subType: 'string',
      moduleId: 'string',
      content: 'string',
      appId: 'string',
      linked: 'boolean',
      linkModuleId: 'string',
      linkModelId: 'string',
      schemaVersion: 'string',
      description: 'string',
      props: 'string',
      visibility: 'string',
      modelDigest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataItemsResourceDataValue extends $tea.Model {
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  description?: string;
  schemaVersion?: string;
  moduleId?: string;
  content?: { [key: string]: any };
  appId?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      description: 'Description',
      schemaVersion: 'SchemaVersion',
      moduleId: 'ModuleId',
      content: 'Content',
      appId: 'AppId',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      description: 'string',
      schemaVersion: 'string',
      moduleId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      appId: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateModelRequest extends $tea.Model {
  appId?: string;
  modelDataJson?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelDataJson: 'ModelDataJson',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelDataJson: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateModelResponseBody extends $tea.Model {
  data?: BatchCreateModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchCreateModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateModelResponseBody;
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
      body: BatchCreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteModelRequest extends $tea.Model {
  appId?: string;
  modelIdList?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelIdList: 'ModelIdList',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelIdList: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteModelResponseBody extends $tea.Model {
  data?: BatchDeleteModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchDeleteModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteModelResponseBody;
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
      body: BatchDeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteResourcesRequest extends $tea.Model {
  appId?: string;
  moduleId?: string;
  resourceIdList?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      moduleId: 'ModuleId',
      resourceIdList: 'ResourceIdList',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      moduleId: 'string',
      resourceIdList: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteResourcesResponseBody extends $tea.Model {
  data?: BatchDeleteResourcesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchDeleteResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteResourcesResponseBody;
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
      body: BatchDeleteResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRestoreModelRequest extends $tea.Model {
  appId?: string;
  modelIdList?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelIdList: 'ModelIdList',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelIdList: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRestoreModelResponseBody extends $tea.Model {
  data?: BatchRestoreModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchRestoreModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRestoreModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchRestoreModelResponseBody;
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
      body: BatchRestoreModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainRequest extends $tea.Model {
  appId?: string;
  domain?: string;
  domainType?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBody extends $tea.Model {
  data?: CheckDomainResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckDomainResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDomainResponseBody;
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
      body: CheckDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneAppRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  description?: string;
  icon?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      icon: 'Icon',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      description: 'string',
      icon: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneAppResponseBody extends $tea.Model {
  data?: CloneAppResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CloneAppResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneAppResponseBody;
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
      body: CloneAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelFromCommitRequest extends $tea.Model {
  modelId?: string;
  source?: string;
  sourceCommitId?: string;
  sourceModuleId?: string;
  subType?: string;
  targetModuleId?: string;
  targetName?: string;
  targetSubType?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      source: 'Source',
      sourceCommitId: 'SourceCommitId',
      sourceModuleId: 'SourceModuleId',
      subType: 'SubType',
      targetModuleId: 'TargetModuleId',
      targetName: 'TargetName',
      targetSubType: 'TargetSubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      source: 'string',
      sourceCommitId: 'string',
      sourceModuleId: 'string',
      subType: 'string',
      targetModuleId: 'string',
      targetName: 'string',
      targetSubType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelFromCommitResponseBody extends $tea.Model {
  data?: CloneModelFromCommitResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CloneModelFromCommitResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelFromCommitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneModelFromCommitResponseBody;
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
      body: CloneModelFromCommitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelInModuleRequest extends $tea.Model {
  modelId?: string;
  moduleId?: string;
  source?: string;
  targetName?: string;
  targetSubType?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      moduleId: 'ModuleId',
      source: 'Source',
      targetName: 'TargetName',
      targetSubType: 'TargetSubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      moduleId: 'string',
      source: 'string',
      targetName: 'string',
      targetSubType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelInModuleResponseBody extends $tea.Model {
  data?: CloneModelInModuleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CloneModelInModuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelInModuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneModelInModuleResponseBody;
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
      body: CloneModelInModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appName?: string;
  appType?: string;
  asynchronous?: boolean;
  categoryId?: string;
  clientToken?: string;
  description?: string;
  icon?: string;
  platformVersion?: string;
  schemaVersion?: string;
  source?: string;
  sourceCommitId?: string;
  templateId?: string;
  templated?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      asynchronous: 'Asynchronous',
      categoryId: 'CategoryId',
      clientToken: 'ClientToken',
      description: 'Description',
      icon: 'Icon',
      platformVersion: 'PlatformVersion',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      sourceCommitId: 'SourceCommitId',
      templateId: 'TemplateId',
      templated: 'Templated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      asynchronous: 'boolean',
      categoryId: 'string',
      clientToken: 'string',
      description: 'string',
      icon: 'string',
      platformVersion: 'string',
      schemaVersion: 'string',
      source: 'string',
      sourceCommitId: 'string',
      templateId: 'string',
      templated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  data?: CreateAppResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAppResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitRequest extends $tea.Model {
  appId?: string;
  clientToken?: string;
  commitLog?: string;
  commitType?: string;
  mainModuleCommitId?: string;
  moduleId?: string;
  rollbackToCommitId?: string;
  rollbackType?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      commitLog: 'CommitLog',
      commitType: 'CommitType',
      mainModuleCommitId: 'MainModuleCommitId',
      moduleId: 'ModuleId',
      rollbackToCommitId: 'RollbackToCommitId',
      rollbackType: 'RollbackType',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      commitLog: 'string',
      commitType: 'string',
      mainModuleCommitId: 'string',
      moduleId: 'string',
      rollbackToCommitId: 'string',
      rollbackType: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitResponseBody extends $tea.Model {
  data?: CreateCommitResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateCommitResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCommitResponseBody;
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
      body: CreateCommitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  appId?: string;
  clientToken?: string;
  domain?: string;
  domainType?: string;
  envId?: string;
  path?: string;
  privateKey?: string;
  publicKey?: string;
  source?: string;
  withCertificate?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      path: 'Path',
      privateKey: 'PrivateKey',
      publicKey: 'PublicKey',
      source: 'Source',
      withCertificate: 'WithCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      path: 'string',
      privateKey: 'string',
      publicKey: 'string',
      source: 'string',
      withCertificate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  data?: CreateDomainResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDomainResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
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
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkEntityAndAssociationRequest extends $tea.Model {
  clientToken?: string;
  modelData?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      modelData: 'ModelData',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modelData: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkEntityAndAssociationResponseBody extends $tea.Model {
  data?: CreateLinkEntityAndAssociationResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateLinkEntityAndAssociationResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkEntityAndAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLinkEntityAndAssociationResponseBody;
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
      body: CreateLinkEntityAndAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $tea.Model {
  appId?: string;
  clientToken?: string;
  content?: string;
  description?: string;
  encodeType?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelType?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      content: 'Content',
      description: 'Description',
      encodeType: 'EncodeType',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      content: 'string',
      description: 'string',
      encodeType: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelType: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $tea.Model {
  data?: CreateModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelResponseBody;
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
      body: CreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  icon?: string;
  minimumPlatformVersion?: string;
  moduleName?: string;
  moduleType?: string;
  platform?: string;
  source?: string;
  sourceModuleId?: string;
  targetAppSource?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      icon: 'Icon',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      moduleName: 'ModuleName',
      moduleType: 'ModuleType',
      platform: 'Platform',
      source: 'Source',
      sourceModuleId: 'SourceModuleId',
      targetAppSource: 'TargetAppSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      icon: 'string',
      minimumPlatformVersion: 'string',
      moduleName: 'string',
      moduleType: 'string',
      platform: 'string',
      source: 'string',
      sourceModuleId: 'string',
      targetAppSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleResponseBody extends $tea.Model {
  data?: CreateModuleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateModuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModuleResponseBody;
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
      body: CreateModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModulePublishRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  moduleId?: string;
  publishVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      moduleId: 'ModuleId',
      publishVersion: 'PublishVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      moduleId: 'string',
      publishVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModulePublishResponseBody extends $tea.Model {
  data?: CreateModulePublishResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateModulePublishResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModulePublishResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModulePublishResponseBody;
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
      body: CreateModulePublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishRequest extends $tea.Model {
  appId?: string;
  clientToken?: string;
  commitId?: string;
  description?: string;
  envType?: string;
  publishType?: string;
  source?: string;
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      commitId: 'CommitId',
      description: 'Description',
      envType: 'EnvType',
      publishType: 'PublishType',
      source: 'Source',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      commitId: 'string',
      description: 'string',
      envType: 'string',
      publishType: 'string',
      source: 'string',
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishResponseBody extends $tea.Model {
  data?: CreatePublishResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePublishResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublishResponseBody;
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
      body: CreatePublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequest extends $tea.Model {
  appId?: string;
  clientToken?: string;
  content?: string;
  description?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  schemaVersion?: string;
  source?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      content: 'Content',
      description: 'Description',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      content: 'string',
      description: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      schemaVersion: 'string',
      source: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  data?: CreateResourceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateResourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
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
      body: CreateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  appId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  data?: DeleteAppResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteAppResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppResponseBody;
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
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommitRequest extends $tea.Model {
  appId?: string;
  commitId?: string;
  moduleId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      moduleId: 'ModuleId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      moduleId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommitResponseBody extends $tea.Model {
  data?: DeleteCommitResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteCommitResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCommitResponseBody;
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
      body: DeleteCommitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  appId?: string;
  domain?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domain: 'Domain',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domain: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
  data?: DeleteDomainResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteDomainResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
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
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelRequest extends $tea.Model {
  appId?: string;
  modelId?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelId: 'ModelId',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelId: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $tea.Model {
  data?: DeleteModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelResponseBody;
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
      body: DeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModuleRequest extends $tea.Model {
  moduleId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModuleResponseBody extends $tea.Model {
  data?: DeleteModuleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteModuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModuleResponseBody;
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
      body: DeleteModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRequest extends $tea.Model {
  appId?: string;
  moduleId?: string;
  resourceId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      moduleId: 'string',
      resourceId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBody extends $tea.Model {
  data?: DeleteResourceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteResourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceResponseBody;
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
      body: DeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAppUserPasswordRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  source?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      source: 'Source',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      source: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAppUserPasswordResponseBody extends $tea.Model {
  data?: GenerateAppUserPasswordResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateAppUserPasswordResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAppUserPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAppUserPasswordResponseBody;
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
      body: GenerateAppUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAuthTokenRequest extends $tea.Model {
  appId?: string;
  moduleId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      moduleId: 'ModuleId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      moduleId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAuthTokenResponseBody extends $tea.Model {
  data?: GenerateAuthTokenResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateAuthTokenResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAuthTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAuthTokenResponseBody;
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
      body: GenerateAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadTokenRequest extends $tea.Model {
  appId?: string;
  materialId?: string;
  moduleId?: string;
  source?: string;
  uploadTokenType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      materialId: 'MaterialId',
      moduleId: 'ModuleId',
      source: 'Source',
      uploadTokenType: 'UploadTokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      materialId: 'string',
      moduleId: 'string',
      source: 'string',
      uploadTokenType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadTokenResponseBody extends $tea.Model {
  data?: GenerateUploadTokenResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateUploadTokenResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateUploadTokenResponseBody;
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
      body: GenerateUploadTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  appId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  data?: GetAppResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAppResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppResponseBody;
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
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppModelRequest extends $tea.Model {
  appId?: string;
  schemaVersion?: string;
  source?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      schemaVersion: 'string',
      source: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppModelResponseBody extends $tea.Model {
  data?: GetAppModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAppModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppModelResponseBody;
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
      body: GetAppModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretRequest extends $tea.Model {
  appId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponseBody extends $tea.Model {
  data?: GetAppSecretResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAppSecretResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppSecretResponseBody;
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
      body: GetAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRequest extends $tea.Model {
  appId?: string;
  artifactId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      artifactId: 'ArtifactId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      artifactId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponseBody extends $tea.Model {
  data?: GetArtifactResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetArtifactResponseBodyData,
      requestId: 'string',
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

export class GetCommitRequest extends $tea.Model {
  appId?: string;
  commitId?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommitResponseBody extends $tea.Model {
  data?: GetCommitResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCommitResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCommitResponseBody;
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
      body: GetCommitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAppUserRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAppUserResponseBody extends $tea.Model {
  data?: GetDefaultAppUserResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDefaultAppUserResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAppUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDefaultAppUserResponseBody;
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
      body: GetDefaultAppUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCnameRequest extends $tea.Model {
  appId?: string;
  domain?: string;
  domainType?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCnameResponseBody extends $tea.Model {
  data?: GetDomainCnameResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDomainCnameResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCnameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainCnameResponseBody;
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
      body: GetDomainCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOverviewRequest extends $tea.Model {
  appId?: string;
  domain?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domain: 'Domain',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domain: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOverviewResponseBody extends $tea.Model {
  data?: GetDomainOverviewResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDomainOverviewResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainOverviewResponseBody;
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
      body: GetDomainOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBody extends $tea.Model {
  data?: GetEnvironmentResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetEnvironmentResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnvironmentResponseBody;
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
      body: GetEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryStatsRequest extends $tea.Model {
  appId?: string;
  endDate?: string;
  source?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      source: 'Source',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'string',
      source: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryStatsResponseBody extends $tea.Model {
  data?: GetHistoryStatsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetHistoryStatsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistoryStatsResponseBody;
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
      body: GetHistoryStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestCommitRequest extends $tea.Model {
  appId?: string;
  moduleId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      moduleId: 'ModuleId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      moduleId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestCommitResponseBody extends $tea.Model {
  data?: GetLatestCommitResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetLatestCommitResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestCommitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLatestCommitResponseBody;
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
      body: GetLatestCommitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelRequest extends $tea.Model {
  appId?: string;
  modelId?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelId: 'ModelId',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelId: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBody extends $tea.Model {
  data?: GetModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelResponseBody;
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
      body: GetModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleRequest extends $tea.Model {
  moduleId?: string;
  moduleType?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      moduleType: 'ModuleType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      moduleType: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponseBody extends $tea.Model {
  data?: GetModuleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModuleResponseBody;
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
      body: GetModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishRequest extends $tea.Model {
  appId?: string;
  publishId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      publishId: 'PublishId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      publishId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishResponseBody extends $tea.Model {
  data?: GetPublishResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPublishResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublishResponseBody;
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
      body: GetPublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeStatsRequest extends $tea.Model {
  appId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeStatsResponseBody extends $tea.Model {
  data?: GetRealtimeStatsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRealtimeStatsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRealtimeStatsResponseBody;
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
      body: GetRealtimeStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRequest extends $tea.Model {
  appId?: string;
  imageProcessParameter?: string;
  moduleId?: string;
  resourceId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageProcessParameter: 'ImageProcessParameter',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageProcessParameter: 'string',
      moduleId: 'string',
      resourceId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBody extends $tea.Model {
  data?: GetResourceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetResourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceResponseBody;
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
      body: GetResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  source?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  data?: GetUserResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetUserResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppModulesRequest extends $tea.Model {
  appId?: string;
  recursive?: boolean;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      recursive: 'Recursive',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      recursive: 'boolean',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppModulesResponseBody extends $tea.Model {
  data?: ListAppModulesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAppModulesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppModulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppModulesResponseBody;
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
      body: ListAppModulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesRequest extends $tea.Model {
  appType?: string;
  source?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      source: 'Source',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      source: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBody extends $tea.Model {
  data?: ListAppTemplatesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAppTemplatesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppTemplatesResponseBody;
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
      body: ListAppTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  appType?: string;
  customParentId?: string;
  description?: string;
  mainModuleId?: string;
  pageNumber?: number;
  pageSize?: number;
  source?: string;
  template?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appType: 'AppType',
      customParentId: 'CustomParentId',
      description: 'Description',
      mainModuleId: 'MainModuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      source: 'Source',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      appType: 'string',
      customParentId: 'string',
      description: 'string',
      mainModuleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
      template: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  data?: ListAppsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAppsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppsResponseBody;
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
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequest extends $tea.Model {
  appId?: string;
  publishId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      publishId: 'PublishId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      publishId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBody extends $tea.Model {
  data?: ListArtifactsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListArtifactsResponseBodyData,
      requestId: 'string',
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

export class ListCommitsRequest extends $tea.Model {
  appId?: string;
  commitLog?: string;
  customParentId?: string;
  moduleId?: string;
  pageNumber?: number;
  pageSize?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitLog: 'CommitLog',
      customParentId: 'CustomParentId',
      moduleId: 'ModuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitLog: 'string',
      customParentId: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommitsResponseBody extends $tea.Model {
  data?: ListCommitsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCommitsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCommitsResponseBody;
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
      body: ListCommitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $tea.Model {
  data?: ListDomainsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDomainsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
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
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentOverviewsRequest extends $tea.Model {
  appId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentOverviewsResponseBody extends $tea.Model {
  data?: ListEnvironmentOverviewsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEnvironmentOverviewsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentOverviewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnvironmentOverviewsResponseBody;
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
      body: ListEnvironmentOverviewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsRequest extends $tea.Model {
  appId?: string;
  envType?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envType: 'EnvType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envType: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $tea.Model {
  data?: ListEnvironmentsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEnvironmentsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnvironmentsResponseBody;
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
      body: ListEnvironmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsRequest extends $tea.Model {
  appId?: string;
  modelId?: string;
  modelName?: string;
  modelType?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  subType?: string;
  withContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      subType: 'SubType',
      withContent: 'WithContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelId: 'string',
      modelName: 'string',
      modelType: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
      subType: 'string',
      withContent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $tea.Model {
  data?: ListModelsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModelsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelsResponseBody;
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
      body: ListModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageRequest extends $tea.Model {
  appId?: string;
  modelName?: string;
  modelType?: string;
  moduleId?: string;
  pageNumber?: number;
  pageSize?: number;
  schemaVersion?: string;
  source?: string;
  subType?: string;
  withContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      moduleId: 'ModuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      subType: 'SubType',
      withContent: 'WithContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelName: 'string',
      modelType: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      schemaVersion: 'string',
      source: 'string',
      subType: 'string',
      withContent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageResponseBody extends $tea.Model {
  data?: ListModelsByPageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModelsByPageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelsByPageResponseBody;
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
      body: ListModelsByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleDependenciesRequest extends $tea.Model {
  moduleId?: string;
  recursive?: boolean;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      recursive: 'Recursive',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      recursive: 'boolean',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleDependenciesResponseBody extends $tea.Model {
  data?: ListModuleDependenciesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModuleDependenciesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleDependenciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModuleDependenciesResponseBody;
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
      body: ListModuleDependenciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleModelsRequest extends $tea.Model {
  moduleList?: string;
  source?: string;
  subTypes?: string;
  withContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
      source: 'Source',
      subTypes: 'SubTypes',
      withContent: 'WithContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: 'string',
      source: 'string',
      subTypes: 'string',
      withContent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleModelsResponseBody extends $tea.Model {
  data?: ListModuleModelsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModuleModelsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModuleModelsResponseBody;
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
      body: ListModuleModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulePublishVersionsRequest extends $tea.Model {
  customParentId?: string;
  moduleId?: string;
  moduleVersion?: string;
  pageNumber?: number;
  pageSize?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      customParentId: 'CustomParentId',
      moduleId: 'ModuleId',
      moduleVersion: 'ModuleVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customParentId: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulePublishVersionsResponseBody extends $tea.Model {
  data?: ListModulePublishVersionsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModulePublishVersionsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulePublishVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModulePublishVersionsResponseBody;
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
      body: ListModulePublishVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleResourcesRequest extends $tea.Model {
  moduleList?: string;
  source?: string;
  types?: string;
  withContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
      source: 'Source',
      types: 'Types',
      withContent: 'WithContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: 'string',
      source: 'string',
      types: 'string',
      withContent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleResourcesResponseBody extends $tea.Model {
  data?: ListModuleResourcesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModuleResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModuleResourcesResponseBody;
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
      body: ListModuleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesRequest extends $tea.Model {
  description?: string;
  hasOwnerApp?: boolean;
  moduleId?: string;
  moduleName?: string;
  platform?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasOwnerApp: 'HasOwnerApp',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      platform: 'Platform',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasOwnerApp: 'boolean',
      moduleId: 'string',
      moduleName: 'string',
      platform: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBody extends $tea.Model {
  data?: ListModulesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModulesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModulesResponseBody;
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
      body: ListModulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesByPageRequest extends $tea.Model {
  customParentId?: string;
  description?: string;
  hasOwnerApp?: boolean;
  moduleId?: string;
  moduleName?: string;
  moduleType?: string;
  pageNumber?: number;
  pageSize?: number;
  platform?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      customParentId: 'CustomParentId',
      description: 'Description',
      hasOwnerApp: 'HasOwnerApp',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      moduleType: 'ModuleType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platform: 'Platform',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customParentId: 'string',
      description: 'string',
      hasOwnerApp: 'boolean',
      moduleId: 'string',
      moduleName: 'string',
      moduleType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesByPageResponseBody extends $tea.Model {
  data?: ListModulesByPageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListModulesByPageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModulesByPageResponseBody;
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
      body: ListModulesByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishVersionsRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  pageNumber?: number;
  pageSize?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishVersionsResponseBody extends $tea.Model {
  data?: ListPublishVersionsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPublishVersionsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishVersionsResponseBody;
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
      body: ListPublishVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedModulesRequest extends $tea.Model {
  description?: string;
  excludeAppId?: string;
  excludeModuleId?: string;
  hasOwnerApp?: boolean;
  moduleId?: string;
  moduleName?: string;
  moduleType?: string;
  pageNumber?: number;
  pageSize?: number;
  platform?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      excludeAppId: 'ExcludeAppId',
      excludeModuleId: 'ExcludeModuleId',
      hasOwnerApp: 'HasOwnerApp',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      moduleType: 'ModuleType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platform: 'Platform',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      excludeAppId: 'string',
      excludeModuleId: 'string',
      hasOwnerApp: 'boolean',
      moduleId: 'string',
      moduleName: 'string',
      moduleType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedModulesResponseBody extends $tea.Model {
  data?: ListPublishedModulesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPublishedModulesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedModulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishedModulesResponseBody;
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
      body: ListPublishedModulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishesRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  pageNumber?: number;
  pageSize?: number;
  publishStatus?: string;
  publishType?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publishStatus: 'PublishStatus',
      publishType: 'PublishType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publishStatus: 'string',
      publishType: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishesResponseBody extends $tea.Model {
  data?: ListPublishesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPublishesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishesResponseBody;
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
      body: ListPublishesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $tea.Model {
  appId?: string;
  description?: string;
  imageProcessParameter?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  source?: string;
  withContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      imageProcessParameter: 'ImageProcessParameter',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      source: 'Source',
      withContent: 'WithContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      imageProcessParameter: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      source: 'string',
      withContent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  data?: ListResourcesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
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
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByPageRequest extends $tea.Model {
  appId?: string;
  description?: string;
  imageProcessParameter?: string;
  moduleId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  source?: string;
  withContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      imageProcessParameter: 'ImageProcessParameter',
      moduleId: 'ModuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      source: 'Source',
      withContent: 'WithContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      imageProcessParameter: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      source: 'string',
      withContent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByPageResponseBody extends $tea.Model {
  data?: ListResourcesByPageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListResourcesByPageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesByPageResponseBody;
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
      body: ListResourcesByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppUserPasswordRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  source?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      source: 'Source',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      source: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppUserPasswordResponseBody extends $tea.Model {
  data?: ResetAppUserPasswordResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ResetAppUserPasswordResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppUserPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAppUserPasswordResponseBody;
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
      body: ResetAppUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreModelRequest extends $tea.Model {
  appId?: string;
  modelId?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelId: 'ModelId',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelId: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreModelResponseBody extends $tea.Model {
  data?: RestoreModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RestoreModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreModelResponseBody;
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
      body: RestoreModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLogicModelRequest extends $tea.Model {
  appId?: string;
  commitId?: string;
  content?: string;
  encodeType?: string;
  moduleId?: string;
  parameters?: string;
  schemaVersion?: string;
  source?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      content: 'Content',
      encodeType: 'EncodeType',
      moduleId: 'ModuleId',
      parameters: 'Parameters',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      content: 'string',
      encodeType: 'string',
      moduleId: 'string',
      parameters: 'string',
      schemaVersion: 'string',
      source: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLogicModelResponseBody extends $tea.Model {
  data?: RunLogicModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RunLogicModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLogicModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunLogicModelResponseBody;
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
      body: RunLogicModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEnvironmentDefaultDomainRequest extends $tea.Model {
  appId?: string;
  domain?: string;
  domainType?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEnvironmentDefaultDomainResponseBody extends $tea.Model {
  data?: SetEnvironmentDefaultDomainResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SetEnvironmentDefaultDomainResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEnvironmentDefaultDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetEnvironmentDefaultDomainResponseBody;
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
      body: SetEnvironmentDefaultDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppServerRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppServerResponseBody extends $tea.Model {
  data?: StartAppServerResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartAppServerResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAppServerResponseBody;
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
      body: StartAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppServerRequest extends $tea.Model {
  appId?: string;
  envId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      envId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppServerResponseBody extends $tea.Model {
  data?: StopAppServerResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StopAppServerResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAppServerResponseBody;
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
      body: StopAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  description?: string;
  icon?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      icon: 'Icon',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      description: 'string',
      icon: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  data?: UpdateAppResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateAppResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppResponseBody;
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
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppModelRequest extends $tea.Model {
  appId?: string;
  content?: string;
  encodeType?: string;
  schemaVersion?: string;
  source?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      encodeType: 'EncodeType',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      encodeType: 'string',
      schemaVersion: 'string',
      source: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppModelResponseBody extends $tea.Model {
  data?: UpdateAppModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateAppModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppModelResponseBody;
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
      body: UpdateAppModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelRequest extends $tea.Model {
  appId?: string;
  content?: string;
  description?: string;
  encodeType?: string;
  modelId?: string;
  modelName?: string;
  moduleId?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      description: 'Description',
      encodeType: 'EncodeType',
      modelId: 'ModelId',
      modelName: 'ModelName',
      moduleId: 'ModuleId',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      description: 'string',
      encodeType: 'string',
      modelId: 'string',
      modelName: 'string',
      moduleId: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponseBody extends $tea.Model {
  data?: UpdateModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelResponseBody;
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
      body: UpdateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleRequest extends $tea.Model {
  description?: string;
  moduleId?: string;
  moduleName?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      moduleId: 'string',
      moduleName: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleResponseBody extends $tea.Model {
  data?: UpdateModuleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateModuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModuleResponseBody;
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
      body: UpdateModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $tea.Model {
  appId?: string;
  content?: string;
  description?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      description: 'Description',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      description: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBody extends $tea.Model {
  data?: UpdateResourceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateResourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceResponseBody;
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
      body: UpdateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceContentRequest extends $tea.Model {
  appId?: string;
  content?: string;
  moduleId?: string;
  resourceId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      moduleId: 'string',
      resourceId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceContentResponseBody extends $tea.Model {
  data?: UpdateResourceContentResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateResourceContentResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceContentResponseBody;
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
      body: UpdateResourceContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInfoRequest extends $tea.Model {
  appId?: string;
  description?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInfoResponseBody extends $tea.Model {
  data?: UpdateResourceInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateResourceInfoResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceInfoResponseBody;
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
      body: UpdateResourceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateModelResponseBodyDataItems extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelDigest?: string;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelDigest: 'ModelDigest',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelDigest: 'string',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateModelResponseBodyData extends $tea.Model {
  items?: BatchCreateModelResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': BatchCreateModelResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteModelResponseBodyDataItems extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteModelResponseBodyData extends $tea.Model {
  items?: BatchDeleteModelResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': BatchDeleteModelResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteResourcesResponseBodyDataItems extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteResourcesResponseBodyData extends $tea.Model {
  items?: BatchDeleteResourcesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': BatchDeleteResourcesResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRestoreModelResponseBodyDataItems extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRestoreModelResponseBodyData extends $tea.Model {
  items?: BatchRestoreModelResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': BatchRestoreModelResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBodyData extends $tea.Model {
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  appType?: string;
  createTime?: string;
  description?: string;
  icon?: string;
  isTemplate?: boolean;
  lastEditTime?: string;
  mainModuleId?: string;
  modifiedTime?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appType: 'AppType',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      isTemplate: 'IsTemplate',
      lastEditTime: 'LastEditTime',
      mainModuleId: 'MainModuleId',
      modifiedTime: 'ModifiedTime',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      icon: 'string',
      isTemplate: 'boolean',
      lastEditTime: 'string',
      mainModuleId: 'string',
      modifiedTime: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelFromCommitResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModelInModuleResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyDataCategories extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      parentCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  appType?: string;
  categories?: CreateAppResponseBodyDataCategories[];
  createTime?: string;
  description?: string;
  icon?: string;
  isTemplate?: boolean;
  lastEditTime?: string;
  mainModuleId?: string;
  modifiedTime?: string;
  platformVersion?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appType: 'AppType',
      categories: 'Categories',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      isTemplate: 'IsTemplate',
      lastEditTime: 'LastEditTime',
      mainModuleId: 'MainModuleId',
      modifiedTime: 'ModifiedTime',
      platformVersion: 'PlatformVersion',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      appType: 'string',
      categories: { 'type': 'array', 'itemType': CreateAppResponseBodyDataCategories },
      createTime: 'string',
      description: 'string',
      icon: 'string',
      isTemplate: 'boolean',
      lastEditTime: 'string',
      mainModuleId: 'string',
      modifiedTime: 'string',
      platformVersion: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitResponseBodyData extends $tea.Model {
  appId?: string;
  commitId?: string;
  commitLog?: string;
  commitType?: string;
  createTime?: string;
  mainModuleCommitId?: string;
  mainModuleId?: string;
  modelDataPath?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDataPath?: string;
  resourceDigest?: { [key: string]: string };
  rollbackToCommitId?: string;
  rollbackType?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      commitLog: 'CommitLog',
      commitType: 'CommitType',
      createTime: 'CreateTime',
      mainModuleCommitId: 'MainModuleCommitId',
      mainModuleId: 'MainModuleId',
      modelDataPath: 'ModelDataPath',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDataPath: 'ResourceDataPath',
      resourceDigest: 'ResourceDigest',
      rollbackToCommitId: 'RollbackToCommitId',
      rollbackType: 'RollbackType',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      commitLog: 'string',
      commitType: 'string',
      createTime: 'string',
      mainModuleCommitId: 'string',
      mainModuleId: 'string',
      modelDataPath: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDataPath: 'string',
      resourceDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rollbackToCommitId: 'string',
      rollbackType: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBodyData extends $tea.Model {
  appId?: string;
  applied?: boolean;
  checked?: boolean;
  cname?: string;
  deleted?: boolean;
  domain?: string;
  domainType?: string;
  envId?: string;
  path?: string;
  withCertificate?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applied: 'Applied',
      checked: 'Checked',
      cname: 'Cname',
      deleted: 'Deleted',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      path: 'Path',
      withCertificate: 'WithCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applied: 'boolean',
      checked: 'boolean',
      cname: 'string',
      deleted: 'boolean',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      path: 'string',
      withCertificate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkEntityAndAssociationResponseBodyDataItems extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkEntityAndAssociationResponseBodyData extends $tea.Model {
  items?: CreateLinkEntityAndAssociationResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': CreateLinkEntityAndAssociationResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelDigest?: string;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelDigest: 'ModelDigest',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelDigest: 'string',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleResponseBodyData extends $tea.Model {
  createTime?: string;
  description?: string;
  icon?: string;
  latestPublishedCommit?: string;
  latestPublishedVersion?: string;
  minimumPlatformVersion?: string;
  modifiedTime?: string;
  moduleId?: string;
  moduleName?: string;
  moduleType?: string;
  ownerAppId?: string;
  ownerUserId?: string;
  platform?: string;
  platformVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      latestPublishedCommit: 'LatestPublishedCommit',
      latestPublishedVersion: 'LatestPublishedVersion',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      moduleType: 'ModuleType',
      ownerAppId: 'OwnerAppId',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
      platformVersion: 'PlatformVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      icon: 'string',
      latestPublishedCommit: 'string',
      latestPublishedVersion: 'string',
      minimumPlatformVersion: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      moduleName: 'string',
      moduleType: 'string',
      ownerAppId: 'string',
      ownerUserId: 'string',
      platform: 'string',
      platformVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModulePublishResponseBodyData extends $tea.Model {
  commitId?: string;
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  publishId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      publishId: 'PublishId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      publishId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishResponseBodyData extends $tea.Model {
  appId?: string;
  commitId?: string;
  completionTime?: string;
  createTime?: string;
  description?: string;
  envId?: string;
  modifiedTime?: string;
  publishId?: string;
  publishStatus?: string;
  publishType?: string;
  reason?: string;
  startTime?: string;
  subTasks?: { [key: string]: string }[];
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      completionTime: 'CompletionTime',
      createTime: 'CreateTime',
      description: 'Description',
      envId: 'EnvId',
      modifiedTime: 'ModifiedTime',
      publishId: 'PublishId',
      publishStatus: 'PublishStatus',
      publishType: 'PublishType',
      reason: 'Reason',
      startTime: 'StartTime',
      subTasks: 'SubTasks',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      completionTime: 'string',
      createTime: 'string',
      description: 'string',
      envId: 'string',
      modifiedTime: 'string',
      publishId: 'string',
      publishStatus: 'string',
      publishType: 'string',
      reason: 'string',
      startTime: 'string',
      subTasks: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBodyData extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDigest?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDigest: 'ResourceDigest',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDigest: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  appType?: string;
  createTime?: string;
  description?: string;
  icon?: string;
  isTemplate?: boolean;
  lastEditTime?: string;
  mainModuleId?: string;
  modifiedTime?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appType: 'AppType',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      isTemplate: 'IsTemplate',
      lastEditTime: 'LastEditTime',
      mainModuleId: 'MainModuleId',
      modifiedTime: 'ModifiedTime',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      icon: 'string',
      isTemplate: 'boolean',
      lastEditTime: 'string',
      mainModuleId: 'string',
      modifiedTime: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommitResponseBodyData extends $tea.Model {
  appId?: string;
  commitId?: string;
  commitLog?: string;
  commitType?: string;
  createTime?: string;
  mainModuleCommitId?: string;
  mainModuleId?: string;
  modelDataPath?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDataPath?: string;
  resourceDigest?: { [key: string]: string };
  rollbackToCommitId?: string;
  rollbackType?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      commitLog: 'CommitLog',
      commitType: 'CommitType',
      createTime: 'CreateTime',
      mainModuleCommitId: 'MainModuleCommitId',
      mainModuleId: 'MainModuleId',
      modelDataPath: 'ModelDataPath',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDataPath: 'ResourceDataPath',
      resourceDigest: 'ResourceDigest',
      rollbackToCommitId: 'RollbackToCommitId',
      rollbackType: 'RollbackType',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      commitLog: 'string',
      commitType: 'string',
      createTime: 'string',
      mainModuleCommitId: 'string',
      mainModuleId: 'string',
      modelDataPath: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDataPath: 'string',
      resourceDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rollbackToCommitId: 'string',
      rollbackType: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBodyData extends $tea.Model {
  appId?: string;
  applied?: boolean;
  deleted?: boolean;
  domain?: string;
  domainType?: string;
  envId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applied: 'Applied',
      deleted: 'Deleted',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applied: 'boolean',
      deleted: 'boolean',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModuleResponseBodyData extends $tea.Model {
  createTime?: string;
  description?: string;
  icon?: string;
  latestPublishedCommit?: string;
  latestPublishedVersion?: string;
  minimumPlatformVersion?: string;
  modifiedTime?: string;
  moduleId?: string;
  moduleName?: string;
  ownerAppId?: string;
  ownerUserId?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      latestPublishedCommit: 'LatestPublishedCommit',
      latestPublishedVersion: 'LatestPublishedVersion',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      ownerAppId: 'OwnerAppId',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      icon: 'string',
      latestPublishedCommit: 'string',
      latestPublishedVersion: 'string',
      minimumPlatformVersion: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      moduleName: 'string',
      ownerAppId: 'string',
      ownerUserId: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBodyData extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAppUserPasswordResponseBodyData extends $tea.Model {
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAuthTokenResponseBodyData extends $tea.Model {
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadTokenResponseBodyData extends $tea.Model {
  key?: string;
  ossAccessKeyId?: string;
  policy?: string;
  serverURL?: string;
  signature?: string;
  xAmzAlgorithm?: string;
  xAmzCredential?: string;
  xAmzDate?: string;
  xAmzSignature?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      ossAccessKeyId: 'OssAccessKeyId',
      policy: 'Policy',
      serverURL: 'ServerURL',
      signature: 'Signature',
      xAmzAlgorithm: 'X-Amz-Algorithm',
      xAmzCredential: 'X-Amz-Credential',
      xAmzDate: 'X-Amz-Date',
      xAmzSignature: 'X-Amz-Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      ossAccessKeyId: 'string',
      policy: 'string',
      serverURL: 'string',
      signature: 'string',
      xAmzAlgorithm: 'string',
      xAmzCredential: 'string',
      xAmzDate: 'string',
      xAmzSignature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyDataCategories extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      parentCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  appType?: string;
  categories?: GetAppResponseBodyDataCategories[];
  createTime?: string;
  description?: string;
  icon?: string;
  isTemplate?: boolean;
  lastEditTime?: string;
  mainModuleId?: string;
  modifiedTime?: string;
  platformVersion?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appType: 'AppType',
      categories: 'Categories',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      isTemplate: 'IsTemplate',
      lastEditTime: 'LastEditTime',
      mainModuleId: 'MainModuleId',
      modifiedTime: 'ModifiedTime',
      platformVersion: 'PlatformVersion',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      appType: 'string',
      categories: { 'type': 'array', 'itemType': GetAppResponseBodyDataCategories },
      createTime: 'string',
      description: 'string',
      icon: 'string',
      isTemplate: 'boolean',
      lastEditTime: 'string',
      mainModuleId: 'string',
      modifiedTime: 'string',
      platformVersion: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppModelResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelDigest?: string;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelDigest: 'ModelDigest',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelDigest: 'string',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponseBodyData extends $tea.Model {
  appId?: string;
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponseBodyData extends $tea.Model {
  appId?: string;
  artifactId?: string;
  artifactType?: string;
  available?: boolean;
  createTime?: string;
  modifiedTime?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      artifactId: 'ArtifactId',
      artifactType: 'ArtifactType',
      available: 'Available',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      artifactId: 'string',
      artifactType: 'string',
      available: 'boolean',
      createTime: 'string',
      modifiedTime: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommitResponseBodyData extends $tea.Model {
  appId?: string;
  commitDigest?: string;
  commitId?: string;
  commitLog?: string;
  commitType?: string;
  createTime?: string;
  mainModuleCommitId?: string;
  mainModuleId?: string;
  modelDataPath?: string;
  modelDigest?: { [key: string]: string };
  modelPack?: any[];
  modifiedTime?: string;
  moduleId?: string;
  resourceDataPath?: string;
  resourceDigest?: { [key: string]: string };
  resourcePack?: { [key: string]: string }[];
  rollbackToCommitId?: string;
  rollbackType?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitDigest: 'CommitDigest',
      commitId: 'CommitId',
      commitLog: 'CommitLog',
      commitType: 'CommitType',
      createTime: 'CreateTime',
      mainModuleCommitId: 'MainModuleCommitId',
      mainModuleId: 'MainModuleId',
      modelDataPath: 'ModelDataPath',
      modelDigest: 'ModelDigest',
      modelPack: 'ModelPack',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDataPath: 'ResourceDataPath',
      resourceDigest: 'ResourceDigest',
      resourcePack: 'ResourcePack',
      rollbackToCommitId: 'RollbackToCommitId',
      rollbackType: 'RollbackType',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitDigest: 'string',
      commitId: 'string',
      commitLog: 'string',
      commitType: 'string',
      createTime: 'string',
      mainModuleCommitId: 'string',
      mainModuleId: 'string',
      modelDataPath: 'string',
      modelDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      modelPack: { 'type': 'array', 'itemType': 'any' },
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDataPath: 'string',
      resourceDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourcePack: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      rollbackToCommitId: 'string',
      rollbackType: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAppUserResponseBodyData extends $tea.Model {
  hasPassword?: boolean;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCnameResponseBodyData extends $tea.Model {
  cname?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOverviewResponseBodyData extends $tea.Model {
  appId?: string;
  applied?: boolean;
  certificate?: { [key: string]: string };
  cname?: string;
  deleted?: boolean;
  domain?: string;
  domainType?: string;
  envId?: string;
  path?: string;
  withCertificate?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applied: 'Applied',
      certificate: 'Certificate',
      cname: 'Cname',
      deleted: 'Deleted',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      path: 'Path',
      withCertificate: 'WithCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applied: 'boolean',
      certificate: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      cname: 'string',
      deleted: 'boolean',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      path: 'string',
      withCertificate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyData extends $tea.Model {
  accountOpsEndpoint?: string;
  appId?: string;
  createTime?: string;
  currentPublishId?: string;
  endpoint?: string;
  envId?: string;
  envType?: string;
  modifiedTime?: string;
  publishingId?: string;
  static names(): { [key: string]: string } {
    return {
      accountOpsEndpoint: 'AccountOpsEndpoint',
      appId: 'AppId',
      createTime: 'CreateTime',
      currentPublishId: 'CurrentPublishId',
      endpoint: 'Endpoint',
      envId: 'EnvId',
      envType: 'EnvType',
      modifiedTime: 'ModifiedTime',
      publishingId: 'PublishingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountOpsEndpoint: 'string',
      appId: 'string',
      createTime: 'string',
      currentPublishId: 'string',
      endpoint: 'string',
      envId: 'string',
      envType: 'string',
      modifiedTime: 'string',
      publishingId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryStatsResponseBodyData extends $tea.Model {
  historyPv?: { [key: string]: string };
  historyUv?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      historyPv: 'HistoryPv',
      historyUv: 'HistoryUv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyPv: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      historyUv: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestCommitResponseBodyData extends $tea.Model {
  appId?: string;
  commitId?: string;
  commitLog?: string;
  commitType?: string;
  createTime?: string;
  mainModuleCommitId?: string;
  mainModuleId?: string;
  modelDataPath?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDataPath?: string;
  resourceDigest?: { [key: string]: string };
  rollbackToCommitId?: string;
  rollbackType?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      commitLog: 'CommitLog',
      commitType: 'CommitType',
      createTime: 'CreateTime',
      mainModuleCommitId: 'MainModuleCommitId',
      mainModuleId: 'MainModuleId',
      modelDataPath: 'ModelDataPath',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDataPath: 'ResourceDataPath',
      resourceDigest: 'ResourceDigest',
      rollbackToCommitId: 'RollbackToCommitId',
      rollbackType: 'RollbackType',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      commitLog: 'string',
      commitType: 'string',
      createTime: 'string',
      mainModuleCommitId: 'string',
      mainModuleId: 'string',
      modelDataPath: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDataPath: 'string',
      resourceDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rollbackToCommitId: 'string',
      rollbackType: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponseBodyData extends $tea.Model {
  createTime?: string;
  description?: string;
  icon?: string;
  latestPublishedCommit?: string;
  latestPublishedVersion?: string;
  minimumPlatformVersion?: string;
  modifiedTime?: string;
  moduleId?: string;
  moduleName?: string;
  ownerAppId?: string;
  ownerUserId?: string;
  platform?: string;
  platformVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      latestPublishedCommit: 'LatestPublishedCommit',
      latestPublishedVersion: 'LatestPublishedVersion',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      ownerAppId: 'OwnerAppId',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
      platformVersion: 'PlatformVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      icon: 'string',
      latestPublishedCommit: 'string',
      latestPublishedVersion: 'string',
      minimumPlatformVersion: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      moduleName: 'string',
      ownerAppId: 'string',
      ownerUserId: 'string',
      platform: 'string',
      platformVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishResponseBodyData extends $tea.Model {
  appId?: string;
  commitId?: string;
  completionTime?: string;
  createTime?: string;
  description?: string;
  envId?: string;
  modifiedTime?: string;
  publishId?: string;
  publishStatus?: string;
  publishType?: string;
  reason?: string;
  startTime?: string;
  subTasks?: { [key: string]: string }[];
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      completionTime: 'CompletionTime',
      createTime: 'CreateTime',
      description: 'Description',
      envId: 'EnvId',
      modifiedTime: 'ModifiedTime',
      publishId: 'PublishId',
      publishStatus: 'PublishStatus',
      publishType: 'PublishType',
      reason: 'Reason',
      startTime: 'StartTime',
      subTasks: 'SubTasks',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      completionTime: 'string',
      createTime: 'string',
      description: 'string',
      envId: 'string',
      modifiedTime: 'string',
      publishId: 'string',
      publishStatus: 'string',
      publishType: 'string',
      reason: 'string',
      startTime: 'string',
      subTasks: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeStatsResponseBodyData extends $tea.Model {
  todayPvCount?: { [key: string]: string };
  todayUvCount?: { [key: string]: string };
  totalPvCount?: { [key: string]: string };
  totalUvCount?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      todayPvCount: 'TodayPvCount',
      todayUvCount: 'TodayUvCount',
      totalPvCount: 'TotalPvCount',
      totalUvCount: 'TotalUvCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      todayPvCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      todayUvCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      totalPvCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      totalUvCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyData extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDigest?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDigest: 'ResourceDigest',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDigest: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyData extends $tea.Model {
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  platformVersion?: string;
  userSecret?: string;
  userStatus?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      platformVersion: 'PlatformVersion',
      userSecret: 'UserSecret',
      userStatus: 'UserStatus',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      platformVersion: 'string',
      userSecret: 'string',
      userStatus: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppModulesResponseBodyDataItems extends $tea.Model {
  commitId?: string;
  description?: string;
  directDependency?: boolean;
  icon?: string;
  minimumPlatformVersion?: string;
  moduleId?: string;
  moduleName?: string;
  ownerUserId?: string;
  platform?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      description: 'Description',
      directDependency: 'DirectDependency',
      icon: 'Icon',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      description: 'string',
      directDependency: 'boolean',
      icon: 'string',
      minimumPlatformVersion: 'string',
      moduleId: 'string',
      moduleName: 'string',
      ownerUserId: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppModulesResponseBodyData extends $tea.Model {
  items?: ListAppModulesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAppModulesResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBodyDataItems extends $tea.Model {
  appName?: string;
  appType?: string;
  categoryName?: string;
  createTime?: string;
  description?: string;
  icon?: string;
  lastEditTime?: string;
  mainModuleId?: string;
  modifiedTime?: string;
  schemaVersion?: string;
  source?: string;
  templateId?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      categoryName: 'CategoryName',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      lastEditTime: 'LastEditTime',
      mainModuleId: 'MainModuleId',
      modifiedTime: 'ModifiedTime',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      categoryName: 'string',
      createTime: 'string',
      description: 'string',
      icon: 'string',
      lastEditTime: 'string',
      mainModuleId: 'string',
      modifiedTime: 'string',
      schemaVersion: 'string',
      source: 'string',
      templateId: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBodyData extends $tea.Model {
  items?: ListAppTemplatesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAppTemplatesResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyDataItemsCategories extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      parentCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyDataItems extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  appType?: string;
  categories?: ListAppsResponseBodyDataItemsCategories[];
  createTime?: string;
  description?: string;
  icon?: string;
  isTemplate?: boolean;
  lastEditTime?: string;
  mainModuleId?: string;
  modifiedTime?: string;
  platformVersion?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appType: 'AppType',
      categories: 'Categories',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      isTemplate: 'IsTemplate',
      lastEditTime: 'LastEditTime',
      mainModuleId: 'MainModuleId',
      modifiedTime: 'ModifiedTime',
      platformVersion: 'PlatformVersion',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      appType: 'string',
      categories: { 'type': 'array', 'itemType': ListAppsResponseBodyDataItemsCategories },
      createTime: 'string',
      description: 'string',
      icon: 'string',
      isTemplate: 'boolean',
      lastEditTime: 'string',
      mainModuleId: 'string',
      modifiedTime: 'string',
      platformVersion: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyData extends $tea.Model {
  items?: ListAppsResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAppsResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBodyDataItems extends $tea.Model {
  appId?: string;
  artifactId?: string;
  artifactType?: string;
  available?: boolean;
  createTime?: string;
  modifiedTime?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      artifactId: 'ArtifactId',
      artifactType: 'ArtifactType',
      available: 'Available',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      artifactId: 'string',
      artifactType: 'string',
      available: 'boolean',
      createTime: 'string',
      modifiedTime: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBodyData extends $tea.Model {
  items?: ListArtifactsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListArtifactsResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommitsResponseBodyDataItems extends $tea.Model {
  appId?: string;
  commitDigest?: string;
  commitId?: string;
  commitLog?: string;
  commitType?: string;
  createTime?: string;
  mainModuleCommitId?: string;
  mainModuleId?: string;
  modelDataPath?: string;
  modelDigest?: { [key: string]: string };
  modifiedTime?: string;
  moduleId?: string;
  resourceDataPath?: string;
  resourceDigest?: { [key: string]: string };
  rollbackToCommitId?: string;
  rollbackType?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitDigest: 'CommitDigest',
      commitId: 'CommitId',
      commitLog: 'CommitLog',
      commitType: 'CommitType',
      createTime: 'CreateTime',
      mainModuleCommitId: 'MainModuleCommitId',
      mainModuleId: 'MainModuleId',
      modelDataPath: 'ModelDataPath',
      modelDigest: 'ModelDigest',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDataPath: 'ResourceDataPath',
      resourceDigest: 'ResourceDigest',
      rollbackToCommitId: 'RollbackToCommitId',
      rollbackType: 'RollbackType',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitDigest: 'string',
      commitId: 'string',
      commitLog: 'string',
      commitType: 'string',
      createTime: 'string',
      mainModuleCommitId: 'string',
      mainModuleId: 'string',
      modelDataPath: 'string',
      modelDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDataPath: 'string',
      resourceDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rollbackToCommitId: 'string',
      rollbackType: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommitsResponseBodyData extends $tea.Model {
  items?: ListCommitsResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListCommitsResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDataItems extends $tea.Model {
  appId?: string;
  applied?: boolean;
  checked?: boolean;
  cname?: string;
  deleted?: boolean;
  domain?: string;
  domainType?: string;
  envId?: string;
  path?: string;
  withCertificate?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applied: 'Applied',
      checked: 'Checked',
      cname: 'Cname',
      deleted: 'Deleted',
      domain: 'Domain',
      domainType: 'DomainType',
      envId: 'EnvId',
      path: 'Path',
      withCertificate: 'WithCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applied: 'boolean',
      checked: 'boolean',
      cname: 'string',
      deleted: 'boolean',
      domain: 'string',
      domainType: 'string',
      envId: 'string',
      path: 'string',
      withCertificate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyData extends $tea.Model {
  items?: ListDomainsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDomainsResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentOverviewsResponseBodyDataItems extends $tea.Model {
  appId?: string;
  config?: { [key: string]: string };
  createTime?: string;
  currentPublish?: { [key: string]: string };
  endpoint?: string;
  envId?: string;
  envStatus?: string;
  envType?: string;
  latestAppAccessTime?: string;
  modifiedTime?: string;
  opsRecord?: { [key: string]: string };
  publishing?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      config: 'Config',
      createTime: 'CreateTime',
      currentPublish: 'CurrentPublish',
      endpoint: 'Endpoint',
      envId: 'EnvId',
      envStatus: 'EnvStatus',
      envType: 'EnvType',
      latestAppAccessTime: 'LatestAppAccessTime',
      modifiedTime: 'ModifiedTime',
      opsRecord: 'OpsRecord',
      publishing: 'Publishing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      currentPublish: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      endpoint: 'string',
      envId: 'string',
      envStatus: 'string',
      envType: 'string',
      latestAppAccessTime: 'string',
      modifiedTime: 'string',
      opsRecord: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      publishing: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentOverviewsResponseBodyData extends $tea.Model {
  items?: ListEnvironmentOverviewsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListEnvironmentOverviewsResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyDataItems extends $tea.Model {
  accountOpsEndpoint?: string;
  appId?: string;
  createTime?: string;
  currentPublishId?: string;
  endpoint?: string;
  envId?: string;
  envType?: string;
  modifiedTime?: string;
  publishingId?: string;
  static names(): { [key: string]: string } {
    return {
      accountOpsEndpoint: 'AccountOpsEndpoint',
      appId: 'AppId',
      createTime: 'CreateTime',
      currentPublishId: 'CurrentPublishId',
      endpoint: 'Endpoint',
      envId: 'EnvId',
      envType: 'EnvType',
      modifiedTime: 'ModifiedTime',
      publishingId: 'PublishingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountOpsEndpoint: 'string',
      appId: 'string',
      createTime: 'string',
      currentPublishId: 'string',
      endpoint: 'string',
      envId: 'string',
      envType: 'string',
      modifiedTime: 'string',
      publishingId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyData extends $tea.Model {
  items?: ListEnvironmentsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListEnvironmentsResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyDataItems extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelDigest?: string;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelDigest: 'ModelDigest',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelDigest: 'string',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyData extends $tea.Model {
  items?: ListModelsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModelsResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageResponseBodyDataItems extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageResponseBodyData extends $tea.Model {
  items?: ListModelsByPageResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModelsByPageResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleDependenciesResponseBodyDataItems extends $tea.Model {
  commitId?: string;
  description?: string;
  directDependency?: boolean;
  icon?: string;
  minimumPlatformVersion?: string;
  moduleId?: string;
  moduleName?: string;
  origin?: string;
  ownerUserId?: string;
  platform?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      description: 'Description',
      directDependency: 'DirectDependency',
      icon: 'Icon',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      origin: 'Origin',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      description: 'string',
      directDependency: 'boolean',
      icon: 'string',
      minimumPlatformVersion: 'string',
      moduleId: 'string',
      moduleName: 'string',
      origin: 'string',
      ownerUserId: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleDependenciesResponseBodyData extends $tea.Model {
  items?: ListModuleDependenciesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModuleDependenciesResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleModelsResponseBodyDataItems extends $tea.Model {
  commitId?: string;
  modelData?: { [key: string]: DataItemsModelDataValue[] };
  modelDataPath?: { [key: string]: string };
  modelDigest?: { [key: string]: string };
  moduleId?: string;
  resourceData?: { [key: string]: string };
  resourceDataPath?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      modelData: 'ModelData',
      modelDataPath: 'ModelDataPath',
      modelDigest: 'ModelDigest',
      moduleId: 'ModuleId',
      resourceData: 'ResourceData',
      resourceDataPath: 'ResourceDataPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      modelData: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataItemsModelDataValue } },
      modelDataPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      modelDigest: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      moduleId: 'string',
      resourceData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceDataPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleModelsResponseBodyData extends $tea.Model {
  items?: ListModuleModelsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModuleModelsResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulePublishVersionsResponseBodyDataItems extends $tea.Model {
  commitId?: string;
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  platformVersion?: string;
  publishId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      platformVersion: 'PlatformVersion',
      publishId: 'PublishId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      platformVersion: 'string',
      publishId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulePublishVersionsResponseBodyData extends $tea.Model {
  items?: ListModulePublishVersionsResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModulePublishVersionsResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleResourcesResponseBodyDataItems extends $tea.Model {
  commitId?: string;
  modelData?: { [key: string]: string };
  modelDataPath?: { [key: string]: string };
  moduleId?: string;
  resourceData?: { [key: string]: DataItemsResourceDataValue[] };
  resourceDataPath?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      modelData: 'ModelData',
      modelDataPath: 'ModelDataPath',
      moduleId: 'ModuleId',
      resourceData: 'ResourceData',
      resourceDataPath: 'ResourceDataPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      modelData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      modelDataPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      moduleId: 'string',
      resourceData: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataItemsResourceDataValue } },
      resourceDataPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleResourcesResponseBodyData extends $tea.Model {
  items?: ListModuleResourcesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModuleResourcesResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBodyDataItems extends $tea.Model {
  createTime?: string;
  description?: string;
  icon?: string;
  latestPublishedCommit?: string;
  latestPublishedVersion?: string;
  minimumPlatformVersion?: string;
  modifiedTime?: string;
  moduleId?: string;
  moduleName?: string;
  ownerAppId?: string;
  ownerUserId?: string;
  platform?: string;
  platformVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      latestPublishedCommit: 'LatestPublishedCommit',
      latestPublishedVersion: 'LatestPublishedVersion',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      ownerAppId: 'OwnerAppId',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
      platformVersion: 'PlatformVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      icon: 'string',
      latestPublishedCommit: 'string',
      latestPublishedVersion: 'string',
      minimumPlatformVersion: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      moduleName: 'string',
      ownerAppId: 'string',
      ownerUserId: 'string',
      platform: 'string',
      platformVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBodyData extends $tea.Model {
  items?: ListModulesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModulesResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesByPageResponseBodyDataItems extends $tea.Model {
  createTime?: string;
  description?: string;
  icon?: string;
  latestPublishedCommit?: string;
  latestPublishedVersion?: string;
  minimumPlatformVersion?: string;
  modifiedTime?: string;
  moduleId?: string;
  moduleName?: string;
  moduleType?: string;
  ownerAppId?: string;
  ownerUserId?: string;
  platform?: string;
  platformVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      latestPublishedCommit: 'LatestPublishedCommit',
      latestPublishedVersion: 'LatestPublishedVersion',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      moduleType: 'ModuleType',
      ownerAppId: 'OwnerAppId',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
      platformVersion: 'PlatformVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      icon: 'string',
      latestPublishedCommit: 'string',
      latestPublishedVersion: 'string',
      minimumPlatformVersion: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      moduleName: 'string',
      moduleType: 'string',
      ownerAppId: 'string',
      ownerUserId: 'string',
      platform: 'string',
      platformVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesByPageResponseBodyData extends $tea.Model {
  items?: ListModulesByPageResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModulesByPageResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishVersionsResponseBodyDataItems extends $tea.Model {
  appId?: string;
  commitId?: string;
  completionTime?: string;
  createTime?: string;
  description?: string;
  envId?: string;
  modifiedTime?: string;
  publishId?: string;
  publishStatus?: string;
  publishType?: string;
  reason?: string;
  startTime?: string;
  subTasks?: { [key: string]: string }[];
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      completionTime: 'CompletionTime',
      createTime: 'CreateTime',
      description: 'Description',
      envId: 'EnvId',
      modifiedTime: 'ModifiedTime',
      publishId: 'PublishId',
      publishStatus: 'PublishStatus',
      publishType: 'PublishType',
      reason: 'Reason',
      startTime: 'StartTime',
      subTasks: 'SubTasks',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      completionTime: 'string',
      createTime: 'string',
      description: 'string',
      envId: 'string',
      modifiedTime: 'string',
      publishId: 'string',
      publishStatus: 'string',
      publishType: 'string',
      reason: 'string',
      startTime: 'string',
      subTasks: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishVersionsResponseBodyData extends $tea.Model {
  items?: ListPublishVersionsResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListPublishVersionsResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedModulesResponseBodyDataItems extends $tea.Model {
  createTime?: string;
  description?: string;
  icon?: string;
  latestPublishedCommit?: string;
  latestPublishedVersion?: string;
  minimumPlatformVersion?: string;
  modifiedTime?: string;
  moduleId?: string;
  moduleName?: string;
  moduleType?: string;
  ownerAppId?: string;
  ownerUserId?: string;
  platform?: string;
  platformVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      latestPublishedCommit: 'LatestPublishedCommit',
      latestPublishedVersion: 'LatestPublishedVersion',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      moduleType: 'ModuleType',
      ownerAppId: 'OwnerAppId',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
      platformVersion: 'PlatformVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      icon: 'string',
      latestPublishedCommit: 'string',
      latestPublishedVersion: 'string',
      minimumPlatformVersion: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      moduleName: 'string',
      moduleType: 'string',
      ownerAppId: 'string',
      ownerUserId: 'string',
      platform: 'string',
      platformVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedModulesResponseBodyData extends $tea.Model {
  items?: ListPublishedModulesResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListPublishedModulesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishesResponseBodyDataItems extends $tea.Model {
  appId?: string;
  commitId?: string;
  completionTime?: string;
  createTime?: string;
  description?: string;
  envId?: string;
  modifiedTime?: string;
  publishId?: string;
  publishStatus?: string;
  publishType?: string;
  reason?: string;
  startTime?: string;
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commitId: 'CommitId',
      completionTime: 'CompletionTime',
      createTime: 'CreateTime',
      description: 'Description',
      envId: 'EnvId',
      modifiedTime: 'ModifiedTime',
      publishId: 'PublishId',
      publishStatus: 'PublishStatus',
      publishType: 'PublishType',
      reason: 'Reason',
      startTime: 'StartTime',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commitId: 'string',
      completionTime: 'string',
      createTime: 'string',
      description: 'string',
      envId: 'string',
      modifiedTime: 'string',
      publishId: 'string',
      publishStatus: 'string',
      publishType: 'string',
      reason: 'string',
      startTime: 'string',
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishesResponseBodyData extends $tea.Model {
  items?: ListPublishesResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListPublishesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyDataItems extends $tea.Model {
  appId?: string;
  content?: any;
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDigest?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDigest: 'ResourceDigest',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'any',
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDigest: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyData extends $tea.Model {
  items?: ListResourcesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListResourcesResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByPageResponseBodyDataItems extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDigest?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDigest: 'ResourceDigest',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDigest: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByPageResponseBodyData extends $tea.Model {
  items?: ListResourcesByPageResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListResourcesByPageResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAppUserPasswordResponseBodyData extends $tea.Model {
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreModelResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLogicModelResponseBodyData extends $tea.Model {
  body?: string;
  headers?: { [key: string]: string };
  status?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      headers: 'Headers',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEnvironmentDefaultDomainResponseBodyData extends $tea.Model {
  configChanged?: boolean;
  defaultMasterDomain?: string;
  defaultStaticDomain?: string;
  masterDomain?: string;
  masterDomainApplied?: boolean;
  staticDomain?: string;
  staticDomainApplied?: boolean;
  static names(): { [key: string]: string } {
    return {
      configChanged: 'ConfigChanged',
      defaultMasterDomain: 'DefaultMasterDomain',
      defaultStaticDomain: 'DefaultStaticDomain',
      masterDomain: 'MasterDomain',
      masterDomainApplied: 'MasterDomainApplied',
      staticDomain: 'StaticDomain',
      staticDomainApplied: 'StaticDomainApplied',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configChanged: 'boolean',
      defaultMasterDomain: 'string',
      defaultStaticDomain: 'string',
      masterDomain: 'string',
      masterDomainApplied: 'boolean',
      staticDomain: 'string',
      staticDomainApplied: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAppServerResponseBodyData extends $tea.Model {
  appId?: string;
  appServerStatus?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appServerStatus: 'AppServerStatus',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appServerStatus: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppServerResponseBodyData extends $tea.Model {
  appId?: string;
  appServerStatus?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appServerStatus: 'AppServerStatus',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appServerStatus: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBodyDataCategories extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      parentCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  appType?: string;
  categories?: UpdateAppResponseBodyDataCategories[];
  createTime?: string;
  description?: string;
  icon?: string;
  isTemplate?: boolean;
  lastEditTime?: string;
  mainModuleId?: string;
  modifiedTime?: string;
  schemaVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appType: 'AppType',
      categories: 'Categories',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      isTemplate: 'IsTemplate',
      lastEditTime: 'LastEditTime',
      mainModuleId: 'MainModuleId',
      modifiedTime: 'ModifiedTime',
      schemaVersion: 'SchemaVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      appType: 'string',
      categories: { 'type': 'array', 'itemType': UpdateAppResponseBodyDataCategories },
      createTime: 'string',
      description: 'string',
      icon: 'string',
      isTemplate: 'boolean',
      lastEditTime: 'string',
      mainModuleId: 'string',
      modifiedTime: 'string',
      schemaVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppModelResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelDigest?: string;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelDigest: 'ModelDigest',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelDigest: 'string',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponseBodyData extends $tea.Model {
  appId?: string;
  attributes?: { [key: string]: string }[];
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  id?: string;
  linkModelId?: string;
  linkModuleId?: string;
  linked?: boolean;
  modelDigest?: string;
  modelId?: string;
  modelName?: string;
  modelStatus?: string;
  modelType?: string;
  modifiedTime?: string;
  moduleId?: string;
  props?: { [key: string]: string };
  revision?: number;
  schemaVersion?: string;
  subType?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributes: 'Attributes',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      linkModelId: 'LinkModelId',
      linkModuleId: 'LinkModuleId',
      linked: 'Linked',
      modelDigest: 'ModelDigest',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      props: 'Props',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
      subType: 'SubType',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      id: 'string',
      linkModelId: 'string',
      linkModuleId: 'string',
      linked: 'boolean',
      modelDigest: 'string',
      modelId: 'string',
      modelName: 'string',
      modelStatus: 'string',
      modelType: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      revision: 'number',
      schemaVersion: 'string',
      subType: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleResponseBodyData extends $tea.Model {
  createTime?: string;
  description?: string;
  icon?: string;
  latestPublishedCommit?: string;
  latestPublishedVersion?: string;
  minimumPlatformVersion?: string;
  modifiedTime?: string;
  moduleId?: string;
  moduleName?: string;
  ownerAppId?: string;
  ownerUserId?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      latestPublishedCommit: 'LatestPublishedCommit',
      latestPublishedVersion: 'LatestPublishedVersion',
      minimumPlatformVersion: 'MinimumPlatformVersion',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      ownerAppId: 'OwnerAppId',
      ownerUserId: 'OwnerUserId',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      icon: 'string',
      latestPublishedCommit: 'string',
      latestPublishedVersion: 'string',
      minimumPlatformVersion: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      moduleName: 'string',
      ownerAppId: 'string',
      ownerUserId: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBodyData extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceDigest?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceDigest: 'ResourceDigest',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceDigest: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceContentResponseBodyData extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInfoResponseBodyData extends $tea.Model {
  appId?: string;
  content?: { [key: string]: string };
  createTime?: string;
  description?: string;
  modifiedTime?: string;
  moduleId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  revision?: number;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      moduleId: 'ModuleId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      revision: 'Revision',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      moduleId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      revision: 'number',
      schemaVersion: 'string',
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
    this._endpoint = this.getEndpoint("miniapplcdp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async batchCreateModelWithOptions(request: BatchCreateModelRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelDataJson)) {
      query["ModelDataJson"] = request.modelDataJson;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateModelResponse>(await this.callApi(params, req, runtime), new BatchCreateModelResponse({}));
  }

  async batchCreateModel(request: BatchCreateModelRequest): Promise<BatchCreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateModelWithOptions(request, runtime);
  }

  async batchDeleteModelWithOptions(request: BatchDeleteModelRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelIdList)) {
      query["ModelIdList"] = request.modelIdList;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteModelResponse>(await this.callApi(params, req, runtime), new BatchDeleteModelResponse({}));
  }

  async batchDeleteModel(request: BatchDeleteModelRequest): Promise<BatchDeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteModelWithOptions(request, runtime);
  }

  async batchDeleteResourcesWithOptions(request: BatchDeleteResourcesRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceIdList)) {
      query["ResourceIdList"] = request.resourceIdList;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteResources",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteResourcesResponse>(await this.callApi(params, req, runtime), new BatchDeleteResourcesResponse({}));
  }

  async batchDeleteResources(request: BatchDeleteResourcesRequest): Promise<BatchDeleteResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteResourcesWithOptions(request, runtime);
  }

  async batchRestoreModelWithOptions(request: BatchRestoreModelRequest, runtime: $Util.RuntimeOptions): Promise<BatchRestoreModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelIdList)) {
      query["ModelIdList"] = request.modelIdList;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchRestoreModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchRestoreModelResponse>(await this.callApi(params, req, runtime), new BatchRestoreModelResponse({}));
  }

  async batchRestoreModel(request: BatchRestoreModelRequest): Promise<BatchRestoreModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRestoreModelWithOptions(request, runtime);
  }

  async checkDomainWithOptions(request: CheckDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDomain",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDomainResponse>(await this.callApi(params, req, runtime), new CheckDomainResponse({}));
  }

  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  async cloneAppWithOptions(request: CloneAppRequest, runtime: $Util.RuntimeOptions): Promise<CloneAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneApp",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneAppResponse>(await this.callApi(params, req, runtime), new CloneAppResponse({}));
  }

  async cloneApp(request: CloneAppRequest): Promise<CloneAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneAppWithOptions(request, runtime);
  }

  async cloneModelFromCommitWithOptions(request: CloneModelFromCommitRequest, runtime: $Util.RuntimeOptions): Promise<CloneModelFromCommitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceCommitId)) {
      query["SourceCommitId"] = request.sourceCommitId;
    }

    if (!Util.isUnset(request.sourceModuleId)) {
      query["SourceModuleId"] = request.sourceModuleId;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!Util.isUnset(request.targetModuleId)) {
      query["TargetModuleId"] = request.targetModuleId;
    }

    if (!Util.isUnset(request.targetName)) {
      query["TargetName"] = request.targetName;
    }

    if (!Util.isUnset(request.targetSubType)) {
      query["TargetSubType"] = request.targetSubType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneModelFromCommit",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneModelFromCommitResponse>(await this.callApi(params, req, runtime), new CloneModelFromCommitResponse({}));
  }

  async cloneModelFromCommit(request: CloneModelFromCommitRequest): Promise<CloneModelFromCommitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneModelFromCommitWithOptions(request, runtime);
  }

  async cloneModelInModuleWithOptions(request: CloneModelInModuleRequest, runtime: $Util.RuntimeOptions): Promise<CloneModelInModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.targetName)) {
      query["TargetName"] = request.targetName;
    }

    if (!Util.isUnset(request.targetSubType)) {
      query["TargetSubType"] = request.targetSubType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneModelInModule",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneModelInModuleResponse>(await this.callApi(params, req, runtime), new CloneModelInModuleResponse({}));
  }

  async cloneModelInModule(request: CloneModelInModuleRequest): Promise<CloneModelInModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneModelInModuleWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.asynchronous)) {
      query["Asynchronous"] = request.asynchronous;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!Util.isUnset(request.platformVersion)) {
      query["PlatformVersion"] = request.platformVersion;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceCommitId)) {
      query["SourceCommitId"] = request.sourceCommitId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templated)) {
      query["Templated"] = request.templated;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createCommitWithOptions(request: CreateCommitRequest, runtime: $Util.RuntimeOptions): Promise<CreateCommitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commitLog)) {
      query["CommitLog"] = request.commitLog;
    }

    if (!Util.isUnset(request.commitType)) {
      query["CommitType"] = request.commitType;
    }

    if (!Util.isUnset(request.mainModuleCommitId)) {
      query["MainModuleCommitId"] = request.mainModuleCommitId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.rollbackToCommitId)) {
      query["RollbackToCommitId"] = request.rollbackToCommitId;
    }

    if (!Util.isUnset(request.rollbackType)) {
      query["RollbackType"] = request.rollbackType;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCommit",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCommitResponse>(await this.callApi(params, req, runtime), new CreateCommitResponse({}));
  }

  async createCommit(request: CreateCommitRequest): Promise<CreateCommitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCommitWithOptions(request, runtime);
  }

  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.withCertificate)) {
      query["WithCertificate"] = request.withCertificate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  async createLinkEntityAndAssociationWithOptions(request: CreateLinkEntityAndAssociationRequest, runtime: $Util.RuntimeOptions): Promise<CreateLinkEntityAndAssociationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.modelData)) {
      query["ModelData"] = request.modelData;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLinkEntityAndAssociation",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLinkEntityAndAssociationResponse>(await this.callApi(params, req, runtime), new CreateLinkEntityAndAssociationResponse({}));
  }

  async createLinkEntityAndAssociation(request: CreateLinkEntityAndAssociationRequest): Promise<CreateLinkEntityAndAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLinkEntityAndAssociationWithOptions(request, runtime);
  }

  async createModelWithOptions(request: CreateModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.linkModelId)) {
      query["LinkModelId"] = request.linkModelId;
    }

    if (!Util.isUnset(request.linkModuleId)) {
      query["LinkModuleId"] = request.linkModuleId;
    }

    if (!Util.isUnset(request.linked)) {
      query["Linked"] = request.linked;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateModelResponse>(await this.callApi(params, req, runtime), new CreateModelResponse({}));
  }

  async createModel(request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  async createModuleWithOptions(request: CreateModuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!Util.isUnset(request.minimumPlatformVersion)) {
      query["MinimumPlatformVersion"] = request.minimumPlatformVersion;
    }

    if (!Util.isUnset(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!Util.isUnset(request.moduleType)) {
      query["ModuleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceModuleId)) {
      query["SourceModuleId"] = request.sourceModuleId;
    }

    if (!Util.isUnset(request.targetAppSource)) {
      query["TargetAppSource"] = request.targetAppSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateModule",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateModuleResponse>(await this.callApi(params, req, runtime), new CreateModuleResponse({}));
  }

  async createModule(request: CreateModuleRequest): Promise<CreateModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModuleWithOptions(request, runtime);
  }

  async createModulePublishWithOptions(request: CreateModulePublishRequest, runtime: $Util.RuntimeOptions): Promise<CreateModulePublishResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.publishVersion)) {
      query["PublishVersion"] = request.publishVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateModulePublish",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateModulePublishResponse>(await this.callApi(params, req, runtime), new CreateModulePublishResponse({}));
  }

  async createModulePublish(request: CreateModulePublishRequest): Promise<CreateModulePublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModulePublishWithOptions(request, runtime);
  }

  async createPublishWithOptions(request: CreatePublishRequest, runtime: $Util.RuntimeOptions): Promise<CreatePublishResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commitId)) {
      query["CommitId"] = request.commitId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.publishType)) {
      query["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.versionNumber)) {
      query["VersionNumber"] = request.versionNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePublish",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePublishResponse>(await this.callApi(params, req, runtime), new CreatePublishResponse({}));
  }

  async createPublish(request: CreatePublishRequest): Promise<CreatePublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPublishWithOptions(request, runtime);
  }

  async createResourceWithOptions(request: CreateResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResource",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
  }

  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteCommitWithOptions(request: DeleteCommitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCommitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.commitId)) {
      query["CommitId"] = request.commitId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCommit",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCommitResponse>(await this.callApi(params, req, runtime), new DeleteCommitResponse({}));
  }

  async deleteCommit(request: DeleteCommitRequest): Promise<DeleteCommitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCommitWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deleteModelWithOptions(request: DeleteModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelResponse>(await this.callApi(params, req, runtime), new DeleteModelResponse({}));
  }

  async deleteModel(request: DeleteModelRequest): Promise<DeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  async deleteModuleWithOptions(request: DeleteModuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteModule",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteModuleResponse>(await this.callApi(params, req, runtime), new DeleteModuleResponse({}));
  }

  async deleteModule(request: DeleteModuleRequest): Promise<DeleteModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteModuleWithOptions(request, runtime);
  }

  async deleteResourceWithOptions(request: DeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResource",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
  }

  async deleteResource(request: DeleteResourceRequest): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceWithOptions(request, runtime);
  }

  async generateAppUserPasswordWithOptions(request: GenerateAppUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAppUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAppUserPassword",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateAppUserPasswordResponse>(await this.callApi(params, req, runtime), new GenerateAppUserPasswordResponse({}));
  }

  async generateAppUserPassword(request: GenerateAppUserPasswordRequest): Promise<GenerateAppUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAppUserPasswordWithOptions(request, runtime);
  }

  async generateAuthTokenWithOptions(request: GenerateAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAuthToken",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateAuthTokenResponse>(await this.callApi(params, req, runtime), new GenerateAuthTokenResponse({}));
  }

  async generateAuthToken(request: GenerateAuthTokenRequest): Promise<GenerateAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAuthTokenWithOptions(request, runtime);
  }

  async generateUploadTokenWithOptions(request: GenerateUploadTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.uploadTokenType)) {
      query["UploadTokenType"] = request.uploadTokenType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadToken",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateUploadTokenResponse>(await this.callApi(params, req, runtime), new GenerateUploadTokenResponse({}));
  }

  async generateUploadToken(request: GenerateUploadTokenRequest): Promise<GenerateUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadTokenWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async getAppModelWithOptions(request: GetAppModelRequest, runtime: $Util.RuntimeOptions): Promise<GetAppModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppModelResponse>(await this.callApi(params, req, runtime), new GetAppModelResponse({}));
  }

  async getAppModel(request: GetAppModelRequest): Promise<GetAppModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppModelWithOptions(request, runtime);
  }

  async getAppSecretWithOptions(request: GetAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<GetAppSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppSecret",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppSecretResponse>(await this.callApi(params, req, runtime), new GetAppSecretResponse({}));
  }

  async getAppSecret(request: GetAppSecretRequest): Promise<GetAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppSecretWithOptions(request, runtime);
  }

  async getArtifactWithOptions(request: GetArtifactRequest, runtime: $Util.RuntimeOptions): Promise<GetArtifactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArtifact",
      version: "2020-01-13",
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

  async getArtifact(request: GetArtifactRequest): Promise<GetArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArtifactWithOptions(request, runtime);
  }

  async getCommitWithOptions(request: GetCommitRequest, runtime: $Util.RuntimeOptions): Promise<GetCommitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.commitId)) {
      query["CommitId"] = request.commitId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCommit",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCommitResponse>(await this.callApi(params, req, runtime), new GetCommitResponse({}));
  }

  async getCommit(request: GetCommitRequest): Promise<GetCommitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCommitWithOptions(request, runtime);
  }

  async getDefaultAppUserWithOptions(request: GetDefaultAppUserRequest, runtime: $Util.RuntimeOptions): Promise<GetDefaultAppUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDefaultAppUser",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultAppUserResponse>(await this.callApi(params, req, runtime), new GetDefaultAppUserResponse({}));
  }

  async getDefaultAppUser(request: GetDefaultAppUserRequest): Promise<GetDefaultAppUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultAppUserWithOptions(request, runtime);
  }

  async getDomainCnameWithOptions(request: GetDomainCnameRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainCnameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDomainCname",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDomainCnameResponse>(await this.callApi(params, req, runtime), new GetDomainCnameResponse({}));
  }

  async getDomainCname(request: GetDomainCnameRequest): Promise<GetDomainCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainCnameWithOptions(request, runtime);
  }

  async getDomainOverviewWithOptions(request: GetDomainOverviewRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDomainOverview",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDomainOverviewResponse>(await this.callApi(params, req, runtime), new GetDomainOverviewResponse({}));
  }

  async getDomainOverview(request: GetDomainOverviewRequest): Promise<GetDomainOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainOverviewWithOptions(request, runtime);
  }

  async getEnvironmentWithOptions(request: GetEnvironmentRequest, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironment",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
  }

  async getEnvironment(request: GetEnvironmentRequest): Promise<GetEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnvironmentWithOptions(request, runtime);
  }

  async getHistoryStatsWithOptions(request: GetHistoryStatsRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoryStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoryStats",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistoryStatsResponse>(await this.callApi(params, req, runtime), new GetHistoryStatsResponse({}));
  }

  async getHistoryStats(request: GetHistoryStatsRequest): Promise<GetHistoryStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoryStatsWithOptions(request, runtime);
  }

  async getLatestCommitWithOptions(request: GetLatestCommitRequest, runtime: $Util.RuntimeOptions): Promise<GetLatestCommitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLatestCommit",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLatestCommitResponse>(await this.callApi(params, req, runtime), new GetLatestCommitResponse({}));
  }

  async getLatestCommit(request: GetLatestCommitRequest): Promise<GetLatestCommitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLatestCommitWithOptions(request, runtime);
  }

  async getModelWithOptions(request: GetModelRequest, runtime: $Util.RuntimeOptions): Promise<GetModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetModelResponse>(await this.callApi(params, req, runtime), new GetModelResponse({}));
  }

  async getModel(request: GetModelRequest): Promise<GetModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelWithOptions(request, runtime);
  }

  async getModuleWithOptions(request: GetModuleRequest, runtime: $Util.RuntimeOptions): Promise<GetModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleType)) {
      query["ModuleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetModule",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetModuleResponse>(await this.callApi(params, req, runtime), new GetModuleResponse({}));
  }

  async getModule(request: GetModuleRequest): Promise<GetModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModuleWithOptions(request, runtime);
  }

  async getPublishWithOptions(request: GetPublishRequest, runtime: $Util.RuntimeOptions): Promise<GetPublishResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.publishId)) {
      query["PublishId"] = request.publishId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublish",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublishResponse>(await this.callApi(params, req, runtime), new GetPublishResponse({}));
  }

  async getPublish(request: GetPublishRequest): Promise<GetPublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublishWithOptions(request, runtime);
  }

  async getRealtimeStatsWithOptions(request: GetRealtimeStatsRequest, runtime: $Util.RuntimeOptions): Promise<GetRealtimeStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealtimeStats",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealtimeStatsResponse>(await this.callApi(params, req, runtime), new GetRealtimeStatsResponse({}));
  }

  async getRealtimeStats(request: GetRealtimeStatsRequest): Promise<GetRealtimeStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealtimeStatsWithOptions(request, runtime);
  }

  async getResourceWithOptions(request: GetResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.imageProcessParameter)) {
      query["ImageProcessParameter"] = request.imageProcessParameter;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResource",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceResponse>(await this.callApi(params, req, runtime), new GetResourceResponse({}));
  }

  async getResource(request: GetResourceRequest): Promise<GetResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async listAppModulesWithOptions(request: ListAppModulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppModulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppModules",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppModulesResponse>(await this.callApi(params, req, runtime), new ListAppModulesResponse({}));
  }

  async listAppModules(request: ListAppModulesRequest): Promise<ListAppModulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppModulesWithOptions(request, runtime);
  }

  async listAppTemplatesWithOptions(request: ListAppTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppTemplates",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppTemplatesResponse>(await this.callApi(params, req, runtime), new ListAppTemplatesResponse({}));
  }

  async listAppTemplates(request: ListAppTemplatesRequest): Promise<ListAppTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppTemplatesWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appStatus)) {
      query["AppStatus"] = request.appStatus;
    }

    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.customParentId)) {
      query["CustomParentId"] = request.customParentId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.mainModuleId)) {
      query["MainModuleId"] = request.mainModuleId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApps",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listArtifactsWithOptions(request: ListArtifactsRequest, runtime: $Util.RuntimeOptions): Promise<ListArtifactsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.publishId)) {
      query["PublishId"] = request.publishId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListArtifacts",
      version: "2020-01-13",
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

  async listArtifacts(request: ListArtifactsRequest): Promise<ListArtifactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArtifactsWithOptions(request, runtime);
  }

  async listCommitsWithOptions(request: ListCommitsRequest, runtime: $Util.RuntimeOptions): Promise<ListCommitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.commitLog)) {
      query["CommitLog"] = request.commitLog;
    }

    if (!Util.isUnset(request.customParentId)) {
      query["CustomParentId"] = request.customParentId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCommits",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCommitsResponse>(await this.callApi(params, req, runtime), new ListCommitsResponse({}));
  }

  async listCommits(request: ListCommitsRequest): Promise<ListCommitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommitsWithOptions(request, runtime);
  }

  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  async listEnvironmentOverviewsWithOptions(request: ListEnvironmentOverviewsRequest, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentOverviewsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironmentOverviews",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentOverviewsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentOverviewsResponse({}));
  }

  async listEnvironmentOverviews(request: ListEnvironmentOverviewsRequest): Promise<ListEnvironmentOverviewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnvironmentOverviewsWithOptions(request, runtime);
  }

  async listEnvironmentsWithOptions(request: ListEnvironmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironments",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
  }

  async listEnvironments(request: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnvironmentsWithOptions(request, runtime);
  }

  async listModelsWithOptions(request: ListModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListModelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!Util.isUnset(request.withContent)) {
      query["WithContent"] = request.withContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModels",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModelsResponse>(await this.callApi(params, req, runtime), new ListModelsResponse({}));
  }

  async listModels(request: ListModelsRequest): Promise<ListModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModelsWithOptions(request, runtime);
  }

  async listModelsByPageWithOptions(request: ListModelsByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListModelsByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!Util.isUnset(request.withContent)) {
      query["WithContent"] = request.withContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModelsByPage",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModelsByPageResponse>(await this.callApi(params, req, runtime), new ListModelsByPageResponse({}));
  }

  async listModelsByPage(request: ListModelsByPageRequest): Promise<ListModelsByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModelsByPageWithOptions(request, runtime);
  }

  async listModuleDependenciesWithOptions(request: ListModuleDependenciesRequest, runtime: $Util.RuntimeOptions): Promise<ListModuleDependenciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModuleDependencies",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModuleDependenciesResponse>(await this.callApi(params, req, runtime), new ListModuleDependenciesResponse({}));
  }

  async listModuleDependencies(request: ListModuleDependenciesRequest): Promise<ListModuleDependenciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModuleDependenciesWithOptions(request, runtime);
  }

  async listModuleModelsWithOptions(request: ListModuleModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListModuleModelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subTypes)) {
      query["SubTypes"] = request.subTypes;
    }

    if (!Util.isUnset(request.withContent)) {
      query["WithContent"] = request.withContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModuleModels",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModuleModelsResponse>(await this.callApi(params, req, runtime), new ListModuleModelsResponse({}));
  }

  async listModuleModels(request: ListModuleModelsRequest): Promise<ListModuleModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModuleModelsWithOptions(request, runtime);
  }

  async listModulePublishVersionsWithOptions(request: ListModulePublishVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListModulePublishVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customParentId)) {
      query["CustomParentId"] = request.customParentId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleVersion)) {
      query["ModuleVersion"] = request.moduleVersion;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModulePublishVersions",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModulePublishVersionsResponse>(await this.callApi(params, req, runtime), new ListModulePublishVersionsResponse({}));
  }

  async listModulePublishVersions(request: ListModulePublishVersionsRequest): Promise<ListModulePublishVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModulePublishVersionsWithOptions(request, runtime);
  }

  async listModuleResourcesWithOptions(request: ListModuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListModuleResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.withContent)) {
      query["WithContent"] = request.withContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModuleResources",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModuleResourcesResponse>(await this.callApi(params, req, runtime), new ListModuleResourcesResponse({}));
  }

  async listModuleResources(request: ListModuleResourcesRequest): Promise<ListModuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModuleResourcesWithOptions(request, runtime);
  }

  async listModulesWithOptions(request: ListModulesRequest, runtime: $Util.RuntimeOptions): Promise<ListModulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.hasOwnerApp)) {
      query["HasOwnerApp"] = request.hasOwnerApp;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModules",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModulesResponse>(await this.callApi(params, req, runtime), new ListModulesResponse({}));
  }

  async listModules(request: ListModulesRequest): Promise<ListModulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModulesWithOptions(request, runtime);
  }

  async listModulesByPageWithOptions(request: ListModulesByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListModulesByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customParentId)) {
      query["CustomParentId"] = request.customParentId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.hasOwnerApp)) {
      query["HasOwnerApp"] = request.hasOwnerApp;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!Util.isUnset(request.moduleType)) {
      query["ModuleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModulesByPage",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModulesByPageResponse>(await this.callApi(params, req, runtime), new ListModulesByPageResponse({}));
  }

  async listModulesByPage(request: ListModulesByPageRequest): Promise<ListModulesByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModulesByPageWithOptions(request, runtime);
  }

  async listPublishVersionsWithOptions(request: ListPublishVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListPublishVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishVersions",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublishVersionsResponse>(await this.callApi(params, req, runtime), new ListPublishVersionsResponse({}));
  }

  async listPublishVersions(request: ListPublishVersionsRequest): Promise<ListPublishVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublishVersionsWithOptions(request, runtime);
  }

  async listPublishedModulesWithOptions(request: ListPublishedModulesRequest, runtime: $Util.RuntimeOptions): Promise<ListPublishedModulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeAppId)) {
      query["ExcludeAppId"] = request.excludeAppId;
    }

    if (!Util.isUnset(request.excludeModuleId)) {
      query["ExcludeModuleId"] = request.excludeModuleId;
    }

    if (!Util.isUnset(request.hasOwnerApp)) {
      query["HasOwnerApp"] = request.hasOwnerApp;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!Util.isUnset(request.moduleType)) {
      query["ModuleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishedModules",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublishedModulesResponse>(await this.callApi(params, req, runtime), new ListPublishedModulesResponse({}));
  }

  async listPublishedModules(request: ListPublishedModulesRequest): Promise<ListPublishedModulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublishedModulesWithOptions(request, runtime);
  }

  async listPublishesWithOptions(request: ListPublishesRequest, runtime: $Util.RuntimeOptions): Promise<ListPublishesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.publishStatus)) {
      query["PublishStatus"] = request.publishStatus;
    }

    if (!Util.isUnset(request.publishType)) {
      query["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishes",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublishesResponse>(await this.callApi(params, req, runtime), new ListPublishesResponse({}));
  }

  async listPublishes(request: ListPublishesRequest): Promise<ListPublishesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublishesWithOptions(request, runtime);
  }

  async listResourcesWithOptions(request: ListResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageProcessParameter)) {
      query["ImageProcessParameter"] = request.imageProcessParameter;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.withContent)) {
      query["WithContent"] = request.withContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  async listResourcesByPageWithOptions(request: ListResourcesByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageProcessParameter)) {
      query["ImageProcessParameter"] = request.imageProcessParameter;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.withContent)) {
      query["WithContent"] = request.withContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourcesByPage",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesByPageResponse>(await this.callApi(params, req, runtime), new ListResourcesByPageResponse({}));
  }

  async listResourcesByPage(request: ListResourcesByPageRequest): Promise<ListResourcesByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesByPageWithOptions(request, runtime);
  }

  async resetAppUserPasswordWithOptions(request: ResetAppUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAppUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAppUserPassword",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAppUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetAppUserPasswordResponse({}));
  }

  async resetAppUserPassword(request: ResetAppUserPasswordRequest): Promise<ResetAppUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAppUserPasswordWithOptions(request, runtime);
  }

  async restoreModelWithOptions(request: RestoreModelRequest, runtime: $Util.RuntimeOptions): Promise<RestoreModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestoreModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestoreModelResponse>(await this.callApi(params, req, runtime), new RestoreModelResponse({}));
  }

  async restoreModel(request: RestoreModelRequest): Promise<RestoreModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreModelWithOptions(request, runtime);
  }

  async runLogicModelWithOptions(request: RunLogicModelRequest, runtime: $Util.RuntimeOptions): Promise<RunLogicModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.commitId)) {
      query["CommitId"] = request.commitId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunLogicModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunLogicModelResponse>(await this.callApi(params, req, runtime), new RunLogicModelResponse({}));
  }

  async runLogicModel(request: RunLogicModelRequest): Promise<RunLogicModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runLogicModelWithOptions(request, runtime);
  }

  async setEnvironmentDefaultDomainWithOptions(request: SetEnvironmentDefaultDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetEnvironmentDefaultDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetEnvironmentDefaultDomain",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetEnvironmentDefaultDomainResponse>(await this.callApi(params, req, runtime), new SetEnvironmentDefaultDomainResponse({}));
  }

  async setEnvironmentDefaultDomain(request: SetEnvironmentDefaultDomainRequest): Promise<SetEnvironmentDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEnvironmentDefaultDomainWithOptions(request, runtime);
  }

  async startAppServerWithOptions(request: StartAppServerRequest, runtime: $Util.RuntimeOptions): Promise<StartAppServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartAppServer",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartAppServerResponse>(await this.callApi(params, req, runtime), new StartAppServerResponse({}));
  }

  async startAppServer(request: StartAppServerRequest): Promise<StartAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAppServerWithOptions(request, runtime);
  }

  async stopAppServerWithOptions(request: StopAppServerRequest, runtime: $Util.RuntimeOptions): Promise<StopAppServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAppServer",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAppServerResponse>(await this.callApi(params, req, runtime), new StopAppServerResponse({}));
  }

  async stopAppServer(request: StopAppServerRequest): Promise<StopAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAppServerWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  async updateAppModelWithOptions(request: UpdateAppModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppModelResponse>(await this.callApi(params, req, runtime), new UpdateAppModelResponse({}));
  }

  async updateAppModel(request: UpdateAppModelRequest): Promise<UpdateAppModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppModelWithOptions(request, runtime);
  }

  async updateModelWithOptions(request: UpdateModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModel",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateModelResponse>(await this.callApi(params, req, runtime), new UpdateModelResponse({}));
  }

  async updateModel(request: UpdateModelRequest): Promise<UpdateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateModelWithOptions(request, runtime);
  }

  async updateModuleWithOptions(request: UpdateModuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModule",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateModuleResponse>(await this.callApi(params, req, runtime), new UpdateModuleResponse({}));
  }

  async updateModule(request: UpdateModuleRequest): Promise<UpdateModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateModuleWithOptions(request, runtime);
  }

  async updateResourceWithOptions(request: UpdateResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResource",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
  }

  async updateResource(request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceWithOptions(request, runtime);
  }

  async updateResourceContentWithOptions(request: UpdateResourceContentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceContent",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceContentResponse>(await this.callApi(params, req, runtime), new UpdateResourceContentResponse({}));
  }

  async updateResourceContent(request: UpdateResourceContentRequest): Promise<UpdateResourceContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceContentWithOptions(request, runtime);
  }

  async updateResourceInfoWithOptions(request: UpdateResourceInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["ModuleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceInfo",
      version: "2020-01-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceInfoResponse>(await this.callApi(params, req, runtime), new UpdateResourceInfoResponse({}));
  }

  async updateResourceInfo(request: UpdateResourceInfoRequest): Promise<UpdateResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceInfoWithOptions(request, runtime);
  }

}
