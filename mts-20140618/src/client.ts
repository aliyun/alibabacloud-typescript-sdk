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
  headers: { [key: string]: string };
  statusCode: number;
  body: ActivateMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddMediaTagResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSmarttagTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      referer: 'Referer',
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
      referer: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BindInputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BindOutputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFpShotDBResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeactivateMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMediaTagResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSmarttagTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ImAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportFpShotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAllMediaBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCustomPersonsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFpShotDBResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  fpDBId?: string;
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fpDBId: 'FpDBId',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBId: 'string',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFpShotFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFpShotImportJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMediaWorkflowExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAnalysisJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryEditingJobListRequest extends $tea.Model {
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

export class QueryEditingJobListResponseBody extends $tea.Model {
  jobList?: QueryEditingJobListResponseBodyJobList;
  nonExistJobIds?: QueryEditingJobListResponseBodyNonExistJobIds;
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
      jobList: QueryEditingJobListResponseBodyJobList,
      nonExistJobIds: QueryEditingJobListResponseBodyNonExistJobIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEditingJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEditingJobListResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFpDBDeleteJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFpFileDeleteJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryFpShotJobListResponseBody extends $tea.Model {
  fpShotJobList?: QueryFpShotJobListResponseBodyFpShotJobList;
  nonExistIds?: QueryFpShotJobListResponseBodyNonExistIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotJobList: 'FpShotJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotJobList: QueryFpShotJobListResponseBodyFpShotJobList,
      nonExistIds: QueryFpShotJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFpShotJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  jobId?: string;
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
      jobId: 'JobId',
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
      jobId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaInfoJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaListByURLResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaWorkflowExecutionListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaWorkflowListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPipelineListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySmarttagTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySnapshotJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryVideoQualityJobRequest extends $tea.Model {
  jobId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoQualityJobResponseBody extends $tea.Model {
  code?: string;
  job?: QueryVideoQualityJobResponseBodyJob;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      job: QueryVideoQualityJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoQualityJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryVideoQualityJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryVideoQualityJobResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWaterMarkTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterCustomFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ReportFpShotJobResultRequest extends $tea.Model {
  details?: string;
  jobId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      jobId: 'JobId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: 'string',
      jobId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportFpShotJobResultResponseBody extends $tea.Model {
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

export class ReportFpShotJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReportFpShotJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportFpShotJobResultResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAnalysisJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SubmitEditingJobsRequest extends $tea.Model {
  editingInputs?: string;
  editingJobOssFileRoleArn?: string;
  editingJobOssFileUid?: number;
  editingJobOutputs?: string;
  editingJobURL?: string;
  outputBucket?: string;
  outputLocation?: string;
  ownerAccount?: string;
  ownerId?: number;
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      editingInputs: 'EditingInputs',
      editingJobOssFileRoleArn: 'EditingJobOssFileRoleArn',
      editingJobOssFileUid: 'EditingJobOssFileUid',
      editingJobOutputs: 'EditingJobOutputs',
      editingJobURL: 'EditingJobURL',
      outputBucket: 'OutputBucket',
      outputLocation: 'OutputLocation',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingInputs: 'string',
      editingJobOssFileRoleArn: 'string',
      editingJobOssFileUid: 'number',
      editingJobOutputs: 'string',
      editingJobURL: 'string',
      outputBucket: 'string',
      outputLocation: 'string',
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

export class SubmitEditingJobsResponseBody extends $tea.Model {
  jobResultList?: SubmitEditingJobsResponseBodyJobResultList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobResultList: 'JobResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResultList: SubmitEditingJobsResponseBodyJobResultList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitEditingJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitEditingJobsResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitFpDBDeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitFpFileDeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitFpShotJobResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SubmitVideoQualityJobRequest extends $tea.Model {
  input?: string;
  jobParams?: string;
  modelId?: string;
  notifyUrl?: string;
  output?: string;
  pipelineId?: string;
  scheduleParams?: string;
  sourceType?: string;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      jobParams: 'JobParams',
      modelId: 'ModelId',
      notifyUrl: 'NotifyUrl',
      output: 'Output',
      pipelineId: 'PipelineId',
      scheduleParams: 'ScheduleParams',
      sourceType: 'SourceType',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      jobParams: 'string',
      modelId: 'string',
      notifyUrl: 'string',
      output: 'string',
      pipelineId: 'string',
      scheduleParams: 'string',
      sourceType: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoQualityJobResponseBody extends $tea.Model {
  code?: string;
  jobId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoQualityJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitVideoQualityJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitVideoQualityJobResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TagCustomPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindInputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindOutputBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnregisterCustomFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMediaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMediaCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMediaPublishStateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  topology?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      topology: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMediaWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMediaWorkflowTriggerModeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmarttagTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWaterMarkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
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
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
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
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
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

export class ImAuditResponseBodyImageResultsResultResults extends $tea.Model {
  label?: string;
  rate?: number;
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
      rate: 'number',
      scene: 'string',
      suggestion: 'string',
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

export class ImAuditResponseBodyTextResultsResultResultsDetails extends $tea.Model {
  label?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      inputFile: 'InputFile',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      inputFile: ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile,
      primaryKey: 'string',
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigAudioVolume extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  samplerate?: string;
  volume?: QueryEditingJobListResponseBodyJobListJobEditingConfigAudioVolume;
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
      volume: QueryEditingJobListResponseBodyJobListJobEditingConfigAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigClipTimeSpan extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigClip extends $tea.Model {
  timeSpan?: QueryEditingJobListResponseBodyJobListJobEditingConfigClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: QueryEditingJobListResponseBodyJobListJobEditingConfigClipTimeSpan,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigContainer extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigDigiWaterMarkInputFile extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigDigiWaterMark extends $tea.Model {
  alpha?: string;
  inputFile?: QueryEditingJobListResponseBodyJobListJobEditingConfigDigiWaterMarkInputFile;
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
      inputFile: QueryEditingJobListResponseBodyJobListJobEditingConfigDigiWaterMarkInputFile,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClipEffectsEffect extends $tea.Model {
  effect?: string;
  effectConfig?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      effectConfig: 'EffectConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      effectConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClipEffects extends $tea.Model {
  effect?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClipEffectsEffect[];
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClipEffectsEffect },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClip extends $tea.Model {
  effects?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClipEffects;
  id?: string;
  in?: string;
  out?: string;
  sourceID?: string;
  sourceStrmMap?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      effects: 'Effects',
      id: 'Id',
      in: 'In',
      out: 'Out',
      sourceID: 'SourceID',
      sourceStrmMap: 'SourceStrmMap',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effects: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClipEffects,
      id: 'string',
      in: 'string',
      out: 'string',
      sourceID: 'string',
      sourceStrmMap: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipList extends $tea.Model {
  clip?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClip[];
  static names(): { [key: string]: string } {
    return {
      clip: 'Clip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clip: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipListClip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfigTimelineConfigAudio extends $tea.Model {
  channelLayout?: string;
  channels?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      channelLayout: 'ChannelLayout',
      channels: 'Channels',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelLayout: 'string',
      channels: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfigTimelineConfigVideo extends $tea.Model {
  bgColor?: string;
  fps?: string;
  height?: string;
  isGpuData?: string;
  isOneTrackData?: string;
  reclosePrec?: string;
  renderRatio?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      fps: 'Fps',
      height: 'Height',
      isGpuData: 'IsGpuData',
      isOneTrackData: 'IsOneTrackData',
      reclosePrec: 'ReclosePrec',
      renderRatio: 'RenderRatio',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      fps: 'string',
      height: 'string',
      isGpuData: 'string',
      isOneTrackData: 'string',
      reclosePrec: 'string',
      renderRatio: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfig extends $tea.Model {
  timelineConfigAudio?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfigTimelineConfigAudio;
  timelineConfigVideo?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfigTimelineConfigVideo;
  static names(): { [key: string]: string } {
    return {
      timelineConfigAudio: 'TimelineConfigAudio',
      timelineConfigVideo: 'TimelineConfigVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timelineConfigAudio: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfigTimelineConfigAudio,
      timelineConfigVideo: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfigTimelineConfigVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfigClipsConfigVideo extends $tea.Model {
  l?: string;
  t?: string;
  static names(): { [key: string]: string } {
    return {
      l: 'L',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      l: 'string',
      t: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfig extends $tea.Model {
  clipsConfigVideo?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfigClipsConfigVideo;
  static names(): { [key: string]: string } {
    return {
      clipsConfigVideo: 'ClipsConfigVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsConfigVideo: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfigClipsConfigVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClip extends $tea.Model {
  clipsConfig?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfig;
  in?: string;
  out?: string;
  clipID?: string;
  static names(): { [key: string]: string } {
    return {
      clipsConfig: 'ClipsConfig',
      in: 'In',
      out: 'Out',
      clipID: 'clipID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsConfig: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfig,
      in: 'string',
      out: 'string',
      clipID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClips extends $tea.Model {
  clip?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClip[];
  static names(): { [key: string]: string } {
    return {
      clip: 'Clip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clip: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClipsClip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrack extends $tea.Model {
  clips?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClips;
  id?: string;
  order?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      id: 'Id',
      order: 'Order',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrackClips,
      id: 'string',
      order: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackList extends $tea.Model {
  track?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrack[];
  static names(): { [key: string]: string } {
    return {
      track: 'Track',
    };
  }

  static types(): { [key: string]: any } {
    return {
      track: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackListTrack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimeline extends $tea.Model {
  timelineConfig?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfig;
  trackList?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackList;
  static names(): { [key: string]: string } {
    return {
      timelineConfig: 'TimelineConfig',
      trackList: 'TrackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timelineConfig: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTimelineConfig,
      trackList: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimelineTrackList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEditing extends $tea.Model {
  clipList?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipList;
  timeline?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimeline;
  static names(): { [key: string]: string } {
    return {
      clipList: 'ClipList',
      timeline: 'Timeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipList: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingClipList,
      timeline: QueryEditingJobListResponseBodyJobListJobEditingConfigEditingTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigEncryption extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigM3U8NonStandardSupportTS extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigM3U8NonStandardSupport extends $tea.Model {
  TS?: QueryEditingJobListResponseBodyJobListJobEditingConfigM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: QueryEditingJobListResponseBodyJobListJobEditingConfigM3U8NonStandardSupportTS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigMergeListMerge extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigMergeList extends $tea.Model {
  merge?: QueryEditingJobListResponseBodyJobListJobEditingConfigMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigMergeListMerge },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfigGif extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfigSegment extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfig extends $tea.Model {
  gif?: QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfigGif;
  segment?: QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfigGif,
      segment: QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigOutputFile extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesFormat extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsAudioStreamListAudioStream extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsAudioStreamList extends $tea.Model {
  audioStream?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamListVideoStream extends $tea.Model {
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
  networkCost?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
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
      networkCost: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamList extends $tea.Model {
  videoStream?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreams extends $tea.Model {
  audioStreamList?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsAudioStreamList;
  subtitleStreamList?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsSubtitleStreamList;
  videoStreamList?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsAudioStreamList,
      subtitleStreamList: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsSubtitleStreamList,
      videoStreamList: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigProperties extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileFormat?: string;
  fileSize?: string;
  format?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesFormat;
  fps?: string;
  height?: string;
  streams?: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreams;
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
      format: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: QueryEditingJobListResponseBodyJobListJobEditingConfigPropertiesStreams,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitleInput extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitle extends $tea.Model {
  charEnc?: string;
  fontName?: string;
  input?: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitleInput;
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
      input: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitleInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleList extends $tea.Model {
  extSubtitle?: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigSubtitleListSubtitle extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigSubtitleList extends $tea.Model {
  subtitle?: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigSubtitleListSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfig extends $tea.Model {
  extSubtitleList?: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleList;
  subtitleList?: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigExtSubtitleList,
      subtitleList: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfigSubtitleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigSuperReso extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigTransConfig extends $tea.Model {
  adjDarMethod?: string;
  duration?: string;
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
      duration: 'Duration',
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
      duration: 'string',
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigVideoBitrateBnd extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: QueryEditingJobListResponseBodyJobListJobEditingConfigVideoBitrateBnd;
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
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryEditingJobListResponseBodyJobListJobEditingConfigVideoBitrateBnd,
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
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkListWaterMarkInputFile extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkListWaterMark extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  inputFile?: QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkListWaterMarkInputFile;
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
      inputFile: QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkListWaterMarkInputFile,
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

export class QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkList extends $tea.Model {
  waterMark?: QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkListWaterMark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingConfig extends $tea.Model {
  audio?: QueryEditingJobListResponseBodyJobListJobEditingConfigAudio;
  audioStreamMap?: string;
  clip?: QueryEditingJobListResponseBodyJobListJobEditingConfigClip;
  container?: QueryEditingJobListResponseBodyJobListJobEditingConfigContainer;
  deWatermark?: string;
  digiWaterMark?: QueryEditingJobListResponseBodyJobListJobEditingConfigDigiWaterMark;
  editing?: QueryEditingJobListResponseBodyJobListJobEditingConfigEditing;
  encryption?: QueryEditingJobListResponseBodyJobListJobEditingConfigEncryption;
  m3U8NonStandardSupport?: QueryEditingJobListResponseBodyJobListJobEditingConfigM3U8NonStandardSupport;
  mergeConfigUrl?: string;
  mergeList?: QueryEditingJobListResponseBodyJobListJobEditingConfigMergeList;
  muxConfig?: QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfig;
  outputFile?: QueryEditingJobListResponseBodyJobListJobEditingConfigOutputFile;
  priority?: string;
  properties?: QueryEditingJobListResponseBodyJobListJobEditingConfigProperties;
  rotate?: string;
  subtitleConfig?: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfig;
  superReso?: QueryEditingJobListResponseBodyJobListJobEditingConfigSuperReso;
  templateId?: string;
  transConfig?: QueryEditingJobListResponseBodyJobListJobEditingConfigTransConfig;
  userData?: string;
  video?: QueryEditingJobListResponseBodyJobListJobEditingConfigVideo;
  videoStreamMap?: string;
  waterMarkConfigUrl?: string;
  waterMarkList?: QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      digiWaterMark: 'DigiWaterMark',
      editing: 'Editing',
      encryption: 'Encryption',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
      muxConfig: 'MuxConfig',
      outputFile: 'OutputFile',
      priority: 'Priority',
      properties: 'Properties',
      rotate: 'Rotate',
      subtitleConfig: 'SubtitleConfig',
      superReso: 'SuperReso',
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
      audio: QueryEditingJobListResponseBodyJobListJobEditingConfigAudio,
      audioStreamMap: 'string',
      clip: QueryEditingJobListResponseBodyJobListJobEditingConfigClip,
      container: QueryEditingJobListResponseBodyJobListJobEditingConfigContainer,
      deWatermark: 'string',
      digiWaterMark: QueryEditingJobListResponseBodyJobListJobEditingConfigDigiWaterMark,
      editing: QueryEditingJobListResponseBodyJobListJobEditingConfigEditing,
      encryption: QueryEditingJobListResponseBodyJobListJobEditingConfigEncryption,
      m3U8NonStandardSupport: QueryEditingJobListResponseBodyJobListJobEditingConfigM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: QueryEditingJobListResponseBodyJobListJobEditingConfigMergeList,
      muxConfig: QueryEditingJobListResponseBodyJobListJobEditingConfigMuxConfig,
      outputFile: QueryEditingJobListResponseBodyJobListJobEditingConfigOutputFile,
      priority: 'string',
      properties: QueryEditingJobListResponseBodyJobListJobEditingConfigProperties,
      rotate: 'string',
      subtitleConfig: QueryEditingJobListResponseBodyJobListJobEditingConfigSubtitleConfig,
      superReso: QueryEditingJobListResponseBodyJobListJobEditingConfigSuperReso,
      templateId: 'string',
      transConfig: QueryEditingJobListResponseBodyJobListJobEditingConfigTransConfig,
      userData: 'string',
      video: QueryEditingJobListResponseBodyJobListJobEditingConfigVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: QueryEditingJobListResponseBodyJobListJobEditingConfigWaterMarkList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInputInputConfig extends $tea.Model {
  deinterlaceMethod?: string;
  isNormalSar?: string;
  static names(): { [key: string]: string } {
    return {
      deinterlaceMethod: 'DeinterlaceMethod',
      isNormalSar: 'IsNormalSar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deinterlaceMethod: 'string',
      isNormalSar: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInputInputFile extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInput extends $tea.Model {
  id?: string;
  inputConfig?: QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInputInputConfig;
  inputFile?: QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInputInputFile;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      inputConfig: 'InputConfig',
      inputFile: 'InputFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      inputConfig: QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInputInputConfig,
      inputFile: QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInputInputFile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobEditingInputs extends $tea.Model {
  editingInput?: QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInput[];
  static names(): { [key: string]: string } {
    return {
      editingInput: 'EditingInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingInput: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJobEditingInputsEditingInput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobListJobMNSMessageResult extends $tea.Model {
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

export class QueryEditingJobListResponseBodyJobListJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  editingConfig?: QueryEditingJobListResponseBodyJobListJobEditingConfig;
  editingInputs?: QueryEditingJobListResponseBodyJobListJobEditingInputs;
  finishTime?: string;
  jobId?: string;
  MNSMessageResult?: QueryEditingJobListResponseBodyJobListJobMNSMessageResult;
  message?: string;
  percent?: number;
  pipelineId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      editingConfig: 'EditingConfig',
      editingInputs: 'EditingInputs',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      editingConfig: QueryEditingJobListResponseBodyJobListJobEditingConfig,
      editingInputs: QueryEditingJobListResponseBodyJobListJobEditingInputs,
      finishTime: 'string',
      jobId: 'string',
      MNSMessageResult: QueryEditingJobListResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyJobList extends $tea.Model {
  job?: QueryEditingJobListResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': QueryEditingJobListResponseBodyJobListJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEditingJobListResponseBodyNonExistJobIds extends $tea.Model {
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
      input: QueryJobListResponseBodyJobListJobInput,
      jobId: 'string',
      MNSMessageResult: QueryJobListResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      output: QueryJobListResponseBodyJobListJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
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

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig extends $tea.Model {
  frameType?: string;
  height?: string;
  interval?: string;
  num?: string;
  outputFile?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile;
  tileOut?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut;
  tileOutputFile?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile;
  time?: string;
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

export class QueryTemplateListResponseBodyTemplateListTemplateAudio extends $tea.Model {
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
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
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
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
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
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
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

export class QueryVideoQualityJobResponseBodyJob extends $tea.Model {
  jobId?: string;
  message?: string;
  output?: string;
  status?: string;
  userId?: number;
  videoQualityResults?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      message: 'Message',
      output: 'Output',
      status: 'Status',
      userId: 'UserId',
      videoQualityResults: 'VideoQualityResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      message: 'string',
      output: 'string',
      status: 'string',
      userId: 'number',
      videoQualityResults: 'string',
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
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
  pad?: string;
  pixFmt?: string;
  preset?: string;
  profile?: string;
  qscale?: string;
  remove?: string;
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
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
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
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigAudioVolume extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigAudio extends $tea.Model {
  bitrate?: string;
  channels?: string;
  codec?: string;
  profile?: string;
  qscale?: string;
  samplerate?: string;
  volume?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigAudioVolume;
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
      volume: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigAudioVolume,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigClipTimeSpan extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigClip extends $tea.Model {
  timeSpan?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigClipTimeSpan,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigContainer extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigDigiWaterMarkInputFile extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigDigiWaterMark extends $tea.Model {
  alpha?: string;
  inputFile?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigDigiWaterMarkInputFile;
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
      inputFile: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigDigiWaterMarkInputFile,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClipEffectsEffect extends $tea.Model {
  effect?: string;
  effectConfig?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      effectConfig: 'EffectConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      effectConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClipEffects extends $tea.Model {
  effect?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClipEffectsEffect[];
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClipEffectsEffect },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClip extends $tea.Model {
  effects?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClipEffects;
  id?: string;
  in?: string;
  out?: string;
  sourceID?: string;
  sourceStrmMap?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      effects: 'Effects',
      id: 'Id',
      in: 'In',
      out: 'Out',
      sourceID: 'SourceID',
      sourceStrmMap: 'SourceStrmMap',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effects: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClipEffects,
      id: 'string',
      in: 'string',
      out: 'string',
      sourceID: 'string',
      sourceStrmMap: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipList extends $tea.Model {
  clip?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClip[];
  static names(): { [key: string]: string } {
    return {
      clip: 'Clip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clip: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipListClip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfigTimelineConfigAudio extends $tea.Model {
  channelLayout?: string;
  channels?: string;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      channelLayout: 'ChannelLayout',
      channels: 'Channels',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelLayout: 'string',
      channels: 'string',
      samplerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfigTimelineConfigVideo extends $tea.Model {
  bgColor?: string;
  fps?: string;
  height?: string;
  isGpuData?: string;
  isOneTrackData?: string;
  reclosePrec?: string;
  renderRatio?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      fps: 'Fps',
      height: 'Height',
      isGpuData: 'IsGpuData',
      isOneTrackData: 'IsOneTrackData',
      reclosePrec: 'ReclosePrec',
      renderRatio: 'RenderRatio',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      fps: 'string',
      height: 'string',
      isGpuData: 'string',
      isOneTrackData: 'string',
      reclosePrec: 'string',
      renderRatio: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfig extends $tea.Model {
  timelineConfigAudio?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfigTimelineConfigAudio;
  timelineConfigVideo?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfigTimelineConfigVideo;
  static names(): { [key: string]: string } {
    return {
      timelineConfigAudio: 'TimelineConfigAudio',
      timelineConfigVideo: 'TimelineConfigVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timelineConfigAudio: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfigTimelineConfigAudio,
      timelineConfigVideo: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfigTimelineConfigVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfigClipsConfigVideo extends $tea.Model {
  l?: string;
  t?: string;
  static names(): { [key: string]: string } {
    return {
      l: 'L',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      l: 'string',
      t: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfig extends $tea.Model {
  clipsConfigVideo?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfigClipsConfigVideo;
  static names(): { [key: string]: string } {
    return {
      clipsConfigVideo: 'ClipsConfigVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsConfigVideo: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfigClipsConfigVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClip extends $tea.Model {
  clipsConfig?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfig;
  in?: string;
  out?: string;
  clipID?: string;
  static names(): { [key: string]: string } {
    return {
      clipsConfig: 'ClipsConfig',
      in: 'In',
      out: 'Out',
      clipID: 'clipID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsConfig: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClipClipsConfig,
      in: 'string',
      out: 'string',
      clipID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClips extends $tea.Model {
  clip?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClip[];
  static names(): { [key: string]: string } {
    return {
      clip: 'Clip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clip: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClipsClip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrack extends $tea.Model {
  clips?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClips;
  id?: string;
  order?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      id: 'Id',
      order: 'Order',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrackClips,
      id: 'string',
      order: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackList extends $tea.Model {
  track?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrack[];
  static names(): { [key: string]: string } {
    return {
      track: 'Track',
    };
  }

  static types(): { [key: string]: any } {
    return {
      track: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackListTrack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimeline extends $tea.Model {
  timelineConfig?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfig;
  trackList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackList;
  static names(): { [key: string]: string } {
    return {
      timelineConfig: 'TimelineConfig',
      trackList: 'TrackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timelineConfig: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTimelineConfig,
      trackList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimelineTrackList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditing extends $tea.Model {
  clipList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipList;
  timeline?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimeline;
  static names(): { [key: string]: string } {
    return {
      clipList: 'ClipList',
      timeline: 'Timeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingClipList,
      timeline: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditingTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEncryption extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigM3U8NonStandardSupportTS extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigM3U8NonStandardSupport extends $tea.Model {
  TS?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigM3U8NonStandardSupportTS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMergeListMerge extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMergeList extends $tea.Model {
  merge?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMergeListMerge },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfigGif extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfigSegment extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfig extends $tea.Model {
  gif?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfigGif;
  segment?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfigGif,
      segment: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfigSegment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigOutputFile extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesFormat extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsAudioStreamListAudioStream extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsAudioStreamList extends $tea.Model {
  audioStream?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsSubtitleStreamListSubtitleStream extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsSubtitleStreamList extends $tea.Model {
  subtitleStream?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamListVideoStream extends $tea.Model {
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
  networkCost?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
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
      networkCost: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamList extends $tea.Model {
  videoStream?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreams extends $tea.Model {
  audioStreamList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsAudioStreamList;
  subtitleStreamList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsSubtitleStreamList;
  videoStreamList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsAudioStreamList,
      subtitleStreamList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsSubtitleStreamList,
      videoStreamList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreamsVideoStreamList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigProperties extends $tea.Model {
  bitrate?: string;
  duration?: string;
  fileFormat?: string;
  fileSize?: string;
  format?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesFormat;
  fps?: string;
  height?: string;
  streams?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreams;
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
      format: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigPropertiesStreams,
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitleInput extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitle extends $tea.Model {
  charEnc?: string;
  fontName?: string;
  input?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitleInput;
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
      input: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitleInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleList extends $tea.Model {
  extSubtitle?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleListExtSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigSubtitleListSubtitle extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigSubtitleList extends $tea.Model {
  subtitle?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigSubtitleListSubtitle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfig extends $tea.Model {
  extSubtitleList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleList;
  subtitleList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigExtSubtitleList,
      subtitleList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfigSubtitleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSuperReso extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigTransConfig extends $tea.Model {
  adjDarMethod?: string;
  duration?: string;
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
      duration: 'Duration',
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
      duration: 'string',
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigVideoBitrateBnd extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigVideo extends $tea.Model {
  bitrate?: string;
  bitrateBnd?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigVideoBitrateBnd;
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
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigVideoBitrateBnd,
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
      scanMode: 'string',
      width: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkListWaterMarkInputFile extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkListWaterMark extends $tea.Model {
  dx?: string;
  dy?: string;
  height?: string;
  inputFile?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkListWaterMarkInputFile;
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
      inputFile: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkListWaterMarkInputFile,
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkList extends $tea.Model {
  waterMark?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkListWaterMark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfig extends $tea.Model {
  audio?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigAudio;
  audioStreamMap?: string;
  clip?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigClip;
  container?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigContainer;
  deWatermark?: string;
  digiWaterMark?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigDigiWaterMark;
  editing?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditing;
  encryption?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEncryption;
  m3U8NonStandardSupport?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigM3U8NonStandardSupport;
  mergeConfigUrl?: string;
  mergeList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMergeList;
  muxConfig?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfig;
  outputFile?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigOutputFile;
  priority?: string;
  properties?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigProperties;
  rotate?: string;
  subtitleConfig?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfig;
  superReso?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSuperReso;
  templateId?: string;
  transConfig?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigTransConfig;
  userData?: string;
  video?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigVideo;
  videoStreamMap?: string;
  waterMarkConfigUrl?: string;
  waterMarkList?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      digiWaterMark: 'DigiWaterMark',
      editing: 'Editing',
      encryption: 'Encryption',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
      muxConfig: 'MuxConfig',
      outputFile: 'OutputFile',
      priority: 'Priority',
      properties: 'Properties',
      rotate: 'Rotate',
      subtitleConfig: 'SubtitleConfig',
      superReso: 'SuperReso',
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
      audio: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigAudio,
      audioStreamMap: 'string',
      clip: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigClip,
      container: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigContainer,
      deWatermark: 'string',
      digiWaterMark: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigDigiWaterMark,
      editing: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEditing,
      encryption: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigEncryption,
      m3U8NonStandardSupport: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMergeList,
      muxConfig: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigMuxConfig,
      outputFile: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigOutputFile,
      priority: 'string',
      properties: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigProperties,
      rotate: 'string',
      subtitleConfig: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSubtitleConfig,
      superReso: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigSuperReso,
      templateId: 'string',
      transConfig: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigTransConfig,
      userData: 'string',
      video: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfigWaterMarkList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInputInputConfig extends $tea.Model {
  deinterlaceMethod?: string;
  isNormalSar?: string;
  static names(): { [key: string]: string } {
    return {
      deinterlaceMethod: 'DeinterlaceMethod',
      isNormalSar: 'IsNormalSar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deinterlaceMethod: 'string',
      isNormalSar: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInputInputFile extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInput extends $tea.Model {
  id?: string;
  inputConfig?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInputInputConfig;
  inputFile?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInputInputFile;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      inputConfig: 'InputConfig',
      inputFile: 'InputFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      inputConfig: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInputInputConfig,
      inputFile: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInputInputFile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputs extends $tea.Model {
  editingInput?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInput[];
  static names(): { [key: string]: string } {
    return {
      editingInput: 'EditingInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingInput: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputsEditingInput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResultJobMNSMessageResult extends $tea.Model {
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

export class SubmitEditingJobsResponseBodyJobResultListJobResultJob extends $tea.Model {
  code?: string;
  creationTime?: string;
  editingConfig?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfig;
  editingInputs?: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputs;
  finishTime?: string;
  jobId?: string;
  MNSMessageResult?: SubmitEditingJobsResponseBodyJobResultListJobResultJobMNSMessageResult;
  message?: string;
  percent?: number;
  pipelineId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      editingConfig: 'EditingConfig',
      editingInputs: 'EditingInputs',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      editingConfig: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingConfig,
      editingInputs: SubmitEditingJobsResponseBodyJobResultListJobResultJobEditingInputs,
      finishTime: 'string',
      jobId: 'string',
      MNSMessageResult: SubmitEditingJobsResponseBodyJobResultListJobResultJobMNSMessageResult,
      message: 'string',
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultListJobResult extends $tea.Model {
  code?: string;
  job?: SubmitEditingJobsResponseBodyJobResultListJobResultJob;
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
      job: SubmitEditingJobsResponseBodyJobResultListJobResultJob,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEditingJobsResponseBodyJobResultList extends $tea.Model {
  jobResult?: SubmitEditingJobsResponseBodyJobResultListJobResult[];
  static names(): { [key: string]: string } {
    return {
      jobResult: 'JobResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResult: { 'type': 'array', 'itemType': SubmitEditingJobsResponseBodyJobResultListJobResult },
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

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig extends $tea.Model {
  frameType?: string;
  height?: string;
  interval?: string;
  num?: string;
  outputFile?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile;
  tileOut?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut;
  tileOutputFile?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile;
  time?: string;
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

export class UpdateTemplateResponseBodyTemplateAudio extends $tea.Model {
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
  height?: string;
  longShortMode?: string;
  maxFps?: string;
  maxrate?: string;
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
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
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
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
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

  async activateMediaWorkflow(request: ActivateMediaWorkflowRequest): Promise<ActivateMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateMediaWorkflowWithOptions(request, runtime);
  }

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

  async addMedia(request: AddMediaRequest): Promise<AddMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMediaWithOptions(request, runtime);
  }

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

  async addMediaTag(request: AddMediaTagRequest): Promise<AddMediaTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMediaTagWithOptions(request, runtime);
  }

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

  async addMediaWorkflow(request: AddMediaWorkflowRequest): Promise<AddMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMediaWorkflowWithOptions(request, runtime);
  }

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

  async addPipeline(request: AddPipelineRequest): Promise<AddPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPipelineWithOptions(request, runtime);
  }

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

  async addSmarttagTemplate(request: AddSmarttagTemplateRequest): Promise<AddSmarttagTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSmarttagTemplateWithOptions(request, runtime);
  }

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

  async addTemplate(request: AddTemplateRequest): Promise<AddTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTemplateWithOptions(request, runtime);
  }

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

  async addWaterMarkTemplate(request: AddWaterMarkTemplateRequest): Promise<AddWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addWaterMarkTemplateWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
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

  async bindInputBucket(request: BindInputBucketRequest): Promise<BindInputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindInputBucketWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
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

  async bindOutputBucket(request: BindOutputBucketRequest): Promise<BindOutputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindOutputBucketWithOptions(request, runtime);
  }

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

  async cancelJob(request: CancelJobRequest): Promise<CancelJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelJobWithOptions(request, runtime);
  }

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

  async createFpShotDB(request: CreateFpShotDBRequest): Promise<CreateFpShotDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFpShotDBWithOptions(request, runtime);
  }

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

  async deactivateMediaWorkflow(request: DeactivateMediaWorkflowRequest): Promise<DeactivateMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactivateMediaWorkflowWithOptions(request, runtime);
  }

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

  async deleteMedia(request: DeleteMediaRequest): Promise<DeleteMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaWithOptions(request, runtime);
  }

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

  async deleteMediaTag(request: DeleteMediaTagRequest): Promise<DeleteMediaTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaTagWithOptions(request, runtime);
  }

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

  async deleteMediaWorkflow(request: DeleteMediaWorkflowRequest): Promise<DeleteMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaWorkflowWithOptions(request, runtime);
  }

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

  async deletePipeline(request: DeletePipelineRequest): Promise<DeletePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePipelineWithOptions(request, runtime);
  }

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

  async deleteSmarttagTemplate(request: DeleteSmarttagTemplateRequest): Promise<DeleteSmarttagTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmarttagTemplateWithOptions(request, runtime);
  }

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

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

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

  async deleteWaterMarkTemplate(request: DeleteWaterMarkTemplateRequest): Promise<DeleteWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWaterMarkTemplateWithOptions(request, runtime);
  }

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

  async imAudit(request: ImAuditRequest): Promise<ImAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imAuditWithOptions(request, runtime);
  }

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

  async importFpShotJob(request: ImportFpShotJobRequest): Promise<ImportFpShotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importFpShotJobWithOptions(request, runtime);
  }

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

  async listAllMediaBucket(request: ListAllMediaBucketRequest): Promise<ListAllMediaBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllMediaBucketWithOptions(request, runtime);
  }

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

  async listCustomPersons(request: ListCustomPersonsRequest): Promise<ListCustomPersonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomPersonsWithOptions(request, runtime);
  }

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

  async listFpShotDB(request: ListFpShotDBRequest): Promise<ListFpShotDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFpShotDBWithOptions(request, runtime);
  }

  async listFpShotFilesWithOptions(request: ListFpShotFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFpShotFilesResponse> {
    Util.validateModel(request);
    let query = { };
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

  async listFpShotFiles(request: ListFpShotFilesRequest): Promise<ListFpShotFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFpShotFilesWithOptions(request, runtime);
  }

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

  async listFpShotImportJob(request: ListFpShotImportJobRequest): Promise<ListFpShotImportJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFpShotImportJobWithOptions(request, runtime);
  }

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

  async listJob(request: ListJobRequest): Promise<ListJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobWithOptions(request, runtime);
  }

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

  async listMediaWorkflowExecutions(request: ListMediaWorkflowExecutionsRequest): Promise<ListMediaWorkflowExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaWorkflowExecutionsWithOptions(request, runtime);
  }

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

  async queryAnalysisJobList(request: QueryAnalysisJobListRequest): Promise<QueryAnalysisJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAnalysisJobListWithOptions(request, runtime);
  }

  async queryEditingJobListWithOptions(request: QueryEditingJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryEditingJobListResponse> {
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
      action: "QueryEditingJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEditingJobListResponse>(await this.callApi(params, req, runtime), new QueryEditingJobListResponse({}));
  }

  async queryEditingJobList(request: QueryEditingJobListRequest): Promise<QueryEditingJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEditingJobListWithOptions(request, runtime);
  }

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

  async queryFpDBDeleteJobList(request: QueryFpDBDeleteJobListRequest): Promise<QueryFpDBDeleteJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFpDBDeleteJobListWithOptions(request, runtime);
  }

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

  async queryFpFileDeleteJobList(request: QueryFpFileDeleteJobListRequest): Promise<QueryFpFileDeleteJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFpFileDeleteJobListWithOptions(request, runtime);
  }

  async queryFpShotJobListWithOptions(request: QueryFpShotJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryFpShotJobListResponse> {
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

  async queryFpShotJobList(request: QueryFpShotJobListRequest): Promise<QueryFpShotJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFpShotJobListWithOptions(request, runtime);
  }

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

  async queryIProductionJob(request: QueryIProductionJobRequest): Promise<QueryIProductionJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIProductionJobWithOptions(request, runtime);
  }

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

  async queryJobList(request: QueryJobListRequest): Promise<QueryJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobListWithOptions(request, runtime);
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

  async queryMediaCensorJobList(request: QueryMediaCensorJobListRequest): Promise<QueryMediaCensorJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaCensorJobListWithOptions(request, runtime);
  }

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

  async queryMediaInfoJobList(request: QueryMediaInfoJobListRequest): Promise<QueryMediaInfoJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaInfoJobListWithOptions(request, runtime);
  }

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

  async queryMediaList(request: QueryMediaListRequest): Promise<QueryMediaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaListWithOptions(request, runtime);
  }

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

  async queryMediaListByURL(request: QueryMediaListByURLRequest): Promise<QueryMediaListByURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaListByURLWithOptions(request, runtime);
  }

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

  async queryMediaWorkflowExecutionList(request: QueryMediaWorkflowExecutionListRequest): Promise<QueryMediaWorkflowExecutionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaWorkflowExecutionListWithOptions(request, runtime);
  }

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

  async queryMediaWorkflowList(request: QueryMediaWorkflowListRequest): Promise<QueryMediaWorkflowListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaWorkflowListWithOptions(request, runtime);
  }

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

  async queryPipelineList(request: QueryPipelineListRequest): Promise<QueryPipelineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPipelineListWithOptions(request, runtime);
  }

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

  async querySmarttagJob(request: QuerySmarttagJobRequest): Promise<QuerySmarttagJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmarttagJobWithOptions(request, runtime);
  }

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

  async querySmarttagTemplateList(request: QuerySmarttagTemplateListRequest): Promise<QuerySmarttagTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmarttagTemplateListWithOptions(request, runtime);
  }

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

  async querySnapshotJobList(request: QuerySnapshotJobListRequest): Promise<QuerySnapshotJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySnapshotJobListWithOptions(request, runtime);
  }

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

  async queryTemplateList(request: QueryTemplateListRequest): Promise<QueryTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTemplateListWithOptions(request, runtime);
  }

  async queryVideoQualityJobWithOptions(request: QueryVideoQualityJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryVideoQualityJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVideoQualityJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVideoQualityJobResponse>(await this.callApi(params, req, runtime), new QueryVideoQualityJobResponse({}));
  }

  async queryVideoQualityJob(request: QueryVideoQualityJobRequest): Promise<QueryVideoQualityJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVideoQualityJobWithOptions(request, runtime);
  }

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

  async queryWaterMarkTemplateList(request: QueryWaterMarkTemplateListRequest): Promise<QueryWaterMarkTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWaterMarkTemplateListWithOptions(request, runtime);
  }

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

  async registerCustomFace(request: RegisterCustomFaceRequest): Promise<RegisterCustomFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerCustomFaceWithOptions(request, runtime);
  }

  async reportFpShotJobResultWithOptions(request: ReportFpShotJobResultRequest, runtime: $Util.RuntimeOptions): Promise<ReportFpShotJobResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.details)) {
      query["Details"] = request.details;
    }

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

    if (!Util.isUnset(request.result)) {
      query["Result"] = request.result;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportFpShotJobResult",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportFpShotJobResultResponse>(await this.callApi(params, req, runtime), new ReportFpShotJobResultResponse({}));
  }

  async reportFpShotJobResult(request: ReportFpShotJobResultRequest): Promise<ReportFpShotJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportFpShotJobResultWithOptions(request, runtime);
  }

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

  async searchMediaWorkflow(request: SearchMediaWorkflowRequest): Promise<SearchMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMediaWorkflowWithOptions(request, runtime);
  }

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

  async searchPipeline(request: SearchPipelineRequest): Promise<SearchPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchPipelineWithOptions(request, runtime);
  }

  async searchTemplateWithOptions(request: SearchTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SearchTemplateResponse> {
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

  async searchTemplate(request: SearchTemplateRequest): Promise<SearchTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTemplateWithOptions(request, runtime);
  }

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

  async searchWaterMarkTemplate(request: SearchWaterMarkTemplateRequest): Promise<SearchWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchWaterMarkTemplateWithOptions(request, runtime);
  }

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

  async submitAnalysisJob(request: SubmitAnalysisJobRequest): Promise<SubmitAnalysisJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAnalysisJobWithOptions(request, runtime);
  }

  async submitEditingJobsWithOptions(request: SubmitEditingJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitEditingJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.editingInputs)) {
      query["EditingInputs"] = request.editingInputs;
    }

    if (!Util.isUnset(request.editingJobOssFileRoleArn)) {
      query["EditingJobOssFileRoleArn"] = request.editingJobOssFileRoleArn;
    }

    if (!Util.isUnset(request.editingJobOssFileUid)) {
      query["EditingJobOssFileUid"] = request.editingJobOssFileUid;
    }

    if (!Util.isUnset(request.editingJobOutputs)) {
      query["EditingJobOutputs"] = request.editingJobOutputs;
    }

    if (!Util.isUnset(request.editingJobURL)) {
      query["EditingJobURL"] = request.editingJobURL;
    }

    if (!Util.isUnset(request.outputBucket)) {
      query["OutputBucket"] = request.outputBucket;
    }

    if (!Util.isUnset(request.outputLocation)) {
      query["OutputLocation"] = request.outputLocation;
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
      action: "SubmitEditingJobs",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitEditingJobsResponse>(await this.callApi(params, req, runtime), new SubmitEditingJobsResponse({}));
  }

  async submitEditingJobs(request: SubmitEditingJobsRequest): Promise<SubmitEditingJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitEditingJobsWithOptions(request, runtime);
  }

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

  async submitFpDBDeleteJob(request: SubmitFpDBDeleteJobRequest): Promise<SubmitFpDBDeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFpDBDeleteJobWithOptions(request, runtime);
  }

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

  async submitFpFileDeleteJob(request: SubmitFpFileDeleteJobRequest): Promise<SubmitFpFileDeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFpFileDeleteJobWithOptions(request, runtime);
  }

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

  async submitFpShotJob(request: SubmitFpShotJobRequest): Promise<SubmitFpShotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFpShotJobWithOptions(request, runtime);
  }

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

  async submitIProductionJob(request: SubmitIProductionJobRequest): Promise<SubmitIProductionJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIProductionJobWithOptions(request, runtime);
  }

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

  async submitJobs(request: SubmitJobsRequest): Promise<SubmitJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitJobsWithOptions(request, runtime);
  }

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

  async submitMediaCensorJob(request: SubmitMediaCensorJobRequest): Promise<SubmitMediaCensorJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaCensorJobWithOptions(request, runtime);
  }

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

  async submitMediaInfoJob(request: SubmitMediaInfoJobRequest): Promise<SubmitMediaInfoJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaInfoJobWithOptions(request, runtime);
  }

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

  async submitSmarttagJob(request: SubmitSmarttagJobRequest): Promise<SubmitSmarttagJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmarttagJobWithOptions(request, runtime);
  }

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

  async submitSnapshotJob(request: SubmitSnapshotJobRequest): Promise<SubmitSnapshotJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  async submitVideoQualityJobWithOptions(request: SubmitVideoQualityJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitVideoQualityJobResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.scheduleParams)) {
      query["ScheduleParams"] = request.scheduleParams;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitVideoQualityJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitVideoQualityJobResponse>(await this.callApi(params, req, runtime), new SubmitVideoQualityJobResponse({}));
  }

  async submitVideoQualityJob(request: SubmitVideoQualityJobRequest): Promise<SubmitVideoQualityJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitVideoQualityJobWithOptions(request, runtime);
  }

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

  async tagCustomPerson(request: TagCustomPersonRequest): Promise<TagCustomPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagCustomPersonWithOptions(request, runtime);
  }

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

  async unbindInputBucket(request: UnbindInputBucketRequest): Promise<UnbindInputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindInputBucketWithOptions(request, runtime);
  }

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

  async unbindOutputBucket(request: UnbindOutputBucketRequest): Promise<UnbindOutputBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindOutputBucketWithOptions(request, runtime);
  }

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

  async unregisterCustomFace(request: UnregisterCustomFaceRequest): Promise<UnregisterCustomFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unregisterCustomFaceWithOptions(request, runtime);
  }

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

  async updateMedia(request: UpdateMediaRequest): Promise<UpdateMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaWithOptions(request, runtime);
  }

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

  async updateMediaCategory(request: UpdateMediaCategoryRequest): Promise<UpdateMediaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaCategoryWithOptions(request, runtime);
  }

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

  async updateMediaCover(request: UpdateMediaCoverRequest): Promise<UpdateMediaCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaCoverWithOptions(request, runtime);
  }

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

  async updateMediaPublishState(request: UpdateMediaPublishStateRequest): Promise<UpdateMediaPublishStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaPublishStateWithOptions(request, runtime);
  }

  async updateMediaWorkflowWithOptions(request: UpdateMediaWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaWorkflowResponse> {
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

    if (!Util.isUnset(request.topology)) {
      query["Topology"] = request.topology;
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

  async updateMediaWorkflow(request: UpdateMediaWorkflowRequest): Promise<UpdateMediaWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaWorkflowWithOptions(request, runtime);
  }

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

  async updateMediaWorkflowTriggerMode(request: UpdateMediaWorkflowTriggerModeRequest): Promise<UpdateMediaWorkflowTriggerModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaWorkflowTriggerModeWithOptions(request, runtime);
  }

  async updatePipelineWithOptions(request: UpdatePipelineRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineResponse> {
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

  async updatePipeline(request: UpdatePipelineRequest): Promise<UpdatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePipelineWithOptions(request, runtime);
  }

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

  async updateSmarttagTemplate(request: UpdateSmarttagTemplateRequest): Promise<UpdateSmarttagTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmarttagTemplateWithOptions(request, runtime);
  }

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

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

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

  async updateWaterMarkTemplate(request: UpdateWaterMarkTemplateRequest): Promise<UpdateWaterMarkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWaterMarkTemplateWithOptions(request, runtime);
  }

}
