// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateMediaWorkflowRequest extends $tea.Model {
  mediaWorkflowId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
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

export class ActivateMediaWorkflowResponseBody extends $tea.Model {
  mediaWorkflow?: ActivateMediaWorkflowResponseBodyMediaWorkflow;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: ActivateMediaWorkflowResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateMediaWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateMediaWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaRequest extends $tea.Model {
  cateId?: number;
  coverURL?: string;
  description?: string;
  fileURL?: string;
  inputUnbind?: boolean;
  mediaWorkflowId?: string;
  mediaWorkflowUserData?: string;
  overrideParams?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      fileURL: 'FileURL',
      inputUnbind: 'InputUnbind',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowUserData: 'MediaWorkflowUserData',
      overrideParams: 'OverrideParams',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      fileURL: 'string',
      inputUnbind: 'boolean',
      mediaWorkflowId: 'string',
      mediaWorkflowUserData: 'string',
      overrideParams: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaResponseBody extends $tea.Model {
  media?: AddMediaResponseBodyMedia;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: AddMediaResponseBodyMedia,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaTagRequest extends $tea.Model {
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaTagResponseBody extends $tea.Model {
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

export class AddMediaTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMediaTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMediaTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaWorkflowRequest extends $tea.Model {
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaWorkflowResponseBody extends $tea.Model {
  mediaWorkflow?: AddMediaWorkflowResponseBodyMediaWorkflow;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: AddMediaWorkflowResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMediaWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPipelineRequest extends $tea.Model {
  name?: string;
  notifyConfig?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  role?: string;
  speed?: string;
  speedLevel?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyConfig: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPipelineResponseBody extends $tea.Model {
  pipeline?: AddPipelineResponseBodyPipeline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: AddPipelineResponseBodyPipeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmarttagTemplateRequest extends $tea.Model {
  analyseTypes?: string;
  faceCategoryIds?: string;
  faceCustomParamsConfig?: string;
  industry?: string;
  isDefault?: boolean;
  keywordConfig?: string;
  knowledgeConfig?: string;
  labelType?: string;
  labelVersion?: string;
  landmarkGroupIds?: string;
  objectGroupIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scene?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      analyseTypes: 'AnalyseTypes',
      faceCategoryIds: 'FaceCategoryIds',
      faceCustomParamsConfig: 'FaceCustomParamsConfig',
      industry: 'Industry',
      isDefault: 'IsDefault',
      keywordConfig: 'KeywordConfig',
      knowledgeConfig: 'KnowledgeConfig',
      labelType: 'LabelType',
      labelVersion: 'LabelVersion',
      landmarkGroupIds: 'LandmarkGroupIds',
      objectGroupIds: 'ObjectGroupIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scene: 'Scene',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyseTypes: 'string',
      faceCategoryIds: 'string',
      faceCustomParamsConfig: 'string',
      industry: 'string',
      isDefault: 'boolean',
      keywordConfig: 'string',
      knowledgeConfig: 'string',
      labelType: 'string',
      labelVersion: 'string',
      landmarkGroupIds: 'string',
      objectGroupIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scene: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmarttagTemplateResponseBody extends $tea.Model {
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

export class AddSmarttagTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSmarttagTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSmarttagTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateRequest extends $tea.Model {
  audio?: string;
  container?: string;
  muxConfig?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transConfig?: string;
  video?: string;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'string',
      container: 'string',
      muxConfig: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transConfig: 'string',
      video: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class AddWaterMarkTemplateRequest extends $tea.Model {
  config?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
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

export class AddWaterMarkTemplateResponseBody extends $tea.Model {
  requestId?: string;
  waterMarkTemplate?: AddWaterMarkTemplateResponseBodyWaterMarkTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waterMarkTemplate: AddWaterMarkTemplateResponseBodyWaterMarkTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWaterMarkTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddWaterMarkTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInputBucketRequest extends $tea.Model {
  bucket?: string;
  ownerAccount?: string;
  ownerId?: number;
  referer?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      referer: 'Referer',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      referer: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInputBucketResponseBody extends $tea.Model {
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

export class BindInputBucketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindInputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindInputBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindOutputBucketRequest extends $tea.Model {
  bucket?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
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

export class BindOutputBucketResponseBody extends $tea.Model {
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

export class BindOutputBucketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindOutputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindOutputBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobRequest extends $tea.Model {
  jobId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

export class CancelJobResponseBody extends $tea.Model {
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

export class CancelJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomEntityRequest extends $tea.Model {
  algorithm?: string;
  customEntityInfo?: string;
  customEntityName?: string;
  customGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityInfo: 'CustomEntityInfo',
      customEntityName: 'CustomEntityName',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityInfo: 'string',
      customEntityName: 'string',
      customGroupId: 'string',
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

export class CreateCustomEntityResponseBody extends $tea.Model {
  customEntityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customEntityId: 'CustomEntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomGroupRequest extends $tea.Model {
  algorithm?: string;
  customGroupDescription?: string;
  customGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customGroupDescription: 'CustomGroupDescription',
      customGroupName: 'CustomGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customGroupDescription: 'string',
      customGroupName: 'string',
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

export class CreateCustomGroupResponseBody extends $tea.Model {
  customGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customGroupId: 'CustomGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFpShotDBRequest extends $tea.Model {
  config?: string;
  description?: string;
  modelId?: number;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      modelId: 'ModelId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      modelId: 'number',
      name: 'string',
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

export class CreateFpShotDBResponseBody extends $tea.Model {
  fpShotDB?: CreateFpShotDBResponseBodyFpShotDB;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotDB: 'FpShotDB',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDB: CreateFpShotDBResponseBodyFpShotDB,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFpShotDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFpShotDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFpShotDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateMediaWorkflowRequest extends $tea.Model {
  mediaWorkflowId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
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

export class DeactivateMediaWorkflowResponseBody extends $tea.Model {
  mediaWorkflow?: DeactivateMediaWorkflowResponseBodyMediaWorkflow;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: DeactivateMediaWorkflowResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateMediaWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeactivateMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeactivateMediaWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomEntityRequest extends $tea.Model {
  algorithm?: string;
  customEntityId?: string;
  customGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityId: 'CustomEntityId',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityId: 'string',
      customGroupId: 'string',
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

export class DeleteCustomEntityResponseBody extends $tea.Model {
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

export class DeleteCustomEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomGroupRequest extends $tea.Model {
  algorithm?: string;
  customGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customGroupId: 'string',
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

export class DeleteCustomGroupResponseBody extends $tea.Model {
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

export class DeleteCustomGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomViewRequest extends $tea.Model {
  algorithm?: string;
  customEntityId?: string;
  customGroupId?: string;
  customViewId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityId: 'CustomEntityId',
      customGroupId: 'CustomGroupId',
      customViewId: 'CustomViewId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityId: 'string',
      customGroupId: 'string',
      customViewId: 'string',
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

export class DeleteCustomViewResponseBody extends $tea.Model {
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

export class DeleteCustomViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaRequest extends $tea.Model {
  mediaIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
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

export class DeleteMediaResponseBody extends $tea.Model {
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

export class DeleteMediaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaTagRequest extends $tea.Model {
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaTagResponseBody extends $tea.Model {
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

export class DeleteMediaTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMediaTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMediaTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaWorkflowRequest extends $tea.Model {
  mediaWorkflowId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
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

export class DeleteMediaWorkflowResponseBody extends $tea.Model {
  mediaWorkflow?: DeleteMediaWorkflowResponseBodyMediaWorkflow;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: DeleteMediaWorkflowResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMediaWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineResponseBody extends $tea.Model {
  pipelineId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteSmarttagTemplateRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmarttagTemplateResponseBody extends $tea.Model {
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

export class DeleteSmarttagTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSmarttagTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSmarttagTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
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

export class DeleteTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteWaterMarkTemplateRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  waterMarkTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      waterMarkTemplateId: 'WaterMarkTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      waterMarkTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaterMarkTemplateResponseBody extends $tea.Model {
  requestId?: string;
  waterMarkTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waterMarkTemplateId: 'WaterMarkTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waterMarkTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaterMarkTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWaterMarkTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditRequest extends $tea.Model {
  bizType?: string;
  contents?: string;
  images?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scenes?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contents: 'Contents',
      images: 'Images',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scenes: 'Scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contents: 'string',
      images: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scenes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBody extends $tea.Model {
  imageQuotaExceed?: boolean;
  imageResults?: ImAuditResponseBodyImageResults;
  requestId?: string;
  textQuotaExceed?: boolean;
  textResults?: ImAuditResponseBodyTextResults;
  static names(): { [key: string]: string } {
    return {
      imageQuotaExceed: 'ImageQuotaExceed',
      imageResults: 'ImageResults',
      requestId: 'RequestId',
      textQuotaExceed: 'TextQuotaExceed',
      textResults: 'TextResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageQuotaExceed: 'boolean',
      imageResults: ImAuditResponseBodyImageResults,
      requestId: 'string',
      textQuotaExceed: 'boolean',
      textResults: ImAuditResponseBodyTextResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportFpShotJobRequest extends $tea.Model {
  fpDBId?: string;
  fpImportConfig?: string;
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBId: 'FpDBId',
      fpImportConfig: 'FpImportConfig',
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBId: 'string',
      fpImportConfig: 'string',
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportFpShotJobResponseBody extends $tea.Model {
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

export class ImportFpShotJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportFpShotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportFpShotJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllMediaBucketRequest extends $tea.Model {
  maximumPageSize?: number;
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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

export class ListAllMediaBucketResponseBody extends $tea.Model {
  mediaBucketList?: ListAllMediaBucketResponseBodyMediaBucketList;
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaBucketList: 'MediaBucketList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBucketList: ListAllMediaBucketResponseBodyMediaBucketList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllMediaBucketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAllMediaBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAllMediaBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomEntitiesRequest extends $tea.Model {
  algorithm?: string;
  customGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomEntitiesResponseBody extends $tea.Model {
  customEntities?: ListCustomEntitiesResponseBodyCustomEntities;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customEntities: 'CustomEntities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntities: ListCustomEntitiesResponseBodyCustomEntities,
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

export class ListCustomEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomGroupsRequest extends $tea.Model {
  algorithm?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomGroupsResponseBody extends $tea.Model {
  customGroups?: ListCustomGroupsResponseBodyCustomGroups;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customGroups: 'CustomGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroups: ListCustomGroupsResponseBodyCustomGroups,
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

export class ListCustomGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsRequest extends $tea.Model {
  categoryId?: string;
  ownerAccount?: string;
  ownerId?: number;
  personId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personId: 'PersonId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBody extends $tea.Model {
  categories?: ListCustomPersonsResponseBodyCategories;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: ListCustomPersonsResponseBodyCategories,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomPersonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomPersonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewsRequest extends $tea.Model {
  algorithm?: string;
  customEntityId?: string;
  customGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityId: 'CustomEntityId',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityId: 'string',
      customGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewsResponseBody extends $tea.Model {
  customViews?: ListCustomViewsResponseBodyCustomViews;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customViews: 'CustomViews',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViews: ListCustomViewsResponseBodyCustomViews,
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

export class ListCustomViewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomViewsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomViewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBRequest extends $tea.Model {
  fpDBIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fpDBIds: 'FpDBIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBIds: 'string',
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

export class ListFpShotDBResponseBody extends $tea.Model {
  fpShotDBList?: ListFpShotDBResponseBodyFpShotDBList;
  nonExistIds?: ListFpShotDBResponseBodyNonExistIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotDBList: 'FpShotDBList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDBList: ListFpShotDBResponseBodyFpShotDBList,
      nonExistIds: ListFpShotDBResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFpShotDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFpShotDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotFilesRequest extends $tea.Model {
  endTime?: string;
  fpDBId?: string;
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fpDBId: 'FpDBId',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fpDBId: 'string',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotFilesResponseBody extends $tea.Model {
  fpShotFileList?: ListFpShotFilesResponseBodyFpShotFileList;
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotFileList: 'FpShotFileList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotFileList: ListFpShotFilesResponseBodyFpShotFileList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotFilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFpShotFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFpShotFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotImportJobRequest extends $tea.Model {
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotImportJobResponseBody extends $tea.Model {
  fpShotImportJobList?: ListFpShotImportJobResponseBodyFpShotImportJobList[];
  nonExistIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotImportJobList: 'FpShotImportJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotImportJobList: { 'type': 'array', 'itemType': ListFpShotImportJobResponseBodyFpShotImportJobList },
      nonExistIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotImportJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFpShotImportJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFpShotImportJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRequest extends $tea.Model {
  endOfJobCreatedTimeRange?: string;
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

export class ListJobResponseBody extends $tea.Model {
  jobList?: ListJobResponseBodyJobList;
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: ListJobResponseBodyJobList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsRequest extends $tea.Model {
  inputFileURL?: string;
  maximumPageSize?: number;
  mediaWorkflowId?: string;
  mediaWorkflowName?: string;
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      inputFileURL: 'InputFileURL',
      maximumPageSize: 'MaximumPageSize',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFileURL: 'string',
      maximumPageSize: 'number',
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
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

export class ListMediaWorkflowExecutionsResponseBody extends $tea.Model {
  mediaWorkflowExecutionList?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList;
  nextPageToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecutionList: 'MediaWorkflowExecutionList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecutionList: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMediaWorkflowExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMediaWorkflowExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListRequest extends $tea.Model {
  analysisJobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      analysisJobIds: 'AnalysisJobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobIds: 'string',
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

export class QueryAnalysisJobListResponseBody extends $tea.Model {
  analysisJobList?: QueryAnalysisJobListResponseBodyAnalysisJobList;
  nonExistAnalysisJobIds?: QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisJobList: 'AnalysisJobList',
      nonExistAnalysisJobIds: 'NonExistAnalysisJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobList: QueryAnalysisJobListResponseBodyAnalysisJobList,
      nonExistAnalysisJobIds: QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAnalysisJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAnalysisJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpDBDeleteJobListRequest extends $tea.Model {
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpDBDeleteJobListResponseBody extends $tea.Model {
  fpDBDeleteJobList?: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList;
  nonExistIds?: QueryFpDBDeleteJobListResponseBodyNonExistIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBDeleteJobList: 'FpDBDeleteJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBDeleteJobList: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList,
      nonExistIds: QueryFpDBDeleteJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpDBDeleteJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFpDBDeleteJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFpDBDeleteJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpFileDeleteJobListRequest extends $tea.Model {
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpFileDeleteJobListResponseBody extends $tea.Model {
  fpFileDeleteJobList?: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList;
  nonExistIds?: QueryFpFileDeleteJobListResponseBodyNonExistIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpFileDeleteJobList: 'FpFileDeleteJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpFileDeleteJobList: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList,
      nonExistIds: QueryFpFileDeleteJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpFileDeleteJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFpFileDeleteJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFpFileDeleteJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListRequest extends $tea.Model {
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

export class QueryFpShotJobListResponseBody extends $tea.Model {
  fpShotJobList?: QueryFpShotJobListResponseBodyFpShotJobList;
  nextPageToken?: string;
  nonExistIds?: QueryFpShotJobListResponseBodyNonExistIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotJobList: 'FpShotJobList',
      nextPageToken: 'NextPageToken',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotJobList: QueryFpShotJobListResponseBodyFpShotJobList,
      nextPageToken: 'string',
      nonExistIds: QueryFpShotJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFpShotJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFpShotJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobRequest extends $tea.Model {
  jobId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

export class QueryIProductionJobResponseBody extends $tea.Model {
  functionName?: string;
  input?: string;
  jobId?: string;
  jobParams?: string;
  output?: string;
  pipelineId?: string;
  requestId?: string;
  result?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      input: 'Input',
      jobId: 'JobId',
      jobParams: 'JobParams',
      output: 'Output',
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
      result: 'Result',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      input: 'string',
      jobId: 'string',
      jobParams: 'string',
      output: 'string',
      pipelineId: 'string',
      requestId: 'string',
      result: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIProductionJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryIProductionJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryJobListRequest extends $tea.Model {
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBody extends $tea.Model {
  jobList?: QueryJobListResponseBodyJobList;
  nonExistJobIds?: QueryJobListResponseBodyNonExistJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      nonExistJobIds: 'NonExistJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: QueryJobListResponseBodyJobList,
      nonExistJobIds: QueryJobListResponseBodyNonExistJobIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryJobListResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMediaCensorJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMediaCensorJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryMediaInfoJobListRequest extends $tea.Model {
  mediaInfoJobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJobIds: 'MediaInfoJobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJobIds: 'string',
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

export class QueryMediaInfoJobListResponseBody extends $tea.Model {
  mediaInfoJobList?: QueryMediaInfoJobListResponseBodyMediaInfoJobList;
  nonExistMediaInfoJobIds?: QueryMediaInfoJobListResponseBodyNonExistMediaInfoJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJobList: 'MediaInfoJobList',
      nonExistMediaInfoJobIds: 'NonExistMediaInfoJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJobList: QueryMediaInfoJobListResponseBodyMediaInfoJobList,
      nonExistMediaInfoJobIds: QueryMediaInfoJobListResponseBodyNonExistMediaInfoJobIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMediaInfoJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMediaInfoJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListRequest extends $tea.Model {
  includeMediaInfo?: boolean;
  includePlayList?: boolean;
  includeSnapshotList?: boolean;
  includeSummaryList?: boolean;
  mediaIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      includeMediaInfo: 'IncludeMediaInfo',
      includePlayList: 'IncludePlayList',
      includeSnapshotList: 'IncludeSnapshotList',
      includeSummaryList: 'IncludeSummaryList',
      mediaIds: 'MediaIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMediaInfo: 'boolean',
      includePlayList: 'boolean',
      includeSnapshotList: 'boolean',
      includeSummaryList: 'boolean',
      mediaIds: 'string',
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

export class QueryMediaListResponseBody extends $tea.Model {
  mediaList?: QueryMediaListResponseBodyMediaList;
  nonExistMediaIds?: QueryMediaListResponseBodyNonExistMediaIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaList: 'MediaList',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaList: QueryMediaListResponseBodyMediaList,
      nonExistMediaIds: QueryMediaListResponseBodyNonExistMediaIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMediaListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMediaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLRequest extends $tea.Model {
  fileURLs?: string;
  includeMediaInfo?: boolean;
  includePlayList?: boolean;
  includeSnapshotList?: boolean;
  includeSummaryList?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fileURLs: 'FileURLs',
      includeMediaInfo: 'IncludeMediaInfo',
      includePlayList: 'IncludePlayList',
      includeSnapshotList: 'IncludeSnapshotList',
      includeSummaryList: 'IncludeSummaryList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURLs: 'string',
      includeMediaInfo: 'boolean',
      includePlayList: 'boolean',
      includeSnapshotList: 'boolean',
      includeSummaryList: 'boolean',
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

export class QueryMediaListByURLResponseBody extends $tea.Model {
  mediaList?: QueryMediaListByURLResponseBodyMediaList;
  nonExistFileURLs?: QueryMediaListByURLResponseBodyNonExistFileURLs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaList: 'MediaList',
      nonExistFileURLs: 'NonExistFileURLs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaList: QueryMediaListByURLResponseBodyMediaList,
      nonExistFileURLs: QueryMediaListByURLResponseBodyNonExistFileURLs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMediaListByURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMediaListByURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  runIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      runIds: 'RunIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      runIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBody extends $tea.Model {
  mediaWorkflowExecutionList?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList;
  nonExistRunIds?: QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecutionList: 'MediaWorkflowExecutionList',
      nonExistRunIds: 'NonExistRunIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecutionList: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList,
      nonExistRunIds: QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMediaWorkflowExecutionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMediaWorkflowExecutionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowListRequest extends $tea.Model {
  mediaWorkflowIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowIds: 'MediaWorkflowIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowIds: 'string',
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

export class QueryMediaWorkflowListResponseBody extends $tea.Model {
  mediaWorkflowList?: QueryMediaWorkflowListResponseBodyMediaWorkflowList;
  nonExistMediaWorkflowIds?: QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowList: 'MediaWorkflowList',
      nonExistMediaWorkflowIds: 'NonExistMediaWorkflowIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowList: QueryMediaWorkflowListResponseBodyMediaWorkflowList,
      nonExistMediaWorkflowIds: QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMediaWorkflowListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMediaWorkflowListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pipelineIds?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineIds: 'PipelineIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineIds: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBody extends $tea.Model {
  nonExistPids?: QueryPipelineListResponseBodyNonExistPids;
  pipelineList?: QueryPipelineListResponseBodyPipelineList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistPids: 'NonExistPids',
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistPids: QueryPipelineListResponseBodyNonExistPids,
      pipelineList: QueryPipelineListResponseBodyPipelineList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPipelineListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPipelineListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobRequest extends $tea.Model {
  jobId?: string;
  ownerAccount?: string;
  ownerId?: number;
  params?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      params: 'Params',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      params: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmarttagJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QuerySmarttagTemplateListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagTemplateListResponseBody extends $tea.Model {
  requestId?: string;
  templates?: QuerySmarttagTemplateListResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: QuerySmarttagTemplateListResponseBodyTemplates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagTemplateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmarttagTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySmarttagTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListRequest extends $tea.Model {
  endOfJobCreatedTimeRange?: string;
  maximumPageSize?: number;
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  snapshotJobIds?: string;
  startOfJobCreatedTimeRange?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endOfJobCreatedTimeRange: 'EndOfJobCreatedTimeRange',
      maximumPageSize: 'MaximumPageSize',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotJobIds: 'SnapshotJobIds',
      startOfJobCreatedTimeRange: 'StartOfJobCreatedTimeRange',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfJobCreatedTimeRange: 'string',
      maximumPageSize: 'number',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotJobIds: 'string',
      startOfJobCreatedTimeRange: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBody extends $tea.Model {
  nextPageToken?: string;
  nonExistSnapshotJobIds?: QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds;
  requestId?: string;
  snapshotJobList?: QuerySnapshotJobListResponseBodySnapshotJobList;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      nonExistSnapshotJobIds: 'NonExistSnapshotJobIds',
      requestId: 'RequestId',
      snapshotJobList: 'SnapshotJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      nonExistSnapshotJobIds: QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds,
      requestId: 'string',
      snapshotJobList: QuerySnapshotJobListResponseBodySnapshotJobList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySnapshotJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySnapshotJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBody extends $tea.Model {
  nonExistTids?: QueryTemplateListResponseBodyNonExistTids;
  requestId?: string;
  templateList?: QueryTemplateListResponseBodyTemplateList;
  static names(): { [key: string]: string } {
    return {
      nonExistTids: 'NonExistTids',
      requestId: 'RequestId',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistTids: QueryTemplateListResponseBodyNonExistTids,
      requestId: 'string',
      templateList: QueryTemplateListResponseBodyTemplateList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  waterMarkTemplateIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      waterMarkTemplateIds: 'WaterMarkTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      waterMarkTemplateIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListResponseBody extends $tea.Model {
  nonExistWids?: QueryWaterMarkTemplateListResponseBodyNonExistWids;
  requestId?: string;
  waterMarkTemplateList?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList;
  static names(): { [key: string]: string } {
    return {
      nonExistWids: 'NonExistWids',
      requestId: 'RequestId',
      waterMarkTemplateList: 'WaterMarkTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistWids: QueryWaterMarkTemplateListResponseBodyNonExistWids,
      requestId: 'string',
      waterMarkTemplateList: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWaterMarkTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWaterMarkTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomFaceRequest extends $tea.Model {
  categoryId?: string;
  imageUrl?: string;
  ownerAccount?: string;
  ownerId?: number;
  personId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      imageUrl: 'ImageUrl',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personId: 'PersonId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      imageUrl: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomFaceResponseBody extends $tea.Model {
  faceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomFaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterCustomFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterCustomFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomViewRequest extends $tea.Model {
  algorithm?: string;
  customEntityId?: string;
  customGroupId?: string;
  imageUrl?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityId: 'CustomEntityId',
      customGroupId: 'CustomGroupId',
      imageUrl: 'ImageUrl',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityId: 'string',
      customGroupId: 'string',
      imageUrl: 'string',
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

export class RegisterCustomViewResponseBody extends $tea.Model {
  customViewId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customViewId: 'CustomViewId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCustomViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterCustomViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterCustomViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaWorkflowRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  stateList?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stateList: 'StateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stateList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaWorkflowResponseBody extends $tea.Model {
  mediaWorkflowList?: SearchMediaWorkflowResponseBodyMediaWorkflowList;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowList: 'MediaWorkflowList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowList: SearchMediaWorkflowResponseBodyMediaWorkflowList,
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

export class SearchMediaWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchMediaWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPipelineRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPipelineResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pipelineList?: SearchPipelineResponseBodyPipelineList;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineList: SearchPipelineResponseBodyPipelineList,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateRequest extends $tea.Model {
  namePrefix?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      namePrefix: 'NamePrefix',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namePrefix: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  templateList?: SearchTemplateResponseBodyTemplateList;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templateList: 'TemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templateList: SearchTemplateResponseBodyTemplateList,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWaterMarkTemplateRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWaterMarkTemplateResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  waterMarkTemplateList?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      waterMarkTemplateList: 'WaterMarkTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      waterMarkTemplateList: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWaterMarkTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchWaterMarkTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobRequest extends $tea.Model {
  analysisConfig?: string;
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  priority?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      analysisConfig: 'AnalysisConfig',
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisConfig: 'string',
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      priority: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBody extends $tea.Model {
  analysisJob?: SubmitAnalysisJobResponseBodyAnalysisJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisJob: 'AnalysisJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJob: SubmitAnalysisJobResponseBodyAnalysisJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitAnalysisJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitAnalysisJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFpDBDeleteJobRequest extends $tea.Model {
  delType?: string;
  fpDBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      delType: 'DelType',
      fpDBId: 'FpDBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delType: 'string',
      fpDBId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFpDBDeleteJobResponseBody extends $tea.Model {
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

export class SubmitFpDBDeleteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitFpDBDeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitFpDBDeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFpFileDeleteJobRequest extends $tea.Model {
  fileIds?: string;
  fpDBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  primaryKeys?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      fileIds: 'FileIds',
      fpDBId: 'FpDBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      primaryKeys: 'PrimaryKeys',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIds: 'string',
      fpDBId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      primaryKeys: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFpFileDeleteJobResponseBody extends $tea.Model {
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

export class SubmitFpFileDeleteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitFpFileDeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitFpFileDeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFpShotJobRequest extends $tea.Model {
  fpShotConfig?: string;
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotConfig: 'FpShotConfig',
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotConfig: 'string',
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFpShotJobResponseBody extends $tea.Model {
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

export class SubmitFpShotJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitFpShotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitFpShotJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobRequest extends $tea.Model {
  functionName?: string;
  input?: string;
  jobParams?: string;
  modelId?: string;
  notifyUrl?: string;
  output?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduleParams?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      input: 'Input',
      jobParams: 'JobParams',
      modelId: 'ModelId',
      notifyUrl: 'NotifyUrl',
      output: 'Output',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleParams: 'ScheduleParams',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      input: 'string',
      jobParams: 'string',
      modelId: 'string',
      notifyUrl: 'string',
      output: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleParams: 'string',
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
  result?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIProductionJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitIProductionJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SubmitJobsRequest extends $tea.Model {
  input?: string;
  outputBucket?: string;
  outputLocation?: string;
  outputs?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      outputBucket: 'OutputBucket',
      outputLocation: 'OutputLocation',
      outputs: 'Outputs',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      outputBucket: 'string',
      outputLocation: 'string',
      outputs: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBody extends $tea.Model {
  jobResultList?: SubmitJobsResponseBodyJobResultList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobResultList: 'JobResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResultList: SubmitJobsResponseBodyJobResultList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitJobsResponseBody,
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
  externalUrl?: string;
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  title?: string;
  userData?: string;
  videoCensorConfig?: string;
  static names(): { [key: string]: string } {
    return {
      barrages: 'Barrages',
      coverImages: 'CoverImages',
      description: 'Description',
      externalUrl: 'ExternalUrl',
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      title: 'Title',
      userData: 'UserData',
      videoCensorConfig: 'VideoCensorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barrages: 'string',
      coverImages: 'string',
      description: 'string',
      externalUrl: 'string',
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      title: 'string',
      userData: 'string',
      videoCensorConfig: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitMediaCensorJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  async?: boolean;
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitMediaInfoJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SubmitSmarttagJobRequest extends $tea.Model {
  content?: string;
  contentAddr?: string;
  contentType?: string;
  input?: string;
  notifyUrl?: string;
  ownerAccount?: string;
  ownerId?: number;
  params?: string;
  pipelineId?: string;
  priority?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      params: 'Params',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      input: 'string',
      notifyUrl: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      params: 'string',
      pipelineId: 'string',
      priority: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSmarttagJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  snapshotConfig?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotConfig: 'SnapshotConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotConfig: 'string',
      userData: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSnapshotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class TagCustomPersonRequest extends $tea.Model {
  categoryDescription?: string;
  categoryId?: string;
  categoryName?: string;
  ownerAccount?: string;
  ownerId?: number;
  personDescription?: string;
  personId?: string;
  personName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryDescription: 'CategoryDescription',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personDescription: 'PersonDescription',
      personId: 'PersonId',
      personName: 'PersonName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryDescription: 'string',
      categoryId: 'string',
      categoryName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personDescription: 'string',
      personId: 'string',
      personName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagCustomPersonResponseBody extends $tea.Model {
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

export class TagCustomPersonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagCustomPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagCustomPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInputBucketRequest extends $tea.Model {
  bucket?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInputBucketResponseBody extends $tea.Model {
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

export class UnbindInputBucketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindInputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindInputBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindOutputBucketRequest extends $tea.Model {
  bucket?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
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

export class UnbindOutputBucketResponseBody extends $tea.Model {
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

export class UnbindOutputBucketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindOutputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindOutputBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterCustomFaceRequest extends $tea.Model {
  categoryId?: string;
  faceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  personId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      faceId: 'FaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personId: 'PersonId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      faceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterCustomFaceResponseBody extends $tea.Model {
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

export class UnregisterCustomFaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnregisterCustomFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnregisterCustomFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaRequest extends $tea.Model {
  cateId?: number;
  coverURL?: string;
  description?: string;
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBody extends $tea.Model {
  media?: UpdateMediaResponseBodyMedia;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: UpdateMediaResponseBodyMedia,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaCategoryRequest extends $tea.Model {
  cateId?: number;
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      mediaId: 'string',
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

export class UpdateMediaCategoryResponseBody extends $tea.Model {
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

export class UpdateMediaCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMediaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMediaCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaCoverRequest extends $tea.Model {
  coverURL?: string;
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      mediaId: 'string',
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

export class UpdateMediaCoverResponseBody extends $tea.Model {
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

export class UpdateMediaCoverResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMediaCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMediaCoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaPublishStateRequest extends $tea.Model {
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  publish?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publish: 'Publish',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      publish: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaPublishStateResponseBody extends $tea.Model {
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

export class UpdateMediaPublishStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMediaPublishStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMediaPublishStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowRequest extends $tea.Model {
  mediaWorkflowId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowResponseBody extends $tea.Model {
  mediaWorkflow?: UpdateMediaWorkflowResponseBodyMediaWorkflow;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: UpdateMediaWorkflowResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMediaWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowTriggerModeRequest extends $tea.Model {
  mediaWorkflowId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowTriggerModeResponseBody extends $tea.Model {
  mediaWorkflow?: UpdateMediaWorkflowTriggerModeResponseBodyMediaWorkflow;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: UpdateMediaWorkflowTriggerModeResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowTriggerModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMediaWorkflowTriggerModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMediaWorkflowTriggerModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineRequest extends $tea.Model {
  extendConfig?: string;
  name?: string;
  notifyConfig?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfig: 'ExtendConfig',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfig: 'string',
      name: 'string',
      notifyConfig: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineResponseBody extends $tea.Model {
  pipeline?: UpdatePipelineResponseBodyPipeline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: UpdatePipelineResponseBodyPipeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateSmarttagTemplateRequest extends $tea.Model {
  analyseTypes?: string;
  faceCategoryIds?: string;
  faceCustomParamsConfig?: string;
  industry?: string;
  isDefault?: boolean;
  keywordConfig?: string;
  knowledgeConfig?: string;
  labelType?: string;
  labelVersion?: string;
  landmarkGroupIds?: string;
  objectGroupIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scene?: string;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      analyseTypes: 'AnalyseTypes',
      faceCategoryIds: 'FaceCategoryIds',
      faceCustomParamsConfig: 'FaceCustomParamsConfig',
      industry: 'Industry',
      isDefault: 'IsDefault',
      keywordConfig: 'KeywordConfig',
      knowledgeConfig: 'KnowledgeConfig',
      labelType: 'LabelType',
      labelVersion: 'LabelVersion',
      landmarkGroupIds: 'LandmarkGroupIds',
      objectGroupIds: 'ObjectGroupIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scene: 'Scene',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyseTypes: 'string',
      faceCategoryIds: 'string',
      faceCustomParamsConfig: 'string',
      industry: 'string',
      isDefault: 'boolean',
      keywordConfig: 'string',
      knowledgeConfig: 'string',
      labelType: 'string',
      labelVersion: 'string',
      landmarkGroupIds: 'string',
      objectGroupIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scene: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmarttagTemplateResponseBody extends $tea.Model {
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

export class UpdateSmarttagTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSmarttagTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSmarttagTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  audio?: string;
  container?: string;
  muxConfig?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: string;
  transConfig?: string;
  video?: string;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'string',
      container: 'string',
      muxConfig: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'string',
      transConfig: 'string',
      video: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: UpdateTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: UpdateTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateWaterMarkTemplateRequest extends $tea.Model {
  config?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  waterMarkTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      waterMarkTemplateId: 'WaterMarkTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      waterMarkTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaterMarkTemplateResponseBody extends $tea.Model {
  requestId?: string;
  waterMarkTemplate?: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waterMarkTemplate: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaterMarkTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWaterMarkTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateMediaWorkflowResponseBodyMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaResponseBodyMediaFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaResponseBodyMediaRunIdList extends $tea.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaResponseBodyMediaTags extends $tea.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaResponseBodyMedia extends $tea.Model {
  bitrate?: string;
  cateId?: number;
  censorState?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: string;
  file?: AddMediaResponseBodyMediaFile;
  format?: string;
  fps?: string;
  height?: string;
  mediaId?: string;
  publishState?: string;
  runIdList?: AddMediaResponseBodyMediaRunIdList;
  size?: string;
  tags?: AddMediaResponseBodyMediaTags;
  title?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      cateId: 'CateId',
      censorState: 'CensorState',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaId: 'MediaId',
      publishState: 'PublishState',
      runIdList: 'RunIdList',
      size: 'Size',
      tags: 'Tags',
      title: 'Title',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      cateId: 'number',
      censorState: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'string',
      file: AddMediaResponseBodyMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      publishState: 'string',
      runIdList: AddMediaResponseBodyMediaRunIdList,
      size: 'string',
      tags: AddMediaResponseBodyMediaTags,
      title: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMediaWorkflowResponseBodyMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPipelineResponseBodyPipelineNotifyConfig extends $tea.Model {
  mqTag?: string;
  mqTopic?: string;
  queueName?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      mqTag: 'MqTag',
      mqTopic: 'MqTopic',
      queueName: 'QueueName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTag: 'string',
      mqTopic: 'string',
      queueName: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPipelineResponseBodyPipeline extends $tea.Model {
  id?: string;
  name?: string;
  notifyConfig?: AddPipelineResponseBodyPipelineNotifyConfig;
  quotaAllocate?: number;
  role?: string;
  speed?: string;
  speedLevel?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      quotaAllocate: 'QuotaAllocate',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      notifyConfig: AddPipelineResponseBodyPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  level?: string;
  loudnessRangeTarget?: string;
  method?: string;
  peakLevel?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      level: 'Level',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      peakLevel: 'PeakLevel',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      level: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      peakLevel: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  samplerate?: string;
  volume?: AddTemplateResponseBodyTemplateAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
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
      qscale: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: AddTemplateResponseBodyTemplateAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateContainer extends $tea.Model {
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

export class AddTemplateResponseBodyTemplateMuxConfigGif extends $tea.Model {
  ditherMode?: string;
  finalDelay?: string;
  isCustomPalette?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateMuxConfigWebp extends $tea.Model {
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateMuxConfig extends $tea.Model {
  gif?: AddTemplateResponseBodyTemplateMuxConfigGif;
  segment?: AddTemplateResponseBodyTemplateMuxConfigSegment;
  webp?: AddTemplateResponseBodyTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: AddTemplateResponseBodyTemplateMuxConfigGif,
      segment: AddTemplateResponseBodyTemplateMuxConfigSegment,
      webp: AddTemplateResponseBodyTemplateMuxConfigWebp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateTransConfig extends $tea.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateVideoNarrowBand extends $tea.Model {
  abrmax?: number;
  maxAbrRatio?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abrmax: 'Abrmax',
      maxAbrRatio: 'MaxAbrRatio',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrmax: 'number',
      maxAbrRatio: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplateVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: AddTemplateResponseBodyTemplateVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  hdr2sdr?: string;
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
  narrowBand?: AddTemplateResponseBodyTemplateVideoNarrowBand;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  resoPriority?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      hdr2sdr: 'Hdr2sdr',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      narrowBand: 'NarrowBand',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: AddTemplateResponseBodyTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      hdr2sdr: 'string',
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
      narrowBand: AddTemplateResponseBodyTemplateVideoNarrowBand,
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTemplateResponseBodyTemplate extends $tea.Model {
  audio?: AddTemplateResponseBodyTemplateAudio;
  container?: AddTemplateResponseBodyTemplateContainer;
  id?: string;
  muxConfig?: AddTemplateResponseBodyTemplateMuxConfig;
  name?: string;
  state?: string;
  transConfig?: AddTemplateResponseBodyTemplateTransConfig;
  video?: AddTemplateResponseBodyTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: AddTemplateResponseBodyTemplateAudio,
      container: AddTemplateResponseBodyTemplateContainer,
      id: 'string',
      muxConfig: AddTemplateResponseBodyTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: AddTemplateResponseBodyTemplateTransConfig,
      video: AddTemplateResponseBodyTemplateVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline extends $tea.Model {
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

export class AddWaterMarkTemplateResponseBodyWaterMarkTemplate extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  id?: string;
  name?: string;
  ratioRefer?: AddWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer;
  referPos?: string;
  state?: string;
  timeline?: AddWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline;
  type?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      ratioRefer: 'RatioRefer',
      referPos: 'ReferPos',
      state: 'State',
      timeline: 'Timeline',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      id: 'string',
      name: 'string',
      ratioRefer: AddWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer,
      referPos: 'string',
      state: 'string',
      timeline: AddWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline,
      type: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFpShotDBResponseBodyFpShotDB extends $tea.Model {
  config?: string;
  description?: string;
  fpDBId?: string;
  modelId?: number;
  name?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      fpDBId: 'FpDBId',
      modelId: 'ModelId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      fpDBId: 'string',
      modelId: 'number',
      name: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateMediaWorkflowResponseBodyMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaWorkflowResponseBodyMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsFrames extends $tea.Model {
  rate?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'rate',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsHintWordsInfo extends $tea.Model {
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsLogoData extends $tea.Model {
  h?: number;
  name?: string;
  type?: string;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      name: 'name',
      type: 'type',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      name: 'string',
      type: 'string',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsProgramCodeData extends $tea.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsQrcodeLocations extends $tea.Model {
  h?: number;
  qrcode?: string;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      qrcode: 'qrcode',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      qrcode: 'string',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces extends $tea.Model {
  idid?: string;
  name?: string;
  re?: number;
  static names(): { [key: string]: string } {
    return {
      idid: 'idid',
      name: 'name',
      re: 're',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idid: 'string',
      name: 'string',
      re: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResultsSfaceData extends $tea.Model {
  faces?: ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces[];
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      faces: 'faces',
      h: 'h',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces },
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResultResults extends $tea.Model {
  label?: string;
  rate?: number;
  scene?: string;
  suggestion?: string;
  frames?: ImAuditResponseBodyImageResultsResultResultsFrames[];
  hintWordsInfo?: ImAuditResponseBodyImageResultsResultResultsHintWordsInfo[];
  logoData?: ImAuditResponseBodyImageResultsResultResultsLogoData[];
  ocrData?: string[];
  programCodeData?: ImAuditResponseBodyImageResultsResultResultsProgramCodeData[];
  qrcodeData?: string[];
  qrcodeLocations?: ImAuditResponseBodyImageResultsResultResultsQrcodeLocations[];
  sfaceData?: ImAuditResponseBodyImageResultsResultResultsSfaceData[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
      frames: 'frames',
      hintWordsInfo: 'hintWordsInfo',
      logoData: 'logoData',
      ocrData: 'ocrData',
      programCodeData: 'programCodeData',
      qrcodeData: 'qrcodeData',
      qrcodeLocations: 'qrcodeLocations',
      sfaceData: 'sfaceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'number',
      scene: 'string',
      suggestion: 'string',
      frames: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsFrames },
      hintWordsInfo: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsHintWordsInfo },
      logoData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsLogoData },
      ocrData: { 'type': 'array', 'itemType': 'string' },
      programCodeData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsProgramCodeData },
      qrcodeData: { 'type': 'array', 'itemType': 'string' },
      qrcodeLocations: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsQrcodeLocations },
      sfaceData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsSfaceData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResultsResult extends $tea.Model {
  code?: number;
  dataId?: string;
  extras?: { [key: string]: any };
  msg?: string;
  results?: ImAuditResponseBodyImageResultsResultResults[];
  taskId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataId: 'dataId',
      extras: 'extras',
      msg: 'msg',
      results: 'results',
      taskId: 'taskId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataId: 'string',
      extras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      results: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResults },
      taskId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyImageResults extends $tea.Model {
  result?: ImAuditResponseBodyImageResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResultResultsDetailsContexts extends $tea.Model {
  context?: string;
  libCode?: string;
  libName?: string;
  positions?: string[];
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      libCode: 'libCode',
      libName: 'libName',
      positions: 'positions',
      ruleType: 'ruleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      libCode: 'string',
      libName: 'string',
      positions: { 'type': 'array', 'itemType': 'string' },
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResultResultsDetails extends $tea.Model {
  label?: string;
  contexts?: ImAuditResponseBodyTextResultsResultResultsDetailsContexts[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      contexts: 'contexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      contexts: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResultsDetailsContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResultResults extends $tea.Model {
  details?: ImAuditResponseBodyTextResultsResultResultsDetails[];
  label?: string;
  rate?: number;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      label: 'label',
      rate: 'rate',
      scene: 'scene',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResultsDetails },
      label: 'string',
      rate: 'number',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResultsResult extends $tea.Model {
  code?: number;
  content?: string;
  dataId?: string;
  msg?: string;
  results?: ImAuditResponseBodyTextResultsResultResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      dataId: 'dataId',
      msg: 'msg',
      results: 'results',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: 'string',
      dataId: 'string',
      msg: 'string',
      results: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResults },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImAuditResponseBodyTextResults extends $tea.Model {
  result?: ImAuditResponseBodyTextResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllMediaBucketResponseBodyMediaBucketListMediaBucket extends $tea.Model {
  bucket?: string;
  referer?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      referer: 'Referer',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      referer: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllMediaBucketResponseBodyMediaBucketList extends $tea.Model {
  mediaBucket?: ListAllMediaBucketResponseBodyMediaBucketListMediaBucket[];
  static names(): { [key: string]: string } {
    return {
      mediaBucket: 'MediaBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBucket: { 'type': 'array', 'itemType': ListAllMediaBucketResponseBodyMediaBucketListMediaBucket },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity extends $tea.Model {
  customEntityId?: string;
  customEntityInfo?: string;
  customEntityName?: string;
  static names(): { [key: string]: string } {
    return {
      customEntityId: 'CustomEntityId',
      customEntityInfo: 'CustomEntityInfo',
      customEntityName: 'CustomEntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntityId: 'string',
      customEntityInfo: 'string',
      customEntityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomEntitiesResponseBodyCustomEntities extends $tea.Model {
  customEntity?: ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity[];
  static names(): { [key: string]: string } {
    return {
      customEntity: 'CustomEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntity: { 'type': 'array', 'itemType': ListCustomEntitiesResponseBodyCustomEntitiesCustomEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomGroupsResponseBodyCustomGroupsCustomGroup extends $tea.Model {
  customGroupDescription?: string;
  customGroupId?: string;
  customGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      customGroupDescription: 'CustomGroupDescription',
      customGroupId: 'CustomGroupId',
      customGroupName: 'CustomGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroupDescription: 'string',
      customGroupId: 'string',
      customGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomGroupsResponseBodyCustomGroups extends $tea.Model {
  customGroup?: ListCustomGroupsResponseBodyCustomGroupsCustomGroup[];
  static names(): { [key: string]: string } {
    return {
      customGroup: 'CustomGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroup: { 'type': 'array', 'itemType': ListCustomGroupsResponseBodyCustomGroupsCustomGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace extends $tea.Model {
  faceId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces extends $tea.Model {
  face?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace[];
  static names(): { [key: string]: string } {
    return {
      face: 'Face',
    };
  }

  static types(): { [key: string]: any } {
    return {
      face: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson extends $tea.Model {
  faces?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces;
  personDescription?: string;
  personId?: string;
  personName?: string;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      personDescription: 'PersonDescription',
      personId: 'PersonId',
      personName: 'PersonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces,
      personDescription: 'string',
      personId: 'string',
      personName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategoryPersons extends $tea.Model {
  person?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson[];
  static names(): { [key: string]: string } {
    return {
      person: 'Person',
    };
  }

  static types(): { [key: string]: any } {
    return {
      person: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategory extends $tea.Model {
  categoryDescription?: string;
  categoryId?: string;
  categoryName?: string;
  persons?: ListCustomPersonsResponseBodyCategoriesCategoryPersons;
  static names(): { [key: string]: string } {
    return {
      categoryDescription: 'CategoryDescription',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      persons: 'Persons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryDescription: 'string',
      categoryId: 'string',
      categoryName: 'string',
      persons: ListCustomPersonsResponseBodyCategoriesCategoryPersons,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategories extends $tea.Model {
  category?: ListCustomPersonsResponseBodyCategoriesCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewsResponseBodyCustomViewsCustomView extends $tea.Model {
  customViewId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customViewId: 'CustomViewId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewId: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewsResponseBodyCustomViews extends $tea.Model {
  customView?: ListCustomViewsResponseBodyCustomViewsCustomView[];
  static names(): { [key: string]: string } {
    return {
      customView: 'CustomView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customView: { 'type': 'array', 'itemType': ListCustomViewsResponseBodyCustomViewsCustomView },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBResponseBodyFpShotDBListFpShotDB extends $tea.Model {
  description?: string;
  fpDBId?: string;
  modelId?: number;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fpDBId: 'FpDBId',
      modelId: 'ModelId',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fpDBId: 'string',
      modelId: 'number',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBResponseBodyFpShotDBList extends $tea.Model {
  fpShotDB?: ListFpShotDBResponseBodyFpShotDBListFpShotDB[];
  static names(): { [key: string]: string } {
    return {
      fpShotDB: 'FpShotDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDB: { 'type': 'array', 'itemType': ListFpShotDBResponseBodyFpShotDBListFpShotDB },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBResponseBodyNonExistIds extends $tea.Model {
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

export class ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile extends $tea.Model {
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

export class ListFpShotFilesResponseBodyFpShotFileListFpShotFile extends $tea.Model {
  fileId?: string;
  inputFile?: ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile;
  primaryKey?: string;
  storeTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      inputFile: 'InputFile',
      primaryKey: 'PrimaryKey',
      storeTime: 'StoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      inputFile: ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile,
      primaryKey: 'string',
      storeTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotFilesResponseBodyFpShotFileList extends $tea.Model {
  fpShotFile?: ListFpShotFilesResponseBodyFpShotFileListFpShotFile[];
  static names(): { [key: string]: string } {
    return {
      fpShotFile: 'FpShotFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotFile: { 'type': 'array', 'itemType': ListFpShotFilesResponseBodyFpShotFileListFpShotFile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotImportJobResponseBodyFpShotImportJobList extends $tea.Model {
  code?: string;
  createTime?: string;
  finishTime?: string;
  fpDBId?: string;
  fpImportConfig?: string;
  id?: string;
  input?: string;
  message?: string;
  pipelineId?: string;
  processMessage?: string;
  status?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      fpDBId: 'FpDBId',
      fpImportConfig: 'FpImportConfig',
      id: 'Id',
      input: 'Input',
      message: 'Message',
      pipelineId: 'PipelineId',
      processMessage: 'ProcessMessage',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      fpDBId: 'string',
      fpImportConfig: 'string',
      id: 'string',
      input: 'string',
      message: 'string',
      pipelineId: 'string',
      processMessage: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobInput extends $tea.Model {
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

export class ListJobResponseBodyJobListJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputAudioVolume extends $tea.Model {
  level?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  samplerate?: string;
  volume?: ListJobResponseBodyJobListJobOutputAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
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
      qscale: 'string',
      samplerate: 'string',
      volume: ListJobResponseBodyJobListJobOutputAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputClipTimeSpan extends $tea.Model {
  duration?: string;
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      seek: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputClip extends $tea.Model {
  timeSpan?: ListJobResponseBodyJobListJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: ListJobResponseBodyJobListJobOutputClipTimeSpan,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputContainer extends $tea.Model {
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

export class ListJobResponseBodyJobListJobOutputEncryption extends $tea.Model {
  id?: string;
  key?: string;
  keyType?: string;
  keyUri?: string;
  skipCnt?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      keyType: 'KeyType',
      keyUri: 'KeyUri',
      skipCnt: 'SkipCnt',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      keyType: 'string',
      keyUri: 'string',
      skipCnt: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS extends $tea.Model {
  md5Support?: boolean;
  sizeSupport?: boolean;
  static names(): { [key: string]: string } {
    return {
      md5Support: 'Md5Support',
      sizeSupport: 'SizeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5Support: 'boolean',
      sizeSupport: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport extends $tea.Model {
  TS?: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputMergeListMerge extends $tea.Model {
  duration?: string;
  mergeURL?: string;
  roleArn?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      mergeURL: 'MergeURL',
      roleArn: 'RoleArn',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      mergeURL: 'string',
      roleArn: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputMergeList extends $tea.Model {
  merge?: ListJobResponseBodyJobListJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputMergeListMerge },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputMuxConfigGif extends $tea.Model {
  ditherMode?: string;
  finalDelay?: string;
  isCustomPalette?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputMuxConfigWebp extends $tea.Model {
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputMuxConfig extends $tea.Model {
  gif?: ListJobResponseBodyJobListJobOutputMuxConfigGif;
  segment?: ListJobResponseBodyJobListJobOutputMuxConfigSegment;
  webp?: ListJobResponseBodyJobListJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: ListJobResponseBodyJobListJobOutputMuxConfigGif,
      segment: ListJobResponseBodyJobListJobOutputMuxConfigSegment,
      webp: ListJobResponseBodyJobListJobOutputMuxConfigWebp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputOpeningListOpening extends $tea.Model {
  height?: string;
  start?: string;
  width?: string;
  openUrl?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      start: 'Start',
      width: 'Width',
      openUrl: 'openUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      start: 'string',
      width: 'string',
      openUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputOpeningList extends $tea.Model {
  opening?: ListJobResponseBodyJobListJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputOpeningListOpening },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitle extends $tea.Model {
  map?: string;
  message?: string;
  outSubtitleFile?: ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
      message: 'Message',
      outSubtitleFile: 'OutSubtitleFile',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
      message: 'string',
      outSubtitleFile: ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputOutSubtitleList extends $tea.Model {
  outSubtitle?: ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesFormat extends $tea.Model {
  bitrate?: string;
  duration?: string;
  formatLongName?: string;
  formatName?: string;
  numPrograms?: string;
  numStreams?: string;
  size?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream extends $tea.Model {
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
  samplerate?: string;
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
      samplerate: 'Samplerate',
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
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList extends $tea.Model {
  audioStream?: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
  index?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
  avgBitrate?: string;
  costBandwidth?: string;
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream extends $tea.Model {
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
  networkCost?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  numFrames?: string;
  pixFmt?: string;
  profile?: string;
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
      networkCost: 'NetworkCost',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
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
      networkCost: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList extends $tea.Model {
  videoStream?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputPropertiesStreams extends $tea.Model {
  audioStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList;
  subtitleStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList;
  videoStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputProperties extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileFormat?: string;
  fileSize?: string;
  format?: ListJobResponseBodyJobListJobOutputPropertiesFormat;
  fps?: string;
  height?: string;
  streams?: ListJobResponseBodyJobListJobOutputPropertiesStreams;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: ListJobResponseBodyJobListJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: ListJobResponseBodyJobListJobOutputPropertiesStreams,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput extends $tea.Model {
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

export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $tea.Model {
  charEnc?: string;
  fontName?: string;
  input?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      fontName: 'FontName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      fontName: 'string',
      input: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList extends $tea.Model {
  extSubtitle?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle extends $tea.Model {
  map?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList extends $tea.Model {
  subtitle?: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputSubtitleConfig extends $tea.Model {
  extSubtitleList?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList;
  subtitleList?: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputSuperReso extends $tea.Model {
  isHalfSample?: string;
  static names(): { [key: string]: string } {
    return {
      isHalfSample: 'IsHalfSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHalfSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputTailSlateListTailSlate extends $tea.Model {
  bgColor?: string;
  blendDuration?: string;
  height?: string;
  isMergeAudio?: boolean;
  start?: string;
  tailUrl?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      blendDuration: 'BlendDuration',
      height: 'Height',
      isMergeAudio: 'IsMergeAudio',
      start: 'Start',
      tailUrl: 'TailUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      blendDuration: 'string',
      height: 'string',
      isMergeAudio: 'boolean',
      start: 'string',
      tailUrl: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputTailSlateList extends $tea.Model {
  tailSlate?: ListJobResponseBodyJobListJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputTailSlateListTailSlate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputTransConfig extends $tea.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: ListJobResponseBodyJobListJobOutputVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  height?: string;
  maxFps?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  resoPriority?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: ListJobResponseBodyJobListJobOutputVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxFps: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile extends $tea.Model {
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

export class ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  inputFile?: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile;
  referPos?: string;
  type?: string;
  waterMarkTemplateId?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      inputFile: 'InputFile',
      referPos: 'ReferPos',
      type: 'Type',
      waterMarkTemplateId: 'WaterMarkTemplateId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      inputFile: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile,
      referPos: 'string',
      type: 'string',
      waterMarkTemplateId: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutputWaterMarkList extends $tea.Model {
  waterMark?: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJobOutput extends $tea.Model {
  audio?: ListJobResponseBodyJobListJobOutputAudio;
  audioStreamMap?: string;
  clip?: ListJobResponseBodyJobListJobOutputClip;
  container?: ListJobResponseBodyJobListJobOutputContainer;
  deWatermark?: string;
  encryption?: ListJobResponseBodyJobListJobOutputEncryption;
  m3U8NonStandardSupport?: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport;
  mergeConfigUrl?: string;
  mergeList?: ListJobResponseBodyJobListJobOutputMergeList;
  muxConfig?: ListJobResponseBodyJobListJobOutputMuxConfig;
  openingList?: ListJobResponseBodyJobListJobOutputOpeningList;
  outSubtitleList?: ListJobResponseBodyJobListJobOutputOutSubtitleList;
  outputFile?: ListJobResponseBodyJobListJobOutputOutputFile;
  priority?: string;
  properties?: ListJobResponseBodyJobListJobOutputProperties;
  rotate?: string;
  subtitleConfig?: ListJobResponseBodyJobListJobOutputSubtitleConfig;
  superReso?: ListJobResponseBodyJobListJobOutputSuperReso;
  tailSlateList?: ListJobResponseBodyJobListJobOutputTailSlateList;
  templateId?: string;
  transConfig?: ListJobResponseBodyJobListJobOutputTransConfig;
  userData?: string;
  video?: ListJobResponseBodyJobListJobOutputVideo;
  videoStreamMap?: string;
  waterMarkConfigUrl?: string;
  waterMarkList?: ListJobResponseBodyJobListJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      encryption: 'Encryption',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
      muxConfig: 'MuxConfig',
      openingList: 'OpeningList',
      outSubtitleList: 'OutSubtitleList',
      outputFile: 'OutputFile',
      priority: 'Priority',
      properties: 'Properties',
      rotate: 'Rotate',
      subtitleConfig: 'SubtitleConfig',
      superReso: 'SuperReso',
      tailSlateList: 'TailSlateList',
      templateId: 'TemplateId',
      transConfig: 'TransConfig',
      userData: 'UserData',
      video: 'Video',
      videoStreamMap: 'VideoStreamMap',
      waterMarkConfigUrl: 'WaterMarkConfigUrl',
      waterMarkList: 'WaterMarkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: ListJobResponseBodyJobListJobOutputAudio,
      audioStreamMap: 'string',
      clip: ListJobResponseBodyJobListJobOutputClip,
      container: ListJobResponseBodyJobListJobOutputContainer,
      deWatermark: 'string',
      encryption: ListJobResponseBodyJobListJobOutputEncryption,
      m3U8NonStandardSupport: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: ListJobResponseBodyJobListJobOutputMergeList,
      muxConfig: ListJobResponseBodyJobListJobOutputMuxConfig,
      openingList: ListJobResponseBodyJobListJobOutputOpeningList,
      outSubtitleList: ListJobResponseBodyJobListJobOutputOutSubtitleList,
      outputFile: ListJobResponseBodyJobListJobOutputOutputFile,
      priority: 'string',
      properties: ListJobResponseBodyJobListJobOutputProperties,
      rotate: 'string',
      subtitleConfig: ListJobResponseBodyJobListJobOutputSubtitleConfig,
      superReso: ListJobResponseBodyJobListJobOutputSuperReso,
      tailSlateList: ListJobResponseBodyJobListJobOutputTailSlateList,
      templateId: 'string',
      transConfig: ListJobResponseBodyJobListJobOutputTransConfig,
      userData: 'string',
      video: ListJobResponseBodyJobListJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: ListJobResponseBodyJobListJobOutputWaterMarkList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobListJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  finishTime?: string;
  input?: ListJobResponseBodyJobListJobInput;
  jobId?: string;
  MNSMessageResult?: ListJobResponseBodyJobListJobMNSMessageResult;
  message?: string;
  output?: ListJobResponseBodyJobListJobOutput;
  percent?: number;
  pipelineId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      output: 'Output',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      finishTime: 'string',
      input: ListJobResponseBodyJobListJobInput,
      jobId: 'string',
      MNSMessageResult: ListJobResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      output: ListJobResponseBodyJobListJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyJobList extends $tea.Model {
  job?: ListJobResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity extends $tea.Model {
  code?: string;
  endTime?: string;
  jobId?: string;
  MNSMessageResult?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult;
  message?: string;
  name?: string;
  startTime?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      jobId: 'string',
      MNSMessageResult: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult,
      message: 'string',
      name: 'string',
      startTime: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList extends $tea.Model {
  activity?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity[];
  static names(): { [key: string]: string } {
    return {
      activity: 'Activity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: { 'type': 'array', 'itemType': ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile extends $tea.Model {
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

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput extends $tea.Model {
  inputFile?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution extends $tea.Model {
  activityList?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList;
  creationTime?: string;
  input?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput;
  mediaId?: string;
  mediaWorkflowId?: string;
  name?: string;
  runId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      activityList: 'ActivityList',
      creationTime: 'CreationTime',
      input: 'Input',
      mediaId: 'MediaId',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      runId: 'RunId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityList: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList,
      creationTime: 'string',
      input: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput,
      mediaId: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      runId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList extends $tea.Model {
  mediaWorkflowExecution?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecution: 'MediaWorkflowExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecution: { 'type': 'array', 'itemType': ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControlCrop extends $tea.Model {
  height?: string;
  left?: string;
  mode?: string;
  top?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      mode: 'Mode',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      left: 'string',
      mode: 'string',
      top: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl extends $tea.Model {
  crop?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControlCrop;
  deinterlace?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      deinterlace: 'Deinterlace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControlCrop,
      deinterlace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl extends $tea.Model {
  methodStreaming?: string;
  rateQuality?: string;
  static names(): { [key: string]: string } {
    return {
      methodStreaming: 'MethodStreaming',
      rateQuality: 'RateQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodStreaming: 'string',
      rateQuality: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig extends $tea.Model {
  propertiesControl?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl;
  qualityControl?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl;
  static names(): { [key: string]: string } {
    return {
      propertiesControl: 'PropertiesControl',
      qualityControl: 'QualityControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertiesControl: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl,
      qualityControl: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile extends $tea.Model {
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer extends $tea.Model {
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

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigGif extends $tea.Model {
  finalDelay?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      finalDelay: 'FinalDelay',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalDelay: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig extends $tea.Model {
  gif?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigGif;
  segment?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigGif,
      segment: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig extends $tea.Model {
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  height?: string;
  maxrate?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxrate: 'Maxrate',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxrate: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplate extends $tea.Model {
  audio?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio;
  container?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer;
  id?: string;
  muxConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig;
  name?: string;
  state?: string;
  transConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig;
  video?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio,
      container: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer,
      id: 'string',
      muxConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig,
      video: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList extends $tea.Model {
  template?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob extends $tea.Model {
  analysisConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig;
  code?: string;
  creationTime?: string;
  id?: string;
  inputFile?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile;
  MNSMessageResult?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult;
  message?: string;
  percent?: number;
  pipelineId?: string;
  priority?: string;
  state?: string;
  templateList?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      analysisConfig: 'AnalysisConfig',
      code: 'Code',
      creationTime: 'CreationTime',
      id: 'Id',
      inputFile: 'InputFile',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      state: 'State',
      templateList: 'TemplateList',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig,
      code: 'string',
      creationTime: 'string',
      id: 'string',
      inputFile: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile,
      MNSMessageResult: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult,
      message: 'string',
      percent: 'number',
      pipelineId: 'string',
      priority: 'string',
      state: 'string',
      templateList: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyAnalysisJobList extends $tea.Model {
  analysisJob?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob[];
  static names(): { [key: string]: string } {
    return {
      analysisJob: 'AnalysisJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJob: { 'type': 'array', 'itemType': QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds extends $tea.Model {
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

export class QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  delType?: string;
  finishTime?: string;
  fpDBId?: string;
  id?: string;
  message?: string;
  pipelineId?: string;
  status?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      delType: 'DelType',
      finishTime: 'FinishTime',
      fpDBId: 'FpDBId',
      id: 'Id',
      message: 'Message',
      pipelineId: 'PipelineId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      delType: 'string',
      finishTime: 'string',
      fpDBId: 'string',
      id: 'string',
      message: 'string',
      pipelineId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList extends $tea.Model {
  fpDBDeleteJob?: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob[];
  static names(): { [key: string]: string } {
    return {
      fpDBDeleteJob: 'FpDBDeleteJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBDeleteJob: { 'type': 'array', 'itemType': QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpDBDeleteJobListResponseBodyNonExistIds extends $tea.Model {
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

export class QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  fileIds?: string;
  finishTime?: string;
  fpDBId?: string;
  id?: string;
  message?: string;
  pipelineId?: string;
  status?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      fileIds: 'FileIds',
      finishTime: 'FinishTime',
      fpDBId: 'FpDBId',
      id: 'Id',
      message: 'Message',
      pipelineId: 'PipelineId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      fileIds: 'string',
      finishTime: 'string',
      fpDBId: 'string',
      id: 'string',
      message: 'string',
      pipelineId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList extends $tea.Model {
  fpFileDeleteJob?: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob[];
  static names(): { [key: string]: string } {
    return {
      fpFileDeleteJob: 'FpFileDeleteJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpFileDeleteJob: { 'type': 'array', 'itemType': QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpFileDeleteJobListResponseBodyNonExistIds extends $tea.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig extends $tea.Model {
  fpDBId?: string;
  primaryKey?: string;
  saveType?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBId: 'FpDBId',
      primaryKey: 'PrimaryKey',
      saveType: 'SaveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBId: 'string',
      primaryKey: 'string',
      saveType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication extends $tea.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput extends $tea.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice extends $tea.Model {
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication,
      input: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput,
      similarity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices extends $tea.Model {
  fpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      fpShotSlice: 'FpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShot extends $tea.Model {
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices;
  primaryKey?: string;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotSlices: 'FpShotSlices',
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices,
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots extends $tea.Model {
  fpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShot[];
  static names(): { [key: string]: string } {
    return {
      fpShot: 'FpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication extends $tea.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput extends $tea.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice extends $tea.Model {
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication,
      input: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput,
      similarity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices extends $tea.Model {
  fpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      fpShotSlice: 'FpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot extends $tea.Model {
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices;
  primaryKey?: string;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotSlices: 'FpShotSlices',
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices,
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots extends $tea.Model {
  fpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot[];
  static names(): { [key: string]: string } {
    return {
      fpShot: 'FpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment extends $tea.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice extends $tea.Model {
  duplicationText?: string;
  inputFragment?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment;
  inputText?: string;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplicationText: 'DuplicationText',
      inputFragment: 'InputFragment',
      inputText: 'InputText',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplicationText: 'string',
      inputFragment: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment,
      inputText: 'string',
      similarity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices extends $tea.Model {
  textFpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      textFpShotSlice: 'TextFpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot extends $tea.Model {
  primaryKey?: string;
  similarity?: string;
  textFpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices;
  static names(): { [key: string]: string } {
    return {
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
      textFpShotSlices: 'TextFpShotSlices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryKey: 'string',
      similarity: 'string',
      textFpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots extends $tea.Model {
  textFpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot[];
  static names(): { [key: string]: string } {
    return {
      textFpShot: 'TextFpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult extends $tea.Model {
  audioFpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots;
  fpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots;
  textFpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots;
  static names(): { [key: string]: string } {
    return {
      audioFpShots: 'AudioFpShots',
      fpShots: 'FpShots',
      textFpShots: 'TextFpShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots,
      fpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots,
      textFpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile extends $tea.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  duration?: number;
  fileId?: string;
  finishTime?: string;
  fpShotConfig?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig;
  fpShotResult?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult;
  id?: string;
  input?: string;
  inputFile?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile;
  message?: string;
  pipelineId?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      duration: 'Duration',
      fileId: 'FileId',
      finishTime: 'FinishTime',
      fpShotConfig: 'FpShotConfig',
      fpShotResult: 'FpShotResult',
      id: 'Id',
      input: 'Input',
      inputFile: 'InputFile',
      message: 'Message',
      pipelineId: 'PipelineId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      duration: 'number',
      fileId: 'string',
      finishTime: 'string',
      fpShotConfig: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig,
      fpShotResult: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult,
      id: 'string',
      input: 'string',
      inputFile: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile,
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobList extends $tea.Model {
  fpShotJob?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJob[];
  static names(): { [key: string]: string } {
    return {
      fpShotJob: 'FpShotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotJob: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyNonExistIds extends $tea.Model {
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

export class QueryJobListResponseBodyJobListJobInput extends $tea.Model {
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

export class QueryJobListResponseBodyJobListJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputAudioVolume extends $tea.Model {
  level?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  samplerate?: string;
  volume?: QueryJobListResponseBodyJobListJobOutputAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
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
      qscale: 'string',
      samplerate: 'string',
      volume: QueryJobListResponseBodyJobListJobOutputAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputClipTimeSpan extends $tea.Model {
  duration?: string;
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      seek: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputClip extends $tea.Model {
  timeSpan?: QueryJobListResponseBodyJobListJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: QueryJobListResponseBodyJobListJobOutputClipTimeSpan,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputContainer extends $tea.Model {
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

export class QueryJobListResponseBodyJobListJobOutputEncryption extends $tea.Model {
  id?: string;
  key?: string;
  keyType?: string;
  keyUri?: string;
  skipCnt?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      keyType: 'KeyType',
      keyUri: 'KeyUri',
      skipCnt: 'SkipCnt',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      keyType: 'string',
      keyUri: 'string',
      skipCnt: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS extends $tea.Model {
  md5Support?: boolean;
  sizeSupport?: boolean;
  static names(): { [key: string]: string } {
    return {
      md5Support: 'Md5Support',
      sizeSupport: 'SizeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5Support: 'boolean',
      sizeSupport: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport extends $tea.Model {
  TS?: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMergeListMerge extends $tea.Model {
  duration?: string;
  mergeURL?: string;
  roleArn?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      mergeURL: 'MergeURL',
      roleArn: 'RoleArn',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      mergeURL: 'string',
      roleArn: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMergeList extends $tea.Model {
  merge?: QueryJobListResponseBodyJobListJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputMergeListMerge },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo extends $tea.Model {
  code?: string;
  downgradePolicy?: string;
  duration?: number;
  enable?: string;
  message?: string;
  realSpeed?: number;
  settingSpeed?: number;
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downgradePolicy: 'DowngradePolicy',
      duration: 'Duration',
      enable: 'Enable',
      message: 'Message',
      realSpeed: 'RealSpeed',
      settingSpeed: 'SettingSpeed',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downgradePolicy: 'string',
      duration: 'number',
      enable: 'string',
      message: 'string',
      realSpeed: 'number',
      settingSpeed: 'number',
      timeCost: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfigGif extends $tea.Model {
  ditherMode?: string;
  finalDelay?: string;
  isCustomPalette?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfigWebp extends $tea.Model {
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfig extends $tea.Model {
  gif?: QueryJobListResponseBodyJobListJobOutputMuxConfigGif;
  segment?: QueryJobListResponseBodyJobListJobOutputMuxConfigSegment;
  webp?: QueryJobListResponseBodyJobListJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryJobListResponseBodyJobListJobOutputMuxConfigGif,
      segment: QueryJobListResponseBodyJobListJobOutputMuxConfigSegment,
      webp: QueryJobListResponseBodyJobListJobOutputMuxConfigWebp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOpeningListOpening extends $tea.Model {
  height?: string;
  start?: string;
  width?: string;
  openUrl?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      start: 'Start',
      width: 'Width',
      openUrl: 'openUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      start: 'string',
      width: 'string',
      openUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOpeningList extends $tea.Model {
  opening?: QueryJobListResponseBodyJobListJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputOpeningListOpening },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle extends $tea.Model {
  map?: string;
  message?: string;
  outSubtitleFile?: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
      message: 'Message',
      outSubtitleFile: 'OutSubtitleFile',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
      message: 'string',
      outSubtitleFile: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutSubtitleList extends $tea.Model {
  outSubtitle?: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesFormat extends $tea.Model {
  bitrate?: string;
  duration?: string;
  formatLongName?: string;
  formatName?: string;
  numPrograms?: string;
  numStreams?: string;
  size?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo extends $tea.Model {
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

export class QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos extends $tea.Model {
  sourceLogo?: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo[];
  static names(): { [key: string]: string } {
    return {
      sourceLogo: 'SourceLogo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLogo: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream extends $tea.Model {
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
  samplerate?: string;
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
      samplerate: 'Samplerate',
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
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList extends $tea.Model {
  audioStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
  index?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
  avgBitrate?: string;
  costBandwidth?: string;
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream extends $tea.Model {
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
  networkCost?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  numFrames?: string;
  pixFmt?: string;
  profile?: string;
  sar?: string;
  startTime?: string;
  timebase?: string;
  width?: string;
  bitsPerRawSample?: string;
  colorPrimaries?: string;
  colorTransfer?: string;
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
      networkCost: 'NetworkCost',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      sar: 'Sar',
      startTime: 'StartTime',
      timebase: 'Timebase',
      width: 'Width',
      bitsPerRawSample: 'bitsPerRawSample',
      colorPrimaries: 'colorPrimaries',
      colorTransfer: 'colorTransfer',
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
      networkCost: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
      bitsPerRawSample: 'string',
      colorPrimaries: 'string',
      colorTransfer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList extends $tea.Model {
  videoStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreams extends $tea.Model {
  audioStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList;
  subtitleStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList;
  videoStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputProperties extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileFormat?: string;
  fileSize?: string;
  format?: QueryJobListResponseBodyJobListJobOutputPropertiesFormat;
  fps?: string;
  height?: string;
  sourceLogos?: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos;
  streams?: QueryJobListResponseBodyJobListJobOutputPropertiesStreams;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      sourceLogos: 'SourceLogos',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: QueryJobListResponseBodyJobListJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      sourceLogos: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos,
      streams: QueryJobListResponseBodyJobListJobOutputPropertiesStreams,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput extends $tea.Model {
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

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $tea.Model {
  charEnc?: string;
  fontName?: string;
  input?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      fontName: 'FontName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      fontName: 'string',
      input: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList extends $tea.Model {
  extSubtitle?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle extends $tea.Model {
  map?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList extends $tea.Model {
  subtitle?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfig extends $tea.Model {
  extSubtitleList?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList;
  subtitleList?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSuperReso extends $tea.Model {
  isHalfSample?: string;
  static names(): { [key: string]: string } {
    return {
      isHalfSample: 'IsHalfSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHalfSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate extends $tea.Model {
  bgColor?: string;
  blendDuration?: string;
  height?: string;
  isMergeAudio?: boolean;
  start?: string;
  tailUrl?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      blendDuration: 'BlendDuration',
      height: 'Height',
      isMergeAudio: 'IsMergeAudio',
      start: 'Start',
      tailUrl: 'TailUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      blendDuration: 'string',
      height: 'string',
      isMergeAudio: 'boolean',
      start: 'string',
      tailUrl: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputTailSlateList extends $tea.Model {
  tailSlate?: QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputTransConfig extends $tea.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  height?: string;
  maxFps?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  resoPriority?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxFps: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile extends $tea.Model {
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

export class QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  inputFile?: QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile;
  referPos?: string;
  type?: string;
  waterMarkTemplateId?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      inputFile: 'InputFile',
      referPos: 'ReferPos',
      type: 'Type',
      waterMarkTemplateId: 'WaterMarkTemplateId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      inputFile: QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile,
      referPos: 'string',
      type: 'string',
      waterMarkTemplateId: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputWaterMarkList extends $tea.Model {
  waterMark?: QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutput extends $tea.Model {
  audio?: QueryJobListResponseBodyJobListJobOutputAudio;
  audioStreamMap?: string;
  clip?: QueryJobListResponseBodyJobListJobOutputClip;
  container?: QueryJobListResponseBodyJobListJobOutputContainer;
  deWatermark?: string;
  encryption?: QueryJobListResponseBodyJobListJobOutputEncryption;
  extendData?: string;
  m3U8NonStandardSupport?: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport;
  mergeConfigUrl?: string;
  mergeList?: QueryJobListResponseBodyJobListJobOutputMergeList;
  multiSpeedInfo?: QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo;
  muxConfig?: QueryJobListResponseBodyJobListJobOutputMuxConfig;
  openingList?: QueryJobListResponseBodyJobListJobOutputOpeningList;
  outSubtitleList?: QueryJobListResponseBodyJobListJobOutputOutSubtitleList;
  outputFile?: QueryJobListResponseBodyJobListJobOutputOutputFile;
  priority?: string;
  properties?: QueryJobListResponseBodyJobListJobOutputProperties;
  rotate?: string;
  subtitleConfig?: QueryJobListResponseBodyJobListJobOutputSubtitleConfig;
  superReso?: QueryJobListResponseBodyJobListJobOutputSuperReso;
  tailSlateList?: QueryJobListResponseBodyJobListJobOutputTailSlateList;
  templateId?: string;
  transConfig?: QueryJobListResponseBodyJobListJobOutputTransConfig;
  userData?: string;
  video?: QueryJobListResponseBodyJobListJobOutputVideo;
  videoStreamMap?: string;
  waterMarkConfigUrl?: string;
  waterMarkList?: QueryJobListResponseBodyJobListJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      encryption: 'Encryption',
      extendData: 'ExtendData',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
      multiSpeedInfo: 'MultiSpeedInfo',
      muxConfig: 'MuxConfig',
      openingList: 'OpeningList',
      outSubtitleList: 'OutSubtitleList',
      outputFile: 'OutputFile',
      priority: 'Priority',
      properties: 'Properties',
      rotate: 'Rotate',
      subtitleConfig: 'SubtitleConfig',
      superReso: 'SuperReso',
      tailSlateList: 'TailSlateList',
      templateId: 'TemplateId',
      transConfig: 'TransConfig',
      userData: 'UserData',
      video: 'Video',
      videoStreamMap: 'VideoStreamMap',
      waterMarkConfigUrl: 'WaterMarkConfigUrl',
      waterMarkList: 'WaterMarkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: QueryJobListResponseBodyJobListJobOutputAudio,
      audioStreamMap: 'string',
      clip: QueryJobListResponseBodyJobListJobOutputClip,
      container: QueryJobListResponseBodyJobListJobOutputContainer,
      deWatermark: 'string',
      encryption: QueryJobListResponseBodyJobListJobOutputEncryption,
      extendData: 'string',
      m3U8NonStandardSupport: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: QueryJobListResponseBodyJobListJobOutputMergeList,
      multiSpeedInfo: QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo,
      muxConfig: QueryJobListResponseBodyJobListJobOutputMuxConfig,
      openingList: QueryJobListResponseBodyJobListJobOutputOpeningList,
      outSubtitleList: QueryJobListResponseBodyJobListJobOutputOutSubtitleList,
      outputFile: QueryJobListResponseBodyJobListJobOutputOutputFile,
      priority: 'string',
      properties: QueryJobListResponseBodyJobListJobOutputProperties,
      rotate: 'string',
      subtitleConfig: QueryJobListResponseBodyJobListJobOutputSubtitleConfig,
      superReso: QueryJobListResponseBodyJobListJobOutputSuperReso,
      tailSlateList: QueryJobListResponseBodyJobListJobOutputTailSlateList,
      templateId: 'string',
      transConfig: QueryJobListResponseBodyJobListJobOutputTransConfig,
      userData: 'string',
      video: QueryJobListResponseBodyJobListJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: QueryJobListResponseBodyJobListJobOutputWaterMarkList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  finishTime?: string;
  input?: QueryJobListResponseBodyJobListJobInput;
  jobId?: string;
  MNSMessageResult?: QueryJobListResponseBodyJobListJobMNSMessageResult;
  message?: string;
  output?: QueryJobListResponseBodyJobListJobOutput;
  percent?: number;
  pipelineId?: string;
  state?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      output: 'Output',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      state: 'State',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      finishTime: 'string',
      input: QueryJobListResponseBodyJobListJobInput,
      jobId: 'string',
      MNSMessageResult: QueryJobListResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      output: QueryJobListResponseBodyJobListJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobList extends $tea.Model {
  job?: QueryJobListResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyNonExistJobIds extends $tea.Model {
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult extends $tea.Model {
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList extends $tea.Model {
  audioDetailResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult[];
  static names(): { [key: string]: string } {
    return {
      audioDetailResult: 'AudioDetailResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDetailResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult extends $tea.Model {
  audioDetailResultList?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList;
  label?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      audioDetailResultList: 'AudioDetailResultList',
      label: 'Label',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDetailResultList: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList,
      label: 'string',
      suggestion: 'string',
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
  audioCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult;
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
      audioCensorResult: 'AudioCensorResult',
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
      audioCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult,
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

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobAudioCensorResult extends $tea.Model {
  label?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      suggestion: 'string',
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
  audioCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobAudioCensorResult;
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
      audioCensorResult: 'AudioCensorResult',
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
      audioCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobAudioCensorResult,
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

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobInput extends $tea.Model {
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

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesFormat extends $tea.Model {
  bitrate?: string;
  duration?: string;
  formatLongName?: string;
  formatName?: string;
  numPrograms?: string;
  numStreams?: string;
  size?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream extends $tea.Model {
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
  samplerate?: string;
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
      samplerate: 'Samplerate',
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
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList extends $tea.Model {
  audioStream?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
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

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
  avgBitrate?: string;
  costBandwidth?: string;
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStream extends $tea.Model {
  avgFPS?: string;
  bitrate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  colorPrimaries?: string;
  colorRange?: string;
  colorTransfer?: string;
  dar?: string;
  duration?: string;
  fps?: string;
  hasBFrames?: string;
  height?: string;
  index?: string;
  lang?: string;
  level?: string;
  networkCost?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
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
      colorPrimaries: 'ColorPrimaries',
      colorRange: 'ColorRange',
      colorTransfer: 'ColorTransfer',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      networkCost: 'NetworkCost',
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
      colorPrimaries: 'string',
      colorRange: 'string',
      colorTransfer: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      networkCost: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
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

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList extends $tea.Model {
  videoStream?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams extends $tea.Model {
  audioStreamList?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList;
  subtitleStreamList?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList;
  videoStreamList?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList,
      subtitleStreamList: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList,
      videoStreamList: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobProperties extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileFormat?: string;
  fileSize?: string;
  format?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesFormat;
  fps?: string;
  height?: string;
  streams?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJob extends $tea.Model {
  async?: boolean;
  code?: string;
  creationTime?: string;
  input?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobInput;
  jobId?: string;
  MNSMessageResult?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobMNSMessageResult;
  message?: string;
  pipelineId?: string;
  properties?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobProperties;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      code: 'Code',
      creationTime: 'CreationTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      properties: 'Properties',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      creationTime: 'string',
      input: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobInput,
      jobId: 'string',
      MNSMessageResult: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      properties: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobProperties,
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyMediaInfoJobList extends $tea.Model {
  mediaInfoJob?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJob[];
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaInfoJobListResponseBodyNonExistMediaInfoJobIds extends $tea.Model {
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

export class QueryMediaListResponseBodyMediaListMediaFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoFormat extends $tea.Model {
  bitrate?: string;
  duration?: string;
  formatLongName?: string;
  formatName?: string;
  numPrograms?: string;
  numStreams?: string;
  size?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream extends $tea.Model {
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
  samplerate?: string;
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
      samplerate: 'Samplerate',
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
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList extends $tea.Model {
  audioStream?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
  index?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
  avgBitrate?: string;
  costBandwidth?: string;
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream extends $tea.Model {
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
  networkCost?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost;
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
      networkCost: 'NetworkCost',
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
      networkCost: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost,
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList extends $tea.Model {
  videoStream?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreams extends $tea.Model {
  audioStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList;
  subtitleStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList;
  videoStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList,
      subtitleStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList,
      videoStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfo extends $tea.Model {
  format?: QueryMediaListResponseBodyMediaListMediaMediaInfoFormat;
  streams?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreams;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: QueryMediaListResponseBodyMediaListMediaMediaInfoFormat,
      streams: QueryMediaListResponseBodyMediaListMediaMediaInfoStreams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaPlayListPlayFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaPlayListPlay extends $tea.Model {
  activityName?: string;
  bitrate?: string;
  duration?: string;
  encryption?: string;
  file?: QueryMediaListResponseBodyMediaListMediaPlayListPlayFile;
  format?: string;
  fps?: string;
  height?: string;
  mediaWorkflowId?: string;
  mediaWorkflowName?: string;
  size?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      bitrate: 'Bitrate',
      duration: 'Duration',
      encryption: 'Encryption',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      size: 'Size',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      bitrate: 'string',
      duration: 'string',
      encryption: 'string',
      file: QueryMediaListResponseBodyMediaListMediaPlayListPlayFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      size: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaPlayList extends $tea.Model {
  play?: QueryMediaListResponseBodyMediaListMediaPlayListPlay[];
  static names(): { [key: string]: string } {
    return {
      play: 'Play',
    };
  }

  static types(): { [key: string]: any } {
    return {
      play: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaPlayListPlay },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaRunIdList extends $tea.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshotFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot extends $tea.Model {
  activityName?: string;
  count?: string;
  file?: QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshotFile;
  mediaWorkflowId?: string;
  mediaWorkflowName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      count: 'Count',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      count: 'string',
      file: QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshotFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSnapshotList extends $tea.Model {
  snapshot?: QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSummaryListSummaryFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSummaryListSummary extends $tea.Model {
  activityName?: string;
  file?: QueryMediaListResponseBodyMediaListMediaSummaryListSummaryFile;
  mediaWorkflowId?: string;
  mediaWorkflowName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      file: QueryMediaListResponseBodyMediaListMediaSummaryListSummaryFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSummaryList extends $tea.Model {
  summary?: QueryMediaListResponseBodyMediaListMediaSummaryListSummary[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaSummaryListSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaTags extends $tea.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMedia extends $tea.Model {
  bitrate?: string;
  cateId?: number;
  censorState?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: string;
  file?: QueryMediaListResponseBodyMediaListMediaFile;
  format?: string;
  fps?: string;
  height?: string;
  mediaId?: string;
  mediaInfo?: QueryMediaListResponseBodyMediaListMediaMediaInfo;
  playList?: QueryMediaListResponseBodyMediaListMediaPlayList;
  publishState?: string;
  runIdList?: QueryMediaListResponseBodyMediaListMediaRunIdList;
  size?: string;
  snapshotList?: QueryMediaListResponseBodyMediaListMediaSnapshotList;
  summaryList?: QueryMediaListResponseBodyMediaListMediaSummaryList;
  tags?: QueryMediaListResponseBodyMediaListMediaTags;
  title?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      cateId: 'CateId',
      censorState: 'CensorState',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaId: 'MediaId',
      mediaInfo: 'MediaInfo',
      playList: 'PlayList',
      publishState: 'PublishState',
      runIdList: 'RunIdList',
      size: 'Size',
      snapshotList: 'SnapshotList',
      summaryList: 'SummaryList',
      tags: 'Tags',
      title: 'Title',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      cateId: 'number',
      censorState: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'string',
      file: QueryMediaListResponseBodyMediaListMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      mediaInfo: QueryMediaListResponseBodyMediaListMediaMediaInfo,
      playList: QueryMediaListResponseBodyMediaListMediaPlayList,
      publishState: 'string',
      runIdList: QueryMediaListResponseBodyMediaListMediaRunIdList,
      size: 'string',
      snapshotList: QueryMediaListResponseBodyMediaListMediaSnapshotList,
      summaryList: QueryMediaListResponseBodyMediaListMediaSummaryList,
      tags: QueryMediaListResponseBodyMediaListMediaTags,
      title: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaList extends $tea.Model {
  media?: QueryMediaListResponseBodyMediaListMedia[];
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMedia },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyNonExistMediaIds extends $tea.Model {
  mediaId?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoFormat extends $tea.Model {
  bitrate?: string;
  duration?: string;
  formatLongName?: string;
  formatName?: string;
  numPrograms?: string;
  numStreams?: string;
  size?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream extends $tea.Model {
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
  samplerate?: string;
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
      samplerate: 'Samplerate',
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
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList extends $tea.Model {
  audioStream?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
  index?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
  avgBitrate?: string;
  costBandwidth?: string;
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream extends $tea.Model {
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
  networkCost?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost;
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
      networkCost: 'NetworkCost',
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
      networkCost: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost,
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

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList extends $tea.Model {
  videoStream?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreams extends $tea.Model {
  audioStreamList?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList;
  subtitleStreamList?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList;
  videoStreamList?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList,
      subtitleStreamList: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList,
      videoStreamList: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfo extends $tea.Model {
  format?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoFormat;
  streams?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreams;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoFormat,
      streams: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaPlayListPlayFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaPlayListPlay extends $tea.Model {
  activityName?: string;
  bitrate?: string;
  duration?: string;
  encryption?: string;
  file?: QueryMediaListByURLResponseBodyMediaListMediaPlayListPlayFile;
  format?: string;
  fps?: string;
  height?: string;
  mediaWorkflowId?: string;
  mediaWorkflowName?: string;
  size?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      bitrate: 'Bitrate',
      duration: 'Duration',
      encryption: 'Encryption',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      size: 'Size',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      bitrate: 'string',
      duration: 'string',
      encryption: 'string',
      file: QueryMediaListByURLResponseBodyMediaListMediaPlayListPlayFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      size: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaPlayList extends $tea.Model {
  play?: QueryMediaListByURLResponseBodyMediaListMediaPlayListPlay[];
  static names(): { [key: string]: string } {
    return {
      play: 'Play',
    };
  }

  static types(): { [key: string]: any } {
    return {
      play: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaPlayListPlay },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaRunIdList extends $tea.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshotFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshot extends $tea.Model {
  activityName?: string;
  count?: string;
  file?: QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshotFile;
  mediaWorkflowId?: string;
  mediaWorkflowName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      count: 'Count',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      count: 'string',
      file: QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshotFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaSnapshotList extends $tea.Model {
  snapshot?: QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummaryFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummary extends $tea.Model {
  activityName?: string;
  file?: QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummaryFile;
  mediaWorkflowId?: string;
  mediaWorkflowName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      file: QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummaryFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaSummaryList extends $tea.Model {
  summary?: QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummary[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMediaTags extends $tea.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaListMedia extends $tea.Model {
  bitrate?: string;
  cateId?: number;
  censorState?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: string;
  file?: QueryMediaListByURLResponseBodyMediaListMediaFile;
  format?: string;
  fps?: string;
  height?: string;
  mediaId?: string;
  mediaInfo?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfo;
  playList?: QueryMediaListByURLResponseBodyMediaListMediaPlayList;
  publishState?: string;
  runIdList?: QueryMediaListByURLResponseBodyMediaListMediaRunIdList;
  size?: string;
  snapshotList?: QueryMediaListByURLResponseBodyMediaListMediaSnapshotList;
  summaryList?: QueryMediaListByURLResponseBodyMediaListMediaSummaryList;
  tags?: QueryMediaListByURLResponseBodyMediaListMediaTags;
  title?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      cateId: 'CateId',
      censorState: 'CensorState',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaId: 'MediaId',
      mediaInfo: 'MediaInfo',
      playList: 'PlayList',
      publishState: 'PublishState',
      runIdList: 'RunIdList',
      size: 'Size',
      snapshotList: 'SnapshotList',
      summaryList: 'SummaryList',
      tags: 'Tags',
      title: 'Title',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      cateId: 'number',
      censorState: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'string',
      file: QueryMediaListByURLResponseBodyMediaListMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      mediaInfo: QueryMediaListByURLResponseBodyMediaListMediaMediaInfo,
      playList: QueryMediaListByURLResponseBodyMediaListMediaPlayList,
      publishState: 'string',
      runIdList: QueryMediaListByURLResponseBodyMediaListMediaRunIdList,
      size: 'string',
      snapshotList: QueryMediaListByURLResponseBodyMediaListMediaSnapshotList,
      summaryList: QueryMediaListByURLResponseBodyMediaListMediaSummaryList,
      tags: QueryMediaListByURLResponseBodyMediaListMediaTags,
      title: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyMediaList extends $tea.Model {
  media?: QueryMediaListByURLResponseBodyMediaListMedia[];
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMedia },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListByURLResponseBodyNonExistFileURLs extends $tea.Model {
  fileURL?: string[];
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity extends $tea.Model {
  code?: string;
  endTime?: string;
  jobId?: string;
  MNSMessageResult?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult;
  message?: string;
  name?: string;
  startTime?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      jobId: 'string',
      MNSMessageResult: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult,
      message: 'string',
      name: 'string',
      startTime: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList extends $tea.Model {
  activity?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity[];
  static names(): { [key: string]: string } {
    return {
      activity: 'Activity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: { 'type': 'array', 'itemType': QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile extends $tea.Model {
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

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput extends $tea.Model {
  inputFile?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution extends $tea.Model {
  activityList?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList;
  creationTime?: string;
  input?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput;
  mediaId?: string;
  mediaWorkflowId?: string;
  name?: string;
  runId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      activityList: 'ActivityList',
      creationTime: 'CreationTime',
      input: 'Input',
      mediaId: 'MediaId',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      runId: 'RunId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityList: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList,
      creationTime: 'string',
      input: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput,
      mediaId: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      runId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList extends $tea.Model {
  mediaWorkflowExecution?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecution: 'MediaWorkflowExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecution: { 'type': 'array', 'itemType': QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds extends $tea.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowListResponseBodyMediaWorkflowList extends $tea.Model {
  mediaWorkflow?: QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: { 'type': 'array', 'itemType': QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds extends $tea.Model {
  mediaWorkflowId?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyNonExistPids extends $tea.Model {
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

export class QueryPipelineListResponseBodyPipelineListPipelineExtendConfig extends $tea.Model {
  isBoostNew?: boolean;
  maxMultiSpeed?: number;
  multiSpeedDowngradePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      isBoostNew: 'IsBoostNew',
      maxMultiSpeed: 'MaxMultiSpeed',
      multiSpeedDowngradePolicy: 'MultiSpeedDowngradePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBoostNew: 'boolean',
      maxMultiSpeed: 'number',
      multiSpeedDowngradePolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig extends $tea.Model {
  mqTag?: string;
  mqTopic?: string;
  queueName?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      mqTag: 'MqTag',
      mqTopic: 'MqTopic',
      queueName: 'QueueName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTag: 'string',
      mqTopic: 'string',
      queueName: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipeline extends $tea.Model {
  extendConfig?: QueryPipelineListResponseBodyPipelineListPipelineExtendConfig;
  id?: string;
  name?: string;
  notifyConfig?: QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig;
  quotaAllocate?: number;
  role?: string;
  speed?: string;
  speedLevel?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfig: 'ExtendConfig',
      id: 'Id',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      quotaAllocate: 'QuotaAllocate',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfig: QueryPipelineListResponseBodyPipelineListPipelineExtendConfig,
      id: 'string',
      name: 'string',
      notifyConfig: QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineList extends $tea.Model {
  pipeline?: QueryPipelineListResponseBodyPipelineListPipeline[];
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: { 'type': 'array', 'itemType': QueryPipelineListResponseBodyPipelineListPipeline },
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

export class QuerySmarttagTemplateListResponseBodyTemplatesTemplate extends $tea.Model {
  analyseTypes?: string;
  faceCategoryIds?: string;
  faceCustomParamsConfig?: string;
  industry?: string;
  isDefault?: boolean;
  keywordConfig?: string;
  knowledgeConfig?: string;
  labelType?: string;
  labelVersion?: string;
  landmarkGroupIds?: string;
  objectGroupIds?: string;
  scene?: string;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      analyseTypes: 'AnalyseTypes',
      faceCategoryIds: 'FaceCategoryIds',
      faceCustomParamsConfig: 'FaceCustomParamsConfig',
      industry: 'Industry',
      isDefault: 'IsDefault',
      keywordConfig: 'KeywordConfig',
      knowledgeConfig: 'KnowledgeConfig',
      labelType: 'LabelType',
      labelVersion: 'LabelVersion',
      landmarkGroupIds: 'LandmarkGroupIds',
      objectGroupIds: 'ObjectGroupIds',
      scene: 'Scene',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyseTypes: 'string',
      faceCategoryIds: 'string',
      faceCustomParamsConfig: 'string',
      industry: 'string',
      isDefault: 'boolean',
      keywordConfig: 'string',
      knowledgeConfig: 'string',
      labelType: 'string',
      labelVersion: 'string',
      landmarkGroupIds: 'string',
      objectGroupIds: 'string',
      scene: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagTemplateListResponseBodyTemplates extends $tea.Model {
  template?: QuerySmarttagTemplateListResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QuerySmarttagTemplateListResponseBodyTemplatesTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds extends $tea.Model {
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

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut extends $tea.Model {
  cellHeight?: string;
  cellSelStep?: string;
  cellWidth?: string;
  color?: string;
  columns?: string;
  isKeepCellPic?: string;
  lines?: string;
  margin?: string;
  padding?: string;
  static names(): { [key: string]: string } {
    return {
      cellHeight: 'CellHeight',
      cellSelStep: 'CellSelStep',
      cellWidth: 'CellWidth',
      color: 'Color',
      columns: 'Columns',
      isKeepCellPic: 'IsKeepCellPic',
      lines: 'Lines',
      margin: 'Margin',
      padding: 'Padding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellHeight: 'string',
      cellSelStep: 'string',
      cellWidth: 'string',
      color: 'string',
      columns: 'string',
      isKeepCellPic: 'string',
      lines: 'string',
      margin: 'string',
      padding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray extends $tea.Model {
  timePointList?: number[];
  static names(): { [key: string]: string } {
    return {
      timePointList: 'TimePointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePointList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig extends $tea.Model {
  frameType?: string;
  height?: string;
  interval?: string;
  num?: string;
  outputFile?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile;
  tileOut?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut;
  tileOutputFile?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile;
  time?: string;
  timeArray?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      frameType: 'FrameType',
      height: 'Height',
      interval: 'Interval',
      num: 'Num',
      outputFile: 'OutputFile',
      tileOut: 'TileOut',
      tileOutputFile: 'TileOutputFile',
      time: 'Time',
      timeArray: 'TimeArray',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameType: 'string',
      height: 'string',
      interval: 'string',
      num: 'string',
      outputFile: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile,
      tileOut: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut,
      tileOutputFile: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile,
      time: 'string',
      timeArray: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob extends $tea.Model {
  code?: string;
  count?: string;
  creationTime?: string;
  id?: string;
  input?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput;
  MNSMessageResult?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult;
  message?: string;
  pipelineId?: string;
  snapshotConfig?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig;
  state?: string;
  tileCount?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      creationTime: 'CreationTime',
      id: 'Id',
      input: 'Input',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      snapshotConfig: 'SnapshotConfig',
      state: 'State',
      tileCount: 'TileCount',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      creationTime: 'string',
      id: 'string',
      input: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput,
      MNSMessageResult: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      snapshotConfig: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig,
      state: 'string',
      tileCount: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobList extends $tea.Model {
  snapshotJob?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob[];
  static names(): { [key: string]: string } {
    return {
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotJob: { 'type': 'array', 'itemType': QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyNonExistTids extends $tea.Model {
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

export class QueryTemplateListResponseBodyTemplateListTemplateAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  level?: string;
  loudnessRangeTarget?: string;
  method?: string;
  peakLevel?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      level: 'Level',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      peakLevel: 'PeakLevel',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      level: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      peakLevel: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  samplerate?: string;
  volume?: QueryTemplateListResponseBodyTemplateListTemplateAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
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
      qscale: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: QueryTemplateListResponseBodyTemplateListTemplateAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateContainer extends $tea.Model {
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

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif extends $tea.Model {
  ditherMode?: string;
  finalDelay?: string;
  isCustomPalette?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp extends $tea.Model {
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfig extends $tea.Model {
  gif?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif;
  segment?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment;
  webp?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif,
      segment: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment,
      webp: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateTransConfig extends $tea.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand extends $tea.Model {
  abrmax?: number;
  maxAbrRatio?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abrmax: 'Abrmax',
      maxAbrRatio: 'MaxAbrRatio',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrmax: 'number',
      maxAbrRatio: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplateVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  hdr2sdr?: string;
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
  narrowBand?: QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  resoPriority?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      hdr2sdr: 'Hdr2sdr',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      narrowBand: 'NarrowBand',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      hdr2sdr: 'string',
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
      narrowBand: QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand,
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateListTemplate extends $tea.Model {
  audio?: QueryTemplateListResponseBodyTemplateListTemplateAudio;
  container?: QueryTemplateListResponseBodyTemplateListTemplateContainer;
  creationTime?: string;
  id?: string;
  muxConfig?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfig;
  name?: string;
  state?: string;
  transConfig?: QueryTemplateListResponseBodyTemplateListTemplateTransConfig;
  video?: QueryTemplateListResponseBodyTemplateListTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      creationTime: 'CreationTime',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: QueryTemplateListResponseBodyTemplateListTemplateAudio,
      container: QueryTemplateListResponseBodyTemplateListTemplateContainer,
      creationTime: 'string',
      id: 'string',
      muxConfig: QueryTemplateListResponseBodyTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: QueryTemplateListResponseBodyTemplateListTemplateTransConfig,
      video: QueryTemplateListResponseBodyTemplateListTemplateVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListResponseBodyTemplateList extends $tea.Model {
  template?: QueryTemplateListResponseBodyTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QueryTemplateListResponseBodyTemplateListTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListResponseBodyNonExistWids extends $tea.Model {
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

export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline extends $tea.Model {
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

export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  id?: string;
  name?: string;
  ratioRefer?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer;
  referPos?: string;
  state?: string;
  timeline?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline;
  type?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      ratioRefer: 'RatioRefer',
      referPos: 'ReferPos',
      state: 'State',
      timeline: 'Timeline',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      id: 'string',
      name: 'string',
      ratioRefer: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer,
      referPos: 'string',
      state: 'string',
      timeline: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline,
      type: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList extends $tea.Model {
  waterMarkTemplate?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate[];
  static names(): { [key: string]: string } {
    return {
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMarkTemplate: { 'type': 'array', 'itemType': QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaWorkflowResponseBodyMediaWorkflowListMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaWorkflowResponseBodyMediaWorkflowList extends $tea.Model {
  mediaWorkflow?: SearchMediaWorkflowResponseBodyMediaWorkflowListMediaWorkflow[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: { 'type': 'array', 'itemType': SearchMediaWorkflowResponseBodyMediaWorkflowListMediaWorkflow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPipelineResponseBodyPipelineListPipelineNotifyConfig extends $tea.Model {
  mqTag?: string;
  mqTopic?: string;
  queueName?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      mqTag: 'MqTag',
      mqTopic: 'MqTopic',
      queueName: 'QueueName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTag: 'string',
      mqTopic: 'string',
      queueName: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPipelineResponseBodyPipelineListPipeline extends $tea.Model {
  creationTime?: string;
  id?: string;
  name?: string;
  notifyConfig?: SearchPipelineResponseBodyPipelineListPipelineNotifyConfig;
  quotaAllocate?: number;
  role?: string;
  speed?: string;
  speedLevel?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      id: 'Id',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      quotaAllocate: 'QuotaAllocate',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      id: 'string',
      name: 'string',
      notifyConfig: SearchPipelineResponseBodyPipelineListPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPipelineResponseBodyPipelineList extends $tea.Model {
  pipeline?: SearchPipelineResponseBodyPipelineListPipeline[];
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: { 'type': 'array', 'itemType': SearchPipelineResponseBodyPipelineListPipeline },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateContainer extends $tea.Model {
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

export class SearchTemplateResponseBodyTemplateListTemplateMuxConfigGif extends $tea.Model {
  ditherMode?: string;
  finalDelay?: string;
  isCustomPalette?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateMuxConfig extends $tea.Model {
  gif?: SearchTemplateResponseBodyTemplateListTemplateMuxConfigGif;
  segment?: SearchTemplateResponseBodyTemplateListTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SearchTemplateResponseBodyTemplateListTemplateMuxConfigGif,
      segment: SearchTemplateResponseBodyTemplateListTemplateMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateTransConfig extends $tea.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateVideoNarrowBand extends $tea.Model {
  abrmax?: number;
  maxAbrRatio?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abrmax: 'Abrmax',
      maxAbrRatio: 'MaxAbrRatio',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrmax: 'number',
      maxAbrRatio: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplateVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: SearchTemplateResponseBodyTemplateListTemplateVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  hdr2sdr?: string;
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
  narrowBand?: SearchTemplateResponseBodyTemplateListTemplateVideoNarrowBand;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  resoPriority?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      hdr2sdr: 'Hdr2sdr',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      narrowBand: 'NarrowBand',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: SearchTemplateResponseBodyTemplateListTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      hdr2sdr: 'string',
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
      narrowBand: SearchTemplateResponseBodyTemplateListTemplateVideoNarrowBand,
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateListTemplate extends $tea.Model {
  audio?: SearchTemplateResponseBodyTemplateListTemplateAudio;
  container?: SearchTemplateResponseBodyTemplateListTemplateContainer;
  creationTime?: string;
  id?: string;
  muxConfig?: SearchTemplateResponseBodyTemplateListTemplateMuxConfig;
  name?: string;
  state?: string;
  transConfig?: SearchTemplateResponseBodyTemplateListTemplateTransConfig;
  video?: SearchTemplateResponseBodyTemplateListTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      creationTime: 'CreationTime',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: SearchTemplateResponseBodyTemplateListTemplateAudio,
      container: SearchTemplateResponseBodyTemplateListTemplateContainer,
      creationTime: 'string',
      id: 'string',
      muxConfig: SearchTemplateResponseBodyTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: SearchTemplateResponseBodyTemplateListTemplateTransConfig,
      video: SearchTemplateResponseBodyTemplateListTemplateVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTemplateResponseBodyTemplateList extends $tea.Model {
  template?: SearchTemplateResponseBodyTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': SearchTemplateResponseBodyTemplateListTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline extends $tea.Model {
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

export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  id?: string;
  name?: string;
  ratioRefer?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer;
  referPos?: string;
  state?: string;
  timeline?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline;
  type?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      ratioRefer: 'RatioRefer',
      referPos: 'ReferPos',
      state: 'State',
      timeline: 'Timeline',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      id: 'string',
      name: 'string',
      ratioRefer: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer,
      referPos: 'string',
      state: 'string',
      timeline: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline,
      type: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList extends $tea.Model {
  waterMarkTemplate?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate[];
  static names(): { [key: string]: string } {
    return {
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMarkTemplate: { 'type': 'array', 'itemType': SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop extends $tea.Model {
  height?: string;
  left?: string;
  mode?: string;
  top?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      mode: 'Mode',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      left: 'string',
      mode: 'string',
      top: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl extends $tea.Model {
  crop?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop;
  deinterlace?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      deinterlace: 'Deinterlace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop,
      deinterlace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl extends $tea.Model {
  methodStreaming?: string;
  rateQuality?: string;
  static names(): { [key: string]: string } {
    return {
      methodStreaming: 'MethodStreaming',
      rateQuality: 'RateQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodStreaming: 'string',
      rateQuality: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfig extends $tea.Model {
  propertiesControl?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl;
  qualityControl?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl;
  static names(): { [key: string]: string } {
    return {
      propertiesControl: 'PropertiesControl',
      qualityControl: 'QualityControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertiesControl: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl,
      qualityControl: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobInputFile extends $tea.Model {
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

export class SubmitAnalysisJobResponseBodyAnalysisJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer extends $tea.Model {
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

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif extends $tea.Model {
  finalDelay?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      finalDelay: 'FinalDelay',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalDelay: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig extends $tea.Model {
  gif?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif;
  segment?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif,
      segment: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig extends $tea.Model {
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  height?: string;
  maxrate?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxrate: 'Maxrate',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxrate: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplate extends $tea.Model {
  audio?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio;
  container?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer;
  id?: string;
  muxConfig?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig;
  name?: string;
  state?: string;
  transConfig?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig;
  video?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio,
      container: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer,
      id: 'string',
      muxConfig: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig,
      video: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateList extends $tea.Model {
  template?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisJobResponseBodyAnalysisJob extends $tea.Model {
  analysisConfig?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfig;
  code?: string;
  creationTime?: string;
  id?: string;
  inputFile?: SubmitAnalysisJobResponseBodyAnalysisJobInputFile;
  MNSMessageResult?: SubmitAnalysisJobResponseBodyAnalysisJobMNSMessageResult;
  message?: string;
  percent?: number;
  pipelineId?: string;
  priority?: string;
  state?: string;
  templateList?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateList;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      analysisConfig: 'AnalysisConfig',
      code: 'Code',
      creationTime: 'CreationTime',
      id: 'Id',
      inputFile: 'InputFile',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      state: 'State',
      templateList: 'TemplateList',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisConfig: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfig,
      code: 'string',
      creationTime: 'string',
      id: 'string',
      inputFile: SubmitAnalysisJobResponseBodyAnalysisJobInputFile,
      MNSMessageResult: SubmitAnalysisJobResponseBodyAnalysisJobMNSMessageResult,
      message: 'string',
      percent: 'number',
      pipelineId: 'string',
      priority: 'string',
      state: 'string',
      templateList: SubmitAnalysisJobResponseBodyAnalysisJobTemplateList,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobInput extends $tea.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix extends $tea.Model {
  amixURL?: string;
  duration?: string;
  map?: string;
  mixDurMode?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      amixURL: 'AmixURL',
      duration: 'Duration',
      map: 'Map',
      mixDurMode: 'MixDurMode',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amixURL: 'string',
      duration: 'string',
      map: 'string',
      mixDurMode: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList extends $tea.Model {
  amix?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix[];
  static names(): { [key: string]: string } {
    return {
      amix: 'Amix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amix: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAudioVolume extends $tea.Model {
  level?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  samplerate?: string;
  volume?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
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
      qscale: 'string',
      samplerate: 'string',
      volume: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan extends $tea.Model {
  duration?: string;
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      seek: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputClip extends $tea.Model {
  timeSpan?: SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer extends $tea.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile extends $tea.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark extends $tea.Model {
  alpha?: string;
  inputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      inputFile: 'InputFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'string',
      inputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption extends $tea.Model {
  id?: string;
  key?: string;
  keyType?: string;
  keyUri?: string;
  skipCnt?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      keyType: 'KeyType',
      keyUri: 'KeyUri',
      skipCnt: 'SkipCnt',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      keyType: 'string',
      keyUri: 'string',
      skipCnt: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupportTS extends $tea.Model {
  md5Support?: boolean;
  sizeSupport?: boolean;
  static names(): { [key: string]: string } {
    return {
      md5Support: 'Md5Support',
      sizeSupport: 'SizeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5Support: 'boolean',
      sizeSupport: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport extends $tea.Model {
  TS?: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupportTS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge extends $tea.Model {
  duration?: string;
  mergeURL?: string;
  roleArn?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      mergeURL: 'MergeURL',
      roleArn: 'RoleArn',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      mergeURL: 'string',
      roleArn: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList extends $tea.Model {
  merge?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif extends $tea.Model {
  ditherMode?: string;
  finalDelay?: string;
  isCustomPalette?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp extends $tea.Model {
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig extends $tea.Model {
  gif?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif;
  segment?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment;
  webp?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif,
      segment: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment,
      webp: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening extends $tea.Model {
  height?: string;
  start?: string;
  width?: string;
  openUrl?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      start: 'Start',
      width: 'Width',
      openUrl: 'openUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      start: 'string',
      width: 'string',
      openUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList extends $tea.Model {
  opening?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle extends $tea.Model {
  map?: string;
  message?: string;
  outSubtitleFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitleOutSubtitleFile;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
      message: 'Message',
      outSubtitleFile: 'OutSubtitleFile',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
      message: 'string',
      outSubtitleFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitleOutSubtitleFile,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList extends $tea.Model {
  outSubtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat extends $tea.Model {
  bitrate?: string;
  duration?: string;
  formatLongName?: string;
  formatName?: string;
  numPrograms?: string;
  numStreams?: string;
  size?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream extends $tea.Model {
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
  samplerate?: string;
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
      samplerate: 'Samplerate',
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
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList extends $tea.Model {
  audioStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
  index?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
  avgBitrate?: string;
  costBandwidth?: string;
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStream extends $tea.Model {
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
  networkCost?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  numFrames?: string;
  pixFmt?: string;
  profile?: string;
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
      networkCost: 'NetworkCost',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
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
      networkCost: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList extends $tea.Model {
  videoStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams extends $tea.Model {
  audioStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList;
  subtitleStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList;
  videoStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileFormat?: string;
  fileSize?: string;
  format?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat;
  fps?: string;
  height?: string;
  streams?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput extends $tea.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $tea.Model {
  charEnc?: string;
  fontName?: string;
  input?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      fontName: 'FontName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      fontName: 'string',
      input: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList extends $tea.Model {
  extSubtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle extends $tea.Model {
  map?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList extends $tea.Model {
  subtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig extends $tea.Model {
  extSubtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList;
  subtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso extends $tea.Model {
  isHalfSample?: string;
  static names(): { [key: string]: string } {
    return {
      isHalfSample: 'IsHalfSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHalfSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate extends $tea.Model {
  bgColor?: string;
  blendDuration?: string;
  height?: string;
  isMergeAudio?: boolean;
  start?: string;
  tailUrl?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      blendDuration: 'BlendDuration',
      height: 'Height',
      isMergeAudio: 'IsMergeAudio',
      start: 'Start',
      tailUrl: 'TailUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      blendDuration: 'string',
      height: 'string',
      isMergeAudio: 'boolean',
      start: 'string',
      tailUrl: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList extends $tea.Model {
  tailSlate?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig extends $tea.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  height?: string;
  maxFps?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  resoPriority?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxFps: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMarkInputFile extends $tea.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  inputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMarkInputFile;
  referPos?: string;
  type?: string;
  waterMarkTemplateId?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      inputFile: 'InputFile',
      referPos: 'ReferPos',
      type: 'Type',
      waterMarkTemplateId: 'WaterMarkTemplateId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      inputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMarkInputFile,
      referPos: 'string',
      type: 'string',
      waterMarkTemplateId: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList extends $tea.Model {
  waterMark?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutput extends $tea.Model {
  amixList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList;
  audio?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio;
  audioStreamMap?: string;
  clip?: SubmitJobsResponseBodyJobResultListJobResultJobOutputClip;
  container?: SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer;
  deWatermark?: string;
  digiWaterMark?: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark;
  encryption?: SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption;
  m3U8NonStandardSupport?: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport;
  mergeConfigUrl?: string;
  mergeList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList;
  muxConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig;
  openingList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList;
  outSubtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList;
  outputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile;
  priority?: string;
  properties?: SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties;
  rotate?: string;
  subtitleConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig;
  superReso?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso;
  tailSlateList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList;
  templateId?: string;
  transConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig;
  userData?: string;
  video?: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo;
  videoStreamMap?: string;
  waterMarkConfigUrl?: string;
  waterMarkList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      amixList: 'AmixList',
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      digiWaterMark: 'DigiWaterMark',
      encryption: 'Encryption',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
      muxConfig: 'MuxConfig',
      openingList: 'OpeningList',
      outSubtitleList: 'OutSubtitleList',
      outputFile: 'OutputFile',
      priority: 'Priority',
      properties: 'Properties',
      rotate: 'Rotate',
      subtitleConfig: 'SubtitleConfig',
      superReso: 'SuperReso',
      tailSlateList: 'TailSlateList',
      templateId: 'TemplateId',
      transConfig: 'TransConfig',
      userData: 'UserData',
      video: 'Video',
      videoStreamMap: 'VideoStreamMap',
      waterMarkConfigUrl: 'WaterMarkConfigUrl',
      waterMarkList: 'WaterMarkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amixList: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList,
      audio: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio,
      audioStreamMap: 'string',
      clip: SubmitJobsResponseBodyJobResultListJobResultJobOutputClip,
      container: SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer,
      deWatermark: 'string',
      digiWaterMark: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark,
      encryption: SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption,
      m3U8NonStandardSupport: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList,
      muxConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig,
      openingList: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList,
      outSubtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList,
      outputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile,
      priority: 'string',
      properties: SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties,
      rotate: 'string',
      subtitleConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig,
      superReso: SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso,
      tailSlateList: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList,
      templateId: 'string',
      transConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig,
      userData: 'string',
      video: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  finishTime?: string;
  input?: SubmitJobsResponseBodyJobResultListJobResultJobInput;
  jobId?: string;
  MNSMessageResult?: SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult;
  message?: string;
  output?: SubmitJobsResponseBodyJobResultListJobResultJobOutput;
  percent?: number;
  pipelineId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      output: 'Output',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      finishTime: 'string',
      input: SubmitJobsResponseBodyJobResultListJobResultJobInput,
      jobId: 'string',
      MNSMessageResult: SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult,
      message: 'string',
      output: SubmitJobsResponseBodyJobResultListJobResultJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResult extends $tea.Model {
  code?: string;
  job?: SubmitJobsResponseBodyJobResultListJobResultJob;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      job: 'Job',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      job: SubmitJobsResponseBodyJobResultListJobResultJob,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultList extends $tea.Model {
  jobResult?: SubmitJobsResponseBodyJobResultListJobResult[];
  static names(): { [key: string]: string } {
    return {
      jobResult: 'JobResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResult: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobInput extends $tea.Model {
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

export class SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesFormat extends $tea.Model {
  bitrate?: string;
  duration?: string;
  formatLongName?: string;
  formatName?: string;
  numPrograms?: string;
  numStreams?: string;
  size?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream extends $tea.Model {
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
  samplerate?: string;
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
      samplerate: 'Samplerate',
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
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList extends $tea.Model {
  audioStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
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

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
  avgBitrate?: string;
  costBandwidth?: string;
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStream extends $tea.Model {
  avgFPS?: string;
  bitrate?: string;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  colorPrimaries?: string;
  colorRange?: string;
  colorTransfer?: string;
  dar?: string;
  duration?: string;
  fps?: string;
  hasBFrames?: string;
  height?: string;
  index?: string;
  lang?: string;
  level?: string;
  networkCost?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
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
      colorPrimaries: 'ColorPrimaries',
      colorRange: 'ColorRange',
      colorTransfer: 'ColorTransfer',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      networkCost: 'NetworkCost',
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
      colorPrimaries: 'string',
      colorRange: 'string',
      colorTransfer: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      networkCost: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
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

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList extends $tea.Model {
  videoStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreams extends $tea.Model {
  audioStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList;
  subtitleStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList;
  videoStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList,
      subtitleStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList,
      videoStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobProperties extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileFormat?: string;
  fileSize?: string;
  format?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesFormat;
  fps?: string;
  height?: string;
  streams?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreams;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreams,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJob extends $tea.Model {
  async?: boolean;
  code?: string;
  creationTime?: string;
  input?: SubmitMediaInfoJobResponseBodyMediaInfoJobInput;
  jobId?: string;
  MNSMessageResult?: SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult;
  message?: string;
  pipelineId?: string;
  properties?: SubmitMediaInfoJobResponseBodyMediaInfoJobProperties;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      code: 'Code',
      creationTime: 'CreationTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      properties: 'Properties',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      creationTime: 'string',
      input: SubmitMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      MNSMessageResult: SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      properties: SubmitMediaInfoJobResponseBodyMediaInfoJobProperties,
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJobInput extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut extends $tea.Model {
  cellHeight?: string;
  cellSelStep?: string;
  cellWidth?: string;
  color?: string;
  columns?: string;
  isKeepCellPic?: string;
  lines?: string;
  margin?: string;
  padding?: string;
  static names(): { [key: string]: string } {
    return {
      cellHeight: 'CellHeight',
      cellSelStep: 'CellSelStep',
      cellWidth: 'CellWidth',
      color: 'Color',
      columns: 'Columns',
      isKeepCellPic: 'IsKeepCellPic',
      lines: 'Lines',
      margin: 'Margin',
      padding: 'Padding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellHeight: 'string',
      cellSelStep: 'string',
      cellWidth: 'string',
      color: 'string',
      columns: 'string',
      isKeepCellPic: 'string',
      lines: 'string',
      margin: 'string',
      padding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile extends $tea.Model {
  bucket?: string;
  location?: string;
  object?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray extends $tea.Model {
  timePointList?: number[];
  static names(): { [key: string]: string } {
    return {
      timePointList: 'TimePointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePointList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig extends $tea.Model {
  frameType?: string;
  height?: string;
  interval?: string;
  num?: string;
  outputFile?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile;
  tileOut?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut;
  tileOutputFile?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile;
  time?: string;
  timeArray?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      frameType: 'FrameType',
      height: 'Height',
      interval: 'Interval',
      num: 'Num',
      outputFile: 'OutputFile',
      tileOut: 'TileOut',
      tileOutputFile: 'TileOutputFile',
      time: 'Time',
      timeArray: 'TimeArray',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameType: 'string',
      height: 'string',
      interval: 'string',
      num: 'string',
      outputFile: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile,
      tileOut: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut,
      tileOutputFile: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile,
      time: 'string',
      timeArray: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobResponseBodySnapshotJob extends $tea.Model {
  code?: string;
  count?: string;
  creationTime?: string;
  id?: string;
  input?: SubmitSnapshotJobResponseBodySnapshotJobInput;
  MNSMessageResult?: SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult;
  message?: string;
  pipelineId?: string;
  snapshotConfig?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig;
  state?: string;
  tileCount?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      creationTime: 'CreationTime',
      id: 'Id',
      input: 'Input',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      snapshotConfig: 'SnapshotConfig',
      state: 'State',
      tileCount: 'TileCount',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      creationTime: 'string',
      id: 'string',
      input: SubmitSnapshotJobResponseBodySnapshotJobInput,
      MNSMessageResult: SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      snapshotConfig: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig,
      state: 'string',
      tileCount: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBodyMediaFile extends $tea.Model {
  state?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBodyMediaRunIdList extends $tea.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBodyMediaTags extends $tea.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBodyMedia extends $tea.Model {
  bitrate?: string;
  cateId?: number;
  censorState?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: string;
  file?: UpdateMediaResponseBodyMediaFile;
  format?: string;
  fps?: string;
  height?: string;
  mediaId?: string;
  publishState?: string;
  runIdList?: UpdateMediaResponseBodyMediaRunIdList;
  size?: string;
  tags?: UpdateMediaResponseBodyMediaTags;
  title?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      cateId: 'CateId',
      censorState: 'CensorState',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaId: 'MediaId',
      publishState: 'PublishState',
      runIdList: 'RunIdList',
      size: 'Size',
      tags: 'Tags',
      title: 'Title',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      cateId: 'number',
      censorState: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'string',
      file: UpdateMediaResponseBodyMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      publishState: 'string',
      runIdList: UpdateMediaResponseBodyMediaRunIdList,
      size: 'string',
      tags: UpdateMediaResponseBodyMediaTags,
      title: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowResponseBodyMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaWorkflowTriggerModeResponseBodyMediaWorkflow extends $tea.Model {
  creationTime?: string;
  mediaWorkflowId?: string;
  name?: string;
  state?: string;
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineResponseBodyPipelineNotifyConfig extends $tea.Model {
  mqTag?: string;
  mqTopic?: string;
  queueName?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      mqTag: 'MqTag',
      mqTopic: 'MqTopic',
      queueName: 'QueueName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTag: 'string',
      mqTopic: 'string',
      queueName: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineResponseBodyPipeline extends $tea.Model {
  id?: string;
  name?: string;
  notifyConfig?: UpdatePipelineResponseBodyPipelineNotifyConfig;
  quotaAllocate?: number;
  role?: string;
  speed?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      quotaAllocate: 'QuotaAllocate',
      role: 'Role',
      speed: 'Speed',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      notifyConfig: UpdatePipelineResponseBodyPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateAudioVolume extends $tea.Model {
  integratedLoudnessTarget?: string;
  level?: string;
  loudnessRangeTarget?: string;
  method?: string;
  peakLevel?: string;
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      level: 'Level',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      peakLevel: 'PeakLevel',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      level: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      peakLevel: 'string',
      truePeak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  samplerate?: string;
  volume?: UpdateTemplateResponseBodyTemplateAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
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
      qscale: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: UpdateTemplateResponseBodyTemplateAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateContainer extends $tea.Model {
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

export class UpdateTemplateResponseBodyTemplateMuxConfigGif extends $tea.Model {
  ditherMode?: string;
  finalDelay?: string;
  isCustomPalette?: string;
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateMuxConfigSegment extends $tea.Model {
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateMuxConfigWebp extends $tea.Model {
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateMuxConfig extends $tea.Model {
  gif?: UpdateTemplateResponseBodyTemplateMuxConfigGif;
  segment?: UpdateTemplateResponseBodyTemplateMuxConfigSegment;
  webp?: UpdateTemplateResponseBodyTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: UpdateTemplateResponseBodyTemplateMuxConfigGif,
      segment: UpdateTemplateResponseBodyTemplateMuxConfigSegment,
      webp: UpdateTemplateResponseBodyTemplateMuxConfigWebp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateTransConfig extends $tea.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: string;
  isCheckAudioBitrateFail?: string;
  isCheckReso?: string;
  isCheckResoFail?: string;
  isCheckVideoBitrate?: string;
  isCheckVideoBitrateFail?: string;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateVideoBitrateBnd extends $tea.Model {
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateVideoNarrowBand extends $tea.Model {
  abrmax?: number;
  maxAbrRatio?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abrmax: 'Abrmax',
      maxAbrRatio: 'MaxAbrRatio',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrmax: 'number',
      maxAbrRatio: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplateVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: UpdateTemplateResponseBodyTemplateVideoBitrateBnd;
  bufsize?: string;
  codec?: string;
  crf?: string;
  crop?: string;
  degrain?: string;
  fps?: string;
  gop?: string;
  hdr2sdr?: string;
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
  narrowBand?: UpdateTemplateResponseBodyTemplateVideoNarrowBand;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
  resoPriority?: string;
  scanMode?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      hdr2sdr: 'Hdr2sdr',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      narrowBand: 'NarrowBand',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: UpdateTemplateResponseBodyTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      hdr2sdr: 'string',
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
      narrowBand: UpdateTemplateResponseBodyTemplateVideoNarrowBand,
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplate extends $tea.Model {
  audio?: UpdateTemplateResponseBodyTemplateAudio;
  container?: UpdateTemplateResponseBodyTemplateContainer;
  id?: string;
  muxConfig?: UpdateTemplateResponseBodyTemplateMuxConfig;
  name?: string;
  state?: string;
  transConfig?: UpdateTemplateResponseBodyTemplateTransConfig;
  video?: UpdateTemplateResponseBodyTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: UpdateTemplateResponseBodyTemplateAudio,
      container: UpdateTemplateResponseBodyTemplateContainer,
      id: 'string',
      muxConfig: UpdateTemplateResponseBodyTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: UpdateTemplateResponseBodyTemplateTransConfig,
      video: UpdateTemplateResponseBodyTemplateVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline extends $tea.Model {
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

export class UpdateWaterMarkTemplateResponseBodyWaterMarkTemplate extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  id?: string;
  name?: string;
  ratioRefer?: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer;
  referPos?: string;
  state?: string;
  timeline?: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline;
  type?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      ratioRefer: 'RatioRefer',
      referPos: 'ReferPos',
      state: 'State',
      timeline: 'Timeline',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      id: 'string',
      name: 'string',
      ratioRefer: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer,
      referPos: 'string',
      state: 'string',
      timeline: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline,
      type: 'string',
      width: 'string',
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
      'ap-northeast-2-pop': "mts.aliyuncs.com",
      'ap-southeast-2': "mts.aliyuncs.com",
      'ap-southeast-3': "mts.aliyuncs.com",
      'cn-beijing-finance-1': "mts.aliyuncs.com",
      'cn-beijing-finance-pop': "mts.aliyuncs.com",
      'cn-beijing-gov-1': "mts.aliyuncs.com",
      'cn-beijing-nu16-b01': "mts.aliyuncs.com",
      'cn-chengdu': "mts.aliyuncs.com",
      'cn-edge-1': "mts.aliyuncs.com",
      'cn-fujian': "mts.aliyuncs.com",
      'cn-haidian-cm12-c01': "mts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mts.aliyuncs.com",
      'cn-hangzhou-finance': "mts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mts.aliyuncs.com",
      'cn-hangzhou-test-306': "mts.aliyuncs.com",
      'cn-hongkong-finance-pop': "mts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "mts.aliyuncs.com",
      'cn-north-2-gov-1': "mts.aliyuncs.com",
      'cn-qingdao-nebula': "mts.aliyuncs.com",
      'cn-shanghai-et15-b01': "mts.aliyuncs.com",
      'cn-shanghai-et2-b01': "mts.aliyuncs.com",
      'cn-shanghai-finance-1': "mts.aliyuncs.com",
      'cn-shanghai-inner': "mts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mts.aliyuncs.com",
      'cn-shenzhen-finance-1': "mts.aliyuncs.com",
      'cn-shenzhen-inner': "mts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mts.aliyuncs.com",
      'cn-wuhan': "mts.aliyuncs.com",
      'cn-wulanchabu': "mts.aliyuncs.com",
      'cn-yushanfang': "mts.aliyuncs.com",
      'cn-zhangbei': "mts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mts.aliyuncs.com",
      'eu-west-1-oxs': "mts.aliyuncs.com",
      'me-east-1': "mts.aliyuncs.com",
      'rus-west-1-pop': "mts.aliyuncs.com",
      'us-east-1': "mts.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary Activates a media workflow.
   *
   * @description You can call this operation to activate a media workflow that has been deactivated. After you activate a media workflow, you cannot modify the workflow information, such as the name, topology, or trigger mode. A media workflow is activated by default after it is created.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ActivateMediaWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ActivateMediaWorkflowResponse
   */
  async activateMediaWorkflowWithOptions(request: ActivateMediaWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<ActivateMediaWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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
      action: "ActivateMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateMediaWorkflowResponse>(await this.callApi(params, req, runtime), new ActivateMediaWorkflowResponse({}));
  }

  /**
   * @summary Activates a media workflow.
   *
   * @description You can call this operation to activate a media workflow that has been deactivated. After you activate a media workflow, you cannot modify the workflow information, such as the name, topology, or trigger mode. A media workflow is activated by default after it is created.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ActivateMediaWorkflowRequest
   * @return ActivateMediaWorkflowResponse
   */
  async activateMediaWorkflow(request: ActivateMediaWorkflowRequest): Promise<ActivateMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Adds a media file.
   *
   * @description *   You can call this operation to process videos that are uploaded to Object Storage Service (OSS) but not processed. This way, you do not need to upload the videos to OSS again. If you have configured media workflows, OSS automatically notifies ApsaraVideo Media Processing (MPS) when a media file is uploaded to OSS. MPS automatically finds the corresponding workflow in the Active state based on the specified OSS bucket and object. Therefore, in most cases, you do not need to manually call the AddMedia operation to process the media file.
   * *   Media information is automatically obtained only when the specified media workflow is in the Active state. If no media workflow is specified or the specified media workflow is not in the Active state, media information is not obtained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddMediaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddMediaResponse
   */
  async addMediaWithOptions(request: AddMediaRequest, runtime: $Util.RuntimeOptions): Promise<AddMediaResponse> {
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

    if (!Util.isUnset(request.fileURL)) {
      query["FileURL"] = request.fileURL;
    }

    if (!Util.isUnset(request.inputUnbind)) {
      query["InputUnbind"] = request.inputUnbind;
    }

    if (!Util.isUnset(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
    }

    if (!Util.isUnset(request.mediaWorkflowUserData)) {
      query["MediaWorkflowUserData"] = request.mediaWorkflowUserData;
    }

    if (!Util.isUnset(request.overrideParams)) {
      query["OverrideParams"] = request.overrideParams;
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

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMedia",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMediaResponse>(await this.callApi(params, req, runtime), new AddMediaResponse({}));
  }

  /**
   * @summary Adds a media file.
   *
   * @description *   You can call this operation to process videos that are uploaded to Object Storage Service (OSS) but not processed. This way, you do not need to upload the videos to OSS again. If you have configured media workflows, OSS automatically notifies ApsaraVideo Media Processing (MPS) when a media file is uploaded to OSS. MPS automatically finds the corresponding workflow in the Active state based on the specified OSS bucket and object. Therefore, in most cases, you do not need to manually call the AddMedia operation to process the media file.
   * *   Media information is automatically obtained only when the specified media workflow is in the Active state. If no media workflow is specified or the specified media workflow is not in the Active state, media information is not obtained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddMediaRequest
   * @return AddMediaResponse
   */
  async addMedia(request: AddMediaRequest): Promise<AddMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMediaWithOptions(request, runtime);
  }

  /**
   * @summary Adds a tag to a media file.
   *
   * @description You can call this operation to add only one tag. To add multiple tags at a time, you can call the [UpdateMedia](https://help.aliyun.com/document_detail/44464.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddMediaTagRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddMediaTagResponse
   */
  async addMediaTagWithOptions(request: AddMediaTagRequest, runtime: $Util.RuntimeOptions): Promise<AddMediaTagResponse> {
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMediaTag",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMediaTagResponse>(await this.callApi(params, req, runtime), new AddMediaTagResponse({}));
  }

  /**
   * @summary Adds a tag to a media file.
   *
   * @description You can call this operation to add only one tag. To add multiple tags at a time, you can call the [UpdateMedia](https://help.aliyun.com/document_detail/44464.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddMediaTagRequest
   * @return AddMediaTagResponse
   */
  async addMediaTag(request: AddMediaTagRequest): Promise<AddMediaTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMediaTagWithOptions(request, runtime);
  }

  /**
   * @summary Creates a media workflow.
   *
   * @description *   You can call this operation to define the topology, activities, and dependencies of a media workflow. The topology is represented by a directed acyclic graph (DAG) in the console. For more information, see [Workflow activities](https://help.aliyun.com/document_detail/68494.html). You can view and run the workflows that are created by calling this operation in the ApsaraVideo Media Processing (MPS) console.
   * *   MPS media workflows can be automatically triggered only by using the prefix of the file path. Automatic triggering by using the suffix is not supported. For more information about the trigger rules, see [Workflow triggering rules for files](https://help.aliyun.com/document_detail/68574.html).
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddMediaWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddMediaWorkflowResponse
   */
  async addMediaWorkflowWithOptions(request: AddMediaWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<AddMediaWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.topology)) {
      query["Topology"] = request.topology;
    }

    if (!Util.isUnset(request.triggerMode)) {
      query["TriggerMode"] = request.triggerMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMediaWorkflowResponse>(await this.callApi(params, req, runtime), new AddMediaWorkflowResponse({}));
  }

  /**
   * @summary Creates a media workflow.
   *
   * @description *   You can call this operation to define the topology, activities, and dependencies of a media workflow. The topology is represented by a directed acyclic graph (DAG) in the console. For more information, see [Workflow activities](https://help.aliyun.com/document_detail/68494.html). You can view and run the workflows that are created by calling this operation in the ApsaraVideo Media Processing (MPS) console.
   * *   MPS media workflows can be automatically triggered only by using the prefix of the file path. Automatic triggering by using the suffix is not supported. For more information about the trigger rules, see [Workflow triggering rules for files](https://help.aliyun.com/document_detail/68574.html).
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddMediaWorkflowRequest
   * @return AddMediaWorkflowResponse
   */
  async addMediaWorkflow(request: AddMediaWorkflowRequest): Promise<AddMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Adds an ApsaraVideo Media Processing (MPS) queue.
   *
   * @param request AddPipelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddPipelineResponse
   */
  async addPipelineWithOptions(request: AddPipelineRequest, runtime: $Util.RuntimeOptions): Promise<AddPipelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.notifyConfig)) {
      query["NotifyConfig"] = request.notifyConfig;
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

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.speedLevel)) {
      query["SpeedLevel"] = request.speedLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPipeline",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddPipelineResponse>(await this.callApi(params, req, runtime), new AddPipelineResponse({}));
  }

  /**
   * @summary Adds an ApsaraVideo Media Processing (MPS) queue.
   *
   * @param request AddPipelineRequest
   * @return AddPipelineResponse
   */
  async addPipeline(request: AddPipelineRequest): Promise<AddPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPipelineWithOptions(request, runtime);
  }

  /**
   * @summary 添加labelVersion、knowledgeConfig配置
   *
   * @param request AddSmarttagTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddSmarttagTemplateResponse
   */
  async addSmarttagTemplateWithOptions(request: AddSmarttagTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddSmarttagTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.analyseTypes)) {
      query["AnalyseTypes"] = request.analyseTypes;
    }

    if (!Util.isUnset(request.faceCategoryIds)) {
      query["FaceCategoryIds"] = request.faceCategoryIds;
    }

    if (!Util.isUnset(request.faceCustomParamsConfig)) {
      query["FaceCustomParamsConfig"] = request.faceCustomParamsConfig;
    }

    if (!Util.isUnset(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!Util.isUnset(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!Util.isUnset(request.keywordConfig)) {
      query["KeywordConfig"] = request.keywordConfig;
    }

    if (!Util.isUnset(request.knowledgeConfig)) {
      query["KnowledgeConfig"] = request.knowledgeConfig;
    }

    if (!Util.isUnset(request.labelType)) {
      query["LabelType"] = request.labelType;
    }

    if (!Util.isUnset(request.labelVersion)) {
      query["LabelVersion"] = request.labelVersion;
    }

    if (!Util.isUnset(request.landmarkGroupIds)) {
      query["LandmarkGroupIds"] = request.landmarkGroupIds;
    }

    if (!Util.isUnset(request.objectGroupIds)) {
      query["ObjectGroupIds"] = request.objectGroupIds;
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

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSmarttagTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSmarttagTemplateResponse>(await this.callApi(params, req, runtime), new AddSmarttagTemplateResponse({}));
  }

  /**
   * @summary 添加labelVersion、knowledgeConfig配置
   *
   * @param request AddSmarttagTemplateRequest
   * @return AddSmarttagTemplateResponse
   */
  async addSmarttagTemplate(request: AddSmarttagTemplateRequest): Promise<AddSmarttagTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSmarttagTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Creates a custom transcoding template. You need to configure the information such as the container format, video stream settings, and audio stream settings.
   *
   * @description When you call this operation, you need to set transcoding parameters such as those related to the container format, video stream, and audio stream. If you do not specify some parameters, streams that are generated by using the template do not contain the information specified by those parameters.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddTemplateResponse
   */
  async addTemplateWithOptions(request: AddTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audio)) {
      query["Audio"] = request.audio;
    }

    if (!Util.isUnset(request.container)) {
      query["Container"] = request.container;
    }

    if (!Util.isUnset(request.muxConfig)) {
      query["MuxConfig"] = request.muxConfig;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.transConfig)) {
      query["TransConfig"] = request.transConfig;
    }

    if (!Util.isUnset(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTemplate",
      version: "2014-06-18",
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

  /**
   * @summary Creates a custom transcoding template. You need to configure the information such as the container format, video stream settings, and audio stream settings.
   *
   * @description When you call this operation, you need to set transcoding parameters such as those related to the container format, video stream, and audio stream. If you do not specify some parameters, streams that are generated by using the template do not contain the information specified by those parameters.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddTemplateRequest
   * @return AddTemplateResponse
   */
  async addTemplate(request: AddTemplateRequest): Promise<AddTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Creates a watermark template.
   *
   * @description After you create a watermark template by calling this operation, you can specify the watermark template and watermark asset when you [submit a transcoding job](https://help.aliyun.com/document_detail/29226.html). This allows you to add watermark information to the output video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddWaterMarkTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddWaterMarkTemplateResponse
   */
  async addWaterMarkTemplateWithOptions(request: AddWaterMarkTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddWaterMarkTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
      action: "AddWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new AddWaterMarkTemplateResponse({}));
  }

  /**
   * @summary Creates a watermark template.
   *
   * @description After you create a watermark template by calling this operation, you can specify the watermark template and watermark asset when you [submit a transcoding job](https://help.aliyun.com/document_detail/29226.html). This allows you to add watermark information to the output video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request AddWaterMarkTemplateRequest
   * @return AddWaterMarkTemplateResponse
   */
  async addWaterMarkTemplate(request: AddWaterMarkTemplateRequest): Promise<AddWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addWaterMarkTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Binds an input media bucket.
   *
   * @description Before you call this operation to bind an input media bucket, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request BindInputBucketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindInputBucketResponse
   */
  async bindInputBucketWithOptions(request: BindInputBucketRequest, runtime: $Util.RuntimeOptions): Promise<BindInputBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.referer)) {
      query["Referer"] = request.referer;
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
      action: "BindInputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindInputBucketResponse>(await this.callApi(params, req, runtime), new BindInputBucketResponse({}));
  }

  /**
   * @summary Binds an input media bucket.
   *
   * @description Before you call this operation to bind an input media bucket, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request BindInputBucketRequest
   * @return BindInputBucketResponse
   */
  async bindInputBucket(request: BindInputBucketRequest): Promise<BindInputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindInputBucketWithOptions(request, runtime);
  }

  /**
   * @summary Binds an output media bucket to the media library.
   *
   * @description Before you call this operation to bind an output media bucket to the media library, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request BindOutputBucketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindOutputBucketResponse
   */
  async bindOutputBucketWithOptions(request: BindOutputBucketRequest, runtime: $Util.RuntimeOptions): Promise<BindOutputBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
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
      action: "BindOutputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindOutputBucketResponse>(await this.callApi(params, req, runtime), new BindOutputBucketResponse({}));
  }

  /**
   * @summary Binds an output media bucket to the media library.
   *
   * @description Before you call this operation to bind an output media bucket to the media library, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request BindOutputBucketRequest
   * @return BindOutputBucketResponse
   */
  async bindOutputBucket(request: BindOutputBucketRequest): Promise<BindOutputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindOutputBucketWithOptions(request, runtime);
  }

  /**
   * @summary Cancels a transcoding job.
   *
   * @description *   You can cancel a transcoding job only if the job is in the Submitted state.
   * *   We recommend that you call the **UpdatePipeline** operation to set the status of the ApsaraVideo Media Processing (MPS) queue to Paused before you cancel a job. This suspends job scheduling in the MPS queue. After the job is canceled, you must set the status of the MPS queue back to Active so that the other jobs in the MPS queue can be scheduled.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request CancelJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelJobResponse
   */
  async cancelJobWithOptions(request: CancelJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "CancelJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelJobResponse>(await this.callApi(params, req, runtime), new CancelJobResponse({}));
  }

  /**
   * @summary Cancels a transcoding job.
   *
   * @description *   You can cancel a transcoding job only if the job is in the Submitted state.
   * *   We recommend that you call the **UpdatePipeline** operation to set the status of the ApsaraVideo Media Processing (MPS) queue to Paused before you cancel a job. This suspends job scheduling in the MPS queue. After the job is canceled, you must set the status of the MPS queue back to Active so that the other jobs in the MPS queue can be scheduled.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request CancelJobRequest
   * @return CancelJobResponse
   */
  async cancelJob(request: CancelJobRequest): Promise<CancelJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelJobWithOptions(request, runtime);
  }

  /**
   * @param request CreateCustomEntityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCustomEntityResponse
   */
  async createCustomEntityWithOptions(request: CreateCustomEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customEntityInfo)) {
      query["CustomEntityInfo"] = request.customEntityInfo;
    }

    if (!Util.isUnset(request.customEntityName)) {
      query["CustomEntityName"] = request.customEntityName;
    }

    if (!Util.isUnset(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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
      action: "CreateCustomEntity",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomEntityResponse>(await this.callApi(params, req, runtime), new CreateCustomEntityResponse({}));
  }

  /**
   * @param request CreateCustomEntityRequest
   * @return CreateCustomEntityResponse
   */
  async createCustomEntity(request: CreateCustomEntityRequest): Promise<CreateCustomEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomEntityWithOptions(request, runtime);
  }

  /**
   * @param request CreateCustomGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCustomGroupResponse
   */
  async createCustomGroupWithOptions(request: CreateCustomGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customGroupDescription)) {
      query["CustomGroupDescription"] = request.customGroupDescription;
    }

    if (!Util.isUnset(request.customGroupName)) {
      query["CustomGroupName"] = request.customGroupName;
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
      action: "CreateCustomGroup",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomGroupResponse>(await this.callApi(params, req, runtime), new CreateCustomGroupResponse({}));
  }

  /**
   * @param request CreateCustomGroupRequest
   * @return CreateCustomGroupResponse
   */
  async createCustomGroup(request: CreateCustomGroupRequest): Promise<CreateCustomGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomGroupWithOptions(request, runtime);
  }

  /**
   * @summary Submits a job of creating a media fingerprint library.
   *
   * @description *   You can call this operation to submit a job to create a video or text fingerprint library. You can use a text fingerprint library to store fingerprints for text.
   * *   You can submit a job of creating a text fingerprint library only in the China (Shanghai) region.
   * *   By default, you can submit up to 10 jobs of creating a video fingerprint library to an ApsaraVideo Media Processing (MPS) queue at a time. If you submit more than 10 jobs at a time, the call may fail.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request CreateFpShotDBRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateFpShotDBResponse
   */
  async createFpShotDBWithOptions(request: CreateFpShotDBRequest, runtime: $Util.RuntimeOptions): Promise<CreateFpShotDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
      action: "CreateFpShotDB",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFpShotDBResponse>(await this.callApi(params, req, runtime), new CreateFpShotDBResponse({}));
  }

  /**
   * @summary Submits a job of creating a media fingerprint library.
   *
   * @description *   You can call this operation to submit a job to create a video or text fingerprint library. You can use a text fingerprint library to store fingerprints for text.
   * *   You can submit a job of creating a text fingerprint library only in the China (Shanghai) region.
   * *   By default, you can submit up to 10 jobs of creating a video fingerprint library to an ApsaraVideo Media Processing (MPS) queue at a time. If you submit more than 10 jobs at a time, the call may fail.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request CreateFpShotDBRequest
   * @return CreateFpShotDBResponse
   */
  async createFpShotDB(request: CreateFpShotDBRequest): Promise<CreateFpShotDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFpShotDBWithOptions(request, runtime);
  }

  /**
   * @summary Disables a media workflow.
   *
   * @description The time when the media workflow was created.
   *
   * @param request DeactivateMediaWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeactivateMediaWorkflowResponse
   */
  async deactivateMediaWorkflowWithOptions(request: DeactivateMediaWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<DeactivateMediaWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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
      action: "DeactivateMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeactivateMediaWorkflowResponse>(await this.callApi(params, req, runtime), new DeactivateMediaWorkflowResponse({}));
  }

  /**
   * @summary Disables a media workflow.
   *
   * @description The time when the media workflow was created.
   *
   * @param request DeactivateMediaWorkflowRequest
   * @return DeactivateMediaWorkflowResponse
   */
  async deactivateMediaWorkflow(request: DeactivateMediaWorkflowRequest): Promise<DeactivateMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactivateMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a custom entity from a custom library.
   *
   * @param request DeleteCustomEntityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomEntityResponse
   */
  async deleteCustomEntityWithOptions(request: DeleteCustomEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!Util.isUnset(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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
      action: "DeleteCustomEntity",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomEntityResponse>(await this.callApi(params, req, runtime), new DeleteCustomEntityResponse({}));
  }

  /**
   * @summary Deletes a custom entity from a custom library.
   *
   * @param request DeleteCustomEntityRequest
   * @return DeleteCustomEntityResponse
   */
  async deleteCustomEntity(request: DeleteCustomEntityRequest): Promise<DeleteCustomEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomEntityWithOptions(request, runtime);
  }

  /**
   * @summary Delete a custom image library.
   *
   * @description You can call this operation only in the China (Beijing), China (Shanghai), and China (Hangzhou) regions.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteCustomGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomGroupResponse
   */
  async deleteCustomGroupWithOptions(request: DeleteCustomGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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
      action: "DeleteCustomGroup",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomGroupResponse>(await this.callApi(params, req, runtime), new DeleteCustomGroupResponse({}));
  }

  /**
   * @summary Delete a custom image library.
   *
   * @description You can call this operation only in the China (Beijing), China (Shanghai), and China (Hangzhou) regions.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteCustomGroupRequest
   * @return DeleteCustomGroupResponse
   */
  async deleteCustomGroup(request: DeleteCustomGroupRequest): Promise<DeleteCustomGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomGroupWithOptions(request, runtime);
  }

  /**
   * @param request DeleteCustomViewRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomViewResponse
   */
  async deleteCustomViewWithOptions(request: DeleteCustomViewRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!Util.isUnset(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
    }

    if (!Util.isUnset(request.customViewId)) {
      query["CustomViewId"] = request.customViewId;
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
      action: "DeleteCustomView",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomViewResponse>(await this.callApi(params, req, runtime), new DeleteCustomViewResponse({}));
  }

  /**
   * @param request DeleteCustomViewRequest
   * @return DeleteCustomViewResponse
   */
  async deleteCustomView(request: DeleteCustomViewRequest): Promise<DeleteCustomViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomViewWithOptions(request, runtime);
  }

  /**
   * @summary Deletes media files from ApsaraVideo Media Processing (MPS).
   *
   * @description This operation allows you to logically delete a media file. The media file can no longer be processed, but the corresponding objects in the input and output Object Storage Service (OSS) buckets are retained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteMediaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMediaResponse
   */
  async deleteMediaWithOptions(request: DeleteMediaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
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
      action: "DeleteMedia",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMediaResponse>(await this.callApi(params, req, runtime), new DeleteMediaResponse({}));
  }

  /**
   * @summary Deletes media files from ApsaraVideo Media Processing (MPS).
   *
   * @description This operation allows you to logically delete a media file. The media file can no longer be processed, but the corresponding objects in the input and output Object Storage Service (OSS) buckets are retained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteMediaRequest
   * @return DeleteMediaResponse
   */
  async deleteMedia(request: DeleteMediaRequest): Promise<DeleteMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaWithOptions(request, runtime);
  }

  /**
   * @summary Removes a tag for a media file.
   *
   * @description You can call this operation to remove only one tag at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteMediaTagRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMediaTagResponse
   */
  async deleteMediaTagWithOptions(request: DeleteMediaTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaTagResponse> {
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMediaTag",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMediaTagResponse>(await this.callApi(params, req, runtime), new DeleteMediaTagResponse({}));
  }

  /**
   * @summary Removes a tag for a media file.
   *
   * @description You can call this operation to remove only one tag at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteMediaTagRequest
   * @return DeleteMediaTagResponse
   */
  async deleteMediaTag(request: DeleteMediaTagRequest): Promise<DeleteMediaTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaTagWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a media workflow. This does not affect workflow instances that are running.
   *
   * @description After you delete or disable a workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteMediaWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMediaWorkflowResponse
   */
  async deleteMediaWorkflowWithOptions(request: DeleteMediaWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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
      action: "DeleteMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMediaWorkflowResponse>(await this.callApi(params, req, runtime), new DeleteMediaWorkflowResponse({}));
  }

  /**
   * @summary Deletes a media workflow. This does not affect workflow instances that are running.
   *
   * @description After you delete or disable a workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteMediaWorkflowRequest
   * @return DeleteMediaWorkflowResponse
   */
  async deleteMediaWorkflow(request: DeleteMediaWorkflowRequest): Promise<DeleteMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an ApsaraVideo Media Processing (MPS) queue.
   *
   * @description You can call this operation to delete only one MPS queue at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeletePipelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePipelineResponse
   */
  async deletePipelineWithOptions(request: DeletePipelineRequest, runtime: $Util.RuntimeOptions): Promise<DeletePipelineResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePipeline",
      version: "2014-06-18",
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

  /**
   * @summary Deletes an ApsaraVideo Media Processing (MPS) queue.
   *
   * @description You can call this operation to delete only one MPS queue at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeletePipelineRequest
   * @return DeletePipelineResponse
   */
  async deletePipeline(request: DeletePipelineRequest): Promise<DeletePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePipelineWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a template.
   *
   * @description You can call this operation to delete only one template at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteSmarttagTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSmarttagTemplateResponse
   */
  async deleteSmarttagTemplateWithOptions(request: DeleteSmarttagTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmarttagTemplateResponse> {
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSmarttagTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSmarttagTemplateResponse>(await this.callApi(params, req, runtime), new DeleteSmarttagTemplateResponse({}));
  }

  /**
   * @summary Deletes a template.
   *
   * @description You can call this operation to delete only one template at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteSmarttagTemplateRequest
   * @return DeleteSmarttagTemplateResponse
   */
  async deleteSmarttagTemplate(request: DeleteSmarttagTemplateRequest): Promise<DeleteSmarttagTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmarttagTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a custom transcoding template.
   *
   * @description A custom transcoding template cannot be deleted if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  /**
   * @summary Deletes a custom transcoding template.
   *
   * @description A custom transcoding template cannot be deleted if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteTemplateRequest
   * @return DeleteTemplateResponse
   */
  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a watermark template.
   *
   * @description A watermark template cannot be deleted if it is being used by a submitted job.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteWaterMarkTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteWaterMarkTemplateResponse
   */
  async deleteWaterMarkTemplateWithOptions(request: DeleteWaterMarkTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWaterMarkTemplateResponse> {
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

    if (!Util.isUnset(request.waterMarkTemplateId)) {
      query["WaterMarkTemplateId"] = request.waterMarkTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new DeleteWaterMarkTemplateResponse({}));
  }

  /**
   * @summary Deletes a watermark template.
   *
   * @description A watermark template cannot be deleted if it is being used by a submitted job.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request DeleteWaterMarkTemplateRequest
   * @return DeleteWaterMarkTemplateResponse
   */
  async deleteWaterMarkTemplate(request: DeleteWaterMarkTemplateRequest): Promise<DeleteWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWaterMarkTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Reviews images and text and returns the review results.
   *
   * @description *   The moderation results are synchronously returned after the moderation is complete.
   * *   You can use the image and text moderation feature only in the China (Beijing), China (Shanghai), and Singapore regions.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ImAuditRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ImAuditResponse
   */
  async imAuditWithOptions(request: ImAuditRequest, runtime: $Util.RuntimeOptions): Promise<ImAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.contents)) {
      query["Contents"] = request.contents;
    }

    if (!Util.isUnset(request.images)) {
      query["Images"] = request.images;
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

    if (!Util.isUnset(request.scenes)) {
      query["Scenes"] = request.scenes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImAudit",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImAuditResponse>(await this.callApi(params, req, runtime), new ImAuditResponse({}));
  }

  /**
   * @summary Reviews images and text and returns the review results.
   *
   * @description *   The moderation results are synchronously returned after the moderation is complete.
   * *   You can use the image and text moderation feature only in the China (Beijing), China (Shanghai), and Singapore regions.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ImAuditRequest
   * @return ImAuditResponse
   */
  async imAudit(request: ImAuditRequest): Promise<ImAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imAuditWithOptions(request, runtime);
  }

  /**
   * @summary Submits a job of importing text files to a text fingerprint library.
   *
   * @description *   You can call this operation to import multiple text files to a text fingerprint library at a time. The system extracts fingerprints from the text files and saves the fingerprints to the text fingerprint library.
   * *   You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ImportFpShotJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ImportFpShotJobResponse
   */
  async importFpShotJobWithOptions(request: ImportFpShotJobRequest, runtime: $Util.RuntimeOptions): Promise<ImportFpShotJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
    }

    if (!Util.isUnset(request.fpImportConfig)) {
      query["FpImportConfig"] = request.fpImportConfig;
    }

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
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

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportFpShotJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportFpShotJobResponse>(await this.callApi(params, req, runtime), new ImportFpShotJobResponse({}));
  }

  /**
   * @summary Submits a job of importing text files to a text fingerprint library.
   *
   * @description *   You can call this operation to import multiple text files to a text fingerprint library at a time. The system extracts fingerprints from the text files and saves the fingerprints to the text fingerprint library.
   * *   You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ImportFpShotJobRequest
   * @return ImportFpShotJobResponse
   */
  async importFpShotJob(request: ImportFpShotJobRequest): Promise<ImportFpShotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importFpShotJobWithOptions(request, runtime);
  }

  /**
   * @summary Queries all media buckets bound to the media library.
   *
   * @description A maximum of 100 media buckets can be returned.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListAllMediaBucketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAllMediaBucketResponse
   */
  async listAllMediaBucketWithOptions(request: ListAllMediaBucketRequest, runtime: $Util.RuntimeOptions): Promise<ListAllMediaBucketResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "ListAllMediaBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAllMediaBucketResponse>(await this.callApi(params, req, runtime), new ListAllMediaBucketResponse({}));
  }

  /**
   * @summary Queries all media buckets bound to the media library.
   *
   * @description A maximum of 100 media buckets can be returned.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListAllMediaBucketRequest
   * @return ListAllMediaBucketResponse
   */
  async listAllMediaBucket(request: ListAllMediaBucketRequest): Promise<ListAllMediaBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllMediaBucketWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of entities in a custom library.
   *
   * @param request ListCustomEntitiesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomEntitiesResponse
   */
  async listCustomEntitiesWithOptions(request: ListCustomEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomEntitiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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
      action: "ListCustomEntities",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomEntitiesResponse>(await this.callApi(params, req, runtime), new ListCustomEntitiesResponse({}));
  }

  /**
   * @summary Queries a list of entities in a custom library.
   *
   * @param request ListCustomEntitiesRequest
   * @return ListCustomEntitiesResponse
   */
  async listCustomEntities(request: ListCustomEntitiesRequest): Promise<ListCustomEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomEntitiesWithOptions(request, runtime);
  }

  /**
   * @param request ListCustomGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomGroupsResponse
   */
  async listCustomGroupsWithOptions(request: ListCustomGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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
      action: "ListCustomGroups",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomGroupsResponse>(await this.callApi(params, req, runtime), new ListCustomGroupsResponse({}));
  }

  /**
   * @param request ListCustomGroupsRequest
   * @return ListCustomGroupsResponse
   */
  async listCustomGroups(request: ListCustomGroupsRequest): Promise<ListCustomGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about all figures and faces in a specific figure library.
   *
   * @description You can specify the ID of a figure or a figure library to query the corresponding information. If neither the figure ID nor figure library ID is specified, the operation returns the information about all figures and faces in all figure libraries within the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListCustomPersonsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomPersonsResponse
   */
  async listCustomPersonsWithOptions(request: ListCustomPersonsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomPersonsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.personId)) {
      query["PersonId"] = request.personId;
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
      action: "ListCustomPersons",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomPersonsResponse>(await this.callApi(params, req, runtime), new ListCustomPersonsResponse({}));
  }

  /**
   * @summary Queries the information about all figures and faces in a specific figure library.
   *
   * @description You can specify the ID of a figure or a figure library to query the corresponding information. If neither the figure ID nor figure library ID is specified, the operation returns the information about all figures and faces in all figure libraries within the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListCustomPersonsRequest
   * @return ListCustomPersonsResponse
   */
  async listCustomPersons(request: ListCustomPersonsRequest): Promise<ListCustomPersonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomPersonsWithOptions(request, runtime);
  }

  /**
   * @param request ListCustomViewsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomViewsResponse
   */
  async listCustomViewsWithOptions(request: ListCustomViewsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomViewsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!Util.isUnset(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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
      action: "ListCustomViews",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomViewsResponse>(await this.callApi(params, req, runtime), new ListCustomViewsResponse({}));
  }

  /**
   * @param request ListCustomViewsRequest
   * @return ListCustomViewsResponse
   */
  async listCustomViews(request: ListCustomViewsRequest): Promise<ListCustomViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomViewsWithOptions(request, runtime);
  }

  /**
   * @summary Queries media fingerprint libraries.
   *
   * @description *   You can call this operation to query the status and information about the media fingerprint libraries based on the specified IDs.
   * *   You can query text fingerprint libraries only in the China (Shanghai) region.
   * *   You can call this operation to query up to 10 media fingerprint libraries.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListFpShotDBRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFpShotDBResponse
   */
  async listFpShotDBWithOptions(request: ListFpShotDBRequest, runtime: $Util.RuntimeOptions): Promise<ListFpShotDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fpDBIds)) {
      query["FpDBIds"] = request.fpDBIds;
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
      action: "ListFpShotDB",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFpShotDBResponse>(await this.callApi(params, req, runtime), new ListFpShotDBResponse({}));
  }

  /**
   * @summary Queries media fingerprint libraries.
   *
   * @description *   You can call this operation to query the status and information about the media fingerprint libraries based on the specified IDs.
   * *   You can query text fingerprint libraries only in the China (Shanghai) region.
   * *   You can call this operation to query up to 10 media fingerprint libraries.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListFpShotDBRequest
   * @return ListFpShotDBResponse
   */
  async listFpShotDB(request: ListFpShotDBRequest): Promise<ListFpShotDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFpShotDBWithOptions(request, runtime);
  }

  /**
   * @summary Queries media files in a media fingerprint library.
   *
   * @description *   You can call this operation to query media files in a specific media fingerprint library based on the library ID. This operation supports paged queries.
   * *   You can call this operation only in the China (Beijing), China (Hangzhou), China (Shanghai), and Singapore regions.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListFpShotFilesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFpShotFilesResponse
   */
  async listFpShotFilesWithOptions(request: ListFpShotFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFpShotFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
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

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFpShotFiles",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFpShotFilesResponse>(await this.callApi(params, req, runtime), new ListFpShotFilesResponse({}));
  }

  /**
   * @summary Queries media files in a media fingerprint library.
   *
   * @description *   You can call this operation to query media files in a specific media fingerprint library based on the library ID. This operation supports paged queries.
   * *   You can call this operation only in the China (Beijing), China (Hangzhou), China (Shanghai), and Singapore regions.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListFpShotFilesRequest
   * @return ListFpShotFilesResponse
   */
  async listFpShotFiles(request: ListFpShotFilesRequest): Promise<ListFpShotFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFpShotFilesWithOptions(request, runtime);
  }

  /**
   * @summary Queries jobs of importing text files to a text fingerprint library.
   *
   * @description You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListFpShotImportJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFpShotImportJobResponse
   */
  async listFpShotImportJobWithOptions(request: ListFpShotImportJobRequest, runtime: $Util.RuntimeOptions): Promise<ListFpShotImportJobResponse> {
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
      action: "ListFpShotImportJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFpShotImportJobResponse>(await this.callApi(params, req, runtime), new ListFpShotImportJobResponse({}));
  }

  /**
   * @summary Queries jobs of importing text files to a text fingerprint library.
   *
   * @description You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListFpShotImportJobRequest
   * @return ListFpShotImportJobResponse
   */
  async listFpShotImportJob(request: ListFpShotImportJobRequest): Promise<ListFpShotImportJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFpShotImportJobWithOptions(request, runtime);
  }

  /**
   * @summary Traverses transcoding jobs
   *
   * @description *   By default, the returned transcoding jobs are sorted by CreationTime in descending order.
   * *   You can call this operation to return transcoding jobs of the last 90 days. The jobs are returned based on the specified time range.
   * *   You can filter query results by configuring request parameters such as job status, creation time interval, and ApsaraVideo Media Processing (MPS) queue for transcoding.
   * *   By default, MPS does not allow you to access data across regions within the same account. Before you call this operation, make sure that the region that you specify is the same as the region of the transcoding jobs to be queried. Otherwise, this operation may fail to be called, or invalid information may be returned.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobResponse
   */
  async listJobWithOptions(request: ListJobRequest, runtime: $Util.RuntimeOptions): Promise<ListJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfJobCreatedTimeRange)) {
      query["EndOfJobCreatedTimeRange"] = request.endOfJobCreatedTimeRange;
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
      action: "ListJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobResponse>(await this.callApi(params, req, runtime), new ListJobResponse({}));
  }

  /**
   * @summary Traverses transcoding jobs
   *
   * @description *   By default, the returned transcoding jobs are sorted by CreationTime in descending order.
   * *   You can call this operation to return transcoding jobs of the last 90 days. The jobs are returned based on the specified time range.
   * *   You can filter query results by configuring request parameters such as job status, creation time interval, and ApsaraVideo Media Processing (MPS) queue for transcoding.
   * *   By default, MPS does not allow you to access data across regions within the same account. Before you call this operation, make sure that the region that you specify is the same as the region of the transcoding jobs to be queried. Otherwise, this operation may fail to be called, or invalid information may be returned.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListJobRequest
   * @return ListJobResponse
   */
  async listJob(request: ListJobRequest): Promise<ListJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobWithOptions(request, runtime);
  }

  /**
   * @summary Queries the execution instances of a media workflow.
   *
   * @description This operation returns execution instances only in the recent 90 days.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListMediaWorkflowExecutionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListMediaWorkflowExecutionsResponse
   */
  async listMediaWorkflowExecutionsWithOptions(request: ListMediaWorkflowExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaWorkflowExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputFileURL)) {
      query["InputFileURL"] = request.inputFileURL;
    }

    if (!Util.isUnset(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!Util.isUnset(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
    }

    if (!Util.isUnset(request.mediaWorkflowName)) {
      query["MediaWorkflowName"] = request.mediaWorkflowName;
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
      action: "ListMediaWorkflowExecutions",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMediaWorkflowExecutionsResponse>(await this.callApi(params, req, runtime), new ListMediaWorkflowExecutionsResponse({}));
  }

  /**
   * @summary Queries the execution instances of a media workflow.
   *
   * @description This operation returns execution instances only in the recent 90 days.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request ListMediaWorkflowExecutionsRequest
   * @return ListMediaWorkflowExecutionsResponse
   */
  async listMediaWorkflowExecutions(request: ListMediaWorkflowExecutionsRequest): Promise<ListMediaWorkflowExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaWorkflowExecutionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the template analysis job and returns a list of available preset templates when the template analysis job is complete.
   *
   * @description The time when the job was created.
   *
   * @param request QueryAnalysisJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAnalysisJobListResponse
   */
  async queryAnalysisJobListWithOptions(request: QueryAnalysisJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAnalysisJobListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.analysisJobIds)) {
      query["AnalysisJobIds"] = request.analysisJobIds;
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
      action: "QueryAnalysisJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAnalysisJobListResponse>(await this.callApi(params, req, runtime), new QueryAnalysisJobListResponse({}));
  }

  /**
   * @summary Queries the template analysis job and returns a list of available preset templates when the template analysis job is complete.
   *
   * @description The time when the job was created.
   *
   * @param request QueryAnalysisJobListRequest
   * @return QueryAnalysisJobListResponse
   */
  async queryAnalysisJobList(request: QueryAnalysisJobListRequest): Promise<QueryAnalysisJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAnalysisJobListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the jobs of clearing or deleting a media fingerprint library.
   *
   * @description You can call this operation to query the specified jobs of clearing or deleting a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryFpDBDeleteJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryFpDBDeleteJobListResponse
   */
  async queryFpDBDeleteJobListWithOptions(request: QueryFpDBDeleteJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryFpDBDeleteJobListResponse> {
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
      action: "QueryFpDBDeleteJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFpDBDeleteJobListResponse>(await this.callApi(params, req, runtime), new QueryFpDBDeleteJobListResponse({}));
  }

  /**
   * @summary Queries the jobs of clearing or deleting a media fingerprint library.
   *
   * @description You can call this operation to query the specified jobs of clearing or deleting a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryFpDBDeleteJobListRequest
   * @return QueryFpDBDeleteJobListResponse
   */
  async queryFpDBDeleteJobList(request: QueryFpDBDeleteJobListRequest): Promise<QueryFpDBDeleteJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFpDBDeleteJobListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the jobs of deleting media files from a media fingerprint library.
   *
   * @description You can call this operation to query the specified jobs of deleting media files from a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryFpFileDeleteJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryFpFileDeleteJobListResponse
   */
  async queryFpFileDeleteJobListWithOptions(request: QueryFpFileDeleteJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryFpFileDeleteJobListResponse> {
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
      action: "QueryFpFileDeleteJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFpFileDeleteJobListResponse>(await this.callApi(params, req, runtime), new QueryFpFileDeleteJobListResponse({}));
  }

  /**
   * @summary Queries the jobs of deleting media files from a media fingerprint library.
   *
   * @description You can call this operation to query the specified jobs of deleting media files from a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryFpFileDeleteJobListRequest
   * @return QueryFpFileDeleteJobListResponse
   */
  async queryFpFileDeleteJobList(request: QueryFpFileDeleteJobListRequest): Promise<QueryFpFileDeleteJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFpFileDeleteJobListWithOptions(request, runtime);
  }

  /**
   * @summary Queries media fingerprint analysis jobs. You can call this operation to query video fingerprint analysis jobs and text fingerprint analysis jobs.
   *
   * @description *   After a media fingerprint analysis job is submitted, the media fingerprinting service compares the fingerprints of the job input with those of the media files in the media fingerprint library. You can call this operation to query the job results.
   * *   You can query the results of a text fingerprint analysis job only in the China (Shanghai) region.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryFpShotJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryFpShotJobListResponse
   */
  async queryFpShotJobListWithOptions(request: QueryFpShotJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryFpShotJobListResponse> {
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
      action: "QueryFpShotJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFpShotJobListResponse>(await this.callApi(params, req, runtime), new QueryFpShotJobListResponse({}));
  }

  /**
   * @summary Queries media fingerprint analysis jobs. You can call this operation to query video fingerprint analysis jobs and text fingerprint analysis jobs.
   *
   * @description *   After a media fingerprint analysis job is submitted, the media fingerprinting service compares the fingerprints of the job input with those of the media files in the media fingerprint library. You can call this operation to query the job results.
   * *   You can query the results of a text fingerprint analysis job only in the China (Shanghai) region.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryFpShotJobListRequest
   * @return QueryFpShotJobListResponse
   */
  async queryFpShotJobList(request: QueryFpShotJobListRequest): Promise<QueryFpShotJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFpShotJobListWithOptions(request, runtime);
  }

  /**
   * @param request QueryIProductionJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryIProductionJobResponse
   */
  async queryIProductionJobWithOptions(request: QueryIProductionJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryIProductionJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "QueryIProductionJob",
      version: "2014-06-18",
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

  /**
   * @param request QueryIProductionJobRequest
   * @return QueryIProductionJobResponse
   */
  async queryIProductionJob(request: QueryIProductionJobRequest): Promise<QueryIProductionJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIProductionJobWithOptions(request, runtime);
  }

  /**
   * @summary Queries transcoding jobs at a time by job ID.
   *
   * @description *   By default, returned jobs are sorted in descending order by CreationTime.
   * *   You can call this operation to query up to 10 transcoding jobs at a time.
   * *   If you do not set the JobIds parameter, the `InvalidParameter` error code is returned.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request QueryJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryJobListResponse
   */
  async queryJobListWithOptions(request: QueryJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryJobListResponse> {
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
      action: "QueryJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryJobListResponse>(await this.callApi(params, req, runtime), new QueryJobListResponse({}));
  }

  /**
   * @summary Queries transcoding jobs at a time by job ID.
   *
   * @description *   By default, returned jobs are sorted in descending order by CreationTime.
   * *   You can call this operation to query up to 10 transcoding jobs at a time.
   * *   If you do not set the JobIds parameter, the `InvalidParameter` error code is returned.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request QueryJobListRequest
   * @return QueryJobListResponse
   */
  async queryJobList(request: QueryJobListRequest): Promise<QueryJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a content moderation job.
   *
   * @description In the content moderation results, the moderation results of the video are sorted in ascending order by time into a timeline. If the video is long, the content moderation results are paginated, and the first page is returned. You can call this operation again to query the remaining moderation results of the video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaCensorJobDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryMediaCensorJobDetailResponse
   */
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
      version: "2014-06-18",
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

  /**
   * @summary Queries the information about a content moderation job.
   *
   * @description In the content moderation results, the moderation results of the video are sorted in ascending order by time into a timeline. If the video is long, the content moderation results are paginated, and the first page is returned. You can call this operation again to query the remaining moderation results of the video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaCensorJobDetailRequest
   * @return QueryMediaCensorJobDetailResponse
   */
  async queryMediaCensorJobDetail(request: QueryMediaCensorJobDetailRequest): Promise<QueryMediaCensorJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaCensorJobDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries content moderation jobs.
   *
   * @description You can call this operation to query only the content moderation jobs within three months.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaCensorJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryMediaCensorJobListResponse
   */
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
      version: "2014-06-18",
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

  /**
   * @summary Queries content moderation jobs.
   *
   * @description You can call this operation to query only the content moderation jobs within three months.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaCensorJobListRequest
   * @return QueryMediaCensorJobListResponse
   */
  async queryMediaCensorJobList(request: QueryMediaCensorJobListRequest): Promise<QueryMediaCensorJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaCensorJobListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the results of media information analysis jobs.
   *
   * @description *   In asynchronous mode, the media information can be retrieved only after the Message Service (MNS) callback of **submitting a media information job** is returned. If you have not retrieved the media information for a long period, the job may have failed.
   * *   You can call this operation to query up to 10 media information analysis jobs at a time.
   * *   By default, returned jobs are sorted in descending order by CreationTime.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaInfoJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryMediaInfoJobListResponse
   */
  async queryMediaInfoJobListWithOptions(request: QueryMediaInfoJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaInfoJobListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaInfoJobIds)) {
      query["MediaInfoJobIds"] = request.mediaInfoJobIds;
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
      action: "QueryMediaInfoJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaInfoJobListResponse>(await this.callApi(params, req, runtime), new QueryMediaInfoJobListResponse({}));
  }

  /**
   * @summary Queries the results of media information analysis jobs.
   *
   * @description *   In asynchronous mode, the media information can be retrieved only after the Message Service (MNS) callback of **submitting a media information job** is returned. If you have not retrieved the media information for a long period, the job may have failed.
   * *   You can call this operation to query up to 10 media information analysis jobs at a time.
   * *   By default, returned jobs are sorted in descending order by CreationTime.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaInfoJobListRequest
   * @return QueryMediaInfoJobListResponse
   */
  async queryMediaInfoJobList(request: QueryMediaInfoJobListRequest): Promise<QueryMediaInfoJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaInfoJobListWithOptions(request, runtime);
  }

  /**
   * @summary Queries media files based on media file IDs.
   *
   * @description You can call this operation to query up to 10 media files at a time.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request QueryMediaListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryMediaListResponse
   */
  async queryMediaListWithOptions(request: QueryMediaListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeMediaInfo)) {
      query["IncludeMediaInfo"] = request.includeMediaInfo;
    }

    if (!Util.isUnset(request.includePlayList)) {
      query["IncludePlayList"] = request.includePlayList;
    }

    if (!Util.isUnset(request.includeSnapshotList)) {
      query["IncludeSnapshotList"] = request.includeSnapshotList;
    }

    if (!Util.isUnset(request.includeSummaryList)) {
      query["IncludeSummaryList"] = request.includeSummaryList;
    }

    if (!Util.isUnset(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
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
      action: "QueryMediaList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaListResponse>(await this.callApi(params, req, runtime), new QueryMediaListResponse({}));
  }

  /**
   * @summary Queries media files based on media file IDs.
   *
   * @description You can call this operation to query up to 10 media files at a time.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request QueryMediaListRequest
   * @return QueryMediaListResponse
   */
  async queryMediaList(request: QueryMediaListRequest): Promise<QueryMediaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaListWithOptions(request, runtime);
  }

  /**
   * @summary Queries media files based on their Object Storage Service (OSS) URLs.
   *
   * @description *   You can call this operation to query up to 10 media files at a time.
   * *   Before you call this operation, you must call the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation to add media files.
   * *   You can call this operation to query only media files that are processed in a workflow. To obtain comprehensive information about a media file that is newly uploaded to OSS, you can call this operation after the corresponding workflow is complete. To query media files that are not processed in a workflow, you must call the [SubmitMediaInfoJob](https://help.aliyun.com/document_detail/29220.html) operation to submit a media information analysis job. After the job is complete, you can query the information about the media files.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request QueryMediaListByURLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryMediaListByURLResponse
   */
  async queryMediaListByURLWithOptions(request: QueryMediaListByURLRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaListByURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileURLs)) {
      query["FileURLs"] = request.fileURLs;
    }

    if (!Util.isUnset(request.includeMediaInfo)) {
      query["IncludeMediaInfo"] = request.includeMediaInfo;
    }

    if (!Util.isUnset(request.includePlayList)) {
      query["IncludePlayList"] = request.includePlayList;
    }

    if (!Util.isUnset(request.includeSnapshotList)) {
      query["IncludeSnapshotList"] = request.includeSnapshotList;
    }

    if (!Util.isUnset(request.includeSummaryList)) {
      query["IncludeSummaryList"] = request.includeSummaryList;
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
      action: "QueryMediaListByURL",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaListByURLResponse>(await this.callApi(params, req, runtime), new QueryMediaListByURLResponse({}));
  }

  /**
   * @summary Queries media files based on their Object Storage Service (OSS) URLs.
   *
   * @description *   You can call this operation to query up to 10 media files at a time.
   * *   Before you call this operation, you must call the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation to add media files.
   * *   You can call this operation to query only media files that are processed in a workflow. To obtain comprehensive information about a media file that is newly uploaded to OSS, you can call this operation after the corresponding workflow is complete. To query media files that are not processed in a workflow, you must call the [SubmitMediaInfoJob](https://help.aliyun.com/document_detail/29220.html) operation to submit a media information analysis job. After the job is complete, you can query the information about the media files.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request QueryMediaListByURLRequest
   * @return QueryMediaListByURLResponse
   */
  async queryMediaListByURL(request: QueryMediaListByURLRequest): Promise<QueryMediaListByURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaListByURLWithOptions(request, runtime);
  }

  /**
   * @summary Queries media workflow execution instances.
   *
   * @description *   You can call this operation to query a maximum of 10 media workflow execution instances at a time.
   * *   Before you call this operation, make sure that the workflow pipeline is enabled. Otherwise, the workflow may not run as expected. For example, the following exceptions may occur: the workflow node is invalid and jobs created in the workflow cannot be executed.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaWorkflowExecutionListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryMediaWorkflowExecutionListResponse
   */
  async queryMediaWorkflowExecutionListWithOptions(request: QueryMediaWorkflowExecutionListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaWorkflowExecutionListResponse> {
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

    if (!Util.isUnset(request.runIds)) {
      query["RunIds"] = request.runIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMediaWorkflowExecutionList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaWorkflowExecutionListResponse>(await this.callApi(params, req, runtime), new QueryMediaWorkflowExecutionListResponse({}));
  }

  /**
   * @summary Queries media workflow execution instances.
   *
   * @description *   You can call this operation to query a maximum of 10 media workflow execution instances at a time.
   * *   Before you call this operation, make sure that the workflow pipeline is enabled. Otherwise, the workflow may not run as expected. For example, the following exceptions may occur: the workflow node is invalid and jobs created in the workflow cannot be executed.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaWorkflowExecutionListRequest
   * @return QueryMediaWorkflowExecutionListResponse
   */
  async queryMediaWorkflowExecutionList(request: QueryMediaWorkflowExecutionListRequest): Promise<QueryMediaWorkflowExecutionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaWorkflowExecutionListWithOptions(request, runtime);
  }

  /**
   * @summary Queries registered media workflows.
   *
   * @description You can call this operation to query up to 10 media workflows at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaWorkflowListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryMediaWorkflowListResponse
   */
  async queryMediaWorkflowListWithOptions(request: QueryMediaWorkflowListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaWorkflowListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaWorkflowIds)) {
      query["MediaWorkflowIds"] = request.mediaWorkflowIds;
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
      action: "QueryMediaWorkflowList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaWorkflowListResponse>(await this.callApi(params, req, runtime), new QueryMediaWorkflowListResponse({}));
  }

  /**
   * @summary Queries registered media workflows.
   *
   * @description You can call this operation to query up to 10 media workflows at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryMediaWorkflowListRequest
   * @return QueryMediaWorkflowListResponse
   */
  async queryMediaWorkflowList(request: QueryMediaWorkflowListRequest): Promise<QueryMediaWorkflowListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaWorkflowListWithOptions(request, runtime);
  }

  /**
   * @summary Queries an ApsaraVideo Media Processing (MPS) queue by using the ID of the queue.
   *
   * @description *   You can call this operation to query up to 10 MPS queues at a time.
   * *   If `"Code": "InvalidIdentity.ServiceDisabled","Message": "The request identity was not allowed operated.","Recommend"` is returned after you call this operation, check whether the RAM user that you use is assigned the AliyunMTSDefaultRole role to obtain the permissions on MPS and whether your Alibaba Cloud account has overdue payments.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryPipelineListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryPipelineListResponse
   */
  async queryPipelineListWithOptions(request: QueryPipelineListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPipelineListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pipelineIds)) {
      query["PipelineIds"] = request.pipelineIds;
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
      action: "QueryPipelineList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPipelineListResponse>(await this.callApi(params, req, runtime), new QueryPipelineListResponse({}));
  }

  /**
   * @summary Queries an ApsaraVideo Media Processing (MPS) queue by using the ID of the queue.
   *
   * @description *   You can call this operation to query up to 10 MPS queues at a time.
   * *   If `"Code": "InvalidIdentity.ServiceDisabled","Message": "The request identity was not allowed operated.","Recommend"` is returned after you call this operation, check whether the RAM user that you use is assigned the AliyunMTSDefaultRole role to obtain the permissions on MPS and whether your Alibaba Cloud account has overdue payments.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryPipelineListRequest
   * @return QueryPipelineListResponse
   */
  async queryPipelineList(request: QueryPipelineListRequest): Promise<QueryPipelineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPipelineListWithOptions(request, runtime);
  }

  /**
   * @param request QuerySmarttagJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QuerySmarttagJobResponse
   */
  async querySmarttagJobWithOptions(request: QuerySmarttagJobRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmarttagJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
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
      action: "QuerySmarttagJob",
      version: "2014-06-18",
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

  /**
   * @param request QuerySmarttagJobRequest
   * @return QuerySmarttagJobResponse
   */
  async querySmarttagJob(request: QuerySmarttagJobRequest): Promise<QuerySmarttagJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmarttagJobWithOptions(request, runtime);
  }

  /**
   * @summary Queries the analysis template of a smart tagging job.
   *
   * @description If you call this operation to query the information about a smart tagging template, you must specify the template ID. Otherwise, the operation returns the information about all the templates that are created by the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QuerySmarttagTemplateListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QuerySmarttagTemplateListResponse
   */
  async querySmarttagTemplateListWithOptions(request: QuerySmarttagTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmarttagTemplateListResponse> {
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySmarttagTemplateList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySmarttagTemplateListResponse>(await this.callApi(params, req, runtime), new QuerySmarttagTemplateListResponse({}));
  }

  /**
   * @summary Queries the analysis template of a smart tagging job.
   *
   * @description If you call this operation to query the information about a smart tagging template, you must specify the template ID. Otherwise, the operation returns the information about all the templates that are created by the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QuerySmarttagTemplateListRequest
   * @return QuerySmarttagTemplateListResponse
   */
  async querySmarttagTemplateList(request: QuerySmarttagTemplateListRequest): Promise<QuerySmarttagTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmarttagTemplateListWithOptions(request, runtime);
  }

  /**
   * @summary Queries snapshot jobs.
   *
   * @description The status of the snapshot jobs that you want to query.
   * *   **Submitted**: The job was submitted.
   * *   **Snapshoting**: The job is being processed.
   * *   **Success**: The job was successfully processed.
   * *   **Fail**: The job failed.
   *
   * @param request QuerySnapshotJobListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QuerySnapshotJobListResponse
   */
  async querySnapshotJobListWithOptions(request: QuerySnapshotJobListRequest, runtime: $Util.RuntimeOptions): Promise<QuerySnapshotJobListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endOfJobCreatedTimeRange)) {
      query["EndOfJobCreatedTimeRange"] = request.endOfJobCreatedTimeRange;
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

    if (!Util.isUnset(request.snapshotJobIds)) {
      query["SnapshotJobIds"] = request.snapshotJobIds;
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
      action: "QuerySnapshotJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySnapshotJobListResponse>(await this.callApi(params, req, runtime), new QuerySnapshotJobListResponse({}));
  }

  /**
   * @summary Queries snapshot jobs.
   *
   * @description The status of the snapshot jobs that you want to query.
   * *   **Submitted**: The job was submitted.
   * *   **Snapshoting**: The job is being processed.
   * *   **Success**: The job was successfully processed.
   * *   **Fail**: The job failed.
   *
   * @param request QuerySnapshotJobListRequest
   * @return QuerySnapshotJobListResponse
   */
  async querySnapshotJobList(request: QuerySnapshotJobListRequest): Promise<QuerySnapshotJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySnapshotJobListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query up to 10 transcoding templates at a time.
   *
   * @description The IDs of the transcoding templates that you want to query. You can query up to 10 transcoding templates at a time. Separate multiple IDs of custom transcoding templates with commas (,).
   *
   * @param request QueryTemplateListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTemplateListResponse
   */
  async queryTemplateListWithOptions(request: QueryTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTemplateListResponse> {
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

    if (!Util.isUnset(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTemplateList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTemplateListResponse>(await this.callApi(params, req, runtime), new QueryTemplateListResponse({}));
  }

  /**
   * @summary You can call this operation to query up to 10 transcoding templates at a time.
   *
   * @description The IDs of the transcoding templates that you want to query. You can query up to 10 transcoding templates at a time. Separate multiple IDs of custom transcoding templates with commas (,).
   *
   * @param request QueryTemplateListRequest
   * @return QueryTemplateListResponse
   */
  async queryTemplateList(request: QueryTemplateListRequest): Promise<QueryTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTemplateListWithOptions(request, runtime);
  }

  /**
   * @summary Queries watermark templates.
   *
   * @description You can call this operation to query up to 10 watermark templates at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryWaterMarkTemplateListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryWaterMarkTemplateListResponse
   */
  async queryWaterMarkTemplateListWithOptions(request: QueryWaterMarkTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<QueryWaterMarkTemplateListResponse> {
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

    if (!Util.isUnset(request.waterMarkTemplateIds)) {
      query["WaterMarkTemplateIds"] = request.waterMarkTemplateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryWaterMarkTemplateList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryWaterMarkTemplateListResponse>(await this.callApi(params, req, runtime), new QueryWaterMarkTemplateListResponse({}));
  }

  /**
   * @summary Queries watermark templates.
   *
   * @description You can call this operation to query up to 10 watermark templates at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request QueryWaterMarkTemplateListRequest
   * @return QueryWaterMarkTemplateListResponse
   */
  async queryWaterMarkTemplateList(request: QueryWaterMarkTemplateListRequest): Promise<QueryWaterMarkTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWaterMarkTemplateListWithOptions(request, runtime);
  }

  /**
   * @summary Registers a custom face.
   *
   * @description *   You can call this operation to register only one custom face at a time.
   * *   A maximum of 10 images can be registered for a custom face.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request RegisterCustomFaceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RegisterCustomFaceResponse
   */
  async registerCustomFaceWithOptions(request: RegisterCustomFaceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterCustomFaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.personId)) {
      query["PersonId"] = request.personId;
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
      action: "RegisterCustomFace",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterCustomFaceResponse>(await this.callApi(params, req, runtime), new RegisterCustomFaceResponse({}));
  }

  /**
   * @summary Registers a custom face.
   *
   * @description *   You can call this operation to register only one custom face at a time.
   * *   A maximum of 10 images can be registered for a custom face.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request RegisterCustomFaceRequest
   * @return RegisterCustomFaceResponse
   */
  async registerCustomFace(request: RegisterCustomFaceRequest): Promise<RegisterCustomFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerCustomFaceWithOptions(request, runtime);
  }

  /**
   * @param request RegisterCustomViewRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RegisterCustomViewResponse
   */
  async registerCustomViewWithOptions(request: RegisterCustomViewRequest, runtime: $Util.RuntimeOptions): Promise<RegisterCustomViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!Util.isUnset(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
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
      action: "RegisterCustomView",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterCustomViewResponse>(await this.callApi(params, req, runtime), new RegisterCustomViewResponse({}));
  }

  /**
   * @param request RegisterCustomViewRequest
   * @return RegisterCustomViewResponse
   */
  async registerCustomView(request: RegisterCustomViewRequest): Promise<RegisterCustomViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerCustomViewWithOptions(request, runtime);
  }

  /**
   * @summary Queries media workflows in the specified state.
   *
   * @description You can call this operation to query media workflows in the specified state. If you do not specify the state, all media workflows are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SearchMediaWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchMediaWorkflowResponse
   */
  async searchMediaWorkflowWithOptions(request: SearchMediaWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<SearchMediaWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.stateList)) {
      query["StateList"] = request.stateList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchMediaWorkflowResponse>(await this.callApi(params, req, runtime), new SearchMediaWorkflowResponse({}));
  }

  /**
   * @summary Queries media workflows in the specified state.
   *
   * @description You can call this operation to query media workflows in the specified state. If you do not specify the state, all media workflows are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SearchMediaWorkflowRequest
   * @return SearchMediaWorkflowResponse
   */
  async searchMediaWorkflow(request: SearchMediaWorkflowRequest): Promise<SearchMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Searches for ApsaraVideo Media Processing (MPS) queues in the specified state.
   *
   * @description You can call this operation to query MPS queues in the specified state. If you do not specify the state, all MPS queues are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SearchPipelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchPipelineResponse
   */
  async searchPipelineWithOptions(request: SearchPipelineRequest, runtime: $Util.RuntimeOptions): Promise<SearchPipelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchPipeline",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchPipelineResponse>(await this.callApi(params, req, runtime), new SearchPipelineResponse({}));
  }

  /**
   * @summary Searches for ApsaraVideo Media Processing (MPS) queues in the specified state.
   *
   * @description You can call this operation to query MPS queues in the specified state. If you do not specify the state, all MPS queues are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SearchPipelineRequest
   * @return SearchPipelineResponse
   */
  async searchPipeline(request: SearchPipelineRequest): Promise<SearchPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchPipelineWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query custom transcoding templates in the specified state.
   *
   * @description You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SearchTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchTemplateResponse
   */
  async searchTemplateWithOptions(request: SearchTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SearchTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTemplateResponse>(await this.callApi(params, req, runtime), new SearchTemplateResponse({}));
  }

  /**
   * @summary You can call this operation to query custom transcoding templates in the specified state.
   *
   * @description You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SearchTemplateRequest
   * @return SearchTemplateResponse
   */
  async searchTemplate(request: SearchTemplateRequest): Promise<SearchTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Searches for watermark templates.
   *
   * @description The total number of returned entries.
   *
   * @param request SearchWaterMarkTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchWaterMarkTemplateResponse
   */
  async searchWaterMarkTemplateWithOptions(request: SearchWaterMarkTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SearchWaterMarkTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new SearchWaterMarkTemplateResponse({}));
  }

  /**
   * @summary Searches for watermark templates.
   *
   * @description The total number of returned entries.
   *
   * @param request SearchWaterMarkTemplateRequest
   * @return SearchWaterMarkTemplateResponse
   */
  async searchWaterMarkTemplate(request: SearchWaterMarkTemplateRequest): Promise<SearchWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchWaterMarkTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Submits a preset template analysis job.
   *
   * @description *   After you call the SubmitAnalysisJob operation to submit a preset template analysis job, ApsaraVideo Media Processing (MPS) intelligently analyzes the input file of the job and recommends a suitable preset template. You can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html) operation to query the analysis result or enable asynchronous notifications to receive the analysis result.
   * *   The analysis result is retained only for two weeks after it is generated. The analysis result is deleted after two weeks. If you use the recommended preset template in a transcoding job after two weeks, the job fails, and the `AnalysisResultNotFound` error code is returned.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitAnalysisJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitAnalysisJobResponse
   */
  async submitAnalysisJobWithOptions(request: SubmitAnalysisJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAnalysisJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.analysisConfig)) {
      query["AnalysisConfig"] = request.analysisConfig;
    }

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
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

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAnalysisJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAnalysisJobResponse>(await this.callApi(params, req, runtime), new SubmitAnalysisJobResponse({}));
  }

  /**
   * @summary Submits a preset template analysis job.
   *
   * @description *   After you call the SubmitAnalysisJob operation to submit a preset template analysis job, ApsaraVideo Media Processing (MPS) intelligently analyzes the input file of the job and recommends a suitable preset template. You can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html) operation to query the analysis result or enable asynchronous notifications to receive the analysis result.
   * *   The analysis result is retained only for two weeks after it is generated. The analysis result is deleted after two weeks. If you use the recommended preset template in a transcoding job after two weeks, the job fails, and the `AnalysisResultNotFound` error code is returned.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitAnalysisJobRequest
   * @return SubmitAnalysisJobResponse
   */
  async submitAnalysisJob(request: SubmitAnalysisJobRequest): Promise<SubmitAnalysisJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAnalysisJobWithOptions(request, runtime);
  }

  /**
   * @summary Submits a job of clearing or deleting a media fingerprint library.
   *
   * @description You can call this operation to clear or delete the specified media fingerprint library based on the library ID. If you clear a media fingerprint library, the content in the library is deleted, but the library is not deleted. If you delete a media fingerprint library, both the library and the content in the library are deleted. If you do not specify the operation type, the system clears the media fingerprint library by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitFpDBDeleteJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitFpDBDeleteJobResponse
   */
  async submitFpDBDeleteJobWithOptions(request: SubmitFpDBDeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFpDBDeleteJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.delType)) {
      query["DelType"] = request.delType;
    }

    if (!Util.isUnset(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
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

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitFpDBDeleteJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitFpDBDeleteJobResponse>(await this.callApi(params, req, runtime), new SubmitFpDBDeleteJobResponse({}));
  }

  /**
   * @summary Submits a job of clearing or deleting a media fingerprint library.
   *
   * @description You can call this operation to clear or delete the specified media fingerprint library based on the library ID. If you clear a media fingerprint library, the content in the library is deleted, but the library is not deleted. If you delete a media fingerprint library, both the library and the content in the library are deleted. If you do not specify the operation type, the system clears the media fingerprint library by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitFpDBDeleteJobRequest
   * @return SubmitFpDBDeleteJobResponse
   */
  async submitFpDBDeleteJob(request: SubmitFpDBDeleteJobRequest): Promise<SubmitFpDBDeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFpDBDeleteJobWithOptions(request, runtime);
  }

  /**
   * @summary Submits a job of deleting media files from a media fingerprint library.
   *
   * @description ## [](#)Limits
   * *   You can call this operation to delete up to 200 media files from a media fingerprint library at a time.
   * *   This operation is available in the following regions: China (Beijing), China (Hangzhou), China (Shanghai), and Singapore.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitFpFileDeleteJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitFpFileDeleteJobResponse
   */
  async submitFpFileDeleteJobWithOptions(request: SubmitFpFileDeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFpFileDeleteJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileIds)) {
      query["FileIds"] = request.fileIds;
    }

    if (!Util.isUnset(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
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

    if (!Util.isUnset(request.primaryKeys)) {
      query["PrimaryKeys"] = request.primaryKeys;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitFpFileDeleteJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitFpFileDeleteJobResponse>(await this.callApi(params, req, runtime), new SubmitFpFileDeleteJobResponse({}));
  }

  /**
   * @summary Submits a job of deleting media files from a media fingerprint library.
   *
   * @description ## [](#)Limits
   * *   You can call this operation to delete up to 200 media files from a media fingerprint library at a time.
   * *   This operation is available in the following regions: China (Beijing), China (Hangzhou), China (Shanghai), and Singapore.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitFpFileDeleteJobRequest
   * @return SubmitFpFileDeleteJobResponse
   */
  async submitFpFileDeleteJob(request: SubmitFpFileDeleteJobRequest): Promise<SubmitFpFileDeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFpFileDeleteJobWithOptions(request, runtime);
  }

  /**
   * @summary Submits a media fingerprint analysis job to query the media fingerprint repository for a media file with the identical or similar fingerprint as the input file.
   *
   * @description *   You can call this operation to submit a video, audio, image, or text fingerprint analysis job.
   * *   This operation asynchronously submits a job. The query results may not have been generated when the response is returned. After the results are generated, an asynchronous message is returned.
   * *   You can submit a text fingerprint analysis job only in the China (Shanghai) region.
   * *   The input file of the job must be in one of the following formats:
   *     *   Image formats: JPEG, PNG, and BMP.
   *     *   Video formats: MP4, AVI, MKV, MPG, TS, MOV, FLV, MXF.
   *     *   Video encoding formats: MPEG2, MPEG4, H264, HEVC, and WMV.
   * ### QPS limit
   * You can call this operation up to 150 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitFpShotJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitFpShotJobResponse
   */
  async submitFpShotJobWithOptions(request: SubmitFpShotJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFpShotJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fpShotConfig)) {
      query["FpShotConfig"] = request.fpShotConfig;
    }

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
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

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitFpShotJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitFpShotJobResponse>(await this.callApi(params, req, runtime), new SubmitFpShotJobResponse({}));
  }

  /**
   * @summary Submits a media fingerprint analysis job to query the media fingerprint repository for a media file with the identical or similar fingerprint as the input file.
   *
   * @description *   You can call this operation to submit a video, audio, image, or text fingerprint analysis job.
   * *   This operation asynchronously submits a job. The query results may not have been generated when the response is returned. After the results are generated, an asynchronous message is returned.
   * *   You can submit a text fingerprint analysis job only in the China (Shanghai) region.
   * *   The input file of the job must be in one of the following formats:
   *     *   Image formats: JPEG, PNG, and BMP.
   *     *   Video formats: MP4, AVI, MKV, MPG, TS, MOV, FLV, MXF.
   *     *   Video encoding formats: MPEG2, MPEG4, H264, HEVC, and WMV.
   * ### QPS limit
   * You can call this operation up to 150 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitFpShotJobRequest
   * @return SubmitFpShotJobResponse
   */
  async submitFpShotJob(request: SubmitFpShotJobRequest): Promise<SubmitFpShotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFpShotJobWithOptions(request, runtime);
  }

  /**
   * @description *   Jobs that are submitted by calling this operation run in an asynchronous manner. After a job is added to the ApsaraVideo Media Processing (MPS) queue, the job is scheduled to run. You can call the [QueryIProductionJob](https://help.aliyun.com/document_detail/170217.html) operation or configure a callback to query the job result.
   * *   Capabilities provided by the intelligent production feature vary based on the region. Before you call this operation to submit an intelligent production job, check whether the job is supported in the region in which your service is activated. For more information, see [Regions and endpoints](https://help.aliyun.com/document_detail/43248.html).
   * ### [](#qps)QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitIProductionJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitIProductionJobResponse
   */
  async submitIProductionJobWithOptions(request: SubmitIProductionJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitIProductionJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
    }

    if (!Util.isUnset(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!Util.isUnset(request.output)) {
      query["Output"] = request.output;
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

    if (!Util.isUnset(request.scheduleParams)) {
      query["ScheduleParams"] = request.scheduleParams;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitIProductionJob",
      version: "2014-06-18",
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

  /**
   * @description *   Jobs that are submitted by calling this operation run in an asynchronous manner. After a job is added to the ApsaraVideo Media Processing (MPS) queue, the job is scheduled to run. You can call the [QueryIProductionJob](https://help.aliyun.com/document_detail/170217.html) operation or configure a callback to query the job result.
   * *   Capabilities provided by the intelligent production feature vary based on the region. Before you call this operation to submit an intelligent production job, check whether the job is supported in the region in which your service is activated. For more information, see [Regions and endpoints](https://help.aliyun.com/document_detail/43248.html).
   * ### [](#qps)QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitIProductionJobRequest
   * @return SubmitIProductionJobResponse
   */
  async submitIProductionJob(request: SubmitIProductionJobRequest): Promise<SubmitIProductionJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIProductionJobWithOptions(request, runtime);
  }

  /**
   * @summary Submits transcoding jobs. If the transcoding jobs and workflows created in the ApsaraVideo Media Processing (MPS) console cannot meet your business requirements, you can call the SubmitJobs operation to submit transcoding jobs. Specify transcoding parameters as required when you call the SubmitJobs operation.
   *
   * @description *   SubmitJobs is an asynchronous operation. After you submit transcoding jobs, the jobs are added to an MPS queue to be scheduled and run. The transcoding jobs may not have been complete when the response is returned. After you call this operation, you can call the [QueryJobList](https://help.aliyun.com/document_detail/602836.html) operation to query the job results. You can also associate a Message Service (MNS) queue or topic with the MPS queue to receive notifications on the jobs. For more information, see [Receive notifications](https://www.alibabacloud.com/help/zh/apsaravideo-for-media-processing/latest/receive-message-notifications).
   * *   An input file can be up to 100 GB in size. If the size of the input file exceeds this limit, the job may fail.
   * *   If you use an **intelligent preset template** to transcode an input file, you must first call the [SubmitAnalysisJob](https://help.aliyun.com/document_detail/29223.html) operation to submit a preset template analysis job. After the analysis job is complete, you can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html)operation to obtain the available preset templates for the input file. When you submit a transcoding job, set TemplateId to the ID of an available preset template. If you specify a preset template that is not in the available preset templates, the transcoding job fails.
   * *   If you use a **static preset template** to transcode an input file, you do not need to submit a preset template analysis job.
   * *   If you want to use multiple accounts in MPS, you can create Resource Access Management (RAM) users by using your Alibaba Cloud account. For more information, see [Create a RAM user and grant permissions to the RAM user](https://help.aliyun.com/document_detail/42841.html). If the Alibaba Cloud account that is used to query transcoding jobs is not the one that is used to submit the transcoding jobs, no data is returned.
   * *   For information about transcoding FAQ, see [FAQ about MPS](https://help.aliyun.com/document_detail/38986.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitJobsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitJobsResponse
   */
  async submitJobsWithOptions(request: SubmitJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
    }

    if (!Util.isUnset(request.outputBucket)) {
      query["OutputBucket"] = request.outputBucket;
    }

    if (!Util.isUnset(request.outputLocation)) {
      query["OutputLocation"] = request.outputLocation;
    }

    if (!Util.isUnset(request.outputs)) {
      query["Outputs"] = request.outputs;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitJobs",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitJobsResponse>(await this.callApi(params, req, runtime), new SubmitJobsResponse({}));
  }

  /**
   * @summary Submits transcoding jobs. If the transcoding jobs and workflows created in the ApsaraVideo Media Processing (MPS) console cannot meet your business requirements, you can call the SubmitJobs operation to submit transcoding jobs. Specify transcoding parameters as required when you call the SubmitJobs operation.
   *
   * @description *   SubmitJobs is an asynchronous operation. After you submit transcoding jobs, the jobs are added to an MPS queue to be scheduled and run. The transcoding jobs may not have been complete when the response is returned. After you call this operation, you can call the [QueryJobList](https://help.aliyun.com/document_detail/602836.html) operation to query the job results. You can also associate a Message Service (MNS) queue or topic with the MPS queue to receive notifications on the jobs. For more information, see [Receive notifications](https://www.alibabacloud.com/help/zh/apsaravideo-for-media-processing/latest/receive-message-notifications).
   * *   An input file can be up to 100 GB in size. If the size of the input file exceeds this limit, the job may fail.
   * *   If you use an **intelligent preset template** to transcode an input file, you must first call the [SubmitAnalysisJob](https://help.aliyun.com/document_detail/29223.html) operation to submit a preset template analysis job. After the analysis job is complete, you can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html)operation to obtain the available preset templates for the input file. When you submit a transcoding job, set TemplateId to the ID of an available preset template. If you specify a preset template that is not in the available preset templates, the transcoding job fails.
   * *   If you use a **static preset template** to transcode an input file, you do not need to submit a preset template analysis job.
   * *   If you want to use multiple accounts in MPS, you can create Resource Access Management (RAM) users by using your Alibaba Cloud account. For more information, see [Create a RAM user and grant permissions to the RAM user](https://help.aliyun.com/document_detail/42841.html). If the Alibaba Cloud account that is used to query transcoding jobs is not the one that is used to submit the transcoding jobs, no data is returned.
   * *   For information about transcoding FAQ, see [FAQ about MPS](https://help.aliyun.com/document_detail/38986.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitJobsRequest
   * @return SubmitJobsResponse
   */
  async submitJobs(request: SubmitJobsRequest): Promise<SubmitJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitJobsWithOptions(request, runtime);
  }

  /**
   * @summary Submits a content moderation job.
   *
   * @description The job that you submit by calling this operation is run in asynchronous mode. The job is added to an ApsaraVideo Media Processing (MPS) queue and then scheduled, queued, and run. You can call the [QueryMediaCensorJobDetail](https://help.aliyun.com/document_detail/91779.html) operation or configure an asynchronous notification to obtain the job result.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitMediaCensorJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitMediaCensorJobResponse
   */
  async submitMediaCensorJobWithOptions(request: SubmitMediaCensorJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaCensorJobResponse> {
    Util.validateModel(request);
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

    if (!Util.isUnset(request.externalUrl)) {
      query["ExternalUrl"] = request.externalUrl;
    }

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
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

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.videoCensorConfig)) {
      query["VideoCensorConfig"] = request.videoCensorConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitMediaCensorJob",
      version: "2014-06-18",
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

  /**
   * @summary Submits a content moderation job.
   *
   * @description The job that you submit by calling this operation is run in asynchronous mode. The job is added to an ApsaraVideo Media Processing (MPS) queue and then scheduled, queued, and run. You can call the [QueryMediaCensorJobDetail](https://help.aliyun.com/document_detail/91779.html) operation or configure an asynchronous notification to obtain the job result.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitMediaCensorJobRequest
   * @return SubmitMediaCensorJobResponse
   */
  async submitMediaCensorJob(request: SubmitMediaCensorJobRequest): Promise<SubmitMediaCensorJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaCensorJobWithOptions(request, runtime);
  }

  /**
   * @summary Submits a media information analysis job.
   *
   * @description After you call the SubmitMediaInfoJob operation, ApsaraVideo Media Processing (MPS) analyzes the input media file and generates the analysis results. You can call the [QueryMediaInfoJobList](https://help.aliyun.com/document_detail/29221.html) operation to query the analysis results.
   * > We recommend that you submit a media information analysis job after you confirm that the media file is uploaded to Object Storage Service (OSS). You can configure upload callbacks to be notified of the upload status of files.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitMediaInfoJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitMediaInfoJobResponse
   */
  async submitMediaInfoJobWithOptions(request: SubmitMediaInfoJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaInfoJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.async)) {
      query["Async"] = request.async;
    }

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
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

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitMediaInfoJob",
      version: "2014-06-18",
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

  /**
   * @summary Submits a media information analysis job.
   *
   * @description After you call the SubmitMediaInfoJob operation, ApsaraVideo Media Processing (MPS) analyzes the input media file and generates the analysis results. You can call the [QueryMediaInfoJobList](https://help.aliyun.com/document_detail/29221.html) operation to query the analysis results.
   * > We recommend that you submit a media information analysis job after you confirm that the media file is uploaded to Object Storage Service (OSS). You can configure upload callbacks to be notified of the upload status of files.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitMediaInfoJobRequest
   * @return SubmitMediaInfoJobResponse
   */
  async submitMediaInfoJob(request: SubmitMediaInfoJobRequest): Promise<SubmitMediaInfoJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaInfoJobWithOptions(request, runtime);
  }

  /**
   * @param request SubmitSmarttagJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitSmarttagJobResponse
   */
  async submitSmarttagJobWithOptions(request: SubmitSmarttagJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmarttagJobResponse> {
    Util.validateModel(request);
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

    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
    }

    if (!Util.isUnset(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
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
      version: "2014-06-18",
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

  /**
   * @param request SubmitSmarttagJobRequest
   * @return SubmitSmarttagJobResponse
   */
  async submitSmarttagJob(request: SubmitSmarttagJobRequest): Promise<SubmitSmarttagJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmarttagJobWithOptions(request, runtime);
  }

  /**
   * @summary Submits a snapshot job.
   *
   * @description *   Only JPG images can be generated by calling this operation.
   * *   Asynchronous mode: This operation may return a response before snapshots are captured. Snapshot jobs are queued in the background and asynchronously processed by ApsaraVideo Media Processing (MPS). If the **Interval** or **Num** parameter is set, the snapshot job is processed in asynchronous mode. For more information about FAQ about capturing snapshots, see [FAQ about taking snapshots](https://help.aliyun.com/document_detail/60805.html).
   * *   Notifications: When you submit a snapshot job, the **PipelineId** parameter is required. An asynchronous message is sent only after the notification feature is enabled for the MPS queue.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitSnapshotJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitSnapshotJobResponse
   */
  async submitSnapshotJobWithOptions(request: SubmitSnapshotJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSnapshotJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.input)) {
      query["Input"] = request.input;
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

    if (!Util.isUnset(request.snapshotConfig)) {
      query["SnapshotConfig"] = request.snapshotConfig;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSnapshotJob",
      version: "2014-06-18",
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

  /**
   * @summary Submits a snapshot job.
   *
   * @description *   Only JPG images can be generated by calling this operation.
   * *   Asynchronous mode: This operation may return a response before snapshots are captured. Snapshot jobs are queued in the background and asynchronously processed by ApsaraVideo Media Processing (MPS). If the **Interval** or **Num** parameter is set, the snapshot job is processed in asynchronous mode. For more information about FAQ about capturing snapshots, see [FAQ about taking snapshots](https://help.aliyun.com/document_detail/60805.html).
   * *   Notifications: When you submit a snapshot job, the **PipelineId** parameter is required. An asynchronous message is sent only after the notification feature is enabled for the MPS queue.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request SubmitSnapshotJobRequest
   * @return SubmitSnapshotJobResponse
   */
  async submitSnapshotJob(request: SubmitSnapshotJobRequest): Promise<SubmitSnapshotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  /**
   * @summary The description of the figure. The description can be up to 512 characters in length.
   *
   * @description The response parameters.
   *
   * @param request TagCustomPersonRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagCustomPersonResponse
   */
  async tagCustomPersonWithOptions(request: TagCustomPersonRequest, runtime: $Util.RuntimeOptions): Promise<TagCustomPersonResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryDescription)) {
      query["CategoryDescription"] = request.categoryDescription;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.personDescription)) {
      query["PersonDescription"] = request.personDescription;
    }

    if (!Util.isUnset(request.personId)) {
      query["PersonId"] = request.personId;
    }

    if (!Util.isUnset(request.personName)) {
      query["PersonName"] = request.personName;
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
      action: "TagCustomPerson",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagCustomPersonResponse>(await this.callApi(params, req, runtime), new TagCustomPersonResponse({}));
  }

  /**
   * @summary The description of the figure. The description can be up to 512 characters in length.
   *
   * @description The response parameters.
   *
   * @param request TagCustomPersonRequest
   * @return TagCustomPersonResponse
   */
  async tagCustomPerson(request: TagCustomPersonRequest): Promise<TagCustomPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagCustomPersonWithOptions(request, runtime);
  }

  /**
   * @summary Unbinds an input media bucket from the media library.
   *
   * @description # Usage notes
   * You can call this operation to unbind an input media bucket from the media library based on the name of the output media bucket.
   * # QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UnbindInputBucketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindInputBucketResponse
   */
  async unbindInputBucketWithOptions(request: UnbindInputBucketRequest, runtime: $Util.RuntimeOptions): Promise<UnbindInputBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
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

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindInputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindInputBucketResponse>(await this.callApi(params, req, runtime), new UnbindInputBucketResponse({}));
  }

  /**
   * @summary Unbinds an input media bucket from the media library.
   *
   * @description # Usage notes
   * You can call this operation to unbind an input media bucket from the media library based on the name of the output media bucket.
   * # QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UnbindInputBucketRequest
   * @return UnbindInputBucketResponse
   */
  async unbindInputBucket(request: UnbindInputBucketRequest): Promise<UnbindInputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindInputBucketWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to unbind an output media bucket from the media library based on the name of the output media bucket.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @description The name of the output media bucket to be unbound. To obtain the media bucket name, you can log on to the **ApsaraVideo Media Processing (MPS)** console and choose **Workflows** > **Media Buckets** in the left-side navigation pane. Alternatively, you can log on to the **Object Storage Service (OSS) console** and click **My OSS Paths**.
   *
   * @param request UnbindOutputBucketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindOutputBucketResponse
   */
  async unbindOutputBucketWithOptions(request: UnbindOutputBucketRequest, runtime: $Util.RuntimeOptions): Promise<UnbindOutputBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
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
      action: "UnbindOutputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindOutputBucketResponse>(await this.callApi(params, req, runtime), new UnbindOutputBucketResponse({}));
  }

  /**
   * @summary You can call this operation to unbind an output media bucket from the media library based on the name of the output media bucket.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @description The name of the output media bucket to be unbound. To obtain the media bucket name, you can log on to the **ApsaraVideo Media Processing (MPS)** console and choose **Workflows** > **Media Buckets** in the left-side navigation pane. Alternatively, you can log on to the **Object Storage Service (OSS) console** and click **My OSS Paths**.
   *
   * @param request UnbindOutputBucketRequest
   * @return UnbindOutputBucketResponse
   */
  async unbindOutputBucket(request: UnbindOutputBucketRequest): Promise<UnbindOutputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindOutputBucketWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   *
   * @description You can call this operation to delete a specific custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UnregisterCustomFaceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnregisterCustomFaceResponse
   */
  async unregisterCustomFaceWithOptions(request: UnregisterCustomFaceRequest, runtime: $Util.RuntimeOptions): Promise<UnregisterCustomFaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.faceId)) {
      query["FaceId"] = request.faceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.personId)) {
      query["PersonId"] = request.personId;
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
      action: "UnregisterCustomFace",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnregisterCustomFaceResponse>(await this.callApi(params, req, runtime), new UnregisterCustomFaceResponse({}));
  }

  /**
   * @summary Deletes a custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   *
   * @description You can call this operation to delete a specific custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UnregisterCustomFaceRequest
   * @return UnregisterCustomFaceResponse
   */
  async unregisterCustomFace(request: UnregisterCustomFaceRequest): Promise<UnregisterCustomFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unregisterCustomFaceWithOptions(request, runtime);
  }

  /**
   * @summary Updates the basic information about a media file.
   *
   * @description The basic information that you can update by calling this operation includes the title, description, and category of a media file. This operation applies to a full update. You must set all the parameters unless you want to replace the value of a specific parameter with a NULL value.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMediaResponse
   */
  async updateMediaWithOptions(request: UpdateMediaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaResponse> {
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

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMedia",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMediaResponse>(await this.callApi(params, req, runtime), new UpdateMediaResponse({}));
  }

  /**
   * @summary Updates the basic information about a media file.
   *
   * @description The basic information that you can update by calling this operation includes the title, description, and category of a media file. This operation applies to a full update. You must set all the parameters unless you want to replace the value of a specific parameter with a NULL value.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaRequest
   * @return UpdateMediaResponse
   */
  async updateMedia(request: UpdateMediaRequest): Promise<UpdateMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaWithOptions(request, runtime);
  }

  /**
   * @summary Updates the category to which a media file belongs.
   *
   * @description You can call this operation to update only the category of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaCategoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMediaCategoryResponse
   */
  async updateMediaCategoryWithOptions(request: UpdateMediaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateId)) {
      query["CateId"] = request.cateId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMediaCategory",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMediaCategoryResponse>(await this.callApi(params, req, runtime), new UpdateMediaCategoryResponse({}));
  }

  /**
   * @summary Updates the category to which a media file belongs.
   *
   * @description You can call this operation to update only the category of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaCategoryRequest
   * @return UpdateMediaCategoryResponse
   */
  async updateMediaCategory(request: UpdateMediaCategoryRequest): Promise<UpdateMediaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaCategoryWithOptions(request, runtime);
  }

  /**
   * @summary Updates the thumbnail of a media file.
   *
   * @description You can call this operation to update only the thumbnail of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ## Limits on QPS
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request UpdateMediaCoverRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMediaCoverResponse
   */
  async updateMediaCoverWithOptions(request: UpdateMediaCoverRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaCoverResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMediaCover",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMediaCoverResponse>(await this.callApi(params, req, runtime), new UpdateMediaCoverResponse({}));
  }

  /**
   * @summary Updates the thumbnail of a media file.
   *
   * @description You can call this operation to update only the thumbnail of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ## Limits on QPS
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   *
   * @param request UpdateMediaCoverRequest
   * @return UpdateMediaCoverResponse
   */
  async updateMediaCover(request: UpdateMediaCoverRequest): Promise<UpdateMediaCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaCoverWithOptions(request, runtime);
  }

  /**
   * @summary Updates the publishing status of a media file.
   *
   * @description The published state indicates that the access control list (ACL) of media playback resources and snapshot files is set to inherit the ACL of the bucket to which they belong. The unpublished state indicates that the ACL of media playback resources and snapshot files is set to private.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaPublishStateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMediaPublishStateResponse
   */
  async updateMediaPublishStateWithOptions(request: UpdateMediaPublishStateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaPublishStateResponse> {
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

    if (!Util.isUnset(request.publish)) {
      query["Publish"] = request.publish;
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
      action: "UpdateMediaPublishState",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMediaPublishStateResponse>(await this.callApi(params, req, runtime), new UpdateMediaPublishStateResponse({}));
  }

  /**
   * @summary Updates the publishing status of a media file.
   *
   * @description The published state indicates that the access control list (ACL) of media playback resources and snapshot files is set to inherit the ACL of the bucket to which they belong. The unpublished state indicates that the ACL of media playback resources and snapshot files is set to private.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaPublishStateRequest
   * @return UpdateMediaPublishStateResponse
   */
  async updateMediaPublishState(request: UpdateMediaPublishStateRequest): Promise<UpdateMediaPublishStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaPublishStateWithOptions(request, runtime);
  }

  /**
   * @summary Updates the topology of a media workflow.
   *
   * @description *   You can call this operation to update the topology of a media workflow. To update the trigger mode of a media workflow, call the [UpdateMediaWorkflowTriggerMode](https://help.aliyun.com/document_detail/70372.html) operation.
   * *   After you delete or deactivate a media workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * <warning>Deleting or deactivating a workflow will not affect tasks that have already been submitted. If a workflow is deleted or deactivated after a task has been submitted, tasks that are already in the processing queue will not be canceled and will be executed normally and charged the corresponding fees.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).>
   *
   * @param request UpdateMediaWorkflowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMediaWorkflowResponse
   */
  async updateMediaWorkflowWithOptions(request: UpdateMediaWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.topology)) {
      query["Topology"] = request.topology;
    }

    if (!Util.isUnset(request.triggerMode)) {
      query["TriggerMode"] = request.triggerMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMediaWorkflowResponse>(await this.callApi(params, req, runtime), new UpdateMediaWorkflowResponse({}));
  }

  /**
   * @summary Updates the topology of a media workflow.
   *
   * @description *   You can call this operation to update the topology of a media workflow. To update the trigger mode of a media workflow, call the [UpdateMediaWorkflowTriggerMode](https://help.aliyun.com/document_detail/70372.html) operation.
   * *   After you delete or deactivate a media workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * <warning>Deleting or deactivating a workflow will not affect tasks that have already been submitted. If a workflow is deleted or deactivated after a task has been submitted, tasks that are already in the processing queue will not be canceled and will be executed normally and charged the corresponding fees.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).>
   *
   * @param request UpdateMediaWorkflowRequest
   * @return UpdateMediaWorkflowResponse
   */
  async updateMediaWorkflow(request: UpdateMediaWorkflowRequest): Promise<UpdateMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * @summary Updates the trigger mode of a media workflow.
   *
   * @description You can call this operation only to modify the trigger mode of a media workflow. To modify other information about the workflow, call the [UpdateMediaWorkflow](https://help.aliyun.com/document_detail/44438.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaWorkflowTriggerModeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMediaWorkflowTriggerModeResponse
   */
  async updateMediaWorkflowTriggerModeWithOptions(request: UpdateMediaWorkflowTriggerModeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaWorkflowTriggerModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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

    if (!Util.isUnset(request.triggerMode)) {
      query["TriggerMode"] = request.triggerMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMediaWorkflowTriggerMode",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMediaWorkflowTriggerModeResponse>(await this.callApi(params, req, runtime), new UpdateMediaWorkflowTriggerModeResponse({}));
  }

  /**
   * @summary Updates the trigger mode of a media workflow.
   *
   * @description You can call this operation only to modify the trigger mode of a media workflow. To modify other information about the workflow, call the [UpdateMediaWorkflow](https://help.aliyun.com/document_detail/44438.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateMediaWorkflowTriggerModeRequest
   * @return UpdateMediaWorkflowTriggerModeResponse
   */
  async updateMediaWorkflowTriggerMode(request: UpdateMediaWorkflowTriggerModeRequest): Promise<UpdateMediaWorkflowTriggerModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaWorkflowTriggerModeWithOptions(request, runtime);
  }

  /**
   * @summary Updates an ApsaraVideo Media Processing (MPS) queue.
   *
   * @description *   You can call this operation to modify the name, status, and notification settings of the specified MPS queue.
   * *   If a paused MPS queue is selected in a workflow or a job, such as a video review or media fingerprint job, the workflow or job fails.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdatePipelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePipelineResponse
   */
  async updatePipelineWithOptions(request: UpdatePipelineRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extendConfig)) {
      query["ExtendConfig"] = request.extendConfig;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.notifyConfig)) {
      query["NotifyConfig"] = request.notifyConfig;
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

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePipeline",
      version: "2014-06-18",
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

  /**
   * @summary Updates an ApsaraVideo Media Processing (MPS) queue.
   *
   * @description *   You can call this operation to modify the name, status, and notification settings of the specified MPS queue.
   * *   If a paused MPS queue is selected in a workflow or a job, such as a video review or media fingerprint job, the workflow or job fails.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdatePipelineRequest
   * @return UpdatePipelineResponse
   */
  async updatePipeline(request: UpdatePipelineRequest): Promise<UpdatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePipelineWithOptions(request, runtime);
  }

  /**
   * @summary 更新智能标签模板接口支持cpv
   *
   * @param request UpdateSmarttagTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateSmarttagTemplateResponse
   */
  async updateSmarttagTemplateWithOptions(request: UpdateSmarttagTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmarttagTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.analyseTypes)) {
      query["AnalyseTypes"] = request.analyseTypes;
    }

    if (!Util.isUnset(request.faceCategoryIds)) {
      query["FaceCategoryIds"] = request.faceCategoryIds;
    }

    if (!Util.isUnset(request.faceCustomParamsConfig)) {
      query["FaceCustomParamsConfig"] = request.faceCustomParamsConfig;
    }

    if (!Util.isUnset(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!Util.isUnset(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!Util.isUnset(request.keywordConfig)) {
      query["KeywordConfig"] = request.keywordConfig;
    }

    if (!Util.isUnset(request.knowledgeConfig)) {
      query["KnowledgeConfig"] = request.knowledgeConfig;
    }

    if (!Util.isUnset(request.labelType)) {
      query["LabelType"] = request.labelType;
    }

    if (!Util.isUnset(request.labelVersion)) {
      query["LabelVersion"] = request.labelVersion;
    }

    if (!Util.isUnset(request.landmarkGroupIds)) {
      query["LandmarkGroupIds"] = request.landmarkGroupIds;
    }

    if (!Util.isUnset(request.objectGroupIds)) {
      query["ObjectGroupIds"] = request.objectGroupIds;
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

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
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
      action: "UpdateSmarttagTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmarttagTemplateResponse>(await this.callApi(params, req, runtime), new UpdateSmarttagTemplateResponse({}));
  }

  /**
   * @summary 更新智能标签模板接口支持cpv
   *
   * @param request UpdateSmarttagTemplateRequest
   * @return UpdateSmarttagTemplateResponse
   */
  async updateSmarttagTemplate(request: UpdateSmarttagTemplateRequest): Promise<UpdateSmarttagTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmarttagTemplateWithOptions(request, runtime);
  }

  /**
   * @description A custom transcoding template cannot be updated if it is being used by a job that has been submitted.The ID of the template. You can obtain the template ID from the response of the [AddTemplate](https://help.aliyun.com/document_detail/213306.html) operation.
   * ### QPS limits
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTemplateResponse
   */
  async updateTemplateWithOptions(request: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audio)) {
      query["Audio"] = request.audio;
    }

    if (!Util.isUnset(request.container)) {
      query["Container"] = request.container;
    }

    if (!Util.isUnset(request.muxConfig)) {
      query["MuxConfig"] = request.muxConfig;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.transConfig)) {
      query["TransConfig"] = request.transConfig;
    }

    if (!Util.isUnset(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2014-06-18",
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

  /**
   * @description A custom transcoding template cannot be updated if it is being used by a job that has been submitted.The ID of the template. You can obtain the template ID from the response of the [AddTemplate](https://help.aliyun.com/document_detail/213306.html) operation.
   * ### QPS limits
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateTemplateRequest
   * @return UpdateTemplateResponse
   */
  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Updates the name and configurations of the specified watermark template.
   *
   * @description *   You can call this operation to update the information about a watermark template based on the ID of the watermark template. For example, you can update the name and configurations of a watermark template.
   * *   A watermark template cannot be updated if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateWaterMarkTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWaterMarkTemplateResponse
   */
  async updateWaterMarkTemplateWithOptions(request: UpdateWaterMarkTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWaterMarkTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.waterMarkTemplateId)) {
      query["WaterMarkTemplateId"] = request.waterMarkTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new UpdateWaterMarkTemplateResponse({}));
  }

  /**
   * @summary Updates the name and configurations of the specified watermark template.
   *
   * @description *   You can call this operation to update the information about a watermark template based on the ID of the watermark template. For example, you can update the name and configurations of a watermark template.
   * *   A watermark template cannot be updated if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   *
   * @param request UpdateWaterMarkTemplateRequest
   * @return UpdateWaterMarkTemplateResponse
   */
  async updateWaterMarkTemplate(request: UpdateWaterMarkTemplateRequest): Promise<UpdateWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWaterMarkTemplateWithOptions(request, runtime);
  }

}
