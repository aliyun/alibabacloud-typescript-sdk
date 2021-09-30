// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateIceProjectRequest extends $tea.Model {
  appId?: string;
  urlRegionId?: string;
  projectTitle?: string;
  coverURL?: string;
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      urlRegionId: 'UrlRegionId',
      projectTitle: 'ProjectTitle',
      coverURL: 'CoverURL',
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      urlRegionId: 'string',
      projectTitle: 'string',
      coverURL: 'string',
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIceProjectResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateIceProjectResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateIceProjectResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIceProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIceProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIceProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMemberRequest extends $tea.Model {
  conferenceId?: string;
  toUserId?: string;
  fromUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      toUserId: 'ToUserId',
      fromUserId: 'FromUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      toUserId: 'string',
      fromUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMemberResponseBody extends $tea.Model {
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

export class RemoveMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyLinkMicUsersRequest extends $tea.Model {
  conferenceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyLinkMicUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListApplyLinkMicUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListApplyLinkMicUsersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyLinkMicUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApplyLinkMicUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApplyLinkMicUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassDetailRequest extends $tea.Model {
  appId?: string;
  classId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      classId: 'ClassId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      classId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassDetailResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetClassDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetClassDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetClassDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetClassDetailResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRoomResponseBodyResult,
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

export class GetLiveRoomUserStatisticsRequest extends $tea.Model {
  appId?: string;
  liveId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomUserStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetLiveRoomUserStatisticsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetLiveRoomUserStatisticsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomUserStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLiveRoomUserStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLiveRoomUserStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BanCommentRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  banCommentUser?: string;
  banCommentTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
      banCommentUser: 'BanCommentUser',
      banCommentTime: 'BanCommentTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
      banCommentUser: 'string',
      banCommentTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BanCommentResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BanCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BanCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BanCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsByIdRequest extends $tea.Model {
  appId?: string;
  liveIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveIdList: 'LiveIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsByIdShrinkRequest extends $tea.Model {
  appId?: string;
  liveIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveIdListShrink: 'LiveIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsByIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListLiveRoomsByIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListLiveRoomsByIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLiveRoomsByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLiveRoomsByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClassRequest extends $tea.Model {
  appId?: string;
  classId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      classId: 'ClassId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      classId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClassResponseBody extends $tea.Model {
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

export class DeleteClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberRequest extends $tea.Model {
  conferenceId?: string;
  toUserId?: string;
  fromUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      toUserId: 'ToUserId',
      fromUserId: 'FromUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      toUserId: 'string',
      fromUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberResponseBody extends $tea.Model {
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

export class AddMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddMemberResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRoomsResponseBodyResult,
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

export class UpdateClassRequest extends $tea.Model {
  appId?: string;
  classId?: string;
  title?: string;
  createUserId?: string;
  createNickname?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      classId: 'ClassId',
      title: 'Title',
      createUserId: 'CreateUserId',
      createNickname: 'CreateNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      classId: 'string',
      title: 'string',
      createUserId: 'string',
      createNickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClassResponseBody extends $tea.Model {
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

export class UpdateClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterIceOssMediaRequest extends $tea.Model {
  projectId?: string;
  appId?: string;
  playbackUrlDomain?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  urlRegionId?: string;
  mediaUrl?: string;
  fromType?: string;
  mediaTitle?: string;
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appId: 'AppId',
      playbackUrlDomain: 'PlaybackUrlDomain',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      urlRegionId: 'UrlRegionId',
      mediaUrl: 'MediaUrl',
      fromType: 'FromType',
      mediaTitle: 'MediaTitle',
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appId: 'string',
      playbackUrlDomain: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      urlRegionId: 'string',
      mediaUrl: 'string',
      fromType: 'string',
      mediaTitle: 'string',
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterIceOssMediaResponseBody extends $tea.Model {
  requestId?: string;
  result?: RegisterIceOssMediaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RegisterIceOssMediaResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterIceOssMediaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterIceOssMediaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterIceOssMediaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConferenceRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConferenceResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateConferenceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateConferenceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConferenceResponseBody,
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
  liveDomainType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveDomainList: 'LiveDomainList',
      liveDomainType: 'LiveDomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveDomainList: { 'type': 'array', 'itemType': 'string' },
      liveDomainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusShrinkRequest extends $tea.Model {
  appId?: string;
  liveDomainListShrink?: string;
  liveDomainType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveDomainListShrink: 'LiveDomainList',
      liveDomainType: 'LiveDomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveDomainListShrink: 'string',
      liveDomainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetLiveDomainStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class SendCustomMessageToAllRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToAllResponseBody extends $tea.Model {
  requestId?: string;
  result?: SendCustomMessageToAllResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: SendCustomMessageToAllResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendCustomMessageToAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendCustomMessageToAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgreeLinkMicRequest extends $tea.Model {
  conferenceId?: string;
  toUserId?: string;
  fromUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      toUserId: 'ToUserId',
      fromUserId: 'FromUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      toUserId: 'string',
      fromUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgreeLinkMicResponseBody extends $tea.Model {
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

export class AgreeLinkMicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AgreeLinkMicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AgreeLinkMicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOwnerVerifyContentRequest extends $tea.Model {
  liveDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      liveDomainName: 'LiveDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOwnerVerifyContentResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetDomainOwnerVerifyContentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDomainOwnerVerifyContentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOwnerVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDomainOwnerVerifyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDomainOwnerVerifyContentResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAuthTokenResponseBodyResult,
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
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: PublishLiveResponseBodyResult,
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

export class DeleteConferenceRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
      conferenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConferenceResponseBody extends $tea.Model {
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

export class DeleteConferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConferenceResponseBody,
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

export class VerifyDomainOwnerRequest extends $tea.Model {
  liveDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      liveDomainName: 'LiveDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDomainOwnerResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyDomainOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateLiveResponseBodyResult,
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

export class GetStandardRoomJumpUrlRequest extends $tea.Model {
  appId?: string;
  userId?: string;
  appKey?: string;
  platform?: string;
  bizType?: string;
  bizId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      userId: 'UserId',
      appKey: 'AppKey',
      platform: 'Platform',
      bizType: 'BizType',
      bizId: 'BizId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      userId: 'string',
      appKey: 'string',
      platform: 'string',
      bizType: 'string',
      bizId: 'string',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardRoomJumpUrlResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetStandardRoomJumpUrlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetStandardRoomJumpUrlResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardRoomJumpUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStandardRoomJumpUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStandardRoomJumpUrlResponseBody,
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

export class ListRoomLivesRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  status?: number;
  queryTimestamp?: number;
  size?: number;
  roomIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      status: 'Status',
      queryTimestamp: 'QueryTimestamp',
      size: 'Size',
      roomIdList: 'RoomIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      status: 'number',
      queryTimestamp: 'number',
      size: 'number',
      roomIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomLivesShrinkRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  status?: number;
  queryTimestamp?: number;
  size?: number;
  roomIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      status: 'Status',
      queryTimestamp: 'QueryTimestamp',
      size: 'Size',
      roomIdListShrink: 'RoomIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      status: 'number',
      queryTimestamp: 'number',
      size: 'number',
      roomIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomLivesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListRoomLivesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRoomLivesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomLivesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRoomLivesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRoomLivesResponseBody,
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

export class UpdateRoomShrinkRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  title?: string;
  notice?: string;
  roomOwnerId?: string;
  extensionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      title: 'Title',
      notice: 'Notice',
      roomOwnerId: 'RoomOwnerId',
      extensionShrink: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      title: 'string',
      notice: 'string',
      roomOwnerId: 'string',
      extensionShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoomResponseBody extends $tea.Model {
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
  result?: GetAppTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class SendCommentRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  senderId?: string;
  content?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      senderId: 'SenderId',
      content: 'Content',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      senderId: 'string',
      content: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommentShrinkRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  senderId?: string;
  content?: string;
  extensionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      senderId: 'SenderId',
      content: 'Content',
      extensionShrink: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      senderId: 'string',
      content: 'string',
      extensionShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommentResponseBody extends $tea.Model {
  requestId?: string;
  result?: SendCommentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: SendCommentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateRequest extends $tea.Model {
  appTemplateName?: string;
  scene?: string;
  integrationMode?: string;
  componentList?: string[];
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      scene: 'Scene',
      integrationMode: 'IntegrationMode',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateName: 'string',
      scene: 'string',
      integrationMode: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateShrinkRequest extends $tea.Model {
  appTemplateName?: string;
  scene?: string;
  integrationMode?: string;
  componentListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      scene: 'Scene',
      integrationMode: 'IntegrationMode',
      componentListShrink: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateName: 'string',
      scene: 'string',
      integrationMode: 'string',
      componentListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateAppTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class GetConferenceRequest extends $tea.Model {
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConferenceResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetConferenceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetConferenceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectLinkMicRequest extends $tea.Model {
  conferenceId?: string;
  toUserId?: string;
  fromUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      toUserId: 'ToUserId',
      fromUserId: 'FromUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      toUserId: 'string',
      fromUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectLinkMicResponseBody extends $tea.Model {
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

export class RejectLinkMicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RejectLinkMicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RejectLinkMicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClassRequest extends $tea.Model {
  appId?: string;
  title?: string;
  createUserId?: string;
  createNickname?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      title: 'Title',
      createUserId: 'CreateUserId',
      createNickname: 'CreateNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      title: 'string',
      createUserId: 'string',
      createNickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClassResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateClassResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateClassResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  integrationMode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      integrationMode: 'IntegrationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      integrationMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAppsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class CancelBanAllCommentRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBanAllCommentResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBanAllCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelBanAllCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelBanAllCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceUsersRequest extends $tea.Model {
  conferenceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListConferenceUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListConferenceUsersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConferenceUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConferenceUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBanCommentRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  banCommentUser?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
      banCommentUser: 'BanCommentUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
      banCommentUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBanCommentResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBanCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelBanCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelBanCommentResponseBody,
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
  result?: ListAppTemplatesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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
  result?: ListComponentsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class CreateLiveRoomRequest extends $tea.Model {
  appId?: string;
  title?: string;
  notice?: string;
  coverUrl?: string;
  extension?: { [key: string]: string };
  anchorId?: string;
  anchorNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      title: 'Title',
      notice: 'Notice',
      coverUrl: 'CoverUrl',
      extension: 'Extension',
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      title: 'string',
      notice: 'string',
      coverUrl: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      anchorId: 'string',
      anchorNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRoomShrinkRequest extends $tea.Model {
  appId?: string;
  title?: string;
  notice?: string;
  coverUrl?: string;
  extensionShrink?: string;
  anchorId?: string;
  anchorNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      title: 'Title',
      notice: 'Notice',
      coverUrl: 'CoverUrl',
      extensionShrink: 'Extension',
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      title: 'string',
      notice: 'string',
      coverUrl: 'string',
      extensionShrink: 'string',
      anchorId: 'string',
      anchorNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRoomResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateLiveRoomResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateLiveRoomResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLiveRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLiveRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyLinkMicRequest extends $tea.Model {
  conferenceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyLinkMicResponseBody extends $tea.Model {
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

export class ApplyLinkMicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyLinkMicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyLinkMicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelApplyLinkMicRequest extends $tea.Model {
  conferenceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelApplyLinkMicResponseBody extends $tea.Model {
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

export class CancelApplyLinkMicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelApplyLinkMicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelApplyLinkMicResponseBody,
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
  result?: GetAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class ListLiveRoomsRequest extends $tea.Model {
  appId?: string;
  status?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      status: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListLiveRoomsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListLiveRoomsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLiveRoomsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLiveRoomsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveRoomRequest extends $tea.Model {
  appId?: string;
  liveId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveRoomResponseBody extends $tea.Model {
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

export class StopLiveRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopLiveRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLiveRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomStatisticsRequest extends $tea.Model {
  appId?: string;
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetLiveRoomStatisticsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetLiveRoomStatisticsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLiveRoomStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLiveRoomStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToUsersRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  body?: string;
  receiverList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      body: 'Body',
      receiverList: 'ReceiverList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      body: 'string',
      receiverList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: SendCustomMessageToUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: SendCustomMessageToUsersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendCustomMessageToUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendCustomMessageToUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BanAllCommentRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BanAllCommentResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BanAllCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BanAllCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BanAllCommentResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetLiveResponseBodyResult,
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
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class CreateRoomShrinkRequest extends $tea.Model {
  appId?: string;
  templateId?: string;
  roomId?: string;
  title?: string;
  notice?: string;
  roomOwnerId?: string;
  extensionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateId: 'TemplateId',
      roomId: 'RoomId',
      title: 'Title',
      notice: 'Notice',
      roomOwnerId: 'RoomOwnerId',
      extensionShrink: 'Extension',
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
      extensionShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateRoomResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateRoomResponseBodyResult,
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

export class UpdateConferenceRequest extends $tea.Model {
  conferenceId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConferenceResponseBody extends $tea.Model {
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

export class UpdateConferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopClassRequest extends $tea.Model {
  appId?: string;
  classId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      classId: 'ClassId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      classId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopClassResponseBody extends $tea.Model {
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

export class StopClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomRequest extends $tea.Model {
  appId?: string;
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetLiveRoomResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetLiveRoomResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLiveRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLiveRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIceProjectResponseBodyResult extends $tea.Model {
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

export class ListApplyLinkMicUsersResponseBodyResult extends $tea.Model {
  applyLinkMicUserList?: string[];
  hasMore?: boolean;
  totalCount?: number;
  pageTotal?: number;
  static names(): { [key: string]: string } {
    return {
      applyLinkMicUserList: 'ApplyLinkMicUserList',
      hasMore: 'HasMore',
      totalCount: 'TotalCount',
      pageTotal: 'PageTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyLinkMicUserList: { 'type': 'array', 'itemType': 'string' },
      hasMore: 'boolean',
      totalCount: 'number',
      pageTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassDetailResponseBodyResult extends $tea.Model {
  classId?: string;
  title?: string;
  createUserId?: string;
  createNickname?: string;
  status?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      title: 'Title',
      createUserId: 'CreateUserId',
      createNickname: 'CreateNickname',
      status: 'Status',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      title: 'string',
      createUserId: 'string',
      createNickname: 'string',
      status: 'number',
      startTime: 'number',
      endTime: 'number',
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
  pv?: number;
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
      pv: 'Pv',
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
      pv: 'number',
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

export class GetLiveRoomUserStatisticsResponseBodyResultUserStatisticsList extends $tea.Model {
  userId?: string;
  watchLiveTime?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      watchLiveTime: 'WatchLiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      watchLiveTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomUserStatisticsResponseBodyResult extends $tea.Model {
  liveId?: string;
  totalCount?: number;
  pageTotal?: number;
  hasMore?: boolean;
  userStatisticsList?: GetLiveRoomUserStatisticsResponseBodyResultUserStatisticsList[];
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      totalCount: 'TotalCount',
      pageTotal: 'PageTotal',
      hasMore: 'HasMore',
      userStatisticsList: 'UserStatisticsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      totalCount: 'number',
      pageTotal: 'number',
      hasMore: 'boolean',
      userStatisticsList: { 'type': 'array', 'itemType': GetLiveRoomUserStatisticsResponseBodyResultUserStatisticsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsByIdResponseBodyResultLiveList extends $tea.Model {
  appId?: string;
  liveId?: string;
  status?: number;
  roomId?: string;
  chatId?: string;
  title?: string;
  notice?: string;
  coverUrl?: string;
  anchorId?: string;
  uv?: number;
  extension?: { [key: string]: string };
  anchorNick?: string;
  pv?: number;
  onlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
      status: 'Status',
      roomId: 'RoomId',
      chatId: 'ChatId',
      title: 'Title',
      notice: 'Notice',
      coverUrl: 'CoverUrl',
      anchorId: 'AnchorId',
      uv: 'Uv',
      extension: 'Extension',
      anchorNick: 'AnchorNick',
      pv: 'Pv',
      onlineCount: 'OnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
      status: 'number',
      roomId: 'string',
      chatId: 'string',
      title: 'string',
      notice: 'string',
      coverUrl: 'string',
      anchorId: 'string',
      uv: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      anchorNick: 'string',
      pv: 'number',
      onlineCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsByIdResponseBodyResult extends $tea.Model {
  liveList?: ListLiveRoomsByIdResponseBodyResultLiveList[];
  static names(): { [key: string]: string } {
    return {
      liveList: 'LiveList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveList: { 'type': 'array', 'itemType': ListLiveRoomsByIdResponseBodyResultLiveList },
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

export class RegisterIceOssMediaResponseBodyResult extends $tea.Model {
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

export class CreateConferenceResponseBodyResult extends $tea.Model {
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
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

export class SendCustomMessageToAllResponseBodyResult extends $tea.Model {
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainOwnerVerifyContentResponseBodyResult extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class GetStandardRoomJumpUrlResponseBodyResult extends $tea.Model {
  standardRoomJumpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      standardRoomJumpUrl: 'StandardRoomJumpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardRoomJumpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomLivesResponseBodyResultLiveList extends $tea.Model {
  roomId?: string;
  title?: string;
  roomOwnerId?: string;
  notice?: string;
  uv?: number;
  appId?: string;
  extension?: { [key: string]: string };
  liveId?: string;
  status?: number;
  pv?: number;
  onlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      title: 'Title',
      roomOwnerId: 'RoomOwnerId',
      notice: 'Notice',
      uv: 'Uv',
      appId: 'AppId',
      extension: 'Extension',
      liveId: 'LiveId',
      status: 'Status',
      pv: 'Pv',
      onlineCount: 'OnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      title: 'string',
      roomOwnerId: 'string',
      notice: 'string',
      uv: 'number',
      appId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      liveId: 'string',
      status: 'number',
      pv: 'number',
      onlineCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomLivesResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  liveList?: ListRoomLivesResponseBodyResultLiveList[];
  nextQueryTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      liveList: 'LiveList',
      nextQueryTimestamp: 'NextQueryTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      liveList: { 'type': 'array', 'itemType': ListRoomLivesResponseBodyResultLiveList },
      nextQueryTimestamp: 'number',
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
  scene?: string;
  integrationMode?: string;
  standardRoomInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      appTemplateCreator: 'AppTemplateCreator',
      status: 'Status',
      componentList: 'ComponentList',
      createTime: 'CreateTime',
      sdkInfo: 'SdkInfo',
      configList: 'ConfigList',
      scene: 'Scene',
      integrationMode: 'IntegrationMode',
      standardRoomInfo: 'StandardRoomInfo',
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
      scene: 'string',
      integrationMode: 'string',
      standardRoomInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommentResponseBodyResultCommentVO extends $tea.Model {
  commentId?: string;
  senderId?: string;
  senderNick?: string;
  createAt?: number;
  content?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      commentId: 'CommentId',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      createAt: 'CreateAt',
      content: 'Content',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentId: 'string',
      senderId: 'string',
      senderNick: 'string',
      createAt: 'number',
      content: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommentResponseBodyResult extends $tea.Model {
  commentVO?: SendCommentResponseBodyResultCommentVO;
  static names(): { [key: string]: string } {
    return {
      commentVO: 'CommentVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentVO: SendCommentResponseBodyResultCommentVO,
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

export class GetConferenceResponseBodyResult extends $tea.Model {
  conferenceId?: string;
  title?: string;
  status?: string;
  roomId?: string;
  userId?: string;
  appId?: string;
  createTime?: number;
  playbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      title: 'Title',
      status: 'Status',
      roomId: 'RoomId',
      userId: 'UserId',
      appId: 'AppId',
      createTime: 'CreateTime',
      playbackUrl: 'PlaybackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      title: 'string',
      status: 'string',
      roomId: 'string',
      userId: 'string',
      appId: 'string',
      createTime: 'number',
      playbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClassResponseBodyResult extends $tea.Model {
  classId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
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
  appConfigStatus?: string;
  createTime?: string;
  integrationMode?: string;
  standardRoomInfo?: string;
  componentList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      appKey: 'AppKey',
      appStatus: 'AppStatus',
      appConfigStatus: 'AppConfigStatus',
      createTime: 'CreateTime',
      integrationMode: 'IntegrationMode',
      standardRoomInfo: 'StandardRoomInfo',
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
      appConfigStatus: 'string',
      createTime: 'string',
      integrationMode: 'string',
      standardRoomInfo: 'string',
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

export class ListConferenceUsersResponseBodyResultConferenceUserList extends $tea.Model {
  userId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceUsersResponseBodyResult extends $tea.Model {
  conferenceUserList?: ListConferenceUsersResponseBodyResultConferenceUserList[];
  hasMore?: boolean;
  totalCount?: number;
  pageTotal?: number;
  static names(): { [key: string]: string } {
    return {
      conferenceUserList: 'ConferenceUserList',
      hasMore: 'HasMore',
      totalCount: 'TotalCount',
      pageTotal: 'PageTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceUserList: { 'type': 'array', 'itemType': ListConferenceUsersResponseBodyResultConferenceUserList },
      hasMore: 'boolean',
      totalCount: 'number',
      pageTotal: 'number',
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
  scene?: string;
  integrationMode?: string;
  standardRoomInfo?: string;
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
      scene: 'Scene',
      integrationMode: 'IntegrationMode',
      standardRoomInfo: 'StandardRoomInfo',
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
      scene: 'string',
      integrationMode: 'string',
      standardRoomInfo: 'string',
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

export class ListComponentsResponseBodyResultSceneListComponentCategoryList extends $tea.Model {
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

export class ListComponentsResponseBodyResultSceneListComponentCategory extends $tea.Model {
  type?: string;
  list?: ListComponentsResponseBodyResultSceneListComponentCategoryList[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      list: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultSceneListComponentCategoryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultSceneList extends $tea.Model {
  scene?: string;
  componentCategory?: ListComponentsResponseBodyResultSceneListComponentCategory[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
      componentCategory: 'ComponentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      componentCategory: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultSceneListComponentCategory },
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

export class ListComponentsResponseBodyResult extends $tea.Model {
  configGroup?: ListComponentsResponseBodyResultConfigGroup[];
  sceneList?: ListComponentsResponseBodyResultSceneList[];
  componentCategory?: ListComponentsResponseBodyResultComponentCategory[];
  static names(): { [key: string]: string } {
    return {
      configGroup: 'ConfigGroup',
      sceneList: 'SceneList',
      componentCategory: 'ComponentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configGroup: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultConfigGroup },
      sceneList: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultSceneList },
      componentCategory: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultComponentCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRoomResponseBodyResultPluginInstanceInfoList extends $tea.Model {
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

export class CreateLiveRoomResponseBodyResult extends $tea.Model {
  appId?: string;
  roomId?: string;
  liveId?: string;
  chatId?: string;
  title?: string;
  notice?: string;
  coverUrl?: string;
  anchorId?: string;
  playbackUrl?: string;
  pushUrl?: string;
  liveUrl?: string;
  pluginInstanceInfoList?: CreateLiveRoomResponseBodyResultPluginInstanceInfoList[];
  extension?: { [key: string]: string };
  anchorNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      liveId: 'LiveId',
      chatId: 'ChatId',
      title: 'Title',
      notice: 'Notice',
      coverUrl: 'CoverUrl',
      anchorId: 'AnchorId',
      playbackUrl: 'PlaybackUrl',
      pushUrl: 'PushUrl',
      liveUrl: 'LiveUrl',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      extension: 'Extension',
      anchorNick: 'AnchorNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      liveId: 'string',
      chatId: 'string',
      title: 'string',
      notice: 'string',
      coverUrl: 'string',
      anchorId: 'string',
      playbackUrl: 'string',
      pushUrl: 'string',
      liveUrl: 'string',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': CreateLiveRoomResponseBodyResultPluginInstanceInfoList },
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      anchorNick: 'string',
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
  appConfigStatus?: string;
  appKey?: string;
  createTime?: string;
  integrationMode?: string;
  standardRoomInfo?: string;
  componentList?: string[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      appStatus: 'AppStatus',
      appConfigStatus: 'AppConfigStatus',
      appKey: 'AppKey',
      createTime: 'CreateTime',
      integrationMode: 'IntegrationMode',
      standardRoomInfo: 'StandardRoomInfo',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appTemplateId: 'string',
      appTemplateName: 'string',
      appStatus: 'string',
      appConfigStatus: 'string',
      appKey: 'string',
      createTime: 'string',
      integrationMode: 'string',
      standardRoomInfo: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsResponseBodyResultLiveList extends $tea.Model {
  appId?: string;
  liveId?: string;
  status?: number;
  roomId?: string;
  chatId?: string;
  title?: string;
  notice?: string;
  coverUrl?: string;
  anchorId?: string;
  uv?: number;
  extension?: { [key: string]: string };
  anchorNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
      status: 'Status',
      roomId: 'RoomId',
      chatId: 'ChatId',
      title: 'Title',
      notice: 'Notice',
      coverUrl: 'CoverUrl',
      anchorId: 'AnchorId',
      uv: 'Uv',
      extension: 'Extension',
      anchorNick: 'AnchorNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
      status: 'number',
      roomId: 'string',
      chatId: 'string',
      title: 'string',
      notice: 'string',
      coverUrl: 'string',
      anchorId: 'string',
      uv: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      anchorNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsResponseBodyResult extends $tea.Model {
  totalCount?: number;
  pageTotal?: number;
  hasMore?: boolean;
  liveList?: ListLiveRoomsResponseBodyResultLiveList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageTotal: 'PageTotal',
      hasMore: 'HasMore',
      liveList: 'LiveList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageTotal: 'number',
      hasMore: 'boolean',
      liveList: { 'type': 'array', 'itemType': ListLiveRoomsResponseBodyResultLiveList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomStatisticsResponseBodyResult extends $tea.Model {
  liveId?: string;
  status?: number;
  uv?: number;
  pv?: number;
  messageCount?: number;
  startTime?: number;
  endTime?: number;
  watchLiveTime?: number;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      status: 'Status',
      uv: 'Uv',
      pv: 'Pv',
      messageCount: 'MessageCount',
      startTime: 'StartTime',
      endTime: 'EndTime',
      watchLiveTime: 'WatchLiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      status: 'number',
      uv: 'number',
      pv: 'number',
      messageCount: 'number',
      startTime: 'number',
      endTime: 'number',
      watchLiveTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomMessageToUsersResponseBodyResult extends $tea.Model {
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
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
  coverUrl?: string;
  userDefineField?: string;
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
      coverUrl: 'CoverUrl',
      userDefineField: 'UserDefineField',
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
      coverUrl: 'string',
      userDefineField: 'string',
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

export class GetLiveRoomResponseBodyResultPluginInstanceInfoList extends $tea.Model {
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

export class GetLiveRoomResponseBodyResult extends $tea.Model {
  appId?: string;
  liveId?: string;
  status?: number;
  roomId?: string;
  chatId?: string;
  title?: string;
  notice?: string;
  coverUrl?: string;
  anchorId?: string;
  uv?: number;
  onlineCount?: number;
  playbackUrl?: string;
  createTime?: number;
  endTime?: number;
  pushUrl?: string;
  liveUrl?: string;
  pluginInstanceInfoList?: GetLiveRoomResponseBodyResultPluginInstanceInfoList[];
  extension?: { [key: string]: string };
  pv?: number;
  anchorNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
      status: 'Status',
      roomId: 'RoomId',
      chatId: 'ChatId',
      title: 'Title',
      notice: 'Notice',
      coverUrl: 'CoverUrl',
      anchorId: 'AnchorId',
      uv: 'Uv',
      onlineCount: 'OnlineCount',
      playbackUrl: 'PlaybackUrl',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      pushUrl: 'PushUrl',
      liveUrl: 'LiveUrl',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      extension: 'Extension',
      pv: 'Pv',
      anchorNick: 'AnchorNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
      status: 'number',
      roomId: 'string',
      chatId: 'string',
      title: 'string',
      notice: 'string',
      coverUrl: 'string',
      anchorId: 'string',
      uv: 'number',
      onlineCount: 'number',
      playbackUrl: 'string',
      createTime: 'number',
      endTime: 'number',
      pushUrl: 'string',
      liveUrl: 'string',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': GetLiveRoomResponseBodyResultPluginInstanceInfoList },
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pv: 'number',
      anchorNick: 'string',
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

  async createIceProjectWithOptions(request: CreateIceProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateIceProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIceProjectResponse>(await this.doRPCRequest("CreateIceProject", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIceProjectResponse({}));
  }

  async createIceProject(request: CreateIceProjectRequest): Promise<CreateIceProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIceProjectWithOptions(request, runtime);
  }

  async removeMemberWithOptions(request: RemoveMemberRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveMemberResponse>(await this.doRPCRequest("RemoveMember", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveMemberResponse({}));
  }

  async removeMember(request: RemoveMemberRequest): Promise<RemoveMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMemberWithOptions(request, runtime);
  }

  async listApplyLinkMicUsersWithOptions(request: ListApplyLinkMicUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListApplyLinkMicUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListApplyLinkMicUsersResponse>(await this.doRPCRequest("ListApplyLinkMicUsers", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListApplyLinkMicUsersResponse({}));
  }

  async listApplyLinkMicUsers(request: ListApplyLinkMicUsersRequest): Promise<ListApplyLinkMicUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplyLinkMicUsersWithOptions(request, runtime);
  }

  async getClassDetailWithOptions(request: GetClassDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetClassDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetClassDetailResponse>(await this.doRPCRequest("GetClassDetail", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetClassDetailResponse({}));
  }

  async getClassDetail(request: GetClassDetailRequest): Promise<GetClassDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClassDetailWithOptions(request, runtime);
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

  async getLiveRoomUserStatisticsWithOptions(request: GetLiveRoomUserStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRoomUserStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLiveRoomUserStatisticsResponse>(await this.doRPCRequest("GetLiveRoomUserStatistics", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetLiveRoomUserStatisticsResponse({}));
  }

  async getLiveRoomUserStatistics(request: GetLiveRoomUserStatisticsRequest): Promise<GetLiveRoomUserStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRoomUserStatisticsWithOptions(request, runtime);
  }

  async banCommentWithOptions(request: BanCommentRequest, runtime: $Util.RuntimeOptions): Promise<BanCommentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BanCommentResponse>(await this.doRPCRequest("BanComment", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new BanCommentResponse({}));
  }

  async banComment(request: BanCommentRequest): Promise<BanCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.banCommentWithOptions(request, runtime);
  }

  async listLiveRoomsByIdWithOptions(tmpReq: ListLiveRoomsByIdRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRoomsByIdResponse> {
    Util.validateModel(tmpReq);
    let request = new ListLiveRoomsByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.liveIdList)) {
      request.liveIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.liveIdList, "LiveIdList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLiveRoomsByIdResponse>(await this.doRPCRequest("ListLiveRoomsById", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListLiveRoomsByIdResponse({}));
  }

  async listLiveRoomsById(request: ListLiveRoomsByIdRequest): Promise<ListLiveRoomsByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRoomsByIdWithOptions(request, runtime);
  }

  async deleteClassWithOptions(request: DeleteClassRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClassResponse>(await this.doRPCRequest("DeleteClass", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClassResponse({}));
  }

  async deleteClass(request: DeleteClassRequest): Promise<DeleteClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClassWithOptions(request, runtime);
  }

  async addMemberWithOptions(request: AddMemberRequest, runtime: $Util.RuntimeOptions): Promise<AddMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddMemberResponse>(await this.doRPCRequest("AddMember", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new AddMemberResponse({}));
  }

  async addMember(request: AddMemberRequest): Promise<AddMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMemberWithOptions(request, runtime);
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

  async updateClassWithOptions(request: UpdateClassRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateClassResponse>(await this.doRPCRequest("UpdateClass", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateClassResponse({}));
  }

  async updateClass(request: UpdateClassRequest): Promise<UpdateClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClassWithOptions(request, runtime);
  }

  async registerIceOssMediaWithOptions(request: RegisterIceOssMediaRequest, runtime: $Util.RuntimeOptions): Promise<RegisterIceOssMediaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterIceOssMediaResponse>(await this.doRPCRequest("RegisterIceOssMedia", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterIceOssMediaResponse({}));
  }

  async registerIceOssMedia(request: RegisterIceOssMediaRequest): Promise<RegisterIceOssMediaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerIceOssMediaWithOptions(request, runtime);
  }

  async createConferenceWithOptions(request: CreateConferenceRequest, runtime: $Util.RuntimeOptions): Promise<CreateConferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConferenceResponse>(await this.doRPCRequest("CreateConference", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConferenceResponse({}));
  }

  async createConference(request: CreateConferenceRequest): Promise<CreateConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConferenceWithOptions(request, runtime);
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

  async sendCustomMessageToAllWithOptions(request: SendCustomMessageToAllRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomMessageToAllResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendCustomMessageToAllResponse>(await this.doRPCRequest("SendCustomMessageToAll", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new SendCustomMessageToAllResponse({}));
  }

  async sendCustomMessageToAll(request: SendCustomMessageToAllRequest): Promise<SendCustomMessageToAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomMessageToAllWithOptions(request, runtime);
  }

  async agreeLinkMicWithOptions(request: AgreeLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<AgreeLinkMicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AgreeLinkMicResponse>(await this.doRPCRequest("AgreeLinkMic", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new AgreeLinkMicResponse({}));
  }

  async agreeLinkMic(request: AgreeLinkMicRequest): Promise<AgreeLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.agreeLinkMicWithOptions(request, runtime);
  }

  async getDomainOwnerVerifyContentWithOptions(request: GetDomainOwnerVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainOwnerVerifyContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDomainOwnerVerifyContentResponse>(await this.doRPCRequest("GetDomainOwnerVerifyContent", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDomainOwnerVerifyContentResponse({}));
  }

  async getDomainOwnerVerifyContent(request: GetDomainOwnerVerifyContentRequest): Promise<GetDomainOwnerVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainOwnerVerifyContentWithOptions(request, runtime);
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

  async deleteConferenceWithOptions(request: DeleteConferenceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConferenceResponse>(await this.doRPCRequest("DeleteConference", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConferenceResponse({}));
  }

  async deleteConference(request: DeleteConferenceRequest): Promise<DeleteConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConferenceWithOptions(request, runtime);
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

  async verifyDomainOwnerWithOptions(request: VerifyDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDomainOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyDomainOwnerResponse>(await this.doRPCRequest("VerifyDomainOwner", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyDomainOwnerResponse({}));
  }

  async verifyDomainOwner(request: VerifyDomainOwnerRequest): Promise<VerifyDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDomainOwnerWithOptions(request, runtime);
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

  async getStandardRoomJumpUrlWithOptions(request: GetStandardRoomJumpUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetStandardRoomJumpUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStandardRoomJumpUrlResponse>(await this.doRPCRequest("GetStandardRoomJumpUrl", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetStandardRoomJumpUrlResponse({}));
  }

  async getStandardRoomJumpUrl(request: GetStandardRoomJumpUrlRequest): Promise<GetStandardRoomJumpUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStandardRoomJumpUrlWithOptions(request, runtime);
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

  async listRoomLivesWithOptions(tmpReq: ListRoomLivesRequest, runtime: $Util.RuntimeOptions): Promise<ListRoomLivesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListRoomLivesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roomIdList)) {
      request.roomIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomIdList, "RoomIdList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRoomLivesResponse>(await this.doRPCRequest("ListRoomLives", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListRoomLivesResponse({}));
  }

  async listRoomLives(request: ListRoomLivesRequest): Promise<ListRoomLivesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoomLivesWithOptions(request, runtime);
  }

  async updateRoomWithOptions(tmpReq: UpdateRoomRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

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

  async sendCommentWithOptions(tmpReq: SendCommentRequest, runtime: $Util.RuntimeOptions): Promise<SendCommentResponse> {
    Util.validateModel(tmpReq);
    let request = new SendCommentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendCommentResponse>(await this.doRPCRequest("SendComment", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new SendCommentResponse({}));
  }

  async sendComment(request: SendCommentRequest): Promise<SendCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCommentWithOptions(request, runtime);
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

  async getConferenceWithOptions(request: GetConferenceRequest, runtime: $Util.RuntimeOptions): Promise<GetConferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConferenceResponse>(await this.doRPCRequest("GetConference", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetConferenceResponse({}));
  }

  async getConference(request: GetConferenceRequest): Promise<GetConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConferenceWithOptions(request, runtime);
  }

  async rejectLinkMicWithOptions(request: RejectLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<RejectLinkMicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RejectLinkMicResponse>(await this.doRPCRequest("RejectLinkMic", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new RejectLinkMicResponse({}));
  }

  async rejectLinkMic(request: RejectLinkMicRequest): Promise<RejectLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectLinkMicWithOptions(request, runtime);
  }

  async createClassWithOptions(request: CreateClassRequest, runtime: $Util.RuntimeOptions): Promise<CreateClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClassResponse>(await this.doRPCRequest("CreateClass", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClassResponse({}));
  }

  async createClass(request: CreateClassRequest): Promise<CreateClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClassWithOptions(request, runtime);
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

  async cancelBanAllCommentWithOptions(request: CancelBanAllCommentRequest, runtime: $Util.RuntimeOptions): Promise<CancelBanAllCommentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelBanAllCommentResponse>(await this.doRPCRequest("CancelBanAllComment", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CancelBanAllCommentResponse({}));
  }

  async cancelBanAllComment(request: CancelBanAllCommentRequest): Promise<CancelBanAllCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelBanAllCommentWithOptions(request, runtime);
  }

  async listConferenceUsersWithOptions(request: ListConferenceUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListConferenceUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConferenceUsersResponse>(await this.doRPCRequest("ListConferenceUsers", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListConferenceUsersResponse({}));
  }

  async listConferenceUsers(request: ListConferenceUsersRequest): Promise<ListConferenceUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConferenceUsersWithOptions(request, runtime);
  }

  async cancelBanCommentWithOptions(request: CancelBanCommentRequest, runtime: $Util.RuntimeOptions): Promise<CancelBanCommentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelBanCommentResponse>(await this.doRPCRequest("CancelBanComment", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CancelBanCommentResponse({}));
  }

  async cancelBanComment(request: CancelBanCommentRequest): Promise<CancelBanCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelBanCommentWithOptions(request, runtime);
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

  async createLiveRoomWithOptions(tmpReq: CreateLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateLiveRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLiveRoomResponse>(await this.doRPCRequest("CreateLiveRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLiveRoomResponse({}));
  }

  async createLiveRoom(request: CreateLiveRoomRequest): Promise<CreateLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveRoomWithOptions(request, runtime);
  }

  async applyLinkMicWithOptions(request: ApplyLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<ApplyLinkMicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyLinkMicResponse>(await this.doRPCRequest("ApplyLinkMic", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyLinkMicResponse({}));
  }

  async applyLinkMic(request: ApplyLinkMicRequest): Promise<ApplyLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyLinkMicWithOptions(request, runtime);
  }

  async cancelApplyLinkMicWithOptions(request: CancelApplyLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<CancelApplyLinkMicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelApplyLinkMicResponse>(await this.doRPCRequest("CancelApplyLinkMic", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CancelApplyLinkMicResponse({}));
  }

  async cancelApplyLinkMic(request: CancelApplyLinkMicRequest): Promise<CancelApplyLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelApplyLinkMicWithOptions(request, runtime);
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

  async listLiveRoomsWithOptions(request: ListLiveRoomsRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRoomsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLiveRoomsResponse>(await this.doRPCRequest("ListLiveRooms", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListLiveRoomsResponse({}));
  }

  async listLiveRooms(request: ListLiveRoomsRequest): Promise<ListLiveRoomsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRoomsWithOptions(request, runtime);
  }

  async stopLiveRoomWithOptions(request: StopLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopLiveRoomResponse>(await this.doRPCRequest("StopLiveRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new StopLiveRoomResponse({}));
  }

  async stopLiveRoom(request: StopLiveRoomRequest): Promise<StopLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveRoomWithOptions(request, runtime);
  }

  async getLiveRoomStatisticsWithOptions(request: GetLiveRoomStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRoomStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLiveRoomStatisticsResponse>(await this.doRPCRequest("GetLiveRoomStatistics", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetLiveRoomStatisticsResponse({}));
  }

  async getLiveRoomStatistics(request: GetLiveRoomStatisticsRequest): Promise<GetLiveRoomStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRoomStatisticsWithOptions(request, runtime);
  }

  async sendCustomMessageToUsersWithOptions(request: SendCustomMessageToUsersRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomMessageToUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendCustomMessageToUsersResponse>(await this.doRPCRequest("SendCustomMessageToUsers", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new SendCustomMessageToUsersResponse({}));
  }

  async sendCustomMessageToUsers(request: SendCustomMessageToUsersRequest): Promise<SendCustomMessageToUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomMessageToUsersWithOptions(request, runtime);
  }

  async banAllCommentWithOptions(request: BanAllCommentRequest, runtime: $Util.RuntimeOptions): Promise<BanAllCommentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BanAllCommentResponse>(await this.doRPCRequest("BanAllComment", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new BanAllCommentResponse({}));
  }

  async banAllComment(request: BanAllCommentRequest): Promise<BanAllCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.banAllCommentWithOptions(request, runtime);
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

  async createRoomWithOptions(tmpReq: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoomResponse>(await this.doRPCRequest("CreateRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoomResponse({}));
  }

  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
  }

  async updateConferenceWithOptions(request: UpdateConferenceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConferenceResponse>(await this.doRPCRequest("UpdateConference", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConferenceResponse({}));
  }

  async updateConference(request: UpdateConferenceRequest): Promise<UpdateConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConferenceWithOptions(request, runtime);
  }

  async stopClassWithOptions(request: StopClassRequest, runtime: $Util.RuntimeOptions): Promise<StopClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopClassResponse>(await this.doRPCRequest("StopClass", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new StopClassResponse({}));
  }

  async stopClass(request: StopClassRequest): Promise<StopClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopClassWithOptions(request, runtime);
  }

  async getLiveRoomWithOptions(request: GetLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLiveRoomResponse>(await this.doRPCRequest("GetLiveRoom", "2021-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetLiveRoomResponse({}));
  }

  async getLiveRoom(request: GetLiveRoomRequest): Promise<GetLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRoomWithOptions(request, runtime);
  }

}
