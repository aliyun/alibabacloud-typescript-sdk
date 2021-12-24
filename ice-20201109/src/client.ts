// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  body: AddEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: AddFavoritePublicMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: AddTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: BatchGetMediaInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CancelFavoritePublicMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelFavoritePublicMediaResponseBody,
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
  body: CreateEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEditingProjectResponseBody,
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
  body: DeleteEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteEditingProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEditingProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosRequest extends $tea.Model {
  inputURLs?: string;
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      inputURLs: 'InputURLs',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputURLs: 'string',
      mediaIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosResponseBody extends $tea.Model {
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

export class DeleteMediaInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMediaInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMediaInfosResponseBody,
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

export class DeleteSmartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceProductStatusRequest extends $tea.Model {
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceProductStatusResponseBody extends $tea.Model {
  ICEServiceAvaliable?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ICEServiceAvaliable: 'ICEServiceAvaliable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ICEServiceAvaliable: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceProductStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIceProductStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIceProductStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaterialPackageInfoRequest extends $tea.Model {
  materialPackageId?: string;
  materialPackageType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      materialPackageId: 'MaterialPackageId',
      materialPackageType: 'MaterialPackageType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialPackageId: 'string',
      materialPackageType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaterialPackageInfoResponseBody extends $tea.Model {
  materialPackageInfoList?: DescribeMaterialPackageInfoResponseBodyMaterialPackageInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      materialPackageInfoList: 'MaterialPackageInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialPackageInfoList: { 'type': 'array', 'itemType': DescribeMaterialPackageInfoResponseBodyMaterialPackageInfoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaterialPackageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMaterialPackageInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMaterialPackageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRelatedAuthorizationStatusResponseBody extends $tea.Model {
  authorized?: boolean;
  MNSAuthorized?: boolean;
  MTSAuthorized?: boolean;
  OSSAuthorized?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      MNSAuthorized: 'MNSAuthorized',
      MTSAuthorized: 'MTSAuthorized',
      OSSAuthorized: 'OSSAuthorized',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      MNSAuthorized: 'boolean',
      MTSAuthorized: 'boolean',
      OSSAuthorized: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRelatedAuthorizationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRelatedAuthorizationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRelatedAuthorizationStatusResponseBody,
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
  body: GetDefaultStorageLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDefaultStorageLocationResponseBody,
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

export class GetEventCallbackResponseBody extends $tea.Model {
  callbackQueueName?: string;
  eventTypeList?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackQueueName: 'CallbackQueueName',
      eventTypeList: 'EventTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackQueueName: 'string',
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
  body: GetEventCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetLiveEditingIndexFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetLiveEditingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLiveEditingJobResponseBody,
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
  body: GetMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaInfoResponseBody,
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
  body: GetMediaProducingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaProducingJobResponseBody,
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
  body: GetPublicMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetSmartHandleJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSmartHandleJobResponseBody,
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
  body: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetTemplateMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTemplateMaterialsResponseBody,
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
  body: ListAllPublicMediaTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAllPublicMediaTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosRequest extends $tea.Model {
  businessType?: string;
  category?: string;
  endTime?: string;
  includeFileBasicInfo?: boolean;
  maxResults?: number;
  mediaType?: string;
  nextToken?: string;
  sortBy?: string;
  source?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      endTime: 'EndTime',
      includeFileBasicInfo: 'IncludeFileBasicInfo',
      maxResults: 'MaxResults',
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
      category: 'string',
      endTime: 'string',
      includeFileBasicInfo: 'boolean',
      maxResults: 'number',
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
  body: ListMediaBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMediaBasicInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaProducingJobsRequest extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaProducingJobsResponseBody extends $tea.Model {
  mediaProducingJobList?: ListMediaProducingJobsResponseBodyMediaProducingJobList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaProducingJobList: 'MediaProducingJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaProducingJobList: { 'type': 'array', 'itemType': ListMediaProducingJobsResponseBodyMediaProducingJobList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaProducingJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMediaProducingJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMediaProducingJobsResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      includeFileBasicInfo: 'IncludeFileBasicInfo',
      maxResults: 'MaxResults',
      mediaTagId: 'MediaTagId',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeFileBasicInfo: 'boolean',
      maxResults: 'number',
      mediaTagId: 'string',
      nextToken: 'string',
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
  body: ListPublicMediaBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: number;
  static names(): { [key: string]: string } {
    return {
      jobState: 'JobState',
      jobType: 'JobType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
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
      status: 'number',
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
  body: ListSmartJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmartJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSysTemplatesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSysTemplatesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templates?: ListSysTemplatesResponseBodyTemplates[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListSysTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSysTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSysTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSysTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  createSource?: string;
  keyword?: string;
  sortType?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createSource: 'CreateSource',
      keyword: 'Keyword',
      sortType: 'SortType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSource: 'string',
      keyword: 'string',
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
  body: ListTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaInfoRequest extends $tea.Model {
  businessType?: string;
  category?: string;
  clientToken?: string;
  coverURL?: string;
  description?: string;
  dynamicMetaDataList?: string;
  inputURL?: string;
  mediaTags?: string;
  mediaType?: string;
  overwrite?: boolean;
  registerConfig?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      clientToken: 'ClientToken',
      coverURL: 'CoverURL',
      description: 'Description',
      dynamicMetaDataList: 'DynamicMetaDataList',
      inputURL: 'InputURL',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      overwrite: 'Overwrite',
      registerConfig: 'RegisterConfig',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      clientToken: 'string',
      coverURL: 'string',
      description: 'string',
      dynamicMetaDataList: 'string',
      inputURL: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      overwrite: 'boolean',
      registerConfig: 'string',
      title: 'string',
      userData: 'string',
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
  body: RegisterMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterMediaInfoResponseBody,
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
  body: SearchPublicMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchPublicMediaInfoResponseBody,
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
  body: SetDefaultStorageLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDefaultStorageLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEventCallbackRequest extends $tea.Model {
  callbackQueueName?: string;
  eventTypeList?: string;
  static names(): { [key: string]: string } {
    return {
      callbackQueueName: 'CallbackQueueName',
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackQueueName: 'string',
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
  body: SetEventCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SubmitASRJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SubmitAudioProduceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAudioProduceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDelogoJobRequest extends $tea.Model {
  description?: string;
  inputFile?: string;
  inputType?: string;
  outputConfig?: string;
  outputMediaTarget?: string;
  overwrite?: boolean;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputFile: 'InputFile',
      inputType: 'InputType',
      outputConfig: 'OutputConfig',
      outputMediaTarget: 'OutputMediaTarget',
      overwrite: 'Overwrite',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputFile: 'string',
      inputType: 'string',
      outputConfig: 'string',
      outputMediaTarget: 'string',
      overwrite: 'boolean',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDelogoJobResponseBody extends $tea.Model {
  jobId?: string;
  output?: string;
  requestId?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      output: 'Output',
      requestId: 'RequestId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      output: 'string',
      requestId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDelogoJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitDelogoJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitDelogoJobResponseBody,
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
  body: SubmitDynamicChartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitDynamicChartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitH2VJobRequest extends $tea.Model {
  description?: string;
  inputFile?: string;
  inputType?: string;
  outputConfig?: string;
  outputMediaTarget?: string;
  overwrite?: boolean;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputFile: 'InputFile',
      inputType: 'InputType',
      outputConfig: 'OutputConfig',
      outputMediaTarget: 'OutputMediaTarget',
      overwrite: 'Overwrite',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputFile: 'string',
      inputType: 'string',
      outputConfig: 'string',
      outputMediaTarget: 'string',
      overwrite: 'boolean',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitH2VJobResponseBody extends $tea.Model {
  jobId?: string;
  output?: string;
  requestId?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      output: 'Output',
      requestId: 'RequestId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      output: 'string',
      requestId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitH2VJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitH2VJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitH2VJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKeyWordCutJobRequest extends $tea.Model {
  description?: string;
  inputFile?: string;
  keyword?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputFile: 'InputFile',
      keyword: 'Keyword',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputFile: 'string',
      keyword: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKeyWordCutJobResponseBody extends $tea.Model {
  jobId?: string;
  output?: string;
  requestId?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      output: 'Output',
      requestId: 'RequestId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      output: 'string',
      requestId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKeyWordCutJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitKeyWordCutJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitKeyWordCutJobResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      projectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveEditingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitLiveEditingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitLiveEditingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMattingJobRequest extends $tea.Model {
  description?: string;
  inputFile?: string;
  inputType?: string;
  outputConfig?: string;
  outputMediaTarget?: string;
  overwrite?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputFile: 'InputFile',
      inputType: 'InputType',
      outputConfig: 'OutputConfig',
      outputMediaTarget: 'OutputMediaTarget',
      overwrite: 'Overwrite',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputFile: 'string',
      inputType: 'string',
      outputConfig: 'string',
      outputMediaTarget: 'string',
      overwrite: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMattingJobResponseBody extends $tea.Model {
  jobId?: string;
  output?: string;
  requestId?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      output: 'Output',
      requestId: 'RequestId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      output: 'string',
      requestId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMattingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitMattingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitMattingJobResponseBody,
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
  body: SubmitMediaProducingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitMediaProducingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPPTCutJobRequest extends $tea.Model {
  description?: string;
  inputFile?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputFile: 'InputFile',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputFile: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPPTCutJobResponseBody extends $tea.Model {
  jobId?: string;
  output?: string;
  requestId?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      output: 'Output',
      requestId: 'RequestId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      output: 'string',
      requestId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPPTCutJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitPPTCutJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitPPTCutJobResponseBody,
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
  body: SubmitSubtitleProduceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSubtitleProduceJobResponseBody,
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

export class UpdateMediaInfoRequest extends $tea.Model {
  appendDynamicMeta?: boolean;
  appendTags?: boolean;
  businessType?: string;
  category?: string;
  coverURL?: string;
  description?: string;
  dynamicMetaDataList?: string;
  inputURL?: string;
  mediaId?: string;
  mediaTags?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appendDynamicMeta: 'AppendDynamicMeta',
      appendTags: 'AppendTags',
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      description: 'Description',
      dynamicMetaDataList: 'DynamicMetaDataList',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendDynamicMeta: 'boolean',
      appendTags: 'boolean',
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      description: 'string',
      dynamicMetaDataList: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
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
  body: UpdateMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMediaInfoResponseBody,
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
  body: UpdateSmartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTemplateResponseBody,
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

export class DescribeMaterialPackageInfoResponseBodyMaterialPackageInfoListMaterialPackagePurchaseList extends $tea.Model {
  currCapacity?: string;
  endTime?: string;
  initCapacity?: string;
  remainingAuthTime?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currCapacity: 'CurrCapacity',
      endTime: 'EndTime',
      initCapacity: 'InitCapacity',
      remainingAuthTime: 'RemainingAuthTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currCapacity: 'string',
      endTime: 'string',
      initCapacity: 'string',
      remainingAuthTime: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaterialPackageInfoResponseBodyMaterialPackageInfoList extends $tea.Model {
  authTime?: string;
  authorized?: boolean;
  displayPrice?: string;
  initCapacity?: string;
  materialCount?: number;
  materialPackageId?: string;
  materialPackagePurchaseList?: DescribeMaterialPackageInfoResponseBodyMaterialPackageInfoListMaterialPackagePurchaseList[];
  static names(): { [key: string]: string } {
    return {
      authTime: 'AuthTime',
      authorized: 'Authorized',
      displayPrice: 'DisplayPrice',
      initCapacity: 'InitCapacity',
      materialCount: 'MaterialCount',
      materialPackageId: 'MaterialPackageId',
      materialPackagePurchaseList: 'MaterialPackagePurchaseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTime: 'string',
      authorized: 'boolean',
      displayPrice: 'string',
      initCapacity: 'string',
      materialCount: 'number',
      materialPackageId: 'string',
      materialPackagePurchaseList: { 'type': 'array', 'itemType': DescribeMaterialPackageInfoResponseBodyMaterialPackageInfoListMaterialPackagePurchaseList },
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

export class GetMediaInfoResponseBodyMediaInfoAiRoughDataList extends $tea.Model {
  result?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoDynamicMetaData extends $tea.Model {
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
      inputURL: 'InputURL',
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
      inputURL: 'string',
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

export class GetMediaInfoResponseBodyMediaInfo extends $tea.Model {
  aiRoughDataList?: GetMediaInfoResponseBodyMediaInfoAiRoughDataList[];
  dynamicMetaData?: GetMediaInfoResponseBodyMediaInfoDynamicMetaData;
  fileInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoList[];
  mediaBasicInfo?: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiRoughDataList: 'AiRoughDataList',
      dynamicMetaData: 'DynamicMetaData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRoughDataList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoAiRoughDataList },
      dynamicMetaData: GetMediaInfoResponseBodyMediaInfoDynamicMetaData,
      fileInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
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

export class ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
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

export class ListMediaProducingJobsResponseBodyMediaProducingJobList extends $tea.Model {
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

export class ListSysTemplatesResponseBodyTemplates extends $tea.Model {
  config?: string;
  name?: string;
  templateId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      templateId: 'string',
      type: 'string',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
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

  async deleteMediaInfosWithOptions(request: DeleteMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaInfosResponse> {
    Util.validateModel(request);
    let query = { };
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

  async describeIceProductStatusWithOptions(request: DescribeIceProductStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIceProductStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIceProductStatus",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIceProductStatusResponse>(await this.callApi(params, req, runtime), new DescribeIceProductStatusResponse({}));
  }

  async describeIceProductStatus(request: DescribeIceProductStatusRequest): Promise<DescribeIceProductStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIceProductStatusWithOptions(request, runtime);
  }

  async describeMaterialPackageInfoWithOptions(request: DescribeMaterialPackageInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMaterialPackageInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.materialPackageId)) {
      query["MaterialPackageId"] = request.materialPackageId;
    }

    if (!Util.isUnset(request.materialPackageType)) {
      query["MaterialPackageType"] = request.materialPackageType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMaterialPackageInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMaterialPackageInfoResponse>(await this.callApi(params, req, runtime), new DescribeMaterialPackageInfoResponse({}));
  }

  async describeMaterialPackageInfo(request: DescribeMaterialPackageInfoRequest): Promise<DescribeMaterialPackageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMaterialPackageInfoWithOptions(request, runtime);
  }

  async describeRelatedAuthorizationStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRelatedAuthorizationStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRelatedAuthorizationStatus",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRelatedAuthorizationStatusResponse>(await this.callApi(params, req, runtime), new DescribeRelatedAuthorizationStatusResponse({}));
  }

  async describeRelatedAuthorizationStatus(): Promise<DescribeRelatedAuthorizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRelatedAuthorizationStatusWithOptions(runtime);
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

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
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
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateMaterials",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
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
      authType: "AK",
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

  async listMediaBasicInfosWithOptions(request: ListMediaBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaBasicInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
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

  async listMediaProducingJobsWithOptions(request: ListMediaProducingJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaProducingJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMediaProducingJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMediaProducingJobsResponse>(await this.callApi(params, req, runtime), new ListMediaProducingJobsResponse({}));
  }

  async listMediaProducingJobs(request: ListMediaProducingJobsRequest): Promise<ListMediaProducingJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaProducingJobsWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicMediaBasicInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
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

  async listSysTemplatesWithOptions(request: ListSysTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListSysTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSysTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSysTemplatesResponse>(await this.callApi(params, req, runtime), new ListSysTemplatesResponse({}));
  }

  async listSysTemplates(request: ListSysTemplatesRequest): Promise<ListSysTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSysTemplatesWithOptions(request, runtime);
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

  async registerMediaInfoWithOptions(request: RegisterMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
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

    if (!Util.isUnset(request.dynamicMetaDataList)) {
      query["DynamicMetaDataList"] = request.dynamicMetaDataList;
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

    if (!Util.isUnset(request.registerConfig)) {
      query["RegisterConfig"] = request.registerConfig;
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
    if (!Util.isUnset(request.callbackQueueName)) {
      query["CallbackQueueName"] = request.callbackQueueName;
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

  async submitDelogoJobWithOptions(request: SubmitDelogoJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDelogoJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputFile)) {
      query["InputFile"] = request.inputFile;
    }

    if (!Util.isUnset(request.inputType)) {
      query["InputType"] = request.inputType;
    }

    if (!Util.isUnset(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.outputMediaTarget)) {
      query["OutputMediaTarget"] = request.outputMediaTarget;
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
      action: "SubmitDelogoJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDelogoJobResponse>(await this.callApi(params, req, runtime), new SubmitDelogoJobResponse({}));
  }

  async submitDelogoJob(request: SubmitDelogoJobRequest): Promise<SubmitDelogoJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDelogoJobWithOptions(request, runtime);
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

  async submitH2VJobWithOptions(request: SubmitH2VJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitH2VJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputFile)) {
      query["InputFile"] = request.inputFile;
    }

    if (!Util.isUnset(request.inputType)) {
      query["InputType"] = request.inputType;
    }

    if (!Util.isUnset(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.outputMediaTarget)) {
      query["OutputMediaTarget"] = request.outputMediaTarget;
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
      action: "SubmitH2VJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitH2VJobResponse>(await this.callApi(params, req, runtime), new SubmitH2VJobResponse({}));
  }

  async submitH2VJob(request: SubmitH2VJobRequest): Promise<SubmitH2VJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitH2VJobWithOptions(request, runtime);
  }

  async submitKeyWordCutJobWithOptions(request: SubmitKeyWordCutJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitKeyWordCutJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitKeyWordCutJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitKeyWordCutJobResponse>(await this.callApi(params, req, runtime), new SubmitKeyWordCutJobResponse({}));
  }

  async submitKeyWordCutJob(request: SubmitKeyWordCutJobRequest): Promise<SubmitKeyWordCutJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitKeyWordCutJobWithOptions(request, runtime);
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

  async submitMattingJobWithOptions(request: SubmitMattingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMattingJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputFile)) {
      query["InputFile"] = request.inputFile;
    }

    if (!Util.isUnset(request.inputType)) {
      query["InputType"] = request.inputType;
    }

    if (!Util.isUnset(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.outputMediaTarget)) {
      query["OutputMediaTarget"] = request.outputMediaTarget;
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
      action: "SubmitMattingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitMattingJobResponse>(await this.callApi(params, req, runtime), new SubmitMattingJobResponse({}));
  }

  async submitMattingJob(request: SubmitMattingJobRequest): Promise<SubmitMattingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMattingJobWithOptions(request, runtime);
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

  async submitPPTCutJobWithOptions(request: SubmitPPTCutJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPPTCutJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitPPTCutJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitPPTCutJobResponse>(await this.callApi(params, req, runtime), new SubmitPPTCutJobResponse({}));
  }

  async submitPPTCutJob(request: SubmitPPTCutJobRequest): Promise<SubmitPPTCutJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPPTCutJobWithOptions(request, runtime);
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

  async updateMediaInfoWithOptions(request: UpdateMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appendDynamicMeta)) {
      query["AppendDynamicMeta"] = request.appendDynamicMeta;
    }

    if (!Util.isUnset(request.appendTags)) {
      query["AppendTags"] = request.appendTags;
    }

    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
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

    if (!Util.isUnset(request.dynamicMetaDataList)) {
      query["DynamicMetaDataList"] = request.dynamicMetaDataList;
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

}
