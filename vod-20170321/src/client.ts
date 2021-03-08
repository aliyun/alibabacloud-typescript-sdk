// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAITemplateRequest extends $tea.Model {
  templateName?: string;
  templateType?: string;
  templateConfig?: string;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      templateConfig: 'TemplateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      templateType: 'string',
      templateConfig: 'string',
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
  body: AddAITemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: AddCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  title?: string;
  description?: string;
  timeline?: string;
  coverURL?: string;
  division?: string;
  FEExtend?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      title: 'Title',
      description: 'Description',
      timeline: 'Timeline',
      coverURL: 'CoverURL',
      division: 'Division',
      FEExtend: 'FEExtend',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      title: 'string',
      description: 'string',
      timeline: 'string',
      coverURL: 'string',
      division: 'string',
      FEExtend: 'string',
      duration: 'number',
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
  body: AddEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTranscodeTemplateGroupRequest extends $tea.Model {
  name?: string;
  transcodeTemplateList?: string;
  transcodeTemplateGroupId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      transcodeTemplateList: 'TranscodeTemplateList',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      transcodeTemplateList: 'string',
      transcodeTemplateGroupId: 'string',
      appId: 'string',
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
  body: AddTranscodeTemplateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVodDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  sources?: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      sources: 'Sources',
      checkUrl: 'CheckUrl',
      scope: 'Scope',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainName: 'string',
      sources: 'string',
      checkUrl: 'string',
      scope: 'string',
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
  body: AddVodDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVodTemplateRequest extends $tea.Model {
  name?: string;
  templateType?: string;
  subTemplateType?: string;
  templateConfig?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateType: 'TemplateType',
      subTemplateType: 'SubTemplateType',
      templateConfig: 'TemplateConfig',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateType: 'string',
      subTemplateType: 'string',
      templateConfig: 'string',
      appId: 'string',
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
  body: AddVodTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWatermarkRequest extends $tea.Model {
  type?: string;
  name?: string;
  watermarkConfig?: string;
  fileUrl?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      watermarkConfig: 'WatermarkConfig',
      fileUrl: 'FileUrl',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      watermarkConfig: 'string',
      fileUrl: 'string',
      appId: 'string',
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
  body: AddWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAppPolicyToIdentityRequest extends $tea.Model {
  identityType?: string;
  identityName?: string;
  appId?: string;
  policyNames?: string;
  resourceRealOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      identityType: 'IdentityType',
      identityName: 'IdentityName',
      appId: 'AppId',
      policyNames: 'PolicyNames',
      resourceRealOwnerId: 'ResourceRealOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityType: 'string',
      identityName: 'string',
      appId: 'string',
      policyNames: 'string',
      resourceRealOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAppPolicyToIdentityResponseBody extends $tea.Model {
  requestId?: string;
  nonExistPolicyNames?: string[];
  failedPolicyNames?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nonExistPolicyNames: 'NonExistPolicyNames',
      failedPolicyNames: 'FailedPolicyNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nonExistPolicyNames: { 'type': 'array', 'itemType': 'string' },
      failedPolicyNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAppPolicyToIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachAppPolicyToIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachAppPolicyToIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetVodDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainNames?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainNames: 'string',
      functions: 'string',
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
  body: BatchSetVodDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetVodDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartVodDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainNames: 'string',
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
  body: BatchStartVodDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStartVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopVodDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainNames: 'string',
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
  body: BatchStopVodDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStopVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInfoRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  appName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      appName: 'AppName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
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
  body: CreateAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadAttachedMediaRequest extends $tea.Model {
  title?: string;
  businessType?: string;
  mediaExt?: string;
  fileName?: string;
  fileSize?: string;
  tags?: string;
  cateId?: number;
  storageLocation?: string;
  description?: string;
  userData?: string;
  cateIds?: string;
  appId?: string;
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      businessType: 'BusinessType',
      mediaExt: 'MediaExt',
      fileName: 'FileName',
      fileSize: 'FileSize',
      tags: 'Tags',
      cateId: 'CateId',
      storageLocation: 'StorageLocation',
      description: 'Description',
      userData: 'UserData',
      cateIds: 'CateIds',
      appId: 'AppId',
      icon: 'Icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      businessType: 'string',
      mediaExt: 'string',
      fileName: 'string',
      fileSize: 'string',
      tags: 'string',
      cateId: 'number',
      storageLocation: 'string',
      description: 'string',
      userData: 'string',
      cateIds: 'string',
      appId: 'string',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadAttachedMediaResponseBody extends $tea.Model {
  fileURL?: string;
  mediaURL?: string;
  uploadAddress?: string;
  requestId?: string;
  mediaId?: string;
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      mediaURL: 'MediaURL',
      uploadAddress: 'UploadAddress',
      requestId: 'RequestId',
      mediaId: 'MediaId',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      mediaURL: 'string',
      uploadAddress: 'string',
      requestId: 'string',
      mediaId: 'string',
      uploadAuth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadAttachedMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUploadAttachedMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUploadAttachedMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadImageRequest extends $tea.Model {
  title?: string;
  imageType?: string;
  imageExt?: string;
  originalFileName?: string;
  tags?: string;
  storageLocation?: string;
  cateId?: number;
  userData?: string;
  description?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      imageType: 'ImageType',
      imageExt: 'ImageExt',
      originalFileName: 'OriginalFileName',
      tags: 'Tags',
      storageLocation: 'StorageLocation',
      cateId: 'CateId',
      userData: 'UserData',
      description: 'Description',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      imageType: 'string',
      imageExt: 'string',
      originalFileName: 'string',
      tags: 'string',
      storageLocation: 'string',
      cateId: 'number',
      userData: 'string',
      description: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadImageResponseBody extends $tea.Model {
  fileURL?: string;
  uploadAddress?: string;
  requestId?: string;
  uploadAuth?: string;
  imageId?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      uploadAddress: 'UploadAddress',
      requestId: 'RequestId',
      uploadAuth: 'UploadAuth',
      imageId: 'ImageId',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      uploadAddress: 'string',
      requestId: 'string',
      uploadAuth: 'string',
      imageId: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUploadImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUploadImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadVideoRequest extends $tea.Model {
  coverURL?: string;
  description?: string;
  fileName?: string;
  fileSize?: number;
  IP?: string;
  title?: string;
  cateId?: number;
  tags?: string;
  transcodeMode?: string;
  userData?: string;
  templateGroupId?: string;
  workflowId?: string;
  storageLocation?: string;
  customMediaInfo?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      description: 'Description',
      fileName: 'FileName',
      fileSize: 'FileSize',
      IP: 'IP',
      title: 'Title',
      cateId: 'CateId',
      tags: 'Tags',
      transcodeMode: 'TranscodeMode',
      userData: 'UserData',
      templateGroupId: 'TemplateGroupId',
      workflowId: 'WorkflowId',
      storageLocation: 'StorageLocation',
      customMediaInfo: 'CustomMediaInfo',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      description: 'string',
      fileName: 'string',
      fileSize: 'number',
      IP: 'string',
      title: 'string',
      cateId: 'number',
      tags: 'string',
      transcodeMode: 'string',
      userData: 'string',
      templateGroupId: 'string',
      workflowId: 'string',
      storageLocation: 'string',
      customMediaInfo: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadVideoResponseBody extends $tea.Model {
  uploadAddress?: string;
  videoId?: string;
  requestId?: string;
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      uploadAddress: 'UploadAddress',
      videoId: 'VideoId',
      requestId: 'RequestId',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadAddress: 'string',
      videoId: 'string',
      requestId: 'string',
      uploadAuth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUploadVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUploadVideoResponseBody,
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
  body: DeleteAIImageInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteAITemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInfoRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
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
  body: DeleteAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteAttachedMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicImageRequest extends $tea.Model {
  videoId?: string;
  dynamicImageIds?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      dynamicImageIds: 'DynamicImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      dynamicImageIds: 'string',
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
  body: DeleteDynamicImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDynamicImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      projectIds: 'string',
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
  body: DeleteEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  deleteImageType?: string;
  imageURLs?: string;
  imageIds?: string;
  videoId?: string;
  imageType?: string;
  static names(): { [key: string]: string } {
    return {
      deleteImageType: 'DeleteImageType',
      imageURLs: 'ImageURLs',
      imageIds: 'ImageIds',
      videoId: 'VideoId',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteImageType: 'string',
      imageURLs: 'string',
      imageIds: 'string',
      videoId: 'string',
      imageType: 'string',
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
  body: DeleteImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageCallbackRequest extends $tea.Model {
  ownerAccount?: string;
  resourceRealOwnerId?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      resourceRealOwnerId: 'number',
      appId: 'string',
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
  body: DeleteMessageCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMezzaninesRequest extends $tea.Model {
  videoIds?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoIds: 'VideoIds',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMezzaninesResponseBody extends $tea.Model {
  requestId?: string;
  nonExistVideoIds?: string[];
  unRemoveableVideoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nonExistVideoIds: 'NonExistVideoIds',
      unRemoveableVideoIds: 'UnRemoveableVideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      unRemoveableVideoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMezzaninesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMezzaninesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMezzaninesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultipartUploadRequest extends $tea.Model {
  ownerAccount?: string;
  resourceRealOwnerId?: number;
  mediaId?: string;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      resourceRealOwnerId: 'number',
      mediaId: 'string',
      mediaType: 'string',
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
  body: DeleteMultipartUploadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTranscodeTemplateGroupRequest extends $tea.Model {
  transcodeTemplateGroupId?: string;
  transcodeTemplateIds?: string;
  forceDelGroup?: string;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateIds: 'TranscodeTemplateIds',
      forceDelGroup: 'ForceDelGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplateGroupId: 'string',
      transcodeTemplateIds: 'string',
      forceDelGroup: 'string',
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
  body: DeleteTranscodeTemplateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  forbiddenVideoIds?: string[];
  nonExistVideoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      forbiddenVideoIds: 'ForbiddenVideoIds',
      nonExistVideoIds: 'NonExistVideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      forbiddenVideoIds: { 'type': 'array', 'itemType': 'string' },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainName: 'string',
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
  body: DeleteVodDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVodSpecificConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      configId: 'string',
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
  body: DeleteVodSpecificConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteVodTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosRequest extends $tea.Model {
  ownerId?: number;
  bizDate?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      bizDate: 'BizDate',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      bizDate: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponseBody extends $tea.Model {
  topPlayVideos?: DescribePlayTopVideosResponseBodyTopPlayVideos;
  totalNum?: number;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      topPlayVideos: 'TopPlayVideos',
      totalNum: 'TotalNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topPlayVideos: DescribePlayTopVideosResponseBodyTopPlayVideos,
      totalNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePlayTopVideosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePlayTopVideosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
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
  body: DescribePlayUserAvgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePlayUserAvgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
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
  body: DescribePlayUserTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePlayUserTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponseBody extends $tea.Model {
  videoPlayStatisDetails?: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      videoPlayStatisDetails: 'VideoPlayStatisDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoPlayStatisDetails: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePlayVideoStatisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePlayVideoStatisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  region?: string;
  AIType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      region: 'Region',
      AIType: 'AIType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      region: 'string',
      AIType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBody extends $tea.Model {
  AIData?: DescribeVodAIDataResponseBodyAIData;
  requestId?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      AIData: 'AIData',
      requestId: 'RequestId',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIData: DescribeVodAIDataResponseBodyAIData,
      requestId: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodAIDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodAIDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponseBody extends $tea.Model {
  requestId?: string;
  certificateListModel?: DescribeVodCertificateListResponseBodyCertificateListModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateListModel: 'CertificateListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateListModel: DescribeVodCertificateListResponseBodyCertificateListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataResponseBody extends $tea.Model {
  ispNameEn?: string;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  locationNameEn?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      ispNameEn: 'IspNameEn',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      bpsDataPerInterval: 'BpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispNameEn: 'string',
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      dataInterval: 'string',
      bpsDataPerInterval: DescribeVodDomainBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodDomainBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainCertificateInfoRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
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
  body: DescribeVodDomainCertificateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeVodDomainConfigsResponseBodyDomainConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: DescribeVodDomainConfigsResponseBodyDomainConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainDetailRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
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
  body: DescribeVodDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  pageSize?: number;
  pageNumber?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponseBody extends $tea.Model {
  requestId?: string;
  domainLogDetails?: DescribeVodDomainLogResponseBodyDomainLogDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainLogDetails: 'DomainLogDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainLogDetails: DescribeVodDomainLogResponseBodyDomainLogDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodDomainLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodDomainLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      trafficDataPerInterval: 'TrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      trafficDataPerInterval: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodDomainTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  type?: string;
  area?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      type: 'Type',
      area: 'Area',
      field: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      type: 'string',
      area: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataResponseBody extends $tea.Model {
  usageDataPerInterval?: DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval;
  type?: string;
  area?: string;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      usageDataPerInterval: 'UsageDataPerInterval',
      type: 'Type',
      area: 'Area',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageDataPerInterval: DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval,
      type: 'string',
      area: 'string',
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodDomainUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  urlRemain?: string;
  preloadRemain?: string;
  blockQuota?: string;
  dirRemain?: string;
  urlQuota?: string;
  dirQuota?: string;
  blockRemain?: string;
  preloadQuota?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      urlRemain: 'UrlRemain',
      preloadRemain: 'PreloadRemain',
      blockQuota: 'BlockQuota',
      dirRemain: 'DirRemain',
      urlQuota: 'UrlQuota',
      dirQuota: 'DirQuota',
      blockRemain: 'blockRemain',
      preloadQuota: 'PreloadQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      urlRemain: 'string',
      preloadRemain: 'string',
      blockQuota: 'string',
      dirRemain: 'string',
      urlQuota: 'string',
      dirQuota: 'string',
      blockRemain: 'string',
      preloadQuota: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodRefreshQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  taskId?: string;
  objectPath?: string;
  pageNumber?: number;
  objectType?: string;
  domainName?: string;
  status?: string;
  pageSize?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      taskId: 'TaskId',
      objectPath: 'ObjectPath',
      pageNumber: 'PageNumber',
      objectType: 'ObjectType',
      domainName: 'DomainName',
      status: 'Status',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      taskId: 'string',
      objectPath: 'string',
      pageNumber: 'number',
      objectType: 'string',
      domainName: 'string',
      status: 'string',
      pageSize: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksResponseBody extends $tea.Model {
  totalCount?: number;
  tasks?: DescribeVodRefreshTasksResponseBodyTasks;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      tasks: 'Tasks',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      tasks: DescribeVodRefreshTasksResponseBodyTasks,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRefreshTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodRefreshTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodRefreshTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  region?: string;
  storageType?: string;
  storage?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      region: 'Region',
      storageType: 'StorageType',
      storage: 'Storage',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      region: 'string',
      storageType: 'string',
      storage: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponseBody extends $tea.Model {
  requestId?: string;
  dataInterval?: string;
  storageData?: DescribeVodStorageDataResponseBodyStorageData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataInterval: 'DataInterval',
      storageData: 'StorageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataInterval: 'string',
      storageData: DescribeVodStorageDataResponseBodyStorageData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodStorageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodStorageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  scope?: string;
  resourceId?: string[];
  tag?: DescribeVodTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceType: 'string',
      scope: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeVodTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: DescribeVodTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeVodTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  region?: string;
  interval?: string;
  storage?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      region: 'Region',
      interval: 'Interval',
      storage: 'Storage',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      region: 'string',
      interval: 'string',
      storage: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBody extends $tea.Model {
  requestId?: string;
  transcodeData?: DescribeVodTranscodeDataResponseBodyTranscodeData;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeData: 'TranscodeData',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeData: DescribeVodTranscodeDataResponseBodyTranscodeData,
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodTranscodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodTranscodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  pageSize?: number;
  pageNumber?: number;
  domainName?: string;
  domainStatus?: string;
  domainSearchType?: string;
  cdnType?: string;
  checkDomainShow?: boolean;
  funcId?: string;
  funcFilter?: string;
  tag?: DescribeVodUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainSearchType: 'DomainSearchType',
      cdnType: 'CdnType',
      checkDomainShow: 'CheckDomainShow',
      funcId: 'FuncId',
      funcFilter: 'FuncFilter',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      domainName: 'string',
      domainStatus: 'string',
      domainSearchType: 'string',
      cdnType: 'string',
      checkDomainShow: 'boolean',
      funcId: 'string',
      funcFilter: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVodUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeVodUserDomainsResponseBodyDomains;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeVodUserDomainsResponseBodyDomains,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserTagsRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: DescribeVodUserTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeVodUserTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodVerifyContentRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodVerifyContentResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodVerifyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodVerifyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAppPolicyFromIdentityRequest extends $tea.Model {
  identityType?: string;
  identityName?: string;
  appId?: string;
  policyNames?: string;
  static names(): { [key: string]: string } {
    return {
      identityType: 'IdentityType',
      identityName: 'IdentityName',
      appId: 'AppId',
      policyNames: 'PolicyNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityType: 'string',
      identityName: 'string',
      appId: 'string',
      policyNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAppPolicyFromIdentityResponseBody extends $tea.Model {
  requestId?: string;
  nonExistPolicyNames?: string[];
  failedPolicyNames?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nonExistPolicyNames: 'NonExistPolicyNames',
      failedPolicyNames: 'FailedPolicyNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nonExistPolicyNames: { 'type': 'array', 'itemType': 'string' },
      failedPolicyNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAppPolicyFromIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachAppPolicyFromIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachAppPolicyFromIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICaptionExtractionJobsRequest extends $tea.Model {
  jobIds?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICaptionExtractionJobsResponseBody extends $tea.Model {
  requestId?: string;
  AICaptionExtractionJobList?: GetAICaptionExtractionJobsResponseBodyAICaptionExtractionJobList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      AICaptionExtractionJobList: 'AICaptionExtractionJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      AICaptionExtractionJobList: { 'type': 'array', 'itemType': GetAICaptionExtractionJobsResponseBodyAICaptionExtractionJobList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICaptionExtractionJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAICaptionExtractionJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAICaptionExtractionJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIImageJobsRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  jobIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      jobIds: 'string',
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
  body: GetAIImageJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  mediaAuditJob?: GetAIMediaAuditJobResponseBodyMediaAuditJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaAuditJob: 'MediaAuditJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaAuditJob: GetAIMediaAuditJobResponseBodyMediaAuditJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAIMediaAuditJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  templateInfo?: GetAITemplateResponseBodyTemplateInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      templateInfo: 'TemplateInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateInfo: GetAITemplateResponseBodyTemplateInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAITemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      mediaId: 'string',
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
  body: GetAIVideoTagResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAIVideoTagResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  appIds?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      appIds: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
      appIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosResponseBody extends $tea.Model {
  requestId?: string;
  appInfoList?: GetAppInfosResponseBodyAppInfoList[];
  nonExistAppIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appInfoList: 'AppInfoList',
      nonExistAppIds: 'NonExistAppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appInfoList: { 'type': 'array', 'itemType': GetAppInfosResponseBodyAppInfoList },
      nonExistAppIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoRequest extends $tea.Model {
  mediaIds?: string;
  authTimeout?: number;
  resourceRealOwnerId?: number;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      authTimeout: 'AuthTimeout',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
      authTimeout: 'number',
      resourceRealOwnerId: 'number',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBody extends $tea.Model {
  nonExistMediaIds?: string[];
  requestId?: string;
  attachedMediaList?: GetAttachedMediaInfoResponseBodyAttachedMediaList[];
  static names(): { [key: string]: string } {
    return {
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
      attachedMediaList: 'AttachedMediaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      attachedMediaList: { 'type': 'array', 'itemType': GetAttachedMediaInfoResponseBodyAttachedMediaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAttachedMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAttachedMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryRequest extends $tea.Model {
  videoId?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  total?: number;
  histories?: GetAuditHistoryResponseBodyHistories[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      total: 'Total',
      histories: 'Histories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      total: 'number',
      histories: { 'type': 'array', 'itemType': GetAuditHistoryResponseBodyHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuditHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  subTotal?: number;
  subCategories?: GetCategoriesResponseBodySubCategories;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
      subTotal: 'SubTotal',
      subCategories: 'SubCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: GetCategoriesResponseBodyCategory,
      requestId: 'string',
      subTotal: 'number',
      subCategories: GetCategoriesResponseBodySubCategories,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  templateInfo?: GetDefaultAITemplateResponseBodyTemplateInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      templateInfo: 'TemplateInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateInfo: GetDefaultAITemplateResponseBodyTemplateInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAITemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDefaultAITemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDefaultAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  projectId?: string;
  FEExtendFlag?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      projectId: 'ProjectId',
      FEExtendFlag: 'FEExtendFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      projectId: 'string',
      FEExtendFlag: 'number',
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
  body: GetEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  projectId?: string;
  type?: string;
  materialType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      projectId: 'ProjectId',
      type: 'Type',
      materialType: 'MaterialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      projectId: 'string',
      type: 'string',
      materialType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBody extends $tea.Model {
  requestId?: string;
  materialList?: GetEditingProjectMaterialsResponseBodyMaterialList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      materialList: 'MaterialList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      materialList: GetEditingProjectMaterialsResponseBodyMaterialList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEditingProjectMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoRequest extends $tea.Model {
  imageId?: string;
  authTimeout?: number;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      authTimeout: 'AuthTimeout',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      authTimeout: 'number',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponseBody extends $tea.Model {
  requestId?: string;
  imageInfo?: GetImageInfoResponseBodyImageInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageInfo: GetImageInfoResponseBodyImageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  mediaId?: string;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      mediaId: 'MediaId',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      mediaId: 'string',
      pageNo: 'number',
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
  body: GetMediaAuditAudioResultDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  mediaAuditResult?: GetMediaAuditResultResponseBodyMediaAuditResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaAuditResult: 'MediaAuditResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaAuditResult: GetMediaAuditResultResponseBodyMediaAuditResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaAuditResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  mediaAuditResultDetail?: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaAuditResultDetail: 'MediaAuditResultDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaAuditResultDetail: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaAuditResultDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  mediaAuditResultTimeline?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaAuditResultTimeline: 'MediaAuditResultTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaAuditResultTimeline: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaAuditResultTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaAuditResultTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBody extends $tea.Model {
  requestId?: string;
  DNAResult?: GetMediaDNAResultResponseBodyDNAResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DNAResult: 'DNAResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DNAResult: GetMediaDNAResultResponseBodyDNAResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaDNAResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaDNAResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackRequest extends $tea.Model {
  ownerAccount?: string;
  resourceRealOwnerId?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      resourceRealOwnerId: 'number',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackResponseBody extends $tea.Model {
  requestId?: string;
  messageCallback?: GetMessageCallbackResponseBodyMessageCallback;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageCallback: 'MessageCallback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageCallback: GetMessageCallbackResponseBodyMessageCallback,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMessageCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoRequest extends $tea.Model {
  videoId?: string;
  authTimeout?: number;
  previewSegment?: boolean;
  outputType?: string;
  additionType?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      authTimeout: 'AuthTimeout',
      previewSegment: 'PreviewSegment',
      outputType: 'OutputType',
      additionType: 'AdditionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      authTimeout: 'number',
      previewSegment: 'boolean',
      outputType: 'string',
      additionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBody extends $tea.Model {
  requestId?: string;
  mezzanine?: GetMezzanineInfoResponseBodyMezzanine;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mezzanine: 'Mezzanine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mezzanine: GetMezzanineInfoResponseBodyMezzanine,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMezzanineInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMezzanineInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoRequest extends $tea.Model {
  videoId?: string;
  formats?: string;
  authTimeout?: number;
  rand?: string;
  authInfo?: string;
  channel?: string;
  playerVersion?: string;
  outputType?: string;
  streamType?: string;
  reAuthInfo?: string;
  definition?: string;
  resultType?: string;
  playConfig?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      formats: 'Formats',
      authTimeout: 'AuthTimeout',
      rand: 'Rand',
      authInfo: 'AuthInfo',
      channel: 'Channel',
      playerVersion: 'PlayerVersion',
      outputType: 'OutputType',
      streamType: 'StreamType',
      reAuthInfo: 'ReAuthInfo',
      definition: 'Definition',
      resultType: 'ResultType',
      playConfig: 'PlayConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      formats: 'string',
      authTimeout: 'number',
      rand: 'string',
      authInfo: 'string',
      channel: 'string',
      playerVersion: 'string',
      outputType: 'string',
      streamType: 'string',
      reAuthInfo: 'string',
      definition: 'string',
      resultType: 'string',
      playConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBody extends $tea.Model {
  videoBase?: GetPlayInfoResponseBodyVideoBase;
  requestId?: string;
  playInfoList?: GetPlayInfoResponseBodyPlayInfoList;
  static names(): { [key: string]: string } {
    return {
      videoBase: 'VideoBase',
      requestId: 'RequestId',
      playInfoList: 'PlayInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoBase: GetPlayInfoResponseBodyVideoBase,
      requestId: 'string',
      playInfoList: GetPlayInfoResponseBodyPlayInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPlayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  transcodeSummaryList?: GetTranscodeSummaryResponseBodyTranscodeSummaryList[];
  nonExistVideoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeSummaryList: 'TranscodeSummaryList',
      nonExistVideoIds: 'NonExistVideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeSummaryList: { 'type': 'array', 'itemType': GetTranscodeSummaryResponseBodyTranscodeSummaryList },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTranscodeSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetTranscodeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetTranscodeTemplateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  mediaIds?: string;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      mediaIds: 'MediaIds',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
      mediaIds: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsResponseBody extends $tea.Model {
  nonExistMediaIds?: string[];
  uploadDetails?: GetUploadDetailsResponseBodyUploadDetails[];
  requestId?: string;
  forbiddenMediaIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nonExistMediaIds: 'NonExistMediaIds',
      uploadDetails: 'UploadDetails',
      requestId: 'RequestId',
      forbiddenMediaIds: 'ForbiddenMediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      uploadDetails: { 'type': 'array', 'itemType': GetUploadDetailsResponseBodyUploadDetails },
      requestId: 'string',
      forbiddenMediaIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUploadDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUploadDetailsResponseBody,
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
  requestId?: string;
  URLUploadInfoList?: GetURLUploadInfosResponseBodyURLUploadInfoList[];
  nonExists?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      URLUploadInfoList: 'URLUploadInfoList',
      nonExists: 'NonExists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      URLUploadInfoList: { 'type': 'array', 'itemType': GetURLUploadInfosResponseBodyURLUploadInfoList },
      nonExists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetURLUploadInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetURLUploadInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetURLUploadInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoRequest extends $tea.Model {
  videoId?: string;
  resultTypes?: string;
  additionType?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      resultTypes: 'ResultTypes',
      additionType: 'AdditionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      resultTypes: 'string',
      additionType: 'string',
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
  body: GetVideoInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosRequest extends $tea.Model {
  videoIds?: string;
  additionType?: string;
  static names(): { [key: string]: string } {
    return {
      videoIds: 'VideoIds',
      additionType: 'AdditionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: 'string',
      additionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosResponseBody extends $tea.Model {
  requestId?: string;
  nonExistVideoIds?: string[];
  videoList?: GetVideoInfosResponseBodyVideoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nonExistVideoIds: 'NonExistVideoIds',
      videoList: 'VideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      videoList: { 'type': 'array', 'itemType': GetVideoInfosResponseBodyVideoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVideoInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListRequest extends $tea.Model {
  cateId?: number;
  status?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  endTime?: string;
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      status: 'Status',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      endTime: 'EndTime',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      status: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      endTime: 'string',
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
  body: GetVideoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthRequest extends $tea.Model {
  videoId?: string;
  authInfoTimeout?: number;
  reAuthInfo?: string;
  playConfig?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      authInfoTimeout: 'AuthInfoTimeout',
      reAuthInfo: 'ReAuthInfo',
      playConfig: 'PlayConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      authInfoTimeout: 'number',
      reAuthInfo: 'string',
      playConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthResponseBody extends $tea.Model {
  playAuth?: string;
  videoMeta?: GetVideoPlayAuthResponseBodyVideoMeta;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playAuth: 'PlayAuth',
      videoMeta: 'VideoMeta',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playAuth: 'string',
      videoMeta: GetVideoPlayAuthResponseBodyVideoMeta,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVideoPlayAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetVodTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  AIImageInfoList?: ListAIImageInfoResponseBodyAIImageInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      AIImageInfoList: 'AIImageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      AIImageInfoList: { 'type': 'array', 'itemType': ListAIImageInfoResponseBodyAIImageInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIImageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAIImageInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAIImageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  jobIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      jobIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBody extends $tea.Model {
  requestId?: string;
  nonExistAIJobIds?: ListAIJobResponseBodyNonExistAIJobIds;
  AIJobList?: ListAIJobResponseBodyAIJobList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nonExistAIJobIds: 'NonExistAIJobIds',
      AIJobList: 'AIJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nonExistAIJobIds: ListAIJobResponseBodyNonExistAIJobIds,
      AIJobList: ListAIJobResponseBodyAIJobList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListAITemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  status?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      status: 'Status',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
      status: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  appInfoList?: ListAppInfoResponseBodyAppInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      appInfoList: 'AppInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      appInfoList: { 'type': 'array', 'itemType': ListAppInfoResponseBodyAppInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityRequest extends $tea.Model {
  identityType?: string;
  identityName?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      identityType: 'IdentityType',
      identityName: 'IdentityName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityType: 'string',
      identityName: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityResponseBody extends $tea.Model {
  requestId?: string;
  appPolicyList?: ListAppPoliciesForIdentityResponseBodyAppPolicyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appPolicyList: 'AppPolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appPolicyList: { 'type': 'array', 'itemType': ListAppPoliciesForIdentityResponseBodyAppPolicyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppPoliciesForIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListAuditSecurityIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  dynamicImageList?: ListDynamicImageResponseBodyDynamicImageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dynamicImageList: 'DynamicImageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dynamicImageList: { 'type': 'array', 'itemType': ListDynamicImageResponseBodyDynamicImageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDynamicImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDynamicImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoRequest extends $tea.Model {
  streamName?: string;
  domainName?: string;
  appName?: string;
  queryType?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      domainName: 'DomainName',
      appName: 'AppName',
      queryType: 'QueryType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      domainName: 'string',
      appName: 'string',
      queryType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  liveRecordVideoList?: ListLiveRecordVideoResponseBodyLiveRecordVideoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      liveRecordVideoList: 'LiveRecordVideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      liveRecordVideoList: ListLiveRecordVideoResponseBodyLiveRecordVideoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLiveRecordVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLiveRecordVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNADeleteJobRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  jobIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      jobIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNADeleteJobResponseBody extends $tea.Model {
  requestId?: string;
  nonExistAIJobIds?: ListMediaDNADeleteJobResponseBodyNonExistAIJobIds;
  AIJobList?: ListMediaDNADeleteJobResponseBodyAIJobList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nonExistAIJobIds: 'NonExistAIJobIds',
      AIJobList: 'AIJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nonExistAIJobIds: ListMediaDNADeleteJobResponseBodyNonExistAIJobIds,
      AIJobList: ListMediaDNADeleteJobResponseBodyAIJobList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNADeleteJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMediaDNADeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMediaDNADeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsRequest extends $tea.Model {
  videoId?: string;
  snapshotType?: string;
  authTimeout?: string;
  pageSize?: string;
  pageNo?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      snapshotType: 'SnapshotType',
      authTimeout: 'AuthTimeout',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      snapshotType: 'string',
      authTimeout: 'string',
      pageSize: 'string',
      pageNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBody extends $tea.Model {
  requestId?: string;
  mediaSnapshot?: ListSnapshotsResponseBodyMediaSnapshot;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaSnapshot: 'MediaSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaSnapshot: ListSnapshotsResponseBodyMediaSnapshot,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTaskRequest extends $tea.Model {
  videoId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNo: 'number',
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
  body: ListTranscodeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTranscodeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTemplateGroupRequest extends $tea.Model {
  pageSize?: number;
  pageNo?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNo: 'number',
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
  body: ListTranscodeTemplateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVodTemplateRequest extends $tea.Model {
  templateType?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      templateType: 'TemplateType',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateType: 'string',
      appId: 'string',
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
  body: ListVodTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarkRequest extends $tea.Model {
  pageSize?: number;
  pageNo?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNo: 'number',
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
  body: ListWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAppResourceRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  targetAppId?: string;
  resourceType?: string;
  resourceIds?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      targetAppId: 'TargetAppId',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
      targetAppId: 'string',
      resourceType: 'string',
      resourceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAppResourceResponseBody extends $tea.Model {
  failedResourceIds?: string[];
  requestId?: string;
  nonExistResourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failedResourceIds: 'FailedResourceIds',
      requestId: 'RequestId',
      nonExistResourceIds: 'NonExistResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResourceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      nonExistResourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAppResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveAppResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveAppResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadVodObjectCachesRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  objectPath?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      objectPath: 'ObjectPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      objectPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadVodObjectCachesResponseBody extends $tea.Model {
  requestId?: string;
  preloadTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      preloadTaskId: 'PreloadTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      preloadTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadVodObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreloadVodObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreloadVodObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceEditingProjectVideoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  projectId?: string;
  timeline?: string;
  title?: string;
  description?: string;
  coverURL?: string;
  mediaMetadata?: string;
  produceConfig?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      projectId: 'ProjectId',
      timeline: 'Timeline',
      title: 'Title',
      description: 'Description',
      coverURL: 'CoverURL',
      mediaMetadata: 'MediaMetadata',
      produceConfig: 'ProduceConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      projectId: 'string',
      timeline: 'string',
      title: 'string',
      description: 'string',
      coverURL: 'string',
      mediaMetadata: 'string',
      produceConfig: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceEditingProjectVideoResponseBody extends $tea.Model {
  requestId?: string;
  mediaId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaId: 'MediaId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceEditingProjectVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProduceEditingProjectVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProduceEditingProjectVideoResponseBody,
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
  uploadAddress?: string;
  videoId?: string;
  requestId?: string;
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      uploadAddress: 'UploadAddress',
      videoId: 'VideoId',
      requestId: 'RequestId',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadAddress: 'string',
      videoId: 'string',
      requestId: 'string',
      uploadAuth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUploadVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshUploadVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshUploadVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshVodObjectCachesRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  objectPath?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      objectPath: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshVodObjectCachesResponseBody extends $tea.Model {
  requestId?: string;
  refreshTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      refreshTaskId: 'RefreshTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      refreshTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshVodObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshVodObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  failedFileURLs?: string[];
  registeredMediaList?: RegisterMediaResponseBodyRegisteredMediaList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      failedFileURLs: 'FailedFileURLs',
      registeredMediaList: 'RegisteredMediaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      failedFileURLs: { 'type': 'array', 'itemType': 'string' },
      registeredMediaList: { 'type': 'array', 'itemType': RegisterMediaResponseBodyRegisteredMediaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  endTime?: string;
  startTime?: string;
  status?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      endTime: 'EndTime',
      startTime: 'StartTime',
      status: 'Status',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      endTime: 'string',
      startTime: 'string',
      status: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  projectList?: SearchEditingProjectResponseBodyProjectList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      projectList: 'ProjectList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      projectList: SearchEditingProjectResponseBodyProjectList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaRequest extends $tea.Model {
  searchType?: string;
  fields?: string;
  match?: string;
  sortBy?: string;
  pageNo?: number;
  pageSize?: number;
  scrollToken?: string;
  sessionId?: string;
  resultTypes?: string;
  static names(): { [key: string]: string } {
    return {
      searchType: 'SearchType',
      fields: 'Fields',
      match: 'Match',
      sortBy: 'SortBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scrollToken: 'ScrollToken',
      sessionId: 'SessionId',
      resultTypes: 'ResultTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchType: 'string',
      fields: 'string',
      match: 'string',
      sortBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scrollToken: 'string',
      sessionId: 'string',
      resultTypes: 'string',
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
  body: SearchMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAuditSecurityIpRequest extends $tea.Model {
  securityGroupName?: string;
  ips?: string;
  operateMode?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupName: 'SecurityGroupName',
      ips: 'Ips',
      operateMode: 'OperateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupName: 'string',
      ips: 'string',
      operateMode: 'string',
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
  body: SetAuditSecurityIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAuditSecurityIpResponseBody,
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
  body: SetDefaultAITemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetDefaultTranscodeTemplateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetDefaultWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDefaultWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEditingProjectMaterialsRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  projectId?: string;
  materialIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      projectId: 'ProjectId',
      materialIds: 'MaterialIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      projectId: 'string',
      materialIds: 'string',
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
  body: SetEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetEditingProjectMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMessageCallbackRequest extends $tea.Model {
  ownerAccount?: string;
  callbackSwitch?: string;
  callbackType?: string;
  callbackURL?: string;
  eventTypeList?: string;
  authSwitch?: string;
  authKey?: string;
  resourceRealOwnerId?: number;
  mnsEndpoint?: string;
  mnsQueueName?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      callbackSwitch: 'CallbackSwitch',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      authSwitch: 'AuthSwitch',
      authKey: 'AuthKey',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      mnsEndpoint: 'MnsEndpoint',
      mnsQueueName: 'MnsQueueName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      callbackSwitch: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
      authSwitch: 'string',
      authKey: 'string',
      resourceRealOwnerId: 'number',
      mnsEndpoint: 'string',
      mnsQueueName: 'string',
      appId: 'string',
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
  body: SetMessageCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVodDomainCertificateRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  certName?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  SSLPri?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      certName: 'CertName',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      SSLPri: 'SSLPri',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      certName: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      SSLPri: 'string',
      region: 'string',
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
  body: SetVodDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetVodDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICaptionExtractionJobRequest extends $tea.Model {
  videoId?: string;
  jobConfig?: string;
  AIPipelineId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      jobConfig: 'JobConfig',
      AIPipelineId: 'AIPipelineId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      jobConfig: 'string',
      AIPipelineId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICaptionExtractionJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICaptionExtractionJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitAICaptionExtractionJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAICaptionExtractionJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageAuditJobRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  mediaId?: string;
  templateId?: string;
  mediaAuditConfiguration?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      mediaId: 'MediaId',
      templateId: 'TemplateId',
      mediaAuditConfiguration: 'MediaAuditConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      mediaId: 'string',
      templateId: 'string',
      mediaAuditConfiguration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageAuditJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageAuditJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitAIImageAuditJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAIImageAuditJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageJobRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  videoId?: string;
  AITemplateId?: string;
  userData?: string;
  AIPipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      videoId: 'VideoId',
      AITemplateId: 'AITemplateId',
      userData: 'UserData',
      AIPipelineId: 'AIPipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      videoId: 'string',
      AITemplateId: 'string',
      userData: 'string',
      AIPipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitAIImageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAIImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  mediaId?: string;
  types?: string;
  config?: string;
  userData?: string;
  input?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      mediaId: 'MediaId',
      types: 'Types',
      config: 'Config',
      userData: 'UserData',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      mediaId: 'string',
      types: 'string',
      config: 'string',
      userData: 'string',
      input: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobResponseBody extends $tea.Model {
  requestId?: string;
  AIJobList?: SubmitAIJobResponseBodyAIJobList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      AIJobList: 'AIJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      AIJobList: SubmitAIJobResponseBodyAIJobList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitAIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIMediaAuditJobRequest extends $tea.Model {
  mediaId?: string;
  templateId?: string;
  userData?: string;
  mediaType?: string;
  mediaAuditConfiguration?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      templateId: 'TemplateId',
      userData: 'UserData',
      mediaType: 'MediaType',
      mediaAuditConfiguration: 'MediaAuditConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      templateId: 'string',
      userData: 'string',
      mediaType: 'string',
      mediaAuditConfiguration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIMediaAuditJobResponseBody extends $tea.Model {
  requestId?: string;
  mediaId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaId: 'MediaId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIMediaAuditJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitAIMediaAuditJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAIMediaAuditJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequest extends $tea.Model {
  videoId?: string;
  dynamicImageTemplateId?: string;
  overrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      dynamicImageTemplateId: 'DynamicImageTemplateId',
      overrideParams: 'OverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      dynamicImageTemplateId: 'string',
      overrideParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobResponseBody extends $tea.Model {
  requestId?: string;
  dynamicImageJob?: SubmitDynamicImageJobResponseBodyDynamicImageJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dynamicImageJob: 'DynamicImageJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dynamicImageJob: SubmitDynamicImageJobResponseBodyDynamicImageJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitDynamicImageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitDynamicImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaDNADeleteJobRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  mediaId?: string;
  fpDBId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      mediaId: 'MediaId',
      fpDBId: 'FpDBId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      mediaId: 'string',
      fpDBId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaDNADeleteJobResponseBody extends $tea.Model {
  requestId?: string;
  mediaId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaId: 'MediaId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaDNADeleteJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitMediaDNADeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitMediaDNADeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsRequest extends $tea.Model {
  videoId?: string;
  preprocessType?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      preprocessType: 'PreprocessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      preprocessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsResponseBody extends $tea.Model {
  requestId?: string;
  preprocessJobs?: SubmitPreprocessJobsResponseBodyPreprocessJobs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      preprocessJobs: 'PreprocessJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      preprocessJobs: SubmitPreprocessJobsResponseBodyPreprocessJobs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPreprocessJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitPreprocessJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitPreprocessJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequest extends $tea.Model {
  videoId?: string;
  specifiedOffsetTime?: number;
  width?: string;
  height?: string;
  count?: number;
  interval?: number;
  spriteSnapshotConfig?: string;
  snapshotTemplateId?: string;
  userData?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      specifiedOffsetTime: 'SpecifiedOffsetTime',
      width: 'Width',
      height: 'Height',
      count: 'Count',
      interval: 'Interval',
      spriteSnapshotConfig: 'SpriteSnapshotConfig',
      snapshotTemplateId: 'SnapshotTemplateId',
      userData: 'UserData',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      specifiedOffsetTime: 'number',
      width: 'string',
      height: 'string',
      count: 'number',
      interval: 'number',
      spriteSnapshotConfig: 'string',
      snapshotTemplateId: 'string',
      userData: 'string',
      fileUrl: 'string',
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
  body: SubmitSnapshotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSnapshotJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobsRequest extends $tea.Model {
  videoId?: string;
  templateGroupId?: string;
  pipelineId?: string;
  encryptConfig?: string;
  overrideParams?: string;
  priority?: string;
  userData?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      templateGroupId: 'TemplateGroupId',
      pipelineId: 'PipelineId',
      encryptConfig: 'EncryptConfig',
      overrideParams: 'OverrideParams',
      priority: 'Priority',
      userData: 'UserData',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      templateGroupId: 'string',
      pipelineId: 'string',
      encryptConfig: 'string',
      overrideParams: 'string',
      priority: 'string',
      userData: 'string',
      fileUrl: 'string',
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
  body: SubmitTranscodeJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitTranscodeJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitWorkflowJobRequest extends $tea.Model {
  workflowId?: string;
  mediaId?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      workflowId: 'WorkflowId',
      mediaId: 'MediaId',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowId: 'string',
      mediaId: 'string',
      fileUrl: 'string',
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
  body: SubmitWorkflowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitWorkflowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagVodResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagVodResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagVodResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagVodResourcesResponseBody extends $tea.Model {
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

export class TagVodResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagVodResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagVodResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagVodResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagVodResourcesResponseBody extends $tea.Model {
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

export class UnTagVodResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnTagVodResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnTagVodResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAITemplateRequest extends $tea.Model {
  templateId?: string;
  templateName?: string;
  templateConfig?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateConfig: 'TemplateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      templateName: 'string',
      templateConfig: 'string',
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
  body: UpdateAITemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAITemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppInfoRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  appId?: string;
  appName?: string;
  description?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
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
  body: UpdateAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAttachedMediaInfosRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  updateContent?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      updateContent: 'UpdateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
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
  body: UpdateAttachedMediaInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAttachedMediaInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryRequest extends $tea.Model {
  cateName?: string;
  cateId?: number;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      cateId: 'CateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
      cateId: 'number',
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
  body: UpdateCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEditingProjectRequest extends $tea.Model {
  ownerId?: string;
  resourceOwnerId?: string;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  projectId?: string;
  title?: string;
  timeline?: string;
  description?: string;
  coverURL?: string;
  FEExtend?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      projectId: 'ProjectId',
      title: 'Title',
      timeline: 'Timeline',
      description: 'Description',
      coverURL: 'CoverURL',
      FEExtend: 'FEExtend',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceOwnerId: 'string',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      projectId: 'string',
      title: 'string',
      timeline: 'string',
      description: 'string',
      coverURL: 'string',
      FEExtend: 'string',
      duration: 'number',
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
  body: UpdateEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosRequest extends $tea.Model {
  resourceRealOwnerId?: number;
  updateContent?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRealOwnerId: 'ResourceRealOwnerId',
      updateContent: 'UpdateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRealOwnerId: 'number',
      updateContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosResponseBody extends $tea.Model {
  requestId?: string;
  nonExistImageIds?: UpdateImageInfosResponseBodyNonExistImageIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nonExistImageIds: 'NonExistImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nonExistImageIds: UpdateImageInfosResponseBodyNonExistImageIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateImageInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateImageInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscodeTemplateGroupRequest extends $tea.Model {
  name?: string;
  transcodeTemplateList?: string;
  locked?: string;
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      transcodeTemplateList: 'TranscodeTemplateList',
      locked: 'Locked',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      transcodeTemplateList: 'string',
      locked: 'string',
      transcodeTemplateGroupId: 'string',
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
  body: UpdateTranscodeTemplateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTranscodeTemplateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoInfoRequest extends $tea.Model {
  videoId?: string;
  title?: string;
  tags?: string;
  description?: string;
  coverURL?: string;
  cateId?: number;
  downloadSwitch?: string;
  status?: string;
  customMediaInfo?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      title: 'Title',
      tags: 'Tags',
      description: 'Description',
      coverURL: 'CoverURL',
      cateId: 'CateId',
      downloadSwitch: 'DownloadSwitch',
      status: 'Status',
      customMediaInfo: 'CustomMediaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      title: 'string',
      tags: 'string',
      description: 'string',
      coverURL: 'string',
      cateId: 'number',
      downloadSwitch: 'string',
      status: 'string',
      customMediaInfo: 'string',
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
  body: UpdateVideoInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  forbiddenVideoIds?: string[];
  nonExistVideoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      forbiddenVideoIds: 'ForbiddenVideoIds',
      nonExistVideoIds: 'NonExistVideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      forbiddenVideoIds: { 'type': 'array', 'itemType': 'string' },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVideoInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVideoInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVodDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
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
  body: UpdateVodDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVodDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVodTemplateRequest extends $tea.Model {
  vodTemplateId?: string;
  name?: string;
  templateConfig?: string;
  static names(): { [key: string]: string } {
    return {
      vodTemplateId: 'VodTemplateId',
      name: 'Name',
      templateConfig: 'TemplateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vodTemplateId: 'string',
      name: 'string',
      templateConfig: 'string',
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
  body: UpdateVodTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVodTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkRequest extends $tea.Model {
  name?: string;
  watermarkId?: string;
  watermarkConfig?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      watermarkId: 'WatermarkId',
      watermarkConfig: 'WatermarkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      watermarkId: 'string',
      watermarkConfig: 'string',
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
  body: UpdateWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMediaByURLRequest extends $tea.Model {
  uploadURLs?: string;
  templateGroupId?: string;
  storageLocation?: string;
  uploadMetadatas?: string;
  priority?: string;
  messageCallback?: string;
  userData?: string;
  appId?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      uploadURLs: 'UploadURLs',
      templateGroupId: 'TemplateGroupId',
      storageLocation: 'StorageLocation',
      uploadMetadatas: 'UploadMetadatas',
      priority: 'Priority',
      messageCallback: 'MessageCallback',
      userData: 'UserData',
      appId: 'AppId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadURLs: 'string',
      templateGroupId: 'string',
      storageLocation: 'string',
      uploadMetadatas: 'string',
      priority: 'string',
      messageCallback: 'string',
      userData: 'string',
      appId: 'string',
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
  body: UploadMediaByURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadMediaByURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVodDomainOwnerRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVodDomainOwnerResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVodDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyVodDomainOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyVodDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryResponseBodyCategory extends $tea.Model {
  type?: string;
  parentId?: number;
  cateName?: string;
  cateId?: number;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      parentId: 'ParentId',
      cateName: 'CateName',
      cateId: 'CateId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      parentId: 'number',
      cateName: 'string',
      cateId: 'number',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectResponseBodyProject extends $tea.Model {
  creationTime?: string;
  status?: string;
  modifiedTime?: string;
  description?: string;
  projectId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      projectId: 'ProjectId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      modifiedTime: 'string',
      description: 'string',
      projectId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWatermarkResponseBodyWatermarkInfo extends $tea.Model {
  creationTime?: string;
  type?: string;
  isDefault?: string;
  fileUrl?: string;
  watermarkConfig?: string;
  name?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      type: 'Type',
      isDefault: 'IsDefault',
      fileUrl: 'FileUrl',
      watermarkConfig: 'WatermarkConfig',
      name: 'Name',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      type: 'string',
      isDefault: 'string',
      fileUrl: 'string',
      watermarkConfig: 'string',
      name: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponseBodyTopPlayVideosTopPlayVideoStatis extends $tea.Model {
  playDuration?: string;
  videoId?: string;
  title?: string;
  VV?: string;
  UV?: string;
  static names(): { [key: string]: string } {
    return {
      playDuration: 'PlayDuration',
      videoId: 'VideoId',
      title: 'Title',
      VV: 'VV',
      UV: 'UV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playDuration: 'string',
      videoId: 'string',
      title: 'string',
      VV: 'string',
      UV: 'string',
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
  avgPlayDuration?: string;
  avgPlayCount?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      avgPlayDuration: 'AvgPlayDuration',
      avgPlayCount: 'AvgPlayCount',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgPlayDuration: 'string',
      avgPlayCount: 'string',
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

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV extends $tea.Model {
  iOS?: string;
  android?: string;
  flash?: string;
  HTML5?: string;
  static names(): { [key: string]: string } {
    return {
      iOS: 'iOS',
      android: 'Android',
      flash: 'Flash',
      HTML5: 'HTML5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iOS: 'string',
      android: 'string',
      flash: 'string',
      HTML5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV extends $tea.Model {
  iOS?: string;
  android?: string;
  flash?: string;
  HTML5?: string;
  static names(): { [key: string]: string } {
    return {
      iOS: 'iOS',
      android: 'Android',
      flash: 'Flash',
      HTML5: 'HTML5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iOS: 'string',
      android: 'string',
      flash: 'string',
      HTML5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotal extends $tea.Model {
  playDuration?: string;
  date?: string;
  VV?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV;
  playRange?: string;
  UV?: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV;
  static names(): { [key: string]: string } {
    return {
      playDuration: 'PlayDuration',
      date: 'Date',
      VV: 'VV',
      playRange: 'PlayRange',
      UV: 'UV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playDuration: 'string',
      date: 'string',
      VV: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalVV,
      playRange: 'string',
      UV: DescribePlayUserTotalResponseBodyUserPlayStatisTotalsUserPlayStatisTotalUV,
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
  playDuration?: string;
  date?: string;
  VV?: string;
  title?: string;
  UV?: string;
  playRange?: string;
  static names(): { [key: string]: string } {
    return {
      playDuration: 'PlayDuration',
      date: 'Date',
      VV: 'VV',
      title: 'Title',
      UV: 'UV',
      playRange: 'PlayRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playDuration: 'string',
      date: 'string',
      VV: 'string',
      title: 'string',
      UV: 'string',
      playRange: 'string',
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
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
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
  lastTime?: number;
  fingerprint?: string;
  certName?: string;
  issuer?: string;
  certId?: number;
  common?: string;
  static names(): { [key: string]: string } {
    return {
      lastTime: 'LastTime',
      fingerprint: 'Fingerprint',
      certName: 'CertName',
      issuer: 'Issuer',
      certId: 'CertId',
      common: 'Common',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTime: 'number',
      fingerprint: 'string',
      certName: 'string',
      issuer: 'string',
      certId: 'number',
      common: 'string',
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
  httpsDomesticValue?: string;
  value?: string;
  overseasValue?: string;
  httpsValue?: string;
  httpsOverseasValue?: string;
  timeStamp?: string;
  domesticValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpsDomesticValue: 'HttpsDomesticValue',
      value: 'Value',
      overseasValue: 'OverseasValue',
      httpsValue: 'HttpsValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      timeStamp: 'TimeStamp',
      domesticValue: 'DomesticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsDomesticValue: 'string',
      value: 'string',
      overseasValue: 'string',
      httpsValue: 'string',
      httpsOverseasValue: 'string',
      timeStamp: 'string',
      domesticValue: 'string',
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
  status?: string;
  certLife?: string;
  certExpireTime?: string;
  certType?: string;
  serverCertificateStatus?: string;
  certDomainName?: string;
  certName?: string;
  certOrg?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      certLife: 'CertLife',
      certExpireTime: 'CertExpireTime',
      certType: 'CertType',
      serverCertificateStatus: 'ServerCertificateStatus',
      certDomainName: 'CertDomainName',
      certName: 'CertName',
      certOrg: 'CertOrg',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      certLife: 'string',
      certExpireTime: 'string',
      certType: 'string',
      serverCertificateStatus: 'string',
      certDomainName: 'string',
      certName: 'string',
      certOrg: 'string',
      domainName: 'string',
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
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configId: 'ConfigId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configId: 'string',
      functionName: 'string',
      functionArgs: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
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
  type?: string;
  enabled?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      enabled: 'Enabled',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      enabled: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
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
  SSLPub?: string;
  sources?: DescribeVodDomainDetailResponseBodyDomainDetailSources;
  gmtModified?: string;
  domainName?: string;
  gmtCreated?: string;
  weight?: string;
  description?: string;
  SSLProtocol?: string;
  certName?: string;
  scope?: string;
  cname?: string;
  domainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      SSLPub: 'SSLPub',
      sources: 'Sources',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
      gmtCreated: 'GmtCreated',
      weight: 'Weight',
      description: 'Description',
      SSLProtocol: 'SSLProtocol',
      certName: 'CertName',
      scope: 'Scope',
      cname: 'Cname',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLPub: 'string',
      sources: DescribeVodDomainDetailResponseBodyDomainDetailSources,
      gmtModified: 'string',
      domainName: 'string',
      gmtCreated: 'string',
      weight: 'string',
      description: 'string',
      SSLProtocol: 'string',
      certName: 'string',
      scope: 'string',
      cname: 'string',
      domainStatus: 'string',
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

export class DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  logPath?: string;
  logSize?: number;
  logName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      logPath: 'LogPath',
      logSize: 'LogSize',
      logName: 'LogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      logPath: 'string',
      logSize: 'number',
      logName: 'string',
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

export class DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
  pageInfos?: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  logCount?: number;
  domainName?: string;
  logInfos?: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  static names(): { [key: string]: string } {
    return {
      pageInfos: 'PageInfos',
      logCount: 'LogCount',
      domainName: 'DomainName',
      logInfos: 'LogInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfos: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
      logCount: 'number',
      domainName: 'string',
      logInfos: DescribeVodDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
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
  httpsDomesticValue?: string;
  value?: string;
  overseasValue?: string;
  httpsValue?: string;
  httpsOverseasValue?: string;
  timeStamp?: string;
  domesticValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpsDomesticValue: 'HttpsDomesticValue',
      value: 'Value',
      overseasValue: 'OverseasValue',
      httpsValue: 'HttpsValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      timeStamp: 'TimeStamp',
      domesticValue: 'DomesticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsDomesticValue: 'string',
      value: 'string',
      overseasValue: 'string',
      httpsValue: 'string',
      httpsOverseasValue: 'string',
      timeStamp: 'string',
      domesticValue: 'string',
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
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
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
  status?: string;
  creationTime?: string;
  objectType?: string;
  process?: string;
  description?: string;
  objectPath?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      objectType: 'ObjectType',
      process: 'Process',
      description: 'Description',
      objectPath: 'ObjectPath',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      objectType: 'string',
      process: 'string',
      description: 'string',
      objectPath: 'string',
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
  storageUtilization?: string;
  timeStamp?: string;
  networkOut?: string;
  static names(): { [key: string]: string } {
    return {
      storageUtilization: 'StorageUtilization',
      timeStamp: 'TimeStamp',
      networkOut: 'NetworkOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageUtilization: 'string',
      timeStamp: 'string',
      networkOut: 'string',
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

export class DescribeVodTagResourcesRequestTag extends $tea.Model {
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

export class DescribeVodTagResourcesResponseBodyTagResourcesTag extends $tea.Model {
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

export class DescribeVodTagResourcesResponseBodyTagResources extends $tea.Model {
  tag?: DescribeVodTagResourcesResponseBodyTagResourcesTag[];
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVodTagResourcesResponseBodyTagResourcesTag },
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemDataDataItem extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
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
  type?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
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
  gmtCreated?: string;
  sslProtocol?: string;
  description?: string;
  sandbox?: string;
  cname?: string;
  domainStatus?: string;
  sources?: DescribeVodUserDomainsResponseBodyDomainsPageDataSources;
  gmtModified?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      sslProtocol: 'SslProtocol',
      description: 'Description',
      sandbox: 'Sandbox',
      cname: 'Cname',
      domainStatus: 'DomainStatus',
      sources: 'Sources',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      sslProtocol: 'string',
      description: 'string',
      sandbox: 'string',
      cname: 'string',
      domainStatus: 'string',
      sources: DescribeVodUserDomainsResponseBodyDomainsPageDataSources,
      gmtModified: 'string',
      domainName: 'string',
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

export class DescribeVodUserTagsResponseBodyTags extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICaptionExtractionJobsResponseBodyAICaptionExtractionJobList extends $tea.Model {
  status?: string;
  creationTime?: string;
  videoId?: string;
  jobId?: string;
  userData?: string;
  code?: string;
  AICaptionExtractionResult?: string;
  message?: string;
  templateConfig?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      videoId: 'VideoId',
      jobId: 'JobId',
      userData: 'UserData',
      code: 'Code',
      AICaptionExtractionResult: 'AICaptionExtractionResult',
      message: 'Message',
      templateConfig: 'TemplateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      videoId: 'string',
      jobId: 'string',
      userData: 'string',
      code: 'string',
      AICaptionExtractionResult: 'string',
      message: 'string',
      templateConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIImageJobsResponseBodyAIImageJobList extends $tea.Model {
  status?: string;
  creationTime?: string;
  AIImageResult?: string;
  videoId?: string;
  jobId?: string;
  userData?: string;
  code?: string;
  message?: string;
  templateConfig?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      AIImageResult: 'AIImageResult',
      videoId: 'VideoId',
      jobId: 'JobId',
      userData: 'UserData',
      code: 'Code',
      message: 'Message',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      AIImageResult: 'string',
      videoId: 'string',
      jobId: 'string',
      userData: 'string',
      code: 'string',
      message: 'string',
      templateConfig: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult extends $tea.Model {
  suggestion?: string;
  score?: string;
  label?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      score: 'Score',
      label: 'Label',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      score: 'string',
      label: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult extends $tea.Model {
  type?: string;
  suggestion?: string;
  result?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult[];
  url?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      suggestion: 'Suggestion',
      result: 'Result',
      url: 'Url',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      suggestion: 'string',
      result: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult },
      url: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult extends $tea.Model {
  suggestion?: string;
  score?: string;
  label?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      score: 'Score',
      label: 'Label',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      score: 'string',
      label: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult extends $tea.Model {
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList[];
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult extends $tea.Model {
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList[];
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult extends $tea.Model {
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList[];
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult extends $tea.Model {
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList[];
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult extends $tea.Model {
  suggestion?: string;
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList[];
  averageScore?: string;
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult extends $tea.Model {
  logoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult;
  suggestion?: string;
  liveResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult;
  pornResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult;
  adResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult;
  label?: string;
  terrorismResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult;
  static names(): { [key: string]: string } {
    return {
      logoResult: 'LogoResult',
      suggestion: 'Suggestion',
      liveResult: 'LiveResult',
      pornResult: 'PornResult',
      adResult: 'AdResult',
      label: 'Label',
      terrorismResult: 'TerrorismResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult,
      suggestion: 'string',
      liveResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult,
      pornResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult,
      adResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult,
      label: 'string',
      terrorismResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult extends $tea.Model {
  type?: string;
  suggestion?: string;
  score?: string;
  label?: string;
  content?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      suggestion: 'Suggestion',
      score: 'Score',
      label: 'Label',
      content: 'Content',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      suggestion: 'string',
      score: 'string',
      label: 'string',
      content: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJobData extends $tea.Model {
  suggestion?: string;
  imageResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult[];
  audioResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult[];
  videoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult;
  abnormalModules?: string;
  label?: string;
  textResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult[];
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      imageResult: 'ImageResult',
      audioResult: 'AudioResult',
      videoResult: 'VideoResult',
      abnormalModules: 'AbnormalModules',
      label: 'Label',
      textResult: 'TextResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      imageResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult },
      audioResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult },
      videoResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult,
      abnormalModules: 'string',
      label: 'string',
      textResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBodyMediaAuditJob extends $tea.Model {
  creationTime?: string;
  type?: string;
  status?: string;
  data?: GetAIMediaAuditJobResponseBodyMediaAuditJobData;
  completeTime?: string;
  jobId?: string;
  code?: string;
  message?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      type: 'Type',
      status: 'Status',
      data: 'Data',
      completeTime: 'CompleteTime',
      jobId: 'JobId',
      code: 'Code',
      message: 'Message',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      type: 'string',
      status: 'string',
      data: GetAIMediaAuditJobResponseBodyMediaAuditJobData,
      completeTime: 'string',
      jobId: 'string',
      code: 'string',
      message: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITemplateResponseBodyTemplateInfo extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  templateType?: string;
  templateConfig?: string;
  templateName?: string;
  source?: string;
  templateId?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      templateType: 'TemplateType',
      templateConfig: 'TemplateConfig',
      templateName: 'TemplateName',
      source: 'Source',
      templateId: 'TemplateId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      templateType: 'string',
      templateConfig: 'string',
      templateName: 'string',
      source: 'string',
      templateId: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultTime extends $tea.Model {
  times?: string[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      times: 'Times',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      times: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultKeyword extends $tea.Model {
  times?: string[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      times: 'Times',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      times: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
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

export class GetAIVideoTagResultResponseBodyVideoTagResultPerson extends $tea.Model {
  faceUrl?: string;
  times?: string[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      faceUrl: 'FaceUrl',
      times: 'Times',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceUrl: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultLocation extends $tea.Model {
  times?: string[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      times: 'Times',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      times: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResult extends $tea.Model {
  time?: GetAIVideoTagResultResponseBodyVideoTagResultTime[];
  keyword?: GetAIVideoTagResultResponseBodyVideoTagResultKeyword[];
  category?: GetAIVideoTagResultResponseBodyVideoTagResultCategory[];
  person?: GetAIVideoTagResultResponseBodyVideoTagResultPerson[];
  location?: GetAIVideoTagResultResponseBodyVideoTagResultLocation[];
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      keyword: 'Keyword',
      category: 'Category',
      person: 'Person',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultTime },
      keyword: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultKeyword },
      category: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultCategory },
      person: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultPerson },
      location: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultLocation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosResponseBodyAppInfoList extends $tea.Model {
  type?: string;
  status?: string;
  creationTime?: string;
  appName?: string;
  description?: string;
  appId?: string;
  modificationTime?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      creationTime: 'CreationTime',
      appName: 'AppName',
      description: 'Description',
      appId: 'AppId',
      modificationTime: 'ModificationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      creationTime: 'string',
      appName: 'string',
      description: 'string',
      appId: 'string',
      modificationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBodyAttachedMediaListCategories extends $tea.Model {
  parentId?: number;
  cateName?: string;
  cateId?: number;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      cateName: 'CateName',
      cateId: 'CateId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'number',
      cateName: 'string',
      cateId: 'number',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBodyAttachedMediaList extends $tea.Model {
  status?: string;
  creationTime?: string;
  storageLocation?: string;
  type?: string;
  tags?: string;
  modificationTime?: string;
  mediaId?: string;
  description?: string;
  categories?: GetAttachedMediaInfoResponseBodyAttachedMediaListCategories[];
  appId?: string;
  URL?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      storageLocation: 'StorageLocation',
      type: 'Type',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      mediaId: 'MediaId',
      description: 'Description',
      categories: 'Categories',
      appId: 'AppId',
      URL: 'URL',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      storageLocation: 'string',
      type: 'string',
      tags: 'string',
      modificationTime: 'string',
      mediaId: 'string',
      description: 'string',
      categories: { 'type': 'array', 'itemType': GetAttachedMediaInfoResponseBodyAttachedMediaListCategories },
      appId: 'string',
      URL: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditHistoryResponseBodyHistories extends $tea.Model {
  status?: string;
  creationTime?: string;
  comment?: string;
  reason?: string;
  auditor?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      comment: 'Comment',
      reason: 'Reason',
      auditor: 'Auditor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      comment: 'string',
      reason: 'string',
      auditor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBodyCategory extends $tea.Model {
  type?: string;
  parentId?: number;
  cateName?: string;
  cateId?: number;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      parentId: 'ParentId',
      cateName: 'CateName',
      cateId: 'CateId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      parentId: 'number',
      cateName: 'string',
      cateId: 'number',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBodySubCategoriesCategory extends $tea.Model {
  type?: string;
  cateName?: string;
  parentId?: number;
  cateId?: number;
  subTotal?: number;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      cateName: 'CateName',
      parentId: 'ParentId',
      cateId: 'CateId',
      subTotal: 'SubTotal',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      cateName: 'string',
      parentId: 'number',
      cateId: 'number',
      subTotal: 'number',
      level: 'number',
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
  templateType?: string;
  templateConfig?: string;
  templateName?: string;
  source?: string;
  templateId?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      templateType: 'TemplateType',
      templateConfig: 'TemplateConfig',
      templateName: 'TemplateName',
      source: 'Source',
      templateId: 'TemplateId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      templateType: 'string',
      templateConfig: 'string',
      templateName: 'string',
      source: 'string',
      templateId: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponseBodyProject extends $tea.Model {
  storageLocation?: string;
  status?: string;
  creationTime?: string;
  modifiedTime?: string;
  description?: string;
  coverURL?: string;
  projectId?: string;
  timeline?: string;
  title?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      storageLocation: 'StorageLocation',
      status: 'Status',
      creationTime: 'CreationTime',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      coverURL: 'CoverURL',
      projectId: 'ProjectId',
      timeline: 'Timeline',
      title: 'Title',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageLocation: 'string',
      status: 'string',
      creationTime: 'string',
      modifiedTime: 'string',
      description: 'string',
      coverURL: 'string',
      projectId: 'string',
      timeline: 'string',
      title: 'string',
      regionId: 'string',
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

export class GetEditingProjectMaterialsResponseBodyMaterialListMaterial extends $tea.Model {
  creationTime?: string;
  status?: string;
  sprites?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites;
  cateId?: number;
  tags?: string;
  materialType?: string;
  spriteConfig?: string;
  source?: string;
  snapshots?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots;
  cateName?: string;
  modifiedTime?: string;
  description?: string;
  materialId?: string;
  size?: number;
  coverURL?: string;
  duration?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      sprites: 'Sprites',
      cateId: 'CateId',
      tags: 'Tags',
      materialType: 'MaterialType',
      spriteConfig: 'SpriteConfig',
      source: 'Source',
      snapshots: 'Snapshots',
      cateName: 'CateName',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      materialId: 'MaterialId',
      size: 'Size',
      coverURL: 'CoverURL',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      sprites: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites,
      cateId: 'number',
      tags: 'string',
      materialType: 'string',
      spriteConfig: 'string',
      source: 'string',
      snapshots: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots,
      cateName: 'string',
      modifiedTime: 'string',
      description: 'string',
      materialId: 'string',
      size: 'number',
      coverURL: 'string',
      duration: 'number',
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
  fileURL?: string;
  width?: number;
  height?: number;
  originalFileName?: string;
  fileSize?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      width: 'Width',
      height: 'Height',
      originalFileName: 'OriginalFileName',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      width: 'number',
      height: 'number',
      originalFileName: 'string',
      fileSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageInfoResponseBodyImageInfo extends $tea.Model {
  mezzanine?: GetImageInfoResponseBodyImageInfoMezzanine;
  status?: string;
  storageLocation?: string;
  creationTime?: string;
  cateId?: number;
  tags?: string;
  cateName?: string;
  imageType?: string;
  description?: string;
  appId?: string;
  URL?: string;
  title?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      mezzanine: 'Mezzanine',
      status: 'Status',
      storageLocation: 'StorageLocation',
      creationTime: 'CreationTime',
      cateId: 'CateId',
      tags: 'Tags',
      cateName: 'CateName',
      imageType: 'ImageType',
      description: 'Description',
      appId: 'AppId',
      URL: 'URL',
      title: 'Title',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mezzanine: GetImageInfoResponseBodyImageInfoMezzanine,
      status: 'string',
      storageLocation: 'string',
      creationTime: 'string',
      cateId: 'number',
      tags: 'string',
      cateName: 'string',
      imageType: 'string',
      description: 'string',
      appId: 'string',
      URL: 'string',
      title: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetailList extends $tea.Model {
  endTime?: number;
  startTime?: number;
  text?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      text: 'Text',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      text: 'string',
      label: 'string',
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

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult extends $tea.Model {
  suggestion?: string;
  score?: string;
  label?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      score: 'Score',
      label: 'Label',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      score: 'string',
      label: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResult extends $tea.Model {
  type?: string;
  suggestion?: string;
  result?: GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult[];
  url?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      suggestion: 'Suggestion',
      result: 'Result',
      url: 'Url',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      suggestion: 'string',
      result: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult },
      url: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultAudioResult extends $tea.Model {
  suggestion?: string;
  score?: string;
  label?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      score: 'Score',
      label: 'Label',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      score: 'string',
      label: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult extends $tea.Model {
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList[];
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult extends $tea.Model {
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList[];
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult extends $tea.Model {
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList[];
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult extends $tea.Model {
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList[];
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList extends $tea.Model {
  url?: string;
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList extends $tea.Model {
  label?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult extends $tea.Model {
  suggestion?: string;
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList[];
  averageScore?: string;
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList[];
  label?: string;
  maxScore?: string;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      topList: 'TopList',
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList },
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList },
      label: 'string',
      maxScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResult extends $tea.Model {
  logoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult;
  suggestion?: string;
  liveResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult;
  pornResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult;
  adResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult;
  label?: string;
  terrorismResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult;
  static names(): { [key: string]: string } {
    return {
      logoResult: 'LogoResult',
      suggestion: 'Suggestion',
      liveResult: 'LiveResult',
      pornResult: 'PornResult',
      adResult: 'AdResult',
      label: 'Label',
      terrorismResult: 'TerrorismResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult,
      suggestion: 'string',
      liveResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult,
      pornResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult,
      adResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult,
      label: 'string',
      terrorismResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultTextResult extends $tea.Model {
  type?: string;
  suggestion?: string;
  score?: string;
  label?: string;
  content?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      suggestion: 'Suggestion',
      score: 'Score',
      label: 'Label',
      content: 'Content',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      suggestion: 'string',
      score: 'string',
      label: 'string',
      content: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResult extends $tea.Model {
  suggestion?: string;
  imageResult?: GetMediaAuditResultResponseBodyMediaAuditResultImageResult[];
  audioResult?: GetMediaAuditResultResponseBodyMediaAuditResultAudioResult[];
  videoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResult;
  abnormalModules?: string;
  label?: string;
  textResult?: GetMediaAuditResultResponseBodyMediaAuditResultTextResult[];
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      imageResult: 'ImageResult',
      audioResult: 'AudioResult',
      videoResult: 'VideoResult',
      abnormalModules: 'AbnormalModules',
      label: 'Label',
      textResult: 'TextResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      imageResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultImageResult },
      audioResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultAudioResult },
      videoResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResult,
      abnormalModules: 'string',
      label: 'string',
      textResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultTextResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList extends $tea.Model {
  terrorismScore?: string;
  adLabel?: string;
  pornScore?: string;
  pornLabel?: string;
  liveLabel?: string;
  url?: string;
  timestamp?: string;
  liveScore?: string;
  adScore?: string;
  logoScore?: string;
  logoLabel?: string;
  terrorismLabel?: string;
  static names(): { [key: string]: string } {
    return {
      terrorismScore: 'TerrorismScore',
      adLabel: 'AdLabel',
      pornScore: 'PornScore',
      pornLabel: 'PornLabel',
      liveLabel: 'LiveLabel',
      url: 'Url',
      timestamp: 'Timestamp',
      liveScore: 'LiveScore',
      adScore: 'AdScore',
      logoScore: 'LogoScore',
      logoLabel: 'LogoLabel',
      terrorismLabel: 'TerrorismLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terrorismScore: 'string',
      adLabel: 'string',
      pornScore: 'string',
      pornLabel: 'string',
      liveLabel: 'string',
      url: 'string',
      timestamp: 'string',
      liveScore: 'string',
      adScore: 'string',
      logoScore: 'string',
      logoLabel: 'string',
      terrorismLabel: 'string',
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

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive extends $tea.Model {
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd extends $tea.Model {
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo extends $tea.Model {
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism extends $tea.Model {
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn extends $tea.Model {
  score?: string;
  timestamp?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      timestamp: 'Timestamp',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'string',
      timestamp: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline extends $tea.Model {
  live?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive[];
  ad?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd[];
  logo?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo[];
  terrorism?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism[];
  porn?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn[];
  static names(): { [key: string]: string } {
    return {
      live: 'Live',
      ad: 'Ad',
      logo: 'Logo',
      terrorism: 'Terrorism',
      porn: 'Porn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      live: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive },
      ad: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd },
      logo: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo },
      terrorism: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism },
      porn: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetailDuplication extends $tea.Model {
  start?: string;
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetailInput extends $tea.Model {
  start?: string;
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      duration: 'string',
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
  primaryKey?: string;
  similarity?: string;
  detail?: GetMediaDNAResultResponseBodyDNAResultVideoDNADetail[];
  static names(): { [key: string]: string } {
    return {
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryKey: 'string',
      similarity: 'string',
      detail: { 'type': 'array', 'itemType': GetMediaDNAResultResponseBodyDNAResultVideoDNADetail },
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

export class GetMessageCallbackResponseBodyMessageCallback extends $tea.Model {
  callbackType?: string;
  callbackURL?: string;
  eventTypeList?: string;
  appId?: string;
  mnsQueueName?: string;
  authKey?: string;
  authSwitch?: string;
  mnsEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      appId: 'AppId',
      mnsQueueName: 'MnsQueueName',
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      mnsEndpoint: 'MnsEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
      appId: 'string',
      mnsQueueName: 'string',
      authKey: 'string',
      authSwitch: 'string',
      mnsEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBodyMezzanineVideoStreamList extends $tea.Model {
  index?: string;
  timebase?: string;
  avgFPS?: string;
  pixFmt?: string;
  sar?: string;
  lang?: string;
  codecLongName?: string;
  height?: string;
  numFrames?: string;
  rotate?: string;
  bitrate?: string;
  codecTagString?: string;
  hasBFrames?: string;
  profile?: string;
  startTime?: string;
  dar?: string;
  codecName?: string;
  width?: string;
  duration?: string;
  fps?: string;
  codecTag?: string;
  codecTimeBase?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      timebase: 'Timebase',
      avgFPS: 'AvgFPS',
      pixFmt: 'PixFmt',
      sar: 'Sar',
      lang: 'Lang',
      codecLongName: 'CodecLongName',
      height: 'Height',
      numFrames: 'NumFrames',
      rotate: 'Rotate',
      bitrate: 'Bitrate',
      codecTagString: 'CodecTagString',
      hasBFrames: 'HasBFrames',
      profile: 'Profile',
      startTime: 'StartTime',
      dar: 'Dar',
      codecName: 'CodecName',
      width: 'Width',
      duration: 'Duration',
      fps: 'Fps',
      codecTag: 'CodecTag',
      codecTimeBase: 'CodecTimeBase',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      timebase: 'string',
      avgFPS: 'string',
      pixFmt: 'string',
      sar: 'string',
      lang: 'string',
      codecLongName: 'string',
      height: 'string',
      numFrames: 'string',
      rotate: 'string',
      bitrate: 'string',
      codecTagString: 'string',
      hasBFrames: 'string',
      profile: 'string',
      startTime: 'string',
      dar: 'string',
      codecName: 'string',
      width: 'string',
      duration: 'string',
      fps: 'string',
      codecTag: 'string',
      codecTimeBase: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBodyMezzanineAudioStreamList extends $tea.Model {
  timebase?: string;
  index?: string;
  sampleRate?: string;
  sampleFmt?: string;
  channelLayout?: string;
  lang?: string;
  codecLongName?: string;
  channels?: string;
  numFrames?: string;
  bitrate?: string;
  codecTagString?: string;
  startTime?: string;
  codecName?: string;
  duration?: string;
  codecTag?: string;
  codecTimeBase?: string;
  static names(): { [key: string]: string } {
    return {
      timebase: 'Timebase',
      index: 'Index',
      sampleRate: 'SampleRate',
      sampleFmt: 'SampleFmt',
      channelLayout: 'ChannelLayout',
      lang: 'Lang',
      codecLongName: 'CodecLongName',
      channels: 'Channels',
      numFrames: 'NumFrames',
      bitrate: 'Bitrate',
      codecTagString: 'CodecTagString',
      startTime: 'StartTime',
      codecName: 'CodecName',
      duration: 'Duration',
      codecTag: 'CodecTag',
      codecTimeBase: 'CodecTimeBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timebase: 'string',
      index: 'string',
      sampleRate: 'string',
      sampleFmt: 'string',
      channelLayout: 'string',
      lang: 'string',
      codecLongName: 'string',
      channels: 'string',
      numFrames: 'string',
      bitrate: 'string',
      codecTagString: 'string',
      startTime: 'string',
      codecName: 'string',
      duration: 'string',
      codecTag: 'string',
      codecTimeBase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBodyMezzanine extends $tea.Model {
  status?: string;
  creationTime?: string;
  videoStreamList?: GetMezzanineInfoResponseBodyMezzanineVideoStreamList[];
  fileURL?: string;
  videoId?: string;
  height?: number;
  fileName?: string;
  bitrate?: string;
  audioStreamList?: GetMezzanineInfoResponseBodyMezzanineAudioStreamList[];
  outputType?: string;
  width?: number;
  size?: number;
  duration?: string;
  fps?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      videoStreamList: 'VideoStreamList',
      fileURL: 'FileURL',
      videoId: 'VideoId',
      height: 'Height',
      fileName: 'FileName',
      bitrate: 'Bitrate',
      audioStreamList: 'AudioStreamList',
      outputType: 'OutputType',
      width: 'Width',
      size: 'Size',
      duration: 'Duration',
      fps: 'Fps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      videoStreamList: { 'type': 'array', 'itemType': GetMezzanineInfoResponseBodyMezzanineVideoStreamList },
      fileURL: 'string',
      videoId: 'string',
      height: 'number',
      fileName: 'string',
      bitrate: 'string',
      audioStreamList: { 'type': 'array', 'itemType': GetMezzanineInfoResponseBodyMezzanineAudioStreamList },
      outputType: 'string',
      width: 'number',
      size: 'number',
      duration: 'string',
      fps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyVideoBase extends $tea.Model {
  creationTime?: string;
  status?: string;
  videoId?: string;
  coverURL?: string;
  duration?: string;
  title?: string;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      videoId: 'VideoId',
      coverURL: 'CoverURL',
      duration: 'Duration',
      title: 'Title',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      videoId: 'string',
      coverURL: 'string',
      duration: 'string',
      title: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyPlayInfoListPlayInfo extends $tea.Model {
  status?: string;
  creationTime?: string;
  specification?: string;
  narrowBandType?: string;
  height?: number;
  bitrate?: string;
  modificationTime?: string;
  watermarkId?: string;
  encrypt?: number;
  definition?: string;
  encryptType?: string;
  streamType?: string;
  jobId?: string;
  size?: number;
  width?: number;
  fps?: string;
  duration?: string;
  playURL?: string;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      specification: 'Specification',
      narrowBandType: 'NarrowBandType',
      height: 'Height',
      bitrate: 'Bitrate',
      modificationTime: 'ModificationTime',
      watermarkId: 'WatermarkId',
      encrypt: 'Encrypt',
      definition: 'Definition',
      encryptType: 'EncryptType',
      streamType: 'StreamType',
      jobId: 'JobId',
      size: 'Size',
      width: 'Width',
      fps: 'Fps',
      duration: 'Duration',
      playURL: 'PlayURL',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      specification: 'string',
      narrowBandType: 'string',
      height: 'number',
      bitrate: 'string',
      modificationTime: 'string',
      watermarkId: 'string',
      encrypt: 'number',
      definition: 'string',
      encryptType: 'string',
      streamType: 'string',
      jobId: 'string',
      size: 'number',
      width: 'number',
      fps: 'string',
      duration: 'string',
      playURL: 'string',
      format: 'string',
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

export class GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList extends $tea.Model {
  creationTime?: string;
  errorMessage?: string;
  height?: string;
  transcodeProgress?: number;
  bitrate?: string;
  transcodeTemplateId?: string;
  errorCode?: string;
  watermarkIdList?: string[];
  width?: string;
  completeTime?: string;
  duration?: string;
  fps?: string;
  transcodeJobStatus?: string;
  filesize?: number;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      height: 'Height',
      transcodeProgress: 'TranscodeProgress',
      bitrate: 'Bitrate',
      transcodeTemplateId: 'TranscodeTemplateId',
      errorCode: 'ErrorCode',
      watermarkIdList: 'WatermarkIdList',
      width: 'Width',
      completeTime: 'CompleteTime',
      duration: 'Duration',
      fps: 'Fps',
      transcodeJobStatus: 'TranscodeJobStatus',
      filesize: 'Filesize',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorMessage: 'string',
      height: 'string',
      transcodeProgress: 'number',
      bitrate: 'string',
      transcodeTemplateId: 'string',
      errorCode: 'string',
      watermarkIdList: { 'type': 'array', 'itemType': 'string' },
      width: 'string',
      completeTime: 'string',
      duration: 'string',
      fps: 'string',
      transcodeJobStatus: 'string',
      filesize: 'number',
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponseBodyTranscodeSummaryList extends $tea.Model {
  creationTime?: string;
  transcodeJobInfoSummaryList?: GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList[];
  videoId?: string;
  completeTime?: string;
  transcodeStatus?: string;
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      transcodeJobInfoSummaryList: 'TranscodeJobInfoSummaryList',
      videoId: 'VideoId',
      completeTime: 'CompleteTime',
      transcodeStatus: 'TranscodeStatus',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      transcodeJobInfoSummaryList: { 'type': 'array', 'itemType': GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList },
      videoId: 'string',
      completeTime: 'string',
      transcodeStatus: 'string',
      transcodeTemplateGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile extends $tea.Model {
  videoStreamList?: string;
  outputFileUrl?: string;
  encryption?: string;
  subtitleStreamList?: string;
  height?: string;
  bitrate?: string;
  audioStreamList?: string;
  watermarkIdList?: string[];
  width?: string;
  duration?: string;
  fps?: string;
  format?: string;
  filesize?: number;
  static names(): { [key: string]: string } {
    return {
      videoStreamList: 'VideoStreamList',
      outputFileUrl: 'OutputFileUrl',
      encryption: 'Encryption',
      subtitleStreamList: 'SubtitleStreamList',
      height: 'Height',
      bitrate: 'Bitrate',
      audioStreamList: 'AudioStreamList',
      watermarkIdList: 'WatermarkIdList',
      width: 'Width',
      duration: 'Duration',
      fps: 'Fps',
      format: 'Format',
      filesize: 'Filesize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStreamList: 'string',
      outputFileUrl: 'string',
      encryption: 'string',
      subtitleStreamList: 'string',
      height: 'string',
      bitrate: 'string',
      audioStreamList: 'string',
      watermarkIdList: { 'type': 'array', 'itemType': 'string' },
      width: 'string',
      duration: 'string',
      fps: 'string',
      format: 'string',
      filesize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList extends $tea.Model {
  creationTime?: string;
  errorMessage?: string;
  outputFile?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile;
  transcodeProgress?: number;
  priority?: string;
  transcodeTemplateId?: string;
  transcodeJobId?: string;
  definition?: string;
  inputFileUrl?: string;
  errorCode?: string;
  completeTime?: string;
  transcodeJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      outputFile: 'OutputFile',
      transcodeProgress: 'TranscodeProgress',
      priority: 'Priority',
      transcodeTemplateId: 'TranscodeTemplateId',
      transcodeJobId: 'TranscodeJobId',
      definition: 'Definition',
      inputFileUrl: 'InputFileUrl',
      errorCode: 'ErrorCode',
      completeTime: 'CompleteTime',
      transcodeJobStatus: 'TranscodeJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorMessage: 'string',
      outputFile: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile,
      transcodeProgress: 'number',
      priority: 'string',
      transcodeTemplateId: 'string',
      transcodeJobId: 'string',
      definition: 'string',
      inputFileUrl: 'string',
      errorCode: 'string',
      completeTime: 'string',
      transcodeJobStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTask extends $tea.Model {
  creationTime?: string;
  trigger?: string;
  taskStatus?: string;
  videoId?: string;
  completeTime?: string;
  transcodeTemplateGroupId?: string;
  transcodeTaskId?: string;
  transcodeJobInfoList?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      trigger: 'Trigger',
      taskStatus: 'TaskStatus',
      videoId: 'VideoId',
      completeTime: 'CompleteTime',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTaskId: 'TranscodeTaskId',
      transcodeJobInfoList: 'TranscodeJobInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      trigger: 'string',
      taskStatus: 'string',
      videoId: 'string',
      completeTime: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTaskId: 'string',
      transcodeJobInfoList: { 'type': 'array', 'itemType': GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList extends $tea.Model {
  video?: string;
  type?: string;
  transConfig?: string;
  transcodeTemplateId?: string;
  rotate?: string;
  encryptSetting?: string;
  templateName?: string;
  audio?: string;
  container?: string;
  transcodeFileRegular?: string;
  definition?: string;
  clip?: string;
  packageSetting?: string;
  watermarkIds?: string[];
  subtitleList?: string;
  muxConfig?: string;
  static names(): { [key: string]: string } {
    return {
      video: 'Video',
      type: 'Type',
      transConfig: 'TransConfig',
      transcodeTemplateId: 'TranscodeTemplateId',
      rotate: 'Rotate',
      encryptSetting: 'EncryptSetting',
      templateName: 'TemplateName',
      audio: 'Audio',
      container: 'Container',
      transcodeFileRegular: 'TranscodeFileRegular',
      definition: 'Definition',
      clip: 'Clip',
      packageSetting: 'PackageSetting',
      watermarkIds: 'WatermarkIds',
      subtitleList: 'SubtitleList',
      muxConfig: 'MuxConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video: 'string',
      type: 'string',
      transConfig: 'string',
      transcodeTemplateId: 'string',
      rotate: 'string',
      encryptSetting: 'string',
      templateName: 'string',
      audio: 'string',
      container: 'string',
      transcodeFileRegular: 'string',
      definition: 'string',
      clip: 'string',
      packageSetting: 'string',
      watermarkIds: { 'type': 'array', 'itemType': 'string' },
      subtitleList: 'string',
      muxConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroup extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  appId?: string;
  transcodeTemplateList?: GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList[];
  transcodeTemplateGroupId?: string;
  name?: string;
  modifyTime?: string;
  locked?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      appId: 'AppId',
      transcodeTemplateList: 'TranscodeTemplateList',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      name: 'Name',
      modifyTime: 'ModifyTime',
      locked: 'Locked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      appId: 'string',
      transcodeTemplateList: { 'type': 'array', 'itemType': GetTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupTranscodeTemplateList },
      transcodeTemplateGroupId: 'string',
      name: 'string',
      modifyTime: 'string',
      locked: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsResponseBodyUploadDetails extends $tea.Model {
  uploadSource?: string;
  creationTime?: string;
  status?: string;
  uploadIP?: string;
  deviceModel?: string;
  modificationTime?: string;
  completionTime?: string;
  mediaId?: string;
  uploadSize?: number;
  uploadRatio?: number;
  uploadStatus?: string;
  title?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      uploadSource: 'UploadSource',
      creationTime: 'CreationTime',
      status: 'Status',
      uploadIP: 'UploadIP',
      deviceModel: 'DeviceModel',
      modificationTime: 'ModificationTime',
      completionTime: 'CompletionTime',
      mediaId: 'MediaId',
      uploadSize: 'UploadSize',
      uploadRatio: 'UploadRatio',
      uploadStatus: 'UploadStatus',
      title: 'Title',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadSource: 'string',
      creationTime: 'string',
      status: 'string',
      uploadIP: 'string',
      deviceModel: 'string',
      modificationTime: 'string',
      completionTime: 'string',
      mediaId: 'string',
      uploadSize: 'number',
      uploadRatio: 'number',
      uploadStatus: 'string',
      title: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetURLUploadInfosResponseBodyURLUploadInfoList extends $tea.Model {
  creationTime?: string;
  status?: string;
  errorMessage?: string;
  errorCode?: string;
  completeTime?: string;
  jobId?: string;
  userData?: string;
  uploadURL?: string;
  mediaId?: string;
  fileSize?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      completeTime: 'CompleteTime',
      jobId: 'JobId',
      userData: 'UserData',
      uploadURL: 'UploadURL',
      mediaId: 'MediaId',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      completeTime: 'string',
      jobId: 'string',
      userData: 'string',
      uploadURL: 'string',
      mediaId: 'string',
      fileSize: 'string',
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
  status?: string;
  creationTime?: string;
  storageLocation?: string;
  cateId?: number;
  tags?: string;
  modificationTime?: string;
  description?: string;
  appId?: string;
  coverURL?: string;
  templateGroupId?: string;
  auditStatus?: string;
  videoId?: string;
  snapshots?: GetVideoInfoResponseBodyVideoSnapshots;
  regionId?: string;
  customMediaInfo?: string;
  cateName?: string;
  size?: number;
  duration?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      storageLocation: 'StorageLocation',
      cateId: 'CateId',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      description: 'Description',
      appId: 'AppId',
      coverURL: 'CoverURL',
      templateGroupId: 'TemplateGroupId',
      auditStatus: 'AuditStatus',
      videoId: 'VideoId',
      snapshots: 'Snapshots',
      regionId: 'RegionId',
      customMediaInfo: 'CustomMediaInfo',
      cateName: 'CateName',
      size: 'Size',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      storageLocation: 'string',
      cateId: 'number',
      tags: 'string',
      modificationTime: 'string',
      description: 'string',
      appId: 'string',
      coverURL: 'string',
      templateGroupId: 'string',
      auditStatus: 'string',
      videoId: 'string',
      snapshots: GetVideoInfoResponseBodyVideoSnapshots,
      regionId: 'string',
      customMediaInfo: 'string',
      cateName: 'string',
      size: 'number',
      duration: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosResponseBodyVideoList extends $tea.Model {
  status?: string;
  creationTime?: string;
  storageLocation?: string;
  cateId?: number;
  videoId?: string;
  tags?: string;
  modificationTime?: string;
  snapshots?: string[];
  cateName?: string;
  description?: string;
  appId?: string;
  size?: number;
  coverURL?: string;
  templateGroupId?: string;
  duration?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      storageLocation: 'StorageLocation',
      cateId: 'CateId',
      videoId: 'VideoId',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      snapshots: 'Snapshots',
      cateName: 'CateName',
      description: 'Description',
      appId: 'AppId',
      size: 'Size',
      coverURL: 'CoverURL',
      templateGroupId: 'TemplateGroupId',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      storageLocation: 'string',
      cateId: 'number',
      videoId: 'string',
      tags: 'string',
      modificationTime: 'string',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      cateName: 'string',
      description: 'string',
      appId: 'string',
      size: 'number',
      coverURL: 'string',
      templateGroupId: 'string',
      duration: 'number',
      title: 'string',
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
  creationTime?: string;
  status?: string;
  storageLocation?: string;
  cateId?: number;
  videoId?: string;
  tags?: string;
  modificationTime?: string;
  snapshots?: GetVideoListResponseBodyVideoListVideoSnapshots;
  cateName?: string;
  description?: string;
  appId?: string;
  size?: number;
  coverURL?: string;
  duration?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      cateId: 'CateId',
      videoId: 'VideoId',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      snapshots: 'Snapshots',
      cateName: 'CateName',
      description: 'Description',
      appId: 'AppId',
      size: 'Size',
      coverURL: 'CoverURL',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      cateId: 'number',
      videoId: 'string',
      tags: 'string',
      modificationTime: 'string',
      snapshots: GetVideoListResponseBodyVideoListVideoSnapshots,
      cateName: 'string',
      description: 'string',
      appId: 'string',
      size: 'number',
      coverURL: 'string',
      duration: 'number',
      title: 'string',
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
  status?: string;
  videoId?: string;
  coverURL?: string;
  duration?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      videoId: 'VideoId',
      coverURL: 'CoverURL',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      videoId: 'string',
      coverURL: 'string',
      duration: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodTemplateResponseBodyVodTemplateInfo extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  templateType?: string;
  vodTemplateId?: string;
  templateConfig?: string;
  name?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      templateType: 'TemplateType',
      vodTemplateId: 'VodTemplateId',
      templateConfig: 'TemplateConfig',
      name: 'Name',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      templateType: 'string',
      vodTemplateId: 'string',
      templateConfig: 'string',
      name: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponseBodyWatermarkInfo extends $tea.Model {
  creationTime?: string;
  type?: string;
  isDefault?: string;
  fileUrl?: string;
  appId?: string;
  watermarkConfig?: string;
  name?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      type: 'Type',
      isDefault: 'IsDefault',
      fileUrl: 'FileUrl',
      appId: 'AppId',
      watermarkConfig: 'WatermarkConfig',
      name: 'Name',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      type: 'string',
      isDefault: 'string',
      fileUrl: 'string',
      appId: 'string',
      watermarkConfig: 'string',
      name: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIImageInfoResponseBodyAIImageInfoList extends $tea.Model {
  creationTime?: string;
  AIImageInfoId?: string;
  fileURL?: string;
  version?: string;
  videoId?: string;
  jobId?: string;
  score?: string;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      AIImageInfoId: 'AIImageInfoId',
      fileURL: 'FileURL',
      version: 'Version',
      videoId: 'VideoId',
      jobId: 'JobId',
      score: 'Score',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      AIImageInfoId: 'string',
      fileURL: 'string',
      version: 'string',
      videoId: 'string',
      jobId: 'string',
      score: 'string',
      format: 'string',
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

export class ListAIJobResponseBodyAIJobListAIJob extends $tea.Model {
  creationTime?: string;
  status?: string;
  type?: string;
  data?: string;
  completeTime?: string;
  jobId?: string;
  code?: string;
  message?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      type: 'Type',
      data: 'Data',
      completeTime: 'CompleteTime',
      jobId: 'JobId',
      code: 'Code',
      message: 'Message',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      type: 'string',
      data: 'string',
      completeTime: 'string',
      jobId: 'string',
      code: 'string',
      message: 'string',
      mediaId: 'string',
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

export class ListAITemplateResponseBodyTemplateInfoList extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  templateType?: string;
  templateConfig?: string;
  templateName?: string;
  source?: string;
  templateId?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      templateType: 'TemplateType',
      templateConfig: 'TemplateConfig',
      templateName: 'TemplateName',
      source: 'Source',
      templateId: 'TemplateId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      templateType: 'string',
      templateConfig: 'string',
      templateName: 'string',
      source: 'string',
      templateId: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInfoResponseBodyAppInfoList extends $tea.Model {
  type?: string;
  status?: string;
  creationTime?: string;
  appName?: string;
  description?: string;
  appId?: string;
  modificationTime?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      creationTime: 'CreationTime',
      appName: 'AppName',
      description: 'Description',
      appId: 'AppId',
      modificationTime: 'ModificationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      creationTime: 'string',
      appName: 'string',
      description: 'string',
      appId: 'string',
      modificationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityResponseBodyAppPolicyList extends $tea.Model {
  creationTime?: string;
  description?: string;
  appId?: string;
  policyValue?: string;
  policyName?: string;
  modificationTime?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      appId: 'AppId',
      policyValue: 'PolicyValue',
      policyName: 'PolicyName',
      modificationTime: 'ModificationTime',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      appId: 'string',
      policyValue: 'string',
      policyName: 'string',
      modificationTime: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditSecurityIpResponseBodySecurityIpList extends $tea.Model {
  creationTime?: string;
  securityGroupName?: string;
  ips?: string;
  modificationTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      securityGroupName: 'SecurityGroupName',
      ips: 'Ips',
      modificationTime: 'ModificationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      securityGroupName: 'string',
      ips: 'string',
      modificationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageResponseBodyDynamicImageList extends $tea.Model {
  creationTime?: string;
  fileURL?: string;
  videoId?: string;
  width?: string;
  jobId?: string;
  height?: string;
  fps?: string;
  duration?: string;
  format?: string;
  dynamicImageId?: string;
  fileSize?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      fileURL: 'FileURL',
      videoId: 'VideoId',
      width: 'Width',
      jobId: 'JobId',
      height: 'Height',
      fps: 'Fps',
      duration: 'Duration',
      format: 'Format',
      dynamicImageId: 'DynamicImageId',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      fileURL: 'string',
      videoId: 'string',
      width: 'string',
      jobId: 'string',
      height: 'string',
      fps: 'string',
      duration: 'string',
      format: 'string',
      dynamicImageId: 'string',
      fileSize: 'string',
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
  status?: string;
  creationTime?: string;
  cateId?: number;
  videoId?: string;
  tags?: string;
  snapshots?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots;
  cateName?: string;
  description?: string;
  size?: number;
  coverURL?: string;
  templateGroupId?: string;
  duration?: number;
  title?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      cateId: 'CateId',
      videoId: 'VideoId',
      tags: 'Tags',
      snapshots: 'Snapshots',
      cateName: 'CateName',
      description: 'Description',
      size: 'Size',
      coverURL: 'CoverURL',
      templateGroupId: 'TemplateGroupId',
      duration: 'Duration',
      title: 'Title',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      cateId: 'number',
      videoId: 'string',
      tags: 'string',
      snapshots: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots,
      cateName: 'string',
      description: 'string',
      size: 'number',
      coverURL: 'string',
      templateGroupId: 'string',
      duration: 'number',
      title: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideo extends $tea.Model {
  video?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo;
  appName?: string;
  playlistId?: string;
  streamName?: string;
  recordEndTime?: string;
  recordStartTime?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      video: 'Video',
      appName: 'AppName',
      playlistId: 'PlaylistId',
      streamName: 'StreamName',
      recordEndTime: 'RecordEndTime',
      recordStartTime: 'RecordStartTime',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo,
      appName: 'string',
      playlistId: 'string',
      streamName: 'string',
      recordEndTime: 'string',
      recordStartTime: 'string',
      domainName: 'string',
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

export class ListMediaDNADeleteJobResponseBodyNonExistAIJobIds extends $tea.Model {
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

export class ListMediaDNADeleteJobResponseBodyAIJobListAIJob extends $tea.Model {
  status?: string;
  jobId?: string;
  code?: string;
  message?: string;
  mediaId?: string;
  fpDBId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      jobId: 'JobId',
      code: 'Code',
      message: 'Message',
      mediaId: 'MediaId',
      fpDBId: 'FpDBId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      jobId: 'string',
      code: 'string',
      message: 'string',
      mediaId: 'string',
      fpDBId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNADeleteJobResponseBodyAIJobList extends $tea.Model {
  AIJob?: ListMediaDNADeleteJobResponseBodyAIJobListAIJob[];
  static names(): { [key: string]: string } {
    return {
      AIJob: 'AIJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJob: { 'type': 'array', 'itemType': ListMediaDNADeleteJobResponseBodyAIJobListAIJob },
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
  total?: number;
  snapshots?: ListSnapshotsResponseBodyMediaSnapshotSnapshots;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      jobId: 'JobId',
      regular: 'Regular',
      total: 'Total',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      jobId: 'string',
      regular: 'string',
      total: 'number',
      snapshots: ListSnapshotsResponseBodyMediaSnapshotSnapshots,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTaskResponseBodyTranscodeTaskList extends $tea.Model {
  creationTime?: string;
  trigger?: string;
  taskStatus?: string;
  videoId?: string;
  completeTime?: string;
  transcodeTemplateGroupId?: string;
  transcodeTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      trigger: 'Trigger',
      taskStatus: 'TaskStatus',
      videoId: 'VideoId',
      completeTime: 'CompleteTime',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTaskId: 'TranscodeTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      trigger: 'string',
      taskStatus: 'string',
      videoId: 'string',
      completeTime: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupList extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  appId?: string;
  transcodeTemplateGroupId?: string;
  name?: string;
  modifyTime?: string;
  locked?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      appId: 'AppId',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      name: 'Name',
      modifyTime: 'ModifyTime',
      locked: 'Locked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      appId: 'string',
      transcodeTemplateGroupId: 'string',
      name: 'string',
      modifyTime: 'string',
      locked: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVodTemplateResponseBodyVodTemplateInfoList extends $tea.Model {
  creationTime?: string;
  isDefault?: string;
  appId?: string;
  templateType?: string;
  vodTemplateId?: string;
  templateConfig?: string;
  name?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      appId: 'AppId',
      templateType: 'TemplateType',
      vodTemplateId: 'VodTemplateId',
      templateConfig: 'TemplateConfig',
      name: 'Name',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      appId: 'string',
      templateType: 'string',
      vodTemplateId: 'string',
      templateConfig: 'string',
      name: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarkResponseBodyWatermarkInfos extends $tea.Model {
  creationTime?: string;
  type?: string;
  isDefault?: string;
  fileUrl?: string;
  appId?: string;
  watermarkConfig?: string;
  name?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      type: 'Type',
      isDefault: 'IsDefault',
      fileUrl: 'FileUrl',
      appId: 'AppId',
      watermarkConfig: 'WatermarkConfig',
      name: 'Name',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      type: 'string',
      isDefault: 'string',
      fileUrl: 'string',
      appId: 'string',
      watermarkConfig: 'string',
      name: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaResponseBodyRegisteredMediaList extends $tea.Model {
  newRegister?: boolean;
  fileURL?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      newRegister: 'NewRegister',
      fileURL: 'FileURL',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newRegister: 'boolean',
      fileURL: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBodyProjectListProject extends $tea.Model {
  storageLocation?: string;
  status?: string;
  creationTime?: string;
  modifiedTime?: string;
  description?: string;
  coverURL?: string;
  projectId?: string;
  duration?: number;
  title?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      storageLocation: 'StorageLocation',
      status: 'Status',
      creationTime: 'CreationTime',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      coverURL: 'CoverURL',
      projectId: 'ProjectId',
      duration: 'Duration',
      title: 'Title',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageLocation: 'string',
      status: 'string',
      creationTime: 'string',
      modifiedTime: 'string',
      description: 'string',
      coverURL: 'string',
      projectId: 'string',
      duration: 'number',
      title: 'string',
      regionId: 'string',
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

export class SearchMediaResponseBodyMediaListVideo extends $tea.Model {
  status?: string;
  creationTime?: string;
  storageLocation?: string;
  cateId?: number;
  tags?: string;
  modificationTime?: string;
  mediaSource?: string;
  description?: string;
  appId?: string;
  coverURL?: string;
  videoId?: string;
  downloadSwitch?: string;
  snapshots?: string[];
  transcodeMode?: string;
  cateName?: string;
  preprocessStatus?: string;
  spriteSnapshots?: string[];
  size?: number;
  duration?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      storageLocation: 'StorageLocation',
      cateId: 'CateId',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      mediaSource: 'MediaSource',
      description: 'Description',
      appId: 'AppId',
      coverURL: 'CoverURL',
      videoId: 'VideoId',
      downloadSwitch: 'DownloadSwitch',
      snapshots: 'Snapshots',
      transcodeMode: 'TranscodeMode',
      cateName: 'CateName',
      preprocessStatus: 'PreprocessStatus',
      spriteSnapshots: 'SpriteSnapshots',
      size: 'Size',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      storageLocation: 'string',
      cateId: 'number',
      tags: 'string',
      modificationTime: 'string',
      mediaSource: 'string',
      description: 'string',
      appId: 'string',
      coverURL: 'string',
      videoId: 'string',
      downloadSwitch: 'string',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      transcodeMode: 'string',
      cateName: 'string',
      preprocessStatus: 'string',
      spriteSnapshots: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
      duration: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAttachedMediaCategories extends $tea.Model {
  parentId?: number;
  cateName?: string;
  cateId?: number;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      cateName: 'CateName',
      cateId: 'CateId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'number',
      cateName: 'string',
      cateId: 'number',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAttachedMedia extends $tea.Model {
  storageLocation?: string;
  status?: string;
  creationTime?: string;
  tags?: string;
  modificationTime?: string;
  mediaId?: string;
  businessType?: string;
  description?: string;
  categories?: SearchMediaResponseBodyMediaListAttachedMediaCategories[];
  appId?: string;
  URL?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      storageLocation: 'StorageLocation',
      status: 'Status',
      creationTime: 'CreationTime',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      mediaId: 'MediaId',
      businessType: 'BusinessType',
      description: 'Description',
      categories: 'Categories',
      appId: 'AppId',
      URL: 'URL',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageLocation: 'string',
      status: 'string',
      creationTime: 'string',
      tags: 'string',
      modificationTime: 'string',
      mediaId: 'string',
      businessType: 'string',
      description: 'string',
      categories: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaListAttachedMediaCategories },
      appId: 'string',
      URL: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListImage extends $tea.Model {
  status?: string;
  creationTime?: string;
  storageLocation?: string;
  cateId?: number;
  tags?: string;
  modificationTime?: string;
  cateName?: string;
  description?: string;
  appId?: string;
  URL?: string;
  title?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      storageLocation: 'StorageLocation',
      cateId: 'CateId',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      cateName: 'CateName',
      description: 'Description',
      appId: 'AppId',
      URL: 'URL',
      title: 'Title',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      storageLocation: 'string',
      cateId: 'number',
      tags: 'string',
      modificationTime: 'string',
      cateName: 'string',
      description: 'string',
      appId: 'string',
      URL: 'string',
      title: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAudio extends $tea.Model {
  status?: string;
  creationTime?: string;
  storageLocation?: string;
  cateId?: number;
  tags?: string;
  modificationTime?: string;
  mediaSource?: string;
  description?: string;
  appId?: string;
  coverURL?: string;
  audioId?: string;
  downloadSwitch?: string;
  snapshots?: string[];
  transcodeMode?: string;
  cateName?: string;
  preprocessStatus?: string;
  spriteSnapshots?: string[];
  size?: number;
  duration?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      storageLocation: 'StorageLocation',
      cateId: 'CateId',
      tags: 'Tags',
      modificationTime: 'ModificationTime',
      mediaSource: 'MediaSource',
      description: 'Description',
      appId: 'AppId',
      coverURL: 'CoverURL',
      audioId: 'AudioId',
      downloadSwitch: 'DownloadSwitch',
      snapshots: 'Snapshots',
      transcodeMode: 'TranscodeMode',
      cateName: 'CateName',
      preprocessStatus: 'PreprocessStatus',
      spriteSnapshots: 'SpriteSnapshots',
      size: 'Size',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      storageLocation: 'string',
      cateId: 'number',
      tags: 'string',
      modificationTime: 'string',
      mediaSource: 'string',
      description: 'string',
      appId: 'string',
      coverURL: 'string',
      audioId: 'string',
      downloadSwitch: 'string',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      transcodeMode: 'string',
      cateName: 'string',
      preprocessStatus: 'string',
      spriteSnapshots: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
      duration: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaList extends $tea.Model {
  creationTime?: string;
  video?: SearchMediaResponseBodyMediaListVideo;
  attachedMedia?: SearchMediaResponseBodyMediaListAttachedMedia;
  image?: SearchMediaResponseBodyMediaListImage;
  mediaType?: string;
  audio?: SearchMediaResponseBodyMediaListAudio;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      video: 'Video',
      attachedMedia: 'AttachedMedia',
      image: 'Image',
      mediaType: 'MediaType',
      audio: 'Audio',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      video: SearchMediaResponseBodyMediaListVideo,
      attachedMedia: SearchMediaResponseBodyMediaListAttachedMedia,
      image: SearchMediaResponseBodyMediaListImage,
      mediaType: 'string',
      audio: SearchMediaResponseBodyMediaListAudio,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIJobResponseBodyAIJobListAIJob extends $tea.Model {
  type?: string;
  jobId?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      jobId: 'JobId',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      jobId: 'string',
      mediaId: 'string',
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

export class TagVodResourcesRequestTag extends $tea.Model {
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
  type?: string;
  isDefault?: string;
  fileUrl?: string;
  watermarkConfig?: string;
  name?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      type: 'Type',
      isDefault: 'IsDefault',
      fileUrl: 'FileUrl',
      watermarkConfig: 'WatermarkConfig',
      name: 'Name',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      type: 'string',
      isDefault: 'string',
      fileUrl: 'string',
      watermarkConfig: 'string',
      name: 'string',
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
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "vod.cn-shanghai.aliyuncs.com",
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
      'cn-hangzhou-bj-b01': "vod.aliyuncs.com",
      'cn-hangzhou-finance': "vod.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "vod.aliyuncs.com",
      'cn-hangzhou-test-306': "vod.aliyuncs.com",
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
      'cn-zhangbei-na61-b01': "vod.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "vod.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "vod.aliyuncs.com",
      'eu-west-1-oxs': "vod.aliyuncs.com",
      'me-east-1': "vod.aliyuncs.com",
      'rus-west-1-pop': "vod.aliyuncs.com",
      'us-east-1': "vod.aliyuncs.com",
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAITemplateResponse>(await this.doRPCRequest("AddAITemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddAITemplateResponse({}));
  }

  async addAITemplate(request: AddAITemplateRequest): Promise<AddAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAITemplateWithOptions(request, runtime);
  }

  async addCategoryWithOptions(request: AddCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCategoryResponse>(await this.doRPCRequest("AddCategory", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddCategoryResponse({}));
  }

  async addCategory(request: AddCategoryRequest): Promise<AddCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCategoryWithOptions(request, runtime);
  }

  async addEditingProjectWithOptions(request: AddEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<AddEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEditingProjectResponse>(await this.doRPCRequest("AddEditingProject", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddEditingProjectResponse({}));
  }

  async addEditingProject(request: AddEditingProjectRequest): Promise<AddEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEditingProjectWithOptions(request, runtime);
  }

  async addTranscodeTemplateGroupWithOptions(request: AddTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTranscodeTemplateGroupResponse>(await this.doRPCRequest("AddTranscodeTemplateGroup", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddTranscodeTemplateGroupResponse({}));
  }

  async addTranscodeTemplateGroup(request: AddTranscodeTemplateGroupRequest): Promise<AddTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async addVodDomainWithOptions(request: AddVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddVodDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVodDomainResponse>(await this.doRPCRequest("AddVodDomain", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddVodDomainResponse({}));
  }

  async addVodDomain(request: AddVodDomainRequest): Promise<AddVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVodDomainWithOptions(request, runtime);
  }

  async addVodTemplateWithOptions(request: AddVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddVodTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVodTemplateResponse>(await this.doRPCRequest("AddVodTemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddVodTemplateResponse({}));
  }

  async addVodTemplate(request: AddVodTemplateRequest): Promise<AddVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVodTemplateWithOptions(request, runtime);
  }

  async addWatermarkWithOptions(request: AddWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<AddWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddWatermarkResponse>(await this.doRPCRequest("AddWatermark", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddWatermarkResponse({}));
  }

  async addWatermark(request: AddWatermarkRequest): Promise<AddWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addWatermarkWithOptions(request, runtime);
  }

  async attachAppPolicyToIdentityWithOptions(request: AttachAppPolicyToIdentityRequest, runtime: $Util.RuntimeOptions): Promise<AttachAppPolicyToIdentityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachAppPolicyToIdentityResponse>(await this.doRPCRequest("AttachAppPolicyToIdentity", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new AttachAppPolicyToIdentityResponse({}));
  }

  async attachAppPolicyToIdentity(request: AttachAppPolicyToIdentityRequest): Promise<AttachAppPolicyToIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachAppPolicyToIdentityWithOptions(request, runtime);
  }

  async batchSetVodDomainConfigsWithOptions(request: BatchSetVodDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetVodDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetVodDomainConfigsResponse>(await this.doRPCRequest("BatchSetVodDomainConfigs", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetVodDomainConfigsResponse({}));
  }

  async batchSetVodDomainConfigs(request: BatchSetVodDomainConfigsRequest): Promise<BatchSetVodDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetVodDomainConfigsWithOptions(request, runtime);
  }

  async batchStartVodDomainWithOptions(request: BatchStartVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartVodDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStartVodDomainResponse>(await this.doRPCRequest("BatchStartVodDomain", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStartVodDomainResponse({}));
  }

  async batchStartVodDomain(request: BatchStartVodDomainRequest): Promise<BatchStartVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartVodDomainWithOptions(request, runtime);
  }

  async batchStopVodDomainWithOptions(request: BatchStopVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopVodDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStopVodDomainResponse>(await this.doRPCRequest("BatchStopVodDomain", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStopVodDomainResponse({}));
  }

  async batchStopVodDomain(request: BatchStopVodDomainRequest): Promise<BatchStopVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopVodDomainWithOptions(request, runtime);
  }

  async createAppInfoWithOptions(request: CreateAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppInfoResponse>(await this.doRPCRequest("CreateAppInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppInfoResponse({}));
  }

  async createAppInfo(request: CreateAppInfoRequest): Promise<CreateAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppInfoWithOptions(request, runtime);
  }

  async createAuditWithOptions(request: CreateAuditRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuditResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAuditResponse>(await this.doRPCRequest("CreateAudit", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAuditResponse({}));
  }

  async createAudit(request: CreateAuditRequest): Promise<CreateAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuditWithOptions(request, runtime);
  }

  async createUploadAttachedMediaWithOptions(request: CreateUploadAttachedMediaRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadAttachedMediaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUploadAttachedMediaResponse>(await this.doRPCRequest("CreateUploadAttachedMedia", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUploadAttachedMediaResponse({}));
  }

  async createUploadAttachedMedia(request: CreateUploadAttachedMediaRequest): Promise<CreateUploadAttachedMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadAttachedMediaWithOptions(request, runtime);
  }

  async createUploadImageWithOptions(request: CreateUploadImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUploadImageResponse>(await this.doRPCRequest("CreateUploadImage", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUploadImageResponse({}));
  }

  async createUploadImage(request: CreateUploadImageRequest): Promise<CreateUploadImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadImageWithOptions(request, runtime);
  }

  async createUploadVideoWithOptions(request: CreateUploadVideoRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUploadVideoResponse>(await this.doRPCRequest("CreateUploadVideo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUploadVideoResponse({}));
  }

  async createUploadVideo(request: CreateUploadVideoRequest): Promise<CreateUploadVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadVideoWithOptions(request, runtime);
  }

  async deleteAIImageInfosWithOptions(request: DeleteAIImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAIImageInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAIImageInfosResponse>(await this.doRPCRequest("DeleteAIImageInfos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAIImageInfosResponse({}));
  }

  async deleteAIImageInfos(request: DeleteAIImageInfosRequest): Promise<DeleteAIImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAIImageInfosWithOptions(request, runtime);
  }

  async deleteAITemplateWithOptions(request: DeleteAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAITemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAITemplateResponse>(await this.doRPCRequest("DeleteAITemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAITemplateResponse({}));
  }

  async deleteAITemplate(request: DeleteAITemplateRequest): Promise<DeleteAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAITemplateWithOptions(request, runtime);
  }

  async deleteAppInfoWithOptions(request: DeleteAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppInfoResponse>(await this.doRPCRequest("DeleteAppInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppInfoResponse({}));
  }

  async deleteAppInfo(request: DeleteAppInfoRequest): Promise<DeleteAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppInfoWithOptions(request, runtime);
  }

  async deleteAttachedMediaWithOptions(request: DeleteAttachedMediaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAttachedMediaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAttachedMediaResponse>(await this.doRPCRequest("DeleteAttachedMedia", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAttachedMediaResponse({}));
  }

  async deleteAttachedMedia(request: DeleteAttachedMediaRequest): Promise<DeleteAttachedMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAttachedMediaWithOptions(request, runtime);
  }

  async deleteCategoryWithOptions(request: DeleteCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCategoryResponse>(await this.doRPCRequest("DeleteCategory", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCategoryResponse({}));
  }

  async deleteCategory(request: DeleteCategoryRequest): Promise<DeleteCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  async deleteDynamicImageWithOptions(request: DeleteDynamicImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDynamicImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDynamicImageResponse>(await this.doRPCRequest("DeleteDynamicImage", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDynamicImageResponse({}));
  }

  async deleteDynamicImage(request: DeleteDynamicImageRequest): Promise<DeleteDynamicImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDynamicImageWithOptions(request, runtime);
  }

  async deleteEditingProjectWithOptions(request: DeleteEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEditingProjectResponse>(await this.doRPCRequest("DeleteEditingProject", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEditingProjectResponse({}));
  }

  async deleteEditingProject(request: DeleteEditingProjectRequest): Promise<DeleteEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteImageResponse>(await this.doRPCRequest("DeleteImage", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteMessageCallbackWithOptions(request: DeleteMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMessageCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMessageCallbackResponse>(await this.doRPCRequest("DeleteMessageCallback", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMessageCallbackResponse({}));
  }

  async deleteMessageCallback(request: DeleteMessageCallbackRequest): Promise<DeleteMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMessageCallbackWithOptions(request, runtime);
  }

  async deleteMezzaninesWithOptions(request: DeleteMezzaninesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMezzaninesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMezzaninesResponse>(await this.doRPCRequest("DeleteMezzanines", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMezzaninesResponse({}));
  }

  async deleteMezzanines(request: DeleteMezzaninesRequest): Promise<DeleteMezzaninesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMezzaninesWithOptions(request, runtime);
  }

  async deleteMultipartUploadWithOptions(request: DeleteMultipartUploadRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMultipartUploadResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMultipartUploadResponse>(await this.doRPCRequest("DeleteMultipartUpload", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMultipartUploadResponse({}));
  }

  async deleteMultipartUpload(request: DeleteMultipartUploadRequest): Promise<DeleteMultipartUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMultipartUploadWithOptions(request, runtime);
  }

  async deleteStreamWithOptions(request: DeleteStreamRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteStreamResponse>(await this.doRPCRequest("DeleteStream", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteStreamResponse({}));
  }

  async deleteStream(request: DeleteStreamRequest): Promise<DeleteStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStreamWithOptions(request, runtime);
  }

  async deleteTranscodeTemplateGroupWithOptions(request: DeleteTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTranscodeTemplateGroupResponse>(await this.doRPCRequest("DeleteTranscodeTemplateGroup", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTranscodeTemplateGroupResponse({}));
  }

  async deleteTranscodeTemplateGroup(request: DeleteTranscodeTemplateGroupRequest): Promise<DeleteTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async deleteVideoWithOptions(request: DeleteVideoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVideoResponse>(await this.doRPCRequest("DeleteVideo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVideoResponse({}));
  }

  async deleteVideo(request: DeleteVideoRequest): Promise<DeleteVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVideoWithOptions(request, runtime);
  }

  async deleteVodDomainWithOptions(request: DeleteVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVodDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVodDomainResponse>(await this.doRPCRequest("DeleteVodDomain", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVodDomainResponse({}));
  }

  async deleteVodDomain(request: DeleteVodDomainRequest): Promise<DeleteVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVodDomainWithOptions(request, runtime);
  }

  async deleteVodSpecificConfigWithOptions(request: DeleteVodSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVodSpecificConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVodSpecificConfigResponse>(await this.doRPCRequest("DeleteVodSpecificConfig", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVodSpecificConfigResponse({}));
  }

  async deleteVodSpecificConfig(request: DeleteVodSpecificConfigRequest): Promise<DeleteVodSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVodSpecificConfigWithOptions(request, runtime);
  }

  async deleteVodTemplateWithOptions(request: DeleteVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVodTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVodTemplateResponse>(await this.doRPCRequest("DeleteVodTemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVodTemplateResponse({}));
  }

  async deleteVodTemplate(request: DeleteVodTemplateRequest): Promise<DeleteVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVodTemplateWithOptions(request, runtime);
  }

  async deleteWatermarkWithOptions(request: DeleteWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWatermarkResponse>(await this.doRPCRequest("DeleteWatermark", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWatermarkResponse({}));
  }

  async deleteWatermark(request: DeleteWatermarkRequest): Promise<DeleteWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWatermarkWithOptions(request, runtime);
  }

  async describePlayTopVideosWithOptions(request: DescribePlayTopVideosRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayTopVideosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePlayTopVideosResponse>(await this.doRPCRequest("DescribePlayTopVideos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePlayTopVideosResponse({}));
  }

  async describePlayTopVideos(request: DescribePlayTopVideosRequest): Promise<DescribePlayTopVideosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayTopVideosWithOptions(request, runtime);
  }

  async describePlayUserAvgWithOptions(request: DescribePlayUserAvgRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayUserAvgResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePlayUserAvgResponse>(await this.doRPCRequest("DescribePlayUserAvg", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePlayUserAvgResponse({}));
  }

  async describePlayUserAvg(request: DescribePlayUserAvgRequest): Promise<DescribePlayUserAvgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayUserAvgWithOptions(request, runtime);
  }

  async describePlayUserTotalWithOptions(request: DescribePlayUserTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayUserTotalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePlayUserTotalResponse>(await this.doRPCRequest("DescribePlayUserTotal", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePlayUserTotalResponse({}));
  }

  async describePlayUserTotal(request: DescribePlayUserTotalRequest): Promise<DescribePlayUserTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayUserTotalWithOptions(request, runtime);
  }

  async describePlayVideoStatisWithOptions(request: DescribePlayVideoStatisRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayVideoStatisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePlayVideoStatisResponse>(await this.doRPCRequest("DescribePlayVideoStatis", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePlayVideoStatisResponse({}));
  }

  async describePlayVideoStatis(request: DescribePlayVideoStatisRequest): Promise<DescribePlayVideoStatisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayVideoStatisWithOptions(request, runtime);
  }

  async describeVodAIDataWithOptions(request: DescribeVodAIDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodAIDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodAIDataResponse>(await this.doRPCRequest("DescribeVodAIData", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodAIDataResponse({}));
  }

  async describeVodAIData(request: DescribeVodAIDataRequest): Promise<DescribeVodAIDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodAIDataWithOptions(request, runtime);
  }

  async describeVodCertificateListWithOptions(request: DescribeVodCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodCertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodCertificateListResponse>(await this.doRPCRequest("DescribeVodCertificateList", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodCertificateListResponse({}));
  }

  async describeVodCertificateList(request: DescribeVodCertificateListRequest): Promise<DescribeVodCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodCertificateListWithOptions(request, runtime);
  }

  async describeVodDomainBpsDataWithOptions(request: DescribeVodDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodDomainBpsDataResponse>(await this.doRPCRequest("DescribeVodDomainBpsData", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodDomainBpsDataResponse({}));
  }

  async describeVodDomainBpsData(request: DescribeVodDomainBpsDataRequest): Promise<DescribeVodDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainBpsDataWithOptions(request, runtime);
  }

  async describeVodDomainCertificateInfoWithOptions(request: DescribeVodDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodDomainCertificateInfoResponse>(await this.doRPCRequest("DescribeVodDomainCertificateInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodDomainCertificateInfoResponse({}));
  }

  async describeVodDomainCertificateInfo(request: DescribeVodDomainCertificateInfoRequest): Promise<DescribeVodDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeVodDomainConfigsWithOptions(request: DescribeVodDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodDomainConfigsResponse>(await this.doRPCRequest("DescribeVodDomainConfigs", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodDomainConfigsResponse({}));
  }

  async describeVodDomainConfigs(request: DescribeVodDomainConfigsRequest): Promise<DescribeVodDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainConfigsWithOptions(request, runtime);
  }

  async describeVodDomainDetailWithOptions(request: DescribeVodDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodDomainDetailResponse>(await this.doRPCRequest("DescribeVodDomainDetail", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodDomainDetailResponse({}));
  }

  async describeVodDomainDetail(request: DescribeVodDomainDetailRequest): Promise<DescribeVodDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainDetailWithOptions(request, runtime);
  }

  async describeVodDomainLogWithOptions(request: DescribeVodDomainLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodDomainLogResponse>(await this.doRPCRequest("DescribeVodDomainLog", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodDomainLogResponse({}));
  }

  async describeVodDomainLog(request: DescribeVodDomainLogRequest): Promise<DescribeVodDomainLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainLogWithOptions(request, runtime);
  }

  async describeVodDomainTrafficDataWithOptions(request: DescribeVodDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodDomainTrafficDataResponse>(await this.doRPCRequest("DescribeVodDomainTrafficData", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodDomainTrafficDataResponse({}));
  }

  async describeVodDomainTrafficData(request: DescribeVodDomainTrafficDataRequest): Promise<DescribeVodDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainTrafficDataWithOptions(request, runtime);
  }

  async describeVodDomainUsageDataWithOptions(request: DescribeVodDomainUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodDomainUsageDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodDomainUsageDataResponse>(await this.doRPCRequest("DescribeVodDomainUsageData", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodDomainUsageDataResponse({}));
  }

  async describeVodDomainUsageData(request: DescribeVodDomainUsageDataRequest): Promise<DescribeVodDomainUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodDomainUsageDataWithOptions(request, runtime);
  }

  async describeVodRefreshQuotaWithOptions(request: DescribeVodRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodRefreshQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodRefreshQuotaResponse>(await this.doRPCRequest("DescribeVodRefreshQuota", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodRefreshQuotaResponse({}));
  }

  async describeVodRefreshQuota(request: DescribeVodRefreshQuotaRequest): Promise<DescribeVodRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodRefreshQuotaWithOptions(request, runtime);
  }

  async describeVodRefreshTasksWithOptions(request: DescribeVodRefreshTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodRefreshTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodRefreshTasksResponse>(await this.doRPCRequest("DescribeVodRefreshTasks", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodRefreshTasksResponse({}));
  }

  async describeVodRefreshTasks(request: DescribeVodRefreshTasksRequest): Promise<DescribeVodRefreshTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodRefreshTasksWithOptions(request, runtime);
  }

  async describeVodStorageDataWithOptions(request: DescribeVodStorageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodStorageDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodStorageDataResponse>(await this.doRPCRequest("DescribeVodStorageData", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodStorageDataResponse({}));
  }

  async describeVodStorageData(request: DescribeVodStorageDataRequest): Promise<DescribeVodStorageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodStorageDataWithOptions(request, runtime);
  }

  async describeVodTagResourcesWithOptions(request: DescribeVodTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodTagResourcesResponse>(await this.doRPCRequest("DescribeVodTagResources", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodTagResourcesResponse({}));
  }

  async describeVodTagResources(request: DescribeVodTagResourcesRequest): Promise<DescribeVodTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodTagResourcesWithOptions(request, runtime);
  }

  async describeVodTranscodeDataWithOptions(request: DescribeVodTranscodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodTranscodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodTranscodeDataResponse>(await this.doRPCRequest("DescribeVodTranscodeData", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodTranscodeDataResponse({}));
  }

  async describeVodTranscodeData(request: DescribeVodTranscodeDataRequest): Promise<DescribeVodTranscodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodTranscodeDataWithOptions(request, runtime);
  }

  async describeVodUserDomainsWithOptions(request: DescribeVodUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodUserDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodUserDomainsResponse>(await this.doRPCRequest("DescribeVodUserDomains", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodUserDomainsResponse({}));
  }

  async describeVodUserDomains(request: DescribeVodUserDomainsRequest): Promise<DescribeVodUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodUserDomainsWithOptions(request, runtime);
  }

  async describeVodUserTagsWithOptions(request: DescribeVodUserTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodUserTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodUserTagsResponse>(await this.doRPCRequest("DescribeVodUserTags", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodUserTagsResponse({}));
  }

  async describeVodUserTags(request: DescribeVodUserTagsRequest): Promise<DescribeVodUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodUserTagsWithOptions(request, runtime);
  }

  async describeVodVerifyContentWithOptions(request: DescribeVodVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodVerifyContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodVerifyContentResponse>(await this.doRPCRequest("DescribeVodVerifyContent", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodVerifyContentResponse({}));
  }

  async describeVodVerifyContent(request: DescribeVodVerifyContentRequest): Promise<DescribeVodVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodVerifyContentWithOptions(request, runtime);
  }

  async detachAppPolicyFromIdentityWithOptions(request: DetachAppPolicyFromIdentityRequest, runtime: $Util.RuntimeOptions): Promise<DetachAppPolicyFromIdentityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachAppPolicyFromIdentityResponse>(await this.doRPCRequest("DetachAppPolicyFromIdentity", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new DetachAppPolicyFromIdentityResponse({}));
  }

  async detachAppPolicyFromIdentity(request: DetachAppPolicyFromIdentityRequest): Promise<DetachAppPolicyFromIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAppPolicyFromIdentityWithOptions(request, runtime);
  }

  async getAICaptionExtractionJobsWithOptions(request: GetAICaptionExtractionJobsRequest, runtime: $Util.RuntimeOptions): Promise<GetAICaptionExtractionJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAICaptionExtractionJobsResponse>(await this.doRPCRequest("GetAICaptionExtractionJobs", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAICaptionExtractionJobsResponse({}));
  }

  async getAICaptionExtractionJobs(request: GetAICaptionExtractionJobsRequest): Promise<GetAICaptionExtractionJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAICaptionExtractionJobsWithOptions(request, runtime);
  }

  async getAIImageJobsWithOptions(request: GetAIImageJobsRequest, runtime: $Util.RuntimeOptions): Promise<GetAIImageJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIImageJobsResponse>(await this.doRPCRequest("GetAIImageJobs", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIImageJobsResponse({}));
  }

  async getAIImageJobs(request: GetAIImageJobsRequest): Promise<GetAIImageJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIImageJobsWithOptions(request, runtime);
  }

  async getAIMediaAuditJobWithOptions(request: GetAIMediaAuditJobRequest, runtime: $Util.RuntimeOptions): Promise<GetAIMediaAuditJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIMediaAuditJobResponse>(await this.doRPCRequest("GetAIMediaAuditJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIMediaAuditJobResponse({}));
  }

  async getAIMediaAuditJob(request: GetAIMediaAuditJobRequest): Promise<GetAIMediaAuditJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIMediaAuditJobWithOptions(request, runtime);
  }

  async getAITemplateWithOptions(request: GetAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetAITemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAITemplateResponse>(await this.doRPCRequest("GetAITemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAITemplateResponse({}));
  }

  async getAITemplate(request: GetAITemplateRequest): Promise<GetAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAITemplateWithOptions(request, runtime);
  }

  async getAIVideoTagResultWithOptions(request: GetAIVideoTagResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAIVideoTagResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIVideoTagResultResponse>(await this.doRPCRequest("GetAIVideoTagResult", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIVideoTagResultResponse({}));
  }

  async getAIVideoTagResult(request: GetAIVideoTagResultRequest): Promise<GetAIVideoTagResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIVideoTagResultWithOptions(request, runtime);
  }

  async getAppInfosWithOptions(request: GetAppInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetAppInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppInfosResponse>(await this.doRPCRequest("GetAppInfos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppInfosResponse({}));
  }

  async getAppInfos(request: GetAppInfosRequest): Promise<GetAppInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppInfosWithOptions(request, runtime);
  }

  async getAttachedMediaInfoWithOptions(request: GetAttachedMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAttachedMediaInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAttachedMediaInfoResponse>(await this.doRPCRequest("GetAttachedMediaInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAttachedMediaInfoResponse({}));
  }

  async getAttachedMediaInfo(request: GetAttachedMediaInfoRequest): Promise<GetAttachedMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAttachedMediaInfoWithOptions(request, runtime);
  }

  async getAuditHistoryWithOptions(request: GetAuditHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetAuditHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuditHistoryResponse>(await this.doRPCRequest("GetAuditHistory", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuditHistoryResponse({}));
  }

  async getAuditHistory(request: GetAuditHistoryRequest): Promise<GetAuditHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditHistoryWithOptions(request, runtime);
  }

  async getCategoriesWithOptions(request: GetCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<GetCategoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCategoriesResponse>(await this.doRPCRequest("GetCategories", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetCategoriesResponse({}));
  }

  async getCategories(request: GetCategoriesRequest): Promise<GetCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCategoriesWithOptions(request, runtime);
  }

  async getDefaultAITemplateWithOptions(request: GetDefaultAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetDefaultAITemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDefaultAITemplateResponse>(await this.doRPCRequest("GetDefaultAITemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetDefaultAITemplateResponse({}));
  }

  async getDefaultAITemplate(request: GetDefaultAITemplateRequest): Promise<GetDefaultAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultAITemplateWithOptions(request, runtime);
  }

  async getEditingProjectWithOptions(request: GetEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEditingProjectResponse>(await this.doRPCRequest("GetEditingProject", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetEditingProjectResponse({}));
  }

  async getEditingProject(request: GetEditingProjectRequest): Promise<GetEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectWithOptions(request, runtime);
  }

  async getEditingProjectMaterialsWithOptions(request: GetEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEditingProjectMaterialsResponse>(await this.doRPCRequest("GetEditingProjectMaterials", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetEditingProjectMaterialsResponse({}));
  }

  async getEditingProjectMaterials(request: GetEditingProjectMaterialsRequest): Promise<GetEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectMaterialsWithOptions(request, runtime);
  }

  async getImageInfoWithOptions(request: GetImageInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetImageInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImageInfoResponse>(await this.doRPCRequest("GetImageInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetImageInfoResponse({}));
  }

  async getImageInfo(request: GetImageInfoRequest): Promise<GetImageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageInfoWithOptions(request, runtime);
  }

  async getMediaAuditAudioResultDetailWithOptions(request: GetMediaAuditAudioResultDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditAudioResultDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaAuditAudioResultDetailResponse>(await this.doRPCRequest("GetMediaAuditAudioResultDetail", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaAuditAudioResultDetailResponse({}));
  }

  async getMediaAuditAudioResultDetail(request: GetMediaAuditAudioResultDetailRequest): Promise<GetMediaAuditAudioResultDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditAudioResultDetailWithOptions(request, runtime);
  }

  async getMediaAuditResultWithOptions(request: GetMediaAuditResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaAuditResultResponse>(await this.doRPCRequest("GetMediaAuditResult", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaAuditResultResponse({}));
  }

  async getMediaAuditResult(request: GetMediaAuditResultRequest): Promise<GetMediaAuditResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditResultWithOptions(request, runtime);
  }

  async getMediaAuditResultDetailWithOptions(request: GetMediaAuditResultDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditResultDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaAuditResultDetailResponse>(await this.doRPCRequest("GetMediaAuditResultDetail", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaAuditResultDetailResponse({}));
  }

  async getMediaAuditResultDetail(request: GetMediaAuditResultDetailRequest): Promise<GetMediaAuditResultDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditResultDetailWithOptions(request, runtime);
  }

  async getMediaAuditResultTimelineWithOptions(request: GetMediaAuditResultTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaAuditResultTimelineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaAuditResultTimelineResponse>(await this.doRPCRequest("GetMediaAuditResultTimeline", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaAuditResultTimelineResponse({}));
  }

  async getMediaAuditResultTimeline(request: GetMediaAuditResultTimelineRequest): Promise<GetMediaAuditResultTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaAuditResultTimelineWithOptions(request, runtime);
  }

  async getMediaDNAResultWithOptions(request: GetMediaDNAResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaDNAResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaDNAResultResponse>(await this.doRPCRequest("GetMediaDNAResult", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaDNAResultResponse({}));
  }

  async getMediaDNAResult(request: GetMediaDNAResultRequest): Promise<GetMediaDNAResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaDNAResultWithOptions(request, runtime);
  }

  async getMessageCallbackWithOptions(request: GetMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<GetMessageCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMessageCallbackResponse>(await this.doRPCRequest("GetMessageCallback", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetMessageCallbackResponse({}));
  }

  async getMessageCallback(request: GetMessageCallbackRequest): Promise<GetMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMessageCallbackWithOptions(request, runtime);
  }

  async getMezzanineInfoWithOptions(request: GetMezzanineInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMezzanineInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMezzanineInfoResponse>(await this.doRPCRequest("GetMezzanineInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetMezzanineInfoResponse({}));
  }

  async getMezzanineInfo(request: GetMezzanineInfoRequest): Promise<GetMezzanineInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMezzanineInfoWithOptions(request, runtime);
  }

  async getPlayInfoWithOptions(request: GetPlayInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetPlayInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPlayInfoResponse>(await this.doRPCRequest("GetPlayInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetPlayInfoResponse({}));
  }

  async getPlayInfo(request: GetPlayInfoRequest): Promise<GetPlayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPlayInfoWithOptions(request, runtime);
  }

  async getTranscodeSummaryWithOptions(request: GetTranscodeSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetTranscodeSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTranscodeSummaryResponse>(await this.doRPCRequest("GetTranscodeSummary", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetTranscodeSummaryResponse({}));
  }

  async getTranscodeSummary(request: GetTranscodeSummaryRequest): Promise<GetTranscodeSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranscodeSummaryWithOptions(request, runtime);
  }

  async getTranscodeTaskWithOptions(request: GetTranscodeTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTranscodeTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTranscodeTaskResponse>(await this.doRPCRequest("GetTranscodeTask", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetTranscodeTaskResponse({}));
  }

  async getTranscodeTask(request: GetTranscodeTaskRequest): Promise<GetTranscodeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranscodeTaskWithOptions(request, runtime);
  }

  async getTranscodeTemplateGroupWithOptions(request: GetTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTranscodeTemplateGroupResponse>(await this.doRPCRequest("GetTranscodeTemplateGroup", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetTranscodeTemplateGroupResponse({}));
  }

  async getTranscodeTemplateGroup(request: GetTranscodeTemplateGroupRequest): Promise<GetTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async getUploadDetailsWithOptions(request: GetUploadDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUploadDetailsResponse>(await this.doRPCRequest("GetUploadDetails", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetUploadDetailsResponse({}));
  }

  async getUploadDetails(request: GetUploadDetailsRequest): Promise<GetUploadDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadDetailsWithOptions(request, runtime);
  }

  async getURLUploadInfosWithOptions(request: GetURLUploadInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetURLUploadInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetURLUploadInfosResponse>(await this.doRPCRequest("GetURLUploadInfos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetURLUploadInfosResponse({}));
  }

  async getURLUploadInfos(request: GetURLUploadInfosRequest): Promise<GetURLUploadInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getURLUploadInfosWithOptions(request, runtime);
  }

  async getVideoInfoWithOptions(request: GetVideoInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoInfoResponse>(await this.doRPCRequest("GetVideoInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoInfoResponse({}));
  }

  async getVideoInfo(request: GetVideoInfoRequest): Promise<GetVideoInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoInfoWithOptions(request, runtime);
  }

  async getVideoInfosWithOptions(request: GetVideoInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoInfosResponse>(await this.doRPCRequest("GetVideoInfos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoInfosResponse({}));
  }

  async getVideoInfos(request: GetVideoInfosRequest): Promise<GetVideoInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoInfosWithOptions(request, runtime);
  }

  async getVideoListWithOptions(request: GetVideoListRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoListResponse>(await this.doRPCRequest("GetVideoList", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoListResponse({}));
  }

  async getVideoList(request: GetVideoListRequest): Promise<GetVideoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoListWithOptions(request, runtime);
  }

  async getVideoPlayAuthWithOptions(request: GetVideoPlayAuthRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoPlayAuthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoPlayAuthResponse>(await this.doRPCRequest("GetVideoPlayAuth", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoPlayAuthResponse({}));
  }

  async getVideoPlayAuth(request: GetVideoPlayAuthRequest): Promise<GetVideoPlayAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoPlayAuthWithOptions(request, runtime);
  }

  async getVodTemplateWithOptions(request: GetVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetVodTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVodTemplateResponse>(await this.doRPCRequest("GetVodTemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetVodTemplateResponse({}));
  }

  async getVodTemplate(request: GetVodTemplateRequest): Promise<GetVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVodTemplateWithOptions(request, runtime);
  }

  async getWatermarkWithOptions(request: GetWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<GetWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWatermarkResponse>(await this.doRPCRequest("GetWatermark", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetWatermarkResponse({}));
  }

  async getWatermark(request: GetWatermarkRequest): Promise<GetWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWatermarkWithOptions(request, runtime);
  }

  async listAIImageInfoWithOptions(request: ListAIImageInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListAIImageInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAIImageInfoResponse>(await this.doRPCRequest("ListAIImageInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListAIImageInfoResponse({}));
  }

  async listAIImageInfo(request: ListAIImageInfoRequest): Promise<ListAIImageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAIImageInfoWithOptions(request, runtime);
  }

  async listAIJobWithOptions(request: ListAIJobRequest, runtime: $Util.RuntimeOptions): Promise<ListAIJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAIJobResponse>(await this.doRPCRequest("ListAIJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListAIJobResponse({}));
  }

  async listAIJob(request: ListAIJobRequest): Promise<ListAIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAIJobWithOptions(request, runtime);
  }

  async listAITemplateWithOptions(request: ListAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListAITemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAITemplateResponse>(await this.doRPCRequest("ListAITemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListAITemplateResponse({}));
  }

  async listAITemplate(request: ListAITemplateRequest): Promise<ListAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAITemplateWithOptions(request, runtime);
  }

  async listAppInfoWithOptions(request: ListAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListAppInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppInfoResponse>(await this.doRPCRequest("ListAppInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppInfoResponse({}));
  }

  async listAppInfo(request: ListAppInfoRequest): Promise<ListAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInfoWithOptions(request, runtime);
  }

  async listAppPoliciesForIdentityWithOptions(request: ListAppPoliciesForIdentityRequest, runtime: $Util.RuntimeOptions): Promise<ListAppPoliciesForIdentityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppPoliciesForIdentityResponse>(await this.doRPCRequest("ListAppPoliciesForIdentity", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppPoliciesForIdentityResponse({}));
  }

  async listAppPoliciesForIdentity(request: ListAppPoliciesForIdentityRequest): Promise<ListAppPoliciesForIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppPoliciesForIdentityWithOptions(request, runtime);
  }

  async listAuditSecurityIpWithOptions(request: ListAuditSecurityIpRequest, runtime: $Util.RuntimeOptions): Promise<ListAuditSecurityIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAuditSecurityIpResponse>(await this.doRPCRequest("ListAuditSecurityIp", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListAuditSecurityIpResponse({}));
  }

  async listAuditSecurityIp(request: ListAuditSecurityIpRequest): Promise<ListAuditSecurityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuditSecurityIpWithOptions(request, runtime);
  }

  async listDynamicImageWithOptions(request: ListDynamicImageRequest, runtime: $Util.RuntimeOptions): Promise<ListDynamicImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDynamicImageResponse>(await this.doRPCRequest("ListDynamicImage", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListDynamicImageResponse({}));
  }

  async listDynamicImage(request: ListDynamicImageRequest): Promise<ListDynamicImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDynamicImageWithOptions(request, runtime);
  }

  async listLiveRecordVideoWithOptions(request: ListLiveRecordVideoRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRecordVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLiveRecordVideoResponse>(await this.doRPCRequest("ListLiveRecordVideo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListLiveRecordVideoResponse({}));
  }

  async listLiveRecordVideo(request: ListLiveRecordVideoRequest): Promise<ListLiveRecordVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRecordVideoWithOptions(request, runtime);
  }

  async listMediaDNADeleteJobWithOptions(request: ListMediaDNADeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaDNADeleteJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMediaDNADeleteJobResponse>(await this.doRPCRequest("ListMediaDNADeleteJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListMediaDNADeleteJobResponse({}));
  }

  async listMediaDNADeleteJob(request: ListMediaDNADeleteJobRequest): Promise<ListMediaDNADeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaDNADeleteJobWithOptions(request, runtime);
  }

  async listSnapshotsWithOptions(request: ListSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSnapshotsResponse>(await this.doRPCRequest("ListSnapshots", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListSnapshotsResponse({}));
  }

  async listSnapshots(request: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotsWithOptions(request, runtime);
  }

  async listTranscodeTaskWithOptions(request: ListTranscodeTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListTranscodeTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTranscodeTaskResponse>(await this.doRPCRequest("ListTranscodeTask", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListTranscodeTaskResponse({}));
  }

  async listTranscodeTask(request: ListTranscodeTaskRequest): Promise<ListTranscodeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTranscodeTaskWithOptions(request, runtime);
  }

  async listTranscodeTemplateGroupWithOptions(request: ListTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTranscodeTemplateGroupResponse>(await this.doRPCRequest("ListTranscodeTemplateGroup", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListTranscodeTemplateGroupResponse({}));
  }

  async listTranscodeTemplateGroup(request: ListTranscodeTemplateGroupRequest): Promise<ListTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async listVodTemplateWithOptions(request: ListVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListVodTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVodTemplateResponse>(await this.doRPCRequest("ListVodTemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListVodTemplateResponse({}));
  }

  async listVodTemplate(request: ListVodTemplateRequest): Promise<ListVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVodTemplateWithOptions(request, runtime);
  }

  async listWatermarkWithOptions(request: ListWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<ListWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListWatermarkResponse>(await this.doRPCRequest("ListWatermark", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListWatermarkResponse({}));
  }

  async listWatermark(request: ListWatermarkRequest): Promise<ListWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWatermarkWithOptions(request, runtime);
  }

  async moveAppResourceWithOptions(request: MoveAppResourceRequest, runtime: $Util.RuntimeOptions): Promise<MoveAppResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveAppResourceResponse>(await this.doRPCRequest("MoveAppResource", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new MoveAppResourceResponse({}));
  }

  async moveAppResource(request: MoveAppResourceRequest): Promise<MoveAppResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveAppResourceWithOptions(request, runtime);
  }

  async preloadVodObjectCachesWithOptions(request: PreloadVodObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<PreloadVodObjectCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreloadVodObjectCachesResponse>(await this.doRPCRequest("PreloadVodObjectCaches", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new PreloadVodObjectCachesResponse({}));
  }

  async preloadVodObjectCaches(request: PreloadVodObjectCachesRequest): Promise<PreloadVodObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadVodObjectCachesWithOptions(request, runtime);
  }

  async produceEditingProjectVideoWithOptions(request: ProduceEditingProjectVideoRequest, runtime: $Util.RuntimeOptions): Promise<ProduceEditingProjectVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProduceEditingProjectVideoResponse>(await this.doRPCRequest("ProduceEditingProjectVideo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new ProduceEditingProjectVideoResponse({}));
  }

  async produceEditingProjectVideo(request: ProduceEditingProjectVideoRequest): Promise<ProduceEditingProjectVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.produceEditingProjectVideoWithOptions(request, runtime);
  }

  async refreshUploadVideoWithOptions(request: RefreshUploadVideoRequest, runtime: $Util.RuntimeOptions): Promise<RefreshUploadVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshUploadVideoResponse>(await this.doRPCRequest("RefreshUploadVideo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshUploadVideoResponse({}));
  }

  async refreshUploadVideo(request: RefreshUploadVideoRequest): Promise<RefreshUploadVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshUploadVideoWithOptions(request, runtime);
  }

  async refreshVodObjectCachesWithOptions(request: RefreshVodObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshVodObjectCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshVodObjectCachesResponse>(await this.doRPCRequest("RefreshVodObjectCaches", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshVodObjectCachesResponse({}));
  }

  async refreshVodObjectCaches(request: RefreshVodObjectCachesRequest): Promise<RefreshVodObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshVodObjectCachesWithOptions(request, runtime);
  }

  async registerMediaWithOptions(request: RegisterMediaRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMediaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterMediaResponse>(await this.doRPCRequest("RegisterMedia", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterMediaResponse({}));
  }

  async registerMedia(request: RegisterMediaRequest): Promise<RegisterMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerMediaWithOptions(request, runtime);
  }

  async searchEditingProjectWithOptions(request: SearchEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchEditingProjectResponse>(await this.doRPCRequest("SearchEditingProject", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SearchEditingProjectResponse({}));
  }

  async searchEditingProject(request: SearchEditingProjectRequest): Promise<SearchEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEditingProjectWithOptions(request, runtime);
  }

  async searchMediaWithOptions(request: SearchMediaRequest, runtime: $Util.RuntimeOptions): Promise<SearchMediaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchMediaResponse>(await this.doRPCRequest("SearchMedia", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SearchMediaResponse({}));
  }

  async searchMedia(request: SearchMediaRequest): Promise<SearchMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMediaWithOptions(request, runtime);
  }

  async setAuditSecurityIpWithOptions(request: SetAuditSecurityIpRequest, runtime: $Util.RuntimeOptions): Promise<SetAuditSecurityIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAuditSecurityIpResponse>(await this.doRPCRequest("SetAuditSecurityIp", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SetAuditSecurityIpResponse({}));
  }

  async setAuditSecurityIp(request: SetAuditSecurityIpRequest): Promise<SetAuditSecurityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAuditSecurityIpWithOptions(request, runtime);
  }

  async setDefaultAITemplateWithOptions(request: SetDefaultAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultAITemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDefaultAITemplateResponse>(await this.doRPCRequest("SetDefaultAITemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SetDefaultAITemplateResponse({}));
  }

  async setDefaultAITemplate(request: SetDefaultAITemplateRequest): Promise<SetDefaultAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultAITemplateWithOptions(request, runtime);
  }

  async setDefaultTranscodeTemplateGroupWithOptions(request: SetDefaultTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDefaultTranscodeTemplateGroupResponse>(await this.doRPCRequest("SetDefaultTranscodeTemplateGroup", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SetDefaultTranscodeTemplateGroupResponse({}));
  }

  async setDefaultTranscodeTemplateGroup(request: SetDefaultTranscodeTemplateGroupRequest): Promise<SetDefaultTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async setDefaultWatermarkWithOptions(request: SetDefaultWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDefaultWatermarkResponse>(await this.doRPCRequest("SetDefaultWatermark", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SetDefaultWatermarkResponse({}));
  }

  async setDefaultWatermark(request: SetDefaultWatermarkRequest): Promise<SetDefaultWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultWatermarkWithOptions(request, runtime);
  }

  async setEditingProjectMaterialsWithOptions(request: SetEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<SetEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetEditingProjectMaterialsResponse>(await this.doRPCRequest("SetEditingProjectMaterials", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SetEditingProjectMaterialsResponse({}));
  }

  async setEditingProjectMaterials(request: SetEditingProjectMaterialsRequest): Promise<SetEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEditingProjectMaterialsWithOptions(request, runtime);
  }

  async setMessageCallbackWithOptions(request: SetMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SetMessageCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetMessageCallbackResponse>(await this.doRPCRequest("SetMessageCallback", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SetMessageCallbackResponse({}));
  }

  async setMessageCallback(request: SetMessageCallbackRequest): Promise<SetMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMessageCallbackWithOptions(request, runtime);
  }

  async setVodDomainCertificateWithOptions(request: SetVodDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetVodDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetVodDomainCertificateResponse>(await this.doRPCRequest("SetVodDomainCertificate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SetVodDomainCertificateResponse({}));
  }

  async setVodDomainCertificate(request: SetVodDomainCertificateRequest): Promise<SetVodDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVodDomainCertificateWithOptions(request, runtime);
  }

  async submitAICaptionExtractionJobWithOptions(request: SubmitAICaptionExtractionJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAICaptionExtractionJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAICaptionExtractionJobResponse>(await this.doRPCRequest("SubmitAICaptionExtractionJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAICaptionExtractionJobResponse({}));
  }

  async submitAICaptionExtractionJob(request: SubmitAICaptionExtractionJobRequest): Promise<SubmitAICaptionExtractionJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAICaptionExtractionJobWithOptions(request, runtime);
  }

  async submitAIImageAuditJobWithOptions(request: SubmitAIImageAuditJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIImageAuditJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAIImageAuditJobResponse>(await this.doRPCRequest("SubmitAIImageAuditJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAIImageAuditJobResponse({}));
  }

  async submitAIImageAuditJob(request: SubmitAIImageAuditJobRequest): Promise<SubmitAIImageAuditJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIImageAuditJobWithOptions(request, runtime);
  }

  async submitAIImageJobWithOptions(request: SubmitAIImageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIImageJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAIImageJobResponse>(await this.doRPCRequest("SubmitAIImageJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAIImageJobResponse({}));
  }

  async submitAIImageJob(request: SubmitAIImageJobRequest): Promise<SubmitAIImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIImageJobWithOptions(request, runtime);
  }

  async submitAIJobWithOptions(request: SubmitAIJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAIJobResponse>(await this.doRPCRequest("SubmitAIJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAIJobResponse({}));
  }

  async submitAIJob(request: SubmitAIJobRequest): Promise<SubmitAIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIJobWithOptions(request, runtime);
  }

  async submitAIMediaAuditJobWithOptions(request: SubmitAIMediaAuditJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAIMediaAuditJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAIMediaAuditJobResponse>(await this.doRPCRequest("SubmitAIMediaAuditJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAIMediaAuditJobResponse({}));
  }

  async submitAIMediaAuditJob(request: SubmitAIMediaAuditJobRequest): Promise<SubmitAIMediaAuditJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAIMediaAuditJobWithOptions(request, runtime);
  }

  async submitDynamicImageJobWithOptions(request: SubmitDynamicImageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDynamicImageJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitDynamicImageJobResponse>(await this.doRPCRequest("SubmitDynamicImageJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitDynamicImageJobResponse({}));
  }

  async submitDynamicImageJob(request: SubmitDynamicImageJobRequest): Promise<SubmitDynamicImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDynamicImageJobWithOptions(request, runtime);
  }

  async submitMediaDNADeleteJobWithOptions(request: SubmitMediaDNADeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaDNADeleteJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitMediaDNADeleteJobResponse>(await this.doRPCRequest("SubmitMediaDNADeleteJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitMediaDNADeleteJobResponse({}));
  }

  async submitMediaDNADeleteJob(request: SubmitMediaDNADeleteJobRequest): Promise<SubmitMediaDNADeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaDNADeleteJobWithOptions(request, runtime);
  }

  async submitPreprocessJobsWithOptions(request: SubmitPreprocessJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPreprocessJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitPreprocessJobsResponse>(await this.doRPCRequest("SubmitPreprocessJobs", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitPreprocessJobsResponse({}));
  }

  async submitPreprocessJobs(request: SubmitPreprocessJobsRequest): Promise<SubmitPreprocessJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPreprocessJobsWithOptions(request, runtime);
  }

  async submitSnapshotJobWithOptions(request: SubmitSnapshotJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSnapshotJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSnapshotJobResponse>(await this.doRPCRequest("SubmitSnapshotJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSnapshotJobResponse({}));
  }

  async submitSnapshotJob(request: SubmitSnapshotJobRequest): Promise<SubmitSnapshotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  async submitTranscodeJobsWithOptions(request: SubmitTranscodeJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTranscodeJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitTranscodeJobsResponse>(await this.doRPCRequest("SubmitTranscodeJobs", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitTranscodeJobsResponse({}));
  }

  async submitTranscodeJobs(request: SubmitTranscodeJobsRequest): Promise<SubmitTranscodeJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTranscodeJobsWithOptions(request, runtime);
  }

  async submitWorkflowJobWithOptions(request: SubmitWorkflowJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitWorkflowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitWorkflowJobResponse>(await this.doRPCRequest("SubmitWorkflowJob", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitWorkflowJobResponse({}));
  }

  async submitWorkflowJob(request: SubmitWorkflowJobRequest): Promise<SubmitWorkflowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitWorkflowJobWithOptions(request, runtime);
  }

  async tagVodResourcesWithOptions(request: TagVodResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagVodResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagVodResourcesResponse>(await this.doRPCRequest("TagVodResources", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new TagVodResourcesResponse({}));
  }

  async tagVodResources(request: TagVodResourcesRequest): Promise<TagVodResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagVodResourcesWithOptions(request, runtime);
  }

  async unTagVodResourcesWithOptions(request: UnTagVodResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagVodResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnTagVodResourcesResponse>(await this.doRPCRequest("UnTagVodResources", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UnTagVodResourcesResponse({}));
  }

  async unTagVodResources(request: UnTagVodResourcesRequest): Promise<UnTagVodResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagVodResourcesWithOptions(request, runtime);
  }

  async updateAITemplateWithOptions(request: UpdateAITemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAITemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAITemplateResponse>(await this.doRPCRequest("UpdateAITemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAITemplateResponse({}));
  }

  async updateAITemplate(request: UpdateAITemplateRequest): Promise<UpdateAITemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAITemplateWithOptions(request, runtime);
  }

  async updateAppInfoWithOptions(request: UpdateAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppInfoResponse>(await this.doRPCRequest("UpdateAppInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppInfoResponse({}));
  }

  async updateAppInfo(request: UpdateAppInfoRequest): Promise<UpdateAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppInfoWithOptions(request, runtime);
  }

  async updateAttachedMediaInfosWithOptions(request: UpdateAttachedMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAttachedMediaInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAttachedMediaInfosResponse>(await this.doRPCRequest("UpdateAttachedMediaInfos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAttachedMediaInfosResponse({}));
  }

  async updateAttachedMediaInfos(request: UpdateAttachedMediaInfosRequest): Promise<UpdateAttachedMediaInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAttachedMediaInfosWithOptions(request, runtime);
  }

  async updateCategoryWithOptions(request: UpdateCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCategoryResponse>(await this.doRPCRequest("UpdateCategory", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCategoryResponse({}));
  }

  async updateCategory(request: UpdateCategoryRequest): Promise<UpdateCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  async updateEditingProjectWithOptions(request: UpdateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEditingProjectResponse>(await this.doRPCRequest("UpdateEditingProject", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEditingProjectResponse({}));
  }

  async updateEditingProject(request: UpdateEditingProjectRequest): Promise<UpdateEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEditingProjectWithOptions(request, runtime);
  }

  async updateImageInfosWithOptions(request: UpdateImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateImageInfosResponse>(await this.doRPCRequest("UpdateImageInfos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateImageInfosResponse({}));
  }

  async updateImageInfos(request: UpdateImageInfosRequest): Promise<UpdateImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageInfosWithOptions(request, runtime);
  }

  async updateTranscodeTemplateGroupWithOptions(request: UpdateTranscodeTemplateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTranscodeTemplateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTranscodeTemplateGroupResponse>(await this.doRPCRequest("UpdateTranscodeTemplateGroup", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTranscodeTemplateGroupResponse({}));
  }

  async updateTranscodeTemplateGroup(request: UpdateTranscodeTemplateGroupRequest): Promise<UpdateTranscodeTemplateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTranscodeTemplateGroupWithOptions(request, runtime);
  }

  async updateVideoInfoWithOptions(request: UpdateVideoInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVideoInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVideoInfoResponse>(await this.doRPCRequest("UpdateVideoInfo", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVideoInfoResponse({}));
  }

  async updateVideoInfo(request: UpdateVideoInfoRequest): Promise<UpdateVideoInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVideoInfoWithOptions(request, runtime);
  }

  async updateVideoInfosWithOptions(request: UpdateVideoInfosRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVideoInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVideoInfosResponse>(await this.doRPCRequest("UpdateVideoInfos", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVideoInfosResponse({}));
  }

  async updateVideoInfos(request: UpdateVideoInfosRequest): Promise<UpdateVideoInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVideoInfosWithOptions(request, runtime);
  }

  async updateVodDomainWithOptions(request: UpdateVodDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVodDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVodDomainResponse>(await this.doRPCRequest("UpdateVodDomain", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVodDomainResponse({}));
  }

  async updateVodDomain(request: UpdateVodDomainRequest): Promise<UpdateVodDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVodDomainWithOptions(request, runtime);
  }

  async updateVodTemplateWithOptions(request: UpdateVodTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVodTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVodTemplateResponse>(await this.doRPCRequest("UpdateVodTemplate", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVodTemplateResponse({}));
  }

  async updateVodTemplate(request: UpdateVodTemplateRequest): Promise<UpdateVodTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVodTemplateWithOptions(request, runtime);
  }

  async updateWatermarkWithOptions(request: UpdateWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateWatermarkResponse>(await this.doRPCRequest("UpdateWatermark", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateWatermarkResponse({}));
  }

  async updateWatermark(request: UpdateWatermarkRequest): Promise<UpdateWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWatermarkWithOptions(request, runtime);
  }

  async uploadMediaByURLWithOptions(request: UploadMediaByURLRequest, runtime: $Util.RuntimeOptions): Promise<UploadMediaByURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadMediaByURLResponse>(await this.doRPCRequest("UploadMediaByURL", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new UploadMediaByURLResponse({}));
  }

  async uploadMediaByURL(request: UploadMediaByURLRequest): Promise<UploadMediaByURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMediaByURLWithOptions(request, runtime);
  }

  async verifyVodDomainOwnerWithOptions(request: VerifyVodDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyVodDomainOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyVodDomainOwnerResponse>(await this.doRPCRequest("VerifyVodDomainOwner", "2017-03-21", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyVodDomainOwnerResponse({}));
  }

  async verifyVodDomainOwner(request: VerifyVodDomainOwnerRequest): Promise<VerifyVodDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyVodDomainOwnerWithOptions(request, runtime);
  }

}
