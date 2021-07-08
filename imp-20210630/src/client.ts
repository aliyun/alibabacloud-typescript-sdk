// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateLiveRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  liveId?: string;
  title?: string;
  introduction?: string;
  anchorId?: string;
  codeLevel?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
      liveId: 'LiveId',
      title: 'Title',
      introduction: 'Introduction',
      anchorId: 'AnchorId',
      codeLevel: 'CodeLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
      liveId: 'string',
      title: 'string',
      introduction: 'string',
      anchorId: 'string',
      codeLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateLiveResponseBodyResult;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateLiveResponseBodyResult,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
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

export class DeleteAppResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoomRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  title?: string;
  notice?: string;
  roomOwnerId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      title: 'Title',
      notice: 'Notice',
      roomOwnerId: 'RoomOwnerId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      title: 'string',
      notice: 'string',
      roomOwnerId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoomResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppTemplateRequest extends $tea.Model {
  appTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppTemplateResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: GetAppTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: GetAppTemplateResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetRoomResponseBodyResult;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRoomResponseBodyResult,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateRequest extends $tea.Model {
  appTemplateName?: string;
  componentList?: string[];
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateName: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateShrinkRequest extends $tea.Model {
  appTemplateName?: string;
  componentListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      componentListShrink: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateName: 'string',
      componentListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: CreateAppTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: CreateAppTemplateResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: ListAppsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: ListAppsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListRoomsResponseBodyResult;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRoomsResponseBodyResult,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRoomsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRoomsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppTemplateRequest extends $tea.Model {
  appTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppTemplateResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesRequest extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: ListAppTemplatesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: ListAppTemplatesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsRequest extends $tea.Model {
  appId?: string;
  appTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appTemplateId: 'AppTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: ListComponentsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: ListComponentsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRequest extends $tea.Model {
  liveId?: string;
  title?: string;
  introduction?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      title: 'Title',
      introduction: 'Introduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      title: 'string',
      introduction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateConfigRequest extends $tea.Model {
  appTemplateId?: string;
  configList?: UpdateAppTemplateConfigRequestConfigList[];
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
      configList: { 'type': 'array', 'itemType': UpdateAppTemplateConfigRequestConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateConfigShrinkRequest extends $tea.Model {
  appTemplateId?: string;
  configListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
      configListShrink: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
      configListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateConfigResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppTemplateConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppTemplateConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
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

export class GetAppResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: GetAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: GetAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRequest extends $tea.Model {
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusRequest extends $tea.Model {
  appId?: string;
  liveDomainList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveDomainList: 'LiveDomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveDomainList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusShrinkRequest extends $tea.Model {
  appId?: string;
  liveDomainListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveDomainListShrink: 'LiveDomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveDomainListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: GetLiveDomainStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: GetLiveDomainStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLiveDomainStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLiveDomainStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenRequest extends $tea.Model {
  appId?: string;
  userId?: string;
  appKey?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      userId: 'UserId',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      userId: 'string',
      appKey: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetAuthTokenResponseBodyResult;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAuthTokenResponseBodyResult,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateRequest extends $tea.Model {
  appTemplateId?: string;
  appTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
      appTemplateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImpProductStatusResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImpProductStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImpProductStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImpProductStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLiveRequest extends $tea.Model {
  liveId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLiveResponseBody extends $tea.Model {
  requestId?: string;
  result?: PublishLiveResponseBodyResult;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: PublishLiveResponseBodyResult,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRequest extends $tea.Model {
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetLiveResponseBodyResult;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetLiveResponseBodyResult,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoomRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoomResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appName?: string;
  appTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appTemplateId: 'AppTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      result: CreateAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomRequest extends $tea.Model {
  appId?: string;
  templateId?: string;
  roomId?: string;
  title?: string;
  notice?: string;
  roomOwnerId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateId: 'TemplateId',
      roomId: 'RoomId',
      title: 'Title',
      notice: 'Notice',
      roomOwnerId: 'RoomOwnerId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      templateId: 'string',
      roomId: 'string',
      title: 'string',
      notice: 'string',
      roomOwnerId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateRoomResponseBodyResult;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateRoomResponseBodyResult,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  appStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponseBodyResult extends $tea.Model {
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppTemplateResponseBodyResultConfigList extends $tea.Model {
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

export class GetAppTemplateResponseBodyResult extends $tea.Model {
  appTemplateName?: string;
  appTemplateCreator?: string;
  status?: string;
  componentList?: string[];
  createTime?: string;
  sdkInfo?: string;
  configList?: GetAppTemplateResponseBodyResultConfigList[];
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      appTemplateCreator: 'AppTemplateCreator',
      status: 'Status',
      componentList: 'ComponentList',
      createTime: 'CreateTime',
      sdkInfo: 'SdkInfo',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateName: 'string',
      appTemplateCreator: 'string',
      status: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      sdkInfo: 'string',
      configList: { 'type': 'array', 'itemType': GetAppTemplateResponseBodyResultConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomResponseBodyResultRoomInfoPluginInstanceInfoList extends $tea.Model {
  pluginType?: string;
  pluginId?: string;
  createTime?: number;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      pluginType: 'PluginType',
      pluginId: 'PluginId',
      createTime: 'CreateTime',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginType: 'string',
      pluginId: 'string',
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomResponseBodyResultRoomInfo extends $tea.Model {
  roomId?: string;
  title?: string;
  createTime?: number;
  notice?: string;
  roomOwnerId?: string;
  uv?: number;
  onlineCount?: number;
  pluginInstanceInfoList?: GetRoomResponseBodyResultRoomInfoPluginInstanceInfoList[];
  appId?: string;
  templateId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      title: 'Title',
      createTime: 'CreateTime',
      notice: 'Notice',
      roomOwnerId: 'RoomOwnerId',
      uv: 'Uv',
      onlineCount: 'OnlineCount',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      appId: 'AppId',
      templateId: 'TemplateId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      title: 'string',
      createTime: 'number',
      notice: 'string',
      roomOwnerId: 'string',
      uv: 'number',
      onlineCount: 'number',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': GetRoomResponseBodyResultRoomInfoPluginInstanceInfoList },
      appId: 'string',
      templateId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomResponseBodyResult extends $tea.Model {
  roomInfo?: GetRoomResponseBodyResultRoomInfo;
  static names(): { [key: string]: string } {
    return {
      roomInfo: 'RoomInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomInfo: GetRoomResponseBodyResultRoomInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateResponseBodyResult extends $tea.Model {
  appTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResultAppInfoList extends $tea.Model {
  appId?: string;
  appName?: string;
  appTemplateId?: string;
  appTemplateName?: string;
  appKey?: string;
  appStatus?: string;
  createTime?: string;
  componentList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      appKey: 'AppKey',
      appStatus: 'AppStatus',
      createTime: 'CreateTime',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appTemplateId: 'string',
      appTemplateName: 'string',
      appKey: 'string',
      appStatus: 'string',
      createTime: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResult extends $tea.Model {
  totalCount?: number;
  pageTotal?: number;
  appInfoList?: ListAppsResponseBodyResultAppInfoList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageTotal: 'PageTotal',
      appInfoList: 'AppInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageTotal: 'number',
      appInfoList: { 'type': 'array', 'itemType': ListAppsResponseBodyResultAppInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponseBodyResultRoomInfoListPluginInstanceInfoList extends $tea.Model {
  pluginType?: string;
  pluginId?: string;
  createTime?: number;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      pluginType: 'PluginType',
      pluginId: 'PluginId',
      createTime: 'CreateTime',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginType: 'string',
      pluginId: 'string',
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponseBodyResultRoomInfoList extends $tea.Model {
  roomId?: string;
  title?: string;
  roomOwnerId?: string;
  notice?: string;
  uv?: number;
  onlineCount?: number;
  pluginInstanceInfoList?: ListRoomsResponseBodyResultRoomInfoListPluginInstanceInfoList[];
  createTime?: string;
  appId?: string;
  templateId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      title: 'Title',
      roomOwnerId: 'RoomOwnerId',
      notice: 'Notice',
      uv: 'Uv',
      onlineCount: 'OnlineCount',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      createTime: 'CreateTime',
      appId: 'AppId',
      templateId: 'TemplateId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      title: 'string',
      roomOwnerId: 'string',
      notice: 'string',
      uv: 'number',
      onlineCount: 'number',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': ListRoomsResponseBodyResultRoomInfoListPluginInstanceInfoList },
      createTime: 'string',
      appId: 'string',
      templateId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponseBodyResult extends $tea.Model {
  totalCount?: number;
  pageTotal?: number;
  hasMore?: boolean;
  roomInfoList?: ListRoomsResponseBodyResultRoomInfoList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageTotal: 'PageTotal',
      hasMore: 'HasMore',
      roomInfoList: 'RoomInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageTotal: 'number',
      hasMore: 'boolean',
      roomInfoList: { 'type': 'array', 'itemType': ListRoomsResponseBodyResultRoomInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBodyResultAppTemplateInfoListConfigList extends $tea.Model {
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

export class ListAppTemplatesResponseBodyResultAppTemplateInfoList extends $tea.Model {
  appTemplateId?: string;
  appTemplateName?: string;
  appTemplateCreator?: string;
  status?: string;
  componentList?: string[];
  createTime?: string;
  sdkInfo?: string;
  configList?: ListAppTemplatesResponseBodyResultAppTemplateInfoListConfigList[];
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      appTemplateCreator: 'AppTemplateCreator',
      status: 'Status',
      componentList: 'ComponentList',
      createTime: 'CreateTime',
      sdkInfo: 'SdkInfo',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
      appTemplateName: 'string',
      appTemplateCreator: 'string',
      status: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      sdkInfo: 'string',
      configList: { 'type': 'array', 'itemType': ListAppTemplatesResponseBodyResultAppTemplateInfoListConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBodyResult extends $tea.Model {
  totalCount?: number;
  pageTotal?: number;
  appTemplateInfoList?: ListAppTemplatesResponseBodyResultAppTemplateInfoList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageTotal: 'PageTotal',
      appTemplateInfoList: 'AppTemplateInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageTotal: 'number',
      appTemplateInfoList: { 'type': 'array', 'itemType': ListAppTemplatesResponseBodyResultAppTemplateInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultComponentCategoryList extends $tea.Model {
  componentType?: string;
  componentName?: string;
  inUse?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      componentName: 'ComponentName',
      inUse: 'InUse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      componentName: 'string',
      inUse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultComponentCategory extends $tea.Model {
  type?: string;
  list?: ListComponentsResponseBodyResultComponentCategoryList[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      list: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultComponentCategoryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultConfigGroup extends $tea.Model {
  key?: string;
  value?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResult extends $tea.Model {
  componentCategory?: ListComponentsResponseBodyResultComponentCategory[];
  configGroup?: ListComponentsResponseBodyResultConfigGroup[];
  static names(): { [key: string]: string } {
    return {
      componentCategory: 'ComponentCategory',
      configGroup: 'ConfigGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCategory: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultComponentCategory },
      configGroup: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultConfigGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateConfigRequestConfigList extends $tea.Model {
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

export class GetAppResponseBodyResult extends $tea.Model {
  appName?: string;
  appTemplateId?: string;
  appTemplateName?: string;
  appStatus?: string;
  appKey?: string;
  createTime?: string;
  componentList?: string[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      appStatus: 'AppStatus',
      appKey: 'AppKey',
      createTime: 'CreateTime',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appTemplateId: 'string',
      appTemplateName: 'string',
      appStatus: 'string',
      appKey: 'string',
      createTime: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusResponseBodyResultLiveDomainInfoList extends $tea.Model {
  domain?: string;
  cname?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      cname: 'Cname',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      cname: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusResponseBodyResult extends $tea.Model {
  liveDomainInfoList?: GetLiveDomainStatusResponseBodyResultLiveDomainInfoList[];
  static names(): { [key: string]: string } {
    return {
      liveDomainInfoList: 'LiveDomainInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainInfoList: { 'type': 'array', 'itemType': GetLiveDomainStatusResponseBodyResultLiveDomainInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBodyResult extends $tea.Model {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiredTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      refreshToken: 'string',
      accessTokenExpiredTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLiveResponseBodyResult extends $tea.Model {
  liveId?: string;
  anchorId?: string;
  status?: string;
  pushUrl?: string;
  liveUrl?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      anchorId: 'AnchorId',
      status: 'Status',
      pushUrl: 'PushUrl',
      liveUrl: 'LiveUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      anchorId: 'string',
      status: 'string',
      pushUrl: 'string',
      liveUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveResponseBodyResultPlayUrlInfoList extends $tea.Model {
  codeLevel?: number;
  flvUrl?: string;
  hlsUrl?: string;
  rtmpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      codeLevel: 'CodeLevel',
      flvUrl: 'FlvUrl',
      hlsUrl: 'HlsUrl',
      rtmpUrl: 'RtmpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeLevel: 'number',
      flvUrl: 'string',
      hlsUrl: 'string',
      rtmpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveResponseBodyResult extends $tea.Model {
  anchorId?: string;
  liveId?: string;
  title?: string;
  playbackUrl?: string;
  createTime?: number;
  endTime?: number;
  duration?: number;
  pushUrl?: string;
  liveUrl?: string;
  status?: string;
  introduction?: string;
  roomId?: string;
  appId?: string;
  userId?: string;
  codeLevel?: number;
  playUrlInfoList?: GetLiveResponseBodyResultPlayUrlInfoList[];
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      liveId: 'LiveId',
      title: 'Title',
      playbackUrl: 'PlaybackUrl',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      duration: 'Duration',
      pushUrl: 'PushUrl',
      liveUrl: 'LiveUrl',
      status: 'Status',
      introduction: 'Introduction',
      roomId: 'RoomId',
      appId: 'AppId',
      userId: 'UserId',
      codeLevel: 'CodeLevel',
      playUrlInfoList: 'PlayUrlInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      liveId: 'string',
      title: 'string',
      playbackUrl: 'string',
      createTime: 'number',
      endTime: 'number',
      duration: 'number',
      pushUrl: 'string',
      liveUrl: 'string',
      status: 'string',
      introduction: 'string',
      roomId: 'string',
      appId: 'string',
      userId: 'string',
      codeLevel: 'number',
      playUrlInfoList: { 'type': 'array', 'itemType': GetLiveResponseBodyResultPlayUrlInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResult extends $tea.Model {
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

export class CreateRoomResponseBodyResult extends $tea.Model {
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createLiveWithOptions(request: CreateLiveRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLiveResponse>(await this.doRPCRequest("CreateLive", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLiveResponse({}));
  }

  async createLive(request: CreateLiveRequest): Promise<CreateLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppResponse>(await this.doRPCRequest("DeleteApp", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async updateRoomWithOptions(request: UpdateRoomRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRoomResponse>(await this.doRPCRequest("UpdateRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRoomResponse({}));
  }

  async updateRoom(request: UpdateRoomRequest): Promise<UpdateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoomWithOptions(request, runtime);
  }

  async getAppTemplateWithOptions(request: GetAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetAppTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppTemplateResponse>(await this.doRPCRequest("GetAppTemplate", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppTemplateResponse({}));
  }

  async getAppTemplate(request: GetAppTemplateRequest): Promise<GetAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppTemplateWithOptions(request, runtime);
  }

  async getRoomWithOptions(request: GetRoomRequest, runtime: $Util.RuntimeOptions): Promise<GetRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRoomResponse>(await this.doRPCRequest("GetRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetRoomResponse({}));
  }

  async getRoom(request: GetRoomRequest): Promise<GetRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoomWithOptions(request, runtime);
  }

  async createAppTemplateWithOptions(tmpReq: CreateAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.componentList)) {
      request.componentListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.componentList, "ComponentList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppTemplateResponse>(await this.doRPCRequest("CreateAppTemplate", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppTemplateResponse({}));
  }

  async createAppTemplate(request: CreateAppTemplateRequest): Promise<CreateAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppTemplateWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppsResponse>(await this.doRPCRequest("ListApps", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listRoomsWithOptions(request: ListRoomsRequest, runtime: $Util.RuntimeOptions): Promise<ListRoomsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRoomsResponse>(await this.doRPCRequest("ListRooms", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListRoomsResponse({}));
  }

  async listRooms(request: ListRoomsRequest): Promise<ListRoomsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoomsWithOptions(request, runtime);
  }

  async deleteAppTemplateWithOptions(request: DeleteAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppTemplateResponse>(await this.doRPCRequest("DeleteAppTemplate", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppTemplateResponse({}));
  }

  async deleteAppTemplate(request: DeleteAppTemplateRequest): Promise<DeleteAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppTemplateWithOptions(request, runtime);
  }

  async listAppTemplatesWithOptions(request: ListAppTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppTemplatesResponse>(await this.doRPCRequest("ListAppTemplates", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppTemplatesResponse({}));
  }

  async listAppTemplates(request: ListAppTemplatesRequest): Promise<ListAppTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppTemplatesWithOptions(request, runtime);
  }

  async listComponentsWithOptions(request: ListComponentsRequest, runtime: $Util.RuntimeOptions): Promise<ListComponentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListComponentsResponse>(await this.doRPCRequest("ListComponents", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListComponentsResponse({}));
  }

  async listComponents(request: ListComponentsRequest): Promise<ListComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listComponentsWithOptions(request, runtime);
  }

  async updateLiveWithOptions(request: UpdateLiveRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveResponse>(await this.doRPCRequest("UpdateLive", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveResponse({}));
  }

  async updateLive(request: UpdateLiveRequest): Promise<UpdateLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveWithOptions(request, runtime);
  }

  async updateAppTemplateConfigWithOptions(tmpReq: UpdateAppTemplateConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppTemplateConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAppTemplateConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppTemplateConfigResponse>(await this.doRPCRequest("UpdateAppTemplateConfig", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppTemplateConfigResponse({}));
  }

  async updateAppTemplateConfig(request: UpdateAppTemplateConfigRequest): Promise<UpdateAppTemplateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppTemplateConfigWithOptions(request, runtime);
  }

  async stopLiveWithOptions(request: StopLiveRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopLiveResponse>(await this.doRPCRequest("StopLive", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new StopLiveResponse({}));
  }

  async stopLive(request: StopLiveRequest): Promise<StopLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppResponse>(await this.doRPCRequest("GetApp", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async deleteLiveWithOptions(request: DeleteLiveRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveResponse>(await this.doRPCRequest("DeleteLive", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveResponse({}));
  }

  async deleteLive(request: DeleteLiveRequest): Promise<DeleteLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveWithOptions(request, runtime);
  }

  async getLiveDomainStatusWithOptions(tmpReq: GetLiveDomainStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveDomainStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetLiveDomainStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.liveDomainList)) {
      request.liveDomainListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.liveDomainList, "LiveDomainList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLiveDomainStatusResponse>(await this.doRPCRequest("GetLiveDomainStatus", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetLiveDomainStatusResponse({}));
  }

  async getLiveDomainStatus(request: GetLiveDomainStatusRequest): Promise<GetLiveDomainStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveDomainStatusWithOptions(request, runtime);
  }

  async getAuthTokenWithOptions(request: GetAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuthTokenResponse>(await this.doRPCRequest("GetAuthToken", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuthTokenResponse({}));
  }

  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  async updateAppTemplateWithOptions(request: UpdateAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppTemplateResponse>(await this.doRPCRequest("UpdateAppTemplate", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppTemplateResponse({}));
  }

  async updateAppTemplate(request: UpdateAppTemplateRequest): Promise<UpdateAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppTemplateWithOptions(request, runtime);
  }

  async getImpProductStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetImpProductStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetImpProductStatusResponse>(await this.doRPCRequest("GetImpProductStatus", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetImpProductStatusResponse({}));
  }

  async getImpProductStatus(): Promise<GetImpProductStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImpProductStatusWithOptions(runtime);
  }

  async publishLiveWithOptions(request: PublishLiveRequest, runtime: $Util.RuntimeOptions): Promise<PublishLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishLiveResponse>(await this.doRPCRequest("PublishLive", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new PublishLiveResponse({}));
  }

  async publishLive(request: PublishLiveRequest): Promise<PublishLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishLiveWithOptions(request, runtime);
  }

  async getLiveWithOptions(request: GetLiveRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLiveResponse>(await this.doRPCRequest("GetLive", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetLiveResponse({}));
  }

  async getLive(request: GetLiveRequest): Promise<GetLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveWithOptions(request, runtime);
  }

  async deleteRoomWithOptions(request: DeleteRoomRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRoomResponse>(await this.doRPCRequest("DeleteRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRoomResponse({}));
  }

  async deleteRoom(request: DeleteRoomRequest): Promise<DeleteRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoomWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppResponse>(await this.doRPCRequest("CreateApp", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createRoomWithOptions(request: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoomResponse>(await this.doRPCRequest("CreateRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoomResponse({}));
  }

  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppResponse>(await this.doRPCRequest("UpdateApp", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

}
