// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAITemplateRequest extends $tea.Model {
  templateConfig?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateConfig: 'TemplateConfig',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateConfig: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAITemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAITemplateResponseBody;
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
      body: AddAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryRequest extends $tea.Model {
  cateName?: string;
  parentId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
      parentId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryResponseBody extends $tea.Model {
  category?: AddCategoryResponseBodyCategory;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: AddCategoryResponseBodyCategory,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddCategoryResponseBody;
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
      body: AddCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectRequest extends $tea.Model {
  coverURL?: string;
  description?: string;
  division?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      description: 'Description',
      division: 'Division',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      description: 'string',
      division: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectResponseBody extends $tea.Model {
  project?: AddEditingProjectResponseBodyProject;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: AddEditingProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddEditingProjectResponseBody;
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
      body: AddEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTranscodeTemplateGroupRequest extends $tea.Model {
  appId?: string;
  name?: string;
  transcodeTemplateGroupId?: string;
  transcodeTemplateList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTranscodeTemplateGroupResponseBody extends $tea.Model {
  requestId?: string;
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTemplateGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTranscodeTemplateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddTranscodeTemplateGroupResponseBody;
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
      body: AddTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVodDomainRequest extends $tea.Model {
  checkUrl?: string;
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  scope?: string;
  securityToken?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      scope: 'string',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVodDomainResponseBody extends $tea.Model {
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

export class AddVodDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddVodDomainResponseBody;
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
      body: AddVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVodTemplateRequest extends $tea.Model {
  appId?: string;
  name?: string;
  templateConfig?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      templateConfig: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVodTemplateResponseBody extends $tea.Model {
  requestId?: string;
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVodTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddVodTemplateResponseBody;
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
      body: AddVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWatermarkRequest extends $tea.Model {
  appId?: string;
  fileUrl?: string;
  name?: string;
  type?: string;
  watermarkConfig?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileUrl: 'FileUrl',
      name: 'Name',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileUrl: 'string',
      name: 'string',
      type: 'string',
      watermarkConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  watermarkInfo?: AddWatermarkResponseBodyWatermarkInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfo: 'WatermarkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfo: AddWatermarkResponseBodyWatermarkInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddWatermarkResponseBody;
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
      body: AddWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAppPolicyToIdentityRequest extends $tea.Model {
  appId?: string;
  identityName?: string;
  identityType?: string;
  policyNames?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      identityName: 'IdentityName',
      identityType: 'IdentityType',
      policyNames: 'PolicyNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      identityName: 'string',
      identityType: 'string',
      policyNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAppPolicyToIdentityResponseBody extends $tea.Model {
  failedPolicyNames?: string[];
  nonExistPolicyNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedPolicyNames: 'FailedPolicyNames',
      nonExistPolicyNames: 'NonExistPolicyNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPolicyNames: { 'type': 'array', 'itemType': 'string' },
      nonExistPolicyNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAppPolicyToIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachAppPolicyToIdentityResponseBody;
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
      body: AttachAppPolicyToIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetVodDomainConfigsRequest extends $tea.Model {
  domainNames?: string;
  functions?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functions: 'Functions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functions: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetVodDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetVodDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSetVodDomainConfigsResponseBody;
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
      body: BatchSetVodDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartVodDomainRequest extends $tea.Model {
  domainNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartVodDomainResponseBody extends $tea.Model {
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

export class BatchStartVodDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchStartVodDomainResponseBody;
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
      body: BatchStartVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopVodDomainRequest extends $tea.Model {
  domainNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopVodDomainResponseBody extends $tea.Model {
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

export class BatchStopVodDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchStopVodDomainResponseBody;
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
      body: BatchStopVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUrlUploadJobsRequest extends $tea.Model {
  jobIds?: string;
  uploadUrls?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      uploadUrls: 'UploadUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      uploadUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUrlUploadJobsResponseBody extends $tea.Model {
  canceledJobs?: string[];
  nonExists?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canceledJobs: 'CanceledJobs',
      nonExists: 'NonExists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canceledJobs: { 'type': 'array', 'itemType': 'string' },
      nonExists: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUrlUploadJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelUrlUploadJobsResponseBody;
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
      body: CancelUrlUploadJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInfoRequest extends $tea.Model {
  appName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInfoResponseBody extends $tea.Model {
  appId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppInfoResponseBody;
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
      body: CreateAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuditRequest extends $tea.Model {
  auditContent?: string;
  static names(): { [key: string]: string } {
    return {
      auditContent: 'AuditContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuditResponseBody extends $tea.Model {
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

export class CreateAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAuditResponseBody;
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
      body: CreateAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadAttachedMediaRequest extends $tea.Model {
  appId?: string;
  businessType?: string;
  cateIds?: string;
  description?: string;
  fileName?: string;
  fileSize?: string;
  mediaExt?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      businessType: 'BusinessType',
      cateIds: 'CateIds',
      description: 'Description',
      fileName: 'FileName',
      fileSize: 'FileSize',
      mediaExt: 'MediaExt',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      businessType: 'string',
      cateIds: 'string',
      description: 'string',
      fileName: 'string',
      fileSize: 'string',
      mediaExt: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadAttachedMediaResponseBody extends $tea.Model {
  fileURL?: string;
  mediaId?: string;
  mediaURL?: string;
  requestId?: string;
  uploadAddress?: string;
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadAttachedMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUploadAttachedMediaResponseBody;
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
      body: CreateUploadAttachedMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadImageRequest extends $tea.Model {
  appId?: string;
  cateId?: number;
  description?: string;
  imageExt?: string;
  imageType?: string;
  originalFileName?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      description: 'Description',
      imageExt: 'ImageExt',
      imageType: 'ImageType',
      originalFileName: 'OriginalFileName',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      description: 'string',
      imageExt: 'string',
      imageType: 'string',
      originalFileName: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadImageResponseBody extends $tea.Model {
  fileURL?: string;
  imageId?: string;
  imageURL?: string;
  requestId?: string;
  uploadAddress?: string;
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      imageId: 'ImageId',
      imageURL: 'ImageURL',
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      imageId: 'string',
      imageURL: 'string',
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUploadImageResponseBody;
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
      body: CreateUploadImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadVideoRequest extends $tea.Model {
  appId?: string;
  cateId?: number;
  coverURL?: string;
  description?: string;
  fileName?: string;
  fileSize?: number;
  storageLocation?: string;
  tags?: string;
  templateGroupId?: string;
  title?: string;
  userData?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      fileName: 'FileName',
      fileSize: 'FileSize',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      fileName: 'string',
      fileSize: 'number',
      storageLocation: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadVideoResponseBody extends $tea.Model {
  requestId?: string;
  uploadAddress?: string;
  uploadAuth?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUploadVideoResponseBody;
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
      body: CreateUploadVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptKMSDataKeyRequest extends $tea.Model {
  cipherText?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptKMSDataKeyResponseBody extends $tea.Model {
  keyId?: string;
  plaintext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptKMSDataKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DecryptKMSDataKeyResponseBody;
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
      body: DecryptKMSDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAIImageInfosRequest extends $tea.Model {
  AIImageInfoIds?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageInfoIds: 'AIImageInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageInfoIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAIImageInfosResponseBody extends $tea.Model {
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

export class DeleteAIImageInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAIImageInfosResponseBody;
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
      body: DeleteAIImageInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAITemplateRequest extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAITemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAITemplateResponseBody;
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
      body: DeleteAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInfoRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInfoResponseBody extends $tea.Model {
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

export class DeleteAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppInfoResponseBody;
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
      body: DeleteAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAttachedMediaRequest extends $tea.Model {
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAttachedMediaResponseBody extends $tea.Model {
  nonExistMediaIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAttachedMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAttachedMediaResponseBody;
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
      body: DeleteAttachedMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryRequest extends $tea.Model {
  cateId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryResponseBody extends $tea.Model {
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

export class DeleteCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCategoryResponseBody;
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
      body: DeleteCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicImageRequest extends $tea.Model {
  dynamicImageIds?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageIds: 'DynamicImageIds',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageIds: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicImageResponseBody extends $tea.Model {
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

export class DeleteDynamicImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDynamicImageResponseBody;
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
      body: DeleteDynamicImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: string;
  projectIds?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectIds: 'ProjectIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'string',
      projectIds: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectResponseBody extends $tea.Model {
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

export class DeleteEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEditingProjectResponseBody;
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
      body: DeleteEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  deleteImageType?: string;
  imageIds?: string;
  imageType?: string;
  imageURLs?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteImageType: 'DeleteImageType',
      imageIds: 'ImageIds',
      imageType: 'ImageType',
      imageURLs: 'ImageURLs',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteImageType: 'string',
      imageIds: 'string',
      imageType: 'string',
      imageURLs: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
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

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteImageResponseBody;
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
      body: DeleteImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageCallbackRequest extends $tea.Model {
  appId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageCallbackResponseBody extends $tea.Model {
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

export class DeleteMessageCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMessageCallbackResponseBody;
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
      body: DeleteMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMezzaninesRequest extends $tea.Model {
  force?: boolean;
  videoIds?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      videoIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMezzaninesResponseBody extends $tea.Model {
  nonExistVideoIds?: string[];
  requestId?: string;
  unRemoveableVideoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
      unRemoveableVideoIds: 'UnRemoveableVideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      unRemoveableVideoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMezzaninesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMezzaninesResponseBody;
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
      body: DeleteMezzaninesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultipartUploadRequest extends $tea.Model {
  mediaId?: string;
  mediaType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaType: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultipartUploadResponseBody extends $tea.Model {
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

export class DeleteMultipartUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMultipartUploadResponseBody;
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
      body: DeleteMultipartUploadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStreamRequest extends $tea.Model {
  jobIds?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStreamResponseBody extends $tea.Model {
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

export class DeleteStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStreamResponseBody;
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
      body: DeleteStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTranscodeTemplateGroupRequest extends $tea.Model {
  forceDelGroup?: string;
  transcodeTemplateGroupId?: string;
  transcodeTemplateIds?: string;
  static names(): { [key: string]: string } {
    return {
      forceDelGroup: 'ForceDelGroup',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateIds: 'TranscodeTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelGroup: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTranscodeTemplateGroupResponseBody extends $tea.Model {
  nonExistTranscodeTemplateIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistTranscodeTemplateIds: 'NonExistTranscodeTemplateIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistTranscodeTemplateIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTranscodeTemplateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTranscodeTemplateGroupResponseBody;
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
      body: DeleteTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoRequest extends $tea.Model {
  videoIds?: string;
  static names(): { [key: string]: string } {
    return {
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoResponseBody extends $tea.Model {
  forbiddenVideoIds?: string[];
  nonExistVideoIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenVideoIds: 'ForbiddenVideoIds',
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenVideoIds: { 'type': 'array', 'itemType': 'string' },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVideoResponseBody;
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
      body: DeleteVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodDomainRequest extends $tea.Model {
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodDomainResponseBody extends $tea.Model {
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

export class DeleteVodDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVodDomainResponseBody;
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
      body: DeleteVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodSpecificConfigRequest extends $tea.Model {
  configId?: string;
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodSpecificConfigResponseBody extends $tea.Model {
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

export class DeleteVodSpecificConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVodSpecificConfigResponseBody;
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
      body: DeleteVodSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodTemplateRequest extends $tea.Model {
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodTemplateResponseBody extends $tea.Model {
  requestId?: string;
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVodTemplateResponseBody;
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
      body: DeleteVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWatermarkRequest extends $tea.Model {
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWatermarkResponseBody extends $tea.Model {
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

export class DeleteWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteWatermarkResponseBody;
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
      body: DeleteWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosRequest extends $tea.Model {
  bizDate?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  topPlayVideos?: DescribePlayTopVideosResponseBodyTopPlayVideos;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      topPlayVideos: 'TopPlayVideos',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      topPlayVideos: DescribePlayTopVideosResponseBodyTopPlayVideos,
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayTopVideosResponseBody;
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
      body: DescribePlayTopVideosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgRequest extends $tea.Model {
  endTime?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgResponseBody extends $tea.Model {
  requestId?: string;
  userPlayStatisAvgs?: DescribePlayUserAvgResponseBodyUserPlayStatisAvgs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userPlayStatisAvgs: 'UserPlayStatisAvgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userPlayStatisAvgs: DescribePlayUserAvgResponseBodyUserPlayStatisAvgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayUserAvgResponseBody;
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
      body: DescribePlayUserAvgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalRequest extends $tea.Model {
  endTime?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBody extends $tea.Model {
  requestId?: string;
  userPlayStatisTotals?: DescribePlayUserTotalResponseBodyUserPlayStatisTotals;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userPlayStatisTotals: 'UserPlayStatisTotals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userPlayStatisTotals: DescribePlayUserTotalResponseBodyUserPlayStatisTotals,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayUserTotalResponseBody;
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
      body: DescribePlayUserTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisRequest extends $tea.Model {
  endTime?: string;
  ownerId?: number;
  startTime?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      startTime: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponseBody extends $tea.Model {
  requestId?: string;
  videoPlayStatisDetails?: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      videoPlayStatisDetails: 'VideoPlayStatisDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      videoPlayStatisDetails: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayVideoStatisResponseBody;
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
      body: DescribePlayVideoStatisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataRequest extends $tea.Model {
  AIType?: string;
  endTime?: string;
  ownerId?: number;
  region?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      AIType: 'AIType',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIType: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBody extends $tea.Model {
  AIData?: DescribeVodAIDataResponseBodyAIData;
  dataInterval?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIData: 'AIData',
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIData: DescribeVodAIDataResponseBodyAIData,
      dataInterval: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodAIDataResponseBody;
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
      body: DescribeVodAIDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponseBody extends $tea.Model {
  certificateListModel?: DescribeVodCertificateListResponseBodyCertificateListModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeVodCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodCertificateListResponseBody;
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
      body: DescribeVodCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodDomainBpsDataResponseBody;
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
      body: DescribeVodDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainCertificateInfoRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainCertificateInfoResponseBody extends $tea.Model {
  certInfos?: DescribeVodDomainCertificateInfoResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeVodDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainCertificateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodDomainCertificateInfoResponseBody;
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
      body: DescribeVodDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsRequest extends $tea.Model {
  domainName?: string;
  functionNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBody extends $tea.Model {
  domainConfigs?: DescribeVodDomainConfigsResponseBodyDomainConfigs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: DescribeVodDomainConfigsResponseBodyDomainConfigs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodDomainConfigsResponseBody;
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
      body: DescribeVodDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainDetailRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainDetailResponseBody extends $tea.Model {
  domainDetail?: DescribeVodDomainDetailResponseBodyDomainDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeVodDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodDomainDetailResponseBody;
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
      body: DescribeVodDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponseBody extends $tea.Model {
  domainLogDetails?: DescribeVodDomainLogResponseBodyDomainLogDetails;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeVodDomainLogResponseBodyDomainLogDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodDomainLogResponseBody;
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
      body: DescribeVodDomainLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  totalTraffic?: string;
  trafficDataPerInterval?: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalTraffic: 'TotalTraffic',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      totalTraffic: 'string',
      trafficDataPerInterval: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodDomainTrafficDataResponseBody;
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
      body: DescribeVodDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataRequest extends $tea.Model {
  area?: string;
  domainName?: string;
  endTime?: string;
  field?: string;
  ownerId?: number;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      domainName: 'string',
      endTime: 'string',
      field: 'string',
      ownerId: 'number',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataResponseBody extends $tea.Model {
  area?: string;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  type?: string;
  usageDataPerInterval?: DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      type: 'Type',
      usageDataPerInterval: 'UsageDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      type: 'string',
      usageDataPerInterval: DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodDomainUsageDataResponseBody;
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
      body: DescribeVodDomainUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshQuotaRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshQuotaResponseBody extends $tea.Model {
  blockQuota?: string;
  dirQuota?: string;
  dirRemain?: string;
  preloadQuota?: string;
  preloadRemain?: string;
  requestId?: string;
  urlQuota?: string;
  urlRemain?: string;
  blockRemain?: string;
  static names(): { [key: string]: string } {
    return {
      blockQuota: 'BlockQuota',
      dirQuota: 'DirQuota',
      dirRemain: 'DirRemain',
      preloadQuota: 'PreloadQuota',
      preloadRemain: 'PreloadRemain',
      requestId: 'RequestId',
      urlQuota: 'UrlQuota',
      urlRemain: 'UrlRemain',
      blockRemain: 'blockRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQuota: 'string',
      dirQuota: 'string',
      dirRemain: 'string',
      preloadQuota: 'string',
      preloadRemain: 'string',
      requestId: 'string',
      urlQuota: 'string',
      urlRemain: 'string',
      blockRemain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodRefreshQuotaResponseBody;
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
      body: DescribeVodRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  objectPath?: string;
  objectType?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: DescribeVodRefreshTasksResponseBodyTasks;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: DescribeVodRefreshTasksResponseBodyTasks,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodRefreshTasksResponseBody;
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
      body: DescribeVodRefreshTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataRequest extends $tea.Model {
  endTime?: string;
  ownerId?: number;
  region?: string;
  startTime?: string;
  storage?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
      storage: 'Storage',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      startTime: 'string',
      storage: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponseBody extends $tea.Model {
  dataInterval?: string;
  requestId?: string;
  storageData?: DescribeVodStorageDataResponseBodyStorageData;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
      storageData: 'StorageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      requestId: 'string',
      storageData: DescribeVodStorageDataResponseBodyStorageData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodStorageDataResponseBody;
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
      body: DescribeVodStorageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataRequest extends $tea.Model {
  endTime?: string;
  interval?: string;
  ownerId?: number;
  region?: string;
  specification?: string;
  startTime?: string;
  storage?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      region: 'Region',
      specification: 'Specification',
      startTime: 'StartTime',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      region: 'string',
      specification: 'string',
      startTime: 'string',
      storage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  requestId?: string;
  transcodeData?: DescribeVodTranscodeDataResponseBodyTranscodeData;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
      transcodeData: 'TranscodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      requestId: 'string',
      transcodeData: DescribeVodTranscodeDataResponseBodyTranscodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodTranscodeDataResponseBody;
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
      body: DescribeVodTranscodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsRequest extends $tea.Model {
  domainName?: string;
  domainSearchType?: string;
  domainStatus?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  tag?: DescribeVodUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVodUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeVodUserDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeVodUserDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodUserDomainsResponseBody;
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
      body: DescribeVodUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodVerifyContentRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodVerifyContentResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVodVerifyContentResponseBody;
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
      body: DescribeVodVerifyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAppPolicyFromIdentityRequest extends $tea.Model {
  appId?: string;
  identityName?: string;
  identityType?: string;
  policyNames?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      identityName: 'IdentityName',
      identityType: 'IdentityType',
      policyNames: 'PolicyNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      identityName: 'string',
      identityType: 'string',
      policyNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAppPolicyFromIdentityResponseBody extends $tea.Model {
  failedPolicyNames?: string[];
  nonExistPolicyNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedPolicyNames: 'FailedPolicyNames',
      nonExistPolicyNames: 'NonExistPolicyNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPolicyNames: { 'type': 'array', 'itemType': 'string' },
      nonExistPolicyNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAppPolicyFromIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachAppPolicyFromIdentityResponseBody;
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
      body: DetachAppPolicyFromIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateKMSDataKeyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateKMSDataKeyResponseBody extends $tea.Model {
  ciphertextBlob?: string;
  keyId?: string;
  plaintext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateKMSDataKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateKMSDataKeyResponseBody;
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
      body: GenerateKMSDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIImageJobsRequest extends $tea.Model {
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIImageJobsResponseBody extends $tea.Model {
  AIImageJobList?: GetAIImageJobsResponseBodyAIImageJobList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageJobList: 'AIImageJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageJobList: { 'type': 'array', 'itemType': GetAIImageJobsResponseBodyAIImageJobList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIImageJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAIImageJobsResponseBody;
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
      body: GetAIImageJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBody extends $tea.Model {
  mediaAuditJob?: GetAIMediaAuditJobResponseBodyMediaAuditJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditJob: 'MediaAuditJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditJob: GetAIMediaAuditJobResponseBodyMediaAuditJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAIMediaAuditJobResponseBody;
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
      body: GetAIMediaAuditJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITemplateRequest extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateInfo?: GetAITemplateResponseBodyTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateInfo: GetAITemplateResponseBodyTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAITemplateResponseBody;
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
      body: GetAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultRequest extends $tea.Model {
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBody extends $tea.Model {
  requestId?: string;
  videoTagResult?: GetAIVideoTagResultResponseBodyVideoTagResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      videoTagResult: 'VideoTagResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      videoTagResult: GetAIVideoTagResultResponseBodyVideoTagResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAIVideoTagResultResponseBody;
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
      body: GetAIVideoTagResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosRequest extends $tea.Model {
  appIds?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosResponseBody extends $tea.Model {
  appInfoList?: GetAppInfosResponseBodyAppInfoList[];
  nonExistAppIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      nonExistAppIds: 'NonExistAppIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': GetAppInfosResponseBodyAppInfoList },
      nonExistAppIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppInfosResponseBody;
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
      body: GetAppInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoRequest extends $tea.Model {
  authTimeout?: number;
  mediaIds?: string;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      mediaIds: 'MediaIds',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      mediaIds: 'string',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBody extends $tea.Model {
  attachedMediaList?: GetAttachedMediaInfoResponseBodyAttachedMediaList[];
  nonExistMediaIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedMediaList: 'AttachedMediaList',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedMediaList: { 'type': 'array', 'itemType': GetAttachedMediaInfoResponseBodyAttachedMediaList },
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAttachedMediaInfoResponseBody;
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
      body: GetAttachedMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryResponseBody extends $tea.Model {
  histories?: GetAuditHistoryResponseBodyHistories[];
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      histories: 'Histories',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      histories: { 'type': 'array', 'itemType': GetAuditHistoryResponseBodyHistories },
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAuditHistoryResponseBody;
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
      body: GetAuditHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesRequest extends $tea.Model {
  cateId?: number;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBody extends $tea.Model {
  category?: GetCategoriesResponseBodyCategory;
  requestId?: string;
  subCategories?: GetCategoriesResponseBodySubCategories;
  subTotal?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
      subCategories: 'SubCategories',
      subTotal: 'SubTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: GetCategoriesResponseBodyCategory,
      requestId: 'string',
      subCategories: GetCategoriesResponseBodySubCategories,
      subTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCategoriesResponseBody;
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
      body: GetCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAITemplateRequest extends $tea.Model {
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAITemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateInfo?: GetDefaultAITemplateResponseBodyTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateInfo: GetDefaultAITemplateResponseBodyTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDefaultAITemplateResponseBody;
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
      body: GetDefaultAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: string;
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponseBody extends $tea.Model {
  project?: GetEditingProjectResponseBodyProject;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetEditingProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEditingProjectResponseBody;
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
      body: GetEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsRequest extends $tea.Model {
  materialType?: string;
  ownerAccount?: string;
  ownerId?: string;
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      materialType: 'MaterialType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialType: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBody extends $tea.Model {
  materialList?: GetEditingProjectMaterialsResponseBodyMaterialList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      materialList: 'MaterialList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialList: GetEditingProjectMaterialsResponseBodyMaterialList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEditingProjectMaterialsResponseBody;
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
      body: GetEditingProjectMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoRequest extends $tea.Model {
  authTimeout?: number;
  imageId?: string;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      imageId: 'ImageId',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      imageId: 'string',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponseBody extends $tea.Model {
  imageInfo?: GetImageInfoResponseBodyImageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: GetImageInfoResponseBodyImageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetImageInfoResponseBody;
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
      body: GetImageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfosRequest extends $tea.Model {
  authTimeout?: number;
  imageIds?: string;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      imageIds: 'ImageIds',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      imageIds: 'string',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfosResponseBody extends $tea.Model {
  imageInfo?: GetImageInfosResponseBodyImageInfo[];
  nonExistImageIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
      nonExistImageIds: 'NonExistImageIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': GetImageInfosResponseBodyImageInfo },
      nonExistImageIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetImageInfosResponseBody;
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
      body: GetImageInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailRequest extends $tea.Model {
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  pageNo?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      pageNo: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailResponseBody extends $tea.Model {
  mediaAuditAudioResultDetail?: GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditAudioResultDetail: 'MediaAuditAudioResultDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditAudioResultDetail: GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaAuditAudioResultDetailResponseBody;
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
      body: GetMediaAuditAudioResultDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultRequest extends $tea.Model {
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBody extends $tea.Model {
  mediaAuditResult?: GetMediaAuditResultResponseBodyMediaAuditResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditResult: 'MediaAuditResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditResult: GetMediaAuditResultResponseBodyMediaAuditResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaAuditResultResponseBody;
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
      body: GetMediaAuditResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailRequest extends $tea.Model {
  mediaId?: string;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponseBody extends $tea.Model {
  mediaAuditResultDetail?: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditResultDetail: 'MediaAuditResultDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditResultDetail: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaAuditResultDetailResponseBody;
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
      body: GetMediaAuditResultDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineRequest extends $tea.Model {
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBody extends $tea.Model {
  mediaAuditResultTimeline?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditResultTimeline: 'MediaAuditResultTimeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditResultTimeline: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaAuditResultTimelineResponseBody;
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
      body: GetMediaAuditResultTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultRequest extends $tea.Model {
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBody extends $tea.Model {
  DNAResult?: GetMediaDNAResultResponseBodyDNAResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DNAResult: 'DNAResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNAResult: GetMediaDNAResultResponseBodyDNAResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaDNAResultResponseBody;
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
      body: GetMediaDNAResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaRefreshJobsRequest extends $tea.Model {
  mediaId?: string;
  mediaRefreshJobId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaRefreshJobId: 'MediaRefreshJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaRefreshJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaRefreshJobsResponseBody extends $tea.Model {
  mediaRefreshJobs?: GetMediaRefreshJobsResponseBodyMediaRefreshJobs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaRefreshJobs: 'MediaRefreshJobs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaRefreshJobs: { 'type': 'array', 'itemType': GetMediaRefreshJobsResponseBodyMediaRefreshJobs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaRefreshJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaRefreshJobsResponseBody;
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
      body: GetMediaRefreshJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackRequest extends $tea.Model {
  appId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackResponseBody extends $tea.Model {
  messageCallback?: GetMessageCallbackResponseBodyMessageCallback;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageCallback: 'MessageCallback',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageCallback: GetMessageCallbackResponseBodyMessageCallback,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMessageCallbackResponseBody;
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
      body: GetMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoRequest extends $tea.Model {
  additionType?: string;
  authTimeout?: number;
  outputType?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      authTimeout: 'AuthTimeout',
      outputType: 'OutputType',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: 'string',
      authTimeout: 'number',
      outputType: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBody extends $tea.Model {
  mezzanine?: GetMezzanineInfoResponseBodyMezzanine;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mezzanine: 'Mezzanine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mezzanine: GetMezzanineInfoResponseBodyMezzanine,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMezzanineInfoResponseBody;
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
      body: GetMezzanineInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoRequest extends $tea.Model {
  additionType?: string;
  authTimeout?: number;
  definition?: string;
  formats?: string;
  outputType?: string;
  playConfig?: string;
  reAuthInfo?: string;
  resultType?: string;
  streamType?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      authTimeout: 'AuthTimeout',
      definition: 'Definition',
      formats: 'Formats',
      outputType: 'OutputType',
      playConfig: 'PlayConfig',
      reAuthInfo: 'ReAuthInfo',
      resultType: 'ResultType',
      streamType: 'StreamType',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: 'string',
      authTimeout: 'number',
      definition: 'string',
      formats: 'string',
      outputType: 'string',
      playConfig: 'string',
      reAuthInfo: 'string',
      resultType: 'string',
      streamType: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBody extends $tea.Model {
  playInfoList?: GetPlayInfoResponseBodyPlayInfoList;
  requestId?: string;
  videoBase?: GetPlayInfoResponseBodyVideoBase;
  static names(): { [key: string]: string } {
    return {
      playInfoList: 'PlayInfoList',
      requestId: 'RequestId',
      videoBase: 'VideoBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playInfoList: GetPlayInfoResponseBodyPlayInfoList,
      requestId: 'string',
      videoBase: GetPlayInfoResponseBodyVideoBase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPlayInfoResponseBody;
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
      body: GetPlayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryRequest extends $tea.Model {
  videoIds?: string;
  static names(): { [key: string]: string } {
    return {
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponseBody extends $tea.Model {
  nonExistVideoIds?: string[];
  requestId?: string;
  transcodeSummaryList?: GetTranscodeSummaryResponseBodyTranscodeSummaryList[];
  static names(): { [key: string]: string } {
    return {
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
      transcodeSummaryList: 'TranscodeSummaryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      transcodeSummaryList: { 'type': 'array', 'itemType': GetTranscodeSummaryResponseBodyTranscodeSummaryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTranscodeSummaryResponseBody;
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
      body: GetTranscodeSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskRequest extends $tea.Model {
  transcodeTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      transcodeTaskId: 'TranscodeTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBody extends $tea.Model {
  requestId?: string;
  transcodeTask?: GetTranscodeTaskResponseBodyTranscodeTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTask: 'TranscodeTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTask: GetTranscodeTaskResponseBodyTranscodeTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTranscodeTaskResponseBody;
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
      body: GetTranscodeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupRequest extends $tea.Model {
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplateGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponseBody extends $tea.Model {
  requestId?: string;
  transcodeTemplateGroup?: GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTemplateGroup: 'TranscodeTemplateGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTemplateGroup: GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTranscodeTemplateGroupResponseBody;
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
      body: GetTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetURLUploadInfosRequest extends $tea.Model {
  jobIds?: string;
  uploadURLs?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      uploadURLs: 'UploadURLs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      uploadURLs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetURLUploadInfosResponseBody extends $tea.Model {
  nonExists?: string[];
  requestId?: string;
  URLUploadInfoList?: GetURLUploadInfosResponseBodyURLUploadInfoList[];
  static names(): { [key: string]: string } {
    return {
      nonExists: 'NonExists',
      requestId: 'RequestId',
      URLUploadInfoList: 'URLUploadInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExists: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      URLUploadInfoList: { 'type': 'array', 'itemType': GetURLUploadInfosResponseBodyURLUploadInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetURLUploadInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetURLUploadInfosResponseBody;
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
      body: GetURLUploadInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsRequest extends $tea.Model {
  mediaIds?: string;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsResponseBody extends $tea.Model {
  forbiddenMediaIds?: string[];
  nonExistMediaIds?: string[];
  requestId?: string;
  uploadDetails?: GetUploadDetailsResponseBodyUploadDetails[];
  static names(): { [key: string]: string } {
    return {
      forbiddenMediaIds: 'ForbiddenMediaIds',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
      uploadDetails: 'UploadDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenMediaIds: { 'type': 'array', 'itemType': 'string' },
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      uploadDetails: { 'type': 'array', 'itemType': GetUploadDetailsResponseBodyUploadDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUploadDetailsResponseBody;
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
      body: GetUploadDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoRequest extends $tea.Model {
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoResponseBody extends $tea.Model {
  requestId?: string;
  video?: GetVideoInfoResponseBodyVideo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      video: GetVideoInfoResponseBodyVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoInfoResponseBody;
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
      body: GetVideoInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosRequest extends $tea.Model {
  videoIds?: string;
  static names(): { [key: string]: string } {
    return {
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosResponseBody extends $tea.Model {
  nonExistVideoIds?: string[];
  requestId?: string;
  videoList?: GetVideoInfosResponseBodyVideoList[];
  static names(): { [key: string]: string } {
    return {
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
      videoList: 'VideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      videoList: { 'type': 'array', 'itemType': GetVideoInfosResponseBodyVideoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoInfosResponseBody;
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
      body: GetVideoInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListRequest extends $tea.Model {
  cateId?: number;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  status?: string;
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      storageLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  videoList?: GetVideoListResponseBodyVideoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      videoList: 'VideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      videoList: GetVideoListResponseBodyVideoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoListResponseBody;
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
      body: GetVideoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthRequest extends $tea.Model {
  apiVersion?: string;
  authInfoTimeout?: number;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      authInfoTimeout: 'AuthInfoTimeout',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      authInfoTimeout: 'number',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthResponseBody extends $tea.Model {
  playAuth?: string;
  requestId?: string;
  videoMeta?: GetVideoPlayAuthResponseBodyVideoMeta;
  static names(): { [key: string]: string } {
    return {
      playAuth: 'PlayAuth',
      requestId: 'RequestId',
      videoMeta: 'VideoMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playAuth: 'string',
      requestId: 'string',
      videoMeta: GetVideoPlayAuthResponseBodyVideoMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoPlayAuthResponseBody;
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
      body: GetVideoPlayAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodTemplateRequest extends $tea.Model {
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodTemplateResponseBody extends $tea.Model {
  requestId?: string;
  vodTemplateInfo?: GetVodTemplateResponseBodyVodTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateInfo: 'VodTemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateInfo: GetVodTemplateResponseBodyVodTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVodTemplateResponseBody;
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
      body: GetVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkRequest extends $tea.Model {
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  watermarkInfo?: GetWatermarkResponseBodyWatermarkInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfo: 'WatermarkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfo: GetWatermarkResponseBodyWatermarkInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWatermarkResponseBody;
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
      body: GetWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIImageInfoRequest extends $tea.Model {
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIImageInfoResponseBody extends $tea.Model {
  AIImageInfoList?: ListAIImageInfoResponseBodyAIImageInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageInfoList: 'AIImageInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageInfoList: { 'type': 'array', 'itemType': ListAIImageInfoResponseBodyAIImageInfoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIImageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAIImageInfoResponseBody;
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
      body: ListAIImageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobRequest extends $tea.Model {
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBody extends $tea.Model {
  AIJobList?: ListAIJobResponseBodyAIJobList;
  nonExistAIJobIds?: ListAIJobResponseBodyNonExistAIJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIJobList: 'AIJobList',
      nonExistAIJobIds: 'NonExistAIJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJobList: ListAIJobResponseBodyAIJobList,
      nonExistAIJobIds: ListAIJobResponseBodyNonExistAIJobIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAIJobResponseBody;
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
      body: ListAIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITemplateRequest extends $tea.Model {
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateInfoList?: ListAITemplateResponseBodyTemplateInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateInfoList: 'TemplateInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateInfoList: { 'type': 'array', 'itemType': ListAITemplateResponseBodyTemplateInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAITemplateResponseBody;
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
      body: ListAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoResponseBody extends $tea.Model {
  appInfoList?: ListAppInfoResponseBodyAppInfoList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': ListAppInfoResponseBodyAppInfoList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppInfoResponseBody;
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
      body: ListAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityRequest extends $tea.Model {
  appId?: string;
  identityName?: string;
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      identityName: 'IdentityName',
      identityType: 'IdentityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      identityName: 'string',
      identityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityResponseBody extends $tea.Model {
  appPolicyList?: ListAppPoliciesForIdentityResponseBodyAppPolicyList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appPolicyList: 'AppPolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyList: { 'type': 'array', 'itemType': ListAppPoliciesForIdentityResponseBodyAppPolicyList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppPoliciesForIdentityResponseBody;
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
      body: ListAppPoliciesForIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditSecurityIpRequest extends $tea.Model {
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditSecurityIpResponseBody extends $tea.Model {
  requestId?: string;
  securityIpList?: ListAuditSecurityIpResponseBodySecurityIpList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpList: { 'type': 'array', 'itemType': ListAuditSecurityIpResponseBodySecurityIpList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditSecurityIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAuditSecurityIpResponseBody;
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
      body: ListAuditSecurityIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageRequest extends $tea.Model {
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageResponseBody extends $tea.Model {
  dynamicImageList?: ListDynamicImageResponseBodyDynamicImageList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageList: 'DynamicImageList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageList: { 'type': 'array', 'itemType': ListDynamicImageResponseBodyDynamicImageList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDynamicImageResponseBody;
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
      body: ListDynamicImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoRequest extends $tea.Model {
  appName?: string;
  domainName?: string;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBody extends $tea.Model {
  liveRecordVideoList?: ListLiveRecordVideoResponseBodyLiveRecordVideoList;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      liveRecordVideoList: 'LiveRecordVideoList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVideoList: ListLiveRecordVideoResponseBodyLiveRecordVideoList,
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveRecordVideoResponseBody;
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
      body: ListLiveRecordVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsRequest extends $tea.Model {
  authTimeout?: string;
  pageNo?: string;
  pageSize?: string;
  snapshotType?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      snapshotType: 'SnapshotType',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'string',
      pageNo: 'string',
      pageSize: 'string',
      snapshotType: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBody extends $tea.Model {
  mediaSnapshot?: ListSnapshotsResponseBodyMediaSnapshot;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaSnapshot: 'MediaSnapshot',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaSnapshot: ListSnapshotsResponseBodyMediaSnapshot,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSnapshotsResponseBody;
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
      body: ListSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTaskRequest extends $tea.Model {
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  startTime?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTaskResponseBody extends $tea.Model {
  requestId?: string;
  transcodeTaskList?: ListTranscodeTaskResponseBodyTranscodeTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTaskList: 'TranscodeTaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTaskList: { 'type': 'array', 'itemType': ListTranscodeTaskResponseBodyTranscodeTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTranscodeTaskResponseBody;
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
      body: ListTranscodeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTemplateGroupRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTemplateGroupResponseBody extends $tea.Model {
  requestId?: string;
  transcodeTemplateGroupList?: ListTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTemplateGroupList: 'TranscodeTemplateGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTemplateGroupList: { 'type': 'array', 'itemType': ListTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTemplateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTranscodeTemplateGroupResponseBody;
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
      body: ListTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVodTemplateRequest extends $tea.Model {
  appId?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVodTemplateResponseBody extends $tea.Model {
  requestId?: string;
  vodTemplateInfoList?: ListVodTemplateResponseBodyVodTemplateInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateInfoList: 'VodTemplateInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateInfoList: { 'type': 'array', 'itemType': ListVodTemplateResponseBodyVodTemplateInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVodTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVodTemplateResponseBody;
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
      body: ListVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarkRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  watermarkInfos?: ListWatermarkResponseBodyWatermarkInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfos: 'WatermarkInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfos: { 'type': 'array', 'itemType': ListWatermarkResponseBodyWatermarkInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListWatermarkResponseBody;
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
      body: ListWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAppResourceRequest extends $tea.Model {
  resourceIds?: string;
  resourceType?: string;
  targetAppId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      targetAppId: 'TargetAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: 'string',
      resourceType: 'string',
      targetAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAppResourceResponseBody extends $tea.Model {
  failedResourceIds?: string[];
  nonExistResourceIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResourceIds: 'FailedResourceIds',
      nonExistResourceIds: 'NonExistResourceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResourceIds: { 'type': 'array', 'itemType': 'string' },
      nonExistResourceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAppResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveAppResourceResponseBody;
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
      body: MoveAppResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadVodObjectCachesRequest extends $tea.Model {
  objectPath?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      objectPath: 'ObjectPath',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectPath: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadVodObjectCachesResponseBody extends $tea.Model {
  preloadTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preloadTaskId: 'PreloadTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preloadTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadVodObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreloadVodObjectCachesResponseBody;
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
      body: PreloadVodObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceEditingProjectVideoRequest extends $tea.Model {
  coverURL?: string;
  description?: string;
  mediaMetadata?: string;
  ownerId?: number;
  produceConfig?: string;
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  timeline?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      description: 'Description',
      mediaMetadata: 'MediaMetadata',
      ownerId: 'OwnerId',
      produceConfig: 'ProduceConfig',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeline: 'Timeline',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      description: 'string',
      mediaMetadata: 'string',
      ownerId: 'number',
      produceConfig: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      timeline: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceEditingProjectVideoResponseBody extends $tea.Model {
  mediaId?: string;
  projectId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      projectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceEditingProjectVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProduceEditingProjectVideoResponseBody;
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
      body: ProduceEditingProjectVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMediaPlayUrlsRequest extends $tea.Model {
  definitions?: string;
  formats?: string;
  mediaIds?: string;
  resultType?: string;
  sliceCount?: number;
  sliceFlag?: boolean;
  streamType?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      definitions: 'Definitions',
      formats: 'Formats',
      mediaIds: 'MediaIds',
      resultType: 'ResultType',
      sliceCount: 'SliceCount',
      sliceFlag: 'SliceFlag',
      streamType: 'StreamType',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definitions: 'string',
      formats: 'string',
      mediaIds: 'string',
      resultType: 'string',
      sliceCount: 'number',
      sliceFlag: 'boolean',
      streamType: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMediaPlayUrlsResponseBody extends $tea.Model {
  forbiddenMediaIds?: string;
  mediaRefreshJobId?: string;
  nonExistMediaIds?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenMediaIds: 'ForbiddenMediaIds',
      mediaRefreshJobId: 'MediaRefreshJobId',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenMediaIds: 'string',
      mediaRefreshJobId: 'string',
      nonExistMediaIds: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMediaPlayUrlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshMediaPlayUrlsResponseBody;
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
      body: RefreshMediaPlayUrlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUploadVideoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUploadVideoResponseBody extends $tea.Model {
  requestId?: string;
  uploadAddress?: string;
  uploadAuth?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUploadVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshUploadVideoResponseBody;
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
      body: RefreshUploadVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshVodObjectCachesRequest extends $tea.Model {
  objectPath?: string;
  objectType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshVodObjectCachesResponseBody extends $tea.Model {
  refreshTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      refreshTaskId: 'RefreshTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshVodObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshVodObjectCachesResponseBody;
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
      body: RefreshVodObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaRequest extends $tea.Model {
  registerMetadatas?: string;
  templateGroupId?: string;
  userData?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      registerMetadatas: 'RegisterMetadatas',
      templateGroupId: 'TemplateGroupId',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerMetadatas: 'string',
      templateGroupId: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaResponseBody extends $tea.Model {
  failedFileURLs?: string[];
  registeredMediaList?: RegisterMediaResponseBodyRegisteredMediaList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedFileURLs: 'FailedFileURLs',
      registeredMediaList: 'RegisteredMediaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFileURLs: { 'type': 'array', 'itemType': 'string' },
      registeredMediaList: { 'type': 'array', 'itemType': RegisterMediaResponseBodyRegisteredMediaList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterMediaResponseBody;
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
      body: RegisterMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectRequest extends $tea.Model {
  endTime?: string;
  ownerAccount?: string;
  ownerId?: string;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  sortBy?: string;
  startTime?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBody extends $tea.Model {
  projectList?: SearchEditingProjectResponseBodyProjectList;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      projectList: 'ProjectList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectList: SearchEditingProjectResponseBodyProjectList,
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchEditingProjectResponseBody;
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
      body: SearchEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaRequest extends $tea.Model {
  fields?: string;
  match?: string;
  pageNo?: number;
  pageSize?: number;
  scrollToken?: string;
  searchType?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      match: 'Match',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scrollToken: 'ScrollToken',
      searchType: 'SearchType',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      match: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scrollToken: 'string',
      searchType: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBody extends $tea.Model {
  mediaList?: SearchMediaResponseBodyMediaList[];
  requestId?: string;
  scrollToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mediaList: 'MediaList',
      requestId: 'RequestId',
      scrollToken: 'ScrollToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaList },
      requestId: 'string',
      scrollToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchMediaResponseBody;
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
      body: SearchMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAuditSecurityIpRequest extends $tea.Model {
  ips?: string;
  operateMode?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      operateMode: 'OperateMode',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: 'string',
      operateMode: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAuditSecurityIpResponseBody extends $tea.Model {
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

export class SetAuditSecurityIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAuditSecurityIpResponseBody;
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
      body: SetAuditSecurityIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCrossdomainContentRequest extends $tea.Model {
  content?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  resourceRealOwnerId?: string;
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'string',
      storageLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCrossdomainContentResponseBody extends $tea.Model {
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

export class SetCrossdomainContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetCrossdomainContentResponseBody;
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
      body: SetCrossdomainContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultAITemplateRequest extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultAITemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDefaultAITemplateResponseBody;
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
      body: SetDefaultAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultTranscodeTemplateGroupRequest extends $tea.Model {
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplateGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultTranscodeTemplateGroupResponseBody extends $tea.Model {
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

export class SetDefaultTranscodeTemplateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDefaultTranscodeTemplateGroupResponseBody;
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
      body: SetDefaultTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultWatermarkRequest extends $tea.Model {
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultWatermarkResponseBody extends $tea.Model {
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

export class SetDefaultWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDefaultWatermarkResponseBody;
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
      body: SetDefaultWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEditingProjectMaterialsRequest extends $tea.Model {
  materialIds?: string;
  ownerAccount?: string;
  ownerId?: string;
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      materialIds: 'MaterialIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialIds: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEditingProjectMaterialsResponseBody extends $tea.Model {
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

export class SetEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetEditingProjectMaterialsResponseBody;
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
      body: SetEditingProjectMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageCallbackRequest extends $tea.Model {
  appId?: string;
  authKey?: string;
  authSwitch?: string;
  callbackType?: string;
  callbackURL?: string;
  eventTypeList?: string;
  mnsEndpoint?: string;
  mnsQueueName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      mnsEndpoint: 'MnsEndpoint',
      mnsQueueName: 'MnsQueueName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authKey: 'string',
      authSwitch: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
      mnsEndpoint: 'string',
      mnsQueueName: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageCallbackResponseBody extends $tea.Model {
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

export class SetMessageCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetMessageCallbackResponseBody;
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
      body: SetMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVodDomainCertificateRequest extends $tea.Model {
  certName?: string;
  domainName?: string;
  ownerId?: number;
  SSLPri?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      domainName: 'string',
      ownerId: 'number',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVodDomainCertificateResponseBody extends $tea.Model {
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

export class SetVodDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetVodDomainCertificateResponseBody;
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
      body: SetVodDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageAuditJobRequest extends $tea.Model {
  mediaAuditConfiguration?: string;
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditConfiguration: 'MediaAuditConfiguration',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditConfiguration: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageAuditJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageAuditJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAIImageAuditJobResponseBody;
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
      body: SubmitAIImageAuditJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageJobRequest extends $tea.Model {
  AIPipelineId?: string;
  AITemplateId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userData?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AIPipelineId: 'AIPipelineId',
      AITemplateId: 'AITemplateId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIPipelineId: 'string',
      AITemplateId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAIImageJobResponseBody;
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
      body: SubmitAIImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobRequest extends $tea.Model {
  config?: string;
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  types?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      types: 'Types',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      types: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobResponseBody extends $tea.Model {
  AIJobList?: SubmitAIJobResponseBodyAIJobList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIJobList: 'AIJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJobList: SubmitAIJobResponseBodyAIJobList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAIJobResponseBody;
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
      body: SubmitAIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIMediaAuditJobRequest extends $tea.Model {
  mediaAuditConfiguration?: string;
  mediaId?: string;
  mediaType?: string;
  templateId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditConfiguration: 'MediaAuditConfiguration',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditConfiguration: 'string',
      mediaId: 'string',
      mediaType: 'string',
      templateId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIMediaAuditJobResponseBody extends $tea.Model {
  jobId?: string;
  mediaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIMediaAuditJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAIMediaAuditJobResponseBody;
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
      body: SubmitAIMediaAuditJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequest extends $tea.Model {
  dynamicImageTemplateId?: string;
  overrideParams?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageTemplateId: 'DynamicImageTemplateId',
      overrideParams: 'OverrideParams',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageTemplateId: 'string',
      overrideParams: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobResponseBody extends $tea.Model {
  dynamicImageJob?: SubmitDynamicImageJobResponseBodyDynamicImageJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageJob: 'DynamicImageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageJob: SubmitDynamicImageJobResponseBodyDynamicImageJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitDynamicImageJobResponseBody;
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
      body: SubmitDynamicImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaDNADeleteJobRequest extends $tea.Model {
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaDNADeleteJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaDNADeleteJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitMediaDNADeleteJobResponseBody;
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
      body: SubmitMediaDNADeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsRequest extends $tea.Model {
  preprocessType?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      preprocessType: 'PreprocessType',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preprocessType: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsResponseBody extends $tea.Model {
  preprocessJobs?: SubmitPreprocessJobsResponseBodyPreprocessJobs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preprocessJobs: 'PreprocessJobs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preprocessJobs: SubmitPreprocessJobsResponseBodyPreprocessJobs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitPreprocessJobsResponseBody;
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
      body: SubmitPreprocessJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequest extends $tea.Model {
  count?: number;
  height?: string;
  interval?: number;
  snapshotTemplateId?: string;
  specifiedOffsetTime?: number;
  spriteSnapshotConfig?: string;
  userData?: string;
  videoId?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      height: 'Height',
      interval: 'Interval',
      snapshotTemplateId: 'SnapshotTemplateId',
      specifiedOffsetTime: 'SpecifiedOffsetTime',
      spriteSnapshotConfig: 'SpriteSnapshotConfig',
      userData: 'UserData',
      videoId: 'VideoId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      height: 'string',
      interval: 'number',
      snapshotTemplateId: 'string',
      specifiedOffsetTime: 'number',
      spriteSnapshotConfig: 'string',
      userData: 'string',
      videoId: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBody extends $tea.Model {
  requestId?: string;
  snapshotJob?: SubmitSnapshotJobResponseBodySnapshotJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotJob: SubmitSnapshotJobResponseBodySnapshotJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSnapshotJobResponseBody;
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
      body: SubmitSnapshotJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobsRequest extends $tea.Model {
  encryptConfig?: string;
  overrideParams?: string;
  pipelineId?: string;
  priority?: string;
  templateGroupId?: string;
  userData?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptConfig: 'EncryptConfig',
      overrideParams: 'OverrideParams',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      templateGroupId: 'TemplateGroupId',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptConfig: 'string',
      overrideParams: 'string',
      pipelineId: 'string',
      priority: 'string',
      templateGroupId: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobsResponseBody extends $tea.Model {
  requestId?: string;
  transcodeJobs?: SubmitTranscodeJobsResponseBodyTranscodeJobs;
  transcodeTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeJobs: 'TranscodeJobs',
      transcodeTaskId: 'TranscodeTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeJobs: SubmitTranscodeJobsResponseBodyTranscodeJobs,
      transcodeTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTranscodeJobsResponseBody;
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
      body: SubmitTranscodeJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitWorkflowJobRequest extends $tea.Model {
  mediaId?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitWorkflowJobResponseBody extends $tea.Model {
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

export class SubmitWorkflowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitWorkflowJobResponseBody;
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
      body: SubmitWorkflowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAITemplateRequest extends $tea.Model {
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAITemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAITemplateResponseBody;
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
      body: UpdateAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppInfoRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  description?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      description: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppInfoResponseBody extends $tea.Model {
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

export class UpdateAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppInfoResponseBody;
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
      body: UpdateAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAttachedMediaInfosRequest extends $tea.Model {
  updateContent?: string;
  static names(): { [key: string]: string } {
    return {
      updateContent: 'UpdateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAttachedMediaInfosResponseBody extends $tea.Model {
  nonExistMediaIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAttachedMediaInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAttachedMediaInfosResponseBody;
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
      body: UpdateAttachedMediaInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryRequest extends $tea.Model {
  cateId?: number;
  cateName?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryResponseBody extends $tea.Model {
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

export class UpdateCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCategoryResponseBody;
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
      body: UpdateCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEditingProjectRequest extends $tea.Model {
  coverURL?: string;
  description?: string;
  ownerAccount?: string;
  ownerId?: string;
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEditingProjectResponseBody extends $tea.Model {
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

export class UpdateEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEditingProjectResponseBody;
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
      body: UpdateEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosRequest extends $tea.Model {
  updateContent?: string;
  static names(): { [key: string]: string } {
    return {
      updateContent: 'UpdateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosResponseBody extends $tea.Model {
  nonExistImageIds?: UpdateImageInfosResponseBodyNonExistImageIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistImageIds: 'NonExistImageIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistImageIds: UpdateImageInfosResponseBodyNonExistImageIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateImageInfosResponseBody;
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
      body: UpdateImageInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscodeTemplateGroupRequest extends $tea.Model {
  locked?: string;
  name?: string;
  transcodeTemplateGroupId?: string;
  transcodeTemplateList?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscodeTemplateGroupResponseBody extends $tea.Model {
  requestId?: string;
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTemplateGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscodeTemplateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTranscodeTemplateGroupResponseBody;
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
      body: UpdateTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoInfoRequest extends $tea.Model {
  cateId?: number;
  coverURL?: string;
  description?: string;
  tags?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      tags: 'Tags',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      tags: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoInfoResponseBody extends $tea.Model {
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

export class UpdateVideoInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVideoInfoResponseBody;
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
      body: UpdateVideoInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoInfosRequest extends $tea.Model {
  updateContent?: string;
  static names(): { [key: string]: string } {
    return {
      updateContent: 'UpdateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoInfosResponseBody extends $tea.Model {
  forbiddenVideoIds?: string[];
  nonExistVideoIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenVideoIds: 'ForbiddenVideoIds',
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenVideoIds: { 'type': 'array', 'itemType': 'string' },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVideoInfosResponseBody;
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
      body: UpdateVideoInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVodDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVodDomainResponseBody extends $tea.Model {
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

export class UpdateVodDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVodDomainResponseBody;
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
      body: UpdateVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVodTemplateRequest extends $tea.Model {
  name?: string;
  templateConfig?: string;
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: 'string',
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVodTemplateResponseBody extends $tea.Model {
  requestId?: string;
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVodTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVodTemplateResponseBody;
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
      body: UpdateVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkRequest extends $tea.Model {
  name?: string;
  watermarkConfig?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  watermarkInfo?: UpdateWatermarkResponseBodyWatermarkInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfo: 'WatermarkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfo: UpdateWatermarkResponseBodyWatermarkInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWatermarkResponseBody;
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
      body: UpdateWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMediaByURLRequest extends $tea.Model {
  appId?: string;
  storageLocation?: string;
  templateGroupId?: string;
  uploadMetadatas?: string;
  uploadURLs?: string;
  userData?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      storageLocation: 'StorageLocation',
      templateGroupId: 'TemplateGroupId',
      uploadMetadatas: 'UploadMetadatas',
      uploadURLs: 'UploadURLs',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      storageLocation: 'string',
      templateGroupId: 'string',
      uploadMetadatas: 'string',
      uploadURLs: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMediaByURLResponseBody extends $tea.Model {
  requestId?: string;
  uploadJobs?: UploadMediaByURLResponseBodyUploadJobs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadJobs: 'UploadJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadJobs: { 'type': 'array', 'itemType': UploadMediaByURLResponseBodyUploadJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMediaByURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadMediaByURLResponseBody;
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
      body: UploadMediaByURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadStreamByURLRequest extends $tea.Model {
  definition?: string;
  fileExtension?: string;
  HDRType?: string;
  mediaId?: string;
  streamURL?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      fileExtension: 'FileExtension',
      HDRType: 'HDRType',
      mediaId: 'MediaId',
      streamURL: 'StreamURL',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      fileExtension: 'string',
      HDRType: 'string',
      mediaId: 'string',
      streamURL: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadStreamByURLResponseBody extends $tea.Model {
  fileURL?: string;
  requestId?: string;
  sourceURL?: string;
  streamJobId?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      requestId: 'RequestId',
      sourceURL: 'SourceURL',
      streamJobId: 'StreamJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      requestId: 'string',
      sourceURL: 'string',
      streamJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadStreamByURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadStreamByURLResponseBody;
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
      body: UploadStreamByURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVodDomainOwnerRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVodDomainOwnerResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVodDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyVodDomainOwnerResponseBody;
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
      body: VerifyVodDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryResponseBodyCategory extends $tea.Model {
  cateId?: number;
  cateName?: string;
  level?: number;
  parentId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectResponseBodyProject extends $tea.Model {
  creationTime?: string;
  description?: string;
  modifiedTime?: string;
  projectId?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWatermarkResponseBodyWatermarkInfo extends $tea.Model {
  creationTime?: string;
  fileUrl?: string;
  isDefault?: string;
  name?: string;
  type?: string;
  watermarkConfig?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      fileUrl: 'FileUrl',
      isDefault: 'IsDefault',
      name: 'Name',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      fileUrl: 'string',
      isDefault: 'string',
      name: 'string',
      type: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponseBodyTopPlayVideosTopPlayVideoStatis extends $tea.Model {
  playDuration?: string;
  title?: string;
  UV?: string;
  VV?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      playDuration: 'PlayDuration',
      title: 'Title',
      UV: 'UV',
      VV: 'VV',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playDuration: 'string',
      title: 'string',
      UV: 'string',
      VV: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponseBodyTopPlayVideos extends $tea.Model {
  topPlayVideoStatis?: DescribePlayTopVideosResponseBodyTopPlayVideosTopPlayVideoStatis[];
  static names(): { [key: string]: string } {
    return {
      topPlayVideoStatis: 'TopPlayVideoStatis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topPlayVideoStatis: { 'type': 'array', 'itemType': DescribePlayTopVideosResponseBodyTopPlayVideosTopPlayVideoStatis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgResponseBodyUserPlayStatisAvgsUserPlayStatisAvg extends $tea.Model {
  avgPlayCount?: string;
  avgPlayDuration?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      avgPlayCount: 'AvgPlayCount',
      avgPlayDuration: 'AvgPlayDuration',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgPlayCount: 'string',
      avgPlayDuration: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgResponseBodyUserPlayStatisAvgs extends $tea.Model {
  userPlayStatisAvg?: DescribePlayUserAvgResponseBodyUserPlayStatisAvgsUserPlayStatisAvg[];
  static names(): { [key: string]: string } {
    return {
      userPlayStatisAvg: 'UserPlayStatisAvg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPlayStatisAvg: { 'type': 'array', 'itemType': DescribePlayUserAvgResponseBodyUserPlayStatisAvgsUserPlayStatisAvg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV extends $tea.Model {
  android?: string;
  flash?: string;
  HTML5?: string;
  iOS?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      flash: 'Flash',
      HTML5: 'HTML5',
      iOS: 'iOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'string',
      flash: 'string',
      HTML5: 'string',
      iOS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV extends $tea.Model {
  android?: string;
  flash?: string;
  HTML5?: string;
  iOS?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      flash: 'Flash',
      HTML5: 'HTML5',
      iOS: 'iOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'string',
      flash: 'string',
      HTML5: 'string',
      iOS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotal extends $tea.Model {
  date?: string;
  playDuration?: string;
  playRange?: string;
  UV?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV;
  VV?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      playDuration: 'PlayDuration',
      playRange: 'PlayRange',
      UV: 'UV',
      VV: 'VV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      playDuration: 'string',
      playRange: 'string',
      UV: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV,
      VV: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotals extends $tea.Model {
  userPlayStatisTotal?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotal[];
  static names(): { [key: string]: string } {
    return {
      userPlayStatisTotal: 'UserPlayStatisTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPlayStatisTotal: { 'type': 'array', 'itemType': DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponseBodyVideoPlayStatisDetailsVideoPlayStatisDetail extends $tea.Model {
  date?: string;
  playDuration?: string;
  playRange?: string;
  title?: string;
  UV?: string;
  VV?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      playDuration: 'PlayDuration',
      playRange: 'PlayRange',
      title: 'Title',
      UV: 'UV',
      VV: 'VV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      playDuration: 'string',
      playRange: 'string',
      title: 'string',
      UV: 'string',
      VV: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails extends $tea.Model {
  videoPlayStatisDetail?: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetailsVideoPlayStatisDetail[];
  static names(): { [key: string]: string } {
    return {
      videoPlayStatisDetail: 'VideoPlayStatisDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoPlayStatisDetail: { 'type': 'array', 'itemType': DescribePlayVideoStatisResponseBodyVideoPlayStatisDetailsVideoPlayStatisDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBodyAIDataAIDataItemDataDataItem extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBodyAIDataAIDataItemData extends $tea.Model {
  dataItem?: DescribeVodAIDataResponseBodyAIDataAIDataItemDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeVodAIDataResponseBodyAIDataAIDataItemDataDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBodyAIDataAIDataItem extends $tea.Model {
  data?: DescribeVodAIDataResponseBodyAIDataAIDataItemData;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeVodAIDataResponseBodyAIDataAIDataItemData,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBodyAIData extends $tea.Model {
  AIDataItem?: DescribeVodAIDataResponseBodyAIDataAIDataItem[];
  static names(): { [key: string]: string } {
    return {
      AIDataItem: 'AIDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDataItem: { 'type': 'array', 'itemType': DescribeVodAIDataResponseBodyAIDataAIDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
  certId?: number;
  certName?: string;
  common?: string;
  fingerprint?: string;
  issuer?: string;
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      common: 'Common',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      common: 'string',
      fingerprint: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  cert?: DescribeVodCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeVodCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeVodCertificateListResponseBodyCertificateListModelCertList;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeVodCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  domesticValue?: string;
  httpsDomesticValue?: string;
  httpsOverseasValue?: string;
  httpsValue?: string;
  overseasValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeVodDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
  certDomainName?: string;
  certExpireTime?: string;
  certLife?: string;
  certName?: string;
  certOrg?: string;
  certType?: string;
  domainName?: string;
  serverCertificateStatus?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certDomainName: 'CertDomainName',
      certExpireTime: 'CertExpireTime',
      certLife: 'CertLife',
      certName: 'CertName',
      certOrg: 'CertOrg',
      certType: 'CertType',
      domainName: 'DomainName',
      serverCertificateStatus: 'ServerCertificateStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomainName: 'string',
      certExpireTime: 'string',
      certLife: 'string',
      certName: 'string',
      certOrg: 'string',
      certType: 'string',
      domainName: 'string',
      serverCertificateStatus: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeVodDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeVodDomainCertificateInfoResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
  argName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  configId?: string;
  functionArgs?: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  functionName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      functionArgs: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
      functionName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainDetailResponseBodyDomainDetailSourcesSource extends $tea.Model {
  content?: string;
  enabled?: string;
  port?: number;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      enabled: 'Enabled',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainDetailResponseBodyDomainDetailSources extends $tea.Model {
  source?: DescribeVodDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeVodDomainDetailResponseBodyDomainDetailSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainDetailResponseBodyDomainDetail extends $tea.Model {
  certName?: string;
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  scope?: string;
  sources?: DescribeVodDomainDetailResponseBodyDomainDetailSources;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scope: 'Scope',
      sources: 'Sources',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scope: 'string',
      sources: DescribeVodDomainDetailResponseBodyDomainDetailSources,
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
  endTime?: string;
  logName?: string;
  logPath?: string;
  logSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      logName: 'LogName',
      logPath: 'LogPath',
      logSize: 'LogSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      logName: 'string',
      logPath: 'string',
      logSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $tea.Model {
  logInfoDetail?: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
  domainName?: string;
  logCount?: number;
  logInfos?: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  pageInfos?: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      logCount: 'number',
      logInfos: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponseBodyDomainLogDetails extends $tea.Model {
  domainLogDetail?: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  domesticValue?: string;
  httpsDomesticValue?: string;
  httpsOverseasValue?: string;
  httpsValue?: string;
  overseasValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataResponseBodyUsageDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval extends $tea.Model {
  dataModule?: DescribeVodDomainUsageDataResponseBodyUsageDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainUsageDataResponseBodyUsageDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksResponseBodyTasksTask extends $tea.Model {
  creationTime?: string;
  description?: string;
  objectPath?: string;
  objectType?: string;
  process?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      objectPath: 'string',
      objectType: 'string',
      process: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeVodRefreshTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeVodRefreshTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponseBodyStorageDataStorageDataItem extends $tea.Model {
  networkOut?: string;
  storageUtilization?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      networkOut: 'NetworkOut',
      storageUtilization: 'StorageUtilization',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkOut: 'string',
      storageUtilization: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponseBodyStorageData extends $tea.Model {
  storageDataItem?: DescribeVodStorageDataResponseBodyStorageDataStorageDataItem[];
  static names(): { [key: string]: string } {
    return {
      storageDataItem: 'StorageDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageDataItem: { 'type': 'array', 'itemType': DescribeVodStorageDataResponseBodyStorageDataStorageDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemDataDataItem extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemData extends $tea.Model {
  dataItem?: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemDataDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItem extends $tea.Model {
  data?: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemData;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemData,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBodyTranscodeData extends $tea.Model {
  transcodeDataItem?: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItem[];
  static names(): { [key: string]: string } {
    return {
      transcodeDataItem: 'TranscodeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeDataItem: { 'type': 'array', 'itemType': DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsRequestTag extends $tea.Model {
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

export class DescribeVodUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  content?: string;
  port?: number;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeVodUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeVodUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  sandbox?: string;
  sources?: DescribeVodUserDomainsResponseBodyDomainsPageDataSources;
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      sandbox: 'Sandbox',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      sandbox: 'string',
      sources: DescribeVodUserDomainsResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeVodUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeVodUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIImageJobsResponseBodyAIImageJobList extends $tea.Model {
  AIImageResult?: string;
  code?: string;
  creationTime?: string;
  jobId?: string;
  message?: string;
  status?: string;
  templateConfig?: string;
  templateId?: string;
  userData?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageResult: 'AIImageResult',
      code: 'Code',
      creationTime: 'CreationTime',
      jobId: 'JobId',
      message: 'Message',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageResult: 'string',
      code: 'string',
      creationTime: 'string',
      jobId: 'string',
      message: 'string',
      status: 'string',
      templateConfig: 'string',
      templateId: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult extends $tea.Model {
  label?: string;
  scene?: string;
  score?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      score: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult extends $tea.Model {
  label?: string;
  scene?: string;
  score?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      score: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult extends $tea.Model {
  label?: string;
  result?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult[];
  suggestion?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      result: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult },
      suggestion: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult extends $tea.Model {
  content?: string;
  label?: string;
  scene?: string;
  score?: string;
  suggestion?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      label: 'string',
      scene: 'string',
      score: 'string',
      suggestion: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult extends $tea.Model {
  adResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult;
  label?: string;
  liveResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult;
  logoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult;
  pornResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult;
  suggestion?: string;
  terrorismResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult;
  static names(): { [key: string]: string } {
    return {
      adResult: 'AdResult',
      label: 'Label',
      liveResult: 'LiveResult',
      logoResult: 'LogoResult',
      pornResult: 'PornResult',
      suggestion: 'Suggestion',
      terrorismResult: 'TerrorismResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult,
      label: 'string',
      liveResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult,
      logoResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult,
      pornResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult,
      suggestion: 'string',
      terrorismResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobData extends $tea.Model {
  abnormalModules?: string;
  audioResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult[];
  imageResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult[];
  label?: string;
  suggestion?: string;
  textResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult[];
  videoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult;
  static names(): { [key: string]: string } {
    return {
      abnormalModules: 'AbnormalModules',
      audioResult: 'AudioResult',
      imageResult: 'ImageResult',
      label: 'Label',
      suggestion: 'Suggestion',
      textResult: 'TextResult',
      videoResult: 'VideoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalModules: 'string',
      audioResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult },
      imageResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult },
      label: 'string',
      suggestion: 'string',
      textResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult },
      videoResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJob extends $tea.Model {
  code?: string;
  completeTime?: string;
  creationTime?: string;
  data?: GetAIMediaAuditJobResponseBodyMediaAuditJobData;
  jobId?: string;
  mediaId?: string;
  message?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      data: 'Data',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completeTime: 'string',
      creationTime: 'string',
      data: GetAIMediaAuditJobResponseBodyMediaAuditJobData,
      jobId: 'string',
      mediaId: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITemplateResponseBodyTemplateInfo extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  modifyTime?: string;
  source?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      modifyTime: 'ModifyTime',
      source: 'Source',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      modifyTime: 'string',
      source: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultCategory extends $tea.Model {
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultKeyword extends $tea.Model {
  tag?: string;
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultLocation extends $tea.Model {
  tag?: string;
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultPerson extends $tea.Model {
  faceUrl?: string;
  tag?: string;
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      faceUrl: 'FaceUrl',
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceUrl: 'string',
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultTime extends $tea.Model {
  tag?: string;
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResult extends $tea.Model {
  category?: GetAIVideoTagResultResponseBodyVideoTagResultCategory[];
  keyword?: GetAIVideoTagResultResponseBodyVideoTagResultKeyword[];
  location?: GetAIVideoTagResultResponseBodyVideoTagResultLocation[];
  person?: GetAIVideoTagResultResponseBodyVideoTagResultPerson[];
  time?: GetAIVideoTagResultResponseBodyVideoTagResultTime[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      location: 'Location',
      person: 'Person',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultCategory },
      keyword: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultKeyword },
      location: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultLocation },
      person: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultPerson },
      time: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosResponseBodyAppInfoList extends $tea.Model {
  appId?: string;
  appName?: string;
  creationTime?: string;
  description?: string;
  modificationTime?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      creationTime: 'CreationTime',
      description: 'Description',
      modificationTime: 'ModificationTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      creationTime: 'string',
      description: 'string',
      modificationTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBodyAttachedMediaListCategories extends $tea.Model {
  cateId?: number;
  cateName?: string;
  level?: number;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBodyAttachedMediaList extends $tea.Model {
  appId?: string;
  categories?: GetAttachedMediaInfoResponseBodyAttachedMediaListCategories[];
  creationTime?: string;
  description?: string;
  mediaId?: string;
  modificationTime?: string;
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  type?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      categories: 'Categories',
      creationTime: 'CreationTime',
      description: 'Description',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      type: 'Type',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      categories: { 'type': 'array', 'itemType': GetAttachedMediaInfoResponseBodyAttachedMediaListCategories },
      creationTime: 'string',
      description: 'string',
      mediaId: 'string',
      modificationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      type: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryResponseBodyHistories extends $tea.Model {
  auditor?: string;
  comment?: string;
  creationTime?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      auditor: 'Auditor',
      comment: 'Comment',
      creationTime: 'CreationTime',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditor: 'string',
      comment: 'string',
      creationTime: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBodyCategory extends $tea.Model {
  cateId?: number;
  cateName?: string;
  level?: number;
  parentId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBodySubCategoriesCategory extends $tea.Model {
  cateId?: number;
  cateName?: string;
  level?: number;
  parentId?: number;
  subTotal?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
      subTotal: 'SubTotal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
      subTotal: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBodySubCategories extends $tea.Model {
  category?: GetCategoriesResponseBodySubCategoriesCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': GetCategoriesResponseBodySubCategoriesCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAITemplateResponseBodyTemplateInfo extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  modifyTime?: string;
  source?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      modifyTime: 'ModifyTime',
      source: 'Source',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      modifyTime: 'string',
      source: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponseBodyProject extends $tea.Model {
  coverURL?: string;
  creationTime?: string;
  description?: string;
  modifiedTime?: string;
  projectId?: string;
  regionId?: string;
  status?: string;
  storageLocation?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      status: 'Status',
      storageLocation: 'StorageLocation',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      regionId: 'string',
      status: 'string',
      storageLocation: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots extends $tea.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites extends $tea.Model {
  sprite?: string[];
  static names(): { [key: string]: string } {
    return {
      sprite: 'Sprite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sprite: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMaterialListMaterial extends $tea.Model {
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  materialId?: string;
  materialType?: string;
  modifiedTime?: string;
  size?: number;
  snapshots?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots;
  source?: string;
  spriteConfig?: string;
  sprites?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites;
  status?: string;
  tags?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      materialId: 'MaterialId',
      materialType: 'MaterialType',
      modifiedTime: 'ModifiedTime',
      size: 'Size',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteConfig: 'SpriteConfig',
      sprites: 'Sprites',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      materialId: 'string',
      materialType: 'string',
      modifiedTime: 'string',
      size: 'number',
      snapshots: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots,
      source: 'string',
      spriteConfig: 'string',
      sprites: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites,
      status: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMaterialList extends $tea.Model {
  material?: GetEditingProjectMaterialsResponseBodyMaterialListMaterial[];
  static names(): { [key: string]: string } {
    return {
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      material: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMaterialListMaterial },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponseBodyImageInfoMezzanine extends $tea.Model {
  fileSize?: string;
  fileURL?: string;
  height?: number;
  originalFileName?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'FileSize',
      fileURL: 'FileURL',
      height: 'Height',
      originalFileName: 'OriginalFileName',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'string',
      fileURL: 'string',
      height: 'number',
      originalFileName: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponseBodyImageInfo extends $tea.Model {
  appId?: string;
  cateId?: number;
  cateName?: string;
  creationTime?: string;
  description?: string;
  imageId?: string;
  imageType?: string;
  mezzanine?: GetImageInfoResponseBodyImageInfoMezzanine;
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      creationTime: 'CreationTime',
      description: 'Description',
      imageId: 'ImageId',
      imageType: 'ImageType',
      mezzanine: 'Mezzanine',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      creationTime: 'string',
      description: 'string',
      imageId: 'string',
      imageType: 'string',
      mezzanine: GetImageInfoResponseBodyImageInfoMezzanine,
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfosResponseBodyImageInfoMezzanine extends $tea.Model {
  fileSize?: string;
  fileURL?: string;
  height?: number;
  originalFileName?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'FileSize',
      fileURL: 'FileURL',
      height: 'Height',
      originalFileName: 'OriginalFileName',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'string',
      fileURL: 'string',
      height: 'number',
      originalFileName: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfosResponseBodyImageInfo extends $tea.Model {
  appId?: string;
  cateId?: number;
  cateName?: string;
  creationTime?: string;
  description?: string;
  imageId?: string;
  imageType?: string;
  mezzanine?: GetImageInfosResponseBodyImageInfoMezzanine;
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      creationTime: 'CreationTime',
      description: 'Description',
      imageId: 'ImageId',
      imageType: 'ImageType',
      mezzanine: 'Mezzanine',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      creationTime: 'string',
      description: 'string',
      imageId: 'string',
      imageType: 'string',
      mezzanine: GetImageInfosResponseBodyImageInfoMezzanine,
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetailList extends $tea.Model {
  endTime?: number;
  label?: string;
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      label: 'Label',
      startTime: 'StartTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      label: 'string',
      startTime: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetail extends $tea.Model {
  list?: GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetailList[];
  pageTotal?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageTotal: 'PageTotal',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetailList },
      pageTotal: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultAudioResult extends $tea.Model {
  label?: string;
  scene?: string;
  score?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      score: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult extends $tea.Model {
  label?: string;
  scene?: string;
  score?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      score: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResult extends $tea.Model {
  label?: string;
  result?: GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult[];
  suggestion?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      result: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult },
      suggestion: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultTextResult extends $tea.Model {
  content?: string;
  label?: string;
  scene?: string;
  score?: string;
  suggestion?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      label: 'string',
      scene: 'string',
      score: 'string',
      suggestion: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList extends $tea.Model {
  count?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult extends $tea.Model {
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList[];
  label?: string;
  maxScore?: string;
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResult extends $tea.Model {
  adResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult;
  label?: string;
  liveResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult;
  logoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult;
  pornResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult;
  suggestion?: string;
  terrorismResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult;
  static names(): { [key: string]: string } {
    return {
      adResult: 'AdResult',
      label: 'Label',
      liveResult: 'LiveResult',
      logoResult: 'LogoResult',
      pornResult: 'PornResult',
      suggestion: 'Suggestion',
      terrorismResult: 'TerrorismResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult,
      label: 'string',
      liveResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult,
      logoResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult,
      pornResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult,
      suggestion: 'string',
      terrorismResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResult extends $tea.Model {
  abnormalModules?: string;
  audioResult?: GetMediaAuditResultResponseBodyMediaAuditResultAudioResult[];
  imageResult?: GetMediaAuditResultResponseBodyMediaAuditResultImageResult[];
  label?: string;
  suggestion?: string;
  textResult?: GetMediaAuditResultResponseBodyMediaAuditResultTextResult[];
  videoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResult;
  static names(): { [key: string]: string } {
    return {
      abnormalModules: 'AbnormalModules',
      audioResult: 'AudioResult',
      imageResult: 'ImageResult',
      label: 'Label',
      suggestion: 'Suggestion',
      textResult: 'TextResult',
      videoResult: 'VideoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalModules: 'string',
      audioResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultAudioResult },
      imageResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultImageResult },
      label: 'string',
      suggestion: 'string',
      textResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultTextResult },
      videoResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList extends $tea.Model {
  adLabel?: string;
  adScore?: string;
  liveLabel?: string;
  liveScore?: string;
  logoLabel?: string;
  logoScore?: string;
  pornLabel?: string;
  pornScore?: string;
  terrorismLabel?: string;
  terrorismScore?: string;
  timestamp?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      adLabel: 'AdLabel',
      adScore: 'AdScore',
      liveLabel: 'LiveLabel',
      liveScore: 'LiveScore',
      logoLabel: 'LogoLabel',
      logoScore: 'LogoScore',
      pornLabel: 'PornLabel',
      pornScore: 'PornScore',
      terrorismLabel: 'TerrorismLabel',
      terrorismScore: 'TerrorismScore',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adLabel: 'string',
      adScore: 'string',
      liveLabel: 'string',
      liveScore: 'string',
      logoLabel: 'string',
      logoScore: 'string',
      pornLabel: 'string',
      pornScore: 'string',
      terrorismLabel: 'string',
      terrorismScore: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail extends $tea.Model {
  list?: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism extends $tea.Model {
  label?: string;
  score?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline extends $tea.Model {
  ad?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd[];
  live?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive[];
  logo?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo[];
  porn?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn[];
  terrorism?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism[];
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      live: 'Live',
      logo: 'Logo',
      porn: 'Porn',
      terrorism: 'Terrorism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd },
      live: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive },
      logo: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo },
      porn: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn },
      terrorism: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetailDuplication extends $tea.Model {
  duration?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetailInput extends $tea.Model {
  duration?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetail extends $tea.Model {
  duplication?: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailDuplication;
  input?: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailInput;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailDuplication,
      input: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNA extends $tea.Model {
  detail?: GetMediaDNAResultResponseBodyDNAResultVideoDNADetail[];
  primaryKey?: string;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': GetMediaDNAResultResponseBodyDNAResultVideoDNADetail },
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResult extends $tea.Model {
  videoDNA?: GetMediaDNAResultResponseBodyDNAResultVideoDNA[];
  static names(): { [key: string]: string } {
    return {
      videoDNA: 'VideoDNA',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoDNA: { 'type': 'array', 'itemType': GetMediaDNAResultResponseBodyDNAResultVideoDNA },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaRefreshJobsResponseBodyMediaRefreshJobs extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  filterPolicy?: string;
  gmtCreate?: string;
  gmtModified?: string;
  mediaId?: string;
  mediaRefreshJobId?: string;
  status?: string;
  successPlayUrls?: string;
  taskIds?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      filterPolicy: 'FilterPolicy',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      mediaId: 'MediaId',
      mediaRefreshJobId: 'MediaRefreshJobId',
      status: 'Status',
      successPlayUrls: 'SuccessPlayUrls',
      taskIds: 'TaskIds',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      filterPolicy: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      mediaId: 'string',
      mediaRefreshJobId: 'string',
      status: 'string',
      successPlayUrls: 'string',
      taskIds: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackResponseBodyMessageCallback extends $tea.Model {
  appId?: string;
  authKey?: string;
  authSwitch?: string;
  callbackType?: string;
  callbackURL?: string;
  eventTypeList?: string;
  mnsEndpoint?: string;
  mnsQueueName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      mnsEndpoint: 'MnsEndpoint',
      mnsQueueName: 'MnsQueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authKey: 'string',
      authSwitch: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
      mnsEndpoint: 'string',
      mnsQueueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBodyMezzanineAudioStreamList extends $tea.Model {
  bitrate?: string;
  channelLayout?: string;
  channels?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  duration?: string;
  index?: string;
  lang?: string;
  numFrames?: string;
  sampleFmt?: string;
  sampleRate?: string;
  startTime?: string;
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channelLayout: 'ChannelLayout',
      channels: 'Channels',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      numFrames: 'NumFrames',
      sampleFmt: 'SampleFmt',
      sampleRate: 'SampleRate',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channelLayout: 'string',
      channels: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      numFrames: 'string',
      sampleFmt: 'string',
      sampleRate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBodyMezzanineVideoStreamList extends $tea.Model {
  avgFPS?: string;
  bitrate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  dar?: string;
  duration?: string;
  fps?: string;
  HDRType?: string;
  hasBFrames?: string;
  height?: string;
  index?: string;
  lang?: string;
  level?: string;
  numFrames?: string;
  pixFmt?: string;
  profile?: string;
  rotate?: string;
  sar?: string;
  startTime?: string;
  timebase?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFPS: 'AvgFPS',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      HDRType: 'HDRType',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'StartTime',
      timebase: 'Timebase',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFPS: 'string',
      bitrate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
      HDRType: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      rotate: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBodyMezzanine extends $tea.Model {
  audioStreamList?: GetMezzanineInfoResponseBodyMezzanineAudioStreamList[];
  bitrate?: string;
  creationTime?: string;
  duration?: string;
  fileName?: string;
  fileURL?: string;
  fps?: string;
  height?: number;
  outputType?: string;
  size?: number;
  status?: string;
  videoId?: string;
  videoStreamList?: GetMezzanineInfoResponseBodyMezzanineVideoStreamList[];
  width?: number;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      bitrate: 'Bitrate',
      creationTime: 'CreationTime',
      duration: 'Duration',
      fileName: 'FileName',
      fileURL: 'FileURL',
      fps: 'Fps',
      height: 'Height',
      outputType: 'OutputType',
      size: 'Size',
      status: 'Status',
      videoId: 'VideoId',
      videoStreamList: 'VideoStreamList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: { 'type': 'array', 'itemType': GetMezzanineInfoResponseBodyMezzanineAudioStreamList },
      bitrate: 'string',
      creationTime: 'string',
      duration: 'string',
      fileName: 'string',
      fileURL: 'string',
      fps: 'string',
      height: 'number',
      outputType: 'string',
      size: 'number',
      status: 'string',
      videoId: 'string',
      videoStreamList: { 'type': 'array', 'itemType': GetMezzanineInfoResponseBodyMezzanineVideoStreamList },
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyPlayInfoListPlayInfo extends $tea.Model {
  bitDepth?: number;
  bitrate?: string;
  creationTime?: string;
  definition?: string;
  duration?: string;
  encrypt?: number;
  encryptType?: string;
  format?: string;
  fps?: string;
  HDRType?: string;
  height?: number;
  jobId?: string;
  modificationTime?: string;
  narrowBandType?: string;
  playURL?: string;
  size?: number;
  specification?: string;
  status?: string;
  streamType?: string;
  watermarkId?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitDepth: 'BitDepth',
      bitrate: 'Bitrate',
      creationTime: 'CreationTime',
      definition: 'Definition',
      duration: 'Duration',
      encrypt: 'Encrypt',
      encryptType: 'EncryptType',
      format: 'Format',
      fps: 'Fps',
      HDRType: 'HDRType',
      height: 'Height',
      jobId: 'JobId',
      modificationTime: 'ModificationTime',
      narrowBandType: 'NarrowBandType',
      playURL: 'PlayURL',
      size: 'Size',
      specification: 'Specification',
      status: 'Status',
      streamType: 'StreamType',
      watermarkId: 'WatermarkId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitDepth: 'number',
      bitrate: 'string',
      creationTime: 'string',
      definition: 'string',
      duration: 'string',
      encrypt: 'number',
      encryptType: 'string',
      format: 'string',
      fps: 'string',
      HDRType: 'string',
      height: 'number',
      jobId: 'string',
      modificationTime: 'string',
      narrowBandType: 'string',
      playURL: 'string',
      size: 'number',
      specification: 'string',
      status: 'string',
      streamType: 'string',
      watermarkId: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyPlayInfoList extends $tea.Model {
  playInfo?: GetPlayInfoResponseBodyPlayInfoListPlayInfo[];
  static names(): { [key: string]: string } {
    return {
      playInfo: 'PlayInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playInfo: { 'type': 'array', 'itemType': GetPlayInfoResponseBodyPlayInfoListPlayInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyVideoBase extends $tea.Model {
  coverURL?: string;
  creationTime?: string;
  danMuURL?: string;
  duration?: string;
  mediaType?: string;
  status?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      danMuURL: 'DanMuURL',
      duration: 'Duration',
      mediaType: 'MediaType',
      status: 'Status',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      creationTime: 'string',
      danMuURL: 'string',
      duration: 'string',
      mediaType: 'string',
      status: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList extends $tea.Model {
  bitrate?: string;
  completeTime?: string;
  creationTime?: string;
  duration?: string;
  errorCode?: string;
  errorMessage?: string;
  filesize?: number;
  format?: string;
  fps?: string;
  height?: string;
  transcodeJobStatus?: string;
  transcodeProgress?: number;
  transcodeTemplateId?: string;
  watermarkIdList?: string[];
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      duration: 'Duration',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      filesize: 'Filesize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      transcodeJobStatus: 'TranscodeJobStatus',
      transcodeProgress: 'TranscodeProgress',
      transcodeTemplateId: 'TranscodeTemplateId',
      watermarkIdList: 'WatermarkIdList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      completeTime: 'string',
      creationTime: 'string',
      duration: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      filesize: 'number',
      format: 'string',
      fps: 'string',
      height: 'string',
      transcodeJobStatus: 'string',
      transcodeProgress: 'number',
      transcodeTemplateId: 'string',
      watermarkIdList: { 'type': 'array', 'itemType': 'string' },
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponseBodyTranscodeSummaryList extends $tea.Model {
  completeTime?: string;
  creationTime?: string;
  transcodeJobInfoSummaryList?: GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList[];
  transcodeStatus?: string;
  transcodeTemplateGroupId?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      transcodeJobInfoSummaryList: 'TranscodeJobInfoSummaryList',
      transcodeStatus: 'TranscodeStatus',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      transcodeJobInfoSummaryList: { 'type': 'array', 'itemType': GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList },
      transcodeStatus: 'string',
      transcodeTemplateGroupId: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile extends $tea.Model {
  audioStreamList?: string;
  bitrate?: string;
  duration?: string;
  encryption?: string;
  filesize?: number;
  format?: string;
  fps?: string;
  height?: string;
  outputFileUrl?: string;
  subtitleStreamList?: string;
  videoStreamList?: string;
  watermarkIdList?: string[];
  width?: string;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      bitrate: 'Bitrate',
      duration: 'Duration',
      encryption: 'Encryption',
      filesize: 'Filesize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      outputFileUrl: 'OutputFileUrl',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
      watermarkIdList: 'WatermarkIdList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: 'string',
      bitrate: 'string',
      duration: 'string',
      encryption: 'string',
      filesize: 'number',
      format: 'string',
      fps: 'string',
      height: 'string',
      outputFileUrl: 'string',
      subtitleStreamList: 'string',
      videoStreamList: 'string',
      watermarkIdList: { 'type': 'array', 'itemType': 'string' },
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList extends $tea.Model {
  completeTime?: string;
  creationTime?: string;
  definition?: string;
  errorCode?: string;
  errorMessage?: string;
  inputFileUrl?: string;
  outputFile?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile;
  priority?: string;
  transcodeJobId?: string;
  transcodeJobStatus?: string;
  transcodeProgress?: number;
  transcodeTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      definition: 'Definition',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      inputFileUrl: 'InputFileUrl',
      outputFile: 'OutputFile',
      priority: 'Priority',
      transcodeJobId: 'TranscodeJobId',
      transcodeJobStatus: 'TranscodeJobStatus',
      transcodeProgress: 'TranscodeProgress',
      transcodeTemplateId: 'TranscodeTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      definition: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      inputFileUrl: 'string',
      outputFile: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile,
      priority: 'string',
      transcodeJobId: 'string',
      transcodeJobStatus: 'string',
      transcodeProgress: 'number',
      transcodeTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTask extends $tea.Model {
  completeTime?: string;
  creationTime?: string;
  taskStatus?: string;
  transcodeJobInfoList?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList[];
  transcodeTaskId?: string;
  transcodeTemplateGroupId?: string;
  trigger?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      taskStatus: 'TaskStatus',
      transcodeJobInfoList: 'TranscodeJobInfoList',
      transcodeTaskId: 'TranscodeTaskId',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      trigger: 'Trigger',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      taskStatus: 'string',
      transcodeJobInfoList: { 'type': 'array', 'itemType': GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList },
      transcodeTaskId: 'string',
      transcodeTemplateGroupId: 'string',
      trigger: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList extends $tea.Model {
  audio?: string;
  clip?: string;
  container?: string;
  definition?: string;
  encryptSetting?: string;
  muxConfig?: string;
  packageSetting?: string;
  rotate?: string;
  subtitleList?: string;
  templateName?: string;
  transConfig?: string;
  transcodeFileRegular?: string;
  transcodeTemplateId?: string;
  type?: string;
  video?: string;
  watermarkIds?: string[];
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      clip: 'Clip',
      container: 'Container',
      definition: 'Definition',
      encryptSetting: 'EncryptSetting',
      muxConfig: 'MuxConfig',
      packageSetting: 'PackageSetting',
      rotate: 'Rotate',
      subtitleList: 'SubtitleList',
      templateName: 'TemplateName',
      transConfig: 'TransConfig',
      transcodeFileRegular: 'TranscodeFileRegular',
      transcodeTemplateId: 'TranscodeTemplateId',
      type: 'Type',
      video: 'Video',
      watermarkIds: 'WatermarkIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'string',
      clip: 'string',
      container: 'string',
      definition: 'string',
      encryptSetting: 'string',
      muxConfig: 'string',
      packageSetting: 'string',
      rotate: 'string',
      subtitleList: 'string',
      templateName: 'string',
      transConfig: 'string',
      transcodeFileRegular: 'string',
      transcodeTemplateId: 'string',
      type: 'string',
      video: 'string',
      watermarkIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroup extends $tea.Model {
  appId?: string;
  creationTime?: string;
  isDefault?: string;
  locked?: string;
  modifyTime?: string;
  name?: string;
  transcodeTemplateGroupId?: string;
  transcodeTemplateList?: GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      locked: 'Locked',
      modifyTime: 'ModifyTime',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      isDefault: 'string',
      locked: 'string',
      modifyTime: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateList: { 'type': 'array', 'itemType': GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetURLUploadInfosResponseBodyURLUploadInfoList extends $tea.Model {
  completeTime?: string;
  creationTime?: string;
  errorCode?: string;
  errorMessage?: string;
  fileSize?: string;
  jobId?: string;
  mediaId?: string;
  status?: string;
  uploadURL?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileSize: 'FileSize',
      jobId: 'JobId',
      mediaId: 'MediaId',
      status: 'Status',
      uploadURL: 'UploadURL',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileSize: 'string',
      jobId: 'string',
      mediaId: 'string',
      status: 'string',
      uploadURL: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsResponseBodyUploadDetails extends $tea.Model {
  completionTime?: string;
  creationTime?: string;
  deviceModel?: string;
  fileSize?: number;
  mediaId?: string;
  modificationTime?: string;
  status?: string;
  title?: string;
  uploadIP?: string;
  uploadRatio?: number;
  uploadSize?: number;
  uploadSource?: string;
  uploadStatus?: string;
  static names(): { [key: string]: string } {
    return {
      completionTime: 'CompletionTime',
      creationTime: 'CreationTime',
      deviceModel: 'DeviceModel',
      fileSize: 'FileSize',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      title: 'Title',
      uploadIP: 'UploadIP',
      uploadRatio: 'UploadRatio',
      uploadSize: 'UploadSize',
      uploadSource: 'UploadSource',
      uploadStatus: 'UploadStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTime: 'string',
      creationTime: 'string',
      deviceModel: 'string',
      fileSize: 'number',
      mediaId: 'string',
      modificationTime: 'string',
      status: 'string',
      title: 'string',
      uploadIP: 'string',
      uploadRatio: 'number',
      uploadSize: 'number',
      uploadSource: 'string',
      uploadStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoResponseBodyVideoSnapshots extends $tea.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoResponseBodyVideo extends $tea.Model {
  appId?: string;
  auditStatus?: string;
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  customMediaInfo?: string;
  description?: string;
  duration?: number;
  modificationTime?: string;
  regionId?: string;
  size?: number;
  snapshots?: GetVideoInfoResponseBodyVideoSnapshots;
  status?: string;
  storageLocation?: string;
  tags?: string;
  templateGroupId?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      auditStatus: 'AuditStatus',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      customMediaInfo: 'CustomMediaInfo',
      description: 'Description',
      duration: 'Duration',
      modificationTime: 'ModificationTime',
      regionId: 'RegionId',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      auditStatus: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      customMediaInfo: 'string',
      description: 'string',
      duration: 'number',
      modificationTime: 'string',
      regionId: 'string',
      size: 'number',
      snapshots: GetVideoInfoResponseBodyVideoSnapshots,
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosResponseBodyVideoList extends $tea.Model {
  appId?: string;
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  modificationTime?: string;
  size?: number;
  snapshots?: string[];
  status?: string;
  storageLocation?: string;
  tags?: string;
  templateGroupId?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modificationTime: 'ModificationTime',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modificationTime: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBodyVideoListVideoSnapshots extends $tea.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBodyVideoListVideo extends $tea.Model {
  appId?: string;
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  modificationTime?: string;
  size?: number;
  snapshots?: GetVideoListResponseBodyVideoListVideoSnapshots;
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modificationTime: 'ModificationTime',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modificationTime: 'string',
      size: 'number',
      snapshots: GetVideoListResponseBodyVideoListVideoSnapshots,
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBodyVideoList extends $tea.Model {
  video?: GetVideoListResponseBodyVideoListVideo[];
  static names(): { [key: string]: string } {
    return {
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video: { 'type': 'array', 'itemType': GetVideoListResponseBodyVideoListVideo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthResponseBodyVideoMeta extends $tea.Model {
  coverURL?: string;
  duration?: number;
  status?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      duration: 'Duration',
      status: 'Status',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      duration: 'number',
      status: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodTemplateResponseBodyVodTemplateInfo extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  modifyTime?: string;
  name?: string;
  templateConfig?: string;
  templateType?: string;
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      modifyTime: 'ModifyTime',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateType: 'TemplateType',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      modifyTime: 'string',
      name: 'string',
      templateConfig: 'string',
      templateType: 'string',
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponseBodyWatermarkInfo extends $tea.Model {
  appId?: string;
  creationTime?: string;
  fileUrl?: string;
  isDefault?: string;
  name?: string;
  type?: string;
  watermarkConfig?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      fileUrl: 'FileUrl',
      isDefault: 'IsDefault',
      name: 'Name',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      fileUrl: 'string',
      isDefault: 'string',
      name: 'string',
      type: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIImageInfoResponseBodyAIImageInfoList extends $tea.Model {
  AIImageInfoId?: string;
  creationTime?: string;
  fileURL?: string;
  format?: string;
  jobId?: string;
  score?: string;
  version?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageInfoId: 'AIImageInfoId',
      creationTime: 'CreationTime',
      fileURL: 'FileURL',
      format: 'Format',
      jobId: 'JobId',
      score: 'Score',
      version: 'Version',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageInfoId: 'string',
      creationTime: 'string',
      fileURL: 'string',
      format: 'string',
      jobId: 'string',
      score: 'string',
      version: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBodyAIJobListAIJob extends $tea.Model {
  code?: string;
  completeTime?: string;
  creationTime?: string;
  data?: string;
  jobId?: string;
  mediaId?: string;
  message?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      data: 'Data',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completeTime: 'string',
      creationTime: 'string',
      data: 'string',
      jobId: 'string',
      mediaId: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBodyAIJobList extends $tea.Model {
  AIJob?: ListAIJobResponseBodyAIJobListAIJob[];
  static names(): { [key: string]: string } {
    return {
      AIJob: 'AIJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJob: { 'type': 'array', 'itemType': ListAIJobResponseBodyAIJobListAIJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBodyNonExistAIJobIds extends $tea.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITemplateResponseBodyTemplateInfoList extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  modifyTime?: string;
  source?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      modifyTime: 'ModifyTime',
      source: 'Source',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      modifyTime: 'string',
      source: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoResponseBodyAppInfoList extends $tea.Model {
  appId?: string;
  appName?: string;
  creationTime?: string;
  description?: string;
  modificationTime?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      creationTime: 'CreationTime',
      description: 'Description',
      modificationTime: 'ModificationTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      creationTime: 'string',
      description: 'string',
      modificationTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityResponseBodyAppPolicyList extends $tea.Model {
  appId?: string;
  creationTime?: string;
  description?: string;
  modificationTime?: string;
  policyName?: string;
  policyType?: string;
  policyValue?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      description: 'Description',
      modificationTime: 'ModificationTime',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      policyValue: 'PolicyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      description: 'string',
      modificationTime: 'string',
      policyName: 'string',
      policyType: 'string',
      policyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditSecurityIpResponseBodySecurityIpList extends $tea.Model {
  creationTime?: string;
  ips?: string;
  modificationTime?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ips: 'Ips',
      modificationTime: 'ModificationTime',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ips: 'string',
      modificationTime: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageResponseBodyDynamicImageList extends $tea.Model {
  creationTime?: string;
  duration?: string;
  dynamicImageId?: string;
  fileSize?: string;
  fileURL?: string;
  format?: string;
  fps?: string;
  height?: string;
  jobId?: string;
  videoId?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      duration: 'Duration',
      dynamicImageId: 'DynamicImageId',
      fileSize: 'FileSize',
      fileURL: 'FileURL',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      jobId: 'JobId',
      videoId: 'VideoId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      duration: 'string',
      dynamicImageId: 'string',
      fileSize: 'string',
      fileURL: 'string',
      format: 'string',
      fps: 'string',
      height: 'string',
      jobId: 'string',
      videoId: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots extends $tea.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo extends $tea.Model {
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  modifyTime?: string;
  size?: number;
  snapshots?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots;
  status?: string;
  tags?: string;
  templateGroupId?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modifyTime: 'ModifyTime',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modifyTime: 'string',
      size: 'number',
      snapshots: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots,
      status: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideo extends $tea.Model {
  appName?: string;
  domainName?: string;
  playlistId?: string;
  recordEndTime?: string;
  recordStartTime?: string;
  streamName?: string;
  video?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      playlistId: 'PlaylistId',
      recordEndTime: 'RecordEndTime',
      recordStartTime: 'RecordStartTime',
      streamName: 'StreamName',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      playlistId: 'string',
      recordEndTime: 'string',
      recordStartTime: 'string',
      streamName: 'string',
      video: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBodyLiveRecordVideoList extends $tea.Model {
  liveRecordVideo?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideo[];
  static names(): { [key: string]: string } {
    return {
      liveRecordVideo: 'LiveRecordVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVideo: { 'type': 'array', 'itemType': ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBodyMediaSnapshotSnapshotsSnapshot extends $tea.Model {
  index?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBodyMediaSnapshotSnapshots extends $tea.Model {
  snapshot?: ListSnapshotsResponseBodyMediaSnapshotSnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': ListSnapshotsResponseBodyMediaSnapshotSnapshotsSnapshot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBodyMediaSnapshot extends $tea.Model {
  creationTime?: string;
  jobId?: string;
  regular?: string;
  snapshots?: ListSnapshotsResponseBodyMediaSnapshotSnapshots;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      jobId: 'JobId',
      regular: 'Regular',
      snapshots: 'Snapshots',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      jobId: 'string',
      regular: 'string',
      snapshots: ListSnapshotsResponseBodyMediaSnapshotSnapshots,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTaskResponseBodyTranscodeTaskList extends $tea.Model {
  completeTime?: string;
  creationTime?: string;
  taskStatus?: string;
  transcodeTaskId?: string;
  transcodeTemplateGroupId?: string;
  trigger?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      taskStatus: 'TaskStatus',
      transcodeTaskId: 'TranscodeTaskId',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      trigger: 'Trigger',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      taskStatus: 'string',
      transcodeTaskId: 'string',
      transcodeTemplateGroupId: 'string',
      trigger: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupList extends $tea.Model {
  appId?: string;
  creationTime?: string;
  isDefault?: string;
  locked?: string;
  modifyTime?: string;
  name?: string;
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      locked: 'Locked',
      modifyTime: 'ModifyTime',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      isDefault: 'string',
      locked: 'string',
      modifyTime: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVodTemplateResponseBodyVodTemplateInfoList extends $tea.Model {
  appId?: string;
  creationTime?: string;
  isDefault?: string;
  modifyTime?: string;
  name?: string;
  templateConfig?: string;
  templateType?: string;
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      modifyTime: 'ModifyTime',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateType: 'TemplateType',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      isDefault: 'string',
      modifyTime: 'string',
      name: 'string',
      templateConfig: 'string',
      templateType: 'string',
      vodTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarkResponseBodyWatermarkInfos extends $tea.Model {
  appId?: string;
  creationTime?: string;
  fileUrl?: string;
  isDefault?: string;
  name?: string;
  type?: string;
  watermarkConfig?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      fileUrl: 'FileUrl',
      isDefault: 'IsDefault',
      name: 'Name',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      fileUrl: 'string',
      isDefault: 'string',
      name: 'string',
      type: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaResponseBodyRegisteredMediaList extends $tea.Model {
  fileURL?: string;
  mediaId?: string;
  newRegister?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      mediaId: 'MediaId',
      newRegister: 'NewRegister',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      mediaId: 'string',
      newRegister: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBodyProjectListProject extends $tea.Model {
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  modifiedTime?: string;
  projectId?: string;
  regionId?: string;
  status?: string;
  storageLocation?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      status: 'Status',
      storageLocation: 'StorageLocation',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modifiedTime: 'string',
      projectId: 'string',
      regionId: 'string',
      status: 'string',
      storageLocation: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBodyProjectList extends $tea.Model {
  project?: SearchEditingProjectResponseBodyProjectListProject[];
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: { 'type': 'array', 'itemType': SearchEditingProjectResponseBodyProjectListProject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAttachedMediaCategories extends $tea.Model {
  cateId?: number;
  cateName?: string;
  level?: number;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAttachedMedia extends $tea.Model {
  appId?: string;
  businessType?: string;
  categories?: SearchMediaResponseBodyMediaListAttachedMediaCategories[];
  creationTime?: string;
  description?: string;
  mediaId?: string;
  modificationTime?: string;
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      businessType: 'BusinessType',
      categories: 'Categories',
      creationTime: 'CreationTime',
      description: 'Description',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      businessType: 'string',
      categories: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaListAttachedMediaCategories },
      creationTime: 'string',
      description: 'string',
      mediaId: 'string',
      modificationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAudio extends $tea.Model {
  appId?: string;
  audioId?: string;
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  downloadSwitch?: string;
  duration?: number;
  mediaSource?: string;
  modificationTime?: string;
  preprocessStatus?: string;
  size?: number;
  snapshots?: string[];
  spriteSnapshots?: string[];
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  transcodeMode?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioId: 'AudioId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      downloadSwitch: 'DownloadSwitch',
      duration: 'Duration',
      mediaSource: 'MediaSource',
      modificationTime: 'ModificationTime',
      preprocessStatus: 'PreprocessStatus',
      size: 'Size',
      snapshots: 'Snapshots',
      spriteSnapshots: 'SpriteSnapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      transcodeMode: 'TranscodeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      downloadSwitch: 'string',
      duration: 'number',
      mediaSource: 'string',
      modificationTime: 'string',
      preprocessStatus: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      spriteSnapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      transcodeMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListImage extends $tea.Model {
  appId?: string;
  cateId?: number;
  cateName?: string;
  creationTime?: string;
  description?: string;
  imageId?: string;
  modificationTime?: string;
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      creationTime: 'CreationTime',
      description: 'Description',
      imageId: 'ImageId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      creationTime: 'string',
      description: 'string',
      imageId: 'string',
      modificationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListVideo extends $tea.Model {
  appId?: string;
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  downloadSwitch?: string;
  duration?: number;
  mediaSource?: string;
  modificationTime?: string;
  preprocessStatus?: string;
  size?: number;
  snapshots?: string[];
  spriteSnapshots?: string[];
  status?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  transcodeMode?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      downloadSwitch: 'DownloadSwitch',
      duration: 'Duration',
      mediaSource: 'MediaSource',
      modificationTime: 'ModificationTime',
      preprocessStatus: 'PreprocessStatus',
      size: 'Size',
      snapshots: 'Snapshots',
      spriteSnapshots: 'SpriteSnapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      transcodeMode: 'TranscodeMode',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      downloadSwitch: 'string',
      duration: 'number',
      mediaSource: 'string',
      modificationTime: 'string',
      preprocessStatus: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      spriteSnapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      transcodeMode: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaList extends $tea.Model {
  attachedMedia?: SearchMediaResponseBodyMediaListAttachedMedia;
  audio?: SearchMediaResponseBodyMediaListAudio;
  creationTime?: string;
  image?: SearchMediaResponseBodyMediaListImage;
  mediaId?: string;
  mediaType?: string;
  video?: SearchMediaResponseBodyMediaListVideo;
  static names(): { [key: string]: string } {
    return {
      attachedMedia: 'AttachedMedia',
      audio: 'Audio',
      creationTime: 'CreationTime',
      image: 'Image',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedMedia: SearchMediaResponseBodyMediaListAttachedMedia,
      audio: SearchMediaResponseBodyMediaListAudio,
      creationTime: 'string',
      image: SearchMediaResponseBodyMediaListImage,
      mediaId: 'string',
      mediaType: 'string',
      video: SearchMediaResponseBodyMediaListVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobResponseBodyAIJobListAIJob extends $tea.Model {
  jobId?: string;
  mediaId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobResponseBodyAIJobList extends $tea.Model {
  AIJob?: SubmitAIJobResponseBodyAIJobListAIJob[];
  static names(): { [key: string]: string } {
    return {
      AIJob: 'AIJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJob: { 'type': 'array', 'itemType': SubmitAIJobResponseBodyAIJobListAIJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobResponseBodyDynamicImageJob extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsResponseBodyPreprocessJobsPreprocessJob extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsResponseBodyPreprocessJobs extends $tea.Model {
  preprocessJob?: SubmitPreprocessJobsResponseBodyPreprocessJobsPreprocessJob[];
  static names(): { [key: string]: string } {
    return {
      preprocessJob: 'PreprocessJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preprocessJob: { 'type': 'array', 'itemType': SubmitPreprocessJobsResponseBodyPreprocessJobsPreprocessJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJob extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobsResponseBodyTranscodeJobsTranscodeJob extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobsResponseBodyTranscodeJobs extends $tea.Model {
  transcodeJob?: SubmitTranscodeJobsResponseBodyTranscodeJobsTranscodeJob[];
  static names(): { [key: string]: string } {
    return {
      transcodeJob: 'TranscodeJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeJob: { 'type': 'array', 'itemType': SubmitTranscodeJobsResponseBodyTranscodeJobsTranscodeJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosResponseBodyNonExistImageIds extends $tea.Model {
  imageId?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkResponseBodyWatermarkInfo extends $tea.Model {
  creationTime?: string;
  fileUrl?: string;
  isDefault?: string;
  name?: string;
  type?: string;
  watermarkConfig?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      fileUrl: 'FileUrl',
      isDefault: 'IsDefault',
      name: 'Name',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      fileUrl: 'string',
      isDefault: 'string',
      name: 'string',
      type: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMediaByURLResponseBodyUploadJobs extends $tea.Model {
  jobId?: string;
  sourceURL?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      sourceURL: 'SourceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      sourceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "vod.aliyuncs.com",
      'ap-southeast-2': "vod.aliyuncs.com",
      'ap-southeast-3': "vod.aliyuncs.com",
      'cn-beijing-finance-1': "vod.aliyuncs.com",
      'cn-beijing-finance-pop': "vod.aliyuncs.com",
      'cn-beijing-gov-1': "vod.aliyuncs.com",
      'cn-beijing-nu16-b01': "vod.aliyuncs.com",
      'cn-chengdu': "vod.aliyuncs.com",
      'cn-edge-1': "vod.aliyuncs.com",
      'cn-fujian': "vod.aliyuncs.com",
      'cn-haidian-cm12-c01': "vod.aliyuncs.com",
      'cn-hangzhou': "vod.aliyuncs.com",
      'cn-hangzhou-bj-b01': "vod.aliyuncs.com",
      'cn-hangzhou-finance': "vod.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "vod.aliyuncs.com",
      'cn-hangzhou-test-306': "vod.aliyuncs.com",
      'cn-hongkong': "vod.aliyuncs.com",
      'cn-hongkong-finance-pop': "vod.aliyuncs.com",
      'cn-huhehaote': "vod.aliyuncs.com",
      'cn-huhehaote-nebula-1': "vod.aliyuncs.com",
      'cn-qingdao': "vod.aliyuncs.com",
      'cn-qingdao-nebula': "vod.aliyuncs.com",
      'cn-shanghai-et15-b01': "vod.aliyuncs.com",
      'cn-shanghai-et2-b01': "vod.aliyuncs.com",
      'cn-shanghai-finance-1': "vod.aliyuncs.com",
      'cn-shanghai-inner': "vod.aliyuncs.com",
      'cn-shanghai-internal-test-1': "vod.aliyuncs.com",
      'cn-shenzhen-finance-1': "vod.aliyuncs.com",
      'cn-shenzhen-inner': "vod.aliyuncs.com",
      'cn-shenzhen-st4-d01': "vod.aliyuncs.com",
      'cn-shenzhen-su18-b01': "vod.aliyuncs.com",
      'cn-wuhan': "vod.aliyuncs.com",
      'cn-wulanchabu': "vod.aliyuncs.com",
      'cn-yushanfang': "vod.aliyuncs.com",
      'cn-zhangbei': "vod.aliyuncs.com",
      'cn-zhangbei-na61-b01': "vod.aliyuncs.com",
      'cn-zhangjiakou': "vod.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "vod.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "vod.aliyuncs.com",
      'eu-west-1': "vod.aliyuncs.com",
      'eu-west-1-oxs': "vod.aliyuncs.com",
      'me-east-1': "vod.aliyuncs.com",
      'rus-west-1-pop': "vod.aliyuncs.com",
      'us-east-1': "vod.aliyuncs.com",
      'us-west-1': "vod.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vod", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAITemplateWithOptions(request: AddAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddAITemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAITemplateResponse>(await this.callApi(params, req, runtime), new AddAITemplateResponse({}));
  }

  async addAITemplate(request: AddAITemplateRequest): Promise<AddAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAITemplateWithOptions(request, runtime);
  }

  async addCategoryWithOptions(request: AddCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateName)) {
      query["CateName"] = request.cateName;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddCategory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCategoryResponse>(await this.callApi(params, req, runtime), new AddCategoryResponse({}));
  }

  async addCategory(request: AddCategoryRequest): Promise<AddCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCategoryWithOptions(request, runtime);
  }

  async addEditingProjectWithOptions(request: AddEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<AddEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.division)) {
      query["Division"] = request.division;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.timeline)) {
      query["Timeline"] = request.timeline;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddEditingProjectResponse>(await this.callApi(params, req, runtime), new AddEditingProjectResponse({}));
  }

  async addEditingProject(request: AddEditingProjectRequest): Promise<AddEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEditingProjectWithOptions(request, runtime);
  }

  async addTranscodeTemplateGroupWithOptions(request: AddTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    if (!Util.isUnset(request.transcodeTemplateList)) {
      query["TranscodeTemplateList"] = request.transcodeTemplateList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new AddTranscodeTemplateGroupResponse({}));
  }

  async addTranscodeTemplateGroup(request: AddTranscodeTemplateGroupRequest): Promise<AddTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async addVodDomainWithOptions(request: AddVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddVodDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddVodDomainResponse>(await this.callApi(params, req, runtime), new AddVodDomainResponse({}));
  }

  async addVodDomain(request: AddVodDomainRequest): Promise<AddVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVodDomainWithOptions(request, runtime);
  }

  async addVodTemplateWithOptions(request: AddVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddVodTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddVodTemplateResponse>(await this.callApi(params, req, runtime), new AddVodTemplateResponse({}));
  }

  async addVodTemplate(request: AddVodTemplateRequest): Promise<AddVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVodTemplateWithOptions(request, runtime);
  }

  async addWatermarkWithOptions(request: AddWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<AddWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.watermarkConfig)) {
      query["WatermarkConfig"] = request.watermarkConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddWatermarkResponse>(await this.callApi(params, req, runtime), new AddWatermarkResponse({}));
  }

  async addWatermark(request: AddWatermarkRequest): Promise<AddWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addWatermarkWithOptions(request, runtime);
  }

  async attachAppPolicyToIdentityWithOptions(request: AttachAppPolicyToIdentityRequest, runtime: $Util.RuntimeOptions): Promise<AttachAppPolicyToIdentityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.identityName)) {
      query["IdentityName"] = request.identityName;
    }

    if (!Util.isUnset(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachAppPolicyToIdentity",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachAppPolicyToIdentityResponse>(await this.callApi(params, req, runtime), new AttachAppPolicyToIdentityResponse({}));
  }

  async attachAppPolicyToIdentity(request: AttachAppPolicyToIdentityRequest): Promise<AttachAppPolicyToIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachAppPolicyToIdentityWithOptions(request, runtime);
  }

  async batchSetVodDomainConfigsWithOptions(request: BatchSetVodDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetVodDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSetVodDomainConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSetVodDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchSetVodDomainConfigsResponse({}));
  }

  async batchSetVodDomainConfigs(request: BatchSetVodDomainConfigsRequest): Promise<BatchSetVodDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetVodDomainConfigsWithOptions(request, runtime);
  }

  async batchStartVodDomainWithOptions(request: BatchStartVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartVodDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchStartVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchStartVodDomainResponse>(await this.callApi(params, req, runtime), new BatchStartVodDomainResponse({}));
  }

  async batchStartVodDomain(request: BatchStartVodDomainRequest): Promise<BatchStartVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartVodDomainWithOptions(request, runtime);
  }

  async batchStopVodDomainWithOptions(request: BatchStopVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopVodDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchStopVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchStopVodDomainResponse>(await this.callApi(params, req, runtime), new BatchStopVodDomainResponse({}));
  }

  async batchStopVodDomain(request: BatchStopVodDomainRequest): Promise<BatchStopVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopVodDomainWithOptions(request, runtime);
  }

  async cancelUrlUploadJobsWithOptions(request: CancelUrlUploadJobsRequest, runtime: $Util.RuntimeOptions): Promise<CancelUrlUploadJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!Util.isUnset(request.uploadUrls)) {
      query["UploadUrls"] = request.uploadUrls;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelUrlUploadJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelUrlUploadJobsResponse>(await this.callApi(params, req, runtime), new CancelUrlUploadJobsResponse({}));
  }

  async cancelUrlUploadJobs(request: CancelUrlUploadJobsRequest): Promise<CancelUrlUploadJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelUrlUploadJobsWithOptions(request, runtime);
  }

  async createAppInfoWithOptions(request: CreateAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppInfoResponse>(await this.callApi(params, req, runtime), new CreateAppInfoResponse({}));
  }

  async createAppInfo(request: CreateAppInfoRequest): Promise<CreateAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppInfoWithOptions(request, runtime);
  }

  async createAuditWithOptions(request: CreateAuditRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditContent)) {
      query["AuditContent"] = request.auditContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAudit",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAuditResponse>(await this.callApi(params, req, runtime), new CreateAuditResponse({}));
  }

  async createAudit(request: CreateAuditRequest): Promise<CreateAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuditWithOptions(request, runtime);
  }

  async createUploadAttachedMediaWithOptions(request: CreateUploadAttachedMediaRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadAttachedMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.cateIds)) {
      query["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!Util.isUnset(request.mediaExt)) {
      query["MediaExt"] = request.mediaExt;
    }

    if (!Util.isUnset(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadAttachedMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadAttachedMediaResponse>(await this.callApi(params, req, runtime), new CreateUploadAttachedMediaResponse({}));
  }

  async createUploadAttachedMedia(request: CreateUploadAttachedMediaRequest): Promise<CreateUploadAttachedMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadAttachedMediaWithOptions(request, runtime);
  }

  async createUploadImageWithOptions(request: CreateUploadImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageExt)) {
      query["ImageExt"] = request.imageExt;
    }

    if (!Util.isUnset(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.originalFileName)) {
      query["OriginalFileName"] = request.originalFileName;
    }

    if (!Util.isUnset(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadImageResponse>(await this.callApi(params, req, runtime), new CreateUploadImageResponse({}));
  }

  async createUploadImage(request: CreateUploadImageRequest): Promise<CreateUploadImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadImageWithOptions(request, runtime);
  }

  async createUploadVideoWithOptions(request: CreateUploadVideoRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadVideoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!Util.isUnset(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadVideoResponse>(await this.callApi(params, req, runtime), new CreateUploadVideoResponse({}));
  }

  async createUploadVideo(request: CreateUploadVideoRequest): Promise<CreateUploadVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadVideoWithOptions(request, runtime);
  }

  async decryptKMSDataKeyWithOptions(request: DecryptKMSDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<DecryptKMSDataKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cipherText)) {
      query["CipherText"] = request.cipherText;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DecryptKMSDataKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DecryptKMSDataKeyResponse>(await this.callApi(params, req, runtime), new DecryptKMSDataKeyResponse({}));
  }

  async decryptKMSDataKey(request: DecryptKMSDataKeyRequest): Promise<DecryptKMSDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decryptKMSDataKeyWithOptions(request, runtime);
  }

  async deleteAIImageInfosWithOptions(request: DeleteAIImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAIImageInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.AIImageInfoIds)) {
      query["AIImageInfoIds"] = request.AIImageInfoIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAIImageInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAIImageInfosResponse>(await this.callApi(params, req, runtime), new DeleteAIImageInfosResponse({}));
  }

  async deleteAIImageInfos(request: DeleteAIImageInfosRequest): Promise<DeleteAIImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAIImageInfosWithOptions(request, runtime);
  }

  async deleteAITemplateWithOptions(request: DeleteAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAITemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAITemplateResponse>(await this.callApi(params, req, runtime), new DeleteAITemplateResponse({}));
  }

  async deleteAITemplate(request: DeleteAITemplateRequest): Promise<DeleteAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAITemplateWithOptions(request, runtime);
  }

  async deleteAppInfoWithOptions(request: DeleteAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppInfoResponse>(await this.callApi(params, req, runtime), new DeleteAppInfoResponse({}));
  }

  async deleteAppInfo(request: DeleteAppInfoRequest): Promise<DeleteAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppInfoWithOptions(request, runtime);
  }

  async deleteAttachedMediaWithOptions(request: DeleteAttachedMediaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAttachedMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAttachedMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAttachedMediaResponse>(await this.callApi(params, req, runtime), new DeleteAttachedMediaResponse({}));
  }

  async deleteAttachedMedia(request: DeleteAttachedMediaRequest): Promise<DeleteAttachedMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAttachedMediaWithOptions(request, runtime);
  }

  async deleteCategoryWithOptions(request: DeleteCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCategory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCategoryResponse>(await this.callApi(params, req, runtime), new DeleteCategoryResponse({}));
  }

  async deleteCategory(request: DeleteCategoryRequest): Promise<DeleteCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  async deleteDynamicImageWithOptions(request: DeleteDynamicImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDynamicImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicImageIds)) {
      query["DynamicImageIds"] = request.dynamicImageIds;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDynamicImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDynamicImageResponse>(await this.callApi(params, req, runtime), new DeleteDynamicImageResponse({}));
  }

  async deleteDynamicImage(request: DeleteDynamicImageRequest): Promise<DeleteDynamicImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDynamicImageWithOptions(request, runtime);
  }

  async deleteEditingProjectWithOptions(request: DeleteEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEditingProjectResponse>(await this.callApi(params, req, runtime), new DeleteEditingProjectResponse({}));
  }

  async deleteEditingProject(request: DeleteEditingProjectRequest): Promise<DeleteEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteImageType)) {
      query["DeleteImageType"] = request.deleteImageType;
    }

    if (!Util.isUnset(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!Util.isUnset(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.imageURLs)) {
      query["ImageURLs"] = request.imageURLs;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteMessageCallbackWithOptions(request: DeleteMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMessageCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMessageCallback",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMessageCallbackResponse>(await this.callApi(params, req, runtime), new DeleteMessageCallbackResponse({}));
  }

  async deleteMessageCallback(request: DeleteMessageCallbackRequest): Promise<DeleteMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMessageCallbackWithOptions(request, runtime);
  }

  async deleteMezzaninesWithOptions(request: DeleteMezzaninesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMezzaninesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMezzanines",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMezzaninesResponse>(await this.callApi(params, req, runtime), new DeleteMezzaninesResponse({}));
  }

  async deleteMezzanines(request: DeleteMezzaninesRequest): Promise<DeleteMezzaninesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMezzaninesWithOptions(request, runtime);
  }

  async deleteMultipartUploadWithOptions(request: DeleteMultipartUploadRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMultipartUploadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMultipartUpload",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMultipartUploadResponse>(await this.callApi(params, req, runtime), new DeleteMultipartUploadResponse({}));
  }

  async deleteMultipartUpload(request: DeleteMultipartUploadRequest): Promise<DeleteMultipartUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMultipartUploadWithOptions(request, runtime);
  }

  async deleteStreamWithOptions(request: DeleteStreamRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStream",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStreamResponse>(await this.callApi(params, req, runtime), new DeleteStreamResponse({}));
  }

  async deleteStream(request: DeleteStreamRequest): Promise<DeleteStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStreamWithOptions(request, runtime);
  }

  async deleteTranscodeTemplateGroupWithOptions(request: DeleteTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceDelGroup)) {
      query["ForceDelGroup"] = request.forceDelGroup;
    }

    if (!Util.isUnset(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    if (!Util.isUnset(request.transcodeTemplateIds)) {
      query["TranscodeTemplateIds"] = request.transcodeTemplateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new DeleteTranscodeTemplateGroupResponse({}));
  }

  async deleteTranscodeTemplateGroup(request: DeleteTranscodeTemplateGroupRequest): Promise<DeleteTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async deleteVideoWithOptions(request: DeleteVideoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVideoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVideoResponse>(await this.callApi(params, req, runtime), new DeleteVideoResponse({}));
  }

  async deleteVideo(request: DeleteVideoRequest): Promise<DeleteVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVideoWithOptions(request, runtime);
  }

  async deleteVodDomainWithOptions(request: DeleteVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVodDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVodDomainResponse>(await this.callApi(params, req, runtime), new DeleteVodDomainResponse({}));
  }

  async deleteVodDomain(request: DeleteVodDomainRequest): Promise<DeleteVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVodDomainWithOptions(request, runtime);
  }

  async deleteVodSpecificConfigWithOptions(request: DeleteVodSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVodSpecificConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVodSpecificConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVodSpecificConfigResponse>(await this.callApi(params, req, runtime), new DeleteVodSpecificConfigResponse({}));
  }

  async deleteVodSpecificConfig(request: DeleteVodSpecificConfigRequest): Promise<DeleteVodSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVodSpecificConfigWithOptions(request, runtime);
  }

  async deleteVodTemplateWithOptions(request: DeleteVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVodTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.vodTemplateId)) {
      query["VodTemplateId"] = request.vodTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVodTemplateResponse>(await this.callApi(params, req, runtime), new DeleteVodTemplateResponse({}));
  }

  async deleteVodTemplate(request: DeleteVodTemplateRequest): Promise<DeleteVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVodTemplateWithOptions(request, runtime);
  }

  async deleteWatermarkWithOptions(request: DeleteWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWatermarkResponse>(await this.callApi(params, req, runtime), new DeleteWatermarkResponse({}));
  }

  async deleteWatermark(request: DeleteWatermarkRequest): Promise<DeleteWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWatermarkWithOptions(request, runtime);
  }

  async describePlayTopVideosWithOptions(request: DescribePlayTopVideosRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayTopVideosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizDate)) {
      query["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayTopVideos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayTopVideosResponse>(await this.callApi(params, req, runtime), new DescribePlayTopVideosResponse({}));
  }

  async describePlayTopVideos(request: DescribePlayTopVideosRequest): Promise<DescribePlayTopVideosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayTopVideosWithOptions(request, runtime);
  }

  async describePlayUserAvgWithOptions(request: DescribePlayUserAvgRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayUserAvgResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayUserAvg",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayUserAvgResponse>(await this.callApi(params, req, runtime), new DescribePlayUserAvgResponse({}));
  }

  async describePlayUserAvg(request: DescribePlayUserAvgRequest): Promise<DescribePlayUserAvgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayUserAvgWithOptions(request, runtime);
  }

  async describePlayUserTotalWithOptions(request: DescribePlayUserTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayUserTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayUserTotal",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayUserTotalResponse>(await this.callApi(params, req, runtime), new DescribePlayUserTotalResponse({}));
  }

  async describePlayUserTotal(request: DescribePlayUserTotalRequest): Promise<DescribePlayUserTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayUserTotalWithOptions(request, runtime);
  }

  async describePlayVideoStatisWithOptions(request: DescribePlayVideoStatisRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayVideoStatisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayVideoStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayVideoStatisResponse>(await this.callApi(params, req, runtime), new DescribePlayVideoStatisResponse({}));
  }

  async describePlayVideoStatis(request: DescribePlayVideoStatisRequest): Promise<DescribePlayVideoStatisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayVideoStatisWithOptions(request, runtime);
  }

  async describeVodAIDataWithOptions(request: DescribeVodAIDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodAIDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.AIType)) {
      query["AIType"] = request.AIType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodAIData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodAIDataResponse>(await this.callApi(params, req, runtime), new DescribeVodAIDataResponse({}));
  }

  async describeVodAIData(request: DescribeVodAIDataRequest): Promise<DescribeVodAIDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodAIDataWithOptions(request, runtime);
  }

  async describeVodCertificateListWithOptions(request: DescribeVodCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodCertificateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodCertificateList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeVodCertificateListResponse({}));
  }

  async describeVodCertificateList(request: DescribeVodCertificateListRequest): Promise<DescribeVodCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodCertificateListWithOptions(request, runtime);
  }

  async describeVodDomainBpsDataWithOptions(request: DescribeVodDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodDomainBpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodDomainBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeVodDomainBpsDataResponse({}));
  }

  async describeVodDomainBpsData(request: DescribeVodDomainBpsDataRequest): Promise<DescribeVodDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainBpsDataWithOptions(request, runtime);
  }

  async describeVodDomainCertificateInfoWithOptions(request: DescribeVodDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodDomainCertificateInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new DescribeVodDomainCertificateInfoResponse({}));
  }

  async describeVodDomainCertificateInfo(request: DescribeVodDomainCertificateInfoRequest): Promise<DescribeVodDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeVodDomainConfigsWithOptions(request: DescribeVodDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodDomainConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodDomainConfigsResponse>(await this.callApi(params, req, runtime), new DescribeVodDomainConfigsResponse({}));
  }

  async describeVodDomainConfigs(request: DescribeVodDomainConfigsRequest): Promise<DescribeVodDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainConfigsWithOptions(request, runtime);
  }

  async describeVodDomainDetailWithOptions(request: DescribeVodDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodDomainDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeVodDomainDetailResponse({}));
  }

  async describeVodDomainDetail(request: DescribeVodDomainDetailRequest): Promise<DescribeVodDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainDetailWithOptions(request, runtime);
  }

  async describeVodDomainLogWithOptions(request: DescribeVodDomainLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodDomainLog",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodDomainLogResponse>(await this.callApi(params, req, runtime), new DescribeVodDomainLogResponse({}));
  }

  async describeVodDomainLog(request: DescribeVodDomainLogRequest): Promise<DescribeVodDomainLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainLogWithOptions(request, runtime);
  }

  async describeVodDomainTrafficDataWithOptions(request: DescribeVodDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodDomainTrafficData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeVodDomainTrafficDataResponse({}));
  }

  async describeVodDomainTrafficData(request: DescribeVodDomainTrafficDataRequest): Promise<DescribeVodDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainTrafficDataWithOptions(request, runtime);
  }

  async describeVodDomainUsageDataWithOptions(request: DescribeVodDomainUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainUsageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.area)) {
      query["Area"] = request.area;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.field)) {
      query["Field"] = request.field;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodDomainUsageData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodDomainUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeVodDomainUsageDataResponse({}));
  }

  async describeVodDomainUsageData(request: DescribeVodDomainUsageDataRequest): Promise<DescribeVodDomainUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainUsageDataWithOptions(request, runtime);
  }

  async describeVodRefreshQuotaWithOptions(request: DescribeVodRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodRefreshQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodRefreshQuota",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodRefreshQuotaResponse>(await this.callApi(params, req, runtime), new DescribeVodRefreshQuotaResponse({}));
  }

  async describeVodRefreshQuota(request: DescribeVodRefreshQuotaRequest): Promise<DescribeVodRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodRefreshQuotaWithOptions(request, runtime);
  }

  async describeVodRefreshTasksWithOptions(request: DescribeVodRefreshTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodRefreshTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodRefreshTasks",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodRefreshTasksResponse>(await this.callApi(params, req, runtime), new DescribeVodRefreshTasksResponse({}));
  }

  async describeVodRefreshTasks(request: DescribeVodRefreshTasksRequest): Promise<DescribeVodRefreshTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodRefreshTasksWithOptions(request, runtime);
  }

  async describeVodStorageDataWithOptions(request: DescribeVodStorageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodStorageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodStorageData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodStorageDataResponse>(await this.callApi(params, req, runtime), new DescribeVodStorageDataResponse({}));
  }

  async describeVodStorageData(request: DescribeVodStorageDataRequest): Promise<DescribeVodStorageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodStorageDataWithOptions(request, runtime);
  }

  async describeVodTranscodeDataWithOptions(request: DescribeVodTranscodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodTranscodeDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodTranscodeData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodTranscodeDataResponse>(await this.callApi(params, req, runtime), new DescribeVodTranscodeDataResponse({}));
  }

  async describeVodTranscodeData(request: DescribeVodTranscodeDataRequest): Promise<DescribeVodTranscodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodTranscodeDataWithOptions(request, runtime);
  }

  async describeVodUserDomainsWithOptions(request: DescribeVodUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodUserDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!Util.isUnset(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodUserDomains",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodUserDomainsResponse>(await this.callApi(params, req, runtime), new DescribeVodUserDomainsResponse({}));
  }

  async describeVodUserDomains(request: DescribeVodUserDomainsRequest): Promise<DescribeVodUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodUserDomainsWithOptions(request, runtime);
  }

  async describeVodVerifyContentWithOptions(request: DescribeVodVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodVerifyContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVodVerifyContent",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVodVerifyContentResponse>(await this.callApi(params, req, runtime), new DescribeVodVerifyContentResponse({}));
  }

  async describeVodVerifyContent(request: DescribeVodVerifyContentRequest): Promise<DescribeVodVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodVerifyContentWithOptions(request, runtime);
  }

  async detachAppPolicyFromIdentityWithOptions(request: DetachAppPolicyFromIdentityRequest, runtime: $Util.RuntimeOptions): Promise<DetachAppPolicyFromIdentityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.identityName)) {
      query["IdentityName"] = request.identityName;
    }

    if (!Util.isUnset(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachAppPolicyFromIdentity",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachAppPolicyFromIdentityResponse>(await this.callApi(params, req, runtime), new DetachAppPolicyFromIdentityResponse({}));
  }

  async detachAppPolicyFromIdentity(request: DetachAppPolicyFromIdentityRequest): Promise<DetachAppPolicyFromIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAppPolicyFromIdentityWithOptions(request, runtime);
  }

  async generateKMSDataKeyWithOptions(request: GenerateKMSDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateKMSDataKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateKMSDataKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateKMSDataKeyResponse>(await this.callApi(params, req, runtime), new GenerateKMSDataKeyResponse({}));
  }

  async generateKMSDataKey(request: GenerateKMSDataKeyRequest): Promise<GenerateKMSDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateKMSDataKeyWithOptions(request, runtime);
  }

  async getAIImageJobsWithOptions(request: GetAIImageJobsRequest, runtime: $Util.RuntimeOptions): Promise<GetAIImageJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAIImageJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAIImageJobsResponse>(await this.callApi(params, req, runtime), new GetAIImageJobsResponse({}));
  }

  async getAIImageJobs(request: GetAIImageJobsRequest): Promise<GetAIImageJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIImageJobsWithOptions(request, runtime);
  }

  async getAIMediaAuditJobWithOptions(request: GetAIMediaAuditJobRequest, runtime: $Util.RuntimeOptions): Promise<GetAIMediaAuditJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAIMediaAuditJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAIMediaAuditJobResponse>(await this.callApi(params, req, runtime), new GetAIMediaAuditJobResponse({}));
  }

  async getAIMediaAuditJob(request: GetAIMediaAuditJobRequest): Promise<GetAIMediaAuditJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIMediaAuditJobWithOptions(request, runtime);
  }

  async getAITemplateWithOptions(request: GetAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetAITemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAITemplateResponse>(await this.callApi(params, req, runtime), new GetAITemplateResponse({}));
  }

  async getAITemplate(request: GetAITemplateRequest): Promise<GetAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAITemplateWithOptions(request, runtime);
  }

  async getAIVideoTagResultWithOptions(request: GetAIVideoTagResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAIVideoTagResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAIVideoTagResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAIVideoTagResultResponse>(await this.callApi(params, req, runtime), new GetAIVideoTagResultResponse({}));
  }

  async getAIVideoTagResult(request: GetAIVideoTagResultRequest): Promise<GetAIVideoTagResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIVideoTagResultWithOptions(request, runtime);
  }

  async getAppInfosWithOptions(request: GetAppInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetAppInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppInfosResponse>(await this.callApi(params, req, runtime), new GetAppInfosResponse({}));
  }

  async getAppInfos(request: GetAppInfosRequest): Promise<GetAppInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppInfosWithOptions(request, runtime);
  }

  async getAttachedMediaInfoWithOptions(request: GetAttachedMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAttachedMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAttachedMediaInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAttachedMediaInfoResponse>(await this.callApi(params, req, runtime), new GetAttachedMediaInfoResponse({}));
  }

  async getAttachedMediaInfo(request: GetAttachedMediaInfoRequest): Promise<GetAttachedMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAttachedMediaInfoWithOptions(request, runtime);
  }

  async getAuditHistoryWithOptions(request: GetAuditHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetAuditHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuditHistory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuditHistoryResponse>(await this.callApi(params, req, runtime), new GetAuditHistoryResponse({}));
  }

  async getAuditHistory(request: GetAuditHistoryRequest): Promise<GetAuditHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditHistoryWithOptions(request, runtime);
  }

  async getCategoriesWithOptions(request: GetCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<GetCategoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCategories",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCategoriesResponse>(await this.callApi(params, req, runtime), new GetCategoriesResponse({}));
  }

  async getCategories(request: GetCategoriesRequest): Promise<GetCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCategoriesWithOptions(request, runtime);
  }

  async getDefaultAITemplateWithOptions(request: GetDefaultAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetDefaultAITemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDefaultAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultAITemplateResponse>(await this.callApi(params, req, runtime), new GetDefaultAITemplateResponse({}));
  }

  async getDefaultAITemplate(request: GetDefaultAITemplateRequest): Promise<GetDefaultAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultAITemplateWithOptions(request, runtime);
  }

  async getEditingProjectWithOptions(request: GetEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEditingProjectResponse>(await this.callApi(params, req, runtime), new GetEditingProjectResponse({}));
  }

  async getEditingProject(request: GetEditingProjectRequest): Promise<GetEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectWithOptions(request, runtime);
  }

  async getEditingProjectMaterialsWithOptions(request: GetEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.materialType)) {
      query["MaterialType"] = request.materialType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEditingProjectMaterials",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new GetEditingProjectMaterialsResponse({}));
  }

  async getEditingProjectMaterials(request: GetEditingProjectMaterialsRequest): Promise<GetEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectMaterialsWithOptions(request, runtime);
  }

  async getImageInfoWithOptions(request: GetImageInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetImageInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImageInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageInfoResponse>(await this.callApi(params, req, runtime), new GetImageInfoResponse({}));
  }

  async getImageInfo(request: GetImageInfoRequest): Promise<GetImageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageInfoWithOptions(request, runtime);
  }

  async getImageInfosWithOptions(request: GetImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetImageInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!Util.isUnset(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImageInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageInfosResponse>(await this.callApi(params, req, runtime), new GetImageInfosResponse({}));
  }

  async getImageInfos(request: GetImageInfosRequest): Promise<GetImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageInfosWithOptions(request, runtime);
  }

  async getMediaAuditAudioResultDetailWithOptions(request: GetMediaAuditAudioResultDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditAudioResultDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaAuditAudioResultDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaAuditAudioResultDetailResponse>(await this.callApi(params, req, runtime), new GetMediaAuditAudioResultDetailResponse({}));
  }

  async getMediaAuditAudioResultDetail(request: GetMediaAuditAudioResultDetailRequest): Promise<GetMediaAuditAudioResultDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditAudioResultDetailWithOptions(request, runtime);
  }

  async getMediaAuditResultWithOptions(request: GetMediaAuditResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaAuditResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaAuditResultResponse>(await this.callApi(params, req, runtime), new GetMediaAuditResultResponse({}));
  }

  async getMediaAuditResult(request: GetMediaAuditResultRequest): Promise<GetMediaAuditResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditResultWithOptions(request, runtime);
  }

  async getMediaAuditResultDetailWithOptions(request: GetMediaAuditResultDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditResultDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaAuditResultDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaAuditResultDetailResponse>(await this.callApi(params, req, runtime), new GetMediaAuditResultDetailResponse({}));
  }

  async getMediaAuditResultDetail(request: GetMediaAuditResultDetailRequest): Promise<GetMediaAuditResultDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditResultDetailWithOptions(request, runtime);
  }

  async getMediaAuditResultTimelineWithOptions(request: GetMediaAuditResultTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditResultTimelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaAuditResultTimeline",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaAuditResultTimelineResponse>(await this.callApi(params, req, runtime), new GetMediaAuditResultTimelineResponse({}));
  }

  async getMediaAuditResultTimeline(request: GetMediaAuditResultTimelineRequest): Promise<GetMediaAuditResultTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditResultTimelineWithOptions(request, runtime);
  }

  async getMediaDNAResultWithOptions(request: GetMediaDNAResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaDNAResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaDNAResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaDNAResultResponse>(await this.callApi(params, req, runtime), new GetMediaDNAResultResponse({}));
  }

  async getMediaDNAResult(request: GetMediaDNAResultRequest): Promise<GetMediaDNAResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaDNAResultWithOptions(request, runtime);
  }

  async getMediaRefreshJobsWithOptions(request: GetMediaRefreshJobsRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaRefreshJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaRefreshJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaRefreshJobsResponse>(await this.callApi(params, req, runtime), new GetMediaRefreshJobsResponse({}));
  }

  async getMediaRefreshJobs(request: GetMediaRefreshJobsRequest): Promise<GetMediaRefreshJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaRefreshJobsWithOptions(request, runtime);
  }

  async getMessageCallbackWithOptions(request: GetMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<GetMessageCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMessageCallback",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMessageCallbackResponse>(await this.callApi(params, req, runtime), new GetMessageCallbackResponse({}));
  }

  async getMessageCallback(request: GetMessageCallbackRequest): Promise<GetMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMessageCallbackWithOptions(request, runtime);
  }

  async getMezzanineInfoWithOptions(request: GetMezzanineInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMezzanineInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additionType)) {
      query["AdditionType"] = request.additionType;
    }

    if (!Util.isUnset(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMezzanineInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMezzanineInfoResponse>(await this.callApi(params, req, runtime), new GetMezzanineInfoResponse({}));
  }

  async getMezzanineInfo(request: GetMezzanineInfoRequest): Promise<GetMezzanineInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMezzanineInfoWithOptions(request, runtime);
  }

  async getPlayInfoWithOptions(request: GetPlayInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetPlayInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additionType)) {
      query["AdditionType"] = request.additionType;
    }

    if (!Util.isUnset(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!Util.isUnset(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!Util.isUnset(request.playConfig)) {
      query["PlayConfig"] = request.playConfig;
    }

    if (!Util.isUnset(request.reAuthInfo)) {
      query["ReAuthInfo"] = request.reAuthInfo;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPlayInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPlayInfoResponse>(await this.callApi(params, req, runtime), new GetPlayInfoResponse({}));
  }

  async getPlayInfo(request: GetPlayInfoRequest): Promise<GetPlayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPlayInfoWithOptions(request, runtime);
  }

  async getTranscodeSummaryWithOptions(request: GetTranscodeSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetTranscodeSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTranscodeSummary",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTranscodeSummaryResponse>(await this.callApi(params, req, runtime), new GetTranscodeSummaryResponse({}));
  }

  async getTranscodeSummary(request: GetTranscodeSummaryRequest): Promise<GetTranscodeSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranscodeSummaryWithOptions(request, runtime);
  }

  async getTranscodeTaskWithOptions(request: GetTranscodeTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTranscodeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.transcodeTaskId)) {
      query["TranscodeTaskId"] = request.transcodeTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTranscodeTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTranscodeTaskResponse>(await this.callApi(params, req, runtime), new GetTranscodeTaskResponse({}));
  }

  async getTranscodeTask(request: GetTranscodeTaskRequest): Promise<GetTranscodeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranscodeTaskWithOptions(request, runtime);
  }

  async getTranscodeTemplateGroupWithOptions(request: GetTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new GetTranscodeTemplateGroupResponse({}));
  }

  async getTranscodeTemplateGroup(request: GetTranscodeTemplateGroupRequest): Promise<GetTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async getURLUploadInfosWithOptions(request: GetURLUploadInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetURLUploadInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!Util.isUnset(request.uploadURLs)) {
      query["UploadURLs"] = request.uploadURLs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetURLUploadInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetURLUploadInfosResponse>(await this.callApi(params, req, runtime), new GetURLUploadInfosResponse({}));
  }

  async getURLUploadInfos(request: GetURLUploadInfosRequest): Promise<GetURLUploadInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getURLUploadInfosWithOptions(request, runtime);
  }

  async getUploadDetailsWithOptions(request: GetUploadDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadDetails",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadDetailsResponse>(await this.callApi(params, req, runtime), new GetUploadDetailsResponse({}));
  }

  async getUploadDetails(request: GetUploadDetailsRequest): Promise<GetUploadDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadDetailsWithOptions(request, runtime);
  }

  async getVideoInfoWithOptions(request: GetVideoInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoInfoResponse>(await this.callApi(params, req, runtime), new GetVideoInfoResponse({}));
  }

  async getVideoInfo(request: GetVideoInfoRequest): Promise<GetVideoInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoInfoWithOptions(request, runtime);
  }

  async getVideoInfosWithOptions(request: GetVideoInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoInfosResponse>(await this.callApi(params, req, runtime), new GetVideoInfosResponse({}));
  }

  async getVideoInfos(request: GetVideoInfosRequest): Promise<GetVideoInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoInfosWithOptions(request, runtime);
  }

  async getVideoListWithOptions(request: GetVideoListRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoListResponse>(await this.callApi(params, req, runtime), new GetVideoListResponse({}));
  }

  async getVideoList(request: GetVideoListRequest): Promise<GetVideoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoListWithOptions(request, runtime);
  }

  async getVideoPlayAuthWithOptions(request: GetVideoPlayAuthRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoPlayAuthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.authInfoTimeout)) {
      query["AuthInfoTimeout"] = request.authInfoTimeout;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoPlayAuth",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoPlayAuthResponse>(await this.callApi(params, req, runtime), new GetVideoPlayAuthResponse({}));
  }

  async getVideoPlayAuth(request: GetVideoPlayAuthRequest): Promise<GetVideoPlayAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoPlayAuthWithOptions(request, runtime);
  }

  async getVodTemplateWithOptions(request: GetVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetVodTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.vodTemplateId)) {
      query["VodTemplateId"] = request.vodTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVodTemplateResponse>(await this.callApi(params, req, runtime), new GetVodTemplateResponse({}));
  }

  async getVodTemplate(request: GetVodTemplateRequest): Promise<GetVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVodTemplateWithOptions(request, runtime);
  }

  async getWatermarkWithOptions(request: GetWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<GetWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWatermarkResponse>(await this.callApi(params, req, runtime), new GetWatermarkResponse({}));
  }

  async getWatermark(request: GetWatermarkRequest): Promise<GetWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWatermarkWithOptions(request, runtime);
  }

  async listAIImageInfoWithOptions(request: ListAIImageInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListAIImageInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAIImageInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAIImageInfoResponse>(await this.callApi(params, req, runtime), new ListAIImageInfoResponse({}));
  }

  async listAIImageInfo(request: ListAIImageInfoRequest): Promise<ListAIImageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAIImageInfoWithOptions(request, runtime);
  }

  async listAIJobWithOptions(request: ListAIJobRequest, runtime: $Util.RuntimeOptions): Promise<ListAIJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAIJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAIJobResponse>(await this.callApi(params, req, runtime), new ListAIJobResponse({}));
  }

  async listAIJob(request: ListAIJobRequest): Promise<ListAIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAIJobWithOptions(request, runtime);
  }

  async listAITemplateWithOptions(request: ListAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListAITemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAITemplateResponse>(await this.callApi(params, req, runtime), new ListAITemplateResponse({}));
  }

  async listAITemplate(request: ListAITemplateRequest): Promise<ListAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAITemplateWithOptions(request, runtime);
  }

  async listAppInfoWithOptions(request: ListAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListAppInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppInfoResponse>(await this.callApi(params, req, runtime), new ListAppInfoResponse({}));
  }

  async listAppInfo(request: ListAppInfoRequest): Promise<ListAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInfoWithOptions(request, runtime);
  }

  async listAppPoliciesForIdentityWithOptions(request: ListAppPoliciesForIdentityRequest, runtime: $Util.RuntimeOptions): Promise<ListAppPoliciesForIdentityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.identityName)) {
      query["IdentityName"] = request.identityName;
    }

    if (!Util.isUnset(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppPoliciesForIdentity",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppPoliciesForIdentityResponse>(await this.callApi(params, req, runtime), new ListAppPoliciesForIdentityResponse({}));
  }

  async listAppPoliciesForIdentity(request: ListAppPoliciesForIdentityRequest): Promise<ListAppPoliciesForIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppPoliciesForIdentityWithOptions(request, runtime);
  }

  async listAuditSecurityIpWithOptions(request: ListAuditSecurityIpRequest, runtime: $Util.RuntimeOptions): Promise<ListAuditSecurityIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuditSecurityIp",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuditSecurityIpResponse>(await this.callApi(params, req, runtime), new ListAuditSecurityIpResponse({}));
  }

  async listAuditSecurityIp(request: ListAuditSecurityIpRequest): Promise<ListAuditSecurityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuditSecurityIpWithOptions(request, runtime);
  }

  async listDynamicImageWithOptions(request: ListDynamicImageRequest, runtime: $Util.RuntimeOptions): Promise<ListDynamicImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDynamicImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDynamicImageResponse>(await this.callApi(params, req, runtime), new ListDynamicImageResponse({}));
  }

  async listDynamicImage(request: ListDynamicImageRequest): Promise<ListDynamicImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDynamicImageWithOptions(request, runtime);
  }

  async listLiveRecordVideoWithOptions(request: ListLiveRecordVideoRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRecordVideoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveRecordVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveRecordVideoResponse>(await this.callApi(params, req, runtime), new ListLiveRecordVideoResponse({}));
  }

  async listLiveRecordVideo(request: ListLiveRecordVideoRequest): Promise<ListLiveRecordVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRecordVideoWithOptions(request, runtime);
  }

  async listSnapshotsWithOptions(request: ListSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSnapshots",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSnapshotsResponse>(await this.callApi(params, req, runtime), new ListSnapshotsResponse({}));
  }

  async listSnapshots(request: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotsWithOptions(request, runtime);
  }

  async listTranscodeTaskWithOptions(request: ListTranscodeTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListTranscodeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTranscodeTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTranscodeTaskResponse>(await this.callApi(params, req, runtime), new ListTranscodeTaskResponse({}));
  }

  async listTranscodeTask(request: ListTranscodeTaskRequest): Promise<ListTranscodeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTranscodeTaskWithOptions(request, runtime);
  }

  async listTranscodeTemplateGroupWithOptions(request: ListTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new ListTranscodeTemplateGroupResponse({}));
  }

  async listTranscodeTemplateGroup(request: ListTranscodeTemplateGroupRequest): Promise<ListTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async listVodTemplateWithOptions(request: ListVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListVodTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVodTemplateResponse>(await this.callApi(params, req, runtime), new ListVodTemplateResponse({}));
  }

  async listVodTemplate(request: ListVodTemplateRequest): Promise<ListVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVodTemplateWithOptions(request, runtime);
  }

  async listWatermarkWithOptions(request: ListWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<ListWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWatermarkResponse>(await this.callApi(params, req, runtime), new ListWatermarkResponse({}));
  }

  async listWatermark(request: ListWatermarkRequest): Promise<ListWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWatermarkWithOptions(request, runtime);
  }

  async moveAppResourceWithOptions(request: MoveAppResourceRequest, runtime: $Util.RuntimeOptions): Promise<MoveAppResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.targetAppId)) {
      query["TargetAppId"] = request.targetAppId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveAppResource",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveAppResourceResponse>(await this.callApi(params, req, runtime), new MoveAppResourceResponse({}));
  }

  async moveAppResource(request: MoveAppResourceRequest): Promise<MoveAppResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveAppResourceWithOptions(request, runtime);
  }

  async preloadVodObjectCachesWithOptions(request: PreloadVodObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<PreloadVodObjectCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreloadVodObjectCaches",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreloadVodObjectCachesResponse>(await this.callApi(params, req, runtime), new PreloadVodObjectCachesResponse({}));
  }

  async preloadVodObjectCaches(request: PreloadVodObjectCachesRequest): Promise<PreloadVodObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadVodObjectCachesWithOptions(request, runtime);
  }

  async produceEditingProjectVideoWithOptions(request: ProduceEditingProjectVideoRequest, runtime: $Util.RuntimeOptions): Promise<ProduceEditingProjectVideoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.mediaMetadata)) {
      query["MediaMetadata"] = request.mediaMetadata;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.produceConfig)) {
      query["ProduceConfig"] = request.produceConfig;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.timeline)) {
      query["Timeline"] = request.timeline;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ProduceEditingProjectVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProduceEditingProjectVideoResponse>(await this.callApi(params, req, runtime), new ProduceEditingProjectVideoResponse({}));
  }

  async produceEditingProjectVideo(request: ProduceEditingProjectVideoRequest): Promise<ProduceEditingProjectVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.produceEditingProjectVideoWithOptions(request, runtime);
  }

  async refreshMediaPlayUrlsWithOptions(request: RefreshMediaPlayUrlsRequest, runtime: $Util.RuntimeOptions): Promise<RefreshMediaPlayUrlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.definitions)) {
      query["Definitions"] = request.definitions;
    }

    if (!Util.isUnset(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!Util.isUnset(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.sliceCount)) {
      query["SliceCount"] = request.sliceCount;
    }

    if (!Util.isUnset(request.sliceFlag)) {
      query["SliceFlag"] = request.sliceFlag;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshMediaPlayUrls",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshMediaPlayUrlsResponse>(await this.callApi(params, req, runtime), new RefreshMediaPlayUrlsResponse({}));
  }

  async refreshMediaPlayUrls(request: RefreshMediaPlayUrlsRequest): Promise<RefreshMediaPlayUrlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshMediaPlayUrlsWithOptions(request, runtime);
  }

  async refreshUploadVideoWithOptions(request: RefreshUploadVideoRequest, runtime: $Util.RuntimeOptions): Promise<RefreshUploadVideoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshUploadVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshUploadVideoResponse>(await this.callApi(params, req, runtime), new RefreshUploadVideoResponse({}));
  }

  async refreshUploadVideo(request: RefreshUploadVideoRequest): Promise<RefreshUploadVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshUploadVideoWithOptions(request, runtime);
  }

  async refreshVodObjectCachesWithOptions(request: RefreshVodObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshVodObjectCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshVodObjectCaches",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshVodObjectCachesResponse>(await this.callApi(params, req, runtime), new RefreshVodObjectCachesResponse({}));
  }

  async refreshVodObjectCaches(request: RefreshVodObjectCachesRequest): Promise<RefreshVodObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshVodObjectCachesWithOptions(request, runtime);
  }

  async registerMediaWithOptions(request: RegisterMediaRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.registerMetadatas)) {
      query["RegisterMetadatas"] = request.registerMetadatas;
    }

    if (!Util.isUnset(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterMediaResponse>(await this.callApi(params, req, runtime), new RegisterMediaResponse({}));
  }

  async registerMedia(request: RegisterMediaRequest): Promise<RegisterMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerMediaWithOptions(request, runtime);
  }

  async searchEditingProjectWithOptions(request: SearchEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchEditingProjectResponse>(await this.callApi(params, req, runtime), new SearchEditingProjectResponse({}));
  }

  async searchEditingProject(request: SearchEditingProjectRequest): Promise<SearchEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEditingProjectWithOptions(request, runtime);
  }

  async searchMediaWithOptions(request: SearchMediaRequest, runtime: $Util.RuntimeOptions): Promise<SearchMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.match)) {
      query["Match"] = request.match;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scrollToken)) {
      query["ScrollToken"] = request.scrollToken;
    }

    if (!Util.isUnset(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchMediaResponse>(await this.callApi(params, req, runtime), new SearchMediaResponse({}));
  }

  async searchMedia(request: SearchMediaRequest): Promise<SearchMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMediaWithOptions(request, runtime);
  }

  async setAuditSecurityIpWithOptions(request: SetAuditSecurityIpRequest, runtime: $Util.RuntimeOptions): Promise<SetAuditSecurityIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ips)) {
      query["Ips"] = request.ips;
    }

    if (!Util.isUnset(request.operateMode)) {
      query["OperateMode"] = request.operateMode;
    }

    if (!Util.isUnset(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAuditSecurityIp",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAuditSecurityIpResponse>(await this.callApi(params, req, runtime), new SetAuditSecurityIpResponse({}));
  }

  async setAuditSecurityIp(request: SetAuditSecurityIpRequest): Promise<SetAuditSecurityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAuditSecurityIpWithOptions(request, runtime);
  }

  async setCrossdomainContentWithOptions(request: SetCrossdomainContentRequest, runtime: $Util.RuntimeOptions): Promise<SetCrossdomainContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!Util.isUnset(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCrossdomainContent",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCrossdomainContentResponse>(await this.callApi(params, req, runtime), new SetCrossdomainContentResponse({}));
  }

  async setCrossdomainContent(request: SetCrossdomainContentRequest): Promise<SetCrossdomainContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCrossdomainContentWithOptions(request, runtime);
  }

  async setDefaultAITemplateWithOptions(request: SetDefaultAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultAITemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultAITemplateResponse>(await this.callApi(params, req, runtime), new SetDefaultAITemplateResponse({}));
  }

  async setDefaultAITemplate(request: SetDefaultAITemplateRequest): Promise<SetDefaultAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultAITemplateWithOptions(request, runtime);
  }

  async setDefaultTranscodeTemplateGroupWithOptions(request: SetDefaultTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new SetDefaultTranscodeTemplateGroupResponse({}));
  }

  async setDefaultTranscodeTemplateGroup(request: SetDefaultTranscodeTemplateGroupRequest): Promise<SetDefaultTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async setDefaultWatermarkWithOptions(request: SetDefaultWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultWatermarkResponse>(await this.callApi(params, req, runtime), new SetDefaultWatermarkResponse({}));
  }

  async setDefaultWatermark(request: SetDefaultWatermarkRequest): Promise<SetDefaultWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultWatermarkWithOptions(request, runtime);
  }

  async setEditingProjectMaterialsWithOptions(request: SetEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<SetEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.materialIds)) {
      query["MaterialIds"] = request.materialIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetEditingProjectMaterials",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new SetEditingProjectMaterialsResponse({}));
  }

  async setEditingProjectMaterials(request: SetEditingProjectMaterialsRequest): Promise<SetEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEditingProjectMaterialsWithOptions(request, runtime);
  }

  async setMessageCallbackWithOptions(request: SetMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SetMessageCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!Util.isUnset(request.authSwitch)) {
      query["AuthSwitch"] = request.authSwitch;
    }

    if (!Util.isUnset(request.callbackType)) {
      query["CallbackType"] = request.callbackType;
    }

    if (!Util.isUnset(request.callbackURL)) {
      query["CallbackURL"] = request.callbackURL;
    }

    if (!Util.isUnset(request.eventTypeList)) {
      query["EventTypeList"] = request.eventTypeList;
    }

    if (!Util.isUnset(request.mnsEndpoint)) {
      query["MnsEndpoint"] = request.mnsEndpoint;
    }

    if (!Util.isUnset(request.mnsQueueName)) {
      query["MnsQueueName"] = request.mnsQueueName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetMessageCallback",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetMessageCallbackResponse>(await this.callApi(params, req, runtime), new SetMessageCallbackResponse({}));
  }

  async setMessageCallback(request: SetMessageCallbackRequest): Promise<SetMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMessageCallbackWithOptions(request, runtime);
  }

  async setVodDomainCertificateWithOptions(request: SetVodDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetVodDomainCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!Util.isUnset(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!Util.isUnset(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetVodDomainCertificate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetVodDomainCertificateResponse>(await this.callApi(params, req, runtime), new SetVodDomainCertificateResponse({}));
  }

  async setVodDomainCertificate(request: SetVodDomainCertificateRequest): Promise<SetVodDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVodDomainCertificateWithOptions(request, runtime);
  }

  async submitAIImageAuditJobWithOptions(request: SubmitAIImageAuditJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIImageAuditJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaAuditConfiguration)) {
      query["MediaAuditConfiguration"] = request.mediaAuditConfiguration;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAIImageAuditJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAIImageAuditJobResponse>(await this.callApi(params, req, runtime), new SubmitAIImageAuditJobResponse({}));
  }

  async submitAIImageAuditJob(request: SubmitAIImageAuditJobRequest): Promise<SubmitAIImageAuditJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIImageAuditJobWithOptions(request, runtime);
  }

  async submitAIImageJobWithOptions(request: SubmitAIImageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIImageJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.AIPipelineId)) {
      query["AIPipelineId"] = request.AIPipelineId;
    }

    if (!Util.isUnset(request.AITemplateId)) {
      query["AITemplateId"] = request.AITemplateId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAIImageJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAIImageJobResponse>(await this.callApi(params, req, runtime), new SubmitAIImageJobResponse({}));
  }

  async submitAIImageJob(request: SubmitAIImageJobRequest): Promise<SubmitAIImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIImageJobWithOptions(request, runtime);
  }

  async submitAIJobWithOptions(request: SubmitAIJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAIJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAIJobResponse>(await this.callApi(params, req, runtime), new SubmitAIJobResponse({}));
  }

  async submitAIJob(request: SubmitAIJobRequest): Promise<SubmitAIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIJobWithOptions(request, runtime);
  }

  async submitAIMediaAuditJobWithOptions(request: SubmitAIMediaAuditJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIMediaAuditJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaAuditConfiguration)) {
      query["MediaAuditConfiguration"] = request.mediaAuditConfiguration;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAIMediaAuditJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAIMediaAuditJobResponse>(await this.callApi(params, req, runtime), new SubmitAIMediaAuditJobResponse({}));
  }

  async submitAIMediaAuditJob(request: SubmitAIMediaAuditJobRequest): Promise<SubmitAIMediaAuditJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIMediaAuditJobWithOptions(request, runtime);
  }

  async submitDynamicImageJobWithOptions(request: SubmitDynamicImageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDynamicImageJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicImageTemplateId)) {
      query["DynamicImageTemplateId"] = request.dynamicImageTemplateId;
    }

    if (!Util.isUnset(request.overrideParams)) {
      query["OverrideParams"] = request.overrideParams;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDynamicImageJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDynamicImageJobResponse>(await this.callApi(params, req, runtime), new SubmitDynamicImageJobResponse({}));
  }

  async submitDynamicImageJob(request: SubmitDynamicImageJobRequest): Promise<SubmitDynamicImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDynamicImageJobWithOptions(request, runtime);
  }

  async submitMediaDNADeleteJobWithOptions(request: SubmitMediaDNADeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaDNADeleteJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitMediaDNADeleteJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitMediaDNADeleteJobResponse>(await this.callApi(params, req, runtime), new SubmitMediaDNADeleteJobResponse({}));
  }

  async submitMediaDNADeleteJob(request: SubmitMediaDNADeleteJobRequest): Promise<SubmitMediaDNADeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaDNADeleteJobWithOptions(request, runtime);
  }

  async submitPreprocessJobsWithOptions(request: SubmitPreprocessJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPreprocessJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.preprocessType)) {
      query["PreprocessType"] = request.preprocessType;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitPreprocessJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitPreprocessJobsResponse>(await this.callApi(params, req, runtime), new SubmitPreprocessJobsResponse({}));
  }

  async submitPreprocessJobs(request: SubmitPreprocessJobsRequest): Promise<SubmitPreprocessJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPreprocessJobsWithOptions(request, runtime);
  }

  async submitSnapshotJobWithOptions(request: SubmitSnapshotJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSnapshotJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.height)) {
      query["Height"] = request.height;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.snapshotTemplateId)) {
      query["SnapshotTemplateId"] = request.snapshotTemplateId;
    }

    if (!Util.isUnset(request.specifiedOffsetTime)) {
      query["SpecifiedOffsetTime"] = request.specifiedOffsetTime;
    }

    if (!Util.isUnset(request.spriteSnapshotConfig)) {
      query["SpriteSnapshotConfig"] = request.spriteSnapshotConfig;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    if (!Util.isUnset(request.width)) {
      query["Width"] = request.width;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSnapshotJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSnapshotJobResponse>(await this.callApi(params, req, runtime), new SubmitSnapshotJobResponse({}));
  }

  async submitSnapshotJob(request: SubmitSnapshotJobRequest): Promise<SubmitSnapshotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  async submitTranscodeJobsWithOptions(request: SubmitTranscodeJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTranscodeJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.encryptConfig)) {
      query["EncryptConfig"] = request.encryptConfig;
    }

    if (!Util.isUnset(request.overrideParams)) {
      query["OverrideParams"] = request.overrideParams;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTranscodeJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTranscodeJobsResponse>(await this.callApi(params, req, runtime), new SubmitTranscodeJobsResponse({}));
  }

  async submitTranscodeJobs(request: SubmitTranscodeJobsRequest): Promise<SubmitTranscodeJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTranscodeJobsWithOptions(request, runtime);
  }

  async submitWorkflowJobWithOptions(request: SubmitWorkflowJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitWorkflowJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitWorkflowJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitWorkflowJobResponse>(await this.callApi(params, req, runtime), new SubmitWorkflowJobResponse({}));
  }

  async submitWorkflowJob(request: SubmitWorkflowJobRequest): Promise<SubmitWorkflowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitWorkflowJobWithOptions(request, runtime);
  }

  async updateAITemplateWithOptions(request: UpdateAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAITemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAITemplateResponse>(await this.callApi(params, req, runtime), new UpdateAITemplateResponse({}));
  }

  async updateAITemplate(request: UpdateAITemplateRequest): Promise<UpdateAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAITemplateWithOptions(request, runtime);
  }

  async updateAppInfoWithOptions(request: UpdateAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppInfoResponse> {
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppInfoResponse>(await this.callApi(params, req, runtime), new UpdateAppInfoResponse({}));
  }

  async updateAppInfo(request: UpdateAppInfoRequest): Promise<UpdateAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppInfoWithOptions(request, runtime);
  }

  async updateAttachedMediaInfosWithOptions(request: UpdateAttachedMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAttachedMediaInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.updateContent)) {
      query["UpdateContent"] = request.updateContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAttachedMediaInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAttachedMediaInfosResponse>(await this.callApi(params, req, runtime), new UpdateAttachedMediaInfosResponse({}));
  }

  async updateAttachedMediaInfos(request: UpdateAttachedMediaInfosRequest): Promise<UpdateAttachedMediaInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAttachedMediaInfosWithOptions(request, runtime);
  }

  async updateCategoryWithOptions(request: UpdateCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.cateName)) {
      query["CateName"] = request.cateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCategory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCategoryResponse>(await this.callApi(params, req, runtime), new UpdateCategoryResponse({}));
  }

  async updateCategory(request: UpdateCategoryRequest): Promise<UpdateCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  async updateEditingProjectWithOptions(request: UpdateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.timeline)) {
      query["Timeline"] = request.timeline;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEditingProjectResponse>(await this.callApi(params, req, runtime), new UpdateEditingProjectResponse({}));
  }

  async updateEditingProject(request: UpdateEditingProjectRequest): Promise<UpdateEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEditingProjectWithOptions(request, runtime);
  }

  async updateImageInfosWithOptions(request: UpdateImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.updateContent)) {
      query["UpdateContent"] = request.updateContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateImageInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateImageInfosResponse>(await this.callApi(params, req, runtime), new UpdateImageInfosResponse({}));
  }

  async updateImageInfos(request: UpdateImageInfosRequest): Promise<UpdateImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageInfosWithOptions(request, runtime);
  }

  async updateTranscodeTemplateGroupWithOptions(request: UpdateTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.locked)) {
      query["Locked"] = request.locked;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    if (!Util.isUnset(request.transcodeTemplateList)) {
      query["TranscodeTemplateList"] = request.transcodeTemplateList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new UpdateTranscodeTemplateGroupResponse({}));
  }

  async updateTranscodeTemplateGroup(request: UpdateTranscodeTemplateGroupRequest): Promise<UpdateTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async updateVideoInfoWithOptions(request: UpdateVideoInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVideoInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVideoInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVideoInfoResponse>(await this.callApi(params, req, runtime), new UpdateVideoInfoResponse({}));
  }

  async updateVideoInfo(request: UpdateVideoInfoRequest): Promise<UpdateVideoInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVideoInfoWithOptions(request, runtime);
  }

  async updateVideoInfosWithOptions(request: UpdateVideoInfosRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVideoInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.updateContent)) {
      query["UpdateContent"] = request.updateContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVideoInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVideoInfosResponse>(await this.callApi(params, req, runtime), new UpdateVideoInfosResponse({}));
  }

  async updateVideoInfos(request: UpdateVideoInfosRequest): Promise<UpdateVideoInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVideoInfosWithOptions(request, runtime);
  }

  async updateVodDomainWithOptions(request: UpdateVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVodDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVodDomainResponse>(await this.callApi(params, req, runtime), new UpdateVodDomainResponse({}));
  }

  async updateVodDomain(request: UpdateVodDomainRequest): Promise<UpdateVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVodDomainWithOptions(request, runtime);
  }

  async updateVodTemplateWithOptions(request: UpdateVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVodTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!Util.isUnset(request.vodTemplateId)) {
      query["VodTemplateId"] = request.vodTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVodTemplateResponse>(await this.callApi(params, req, runtime), new UpdateVodTemplateResponse({}));
  }

  async updateVodTemplate(request: UpdateVodTemplateRequest): Promise<UpdateVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVodTemplateWithOptions(request, runtime);
  }

  async updateWatermarkWithOptions(request: UpdateWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.watermarkConfig)) {
      query["WatermarkConfig"] = request.watermarkConfig;
    }

    if (!Util.isUnset(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWatermarkResponse>(await this.callApi(params, req, runtime), new UpdateWatermarkResponse({}));
  }

  async updateWatermark(request: UpdateWatermarkRequest): Promise<UpdateWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWatermarkWithOptions(request, runtime);
  }

  async uploadMediaByURLWithOptions(request: UploadMediaByURLRequest, runtime: $Util.RuntimeOptions): Promise<UploadMediaByURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!Util.isUnset(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!Util.isUnset(request.uploadMetadatas)) {
      query["UploadMetadatas"] = request.uploadMetadatas;
    }

    if (!Util.isUnset(request.uploadURLs)) {
      query["UploadURLs"] = request.uploadURLs;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadMediaByURL",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadMediaByURLResponse>(await this.callApi(params, req, runtime), new UploadMediaByURLResponse({}));
  }

  async uploadMediaByURL(request: UploadMediaByURLRequest): Promise<UploadMediaByURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMediaByURLWithOptions(request, runtime);
  }

  async uploadStreamByURLWithOptions(request: UploadStreamByURLRequest, runtime: $Util.RuntimeOptions): Promise<UploadStreamByURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.fileExtension)) {
      query["FileExtension"] = request.fileExtension;
    }

    if (!Util.isUnset(request.HDRType)) {
      query["HDRType"] = request.HDRType;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.streamURL)) {
      query["StreamURL"] = request.streamURL;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadStreamByURL",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadStreamByURLResponse>(await this.callApi(params, req, runtime), new UploadStreamByURLResponse({}));
  }

  async uploadStreamByURL(request: UploadStreamByURLRequest): Promise<UploadStreamByURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadStreamByURLWithOptions(request, runtime);
  }

  async verifyVodDomainOwnerWithOptions(request: VerifyVodDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyVodDomainOwnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyVodDomainOwner",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyVodDomainOwnerResponse>(await this.callApi(params, req, runtime), new VerifyVodDomainOwnerResponse({}));
  }

  async verifyVodDomainOwner(request: VerifyVodDomainOwnerRequest): Promise<VerifyVodDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyVodDomainOwnerWithOptions(request, runtime);
  }

}
