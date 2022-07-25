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
  statusCode: number;
  body: AddMosaicsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: AddProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: AddRelativePositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: AddRoomPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRoomPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneRequest extends $tea.Model {
  customerUid?: string;
  name?: string;
  projectId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      customerUid: 'CustomerUid',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerUid: 'string',
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
  statusCode: number;
  body: AddSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: AddSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserPropertyRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserPropertyResponseBody extends $tea.Model {
  code?: number;
  match?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      match: 'Match',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      match: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckUserPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckUserPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySceneRequest extends $tea.Model {
  projectId?: string;
  sceneId?: string;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      sceneId: 'string',
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySceneResponseBody extends $tea.Model {
  code?: number;
  data?: CopySceneResponseBodyData;
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
      data: CopySceneResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CopySceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopySceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadPolicyRequest extends $tea.Model {
  option?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadPolicyResponseBody extends $tea.Model {
  code?: number;
  data?: CreateUploadPolicyResponseBodyData;
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
      data: CreateUploadPolicyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUploadPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUploadPolicyResponseBody,
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
  statusCode: number;
  body: DetailProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  captures?: DetailSceneResponseBodyCaptures[];
  code?: number;
  coverUrl?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  message?: string;
  name?: string;
  previewToken?: string;
  published?: boolean;
  requestId?: string;
  sourceNum?: number;
  status?: string;
  statusName?: string;
  subSceneNum?: number;
  success?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      captures: 'Captures',
      code: 'Code',
      coverUrl: 'CoverUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      previewToken: 'PreviewToken',
      published: 'Published',
      requestId: 'RequestId',
      sourceNum: 'SourceNum',
      status: 'Status',
      statusName: 'StatusName',
      subSceneNum: 'SubSceneNum',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captures: { 'type': 'array', 'itemType': DetailSceneResponseBodyCaptures },
      code: 'number',
      coverUrl: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      previewToken: 'string',
      published: 'boolean',
      requestId: 'string',
      sourceNum: 'number',
      status: 'string',
      statusName: 'string',
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
  statusCode: number;
  body: DetailSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  position?: string;
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
      position: 'Position',
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
      position: 'string',
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
  statusCode: number;
  body: DetailSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DropProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DropSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DropSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetConnDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConnDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopySceneTaskStatusRequest extends $tea.Model {
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

export class GetCopySceneTaskStatusResponseBody extends $tea.Model {
  code?: number;
  data?: GetCopySceneTaskStatusResponseBodyData;
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
      data: GetCopySceneTaskStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopySceneTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCopySceneTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCopySceneTaskStatusResponseBody,
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
  statusCode: number;
  body: GetHotspotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetHotspotSceneDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetHotspotTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetLayoutDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetOriginLayoutDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetOssPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOssPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackSceneTaskStatusRequest extends $tea.Model {
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackSceneTaskStatusResponseBody extends $tea.Model {
  code?: number;
  data?: GetPackSceneTaskStatusResponseBodyData;
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
      data: GetPackSceneTaskStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackSceneTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPackSceneTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPackSceneTaskStatusResponseBody,
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
  statusCode: number;
  body: GetRectifyImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetSceneBuildTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSceneBuildTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePackUrlRequest extends $tea.Model {
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

export class GetScenePackUrlResponseBody extends $tea.Model {
  code?: number;
  data?: GetScenePackUrlResponseBodyData;
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
      data: GetScenePackUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePackUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetScenePackUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScenePackUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataRequest extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  previewToken?: string;
  showTag?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      previewToken: 'PreviewToken',
      showTag: 'ShowTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      previewToken: 'string',
      showTag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBody extends $tea.Model {
  code?: number;
  data?: GetScenePreviewDataResponseBodyData;
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
      data: GetScenePreviewDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetScenePreviewDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScenePreviewDataResponseBody,
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
  statusCode: number;
  body: GetScenePreviewInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScenePreviewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewResourceRequest extends $tea.Model {
  draft?: boolean;
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'boolean',
      previewToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewResourceResponseBody extends $tea.Model {
  code?: number;
  data?: GetScenePreviewResourceResponseBodyData;
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
      data: GetScenePreviewResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetScenePreviewResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScenePreviewResourceResponseBody,
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
  statusCode: number;
  body: GetSingleConnDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSingleConnDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourcePackStatusRequest extends $tea.Model {
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

export class GetSourcePackStatusResponseBody extends $tea.Model {
  code?: number;
  data?: GetSourcePackStatusResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetSourcePackStatusResponseBodyData,
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

export class GetSourcePackStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSourcePackStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSourcePackStatusResponseBody,
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
  statusCode: number;
  body: GetSubSceneTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetWindowConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWindowConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelBuildRequest extends $tea.Model {
  mode?: string;
  modelStyle?: string;
  optimizeWallWidth?: string;
  planStyle?: string;
  sceneId?: string;
  wallHeight?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      modelStyle: 'ModelStyle',
      optimizeWallWidth: 'OptimizeWallWidth',
      planStyle: 'PlanStyle',
      sceneId: 'SceneId',
      wallHeight: 'WallHeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      modelStyle: 'string',
      optimizeWallWidth: 'string',
      planStyle: 'string',
      sceneId: 'string',
      wallHeight: 'number',
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
  statusCode: number;
  body: LabelBuildResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: LinkImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: ListProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: ListSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSceneResponseBody,
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
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      showLayoutData: 'ShowLayoutData',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      sceneId: 'string',
      showLayoutData: 'boolean',
      sortField: 'string',
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
  statusCode: number;
  body: ListSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: OptimizeRightAngleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OptimizeRightAngleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PackSceneRequest extends $tea.Model {
  sceneId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PackSceneResponseBody extends $tea.Model {
  code?: number;
  data?: PackSceneResponseBodyData;
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
      data: PackSceneResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PackSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PackSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PackSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PackSourceRequest extends $tea.Model {
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

export class PackSourceResponseBody extends $tea.Model {
  code?: number;
  data?: PackSourceResponseBodyData;
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
      data: PackSourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PackSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PackSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PackSourceResponseBody,
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
  statusCode: number;
  body: PredImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: PredictionWallLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: PublishHotspotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishHotspotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHotspotConfigRequest extends $tea.Model {
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

export class PublishHotspotConfigResponseBody extends $tea.Model {
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

export class PublishHotspotConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishHotspotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishHotspotConfigResponseBody,
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
  statusCode: number;
  body: PublishSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  syncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      syncStatus: 'SyncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
      syncStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: RecoveryOriginImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: RectVerticalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: RectifyImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: RollbackSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: SaveHotspotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: SaveHotspotTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveHotspotTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotTagListRequest extends $tea.Model {
  hotspotListJson?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      hotspotListJson: 'HotspotListJson',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotspotListJson: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotTagListResponseBody extends $tea.Model {
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

export class SaveHotspotTagListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveHotspotTagListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveHotspotTagListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveModelConfigRequest extends $tea.Model {
  data?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveModelConfigResponseBody extends $tea.Model {
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

export class SaveModelConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveModelConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveModelConfigResponseBody,
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
  statusCode: number;
  body: ScenePublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: TempPreviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: TempPreviewStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: UpdateConnDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: UpdateLayoutDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: UpdateSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  viewPoint?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      viewPoint: 'ViewPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      viewPoint: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubSceneShrinkRequest extends $tea.Model {
  id?: string;
  name?: string;
  viewPointShrink?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      viewPointShrink: 'ViewPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      viewPointShrink: 'string',
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
  statusCode: number;
  body: UpdateSubSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSubSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubSceneSeqRequest extends $tea.Model {
  sceneId?: string;
  sortSubSceneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      sortSubSceneIds: 'SortSubSceneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      sortSubSceneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubSceneSeqShrinkRequest extends $tea.Model {
  sceneId?: string;
  sortSubSceneIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      sortSubSceneIdsShrink: 'SortSubSceneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      sortSubSceneIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubSceneSeqResponseBody extends $tea.Model {
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

export class UpdateSubSceneSeqResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSubSceneSeqResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSubSceneSeqResponseBody,
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

export class CopySceneResponseBodyData extends $tea.Model {
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

export class CreateUploadPolicyResponseBodyData extends $tea.Model {
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

export class DetailSceneResponseBodyCaptures extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
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

export class GetCopySceneTaskStatusResponseBodyData extends $tea.Model {
  progress?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      status: 'string',
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

export class GetPackSceneTaskStatusResponseBodyData extends $tea.Model {
  progress?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePackUrlResponseBodyData extends $tea.Model {
  expire?: string;
  url?: string;
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      expire: 'Expire',
      url: 'Url',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'string',
      url: 'string',
      valid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataModelPanoListPosition extends $tea.Model {
  rotation?: number[];
  spot?: number[];
  viewpoint?: number[];
  static names(): { [key: string]: string } {
    return {
      rotation: 'Rotation',
      spot: 'Spot',
      viewpoint: 'Viewpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rotation: { 'type': 'array', 'itemType': 'number' },
      spot: { 'type': 'array', 'itemType': 'number' },
      viewpoint: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataModelPanoList extends $tea.Model {
  curRoomPicList?: string[];
  enabled?: boolean;
  floorIdx?: string;
  id?: string;
  mainImage?: boolean;
  neighbours?: string[];
  position?: GetScenePreviewDataResponseBodyDataModelPanoListPosition;
  rawName?: string;
  resource?: string;
  roomIdx?: string;
  subSceneId?: string;
  token?: string;
  virtualId?: string;
  virtualName?: string;
  static names(): { [key: string]: string } {
    return {
      curRoomPicList: 'CurRoomPicList',
      enabled: 'Enabled',
      floorIdx: 'FloorIdx',
      id: 'Id',
      mainImage: 'MainImage',
      neighbours: 'Neighbours',
      position: 'Position',
      rawName: 'RawName',
      resource: 'Resource',
      roomIdx: 'RoomIdx',
      subSceneId: 'SubSceneId',
      token: 'Token',
      virtualId: 'VirtualId',
      virtualName: 'VirtualName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curRoomPicList: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      floorIdx: 'string',
      id: 'string',
      mainImage: 'boolean',
      neighbours: { 'type': 'array', 'itemType': 'string' },
      position: GetScenePreviewDataResponseBodyDataModelPanoListPosition,
      rawName: 'string',
      resource: 'string',
      roomIdx: 'string',
      subSceneId: 'string',
      token: 'string',
      virtualId: 'string',
      virtualName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataModel extends $tea.Model {
  modelPath?: string;
  panoList?: GetScenePreviewDataResponseBodyDataModelPanoList[];
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
      panoList: { 'type': 'array', 'itemType': GetScenePreviewDataResponseBodyDataModelPanoList },
      textureModelPath: 'string',
      texturePanoPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataTagsConfigButtonConfig extends $tea.Model {
  customText?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      customText: 'CustomText',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customText: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataTagsConfig extends $tea.Model {
  backgroundColor?: string;
  buttonConfig?: GetScenePreviewDataResponseBodyDataTagsConfigButtonConfig;
  content?: string;
  formImgSize?: number[];
  formJumpType?: boolean;
  formSelectImgType?: string;
  images?: string[];
  isTagVisibleBy3d?: boolean;
  link?: string;
  panoId?: string;
  position?: number[];
  positionPanoCube?: number[];
  relatedPanoIds?: string[];
  sceneId?: number;
  title?: string;
  video?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundColor: 'BackgroundColor',
      buttonConfig: 'ButtonConfig',
      content: 'Content',
      formImgSize: 'FormImgSize',
      formJumpType: 'FormJumpType',
      formSelectImgType: 'FormSelectImgType',
      images: 'Images',
      isTagVisibleBy3d: 'IsTagVisibleBy3d',
      link: 'Link',
      panoId: 'PanoId',
      position: 'Position',
      positionPanoCube: 'PositionPanoCube',
      relatedPanoIds: 'RelatedPanoIds',
      sceneId: 'SceneId',
      title: 'Title',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundColor: 'string',
      buttonConfig: GetScenePreviewDataResponseBodyDataTagsConfigButtonConfig,
      content: 'string',
      formImgSize: { 'type': 'array', 'itemType': 'number' },
      formJumpType: 'boolean',
      formSelectImgType: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      isTagVisibleBy3d: 'boolean',
      link: 'string',
      panoId: 'string',
      position: { 'type': 'array', 'itemType': 'number' },
      positionPanoCube: { 'type': 'array', 'itemType': 'number' },
      relatedPanoIds: { 'type': 'array', 'itemType': 'string' },
      sceneId: 'number',
      title: 'string',
      video: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataTags extends $tea.Model {
  config?: GetScenePreviewDataResponseBodyDataTagsConfig;
  id?: string;
  position?: number[];
  positionPanoCube?: number[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      position: 'Position',
      positionPanoCube: 'PositionPanoCube',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetScenePreviewDataResponseBodyDataTagsConfig,
      id: 'string',
      position: { 'type': 'array', 'itemType': 'number' },
      positionPanoCube: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyData extends $tea.Model {
  model?: GetScenePreviewDataResponseBodyDataModel;
  tags?: GetScenePreviewDataResponseBodyDataTags[];
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: GetScenePreviewDataResponseBodyDataModel,
      tags: { 'type': 'array', 'itemType': GetScenePreviewDataResponseBodyDataTags },
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

export class GetScenePreviewResourceResponseBodyDataResourceDirectory extends $tea.Model {
  hotspotTagConfig?: string;
  modelConfig?: string;
  orthomapConfig?: string;
  rootPath?: string;
  static names(): { [key: string]: string } {
    return {
      hotspotTagConfig: 'HotspotTagConfig',
      modelConfig: 'ModelConfig',
      orthomapConfig: 'OrthomapConfig',
      rootPath: 'RootPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotspotTagConfig: 'string',
      modelConfig: 'string',
      orthomapConfig: 'string',
      rootPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewResourceResponseBodyData extends $tea.Model {
  name?: string;
  resourceDirectory?: GetScenePreviewResourceResponseBodyDataResourceDirectory;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resourceDirectory: 'ResourceDirectory',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceDirectory: GetScenePreviewResourceResponseBodyDataResourceDirectory,
      version: 'string',
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

export class GetSourcePackStatusResponseBodyData extends $tea.Model {
  progress?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      status: 'string',
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
  coverUrl?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  name?: string;
  previewToken?: string;
  published?: boolean;
  sourceNum?: number;
  status?: string;
  statusName?: string;
  subSceneNum?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      previewToken: 'PreviewToken',
      published: 'Published',
      sourceNum: 'SourceNum',
      status: 'Status',
      statusName: 'StatusName',
      subSceneNum: 'SubSceneNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
      previewToken: 'string',
      published: 'boolean',
      sourceNum: 'number',
      status: 'string',
      statusName: 'string',
      subSceneNum: 'number',
      type: 'string',
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

export class PackSceneResponseBodyData extends $tea.Model {
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

export class PackSourceResponseBodyData extends $tea.Model {
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
    if (!Util.isUnset(request.customerUid)) {
      query["CustomerUid"] = request.customerUid;
    }

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

  async checkUserPropertyWithOptions(request: CheckUserPropertyRequest, runtime: $Util.RuntimeOptions): Promise<CheckUserPropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckUserProperty",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUserPropertyResponse>(await this.callApi(params, req, runtime), new CheckUserPropertyResponse({}));
  }

  async checkUserProperty(request: CheckUserPropertyRequest): Promise<CheckUserPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUserPropertyWithOptions(request, runtime);
  }

  async copySceneWithOptions(request: CopySceneRequest, runtime: $Util.RuntimeOptions): Promise<CopySceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopySceneResponse>(await this.callApi(params, req, runtime), new CopySceneResponse({}));
  }

  async copyScene(request: CopySceneRequest): Promise<CopySceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copySceneWithOptions(request, runtime);
  }

  async createUploadPolicyWithOptions(request: CreateUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadPolicyResponse>(await this.callApi(params, req, runtime), new CreateUploadPolicyResponse({}));
  }

  async createUploadPolicy(request: CreateUploadPolicyRequest): Promise<CreateUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadPolicyWithOptions(request, runtime);
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

  async getCopySceneTaskStatusWithOptions(request: GetCopySceneTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetCopySceneTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCopySceneTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCopySceneTaskStatusResponse>(await this.callApi(params, req, runtime), new GetCopySceneTaskStatusResponse({}));
  }

  async getCopySceneTaskStatus(request: GetCopySceneTaskStatusRequest): Promise<GetCopySceneTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCopySceneTaskStatusWithOptions(request, runtime);
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

  async getPackSceneTaskStatusWithOptions(request: GetPackSceneTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPackSceneTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPackSceneTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPackSceneTaskStatusResponse>(await this.callApi(params, req, runtime), new GetPackSceneTaskStatusResponse({}));
  }

  async getPackSceneTaskStatus(request: GetPackSceneTaskStatusRequest): Promise<GetPackSceneTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPackSceneTaskStatusWithOptions(request, runtime);
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

  async getScenePackUrlWithOptions(request: GetScenePackUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetScenePackUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScenePackUrl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScenePackUrlResponse>(await this.callApi(params, req, runtime), new GetScenePackUrlResponse({}));
  }

  async getScenePackUrl(request: GetScenePackUrlRequest): Promise<GetScenePackUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenePackUrlWithOptions(request, runtime);
  }

  async getScenePreviewDataWithOptions(request: GetScenePreviewDataRequest, runtime: $Util.RuntimeOptions): Promise<GetScenePreviewDataResponse> {
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

    if (!Util.isUnset(request.showTag)) {
      query["ShowTag"] = request.showTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScenePreviewData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScenePreviewDataResponse>(await this.callApi(params, req, runtime), new GetScenePreviewDataResponse({}));
  }

  async getScenePreviewData(request: GetScenePreviewDataRequest): Promise<GetScenePreviewDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenePreviewDataWithOptions(request, runtime);
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

  async getScenePreviewResourceWithOptions(request: GetScenePreviewResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetScenePreviewResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.draft)) {
      query["Draft"] = request.draft;
    }

    if (!Util.isUnset(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScenePreviewResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScenePreviewResourceResponse>(await this.callApi(params, req, runtime), new GetScenePreviewResourceResponse({}));
  }

  async getScenePreviewResource(request: GetScenePreviewResourceRequest): Promise<GetScenePreviewResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenePreviewResourceWithOptions(request, runtime);
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

  async getSourcePackStatusWithOptions(request: GetSourcePackStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSourcePackStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSourcePackStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSourcePackStatusResponse>(await this.callApi(params, req, runtime), new GetSourcePackStatusResponse({}));
  }

  async getSourcePackStatus(request: GetSourcePackStatusRequest): Promise<GetSourcePackStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSourcePackStatusWithOptions(request, runtime);
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

    if (!Util.isUnset(request.modelStyle)) {
      query["ModelStyle"] = request.modelStyle;
    }

    if (!Util.isUnset(request.optimizeWallWidth)) {
      query["OptimizeWallWidth"] = request.optimizeWallWidth;
    }

    if (!Util.isUnset(request.planStyle)) {
      query["PlanStyle"] = request.planStyle;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.wallHeight)) {
      query["WallHeight"] = request.wallHeight;
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

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
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

  async packSceneWithOptions(request: PackSceneRequest, runtime: $Util.RuntimeOptions): Promise<PackSceneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PackScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PackSceneResponse>(await this.callApi(params, req, runtime), new PackSceneResponse({}));
  }

  async packScene(request: PackSceneRequest): Promise<PackSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.packSceneWithOptions(request, runtime);
  }

  async packSourceWithOptions(request: PackSourceRequest, runtime: $Util.RuntimeOptions): Promise<PackSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PackSource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PackSourceResponse>(await this.callApi(params, req, runtime), new PackSourceResponse({}));
  }

  async packSource(request: PackSourceRequest): Promise<PackSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.packSourceWithOptions(request, runtime);
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

  async publishHotspotConfigWithOptions(request: PublishHotspotConfigRequest, runtime: $Util.RuntimeOptions): Promise<PublishHotspotConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishHotspotConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishHotspotConfigResponse>(await this.callApi(params, req, runtime), new PublishHotspotConfigResponse({}));
  }

  async publishHotspotConfig(request: PublishHotspotConfigRequest): Promise<PublishHotspotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishHotspotConfigWithOptions(request, runtime);
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

  async saveHotspotTagListWithOptions(request: SaveHotspotTagListRequest, runtime: $Util.RuntimeOptions): Promise<SaveHotspotTagListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hotspotListJson)) {
      query["HotspotListJson"] = request.hotspotListJson;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveHotspotTagList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveHotspotTagListResponse>(await this.callApi(params, req, runtime), new SaveHotspotTagListResponse({}));
  }

  async saveHotspotTagList(request: SaveHotspotTagListRequest): Promise<SaveHotspotTagListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveHotspotTagListWithOptions(request, runtime);
  }

  async saveModelConfigWithOptions(request: SaveModelConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveModelConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveModelConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveModelConfigResponse>(await this.callApi(params, req, runtime), new SaveModelConfigResponse({}));
  }

  async saveModelConfig(request: SaveModelConfigRequest): Promise<SaveModelConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveModelConfigWithOptions(request, runtime);
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

  async updateSubSceneWithOptions(tmpReq: UpdateSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubSceneResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSubSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.viewPoint)) {
      request.viewPointShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewPoint, "ViewPoint", "json");
    }

    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.viewPointShrink)) {
      query["ViewPoint"] = request.viewPointShrink;
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

  async updateSubSceneSeqWithOptions(tmpReq: UpdateSubSceneSeqRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubSceneSeqResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSubSceneSeqShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sortSubSceneIds)) {
      request.sortSubSceneIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortSubSceneIds, "SortSubSceneIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sortSubSceneIdsShrink)) {
      query["SortSubSceneIds"] = request.sortSubSceneIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubSceneSeq",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubSceneSeqResponse>(await this.callApi(params, req, runtime), new UpdateSubSceneSeqResponse({}));
  }

  async updateSubSceneSeq(request: UpdateSubSceneSeqRequest): Promise<UpdateSubSceneSeqResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubSceneSeqWithOptions(request, runtime);
  }

}
