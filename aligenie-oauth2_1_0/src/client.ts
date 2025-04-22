// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreatePlayingListRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UC_CLIENT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestOpenCreatePlayingListRequestContentList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  rawId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ximalayaH5
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      rawId: 'RawId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rawId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestOpenCreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentList?: CreatePlayingListRequestOpenCreatePlayingListRequestContentList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * content
   */
  contentType?: string;
  /**
   * @example
   * {}
   */
  extendInfo?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * true
   */
  needAlbumContinued?: boolean;
  /**
   * @example
   * default
   */
  playFrom?: string;
  /**
   * @example
   * Normal
   */
  playMode?: string;
  static names(): { [key: string]: string } {
    return {
      contentList: 'ContentList',
      contentType: 'ContentType',
      extendInfo: 'ExtendInfo',
      index: 'Index',
      needAlbumContinued: 'NeedAlbumContinued',
      playFrom: 'PlayFrom',
      playMode: 'PlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentList: { 'type': 'array', 'itemType': CreatePlayingListRequestOpenCreatePlayingListRequestContentList },
      contentType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      index: 'number',
      needAlbumContinued: 'boolean',
      playFrom: 'string',
      playMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListResponseBodySceneList extends $dara.Model {
  /**
   * @example
   * 840960b85c3c48e0bd7260c1718295fd
   */
  sceneId?: string;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBasicInfoResponseBodyUnionIds extends $dara.Model {
  organizationId?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationRequestTenantInfo extends $dara.Model {
  /**
   * @example
   * 12797******304102
   */
  subjectId?: string;
  static names(): { [key: string]: string } {
    return {
      subjectId: 'SubjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationRequestBodySendTarget extends $dara.Model {
  /**
   * @example
   * 2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=
   */
  targetIdentity?: string;
  /**
   * @example
   * DEVICE_OPEN_ID
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetIdentity: 'TargetIdentity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIdentity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1923792******8R7392
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * false
   */
  isDebug?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2iU81*****G9elJ
   */
  messageTemplateId?: string;
  /**
   * @example
   * 29837******2938
   */
  organizationId?: string;
  placeHolder?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  sendTarget?: PushDeviceNotificationRequestBodySendTarget;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      isDebug: 'IsDebug',
      messageTemplateId: 'MessageTemplateId',
      organizationId: 'OrganizationId',
      placeHolder: 'PlaceHolder',
      sendTarget: 'SendTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      isDebug: 'boolean',
      messageTemplateId: 'string',
      organizationId: 'string',
      placeHolder: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sendTarget: PushDeviceNotificationRequestBodySendTarget,
    };
  }

  validate() {
    if(this.placeHolder) {
      $dara.Model.validateMap(this.placeHolder);
    }
    if(this.sendTarget && typeof (this.sendTarget as any).validate === 'function') {
      (this.sendTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListResponseBodyDeviceListDeviceUnionIds extends $dara.Model {
  organizationId?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListResponseBodyDeviceList extends $dara.Model {
  /**
   * @example
   * https://XXXXXX
   */
  deviceIconUrl?: string;
  deviceName?: string;
  /**
   * @example
   * jMR2********ojVJXk=
   */
  deviceOpenId?: string;
  deviceUnionIds?: QueryDeviceListResponseBodyDeviceListDeviceUnionIds[];
  /**
   * @example
   * 1
   */
  online?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIconUrl: 'DeviceIconUrl',
      deviceName: 'DeviceName',
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIconUrl: 'string',
      deviceName: 'string',
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': QueryDeviceListResponseBodyDeviceListDeviceUnionIds },
      online: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceUnionIds)) {
      $dara.Model.validateArray(this.deviceUnionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: CreatePlayingListRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  openCreatePlayingListRequest?: CreatePlayingListRequestOpenCreatePlayingListRequest;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openCreatePlayingListRequest: 'OpenCreatePlayingListRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreatePlayingListRequestDeviceInfo,
      openCreatePlayingListRequest: CreatePlayingListRequestOpenCreatePlayingListRequest,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openCreatePlayingListRequest && typeof (this.openCreatePlayingListRequest as any).validate === 'function') {
      (this.openCreatePlayingListRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openCreatePlayingListRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openCreatePlayingListRequestShrink: 'OpenCreatePlayingListRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openCreatePlayingListRequestShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListResponseBody extends $dara.Model {
  /**
   * @example
   * 10002398812
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePlayingListResponseBody;
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
      body: CreatePlayingListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneRequest extends $dara.Model {
  /**
   * @example
   * a84a55aa410e460a9ac753570c76fecc
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneResponseBody extends $dara.Model {
  /**
   * @example
   * 191C79AD-F9F9-531E-B8C1-73DF6433B920
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteSceneResponseBody;
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
      body: ExecuteSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListResponseBody extends $dara.Model {
  /**
   * @example
   * 435CF567-58DC-5761-AFA8-650772602E2D
   */
  requestId?: string;
  sceneList?: GetSceneListResponseBodySceneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneList: { 'type': 'array', 'itemType': GetSceneListResponseBodySceneList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSceneListResponseBody;
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
      body: GetSceneListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBasicInfoResponseBody extends $dara.Model {
  /**
   * @example
   * https://xxxxxx
   */
  avatarUrl?: string;
  /**
   * @example
   * xxxxxx
   */
  nickname?: string;
  /**
   * @example
   * 3hPPBd9YuhfJQCzZ/07AAWdoO3K8zCb/KAqW96zPHXPiFkzjB/JfcWuuFHQQDaGZ4wVbNMV6wYuj075p/rhVLg==
   */
  openId?: string;
  /**
   * @example
   * 4070039E-5822-1F32-9295-1D2883E48BA5
   */
  requestId?: string;
  unionIds?: GetUserBasicInfoResponseBodyUnionIds[];
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      nickname: 'Nickname',
      openId: 'OpenId',
      requestId: 'RequestId',
      unionIds: 'UnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      nickname: 'string',
      openId: 'string',
      requestId: 'string',
      unionIds: { 'type': 'array', 'itemType': GetUserBasicInfoResponseBodyUnionIds },
    };
  }

  validate() {
    if(Array.isArray(this.unionIds)) {
      $dara.Model.validateArray(this.unionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBasicInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserBasicInfoResponseBody;
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
      body: GetUserBasicInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPhoneResponseBody extends $dara.Model {
  /**
   * @example
   * 18612345678
   */
  phone?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CEADB586-51CB-1B6B-95BD-AB85A7A08E97
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      phone: 'Phone',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phone: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPhoneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserPhoneResponseBody;
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
      body: GetUserPhoneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2RevocationEndpointHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2RevocationEndpointRequest extends $dara.Model {
  /**
   * @example
   * UJMiksSwuMJvwXrJLULMykSw6qZ6VqaxOkN4qd5cW1Q4HhsLxvUR5xVOIv1WB3br5LoP20lPa8xiYLSMbt8JqHACXdSdw7fNkhRTIHnadxWW5jfDg7BELUB0FcFfPiv0
   */
  token?: string;
  /**
   * @example
   * refresh_token
   */
  tokenTypeHint?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      tokenTypeHint: 'TokenTypeHint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      tokenTypeHint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2RevocationEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4070039E-5822-1F32-9295-1D2883E48BA5
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2RevocationEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OAuth2RevocationEndpointResponseBody;
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
      body: OAuth2RevocationEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2TokenEndpointHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2TokenEndpointRequest extends $dara.Model {
  /**
   * @example
   * rf3mi4JOU-xRIX2zEuRLHi-U9mPnvISeSphbwiBHJ5mEKZtG-xJsbBWrq8RmhQEPRYh0JOd3DaS_VZ90soD_YrsT4OBtgD06DmdIKL2_5KFfI6p_SjXX2-UMJuGfXDkB
   */
  code?: string;
  /**
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @example
   * https://xxx.xxx.com/xxx
   */
  redirectUri?: string;
  /**
   * @example
   * zsEcmaUeb8-NZW4IIUDD7qdgBNflrj6fH8BXJYbW9iXihZTgvbcr1_utC9p5HJLn_lXVwhfivBTgUQZBCGvGl5lxqaxFhmFtt-OrBduFQKL9x8p2lpEMKlxuKHZZZJ3A
   */
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      grantType: 'GrantType',
      redirectUri: 'RedirectUri',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      grantType: 'string',
      redirectUri: 'string',
      refreshToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2TokenEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * UJMiksSwuMJvwXrJLULMykSw6qZ6VqaxOkN4qd5cW1Q4HhsLxvUR5xVOIv1WB3br5LoP20lPa8xiYLSMbt8JqHACXdSdw7fNkhRTIHnadxWW5jfDg7BELUB0FcFfPiv0
   */
  accessToken?: string;
  /**
   * @example
   * 604799
   */
  expiresIn?: number;
  /**
   * @example
   * zsEcmaUeb8-NZW4IIUDD7qdgBNflrj6fH8BXJYbW9iXihZTgvbcr1_utC9p5HJLn_lXVwhfivBTgUQZBCGvGl5lxqaxFhmFtt-OrBduFQKL9x8p2lpEMKlxuKHZZZJ3A
   */
  refreshToken?: string;
  /**
   * @example
   * 4070039E-5822-1F32-9295-1D2883E48BA5
   */
  requestId?: string;
  /**
   * @example
   * aligenie:user:basic:read aligenie:iot:scene:read
   */
  scope?: string;
  /**
   * @example
   * Bearer
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      expiresIn: 'ExpiresIn',
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      scope: 'Scope',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresIn: 'number',
      refreshToken: 'string',
      requestId: 'string',
      scope: 'string',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuth2TokenEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OAuth2TokenEndpointResponseBody;
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
      body: OAuth2TokenEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationRequest extends $dara.Model {
  tenantInfo?: PushDeviceNotificationRequestTenantInfo;
  body?: PushDeviceNotificationRequestBody;
  static names(): { [key: string]: string } {
    return {
      tenantInfo: 'TenantInfo',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantInfo: PushDeviceNotificationRequestTenantInfo,
      body: PushDeviceNotificationRequestBody,
    };
  }

  validate() {
    if(this.tenantInfo && typeof (this.tenantInfo as any).validate === 'function') {
      (this.tenantInfo as any).validate();
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationShrinkRequest extends $dara.Model {
  tenantInfoShrink?: string;
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tenantInfoShrink: 'TenantInfo',
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantInfoShrink: 'string',
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationResponseBody extends $dara.Model {
  /**
   * @example
   * 908FA068-529C-0C20-8DB5-63B0EF7CFF1F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushDeviceNotificationResponseBody;
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
      body: PushDeviceNotificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListResponseBody extends $dara.Model {
  deviceList?: QueryDeviceListResponseBodyDeviceList[];
  /**
   * @example
   * 125****0946
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceList: 'DeviceList',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: { 'type': 'array', 'itemType': QueryDeviceListResponseBodyDeviceList },
      encodeKey: 'string',
      encodeType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceList)) {
      $dara.Model.validateArray(this.deviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeviceListResponseBody;
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
      body: QueryDeviceListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建播放列表
   * 
   * @param tmpReq - CreatePlayingListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlayingListResponse
   */
  async createPlayingListWithOptions(tmpReq: CreatePlayingListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePlayingListResponse> {
    tmpReq.validate();
    let request = new CreatePlayingListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.openCreatePlayingListRequest)) {
      request.openCreatePlayingListRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openCreatePlayingListRequest, "OpenCreatePlayingListRequest", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openCreatePlayingListRequestShrink)) {
      body["OpenCreatePlayingListRequest"] = request.openCreatePlayingListRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePlayingList",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/content/playing/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreatePlayingListResponse>(await this.callApi(params, req, runtime), new CreatePlayingListResponse({}));
  }

  /**
   * 创建播放列表
   * 
   * @param request - CreatePlayingListRequest
   * @returns CreatePlayingListResponse
   */
  async createPlayingList(request: CreatePlayingListRequest): Promise<CreatePlayingListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPlayingListWithOptions(request, headers, runtime);
  }

  /**
   * 执行场景
   * 
   * @param request - ExecuteSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSceneResponse
   */
  async executeSceneWithOptions(request: ExecuteSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteScene",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/iot/scene/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ExecuteSceneResponse>(await this.callApi(params, req, runtime), new ExecuteSceneResponse({}));
  }

  /**
   * 执行场景
   * 
   * @param request - ExecuteSceneRequest
   * @returns ExecuteSceneResponse
   */
  async executeScene(request: ExecuteSceneRequest): Promise<ExecuteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSceneWithOptions(request, headers, runtime);
  }

  /**
   * 获取场景列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSceneListResponse
   */
  async getSceneListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSceneListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSceneList",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/iot/scene/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetSceneListResponse>(await this.callApi(params, req, runtime), new GetSceneListResponse({}));
  }

  /**
   * 获取场景列表
   * @returns GetSceneListResponse
   */
  async getSceneList(): Promise<GetSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSceneListWithOptions(headers, runtime);
  }

  /**
   * 获取
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserBasicInfoResponse
   */
  async getUserBasicInfoWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetUserBasicInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserBasicInfo",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/users/basic`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetUserBasicInfoResponse>(await this.callApi(params, req, runtime), new GetUserBasicInfoResponse({}));
  }

  /**
   * 获取
   * @returns GetUserBasicInfoResponse
   */
  async getUserBasicInfo(): Promise<GetUserBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserBasicInfoWithOptions(headers, runtime);
  }

  /**
   * 获取天猫精灵用户绑定的手机号
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserPhoneResponse
   */
  async getUserPhoneWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetUserPhoneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserPhone",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/user/profile/phone`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetUserPhoneResponse>(await this.callApi(params, req, runtime), new GetUserPhoneResponse({}));
  }

  /**
   * 获取天猫精灵用户绑定的手机号
   * @returns GetUserPhoneResponse
   */
  async getUserPhone(): Promise<GetUserPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserPhoneWithOptions(headers, runtime);
  }

  /**
   * OAuth2令牌撤销端点
   * 
   * @param request - OAuth2RevocationEndpointRequest
   * @param headers - OAuth2RevocationEndpointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OAuth2RevocationEndpointResponse
   */
  async oAuth2RevocationEndpointWithOptions(request: OAuth2RevocationEndpointRequest, headers: OAuth2RevocationEndpointHeaders, runtime: $dara.RuntimeOptions): Promise<OAuth2RevocationEndpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    if (!$dara.isNull(request.tokenTypeHint)) {
      body["TokenTypeHint"] = request.tokenTypeHint;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OAuth2RevocationEndpoint",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<OAuth2RevocationEndpointResponse>(await this.callApi(params, req, runtime), new OAuth2RevocationEndpointResponse({}));
  }

  /**
   * OAuth2令牌撤销端点
   * 
   * @param request - OAuth2RevocationEndpointRequest
   * @returns OAuth2RevocationEndpointResponse
   */
  async oAuth2RevocationEndpoint(request: OAuth2RevocationEndpointRequest): Promise<OAuth2RevocationEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new OAuth2RevocationEndpointHeaders({ });
    return await this.oAuth2RevocationEndpointWithOptions(request, headers, runtime);
  }

  /**
   * OAuth2令牌端点
   * 
   * @param request - OAuth2TokenEndpointRequest
   * @param headers - OAuth2TokenEndpointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OAuth2TokenEndpointResponse
   */
  async oAuth2TokenEndpointWithOptions(request: OAuth2TokenEndpointRequest, headers: OAuth2TokenEndpointHeaders, runtime: $dara.RuntimeOptions): Promise<OAuth2TokenEndpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.grantType)) {
      body["GrantType"] = request.grantType;
    }

    if (!$dara.isNull(request.redirectUri)) {
      body["RedirectUri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.refreshToken)) {
      body["RefreshToken"] = request.refreshToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = String(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OAuth2TokenEndpoint",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/token`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<OAuth2TokenEndpointResponse>(await this.callApi(params, req, runtime), new OAuth2TokenEndpointResponse({}));
  }

  /**
   * OAuth2令牌端点
   * 
   * @param request - OAuth2TokenEndpointRequest
   * @returns OAuth2TokenEndpointResponse
   */
  async oAuth2TokenEndpoint(request: OAuth2TokenEndpointRequest): Promise<OAuth2TokenEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new OAuth2TokenEndpointHeaders({ });
    return await this.oAuth2TokenEndpointWithOptions(request, headers, runtime);
  }

  /**
   * 推送设备通知
   * 
   * @param tmpReq - PushDeviceNotificationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDeviceNotificationResponse
   */
  async pushDeviceNotificationWithOptions(tmpReq: PushDeviceNotificationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PushDeviceNotificationResponse> {
    tmpReq.validate();
    let request = new PushDeviceNotificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tenantInfo)) {
      request.tenantInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantInfo, "TenantInfo", "json");
    }

    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantInfoShrink)) {
      body["TenantInfo"] = request.tenantInfoShrink;
    }

    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushDeviceNotification",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/device/notification/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<PushDeviceNotificationResponse>(await this.callApi(params, req, runtime), new PushDeviceNotificationResponse({}));
  }

  /**
   * 推送设备通知
   * 
   * @param request - PushDeviceNotificationRequest
   * @returns PushDeviceNotificationResponse
   */
  async pushDeviceNotification(request: PushDeviceNotificationRequest): Promise<PushDeviceNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDeviceNotificationWithOptions(request, headers, runtime);
  }

  /**
   * 查询设备列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceListResponse
   */
  async queryDeviceListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryDeviceListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceList",
      version: "oauth2_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/oauth2/device/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<QueryDeviceListResponse>(await this.callApi(params, req, runtime), new QueryDeviceListResponse({}));
  }

  /**
   * 查询设备列表
   * @returns QueryDeviceListResponse
   */
  async queryDeviceList(): Promise<QueryDeviceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDeviceListWithOptions(headers, runtime);
  }

}
