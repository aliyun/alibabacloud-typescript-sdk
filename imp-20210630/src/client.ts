// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddMemberRequest extends $tea.Model {
  conferenceId?: string;
  fromUserId?: string;
  toUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      fromUserId: 'FromUserId',
      toUserId: 'ToUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      fromUserId: 'string',
      toUserId: 'string',
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

export class AgreeLinkMicRequest extends $tea.Model {
  conferenceId?: string;
  fromUserId?: string;
  toUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      fromUserId: 'FromUserId',
      toUserId: 'ToUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      fromUserId: 'string',
      toUserId: 'string',
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

export class AttachStandardRoomHttpsCertificateRequest extends $tea.Model {
  appId?: string;
  certificatePrivateKey?: string;
  certificatePublicKey?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      certificatePrivateKey: 'CertificatePrivateKey',
      certificatePublicKey: 'CertificatePublicKey',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      certificatePrivateKey: 'string',
      certificatePublicKey: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachStandardRoomHttpsCertificateResponseBody extends $tea.Model {
  requestId?: string;
  result?: AttachStandardRoomHttpsCertificateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: AttachStandardRoomHttpsCertificateResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachStandardRoomHttpsCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachStandardRoomHttpsCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachStandardRoomHttpsCertificateResponseBody,
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

export class BanCommentRequest extends $tea.Model {
  appId?: string;
  banCommentTime?: number;
  banCommentUser?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      banCommentTime: 'BanCommentTime',
      banCommentUser: 'BanCommentUser',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      banCommentTime: 'number',
      banCommentUser: 'string',
      roomId: 'string',
      userId: 'string',
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

export class CancelBanCommentRequest extends $tea.Model {
  appId?: string;
  banCommentUser?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      banCommentUser: 'BanCommentUser',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      banCommentUser: 'string',
      roomId: 'string',
      userId: 'string',
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

export class CreateAppTemplateRequest extends $tea.Model {
  appTemplateName?: string;
  componentList?: string[];
  integrationMode?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      componentList: 'ComponentList',
      integrationMode: 'IntegrationMode',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateName: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
      integrationMode: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTemplateShrinkRequest extends $tea.Model {
  appTemplateName?: string;
  componentListShrink?: string;
  integrationMode?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateName: 'AppTemplateName',
      componentListShrink: 'ComponentList',
      integrationMode: 'IntegrationMode',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateName: 'string',
      componentListShrink: 'string',
      integrationMode: 'string',
      scene: 'string',
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

export class CreateClassRequest extends $tea.Model {
  appId?: string;
  createNickname?: string;
  createUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createNickname: 'CreateNickname',
      createUserId: 'CreateUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createNickname: 'string',
      createUserId: 'string',
      title: 'string',
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

export class CreateConferenceRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      title: 'string',
      userId: 'string',
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

export class CreateLiveRequest extends $tea.Model {
  anchorId?: string;
  appId?: string;
  codeLevel?: number;
  introduction?: string;
  liveId?: string;
  roomId?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      appId: 'AppId',
      codeLevel: 'CodeLevel',
      introduction: 'Introduction',
      liveId: 'LiveId',
      roomId: 'RoomId',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      appId: 'string',
      codeLevel: 'number',
      introduction: 'string',
      liveId: 'string',
      roomId: 'string',
      title: 'string',
      userId: 'string',
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

export class CreateLiveRoomRequest extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  coverUrl?: string;
  extension?: { [key: string]: string };
  notice?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      coverUrl: 'CoverUrl',
      extension: 'Extension',
      notice: 'Notice',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      coverUrl: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notice: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRoomShrinkRequest extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  coverUrl?: string;
  extensionShrink?: string;
  notice?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      coverUrl: 'CoverUrl',
      extensionShrink: 'Extension',
      notice: 'Notice',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      coverUrl: 'string',
      extensionShrink: 'string',
      notice: 'string',
      title: 'string',
      userId: 'string',
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

export class CreateRoomRequest extends $tea.Model {
  appId?: string;
  extension?: { [key: string]: string };
  notice?: string;
  roomId?: string;
  roomOwnerId?: string;
  templateId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      extension: 'Extension',
      notice: 'Notice',
      roomId: 'RoomId',
      roomOwnerId: 'RoomOwnerId',
      templateId: 'TemplateId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notice: 'string',
      roomId: 'string',
      roomOwnerId: 'string',
      templateId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomShrinkRequest extends $tea.Model {
  appId?: string;
  extensionShrink?: string;
  notice?: string;
  roomId?: string;
  roomOwnerId?: string;
  templateId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      extensionShrink: 'Extension',
      notice: 'Notice',
      roomId: 'RoomId',
      roomOwnerId: 'RoomOwnerId',
      templateId: 'TemplateId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      extensionShrink: 'string',
      notice: 'string',
      roomId: 'string',
      roomOwnerId: 'string',
      templateId: 'string',
      title: 'string',
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

export class DeleteCommentRequest extends $tea.Model {
  appId?: string;
  commentIdList?: string[];
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commentIdList: 'CommentIdList',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commentIdList: { 'type': 'array', 'itemType': 'string' },
      roomId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommentResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteCommentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteCommentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConferenceRequest extends $tea.Model {
  appId?: string;
  conferenceId?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      conferenceId: 'string',
      roomId: 'string',
      userId: 'string',
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

export class DeleteLiveRoomRequest extends $tea.Model {
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

export class DeleteLiveRoomResponseBody extends $tea.Model {
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

export class DeleteLiveRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveRoomResponseBody,
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

export class DescribeMeterImpWatchTimeRequest extends $tea.Model {
  appId?: string;
  endTime?: number;
  interval?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'number',
      interval: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpWatchTimeResponseBody extends $tea.Model {
  data?: DescribeMeterImpWatchTimeResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImpWatchTimeResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpWatchTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMeterImpWatchTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMeterImpWatchTimeResponseBody,
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

export class GetAuthTokenRequest extends $tea.Model {
  appId?: string;
  appKey?: string;
  deviceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      deviceId: 'string',
      userId: 'string',
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

export class GetClassRecordRequest extends $tea.Model {
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

export class GetClassRecordResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetClassRecordResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetClassRecordResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetClassRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetClassRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCnameDetailRequest extends $tea.Model {
  appId?: string;
  domainName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domainName: 'DomainName',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domainName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCnameDetailResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetCnameDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetCnameDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCnameDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCnameDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCnameDetailResponseBody,
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

export class GetLiveRecordRequest extends $tea.Model {
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

export class GetLiveRecordResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetLiveRecordResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetLiveRecordResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLiveRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLiveRecordResponseBody,
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

export class GetPageConfigRequest extends $tea.Model {
  cloudUid?: string;
  static names(): { [key: string]: string } {
    return {
      cloudUid: 'CloudUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetPageConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetPageConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPageConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPageConfigResponseBody,
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

export class GetStandardRoomHttpsCertificateRequest extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardRoomHttpsCertificateResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetStandardRoomHttpsCertificateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetStandardRoomHttpsCertificateResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardRoomHttpsCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStandardRoomHttpsCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStandardRoomHttpsCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardRoomJumpUrlRequest extends $tea.Model {
  appId?: string;
  appKey?: string;
  bizId?: string;
  bizType?: string;
  platform?: string;
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      bizId: 'BizId',
      bizType: 'BizType',
      platform: 'Platform',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      bizId: 'string',
      bizType: 'string',
      platform: 'string',
      userId: 'string',
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

export class GetUserInfoRequest extends $tea.Model {
  cloudUid?: string;
  static names(): { [key: string]: string } {
    return {
      cloudUid: 'CloudUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetUserInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetUserInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickRoomUserRequest extends $tea.Model {
  appId?: string;
  blockTime?: number;
  kickUser?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      blockTime: 'BlockTime',
      kickUser: 'KickUser',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      blockTime: 'number',
      kickUser: 'string',
      roomId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickRoomUserResponseBody extends $tea.Model {
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

export class KickRoomUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KickRoomUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KickRoomUserResponseBody,
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

export class ListAppsRequest extends $tea.Model {
  integrationMode?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      integrationMode: 'IntegrationMode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrationMode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
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

export class ListClassesRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListClassesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListClassesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClassesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommentsRequest extends $tea.Model {
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  roomId?: string;
  sortType?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roomId: 'RoomId',
      sortType: 'SortType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roomId: 'string',
      sortType: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommentsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListCommentsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListCommentsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCommentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCommentsResponseBody,
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

export class ListLiveRoomsRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
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

export class ListRoomLivesRequest extends $tea.Model {
  appId?: string;
  queryTimestamp?: number;
  roomId?: string;
  roomIdList?: string[];
  size?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      queryTimestamp: 'QueryTimestamp',
      roomId: 'RoomId',
      roomIdList: 'RoomIdList',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      queryTimestamp: 'number',
      roomId: 'string',
      roomIdList: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomLivesShrinkRequest extends $tea.Model {
  appId?: string;
  queryTimestamp?: number;
  roomId?: string;
  roomIdListShrink?: string;
  size?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      queryTimestamp: 'QueryTimestamp',
      roomId: 'RoomId',
      roomIdListShrink: 'RoomIdList',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      queryTimestamp: 'number',
      roomId: 'string',
      roomIdListShrink: 'string',
      size: 'number',
      status: 'number',
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

export class ListRoomUsersRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListRoomUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRoomUsersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRoomUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRoomUsersResponseBody,
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

export class PublishLiveRoomRequest extends $tea.Model {
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

export class PublishLiveRoomResponseBody extends $tea.Model {
  requestId?: string;
  result?: PublishLiveRoomResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: PublishLiveRoomResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLiveRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishLiveRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishLiveRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectLinkMicRequest extends $tea.Model {
  conferenceId?: string;
  fromUserId?: string;
  toUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      fromUserId: 'FromUserId',
      toUserId: 'ToUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      fromUserId: 'string',
      toUserId: 'string',
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

export class RemoveMemberRequest extends $tea.Model {
  conferenceId?: string;
  fromUserId?: string;
  toUserId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      fromUserId: 'FromUserId',
      toUserId: 'ToUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      fromUserId: 'string',
      toUserId: 'string',
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

export class SendCommentRequest extends $tea.Model {
  appId?: string;
  content?: string;
  extension?: { [key: string]: string };
  roomId?: string;
  senderId?: string;
  senderNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      extension: 'Extension',
      roomId: 'RoomId',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomId: 'string',
      senderId: 'string',
      senderNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommentShrinkRequest extends $tea.Model {
  appId?: string;
  content?: string;
  extensionShrink?: string;
  roomId?: string;
  senderId?: string;
  senderNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      extensionShrink: 'Extension',
      roomId: 'RoomId',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      extensionShrink: 'string',
      roomId: 'string',
      senderId: 'string',
      senderNick: 'string',
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

export class SendCustomMessageToAllRequest extends $tea.Model {
  appId?: string;
  body?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      body: 'Body',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      body: 'string',
      roomId: 'string',
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

export class SendCustomMessageToUsersRequest extends $tea.Model {
  appId?: string;
  body?: string;
  receiverList?: string[];
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      body: 'Body',
      receiverList: 'ReceiverList',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      body: 'string',
      receiverList: { 'type': 'array', 'itemType': 'string' },
      roomId: 'string',
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

export class StopLiveRequest extends $tea.Model {
  appId?: string;
  liveId?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveId: 'LiveId',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveId: 'string',
      roomId: 'string',
      userId: 'string',
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

export class UpdateAppTemplateRequest extends $tea.Model {
  appTemplateId?: string;
  appTemplateName?: string;
  componentList?: string[];
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
      appTemplateName: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateShrinkRequest extends $tea.Model {
  appTemplateId?: string;
  appTemplateName?: string;
  componentListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      componentListShrink: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
      appTemplateName: 'string',
      componentListShrink: 'string',
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
  result?: UpdateAppTemplateConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateAppTemplateConfigResponseBodyResult,
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

export class UpdateClassRequest extends $tea.Model {
  appId?: string;
  classId?: string;
  createNickname?: string;
  createUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      classId: 'ClassId',
      createNickname: 'CreateNickname',
      createUserId: 'CreateUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      classId: 'string',
      createNickname: 'string',
      createUserId: 'string',
      title: 'string',
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

export class UpdateLiveRequest extends $tea.Model {
  introduction?: string;
  liveId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      introduction: 'Introduction',
      liveId: 'LiveId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      introduction: 'string',
      liveId: 'string',
      title: 'string',
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

export class UpdateLiveRoomRequest extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  coverUrl?: string;
  extension?: { [key: string]: string };
  liveId?: string;
  notice?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      coverUrl: 'CoverUrl',
      extension: 'Extension',
      liveId: 'LiveId',
      notice: 'Notice',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      coverUrl: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      liveId: 'string',
      notice: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRoomShrinkRequest extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  coverUrl?: string;
  extensionShrink?: string;
  liveId?: string;
  notice?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      coverUrl: 'CoverUrl',
      extensionShrink: 'Extension',
      liveId: 'LiveId',
      notice: 'Notice',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      coverUrl: 'string',
      extensionShrink: 'string',
      liveId: 'string',
      notice: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRoomResponseBody extends $tea.Model {
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

export class UpdateLiveRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoomRequest extends $tea.Model {
  appId?: string;
  extension?: { [key: string]: string };
  notice?: string;
  roomId?: string;
  roomOwnerId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      extension: 'Extension',
      notice: 'Notice',
      roomId: 'RoomId',
      roomOwnerId: 'RoomOwnerId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notice: 'string',
      roomId: 'string',
      roomOwnerId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoomShrinkRequest extends $tea.Model {
  appId?: string;
  extensionShrink?: string;
  notice?: string;
  roomId?: string;
  roomOwnerId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      extensionShrink: 'Extension',
      notice: 'Notice',
      roomId: 'RoomId',
      roomOwnerId: 'RoomOwnerId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      extensionShrink: 'string',
      notice: 'string',
      roomId: 'string',
      roomOwnerId: 'string',
      title: 'string',
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

export class AttachStandardRoomHttpsCertificateResponseBodyResult extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
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

export class CreateClassResponseBodyResult extends $tea.Model {
  classId?: string;
  confId?: string;
  createNickname?: string;
  createUserId?: string;
  liveId?: string;
  roomId?: string;
  status?: number;
  title?: string;
  whiteboardId?: string;
  whiteboardRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      confId: 'ConfId',
      createNickname: 'CreateNickname',
      createUserId: 'CreateUserId',
      liveId: 'LiveId',
      roomId: 'RoomId',
      status: 'Status',
      title: 'Title',
      whiteboardId: 'WhiteboardId',
      whiteboardRecordId: 'WhiteboardRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      confId: 'string',
      createNickname: 'string',
      createUserId: 'string',
      liveId: 'string',
      roomId: 'string',
      status: 'number',
      title: 'string',
      whiteboardId: 'string',
      whiteboardRecordId: 'string',
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

export class CreateLiveRoomResponseBodyResultArtcInfo extends $tea.Model {
  artcH5Url?: string;
  artcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      artcH5Url: 'ArtcH5Url',
      artcUrl: 'ArtcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artcH5Url: 'string',
      artcUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRoomResponseBodyResultPluginInstanceInfoList extends $tea.Model {
  createTime?: number;
  extension?: { [key: string]: string };
  pluginId?: string;
  pluginType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      extension: 'Extension',
      pluginId: 'PluginId',
      pluginType: 'PluginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      pluginType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRoomResponseBodyResult extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  artcInfo?: CreateLiveRoomResponseBodyResultArtcInfo;
  chatId?: string;
  coverUrl?: string;
  extension?: { [key: string]: string };
  hlsUrl?: string;
  liveId?: string;
  liveUrl?: string;
  notice?: string;
  playbackUrl?: string;
  pluginInstanceInfoList?: CreateLiveRoomResponseBodyResultPluginInstanceInfoList[];
  pushUrl?: string;
  roomId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      artcInfo: 'ArtcInfo',
      chatId: 'ChatId',
      coverUrl: 'CoverUrl',
      extension: 'Extension',
      hlsUrl: 'HlsUrl',
      liveId: 'LiveId',
      liveUrl: 'LiveUrl',
      notice: 'Notice',
      playbackUrl: 'PlaybackUrl',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      pushUrl: 'PushUrl',
      roomId: 'RoomId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      artcInfo: CreateLiveRoomResponseBodyResultArtcInfo,
      chatId: 'string',
      coverUrl: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      hlsUrl: 'string',
      liveId: 'string',
      liveUrl: 'string',
      notice: 'string',
      playbackUrl: 'string',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': CreateLiveRoomResponseBodyResultPluginInstanceInfoList },
      pushUrl: 'string',
      roomId: 'string',
      title: 'string',
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

export class DeleteCommentResponseBodyResult extends $tea.Model {
  deleteResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpWatchTimeResponseBodyData extends $tea.Model {
  liveRtcDuration?: number;
  liveRtmpDuration?: number;
  liveRtsDuration?: number;
  time?: number;
  vodDuration?: number;
  static names(): { [key: string]: string } {
    return {
      liveRtcDuration: 'LiveRtcDuration',
      liveRtmpDuration: 'LiveRtmpDuration',
      liveRtsDuration: 'LiveRtsDuration',
      time: 'Time',
      vodDuration: 'VodDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRtcDuration: 'number',
      liveRtmpDuration: 'number',
      liveRtsDuration: 'number',
      time: 'number',
      vodDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResult extends $tea.Model {
  appConfigStatus?: string;
  appKey?: string;
  appName?: string;
  appStatus?: string;
  appTemplateId?: string;
  appTemplateName?: string;
  componentList?: string[];
  createTime?: string;
  integrationMode?: string;
  standardRoomInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appConfigStatus: 'AppConfigStatus',
      appKey: 'AppKey',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      componentList: 'ComponentList',
      createTime: 'CreateTime',
      integrationMode: 'IntegrationMode',
      standardRoomInfo: 'StandardRoomInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfigStatus: 'string',
      appKey: 'string',
      appName: 'string',
      appStatus: 'string',
      appTemplateId: 'string',
      appTemplateName: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      integrationMode: 'string',
      standardRoomInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppTemplateResponseBodyResultApps extends $tea.Model {
  appId?: string;
  appKey?: string;
  appName?: string;
  appStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      appStatus: 'AppStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appName: 'string',
      appStatus: 'string',
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
  appTemplateCreator?: string;
  appTemplateName?: string;
  apps?: GetAppTemplateResponseBodyResultApps[];
  componentList?: string[];
  configList?: GetAppTemplateResponseBodyResultConfigList[];
  createTime?: string;
  integrationMode?: string;
  scene?: string;
  sdkInfo?: string;
  standardRoomInfo?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateCreator: 'AppTemplateCreator',
      appTemplateName: 'AppTemplateName',
      apps: 'Apps',
      componentList: 'ComponentList',
      configList: 'ConfigList',
      createTime: 'CreateTime',
      integrationMode: 'IntegrationMode',
      scene: 'Scene',
      sdkInfo: 'SdkInfo',
      standardRoomInfo: 'StandardRoomInfo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateCreator: 'string',
      appTemplateName: 'string',
      apps: { 'type': 'array', 'itemType': GetAppTemplateResponseBodyResultApps },
      componentList: { 'type': 'array', 'itemType': 'string' },
      configList: { 'type': 'array', 'itemType': GetAppTemplateResponseBodyResultConfigList },
      createTime: 'string',
      integrationMode: 'string',
      scene: 'string',
      sdkInfo: 'string',
      standardRoomInfo: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBodyResult extends $tea.Model {
  accessToken?: string;
  accessTokenExpiredTime?: number;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessTokenExpiredTime: 'number',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassDetailResponseBodyResult extends $tea.Model {
  classId?: string;
  confId?: string;
  createNickname?: string;
  createUserId?: string;
  endTime?: number;
  liveId?: string;
  roomId?: string;
  startTime?: number;
  status?: number;
  title?: string;
  whiteboardId?: string;
  whiteboardRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      confId: 'ConfId',
      createNickname: 'CreateNickname',
      createUserId: 'CreateUserId',
      endTime: 'EndTime',
      liveId: 'LiveId',
      roomId: 'RoomId',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
      whiteboardId: 'WhiteboardId',
      whiteboardRecordId: 'WhiteboardRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      confId: 'string',
      createNickname: 'string',
      createUserId: 'string',
      endTime: 'number',
      liveId: 'string',
      roomId: 'string',
      startTime: 'number',
      status: 'number',
      title: 'string',
      whiteboardId: 'string',
      whiteboardRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassRecordResponseBodyResult extends $tea.Model {
  playbackUrlMap?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      playbackUrlMap: 'PlaybackUrlMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbackUrlMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCnameDetailResponseBodyResultData extends $tea.Model {
  cname?: string;
  domainName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domainName: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCnameDetailResponseBodyResult extends $tea.Model {
  data?: GetCnameDetailResponseBodyResultData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetCnameDetailResponseBodyResultData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConferenceResponseBodyResult extends $tea.Model {
  appId?: string;
  conferenceId?: string;
  createTime?: number;
  playbackUrl?: string;
  roomId?: string;
  status?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      createTime: 'CreateTime',
      playbackUrl: 'PlaybackUrl',
      roomId: 'RoomId',
      status: 'Status',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      conferenceId: 'string',
      createTime: 'number',
      playbackUrl: 'string',
      roomId: 'string',
      status: 'string',
      title: 'string',
      userId: 'string',
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

export class GetLiveResponseBodyResultArtcInfo extends $tea.Model {
  artcH5Url?: string;
  artcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      artcH5Url: 'ArtcH5Url',
      artcUrl: 'ArtcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artcH5Url: 'string',
      artcUrl: 'string',
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
  appId?: string;
  artcInfo?: GetLiveResponseBodyResultArtcInfo;
  codeLevel?: number;
  coverUrl?: string;
  createTime?: number;
  duration?: number;
  endTime?: number;
  hlsUrl?: string;
  introduction?: string;
  liveId?: string;
  liveUrl?: string;
  playUrlInfoList?: GetLiveResponseBodyResultPlayUrlInfoList[];
  playbackUrl?: string;
  pushUrl?: string;
  roomId?: string;
  status?: string;
  title?: string;
  userDefineField?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      appId: 'AppId',
      artcInfo: 'ArtcInfo',
      codeLevel: 'CodeLevel',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      duration: 'Duration',
      endTime: 'EndTime',
      hlsUrl: 'HlsUrl',
      introduction: 'Introduction',
      liveId: 'LiveId',
      liveUrl: 'LiveUrl',
      playUrlInfoList: 'PlayUrlInfoList',
      playbackUrl: 'PlaybackUrl',
      pushUrl: 'PushUrl',
      roomId: 'RoomId',
      status: 'Status',
      title: 'Title',
      userDefineField: 'UserDefineField',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      appId: 'string',
      artcInfo: GetLiveResponseBodyResultArtcInfo,
      codeLevel: 'number',
      coverUrl: 'string',
      createTime: 'number',
      duration: 'number',
      endTime: 'number',
      hlsUrl: 'string',
      introduction: 'string',
      liveId: 'string',
      liveUrl: 'string',
      playUrlInfoList: { 'type': 'array', 'itemType': GetLiveResponseBodyResultPlayUrlInfoList },
      playbackUrl: 'string',
      pushUrl: 'string',
      roomId: 'string',
      status: 'string',
      title: 'string',
      userDefineField: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveDomainStatusResponseBodyResultLiveDomainInfoList extends $tea.Model {
  cname?: string;
  domain?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
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

export class GetLiveRecordResponseBodyResult extends $tea.Model {
  playbackUrlMap?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      playbackUrlMap: 'PlaybackUrlMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbackUrlMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomResponseBodyResultArtcInfo extends $tea.Model {
  artcH5Url?: string;
  artcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      artcH5Url: 'ArtcH5Url',
      artcUrl: 'ArtcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artcH5Url: 'string',
      artcUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomResponseBodyResultPluginInstanceInfoList extends $tea.Model {
  createTime?: number;
  extension?: { [key: string]: string };
  pluginId?: string;
  pluginType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      extension: 'Extension',
      pluginId: 'PluginId',
      pluginType: 'PluginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      pluginType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomResponseBodyResult extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  artcInfo?: GetLiveRoomResponseBodyResultArtcInfo;
  chatId?: string;
  coverUrl?: string;
  createTime?: number;
  endTime?: number;
  extension?: { [key: string]: string };
  hlsUrl?: string;
  hlsUrlHttps?: string;
  liveId?: string;
  liveUrl?: string;
  liveUrlHttps?: string;
  notice?: string;
  onlineCount?: number;
  playbackUrl?: string;
  playbackUrlHttps?: string;
  pluginInstanceInfoList?: GetLiveRoomResponseBodyResultPluginInstanceInfoList[];
  pushUrl?: string;
  pv?: number;
  roomId?: string;
  rtmpUrl?: string;
  startTime?: number;
  status?: number;
  title?: string;
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      artcInfo: 'ArtcInfo',
      chatId: 'ChatId',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      extension: 'Extension',
      hlsUrl: 'HlsUrl',
      hlsUrlHttps: 'HlsUrlHttps',
      liveId: 'LiveId',
      liveUrl: 'LiveUrl',
      liveUrlHttps: 'LiveUrlHttps',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      playbackUrl: 'PlaybackUrl',
      playbackUrlHttps: 'PlaybackUrlHttps',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      pushUrl: 'PushUrl',
      pv: 'Pv',
      roomId: 'RoomId',
      rtmpUrl: 'RtmpUrl',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
      uv: 'Uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      artcInfo: GetLiveRoomResponseBodyResultArtcInfo,
      chatId: 'string',
      coverUrl: 'string',
      createTime: 'number',
      endTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      hlsUrl: 'string',
      hlsUrlHttps: 'string',
      liveId: 'string',
      liveUrl: 'string',
      liveUrlHttps: 'string',
      notice: 'string',
      onlineCount: 'number',
      playbackUrl: 'string',
      playbackUrlHttps: 'string',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': GetLiveRoomResponseBodyResultPluginInstanceInfoList },
      pushUrl: 'string',
      pv: 'number',
      roomId: 'string',
      rtmpUrl: 'string',
      startTime: 'number',
      status: 'number',
      title: 'string',
      uv: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveRoomStatisticsResponseBodyResult extends $tea.Model {
  endTime?: number;
  likeCount?: number;
  liveId?: string;
  messageCount?: number;
  onlineCount?: number;
  pv?: number;
  startTime?: number;
  status?: number;
  uv?: number;
  watchLiveTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      likeCount: 'LikeCount',
      liveId: 'LiveId',
      messageCount: 'MessageCount',
      onlineCount: 'OnlineCount',
      pv: 'Pv',
      startTime: 'StartTime',
      status: 'Status',
      uv: 'Uv',
      watchLiveTime: 'WatchLiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      likeCount: 'number',
      liveId: 'string',
      messageCount: 'number',
      onlineCount: 'number',
      pv: 'number',
      startTime: 'number',
      status: 'number',
      uv: 'number',
      watchLiveTime: 'number',
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
  hasMore?: boolean;
  liveId?: string;
  pageTotal?: number;
  totalCount?: number;
  userStatisticsList?: GetLiveRoomUserStatisticsResponseBodyResultUserStatisticsList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      liveId: 'LiveId',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
      userStatisticsList: 'UserStatisticsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      liveId: 'string',
      pageTotal: 'number',
      totalCount: 'number',
      userStatisticsList: { 'type': 'array', 'itemType': GetLiveRoomUserStatisticsResponseBodyResultUserStatisticsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageConfigResponseBodyResultAdList extends $tea.Model {
  canNotBeenBought?: boolean;
  detail?: string;
  icon?: string;
  jumpBuyLink?: string;
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canNotBeenBought: 'CanNotBeenBought',
      detail: 'Detail',
      icon: 'Icon',
      jumpBuyLink: 'JumpBuyLink',
      subTitle: 'SubTitle',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotBeenBought: 'boolean',
      detail: 'string',
      icon: 'string',
      jumpBuyLink: 'string',
      subTitle: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageConfigResponseBodyResult extends $tea.Model {
  adList?: GetPageConfigResponseBodyResultAdList[];
  static names(): { [key: string]: string } {
    return {
      adList: 'AdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adList: { 'type': 'array', 'itemType': GetPageConfigResponseBodyResultAdList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomResponseBodyResultRoomInfoPluginInstanceInfoList extends $tea.Model {
  createTime?: number;
  extension?: { [key: string]: string };
  pluginId?: string;
  pluginType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      extension: 'Extension',
      pluginId: 'PluginId',
      pluginType: 'PluginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      pluginType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoomResponseBodyResultRoomInfo extends $tea.Model {
  appId?: string;
  createTime?: number;
  extension?: { [key: string]: string };
  notice?: string;
  onlineCount?: number;
  pluginInstanceInfoList?: GetRoomResponseBodyResultRoomInfoPluginInstanceInfoList[];
  pv?: number;
  roomId?: string;
  roomOwnerId?: string;
  templateId?: string;
  title?: string;
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      extension: 'Extension',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      pv: 'Pv',
      roomId: 'RoomId',
      roomOwnerId: 'RoomOwnerId',
      templateId: 'TemplateId',
      title: 'Title',
      uv: 'Uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notice: 'string',
      onlineCount: 'number',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': GetRoomResponseBodyResultRoomInfoPluginInstanceInfoList },
      pv: 'number',
      roomId: 'string',
      roomOwnerId: 'string',
      templateId: 'string',
      title: 'string',
      uv: 'number',
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

export class GetStandardRoomHttpsCertificateResponseBodyResult extends $tea.Model {
  certificateName?: string;
  createTime?: string;
  domainName?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      certificateName: 'CertificateName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateName: 'string',
      createTime: 'string',
      domainName: 'string',
      expireTime: 'string',
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

export class GetUserInfoResponseBodyResult extends $tea.Model {
  enableCreateAppLimit?: boolean;
  hasOrderedImp?: boolean;
  isOverdue?: boolean;
  isPayByWatchTimeLengthUser?: boolean;
  maxCreateAppCount?: number;
  static names(): { [key: string]: string } {
    return {
      enableCreateAppLimit: 'EnableCreateAppLimit',
      hasOrderedImp: 'HasOrderedImp',
      isOverdue: 'IsOverdue',
      isPayByWatchTimeLengthUser: 'IsPayByWatchTimeLengthUser',
      maxCreateAppCount: 'MaxCreateAppCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCreateAppLimit: 'boolean',
      hasOrderedImp: 'boolean',
      isOverdue: 'boolean',
      isPayByWatchTimeLengthUser: 'boolean',
      maxCreateAppCount: 'number',
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
  appTemplateCreator?: string;
  appTemplateId?: string;
  appTemplateName?: string;
  componentList?: string[];
  configList?: ListAppTemplatesResponseBodyResultAppTemplateInfoListConfigList[];
  createTime?: string;
  integrationMode?: string;
  scene?: string;
  sdkInfo?: string;
  standardRoomInfo?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateCreator: 'AppTemplateCreator',
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      componentList: 'ComponentList',
      configList: 'ConfigList',
      createTime: 'CreateTime',
      integrationMode: 'IntegrationMode',
      scene: 'Scene',
      sdkInfo: 'SdkInfo',
      standardRoomInfo: 'StandardRoomInfo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateCreator: 'string',
      appTemplateId: 'string',
      appTemplateName: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
      configList: { 'type': 'array', 'itemType': ListAppTemplatesResponseBodyResultAppTemplateInfoListConfigList },
      createTime: 'string',
      integrationMode: 'string',
      scene: 'string',
      sdkInfo: 'string',
      standardRoomInfo: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBodyResult extends $tea.Model {
  appTemplateInfoList?: ListAppTemplatesResponseBodyResultAppTemplateInfoList[];
  pageTotal?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appTemplateInfoList: 'AppTemplateInfoList',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateInfoList: { 'type': 'array', 'itemType': ListAppTemplatesResponseBodyResultAppTemplateInfoList },
      pageTotal: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyLinkMicUsersResponseBodyResult extends $tea.Model {
  applyLinkMicUserList?: string[];
  hasMore?: boolean;
  pageTotal?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applyLinkMicUserList: 'ApplyLinkMicUserList',
      hasMore: 'HasMore',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyLinkMicUserList: { 'type': 'array', 'itemType': 'string' },
      hasMore: 'boolean',
      pageTotal: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResultAppInfoList extends $tea.Model {
  appConfigStatus?: string;
  appId?: string;
  appKey?: string;
  appName?: string;
  appStatus?: string;
  appTemplateId?: string;
  appTemplateName?: string;
  componentList?: string[];
  createTime?: string;
  integrationMode?: string;
  standardRoomInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appConfigStatus: 'AppConfigStatus',
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      appStatus: 'AppStatus',
      appTemplateId: 'AppTemplateId',
      appTemplateName: 'AppTemplateName',
      componentList: 'ComponentList',
      createTime: 'CreateTime',
      integrationMode: 'IntegrationMode',
      standardRoomInfo: 'StandardRoomInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfigStatus: 'string',
      appId: 'string',
      appKey: 'string',
      appName: 'string',
      appStatus: 'string',
      appTemplateId: 'string',
      appTemplateName: 'string',
      componentList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      integrationMode: 'string',
      standardRoomInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResult extends $tea.Model {
  appInfoList?: ListAppsResponseBodyResultAppInfoList[];
  pageTotal?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': ListAppsResponseBodyResultAppInfoList },
      pageTotal: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesResponseBodyResultClassList extends $tea.Model {
  classId?: string;
  confId?: string;
  createNickname?: string;
  createUserId?: string;
  endTime?: number;
  liveId?: string;
  roomId?: string;
  startTime?: number;
  status?: number;
  title?: string;
  whiteboardId?: string;
  whiteboardRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      confId: 'ConfId',
      createNickname: 'CreateNickname',
      createUserId: 'CreateUserId',
      endTime: 'EndTime',
      liveId: 'LiveId',
      roomId: 'RoomId',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
      whiteboardId: 'WhiteboardId',
      whiteboardRecordId: 'WhiteboardRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      confId: 'string',
      createNickname: 'string',
      createUserId: 'string',
      endTime: 'number',
      liveId: 'string',
      roomId: 'string',
      startTime: 'number',
      status: 'number',
      title: 'string',
      whiteboardId: 'string',
      whiteboardRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesResponseBodyResult extends $tea.Model {
  classList?: ListClassesResponseBodyResultClassList[];
  hasMore?: boolean;
  pageTotal?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      classList: 'ClassList',
      hasMore: 'HasMore',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classList: { 'type': 'array', 'itemType': ListClassesResponseBodyResultClassList },
      hasMore: 'boolean',
      pageTotal: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommentsResponseBodyResultCommentVOList extends $tea.Model {
  appId?: string;
  commentId?: string;
  content?: string;
  createAt?: number;
  extension?: { [key: string]: string };
  roomId?: string;
  senderId?: string;
  senderNick?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commentId: 'CommentId',
      content: 'Content',
      createAt: 'CreateAt',
      extension: 'Extension',
      roomId: 'RoomId',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commentId: 'string',
      content: 'string',
      createAt: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomId: 'string',
      senderId: 'string',
      senderNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommentsResponseBodyResult extends $tea.Model {
  commentVOList?: ListCommentsResponseBodyResultCommentVOList[];
  hasMore?: boolean;
  pageTotal?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commentVOList: 'CommentVOList',
      hasMore: 'HasMore',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentVOList: { 'type': 'array', 'itemType': ListCommentsResponseBodyResultCommentVOList },
      hasMore: 'boolean',
      pageTotal: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultComponentCategoryList extends $tea.Model {
  componentName?: string;
  componentType?: string;
  inUse?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      inUse: 'InUse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentType: 'string',
      inUse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultComponentCategory extends $tea.Model {
  list?: ListComponentsResponseBodyResultComponentCategoryList[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultComponentCategoryList },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultConfigGroup extends $tea.Model {
  category?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultSceneListComponentCategoryList extends $tea.Model {
  componentName?: string;
  componentType?: string;
  inUse?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      inUse: 'InUse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentType: 'string',
      inUse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultSceneListComponentCategory extends $tea.Model {
  list?: ListComponentsResponseBodyResultSceneListComponentCategoryList[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultSceneListComponentCategoryList },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResultSceneList extends $tea.Model {
  componentCategory?: ListComponentsResponseBodyResultSceneListComponentCategory[];
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      componentCategory: 'ComponentCategory',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCategory: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultSceneListComponentCategory },
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyResult extends $tea.Model {
  componentCategory?: ListComponentsResponseBodyResultComponentCategory[];
  configGroup?: ListComponentsResponseBodyResultConfigGroup[];
  sceneList?: ListComponentsResponseBodyResultSceneList[];
  static names(): { [key: string]: string } {
    return {
      componentCategory: 'ComponentCategory',
      configGroup: 'ConfigGroup',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCategory: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultComponentCategory },
      configGroup: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultConfigGroup },
      sceneList: { 'type': 'array', 'itemType': ListComponentsResponseBodyResultSceneList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceUsersResponseBodyResultConferenceUserList extends $tea.Model {
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceUsersResponseBodyResult extends $tea.Model {
  conferenceUserList?: ListConferenceUsersResponseBodyResultConferenceUserList[];
  hasMore?: boolean;
  pageTotal?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      conferenceUserList: 'ConferenceUserList',
      hasMore: 'HasMore',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceUserList: { 'type': 'array', 'itemType': ListConferenceUsersResponseBodyResultConferenceUserList },
      hasMore: 'boolean',
      pageTotal: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsResponseBodyResultLiveList extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  chatId?: string;
  coverUrl?: string;
  extension?: { [key: string]: string };
  liveId?: string;
  notice?: string;
  onlineCount?: number;
  pv?: number;
  roomId?: string;
  status?: number;
  title?: string;
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      chatId: 'ChatId',
      coverUrl: 'CoverUrl',
      extension: 'Extension',
      liveId: 'LiveId',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      pv: 'Pv',
      roomId: 'RoomId',
      status: 'Status',
      title: 'Title',
      uv: 'Uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      chatId: 'string',
      coverUrl: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      liveId: 'string',
      notice: 'string',
      onlineCount: 'number',
      pv: 'number',
      roomId: 'string',
      status: 'number',
      title: 'string',
      uv: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  liveList?: ListLiveRoomsResponseBodyResultLiveList[];
  pageTotal?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      liveList: 'LiveList',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      liveList: { 'type': 'array', 'itemType': ListLiveRoomsResponseBodyResultLiveList },
      pageTotal: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRoomsByIdResponseBodyResultLiveList extends $tea.Model {
  anchorId?: string;
  anchorNick?: string;
  appId?: string;
  chatId?: string;
  coverUrl?: string;
  extension?: { [key: string]: string };
  liveId?: string;
  notice?: string;
  onlineCount?: number;
  pv?: number;
  roomId?: string;
  status?: number;
  title?: string;
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      anchorNick: 'AnchorNick',
      appId: 'AppId',
      chatId: 'ChatId',
      coverUrl: 'CoverUrl',
      extension: 'Extension',
      liveId: 'LiveId',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      pv: 'Pv',
      roomId: 'RoomId',
      status: 'Status',
      title: 'Title',
      uv: 'Uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorNick: 'string',
      appId: 'string',
      chatId: 'string',
      coverUrl: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      liveId: 'string',
      notice: 'string',
      onlineCount: 'number',
      pv: 'number',
      roomId: 'string',
      status: 'number',
      title: 'string',
      uv: 'number',
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

export class ListRoomLivesResponseBodyResultLiveList extends $tea.Model {
  appId?: string;
  extension?: { [key: string]: string };
  liveId?: string;
  notice?: string;
  onlineCount?: number;
  pv?: number;
  roomId?: string;
  roomOwnerId?: string;
  status?: number;
  title?: string;
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      extension: 'Extension',
      liveId: 'LiveId',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      pv: 'Pv',
      roomId: 'RoomId',
      roomOwnerId: 'RoomOwnerId',
      status: 'Status',
      title: 'Title',
      uv: 'Uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      liveId: 'string',
      notice: 'string',
      onlineCount: 'number',
      pv: 'number',
      roomId: 'string',
      roomOwnerId: 'string',
      status: 'number',
      title: 'string',
      uv: 'number',
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

export class ListRoomUsersResponseBodyResultRoomUserList extends $tea.Model {
  extension?: { [key: string]: string };
  nick?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      nick: 'Nick',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nick: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomUsersResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  pageTotal?: number;
  roomUserList?: ListRoomUsersResponseBodyResultRoomUserList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      pageTotal: 'PageTotal',
      roomUserList: 'RoomUserList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      pageTotal: 'number',
      roomUserList: { 'type': 'array', 'itemType': ListRoomUsersResponseBodyResultRoomUserList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponseBodyResultRoomInfoListPluginInstanceInfoList extends $tea.Model {
  createTime?: number;
  extension?: { [key: string]: string };
  pluginId?: string;
  pluginType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      extension: 'Extension',
      pluginId: 'PluginId',
      pluginType: 'PluginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      pluginType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponseBodyResultRoomInfoList extends $tea.Model {
  appId?: string;
  createTime?: string;
  extension?: { [key: string]: string };
  notice?: string;
  onlineCount?: number;
  pluginInstanceInfoList?: ListRoomsResponseBodyResultRoomInfoListPluginInstanceInfoList[];
  roomId?: string;
  roomOwnerId?: string;
  templateId?: string;
  title?: string;
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      extension: 'Extension',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      pluginInstanceInfoList: 'PluginInstanceInfoList',
      roomId: 'RoomId',
      roomOwnerId: 'RoomOwnerId',
      templateId: 'TemplateId',
      title: 'Title',
      uv: 'Uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notice: 'string',
      onlineCount: 'number',
      pluginInstanceInfoList: { 'type': 'array', 'itemType': ListRoomsResponseBodyResultRoomInfoListPluginInstanceInfoList },
      roomId: 'string',
      roomOwnerId: 'string',
      templateId: 'string',
      title: 'string',
      uv: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoomsResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  pageTotal?: number;
  roomInfoList?: ListRoomsResponseBodyResultRoomInfoList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      pageTotal: 'PageTotal',
      roomInfoList: 'RoomInfoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      pageTotal: 'number',
      roomInfoList: { 'type': 'array', 'itemType': ListRoomsResponseBodyResultRoomInfoList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLiveResponseBodyResult extends $tea.Model {
  anchorId?: string;
  liveId?: string;
  liveUrl?: string;
  pushUrl?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      liveId: 'LiveId',
      liveUrl: 'LiveUrl',
      pushUrl: 'PushUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      liveId: 'string',
      liveUrl: 'string',
      pushUrl: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLiveRoomResponseBodyResult extends $tea.Model {
  liveId?: string;
  liveUrl?: string;
  pushUrl?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      liveUrl: 'LiveUrl',
      pushUrl: 'PushUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      liveUrl: 'string',
      pushUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommentResponseBodyResultCommentVO extends $tea.Model {
  commentId?: string;
  content?: string;
  createAt?: number;
  extension?: { [key: string]: string };
  senderId?: string;
  senderNick?: string;
  static names(): { [key: string]: string } {
    return {
      commentId: 'CommentId',
      content: 'Content',
      createAt: 'CreateAt',
      extension: 'Extension',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentId: 'string',
      content: 'string',
      createAt: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      senderId: 'string',
      senderNick: 'string',
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

export class UpdateAppTemplateConfigResponseBodyResultConfigLogs extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppTemplateConfigResponseBodyResult extends $tea.Model {
  configLogs?: UpdateAppTemplateConfigResponseBodyResultConfigLogs[];
  static names(): { [key: string]: string } {
    return {
      configLogs: 'ConfigLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configLogs: { 'type': 'array', 'itemType': UpdateAppTemplateConfigResponseBodyResultConfigLogs },
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

  async addMemberWithOptions(request: AddMemberRequest, runtime: $Util.RuntimeOptions): Promise<AddMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.fromUserId)) {
      body["FromUserId"] = request.fromUserId;
    }

    if (!Util.isUnset(request.toUserId)) {
      body["ToUserId"] = request.toUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddMember",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMemberResponse>(await this.callApi(params, req, runtime), new AddMemberResponse({}));
  }

  async addMember(request: AddMemberRequest): Promise<AddMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMemberWithOptions(request, runtime);
  }

  async agreeLinkMicWithOptions(request: AgreeLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<AgreeLinkMicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.fromUserId)) {
      body["FromUserId"] = request.fromUserId;
    }

    if (!Util.isUnset(request.toUserId)) {
      body["ToUserId"] = request.toUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AgreeLinkMic",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AgreeLinkMicResponse>(await this.callApi(params, req, runtime), new AgreeLinkMicResponse({}));
  }

  async agreeLinkMic(request: AgreeLinkMicRequest): Promise<AgreeLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.agreeLinkMicWithOptions(request, runtime);
  }

  async applyLinkMicWithOptions(request: ApplyLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<ApplyLinkMicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyLinkMic",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyLinkMicResponse>(await this.callApi(params, req, runtime), new ApplyLinkMicResponse({}));
  }

  async applyLinkMic(request: ApplyLinkMicRequest): Promise<ApplyLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyLinkMicWithOptions(request, runtime);
  }

  async attachStandardRoomHttpsCertificateWithOptions(request: AttachStandardRoomHttpsCertificateRequest, runtime: $Util.RuntimeOptions): Promise<AttachStandardRoomHttpsCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.certificatePrivateKey)) {
      body["CertificatePrivateKey"] = request.certificatePrivateKey;
    }

    if (!Util.isUnset(request.certificatePublicKey)) {
      body["CertificatePublicKey"] = request.certificatePublicKey;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachStandardRoomHttpsCertificate",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachStandardRoomHttpsCertificateResponse>(await this.callApi(params, req, runtime), new AttachStandardRoomHttpsCertificateResponse({}));
  }

  async attachStandardRoomHttpsCertificate(request: AttachStandardRoomHttpsCertificateRequest): Promise<AttachStandardRoomHttpsCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachStandardRoomHttpsCertificateWithOptions(request, runtime);
  }

  async banAllCommentWithOptions(request: BanAllCommentRequest, runtime: $Util.RuntimeOptions): Promise<BanAllCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BanAllComment",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BanAllCommentResponse>(await this.callApi(params, req, runtime), new BanAllCommentResponse({}));
  }

  async banAllComment(request: BanAllCommentRequest): Promise<BanAllCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.banAllCommentWithOptions(request, runtime);
  }

  async banCommentWithOptions(request: BanCommentRequest, runtime: $Util.RuntimeOptions): Promise<BanCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.banCommentTime)) {
      body["BanCommentTime"] = request.banCommentTime;
    }

    if (!Util.isUnset(request.banCommentUser)) {
      body["BanCommentUser"] = request.banCommentUser;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BanComment",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BanCommentResponse>(await this.callApi(params, req, runtime), new BanCommentResponse({}));
  }

  async banComment(request: BanCommentRequest): Promise<BanCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.banCommentWithOptions(request, runtime);
  }

  async cancelApplyLinkMicWithOptions(request: CancelApplyLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<CancelApplyLinkMicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelApplyLinkMic",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelApplyLinkMicResponse>(await this.callApi(params, req, runtime), new CancelApplyLinkMicResponse({}));
  }

  async cancelApplyLinkMic(request: CancelApplyLinkMicRequest): Promise<CancelApplyLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelApplyLinkMicWithOptions(request, runtime);
  }

  async cancelBanAllCommentWithOptions(request: CancelBanAllCommentRequest, runtime: $Util.RuntimeOptions): Promise<CancelBanAllCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelBanAllComment",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelBanAllCommentResponse>(await this.callApi(params, req, runtime), new CancelBanAllCommentResponse({}));
  }

  async cancelBanAllComment(request: CancelBanAllCommentRequest): Promise<CancelBanAllCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelBanAllCommentWithOptions(request, runtime);
  }

  async cancelBanCommentWithOptions(request: CancelBanCommentRequest, runtime: $Util.RuntimeOptions): Promise<CancelBanCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.banCommentUser)) {
      body["BanCommentUser"] = request.banCommentUser;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelBanComment",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelBanCommentResponse>(await this.callApi(params, req, runtime), new CancelBanCommentResponse({}));
  }

  async cancelBanComment(request: CancelBanCommentRequest): Promise<CancelBanCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelBanCommentWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appTemplateId)) {
      body["AppTemplateId"] = request.appTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createAppTemplateWithOptions(tmpReq: CreateAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.componentList)) {
      request.componentListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.componentList, "ComponentList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appTemplateName)) {
      body["AppTemplateName"] = request.appTemplateName;
    }

    if (!Util.isUnset(request.componentListShrink)) {
      body["ComponentList"] = request.componentListShrink;
    }

    if (!Util.isUnset(request.integrationMode)) {
      body["IntegrationMode"] = request.integrationMode;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppTemplate",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppTemplateResponse>(await this.callApi(params, req, runtime), new CreateAppTemplateResponse({}));
  }

  async createAppTemplate(request: CreateAppTemplateRequest): Promise<CreateAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppTemplateWithOptions(request, runtime);
  }

  async createClassWithOptions(request: CreateClassRequest, runtime: $Util.RuntimeOptions): Promise<CreateClassResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.createNickname)) {
      body["CreateNickname"] = request.createNickname;
    }

    if (!Util.isUnset(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateClass",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClassResponse>(await this.callApi(params, req, runtime), new CreateClassResponse({}));
  }

  async createClass(request: CreateClassRequest): Promise<CreateClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClassWithOptions(request, runtime);
  }

  async createConferenceWithOptions(request: CreateConferenceRequest, runtime: $Util.RuntimeOptions): Promise<CreateConferenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConference",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConferenceResponse>(await this.callApi(params, req, runtime), new CreateConferenceResponse({}));
  }

  async createConference(request: CreateConferenceRequest): Promise<CreateConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConferenceWithOptions(request, runtime);
  }

  async createLiveWithOptions(request: CreateLiveRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.anchorId)) {
      body["AnchorId"] = request.anchorId;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.codeLevel)) {
      body["CodeLevel"] = request.codeLevel;
    }

    if (!Util.isUnset(request.introduction)) {
      body["Introduction"] = request.introduction;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLive",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLiveResponse>(await this.callApi(params, req, runtime), new CreateLiveResponse({}));
  }

  async createLive(request: CreateLiveRequest): Promise<CreateLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveWithOptions(request, runtime);
  }

  async createLiveRoomWithOptions(tmpReq: CreateLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateLiveRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.anchorId)) {
      body["AnchorId"] = request.anchorId;
    }

    if (!Util.isUnset(request.anchorNick)) {
      body["AnchorNick"] = request.anchorNick;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.coverUrl)) {
      body["CoverUrl"] = request.coverUrl;
    }

    if (!Util.isUnset(request.extensionShrink)) {
      body["Extension"] = request.extensionShrink;
    }

    if (!Util.isUnset(request.notice)) {
      body["Notice"] = request.notice;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLiveRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLiveRoomResponse>(await this.callApi(params, req, runtime), new CreateLiveRoomResponse({}));
  }

  async createLiveRoom(request: CreateLiveRoomRequest): Promise<CreateLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveRoomWithOptions(request, runtime);
  }

  async createRoomWithOptions(tmpReq: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.extensionShrink)) {
      body["Extension"] = request.extensionShrink;
    }

    if (!Util.isUnset(request.notice)) {
      body["Notice"] = request.notice;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.roomOwnerId)) {
      body["RoomOwnerId"] = request.roomOwnerId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRoomResponse>(await this.callApi(params, req, runtime), new CreateRoomResponse({}));
  }

  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteAppTemplateWithOptions(request: DeleteAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appTemplateId)) {
      body["AppTemplateId"] = request.appTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppTemplate",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppTemplateResponse>(await this.callApi(params, req, runtime), new DeleteAppTemplateResponse({}));
  }

  async deleteAppTemplate(request: DeleteAppTemplateRequest): Promise<DeleteAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppTemplateWithOptions(request, runtime);
  }

  async deleteClassWithOptions(request: DeleteClassRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClassResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClass",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClassResponse>(await this.callApi(params, req, runtime), new DeleteClassResponse({}));
  }

  async deleteClass(request: DeleteClassRequest): Promise<DeleteClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClassWithOptions(request, runtime);
  }

  async deleteCommentWithOptions(request: DeleteCommentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commentIdList)) {
      bodyFlat["CommentIdList"] = request.commentIdList;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteComment",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCommentResponse>(await this.callApi(params, req, runtime), new DeleteCommentResponse({}));
  }

  async deleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCommentWithOptions(request, runtime);
  }

  async deleteConferenceWithOptions(request: DeleteConferenceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConferenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConference",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConferenceResponse>(await this.callApi(params, req, runtime), new DeleteConferenceResponse({}));
  }

  async deleteConference(request: DeleteConferenceRequest): Promise<DeleteConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConferenceWithOptions(request, runtime);
  }

  async deleteLiveWithOptions(request: DeleteLiveRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLive",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveResponse>(await this.callApi(params, req, runtime), new DeleteLiveResponse({}));
  }

  async deleteLive(request: DeleteLiveRequest): Promise<DeleteLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveWithOptions(request, runtime);
  }

  async deleteLiveRoomWithOptions(request: DeleteLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveRoomResponse>(await this.callApi(params, req, runtime), new DeleteLiveRoomResponse({}));
  }

  async deleteLiveRoom(request: DeleteLiveRoomRequest): Promise<DeleteLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRoomWithOptions(request, runtime);
  }

  async deleteRoomWithOptions(request: DeleteRoomRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoomResponse>(await this.callApi(params, req, runtime), new DeleteRoomResponse({}));
  }

  async deleteRoom(request: DeleteRoomRequest): Promise<DeleteRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoomWithOptions(request, runtime);
  }

  async describeMeterImpWatchTimeWithOptions(request: DescribeMeterImpWatchTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImpWatchTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImpWatchTime",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImpWatchTimeResponse>(await this.callApi(params, req, runtime), new DescribeMeterImpWatchTimeResponse({}));
  }

  async describeMeterImpWatchTime(request: DescribeMeterImpWatchTimeRequest): Promise<DescribeMeterImpWatchTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImpWatchTimeWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async getAppTemplateWithOptions(request: GetAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetAppTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appTemplateId)) {
      body["AppTemplateId"] = request.appTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAppTemplate",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppTemplateResponse>(await this.callApi(params, req, runtime), new GetAppTemplateResponse({}));
  }

  async getAppTemplate(request: GetAppTemplateRequest): Promise<GetAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppTemplateWithOptions(request, runtime);
  }

  async getAuthTokenWithOptions(request: GetAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthToken",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthTokenResponse>(await this.callApi(params, req, runtime), new GetAuthTokenResponse({}));
  }

  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  async getClassDetailWithOptions(request: GetClassDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetClassDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetClassDetail",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClassDetailResponse>(await this.callApi(params, req, runtime), new GetClassDetailResponse({}));
  }

  async getClassDetail(request: GetClassDetailRequest): Promise<GetClassDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClassDetailWithOptions(request, runtime);
  }

  async getClassRecordWithOptions(request: GetClassRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetClassRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetClassRecord",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClassRecordResponse>(await this.callApi(params, req, runtime), new GetClassRecordResponse({}));
  }

  async getClassRecord(request: GetClassRecordRequest): Promise<GetClassRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClassRecordWithOptions(request, runtime);
  }

  async getCnameDetailWithOptions(request: GetCnameDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetCnameDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCnameDetail",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCnameDetailResponse>(await this.callApi(params, req, runtime), new GetCnameDetailResponse({}));
  }

  async getCnameDetail(request: GetCnameDetailRequest): Promise<GetCnameDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCnameDetailWithOptions(request, runtime);
  }

  async getConferenceWithOptions(request: GetConferenceRequest, runtime: $Util.RuntimeOptions): Promise<GetConferenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetConference",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConferenceResponse>(await this.callApi(params, req, runtime), new GetConferenceResponse({}));
  }

  async getConference(request: GetConferenceRequest): Promise<GetConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConferenceWithOptions(request, runtime);
  }

  async getDomainOwnerVerifyContentWithOptions(request: GetDomainOwnerVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainOwnerVerifyContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveDomainName)) {
      body["LiveDomainName"] = request.liveDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDomainOwnerVerifyContent",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDomainOwnerVerifyContentResponse>(await this.callApi(params, req, runtime), new GetDomainOwnerVerifyContentResponse({}));
  }

  async getDomainOwnerVerifyContent(request: GetDomainOwnerVerifyContentRequest): Promise<GetDomainOwnerVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainOwnerVerifyContentWithOptions(request, runtime);
  }

  async getImpProductStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetImpProductStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetImpProductStatus",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImpProductStatusResponse>(await this.callApi(params, req, runtime), new GetImpProductStatusResponse({}));
  }

  async getImpProductStatus(): Promise<GetImpProductStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImpProductStatusWithOptions(runtime);
  }

  async getLiveWithOptions(request: GetLiveRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLive",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveResponse>(await this.callApi(params, req, runtime), new GetLiveResponse({}));
  }

  async getLive(request: GetLiveRequest): Promise<GetLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveWithOptions(request, runtime);
  }

  async getLiveDomainStatusWithOptions(tmpReq: GetLiveDomainStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveDomainStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetLiveDomainStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.liveDomainList)) {
      request.liveDomainListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.liveDomainList, "LiveDomainList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveDomainListShrink)) {
      body["LiveDomainList"] = request.liveDomainListShrink;
    }

    if (!Util.isUnset(request.liveDomainType)) {
      body["LiveDomainType"] = request.liveDomainType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveDomainStatus",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveDomainStatusResponse>(await this.callApi(params, req, runtime), new GetLiveDomainStatusResponse({}));
  }

  async getLiveDomainStatus(request: GetLiveDomainStatusRequest): Promise<GetLiveDomainStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveDomainStatusWithOptions(request, runtime);
  }

  async getLiveRecordWithOptions(request: GetLiveRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveRecord",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveRecordResponse>(await this.callApi(params, req, runtime), new GetLiveRecordResponse({}));
  }

  async getLiveRecord(request: GetLiveRecordRequest): Promise<GetLiveRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRecordWithOptions(request, runtime);
  }

  async getLiveRoomWithOptions(request: GetLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveRoomResponse>(await this.callApi(params, req, runtime), new GetLiveRoomResponse({}));
  }

  async getLiveRoom(request: GetLiveRoomRequest): Promise<GetLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRoomWithOptions(request, runtime);
  }

  async getLiveRoomStatisticsWithOptions(request: GetLiveRoomStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRoomStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveRoomStatistics",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveRoomStatisticsResponse>(await this.callApi(params, req, runtime), new GetLiveRoomStatisticsResponse({}));
  }

  async getLiveRoomStatistics(request: GetLiveRoomStatisticsRequest): Promise<GetLiveRoomStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRoomStatisticsWithOptions(request, runtime);
  }

  async getLiveRoomUserStatisticsWithOptions(request: GetLiveRoomUserStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetLiveRoomUserStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLiveRoomUserStatistics",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLiveRoomUserStatisticsResponse>(await this.callApi(params, req, runtime), new GetLiveRoomUserStatisticsResponse({}));
  }

  async getLiveRoomUserStatistics(request: GetLiveRoomUserStatisticsRequest): Promise<GetLiveRoomUserStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLiveRoomUserStatisticsWithOptions(request, runtime);
  }

  async getPageConfigWithOptions(request: GetPageConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetPageConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPageConfig",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPageConfigResponse>(await this.callApi(params, req, runtime), new GetPageConfigResponse({}));
  }

  async getPageConfig(request: GetPageConfigRequest): Promise<GetPageConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPageConfigWithOptions(request, runtime);
  }

  async getRoomWithOptions(request: GetRoomRequest, runtime: $Util.RuntimeOptions): Promise<GetRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRoomResponse>(await this.callApi(params, req, runtime), new GetRoomResponse({}));
  }

  async getRoom(request: GetRoomRequest): Promise<GetRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoomWithOptions(request, runtime);
  }

  async getStandardRoomHttpsCertificateWithOptions(request: GetStandardRoomHttpsCertificateRequest, runtime: $Util.RuntimeOptions): Promise<GetStandardRoomHttpsCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certificateId)) {
      body["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStandardRoomHttpsCertificate",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStandardRoomHttpsCertificateResponse>(await this.callApi(params, req, runtime), new GetStandardRoomHttpsCertificateResponse({}));
  }

  async getStandardRoomHttpsCertificate(request: GetStandardRoomHttpsCertificateRequest): Promise<GetStandardRoomHttpsCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStandardRoomHttpsCertificateWithOptions(request, runtime);
  }

  async getStandardRoomJumpUrlWithOptions(request: GetStandardRoomJumpUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetStandardRoomJumpUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userNick)) {
      body["UserNick"] = request.userNick;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStandardRoomJumpUrl",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStandardRoomJumpUrlResponse>(await this.callApi(params, req, runtime), new GetStandardRoomJumpUrlResponse({}));
  }

  async getStandardRoomJumpUrl(request: GetStandardRoomJumpUrlRequest): Promise<GetStandardRoomJumpUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStandardRoomJumpUrlWithOptions(request, runtime);
  }

  async getUserInfoWithOptions(request: GetUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserInfo",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserInfoResponse>(await this.callApi(params, req, runtime), new GetUserInfoResponse({}));
  }

  async getUserInfo(request: GetUserInfoRequest): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserInfoWithOptions(request, runtime);
  }

  async kickRoomUserWithOptions(request: KickRoomUserRequest, runtime: $Util.RuntimeOptions): Promise<KickRoomUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.blockTime)) {
      body["BlockTime"] = request.blockTime;
    }

    if (!Util.isUnset(request.kickUser)) {
      body["KickUser"] = request.kickUser;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "KickRoomUser",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KickRoomUserResponse>(await this.callApi(params, req, runtime), new KickRoomUserResponse({}));
  }

  async kickRoomUser(request: KickRoomUserRequest): Promise<KickRoomUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.kickRoomUserWithOptions(request, runtime);
  }

  async listAppTemplatesWithOptions(request: ListAppTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppTemplatesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAppTemplates",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppTemplatesResponse>(await this.callApi(params, req, runtime), new ListAppTemplatesResponse({}));
  }

  async listAppTemplates(request: ListAppTemplatesRequest): Promise<ListAppTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppTemplatesWithOptions(request, runtime);
  }

  async listApplyLinkMicUsersWithOptions(request: ListApplyLinkMicUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListApplyLinkMicUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListApplyLinkMicUsers",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplyLinkMicUsersResponse>(await this.callApi(params, req, runtime), new ListApplyLinkMicUsersResponse({}));
  }

  async listApplyLinkMicUsers(request: ListApplyLinkMicUsersRequest): Promise<ListApplyLinkMicUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplyLinkMicUsersWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.integrationMode)) {
      body["IntegrationMode"] = request.integrationMode;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListApps",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listClassesWithOptions(request: ListClassesRequest, runtime: $Util.RuntimeOptions): Promise<ListClassesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListClasses",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClassesResponse>(await this.callApi(params, req, runtime), new ListClassesResponse({}));
  }

  async listClasses(request: ListClassesRequest): Promise<ListClassesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClassesWithOptions(request, runtime);
  }

  async listCommentsWithOptions(request: ListCommentsRequest, runtime: $Util.RuntimeOptions): Promise<ListCommentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.sortType)) {
      body["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListComments",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCommentsResponse>(await this.callApi(params, req, runtime), new ListCommentsResponse({}));
  }

  async listComments(request: ListCommentsRequest): Promise<ListCommentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommentsWithOptions(request, runtime);
  }

  async listComponentsWithOptions(request: ListComponentsRequest, runtime: $Util.RuntimeOptions): Promise<ListComponentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appTemplateId)) {
      body["AppTemplateId"] = request.appTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListComponents",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListComponentsResponse>(await this.callApi(params, req, runtime), new ListComponentsResponse({}));
  }

  async listComponents(request: ListComponentsRequest): Promise<ListComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listComponentsWithOptions(request, runtime);
  }

  async listConferenceUsersWithOptions(request: ListConferenceUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListConferenceUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListConferenceUsers",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConferenceUsersResponse>(await this.callApi(params, req, runtime), new ListConferenceUsersResponse({}));
  }

  async listConferenceUsers(request: ListConferenceUsersRequest): Promise<ListConferenceUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConferenceUsersWithOptions(request, runtime);
  }

  async listLiveRoomsWithOptions(request: ListLiveRoomsRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRoomsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveRooms",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveRoomsResponse>(await this.callApi(params, req, runtime), new ListLiveRoomsResponse({}));
  }

  async listLiveRooms(request: ListLiveRoomsRequest): Promise<ListLiveRoomsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRoomsWithOptions(request, runtime);
  }

  async listLiveRoomsByIdWithOptions(tmpReq: ListLiveRoomsByIdRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRoomsByIdResponse> {
    Util.validateModel(tmpReq);
    let request = new ListLiveRoomsByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.liveIdList)) {
      request.liveIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.liveIdList, "LiveIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveIdListShrink)) {
      body["LiveIdList"] = request.liveIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveRoomsById",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLiveRoomsByIdResponse>(await this.callApi(params, req, runtime), new ListLiveRoomsByIdResponse({}));
  }

  async listLiveRoomsById(request: ListLiveRoomsByIdRequest): Promise<ListLiveRoomsByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRoomsByIdWithOptions(request, runtime);
  }

  async listRoomLivesWithOptions(tmpReq: ListRoomLivesRequest, runtime: $Util.RuntimeOptions): Promise<ListRoomLivesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListRoomLivesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roomIdList)) {
      request.roomIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomIdList, "RoomIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.queryTimestamp)) {
      body["QueryTimestamp"] = request.queryTimestamp;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.roomIdListShrink)) {
      body["RoomIdList"] = request.roomIdListShrink;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRoomLives",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRoomLivesResponse>(await this.callApi(params, req, runtime), new ListRoomLivesResponse({}));
  }

  async listRoomLives(request: ListRoomLivesRequest): Promise<ListRoomLivesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoomLivesWithOptions(request, runtime);
  }

  async listRoomUsersWithOptions(request: ListRoomUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListRoomUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRoomUsers",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRoomUsersResponse>(await this.callApi(params, req, runtime), new ListRoomUsersResponse({}));
  }

  async listRoomUsers(request: ListRoomUsersRequest): Promise<ListRoomUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoomUsersWithOptions(request, runtime);
  }

  async listRoomsWithOptions(request: ListRoomsRequest, runtime: $Util.RuntimeOptions): Promise<ListRoomsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRooms",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRoomsResponse>(await this.callApi(params, req, runtime), new ListRoomsResponse({}));
  }

  async listRooms(request: ListRoomsRequest): Promise<ListRoomsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoomsWithOptions(request, runtime);
  }

  async publishLiveWithOptions(request: PublishLiveRequest, runtime: $Util.RuntimeOptions): Promise<PublishLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishLive",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishLiveResponse>(await this.callApi(params, req, runtime), new PublishLiveResponse({}));
  }

  async publishLive(request: PublishLiveRequest): Promise<PublishLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishLiveWithOptions(request, runtime);
  }

  async publishLiveRoomWithOptions(request: PublishLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<PublishLiveRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishLiveRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishLiveRoomResponse>(await this.callApi(params, req, runtime), new PublishLiveRoomResponse({}));
  }

  async publishLiveRoom(request: PublishLiveRoomRequest): Promise<PublishLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishLiveRoomWithOptions(request, runtime);
  }

  async rejectLinkMicWithOptions(request: RejectLinkMicRequest, runtime: $Util.RuntimeOptions): Promise<RejectLinkMicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.fromUserId)) {
      body["FromUserId"] = request.fromUserId;
    }

    if (!Util.isUnset(request.toUserId)) {
      body["ToUserId"] = request.toUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RejectLinkMic",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectLinkMicResponse>(await this.callApi(params, req, runtime), new RejectLinkMicResponse({}));
  }

  async rejectLinkMic(request: RejectLinkMicRequest): Promise<RejectLinkMicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectLinkMicWithOptions(request, runtime);
  }

  async removeMemberWithOptions(request: RemoveMemberRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.fromUserId)) {
      body["FromUserId"] = request.fromUserId;
    }

    if (!Util.isUnset(request.toUserId)) {
      body["ToUserId"] = request.toUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveMember",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveMemberResponse>(await this.callApi(params, req, runtime), new RemoveMemberResponse({}));
  }

  async removeMember(request: RemoveMemberRequest): Promise<RemoveMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMemberWithOptions(request, runtime);
  }

  async sendCommentWithOptions(tmpReq: SendCommentRequest, runtime: $Util.RuntimeOptions): Promise<SendCommentResponse> {
    Util.validateModel(tmpReq);
    let request = new SendCommentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.extensionShrink)) {
      body["Extension"] = request.extensionShrink;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.senderId)) {
      body["SenderId"] = request.senderId;
    }

    if (!Util.isUnset(request.senderNick)) {
      body["SenderNick"] = request.senderNick;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendComment",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCommentResponse>(await this.callApi(params, req, runtime), new SendCommentResponse({}));
  }

  async sendComment(request: SendCommentRequest): Promise<SendCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCommentWithOptions(request, runtime);
  }

  async sendCustomMessageToAllWithOptions(request: SendCustomMessageToAllRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomMessageToAllResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendCustomMessageToAll",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCustomMessageToAllResponse>(await this.callApi(params, req, runtime), new SendCustomMessageToAllResponse({}));
  }

  async sendCustomMessageToAll(request: SendCustomMessageToAllRequest): Promise<SendCustomMessageToAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomMessageToAllWithOptions(request, runtime);
  }

  async sendCustomMessageToUsersWithOptions(request: SendCustomMessageToUsersRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomMessageToUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.receiverList)) {
      bodyFlat["ReceiverList"] = request.receiverList;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendCustomMessageToUsers",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCustomMessageToUsersResponse>(await this.callApi(params, req, runtime), new SendCustomMessageToUsersResponse({}));
  }

  async sendCustomMessageToUsers(request: SendCustomMessageToUsersRequest): Promise<SendCustomMessageToUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomMessageToUsersWithOptions(request, runtime);
  }

  async stopClassWithOptions(request: StopClassRequest, runtime: $Util.RuntimeOptions): Promise<StopClassResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopClass",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopClassResponse>(await this.callApi(params, req, runtime), new StopClassResponse({}));
  }

