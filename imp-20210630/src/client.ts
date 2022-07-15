// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AssetsAuditAssetResponse extends $tea.Model {
  requestId?: string;
  status?: RpcStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: RpcStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssetsCreateAssetResponse extends $tea.Model {
  asset?: CommonAsset;
  requestId?: string;
  status?: RpcStatus;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: CommonAsset,
      requestId: 'string',
      status: RpcStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssetsDeleteAssetResponse extends $tea.Model {
  asset?: CommonAsset;
  requestId?: string;
  status?: RpcStatus;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: CommonAsset,
      requestId: 'string',
      status: RpcStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssetsGetAssetResponse extends $tea.Model {
  asset?: CommonAsset;
  requestId?: string;
  status?: RpcStatus;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: CommonAsset,
      requestId: 'string',
      status: RpcStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssetsListAssetsRequest extends $tea.Model {
  appId?: string;
  fieldMask?: string;
  maxResults?: number;
  nextToken?: string;
  params?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fieldMask: 'FieldMask',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      params: 'Params',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fieldMask: 'string',
      maxResults: 'number',
      nextToken: 'string',
      params: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssetsListAssetsResponse extends $tea.Model {
  assets?: CommonAsset[];
  nextToken?: string;
  requestId?: string;
  status?: RpcStatus;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': CommonAsset },
      nextToken: 'string',
      requestId: 'string',
      status: RpcStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssetsUpdateAssetResponse extends $tea.Model {
  asset?: CommonAsset;
  requestId?: string;
  status?: RpcStatus;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: CommonAsset,
      requestId: 'string',
      status: RpcStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonAddress extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  state?: string;
  zip?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      state: 'State',
      zip: 'Zip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      state: 'string',
      zip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonAsset extends $tea.Model {
  address?: CommonAddress;
  appId?: string;
  auditStatus?: string;
  author?: string;
  createdAt?: string;
  description?: string;
  extends?: { [key: string]: any };
  id?: string;
  images?: CommonMediaResource[];
  labels?: { [key: string]: any };
  location?: TypeLatLng;
  source?: string;
  status?: string;
  synopsis?: string;
  tags?: string[];
  title?: string;
  updatedAt?: string;
  videos?: CommonMediaResource[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      appId: 'AppId',
      auditStatus: 'AuditStatus',
      author: 'Author',
      createdAt: 'CreatedAt',
      description: 'Description',
      extends: 'Extends',
      id: 'Id',
      images: 'Images',
      labels: 'Labels',
      location: 'Location',
      source: 'Source',
      status: 'Status',
      synopsis: 'Synopsis',
      tags: 'Tags',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      videos: 'Videos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: CommonAddress,
      appId: 'string',
      auditStatus: 'string',
      author: 'string',
      createdAt: 'string',
      description: 'string',
      extends: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      images: { 'type': 'array', 'itemType': CommonMediaResource },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      location: TypeLatLng,
      source: 'string',
      status: 'string',
      synopsis: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      updatedAt: 'string',
      videos: { 'type': 'array', 'itemType': CommonMediaResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonMediaResource extends $tea.Model {
  format?: string;
  id?: string;
  name?: string;
  sha1?: string;
  size?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      id: 'Id',
      name: 'Name',
      sha1: 'Sha1',
      size: 'Size',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
      name: 'string',
      sha1: 'string',
      size: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonSimpleAsset extends $tea.Model {
  address?: CommonAddress;
  appId?: string;
  auditStatus?: string;
  author?: string;
  description?: string;
  extends?: { [key: string]: any };
  id?: string;
  image?: CommonMediaResource;
  labels?: { [key: string]: any };
  location?: TypeLatLng;
  source?: string;
  status?: string;
  synopsis?: string;
  tags?: string[];
  title?: string;
  video?: CommonMediaResource;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      appId: 'AppId',
      auditStatus: 'AuditStatus',
      author: 'Author',
      description: 'Description',
      extends: 'Extends',
      id: 'Id',
      image: 'Image',
      labels: 'Labels',
      location: 'Location',
      source: 'Source',
      status: 'Status',
      synopsis: 'Synopsis',
      tags: 'Tags',
      title: 'Title',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: CommonAddress,
      appId: 'string',
      auditStatus: 'string',
      author: 'string',
      description: 'string',
      extends: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      image: CommonMediaResource,
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      location: TypeLatLng,
      source: 'string',
      status: 'string',
      synopsis: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      video: CommonMediaResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcStatus extends $tea.Model {
  code?: number;
  detail?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      detail: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TypeLatLng extends $tea.Model {
  latitude?: number;
  longitude?: number;
  static names(): { [key: string]: string } {
    return {
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latitude: 'number',
      longitude: 'number',
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
  statusCode: number;
  body: BanAllCommentResponseBody;
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
  statusCode: number;
  body: BanCommentResponseBody;
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
      body: BanCommentResponseBody,
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
  statusCode: number;
  body: CancelBanAllCommentResponseBody;
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
  statusCode: number;
  body: CancelBanCommentResponseBody;
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
      body: CancelBanCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUserAdminRequest extends $tea.Model {
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

export class CancelUserAdminResponseBody extends $tea.Model {
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

export class CancelUserAdminResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelUserAdminResponseBody;
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
      body: CancelUserAdminResponseBody,
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
  statusCode: number;
  body: CreateClassResponseBody;
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
      body: CreateClassResponseBody,
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
  statusCode: number;
  body: CreateLiveResponseBody;
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
      body: CreateLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRecordSliceFileRequest extends $tea.Model {
  appId?: string;
  endTime?: number;
  fileName?: string;
  liveId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      fileName: 'FileName',
      liveId: 'LiveId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'number',
      fileName: 'string',
      liveId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRecordSliceFileResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateLiveRecordSliceFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateLiveRecordSliceFileResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRecordSliceFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLiveRecordSliceFileResponseBody;
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
      body: CreateLiveRecordSliceFileResponseBody,
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
  enableLinkMic?: boolean;
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
      enableLinkMic: 'EnableLinkMic',
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
      enableLinkMic: 'boolean',
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
  enableLinkMic?: boolean;
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
      enableLinkMic: 'EnableLinkMic',
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
      enableLinkMic: 'boolean',
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
  statusCode: number;
  body: CreateLiveRoomResponseBody;
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
  statusCode: number;
  body: CreateRoomResponseBody;
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
      body: CreateRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSensitiveWordRequest extends $tea.Model {
  appId?: string;
  wordList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      wordList: 'WordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      wordList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSensitiveWordShrinkRequest extends $tea.Model {
  appId?: string;
  wordListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      wordListShrink: 'WordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      wordListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSensitiveWordResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateSensitiveWordResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateSensitiveWordResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSensitiveWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSensitiveWordResponseBody;
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
      body: CreateSensitiveWordResponseBody,
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
  statusCode: number;
  body: DeleteClassResponseBody;
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
  statusCode: number;
  body: DeleteCommentResponseBody;
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
      body: DeleteCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommentByCreatorIdRequest extends $tea.Model {
  appId?: string;
  commentIdList?: string[];
  creatorId?: string;
  roomId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      commentIdList: 'CommentIdList',
      creatorId: 'CreatorId',
      roomId: 'RoomId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      commentIdList: { 'type': 'array', 'itemType': 'string' },
      creatorId: 'string',
      roomId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommentByCreatorIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteCommentByCreatorIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteCommentByCreatorIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommentByCreatorIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCommentByCreatorIdResponseBody;
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
      body: DeleteCommentByCreatorIdResponseBody,
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
  statusCode: number;
  body: DeleteConferenceResponseBody;
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
  statusCode: number;
  body: DeleteLiveResponseBody;
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
  statusCode: number;
  body: DeleteLiveRoomResponseBody;
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
  statusCode: number;
  body: DeleteRoomResponseBody;
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
      body: DeleteRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSensitiveWordRequest extends $tea.Model {
  appId?: string;
  wordList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      wordList: 'WordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      wordList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSensitiveWordShrinkRequest extends $tea.Model {
  appId?: string;
  wordListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      wordListShrink: 'WordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      wordListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSensitiveWordResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteSensitiveWordResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteSensitiveWordResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSensitiveWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSensitiveWordResponseBody;
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
      body: DeleteSensitiveWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpPlayBackTimeByLiveIdRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  liveId?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      liveId: 'LiveId',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      liveId: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpPlayBackTimeByLiveIdResponseBody extends $tea.Model {
  data?: DescribeMeterImpPlayBackTimeByLiveIdResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImpPlayBackTimeByLiveIdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpPlayBackTimeByLiveIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImpPlayBackTimeByLiveIdResponseBody;
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
      body: DescribeMeterImpPlayBackTimeByLiveIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpWatchLiveTimeByLiveIdRequest extends $tea.Model {
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

export class DescribeMeterImpWatchLiveTimeByLiveIdResponseBody extends $tea.Model {
  data?: DescribeMeterImpWatchLiveTimeByLiveIdResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImpWatchLiveTimeByLiveIdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpWatchLiveTimeByLiveIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeterImpWatchLiveTimeByLiveIdResponseBody;
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
      body: DescribeMeterImpWatchLiveTimeByLiveIdResponseBody,
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
  statusCode: number;
  body: GetAuthTokenResponseBody;
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
  statusCode: number;
  body: GetClassDetailResponseBody;
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
  statusCode: number;
  body: GetClassRecordResponseBody;
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
      body: GetClassRecordResponseBody,
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
  statusCode: number;
  body: GetConferenceResponseBody;
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
      body: GetConferenceResponseBody,
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
  statusCode: number;
  body: GetLiveResponseBody;
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
      body: GetLiveResponseBody,
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
  statusCode: number;
  body: GetLiveRecordResponseBody;
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
  statusCode: number;
  body: GetLiveRoomResponseBody;
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
  statusCode: number;
  body: GetLiveRoomStatisticsResponseBody;
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
  statusCode: number;
  body: GetLiveRoomUserStatisticsResponseBody;
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
      body: GetLiveRoomUserStatisticsResponseBody,
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
  statusCode: number;
  body: GetRoomResponseBody;
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
      body: GetRoomResponseBody,
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
  statusCode: number;
  body: GetStandardRoomJumpUrlResponseBody;
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
      body: GetStandardRoomJumpUrlResponseBody,
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
  statusCode: number;
  body: KickRoomUserResponseBody;
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
      body: KickRoomUserResponseBody,
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
  statusCode: number;
  body: ListClassesResponseBody;
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
      body: ListClassesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommentsRequest extends $tea.Model {
  appId?: string;
  creatorId?: string;
  pageNum?: number;
  pageSize?: number;
  roomId?: string;
  sortType?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creatorId: 'CreatorId',
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
      creatorId: 'string',
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
  statusCode: number;
  body: ListCommentsResponseBody;
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
      body: ListCommentsResponseBody,
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
  statusCode: number;
  body: ListConferenceUsersResponseBody;
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
  statusCode: number;
  body: ListLiveRoomsResponseBody;
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
  statusCode: number;
  body: ListLiveRoomsByIdResponseBody;
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
      body: ListLiveRoomsByIdResponseBody,
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
  statusCode: number;
  body: ListRoomUsersResponseBody;
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
  statusCode: number;
  body: ListRoomsResponseBody;
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
      body: ListRoomsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordRequest extends $tea.Model {
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListSensitiveWordResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSensitiveWordResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSensitiveWordResponseBody;
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
      body: ListSensitiveWordResponseBody,
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
  statusCode: number;
  body: PublishLiveResponseBody;
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
  statusCode: number;
  body: PublishLiveRoomResponseBody;
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
      body: PublishLiveRoomResponseBody,
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
  statusCode: number;
  body: RemoveMemberResponseBody;
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
  statusCode: number;
  body: SendCommentResponseBody;
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
  statusCode: number;
  body: SendCustomMessageToAllResponseBody;
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
  statusCode: number;
  body: SendCustomMessageToUsersResponseBody;
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
      body: SendCustomMessageToUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserAdminRequest extends $tea.Model {
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

export class SetUserAdminResponseBody extends $tea.Model {
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

export class SetUserAdminResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetUserAdminResponseBody;
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
      body: SetUserAdminResponseBody,
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
  statusCode: number;
  body: StopClassResponseBody;
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
  statusCode: number;
  body: StopLiveResponseBody;
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
  statusCode: number;
  body: StopLiveRoomResponseBody;
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
      body: StopLiveRoomResponseBody,
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
  statusCode: number;
  body: UpdateClassResponseBody;
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
      body: UpdateClassResponseBody,
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
  statusCode: number;
  body: UpdateLiveResponseBody;
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
  statusCode: number;
  body: UpdateLiveRoomResponseBody;
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
  statusCode: number;
  body: UpdateRoomResponseBody;
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
      body: UpdateRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShareScreenLayoutRequest extends $tea.Model {
  appId?: string;
  classId?: string;
  enableOverlay?: boolean;
  overlayHeight?: number;
  overlayWidth?: number;
  overlayX?: number;
  overlayY?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      classId: 'ClassId',
      enableOverlay: 'EnableOverlay',
      overlayHeight: 'OverlayHeight',
      overlayWidth: 'OverlayWidth',
      overlayX: 'OverlayX',
      overlayY: 'OverlayY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      classId: 'string',
      enableOverlay: 'boolean',
      overlayHeight: 'number',
      overlayWidth: 'number',
      overlayX: 'number',
      overlayY: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShareScreenLayoutResponseBody extends $tea.Model {
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

export class UpdateShareScreenLayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateShareScreenLayoutResponseBody;
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
      body: UpdateShareScreenLayoutResponseBody,
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

export class CreateLiveRecordSliceFileResponseBodyResult extends $tea.Model {
  sliceRecordUrl?: string;
  static names(): { [key: string]: string } {
    return {
      sliceRecordUrl: 'SliceRecordUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sliceRecordUrl: 'string',
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

export class CreateSensitiveWordResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
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

export class DeleteCommentByCreatorIdResponseBodyResult extends $tea.Model {
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

export class DeleteSensitiveWordResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpPlayBackTimeByLiveIdResponseBodyData extends $tea.Model {
  watchTime?: number;
  static names(): { [key: string]: string } {
    return {
      watchTime: 'WatchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watchTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImpWatchLiveTimeByLiveIdResponseBodyData extends $tea.Model {
  watchTimeInLatency?: number;
  watchTimeInLowLatency?: number;
  static names(): { [key: string]: string } {
    return {
      watchTimeInLatency: 'WatchTimeInLatency',
      watchTimeInLowLatency: 'WatchTimeInLowLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watchTimeInLatency: 'number',
      watchTimeInLowLatency: 'number',
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
  confId?: string;
  coverUrl?: string;
  createTime?: number;
  enableLinkMic?: boolean;
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
      confId: 'ConfId',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      enableLinkMic: 'EnableLinkMic',
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
      confId: 'string',
      coverUrl: 'string',
      createTime: 'number',
      enableLinkMic: 'boolean',
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
  commentCount?: number;
  likeCount?: number;
  userId?: string;
  watchLiveTime?: number;
  static names(): { [key: string]: string } {
    return {
      commentCount: 'CommentCount',
      likeCount: 'LikeCount',
      userId: 'UserId',
      watchLiveTime: 'WatchLiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentCount: 'number',
      likeCount: 'number',
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
  adminIdList?: string[];
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
      adminIdList: 'AdminIdList',
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
      adminIdList: { 'type': 'array', 'itemType': 'string' },
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
  createTime?: number;
  endTime?: number;
  extension?: { [key: string]: string };
  liveId?: string;
  notice?: string;
  onlineCount?: number;
  pv?: number;
  roomId?: string;
  startTime?: number;
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
      createTime: 'CreateTime',
      endTime: 'EndTime',
      extension: 'Extension',
      liveId: 'LiveId',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      pv: 'Pv',
      roomId: 'RoomId',
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
      chatId: 'string',
      coverUrl: 'string',
      createTime: 'number',
      endTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      liveId: 'string',
      notice: 'string',
      onlineCount: 'number',
      pv: 'number',
      roomId: 'string',
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
  createTime?: number;
  endTime?: number;
  extension?: { [key: string]: string };
  liveId?: string;
  notice?: string;
  onlineCount?: number;
  pv?: number;
  roomId?: string;
  startTime?: number;
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
      createTime: 'CreateTime',
      endTime: 'EndTime',
      extension: 'Extension',
      liveId: 'LiveId',
      notice: 'Notice',
      onlineCount: 'OnlineCount',
      pv: 'Pv',
      roomId: 'RoomId',
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
      chatId: 'string',
      coverUrl: 'string',
      createTime: 'number',
      endTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      liveId: 'string',
      notice: 'string',
      onlineCount: 'number',
      pv: 'number',
      roomId: 'string',
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

export class ListSensitiveWordResponseBodyResult extends $tea.Model {
  totalCount?: number;
  wordList?: string[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      wordList: 'WordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      wordList: { 'type': 'array', 'itemType': 'string' },
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

  async cancelUserAdminWithOptions(request: CancelUserAdminRequest, runtime: $Util.RuntimeOptions): Promise<CancelUserAdminResponse> {
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
      action: "CancelUserAdmin",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelUserAdminResponse>(await this.callApi(params, req, runtime), new CancelUserAdminResponse({}));
  }

  async cancelUserAdmin(request: CancelUserAdminRequest): Promise<CancelUserAdminResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelUserAdminWithOptions(request, runtime);
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

  async createLiveRecordSliceFileWithOptions(request: CreateLiveRecordSliceFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveRecordSliceFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLiveRecordSliceFile",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLiveRecordSliceFileResponse>(await this.callApi(params, req, runtime), new CreateLiveRecordSliceFileResponse({}));
  }

  async createLiveRecordSliceFile(request: CreateLiveRecordSliceFileRequest): Promise<CreateLiveRecordSliceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveRecordSliceFileWithOptions(request, runtime);
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

    if (!Util.isUnset(request.enableLinkMic)) {
      body["EnableLinkMic"] = request.enableLinkMic;
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

  async createSensitiveWordWithOptions(tmpReq: CreateSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<CreateSensitiveWordResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSensitiveWordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.wordList)) {
      request.wordListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.wordList, "WordList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.wordListShrink)) {
      body["WordList"] = request.wordListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSensitiveWord",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSensitiveWordResponse>(await this.callApi(params, req, runtime), new CreateSensitiveWordResponse({}));
  }

  async createSensitiveWord(request: CreateSensitiveWordRequest): Promise<CreateSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSensitiveWordWithOptions(request, runtime);
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

  async deleteCommentByCreatorIdWithOptions(request: DeleteCommentByCreatorIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCommentByCreatorIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commentIdList)) {
      bodyFlat["CommentIdList"] = request.commentIdList;
    }

    if (!Util.isUnset(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
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
      action: "DeleteCommentByCreatorId",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCommentByCreatorIdResponse>(await this.callApi(params, req, runtime), new DeleteCommentByCreatorIdResponse({}));
  }

  async deleteCommentByCreatorId(request: DeleteCommentByCreatorIdRequest): Promise<DeleteCommentByCreatorIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCommentByCreatorIdWithOptions(request, runtime);
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

  async deleteSensitiveWordWithOptions(tmpReq: DeleteSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSensitiveWordResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteSensitiveWordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.wordList)) {
      request.wordListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.wordList, "WordList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.wordListShrink)) {
      body["WordList"] = request.wordListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSensitiveWord",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSensitiveWordResponse>(await this.callApi(params, req, runtime), new DeleteSensitiveWordResponse({}));
  }

  async deleteSensitiveWord(request: DeleteSensitiveWordRequest): Promise<DeleteSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSensitiveWordWithOptions(request, runtime);
  }

  async describeMeterImpPlayBackTimeByLiveIdWithOptions(request: DescribeMeterImpPlayBackTimeByLiveIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImpPlayBackTimeByLiveIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.liveId)) {
      query["LiveId"] = request.liveId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImpPlayBackTimeByLiveId",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImpPlayBackTimeByLiveIdResponse>(await this.callApi(params, req, runtime), new DescribeMeterImpPlayBackTimeByLiveIdResponse({}));
  }

  async describeMeterImpPlayBackTimeByLiveId(request: DescribeMeterImpPlayBackTimeByLiveIdRequest): Promise<DescribeMeterImpPlayBackTimeByLiveIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImpPlayBackTimeByLiveIdWithOptions(request, runtime);
  }

  async describeMeterImpWatchLiveTimeByLiveIdWithOptions(request: DescribeMeterImpWatchLiveTimeByLiveIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterImpWatchLiveTimeByLiveIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.liveId)) {
      query["LiveId"] = request.liveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterImpWatchLiveTimeByLiveId",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterImpWatchLiveTimeByLiveIdResponse>(await this.callApi(params, req, runtime), new DescribeMeterImpWatchLiveTimeByLiveIdResponse({}));
  }

  async describeMeterImpWatchLiveTimeByLiveId(request: DescribeMeterImpWatchLiveTimeByLiveIdRequest): Promise<DescribeMeterImpWatchLiveTimeByLiveIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterImpWatchLiveTimeByLiveIdWithOptions(request, runtime);
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

    if (!Util.isUnset(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
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

  async listSensitiveWordWithOptions(request: ListSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<ListSensitiveWordResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSensitiveWord",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSensitiveWordResponse>(await this.callApi(params, req, runtime), new ListSensitiveWordResponse({}));
  }

  async listSensitiveWord(request: ListSensitiveWordRequest): Promise<ListSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSensitiveWordWithOptions(request, runtime);
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

  async setUserAdminWithOptions(request: SetUserAdminRequest, runtime: $Util.RuntimeOptions): Promise<SetUserAdminResponse> {
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
      action: "SetUserAdmin",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetUserAdminResponse>(await this.callApi(params, req, runtime), new SetUserAdminResponse({}));
  }

  async setUserAdmin(request: SetUserAdminRequest): Promise<SetUserAdminResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserAdminWithOptions(request, runtime);
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

  async updateShareScreenLayoutWithOptions(request: UpdateShareScreenLayoutRequest, runtime: $Util.RuntimeOptions): Promise<UpdateShareScreenLayoutResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!Util.isUnset(request.enableOverlay)) {
      body["EnableOverlay"] = request.enableOverlay;
    }

    if (!Util.isUnset(request.overlayHeight)) {
      body["OverlayHeight"] = request.overlayHeight;
    }

    if (!Util.isUnset(request.overlayWidth)) {
      body["OverlayWidth"] = request.overlayWidth;
    }

    if (!Util.isUnset(request.overlayX)) {
      body["OverlayX"] = request.overlayX;
    }

    if (!Util.isUnset(request.overlayY)) {
      body["OverlayY"] = request.overlayY;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateShareScreenLayout",
      version: "2021-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateShareScreenLayoutResponse>(await this.callApi(params, req, runtime), new UpdateShareScreenLayoutResponse({}));
  }

  async updateShareScreenLayout(request: UpdateShareScreenLayoutRequest): Promise<UpdateShareScreenLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateShareScreenLayoutWithOptions(request, runtime);
  }

}
