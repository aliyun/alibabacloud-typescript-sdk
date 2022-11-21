// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class AddEditingProjectMaterialsRequest extends $tea.Model {
  materialMaps?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      materialMaps: 'MaterialMaps',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialMaps: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBody extends $tea.Model {
  liveMaterials?: AddEditingProjectMaterialsResponseBodyLiveMaterials[];
  mediaInfos?: AddEditingProjectMaterialsResponseBodyMediaInfos[];
  projectId?: string;
  projectMaterials?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveMaterials: 'LiveMaterials',
      mediaInfos: 'MediaInfos',
      projectId: 'ProjectId',
      projectMaterials: 'ProjectMaterials',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveMaterials: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyLiveMaterials },
      mediaInfos: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMediaInfos },
      projectId: 'string',
      projectMaterials: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddEditingProjectMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFavoritePublicMediaRequest extends $tea.Model {
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

export class AddFavoritePublicMediaResponseBody extends $tea.Model {
  ignoredList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFavoritePublicMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFavoritePublicMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFavoritePublicMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateRequest extends $tea.Model {
  config?: string;
  coverUrl?: string;
  name?: string;
  previewMedia?: string;
  relatedMediaids?: string;
  source?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      relatedMediaids: 'RelatedMediaids',
      source: 'Source',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      coverUrl: 'string',
      name: 'string',
      previewMedia: 'string',
      relatedMediaids: 'string',
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: AddTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: AddTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosRequest extends $tea.Model {
  additionType?: string;
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: 'string',
      mediaIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBody extends $tea.Model {
  mediaInfos?: BatchGetMediaInfosResponseBodyMediaInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfos: 'MediaInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfos: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchGetMediaInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetMediaInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFavoritePublicMediaRequest extends $tea.Model {
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

export class CancelFavoritePublicMediaResponseBody extends $tea.Model {
  ignoredList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFavoritePublicMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelFavoritePublicMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelFavoritePublicMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuditRequest extends $tea.Model {
  appId?: string;
  auditContent?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      auditContent: 'AuditContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

export class CreateCustomTemplateRequest extends $tea.Model {
  name?: string;
  subtype?: number;
  templateConfig?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subtype: 'Subtype',
      templateConfig: 'TemplateConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subtype: 'number',
      templateConfig: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomTemplateResponseBody extends $tea.Model {
  customTemplate?: CreateCustomTemplateResponseBodyCustomTemplate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customTemplate: 'CustomTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplate: CreateCustomTemplateResponseBodyCustomTemplate,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCustomTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEditingProjectRequest extends $tea.Model {
  businessConfig?: string;
  clipsParam?: string;
  coverURL?: string;
  description?: string;
  materialMaps?: string;
  projectType?: string;
  templateId?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      clipsParam: 'ClipsParam',
      coverURL: 'CoverURL',
      description: 'Description',
      materialMaps: 'MaterialMaps',
      projectType: 'ProjectType',
      templateId: 'TemplateId',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      clipsParam: 'string',
      coverURL: 'string',
      description: 'string',
      materialMaps: 'string',
      projectType: 'string',
      templateId: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEditingProjectResponseBody extends $tea.Model {
  project?: CreateEditingProjectResponseBodyProject;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: CreateEditingProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRecordTemplateRequest extends $tea.Model {
  name?: string;
  recordFormat?: CreateLiveRecordTemplateRequestRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormat: { 'type': 'array', 'itemType': CreateLiveRecordTemplateRequestRecordFormat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRecordTemplateShrinkRequest extends $tea.Model {
  name?: string;
  recordFormatShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormatShrink: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormatShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRecordTemplateResponseBody extends $tea.Model {
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

export class CreateLiveRecordTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLiveRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLiveRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveSnapshotTemplateRequest extends $tea.Model {
  overwriteFormat?: string;
  sequenceFormat?: string;
  templateName?: string;
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      overwriteFormat: 'OverwriteFormat',
      sequenceFormat: 'SequenceFormat',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteFormat: 'string',
      sequenceFormat: 'string',
      templateName: 'string',
      timeInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveSnapshotTemplateResponseBody extends $tea.Model {
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

export class CreateLiveSnapshotTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLiveSnapshotTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLiveSnapshotTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveTranscodeTemplateRequest extends $tea.Model {
  name?: string;
  templateConfig?: CreateLiveTranscodeTemplateRequestTemplateConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: CreateLiveTranscodeTemplateRequestTemplateConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveTranscodeTemplateShrinkRequest extends $tea.Model {
  name?: string;
  templateConfigShrink?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfigShrink: 'TemplateConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfigShrink: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveTranscodeTemplateResponseBody extends $tea.Model {
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

export class CreateLiveTranscodeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLiveTranscodeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLiveTranscodeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequest extends $tea.Model {
  name?: string;
  priority?: number;
  speed?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      priority: 'Priority',
      speed: 'Speed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      priority: 'number',
      speed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponseBody extends $tea.Model {
  pipeline?: CreatePipelineResponseBodyPipeline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: CreatePipelineResponseBodyPipeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadMediaRequest extends $tea.Model {
  appId?: string;
  entityId?: string;
  fileInfo?: string;
  mediaMetaData?: string;
  postProcessConfig?: string;
  uploadTargetConfig?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      entityId: 'EntityId',
      fileInfo: 'FileInfo',
      mediaMetaData: 'MediaMetaData',
      postProcessConfig: 'PostProcessConfig',
      uploadTargetConfig: 'UploadTargetConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      entityId: 'string',
      fileInfo: 'string',
      mediaMetaData: 'string',
      postProcessConfig: 'string',
      uploadTargetConfig: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadMediaResponseBody extends $tea.Model {
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

export class CreateUploadMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUploadMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUploadMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadStreamRequest extends $tea.Model {
  definition?: string;
  fileExtension?: string;
  HDRType?: string;
  mediaId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      fileExtension: 'FileExtension',
      HDRType: 'HDRType',
      mediaId: 'MediaId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      fileExtension: 'string',
      HDRType: 'string',
      mediaId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadStreamResponseBody extends $tea.Model {
  fileURL?: string;
  mediaId?: string;
  requestId?: string;
  uploadAddress?: string;
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      mediaId: 'MediaId',
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      mediaId: 'string',
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUploadStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUploadStreamResponseBody,
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

export class DeleteCustomTemplateRequest extends $tea.Model {
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

export class DeleteCustomTemplateResponseBody extends $tea.Model {
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

export class DeleteCustomTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCustomTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectMaterialsRequest extends $tea.Model {
  materialIds?: string;
  materialType?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      materialIds: 'MaterialIds',
      materialType: 'MaterialType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialIds: 'string',
      materialType: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectMaterialsResponseBody extends $tea.Model {
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

export class DeleteEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEditingProjectMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectsRequest extends $tea.Model {
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectsResponseBody extends $tea.Model {
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

export class DeleteEditingProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEditingProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEditingProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordFilesRequest extends $tea.Model {
  recordIds?: string[];
  removeFile?: boolean;
  static names(): { [key: string]: string } {
    return {
      recordIds: 'RecordIds',
      removeFile: 'RemoveFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIds: { 'type': 'array', 'itemType': 'string' },
      removeFile: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordFilesResponseBody extends $tea.Model {
  deleteFileInfoList?: DeleteLiveRecordFilesResponseBodyDeleteFileInfoList[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteFileInfoList: 'DeleteFileInfoList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteFileInfoList: { 'type': 'array', 'itemType': DeleteLiveRecordFilesResponseBodyDeleteFileInfoList },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLiveRecordFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLiveRecordFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordTemplateRequest extends $tea.Model {
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

export class DeleteLiveRecordTemplateResponseBody extends $tea.Model {
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

export class DeleteLiveRecordTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLiveRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLiveRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotFilesRequest extends $tea.Model {
  createTimestampList?: number[];
  deleteOriginalFile?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestampList: 'CreateTimestampList',
      deleteOriginalFile: 'DeleteOriginalFile',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestampList: { 'type': 'array', 'itemType': 'number' },
      deleteOriginalFile: 'boolean',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotFilesShrinkRequest extends $tea.Model {
  createTimestampListShrink?: string;
  deleteOriginalFile?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestampListShrink: 'CreateTimestampList',
      deleteOriginalFile: 'DeleteOriginalFile',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestampListShrink: 'string',
      deleteOriginalFile: 'boolean',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotFilesResponseBody extends $tea.Model {
  deleteFileResultList?: DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteFileResultList: 'DeleteFileResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteFileResultList: { 'type': 'array', 'itemType': DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLiveSnapshotFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLiveSnapshotFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotTemplateRequest extends $tea.Model {
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

export class DeleteLiveSnapshotTemplateResponseBody extends $tea.Model {
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

export class DeleteLiveSnapshotTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLiveSnapshotTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLiveSnapshotTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveTranscodeJobRequest extends $tea.Model {
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

export class DeleteLiveTranscodeJobResponseBody extends $tea.Model {
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

export class DeleteLiveTranscodeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLiveTranscodeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLiveTranscodeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveTranscodeTemplateRequest extends $tea.Model {
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

export class DeleteLiveTranscodeTemplateResponseBody extends $tea.Model {
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

export class DeleteLiveTranscodeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLiveTranscodeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLiveTranscodeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosRequest extends $tea.Model {
  deletePhysicalFiles?: boolean;
  inputURLs?: string;
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      deletePhysicalFiles: 'DeletePhysicalFiles',
      inputURLs: 'InputURLs',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePhysicalFiles: 'boolean',
      inputURLs: 'string',
      mediaIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosResponseBody extends $tea.Model {
  forbiddenList?: string[];
  ignoredList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenList: 'ForbiddenList',
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenList: { 'type': 'array', 'itemType': 'string' },
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMediaInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMediaInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineRequest extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineResponseBody extends $tea.Model {
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

export class DeletePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlayInfoRequest extends $tea.Model {
  deletePhysicalFiles?: boolean;
  fileURLs?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      deletePhysicalFiles: 'DeletePhysicalFiles',
      fileURLs: 'FileURLs',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePhysicalFiles: 'boolean',
      fileURLs: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlayInfoResponseBody extends $tea.Model {
  forbiddenList?: string[];
  ignoredList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenList: 'ForbiddenList',
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenList: { 'type': 'array', 'itemType': 'string' },
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlayInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePlayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePlayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartJobRequest extends $tea.Model {
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

export class DeleteSmartJobResponseBody extends $tea.Model {
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

export class DeleteSmartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSmartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSmartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  templateIds?: string;
  static names(): { [key: string]: string } {
    return {
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
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

export class DeleteTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilterConfigsRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilterConfigsResponseBody extends $tea.Model {
  filterConfigs?: DescribeFilterConfigsResponseBodyFilterConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filterConfigs: 'FilterConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConfigs: { 'type': 'array', 'itemType': DescribeFilterConfigsResponseBodyFilterConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilterConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFilterConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFilterConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceEditUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceEditUsageResponseBody extends $tea.Model {
  data?: DescribeMeterIceEditUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterIceEditUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceEditUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterIceEditUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterIceEditUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceLiveMediaConvertUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceLiveMediaConvertUsageResponseBody extends $tea.Model {
  data?: DescribeMeterIceLiveMediaConvertUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterIceLiveMediaConvertUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceLiveMediaConvertUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterIceLiveMediaConvertUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterIceLiveMediaConvertUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUHDUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: string;
  regionId?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      regionId: 'RegionId',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'string',
      regionId: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUHDUsageResponseBody extends $tea.Model {
  data?: DescribeMeterIceMediaConvertUHDUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterIceMediaConvertUHDUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUHDUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterIceMediaConvertUHDUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterIceMediaConvertUHDUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUsageResponseBody extends $tea.Model {
  data?: DescribeMeterIceMediaConvertUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterIceMediaConvertUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterIceMediaConvertUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterIceMediaConvertUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMpsAiUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMpsAiUsageResponseBody extends $tea.Model {
  data?: DescribeMeterIceMpsAiUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterIceMpsAiUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMpsAiUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterIceMpsAiUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterIceMpsAiUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsEditUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsEditUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsEditUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsEditUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsEditUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsEditUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsEditUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveEditUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveEditUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsLiveEditUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsLiveEditUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveEditUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsLiveEditUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsLiveEditUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveMediaConvertUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveMediaConvertUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsLiveMediaConvertUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsLiveMediaConvertUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveMediaConvertUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsLiveMediaConvertUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsLiveMediaConvertUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveRecordUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveRecordUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsLiveRecordUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsLiveRecordUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveRecordUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsLiveRecordUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsLiveRecordUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveSnapshotUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveSnapshotUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsLiveSnapshotUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsLiveSnapshotUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveSnapshotUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsLiveSnapshotUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsLiveSnapshotUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUHDUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: string;
  regionId?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      regionId: 'RegionId',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'string',
      regionId: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUHDUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsMediaConvertUHDUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsMediaConvertUHDUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUHDUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsMediaConvertUHDUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsMediaConvertUHDUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsMediaConvertUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsMediaConvertUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsMediaConvertUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsMediaConvertUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMpsAiUsageRequest extends $tea.Model {
  endTs?: number;
  interval?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMpsAiUsageResponseBody extends $tea.Model {
  data?: DescribeMeterImsMpsAiUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsMpsAiUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMpsAiUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsMpsAiUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsMpsAiUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsSummaryRequest extends $tea.Model {
  endTs?: number;
  region?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsSummaryResponseBody extends $tea.Model {
  data?: DescribeMeterImsSummaryResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsSummaryResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImsSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeterImsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayDetailRequest extends $tea.Model {
  playTs?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      playTs: 'PlayTs',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playTs: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayDetailResponseBody extends $tea.Model {
  baseInfos?: DescribePlayDetailResponseBodyBaseInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baseInfos: 'BaseInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseInfos: { 'type': 'array', 'itemType': DescribePlayDetailResponseBodyBaseInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlayDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayEventListRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  playTs?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playTs: 'PlayTs',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      playTs: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayEventListResponseBody extends $tea.Model {
  eventList?: DescribePlayEventListResponseBodyEventList[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribePlayEventListResponseBodyEventList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlayEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayFirstFrameDurationMetricDataRequest extends $tea.Model {
  beginTs?: string;
  endTs?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTs: 'BeginTs',
      endTs: 'EndTs',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTs: 'string',
      endTs: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayFirstFrameDurationMetricDataResponseBody extends $tea.Model {
  nodes?: DescribePlayFirstFrameDurationMetricDataResponseBodyNodes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribePlayFirstFrameDurationMetricDataResponseBodyNodes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayFirstFrameDurationMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayFirstFrameDurationMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlayFirstFrameDurationMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayListRequest extends $tea.Model {
  beginTs?: string;
  endTs?: string;
  orderName?: string;
  orderType?: string;
  pageNo?: number;
  pageSize?: number;
  playType?: string;
  status?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTs: 'BeginTs',
      endTs: 'EndTs',
      orderName: 'OrderName',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playType: 'PlayType',
      status: 'Status',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTs: 'string',
      endTs: 'string',
      orderName: 'string',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      playType: 'string',
      status: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayListResponseBody extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  playList?: DescribePlayListResponseBodyPlayList[];
  requestId?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      playList: 'PlayList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      playList: { 'type': 'array', 'itemType': DescribePlayListResponseBodyPlayList },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlayListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayMetricDataRequest extends $tea.Model {
  appName?: string;
  beginTs?: number;
  definition?: string;
  endTs?: number;
  experienceLevel?: string;
  itemConfigs?: string;
  metricType?: string;
  network?: string;
  os?: string;
  sdkVersion?: string;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTs: 'BeginTs',
      definition: 'Definition',
      endTs: 'EndTs',
      experienceLevel: 'ExperienceLevel',
      itemConfigs: 'ItemConfigs',
      metricType: 'MetricType',
      network: 'Network',
      os: 'Os',
      sdkVersion: 'SdkVersion',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTs: 'number',
      definition: 'string',
      endTs: 'number',
      experienceLevel: 'string',
      itemConfigs: 'string',
      metricType: 'string',
      network: 'string',
      os: 'string',
      sdkVersion: 'string',
      terminalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayMetricDataResponseBody extends $tea.Model {
  nodes?: DescribePlayMetricDataResponseBodyNodes[];
  requestId?: string;
  summaryData?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
      summaryData: 'SummaryData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribePlayMetricDataResponseBodyNodes },
      requestId: 'string',
      summaryData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlayMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQoeListRequest extends $tea.Model {
  appName?: string;
  beginTs?: number;
  definition?: string;
  endTs?: number;
  itemConfigs?: string;
  metricTypes?: string[];
  network?: string;
  orderName?: string;
  orderType?: string;
  os?: string;
  pageNo?: number;
  pageSize?: number;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTs: 'BeginTs',
      definition: 'Definition',
      endTs: 'EndTs',
      itemConfigs: 'ItemConfigs',
      metricTypes: 'MetricTypes',
      network: 'Network',
      orderName: 'OrderName',
      orderType: 'OrderType',
      os: 'Os',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTs: 'number',
      definition: 'string',
      endTs: 'number',
      itemConfigs: 'string',
      metricTypes: { 'type': 'array', 'itemType': 'string' },
      network: 'string',
      orderName: 'string',
      orderType: 'string',
      os: 'string',
      pageNo: 'number',
      pageSize: 'number',
      terminalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQoeListShrinkRequest extends $tea.Model {
  appName?: string;
  beginTs?: number;
  definition?: string;
  endTs?: number;
  itemConfigs?: string;
  metricTypesShrink?: string;
  network?: string;
  orderName?: string;
  orderType?: string;
  os?: string;
  pageNo?: number;
  pageSize?: number;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTs: 'BeginTs',
      definition: 'Definition',
      endTs: 'EndTs',
      itemConfigs: 'ItemConfigs',
      metricTypesShrink: 'MetricTypes',
      network: 'Network',
      orderName: 'OrderName',
      orderType: 'OrderType',
      os: 'Os',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTs: 'number',
      definition: 'string',
      endTs: 'number',
      itemConfigs: 'string',
      metricTypesShrink: 'string',
      network: 'string',
      orderName: 'string',
      orderType: 'string',
      os: 'string',
      pageNo: 'number',
      pageSize: 'number',
      terminalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQoeListResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  qoeInfoList?: DescribePlayQoeListResponseBodyQoeInfoList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qoeInfoList: 'QoeInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qoeInfoList: { 'type': 'array', 'itemType': DescribePlayQoeListResponseBodyQoeInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQoeListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayQoeListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlayQoeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQosListRequest extends $tea.Model {
  appName?: string;
  beginTs?: string;
  definition?: string;
  endTs?: string;
  itemConfigs?: string;
  metricTypes?: string[];
  network?: string;
  orderName?: string;
  orderType?: string;
  os?: string;
  pageNo?: number;
  pageSize?: number;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTs: 'BeginTs',
      definition: 'Definition',
      endTs: 'EndTs',
      itemConfigs: 'ItemConfigs',
      metricTypes: 'MetricTypes',
      network: 'Network',
      orderName: 'OrderName',
      orderType: 'OrderType',
      os: 'Os',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTs: 'string',
      definition: 'string',
      endTs: 'string',
      itemConfigs: 'string',
      metricTypes: { 'type': 'array', 'itemType': 'string' },
      network: 'string',
      orderName: 'string',
      orderType: 'string',
      os: 'string',
      pageNo: 'number',
      pageSize: 'number',
      terminalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQosListShrinkRequest extends $tea.Model {
  appName?: string;
  beginTs?: string;
  definition?: string;
  endTs?: string;
  itemConfigs?: string;
  metricTypesShrink?: string;
  network?: string;
  orderName?: string;
  orderType?: string;
  os?: string;
  pageNo?: number;
  pageSize?: number;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTs: 'BeginTs',
      definition: 'Definition',
      endTs: 'EndTs',
      itemConfigs: 'ItemConfigs',
      metricTypesShrink: 'MetricTypes',
      network: 'Network',
      orderName: 'OrderName',
      orderType: 'OrderType',
      os: 'Os',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTs: 'string',
      definition: 'string',
      endTs: 'string',
      itemConfigs: 'string',
      metricTypesShrink: 'string',
      network: 'string',
      orderName: 'string',
      orderType: 'string',
      os: 'string',
      pageNo: 'number',
      pageSize: 'number',
      terminalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQosListResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  qosInfoList?: DescribePlayQosListResponseBodyQosInfoList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qosInfoList: 'QosInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qosInfoList: { 'type': 'array', 'itemType': DescribePlayQosListResponseBodyQosInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQosListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlayQosListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlayQosListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryConfigsRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryConfigsResponseBody extends $tea.Model {
  configs?: DescribeQueryConfigsResponseBodyConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeQueryConfigsResponseBodyConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeQueryConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQueryConfigsResponseBody,
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

export class GetCustomTemplateRequest extends $tea.Model {
  subtype?: number;
  templateId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      subtype: 'Subtype',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtype: 'number',
      templateId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTemplateResponseBody extends $tea.Model {
  customTemplate?: GetCustomTemplateResponseBodyCustomTemplate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customTemplate: 'CustomTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplate: GetCustomTemplateResponseBodyCustomTemplate,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCustomTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCustomTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultStorageLocationResponseBody extends $tea.Model {
  bucket?: string;
  path?: string;
  requestId?: string;
  status?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      path: 'Path',
      requestId: 'RequestId',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      path: 'string',
      requestId: 'string',
      status: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultStorageLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDefaultStorageLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDefaultStorageLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicImageJobRequest extends $tea.Model {
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

export class GetDynamicImageJobResponseBody extends $tea.Model {
  dynamicImageJob?: GetDynamicImageJobResponseBodyDynamicImageJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageJob: 'DynamicImageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageJob: GetDynamicImageJobResponseBodyDynamicImageJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDynamicImageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDynamicImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
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
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBody extends $tea.Model {
  liveMaterials?: GetEditingProjectMaterialsResponseBodyLiveMaterials[];
  mediaInfos?: GetEditingProjectMaterialsResponseBodyMediaInfos[];
  projectId?: string;
  projectMaterials?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveMaterials: 'LiveMaterials',
      mediaInfos: 'MediaInfos',
      projectId: 'ProjectId',
      projectMaterials: 'ProjectMaterials',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveMaterials: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyLiveMaterials },
      mediaInfos: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfos },
      projectId: 'string',
      projectMaterials: { 'type': 'array', 'itemType': 'string' },
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

export class GetEventCallbackResponseBody extends $tea.Model {
  authKey?: string;
  authSwitch?: string;
  callbackQueueName?: string;
  callbackType?: string;
  callbackURL?: string;
  eventTypeList?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackQueueName: 'CallbackQueueName',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSwitch: 'string',
      callbackQueueName: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEventCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEventCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingIndexFileRequest extends $tea.Model {
  appName?: string;
  domainName?: string;
  projectId?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      projectId: 'ProjectId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      projectId: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingIndexFileResponseBody extends $tea.Model {
  indexFile?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      indexFile: 'IndexFile',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexFile: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingIndexFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveEditingIndexFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveEditingIndexFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobRequest extends $tea.Model {
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

export class GetLiveEditingJobResponseBody extends $tea.Model {
  liveEditingJob?: GetLiveEditingJobResponseBodyLiveEditingJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveEditingJob: 'LiveEditingJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveEditingJob: GetLiveEditingJobResponseBodyLiveEditingJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveEditingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveEditingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordJobRequest extends $tea.Model {
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

export class GetLiveRecordJobResponseBody extends $tea.Model {
  recordJob?: GetLiveRecordJobResponseBodyRecordJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordJob: 'RecordJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordJob: GetLiveRecordJobResponseBodyRecordJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveRecordJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveRecordJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordTemplateRequest extends $tea.Model {
  jobId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordTemplateResponseBody extends $tea.Model {
  recordTemplate?: GetLiveRecordTemplateResponseBodyRecordTemplate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordTemplate: 'RecordTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordTemplate: GetLiveRecordTemplateResponseBodyRecordTemplate,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotJobRequest extends $tea.Model {
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

export class GetLiveSnapshotJobResponseBody extends $tea.Model {
  callbackUrl?: string;
  createTime?: string;
  jobId?: string;
  jobName?: string;
  lastModified?: string;
  overwriteFormat?: string;
  requestId?: string;
  sequenceFormat?: string;
  snapshotOutput?: GetLiveSnapshotJobResponseBodySnapshotOutput;
  status?: string;
  streamInput?: GetLiveSnapshotJobResponseBodyStreamInput;
  templateId?: string;
  templateName?: string;
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      createTime: 'CreateTime',
      jobId: 'JobId',
      jobName: 'JobName',
      lastModified: 'LastModified',
      overwriteFormat: 'OverwriteFormat',
      requestId: 'RequestId',
      sequenceFormat: 'SequenceFormat',
      snapshotOutput: 'SnapshotOutput',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      createTime: 'string',
      jobId: 'string',
      jobName: 'string',
      lastModified: 'string',
      overwriteFormat: 'string',
      requestId: 'string',
      sequenceFormat: 'string',
      snapshotOutput: GetLiveSnapshotJobResponseBodySnapshotOutput,
      status: 'string',
      streamInput: GetLiveSnapshotJobResponseBodyStreamInput,
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveSnapshotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveSnapshotJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotTemplateRequest extends $tea.Model {
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

export class GetLiveSnapshotTemplateResponseBody extends $tea.Model {
  createTime?: string;
  lastModified?: string;
  overwriteFormat?: string;
  requestId?: string;
  sequenceFormat?: string;
  templateId?: string;
  templateName?: string;
  timeInterval?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModified: 'LastModified',
      overwriteFormat: 'OverwriteFormat',
      requestId: 'RequestId',
      sequenceFormat: 'SequenceFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastModified: 'string',
      overwriteFormat: 'string',
      requestId: 'string',
      sequenceFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveSnapshotTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveSnapshotTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobRequest extends $tea.Model {
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

export class GetLiveTranscodeJobResponseBody extends $tea.Model {
  job?: GetLiveTranscodeJobResponseBodyJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetLiveTranscodeJobResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveTranscodeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveTranscodeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeTemplateRequest extends $tea.Model {
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

export class GetLiveTranscodeTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateContent?: GetLiveTranscodeTemplateResponseBodyTemplateContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateContent: GetLiveTranscodeTemplateResponseBodyTemplateContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveTranscodeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLiveTranscodeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoRequest extends $tea.Model {
  inputURL?: string;
  mediaId?: string;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputURL: 'string',
      mediaId: 'string',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBody extends $tea.Model {
  mediaInfo?: GetMediaInfoResponseBodyMediaInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfo: 'MediaInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfo: GetMediaInfoResponseBodyMediaInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobRequest extends $tea.Model {
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

export class GetMediaInfoJobResponseBody extends $tea.Model {
  mediaInfoJob?: GetMediaInfoJobResponseBodyMediaInfoJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: GetMediaInfoJobResponseBodyMediaInfoJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaInfoJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMediaInfoJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobRequest extends $tea.Model {
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

export class GetMediaProducingJobResponseBody extends $tea.Model {
  mediaProducingJob?: GetMediaProducingJobResponseBodyMediaProducingJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaProducingJob: 'MediaProducingJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaProducingJob: GetMediaProducingJobResponseBodyMediaProducingJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMediaProducingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMediaProducingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobRequest extends $tea.Model {
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

export class GetPackageJobResponseBody extends $tea.Model {
  packageJob?: GetPackageJobResponseBodyPackageJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      packageJob: 'PackageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageJob: GetPackageJobResponseBodyPackageJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPackageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPackageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRequest extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBody extends $tea.Model {
  pipeline?: GetPipelineResponseBodyPipeline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: GetPipelineResponseBodyPipeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoRequest extends $tea.Model {
  inputURL?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      inputURL: 'InputURL',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputURL: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBody extends $tea.Model {
  mediaBase?: GetPlayInfoResponseBodyMediaBase;
  playInfoList?: GetPlayInfoResponseBodyPlayInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaBase: 'MediaBase',
      playInfoList: 'PlayInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBase: GetPlayInfoResponseBodyMediaBase,
      playInfoList: { 'type': 'array', 'itemType': GetPlayInfoResponseBodyPlayInfoList },
      requestId: 'string',
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

export class GetPublicMediaInfoRequest extends $tea.Model {
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

export class GetPublicMediaInfoResponseBody extends $tea.Model {
  mediaInfo?: GetPublicMediaInfoResponseBodyMediaInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfo: 'MediaInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfo: GetPublicMediaInfoResponseBodyMediaInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPublicMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPublicMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobRequest extends $tea.Model {
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

export class GetSmartHandleJobResponseBody extends $tea.Model {
  jobId?: string;
  output?: string;
  requestId?: string;
  smartJobInfo?: GetSmartHandleJobResponseBodySmartJobInfo;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      output: 'Output',
      requestId: 'RequestId',
      smartJobInfo: 'SmartJobInfo',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      output: 'string',
      requestId: 'string',
      smartJobInfo: GetSmartHandleJobResponseBodySmartJobInfo,
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSmartHandleJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSmartHandleJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobRequest extends $tea.Model {
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

export class GetSnapshotJobResponseBody extends $tea.Model {
  requestId?: string;
  snapshotJob?: GetSnapshotJobResponseBodySnapshotJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotJob: GetSnapshotJobResponseBodySnapshotJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSnapshotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSnapshotJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotUrlsRequest extends $tea.Model {
  jobId?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotUrlsResponseBody extends $tea.Model {
  requestId?: string;
  snapshotUrls?: string[];
  total?: number;
  webVTTUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotUrls: 'SnapshotUrls',
      total: 'Total',
      webVTTUrl: 'WebVTTUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotUrls: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
      webVTTUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotUrlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSnapshotUrlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSnapshotUrlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSystemTemplateRequest extends $tea.Model {
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

export class GetSystemTemplateResponseBody extends $tea.Model {
  requestId?: string;
  systemTemplate?: GetSystemTemplateResponseBodySystemTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemTemplate: 'SystemTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemTemplate: GetSystemTemplateResponseBodySystemTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSystemTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSystemTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSystemTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  relatedMediaidFlag?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      relatedMediaidFlag: 'RelatedMediaidFlag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedMediaidFlag: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: GetTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: GetTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateMaterialsRequest extends $tea.Model {
  fileList?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateMaterialsResponseBody extends $tea.Model {
  materialUrls?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      materialUrls: 'MaterialUrls',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialUrls: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTemplateMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTemplateMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobRequest extends $tea.Model {
  parentJobId?: string;
  static names(): { [key: string]: string } {
    return {
      parentJobId: 'ParentJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBody extends $tea.Model {
  requestId?: string;
  transcodeParentJob?: GetTranscodeJobResponseBodyTranscodeParentJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeParentJob: 'TranscodeParentJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeParentJob: GetTranscodeJobResponseBodyTranscodeParentJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTranscodeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTranscodeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUrlUploadInfosRequest extends $tea.Model {
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

export class GetUrlUploadInfosResponseBody extends $tea.Model {
  nonExists?: string[];
  requestId?: string;
  URLUploadInfoList?: GetUrlUploadInfosResponseBodyURLUploadInfoList[];
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
      URLUploadInfoList: { 'type': 'array', 'itemType': GetUrlUploadInfosResponseBodyURLUploadInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUrlUploadInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUrlUploadInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUrlUploadInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsRequest extends $tea.Model {
  businessType?: string;
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      entityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsResponseBody extends $tea.Model {
  mediaTagList?: ListAllPublicMediaTagsResponseBodyMediaTagList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaTagList: 'MediaTagList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagList: { 'type': 'array', 'itemType': ListAllPublicMediaTagsResponseBodyMediaTagList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAllPublicMediaTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAllPublicMediaTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTemplatesRequest extends $tea.Model {
  name?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  subtype?: string;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subtype: 'Subtype',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subtype: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTemplatesResponseBody extends $tea.Model {
  customTemplateList?: ListCustomTemplatesResponseBodyCustomTemplateList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      customTemplateList: 'CustomTemplateList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateList: { 'type': 'array', 'itemType': ListCustomTemplatesResponseBodyCustomTemplateList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCustomTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageJobsRequest extends $tea.Model {
  endOfCreateTime?: string;
  jobId?: string;
  nextPageToken?: string;
  orderBy?: string;
  pageSize?: number;
  startOfCreateTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startOfCreateTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageJobsResponseBody extends $tea.Model {
  jobs?: ListDynamicImageJobsResponseBodyJobs[];
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListDynamicImageJobsResponseBodyJobs },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDynamicImageJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDynamicImageJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordFilesRequest extends $tea.Model {
  endTime?: string;
  jobIds?: string[];
  pageNo?: number;
  pageSize?: number;
  recordFormat?: string;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobIds: 'JobIds',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      recordFormat: 'RecordFormat',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      recordFormat: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordFilesResponseBody extends $tea.Model {
  files?: ListLiveRecordFilesResponseBodyFiles[];
  pageNo?: number;
  pageSize?: string;
  requestId?: string;
  sortBy?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListLiveRecordFilesResponseBodyFiles },
      pageNo: 'number',
      pageSize: 'string',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveRecordFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveRecordFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsRequest extends $tea.Model {
  endTime?: string;
  keyword?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsResponseBody extends $tea.Model {
  liveRecordJobs?: ListLiveRecordJobsResponseBodyLiveRecordJobs[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  sortBy?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      liveRecordJobs: 'LiveRecordJobs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordJobs: { 'type': 'array', 'itemType': ListLiveRecordJobsResponseBodyLiveRecordJobs },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveRecordJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveRecordJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordTemplatesRequest extends $tea.Model {
  keyword?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  templateIds?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      templateIds: 'TemplateIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordTemplatesResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  recordTemplateList?: ListLiveRecordTemplatesResponseBodyRecordTemplateList[];
  requestId?: string;
  sortBy?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      recordTemplateList: 'RecordTemplateList',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      recordTemplateList: { 'type': 'array', 'itemType': ListLiveRecordTemplatesResponseBodyRecordTemplateList },
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveRecordTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveRecordTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotFilesRequest extends $tea.Model {
  endTime?: string;
  jobId?: string;
  limit?: number;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobId: 'JobId',
      limit: 'Limit',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobId: 'string',
      limit: 'number',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotFilesResponseBody extends $tea.Model {
  fileList?: ListLiveSnapshotFilesResponseBodyFileList[];
  nextStartTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      nextStartTime: 'NextStartTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': ListLiveSnapshotFilesResponseBodyFileList },
      nextStartTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveSnapshotFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveSnapshotFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotJobsRequest extends $tea.Model {
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  searchKeyWord?: string;
  sortBy?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      searchKeyWord: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotJobsResponseBody extends $tea.Model {
  jobList?: ListLiveSnapshotJobsResponseBodyJobList[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  sortBy?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListLiveSnapshotJobsResponseBodyJobList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveSnapshotJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveSnapshotJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotTemplatesRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  searchKeyWord?: string;
  sortBy?: string;
  templateIds?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
      sortBy: 'SortBy',
      templateIds: 'TemplateIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKeyWord: 'string',
      sortBy: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotTemplatesResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  sortBy?: string;
  templateList?: ListLiveSnapshotTemplatesResponseBodyTemplateList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      templateList: 'TemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      templateList: { 'type': 'array', 'itemType': ListLiveSnapshotTemplatesResponseBodyTemplateList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveSnapshotTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveSnapshotTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsRequest extends $tea.Model {
  keyWord?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  startMode?: number;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startMode: 'StartMode',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startMode: 'number',
      status: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponseBody extends $tea.Model {
  jobList?: ListLiveTranscodeJobsResponseBodyJobList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListLiveTranscodeJobsResponseBodyJobList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveTranscodeJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveTranscodeJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeTemplatesRequest extends $tea.Model {
  category?: string;
  keyWord?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  type?: string;
  videoCodec?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyWord: 'KeyWord',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
      videoCodec: 'VideoCodec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyWord: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
      videoCodec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templateContentList?: ListLiveTranscodeTemplatesResponseBodyTemplateContentList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateContentList: 'TemplateContentList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateContentList: { 'type': 'array', 'itemType': ListLiveTranscodeTemplatesResponseBodyTemplateContentList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveTranscodeTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLiveTranscodeTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosRequest extends $tea.Model {
  businessType?: string;
  endTime?: string;
  includeFileBasicInfo?: boolean;
  maxResults?: number;
  mediaId?: string;
  mediaType?: string;
  nextToken?: string;
  sortBy?: string;
  source?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      endTime: 'EndTime',
      includeFileBasicInfo: 'IncludeFileBasicInfo',
      maxResults: 'MaxResults',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      nextToken: 'NextToken',
      sortBy: 'SortBy',
      source: 'Source',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      endTime: 'string',
      includeFileBasicInfo: 'boolean',
      maxResults: 'number',
      mediaId: 'string',
      mediaType: 'string',
      nextToken: 'string',
      sortBy: 'string',
      source: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBody extends $tea.Model {
  maxResults?: number;
  mediaInfos?: ListMediaBasicInfosResponseBodyMediaInfos[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      mediaInfos: 'MediaInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      mediaInfos: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMediaBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMediaBasicInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsRequest extends $tea.Model {
  endOfCreateTime?: string;
  jobId?: string;
  nextPageToken?: string;
  orderBy?: string;
  pageSize?: number;
  startOfCreateTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startOfCreateTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBody extends $tea.Model {
  jobs?: ListMediaInfoJobsResponseBodyJobs[];
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobs },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMediaInfoJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMediaInfoJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsRequest extends $tea.Model {
  endOfCreateTime?: string;
  jobId?: string;
  nextPageToken?: string;
  orderBy?: string;
  pageSize?: number;
  startOfCreateTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startOfCreateTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponseBody extends $tea.Model {
  packageJobList?: ListPackageJobsResponseBodyPackageJobList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      packageJobList: 'PackageJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageJobList: ListPackageJobsResponseBodyPackageJobList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPackageJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPackageJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesRequest extends $tea.Model {
  speed?: string;
  static names(): { [key: string]: string } {
    return {
      speed: 'Speed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBody extends $tea.Model {
  pipelineList?: ListPipelinesResponseBodyPipelineList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineList: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelineList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosRequest extends $tea.Model {
  includeFileBasicInfo?: boolean;
  maxResults?: number;
  mediaTagId?: string;
  nextToken?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      includeFileBasicInfo: 'IncludeFileBasicInfo',
      maxResults: 'MaxResults',
      mediaTagId: 'MediaTagId',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeFileBasicInfo: 'boolean',
      maxResults: 'number',
      mediaTagId: 'string',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBody extends $tea.Model {
  maxResults?: number;
  mediaInfos?: ListPublicMediaBasicInfosResponseBodyMediaInfos[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      mediaInfos: 'MediaInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      mediaInfos: { 'type': 'array', 'itemType': ListPublicMediaBasicInfosResponseBodyMediaInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPublicMediaBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPublicMediaBasicInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsRequest extends $tea.Model {
  jobState?: string;
  jobType?: string;
  maxResults?: number;
  nextToken?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      jobState: 'JobState',
      jobType: 'JobType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobState: 'string',
      jobType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBody extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  smartJobList?: ListSmartJobsResponseBodySmartJobList[];
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      smartJobList: 'SmartJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      smartJobList: { 'type': 'array', 'itemType': ListSmartJobsResponseBodySmartJobList },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSmartJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSmartJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotJobsRequest extends $tea.Model {
  endOfCreateTime?: string;
  jobId?: string;
  nextPageToken?: string;
  orderBy?: string;
  pageSize?: number;
  startOfCreateTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startOfCreateTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotJobsResponseBody extends $tea.Model {
  jobs?: ListSnapshotJobsResponseBodyJobs[];
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListSnapshotJobsResponseBodyJobs },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSnapshotJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSnapshotJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemTemplatesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  subtype?: string;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      subtype: 'Subtype',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      subtype: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  systemTemplateList?: ListSystemTemplatesResponseBodySystemTemplateList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemTemplateList: 'SystemTemplateList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemTemplateList: { 'type': 'array', 'itemType': ListSystemTemplatesResponseBodySystemTemplateList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSystemTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSystemTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  createSource?: string;
  keyword?: string;
  pageNo?: number;
  pageSize?: number;
  sortType?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createSource: 'CreateSource',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortType: 'SortType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSource: 'string',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templates?: ListTemplatesResponseBodyTemplates[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsRequest extends $tea.Model {
  endOfCreateTime?: string;
  nextPageToken?: string;
  orderBy?: string;
  pageSize?: number;
  parentJobId?: string;
  startOfCreateTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      parentJobId: 'ParentJobId',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      parentJobId: 'string',
      startOfCreateTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBody extends $tea.Model {
  jobs?: ListTranscodeJobsResponseBodyJobs[];
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobs },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTranscodeJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTranscodeJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobRequest extends $tea.Model {
  clientToken?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobResponseBody extends $tea.Model {
  createTime?: string;
  finishTime?: string;
  functionName?: string;
  input?: QueryIProductionJobResponseBodyInput;
  jobId?: string;
  jobParams?: string;
  name?: string;
  output?: QueryIProductionJobResponseBodyOutput;
  outputFiles?: string[];
  outputUrls?: string[];
  requestId?: string;
  result?: string;
  scheduleConfig?: QueryIProductionJobResponseBodyScheduleConfig;
  status?: string;
  templateId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      functionName: 'FunctionName',
      input: 'Input',
      jobId: 'JobId',
      jobParams: 'JobParams',
      name: 'Name',
      output: 'Output',
      outputFiles: 'OutputFiles',
      outputUrls: 'OutputUrls',
      requestId: 'RequestId',
      result: 'Result',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      functionName: 'string',
      input: QueryIProductionJobResponseBodyInput,
      jobId: 'string',
      jobParams: 'string',
      name: 'string',
      output: QueryIProductionJobResponseBodyOutput,
      outputFiles: { 'type': 'array', 'itemType': 'string' },
      outputUrls: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      result: 'string',
      scheduleConfig: QueryIProductionJobResponseBodyScheduleConfig,
      status: 'string',
      templateId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryIProductionJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryIProductionJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailRequest extends $tea.Model {
  jobId?: string;
  maximumPageSize?: number;
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      maximumPageSize: 'MaximumPageSize',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      maximumPageSize: 'number',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBody extends $tea.Model {
  mediaCensorJobDetail?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaCensorJobDetail: 'MediaCensorJobDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJobDetail: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaCensorJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMediaCensorJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListRequest extends $tea.Model {
  endOfJobCreatedTimeRange?: string;
  jobIds?: string;
  maximumPageSize?: number;
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startOfJobCreatedTimeRange?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endOfJobCreatedTimeRange: 'EndOfJobCreatedTimeRange',
      jobIds: 'JobIds',
      maximumPageSize: 'MaximumPageSize',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startOfJobCreatedTimeRange: 'StartOfJobCreatedTimeRange',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfJobCreatedTimeRange: 'string',
      jobIds: 'string',
      maximumPageSize: 'number',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startOfJobCreatedTimeRange: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBody extends $tea.Model {
  mediaCensorJobList?: QueryMediaCensorJobListResponseBodyMediaCensorJobList;
  nextPageToken?: string;
  nonExistIds?: QueryMediaCensorJobListResponseBodyNonExistIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaCensorJobList: 'MediaCensorJobList',
      nextPageToken: 'NextPageToken',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJobList: QueryMediaCensorJobListResponseBodyMediaCensorJobList,
      nextPageToken: 'string',
      nonExistIds: QueryMediaCensorJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaCensorJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMediaCensorJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobRequest extends $tea.Model {
  jobId?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponseBody extends $tea.Model {
  jobStatus?: string;
  requestId?: string;
  results?: QuerySmarttagJobResponseBodyResults;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      results: 'Results',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      requestId: 'string',
      results: QuerySmarttagJobResponseBodyResults,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySmarttagJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySmarttagJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUploadMediaRequest extends $tea.Model {
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

export class RefreshUploadMediaResponseBody extends $tea.Model {
  mediaId?: string;
  requestId?: string;
  uploadAddress?: string;
  uploadAuth?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      requestId: 'RequestId',
      uploadAddress: 'UploadAddress',
      uploadAuth: 'UploadAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      requestId: 'string',
      uploadAddress: 'string',
      uploadAuth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshUploadMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshUploadMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshUploadMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaInfoRequest extends $tea.Model {
  businessType?: string;
  cateId?: number;
  clientToken?: string;
  coverURL?: string;
  description?: string;
  inputURL?: string;
  mediaTags?: string;
  mediaType?: string;
  overwrite?: boolean;
  referenceId?: string;
  registerConfig?: string;
  title?: string;
  userData?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      cateId: 'CateId',
      clientToken: 'ClientToken',
      coverURL: 'CoverURL',
      description: 'Description',
      inputURL: 'InputURL',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      overwrite: 'Overwrite',
      referenceId: 'ReferenceId',
      registerConfig: 'RegisterConfig',
      title: 'Title',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      cateId: 'number',
      clientToken: 'string',
      coverURL: 'string',
      description: 'string',
      inputURL: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      overwrite: 'boolean',
      referenceId: 'string',
      registerConfig: 'string',
      title: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaInfoResponseBody extends $tea.Model {
  mediaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaStreamRequest extends $tea.Model {
  inputURL?: string;
  mediaId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputURL: 'string',
      mediaId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaStreamResponseBody extends $tea.Model {
  mediaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterMediaStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterMediaStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectRequest extends $tea.Model {
  createSource?: string;
  endTime?: string;
  maxResults?: number;
  nextToken?: string;
  projectType?: string;
  sortBy?: string;
  startTime?: string;
  status?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createSource: 'CreateSource',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectType: 'ProjectType',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSource: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectType: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  projectList?: SearchEditingProjectResponseBodyProjectList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectList: 'ProjectList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectList: { 'type': 'array', 'itemType': SearchEditingProjectResponseBodyProjectList },
      requestId: 'string',
      totalCount: 'number',
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
  entityId?: string;
  match?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      match: 'Match',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      match: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBody extends $tea.Model {
  code?: string;
  mediaInfoList?: SearchMediaResponseBodyMediaInfoList[];
  requestId?: string;
  success?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaInfoList: 'MediaInfoList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaInfoList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoList },
      requestId: 'string',
      success: 'string',
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

export class SearchPublicMediaInfoRequest extends $tea.Model {
  authorized?: boolean;
  dynamicMetaDataMatchFields?: string;
  entityId?: string;
  favorite?: boolean;
  mediaIds?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      dynamicMetaDataMatchFields: 'DynamicMetaDataMatchFields',
      entityId: 'EntityId',
      favorite: 'Favorite',
      mediaIds: 'MediaIds',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      dynamicMetaDataMatchFields: 'string',
      entityId: 'string',
      favorite: 'boolean',
      mediaIds: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPublicMediaInfoResponseBody extends $tea.Model {
  publicMediaInfos?: SearchPublicMediaInfoResponseBodyPublicMediaInfos[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publicMediaInfos: 'PublicMediaInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicMediaInfos: { 'type': 'array', 'itemType': SearchPublicMediaInfoResponseBodyPublicMediaInfos },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPublicMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchPublicMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchPublicMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendLiveSnapshotJobCommandRequest extends $tea.Model {
  command?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendLiveSnapshotJobCommandResponseBody extends $tea.Model {
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

export class SendLiveSnapshotJobCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendLiveSnapshotJobCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendLiveSnapshotJobCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendLiveTranscodeJobCommandRequest extends $tea.Model {
  command?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendLiveTranscodeJobCommandResponseBody extends $tea.Model {
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

export class SendLiveTranscodeJobCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendLiveTranscodeJobCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendLiveTranscodeJobCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultCustomTemplateRequest extends $tea.Model {
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

export class SetDefaultCustomTemplateResponseBody extends $tea.Model {
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

export class SetDefaultCustomTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDefaultCustomTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDefaultCustomTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultStorageLocationRequest extends $tea.Model {
  bucket?: string;
  path?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      path: 'Path',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      path: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultStorageLocationResponseBody extends $tea.Model {
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

export class SetDefaultStorageLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDefaultStorageLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDefaultStorageLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEventCallbackRequest extends $tea.Model {
  authKey?: string;
  authSwitch?: string;
  callbackQueueName?: string;
  callbackType?: string;
  callbackURL?: string;
  eventTypeList?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackQueueName: 'CallbackQueueName',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSwitch: 'string',
      callbackQueueName: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEventCallbackResponseBody extends $tea.Model {
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

export class SetEventCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetEventCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetEventCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitASRJobRequest extends $tea.Model {
  description?: string;
  duration?: string;
  inputFile?: string;
  startTime?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      duration: 'Duration',
      inputFile: 'InputFile',
      startTime: 'StartTime',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      duration: 'string',
      inputFile: 'string',
      startTime: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitASRJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitASRJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitASRJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitASRJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioProduceJobRequest extends $tea.Model {
  description?: string;
  editingConfig?: string;
  inputConfig?: string;
  outputConfig?: string;
  overwrite?: boolean;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      overwrite: 'Overwrite',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      editingConfig: 'string',
      inputConfig: 'string',
      outputConfig: 'string',
      overwrite: 'boolean',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioProduceJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioProduceJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAudioProduceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitAudioProduceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicChartJobRequest extends $tea.Model {
  axisParams?: string;
  background?: string;
  chartConfig?: string;
  chartTitle?: string;
  chartType?: string;
  dataSource?: string;
  description?: string;
  input?: string;
  outputConfig?: string;
  subtitle?: string;
  title?: string;
  unit?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      axisParams: 'AxisParams',
      background: 'Background',
      chartConfig: 'ChartConfig',
      chartTitle: 'ChartTitle',
      chartType: 'ChartType',
      dataSource: 'DataSource',
      description: 'Description',
      input: 'Input',
      outputConfig: 'OutputConfig',
      subtitle: 'Subtitle',
      title: 'Title',
      unit: 'Unit',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisParams: 'string',
      background: 'string',
      chartConfig: 'string',
      chartTitle: 'string',
      chartType: 'string',
      dataSource: 'string',
      description: 'string',
      input: 'string',
      outputConfig: 'string',
      subtitle: 'string',
      title: 'string',
      unit: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicChartJobResponseBody extends $tea.Model {
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

export class SubmitDynamicChartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitDynamicChartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitDynamicChartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequest extends $tea.Model {
  input?: SubmitDynamicImageJobRequestInput;
  name?: string;
  output?: SubmitDynamicImageJobRequestOutput;
  scheduleConfig?: SubmitDynamicImageJobRequestScheduleConfig;
  templateConfig?: SubmitDynamicImageJobRequestTemplateConfig;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitDynamicImageJobRequestInput,
      name: 'string',
      output: SubmitDynamicImageJobRequestOutput,
      scheduleConfig: SubmitDynamicImageJobRequestScheduleConfig,
      templateConfig: SubmitDynamicImageJobRequestTemplateConfig,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobShrinkRequest extends $tea.Model {
  inputShrink?: string;
  name?: string;
  outputShrink?: string;
  scheduleConfigShrink?: string;
  templateConfigShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      name: 'Name',
      outputShrink: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      templateConfigShrink: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      name: 'string',
      outputShrink: 'string',
      scheduleConfigShrink: 'string',
      templateConfigShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobResponseBody extends $tea.Model {
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

export class SubmitIProductionJobRequest extends $tea.Model {
  functionName?: string;
  input?: SubmitIProductionJobRequestInput;
  jobParams?: string;
  name?: string;
  output?: SubmitIProductionJobRequestOutput;
  scheduleConfig?: SubmitIProductionJobRequestScheduleConfig;
  templateId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      input: 'Input',
      jobParams: 'JobParams',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      input: SubmitIProductionJobRequestInput,
      jobParams: 'string',
      name: 'string',
      output: SubmitIProductionJobRequestOutput,
      scheduleConfig: SubmitIProductionJobRequestScheduleConfig,
      templateId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobShrinkRequest extends $tea.Model {
  functionName?: string;
  inputShrink?: string;
  jobParams?: string;
  name?: string;
  outputShrink?: string;
  scheduleConfigShrink?: string;
  templateId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      inputShrink: 'Input',
      jobParams: 'JobParams',
      name: 'Name',
      outputShrink: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      inputShrink: 'string',
      jobParams: 'string',
      name: 'string',
      outputShrink: 'string',
      scheduleConfigShrink: 'string',
      templateId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobResponseBody extends $tea.Model {
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

export class SubmitIProductionJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitIProductionJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitIProductionJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveEditingJobRequest extends $tea.Model {
  clips?: string;
  liveStreamConfig?: string;
  mediaProduceConfig?: string;
  outputMediaConfig?: string;
  outputMediaTarget?: string;
  projectId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      liveStreamConfig: 'LiveStreamConfig',
      mediaProduceConfig: 'MediaProduceConfig',
      outputMediaConfig: 'OutputMediaConfig',
      outputMediaTarget: 'OutputMediaTarget',
      projectId: 'ProjectId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: 'string',
      liveStreamConfig: 'string',
      mediaProduceConfig: 'string',
      outputMediaConfig: 'string',
      outputMediaTarget: 'string',
      projectId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveEditingJobResponseBody extends $tea.Model {
  jobId?: string;
  mediaId?: string;
  mediaURL?: string;
  projectId?: string;
  requestId?: string;
  vodMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      vodMediaId: 'VodMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      projectId: 'string',
      requestId: 'string',
      vodMediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveEditingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitLiveEditingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitLiveEditingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveRecordJobRequest extends $tea.Model {
  name?: string;
  notifyUrl?: string;
  recordOutput?: SubmitLiveRecordJobRequestRecordOutput;
  streamInput?: SubmitLiveRecordJobRequestStreamInput;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutput: 'RecordOutput',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyUrl: 'string',
      recordOutput: SubmitLiveRecordJobRequestRecordOutput,
      streamInput: SubmitLiveRecordJobRequestStreamInput,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveRecordJobShrinkRequest extends $tea.Model {
  name?: string;
  notifyUrl?: string;
  recordOutputShrink?: string;
  streamInputShrink?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutputShrink: 'RecordOutput',
      streamInputShrink: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyUrl: 'string',
      recordOutputShrink: 'string',
      streamInputShrink: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveRecordJobResponseBody extends $tea.Model {
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

export class SubmitLiveRecordJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitLiveRecordJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitLiveRecordJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveSnapshotJobRequest extends $tea.Model {
  callbackUrl?: string;
  jobName?: string;
  snapshotOutput?: SubmitLiveSnapshotJobRequestSnapshotOutput;
  streamInput?: SubmitLiveSnapshotJobRequestStreamInput;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      jobName: 'JobName',
      snapshotOutput: 'SnapshotOutput',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      jobName: 'string',
      snapshotOutput: SubmitLiveSnapshotJobRequestSnapshotOutput,
      streamInput: SubmitLiveSnapshotJobRequestStreamInput,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveSnapshotJobShrinkRequest extends $tea.Model {
  callbackUrl?: string;
  jobName?: string;
  snapshotOutputShrink?: string;
  streamInputShrink?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      jobName: 'JobName',
      snapshotOutputShrink: 'SnapshotOutput',
      streamInputShrink: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      jobName: 'string',
      snapshotOutputShrink: 'string',
      streamInputShrink: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveSnapshotJobResponseBody extends $tea.Model {
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

export class SubmitLiveSnapshotJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitLiveSnapshotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitLiveSnapshotJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveTranscodeJobRequest extends $tea.Model {
  name?: string;
  startMode?: number;
  streamInput?: SubmitLiveTranscodeJobRequestStreamInput;
  templateId?: string;
  timedConfig?: SubmitLiveTranscodeJobRequestTimedConfig;
  transcodeOutput?: SubmitLiveTranscodeJobRequestTranscodeOutput;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      startMode: 'StartMode',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      timedConfig: 'TimedConfig',
      transcodeOutput: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      startMode: 'number',
      streamInput: SubmitLiveTranscodeJobRequestStreamInput,
      templateId: 'string',
      timedConfig: SubmitLiveTranscodeJobRequestTimedConfig,
      transcodeOutput: SubmitLiveTranscodeJobRequestTranscodeOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveTranscodeJobShrinkRequest extends $tea.Model {
  name?: string;
  startMode?: number;
  streamInputShrink?: string;
  templateId?: string;
  timedConfigShrink?: string;
  transcodeOutputShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      startMode: 'StartMode',
      streamInputShrink: 'StreamInput',
      templateId: 'TemplateId',
      timedConfigShrink: 'TimedConfig',
      transcodeOutputShrink: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      startMode: 'number',
      streamInputShrink: 'string',
      templateId: 'string',
      timedConfigShrink: 'string',
      transcodeOutputShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveTranscodeJobResponseBody extends $tea.Model {
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

export class SubmitLiveTranscodeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitLiveTranscodeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitLiveTranscodeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaCensorJobRequest extends $tea.Model {
  barrages?: string;
  coverImages?: string;
  description?: string;
  input?: SubmitMediaCensorJobRequestInput;
  notifyUrl?: string;
  output?: string;
  scheduleConfig?: SubmitMediaCensorJobRequestScheduleConfig;
  templateId?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      barrages: 'Barrages',
      coverImages: 'CoverImages',
      description: 'Description',
      input: 'Input',
      notifyUrl: 'NotifyUrl',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barrages: 'string',
      coverImages: 'string',
      description: 'string',
      input: SubmitMediaCensorJobRequestInput,
      notifyUrl: 'string',
      output: 'string',
      scheduleConfig: SubmitMediaCensorJobRequestScheduleConfig,
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaCensorJobShrinkRequest extends $tea.Model {
  barrages?: string;
  coverImages?: string;
  description?: string;
  inputShrink?: string;
  notifyUrl?: string;
  output?: string;
  scheduleConfigShrink?: string;
  templateId?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      barrages: 'Barrages',
      coverImages: 'CoverImages',
      description: 'Description',
      inputShrink: 'Input',
      notifyUrl: 'NotifyUrl',
      output: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barrages: 'string',
      coverImages: 'string',
      description: 'string',
      inputShrink: 'string',
      notifyUrl: 'string',
      output: 'string',
      scheduleConfigShrink: 'string',
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaCensorJobResponseBody extends $tea.Model {
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

export class SubmitMediaCensorJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitMediaCensorJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitMediaCensorJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobRequest extends $tea.Model {
  input?: SubmitMediaInfoJobRequestInput;
  name?: string;
  scheduleConfig?: SubmitMediaInfoJobRequestScheduleConfig;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitMediaInfoJobRequestInput,
      name: 'string',
      scheduleConfig: SubmitMediaInfoJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobShrinkRequest extends $tea.Model {
  inputShrink?: string;
  name?: string;
  scheduleConfigShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      name: 'Name',
      scheduleConfigShrink: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      name: 'string',
      scheduleConfigShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBody extends $tea.Model {
  mediaInfoJob?: SubmitMediaInfoJobResponseBodyMediaInfoJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: SubmitMediaInfoJobResponseBodyMediaInfoJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitMediaInfoJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitMediaInfoJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaProducingJobRequest extends $tea.Model {
  clientToken?: string;
  clipsParam?: string;
  editingProduceConfig?: string;
  outputMediaConfig?: string;
  outputMediaTarget?: string;
  projectId?: string;
  projectMetadata?: string;
  source?: string;
  templateId?: string;
  timeline?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clipsParam: 'ClipsParam',
      editingProduceConfig: 'EditingProduceConfig',
      outputMediaConfig: 'OutputMediaConfig',
      outputMediaTarget: 'OutputMediaTarget',
      projectId: 'ProjectId',
      projectMetadata: 'ProjectMetadata',
      source: 'Source',
      templateId: 'TemplateId',
      timeline: 'Timeline',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clipsParam: 'string',
      editingProduceConfig: 'string',
      outputMediaConfig: 'string',
      outputMediaTarget: 'string',
      projectId: 'string',
      projectMetadata: 'string',
      source: 'string',
      templateId: 'string',
      timeline: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaProducingJobResponseBody extends $tea.Model {
  jobId?: string;
  mediaId?: string;
  projectId?: string;
  requestId?: string;
  vodMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      vodMediaId: 'VodMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      projectId: 'string',
      requestId: 'string',
      vodMediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaProducingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitMediaProducingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitMediaProducingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackageJobRequest extends $tea.Model {
  inputs?: SubmitPackageJobRequestInputs[];
  name?: string;
  output?: SubmitPackageJobRequestOutput;
  scheduleConfig?: SubmitPackageJobRequestScheduleConfig;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputs: 'Inputs',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputs: { 'type': 'array', 'itemType': SubmitPackageJobRequestInputs },
      name: 'string',
      output: SubmitPackageJobRequestOutput,
      scheduleConfig: SubmitPackageJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackageJobShrinkRequest extends $tea.Model {
  inputsShrink?: string;
  name?: string;
  outputShrink?: string;
  scheduleConfigShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputsShrink: 'Inputs',
      name: 'Name',
      outputShrink: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputsShrink: 'string',
      name: 'string',
      outputShrink: 'string',
      scheduleConfigShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackageJobResponseBody extends $tea.Model {
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

export class SubmitPackageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitPackageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitPackageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmarttagJobRequest extends $tea.Model {
  content?: string;
  contentAddr?: string;
  contentType?: string;
  input?: SubmitSmarttagJobRequestInput;
  notifyUrl?: string;
  params?: string;
  scheduleConfig?: SubmitSmarttagJobRequestScheduleConfig;
  templateId?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentAddr: 'ContentAddr',
      contentType: 'ContentType',
      input: 'Input',
      notifyUrl: 'NotifyUrl',
      params: 'Params',
      scheduleConfig: 'ScheduleConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentAddr: 'string',
      contentType: 'string',
      input: SubmitSmarttagJobRequestInput,
      notifyUrl: 'string',
      params: 'string',
      scheduleConfig: SubmitSmarttagJobRequestScheduleConfig,
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmarttagJobShrinkRequest extends $tea.Model {
  content?: string;
  contentAddr?: string;
  contentType?: string;
  inputShrink?: string;
  notifyUrl?: string;
  params?: string;
  scheduleConfigShrink?: string;
  templateId?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentAddr: 'ContentAddr',
      contentType: 'ContentType',
      inputShrink: 'Input',
      notifyUrl: 'NotifyUrl',
      params: 'Params',
      scheduleConfigShrink: 'ScheduleConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentAddr: 'string',
      contentType: 'string',
      inputShrink: 'string',
      notifyUrl: 'string',
      params: 'string',
      scheduleConfigShrink: 'string',
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmarttagJobResponseBody extends $tea.Model {
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

export class SubmitSmarttagJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSmarttagJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSmarttagJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequest extends $tea.Model {
  input?: SubmitSnapshotJobRequestInput;
  name?: string;
  output?: SubmitSnapshotJobRequestOutput;
  scheduleConfig?: SubmitSnapshotJobRequestScheduleConfig;
  templateConfig?: SubmitSnapshotJobRequestTemplateConfig;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitSnapshotJobRequestInput,
      name: 'string',
      output: SubmitSnapshotJobRequestOutput,
      scheduleConfig: SubmitSnapshotJobRequestScheduleConfig,
      templateConfig: SubmitSnapshotJobRequestTemplateConfig,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobShrinkRequest extends $tea.Model {
  inputShrink?: string;
  name?: string;
  outputShrink?: string;
  scheduleConfigShrink?: string;
  templateConfigShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      name: 'Name',
      outputShrink: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      templateConfigShrink: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      name: 'string',
      outputShrink: 'string',
      scheduleConfigShrink: 'string',
      templateConfigShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBody extends $tea.Model {
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

export class SubmitSubtitleProduceJobRequest extends $tea.Model {
  description?: string;
  editingConfig?: string;
  inputConfig?: string;
  isAsync?: number;
  outputConfig?: string;
  title?: string;
  type?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      isAsync: 'IsAsync',
      outputConfig: 'OutputConfig',
      title: 'Title',
      type: 'Type',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      editingConfig: 'string',
      inputConfig: 'string',
      isAsync: 'number',
      outputConfig: 'string',
      title: 'string',
      type: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSubtitleProduceJobResponseBody extends $tea.Model {
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

export class SubmitSubtitleProduceJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSubtitleProduceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSubtitleProduceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobRequest extends $tea.Model {
  input?: SubmitSyncMediaInfoJobRequestInput;
  name?: string;
  scheduleConfig?: SubmitSyncMediaInfoJobRequestScheduleConfig;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitSyncMediaInfoJobRequestInput,
      name: 'string',
      scheduleConfig: SubmitSyncMediaInfoJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobShrinkRequest extends $tea.Model {
  inputShrink?: string;
  name?: string;
  scheduleConfigShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      name: 'Name',
      scheduleConfigShrink: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      name: 'string',
      scheduleConfigShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponseBody extends $tea.Model {
  mediaInfoJob?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: SubmitSyncMediaInfoJobResponseBodyMediaInfoJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSyncMediaInfoJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSyncMediaInfoJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequest extends $tea.Model {
  inputGroup?: SubmitTranscodeJobRequestInputGroup[];
  name?: string;
  outputGroup?: SubmitTranscodeJobRequestOutputGroup[];
  scheduleConfig?: SubmitTranscodeJobRequestScheduleConfig;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputGroup: 'InputGroup',
      name: 'Name',
      outputGroup: 'OutputGroup',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestInputGroup },
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroup },
      scheduleConfig: SubmitTranscodeJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobShrinkRequest extends $tea.Model {
  inputGroupShrink?: string;
  name?: string;
  outputGroupShrink?: string;
  scheduleConfigShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputGroupShrink: 'InputGroup',
      name: 'Name',
      outputGroupShrink: 'OutputGroup',
      scheduleConfigShrink: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputGroupShrink: 'string',
      name: 'string',
      outputGroupShrink: 'string',
      scheduleConfigShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBody extends $tea.Model {
  requestId?: string;
  transcodeParentJob?: SubmitTranscodeJobResponseBodyTranscodeParentJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeParentJob: 'TranscodeParentJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeParentJob: SubmitTranscodeJobResponseBodyTranscodeParentJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTranscodeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitTranscodeJobResponseBody,
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

export class UpdateCustomTemplateRequest extends $tea.Model {
  name?: string;
  templateConfig?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomTemplateResponseBody extends $tea.Model {
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

export class UpdateCustomTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCustomTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEditingProjectRequest extends $tea.Model {
  businessStatus?: string;
  clipsParam?: string;
  coverURL?: string;
  description?: string;
  projectId?: string;
  templateId?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      clipsParam: 'ClipsParam',
      coverURL: 'CoverURL',
      description: 'Description',
      projectId: 'ProjectId',
      templateId: 'TemplateId',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      clipsParam: 'string',
      coverURL: 'string',
      description: 'string',
      projectId: 'string',
      templateId: 'string',
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

export class UpdateLiveRecordTemplateRequest extends $tea.Model {
  name?: string;
  recordFormat?: UpdateLiveRecordTemplateRequestRecordFormat[];
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormat: 'RecordFormat',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormat: { 'type': 'array', 'itemType': UpdateLiveRecordTemplateRequestRecordFormat },
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRecordTemplateShrinkRequest extends $tea.Model {
  name?: string;
  recordFormatShrink?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormatShrink: 'RecordFormat',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormatShrink: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRecordTemplateResponseBody extends $tea.Model {
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

export class UpdateLiveRecordTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLiveRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLiveRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveSnapshotTemplateRequest extends $tea.Model {
  overwriteFormat?: string;
  sequenceFormat?: string;
  templateId?: string;
  templateName?: string;
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      overwriteFormat: 'OverwriteFormat',
      sequenceFormat: 'SequenceFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteFormat: 'string',
      sequenceFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveSnapshotTemplateResponseBody extends $tea.Model {
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

export class UpdateLiveSnapshotTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLiveSnapshotTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLiveSnapshotTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeJobRequest extends $tea.Model {
  jobId?: string;
  name?: string;
  streamInput?: UpdateLiveTranscodeJobRequestStreamInput;
  timedConfig?: UpdateLiveTranscodeJobRequestTimedConfig;
  transcodeOutput?: UpdateLiveTranscodeJobRequestTranscodeOutput;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      streamInput: 'StreamInput',
      timedConfig: 'TimedConfig',
      transcodeOutput: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      streamInput: UpdateLiveTranscodeJobRequestStreamInput,
      timedConfig: UpdateLiveTranscodeJobRequestTimedConfig,
      transcodeOutput: UpdateLiveTranscodeJobRequestTranscodeOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeJobShrinkRequest extends $tea.Model {
  jobId?: string;
  name?: string;
  streamInputShrink?: string;
  timedConfigShrink?: string;
  transcodeOutputShrink?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      streamInputShrink: 'StreamInput',
      timedConfigShrink: 'TimedConfig',
      transcodeOutputShrink: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      streamInputShrink: 'string',
      timedConfigShrink: 'string',
      transcodeOutputShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeJobResponseBody extends $tea.Model {
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

export class UpdateLiveTranscodeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLiveTranscodeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLiveTranscodeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateRequest extends $tea.Model {
  name?: string;
  templateConfig?: UpdateLiveTranscodeTemplateRequestTemplateConfig;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: UpdateLiveTranscodeTemplateRequestTemplateConfig,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateShrinkRequest extends $tea.Model {
  name?: string;
  templateConfigShrink?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfigShrink: 'TemplateConfig',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfigShrink: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateResponseBody extends $tea.Model {
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

export class UpdateLiveTranscodeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLiveTranscodeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLiveTranscodeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaInfoRequest extends $tea.Model {
  appendTags?: boolean;
  businessType?: string;
  cateId?: number;
  category?: string;
  coverURL?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  referenceId?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appendTags: 'AppendTags',
      businessType: 'BusinessType',
      cateId: 'CateId',
      category: 'Category',
      coverURL: 'CoverURL',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      referenceId: 'ReferenceId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendTags: 'boolean',
      businessType: 'string',
      cateId: 'number',
      category: 'string',
      coverURL: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      referenceId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaInfoResponseBody extends $tea.Model {
  mediaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineRequest extends $tea.Model {
  name?: string;
  pipelineId?: string;
  priority?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineResponseBody extends $tea.Model {
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

export class UpdatePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartJobRequest extends $tea.Model {
  FEExtend?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      FEExtend: 'FEExtend',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FEExtend: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartJobResponseBody extends $tea.Model {
  FEExtend?: string;
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      FEExtend: 'FEExtend',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FEExtend: 'string',
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSmartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  config?: string;
  coverUrl?: string;
  name?: string;
  previewMedia?: string;
  relatedMediaids?: string;
  source?: string;
  status?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      relatedMediaids: 'RelatedMediaids',
      source: 'Source',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      coverUrl: 'string',
      name: 'string',
      previewMedia: 'string',
      relatedMediaids: 'string',
      source: 'string',
      status: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
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

export class UpdateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMediaByURLRequest extends $tea.Model {
  appId?: string;
  entityId?: string;
  mediaMetaData?: string;
  postProcessConfig?: string;
  uploadTargetConfig?: string;
  uploadURLs?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      entityId: 'EntityId',
      mediaMetaData: 'MediaMetaData',
      postProcessConfig: 'PostProcessConfig',
      uploadTargetConfig: 'UploadTargetConfig',
      uploadURLs: 'UploadURLs',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      entityId: 'string',
      mediaMetaData: 'string',
      postProcessConfig: 'string',
      uploadTargetConfig: 'string',
      uploadURLs: 'string',
      userData: 'string',
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
  jobId?: string;
  mediaId?: string;
  requestId?: string;
  sourceURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      jobId: 'JobId',
      mediaId: 'MediaId',
      requestId: 'RequestId',
      sourceURL: 'SourceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      jobId: 'string',
      mediaId: 'string',
      requestId: 'string',
      sourceURL: 'string',
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

export class AddEditingProjectMaterialsResponseBodyLiveMaterials extends $tea.Model {
  appName?: string;
  domainName?: string;
  liveUrl?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      liveUrl: 'LiveUrl',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      liveUrl: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
  businessType?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  snapshots?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  transcodeStatus?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBodyMediaInfos extends $tea.Model {
  fileInfoList?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
  mediaBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplate extends $tea.Model {
  config?: string;
  coverUrl?: string;
  createSource?: string;
  modifiedSource?: string;
  name?: string;
  previewMedia?: string;
  status?: string;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      createSource: 'CreateSource',
      modifiedSource: 'ModifiedSource',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      status: 'Status',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      coverUrl: 'string',
      createSource: 'string',
      modifiedSource: 'string',
      name: 'string',
      previewMedia: 'string',
      status: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: BatchGetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
  businessType?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  snapshots?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  transcodeStatus?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBodyMediaInfos extends $tea.Model {
  fileInfoList?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoList[];
  mediaBasicInfo?: BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomTemplateResponseBodyCustomTemplate extends $tea.Model {
  createTime?: string;
  isDefault?: boolean;
  modifiedTime?: string;
  status?: string;
  subtype?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      isDefault: 'IsDefault',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      subtype: 'Subtype',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isDefault: 'boolean',
      modifiedTime: 'string',
      status: 'string',
      subtype: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEditingProjectResponseBodyProject extends $tea.Model {
  businessConfig?: string;
  businessStatus?: string;
  clipsParam?: string;
  coverURL?: string;
  createSource?: string;
  createTime?: string;
  description?: string;
  duration?: number;
  modifiedSource?: string;
  modifiedTime?: string;
  projectId?: string;
  projectType?: string;
  status?: number;
  statusName?: string;
  templateId?: string;
  templateType?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      businessStatus: 'BusinessStatus',
      clipsParam: 'ClipsParam',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      createTime: 'CreateTime',
      description: 'Description',
      duration: 'Duration',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      projectType: 'ProjectType',
      status: 'Status',
      statusName: 'StatusName',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      businessStatus: 'string',
      clipsParam: 'string',
      coverURL: 'string',
      createSource: 'string',
      createTime: 'string',
      description: 'string',
      duration: 'number',
      modifiedSource: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      projectType: 'string',
      status: 'number',
      statusName: 'string',
      templateId: 'string',
      templateType: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRecordTemplateRequestRecordFormat extends $tea.Model {
  cycleDuration?: number;
  format?: string;
  ossObjectPrefix?: string;
  sliceDuration?: number;
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
      sliceOssObjectPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams extends $tea.Model {
  bitrate?: string;
  codec?: string;
  fps?: string;
  gop?: string;
  height?: string;
  profile?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      profile: 'Profile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codec: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      profile: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveTranscodeTemplateRequestTemplateConfig extends $tea.Model {
  audioParams?: CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams;
  videoParams?: CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams,
      videoParams: CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponseBodyPipeline extends $tea.Model {
  createTime?: string;
  modifiedTime?: string;
  name?: string;
  pipelineId?: string;
  priority?: number;
  speed?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      speed: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordFilesResponseBodyDeleteFileInfoList extends $tea.Model {
  code?: string;
  message?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList extends $tea.Model {
  createTimestamp?: number;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilterConfigsResponseBodyFilterConfigs extends $tea.Model {
  filterName?: string;
  itemConfigs?: string;
  type?: string;
  uuId?: string;
  static names(): { [key: string]: string } {
    return {
      filterName: 'FilterName',
      itemConfigs: 'ItemConfigs',
      type: 'Type',
      uuId: 'UuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterName: 'string',
      itemConfigs: 'string',
      type: 'string',
      uuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceEditUsageResponseBodyData extends $tea.Model {
  duration?: number;
  profile?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      profile: 'Profile',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      profile: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceLiveMediaConvertUsageResponseBodyData extends $tea.Model {
  duration?: number;
  specification?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      specification: 'Specification',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUHDUsageResponseBodyData extends $tea.Model {
  duration?: number;
  specification?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      specification: 'Specification',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMediaConvertUsageResponseBodyData extends $tea.Model {
  duration?: number;
  specification?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      specification: 'Specification',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterIceMpsAiUsageResponseBodyData extends $tea.Model {
  duration?: number;
  time?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      time: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsEditUsageResponseBodyData extends $tea.Model {
  duration?: number;
  profile?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      profile: 'Profile',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      profile: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveEditUsageResponseBodyData extends $tea.Model {
  duration?: number;
  profile?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      profile: 'Profile',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      profile: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveMediaConvertUsageResponseBodyData extends $tea.Model {
  duration?: number;
  specification?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      specification: 'Specification',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveRecordUsageResponseBodyData extends $tea.Model {
  channels?: number;
  duration?: number;
  time?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      duration: 'Duration',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: 'number',
      duration: 'number',
      time: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsLiveSnapshotUsageResponseBodyData extends $tea.Model {
  count?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUHDUsageResponseBodyData extends $tea.Model {
  duration?: number;
  specification?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      specification: 'Specification',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMediaConvertUsageResponseBodyData extends $tea.Model {
  duration?: number;
  specification?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      specification: 'Specification',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMpsAiUsageResponseBodyData extends $tea.Model {
  duration?: number;
  time?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      time: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsSummaryResponseBodyData extends $tea.Model {
  editingDuration?: string;
  liveEditDuration?: string;
  liveRecordDuration?: string;
  liveSnapshotCount?: string;
  liveTranscodeDuration?: number;
  mpsAiDuration?: number;
  mpsTranscodeDuration?: number;
  mpsTranscodeUHDDuration?: number;
  static names(): { [key: string]: string } {
    return {
      editingDuration: 'EditingDuration',
      liveEditDuration: 'LiveEditDuration',
      liveRecordDuration: 'LiveRecordDuration',
      liveSnapshotCount: 'LiveSnapshotCount',
      liveTranscodeDuration: 'LiveTranscodeDuration',
      mpsAiDuration: 'MpsAiDuration',
      mpsTranscodeDuration: 'MpsTranscodeDuration',
      mpsTranscodeUHDDuration: 'MpsTranscodeUHDDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingDuration: 'string',
      liveEditDuration: 'string',
      liveRecordDuration: 'string',
      liveSnapshotCount: 'string',
      liveTranscodeDuration: 'number',
      mpsAiDuration: 'number',
      mpsTranscodeDuration: 'number',
      mpsTranscodeUHDDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayDetailResponseBodyBaseInfos extends $tea.Model {
  appName?: string;
  bps?: string;
  broadcastPace?: string;
  clientIP?: string;
  codec?: string;
  decodeStuckTime?: string;
  definition?: string;
  firstFrameDuration?: string;
  fps?: string;
  isHardDecode?: string;
  mdat?: string;
  moov?: string;
  network?: string;
  networkDuration?: string;
  networkStuckTime?: string;
  os?: string;
  playTs?: string;
  playerLoadDuration?: string;
  playerPreDealDuration?: string;
  playerReadyDuration?: string;
  sdkVersion?: string;
  sessionId?: string;
  status?: string;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bps: 'Bps',
      broadcastPace: 'BroadcastPace',
      clientIP: 'ClientIP',
      codec: 'Codec',
      decodeStuckTime: 'DecodeStuckTime',
      definition: 'Definition',
      firstFrameDuration: 'FirstFrameDuration',
      fps: 'Fps',
      isHardDecode: 'IsHardDecode',
      mdat: 'Mdat',
      moov: 'Moov',
      network: 'Network',
      networkDuration: 'NetworkDuration',
      networkStuckTime: 'NetworkStuckTime',
      os: 'Os',
      playTs: 'PlayTs',
      playerLoadDuration: 'PlayerLoadDuration',
      playerPreDealDuration: 'PlayerPreDealDuration',
      playerReadyDuration: 'PlayerReadyDuration',
      sdkVersion: 'SdkVersion',
      sessionId: 'SessionId',
      status: 'Status',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bps: 'string',
      broadcastPace: 'string',
      clientIP: 'string',
      codec: 'string',
      decodeStuckTime: 'string',
      definition: 'string',
      firstFrameDuration: 'string',
      fps: 'string',
      isHardDecode: 'string',
      mdat: 'string',
      moov: 'string',
      network: 'string',
      networkDuration: 'string',
      networkStuckTime: 'string',
      os: 'string',
      playTs: 'string',
      playerLoadDuration: 'string',
      playerPreDealDuration: 'string',
      playerReadyDuration: 'string',
      sdkVersion: 'string',
      sessionId: 'string',
      status: 'string',
      terminalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayEventListResponseBodyEventList extends $tea.Model {
  description?: string;
  duration?: number;
  eventName?: string;
  time?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      duration: 'Duration',
      eventName: 'EventName',
      time: 'Time',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      duration: 'number',
      eventName: 'string',
      time: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayFirstFrameDurationMetricDataResponseBodyNodes extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayListResponseBodyPlayList extends $tea.Model {
  firstFrameDuration?: string;
  playDuration?: string;
  playTs?: string;
  playType?: string;
  sessionId?: string;
  status?: string;
  stuckDuration?: string;
  traceId?: string;
  videoDuration?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      firstFrameDuration: 'FirstFrameDuration',
      playDuration: 'PlayDuration',
      playTs: 'PlayTs',
      playType: 'PlayType',
      sessionId: 'SessionId',
      status: 'Status',
      stuckDuration: 'StuckDuration',
      traceId: 'TraceId',
      videoDuration: 'VideoDuration',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstFrameDuration: 'string',
      playDuration: 'string',
      playTs: 'string',
      playType: 'string',
      sessionId: 'string',
      status: 'string',
      stuckDuration: 'string',
      traceId: 'string',
      videoDuration: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayMetricDataResponseBodyNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQoeListResponseBodyQoeInfoList extends $tea.Model {
  qoeFinishedVV?: number;
  qoeFinishedVVRate?: number;
  qoeUFinishedVVTime?: number;
  qoeUV?: number;
  qoeUVVDuration?: number;
  qoeUVVTime?: number;
  qoeVDuration?: number;
  qoeVVDuration?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      qoeFinishedVV: 'QoeFinishedVV',
      qoeFinishedVVRate: 'QoeFinishedVVRate',
      qoeUFinishedVVTime: 'QoeUFinishedVVTime',
      qoeUV: 'QoeUV',
      qoeUVVDuration: 'QoeUVVDuration',
      qoeUVVTime: 'QoeUVVTime',
      qoeVDuration: 'QoeVDuration',
      qoeVVDuration: 'QoeVVDuration',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qoeFinishedVV: 'number',
      qoeFinishedVVRate: 'number',
      qoeUFinishedVVTime: 'number',
      qoeUV: 'number',
      qoeUVVDuration: 'number',
      qoeUVVTime: 'number',
      qoeVDuration: 'number',
      qoeVVDuration: 'number',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQosListResponseBodyQosInfoList extends $tea.Model {
  qosFirstFrame?: string;
  qosKbps?: string;
  qosPlay?: string;
  qosPlayFail?: string;
  qosRealPlay?: string;
  qosSeedFailRate?: string;
  qosStuckRate?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      qosFirstFrame: 'QosFirstFrame',
      qosKbps: 'QosKbps',
      qosPlay: 'QosPlay',
      qosPlayFail: 'QosPlayFail',
      qosRealPlay: 'QosRealPlay',
      qosSeedFailRate: 'QosSeedFailRate',
      qosStuckRate: 'QosStuckRate',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosFirstFrame: 'string',
      qosKbps: 'string',
      qosPlay: 'string',
      qosPlayFail: 'string',
      qosRealPlay: 'string',
      qosSeedFailRate: 'string',
      qosStuckRate: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryConfigsResponseBodyConfigs extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
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

export class GetCustomTemplateResponseBodyCustomTemplate extends $tea.Model {
  createTime?: string;
  isDefault?: boolean;
  modifiedTime?: string;
  status?: string;
  subtype?: number;
  subtypeName?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      isDefault: 'IsDefault',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      subtype: 'Subtype',
      subtypeName: 'SubtypeName',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isDefault: 'boolean',
      modifiedTime: 'string',
      status: 'string',
      subtype: 'number',
      subtypeName: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicImageJobResponseBodyDynamicImageJobInput extends $tea.Model {
  media?: string;
  ossFile?: GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      ossFile: 'OssFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      ossFile: GetDynamicImageJobResponseBodyDynamicImageJobInputOssFile,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicImageJobResponseBodyDynamicImageJobOutput extends $tea.Model {
  media?: string;
  ossFile?: GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      ossFile: 'OssFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      ossFile: GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicImageJobResponseBodyDynamicImageJob extends $tea.Model {
  code?: string;
  createTime?: string;
  finishTime?: string;
  input?: GetDynamicImageJobResponseBodyDynamicImageJobInput;
  jobId?: string;
  message?: string;
  modifiedTime?: string;
  name?: string;
  output?: GetDynamicImageJobResponseBodyDynamicImageJobOutput;
  outputUrl?: string;
  pipelineId?: string;
  status?: string;
  submitTime?: string;
  templateConfig?: string;
  templateId?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      outputUrl: 'OutputUrl',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      input: GetDynamicImageJobResponseBodyDynamicImageJobInput,
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetDynamicImageJobResponseBodyDynamicImageJobOutput,
      outputUrl: 'string',
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateConfig: 'string',
      templateId: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponseBodyProject extends $tea.Model {
  businessConfig?: string;
  businessStatus?: string;
  clipsParam?: string;
  coverURL?: string;
  createSource?: string;
  createTime?: string;
  description?: string;
  duration?: number;
  modifiedSource?: string;
  modifiedTime?: string;
  projectId?: string;
  projectType?: string;
  status?: string;
  templateId?: string;
  templateType?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      businessStatus: 'BusinessStatus',
      clipsParam: 'ClipsParam',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      createTime: 'CreateTime',
      description: 'Description',
      duration: 'Duration',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      projectType: 'ProjectType',
      status: 'Status',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      businessStatus: 'string',
      clipsParam: 'string',
      coverURL: 'string',
      createSource: 'string',
      createTime: 'string',
      description: 'string',
      duration: 'number',
      modifiedSource: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      projectType: 'string',
      status: 'string',
      templateId: 'string',
      templateType: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyLiveMaterials extends $tea.Model {
  appName?: string;
  domainName?: string;
  liveUrl?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      liveUrl: 'LiveUrl',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      liveUrl: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
  businessType?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  snapshots?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  transcodeStatus?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMediaInfos extends $tea.Model {
  fileInfoList?: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
  mediaBasicInfo?: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig extends $tea.Model {
  appName?: string;
  domainName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig extends $tea.Model {
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig extends $tea.Model {
  bitrate?: number;
  fileName?: string;
  height?: number;
  mediaURL?: string;
  storageLocation?: string;
  vodTemplateGroupId?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      fileName: 'FileName',
      height: 'Height',
      mediaURL: 'MediaURL',
      storageLocation: 'StorageLocation',
      vodTemplateGroupId: 'VodTemplateGroupId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      fileName: 'string',
      height: 'number',
      mediaURL: 'string',
      storageLocation: 'string',
      vodTemplateGroupId: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBodyLiveEditingJob extends $tea.Model {
  clips?: string;
  code?: string;
  completeTime?: string;
  creationTime?: string;
  jobId?: string;
  liveStreamConfig?: GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig;
  mediaId?: string;
  mediaProduceConfig?: GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig;
  mediaURL?: string;
  message?: string;
  modifiedTime?: string;
  outputMediaConfig?: GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig;
  projectId?: string;
  status?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      code: 'Code',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      jobId: 'JobId',
      liveStreamConfig: 'LiveStreamConfig',
      mediaId: 'MediaId',
      mediaProduceConfig: 'MediaProduceConfig',
      mediaURL: 'MediaURL',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      outputMediaConfig: 'OutputMediaConfig',
      projectId: 'ProjectId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: 'string',
      code: 'string',
      completeTime: 'string',
      creationTime: 'string',
      jobId: 'string',
      liveStreamConfig: GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig,
      mediaId: 'string',
      mediaProduceConfig: GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig,
      mediaURL: 'string',
      message: 'string',
      modifiedTime: 'string',
      outputMediaConfig: GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig,
      projectId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordJobResponseBodyRecordJobRecordOutput extends $tea.Model {
  bucket?: string;
  endpoint?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordJobResponseBodyRecordJobStreamInput extends $tea.Model {
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordJobResponseBodyRecordJob extends $tea.Model {
  createTime?: string;
  jobId?: string;
  name?: string;
  notifyUrl?: string;
  recordOutput?: GetLiveRecordJobResponseBodyRecordJobRecordOutput;
  status?: string;
  streamInput?: GetLiveRecordJobResponseBodyRecordJobStreamInput;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutput: 'RecordOutput',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      notifyUrl: 'string',
      recordOutput: GetLiveRecordJobResponseBodyRecordJobRecordOutput,
      status: 'string',
      streamInput: GetLiveRecordJobResponseBodyRecordJobStreamInput,
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordTemplateResponseBodyRecordTemplateRecordFormatList extends $tea.Model {
  cycleDuration?: number;
  format?: string;
  ossObjectPrefix?: string;
  sliceDuration?: number;
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
      sliceOssObjectPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordTemplateResponseBodyRecordTemplate extends $tea.Model {
  createTime?: string;
  lastModified?: string;
  name?: string;
  recordFormatList?: GetLiveRecordTemplateResponseBodyRecordTemplateRecordFormatList[];
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModified: 'LastModified',
      name: 'Name',
      recordFormatList: 'RecordFormatList',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastModified: 'string',
      name: 'string',
      recordFormatList: { 'type': 'array', 'itemType': GetLiveRecordTemplateResponseBodyRecordTemplateRecordFormatList },
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotJobResponseBodySnapshotOutput extends $tea.Model {
  bucket?: string;
  endpoint?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotJobResponseBodyStreamInput extends $tea.Model {
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos extends $tea.Model {
  outputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobResponseBodyJobOutputStream extends $tea.Model {
  streamInfos?: GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: { 'type': 'array', 'itemType': GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobResponseBodyJobStreamInput extends $tea.Model {
  inputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobResponseBodyJob extends $tea.Model {
  createTime?: string;
  jobId?: string;
  name?: string;
  outputStream?: GetLiveTranscodeJobResponseBodyJobOutputStream;
  startMode?: number;
  status?: number;
  streamInput?: GetLiveTranscodeJobResponseBodyJobStreamInput;
  templateId?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      outputStream: 'OutputStream',
      startMode: 'StartMode',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      outputStream: GetLiveTranscodeJobResponseBodyJobOutputStream,
      startMode: 'number',
      status: 'number',
      streamInput: GetLiveTranscodeJobResponseBodyJobStreamInput,
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams extends $tea.Model {
  bitrate?: string;
  codec?: string;
  fps?: string;
  gop?: string;
  height?: string;
  profile?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      profile: 'Profile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codec: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      profile: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig extends $tea.Model {
  audioParams?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams;
  videoParams?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams,
      videoParams: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeTemplateResponseBodyTemplateContent extends $tea.Model {
  category?: string;
  createTime?: string;
  name?: string;
  templateConfig?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      name: 'string',
      templateConfig: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig,
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoAiRoughData extends $tea.Model {
  result?: string;
  saveType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      saveType: 'SaveType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      saveType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $tea.Model {
  bitrate?: string;
  channelLayout?: string;
  channels?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  duration?: string;
  fps?: string;
  index?: string;
  lang?: string;
  numFrames?: string;
  profile?: string;
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
      fps: 'Fps',
      index: 'Index',
      lang: 'Lang',
      numFrames: 'NumFrames',
      profile: 'Profile',
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
      fps: 'string',
      index: 'string',
      lang: 'string',
      numFrames: 'string',
      profile: 'string',
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

export class GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  createTime?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  modifiedTime?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      createTime: 'CreateTime',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      createTime: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      modifiedTime: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $tea.Model {
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  duration?: string;
  index?: string;
  lang?: string;
  startTime?: string;
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $tea.Model {
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
  hasBFrames?: string;
  height?: string;
  index?: string;
  lang?: string;
  level?: string;
  nbFrames?: string;
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
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      nbFrames: 'Nb_frames',
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
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      nbFrames: 'string',
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

export class GetMediaInfoResponseBodyMediaInfoFileInfoList extends $tea.Model {
  audioStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  fileBasicInfo?: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  subtitleStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  videoStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      subtitleStreamInfoList: 'SubtitleStreamInfoList',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoMediaBasicInfo extends $tea.Model {
  biz?: string;
  businessType?: string;
  cateId?: number;
  cateName?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  referenceId?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  uploadSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      businessType: 'BusinessType',
      cateId: 'CateId',
      cateName: 'CateName',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      referenceId: 'ReferenceId',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      uploadSource: 'UploadSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
      cateId: 'number',
      cateName: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      referenceId: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      uploadSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfo extends $tea.Model {
  aiRoughData?: GetMediaInfoResponseBodyMediaInfoAiRoughData;
  fileInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoList[];
  mediaBasicInfo?: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiRoughData: 'AiRoughData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRoughData: GetMediaInfoResponseBodyMediaInfoAiRoughData,
      fileInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobResponseBodyMediaInfoJobInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList extends $tea.Model {
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

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  mediaId?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList extends $tea.Model {
  avgFps?: string;
  bitRate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  dar?: string;
  duration?: string;
  fps?: string;
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
  timeBase?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
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
      timeBase: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty extends $tea.Model {
  audioStreamInfoList?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList[];
  fileBasicInfo?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo;
  videoStreamInfoList?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobResponseBodyMediaInfoJobScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoJobResponseBodyMediaInfoJob extends $tea.Model {
  async?: boolean;
  finishTime?: string;
  input?: GetMediaInfoJobResponseBodyMediaInfoJobInput;
  jobId?: string;
  mediaInfoProperty?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty;
  name?: string;
  requestId?: string;
  scheduleConfig?: GetMediaInfoJobResponseBodyMediaInfoJobScheduleConfig;
  status?: string;
  submitResultJson?: { [key: string]: any };
  submitTime?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      mediaInfoProperty: 'MediaInfoProperty',
      name: 'Name',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      finishTime: 'string',
      input: GetMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      mediaInfoProperty: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty,
      name: 'string',
      requestId: 'string',
      scheduleConfig: GetMediaInfoJobResponseBodyMediaInfoJobScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobResponseBodyMediaProducingJob extends $tea.Model {
  clipsParam?: string;
  code?: string;
  completeTime?: string;
  createTime?: string;
  duration?: number;
  jobId?: string;
  mediaId?: string;
  mediaURL?: string;
  message?: string;
  modifiedTime?: string;
  projectId?: string;
  status?: string;
  templateId?: string;
  timeline?: string;
  vodMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      clipsParam: 'ClipsParam',
      code: 'Code',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      duration: 'Duration',
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      status: 'Status',
      templateId: 'TemplateId',
      timeline: 'Timeline',
      vodMediaId: 'VodMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsParam: 'string',
      code: 'string',
      completeTime: 'string',
      createTime: 'string',
      duration: 'number',
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      message: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      status: 'string',
      templateId: 'string',
      timeline: 'string',
      vodMediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobResponseBodyPackageJobInputsInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobResponseBodyPackageJobInputs extends $tea.Model {
  input?: GetPackageJobResponseBodyPackageJobInputsInput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: GetPackageJobResponseBodyPackageJobInputsInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobResponseBodyPackageJobOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobResponseBodyPackageJob extends $tea.Model {
  code?: string;
  createTime?: string;
  finishTime?: string;
  inputs?: GetPackageJobResponseBodyPackageJobInputs[];
  jobId?: string;
  message?: string;
  modifiedTime?: string;
  name?: string;
  output?: GetPackageJobResponseBodyPackageJobOutput;
  outputUrl?: string;
  pipelineId?: string;
  priority?: number;
  status?: string;
  submitTime?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputs: 'Inputs',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      outputUrl: 'OutputUrl',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      status: 'Status',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      inputs: { 'type': 'array', 'itemType': GetPackageJobResponseBodyPackageJobInputs },
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetPackageJobResponseBodyPackageJobOutput,
      outputUrl: 'string',
      pipelineId: 'string',
      priority: 'number',
      status: 'string',
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipeline extends $tea.Model {
  createTime?: string;
  modifiedTime?: string;
  name?: string;
  pipelineId?: string;
  priority?: number;
  speed?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      speed: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyMediaBase extends $tea.Model {
  coverURL?: string;
  creationTime?: string;
  mediaId?: string;
  mediaType?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      creationTime: 'string',
      mediaId: 'string',
      mediaType: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyPlayInfoList extends $tea.Model {
  bitDepth?: number;
  bitrate?: string;
  creationTime?: string;
  definition?: string;
  duration?: string;
  encrypt?: number;
  encryptType?: string;
  fileURL?: string;
  format?: string;
  fps?: string;
  HDRType?: string;
  height?: number;
  modificationTime?: string;
  narrowBandType?: string;
  playURL?: string;
  size?: number;
  status?: string;
  streamTags?: string;
  streamType?: string;
  transTemplateType?: string;
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
      fileURL: 'FileURL',
      format: 'Format',
      fps: 'Fps',
      HDRType: 'HDRType',
      height: 'Height',
      modificationTime: 'ModificationTime',
      narrowBandType: 'NarrowBandType',
      playURL: 'PlayURL',
      size: 'Size',
      status: 'Status',
      streamTags: 'StreamTags',
      streamType: 'StreamType',
      transTemplateType: 'TransTemplateType',
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
      fileURL: 'string',
      format: 'string',
      fps: 'string',
      HDRType: 'string',
      height: 'number',
      modificationTime: 'string',
      narrowBandType: 'string',
      playURL: 'string',
      size: 'number',
      status: 'string',
      streamTags: 'string',
      streamType: 'string',
      transTemplateType: 'string',
      watermarkId: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData extends $tea.Model {
  data?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $tea.Model {
  bitrate?: string;
  channelLayout?: string;
  channels?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  duration?: string;
  fps?: string;
  index?: string;
  lang?: string;
  numFrames?: string;
  profile?: string;
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
      fps: 'Fps',
      index: 'Index',
      lang: 'Lang',
      numFrames: 'NumFrames',
      profile: 'Profile',
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
      fps: 'string',
      index: 'string',
      lang: 'string',
      numFrames: 'string',
      profile: 'string',
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $tea.Model {
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  duration?: string;
  index?: string;
  lang?: string;
  startTime?: string;
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $tea.Model {
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
  hasBFrames?: string;
  height?: string;
  index?: string;
  lang?: string;
  level?: string;
  nbFrames?: string;
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
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      nbFrames: 'Nb_frames',
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
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      nbFrames: 'string',
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoList extends $tea.Model {
  audioStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  fileBasicInfo?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  subtitleStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  videoStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      subtitleStreamInfoList: 'SubtitleStreamInfoList',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo extends $tea.Model {
  businessType?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicMediaInfoResponseBodyMediaInfo extends $tea.Model {
  dynamicMetaData?: GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData;
  fileInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoList[];
  mediaBasicInfo?: GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData,
      fileInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBodySmartJobInfoInputConfig extends $tea.Model {
  inputFile?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBodySmartJobInfoOutputConfig extends $tea.Model {
  bucket?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBodySmartJobInfo extends $tea.Model {
  createTime?: string;
  description?: string;
  inputConfig?: GetSmartHandleJobResponseBodySmartJobInfoInputConfig;
  jobType?: string;
  modifiedTime?: string;
  outputConfig?: GetSmartHandleJobResponseBodySmartJobInfoOutputConfig;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      inputConfig: 'InputConfig',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      inputConfig: GetSmartHandleJobResponseBodySmartJobInfoInputConfig,
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: GetSmartHandleJobResponseBodySmartJobInfoOutputConfig,
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJobInputOssFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJobInput extends $tea.Model {
  media?: string;
  ossFile?: GetSnapshotJobResponseBodySnapshotJobInputOssFile;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      ossFile: 'OssFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      ossFile: GetSnapshotJobResponseBodySnapshotJobInputOssFile,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJobOutputOssFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJobOutput extends $tea.Model {
  media?: string;
  ossFile?: GetSnapshotJobResponseBodySnapshotJobOutputOssFile;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      ossFile: 'OssFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      ossFile: GetSnapshotJobResponseBodySnapshotJobOutputOssFile,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotJobResponseBodySnapshotJob extends $tea.Model {
  async?: boolean;
  code?: string;
  count?: number;
  createTime?: string;
  finishTime?: string;
  input?: GetSnapshotJobResponseBodySnapshotJobInput;
  jobId?: string;
  message?: string;
  modifiedTime?: string;
  name?: string;
  output?: GetSnapshotJobResponseBodySnapshotJobOutput;
  pipelineId?: string;
  status?: string;
  submitTime?: string;
  templateConfig?: string;
  templateId?: string;
  triggerSource?: string;
  type?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      code: 'Code',
      count: 'Count',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
      type: 'Type',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      count: 'number',
      createTime: 'string',
      finishTime: 'string',
      input: GetSnapshotJobResponseBodySnapshotJobInput,
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetSnapshotJobResponseBodySnapshotJobOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateConfig: 'string',
      templateId: 'string',
      triggerSource: 'string',
      type: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSystemTemplateResponseBodySystemTemplate extends $tea.Model {
  status?: string;
  subtype?: number;
  subtypeName?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subtype: 'Subtype',
      subtypeName: 'SubtypeName',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      subtype: 'number',
      subtypeName: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyTemplate extends $tea.Model {
  clipsParam?: string;
  config?: string;
  coverURL?: string;
  createSource?: string;
  creationTime?: string;
  modifiedSource?: string;
  modifiedTime?: string;
  name?: string;
  previewMedia?: string;
  previewMediaStatus?: string;
  relatedMediaids?: string;
  status?: string;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clipsParam: 'ClipsParam',
      config: 'Config',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      creationTime: 'CreationTime',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      previewMediaStatus: 'PreviewMediaStatus',
      relatedMediaids: 'RelatedMediaids',
      status: 'Status',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsParam: 'string',
      config: 'string',
      coverURL: 'string',
      createSource: 'string',
      creationTime: 'string',
      modifiedSource: 'string',
      modifiedTime: 'string',
      name: 'string',
      previewMedia: 'string',
      previewMediaStatus: 'string',
      relatedMediaids: 'string',
      status: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobInputGroup extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput extends $tea.Model {
  media?: string;
  outputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      outputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs extends $tea.Model {
  audioIndex?: string;
  duration?: number;
  start?: number;
  videoIndex?: string;
  static names(): { [key: string]: string } {
    return {
      audioIndex: 'AudioIndex',
      duration: 'Duration',
      start: 'Start',
      videoIndex: 'VideoIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIndex: 'string',
      duration: 'number',
      start: 'number',
      videoIndex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption extends $tea.Model {
  cipherText?: string;
  decryptKeyUri?: string;
  encryptType?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $tea.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams extends $tea.Model {
  dx?: string;
  dy?: string;
  file?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  height?: string;
  referPos?: string;
  timeline?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams extends $tea.Model {
  charEnc?: string;
  file?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      file: 'File',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      file: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams extends $tea.Model {
  adaptive?: string;
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  fontAlpha?: string;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  left?: string;
  top?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  loudnessRangeTarget?: string;
  method?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  remove?: string;
  samplerate?: string;
  volume?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $tea.Model {
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $tea.Model {
  duration?: string;
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      forceSegTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $tea.Model {
  segment?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $tea.Model {
  abrMax?: string;
  bitrate?: string;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  fps?: string;
  gop?: string;
  height?: string;
  longShortMode?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  remove?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      abrMax: 'AbrMax',
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrMax: 'string',
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams extends $tea.Model {
  audio?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  container?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  muxConfig?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  video?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      video: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig extends $tea.Model {
  combineConfigs?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs[];
  encryption?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption;
  imageWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks[];
  subtitles?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles[];
  textWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks[];
  transcode?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs },
      encryption: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks },
      subtitles: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks },
      transcode: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroup extends $tea.Model {
  output?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput;
  processConfig?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput,
      processConfig: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup extends $tea.Model {
  inputUrl?: string;
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList extends $tea.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  mediaId?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList extends $tea.Model {
  avgFps?: string;
  bitRate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  dar?: string;
  duration?: string;
  fps?: string;
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
  timeBase?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
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
      timeBase: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta extends $tea.Model {
  audioStreamInfoList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList[];
  fileBasicInfo?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo;
  videoStreamInfoList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList },
      fileBasicInfo: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput extends $tea.Model {
  media?: string;
  outputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      outputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs extends $tea.Model {
  audioIndex?: string;
  duration?: number;
  start?: number;
  videoIndex?: string;
  static names(): { [key: string]: string } {
    return {
      audioIndex: 'AudioIndex',
      duration: 'Duration',
      start: 'Start',
      videoIndex: 'VideoIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIndex: 'string',
      duration: 'number',
      start: 'number',
      videoIndex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption extends $tea.Model {
  cipherText?: string;
  decryptKeyUri?: string;
  encryptType?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline extends $tea.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams extends $tea.Model {
  dx?: string;
  dy?: string;
  file?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile;
  height?: string;
  referPos?: string;
  timeline?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams extends $tea.Model {
  charEnc?: string;
  file?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      file: 'File',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      file: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile,
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams extends $tea.Model {
  adaptive?: string;
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  fontAlpha?: string;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  left?: string;
  top?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  loudnessRangeTarget?: string;
  method?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  remove?: string;
  samplerate?: string;
  volume?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer extends $tea.Model {
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $tea.Model {
  duration?: string;
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      forceSegTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig extends $tea.Model {
  segment?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo extends $tea.Model {
  abrMax?: string;
  bitrate?: string;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  fps?: string;
  gop?: string;
  height?: string;
  longShortMode?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  remove?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      abrMax: 'AbrMax',
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrMax: 'string',
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams extends $tea.Model {
  audio?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio;
  container?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer;
  muxConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig;
  tags?: { [key: string]: string };
  video?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      tags: 'Tags',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio,
      container: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      video: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode extends $tea.Model {
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig extends $tea.Model {
  combineConfigs?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs[];
  encryption?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption;
  imageWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks[];
  isInheritTags?: boolean;
  subtitles?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles[];
  textWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks[];
  transcode?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      isInheritTags: 'IsInheritTags',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs },
      encryption: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks },
      isInheritTags: 'boolean',
      subtitles: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks },
      transcode: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList extends $tea.Model {
  createTime?: string;
  finishTime?: string;
  inputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup[];
  jobId?: string;
  jobIndex?: number;
  name?: string;
  outFileMeta?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta;
  output?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput;
  parentJobId?: string;
  processConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig;
  requestId?: string;
  scheduleConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig;
  status?: string;
  submitResultJson?: { [key: string]: any };
  submitTime?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobId: 'JobId',
      jobIndex: 'JobIndex',
      name: 'Name',
      outFileMeta: 'OutFileMeta',
      output: 'Output',
      parentJobId: 'ParentJobId',
      processConfig: 'ProcessConfig',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup },
      jobId: 'string',
      jobIndex: 'number',
      name: 'string',
      outFileMeta: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta,
      output: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput,
      parentJobId: 'string',
      processConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig,
      requestId: 'string',
      scheduleConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeJobResponseBodyTranscodeParentJob extends $tea.Model {
  createTime?: string;
  finishTime?: string;
  inputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobInputGroup[];
  jobCount?: number;
  name?: string;
  outputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroup[];
  parentJobId?: string;
  percent?: number;
  requestId?: string;
  scheduleConfig?: GetTranscodeJobResponseBodyTranscodeParentJobScheduleConfig;
  status?: string;
  submitTime?: string;
  transcodeJobList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList[];
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobCount: 'JobCount',
      name: 'Name',
      outputGroup: 'OutputGroup',
      parentJobId: 'ParentJobId',
      percent: 'Percent',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitTime: 'SubmitTime',
      transcodeJobList: 'TranscodeJobList',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobInputGroup },
      jobCount: 'number',
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroup },
      parentJobId: 'string',
      percent: 'number',
      requestId: 'string',
      scheduleConfig: GetTranscodeJobResponseBodyTranscodeParentJobScheduleConfig,
      status: 'string',
      submitTime: 'string',
      transcodeJobList: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList },
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUrlUploadInfosResponseBodyURLUploadInfoList extends $tea.Model {
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

export class ListAllPublicMediaTagsResponseBodyMediaTagListOptions extends $tea.Model {
  optionChineseName?: string;
  optionEnglishName?: string;
  optionId?: string;
  static names(): { [key: string]: string } {
    return {
      optionChineseName: 'OptionChineseName',
      optionEnglishName: 'OptionEnglishName',
      optionId: 'OptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionChineseName: 'string',
      optionEnglishName: 'string',
      optionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsResponseBodyMediaTagList extends $tea.Model {
  mediaTagId?: string;
  mediaTagNameChinese?: string;
  mediaTagNameEnglish?: string;
  options?: ListAllPublicMediaTagsResponseBodyMediaTagListOptions[];
  static names(): { [key: string]: string } {
    return {
      mediaTagId: 'MediaTagId',
      mediaTagNameChinese: 'MediaTagNameChinese',
      mediaTagNameEnglish: 'MediaTagNameEnglish',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagId: 'string',
      mediaTagNameChinese: 'string',
      mediaTagNameEnglish: 'string',
      options: { 'type': 'array', 'itemType': ListAllPublicMediaTagsResponseBodyMediaTagListOptions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTemplatesResponseBodyCustomTemplateList extends $tea.Model {
  createTime?: string;
  isDefault?: boolean;
  modifiedTime?: string;
  status?: string;
  subtype?: number;
  subtypeName?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      isDefault: 'IsDefault',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      subtype: 'Subtype',
      subtypeName: 'SubtypeName',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isDefault: 'boolean',
      modifiedTime: 'string',
      status: 'string',
      subtype: 'number',
      subtypeName: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageJobsResponseBodyJobsInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageJobsResponseBodyJobsOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageJobsResponseBodyJobs extends $tea.Model {
  createTime?: string;
  finishTime?: string;
  input?: ListDynamicImageJobsResponseBodyJobsInput;
  jobId?: string;
  modifiedTime?: string;
  name?: string;
  output?: ListDynamicImageJobsResponseBodyJobsOutput;
  pipelineId?: string;
  status?: string;
  submitTime?: string;
  templateId?: string;
  triggerSource?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      input: ListDynamicImageJobsResponseBodyJobsInput,
      jobId: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: ListDynamicImageJobsResponseBodyJobsOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateId: 'string',
      triggerSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordFilesResponseBodyFiles extends $tea.Model {
  createTime?: string;
  duration?: number;
  endTime?: string;
  format?: string;
  height?: number;
  jobId?: string;
  jobName?: string;
  recordId?: string;
  recordOutput?: string;
  recordUrl?: string;
  startTime?: string;
  streamUrl?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      duration: 'Duration',
      endTime: 'EndTime',
      format: 'Format',
      height: 'Height',
      jobId: 'JobId',
      jobName: 'JobName',
      recordId: 'RecordId',
      recordOutput: 'RecordOutput',
      recordUrl: 'RecordUrl',
      startTime: 'StartTime',
      streamUrl: 'StreamUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      duration: 'number',
      endTime: 'string',
      format: 'string',
      height: 'number',
      jobId: 'string',
      jobName: 'string',
      recordId: 'string',
      recordOutput: 'string',
      recordUrl: 'string',
      startTime: 'string',
      streamUrl: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput extends $tea.Model {
  bucket?: string;
  endpoint?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput extends $tea.Model {
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsResponseBodyLiveRecordJobs extends $tea.Model {
  createTime?: string;
  jobId?: string;
  name?: string;
  notifyUrl?: string;
  recordOutput?: ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput;
  status?: string;
  streamInput?: ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutput: 'RecordOutput',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      notifyUrl: 'string',
      recordOutput: ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput,
      status: 'string',
      streamInput: ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput,
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList extends $tea.Model {
  cycleDuration?: number;
  format?: string;
  ossObjectPrefix?: string;
  sliceDuration?: number;
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
      sliceOssObjectPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordTemplatesResponseBodyRecordTemplateList extends $tea.Model {
  createTime?: string;
  lastModified?: string;
  name?: string;
  recordFormatList?: ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList[];
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModified: 'LastModified',
      name: 'Name',
      recordFormatList: 'RecordFormatList',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastModified: 'string',
      name: 'string',
      recordFormatList: { 'type': 'array', 'itemType': ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList },
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotFilesResponseBodyFileList extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  isOverlay?: boolean;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      isOverlay: 'IsOverlay',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      isOverlay: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput extends $tea.Model {
  bucket?: string;
  endpoint?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotJobsResponseBodyJobList extends $tea.Model {
  createTime?: string;
  jobId?: string;
  jobName?: string;
  snapshotOutput?: ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput;
  status?: string;
  templateId?: string;
  templateName?: string;
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      jobName: 'JobName',
      snapshotOutput: 'SnapshotOutput',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      jobName: 'string',
      snapshotOutput: ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput,
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotTemplatesResponseBodyTemplateList extends $tea.Model {
  createTime?: string;
  templateId?: string;
  templateName?: string;
  timeInterval?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos extends $tea.Model {
  outputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponseBodyJobListOutputStream extends $tea.Model {
  streamInfos?: ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: { 'type': 'array', 'itemType': ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponseBodyJobListStreamInput extends $tea.Model {
  inputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponseBodyJobList extends $tea.Model {
  createTime?: string;
  jobId?: string;
  name?: string;
  outputStream?: ListLiveTranscodeJobsResponseBodyJobListOutputStream;
  startMode?: number;
  status?: number;
  streamInput?: ListLiveTranscodeJobsResponseBodyJobListStreamInput;
  templateId?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      outputStream: 'OutputStream',
      startMode: 'StartMode',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      outputStream: ListLiveTranscodeJobsResponseBodyJobListOutputStream,
      startMode: 'number',
      status: 'number',
      streamInput: ListLiveTranscodeJobsResponseBodyJobListStreamInput,
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams extends $tea.Model {
  bitrate?: string;
  codec?: string;
  fps?: string;
  gop?: string;
  height?: string;
  profile?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      profile: 'Profile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codec: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      profile: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig extends $tea.Model {
  audioParams?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams;
  videoParams?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams,
      videoParams: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeTemplatesResponseBodyTemplateContentList extends $tea.Model {
  category?: string;
  createTime?: string;
  name?: string;
  templateConfig?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      name: 'string',
      templateConfig: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig,
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  createTime?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  modifiedTime?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      createTime: 'CreateTime',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      createTime: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      modifiedTime: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
  biz?: string;
  businessType?: string;
  cateId?: number;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  referenceId?: string;
  snapshots?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  transcodeStatus?: string;
  uploadSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      businessType: 'BusinessType',
      cateId: 'CateId',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      referenceId: 'ReferenceId',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      uploadSource: 'UploadSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
      cateId: 'number',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      referenceId: 'string',
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      uploadSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfos extends $tea.Model {
  fileInfoList?: ListMediaBasicInfosResponseBodyMediaInfosFileInfoList[];
  mediaBasicInfo?: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList extends $tea.Model {
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

export class ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  mediaId?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList extends $tea.Model {
  avgFps?: string;
  bitRate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  dar?: string;
  duration?: string;
  fps?: string;
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
  timeBase?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
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
      timeBase: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsMediaInfoProperty extends $tea.Model {
  audioStreamInfoList?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList[];
  fileBasicInfo?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo;
  videoStreamInfoList?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobs extends $tea.Model {
  async?: boolean;
  finishTime?: string;
  input?: ListMediaInfoJobsResponseBodyJobsInput;
  jobId?: string;
  mediaInfoProperty?: ListMediaInfoJobsResponseBodyJobsMediaInfoProperty;
  name?: string;
  requestId?: string;
  scheduleConfig?: ListMediaInfoJobsResponseBodyJobsScheduleConfig;
  status?: string;
  submitResultJson?: { [key: string]: any };
  submitTime?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      mediaInfoProperty: 'MediaInfoProperty',
      name: 'Name',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      finishTime: 'string',
      input: ListMediaInfoJobsResponseBodyJobsInput,
      jobId: 'string',
      mediaInfoProperty: ListMediaInfoJobsResponseBodyJobsMediaInfoProperty,
      name: 'string',
      requestId: 'string',
      scheduleConfig: ListMediaInfoJobsResponseBodyJobsScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponseBodyPackageJobListPackageJobsInputsInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponseBodyPackageJobListPackageJobsInputs extends $tea.Model {
  input?: ListPackageJobsResponseBodyPackageJobListPackageJobsInputsInput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: ListPackageJobsResponseBodyPackageJobListPackageJobsInputsInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponseBodyPackageJobListPackageJobsOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponseBodyPackageJobListPackageJobs extends $tea.Model {
  code?: string;
  createTime?: string;
  finishTime?: string;
  inputs?: ListPackageJobsResponseBodyPackageJobListPackageJobsInputs[];
  jobId?: string;
  message?: string;
  modifiedTime?: string;
  name?: string;
  output?: ListPackageJobsResponseBodyPackageJobListPackageJobsOutput;
  pipelineId?: string;
  priority?: number;
  status?: string;
  submitTime?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputs: 'Inputs',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      status: 'Status',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      inputs: { 'type': 'array', 'itemType': ListPackageJobsResponseBodyPackageJobListPackageJobsInputs },
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: ListPackageJobsResponseBodyPackageJobListPackageJobsOutput,
      pipelineId: 'string',
      priority: 'number',
      status: 'string',
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponseBodyPackageJobList extends $tea.Model {
  nextPageToken?: string;
  packageJobs?: ListPackageJobsResponseBodyPackageJobListPackageJobs[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      packageJobs: 'PackageJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      packageJobs: { 'type': 'array', 'itemType': ListPackageJobsResponseBodyPackageJobListPackageJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBodyPipelineList extends $tea.Model {
  createTime?: string;
  modifiedTime?: string;
  name?: string;
  pipelineId?: string;
  priority?: number;
  speed?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      speed: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
  businessType?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  snapshots?: string;
  source?: string;
  status?: string;
  title?: string;
  transcodeStatus?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      snapshots: 'Snapshots',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      snapshots: 'string',
      source: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfos extends $tea.Model {
  fileInfoList?: ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList[];
  mediaBasicInfo?: ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobListInputConfig extends $tea.Model {
  inputFile?: string;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobListOutputConfig extends $tea.Model {
  bucket?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobList extends $tea.Model {
  createTime?: string;
  description?: string;
  editingConfig?: string;
  inputConfig?: ListSmartJobsResponseBodySmartJobListInputConfig;
  jobId?: string;
  jobState?: string;
  jobType?: string;
  modifiedTime?: string;
  outputConfig?: ListSmartJobsResponseBodySmartJobListOutputConfig;
  title?: string;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      jobId: 'JobId',
      jobState: 'JobState',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      title: 'Title',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      editingConfig: 'string',
      inputConfig: ListSmartJobsResponseBodySmartJobListInputConfig,
      jobId: 'string',
      jobState: 'string',
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: ListSmartJobsResponseBodySmartJobListOutputConfig,
      title: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotJobsResponseBodyJobsInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotJobsResponseBodyJobsOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotJobsResponseBodyJobs extends $tea.Model {
  async?: boolean;
  count?: number;
  createTime?: string;
  finishTime?: string;
  input?: ListSnapshotJobsResponseBodyJobsInput;
  jobId?: string;
  modifiedTime?: string;
  name?: string;
  output?: ListSnapshotJobsResponseBodyJobsOutput;
  pipelineId?: string;
  status?: string;
  submitTime?: string;
  templateId?: string;
  triggerSource?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      count: 'Count',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      count: 'number',
      createTime: 'string',
      finishTime: 'string',
      input: ListSnapshotJobsResponseBodyJobsInput,
      jobId: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: ListSnapshotJobsResponseBodyJobsOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateId: 'string',
      triggerSource: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemTemplatesResponseBodySystemTemplateList extends $tea.Model {
  status?: string;
  subtype?: number;
  subtypeName?: string;
  templateConfig?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subtype: 'Subtype',
      subtypeName: 'SubtypeName',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      subtype: 'number',
      subtypeName: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  clipsParam?: string;
  config?: string;
  coverURL?: string;
  createSource?: string;
  creationTime?: string;
  modifiedSource?: string;
  modifiedTime?: string;
  name?: string;
  previewMedia?: string;
  previewMediaStatus?: string;
  status?: string;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clipsParam: 'ClipsParam',
      config: 'Config',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      creationTime: 'CreationTime',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      previewMediaStatus: 'PreviewMediaStatus',
      status: 'Status',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsParam: 'string',
      config: 'string',
      coverURL: 'string',
      createSource: 'string',
      creationTime: 'string',
      modifiedSource: 'string',
      modifiedTime: 'string',
      name: 'string',
      previewMedia: 'string',
      previewMediaStatus: 'string',
      status: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsInputGroup extends $tea.Model {
  inputUrl?: string;
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupOutput extends $tea.Model {
  media?: string;
  outputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      outputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs extends $tea.Model {
  audioIndex?: string;
  duration?: number;
  start?: number;
  videoIndex?: string;
  static names(): { [key: string]: string } {
    return {
      audioIndex: 'AudioIndex',
      duration: 'Duration',
      start: 'Start',
      videoIndex: 'VideoIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIndex: 'string',
      duration: 'number',
      start: 'number',
      videoIndex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption extends $tea.Model {
  cipherText?: string;
  decryptKeyUri?: string;
  encryptType?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $tea.Model {
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParams extends $tea.Model {
  dx?: string;
  dy?: string;
  file?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  height?: string;
  referPos?: string;
  timeline?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks extends $tea.Model {
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParams extends $tea.Model {
  charEnc?: string;
  file?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      file: 'File',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      file: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles extends $tea.Model {
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams extends $tea.Model {
  adaptive?: string;
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  fontAlpha?: string;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  left?: string;
  top?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks extends $tea.Model {
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  loudnessRangeTarget?: string;
  method?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  remove?: string;
  samplerate?: string;
  volume?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $tea.Model {
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $tea.Model {
  duration?: string;
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      forceSegTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $tea.Model {
  segment?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $tea.Model {
  abrMax?: string;
  bitrate?: string;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  fps?: string;
  gop?: string;
  height?: string;
  longShortMode?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  remove?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      abrMax: 'AbrMax',
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrMax: 'string',
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams extends $tea.Model {
  audio?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  container?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  muxConfig?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  tags?: { [key: string]: string };
  video?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      tags: 'Tags',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      video: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode extends $tea.Model {
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig extends $tea.Model {
  combineConfigs?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs[];
  encryption?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption;
  imageWatermarks?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks[];
  isInheritTags?: boolean;
  subtitles?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles[];
  textWatermarks?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks[];
  transcode?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      isInheritTags: 'IsInheritTags',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs },
      encryption: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks },
      isInheritTags: 'boolean',
      subtitles: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks },
      transcode: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroup extends $tea.Model {
  output?: ListTranscodeJobsResponseBodyJobsOutputGroupOutput;
  processConfig?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: ListTranscodeJobsResponseBodyJobsOutputGroupOutput,
      processConfig: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobs extends $tea.Model {
  createTime?: string;
  finishTime?: string;
  inputGroup?: ListTranscodeJobsResponseBodyJobsInputGroup[];
  jobCount?: number;
  name?: string;
  outputGroup?: ListTranscodeJobsResponseBodyJobsOutputGroup[];
  parentJobId?: string;
  percent?: number;
  requestId?: string;
  scheduleConfig?: ListTranscodeJobsResponseBodyJobsScheduleConfig;
  status?: string;
  submitTime?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobCount: 'JobCount',
      name: 'Name',
      outputGroup: 'OutputGroup',
      parentJobId: 'ParentJobId',
      percent: 'Percent',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsInputGroup },
      jobCount: 'number',
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroup },
      parentJobId: 'string',
      percent: 'number',
      requestId: 'string',
      scheduleConfig: ListTranscodeJobsResponseBodyJobsScheduleConfig,
      status: 'string',
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobResponseBodyInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobResponseBodyOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobResponseBodyScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResultsResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResults extends $tea.Model {
  result?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  results?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResults;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      results: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults extends $tea.Model {
  coverImageCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult[];
  static names(): { [key: string]: string } {
    return {
      coverImageCensorResult: 'CoverImageCensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageCensorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults extends $tea.Model {
  censorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResults extends $tea.Model {
  censorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline extends $tea.Model {
  censorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResults;
  object?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      object: 'Object',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResults,
      object: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines extends $tea.Model {
  videoTimeline?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline[];
  static names(): { [key: string]: string } {
    return {
      videoTimeline: 'VideoTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoTimeline: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult extends $tea.Model {
  censorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults;
  nextPageToken?: string;
  videoTimelines?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      nextPageToken: 'NextPageToken',
      videoTimelines: 'VideoTimelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults,
      nextPageToken: 'string',
      videoTimelines: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig extends $tea.Model {
  bizType?: string;
  outputFile?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile;
  videoCensor?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      outputFile: 'OutputFile',
      videoCensor: 'VideoCensor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      outputFile: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile,
      videoCensor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail extends $tea.Model {
  barrageCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult;
  code?: string;
  coverImageCensorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults;
  creationTime?: string;
  descCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult;
  finishTime?: string;
  input?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput;
  jobId?: string;
  message?: string;
  pipelineId?: string;
  state?: string;
  suggestion?: string;
  titleCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult;
  userData?: string;
  vensorCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult;
  videoCensorConfig?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig;
  static names(): { [key: string]: string } {
    return {
      barrageCensorResult: 'BarrageCensorResult',
      code: 'Code',
      coverImageCensorResults: 'CoverImageCensorResults',
      creationTime: 'CreationTime',
      descCensorResult: 'DescCensorResult',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      pipelineId: 'PipelineId',
      state: 'State',
      suggestion: 'Suggestion',
      titleCensorResult: 'TitleCensorResult',
      userData: 'UserData',
      vensorCensorResult: 'VensorCensorResult',
      videoCensorConfig: 'VideoCensorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barrageCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult,
      code: 'string',
      coverImageCensorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults,
      creationTime: 'string',
      descCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult,
      finishTime: 'string',
      input: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput,
      jobId: 'string',
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      suggestion: 'string',
      titleCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult,
      userData: 'string',
      vensorCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult,
      videoCensorConfig: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResultsResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults extends $tea.Model {
  result?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResult extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  results?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      results: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults extends $tea.Model {
  coverImageCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResult[];
  static names(): { [key: string]: string } {
    return {
      coverImageCensorResult: 'CoverImageCensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageCensorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResultsCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults extends $tea.Model {
  censorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResultsCensorResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult extends $tea.Model {
  label?: string;
  rate?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults extends $tea.Model {
  censorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline extends $tea.Model {
  censorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults;
  object?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      object: 'Object',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults,
      object: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines extends $tea.Model {
  videoTimeline?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline[];
  static names(): { [key: string]: string } {
    return {
      videoTimeline: 'VideoTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoTimeline: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult extends $tea.Model {
  censorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults;
  nextPageToken?: string;
  videoTimelines?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      nextPageToken: 'NextPageToken',
      videoTimelines: 'VideoTimelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults,
      nextPageToken: 'string',
      videoTimelines: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig extends $tea.Model {
  bizType?: string;
  outputFile?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile;
  videoCensor?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      outputFile: 'OutputFile',
      videoCensor: 'VideoCensor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      outputFile: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile,
      videoCensor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob extends $tea.Model {
  barrageCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult;
  code?: string;
  coverImageCensorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults;
  creationTime?: string;
  descCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult;
  finishTime?: string;
  input?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput;
  jobId?: string;
  message?: string;
  pipelineId?: string;
  state?: string;
  suggestion?: string;
  titleCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult;
  userData?: string;
  vensorCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult;
  videoCensorConfig?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig;
  static names(): { [key: string]: string } {
    return {
      barrageCensorResult: 'BarrageCensorResult',
      code: 'Code',
      coverImageCensorResults: 'CoverImageCensorResults',
      creationTime: 'CreationTime',
      descCensorResult: 'DescCensorResult',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      pipelineId: 'PipelineId',
      state: 'State',
      suggestion: 'Suggestion',
      titleCensorResult: 'TitleCensorResult',
      userData: 'UserData',
      vensorCensorResult: 'VensorCensorResult',
      videoCensorConfig: 'VideoCensorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barrageCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult,
      code: 'string',
      coverImageCensorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults,
      creationTime: 'string',
      descCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult,
      finishTime: 'string',
      input: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput,
      jobId: 'string',
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      suggestion: 'string',
      titleCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult,
      userData: 'string',
      vensorCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult,
      videoCensorConfig: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobList extends $tea.Model {
  mediaCensorJob?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob[];
  static names(): { [key: string]: string } {
    return {
      mediaCensorJob: 'MediaCensorJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJob: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyNonExistIds extends $tea.Model {
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

export class QuerySmarttagJobResponseBodyResultsResult extends $tea.Model {
  data?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponseBodyResults extends $tea.Model {
  result?: QuerySmarttagJobResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QuerySmarttagJobResponseBodyResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBodyProjectList extends $tea.Model {
  businessConfig?: string;
  businessStatus?: string;
  coverURL?: string;
  createSource?: string;
  createTime?: string;
  description?: string;
  duration?: number;
  errorCode?: string;
  errorMessage?: string;
  modifiedSource?: string;
  modifiedTime?: string;
  projectId?: string;
  projectType?: string;
  status?: string;
  templateType?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      businessStatus: 'BusinessStatus',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      createTime: 'CreateTime',
      description: 'Description',
      duration: 'Duration',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      projectType: 'ProjectType',
      status: 'Status',
      templateType: 'TemplateType',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      businessStatus: 'string',
      coverURL: 'string',
      createSource: 'string',
      createTime: 'string',
      description: 'string',
      duration: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      modifiedSource: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      projectType: 'string',
      status: 'string',
      templateType: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks extends $tea.Model {
  position?: string;
  size?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      position: 'Position',
      size: 'Size',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      position: 'string',
      size: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences extends $tea.Model {
  content?: string;
  finegrainId?: string;
  finegrainName?: string;
  from?: number;
  image?: string;
  score?: number;
  tableBatchSeqId?: string;
  to?: number;
  tracks?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks[];
  clipId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      finegrainId: 'FinegrainId',
      finegrainName: 'FinegrainName',
      from: 'From',
      image: 'Image',
      score: 'Score',
      tableBatchSeqId: 'TableBatchSeqId',
      to: 'To',
      tracks: 'Tracks',
      clipId: 'clipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      finegrainId: 'string',
      finegrainName: 'string',
      from: 'number',
      image: 'string',
      score: 'number',
      tableBatchSeqId: 'string',
      to: 'number',
      tracks: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks },
      clipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo extends $tea.Model {
  category?: string;
  faceId?: string;
  labelId?: string;
  labelName?: string;
  labelType?: string;
  occurrences?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences[];
  source?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      faceId: 'FaceId',
      labelId: 'LabelId',
      labelName: 'LabelName',
      labelType: 'LabelType',
      occurrences: 'Occurrences',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      faceId: 'string',
      labelId: 'string',
      labelName: 'string',
      labelType: 'string',
      occurrences: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences },
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataAsrInfo extends $tea.Model {
  clipId?: string;
  content?: string;
  from?: number;
  timestamp?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      content: 'Content',
      from: 'From',
      timestamp: 'Timestamp',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      content: 'string',
      from: 'number',
      timestamp: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataOcrInfo extends $tea.Model {
  clipId?: string;
  content?: string;
  from?: number;
  timestamp?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      content: 'Content',
      from: 'From',
      timestamp: 'Timestamp',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      content: 'string',
      from: 'number',
      timestamp: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiData extends $tea.Model {
  aiLabelInfo?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo[];
  asrInfo?: SearchMediaResponseBodyMediaInfoListAiDataAsrInfo[];
  ocrInfo?: SearchMediaResponseBodyMediaInfoListAiDataOcrInfo[];
  static names(): { [key: string]: string } {
    return {
      aiLabelInfo: 'AiLabelInfo',
      asrInfo: 'AsrInfo',
      ocrInfo: 'OcrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiLabelInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo },
      asrInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAsrInfo },
      ocrInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataOcrInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiRoughData extends $tea.Model {
  aiCategoryLevel1?: string;
  aiJobId?: string;
  result?: string;
  saveType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiCategoryLevel1: 'AiCategoryLevel1',
      aiJobId: 'AiJobId',
      result: 'Result',
      saveType: 'SaveType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCategoryLevel1: 'string',
      aiJobId: 'string',
      result: 'string',
      saveType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo extends $tea.Model {
  bitrate?: string;
  createTime?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  modifiedTime?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      createTime: 'CreateTime',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      createTime: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      modifiedTime: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListFileInfoList extends $tea.Model {
  fileBasicInfo?: SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListMediaBasicInfo extends $tea.Model {
  biz?: string;
  businessType?: string;
  cateId?: number;
  cateName?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  referenceId?: string;
  snapshots?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  transcodeStatus?: string;
  uploadSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      businessType: 'BusinessType',
      cateId: 'CateId',
      cateName: 'CateName',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      referenceId: 'ReferenceId',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      uploadSource: 'UploadSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
      cateId: 'number',
      cateName: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      referenceId: 'string',
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      uploadSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoList extends $tea.Model {
  aiData?: SearchMediaResponseBodyMediaInfoListAiData;
  aiRoughData?: SearchMediaResponseBodyMediaInfoListAiRoughData;
  fileInfoList?: SearchMediaResponseBodyMediaInfoListFileInfoList[];
  mediaBasicInfo?: SearchMediaResponseBodyMediaInfoListMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiData: 'AiData',
      aiRoughData: 'AiRoughData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiData: SearchMediaResponseBodyMediaInfoListAiData,
      aiRoughData: SearchMediaResponseBodyMediaInfoListAiRoughData,
      fileInfoList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListFileInfoList },
      mediaBasicInfo: SearchMediaResponseBodyMediaInfoListMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData extends $tea.Model {
  data?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo extends $tea.Model {
  businessType?: string;
  category?: string;
  coverURL?: string;
  createTime?: string;
  deletedTime?: string;
  description?: string;
  mediaId?: string;
  mediaTags?: string;
  mediaType?: string;
  modifiedTime?: string;
  source?: string;
  spriteImages?: string;
  status?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo extends $tea.Model {
  dynamicMetaData?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData;
  mediaBasicInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData,
      mediaBasicInfo: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPublicMediaInfoResponseBodyPublicMediaInfos extends $tea.Model {
  authorized?: boolean;
  favorite?: boolean;
  mediaInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo;
  remainingAuthTime?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      favorite: 'Favorite',
      mediaInfo: 'MediaInfo',
      remainingAuthTime: 'RemainingAuthTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      favorite: 'boolean',
      mediaInfo: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo,
      remainingAuthTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan extends $tea.Model {
  duration?: string;
  end?: string;
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      end: 'End',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      end: 'string',
      seek: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestTemplateConfigOverwriteParams extends $tea.Model {
  format?: string;
  fps?: number;
  height?: number;
  longShortMode?: boolean;
  scanMode?: string;
  timeSpan?: SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      longShortMode: 'LongShortMode',
      scanMode: 'ScanMode',
      timeSpan: 'TimeSpan',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      fps: 'number',
      height: 'number',
      longShortMode: 'boolean',
      scanMode: 'string',
      timeSpan: SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan,
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDynamicImageJobRequestTemplateConfig extends $tea.Model {
  overwriteParams?: SubmitDynamicImageJobRequestTemplateConfigOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitDynamicImageJobRequestTemplateConfigOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobRequestInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobRequestOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveRecordJobRequestRecordOutput extends $tea.Model {
  bucket?: string;
  endpoint?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveRecordJobRequestStreamInput extends $tea.Model {
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveSnapshotJobRequestSnapshotOutput extends $tea.Model {
  bucket?: string;
  endpoint?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveSnapshotJobRequestStreamInput extends $tea.Model {
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveTranscodeJobRequestStreamInput extends $tea.Model {
  inputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveTranscodeJobRequestTimedConfig extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveTranscodeJobRequestTranscodeOutput extends $tea.Model {
  domainName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaCensorJobRequestInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaCensorJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobRequestInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList extends $tea.Model {
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

export class SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  mediaId?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList extends $tea.Model {
  avgFps?: string;
  bitRate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  dar?: string;
  duration?: string;
  fps?: string;
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
  timeBase?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
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
      timeBase: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty extends $tea.Model {
  audioStreamInfoList?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList[];
  fileBasicInfo?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo;
  videoStreamInfoList?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJob extends $tea.Model {
  async?: boolean;
  finishTime?: string;
  input?: SubmitMediaInfoJobResponseBodyMediaInfoJobInput;
  jobId?: string;
  mediaInfoProperty?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty;
  name?: string;
  requestId?: string;
  scheduleConfig?: SubmitMediaInfoJobResponseBodyMediaInfoJobScheduleConfig;
  status?: string;
  submitResultJson?: { [key: string]: any };
  submitTime?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      mediaInfoProperty: 'MediaInfoProperty',
      name: 'Name',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      finishTime: 'string',
      input: SubmitMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      mediaInfoProperty: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty,
      name: 'string',
      requestId: 'string',
      scheduleConfig: SubmitMediaInfoJobResponseBodyMediaInfoJobScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackageJobRequestInputsInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackageJobRequestInputs extends $tea.Model {
  input?: SubmitPackageJobRequestInputsInput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitPackageJobRequestInputsInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackageJobRequestOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackageJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmarttagJobRequestInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmarttagJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig extends $tea.Model {
  cellHeight?: number;
  cellWidth?: number;
  color?: string;
  columns?: number;
  lines?: number;
  margin?: number;
  padding?: number;
  static names(): { [key: string]: string } {
    return {
      cellHeight: 'CellHeight',
      cellWidth: 'CellWidth',
      color: 'Color',
      columns: 'Columns',
      lines: 'Lines',
      margin: 'Margin',
      padding: 'Padding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellHeight: 'number',
      cellWidth: 'number',
      color: 'string',
      columns: 'number',
      lines: 'number',
      margin: 'number',
      padding: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestTemplateConfigOverwriteParams extends $tea.Model {
  blackLevel?: number;
  count?: number;
  frameType?: string;
  height?: number;
  interval?: number;
  isSptFrag?: boolean;
  pixelBlackThreshold?: number;
  spriteSnapshotConfig?: SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig;
  time?: number;
  type?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      blackLevel: 'BlackLevel',
      count: 'Count',
      frameType: 'FrameType',
      height: 'Height',
      interval: 'Interval',
      isSptFrag: 'IsSptFrag',
      pixelBlackThreshold: 'PixelBlackThreshold',
      spriteSnapshotConfig: 'SpriteSnapshotConfig',
      time: 'Time',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackLevel: 'number',
      count: 'number',
      frameType: 'string',
      height: 'number',
      interval: 'number',
      isSptFrag: 'boolean',
      pixelBlackThreshold: 'number',
      spriteSnapshotConfig: SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig,
      time: 'number',
      type: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestTemplateConfig extends $tea.Model {
  overwriteParams?: SubmitSnapshotJobRequestTemplateConfigOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitSnapshotJobRequestTemplateConfigOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobRequestInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJobInput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList extends $tea.Model {
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

export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  mediaId?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList extends $tea.Model {
  avgFps?: string;
  bitRate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  dar?: string;
  duration?: string;
  fps?: string;
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
  timeBase?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
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
      timeBase: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty extends $tea.Model {
  audioStreamInfoList?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList[];
  fileBasicInfo?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo;
  videoStreamInfoList?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJobScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJob extends $tea.Model {
  async?: boolean;
  finishTime?: string;
  input?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobInput;
  jobId?: string;
  mediaInfoProperty?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty;
  name?: string;
  requestId?: string;
  scheduleConfig?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobScheduleConfig;
  status?: string;
  submitResultJson?: { [key: string]: any };
  submitTime?: string;
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      mediaInfoProperty: 'MediaInfoProperty',
      name: 'Name',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      finishTime: 'string',
      input: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      mediaInfoProperty: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty,
      name: 'string',
      requestId: 'string',
      scheduleConfig: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestInputGroup extends $tea.Model {
  inputUrl?: string;
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupOutput extends $tea.Model {
  media?: string;
  outputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      outputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs extends $tea.Model {
  audioIndex?: string;
  duration?: number;
  start?: number;
  videoIndex?: string;
  static names(): { [key: string]: string } {
    return {
      audioIndex: 'AudioIndex',
      duration: 'Duration',
      start: 'Start',
      videoIndex: 'VideoIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIndex: 'string',
      duration: 'number',
      start: 'number',
      videoIndex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption extends $tea.Model {
  cipherText?: string;
  decryptKeyUri?: string;
  encryptType?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $tea.Model {
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams extends $tea.Model {
  dx?: string;
  dy?: string;
  file?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  height?: string;
  referPos?: string;
  timeline?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParams extends $tea.Model {
  charEnc?: string;
  file?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      file: 'File',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      file: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarksOverwriteParams extends $tea.Model {
  adaptive?: string;
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  fontAlpha?: string;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  left?: string;
  top?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  loudnessRangeTarget?: string;
  method?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  remove?: string;
  samplerate?: string;
  volume?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $tea.Model {
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $tea.Model {
  duration?: string;
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      forceSegTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $tea.Model {
  segment?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $tea.Model {
  abrMax?: string;
  bitrate?: string;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  fps?: string;
  gop?: string;
  height?: string;
  longShortMode?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  remove?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      abrMax: 'AbrMax',
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrMax: 'string',
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParams extends $tea.Model {
  audio?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  container?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  muxConfig?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  tags?: { [key: string]: string };
  video?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      tags: 'Tags',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      video: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfig extends $tea.Model {
  combineConfigs?: SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs[];
  encryption?: SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption;
  imageWatermarks?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks[];
  isInheritTags?: boolean;
  subtitles?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles[];
  textWatermarks?: SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks[];
  transcode?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      isInheritTags: 'IsInheritTags',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs },
      encryption: SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks },
      isInheritTags: 'boolean',
      subtitles: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks },
      transcode: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroup extends $tea.Model {
  output?: SubmitTranscodeJobRequestOutputGroupOutput;
  processConfig?: SubmitTranscodeJobRequestOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: SubmitTranscodeJobRequestOutputGroupOutput,
      processConfig: SubmitTranscodeJobRequestOutputGroupProcessConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs extends $tea.Model {
  audioIndex?: string;
  duration?: number;
  start?: number;
  videoIndex?: string;
  static names(): { [key: string]: string } {
    return {
      audioIndex: 'AudioIndex',
      duration: 'Duration',
      start: 'Start',
      videoIndex: 'VideoIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIndex: 'string',
      duration: 'number',
      start: 'number',
      videoIndex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption extends $tea.Model {
  cipherText?: string;
  decryptKeyUri?: string;
  encryptType?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $tea.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams extends $tea.Model {
  dx?: string;
  dy?: string;
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  height?: string;
  referPos?: string;
  timeline?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams extends $tea.Model {
  charEnc?: string;
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      file: 'File',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams extends $tea.Model {
  adaptive?: string;
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  fontAlpha?: string;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  left?: string;
  top?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  loudnessRangeTarget?: string;
  method?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  remove?: string;
  samplerate?: string;
  volume?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $tea.Model {
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $tea.Model {
  duration?: string;
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      forceSegTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $tea.Model {
  segment?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $tea.Model {
  abrMax?: string;
  bitrate?: string;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  fps?: string;
  gop?: string;
  height?: string;
  longShortMode?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  remove?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      abrMax: 'AbrMax',
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrMax: 'string',
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams extends $tea.Model {
  audio?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  container?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  muxConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  video?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      video: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig extends $tea.Model {
  combineConfigs?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs[];
  encryption?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption;
  imageWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks[];
  subtitles?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles[];
  textWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks[];
  transcode?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs },
      encryption: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks },
      subtitles: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks },
      transcode: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroup extends $tea.Model {
  output?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput;
  processConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput,
      processConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup extends $tea.Model {
  inputUrl?: string;
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList extends $tea.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileName?: string;
  fileSize?: string;
  fileStatus?: string;
  fileType?: string;
  fileUrl?: string;
  formatName?: string;
  height?: string;
  mediaId?: string;
  region?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList extends $tea.Model {
  avgFps?: string;
  bitRate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  dar?: string;
  duration?: string;
  fps?: string;
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
  timeBase?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
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
      timeBase: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta extends $tea.Model {
  audioStreamInfoList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList[];
  fileBasicInfo?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo;
  videoStreamInfoList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList },
      fileBasicInfo: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput extends $tea.Model {
  media?: string;
  outputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      outputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs extends $tea.Model {
  audioIndex?: string;
  duration?: number;
  start?: number;
  videoIndex?: string;
  static names(): { [key: string]: string } {
    return {
      audioIndex: 'AudioIndex',
      duration: 'Duration',
      start: 'Start',
      videoIndex: 'VideoIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIndex: 'string',
      duration: 'number',
      start: 'number',
      videoIndex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption extends $tea.Model {
  cipherText?: string;
  decryptKeyUri?: string;
  encryptType?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline extends $tea.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams extends $tea.Model {
  dx?: string;
  dy?: string;
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile;
  height?: string;
  referPos?: string;
  timeline?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile extends $tea.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams extends $tea.Model {
  charEnc?: string;
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      file: 'File',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile,
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams extends $tea.Model {
  adaptive?: string;
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  fontAlpha?: string;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  left?: string;
  top?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  loudnessRangeTarget?: string;
  method?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  remove?: string;
  samplerate?: string;
  volume?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer extends $tea.Model {
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $tea.Model {
  duration?: string;
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      forceSegTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig extends $tea.Model {
  segment?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo extends $tea.Model {
  abrMax?: string;
  bitrate?: string;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  fps?: string;
  gop?: string;
  height?: string;
  longShortMode?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  remove?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      abrMax: 'AbrMax',
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrMax: 'string',
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams extends $tea.Model {
  audio?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio;
  container?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer;
  muxConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig;
  tags?: { [key: string]: any };
  video?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      tags: 'Tags',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio,
      container: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      video: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode extends $tea.Model {
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig extends $tea.Model {
  combineConfigs?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs[];
  encryption?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption;
  imageWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks[];
  isInheritTags?: string;
  subtitles?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles[];
  textWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks[];
  transcode?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      isInheritTags: 'IsInheritTags',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs },
      encryption: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks },
      isInheritTags: 'string',
      subtitles: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks },
      transcode: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig extends $tea.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList extends $tea.Model {
  createTime?: string;
  finishTime?: string;
  inputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup[];
  jobId?: string;
  jobIndex?: number;
  name?: string;
  outFileMeta?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta;
  output?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput;
  parentJobId?: string;
  processConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig;
  requestId?: string;
  scheduleConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig;
  status?: string;
  submitResultJson?: { [key: string]: any };
  submitTime?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobId: 'JobId',
      jobIndex: 'JobIndex',
      name: 'Name',
      outFileMeta: 'OutFileMeta',
      output: 'Output',
      parentJobId: 'ParentJobId',
      processConfig: 'ProcessConfig',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup },
      jobId: 'string',
      jobIndex: 'number',
      name: 'string',
      outFileMeta: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta,
      output: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput,
      parentJobId: 'string',
      processConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig,
      requestId: 'string',
      scheduleConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJob extends $tea.Model {
  createTime?: string;
  finishTime?: string;
  inputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup[];
  jobCount?: number;
  name?: string;
  outputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroup[];
  parentJobId?: string;
  percent?: number;
  requestId?: string;
  scheduleConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobScheduleConfig;
  status?: string;
  submitTime?: string;
  transcodeJobList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList[];
  triggerSource?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobCount: 'JobCount',
      name: 'Name',
      outputGroup: 'OutputGroup',
      parentJobId: 'ParentJobId',
      percent: 'Percent',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitTime: 'SubmitTime',
      transcodeJobList: 'TranscodeJobList',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup },
      jobCount: 'number',
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroup },
      parentJobId: 'string',
      percent: 'number',
      requestId: 'string',
      scheduleConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobScheduleConfig,
      status: 'string',
      submitTime: 'string',
      transcodeJobList: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList },
      triggerSource: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRecordTemplateRequestRecordFormat extends $tea.Model {
  cycleDuration?: number;
  format?: string;
  ossObjectPrefix?: string;
  sliceDuration?: number;
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
      sliceOssObjectPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeJobRequestStreamInput extends $tea.Model {
  inputUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeJobRequestTimedConfig extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeJobRequestTranscodeOutput extends $tea.Model {
  domainName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateRequestTemplateConfigAudioParams extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateRequestTemplateConfigVideoParams extends $tea.Model {
  bitrate?: string;
  codec?: string;
  fps?: string;
  gop?: string;
  height?: string;
  profile?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      profile: 'Profile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codec: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      profile: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeTemplateRequestTemplateConfig extends $tea.Model {
  audioParams?: UpdateLiveTranscodeTemplateRequestTemplateConfigAudioParams;
  videoParams?: UpdateLiveTranscodeTemplateRequestTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: UpdateLiveTranscodeTemplateRequestTemplateConfigAudioParams,
      videoParams: UpdateLiveTranscodeTemplateRequestTemplateConfigVideoParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMediaByURLResponseBodyUploadJobs extends $tea.Model {
  jobId?: string;
  mediaId?: string;
  sourceURL?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      sourceURL: 'SourceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
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
      'ap-northeast-1': "ice.aliyuncs.com",
      'ap-northeast-2-pop': "ice.aliyuncs.com",
      'ap-south-1': "ice.aliyuncs.com",
      'ap-southeast-1': "ice.aliyuncs.com",
      'ap-southeast-2': "ice.aliyuncs.com",
      'ap-southeast-3': "ice.aliyuncs.com",
      'ap-southeast-5': "ice.aliyuncs.com",
      'cn-beijing': "ice.aliyuncs.com",
      'cn-beijing-finance-1': "ice.aliyuncs.com",
      'cn-beijing-finance-pop': "ice.aliyuncs.com",
      'cn-beijing-gov-1': "ice.aliyuncs.com",
      'cn-beijing-nu16-b01': "ice.aliyuncs.com",
      'cn-chengdu': "ice.aliyuncs.com",
      'cn-edge-1': "ice.aliyuncs.com",
      'cn-fujian': "ice.aliyuncs.com",
      'cn-haidian-cm12-c01': "ice.aliyuncs.com",
      'cn-hangzhou': "ice.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ice.aliyuncs.com",
      'cn-hangzhou-finance': "ice.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ice.aliyuncs.com",
      'cn-hangzhou-test-306': "ice.aliyuncs.com",
      'cn-hongkong': "ice.aliyuncs.com",
      'cn-hongkong-finance-pop': "ice.aliyuncs.com",
      'cn-huhehaote': "ice.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ice.aliyuncs.com",
      'cn-north-2-gov-1': "ice.aliyuncs.com",
      'cn-qingdao': "ice.aliyuncs.com",
      'cn-qingdao-nebula': "ice.aliyuncs.com",
      'cn-shanghai-et15-b01': "ice.aliyuncs.com",
      'cn-shanghai-et2-b01': "ice.aliyuncs.com",
      'cn-shanghai-finance-1': "ice.aliyuncs.com",
      'cn-shanghai-inner': "ice.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ice.aliyuncs.com",
      'cn-shenzhen': "ice.aliyuncs.com",
      'cn-shenzhen-finance-1': "ice.aliyuncs.com",
      'cn-shenzhen-inner': "ice.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ice.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ice.aliyuncs.com",
      'cn-wuhan': "ice.aliyuncs.com",
      'cn-wulanchabu': "ice.aliyuncs.com",
      'cn-yushanfang': "ice.aliyuncs.com",
      'cn-zhangbei': "ice.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ice.aliyuncs.com",
      'cn-zhangjiakou': "ice.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ice.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ice.aliyuncs.com",
      'eu-central-1': "ice.aliyuncs.com",
      'eu-west-1': "ice.aliyuncs.com",
      'eu-west-1-oxs': "ice.aliyuncs.com",
      'me-east-1': "ice.aliyuncs.com",
      'rus-west-1-pop': "ice.aliyuncs.com",
      'us-east-1': "ice.aliyuncs.com",
      'us-west-1': "ice.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
      version: "2020-11-09",
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

  async addEditingProjectMaterialsWithOptions(request: AddEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<AddEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.materialMaps)) {
      query["MaterialMaps"] = request.materialMaps;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddEditingProjectMaterials",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new AddEditingProjectMaterialsResponse({}));
  }

  async addEditingProjectMaterials(request: AddEditingProjectMaterialsRequest): Promise<AddEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEditingProjectMaterialsWithOptions(request, runtime);
  }

  async addFavoritePublicMediaWithOptions(request: AddFavoritePublicMediaRequest, runtime: $Util.RuntimeOptions): Promise<AddFavoritePublicMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFavoritePublicMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFavoritePublicMediaResponse>(await this.callApi(params, req, runtime), new AddFavoritePublicMediaResponse({}));
  }

  async addFavoritePublicMedia(request: AddFavoritePublicMediaRequest): Promise<AddFavoritePublicMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFavoritePublicMediaWithOptions(request, runtime);
  }

  async addTemplateWithOptions(request: AddTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.coverUrl)) {
      query["CoverUrl"] = request.coverUrl;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.previewMedia)) {
      query["PreviewMedia"] = request.previewMedia;
    }

    if (!Util.isUnset(request.relatedMediaids)) {
      query["RelatedMediaids"] = request.relatedMediaids;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTemplateResponse>(await this.callApi(params, req, runtime), new AddTemplateResponse({}));
  }

  async addTemplate(request: AddTemplateRequest): Promise<AddTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTemplateWithOptions(request, runtime);
  }

  async batchGetMediaInfosWithOptions(request: BatchGetMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetMediaInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additionType)) {
      query["AdditionType"] = request.additionType;
    }

    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetMediaInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchGetMediaInfosResponse>(await this.callApi(params, req, runtime), new BatchGetMediaInfosResponse({}));
  }

  async batchGetMediaInfos(request: BatchGetMediaInfosRequest): Promise<BatchGetMediaInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetMediaInfosWithOptions(request, runtime);
  }

  async cancelFavoritePublicMediaWithOptions(request: CancelFavoritePublicMediaRequest, runtime: $Util.RuntimeOptions): Promise<CancelFavoritePublicMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelFavoritePublicMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelFavoritePublicMediaResponse>(await this.callApi(params, req, runtime), new CancelFavoritePublicMediaResponse({}));
  }

  async cancelFavoritePublicMedia(request: CancelFavoritePublicMediaRequest): Promise<CancelFavoritePublicMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelFavoritePublicMediaWithOptions(request, runtime);
  }

  async createAuditWithOptions(request: CreateAuditRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.auditContent)) {
      query["AuditContent"] = request.auditContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAudit",
      version: "2020-11-09",
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

  async createCustomTemplateWithOptions(request: CreateCustomTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!Util.isUnset(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomTemplateResponse>(await this.callApi(params, req, runtime), new CreateCustomTemplateResponse({}));
  }

  async createCustomTemplate(request: CreateCustomTemplateRequest): Promise<CreateCustomTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomTemplateWithOptions(request, runtime);
  }

  async createEditingProjectWithOptions(request: CreateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessConfig)) {
      query["BusinessConfig"] = request.businessConfig;
    }

    if (!Util.isUnset(request.clipsParam)) {
      query["ClipsParam"] = request.clipsParam;
    }

    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.materialMaps)) {
      query["MaterialMaps"] = request.materialMaps;
    }

    if (!Util.isUnset(request.projectType)) {
      query["ProjectType"] = request.projectType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      action: "CreateEditingProject",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEditingProjectResponse>(await this.callApi(params, req, runtime), new CreateEditingProjectResponse({}));
  }

  async createEditingProject(request: CreateEditingProjectRequest): Promise<CreateEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEditingProjectWithOptions(request, runtime);
  }

  async createLiveRecordTemplateWithOptions(tmpReq: CreateLiveRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveRecordTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateLiveRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.recordFormat)) {
      request.recordFormatShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordFormat, "RecordFormat", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.recordFormatShrink)) {
      body["RecordFormat"] = request.recordFormatShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new CreateLiveRecordTemplateResponse({}));
  }

  async createLiveRecordTemplate(request: CreateLiveRecordTemplateRequest): Promise<CreateLiveRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveRecordTemplateWithOptions(request, runtime);
  }

  async createLiveSnapshotTemplateWithOptions(request: CreateLiveSnapshotTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveSnapshotTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.overwriteFormat)) {
      body["OverwriteFormat"] = request.overwriteFormat;
    }

    if (!Util.isUnset(request.sequenceFormat)) {
      body["SequenceFormat"] = request.sequenceFormat;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.timeInterval)) {
      body["TimeInterval"] = request.timeInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new CreateLiveSnapshotTemplateResponse({}));
  }

  async createLiveSnapshotTemplate(request: CreateLiveSnapshotTemplateRequest): Promise<CreateLiveSnapshotTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveSnapshotTemplateWithOptions(request, runtime);
  }

  async createLiveTranscodeTemplateWithOptions(tmpReq: CreateLiveTranscodeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveTranscodeTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateLiveTranscodeTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.templateConfig))) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.templateConfig), "TemplateConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new CreateLiveTranscodeTemplateResponse({}));
  }

  async createLiveTranscodeTemplate(request: CreateLiveTranscodeTemplateRequest): Promise<CreateLiveTranscodeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveTranscodeTemplateWithOptions(request, runtime);
  }

  async createPipelineWithOptions(request: CreatePipelineRequest, runtime: $Util.RuntimeOptions): Promise<CreatePipelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipeline",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineResponse>(await this.callApi(params, req, runtime), new CreatePipelineResponse({}));
  }

  async createPipeline(request: CreatePipelineRequest): Promise<CreatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPipelineWithOptions(request, runtime);
  }

  async createUploadMediaWithOptions(request: CreateUploadMediaRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.fileInfo)) {
      query["FileInfo"] = request.fileInfo;
    }

    if (!Util.isUnset(request.mediaMetaData)) {
      query["MediaMetaData"] = request.mediaMetaData;
    }

    if (!Util.isUnset(request.postProcessConfig)) {
      query["PostProcessConfig"] = request.postProcessConfig;
    }

    if (!Util.isUnset(request.uploadTargetConfig)) {
      query["UploadTargetConfig"] = request.uploadTargetConfig;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadMediaResponse>(await this.callApi(params, req, runtime), new CreateUploadMediaResponse({}));
  }

  async createUploadMedia(request: CreateUploadMediaRequest): Promise<CreateUploadMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadMediaWithOptions(request, runtime);
  }

  async createUploadStreamWithOptions(request: CreateUploadStreamRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadStreamResponse> {
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

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadStream",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadStreamResponse>(await this.callApi(params, req, runtime), new CreateUploadStreamResponse({}));
  }

  async createUploadStream(request: CreateUploadStreamRequest): Promise<CreateUploadStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadStreamWithOptions(request, runtime);
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
      version: "2020-11-09",
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

  async deleteCustomTemplateWithOptions(request: DeleteCustomTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomTemplateResponse>(await this.callApi(params, req, runtime), new DeleteCustomTemplateResponse({}));
  }

  async deleteCustomTemplate(request: DeleteCustomTemplateRequest): Promise<DeleteCustomTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomTemplateWithOptions(request, runtime);
  }

  async deleteEditingProjectMaterialsWithOptions(request: DeleteEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.materialIds)) {
      query["MaterialIds"] = request.materialIds;
    }

    if (!Util.isUnset(request.materialType)) {
      query["MaterialType"] = request.materialType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEditingProjectMaterials",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new DeleteEditingProjectMaterialsResponse({}));
  }

  async deleteEditingProjectMaterials(request: DeleteEditingProjectMaterialsRequest): Promise<DeleteEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectMaterialsWithOptions(request, runtime);
  }

  async deleteEditingProjectsWithOptions(request: DeleteEditingProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEditingProjects",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEditingProjectsResponse>(await this.callApi(params, req, runtime), new DeleteEditingProjectsResponse({}));
  }

  async deleteEditingProjects(request: DeleteEditingProjectsRequest): Promise<DeleteEditingProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectsWithOptions(request, runtime);
  }

  async deleteLiveRecordFilesWithOptions(request: DeleteLiveRecordFilesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRecordFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordIds)) {
      query["RecordIds"] = request.recordIds;
    }

    if (!Util.isUnset(request.removeFile)) {
      query["RemoveFile"] = request.removeFile;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveRecordFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveRecordFilesResponse>(await this.callApi(params, req, runtime), new DeleteLiveRecordFilesResponse({}));
  }

  async deleteLiveRecordFiles(request: DeleteLiveRecordFilesRequest): Promise<DeleteLiveRecordFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRecordFilesWithOptions(request, runtime);
  }

  async deleteLiveRecordTemplateWithOptions(request: DeleteLiveRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRecordTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new DeleteLiveRecordTemplateResponse({}));
  }

  async deleteLiveRecordTemplate(request: DeleteLiveRecordTemplateRequest): Promise<DeleteLiveRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRecordTemplateWithOptions(request, runtime);
  }

  async deleteLiveSnapshotFilesWithOptions(tmpReq: DeleteLiveSnapshotFilesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveSnapshotFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteLiveSnapshotFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createTimestampList)) {
      request.createTimestampListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimestampList, "CreateTimestampList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.createTimestampListShrink)) {
      query["CreateTimestampList"] = request.createTimestampListShrink;
    }

    if (!Util.isUnset(request.deleteOriginalFile)) {
      query["DeleteOriginalFile"] = request.deleteOriginalFile;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveSnapshotFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveSnapshotFilesResponse>(await this.callApi(params, req, runtime), new DeleteLiveSnapshotFilesResponse({}));
  }

  async deleteLiveSnapshotFiles(request: DeleteLiveSnapshotFilesRequest): Promise<DeleteLiveSnapshotFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveSnapshotFilesWithOptions(request, runtime);
  }

  async deleteLiveSnapshotTemplateWithOptions(request: DeleteLiveSnapshotTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveSnapshotTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new DeleteLiveSnapshotTemplateResponse({}));
  }

  async deleteLiveSnapshotTemplate(request: DeleteLiveSnapshotTemplateRequest): Promise<DeleteLiveSnapshotTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveSnapshotTemplateWithOptions(request, runtime);
  }

  async deleteLiveTranscodeJobWithOptions(request: DeleteLiveTranscodeJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveTranscodeJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new DeleteLiveTranscodeJobResponse({}));
  }

  async deleteLiveTranscodeJob(request: DeleteLiveTranscodeJobRequest): Promise<DeleteLiveTranscodeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveTranscodeJobWithOptions(request, runtime);
  }

  async deleteLiveTranscodeTemplateWithOptions(request: DeleteLiveTranscodeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveTranscodeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new DeleteLiveTranscodeTemplateResponse({}));
  }

  async deleteLiveTranscodeTemplate(request: DeleteLiveTranscodeTemplateRequest): Promise<DeleteLiveTranscodeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveTranscodeTemplateWithOptions(request, runtime);
  }

  async deleteMediaInfosWithOptions(request: DeleteMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletePhysicalFiles)) {
      query["DeletePhysicalFiles"] = request.deletePhysicalFiles;
    }

    if (!Util.isUnset(request.inputURLs)) {
      query["InputURLs"] = request.inputURLs;
    }

    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMediaInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMediaInfosResponse>(await this.callApi(params, req, runtime), new DeleteMediaInfosResponse({}));
  }

  async deleteMediaInfos(request: DeleteMediaInfosRequest): Promise<DeleteMediaInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaInfosWithOptions(request, runtime);
  }

  async deletePipelineWithOptions(request: DeletePipelineRequest, runtime: $Util.RuntimeOptions): Promise<DeletePipelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePipeline",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineResponse>(await this.callApi(params, req, runtime), new DeletePipelineResponse({}));
  }

  async deletePipeline(request: DeletePipelineRequest): Promise<DeletePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePipelineWithOptions(request, runtime);
  }

  async deletePlayInfoWithOptions(request: DeletePlayInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeletePlayInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletePhysicalFiles)) {
      query["DeletePhysicalFiles"] = request.deletePhysicalFiles;
    }

    if (!Util.isUnset(request.fileURLs)) {
      query["FileURLs"] = request.fileURLs;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePlayInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePlayInfoResponse>(await this.callApi(params, req, runtime), new DeletePlayInfoResponse({}));
  }

  async deletePlayInfo(request: DeletePlayInfoRequest): Promise<DeletePlayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePlayInfoWithOptions(request, runtime);
  }

  async deleteSmartJobWithOptions(request: DeleteSmartJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSmartJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSmartJobResponse>(await this.callApi(params, req, runtime), new DeleteSmartJobResponse({}));
  }

  async deleteSmartJob(request: DeleteSmartJobRequest): Promise<DeleteSmartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartJobWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async describeFilterConfigsWithOptions(request: DescribeFilterConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFilterConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFilterConfigs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFilterConfigsResponse>(await this.callApi(params, req, runtime), new DescribeFilterConfigsResponse({}));
  }

  async describeFilterConfigs(request: DescribeFilterConfigsRequest): Promise<DescribeFilterConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFilterConfigsWithOptions(request, runtime);
  }

  async describeMeterIceEditUsageWithOptions(request: DescribeMeterIceEditUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterIceEditUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterIceEditUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterIceEditUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterIceEditUsageResponse({}));
  }

  async describeMeterIceEditUsage(request: DescribeMeterIceEditUsageRequest): Promise<DescribeMeterIceEditUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterIceEditUsageWithOptions(request, runtime);
  }

  async describeMeterIceLiveMediaConvertUsageWithOptions(request: DescribeMeterIceLiveMediaConvertUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterIceLiveMediaConvertUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterIceLiveMediaConvertUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterIceLiveMediaConvertUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterIceLiveMediaConvertUsageResponse({}));
  }

  async describeMeterIceLiveMediaConvertUsage(request: DescribeMeterIceLiveMediaConvertUsageRequest): Promise<DescribeMeterIceLiveMediaConvertUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterIceLiveMediaConvertUsageWithOptions(request, runtime);
  }

  async describeMeterIceMediaConvertUHDUsageWithOptions(request: DescribeMeterIceMediaConvertUHDUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterIceMediaConvertUHDUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterIceMediaConvertUHDUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterIceMediaConvertUHDUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterIceMediaConvertUHDUsageResponse({}));
  }

  async describeMeterIceMediaConvertUHDUsage(request: DescribeMeterIceMediaConvertUHDUsageRequest): Promise<DescribeMeterIceMediaConvertUHDUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterIceMediaConvertUHDUsageWithOptions(request, runtime);
  }

  async describeMeterIceMediaConvertUsageWithOptions(request: DescribeMeterIceMediaConvertUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterIceMediaConvertUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterIceMediaConvertUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterIceMediaConvertUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterIceMediaConvertUsageResponse({}));
  }

  async describeMeterIceMediaConvertUsage(request: DescribeMeterIceMediaConvertUsageRequest): Promise<DescribeMeterIceMediaConvertUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterIceMediaConvertUsageWithOptions(request, runtime);
  }

  async describeMeterIceMpsAiUsageWithOptions(request: DescribeMeterIceMpsAiUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterIceMpsAiUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterIceMpsAiUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterIceMpsAiUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterIceMpsAiUsageResponse({}));
  }

  async describeMeterIceMpsAiUsage(request: DescribeMeterIceMpsAiUsageRequest): Promise<DescribeMeterIceMpsAiUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterIceMpsAiUsageWithOptions(request, runtime);
  }

  async describeMeterImsEditUsageWithOptions(request: DescribeMeterImsEditUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsEditUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsEditUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsEditUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsEditUsageResponse({}));
  }

  async describeMeterImsEditUsage(request: DescribeMeterImsEditUsageRequest): Promise<DescribeMeterImsEditUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsEditUsageWithOptions(request, runtime);
  }

  async describeMeterImsLiveEditUsageWithOptions(request: DescribeMeterImsLiveEditUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsLiveEditUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsLiveEditUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsLiveEditUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsLiveEditUsageResponse({}));
  }

  async describeMeterImsLiveEditUsage(request: DescribeMeterImsLiveEditUsageRequest): Promise<DescribeMeterImsLiveEditUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsLiveEditUsageWithOptions(request, runtime);
  }

  async describeMeterImsLiveMediaConvertUsageWithOptions(request: DescribeMeterImsLiveMediaConvertUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsLiveMediaConvertUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsLiveMediaConvertUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsLiveMediaConvertUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsLiveMediaConvertUsageResponse({}));
  }

  async describeMeterImsLiveMediaConvertUsage(request: DescribeMeterImsLiveMediaConvertUsageRequest): Promise<DescribeMeterImsLiveMediaConvertUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsLiveMediaConvertUsageWithOptions(request, runtime);
  }

  async describeMeterImsLiveRecordUsageWithOptions(request: DescribeMeterImsLiveRecordUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsLiveRecordUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsLiveRecordUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsLiveRecordUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsLiveRecordUsageResponse({}));
  }

  async describeMeterImsLiveRecordUsage(request: DescribeMeterImsLiveRecordUsageRequest): Promise<DescribeMeterImsLiveRecordUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsLiveRecordUsageWithOptions(request, runtime);
  }

  async describeMeterImsLiveSnapshotUsageWithOptions(request: DescribeMeterImsLiveSnapshotUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsLiveSnapshotUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsLiveSnapshotUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsLiveSnapshotUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsLiveSnapshotUsageResponse({}));
  }

  async describeMeterImsLiveSnapshotUsage(request: DescribeMeterImsLiveSnapshotUsageRequest): Promise<DescribeMeterImsLiveSnapshotUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsLiveSnapshotUsageWithOptions(request, runtime);
  }

  async describeMeterImsMediaConvertUHDUsageWithOptions(request: DescribeMeterImsMediaConvertUHDUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsMediaConvertUHDUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsMediaConvertUHDUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsMediaConvertUHDUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsMediaConvertUHDUsageResponse({}));
  }

  async describeMeterImsMediaConvertUHDUsage(request: DescribeMeterImsMediaConvertUHDUsageRequest): Promise<DescribeMeterImsMediaConvertUHDUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsMediaConvertUHDUsageWithOptions(request, runtime);
  }

  async describeMeterImsMediaConvertUsageWithOptions(request: DescribeMeterImsMediaConvertUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsMediaConvertUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsMediaConvertUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsMediaConvertUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsMediaConvertUsageResponse({}));
  }

  async describeMeterImsMediaConvertUsage(request: DescribeMeterImsMediaConvertUsageRequest): Promise<DescribeMeterImsMediaConvertUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsMediaConvertUsageWithOptions(request, runtime);
  }

  async describeMeterImsMpsAiUsageWithOptions(request: DescribeMeterImsMpsAiUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsMpsAiUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsMpsAiUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsMpsAiUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsMpsAiUsageResponse({}));
  }

  async describeMeterImsMpsAiUsage(request: DescribeMeterImsMpsAiUsageRequest): Promise<DescribeMeterImsMpsAiUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsMpsAiUsageWithOptions(request, runtime);
  }

  async describeMeterImsSummaryWithOptions(request: DescribeMeterImsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImsSummary",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeMeterImsSummaryResponse({}));
  }

  async describeMeterImsSummary(request: DescribeMeterImsSummaryRequest): Promise<DescribeMeterImsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImsSummaryWithOptions(request, runtime);
  }

  async describePlayDetailWithOptions(request: DescribePlayDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.playTs)) {
      query["PlayTs"] = request.playTs;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayDetail",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayDetailResponse>(await this.callApi(params, req, runtime), new DescribePlayDetailResponse({}));
  }

  async describePlayDetail(request: DescribePlayDetailRequest): Promise<DescribePlayDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayDetailWithOptions(request, runtime);
  }

  async describePlayEventListWithOptions(request: DescribePlayEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.playTs)) {
      query["PlayTs"] = request.playTs;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayEventList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayEventListResponse>(await this.callApi(params, req, runtime), new DescribePlayEventListResponse({}));
  }

  async describePlayEventList(request: DescribePlayEventListRequest): Promise<DescribePlayEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayEventListWithOptions(request, runtime);
  }

  async describePlayFirstFrameDurationMetricDataWithOptions(request: DescribePlayFirstFrameDurationMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayFirstFrameDurationMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayFirstFrameDurationMetricData",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayFirstFrameDurationMetricDataResponse>(await this.callApi(params, req, runtime), new DescribePlayFirstFrameDurationMetricDataResponse({}));
  }

  async describePlayFirstFrameDurationMetricData(request: DescribePlayFirstFrameDurationMetricDataRequest): Promise<DescribePlayFirstFrameDurationMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayFirstFrameDurationMetricDataWithOptions(request, runtime);
  }

  async describePlayListWithOptions(request: DescribePlayListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.playType)) {
      query["PlayType"] = request.playType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayListResponse>(await this.callApi(params, req, runtime), new DescribePlayListResponse({}));
  }

  async describePlayList(request: DescribePlayListRequest): Promise<DescribePlayListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayListWithOptions(request, runtime);
  }

  async describePlayMetricDataWithOptions(request: DescribePlayMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!Util.isUnset(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.experienceLevel)) {
      query["ExperienceLevel"] = request.experienceLevel;
    }

    if (!Util.isUnset(request.itemConfigs)) {
      query["ItemConfigs"] = request.itemConfigs;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.network)) {
      query["Network"] = request.network;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.sdkVersion)) {
      query["SdkVersion"] = request.sdkVersion;
    }

    if (!Util.isUnset(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayMetricData",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayMetricDataResponse>(await this.callApi(params, req, runtime), new DescribePlayMetricDataResponse({}));
  }

  async describePlayMetricData(request: DescribePlayMetricDataRequest): Promise<DescribePlayMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayMetricDataWithOptions(request, runtime);
  }

  async describePlayQoeListWithOptions(tmpReq: DescribePlayQoeListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayQoeListResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribePlayQoeListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metricTypes)) {
      request.metricTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricTypes, "MetricTypes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!Util.isUnset(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.itemConfigs)) {
      query["ItemConfigs"] = request.itemConfigs;
    }

    if (!Util.isUnset(request.metricTypesShrink)) {
      query["MetricTypes"] = request.metricTypesShrink;
    }

    if (!Util.isUnset(request.network)) {
      query["Network"] = request.network;
    }

    if (!Util.isUnset(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayQoeList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayQoeListResponse>(await this.callApi(params, req, runtime), new DescribePlayQoeListResponse({}));
  }

  async describePlayQoeList(request: DescribePlayQoeListRequest): Promise<DescribePlayQoeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayQoeListWithOptions(request, runtime);
  }

  async describePlayQosListWithOptions(tmpReq: DescribePlayQosListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlayQosListResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribePlayQosListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metricTypes)) {
      request.metricTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricTypes, "MetricTypes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!Util.isUnset(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.itemConfigs)) {
      query["ItemConfigs"] = request.itemConfigs;
    }

    if (!Util.isUnset(request.metricTypesShrink)) {
      query["MetricTypes"] = request.metricTypesShrink;
    }

    if (!Util.isUnset(request.network)) {
      query["Network"] = request.network;
    }

    if (!Util.isUnset(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlayQosList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlayQosListResponse>(await this.callApi(params, req, runtime), new DescribePlayQosListResponse({}));
  }

  async describePlayQosList(request: DescribePlayQosListRequest): Promise<DescribePlayQosListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlayQosListWithOptions(request, runtime);
  }

  async describeQueryConfigsWithOptions(request: DescribeQueryConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQueryConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQueryConfigs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQueryConfigsResponse>(await this.callApi(params, req, runtime), new DescribeQueryConfigsResponse({}));
  }

  async describeQueryConfigs(request: DescribeQueryConfigsRequest): Promise<DescribeQueryConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQueryConfigsWithOptions(request, runtime);
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
      version: "2020-11-09",
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

  async getCustomTemplateWithOptions(request: GetCustomTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomTemplateResponse>(await this.callApi(params, req, runtime), new GetCustomTemplateResponse({}));
  }

  async getCustomTemplate(request: GetCustomTemplateRequest): Promise<GetCustomTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomTemplateWithOptions(request, runtime);
  }

  async getDefaultStorageLocationWithOptions(runtime: $Util.RuntimeOptions): Promise<GetDefaultStorageLocationResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetDefaultStorageLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultStorageLocationResponse>(await this.callApi(params, req, runtime), new GetDefaultStorageLocationResponse({}));
  }

  async getDefaultStorageLocation(): Promise<GetDefaultStorageLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultStorageLocationWithOptions(runtime);
  }

  async getDynamicImageJobWithOptions(request: GetDynamicImageJobRequest, runtime: $Util.RuntimeOptions): Promise<GetDynamicImageJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDynamicImageJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDynamicImageJobResponse>(await this.callApi(params, req, runtime), new GetDynamicImageJobResponse({}));
  }

  async getDynamicImageJob(request: GetDynamicImageJobRequest): Promise<GetDynamicImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDynamicImageJobWithOptions(request, runtime);
  }

  async getEditingProjectWithOptions(request: GetEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEditingProject",
      version: "2020-11-09",
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
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEditingProjectMaterials",
      version: "2020-11-09",
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

  async getEventCallbackWithOptions(runtime: $Util.RuntimeOptions): Promise<GetEventCallbackResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetEventCallback",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventCallbackResponse>(await this.callApi(params, req, runtime), new GetEventCallbackResponse({}));
  }

  async getEventCallback(): Promise<GetEventCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventCallbackWithOptions(runtime);
  }

  async getLiveEditingIndexFileWithOptions(request: GetLiveEditingIndexFileRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveEditingIndexFileResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveEditingIndexFile",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveEditingIndexFileResponse>(await this.callApi(params, req, runtime), new GetLiveEditingIndexFileResponse({}));
  }

  async getLiveEditingIndexFile(request: GetLiveEditingIndexFileRequest): Promise<GetLiveEditingIndexFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveEditingIndexFileWithOptions(request, runtime);
  }

  async getLiveEditingJobWithOptions(request: GetLiveEditingJobRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveEditingJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveEditingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveEditingJobResponse>(await this.callApi(params, req, runtime), new GetLiveEditingJobResponse({}));
  }

  async getLiveEditingJob(request: GetLiveEditingJobRequest): Promise<GetLiveEditingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveEditingJobWithOptions(request, runtime);
  }

  async getLiveRecordJobWithOptions(request: GetLiveRecordJobRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRecordJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveRecordJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveRecordJobResponse>(await this.callApi(params, req, runtime), new GetLiveRecordJobResponse({}));
  }

  async getLiveRecordJob(request: GetLiveRecordJobRequest): Promise<GetLiveRecordJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRecordJobWithOptions(request, runtime);
  }

  async getLiveRecordTemplateWithOptions(request: GetLiveRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRecordTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new GetLiveRecordTemplateResponse({}));
  }

  async getLiveRecordTemplate(request: GetLiveRecordTemplateRequest): Promise<GetLiveRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRecordTemplateWithOptions(request, runtime);
  }

  async getLiveSnapshotJobWithOptions(request: GetLiveSnapshotJobRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveSnapshotJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveSnapshotJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveSnapshotJobResponse>(await this.callApi(params, req, runtime), new GetLiveSnapshotJobResponse({}));
  }

  async getLiveSnapshotJob(request: GetLiveSnapshotJobRequest): Promise<GetLiveSnapshotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveSnapshotJobWithOptions(request, runtime);
  }

  async getLiveSnapshotTemplateWithOptions(request: GetLiveSnapshotTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveSnapshotTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new GetLiveSnapshotTemplateResponse({}));
  }

  async getLiveSnapshotTemplate(request: GetLiveSnapshotTemplateRequest): Promise<GetLiveSnapshotTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveSnapshotTemplateWithOptions(request, runtime);
  }

  async getLiveTranscodeJobWithOptions(request: GetLiveTranscodeJobRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveTranscodeJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new GetLiveTranscodeJobResponse({}));
  }

  async getLiveTranscodeJob(request: GetLiveTranscodeJobRequest): Promise<GetLiveTranscodeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveTranscodeJobWithOptions(request, runtime);
  }

  async getLiveTranscodeTemplateWithOptions(request: GetLiveTranscodeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveTranscodeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new GetLiveTranscodeTemplateResponse({}));
  }

  async getLiveTranscodeTemplate(request: GetLiveTranscodeTemplateRequest): Promise<GetLiveTranscodeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveTranscodeTemplateWithOptions(request, runtime);
  }

  async getMediaInfoWithOptions(request: GetMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaInfoResponse>(await this.callApi(params, req, runtime), new GetMediaInfoResponse({}));
  }

  async getMediaInfo(request: GetMediaInfoRequest): Promise<GetMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaInfoWithOptions(request, runtime);
  }

  async getMediaInfoJobWithOptions(request: GetMediaInfoJobRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaInfoJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaInfoJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaInfoJobResponse>(await this.callApi(params, req, runtime), new GetMediaInfoJobResponse({}));
  }

  async getMediaInfoJob(request: GetMediaInfoJobRequest): Promise<GetMediaInfoJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaInfoJobWithOptions(request, runtime);
  }

  async getMediaProducingJobWithOptions(request: GetMediaProducingJobRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaProducingJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaProducingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMediaProducingJobResponse>(await this.callApi(params, req, runtime), new GetMediaProducingJobResponse({}));
  }

  async getMediaProducingJob(request: GetMediaProducingJobRequest): Promise<GetMediaProducingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaProducingJobWithOptions(request, runtime);
  }

  async getPackageJobWithOptions(request: GetPackageJobRequest, runtime: $Util.RuntimeOptions): Promise<GetPackageJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPackageJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPackageJobResponse>(await this.callApi(params, req, runtime), new GetPackageJobResponse({}));
  }

  async getPackageJob(request: GetPackageJobRequest): Promise<GetPackageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPackageJobWithOptions(request, runtime);
  }

  async getPipelineWithOptions(request: GetPipelineRequest, runtime: $Util.RuntimeOptions): Promise<GetPipelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPipeline",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineResponse>(await this.callApi(params, req, runtime), new GetPipelineResponse({}));
  }

  async getPipeline(request: GetPipelineRequest): Promise<GetPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPipelineWithOptions(request, runtime);
  }

  async getPlayInfoWithOptions(request: GetPlayInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetPlayInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPlayInfo",
      version: "2020-11-09",
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

  async getPublicMediaInfoWithOptions(request: GetPublicMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublicMediaInfoResponse>(await this.callApi(params, req, runtime), new GetPublicMediaInfoResponse({}));
  }

  async getPublicMediaInfo(request: GetPublicMediaInfoRequest): Promise<GetPublicMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicMediaInfoWithOptions(request, runtime);
  }

  async getSmartHandleJobWithOptions(request: GetSmartHandleJobRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartHandleJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSmartHandleJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSmartHandleJobResponse>(await this.callApi(params, req, runtime), new GetSmartHandleJobResponse({}));
  }

  async getSmartHandleJob(request: GetSmartHandleJobRequest): Promise<GetSmartHandleJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartHandleJobWithOptions(request, runtime);
  }

  async getSnapshotJobWithOptions(request: GetSnapshotJobRequest, runtime: $Util.RuntimeOptions): Promise<GetSnapshotJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSnapshotJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSnapshotJobResponse>(await this.callApi(params, req, runtime), new GetSnapshotJobResponse({}));
  }

  async getSnapshotJob(request: GetSnapshotJobRequest): Promise<GetSnapshotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSnapshotJobWithOptions(request, runtime);
  }

  async getSnapshotUrlsWithOptions(request: GetSnapshotUrlsRequest, runtime: $Util.RuntimeOptions): Promise<GetSnapshotUrlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSnapshotUrls",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSnapshotUrlsResponse>(await this.callApi(params, req, runtime), new GetSnapshotUrlsResponse({}));
  }

  async getSnapshotUrls(request: GetSnapshotUrlsRequest): Promise<GetSnapshotUrlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSnapshotUrlsWithOptions(request, runtime);
  }

  async getSystemTemplateWithOptions(request: GetSystemTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetSystemTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSystemTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSystemTemplateResponse>(await this.callApi(params, req, runtime), new GetSystemTemplateResponse({}));
  }

  async getSystemTemplate(request: GetSystemTemplateRequest): Promise<GetSystemTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSystemTemplateWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.relatedMediaidFlag)) {
      query["RelatedMediaidFlag"] = request.relatedMediaidFlag;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async getTemplateMaterialsWithOptions(request: GetTemplateMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateMaterialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileList)) {
      query["FileList"] = request.fileList;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateMaterials",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateMaterialsResponse>(await this.callApi(params, req, runtime), new GetTemplateMaterialsResponse({}));
  }

  async getTemplateMaterials(request: GetTemplateMaterialsRequest): Promise<GetTemplateMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateMaterialsWithOptions(request, runtime);
  }

  async getTranscodeJobWithOptions(request: GetTranscodeJobRequest, runtime: $Util.RuntimeOptions): Promise<GetTranscodeJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.parentJobId)) {
      query["ParentJobId"] = request.parentJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTranscodeJobResponse>(await this.callApi(params, req, runtime), new GetTranscodeJobResponse({}));
  }

  async getTranscodeJob(request: GetTranscodeJobRequest): Promise<GetTranscodeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranscodeJobWithOptions(request, runtime);
  }

  async getUrlUploadInfosWithOptions(request: GetUrlUploadInfosRequest, runtime: $Util.RuntimeOptions): Promise<GetUrlUploadInfosResponse> {
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
      action: "GetUrlUploadInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUrlUploadInfosResponse>(await this.callApi(params, req, runtime), new GetUrlUploadInfosResponse({}));
  }

  async getUrlUploadInfos(request: GetUrlUploadInfosRequest): Promise<GetUrlUploadInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUrlUploadInfosWithOptions(request, runtime);
  }

  async listAllPublicMediaTagsWithOptions(request: ListAllPublicMediaTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListAllPublicMediaTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAllPublicMediaTags",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAllPublicMediaTagsResponse>(await this.callApi(params, req, runtime), new ListAllPublicMediaTagsResponse({}));
  }

  async listAllPublicMediaTags(request: ListAllPublicMediaTagsRequest): Promise<ListAllPublicMediaTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllPublicMediaTagsWithOptions(request, runtime);
  }

  async listCustomTemplatesWithOptions(request: ListCustomTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomTemplatesResponse>(await this.callApi(params, req, runtime), new ListCustomTemplatesResponse({}));
  }

  async listCustomTemplates(request: ListCustomTemplatesRequest): Promise<ListCustomTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomTemplatesWithOptions(request, runtime);
  }

  async listDynamicImageJobsWithOptions(request: ListDynamicImageJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListDynamicImageJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDynamicImageJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDynamicImageJobsResponse>(await this.callApi(params, req, runtime), new ListDynamicImageJobsResponse({}));
  }

  async listDynamicImageJobs(request: ListDynamicImageJobsRequest): Promise<ListDynamicImageJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDynamicImageJobsWithOptions(request, runtime);
  }

  async listLiveRecordFilesWithOptions(request: ListLiveRecordFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRecordFilesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveRecordFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveRecordFilesResponse>(await this.callApi(params, req, runtime), new ListLiveRecordFilesResponse({}));
  }

  async listLiveRecordFiles(request: ListLiveRecordFilesRequest): Promise<ListLiveRecordFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRecordFilesWithOptions(request, runtime);
  }

  async listLiveRecordJobsWithOptions(request: ListLiveRecordJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRecordJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveRecordJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveRecordJobsResponse>(await this.callApi(params, req, runtime), new ListLiveRecordJobsResponse({}));
  }

  async listLiveRecordJobs(request: ListLiveRecordJobsRequest): Promise<ListLiveRecordJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRecordJobsWithOptions(request, runtime);
  }

  async listLiveRecordTemplatesWithOptions(request: ListLiveRecordTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRecordTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveRecordTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveRecordTemplatesResponse>(await this.callApi(params, req, runtime), new ListLiveRecordTemplatesResponse({}));
  }

  async listLiveRecordTemplates(request: ListLiveRecordTemplatesRequest): Promise<ListLiveRecordTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRecordTemplatesWithOptions(request, runtime);
  }

  async listLiveSnapshotFilesWithOptions(request: ListLiveSnapshotFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveSnapshotFilesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveSnapshotFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveSnapshotFilesResponse>(await this.callApi(params, req, runtime), new ListLiveSnapshotFilesResponse({}));
  }

  async listLiveSnapshotFiles(request: ListLiveSnapshotFilesRequest): Promise<ListLiveSnapshotFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveSnapshotFilesWithOptions(request, runtime);
  }

  async listLiveSnapshotJobsWithOptions(request: ListLiveSnapshotJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveSnapshotJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveSnapshotJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveSnapshotJobsResponse>(await this.callApi(params, req, runtime), new ListLiveSnapshotJobsResponse({}));
  }

  async listLiveSnapshotJobs(request: ListLiveSnapshotJobsRequest): Promise<ListLiveSnapshotJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveSnapshotJobsWithOptions(request, runtime);
  }

  async listLiveSnapshotTemplatesWithOptions(request: ListLiveSnapshotTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveSnapshotTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveSnapshotTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveSnapshotTemplatesResponse>(await this.callApi(params, req, runtime), new ListLiveSnapshotTemplatesResponse({}));
  }

  async listLiveSnapshotTemplates(request: ListLiveSnapshotTemplatesRequest): Promise<ListLiveSnapshotTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveSnapshotTemplatesWithOptions(request, runtime);
  }

  async listLiveTranscodeJobsWithOptions(request: ListLiveTranscodeJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveTranscodeJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    if (!Util.isUnset(request.startMode)) {
      query["StartMode"] = request.startMode;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveTranscodeJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveTranscodeJobsResponse>(await this.callApi(params, req, runtime), new ListLiveTranscodeJobsResponse({}));
  }

  async listLiveTranscodeJobs(request: ListLiveTranscodeJobsRequest): Promise<ListLiveTranscodeJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveTranscodeJobsWithOptions(request, runtime);
  }

  async listLiveTranscodeTemplatesWithOptions(request: ListLiveTranscodeTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveTranscodeTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    if (!Util.isUnset(request.videoCodec)) {
      query["VideoCodec"] = request.videoCodec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveTranscodeTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveTranscodeTemplatesResponse>(await this.callApi(params, req, runtime), new ListLiveTranscodeTemplatesResponse({}));
  }

  async listLiveTranscodeTemplates(request: ListLiveTranscodeTemplatesRequest): Promise<ListLiveTranscodeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveTranscodeTemplatesWithOptions(request, runtime);
  }

  async listMediaBasicInfosWithOptions(request: ListMediaBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaBasicInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.includeFileBasicInfo)) {
      query["IncludeFileBasicInfo"] = request.includeFileBasicInfo;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMediaBasicInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMediaBasicInfosResponse>(await this.callApi(params, req, runtime), new ListMediaBasicInfosResponse({}));
  }

  async listMediaBasicInfos(request: ListMediaBasicInfosRequest): Promise<ListMediaBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaBasicInfosWithOptions(request, runtime);
  }

  async listMediaInfoJobsWithOptions(request: ListMediaInfoJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaInfoJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMediaInfoJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMediaInfoJobsResponse>(await this.callApi(params, req, runtime), new ListMediaInfoJobsResponse({}));
  }

  async listMediaInfoJobs(request: ListMediaInfoJobsRequest): Promise<ListMediaInfoJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaInfoJobsWithOptions(request, runtime);
  }

  async listPackageJobsWithOptions(request: ListPackageJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListPackageJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPackageJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPackageJobsResponse>(await this.callApi(params, req, runtime), new ListPackageJobsResponse({}));
  }

  async listPackageJobs(request: ListPackageJobsRequest): Promise<ListPackageJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPackageJobsWithOptions(request, runtime);
  }

  async listPipelinesWithOptions(request: ListPipelinesRequest, runtime: $Util.RuntimeOptions): Promise<ListPipelinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelines",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPipelinesResponse>(await this.callApi(params, req, runtime), new ListPipelinesResponse({}));
  }

  async listPipelines(request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPipelinesWithOptions(request, runtime);
  }

  async listPublicMediaBasicInfosWithOptions(request: ListPublicMediaBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicMediaBasicInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeFileBasicInfo)) {
      query["IncludeFileBasicInfo"] = request.includeFileBasicInfo;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.mediaTagId)) {
      query["MediaTagId"] = request.mediaTagId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListPublicMediaBasicInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicMediaBasicInfosResponse>(await this.callApi(params, req, runtime), new ListPublicMediaBasicInfosResponse({}));
  }

  async listPublicMediaBasicInfos(request: ListPublicMediaBasicInfosRequest): Promise<ListPublicMediaBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicMediaBasicInfosWithOptions(request, runtime);
  }

  async listSmartJobsWithOptions(request: ListSmartJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSmartJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSmartJobsResponse>(await this.callApi(params, req, runtime), new ListSmartJobsResponse({}));
  }

  async listSmartJobs(request: ListSmartJobsRequest): Promise<ListSmartJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartJobsWithOptions(request, runtime);
  }

  async listSnapshotJobsWithOptions(request: ListSnapshotJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSnapshotJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSnapshotJobsResponse>(await this.callApi(params, req, runtime), new ListSnapshotJobsResponse({}));
  }

  async listSnapshotJobs(request: ListSnapshotJobsRequest): Promise<ListSnapshotJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotJobsWithOptions(request, runtime);
  }

  async listSystemTemplatesWithOptions(request: ListSystemTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSystemTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSystemTemplatesResponse>(await this.callApi(params, req, runtime), new ListSystemTemplatesResponse({}));
  }

  async listSystemTemplates(request: ListSystemTemplatesRequest): Promise<ListSystemTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemTemplatesWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createSource)) {
      query["CreateSource"] = request.createSource;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async listTranscodeJobsWithOptions(request: ListTranscodeJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListTranscodeJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentJobId)) {
      query["ParentJobId"] = request.parentJobId;
    }

    if (!Util.isUnset(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTranscodeJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTranscodeJobsResponse>(await this.callApi(params, req, runtime), new ListTranscodeJobsResponse({}));
  }

  async listTranscodeJobs(request: ListTranscodeJobsRequest): Promise<ListTranscodeJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTranscodeJobsWithOptions(request, runtime);
  }

  async queryIProductionJobWithOptions(request: QueryIProductionJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryIProductionJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryIProductionJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryIProductionJobResponse>(await this.callApi(params, req, runtime), new QueryIProductionJobResponse({}));
  }

  async queryIProductionJob(request: QueryIProductionJobRequest): Promise<QueryIProductionJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIProductionJobWithOptions(request, runtime);
  }

  async queryMediaCensorJobDetailWithOptions(request: QueryMediaCensorJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaCensorJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
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
      action: "QueryMediaCensorJobDetail",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaCensorJobDetailResponse>(await this.callApi(params, req, runtime), new QueryMediaCensorJobDetailResponse({}));
  }

  async queryMediaCensorJobDetail(request: QueryMediaCensorJobDetailRequest): Promise<QueryMediaCensorJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaCensorJobDetailWithOptions(request, runtime);
  }

  async queryMediaCensorJobListWithOptions(request: QueryMediaCensorJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaCensorJobListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfJobCreatedTimeRange)) {
      query["EndOfJobCreatedTimeRange"] = request.endOfJobCreatedTimeRange;
    }

    if (!Util.isUnset(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!Util.isUnset(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startOfJobCreatedTimeRange)) {
      query["StartOfJobCreatedTimeRange"] = request.startOfJobCreatedTimeRange;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMediaCensorJobList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaCensorJobListResponse>(await this.callApi(params, req, runtime), new QueryMediaCensorJobListResponse({}));
  }

  async queryMediaCensorJobList(request: QueryMediaCensorJobListRequest): Promise<QueryMediaCensorJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaCensorJobListWithOptions(request, runtime);
  }

  async querySmarttagJobWithOptions(request: QuerySmarttagJobRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmarttagJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySmarttagJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySmarttagJobResponse>(await this.callApi(params, req, runtime), new QuerySmarttagJobResponse({}));
  }

  async querySmarttagJob(request: QuerySmarttagJobRequest): Promise<QuerySmarttagJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmarttagJobWithOptions(request, runtime);
  }

  async refreshUploadMediaWithOptions(request: RefreshUploadMediaRequest, runtime: $Util.RuntimeOptions): Promise<RefreshUploadMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshUploadMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshUploadMediaResponse>(await this.callApi(params, req, runtime), new RefreshUploadMediaResponse({}));
  }

  async refreshUploadMedia(request: RefreshUploadMediaRequest): Promise<RefreshUploadMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshUploadMediaWithOptions(request, runtime);
  }

  async registerMediaInfoWithOptions(request: RegisterMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!Util.isUnset(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
    }

    if (!Util.isUnset(request.registerConfig)) {
      query["RegisterConfig"] = request.registerConfig;
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
      action: "RegisterMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterMediaInfoResponse>(await this.callApi(params, req, runtime), new RegisterMediaInfoResponse({}));
  }

  async registerMediaInfo(request: RegisterMediaInfoRequest): Promise<RegisterMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerMediaInfoWithOptions(request, runtime);
  }

  async registerMediaStreamWithOptions(request: RegisterMediaStreamRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMediaStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterMediaStream",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterMediaStreamResponse>(await this.callApi(params, req, runtime), new RegisterMediaStreamResponse({}));
  }

  async registerMediaStream(request: RegisterMediaStreamRequest): Promise<RegisterMediaStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerMediaStreamWithOptions(request, runtime);
  }

  async searchEditingProjectWithOptions(request: SearchEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createSource)) {
      query["CreateSource"] = request.createSource;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.projectType)) {
      query["ProjectType"] = request.projectType;
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

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchEditingProject",
      version: "2020-11-09",
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
    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
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

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchMedia",
      version: "2020-11-09",
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

  async searchPublicMediaInfoWithOptions(request: SearchPublicMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<SearchPublicMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorized)) {
      query["Authorized"] = request.authorized;
    }

    if (!Util.isUnset(request.dynamicMetaDataMatchFields)) {
      query["DynamicMetaDataMatchFields"] = request.dynamicMetaDataMatchFields;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.favorite)) {
      query["Favorite"] = request.favorite;
    }

    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchPublicMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchPublicMediaInfoResponse>(await this.callApi(params, req, runtime), new SearchPublicMediaInfoResponse({}));
  }

  async searchPublicMediaInfo(request: SearchPublicMediaInfoRequest): Promise<SearchPublicMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchPublicMediaInfoWithOptions(request, runtime);
  }

  async sendLiveSnapshotJobCommandWithOptions(request: SendLiveSnapshotJobCommandRequest, runtime: $Util.RuntimeOptions): Promise<SendLiveSnapshotJobCommandResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.command)) {
      body["Command"] = request.command;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendLiveSnapshotJobCommand",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendLiveSnapshotJobCommandResponse>(await this.callApi(params, req, runtime), new SendLiveSnapshotJobCommandResponse({}));
  }

  async sendLiveSnapshotJobCommand(request: SendLiveSnapshotJobCommandRequest): Promise<SendLiveSnapshotJobCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendLiveSnapshotJobCommandWithOptions(request, runtime);
  }

  async sendLiveTranscodeJobCommandWithOptions(request: SendLiveTranscodeJobCommandRequest, runtime: $Util.RuntimeOptions): Promise<SendLiveTranscodeJobCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendLiveTranscodeJobCommand",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendLiveTranscodeJobCommandResponse>(await this.callApi(params, req, runtime), new SendLiveTranscodeJobCommandResponse({}));
  }

  async sendLiveTranscodeJobCommand(request: SendLiveTranscodeJobCommandRequest): Promise<SendLiveTranscodeJobCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendLiveTranscodeJobCommandWithOptions(request, runtime);
  }

  async setDefaultCustomTemplateWithOptions(request: SetDefaultCustomTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultCustomTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultCustomTemplateResponse>(await this.callApi(params, req, runtime), new SetDefaultCustomTemplateResponse({}));
  }

  async setDefaultCustomTemplate(request: SetDefaultCustomTemplateRequest): Promise<SetDefaultCustomTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultCustomTemplateWithOptions(request, runtime);
  }

  async setDefaultStorageLocationWithOptions(request: SetDefaultStorageLocationRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultStorageLocationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultStorageLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultStorageLocationResponse>(await this.callApi(params, req, runtime), new SetDefaultStorageLocationResponse({}));
  }

  async setDefaultStorageLocation(request: SetDefaultStorageLocationRequest): Promise<SetDefaultStorageLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultStorageLocationWithOptions(request, runtime);
  }

  async setEventCallbackWithOptions(request: SetEventCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SetEventCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!Util.isUnset(request.authSwitch)) {
      query["AuthSwitch"] = request.authSwitch;
    }

    if (!Util.isUnset(request.callbackQueueName)) {
      query["CallbackQueueName"] = request.callbackQueueName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetEventCallback",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetEventCallbackResponse>(await this.callApi(params, req, runtime), new SetEventCallbackResponse({}));
  }

  async setEventCallback(request: SetEventCallbackRequest): Promise<SetEventCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEventCallbackWithOptions(request, runtime);
  }

  async submitASRJobWithOptions(request: SubmitASRJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitASRJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.inputFile)) {
      query["InputFile"] = request.inputFile;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
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
      action: "SubmitASRJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitASRJobResponse>(await this.callApi(params, req, runtime), new SubmitASRJobResponse({}));
  }

  async submitASRJob(request: SubmitASRJobRequest): Promise<SubmitASRJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitASRJobWithOptions(request, runtime);
  }

  async submitAudioProduceJobWithOptions(request: SubmitAudioProduceJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAudioProduceJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.editingConfig)) {
      query["EditingConfig"] = request.editingConfig;
    }

    if (!Util.isUnset(request.inputConfig)) {
      query["InputConfig"] = request.inputConfig;
    }

    if (!Util.isUnset(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
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
      action: "SubmitAudioProduceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAudioProduceJobResponse>(await this.callApi(params, req, runtime), new SubmitAudioProduceJobResponse({}));
  }

  async submitAudioProduceJob(request: SubmitAudioProduceJobRequest): Promise<SubmitAudioProduceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAudioProduceJobWithOptions(request, runtime);
  }

  async submitDynamicChartJobWithOptions(request: SubmitDynamicChartJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDynamicChartJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.axisParams)) {
      query["AxisParams"] = request.axisParams;
    }

    if (!Util.isUnset(request.background)) {
      query["Background"] = request.background;
    }

    if (!Util.isUnset(request.chartConfig)) {
      query["ChartConfig"] = request.chartConfig;
    }

    if (!Util.isUnset(request.chartTitle)) {
      query["ChartTitle"] = request.chartTitle;
    }

    if (!Util.isUnset(request.chartType)) {
      query["ChartType"] = request.chartType;
    }

    if (!Util.isUnset(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
    }

    if (!Util.isUnset(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.subtitle)) {
      query["Subtitle"] = request.subtitle;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.unit)) {
      query["Unit"] = request.unit;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDynamicChartJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDynamicChartJobResponse>(await this.callApi(params, req, runtime), new SubmitDynamicChartJobResponse({}));
  }

  async submitDynamicChartJob(request: SubmitDynamicChartJobRequest): Promise<SubmitDynamicChartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDynamicChartJobWithOptions(request, runtime);
  }

  async submitDynamicImageJobWithOptions(tmpReq: SubmitDynamicImageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDynamicImageJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitDynamicImageJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.input))) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.input), "Input", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.output))) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.output), "Output", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.templateConfig))) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.templateConfig), "TemplateConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDynamicImageJob",
      version: "2020-11-09",
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

  async submitIProductionJobWithOptions(tmpReq: SubmitIProductionJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitIProductionJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitIProductionJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.input))) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.input), "Input", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.output))) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.output), "Output", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
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
      action: "SubmitIProductionJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitIProductionJobResponse>(await this.callApi(params, req, runtime), new SubmitIProductionJobResponse({}));
  }

  async submitIProductionJob(request: SubmitIProductionJobRequest): Promise<SubmitIProductionJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIProductionJobWithOptions(request, runtime);
  }

  async submitLiveEditingJobWithOptions(request: SubmitLiveEditingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitLiveEditingJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clips)) {
      query["Clips"] = request.clips;
    }

    if (!Util.isUnset(request.liveStreamConfig)) {
      query["LiveStreamConfig"] = request.liveStreamConfig;
    }

    if (!Util.isUnset(request.mediaProduceConfig)) {
      query["MediaProduceConfig"] = request.mediaProduceConfig;
    }

    if (!Util.isUnset(request.outputMediaConfig)) {
      query["OutputMediaConfig"] = request.outputMediaConfig;
    }

    if (!Util.isUnset(request.outputMediaTarget)) {
      query["OutputMediaTarget"] = request.outputMediaTarget;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitLiveEditingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitLiveEditingJobResponse>(await this.callApi(params, req, runtime), new SubmitLiveEditingJobResponse({}));
  }

  async submitLiveEditingJob(request: SubmitLiveEditingJobRequest): Promise<SubmitLiveEditingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitLiveEditingJobWithOptions(request, runtime);
  }

  async submitLiveRecordJobWithOptions(tmpReq: SubmitLiveRecordJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitLiveRecordJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitLiveRecordJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.recordOutput))) {
      request.recordOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.recordOutput), "RecordOutput", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.streamInput))) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.streamInput), "StreamInput", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.notifyUrl)) {
      body["NotifyUrl"] = request.notifyUrl;
    }

    if (!Util.isUnset(request.recordOutputShrink)) {
      body["RecordOutput"] = request.recordOutputShrink;
    }

    if (!Util.isUnset(request.streamInputShrink)) {
      body["StreamInput"] = request.streamInputShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitLiveRecordJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitLiveRecordJobResponse>(await this.callApi(params, req, runtime), new SubmitLiveRecordJobResponse({}));
  }

  async submitLiveRecordJob(request: SubmitLiveRecordJobRequest): Promise<SubmitLiveRecordJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitLiveRecordJobWithOptions(request, runtime);
  }

  async submitLiveSnapshotJobWithOptions(tmpReq: SubmitLiveSnapshotJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitLiveSnapshotJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitLiveSnapshotJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.snapshotOutput))) {
      request.snapshotOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.snapshotOutput), "SnapshotOutput", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.streamInput))) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.streamInput), "StreamInput", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.jobName)) {
      body["JobName"] = request.jobName;
    }

    if (!Util.isUnset(request.snapshotOutputShrink)) {
      body["SnapshotOutput"] = request.snapshotOutputShrink;
    }

    if (!Util.isUnset(request.streamInputShrink)) {
      body["StreamInput"] = request.streamInputShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitLiveSnapshotJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitLiveSnapshotJobResponse>(await this.callApi(params, req, runtime), new SubmitLiveSnapshotJobResponse({}));
  }

  async submitLiveSnapshotJob(request: SubmitLiveSnapshotJobRequest): Promise<SubmitLiveSnapshotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitLiveSnapshotJobWithOptions(request, runtime);
  }

  async submitLiveTranscodeJobWithOptions(tmpReq: SubmitLiveTranscodeJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitLiveTranscodeJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitLiveTranscodeJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.streamInput))) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.streamInput), "StreamInput", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.timedConfig))) {
      request.timedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.timedConfig), "TimedConfig", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.transcodeOutput))) {
      request.transcodeOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.transcodeOutput), "TranscodeOutput", "json");
    }

    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.startMode)) {
      query["StartMode"] = request.startMode;
    }

    if (!Util.isUnset(request.streamInputShrink)) {
      query["StreamInput"] = request.streamInputShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.timedConfigShrink)) {
      query["TimedConfig"] = request.timedConfigShrink;
    }

    if (!Util.isUnset(request.transcodeOutputShrink)) {
      query["TranscodeOutput"] = request.transcodeOutputShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new SubmitLiveTranscodeJobResponse({}));
  }

  async submitLiveTranscodeJob(request: SubmitLiveTranscodeJobRequest): Promise<SubmitLiveTranscodeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitLiveTranscodeJobWithOptions(request, runtime);
  }

  async submitMediaCensorJobWithOptions(tmpReq: SubmitMediaCensorJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaCensorJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitMediaCensorJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.input))) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.input), "Input", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.barrages)) {
      query["Barrages"] = request.barrages;
    }

    if (!Util.isUnset(request.coverImages)) {
      query["CoverImages"] = request.coverImages;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!Util.isUnset(request.output)) {
      query["Output"] = request.output;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      action: "SubmitMediaCensorJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitMediaCensorJobResponse>(await this.callApi(params, req, runtime), new SubmitMediaCensorJobResponse({}));
  }

  async submitMediaCensorJob(request: SubmitMediaCensorJobRequest): Promise<SubmitMediaCensorJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaCensorJobWithOptions(request, runtime);
  }

  async submitMediaInfoJobWithOptions(tmpReq: SubmitMediaInfoJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaInfoJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitMediaInfoJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.input))) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.input), "Input", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitMediaInfoJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitMediaInfoJobResponse>(await this.callApi(params, req, runtime), new SubmitMediaInfoJobResponse({}));
  }

  async submitMediaInfoJob(request: SubmitMediaInfoJobRequest): Promise<SubmitMediaInfoJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaInfoJobWithOptions(request, runtime);
  }

  async submitMediaProducingJobWithOptions(request: SubmitMediaProducingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaProducingJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clipsParam)) {
      query["ClipsParam"] = request.clipsParam;
    }

    if (!Util.isUnset(request.editingProduceConfig)) {
      query["EditingProduceConfig"] = request.editingProduceConfig;
    }

    if (!Util.isUnset(request.outputMediaConfig)) {
      query["OutputMediaConfig"] = request.outputMediaConfig;
    }

    if (!Util.isUnset(request.outputMediaTarget)) {
      query["OutputMediaTarget"] = request.outputMediaTarget;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectMetadata)) {
      query["ProjectMetadata"] = request.projectMetadata;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.timeline)) {
      query["Timeline"] = request.timeline;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitMediaProducingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitMediaProducingJobResponse>(await this.callApi(params, req, runtime), new SubmitMediaProducingJobResponse({}));
  }

  async submitMediaProducingJob(request: SubmitMediaProducingJobRequest): Promise<SubmitMediaProducingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaProducingJobWithOptions(request, runtime);
  }

  async submitPackageJobWithOptions(tmpReq: SubmitPackageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPackageJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitPackageJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.output))) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.output), "Output", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.inputsShrink)) {
      query["Inputs"] = request.inputsShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitPackageJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitPackageJobResponse>(await this.callApi(params, req, runtime), new SubmitPackageJobResponse({}));
  }

  async submitPackageJob(request: SubmitPackageJobRequest): Promise<SubmitPackageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPackageJobWithOptions(request, runtime);
  }

  async submitSmarttagJobWithOptions(tmpReq: SubmitSmarttagJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmarttagJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSmarttagJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.input))) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.input), "Input", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentAddr)) {
      query["ContentAddr"] = request.contentAddr;
    }

    if (!Util.isUnset(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      action: "SubmitSmarttagJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSmarttagJobResponse>(await this.callApi(params, req, runtime), new SubmitSmarttagJobResponse({}));
  }

  async submitSmarttagJob(request: SubmitSmarttagJobRequest): Promise<SubmitSmarttagJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmarttagJobWithOptions(request, runtime);
  }

  async submitSnapshotJobWithOptions(tmpReq: SubmitSnapshotJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSnapshotJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSnapshotJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.input))) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.input), "Input", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.output))) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.output), "Output", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.templateConfig))) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.templateConfig), "TemplateConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSnapshotJob",
      version: "2020-11-09",
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

  async submitSubtitleProduceJobWithOptions(request: SubmitSubtitleProduceJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSubtitleProduceJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.editingConfig)) {
      query["EditingConfig"] = request.editingConfig;
    }

    if (!Util.isUnset(request.inputConfig)) {
      query["InputConfig"] = request.inputConfig;
    }

    if (!Util.isUnset(request.isAsync)) {
      query["IsAsync"] = request.isAsync;
    }

    if (!Util.isUnset(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSubtitleProduceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSubtitleProduceJobResponse>(await this.callApi(params, req, runtime), new SubmitSubtitleProduceJobResponse({}));
  }

  async submitSubtitleProduceJob(request: SubmitSubtitleProduceJobRequest): Promise<SubmitSubtitleProduceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSubtitleProduceJobWithOptions(request, runtime);
  }

  async submitSyncMediaInfoJobWithOptions(tmpReq: SubmitSyncMediaInfoJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSyncMediaInfoJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSyncMediaInfoJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.input))) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.input), "Input", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSyncMediaInfoJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSyncMediaInfoJobResponse>(await this.callApi(params, req, runtime), new SubmitSyncMediaInfoJobResponse({}));
  }

  async submitSyncMediaInfoJob(request: SubmitSyncMediaInfoJobRequest): Promise<SubmitSyncMediaInfoJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSyncMediaInfoJobWithOptions(request, runtime);
  }

  async submitTranscodeJobWithOptions(tmpReq: SubmitTranscodeJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTranscodeJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTranscodeJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputGroup)) {
      request.inputGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputGroup, "InputGroup", "json");
    }

    if (!Util.isUnset(tmpReq.outputGroup)) {
      request.outputGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputGroup, "OutputGroup", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.scheduleConfig))) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.scheduleConfig), "ScheduleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.inputGroupShrink)) {
      query["InputGroup"] = request.inputGroupShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.outputGroupShrink)) {
      query["OutputGroup"] = request.outputGroupShrink;
    }

    if (!Util.isUnset(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTranscodeJobResponse>(await this.callApi(params, req, runtime), new SubmitTranscodeJobResponse({}));
  }

  async submitTranscodeJob(request: SubmitTranscodeJobRequest): Promise<SubmitTranscodeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTranscodeJobWithOptions(request, runtime);
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
      version: "2020-11-09",
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

  async updateCustomTemplateWithOptions(request: UpdateCustomTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomTemplateResponse>(await this.callApi(params, req, runtime), new UpdateCustomTemplateResponse({}));
  }

  async updateCustomTemplate(request: UpdateCustomTemplateRequest): Promise<UpdateCustomTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomTemplateWithOptions(request, runtime);
  }

  async updateEditingProjectWithOptions(request: UpdateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEditingProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!Util.isUnset(request.clipsParam)) {
      query["ClipsParam"] = request.clipsParam;
    }

    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      version: "2020-11-09",
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

  async updateLiveRecordTemplateWithOptions(tmpReq: UpdateLiveRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveRecordTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateLiveRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.recordFormat)) {
      request.recordFormatShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordFormat, "RecordFormat", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.recordFormatShrink)) {
      body["RecordFormat"] = request.recordFormatShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new UpdateLiveRecordTemplateResponse({}));
  }

  async updateLiveRecordTemplate(request: UpdateLiveRecordTemplateRequest): Promise<UpdateLiveRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveRecordTemplateWithOptions(request, runtime);
  }

  async updateLiveSnapshotTemplateWithOptions(request: UpdateLiveSnapshotTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveSnapshotTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.overwriteFormat)) {
      body["OverwriteFormat"] = request.overwriteFormat;
    }

    if (!Util.isUnset(request.sequenceFormat)) {
      body["SequenceFormat"] = request.sequenceFormat;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.timeInterval)) {
      body["TimeInterval"] = request.timeInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new UpdateLiveSnapshotTemplateResponse({}));
  }

  async updateLiveSnapshotTemplate(request: UpdateLiveSnapshotTemplateRequest): Promise<UpdateLiveSnapshotTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveSnapshotTemplateWithOptions(request, runtime);
  }

  async updateLiveTranscodeJobWithOptions(tmpReq: UpdateLiveTranscodeJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveTranscodeJobResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateLiveTranscodeJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.streamInput))) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.streamInput), "StreamInput", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.timedConfig))) {
      request.timedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.timedConfig), "TimedConfig", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.transcodeOutput))) {
      request.transcodeOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.transcodeOutput), "TranscodeOutput", "json");
    }

    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.streamInputShrink)) {
      query["StreamInput"] = request.streamInputShrink;
    }

    if (!Util.isUnset(request.timedConfigShrink)) {
      query["TimedConfig"] = request.timedConfigShrink;
    }

    if (!Util.isUnset(request.transcodeOutputShrink)) {
      query["TranscodeOutput"] = request.transcodeOutputShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new UpdateLiveTranscodeJobResponse({}));
  }

  async updateLiveTranscodeJob(request: UpdateLiveTranscodeJobRequest): Promise<UpdateLiveTranscodeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveTranscodeJobWithOptions(request, runtime);
  }

  async updateLiveTranscodeTemplateWithOptions(tmpReq: UpdateLiveTranscodeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveTranscodeTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateLiveTranscodeTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.templateConfig))) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.templateConfig), "TemplateConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new UpdateLiveTranscodeTemplateResponse({}));
  }

  async updateLiveTranscodeTemplate(request: UpdateLiveTranscodeTemplateRequest): Promise<UpdateLiveTranscodeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveTranscodeTemplateWithOptions(request, runtime);
  }

  async updateMediaInfoWithOptions(request: UpdateMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appendTags)) {
      query["AppendTags"] = request.appendTags;
    }

    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!Util.isUnset(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!Util.isUnset(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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
      action: "UpdateMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMediaInfoResponse>(await this.callApi(params, req, runtime), new UpdateMediaInfoResponse({}));
  }

  async updateMediaInfo(request: UpdateMediaInfoRequest): Promise<UpdateMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaInfoWithOptions(request, runtime);
  }

  async updatePipelineWithOptions(request: UpdatePipelineRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePipeline",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePipelineResponse>(await this.callApi(params, req, runtime), new UpdatePipelineResponse({}));
  }

  async updatePipeline(request: UpdatePipelineRequest): Promise<UpdatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePipelineWithOptions(request, runtime);
  }

  async updateSmartJobWithOptions(request: UpdateSmartJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.FEExtend)) {
      query["FEExtend"] = request.FEExtend;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartJobResponse>(await this.callApi(params, req, runtime), new UpdateSmartJobResponse({}));
  }

  async updateSmartJob(request: UpdateSmartJobRequest): Promise<UpdateSmartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartJobWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(request: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.coverUrl)) {
      query["CoverUrl"] = request.coverUrl;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.previewMedia)) {
      query["PreviewMedia"] = request.previewMedia;
    }

    if (!Util.isUnset(request.relatedMediaids)) {
      query["RelatedMediaids"] = request.relatedMediaids;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTemplateResponse>(await this.callApi(params, req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  async uploadMediaByURLWithOptions(request: UploadMediaByURLRequest, runtime: $Util.RuntimeOptions): Promise<UploadMediaByURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.mediaMetaData)) {
      query["MediaMetaData"] = request.mediaMetaData;
    }

    if (!Util.isUnset(request.postProcessConfig)) {
      query["PostProcessConfig"] = request.postProcessConfig;
    }

    if (!Util.isUnset(request.uploadTargetConfig)) {
      query["UploadTargetConfig"] = request.uploadTargetConfig;
    }

    if (!Util.isUnset(request.uploadURLs)) {
      query["UploadURLs"] = request.uploadURLs;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadMediaByURL",
      version: "2020-11-09",
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
      version: "2020-11-09",
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

}