  async stopClass(request: StopClassRequest): Promise<StopClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopClassWithOptions(request, runtime);
  }

  async stopLiveWithOptions(request: StopLiveRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopLive",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopLiveResponse>(await this.callApi(params, req, runtime), new StopLiveResponse({}));
  }

  async stopLive(request: StopLiveRequest): Promise<StopLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveWithOptions(request, runtime);
  }

  async stopLiveRoomWithOptions(request: StopLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveRoomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopLiveRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopLiveRoomResponse>(await this.callApi(params, req, runtime), new StopLiveRoomResponse({}));
  }

  async stopLiveRoom(request: StopLiveRoomRequest): Promise<StopLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveRoomWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appStatus)) {
      body["AppStatus"] = request.appStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  async updateAppTemplateWithOptions(tmpReq: UpdateAppTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAppTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.componentList)) {
      request.componentListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.componentList, "ComponentList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appTemplateId)) {
      body["AppTemplateId"] = request.appTemplateId;
    }

    if (!Util.isUnset(request.appTemplateName)) {
      body["AppTemplateName"] = request.appTemplateName;
    }

    if (!Util.isUnset(request.componentListShrink)) {
      body["ComponentList"] = request.componentListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppTemplate",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppTemplateResponse>(await this.callApi(params, req, runtime), new UpdateAppTemplateResponse({}));
  }

  async updateAppTemplate(request: UpdateAppTemplateRequest): Promise<UpdateAppTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppTemplateWithOptions(request, runtime);
  }

  async updateAppTemplateConfigWithOptions(tmpReq: UpdateAppTemplateConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppTemplateConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAppTemplateConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appTemplateId)) {
      body["AppTemplateId"] = request.appTemplateId;
    }

    if (!Util.isUnset(request.configListShrink)) {
      body["ConfigList"] = request.configListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppTemplateConfig",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppTemplateConfigResponse>(await this.callApi(params, req, runtime), new UpdateAppTemplateConfigResponse({}));
  }

  async updateAppTemplateConfig(request: UpdateAppTemplateConfigRequest): Promise<UpdateAppTemplateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppTemplateConfigWithOptions(request, runtime);
  }

  async updateClassWithOptions(request: UpdateClassRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClassResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!Util.isUnset(request.createNickname)) {
      body["CreateNickname"] = request.createNickname;
    }

    if (!Util.isUnset(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClass",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClassResponse>(await this.callApi(params, req, runtime), new UpdateClassResponse({}));
  }

  async updateClass(request: UpdateClassRequest): Promise<UpdateClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClassWithOptions(request, runtime);
  }

  async updateConferenceWithOptions(request: UpdateConferenceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConferenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConference",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConferenceResponse>(await this.callApi(params, req, runtime), new UpdateConferenceResponse({}));
  }

  async updateConference(request: UpdateConferenceRequest): Promise<UpdateConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConferenceWithOptions(request, runtime);
  }

  async updateLiveWithOptions(request: UpdateLiveRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.introduction)) {
      body["Introduction"] = request.introduction;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLive",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveResponse>(await this.callApi(params, req, runtime), new UpdateLiveResponse({}));
  }

  async updateLive(request: UpdateLiveRequest): Promise<UpdateLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveWithOptions(request, runtime);
  }

  async updateLiveRoomWithOptions(tmpReq: UpdateLiveRoomRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateLiveRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.anchorId)) {
      body["AnchorId"] = request.anchorId;
    }

    if (!Util.isUnset(request.anchorNick)) {
      body["AnchorNick"] = request.anchorNick;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.coverUrl)) {
      body["CoverUrl"] = request.coverUrl;
    }

    if (!Util.isUnset(request.extensionShrink)) {
      body["Extension"] = request.extensionShrink;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.notice)) {
      body["Notice"] = request.notice;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLiveRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLiveRoomResponse>(await this.callApi(params, req, runtime), new UpdateLiveRoomResponse({}));
  }

  async updateLiveRoom(request: UpdateLiveRoomRequest): Promise<UpdateLiveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveRoomWithOptions(request, runtime);
  }

  async updateRoomWithOptions(tmpReq: UpdateRoomRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.extensionShrink)) {
      body["Extension"] = request.extensionShrink;
    }

    if (!Util.isUnset(request.notice)) {
      body["Notice"] = request.notice;
    }

    if (!Util.isUnset(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.roomOwnerId)) {
      body["RoomOwnerId"] = request.roomOwnerId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRoom",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRoomResponse>(await this.callApi(params, req, runtime), new UpdateRoomResponse({}));
  }

  async updateRoom(request: UpdateRoomRequest): Promise<UpdateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoomWithOptions(request, runtime);
  }

  async verifyDomainOwnerWithOptions(request: VerifyDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDomainOwnerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveDomainName)) {
      body["LiveDomainName"] = request.liveDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyDomainOwner",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyDomainOwnerResponse>(await this.callApi(params, req, runtime), new VerifyDomainOwnerResponse({}));
  }

  async verifyDomainOwner(request: VerifyDomainOwnerRequest): Promise<VerifyDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDomainOwnerWithOptions(request, runtime);
  }

}
