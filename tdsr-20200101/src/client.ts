// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  version?: string;
  list?: GetSingleConnDataResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      version: 'Version',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      version: 'string',
      list: { 'type': 'array', 'itemType': GetSingleConnDataResponseBodyList },
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  status?: string;
  type?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      status: 'Status',
      type: 'Type',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      status: 'string',
      type: 'string',
      errorCode: 'string',
      errorMsg: 'string',
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

export class LinkImageRequest extends $tea.Model {
  subSceneId?: string;
  fileName?: string;
  cameraHeight?: number;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
      fileName: 'FileName',
      cameraHeight: 'CameraHeight',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
      fileName: 'string',
      cameraHeight: 'number',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkImageResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      resourceId: 'string',
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

export class AddSceneRequest extends $tea.Model {
  type?: string;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      id: 'string',
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

export class UpdateConnDataRequest extends $tea.Model {
  sceneId?: string;
  connData?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      connData: 'ConnData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      connData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnDataResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class RectifyImageRequest extends $tea.Model {
  url?: string;
  cameraHeight?: number;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      cameraHeight: 'CameraHeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      cameraHeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectifyImageResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  taskId?: string;
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      taskId: 'TaskId',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      taskId: 'string',
      subSceneId: 'string',
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

export class LabelBuildRequest extends $tea.Model {
  sceneId?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelBuildResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class AddRelativePositionRequest extends $tea.Model {
  sceneId?: string;
  relativePosition?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      relativePosition: 'RelativePosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      relativePosition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRelativePositionResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  id?: string;
  name?: string;
  type?: string;
  subSceneNum?: number;
  sourceNum?: number;
  published?: boolean;
  gmtCreate?: number;
  gmtModified?: number;
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      subSceneNum: 'SubSceneNum',
      sourceNum: 'SourceNum',
      published: 'Published',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      id: 'string',
      name: 'string',
      type: 'string',
      subSceneNum: 'number',
      sourceNum: 'number',
      published: 'boolean',
      gmtCreate: 'number',
      gmtModified: 'number',
      previewToken: 'string',
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
  sceneId?: number;
  requestId?: string;
  previewToken?: string;
  errMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      requestId: 'RequestId',
      previewToken: 'PreviewToken',
      errMessage: 'ErrMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      requestId: 'string',
      previewToken: 'string',
      errMessage: 'string',
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
  requestId?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
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

export class CheckResourceRequest extends $tea.Model {
  country?: string;
  interrupt?: boolean;
  invoker?: string;
  pk?: string;
  bid?: string;
  hid?: number;
  taskIdentifier?: string;
  taskExtraData?: string;
  gmtWakeup?: string;
  success?: boolean;
  message?: string;
  level?: number;
  url?: string;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      pk: 'Pk',
      bid: 'Bid',
      hid: 'Hid',
      taskIdentifier: 'TaskIdentifier',
      taskExtraData: 'TaskExtraData',
      gmtWakeup: 'GmtWakeup',
      success: 'Success',
      message: 'Message',
      level: 'Level',
      url: 'Url',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      interrupt: 'boolean',
      invoker: 'string',
      pk: 'string',
      bid: 'string',
      hid: 'number',
      taskIdentifier: 'string',
      taskExtraData: 'string',
      gmtWakeup: 'string',
      success: 'boolean',
      message: 'string',
      level: 'number',
      url: 'string',
      prompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceResponseBody extends $tea.Model {
  gmtWakeup?: string;
  hid?: number;
  message?: string;
  taskIdentifier?: string;
  requestId?: string;
  success?: boolean;
  url?: string;
  interrupt?: boolean;
  invoker?: string;
  taskExtraData?: string;
  country?: string;
  prompt?: string;
  level?: number;
  pk?: string;
  bid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      message: 'Message',
      taskIdentifier: 'TaskIdentifier',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      taskExtraData: 'TaskExtraData',
      country: 'Country',
      prompt: 'Prompt',
      level: 'Level',
      pk: 'Pk',
      bid: 'Bid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtWakeup: 'string',
      hid: 'number',
      message: 'string',
      taskIdentifier: 'string',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
      interrupt: 'boolean',
      invoker: 'string',
      taskExtraData: 'string',
      country: 'string',
      prompt: 'string',
      level: 'number',
      pk: 'string',
      bid: 'string',
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

export class ListSceneRequest extends $tea.Model {
  name?: string;
  projectId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  hasNext?: boolean;
  currentPage?: number;
  totalPage?: number;
  count?: number;
  list?: ListSceneResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      hasNext: 'HasNext',
      currentPage: 'CurrentPage',
      totalPage: 'TotalPage',
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      hasNext: 'boolean',
      currentPage: 'number',
      totalPage: 'number',
      count: 'number',
      list: { 'type': 'array', 'itemType': ListSceneResponseBodyList },
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
  requestId?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class UpdateLayoutDataRequest extends $tea.Model {
  subSceneId?: string;
  layoutData?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
      layoutData: 'LayoutData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
      layoutData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayoutDataResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  errMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
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

export class RectVerticalRequest extends $tea.Model {
  subSceneId?: string;
  verticalRect?: string;
  detectDoor?: boolean;
  countDetectDoor?: number;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
      verticalRect: 'VerticalRect',
      detectDoor: 'DetectDoor',
      countDetectDoor: 'CountDetectDoor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
      verticalRect: 'string',
      detectDoor: 'boolean',
      countDetectDoor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RectVerticalResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class PredImageRequest extends $tea.Model {
  subSceneId?: string;
  detectDoor?: boolean;
  countDetectDoor?: number;
  correctVertical?: boolean;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
      detectDoor: 'DetectDoor',
      countDetectDoor: 'CountDetectDoor',
      correctVertical: 'CorrectVertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
      detectDoor: 'boolean',
      countDetectDoor: 'number',
      correctVertical: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredImageResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  accessId?: string;
  policy?: string;
  signature?: string;
  dir?: string;
  host?: string;
  expire?: string;
  callback?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      accessId: 'AccessId',
      policy: 'Policy',
      signature: 'Signature',
      dir: 'Dir',
      host: 'Host',
      expire: 'Expire',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      accessId: 'string',
      policy: 'string',
      signature: 'string',
      dir: 'string',
      host: 'string',
      expire: 'string',
      callback: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  version?: string;
  extend?: string;
  list?: GetConnDataResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      version: 'Version',
      extend: 'Extend',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      version: 'string',
      extend: 'string',
      list: { 'type': 'array', 'itemType': GetConnDataResponseBodyList },
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class TempPreviewStatusRequest extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempPreviewStatusResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      status: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      id: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  id?: string;
  name?: string;
  resourceId?: string;
  url?: string;
  coverUrl?: string;
  status?: number;
  gmtCreate?: number;
  gmtModified?: number;
  cubemapPath?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      id: 'Id',
      name: 'Name',
      resourceId: 'ResourceId',
      url: 'Url',
      coverUrl: 'CoverUrl',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      cubemapPath: 'CubemapPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      id: 'string',
      name: 'string',
      resourceId: 'string',
      url: 'string',
      coverUrl: 'string',
      status: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      cubemapPath: 'string',
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

export class ListSubSceneRequest extends $tea.Model {
  sceneId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubSceneResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  hasNext?: boolean;
  currentPage?: number;
  totalPage?: number;
  count?: number;
  list?: ListSubSceneResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      hasNext: 'HasNext',
      currentPage: 'CurrentPage',
      totalPage: 'TotalPage',
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      hasNext: 'boolean',
      currentPage: 'number',
      totalPage: 'number',
      count: 'number',
      list: { 'type': 'array', 'itemType': ListSubSceneResponseBodyList },
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class GetJobRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  name?: string;
  businessId?: string;
  businessUserIdList?: string;
  gatherUserIdList?: string;
  builderUserIdList?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      businessId: 'BusinessId',
      businessUserIdList: 'BusinessUserIdList',
      gatherUserIdList: 'GatherUserIdList',
      builderUserIdList: 'BuilderUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      businessId: 'string',
      businessUserIdList: 'string',
      gatherUserIdList: 'string',
      builderUserIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  errMessage?: string;
  success?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
      errMessage: 'ErrMessage',
      success: 'Success',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
      errMessage: 'string',
      success: 'boolean',
      name: 'string',
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
  requestId?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
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
  objectString?: string;
  requestId?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      objectString: 'ObjectString',
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      objectString: 'string',
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
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

export class GetHotspotConfigRequest extends $tea.Model {
  previewToken?: string;
  type?: number;
  enabled?: boolean;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      previewToken: 'PreviewToken',
      type: 'Type',
      enabled: 'Enabled',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewToken: 'string',
      type: 'number',
      enabled: 'boolean',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotConfigResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      data: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  id?: string;
  sceneId?: string;
  status?: string;
  type?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      id: 'Id',
      sceneId: 'SceneId',
      status: 'Status',
      type: 'Type',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      id: 'string',
      sceneId: 'string',
      status: 'string',
      type: 'string',
      errorCode: 'string',
      errorMsg: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  previewUrl?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      previewUrl: 'PreviewUrl',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      previewUrl: 'string',
      key: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  previewUrl?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      previewUrl: 'PreviewUrl',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      previewUrl: 'string',
      instanceId: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  id?: string;
  name?: string;
  businessId?: number;
  businessName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      id: 'Id',
      name: 'Name',
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      id: 'string',
      name: 'string',
      businessId: 'number',
      businessName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
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

export class ListScenesRequest extends $tea.Model {
  projectId?: string;
  isPublishQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      isPublishQuery: 'IsPublishQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      isPublishQuery: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListScenesResponseBodyData[];
  errMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errMessage: 'ErrMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListScenesResponseBodyData },
      errMessage: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class GetHotspotTagRequest extends $tea.Model {
  previewToken?: string;
  subSceneUuid?: string;
  type?: string;
  enabled?: boolean;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      previewToken: 'PreviewToken',
      subSceneUuid: 'SubSceneUuid',
      type: 'Type',
      enabled: 'Enabled',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewToken: 'string',
      subSceneUuid: 'string',
      type: 'string',
      enabled: 'boolean',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTagResponseBody extends $tea.Model {
  requestId?: string;
  objectString?: string;
  data?: string;
  errMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      objectString: 'ObjectString',
      data: 'Data',
      errMessage: 'ErrMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      objectString: 'string',
      data: 'string',
      errMessage: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class ListProjectRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  hasNext?: boolean;
  currentPage?: number;
  totalPage?: number;
  count?: number;
  list?: ListProjectResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      hasNext: 'HasNext',
      currentPage: 'CurrentPage',
      totalPage: 'TotalPage',
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      hasNext: 'boolean',
      currentPage: 'number',
      totalPage: 'number',
      count: 'number',
      list: { 'type': 'array', 'itemType': ListProjectResponseBodyList },
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      data: 'string',
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

export class GetHotspotSceneDataRequest extends $tea.Model {
  previewToken?: string;
  type?: number;
  domain?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      previewToken: 'PreviewToken',
      type: 'Type',
      domain: 'Domain',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewToken: 'string',
      type: 'number',
      domain: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotSceneDataResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  data?: GetHotspotSceneDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      data: GetHotspotSceneDataResponseBodyData,
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

export class AddMosaicsRequest extends $tea.Model {
  subSceneId?: string;
  markPosition?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneId: 'SubSceneId',
      markPosition: 'MarkPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneId: 'string',
      markPosition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMosaicsResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      previewUrl: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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

export class UpdateProjectRequest extends $tea.Model {
  id?: string;
  name?: string;
  businessId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      businessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  list?: GetSubSceneTaskStatusResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      list: { 'type': 'array', 'itemType': GetSubSceneTaskStatusResponseBodyList },
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

export class PredictionWallLineRequest extends $tea.Model {
  url?: string;
  cameraHeight?: number;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      cameraHeight: 'CameraHeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      cameraHeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictionWallLineResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  taskId?: string;
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      taskId: 'TaskId',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      taskId: 'string',
      subSceneId: 'string',
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

export class GetScenePreviewInfoRequest extends $tea.Model {
  modelToken?: string;
  domain?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      modelToken: 'ModelToken',
      domain: 'Domain',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelToken: 'string',
      domain: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  data?: GetScenePreviewInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      data: GetScenePreviewInfoResponseBodyData,
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
  objectString?: string;
  requestId?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      objectString: 'ObjectString',
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      objectString: 'string',
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
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

export class AddSubSceneRequest extends $tea.Model {
  sceneId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSubSceneResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      id: 'string',
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
  requestId?: string;
  code?: number;
  success?: boolean;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      message: 'string',
      data: 'string',
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

export class ListSceneResponseBodyList extends $tea.Model {
  id?: string;
  name?: string;
  type?: string;
  subSceneNum?: number;
  sourceNum?: number;
  published?: boolean;
  gmtCreate?: number;
  gmtModified?: number;
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
      subSceneNum: 'SubSceneNum',
      sourceNum: 'SourceNum',
      published: 'Published',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
      subSceneNum: 'number',
      sourceNum: 'number',
      published: 'boolean',
      gmtCreate: 'number',
      gmtModified: 'number',
      previewToken: 'string',
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

export class ListSubSceneResponseBodyList extends $tea.Model {
  id?: string;
  name?: string;
  resourceId?: string;
  url?: string;
  coverUrl?: string;
  status?: number;
  gmtCreate?: number;
  gmtModified?: number;
  resourceName?: string;
  cubemapPath?: string;
  deleted?: boolean;
  originUrl?: string;
  baseImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      resourceId: 'ResourceId',
      url: 'Url',
      coverUrl: 'CoverUrl',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      resourceName: 'ResourceName',
      cubemapPath: 'CubemapPath',
      deleted: 'Deleted',
      originUrl: 'OriginUrl',
      baseImageUrl: 'BaseImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      resourceId: 'string',
      url: 'string',
      coverUrl: 'string',
      status: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      resourceName: 'string',
      cubemapPath: 'string',
      deleted: 'boolean',
      originUrl: 'string',
      baseImageUrl: 'string',
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

export class ListProjectResponseBodyList extends $tea.Model {
  id?: string;
  name?: string;
  businessId?: number;
  businessName?: string;
  createTime?: number;
  modifiedTime?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      businessId: 'number',
      businessName: 'string',
      createTime: 'number',
      modifiedTime: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotSceneDataResponseBodyData extends $tea.Model {
  sceneType?: string;
  previewToken?: string;
  previewData?: string;
  modelToken?: string;
  static names(): { [key: string]: string } {
    return {
      sceneType: 'SceneType',
      previewToken: 'PreviewToken',
      previewData: 'PreviewData',
      modelToken: 'ModelToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneType: 'string',
      previewToken: 'string',
      previewData: 'string',
      modelToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubSceneTaskStatusResponseBodyList extends $tea.Model {
  id?: string;
  sceneId?: string;
  subSceneId?: string;
  status?: string;
  type?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      sceneId: 'SceneId',
      subSceneId: 'SubSceneId',
      status: 'Status',
      type: 'Type',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      sceneId: 'string',
      subSceneId: 'string',
      status: 'string',
      type: 'string',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewInfoResponseBodyData extends $tea.Model {
  panoList?: string;
  modelPath?: string;
  textureModelPath?: string;
  texturePanoPath?: string;
  static names(): { [key: string]: string } {
    return {
      panoList: 'PanoList',
      modelPath: 'ModelPath',
      textureModelPath: 'TextureModelPath',
      texturePanoPath: 'TexturePanoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panoList: 'string',
      modelPath: 'string',
      textureModelPath: 'string',
      texturePanoPath: 'string',
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

  async getSingleConnDataWithOptions(request: GetSingleConnDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSingleConnDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSingleConnDataResponse>(await this.doRPCRequest("GetSingleConnData", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSingleConnDataResponse({}));
  }

  async getSingleConnData(request: GetSingleConnDataRequest): Promise<GetSingleConnDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSingleConnDataWithOptions(request, runtime);
  }

  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskStatusResponse>(await this.doRPCRequest("GetTaskStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  async linkImageWithOptions(request: LinkImageRequest, runtime: $Util.RuntimeOptions): Promise<LinkImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LinkImageResponse>(await this.doRPCRequest("LinkImage", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new LinkImageResponse({}));
  }

  async linkImage(request: LinkImageRequest): Promise<LinkImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.linkImageWithOptions(request, runtime);
  }

  async addSceneWithOptions(request: AddSceneRequest, runtime: $Util.RuntimeOptions): Promise<AddSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSceneResponse>(await this.doRPCRequest("AddScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddSceneResponse({}));
  }

  async addScene(request: AddSceneRequest): Promise<AddSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSceneWithOptions(request, runtime);
  }

  async updateConnDataWithOptions(request: UpdateConnDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConnDataResponse>(await this.doRPCRequest("UpdateConnData", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConnDataResponse({}));
  }

  async updateConnData(request: UpdateConnDataRequest): Promise<UpdateConnDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnDataWithOptions(request, runtime);
  }

  async rectifyImageWithOptions(request: RectifyImageRequest, runtime: $Util.RuntimeOptions): Promise<RectifyImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RectifyImageResponse>(await this.doRPCRequest("RectifyImage", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RectifyImageResponse({}));
  }

  async rectifyImage(request: RectifyImageRequest): Promise<RectifyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rectifyImageWithOptions(request, runtime);
  }

  async labelBuildWithOptions(request: LabelBuildRequest, runtime: $Util.RuntimeOptions): Promise<LabelBuildResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LabelBuildResponse>(await this.doRPCRequest("LabelBuild", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new LabelBuildResponse({}));
  }

  async labelBuild(request: LabelBuildRequest): Promise<LabelBuildResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.labelBuildWithOptions(request, runtime);
  }

  async dropSceneWithOptions(request: DropSceneRequest, runtime: $Util.RuntimeOptions): Promise<DropSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DropSceneResponse>(await this.doRPCRequest("DropScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DropSceneResponse({}));
  }

  async dropScene(request: DropSceneRequest): Promise<DropSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropSceneWithOptions(request, runtime);
  }

  async optimizeRightAngleWithOptions(request: OptimizeRightAngleRequest, runtime: $Util.RuntimeOptions): Promise<OptimizeRightAngleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OptimizeRightAngleResponse>(await this.doRPCRequest("OptimizeRightAngle", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new OptimizeRightAngleResponse({}));
  }

  async optimizeRightAngle(request: OptimizeRightAngleRequest): Promise<OptimizeRightAngleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.optimizeRightAngleWithOptions(request, runtime);
  }

  async addRelativePositionWithOptions(request: AddRelativePositionRequest, runtime: $Util.RuntimeOptions): Promise<AddRelativePositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddRelativePositionResponse>(await this.doRPCRequest("AddRelativePosition", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddRelativePositionResponse({}));
  }

  async addRelativePosition(request: AddRelativePositionRequest): Promise<AddRelativePositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRelativePositionWithOptions(request, runtime);
  }

  async detailSceneWithOptions(request: DetailSceneRequest, runtime: $Util.RuntimeOptions): Promise<DetailSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetailSceneResponse>(await this.doRPCRequest("DetailScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetailSceneResponse({}));
  }

  async detailScene(request: DetailSceneRequest): Promise<DetailSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailSceneWithOptions(request, runtime);
  }

  async createSceneWithOptions(request: CreateSceneRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSceneResponse>(await this.doRPCRequest("CreateScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSceneResponse({}));
  }

  async createScene(request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFileResponse>(await this.doRPCRequest("DeleteFile", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async checkResourceWithOptions(request: CheckResourceRequest, runtime: $Util.RuntimeOptions): Promise<CheckResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckResourceResponse>(await this.doRPCRequest("CheckResource", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckResourceResponse({}));
  }

  async checkResource(request: CheckResourceRequest): Promise<CheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResourceWithOptions(request, runtime);
  }

  async listSceneWithOptions(request: ListSceneRequest, runtime: $Util.RuntimeOptions): Promise<ListSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSceneResponse>(await this.doRPCRequest("ListScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSceneResponse({}));
  }

  async listScene(request: ListSceneRequest): Promise<ListSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSceneWithOptions(request, runtime);
  }

  async publishHotspotWithOptions(request: PublishHotspotRequest, runtime: $Util.RuntimeOptions): Promise<PublishHotspotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishHotspotResponse>(await this.doRPCRequest("PublishHotspot", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishHotspotResponse({}));
  }

  async publishHotspot(request: PublishHotspotRequest): Promise<PublishHotspotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishHotspotWithOptions(request, runtime);
  }

  async updateSceneWithOptions(request: UpdateSceneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSceneResponse>(await this.doRPCRequest("UpdateScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSceneResponse({}));
  }

  async updateScene(request: UpdateSceneRequest): Promise<UpdateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneWithOptions(request, runtime);
  }

  async updateLayoutDataWithOptions(request: UpdateLayoutDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLayoutDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLayoutDataResponse>(await this.doRPCRequest("UpdateLayoutData", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLayoutDataResponse({}));
  }

  async updateLayoutData(request: UpdateLayoutDataRequest): Promise<UpdateLayoutDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLayoutDataWithOptions(request, runtime);
  }

  async saveHotspotTagWithOptions(request: SaveHotspotTagRequest, runtime: $Util.RuntimeOptions): Promise<SaveHotspotTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveHotspotTagResponse>(await this.doRPCRequest("SaveHotspotTag", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SaveHotspotTagResponse({}));
  }

  async saveHotspotTag(request: SaveHotspotTagRequest): Promise<SaveHotspotTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveHotspotTagWithOptions(request, runtime);
  }

  async recoveryOriginImageWithOptions(request: RecoveryOriginImageRequest, runtime: $Util.RuntimeOptions): Promise<RecoveryOriginImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecoveryOriginImageResponse>(await this.doRPCRequest("RecoveryOriginImage", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RecoveryOriginImageResponse({}));
  }

  async recoveryOriginImage(request: RecoveryOriginImageRequest): Promise<RecoveryOriginImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoveryOriginImageWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectResponse>(await this.doRPCRequest("DeleteProject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async rectVerticalWithOptions(request: RectVerticalRequest, runtime: $Util.RuntimeOptions): Promise<RectVerticalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RectVerticalResponse>(await this.doRPCRequest("RectVertical", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RectVerticalResponse({}));
  }

  async rectVertical(request: RectVerticalRequest): Promise<RectVerticalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rectVerticalWithOptions(request, runtime);
  }

  async predImageWithOptions(request: PredImageRequest, runtime: $Util.RuntimeOptions): Promise<PredImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PredImageResponse>(await this.doRPCRequest("PredImage", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PredImageResponse({}));
  }

  async predImage(request: PredImageRequest): Promise<PredImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predImageWithOptions(request, runtime);
  }

  async getOssPolicyWithOptions(request: GetOssPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetOssPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOssPolicyResponse>(await this.doRPCRequest("GetOssPolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetOssPolicyResponse({}));
  }

  async getOssPolicy(request: GetOssPolicyRequest): Promise<GetOssPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssPolicyWithOptions(request, runtime);
  }

  async getConnDataWithOptions(request: GetConnDataRequest, runtime: $Util.RuntimeOptions): Promise<GetConnDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConnDataResponse>(await this.doRPCRequest("GetConnData", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetConnDataResponse({}));
  }

  async getConnData(request: GetConnDataRequest): Promise<GetConnDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnDataWithOptions(request, runtime);
  }

  async rollbackSubSceneWithOptions(request: RollbackSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<RollbackSubSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackSubSceneResponse>(await this.doRPCRequest("RollbackSubScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackSubSceneResponse({}));
  }

  async rollbackSubScene(request: RollbackSubSceneRequest): Promise<RollbackSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackSubSceneWithOptions(request, runtime);
  }

  async tempPreviewStatusWithOptions(request: TempPreviewStatusRequest, runtime: $Util.RuntimeOptions): Promise<TempPreviewStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TempPreviewStatusResponse>(await this.doRPCRequest("TempPreviewStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TempPreviewStatusResponse({}));
  }

  async tempPreviewStatus(request: TempPreviewStatusRequest): Promise<TempPreviewStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tempPreviewStatusWithOptions(request, runtime);
  }

  async addProjectWithOptions(request: AddProjectRequest, runtime: $Util.RuntimeOptions): Promise<AddProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddProjectResponse>(await this.doRPCRequest("AddProject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddProjectResponse({}));
  }

  async addProject(request: AddProjectRequest): Promise<AddProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProjectWithOptions(request, runtime);
  }

  async detailSubSceneWithOptions(request: DetailSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<DetailSubSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetailSubSceneResponse>(await this.doRPCRequest("DetailSubScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetailSubSceneResponse({}));
  }

  async detailSubScene(request: DetailSubSceneRequest): Promise<DetailSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailSubSceneWithOptions(request, runtime);
  }

  async listSubSceneWithOptions(request: ListSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<ListSubSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSubSceneResponse>(await this.doRPCRequest("ListSubScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSubSceneResponse({}));
  }

  async listSubScene(request: ListSubSceneRequest): Promise<ListSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubSceneWithOptions(request, runtime);
  }

  async updateSubSceneWithOptions(request: UpdateSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSubSceneResponse>(await this.doRPCRequest("UpdateSubScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSubSceneResponse({}));
  }

  async updateSubScene(request: UpdateSubSceneRequest): Promise<UpdateSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubSceneWithOptions(request, runtime);
  }

  async getJobWithOptions(request: GetJobRequest, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobResponse>(await this.doRPCRequest("GetJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobResponse({}));
  }

  async getJob(request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async saveHotspotConfigWithOptions(request: SaveHotspotConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveHotspotConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveHotspotConfigResponse>(await this.doRPCRequest("SaveHotspotConfig", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SaveHotspotConfigResponse({}));
  }

  async saveHotspotConfig(request: SaveHotspotConfigRequest): Promise<SaveHotspotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveHotspotConfigWithOptions(request, runtime);
  }

  async getWindowConfigWithOptions(request: GetWindowConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetWindowConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWindowConfigResponse>(await this.doRPCRequest("GetWindowConfig", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetWindowConfigResponse({}));
  }

  async getWindowConfig(request: GetWindowConfigRequest): Promise<GetWindowConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWindowConfigWithOptions(request, runtime);
  }

  async getHotspotConfigWithOptions(request: GetHotspotConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotspotConfigResponse>(await this.doRPCRequest("GetHotspotConfig", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotspotConfigResponse({}));
  }

  async getHotspotConfig(request: GetHotspotConfigRequest): Promise<GetHotspotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotConfigWithOptions(request, runtime);
  }

  async getSceneBuildTaskStatusWithOptions(request: GetSceneBuildTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneBuildTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSceneBuildTaskStatusResponse>(await this.doRPCRequest("GetSceneBuildTaskStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSceneBuildTaskStatusResponse({}));
  }

  async getSceneBuildTaskStatus(request: GetSceneBuildTaskStatusRequest): Promise<GetSceneBuildTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneBuildTaskStatusWithOptions(request, runtime);
  }

  async tempPreviewWithOptions(request: TempPreviewRequest, runtime: $Util.RuntimeOptions): Promise<TempPreviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TempPreviewResponse>(await this.doRPCRequest("TempPreview", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TempPreviewResponse({}));
  }

  async tempPreview(request: TempPreviewRequest): Promise<TempPreviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tempPreviewWithOptions(request, runtime);
  }

  async publishSceneWithOptions(request: PublishSceneRequest, runtime: $Util.RuntimeOptions): Promise<PublishSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishSceneResponse>(await this.doRPCRequest("PublishScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishSceneResponse({}));
  }

  async publishScene(request: PublishSceneRequest): Promise<PublishSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishSceneWithOptions(request, runtime);
  }

  async detailProjectWithOptions(request: DetailProjectRequest, runtime: $Util.RuntimeOptions): Promise<DetailProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetailProjectResponse>(await this.doRPCRequest("DetailProject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetailProjectResponse({}));
  }

  async detailProject(request: DetailProjectRequest): Promise<DetailProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailProjectWithOptions(request, runtime);
  }

  async listScenesWithOptions(request: ListScenesRequest, runtime: $Util.RuntimeOptions): Promise<ListScenesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScenesResponse>(await this.doRPCRequest("ListScenes", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListScenesResponse({}));
  }

  async listScenes(request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenesWithOptions(request, runtime);
  }

  async dropSubSceneWithOptions(request: DropSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<DropSubSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DropSubSceneResponse>(await this.doRPCRequest("DropSubScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DropSubSceneResponse({}));
  }

  async dropSubScene(request: DropSubSceneRequest): Promise<DropSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropSubSceneWithOptions(request, runtime);
  }

  async getHotspotTagWithOptions(request: GetHotspotTagRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotspotTagResponse>(await this.doRPCRequest("GetHotspotTag", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotspotTagResponse({}));
  }

  async getHotspotTag(request: GetHotspotTagRequest): Promise<GetHotspotTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotTagWithOptions(request, runtime);
  }

  async dropProjectWithOptions(request: DropProjectRequest, runtime: $Util.RuntimeOptions): Promise<DropProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DropProjectResponse>(await this.doRPCRequest("DropProject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DropProjectResponse({}));
  }

  async dropProject(request: DropProjectRequest): Promise<DropProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropProjectWithOptions(request, runtime);
  }

  async listProjectWithOptions(request: ListProjectRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectResponse>(await this.doRPCRequest("ListProject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectResponse({}));
  }

  async listProject(request: ListProjectRequest): Promise<ListProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectWithOptions(request, runtime);
  }

  async getOriginLayoutDataWithOptions(request: GetOriginLayoutDataRequest, runtime: $Util.RuntimeOptions): Promise<GetOriginLayoutDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOriginLayoutDataResponse>(await this.doRPCRequest("GetOriginLayoutData", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetOriginLayoutDataResponse({}));
  }

  async getOriginLayoutData(request: GetOriginLayoutDataRequest): Promise<GetOriginLayoutDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOriginLayoutDataWithOptions(request, runtime);
  }

  async getHotspotSceneDataWithOptions(request: GetHotspotSceneDataRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotSceneDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotspotSceneDataResponse>(await this.doRPCRequest("GetHotspotSceneData", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotspotSceneDataResponse({}));
  }

  async getHotspotSceneData(request: GetHotspotSceneDataRequest): Promise<GetHotspotSceneDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotSceneDataWithOptions(request, runtime);
  }

  async addMosaicsWithOptions(request: AddMosaicsRequest, runtime: $Util.RuntimeOptions): Promise<AddMosaicsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddMosaicsResponse>(await this.doRPCRequest("AddMosaics", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddMosaicsResponse({}));
  }

  async addMosaics(request: AddMosaicsRequest): Promise<AddMosaicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMosaicsWithOptions(request, runtime);
  }

  async scenePublishWithOptions(request: ScenePublishRequest, runtime: $Util.RuntimeOptions): Promise<ScenePublishResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ScenePublishResponse>(await this.doRPCRequest("ScenePublish", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ScenePublishResponse({}));
  }

  async scenePublish(request: ScenePublishRequest): Promise<ScenePublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scenePublishWithOptions(request, runtime);
  }

  async getRectifyImageWithOptions(request: GetRectifyImageRequest, runtime: $Util.RuntimeOptions): Promise<GetRectifyImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRectifyImageResponse>(await this.doRPCRequest("GetRectifyImage", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRectifyImageResponse({}));
  }

  async getRectifyImage(request: GetRectifyImageRequest): Promise<GetRectifyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRectifyImageWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async getSubSceneTaskStatusWithOptions(request: GetSubSceneTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSubSceneTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSubSceneTaskStatusResponse>(await this.doRPCRequest("GetSubSceneTaskStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSubSceneTaskStatusResponse({}));
  }

  async getSubSceneTaskStatus(request: GetSubSceneTaskStatusRequest): Promise<GetSubSceneTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubSceneTaskStatusWithOptions(request, runtime);
  }

  async predictionWallLineWithOptions(request: PredictionWallLineRequest, runtime: $Util.RuntimeOptions): Promise<PredictionWallLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PredictionWallLineResponse>(await this.doRPCRequest("PredictionWallLine", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PredictionWallLineResponse({}));
  }

  async predictionWallLine(request: PredictionWallLineRequest): Promise<PredictionWallLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictionWallLineWithOptions(request, runtime);
  }

  async getScenePreviewInfoWithOptions(request: GetScenePreviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetScenePreviewInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetScenePreviewInfoResponse>(await this.doRPCRequest("GetScenePreviewInfo", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetScenePreviewInfoResponse({}));
  }

  async getScenePreviewInfo(request: GetScenePreviewInfoRequest): Promise<GetScenePreviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenePreviewInfoWithOptions(request, runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPolicyResponse>(await this.doRPCRequest("GetPolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetPolicyResponse({}));
  }

  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  async addSubSceneWithOptions(request: AddSubSceneRequest, runtime: $Util.RuntimeOptions): Promise<AddSubSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSubSceneResponse>(await this.doRPCRequest("AddSubScene", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddSubSceneResponse({}));
  }

  async addSubScene(request: AddSubSceneRequest): Promise<AddSubSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSubSceneWithOptions(request, runtime);
  }

  async getLayoutDataWithOptions(request: GetLayoutDataRequest, runtime: $Util.RuntimeOptions): Promise<GetLayoutDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLayoutDataResponse>(await this.doRPCRequest("GetLayoutData", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetLayoutDataResponse({}));
  }

  async getLayoutData(request: GetLayoutDataRequest): Promise<GetLayoutDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLayoutDataWithOptions(request, runtime);
  }

}
