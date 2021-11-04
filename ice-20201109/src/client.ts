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
  projectMaterials?: string;
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
      projectMaterials: 'string',
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

export class CreateEditingProjectRequest extends $tea.Model {
  businessConfig?: string;
  coverURL?: string;
  description?: string;
  materialMaps?: string;
  projectType?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      coverURL: 'CoverURL',
      description: 'Description',
      materialMaps: 'MaterialMaps',
      projectType: 'ProjectType',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      coverURL: 'string',
      description: 'string',
      materialMaps: 'string',
      projectType: 'string',
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
  projectMaterials?: string;
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
      projectMaterials: 'string',
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

export class GetSmartHandleJobRequest extends $tea.Model {
  jobId?: string;
  withAiResult?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      withAiResult: 'WithAiResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      withAiResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBody extends $tea.Model {
  FEExtend?: string;
  jobId?: string;
  output?: string;
  requestId?: string;
  smartJobInfo?: GetSmartHandleJobResponseBodySmartJobInfo;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      FEExtend: 'FEExtend',
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
      FEExtend: 'string',
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

export class ListAllPublicMediaTagsRequest extends $tea.Model {
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
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
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      projectId: 'string',
      requestId: 'string',
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
  coverURL?: string;
  description?: string;
  projectId?: string;
  timeline?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      coverURL: 'CoverURL',
      description: 'Description',
      projectId: 'ProjectId',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      coverURL: 'string',
      description: 'string',
      projectId: 'string',
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
  source?: string;
  status?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      name: 'Name',
      previewMedia: 'PreviewMedia',
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
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      projectType: 'ProjectType',
      status: 'Status',
      statusName: 'StatusName',
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
      modifiedSource: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      projectType: 'string',
      status: 'number',
      statusName: 'string',
      templateType: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponseBodyProject extends $tea.Model {
  businessConfig?: string;
  businessStatus?: string;
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

export class GetMediaInfoResponseBodyMediaInfoDynamicMetaDataList extends $tea.Model {
  data?: string;
  in?: number;
  out?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      in: 'In',
      out: 'Out',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      in: 'number',
      out: 'number',
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
  dynamicMetaDataList?: GetMediaInfoResponseBodyMediaInfoDynamicMetaDataList[];
  fileInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoList[];
  mediaBasicInfo?: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiRoughDataList: 'AiRoughDataList',
      dynamicMetaDataList: 'DynamicMetaDataList',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRoughDataList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoAiRoughDataList },
      dynamicMetaDataList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoDynamicMetaDataList },
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBodySmartJobInfoInputConfig extends $tea.Model {
  inputFile?: string;
  jobParameters?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      jobParameters: 'JobParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      jobParameters: 'string',
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
  editingConfig?: string;
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
      editingConfig: 'EditingConfig',
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
      editingConfig: 'string',
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

export class ListAllPublicMediaTagsResponseBodyMediaTagList extends $tea.Model {
  mediaTagId?: string;
  mediaTagNameChinese?: string;
  mediaTagNameEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      mediaTagId: 'MediaTagId',
      mediaTagNameChinese: 'MediaTagNameChinese',
      mediaTagNameEnglish: 'MediaTagNameEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagId: 'string',
      mediaTagNameChinese: 'string',
      mediaTagNameEnglish: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEditingProjectMaterialsResponse>(await this.doRPCRequest("AddEditingProjectMaterials", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddEditingProjectMaterialsResponse({}));
  }

  async addEditingProjectMaterials(request: AddEditingProjectMaterialsRequest): Promise<AddEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEditingProjectMaterialsWithOptions(request, runtime);
  }

  async addTemplateWithOptions(request: AddTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTemplateResponse>(await this.doRPCRequest("AddTemplate", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddTemplateResponse({}));
  }

  async addTemplate(request: AddTemplateRequest): Promise<AddTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTemplateWithOptions(request, runtime);
  }

  async batchGetMediaInfosWithOptions(request: BatchGetMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetMediaInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetMediaInfosResponse>(await this.doRPCRequest("BatchGetMediaInfos", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetMediaInfosResponse({}));
  }

  async batchGetMediaInfos(request: BatchGetMediaInfosRequest): Promise<BatchGetMediaInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetMediaInfosWithOptions(request, runtime);
  }

  async createEditingProjectWithOptions(request: CreateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEditingProjectResponse>(await this.doRPCRequest("CreateEditingProject", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEditingProjectResponse({}));
  }

  async createEditingProject(request: CreateEditingProjectRequest): Promise<CreateEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEditingProjectWithOptions(request, runtime);
  }

  async deleteEditingProjectMaterialsWithOptions(request: DeleteEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteEditingProjectMaterialsResponse>(await this.doRPCRequest("DeleteEditingProjectMaterials", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteEditingProjectMaterialsResponse({}));
  }

  async deleteEditingProjectMaterials(request: DeleteEditingProjectMaterialsRequest): Promise<DeleteEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectMaterialsWithOptions(request, runtime);
  }

  async deleteEditingProjectsWithOptions(request: DeleteEditingProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEditingProjectsResponse>(await this.doRPCRequest("DeleteEditingProjects", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEditingProjectsResponse({}));
  }

  async deleteEditingProjects(request: DeleteEditingProjectsRequest): Promise<DeleteEditingProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectsWithOptions(request, runtime);
  }

  async deleteMediaInfosWithOptions(request: DeleteMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMediaInfosResponse>(await this.doRPCRequest("DeleteMediaInfos", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMediaInfosResponse({}));
  }

  async deleteMediaInfos(request: DeleteMediaInfosRequest): Promise<DeleteMediaInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaInfosWithOptions(request, runtime);
  }

  async deleteSmartJobWithOptions(request: DeleteSmartJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmartJobResponse>(await this.doRPCRequest("DeleteSmartJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmartJobResponse({}));
  }

  async deleteSmartJob(request: DeleteSmartJobRequest): Promise<DeleteSmartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartJobWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteTemplateResponse>(await this.doRPCRequest("DeleteTemplate", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async describeIceProductStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeIceProductStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeIceProductStatusResponse>(await this.doRPCRequest("DescribeIceProductStatus", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIceProductStatusResponse({}));
  }

  async describeIceProductStatus(): Promise<DescribeIceProductStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIceProductStatusWithOptions(runtime);
  }

  async describeRelatedAuthorizationStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRelatedAuthorizationStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRelatedAuthorizationStatusResponse>(await this.doRPCRequest("DescribeRelatedAuthorizationStatus", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeRelatedAuthorizationStatusResponse({}));
  }

  async describeRelatedAuthorizationStatus(): Promise<DescribeRelatedAuthorizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRelatedAuthorizationStatusWithOptions(runtime);
  }

  async getDefaultStorageLocationWithOptions(runtime: $Util.RuntimeOptions): Promise<GetDefaultStorageLocationResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetDefaultStorageLocationResponse>(await this.doRPCRequest("GetDefaultStorageLocation", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetDefaultStorageLocationResponse({}));
  }

  async getDefaultStorageLocation(): Promise<GetDefaultStorageLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultStorageLocationWithOptions(runtime);
  }

  async getEditingProjectWithOptions(request: GetEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetEditingProjectResponse>(await this.doRPCRequest("GetEditingProject", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetEditingProjectResponse({}));
  }

  async getEditingProject(request: GetEditingProjectRequest): Promise<GetEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectWithOptions(request, runtime);
  }

  async getEditingProjectMaterialsWithOptions(request: GetEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetEditingProjectMaterialsResponse>(await this.doRPCRequest("GetEditingProjectMaterials", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetEditingProjectMaterialsResponse({}));
  }

  async getEditingProjectMaterials(request: GetEditingProjectMaterialsRequest): Promise<GetEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectMaterialsWithOptions(request, runtime);
  }

  async getEventCallbackWithOptions(runtime: $Util.RuntimeOptions): Promise<GetEventCallbackResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetEventCallbackResponse>(await this.doRPCRequest("GetEventCallback", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetEventCallbackResponse({}));
  }

  async getEventCallback(): Promise<GetEventCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventCallbackWithOptions(runtime);
  }

  async getLiveEditingIndexFileWithOptions(request: GetLiveEditingIndexFileRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveEditingIndexFileResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetLiveEditingIndexFileResponse>(await this.doRPCRequest("GetLiveEditingIndexFile", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetLiveEditingIndexFileResponse({}));
  }

  async getLiveEditingIndexFile(request: GetLiveEditingIndexFileRequest): Promise<GetLiveEditingIndexFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveEditingIndexFileWithOptions(request, runtime);
  }

  async getLiveEditingJobWithOptions(request: GetLiveEditingJobRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveEditingJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLiveEditingJobResponse>(await this.doRPCRequest("GetLiveEditingJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetLiveEditingJobResponse({}));
  }

  async getLiveEditingJob(request: GetLiveEditingJobRequest): Promise<GetLiveEditingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveEditingJobWithOptions(request, runtime);
  }

  async getMediaInfoWithOptions(request: GetMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaInfoResponse>(await this.doRPCRequest("GetMediaInfo", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaInfoResponse({}));
  }

  async getMediaInfo(request: GetMediaInfoRequest): Promise<GetMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaInfoWithOptions(request, runtime);
  }

  async getMediaProducingJobWithOptions(request: GetMediaProducingJobRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaProducingJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMediaProducingJobResponse>(await this.doRPCRequest("GetMediaProducingJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetMediaProducingJobResponse({}));
  }

  async getMediaProducingJob(request: GetMediaProducingJobRequest): Promise<GetMediaProducingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaProducingJobWithOptions(request, runtime);
  }

  async getSmartHandleJobWithOptions(request: GetSmartHandleJobRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartHandleJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSmartHandleJobResponse>(await this.doRPCRequest("GetSmartHandleJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetSmartHandleJobResponse({}));
  }

  async getSmartHandleJob(request: GetSmartHandleJobRequest): Promise<GetSmartHandleJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartHandleJobWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetTemplateResponse>(await this.doRPCRequest("GetTemplate", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async listAllPublicMediaTagsWithOptions(request: ListAllPublicMediaTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListAllPublicMediaTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAllPublicMediaTagsResponse>(await this.doRPCRequest("ListAllPublicMediaTags", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListAllPublicMediaTagsResponse({}));
  }

  async listAllPublicMediaTags(request: ListAllPublicMediaTagsRequest): Promise<ListAllPublicMediaTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllPublicMediaTagsWithOptions(request, runtime);
  }

  async listMediaBasicInfosWithOptions(request: ListMediaBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaBasicInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMediaBasicInfosResponse>(await this.doRPCRequest("ListMediaBasicInfos", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListMediaBasicInfosResponse({}));
  }

  async listMediaBasicInfos(request: ListMediaBasicInfosRequest): Promise<ListMediaBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaBasicInfosWithOptions(request, runtime);
  }

  async listMediaProducingJobsWithOptions(request: ListMediaProducingJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaProducingJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMediaProducingJobsResponse>(await this.doRPCRequest("ListMediaProducingJobs", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListMediaProducingJobsResponse({}));
  }

  async listMediaProducingJobs(request: ListMediaProducingJobsRequest): Promise<ListMediaProducingJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaProducingJobsWithOptions(request, runtime);
  }

  async listPublicMediaBasicInfosWithOptions(request: ListPublicMediaBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicMediaBasicInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPublicMediaBasicInfosResponse>(await this.doRPCRequest("ListPublicMediaBasicInfos", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListPublicMediaBasicInfosResponse({}));
  }

  async listPublicMediaBasicInfos(request: ListPublicMediaBasicInfosRequest): Promise<ListPublicMediaBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicMediaBasicInfosWithOptions(request, runtime);
  }

  async listSmartJobsWithOptions(request: ListSmartJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSmartJobsResponse>(await this.doRPCRequest("ListSmartJobs", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new ListSmartJobsResponse({}));
  }

  async listSmartJobs(request: ListSmartJobsRequest): Promise<ListSmartJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartJobsWithOptions(request, runtime);
  }

  async listSysTemplatesWithOptions(request: ListSysTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListSysTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSysTemplatesResponse>(await this.doRPCRequest("ListSysTemplates", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new ListSysTemplatesResponse({}));
  }

  async listSysTemplates(request: ListSysTemplatesRequest): Promise<ListSysTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSysTemplatesWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplatesResponse>(await this.doRPCRequest("ListTemplates", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async registerMediaInfoWithOptions(request: RegisterMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMediaInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterMediaInfoResponse>(await this.doRPCRequest("RegisterMediaInfo", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterMediaInfoResponse({}));
  }

  async registerMediaInfo(request: RegisterMediaInfoRequest): Promise<RegisterMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerMediaInfoWithOptions(request, runtime);
  }

  async searchEditingProjectWithOptions(request: SearchEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchEditingProjectResponse>(await this.doRPCRequest("SearchEditingProject", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SearchEditingProjectResponse({}));
  }

  async searchEditingProject(request: SearchEditingProjectRequest): Promise<SearchEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEditingProjectWithOptions(request, runtime);
  }

  async setDefaultStorageLocationWithOptions(request: SetDefaultStorageLocationRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultStorageLocationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDefaultStorageLocationResponse>(await this.doRPCRequest("SetDefaultStorageLocation", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetDefaultStorageLocationResponse({}));
  }

  async setDefaultStorageLocation(request: SetDefaultStorageLocationRequest): Promise<SetDefaultStorageLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultStorageLocationWithOptions(request, runtime);
  }

  async setEventCallbackWithOptions(request: SetEventCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SetEventCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetEventCallbackResponse>(await this.doRPCRequest("SetEventCallback", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetEventCallbackResponse({}));
  }

  async setEventCallback(request: SetEventCallbackRequest): Promise<SetEventCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEventCallbackWithOptions(request, runtime);
  }

  async submitASRJobWithOptions(request: SubmitASRJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitASRJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitASRJobResponse>(await this.doRPCRequest("SubmitASRJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitASRJobResponse({}));
  }

  async submitASRJob(request: SubmitASRJobRequest): Promise<SubmitASRJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitASRJobWithOptions(request, runtime);
  }

  async submitAudioProduceJobWithOptions(request: SubmitAudioProduceJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAudioProduceJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAudioProduceJobResponse>(await this.doRPCRequest("SubmitAudioProduceJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAudioProduceJobResponse({}));
  }

  async submitAudioProduceJob(request: SubmitAudioProduceJobRequest): Promise<SubmitAudioProduceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAudioProduceJobWithOptions(request, runtime);
  }

  async submitDelogoJobWithOptions(request: SubmitDelogoJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDelogoJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitDelogoJobResponse>(await this.doRPCRequest("SubmitDelogoJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitDelogoJobResponse({}));
  }

  async submitDelogoJob(request: SubmitDelogoJobRequest): Promise<SubmitDelogoJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDelogoJobWithOptions(request, runtime);
  }

  async submitH2VJobWithOptions(request: SubmitH2VJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitH2VJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitH2VJobResponse>(await this.doRPCRequest("SubmitH2VJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitH2VJobResponse({}));
  }

  async submitH2VJob(request: SubmitH2VJobRequest): Promise<SubmitH2VJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitH2VJobWithOptions(request, runtime);
  }

  async submitKeyWordCutJobWithOptions(request: SubmitKeyWordCutJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitKeyWordCutJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SubmitKeyWordCutJobResponse>(await this.doRPCRequest("SubmitKeyWordCutJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new SubmitKeyWordCutJobResponse({}));
  }

  async submitKeyWordCutJob(request: SubmitKeyWordCutJobRequest): Promise<SubmitKeyWordCutJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitKeyWordCutJobWithOptions(request, runtime);
  }

  async submitLiveEditingJobWithOptions(request: SubmitLiveEditingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitLiveEditingJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitLiveEditingJobResponse>(await this.doRPCRequest("SubmitLiveEditingJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitLiveEditingJobResponse({}));
  }

  async submitLiveEditingJob(request: SubmitLiveEditingJobRequest): Promise<SubmitLiveEditingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitLiveEditingJobWithOptions(request, runtime);
  }

  async submitMattingJobWithOptions(request: SubmitMattingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMattingJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitMattingJobResponse>(await this.doRPCRequest("SubmitMattingJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitMattingJobResponse({}));
  }

  async submitMattingJob(request: SubmitMattingJobRequest): Promise<SubmitMattingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMattingJobWithOptions(request, runtime);
  }

  async submitMediaProducingJobWithOptions(request: SubmitMediaProducingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaProducingJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitMediaProducingJobResponse>(await this.doRPCRequest("SubmitMediaProducingJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitMediaProducingJobResponse({}));
  }

  async submitMediaProducingJob(request: SubmitMediaProducingJobRequest): Promise<SubmitMediaProducingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaProducingJobWithOptions(request, runtime);
  }

  async submitPPTCutJobWithOptions(request: SubmitPPTCutJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPPTCutJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SubmitPPTCutJobResponse>(await this.doRPCRequest("SubmitPPTCutJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new SubmitPPTCutJobResponse({}));
  }

  async submitPPTCutJob(request: SubmitPPTCutJobRequest): Promise<SubmitPPTCutJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPPTCutJobWithOptions(request, runtime);
  }

  async submitSubtitleProduceJobWithOptions(request: SubmitSubtitleProduceJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSubtitleProduceJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSubtitleProduceJobResponse>(await this.doRPCRequest("SubmitSubtitleProduceJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSubtitleProduceJobResponse({}));
  }

  async submitSubtitleProduceJob(request: SubmitSubtitleProduceJobRequest): Promise<SubmitSubtitleProduceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSubtitleProduceJobWithOptions(request, runtime);
  }

  async updateEditingProjectWithOptions(request: UpdateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEditingProjectResponse>(await this.doRPCRequest("UpdateEditingProject", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEditingProjectResponse({}));
  }

  async updateEditingProject(request: UpdateEditingProjectRequest): Promise<UpdateEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEditingProjectWithOptions(request, runtime);
  }

  async updateMediaInfoWithOptions(request: UpdateMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMediaInfoResponse>(await this.doRPCRequest("UpdateMediaInfo", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMediaInfoResponse({}));
  }

  async updateMediaInfo(request: UpdateMediaInfoRequest): Promise<UpdateMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaInfoWithOptions(request, runtime);
  }

  async updateSmartJobWithOptions(request: UpdateSmartJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmartJobResponse>(await this.doRPCRequest("UpdateSmartJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmartJobResponse({}));
  }

  async updateSmartJob(request: UpdateSmartJobRequest): Promise<UpdateSmartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartJobWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(request: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTemplateResponse>(await this.doRPCRequest("UpdateTemplate", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

}
