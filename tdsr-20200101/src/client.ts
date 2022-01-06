// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddMosaicsRequest extends $tea.Model {
  markPosition?: string;
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      markPosition: 'MarkPosition',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markPosition: 'string',
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMosaicsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMosaicsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddMosaicsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddMosaicsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectRequest extends $tea.Model {
  businessId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectResponseBody extends $tea.Model {
  code?: number;
  id?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRelativePositionRequest extends $tea.Model {
  relativePosition?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      relativePosition: 'RelativePosition',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relativePosition: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRelativePositionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRelativePositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRelativePositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRelativePositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRoomPlanRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRoomPlanResponseBody extends $tea.Model {
  code?: number;
  data?: AddRoomPlanResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddRoomPlanResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRoomPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRoomPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRoomPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneRequest extends $tea.Model {
  name?: string;
  projectId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneResponseBody extends $tea.Model {
  code?: number;
  id?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubSceneRequest extends $tea.Model {
  name?: string;
  sceneId?: string;
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sceneId: 'SceneId',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sceneId: 'string',
      uploadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubSceneResponseBody extends $tea.Model {
  code?: number;
  id?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceRequest extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prompt?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      level: 'Level',
      message: 'Message',
      pk: 'Pk',
      prompt: 'Prompt',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prompt: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceResponseBody extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prompt?: string;
  requestId?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      level: 'Level',
      message: 'Message',
      pk: 'Pk',
      prompt: 'Prompt',
      requestId: 'RequestId',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prompt: 'string',
      requestId: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  builderUserIdList?: string;
  businessId?: string;
  businessUserIdList?: string;
  gatherUserIdList?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      builderUserIdList: 'BuilderUserIdList',
      businessId: 'BusinessId',
      businessUserIdList: 'BusinessUserIdList',
      gatherUserIdList: 'GatherUserIdList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builderUserIdList: 'string',
      businessId: 'string',
      businessUserIdList: 'string',
      gatherUserIdList: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  errMessage?: string;
  id?: number;
  name?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      id: 'number',
      name: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $tea.Model {
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBody extends $tea.Model {
  errMessage?: string;
  previewToken?: string;
  requestId?: string;
  sceneId?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      previewToken: 'PreviewToken',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      previewToken: 'string',
      requestId: 'string',
      sceneId: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  paramFile?: string;
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramFile: 'ParamFile',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramFile: 'string',
      subSceneUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  errMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
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

export class DeleteProjectResponseBody extends $tea.Model {
  errMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailProjectRequest extends $tea.Model {
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

export class DetailProjectResponseBody extends $tea.Model {
  businessId?: number;
  businessName?: string;
  code?: number;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  message?: string;
  name?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      code: 'Code',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      code: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetailProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetailProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailSceneRequest extends $tea.Model {
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

export class DetailSceneResponseBody extends $tea.Model {
  code?: number;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  message?: string;
  name?: string;
  previewToken?: string;
  published?: boolean;
  requestId?: string;
  sourceNum?: number;
  subSceneNum?: number;
  success?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      previewToken: 'PreviewToken',
      published: 'Published',
      requestId: 'RequestId',
      sourceNum: 'SourceNum',
      subSceneNum: 'SubSceneNum',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      previewToken: 'string',
      published: 'boolean',
      requestId: 'string',
      sourceNum: 'number',
      subSceneNum: 'number',
      success: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetailSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetailSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailSubSceneRequest extends $tea.Model {
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

export class DetailSubSceneResponseBody extends $tea.Model {
  code?: number;
  coverUrl?: string;
  cubemapPath?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  imageUrl?: string;
  layoutData?: string;
  message?: string;
  name?: string;
  originUrl?: string;
  requestId?: string;
  resourceId?: string;
  status?: number;
  success?: boolean;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      coverUrl: 'CoverUrl',
      cubemapPath: 'CubemapPath',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      imageUrl: 'ImageUrl',
      layoutData: 'LayoutData',
      message: 'Message',
      name: 'Name',
      originUrl: 'OriginUrl',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      status: 'Status',
      success: 'Success',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      coverUrl: 'string',
      cubemapPath: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      imageUrl: 'string',
      layoutData: 'string',
      message: 'string',
      name: 'string',
      originUrl: 'string',
      requestId: 'string',
      resourceId: 'string',
      status: 'number',
      success: 'boolean',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailSubSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetailSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetailSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropProjectRequest extends $tea.Model {
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

export class DropProjectResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DropProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DropProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropSceneRequest extends $tea.Model {
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

export class DropSceneResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DropSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DropSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropSubSceneRequest extends $tea.Model {
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

export class DropSubSceneResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropSubSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DropSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DropSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnDataRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnDataResponseBody extends $tea.Model {
  code?: number;
  extend?: string;
  list?: GetConnDataResponseBodyList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extend: 'Extend',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      extend: 'string',
      list: { 'type': 'array', 'itemType': GetConnDataResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConnDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConnDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotConfigRequest extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  previewToken?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      previewToken: 'PreviewToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      previewToken: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotConfigResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotspotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotspotConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotSceneDataRequest extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  previewToken?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      previewToken: 'PreviewToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      previewToken: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotSceneDataResponseBody extends $tea.Model {
  code?: number;
  data?: GetHotspotSceneDataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetHotspotSceneDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotSceneDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotspotSceneDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotspotSceneDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTagRequest extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  previewToken?: string;
  subSceneUuid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      previewToken: 'PreviewToken',
      subSceneUuid: 'SubSceneUuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      previewToken: 'string',
      subSceneUuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTagResponseBody extends $tea.Model {
  data?: string;
  errMessage?: string;
  objectString?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      objectString: 'ObjectString',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errMessage: 'string',
      objectString: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotspotTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotspotTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayoutDataRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayoutDataResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayoutDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLayoutDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLayoutDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginLayoutDataRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginLayoutDataResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginLayoutDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOriginLayoutDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOriginLayoutDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssPolicyRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssPolicyResponseBody extends $tea.Model {
  accessId?: string;
  callback?: string;
  code?: number;
  dir?: string;
  expire?: string;
  host?: string;
  message?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      callback: 'Callback',
      code: 'Code',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      message: 'Message',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      callback: 'string',
      code: 'number',
      dir: 'string',
      expire: 'string',
      host: 'string',
      message: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOssPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOssPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
  subSceneUuid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneUuid: 'SubSceneUuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneUuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  errMessage?: string;
  objectString?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      objectString: 'ObjectString',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errMessage: 'string',
      objectString: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyImageRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRectifyImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRectifyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneBuildTaskStatusRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneBuildTaskStatusResponseBody extends $tea.Model {
  code?: number;
  errorCode?: string;
  errorMsg?: string;
  message?: string;
  requestId?: string;
  sceneId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      requestId: 'string',
      sceneId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneBuildTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSceneBuildTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSceneBuildTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewInfoRequest extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  modelToken?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      modelToken: 'ModelToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      modelToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewInfoResponseBody extends $tea.Model {
  code?: number;
  data?: GetScenePreviewInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetScenePreviewInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScenePreviewInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScenePreviewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSingleConnDataRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSingleConnDataResponseBody extends $tea.Model {
  code?: number;
  list?: GetSingleConnDataResponseBodyList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      list: { 'type': 'array', 'itemType': GetSingleConnDataResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSingleConnDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSingleConnDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSingleConnDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubSceneTaskStatusRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubSceneTaskStatusResponseBody extends $tea.Model {
  code?: number;
  list?: GetSubSceneTaskStatusResponseBodyList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      list: { 'type': 'array', 'itemType': GetSubSceneTaskStatusResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubSceneTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSubSceneTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSubSceneTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $tea.Model {
  code?: number;
  errorCode?: string;
  errorMsg?: string;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWindowConfigRequest extends $tea.Model {
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWindowConfigResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  errMessage?: string;
  objectString?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      objectString: 'ObjectString',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errMessage: 'string',
      objectString: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWindowConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWindowConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWindowConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelBuildRequest extends $tea.Model {
  mode?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelBuildResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelBuildResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LabelBuildResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LabelBuildResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkImageRequest extends $tea.Model {
  cameraHeight?: number;
  fileName?: string;
  platform?: string;
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraHeight: 'CameraHeight',
      fileName: 'FileName',
      platform: 'Platform',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraHeight: 'number',
      fileName: 'string',
      platform: 'string',
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resourceId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resourceId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LinkImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LinkImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRequest extends $tea.Model {
  name?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBody extends $tea.Model {
  code?: number;
  count?: number;
  currentPage?: number;
  hasNext?: boolean;
  list?: ListProjectResponseBodyList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      hasNext: 'HasNext',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      currentPage: 'number',
      hasNext: 'boolean',
      list: { 'type': 'array', 'itemType': ListProjectResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneRequest extends $tea.Model {
  name?: string;
  pageNum?: number;
  pageSize?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneResponseBody extends $tea.Model {
  code?: number;
  count?: number;
  currentPage?: number;
  hasNext?: boolean;
  list?: ListSceneResponseBodyList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      hasNext: 'HasNext',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      currentPage: 'number',
      hasNext: 'boolean',
      list: { 'type': 'array', 'itemType': ListSceneResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesRequest extends $tea.Model {
  isPublishQuery?: boolean;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      isPublishQuery: 'IsPublishQuery',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublishQuery: 'boolean',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBody extends $tea.Model {
  data?: ListScenesResponseBodyData[];
  errMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListScenesResponseBodyData },
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubSceneRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  sceneId?: string;
  showLayoutData?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      showLayoutData: 'ShowLayoutData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      sceneId: 'string',
      showLayoutData: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubSceneResponseBody extends $tea.Model {
  code?: number;
  count?: number;
  currentPage?: number;
  hasNext?: boolean;
  list?: ListSubSceneResponseBodyList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      hasNext: 'HasNext',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      currentPage: 'number',
      hasNext: 'boolean',
      list: { 'type': 'array', 'itemType': ListSubSceneResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OptimizeRightAngleRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OptimizeRightAngleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OptimizeRightAngleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OptimizeRightAngleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OptimizeRightAngleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredImageRequest extends $tea.Model {
  correctVertical?: boolean;
  countDetectDoor?: number;
  detectDoor?: boolean;
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      correctVertical: 'CorrectVertical',
      countDetectDoor: 'CountDetectDoor',
      detectDoor: 'DetectDoor',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      correctVertical: 'boolean',
      countDetectDoor: 'number',
      detectDoor: 'boolean',
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PredImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PredImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictionWallLineRequest extends $tea.Model {
  cameraHeight?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cameraHeight: 'CameraHeight',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraHeight: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictionWallLineResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  subSceneId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      subSceneId: 'SubSceneId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      subSceneId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictionWallLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PredictionWallLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PredictionWallLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHotspotRequest extends $tea.Model {
  paramTag?: string;
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
      subSceneUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHotspotResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  errMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHotspotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishHotspotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishHotspotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishSceneResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  previewUrl?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      previewUrl: 'PreviewUrl',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      previewUrl: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStatusRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStatusResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryOriginImageRequest extends $tea.Model {
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryOriginImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryOriginImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecoveryOriginImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecoveryOriginImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectVerticalRequest extends $tea.Model {
  countDetectDoor?: number;
  detectDoor?: boolean;
  subSceneId?: string;
  verticalRect?: string;
  static names(): { [key: string]: string } {
    return {
      countDetectDoor: 'CountDetectDoor',
      detectDoor: 'DetectDoor',
      subSceneId: 'SubSceneId',
      verticalRect: 'VerticalRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countDetectDoor: 'number',
      detectDoor: 'boolean',
      subSceneId: 'string',
      verticalRect: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectVerticalResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectVerticalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RectVerticalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RectVerticalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectifyImageRequest extends $tea.Model {
  cameraHeight?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cameraHeight: 'CameraHeight',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraHeight: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectifyImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  subSceneId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      subSceneId: 'SubSceneId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      subSceneId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectifyImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RectifyImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RectifyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackSubSceneRequest extends $tea.Model {
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

export class RollbackSubSceneResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackSubSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotConfigRequest extends $tea.Model {
  paramTag?: string;
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
      previewToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotConfigResponseBody extends $tea.Model {
  errMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveHotspotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveHotspotConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotTagRequest extends $tea.Model {
  paramTag?: string;
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
      subSceneUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotTagResponseBody extends $tea.Model {
  errMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveHotspotTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveHotspotTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScenePublishRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScenePublishResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  previewUrl?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      previewUrl: 'PreviewUrl',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      previewUrl: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScenePublishResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScenePublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScenePublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempPreviewRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempPreviewResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  previewUrl?: string;
  requestId?: string;
  sceneId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      previewUrl: 'PreviewUrl',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      previewUrl: 'string',
      requestId: 'string',
      sceneId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempPreviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TempPreviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TempPreviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempPreviewStatusRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempPreviewStatusResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempPreviewStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TempPreviewStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TempPreviewStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnDataRequest extends $tea.Model {
  connData?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      connData: 'ConnData',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connData: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnDataResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConnDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConnDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayoutDataRequest extends $tea.Model {
  layoutData?: string;
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutData: 'LayoutData',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutData: 'string',
      subSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayoutDataResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayoutDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLayoutDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLayoutDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  businessId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRequest extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubSceneRequest extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubSceneResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRoomPlanResponseBodyData extends $tea.Model {
  accessId?: string;
  callback?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      callback: 'Callback',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      callback: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnDataResponseBodyList extends $tea.Model {
  id?: string;
  mapId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mapId: 'MapId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mapId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotSceneDataResponseBodyData extends $tea.Model {
  modelToken?: string;
  previewData?: string;
  previewToken?: string;
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      modelToken: 'ModelToken',
      previewData: 'PreviewData',
      previewToken: 'PreviewToken',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelToken: 'string',
      previewData: 'string',
      previewToken: 'string',
      sceneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewInfoResponseBodyData extends $tea.Model {
  modelPath?: string;
  panoList?: string;
  textureModelPath?: string;
  texturePanoPath?: string;
  static names(): { [key: string]: string } {
    return {
      modelPath: 'ModelPath',
      panoList: 'PanoList',
      textureModelPath: 'TextureModelPath',
      texturePanoPath: 'TexturePanoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: 'string',
      panoList: 'string',
      textureModelPath: 'string',
      texturePanoPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSingleConnDataResponseBodyList extends $tea.Model {
  id?: string;
  mapId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mapId: 'MapId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mapId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubSceneTaskStatusResponseBodyList extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  id?: string;
  sceneId?: string;
  status?: string;
  subSceneId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      id: 'Id',
      sceneId: 'SceneId',
      status: 'Status',
      subSceneId: 'SubSceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      id: 'string',
      sceneId: 'string',
      status: 'string',
      subSceneId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBodyList extends $tea.Model {
  businessId?: number;
  businessName?: string;
  createTime?: number;
  id?: string;
  modifiedTime?: number;
  name?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      createTime: 'CreateTime',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      createTime: 'number',
      id: 'string',
      modifiedTime: 'number',
      name: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneResponseBodyList extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  name?: string;
  previewToken?: string;
  published?: boolean;
  sourceNum?: number;
  subSceneNum?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      previewToken: 'PreviewToken',
      published: 'Published',
      sourceNum: 'SourceNum',
      subSceneNum: 'SubSceneNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
      previewToken: 'string',
      published: 'boolean',
      sourceNum: 'number',
      subSceneNum: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBodyData extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubSceneResponseBodyList extends $tea.Model {
  baseImageUrl?: string;
  coverUrl?: string;
  cubemapPath?: string;
  deleted?: boolean;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  layoutData?: string;
  name?: string;
  originUrl?: string;
  resourceId?: string;
  resourceName?: string;
  status?: number;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      baseImageUrl: 'BaseImageUrl',
      coverUrl: 'CoverUrl',
      cubemapPath: 'CubemapPath',
      deleted: 'Deleted',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      layoutData: 'LayoutData',
      name: 'Name',
      originUrl: 'OriginUrl',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseImageUrl: 'string',
      coverUrl: 'string',
      cubemapPath: 'string',
      deleted: 'boolean',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      layoutData: 'string',
      name: 'string',
      originUrl: 'string',
      resourceId: 'string',
      resourceName: 'string',
      status: 'number',
      type: 'string',
      url: 'string',
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
      'cn-hangzhou': "lyj.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tdsr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addMosaicsWithOptions(request: AddMosaicsRequest, runtime: $Util.RuntimeOptions): Promise<AddMosaicsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.markPosition)) {
      query["MarkPosition"] = request.markPosition;
    }

    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMosaics",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMosaicsResponse>(await this.callApi(params, req, runtime), new AddMosaicsResponse({}));
  }

  async addMosaics(request: AddMosaicsRequest): Promise<AddMosaicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMosaicsWithOptions(request, runtime);
  }

  async addProjectWithOptions(request: AddProjectRequest, runtime: $Util.RuntimeOptions): Promise<AddProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddProjectResponse>(await this.callApi(params, req, runtime), new AddProjectResponse({}));
  }

  async addProject(request: AddProjectRequest): Promise<AddProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProjectWithOptions(request, runtime);
  }

  async addRelativePositionWithOptions(request: AddRelativePositionRequest, runtime: $Util.RuntimeOptions): Promise<AddRelativePositionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.relativePosition)) {
      query["RelativePosition"] = request.relativePosition;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRelativePosition",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRelativePositionResponse>(await this.callApi(params, req, runtime), new AddRelativePositionResponse({}));
  }

  async addRelativePosition(request: AddRelativePositionRequest): Promise<AddRelativePositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRelativePositionWithOptions(request, runtime);
  }

  async addRoomPlanWithOptions(request: AddRoomPlanRequest, runtime: $Util.RuntimeOptions): Promise<AddRoomPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRoomPlan",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRoomPlanResponse>(await this.callApi(params, req, runtime), new AddRoomPlanResponse({}));
  }

  async addRoomPlan(request: AddRoomPlanRequest): Promise<AddRoomPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRoomPlanWithOptions(request, runtime);
  }

  async addSceneWithOptions(request: AddSceneRequest, runtime: $Util.RuntimeOptions): Promise<AddSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSceneResponse>(await this.callApi(params, req, runtime), new AddSceneResponse({}));
  }

  async addScene(request: AddSceneRequest): Promise<AddSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSceneWithOptions(request, runtime);
  }

  async addSubSceneWithOptions(request: AddSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<AddSubSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSubSceneResponse>(await this.callApi(params, req, runtime), new AddSubSceneResponse({}));
  }

  async addSubScene(request: AddSubSceneRequest): Promise<AddSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSubSceneWithOptions(request, runtime);
  }

  async checkResourceWithOptions(request: CheckResourceRequest, runtime: $Util.RuntimeOptions): Promise<CheckResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.gmtWakeup)) {
      query["GmtWakeup"] = request.gmtWakeup;
    }

    if (!Util.isUnset(request.hid)) {
      query["Hid"] = request.hid;
    }

    if (!Util.isUnset(request.interrupt)) {
      query["Interrupt"] = request.interrupt;
    }

    if (!Util.isUnset(request.invoker)) {
      query["Invoker"] = request.invoker;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!Util.isUnset(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.success)) {
      query["Success"] = request.success;
    }

    if (!Util.isUnset(request.taskExtraData)) {
      query["TaskExtraData"] = request.taskExtraData;
    }

    if (!Util.isUnset(request.taskIdentifier)) {
      query["TaskIdentifier"] = request.taskIdentifier;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckResourceResponse>(await this.callApi(params, req, runtime), new CheckResourceResponse({}));
  }

  async checkResource(request: CheckResourceRequest): Promise<CheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResourceWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.builderUserIdList)) {
      query["BuilderUserIdList"] = request.builderUserIdList;
    }

    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.businessUserIdList)) {
      query["BusinessUserIdList"] = request.businessUserIdList;
    }

    if (!Util.isUnset(request.gatherUserIdList)) {
      query["GatherUserIdList"] = request.gatherUserIdList;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async createSceneWithOptions(request: CreateSceneRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSceneResponse>(await this.callApi(params, req, runtime), new CreateSceneResponse({}));
  }

  async createScene(request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramFile)) {
      query["ParamFile"] = request.paramFile;
    }

    if (!Util.isUnset(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFile",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async detailProjectWithOptions(request: DetailProjectRequest, runtime: $Util.RuntimeOptions): Promise<DetailProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetailProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetailProjectResponse>(await this.callApi(params, req, runtime), new DetailProjectResponse({}));
  }

  async detailProject(request: DetailProjectRequest): Promise<DetailProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailProjectWithOptions(request, runtime);
  }

  async detailSceneWithOptions(request: DetailSceneRequest, runtime: $Util.RuntimeOptions): Promise<DetailSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetailScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetailSceneResponse>(await this.callApi(params, req, runtime), new DetailSceneResponse({}));
  }

  async detailScene(request: DetailSceneRequest): Promise<DetailSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailSceneWithOptions(request, runtime);
  }

  async detailSubSceneWithOptions(request: DetailSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<DetailSubSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetailSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetailSubSceneResponse>(await this.callApi(params, req, runtime), new DetailSubSceneResponse({}));
  }

  async detailSubScene(request: DetailSubSceneRequest): Promise<DetailSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailSubSceneWithOptions(request, runtime);
  }

  async dropProjectWithOptions(request: DropProjectRequest, runtime: $Util.RuntimeOptions): Promise<DropProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DropProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DropProjectResponse>(await this.callApi(params, req, runtime), new DropProjectResponse({}));
  }

  async dropProject(request: DropProjectRequest): Promise<DropProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropProjectWithOptions(request, runtime);
  }

  async dropSceneWithOptions(request: DropSceneRequest, runtime: $Util.RuntimeOptions): Promise<DropSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DropScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DropSceneResponse>(await this.callApi(params, req, runtime), new DropSceneResponse({}));
  }

  async dropScene(request: DropSceneRequest): Promise<DropSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropSceneWithOptions(request, runtime);
  }

  async dropSubSceneWithOptions(request: DropSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<DropSubSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DropSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DropSubSceneResponse>(await this.callApi(params, req, runtime), new DropSubSceneResponse({}));
  }

  async dropSubScene(request: DropSubSceneRequest): Promise<DropSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropSubSceneWithOptions(request, runtime);
  }

  async getConnDataWithOptions(request: GetConnDataRequest, runtime: $Util.RuntimeOptions): Promise<GetConnDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConnData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnDataResponse>(await this.callApi(params, req, runtime), new GetConnDataResponse({}));
  }

  async getConnData(request: GetConnDataRequest): Promise<GetConnDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnDataWithOptions(request, runtime);
  }

  async getHotspotConfigWithOptions(request: GetHotspotConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotspotConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotspotConfigResponse>(await this.callApi(params, req, runtime), new GetHotspotConfigResponse({}));
  }

  async getHotspotConfig(request: GetHotspotConfigRequest): Promise<GetHotspotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotConfigWithOptions(request, runtime);
  }

  async getHotspotSceneDataWithOptions(request: GetHotspotSceneDataRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotSceneDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotspotSceneData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotspotSceneDataResponse>(await this.callApi(params, req, runtime), new GetHotspotSceneDataResponse({}));
  }

  async getHotspotSceneData(request: GetHotspotSceneDataRequest): Promise<GetHotspotSceneDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotSceneDataWithOptions(request, runtime);
  }

  async getHotspotTagWithOptions(request: GetHotspotTagRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    if (!Util.isUnset(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotspotTag",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotspotTagResponse>(await this.callApi(params, req, runtime), new GetHotspotTagResponse({}));
  }

  async getHotspotTag(request: GetHotspotTagRequest): Promise<GetHotspotTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotTagWithOptions(request, runtime);
  }

  async getLayoutDataWithOptions(request: GetLayoutDataRequest, runtime: $Util.RuntimeOptions): Promise<GetLayoutDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLayoutData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLayoutDataResponse>(await this.callApi(params, req, runtime), new GetLayoutDataResponse({}));
  }

  async getLayoutData(request: GetLayoutDataRequest): Promise<GetLayoutDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLayoutDataWithOptions(request, runtime);
  }

  async getOriginLayoutDataWithOptions(request: GetOriginLayoutDataRequest, runtime: $Util.RuntimeOptions): Promise<GetOriginLayoutDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOriginLayoutData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOriginLayoutDataResponse>(await this.callApi(params, req, runtime), new GetOriginLayoutDataResponse({}));
  }

  async getOriginLayoutData(request: GetOriginLayoutDataRequest): Promise<GetOriginLayoutDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOriginLayoutDataWithOptions(request, runtime);
  }

  async getOssPolicyWithOptions(request: GetOssPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetOssPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssPolicyResponse>(await this.callApi(params, req, runtime), new GetOssPolicyResponse({}));
  }

  async getOssPolicy(request: GetOssPolicyRequest): Promise<GetOssPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssPolicyWithOptions(request, runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPolicyResponse>(await this.callApi(params, req, runtime), new GetPolicyResponse({}));
  }

  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  async getRectifyImageWithOptions(request: GetRectifyImageRequest, runtime: $Util.RuntimeOptions): Promise<GetRectifyImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRectifyImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRectifyImageResponse>(await this.callApi(params, req, runtime), new GetRectifyImageResponse({}));
  }

  async getRectifyImage(request: GetRectifyImageRequest): Promise<GetRectifyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRectifyImageWithOptions(request, runtime);
  }

  async getSceneBuildTaskStatusWithOptions(request: GetSceneBuildTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneBuildTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSceneBuildTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSceneBuildTaskStatusResponse>(await this.callApi(params, req, runtime), new GetSceneBuildTaskStatusResponse({}));
  }

  async getSceneBuildTaskStatus(request: GetSceneBuildTaskStatusRequest): Promise<GetSceneBuildTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneBuildTaskStatusWithOptions(request, runtime);
  }

  async getScenePreviewInfoWithOptions(request: GetScenePreviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetScenePreviewInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.modelToken)) {
      query["ModelToken"] = request.modelToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScenePreviewInfo",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScenePreviewInfoResponse>(await this.callApi(params, req, runtime), new GetScenePreviewInfoResponse({}));
  }

  async getScenePreviewInfo(request: GetScenePreviewInfoRequest): Promise<GetScenePreviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenePreviewInfoWithOptions(request, runtime);
  }

  async getSingleConnDataWithOptions(request: GetSingleConnDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSingleConnDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSingleConnData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSingleConnDataResponse>(await this.callApi(params, req, runtime), new GetSingleConnDataResponse({}));
  }

  async getSingleConnData(request: GetSingleConnDataRequest): Promise<GetSingleConnDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSingleConnDataWithOptions(request, runtime);
  }

  async getSubSceneTaskStatusWithOptions(request: GetSubSceneTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSubSceneTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSubSceneTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSubSceneTaskStatusResponse>(await this.callApi(params, req, runtime), new GetSubSceneTaskStatusResponse({}));
  }

  async getSubSceneTaskStatus(request: GetSubSceneTaskStatusRequest): Promise<GetSubSceneTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubSceneTaskStatusWithOptions(request, runtime);
  }

  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  async getWindowConfigWithOptions(request: GetWindowConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetWindowConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWindowConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWindowConfigResponse>(await this.callApi(params, req, runtime), new GetWindowConfigResponse({}));
  }

  async getWindowConfig(request: GetWindowConfigRequest): Promise<GetWindowConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWindowConfigWithOptions(request, runtime);
  }

  async labelBuildWithOptions(request: LabelBuildRequest, runtime: $Util.RuntimeOptions): Promise<LabelBuildResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LabelBuild",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LabelBuildResponse>(await this.callApi(params, req, runtime), new LabelBuildResponse({}));
  }

  async labelBuild(request: LabelBuildRequest): Promise<LabelBuildResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.labelBuildWithOptions(request, runtime);
  }

  async linkImageWithOptions(request: LinkImageRequest, runtime: $Util.RuntimeOptions): Promise<LinkImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cameraHeight)) {
      query["CameraHeight"] = request.cameraHeight;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LinkImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LinkImageResponse>(await this.callApi(params, req, runtime), new LinkImageResponse({}));
  }

  async linkImage(request: LinkImageRequest): Promise<LinkImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.linkImageWithOptions(request, runtime);
  }

  async listProjectWithOptions(request: ListProjectRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectResponse>(await this.callApi(params, req, runtime), new ListProjectResponse({}));
  }

  async listProject(request: ListProjectRequest): Promise<ListProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectWithOptions(request, runtime);
  }

  async listSceneWithOptions(request: ListSceneRequest, runtime: $Util.RuntimeOptions): Promise<ListSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSceneResponse>(await this.callApi(params, req, runtime), new ListSceneResponse({}));
  }

  async listScene(request: ListSceneRequest): Promise<ListSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSceneWithOptions(request, runtime);
  }

  async listScenesWithOptions(request: ListScenesRequest, runtime: $Util.RuntimeOptions): Promise<ListScenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isPublishQuery)) {
      query["IsPublishQuery"] = request.isPublishQuery;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScenes",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScenesResponse>(await this.callApi(params, req, runtime), new ListScenesResponse({}));
  }

  async listScenes(request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenesWithOptions(request, runtime);
  }

  async listSubSceneWithOptions(request: ListSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<ListSubSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.showLayoutData)) {
      query["ShowLayoutData"] = request.showLayoutData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSubSceneResponse>(await this.callApi(params, req, runtime), new ListSubSceneResponse({}));
  }

  async listSubScene(request: ListSubSceneRequest): Promise<ListSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubSceneWithOptions(request, runtime);
  }

  async optimizeRightAngleWithOptions(request: OptimizeRightAngleRequest, runtime: $Util.RuntimeOptions): Promise<OptimizeRightAngleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OptimizeRightAngle",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OptimizeRightAngleResponse>(await this.callApi(params, req, runtime), new OptimizeRightAngleResponse({}));
  }

  async optimizeRightAngle(request: OptimizeRightAngleRequest): Promise<OptimizeRightAngleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.optimizeRightAngleWithOptions(request, runtime);
  }

  async predImageWithOptions(request: PredImageRequest, runtime: $Util.RuntimeOptions): Promise<PredImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.correctVertical)) {
      query["CorrectVertical"] = request.correctVertical;
    }

    if (!Util.isUnset(request.countDetectDoor)) {
      query["CountDetectDoor"] = request.countDetectDoor;
    }

    if (!Util.isUnset(request.detectDoor)) {
      query["DetectDoor"] = request.detectDoor;
    }

    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PredImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredImageResponse>(await this.callApi(params, req, runtime), new PredImageResponse({}));
  }

  async predImage(request: PredImageRequest): Promise<PredImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predImageWithOptions(request, runtime);
  }

  async predictionWallLineWithOptions(request: PredictionWallLineRequest, runtime: $Util.RuntimeOptions): Promise<PredictionWallLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cameraHeight)) {
      query["CameraHeight"] = request.cameraHeight;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PredictionWallLine",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictionWallLineResponse>(await this.callApi(params, req, runtime), new PredictionWallLineResponse({}));
  }

  async predictionWallLine(request: PredictionWallLineRequest): Promise<PredictionWallLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictionWallLineWithOptions(request, runtime);
  }

  async publishHotspotWithOptions(request: PublishHotspotRequest, runtime: $Util.RuntimeOptions): Promise<PublishHotspotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramTag)) {
      query["ParamTag"] = request.paramTag;
    }

    if (!Util.isUnset(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishHotspot",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishHotspotResponse>(await this.callApi(params, req, runtime), new PublishHotspotResponse({}));
  }

  async publishHotspot(request: PublishHotspotRequest): Promise<PublishHotspotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishHotspotWithOptions(request, runtime);
  }

  async publishSceneWithOptions(request: PublishSceneRequest, runtime: $Util.RuntimeOptions): Promise<PublishSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishSceneResponse>(await this.callApi(params, req, runtime), new PublishSceneResponse({}));
  }

  async publishScene(request: PublishSceneRequest): Promise<PublishSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishSceneWithOptions(request, runtime);
  }

  async publishStatusWithOptions(request: PublishStatusRequest, runtime: $Util.RuntimeOptions): Promise<PublishStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishStatusResponse>(await this.callApi(params, req, runtime), new PublishStatusResponse({}));
  }

  async publishStatus(request: PublishStatusRequest): Promise<PublishStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishStatusWithOptions(request, runtime);
  }

  async recoveryOriginImageWithOptions(request: RecoveryOriginImageRequest, runtime: $Util.RuntimeOptions): Promise<RecoveryOriginImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecoveryOriginImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecoveryOriginImageResponse>(await this.callApi(params, req, runtime), new RecoveryOriginImageResponse({}));
  }

  async recoveryOriginImage(request: RecoveryOriginImageRequest): Promise<RecoveryOriginImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoveryOriginImageWithOptions(request, runtime);
  }

  async rectVerticalWithOptions(request: RectVerticalRequest, runtime: $Util.RuntimeOptions): Promise<RectVerticalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countDetectDoor)) {
      query["CountDetectDoor"] = request.countDetectDoor;
    }

    if (!Util.isUnset(request.detectDoor)) {
      query["DetectDoor"] = request.detectDoor;
    }

    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    if (!Util.isUnset(request.verticalRect)) {
      query["VerticalRect"] = request.verticalRect;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RectVertical",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RectVerticalResponse>(await this.callApi(params, req, runtime), new RectVerticalResponse({}));
  }

  async rectVertical(request: RectVerticalRequest): Promise<RectVerticalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rectVerticalWithOptions(request, runtime);
  }

  async rectifyImageWithOptions(request: RectifyImageRequest, runtime: $Util.RuntimeOptions): Promise<RectifyImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cameraHeight)) {
      query["CameraHeight"] = request.cameraHeight;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RectifyImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RectifyImageResponse>(await this.callApi(params, req, runtime), new RectifyImageResponse({}));
  }

  async rectifyImage(request: RectifyImageRequest): Promise<RectifyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rectifyImageWithOptions(request, runtime);
  }

  async rollbackSubSceneWithOptions(request: RollbackSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<RollbackSubSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackSubSceneResponse>(await this.callApi(params, req, runtime), new RollbackSubSceneResponse({}));
  }

  async rollbackSubScene(request: RollbackSubSceneRequest): Promise<RollbackSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackSubSceneWithOptions(request, runtime);
  }

  async saveHotspotConfigWithOptions(request: SaveHotspotConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveHotspotConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramTag)) {
      query["ParamTag"] = request.paramTag;
    }

    if (!Util.isUnset(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveHotspotConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveHotspotConfigResponse>(await this.callApi(params, req, runtime), new SaveHotspotConfigResponse({}));
  }

  async saveHotspotConfig(request: SaveHotspotConfigRequest): Promise<SaveHotspotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveHotspotConfigWithOptions(request, runtime);
  }

  async saveHotspotTagWithOptions(request: SaveHotspotTagRequest, runtime: $Util.RuntimeOptions): Promise<SaveHotspotTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramTag)) {
      query["ParamTag"] = request.paramTag;
    }

    if (!Util.isUnset(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveHotspotTag",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveHotspotTagResponse>(await this.callApi(params, req, runtime), new SaveHotspotTagResponse({}));
  }

  async saveHotspotTag(request: SaveHotspotTagRequest): Promise<SaveHotspotTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveHotspotTagWithOptions(request, runtime);
  }

  async scenePublishWithOptions(request: ScenePublishRequest, runtime: $Util.RuntimeOptions): Promise<ScenePublishResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScenePublish",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScenePublishResponse>(await this.callApi(params, req, runtime), new ScenePublishResponse({}));
  }

  async scenePublish(request: ScenePublishRequest): Promise<ScenePublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scenePublishWithOptions(request, runtime);
  }

  async tempPreviewWithOptions(request: TempPreviewRequest, runtime: $Util.RuntimeOptions): Promise<TempPreviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TempPreview",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TempPreviewResponse>(await this.callApi(params, req, runtime), new TempPreviewResponse({}));
  }

  async tempPreview(request: TempPreviewRequest): Promise<TempPreviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tempPreviewWithOptions(request, runtime);
  }

  async tempPreviewStatusWithOptions(request: TempPreviewStatusRequest, runtime: $Util.RuntimeOptions): Promise<TempPreviewStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TempPreviewStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TempPreviewStatusResponse>(await this.callApi(params, req, runtime), new TempPreviewStatusResponse({}));
  }

  async tempPreviewStatus(request: TempPreviewStatusRequest): Promise<TempPreviewStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tempPreviewStatusWithOptions(request, runtime);
  }

  async updateConnDataWithOptions(request: UpdateConnDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connData)) {
      query["ConnData"] = request.connData;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConnData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConnDataResponse>(await this.callApi(params, req, runtime), new UpdateConnDataResponse({}));
  }

  async updateConnData(request: UpdateConnDataRequest): Promise<UpdateConnDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnDataWithOptions(request, runtime);
  }

  async updateLayoutDataWithOptions(request: UpdateLayoutDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLayoutDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.layoutData)) {
      query["LayoutData"] = request.layoutData;
    }

    if (!Util.isUnset(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLayoutData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLayoutDataResponse>(await this.callApi(params, req, runtime), new UpdateLayoutDataResponse({}));
  }

  async updateLayoutData(request: UpdateLayoutDataRequest): Promise<UpdateLayoutDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLayoutDataWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async updateSceneWithOptions(request: UpdateSceneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSceneResponse>(await this.callApi(params, req, runtime), new UpdateSceneResponse({}));
  }

  async updateScene(request: UpdateSceneRequest): Promise<UpdateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneWithOptions(request, runtime);
  }

  async updateSubSceneWithOptions(request: UpdateSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubSceneResponse>(await this.callApi(params, req, runtime), new UpdateSubSceneResponse({}));
  }

  async updateSubScene(request: UpdateSubSceneRequest): Promise<UpdateSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubSceneWithOptions(request, runtime);
  }

}
