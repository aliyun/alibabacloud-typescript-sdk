// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AdaptGameVersionRequest extends $tea.Model {
  frameRate?: string;
  resolution?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'string',
      resolution: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptGameVersionResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptGameVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AdaptGameVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AdaptGameVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGameToProjectRequest extends $tea.Model {
  gameId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGameToProjectResponseBody extends $tea.Model {
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

export class AddGameToProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGameToProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGameToProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDispatchGameSlotRequest extends $tea.Model {
  queueUserList?: string;
  static names(): { [key: string]: string } {
    return {
      queueUserList: 'QueueUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueUserList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDispatchGameSlotResponseBody extends $tea.Model {
  queueResultList?: BatchDispatchGameSlotResponseBodyQueueResultList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queueResultList: 'QueueResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueResultList: { 'type': 'array', 'itemType': BatchDispatchGameSlotResponseBodyQueueResultList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDispatchGameSlotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchDispatchGameSlotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDispatchGameSlotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopGameSessionsRequest extends $tea.Model {
  gameId?: string;
  projectId?: string;
  reason?: string;
  tags?: string;
  token?: string;
  trackInfo?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      projectId: 'ProjectId',
      reason: 'Reason',
      tags: 'Tags',
      token: 'Token',
      trackInfo: 'TrackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      projectId: 'string',
      reason: 'string',
      tags: 'string',
      token: 'string',
      trackInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopGameSessionsResponseBody extends $tea.Model {
  gameId?: string;
  message?: string;
  projectId?: string;
  queueState?: number;
  requestId?: string;
  success?: boolean;
  trackInfo?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      message: 'Message',
      projectId: 'ProjectId',
      queueState: 'QueueState',
      requestId: 'RequestId',
      success: 'Success',
      trackInfo: 'TrackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      message: 'string',
      projectId: 'string',
      queueState: 'number',
      requestId: 'string',
      success: 'boolean',
      trackInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopGameSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchStopGameSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchStopGameSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelGameHangRequest extends $tea.Model {
  accessKey?: string;
  gameSession?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      gameSession: 'GameSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      gameSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelGameHangResponseBody extends $tea.Model {
  code?: string;
  gameSession?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gameSession: 'GameSession',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gameSession: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelGameHangResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelGameHangResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelGameHangResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderRequest extends $tea.Model {
  accountDomain?: string;
  buyerAccountId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      buyerAccountId: 'BuyerAccountId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      buyerAccountId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloseOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGameRequest extends $tea.Model {
  clientToken?: string;
  gameName?: string;
  platformType?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      gameName: 'GameName',
      platformType: 'PlatformType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      gameName: 'string',
      platformType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGameResponseBody extends $tea.Model {
  gameId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGameDeployWorkflowRequest extends $tea.Model {
  downloadType?: string;
  fileType?: string;
  frameRate?: string;
  gameId?: string;
  gameVersion?: string;
  hash?: string;
  instance?: string;
  projectId?: string;
  resolution?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadType: 'DownloadType',
      fileType: 'FileType',
      frameRate: 'FrameRate',
      gameId: 'GameId',
      gameVersion: 'GameVersion',
      hash: 'Hash',
      instance: 'Instance',
      projectId: 'ProjectId',
      resolution: 'Resolution',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadType: 'string',
      fileType: 'string',
      frameRate: 'string',
      gameId: 'string',
      gameVersion: 'string',
      hash: 'string',
      instance: 'string',
      projectId: 'string',
      resolution: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGameDeployWorkflowResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGameDeployWorkflowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGameDeployWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGameDeployWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  accountDomain?: string;
  amount?: number;
  buyerAccountId?: string;
  idempotentCode?: string;
  itemId?: string;
  originPrice?: number;
  settlementPrice?: number;
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      amount: 'Amount',
      buyerAccountId: 'BuyerAccountId',
      idempotentCode: 'IdempotentCode',
      itemId: 'ItemId',
      originPrice: 'OriginPrice',
      settlementPrice: 'SettlementPrice',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      amount: 'number',
      buyerAccountId: 'string',
      idempotentCode: 'string',
      itemId: 'string',
      originPrice: 'number',
      settlementPrice: 'number',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  data?: CreateOrderResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateOrderResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  clientToken?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  projectId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenRequest extends $tea.Model {
  clientToken?: string;
  currentToken?: string;
  session?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      currentToken: 'CurrentToken',
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      currentToken: 'string',
      session: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBody extends $tea.Model {
  data?: CreateTokenResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTokenResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGameRequest extends $tea.Model {
  gameId?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGameResponseBody extends $tea.Model {
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

export class DeleteGameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGameVersionRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGameVersionResponseBody extends $tea.Model {
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

export class DeleteGameVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGameVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGameVersionResponseBody,
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

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryOrderRequest extends $tea.Model {
  accountDomain?: string;
  buyerAccountId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      buyerAccountId: 'BuyerAccountId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      buyerAccountId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryOrderResponseBody extends $tea.Model {
  data?: DeliveryOrderResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeliveryOrderResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeliveryOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeliveryOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DispatchGameSlotRequest extends $tea.Model {
  accessKey?: string;
  bizParam?: string;
  cancel?: boolean;
  clientIp?: string;
  gameCommand?: string;
  gameId?: string;
  gameSession?: string;
  gameStartParam?: string;
  reconnect?: boolean;
  regionName?: string;
  systemInfo?: string;
  tags?: string;
  userId?: string;
  userLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bizParam: 'BizParam',
      cancel: 'Cancel',
      clientIp: 'ClientIp',
      gameCommand: 'GameCommand',
      gameId: 'GameId',
      gameSession: 'GameSession',
      gameStartParam: 'GameStartParam',
      reconnect: 'Reconnect',
      regionName: 'RegionName',
      systemInfo: 'SystemInfo',
      tags: 'Tags',
      userId: 'UserId',
      userLevel: 'UserLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bizParam: 'string',
      cancel: 'boolean',
      clientIp: 'string',
      gameCommand: 'string',
      gameId: 'string',
      gameSession: 'string',
      gameStartParam: 'string',
      reconnect: 'boolean',
      regionName: 'string',
      systemInfo: 'string',
      tags: 'string',
      userId: 'string',
      userLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DispatchGameSlotResponseBody extends $tea.Model {
  gameId?: string;
  gameSession?: string;
  message?: string;
  queueCode?: number;
  queueState?: number;
  regionName?: string;
  requestId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      gameSession: 'GameSession',
      message: 'Message',
      queueCode: 'QueueCode',
      queueState: 'QueueState',
      regionName: 'RegionName',
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      gameSession: 'string',
      message: 'string',
      queueCode: 'number',
      queueState: 'number',
      regionName: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DispatchGameSlotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DispatchGameSlotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DispatchGameSlotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameCcuRequest extends $tea.Model {
  accessKey?: string;
  gameId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      gameId: 'GameId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      gameId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameCcuResponseBody extends $tea.Model {
  dataList?: GetGameCcuResponseBodyDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': GetGameCcuResponseBodyDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameCcuResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGameCcuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGameCcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStatusRequest extends $tea.Model {
  gameSession?: string;
  static names(): { [key: string]: string } {
    return {
      gameSession: 'GameSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStatusResponseBody extends $tea.Model {
  data?: GetGameStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGameStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGameStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGameStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStockRequest extends $tea.Model {
  accessKey?: string;
  gameId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      gameId: 'GameId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      gameId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStockResponseBody extends $tea.Model {
  availableTotal?: number;
  gameId?: string;
  instanceStockList?: GetGameStockResponseBodyInstanceStockList[];
  message?: string;
  quotaTotal?: number;
  requestId?: string;
  usedTotal?: number;
  static names(): { [key: string]: string } {
    return {
      availableTotal: 'AvailableTotal',
      gameId: 'GameId',
      instanceStockList: 'InstanceStockList',
      message: 'Message',
      quotaTotal: 'QuotaTotal',
      requestId: 'RequestId',
      usedTotal: 'UsedTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableTotal: 'number',
      gameId: 'string',
      instanceStockList: { 'type': 'array', 'itemType': GetGameStockResponseBodyInstanceStockList },
      message: 'string',
      quotaTotal: 'number',
      requestId: 'string',
      usedTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStockResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGameStockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGameStockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameTrialSurplusDurationRequest extends $tea.Model {
  accountId?: string;
  gameId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      gameId: 'GameId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      gameId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameTrialSurplusDurationResponseBody extends $tea.Model {
  requestId?: string;
  status?: number;
  surplusDuration?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      surplusDuration: 'SurplusDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
      surplusDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameTrialSurplusDurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGameTrialSurplusDurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGameTrialSurplusDurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameVersionRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameVersionResponseBody extends $tea.Model {
  requestId?: string;
  versionId?: string;
  versionName?: string;
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionId: 'VersionId',
      versionName: 'VersionName',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionId: 'string',
      versionName: 'string',
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGameVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGameVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameVersionProgressRequest extends $tea.Model {
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

export class GetGameVersionProgressResponseBody extends $tea.Model {
  description?: string;
  event?: string;
  extra?: { [key: string]: any };
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      event: 'Event',
      extra: 'Extra',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      event: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameVersionProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGameVersionProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGameVersionProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemRequest extends $tea.Model {
  itemId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemResponseBody extends $tea.Model {
  data?: GetItemResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetItemResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutAccountBindDetailRequest extends $tea.Model {
  accountDomain?: string;
  accountId?: string;
  outAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      accountId: 'AccountId',
      outAccountType: 'OutAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      accountId: 'string',
      outAccountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutAccountBindDetailResponseBody extends $tea.Model {
  data?: GetOutAccountBindDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetOutAccountBindDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutAccountBindDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOutAccountBindDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOutAccountBindDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueuingSizeRequest extends $tea.Model {
  gameId?: string;
  projectId?: string;
  userLevel?: number;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      projectId: 'ProjectId',
      userLevel: 'UserLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      projectId: 'string',
      userLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueuingSizeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueuingSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueuingSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQueuingSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionRequest extends $tea.Model {
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionResponseBody extends $tea.Model {
  data?: GetSessionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSessionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStopGameTokenRequest extends $tea.Model {
  accessKey?: string;
  gameId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      gameId: 'GameId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      gameId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStopGameTokenResponseBody extends $tea.Model {
  expireTime?: number;
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStopGameTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStopGameTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetStopGameTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickPlayerRequest extends $tea.Model {
  gameSession?: string;
  kickedAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      gameSession: 'GameSession',
      kickedAccountId: 'KickedAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameSession: 'string',
      kickedAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickPlayerResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickPlayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KickPlayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KickPlayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBoughtGamesRequest extends $tea.Model {
  accountDomain?: string;
  accountId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      accountId: 'AccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      accountId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBoughtGamesResponseBody extends $tea.Model {
  items?: ListBoughtGamesResponseBodyItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListBoughtGamesResponseBodyItems },
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

export class ListBoughtGamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBoughtGamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBoughtGamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerStatusRequest extends $tea.Model {
  gameSessionIdList?: ListContainerStatusRequestGameSessionIdList[];
  static names(): { [key: string]: string } {
    return {
      gameSessionIdList: 'GameSessionIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameSessionIdList: { 'type': 'array', 'itemType': ListContainerStatusRequestGameSessionIdList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerStatusResponseBody extends $tea.Model {
  dataList?: ListContainerStatusResponseBodyDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListContainerStatusResponseBodyDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListContainerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListContainerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployableInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployableInstancesResponseBody extends $tea.Model {
  dataList?: ListDeployableInstancesResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListDeployableInstancesResponseBodyDataList },
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

export class ListDeployableInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeployableInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeployableInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGameServerIpRequest extends $tea.Model {
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

export class ListGameServerIpResponseBody extends $tea.Model {
  items?: string[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': 'string' },
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

export class ListGameServerIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGameServerIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGameServerIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGameVersionsRequest extends $tea.Model {
  gameId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGameVersionsResponseBody extends $tea.Model {
  count?: number;
  dataList?: ListGameVersionsResponseBodyDataList[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      dataList: 'DataList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      dataList: { 'type': 'array', 'itemType': ListGameVersionsResponseBodyDataList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGameVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGameVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGameVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGamesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGamesResponseBody extends $tea.Model {
  count?: number;
  dataList?: ListGamesResponseBodyDataList[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      dataList: 'DataList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      dataList: { 'type': 'array', 'itemType': ListGamesResponseBodyDataList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryContainerStatusRequest extends $tea.Model {
  endTime?: number;
  lastGameSessionId?: string;
  pageSize?: number;
  projectId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lastGameSessionId: 'LastGameSessionId',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      lastGameSessionId: 'string',
      pageSize: 'number',
      projectId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryContainerStatusResponseBody extends $tea.Model {
  dataList?: ListHistoryContainerStatusResponseBodyDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListHistoryContainerStatusResponseBodyDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryContainerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHistoryContainerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHistoryContainerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  count?: number;
  dataList?: ListProjectsResponseBodyDataList[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      dataList: 'DataList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      dataList: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGameRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGameResponseBody extends $tea.Model {
  data?: QueryGameResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryGameResponseBodyData },
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

export class QueryGameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGameHangRequest extends $tea.Model {
  accessKey?: string;
  gameSession?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      gameSession: 'GameSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      gameSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGameHangResponseBody extends $tea.Model {
  code?: string;
  duration?: number;
  gameSession?: string;
  hanging?: boolean;
  message?: string;
  requestId?: string;
  startHangTimestamp?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      gameSession: 'GameSession',
      hanging: 'Hanging',
      message: 'Message',
      requestId: 'RequestId',
      startHangTimestamp: 'StartHangTimestamp',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      gameSession: 'string',
      hanging: 'boolean',
      message: 'string',
      requestId: 'string',
      startHangTimestamp: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGameHangResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGameHangResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGameHangResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsRequest extends $tea.Model {
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

export class QueryItemsResponseBody extends $tea.Model {
  data?: QueryItemsResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryItemsResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderRequest extends $tea.Model {
  accountDomain?: string;
  buyerAccountId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      buyerAccountId: 'BuyerAccountId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      buyerAccountId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderResponseBody extends $tea.Model {
  data?: QueryOrderResponseBodyData;
  deliveryStatus?: string;
  refundStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      deliveryStatus: 'DeliveryStatus',
      refundStatus: 'RefundStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryOrderResponseBodyData,
      deliveryStatus: 'string',
      refundStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutAccountBindStatusRequest extends $tea.Model {
  accountDomain?: string;
  accountId?: string;
  gameId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      accountId: 'AccountId',
      gameId: 'GameId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      accountId: 'string',
      gameId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutAccountBindStatusResponseBody extends $tea.Model {
  data?: QueryOutAccountBindStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryOutAccountBindStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutAccountBindStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOutAccountBindStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOutAccountBindStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBody extends $tea.Model {
  data?: QueryProjectResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryProjectResponseBodyData },
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

export class QueryProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTenantRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  param?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      param: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTenantResponseBody extends $tea.Model {
  data?: QueryTenantResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTenantResponseBodyData },
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

export class QueryTenantResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGameFromProjectRequest extends $tea.Model {
  gameId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGameFromProjectResponseBody extends $tea.Model {
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

export class RemoveGameFromProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveGameFromProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveGameFromProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGameAliveRequest extends $tea.Model {
  accessKey?: string;
  gameSession?: string;
  keepAlive?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      gameSession: 'GameSession',
      keepAlive: 'KeepAlive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      gameSession: 'string',
      keepAlive: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGameAliveResponseBody extends $tea.Model {
  code?: string;
  gameSession?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gameSession: 'GameSession',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gameSession: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGameAliveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetGameAliveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGameAliveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGameHangRequest extends $tea.Model {
  accessKey?: string;
  duration?: number;
  gameSession?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      duration: 'Duration',
      gameSession: 'GameSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      duration: 'number',
      gameSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGameHangResponseBody extends $tea.Model {
  code?: string;
  duration?: number;
  gameSession?: string;
  message?: string;
  requestId?: string;
  startHangTimestamp?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      gameSession: 'GameSession',
      message: 'Message',
      requestId: 'RequestId',
      startHangTimestamp: 'StartHangTimestamp',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      gameSession: 'string',
      message: 'string',
      requestId: 'string',
      startHangTimestamp: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGameHangResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetGameHangResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGameHangResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipTrialPolicyRequest extends $tea.Model {
  gameSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      gameSessionId: 'GameSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameSessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipTrialPolicyResponseBody extends $tea.Model {
  data?: SkipTrialPolicyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SkipTrialPolicyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipTrialPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SkipTrialPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SkipTrialPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartGameLiveRequest extends $tea.Model {
  extension?: { [key: string]: string };
  gameSession?: string;
  videoPushAddress?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      gameSession: 'GameSession',
      videoPushAddress: 'VideoPushAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gameSession: 'string',
      videoPushAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartGameLiveShrinkRequest extends $tea.Model {
  extensionShrink?: string;
  gameSession?: string;
  videoPushAddress?: string;
  static names(): { [key: string]: string } {
    return {
      extensionShrink: 'Extension',
      gameSession: 'GameSession',
      videoPushAddress: 'VideoPushAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensionShrink: 'string',
      gameSession: 'string',
      videoPushAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartGameLiveResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartGameLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartGameLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartGameLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGameLiveRequest extends $tea.Model {
  gameSession?: string;
  static names(): { [key: string]: string } {
    return {
      gameSession: 'GameSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGameLiveResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGameLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopGameLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopGameLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGameSessionRequest extends $tea.Model {
  accessKey?: string;
  bizParam?: string;
  gameId?: string;
  gameSession?: string;
  reason?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bizParam: 'BizParam',
      gameId: 'GameId',
      gameSession: 'GameSession',
      reason: 'Reason',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bizParam: 'string',
      gameId: 'string',
      gameSession: 'string',
      reason: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGameSessionResponseBody extends $tea.Model {
  gameId?: string;
  gameSession?: string;
  message?: string;
  queueCode?: number;
  queueState?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      gameSession: 'GameSession',
      message: 'Message',
      queueCode: 'QueueCode',
      queueState: 'QueueState',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      gameSession: 'string',
      message: 'string',
      queueCode: 'number',
      queueState: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGameSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopGameSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopGameSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeploymentRequest extends $tea.Model {
  cloudGameInstanceIds?: string;
  gameId?: string;
  operationType?: string;
  projectId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudGameInstanceIds: 'CloudGameInstanceIds',
      gameId: 'GameId',
      operationType: 'OperationType',
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudGameInstanceIds: 'string',
      gameId: 'string',
      operationType: 'string',
      projectId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeploymentResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseChargeDataRequest extends $tea.Model {
  activeUserRetentionRateOneDay?: number;
  activeUserRetentionRateSevenDay?: number;
  activeUserRetentionRateThirtyDay?: number;
  arpu?: number;
  chargeDate?: string;
  dau?: number;
  gameId?: string;
  mau?: number;
  newUserRetentionRateOneDay?: number;
  newUserRetentionRateSevenDay?: number;
  newUserRetentionRateThirtyDay?: number;
  paymentConversionRate?: number;
  playTimeAverageOneDay?: number;
  playTimeAverageThirtyDay?: number;
  playTimeNinetyPointsOneDay?: number;
  playTimeNinetyPointsThirtyDay?: number;
  playTimeRangeOneDay?: string;
  playTimeRangeThirtyDay?: string;
  userActivationRate?: number;
  static names(): { [key: string]: string } {
    return {
      activeUserRetentionRateOneDay: 'ActiveUserRetentionRateOneDay',
      activeUserRetentionRateSevenDay: 'ActiveUserRetentionRateSevenDay',
      activeUserRetentionRateThirtyDay: 'ActiveUserRetentionRateThirtyDay',
      arpu: 'Arpu',
      chargeDate: 'ChargeDate',
      dau: 'Dau',
      gameId: 'GameId',
      mau: 'Mau',
      newUserRetentionRateOneDay: 'NewUserRetentionRateOneDay',
      newUserRetentionRateSevenDay: 'NewUserRetentionRateSevenDay',
      newUserRetentionRateThirtyDay: 'NewUserRetentionRateThirtyDay',
      paymentConversionRate: 'PaymentConversionRate',
      playTimeAverageOneDay: 'PlayTimeAverageOneDay',
      playTimeAverageThirtyDay: 'PlayTimeAverageThirtyDay',
      playTimeNinetyPointsOneDay: 'PlayTimeNinetyPointsOneDay',
      playTimeNinetyPointsThirtyDay: 'PlayTimeNinetyPointsThirtyDay',
      playTimeRangeOneDay: 'PlayTimeRangeOneDay',
      playTimeRangeThirtyDay: 'PlayTimeRangeThirtyDay',
      userActivationRate: 'UserActivationRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserRetentionRateOneDay: 'number',
      activeUserRetentionRateSevenDay: 'number',
      activeUserRetentionRateThirtyDay: 'number',
      arpu: 'number',
      chargeDate: 'string',
      dau: 'number',
      gameId: 'string',
      mau: 'number',
      newUserRetentionRateOneDay: 'number',
      newUserRetentionRateSevenDay: 'number',
      newUserRetentionRateThirtyDay: 'number',
      paymentConversionRate: 'number',
      playTimeAverageOneDay: 'number',
      playTimeAverageThirtyDay: 'number',
      playTimeNinetyPointsOneDay: 'number',
      playTimeNinetyPointsThirtyDay: 'number',
      playTimeRangeOneDay: 'string',
      playTimeRangeThirtyDay: 'string',
      userActivationRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseChargeDataResponseBody extends $tea.Model {
  data?: SubmitInternalPurchaseChargeDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitInternalPurchaseChargeDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseChargeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitInternalPurchaseChargeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitInternalPurchaseChargeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseOrdersRequest extends $tea.Model {
  orderList?: SubmitInternalPurchaseOrdersRequestOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'OrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': SubmitInternalPurchaseOrdersRequestOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseOrdersResponseBody extends $tea.Model {
  data?: SubmitInternalPurchaseOrdersResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitInternalPurchaseOrdersResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitInternalPurchaseOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitInternalPurchaseOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseReadyFlagRequest extends $tea.Model {
  batchInfoList?: SubmitInternalPurchaseReadyFlagRequestBatchInfoList[];
  chargeDate?: string;
  gameId?: string;
  orderTotalCount?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      batchInfoList: 'BatchInfoList',
      chargeDate: 'ChargeDate',
      gameId: 'GameId',
      orderTotalCount: 'OrderTotalCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInfoList: { 'type': 'array', 'itemType': SubmitInternalPurchaseReadyFlagRequestBatchInfoList },
      chargeDate: 'string',
      gameId: 'string',
      orderTotalCount: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseReadyFlagResponseBody extends $tea.Model {
  data?: SubmitInternalPurchaseReadyFlagResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitInternalPurchaseReadyFlagResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseReadyFlagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitInternalPurchaseReadyFlagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitInternalPurchaseReadyFlagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadGameVersionByDownloadRequest extends $tea.Model {
  downloadType?: string;
  fileType?: string;
  gameId?: string;
  gameVersion?: string;
  hash?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadType: 'DownloadType',
      fileType: 'FileType',
      gameId: 'GameId',
      gameVersion: 'GameVersion',
      hash: 'Hash',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadType: 'string',
      fileType: 'string',
      gameId: 'string',
      gameVersion: 'string',
      hash: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadGameVersionByDownloadResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadGameVersionByDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadGameVersionByDownloadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadGameVersionByDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDispatchGameSlotResponseBodyQueueResultList extends $tea.Model {
  gameId?: string;
  gameSession?: string;
  message?: string;
  queueCode?: number;
  queueState?: number;
  regionName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      gameSession: 'GameSession',
      message: 'Message',
      queueCode: 'QueueCode',
      queueState: 'QueueState',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      gameSession: 'string',
      message: 'string',
      queueCode: 'number',
      queueState: 'number',
      regionName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyData extends $tea.Model {
  accountDomain?: string;
  amount?: number;
  applyDeliveryTime?: number;
  autoUnlockTime?: number;
  buyerAccountId?: string;
  createTime?: number;
  finishTime?: number;
  itemId?: string;
  orderId?: string;
  originPrice?: number;
  settlementPrice?: number;
  skuId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      amount: 'Amount',
      applyDeliveryTime: 'ApplyDeliveryTime',
      autoUnlockTime: 'AutoUnlockTime',
      buyerAccountId: 'BuyerAccountId',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      itemId: 'ItemId',
      orderId: 'OrderId',
      originPrice: 'OriginPrice',
      settlementPrice: 'SettlementPrice',
      skuId: 'SkuId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      amount: 'number',
      applyDeliveryTime: 'number',
      autoUnlockTime: 'number',
      buyerAccountId: 'string',
      createTime: 'number',
      finishTime: 'number',
      itemId: 'string',
      orderId: 'string',
      originPrice: 'number',
      settlementPrice: 'number',
      skuId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBodyData extends $tea.Model {
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryOrderResponseBodyData extends $tea.Model {
  deliveryStatus?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryStatus: 'DeliveryStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameCcuResponseBodyDataList extends $tea.Model {
  ccu?: number;
  gameId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ccu: 'Ccu',
      gameId: 'GameId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccu: 'number',
      gameId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStatusResponseBodyDataPlayingUsers extends $tea.Model {
  accountId?: string;
  startPlayTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      startPlayTime: 'StartPlayTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      startPlayTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStatusResponseBodyData extends $tea.Model {
  gameId?: string;
  gameSession?: string;
  gameStartAt?: number;
  playingCount?: number;
  playingUsers?: GetGameStatusResponseBodyDataPlayingUsers[];
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      gameSession: 'GameSession',
      gameStartAt: 'GameStartAt',
      playingCount: 'PlayingCount',
      playingUsers: 'PlayingUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      gameSession: 'string',
      gameStartAt: 'number',
      playingCount: 'number',
      playingUsers: { 'type': 'array', 'itemType': GetGameStatusResponseBodyDataPlayingUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameStockResponseBodyInstanceStockList extends $tea.Model {
  availableSlots?: number;
  instanceId?: string;
  quotaSlots?: number;
  reginName?: string;
  usedSlots?: number;
  userLevel?: number;
  static names(): { [key: string]: string } {
    return {
      availableSlots: 'AvailableSlots',
      instanceId: 'InstanceId',
      quotaSlots: 'QuotaSlots',
      reginName: 'ReginName',
      usedSlots: 'UsedSlots',
      userLevel: 'UserLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSlots: 'number',
      instanceId: 'string',
      quotaSlots: 'number',
      reginName: 'string',
      usedSlots: 'number',
      userLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemResponseBodyDataGames extends $tea.Model {
  gameId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemResponseBodyDataSkusSaleProps extends $tea.Model {
  propertyId?: number;
  propertyName?: string;
  value?: string;
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyName: 'PropertyName',
      value: 'Value',
      valueId: 'ValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyName: 'string',
      value: 'string',
      valueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemResponseBodyDataSkus extends $tea.Model {
  createTime?: number;
  itemId?: string;
  modifyTime?: number;
  originPrice?: number;
  salePrice?: number;
  saleProps?: GetItemResponseBodyDataSkusSaleProps[];
  skuId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      itemId: 'ItemId',
      modifyTime: 'ModifyTime',
      originPrice: 'OriginPrice',
      salePrice: 'SalePrice',
      saleProps: 'SaleProps',
      skuId: 'SkuId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      itemId: 'string',
      modifyTime: 'number',
      originPrice: 'number',
      salePrice: 'number',
      saleProps: { 'type': 'array', 'itemType': GetItemResponseBodyDataSkusSaleProps },
      skuId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemResponseBodyData extends $tea.Model {
  categoryId?: number;
  createTime?: number;
  description?: string;
  games?: GetItemResponseBodyDataGames[];
  itemId?: string;
  modifyTime?: number;
  originPrice?: number;
  salePrice?: number;
  sellerId?: string;
  skus?: GetItemResponseBodyDataSkus[];
  status?: number;
  supplier?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      description: 'Description',
      games: 'Games',
      itemId: 'ItemId',
      modifyTime: 'ModifyTime',
      originPrice: 'OriginPrice',
      salePrice: 'SalePrice',
      sellerId: 'SellerId',
      skus: 'Skus',
      status: 'Status',
      supplier: 'Supplier',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'number',
      description: 'string',
      games: { 'type': 'array', 'itemType': GetItemResponseBodyDataGames },
      itemId: 'string',
      modifyTime: 'number',
      originPrice: 'number',
      salePrice: 'number',
      sellerId: 'string',
      skus: { 'type': 'array', 'itemType': GetItemResponseBodyDataSkus },
      status: 'number',
      supplier: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutAccountBindDetailResponseBodyData extends $tea.Model {
  bindStatus?: number;
  outAccountId?: string;
  outAccountType?: string;
  token?: string;
  tokenExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      bindStatus: 'BindStatus',
      outAccountId: 'OutAccountId',
      outAccountType: 'OutAccountType',
      token: 'Token',
      tokenExpireTime: 'TokenExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'number',
      outAccountId: 'string',
      outAccountType: 'string',
      token: 'string',
      tokenExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionResponseBodyData extends $tea.Model {
  session?: string;
  static names(): { [key: string]: string } {
    return {
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      session: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBoughtGamesResponseBodyItems extends $tea.Model {
  endTime?: number;
  gameId?: string;
  gameName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      gameId: 'GameId',
      gameName: 'GameName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      gameId: 'string',
      gameName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerStatusRequestGameSessionIdList extends $tea.Model {
  gameSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      gameSessionId: 'GameSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameSessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerStatusResponseBodyDataListPlayerDetailList extends $tea.Model {
  accountId?: string;
  isInitiator?: boolean;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      isInitiator: 'IsInitiator',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      isInitiator: 'boolean',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerStatusResponseBodyDataList extends $tea.Model {
  accountId?: string;
  containerQuitTime?: number;
  containerStartTime?: number;
  containerState?: string;
  gameId?: string;
  gameSessionId?: string;
  playerDetailList?: ListContainerStatusResponseBodyDataListPlayerDetailList[];
  projectId?: string;
  tags?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      containerQuitTime: 'ContainerQuitTime',
      containerStartTime: 'ContainerStartTime',
      containerState: 'ContainerState',
      gameId: 'GameId',
      gameSessionId: 'GameSessionId',
      playerDetailList: 'PlayerDetailList',
      projectId: 'ProjectId',
      tags: 'Tags',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      containerQuitTime: 'number',
      containerStartTime: 'number',
      containerState: 'string',
      gameId: 'string',
      gameSessionId: 'string',
      playerDetailList: { 'type': 'array', 'itemType': ListContainerStatusResponseBodyDataListPlayerDetailList },
      projectId: 'string',
      tags: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployableInstancesResponseBodyDataList extends $tea.Model {
  cloudGameInstanceId?: string;
  cloudGameInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      cloudGameInstanceId: 'CloudGameInstanceId',
      cloudGameInstanceName: 'CloudGameInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudGameInstanceId: 'string',
      cloudGameInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGameVersionsResponseBodyDataList extends $tea.Model {
  versionId?: string;
  versionName?: string;
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      versionName: 'VersionName',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      versionName: 'string',
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGamesResponseBodyDataList extends $tea.Model {
  gameId?: string;
  gameName?: string;
  platformType?: number;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      gameName: 'GameName',
      platformType: 'PlatformType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      gameName: 'string',
      platformType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryContainerStatusResponseBodyDataListPlayerDetailList extends $tea.Model {
  accountId?: string;
  isInitiator?: boolean;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      isInitiator: 'IsInitiator',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      isInitiator: 'boolean',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryContainerStatusResponseBodyDataList extends $tea.Model {
  accountId?: string;
  containerQuitTime?: number;
  containerStartTime?: number;
  containerState?: string;
  gameId?: string;
  gameSessionId?: string;
  playerDetailList?: ListHistoryContainerStatusResponseBodyDataListPlayerDetailList[];
  projectId?: string;
  tags?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      containerQuitTime: 'ContainerQuitTime',
      containerStartTime: 'ContainerStartTime',
      containerState: 'ContainerState',
      gameId: 'GameId',
      gameSessionId: 'GameSessionId',
      playerDetailList: 'PlayerDetailList',
      projectId: 'ProjectId',
      tags: 'Tags',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      containerQuitTime: 'number',
      containerStartTime: 'number',
      containerState: 'string',
      gameId: 'string',
      gameSessionId: 'string',
      playerDetailList: { 'type': 'array', 'itemType': ListHistoryContainerStatusResponseBodyDataListPlayerDetailList },
      projectId: 'string',
      tags: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataList extends $tea.Model {
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGameResponseBodyData extends $tea.Model {
  gameId?: number;
  gmtCreate?: string;
  name?: string;
  projectId?: number;
  tenantId?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'number',
      gmtCreate: 'string',
      name: 'string',
      projectId: 'number',
      tenantId: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBodyDataItemsGames extends $tea.Model {
  gameId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gameId: 'GameId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBodyDataItemsSkusSaleProps extends $tea.Model {
  propertyId?: number;
  propertyName?: string;
  value?: string;
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyName: 'PropertyName',
      value: 'Value',
      valueId: 'ValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyName: 'string',
      value: 'string',
      valueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBodyDataItemsSkus extends $tea.Model {
  createTime?: number;
  itemId?: string;
  modifyTime?: number;
  originPrice?: number;
  salePrice?: number;
  saleProps?: QueryItemsResponseBodyDataItemsSkusSaleProps[];
  skuId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      itemId: 'ItemId',
      modifyTime: 'ModifyTime',
      originPrice: 'OriginPrice',
      salePrice: 'SalePrice',
      saleProps: 'SaleProps',
      skuId: 'SkuId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      itemId: 'string',
      modifyTime: 'number',
      originPrice: 'number',
      salePrice: 'number',
      saleProps: { 'type': 'array', 'itemType': QueryItemsResponseBodyDataItemsSkusSaleProps },
      skuId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBodyDataItems extends $tea.Model {
  categoryId?: number;
  createTime?: number;
  description?: string;
  games?: QueryItemsResponseBodyDataItemsGames[];
  itemId?: string;
  modifyTime?: number;
  originPrice?: number;
  salePrice?: number;
  sellerId?: string;
  skus?: QueryItemsResponseBodyDataItemsSkus[];
  status?: number;
  supplier?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      description: 'Description',
      games: 'Games',
      itemId: 'ItemId',
      modifyTime: 'ModifyTime',
      originPrice: 'OriginPrice',
      salePrice: 'SalePrice',
      sellerId: 'SellerId',
      skus: 'Skus',
      status: 'Status',
      supplier: 'Supplier',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'number',
      description: 'string',
      games: { 'type': 'array', 'itemType': QueryItemsResponseBodyDataItemsGames },
      itemId: 'string',
      modifyTime: 'number',
      originPrice: 'number',
      salePrice: 'number',
      sellerId: 'string',
      skus: { 'type': 'array', 'itemType': QueryItemsResponseBodyDataItemsSkus },
      status: 'number',
      supplier: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemsResponseBodyData extends $tea.Model {
  items?: QueryItemsResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QueryItemsResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderResponseBodyData extends $tea.Model {
  accountDomain?: string;
  amount?: number;
  applyDeliveryTime?: number;
  autoUnlockTime?: number;
  buyerAccountId?: string;
  createTime?: number;
  finishTime?: number;
  itemId?: string;
  orderId?: string;
  originPrice?: number;
  settlementPrice?: number;
  skuId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountDomain: 'AccountDomain',
      amount: 'Amount',
      applyDeliveryTime: 'ApplyDeliveryTime',
      autoUnlockTime: 'AutoUnlockTime',
      buyerAccountId: 'BuyerAccountId',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      itemId: 'ItemId',
      orderId: 'OrderId',
      originPrice: 'OriginPrice',
      settlementPrice: 'SettlementPrice',
      skuId: 'SkuId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDomain: 'string',
      amount: 'number',
      applyDeliveryTime: 'number',
      autoUnlockTime: 'number',
      buyerAccountId: 'string',
      createTime: 'number',
      finishTime: 'number',
      itemId: 'string',
      orderId: 'string',
      originPrice: 'number',
      settlementPrice: 'number',
      skuId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutAccountBindStatusResponseBodyData extends $tea.Model {
  bindStatus?: number;
  static names(): { [key: string]: string } {
    return {
      bindStatus: 'BindStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyData extends $tea.Model {
  id?: number;
  name?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTenantResponseBodyData extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipTrialPolicyResponseBodyData extends $tea.Model {
  skipResult?: number;
  static names(): { [key: string]: string } {
    return {
      skipResult: 'SkipResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseChargeDataResponseBodyData extends $tea.Model {
  message?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseOrdersRequestOrderList extends $tea.Model {
  batchNumber?: string;
  finalPrice?: number;
  finishTime?: number;
  gameId?: string;
  orderId?: string;
  roleId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      batchNumber: 'BatchNumber',
      finalPrice: 'FinalPrice',
      finishTime: 'FinishTime',
      gameId: 'GameId',
      orderId: 'OrderId',
      roleId: 'RoleId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchNumber: 'string',
      finalPrice: 'number',
      finishTime: 'number',
      gameId: 'string',
      orderId: 'string',
      roleId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseOrdersResponseBodyData extends $tea.Model {
  message?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseReadyFlagRequestBatchInfoList extends $tea.Model {
  batchNumbers?: string;
  batchSize?: number;
  static names(): { [key: string]: string } {
    return {
      batchNumbers: 'BatchNumbers',
      batchSize: 'BatchSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchNumbers: 'string',
      batchSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInternalPurchaseReadyFlagResponseBodyData extends $tea.Model {
  message?: string;
  missingBatchNumbers?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      missingBatchNumbers: 'MissingBatchNumbers',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      missingBatchNumbers: 'string',
      status: 'number',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudgameapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async adaptGameVersionWithOptions(request: AdaptGameVersionRequest, runtime: $Util.RuntimeOptions): Promise<AdaptGameVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.frameRate)) {
      query["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AdaptGameVersion",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AdaptGameVersionResponse>(await this.callApi(params, req, runtime), new AdaptGameVersionResponse({}));
  }

  async adaptGameVersion(request: AdaptGameVersionRequest): Promise<AdaptGameVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.adaptGameVersionWithOptions(request, runtime);
  }

  async addGameToProjectWithOptions(request: AddGameToProjectRequest, runtime: $Util.RuntimeOptions): Promise<AddGameToProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGameToProject",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGameToProjectResponse>(await this.callApi(params, req, runtime), new AddGameToProjectResponse({}));
  }

  async addGameToProject(request: AddGameToProjectRequest): Promise<AddGameToProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGameToProjectWithOptions(request, runtime);
  }

  async batchDispatchGameSlotWithOptions(request: BatchDispatchGameSlotRequest, runtime: $Util.RuntimeOptions): Promise<BatchDispatchGameSlotResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queueUserList)) {
      body["QueueUserList"] = request.queueUserList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDispatchGameSlot",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDispatchGameSlotResponse>(await this.callApi(params, req, runtime), new BatchDispatchGameSlotResponse({}));
  }

  async batchDispatchGameSlot(request: BatchDispatchGameSlotRequest): Promise<BatchDispatchGameSlotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDispatchGameSlotWithOptions(request, runtime);
  }

  async batchStopGameSessionsWithOptions(request: BatchStopGameSessionsRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopGameSessionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.trackInfo)) {
      query["TrackInfo"] = request.trackInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchStopGameSessions",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchStopGameSessionsResponse>(await this.callApi(params, req, runtime), new BatchStopGameSessionsResponse({}));
  }

  async batchStopGameSessions(request: BatchStopGameSessionsRequest): Promise<BatchStopGameSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopGameSessionsWithOptions(request, runtime);
  }

  async cancelGameHangWithOptions(request: CancelGameHangRequest, runtime: $Util.RuntimeOptions): Promise<CancelGameHangResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.gameSession)) {
      body["GameSession"] = request.gameSession;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelGameHang",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelGameHangResponse>(await this.callApi(params, req, runtime), new CancelGameHangResponse({}));
  }

  async cancelGameHang(request: CancelGameHangRequest): Promise<CancelGameHangResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelGameHangWithOptions(request, runtime);
  }

  async closeOrderWithOptions(request: CloseOrderRequest, runtime: $Util.RuntimeOptions): Promise<CloseOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDomain)) {
      query["AccountDomain"] = request.accountDomain;
    }

    if (!Util.isUnset(request.buyerAccountId)) {
      query["BuyerAccountId"] = request.buyerAccountId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseOrder",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseOrderResponse>(await this.callApi(params, req, runtime), new CloseOrderResponse({}));
  }

  async closeOrder(request: CloseOrderRequest): Promise<CloseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeOrderWithOptions(request, runtime);
  }

  async createGameWithOptions(request: CreateGameRequest, runtime: $Util.RuntimeOptions): Promise<CreateGameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.gameName)) {
      query["GameName"] = request.gameName;
    }

    if (!Util.isUnset(request.platformType)) {
      query["PlatformType"] = request.platformType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGame",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGameResponse>(await this.callApi(params, req, runtime), new CreateGameResponse({}));
  }

  async createGame(request: CreateGameRequest): Promise<CreateGameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGameWithOptions(request, runtime);
  }

  async createGameDeployWorkflowWithOptions(request: CreateGameDeployWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<CreateGameDeployWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.downloadType)) {
      query["DownloadType"] = request.downloadType;
    }

    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.frameRate)) {
      query["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.gameVersion)) {
      query["GameVersion"] = request.gameVersion;
    }

    if (!Util.isUnset(request.hash)) {
      query["Hash"] = request.hash;
    }

    if (!Util.isUnset(request.instance)) {
      query["Instance"] = request.instance;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGameDeployWorkflow",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGameDeployWorkflowResponse>(await this.callApi(params, req, runtime), new CreateGameDeployWorkflowResponse({}));
  }

  async createGameDeployWorkflow(request: CreateGameDeployWorkflowRequest): Promise<CreateGameDeployWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGameDeployWorkflowWithOptions(request, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDomain)) {
      query["AccountDomain"] = request.accountDomain;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.buyerAccountId)) {
      query["BuyerAccountId"] = request.buyerAccountId;
    }

    if (!Util.isUnset(request.idempotentCode)) {
      query["IdempotentCode"] = request.idempotentCode;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.originPrice)) {
      query["OriginPrice"] = request.originPrice;
    }

    if (!Util.isUnset(request.settlementPrice)) {
      query["SettlementPrice"] = request.settlementPrice;
    }

    if (!Util.isUnset(request.skuId)) {
      query["SkuId"] = request.skuId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrder",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderResponse>(await this.callApi(params, req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2020-07-28",
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

  async createTokenWithOptions(request: CreateTokenRequest, runtime: $Util.RuntimeOptions): Promise<CreateTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.currentToken)) {
      query["CurrentToken"] = request.currentToken;
    }

    if (!Util.isUnset(request.session)) {
      query["Session"] = request.session;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateToken",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTokenResponse>(await this.callApi(params, req, runtime), new CreateTokenResponse({}));
  }

  async createToken(request: CreateTokenRequest): Promise<CreateTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTokenWithOptions(request, runtime);
  }

  async deleteGameWithOptions(request: DeleteGameRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGame",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGameResponse>(await this.callApi(params, req, runtime), new DeleteGameResponse({}));
  }

  async deleteGame(request: DeleteGameRequest): Promise<DeleteGameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGameWithOptions(request, runtime);
  }

  async deleteGameVersionWithOptions(request: DeleteGameVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGameVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGameVersion",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGameVersionResponse>(await this.callApi(params, req, runtime), new DeleteGameVersionResponse({}));
  }

  async deleteGameVersion(request: DeleteGameVersionRequest): Promise<DeleteGameVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGameVersionWithOptions(request, runtime);
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
      version: "2020-07-28",
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

  async deliveryOrderWithOptions(request: DeliveryOrderRequest, runtime: $Util.RuntimeOptions): Promise<DeliveryOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDomain)) {
      query["AccountDomain"] = request.accountDomain;
    }

    if (!Util.isUnset(request.buyerAccountId)) {
      query["BuyerAccountId"] = request.buyerAccountId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeliveryOrder",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeliveryOrderResponse>(await this.callApi(params, req, runtime), new DeliveryOrderResponse({}));
  }

  async deliveryOrder(request: DeliveryOrderRequest): Promise<DeliveryOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deliveryOrderWithOptions(request, runtime);
  }

  async dispatchGameSlotWithOptions(request: DispatchGameSlotRequest, runtime: $Util.RuntimeOptions): Promise<DispatchGameSlotResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.bizParam)) {
      body["BizParam"] = request.bizParam;
    }

    if (!Util.isUnset(request.cancel)) {
      body["Cancel"] = request.cancel;
    }

    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.gameCommand)) {
      body["GameCommand"] = request.gameCommand;
    }

    if (!Util.isUnset(request.gameId)) {
      body["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.gameSession)) {
      body["GameSession"] = request.gameSession;
    }

    if (!Util.isUnset(request.gameStartParam)) {
      body["GameStartParam"] = request.gameStartParam;
    }

    if (!Util.isUnset(request.reconnect)) {
      body["Reconnect"] = request.reconnect;
    }

    if (!Util.isUnset(request.regionName)) {
      body["RegionName"] = request.regionName;
    }

    if (!Util.isUnset(request.systemInfo)) {
      body["SystemInfo"] = request.systemInfo;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userLevel)) {
      body["UserLevel"] = request.userLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DispatchGameSlot",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DispatchGameSlotResponse>(await this.callApi(params, req, runtime), new DispatchGameSlotResponse({}));
  }

  async dispatchGameSlot(request: DispatchGameSlotRequest): Promise<DispatchGameSlotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dispatchGameSlotWithOptions(request, runtime);
  }

  async getGameCcuWithOptions(request: GetGameCcuRequest, runtime: $Util.RuntimeOptions): Promise<GetGameCcuResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGameCcu",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGameCcuResponse>(await this.callApi(params, req, runtime), new GetGameCcuResponse({}));
  }

  async getGameCcu(request: GetGameCcuRequest): Promise<GetGameCcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGameCcuWithOptions(request, runtime);
  }

  async getGameStatusWithOptions(request: GetGameStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetGameStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameSession)) {
      query["GameSession"] = request.gameSession;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGameStatus",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGameStatusResponse>(await this.callApi(params, req, runtime), new GetGameStatusResponse({}));
  }

  async getGameStatus(request: GetGameStatusRequest): Promise<GetGameStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGameStatusWithOptions(request, runtime);
  }

  async getGameStockWithOptions(request: GetGameStockRequest, runtime: $Util.RuntimeOptions): Promise<GetGameStockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGameStock",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGameStockResponse>(await this.callApi(params, req, runtime), new GetGameStockResponse({}));
  }

  async getGameStock(request: GetGameStockRequest): Promise<GetGameStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGameStockWithOptions(request, runtime);
  }

  async getGameTrialSurplusDurationWithOptions(request: GetGameTrialSurplusDurationRequest, runtime: $Util.RuntimeOptions): Promise<GetGameTrialSurplusDurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGameTrialSurplusDuration",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGameTrialSurplusDurationResponse>(await this.callApi(params, req, runtime), new GetGameTrialSurplusDurationResponse({}));
  }

  async getGameTrialSurplusDuration(request: GetGameTrialSurplusDurationRequest): Promise<GetGameTrialSurplusDurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGameTrialSurplusDurationWithOptions(request, runtime);
  }

  async getGameVersionWithOptions(request: GetGameVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetGameVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGameVersion",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGameVersionResponse>(await this.callApi(params, req, runtime), new GetGameVersionResponse({}));
  }

  async getGameVersion(request: GetGameVersionRequest): Promise<GetGameVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGameVersionWithOptions(request, runtime);
  }

  async getGameVersionProgressWithOptions(request: GetGameVersionProgressRequest, runtime: $Util.RuntimeOptions): Promise<GetGameVersionProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGameVersionProgress",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGameVersionProgressResponse>(await this.callApi(params, req, runtime), new GetGameVersionProgressResponse({}));
  }

  async getGameVersionProgress(request: GetGameVersionProgressRequest): Promise<GetGameVersionProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGameVersionProgressWithOptions(request, runtime);
  }

  async getItemWithOptions(request: GetItemRequest, runtime: $Util.RuntimeOptions): Promise<GetItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetItem",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetItemResponse>(await this.callApi(params, req, runtime), new GetItemResponse({}));
  }

  async getItem(request: GetItemRequest): Promise<GetItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getItemWithOptions(request, runtime);
  }

  async getOutAccountBindDetailWithOptions(request: GetOutAccountBindDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetOutAccountBindDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDomain)) {
      query["AccountDomain"] = request.accountDomain;
    }

    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.outAccountType)) {
      query["OutAccountType"] = request.outAccountType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOutAccountBindDetail",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOutAccountBindDetailResponse>(await this.callApi(params, req, runtime), new GetOutAccountBindDetailResponse({}));
  }

  async getOutAccountBindDetail(request: GetOutAccountBindDetailRequest): Promise<GetOutAccountBindDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOutAccountBindDetailWithOptions(request, runtime);
  }

  async getQueuingSizeWithOptions(request: GetQueuingSizeRequest, runtime: $Util.RuntimeOptions): Promise<GetQueuingSizeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.userLevel)) {
      query["UserLevel"] = request.userLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueuingSize",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueuingSizeResponse>(await this.callApi(params, req, runtime), new GetQueuingSizeResponse({}));
  }

  async getQueuingSize(request: GetQueuingSizeRequest): Promise<GetQueuingSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueuingSizeWithOptions(request, runtime);
  }

  async getSessionWithOptions(request: GetSessionRequest, runtime: $Util.RuntimeOptions): Promise<GetSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSession",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSessionResponse>(await this.callApi(params, req, runtime), new GetSessionResponse({}));
  }

  async getSession(request: GetSessionRequest): Promise<GetSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSessionWithOptions(request, runtime);
  }

  async getStopGameTokenWithOptions(request: GetStopGameTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetStopGameTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStopGameToken",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStopGameTokenResponse>(await this.callApi(params, req, runtime), new GetStopGameTokenResponse({}));
  }

  async getStopGameToken(request: GetStopGameTokenRequest): Promise<GetStopGameTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStopGameTokenWithOptions(request, runtime);
  }

  async kickPlayerWithOptions(request: KickPlayerRequest, runtime: $Util.RuntimeOptions): Promise<KickPlayerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameSession)) {
      query["GameSession"] = request.gameSession;
    }

    if (!Util.isUnset(request.kickedAccountId)) {
      query["KickedAccountId"] = request.kickedAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KickPlayer",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KickPlayerResponse>(await this.callApi(params, req, runtime), new KickPlayerResponse({}));
  }

  async kickPlayer(request: KickPlayerRequest): Promise<KickPlayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.kickPlayerWithOptions(request, runtime);
  }

  async listBoughtGamesWithOptions(request: ListBoughtGamesRequest, runtime: $Util.RuntimeOptions): Promise<ListBoughtGamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDomain)) {
      query["AccountDomain"] = request.accountDomain;
    }

    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBoughtGames",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBoughtGamesResponse>(await this.callApi(params, req, runtime), new ListBoughtGamesResponse({}));
  }

  async listBoughtGames(request: ListBoughtGamesRequest): Promise<ListBoughtGamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBoughtGamesWithOptions(request, runtime);
  }

  async listContainerStatusWithOptions(request: ListContainerStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListContainerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameSessionIdList)) {
      query["GameSessionIdList"] = request.gameSessionIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListContainerStatus",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListContainerStatusResponse>(await this.callApi(params, req, runtime), new ListContainerStatusResponse({}));
  }

  async listContainerStatus(request: ListContainerStatusRequest): Promise<ListContainerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerStatusWithOptions(request, runtime);
  }

  async listDeployableInstancesWithOptions(request: ListDeployableInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeployableInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployableInstances",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeployableInstancesResponse>(await this.callApi(params, req, runtime), new ListDeployableInstancesResponse({}));
  }

  async listDeployableInstances(request: ListDeployableInstancesRequest): Promise<ListDeployableInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeployableInstancesWithOptions(request, runtime);
  }

  async listGameServerIpWithOptions(request: ListGameServerIpRequest, runtime: $Util.RuntimeOptions): Promise<ListGameServerIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGameServerIp",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGameServerIpResponse>(await this.callApi(params, req, runtime), new ListGameServerIpResponse({}));
  }

  async listGameServerIp(request: ListGameServerIpRequest): Promise<ListGameServerIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGameServerIpWithOptions(request, runtime);
  }

  async listGameVersionsWithOptions(request: ListGameVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListGameVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGameVersions",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGameVersionsResponse>(await this.callApi(params, req, runtime), new ListGameVersionsResponse({}));
  }

  async listGameVersions(request: ListGameVersionsRequest): Promise<ListGameVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGameVersionsWithOptions(request, runtime);
  }

  async listGamesWithOptions(request: ListGamesRequest, runtime: $Util.RuntimeOptions): Promise<ListGamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGames",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGamesResponse>(await this.callApi(params, req, runtime), new ListGamesResponse({}));
  }

  async listGames(request: ListGamesRequest): Promise<ListGamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGamesWithOptions(request, runtime);
  }

  async listHistoryContainerStatusWithOptions(request: ListHistoryContainerStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListHistoryContainerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lastGameSessionId)) {
      query["LastGameSessionId"] = request.lastGameSessionId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHistoryContainerStatus",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHistoryContainerStatusResponse>(await this.callApi(params, req, runtime), new ListHistoryContainerStatusResponse({}));
  }

  async listHistoryContainerStatus(request: ListHistoryContainerStatusRequest): Promise<ListHistoryContainerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHistoryContainerStatusWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async queryGameWithOptions(request: QueryGameRequest, runtime: $Util.RuntimeOptions): Promise<QueryGameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGame",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGameResponse>(await this.callApi(params, req, runtime), new QueryGameResponse({}));
  }

  async queryGame(request: QueryGameRequest): Promise<QueryGameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGameWithOptions(request, runtime);
  }

  async queryGameHangWithOptions(request: QueryGameHangRequest, runtime: $Util.RuntimeOptions): Promise<QueryGameHangResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.gameSession)) {
      body["GameSession"] = request.gameSession;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryGameHang",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGameHangResponse>(await this.callApi(params, req, runtime), new QueryGameHangResponse({}));
  }

  async queryGameHang(request: QueryGameHangRequest): Promise<QueryGameHangResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGameHangWithOptions(request, runtime);
  }

  async queryItemsWithOptions(request: QueryItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItems",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemsResponse>(await this.callApi(params, req, runtime), new QueryItemsResponse({}));
  }

  async queryItems(request: QueryItemsRequest): Promise<QueryItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemsWithOptions(request, runtime);
  }

  async queryOrderWithOptions(request: QueryOrderRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDomain)) {
      query["AccountDomain"] = request.accountDomain;
    }

    if (!Util.isUnset(request.buyerAccountId)) {
      query["BuyerAccountId"] = request.buyerAccountId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrder",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderResponse>(await this.callApi(params, req, runtime), new QueryOrderResponse({}));
  }

  async queryOrder(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderWithOptions(request, runtime);
  }

  async queryOutAccountBindStatusWithOptions(request: QueryOutAccountBindStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryOutAccountBindStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDomain)) {
      query["AccountDomain"] = request.accountDomain;
    }

    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOutAccountBindStatus",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOutAccountBindStatusResponse>(await this.callApi(params, req, runtime), new QueryOutAccountBindStatusResponse({}));
  }

  async queryOutAccountBindStatus(request: QueryOutAccountBindStatusRequest): Promise<QueryOutAccountBindStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOutAccountBindStatusWithOptions(request, runtime);
  }

  async queryProjectWithOptions(request: QueryProjectRequest, runtime: $Util.RuntimeOptions): Promise<QueryProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryProject",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryProjectResponse>(await this.callApi(params, req, runtime), new QueryProjectResponse({}));
  }

  async queryProject(request: QueryProjectRequest): Promise<QueryProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProjectWithOptions(request, runtime);
  }

  async queryTenantWithOptions(request: QueryTenantRequest, runtime: $Util.RuntimeOptions): Promise<QueryTenantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.param)) {
      query["Param"] = request.param;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTenant",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTenantResponse>(await this.callApi(params, req, runtime), new QueryTenantResponse({}));
  }

  async queryTenant(request: QueryTenantRequest): Promise<QueryTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTenantWithOptions(request, runtime);
  }

  async removeGameFromProjectWithOptions(request: RemoveGameFromProjectRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGameFromProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveGameFromProject",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveGameFromProjectResponse>(await this.callApi(params, req, runtime), new RemoveGameFromProjectResponse({}));
  }

  async removeGameFromProject(request: RemoveGameFromProjectRequest): Promise<RemoveGameFromProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGameFromProjectWithOptions(request, runtime);
  }

  async setGameAliveWithOptions(request: SetGameAliveRequest, runtime: $Util.RuntimeOptions): Promise<SetGameAliveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.gameSession)) {
      body["GameSession"] = request.gameSession;
    }

    if (!Util.isUnset(request.keepAlive)) {
      body["KeepAlive"] = request.keepAlive;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetGameAlive",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGameAliveResponse>(await this.callApi(params, req, runtime), new SetGameAliveResponse({}));
  }

  async setGameAlive(request: SetGameAliveRequest): Promise<SetGameAliveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGameAliveWithOptions(request, runtime);
  }

  async setGameHangWithOptions(request: SetGameHangRequest, runtime: $Util.RuntimeOptions): Promise<SetGameHangResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.gameSession)) {
      body["GameSession"] = request.gameSession;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetGameHang",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGameHangResponse>(await this.callApi(params, req, runtime), new SetGameHangResponse({}));
  }

  async setGameHang(request: SetGameHangRequest): Promise<SetGameHangResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGameHangWithOptions(request, runtime);
  }

  async skipTrialPolicyWithOptions(request: SkipTrialPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SkipTrialPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameSessionId)) {
      query["GameSessionId"] = request.gameSessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SkipTrialPolicy",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SkipTrialPolicyResponse>(await this.callApi(params, req, runtime), new SkipTrialPolicyResponse({}));
  }

  async skipTrialPolicy(request: SkipTrialPolicyRequest): Promise<SkipTrialPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.skipTrialPolicyWithOptions(request, runtime);
  }

  async startGameLiveWithOptions(tmpReq: StartGameLiveRequest, runtime: $Util.RuntimeOptions): Promise<StartGameLiveResponse> {
    Util.validateModel(tmpReq);
    let request = new StartGameLiveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extension)) {
      request.extensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extension, "Extension", "json");
    }

    let query = { };
    if (!Util.isUnset(request.extensionShrink)) {
      query["Extension"] = request.extensionShrink;
    }

    if (!Util.isUnset(request.gameSession)) {
      query["GameSession"] = request.gameSession;
    }

    if (!Util.isUnset(request.videoPushAddress)) {
      query["VideoPushAddress"] = request.videoPushAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartGameLive",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartGameLiveResponse>(await this.callApi(params, req, runtime), new StartGameLiveResponse({}));
  }

  async startGameLive(request: StartGameLiveRequest): Promise<StartGameLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startGameLiveWithOptions(request, runtime);
  }

  async stopGameLiveWithOptions(request: StopGameLiveRequest, runtime: $Util.RuntimeOptions): Promise<StopGameLiveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gameSession)) {
      query["GameSession"] = request.gameSession;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopGameLive",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopGameLiveResponse>(await this.callApi(params, req, runtime), new StopGameLiveResponse({}));
  }

  async stopGameLive(request: StopGameLiveRequest): Promise<StopGameLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopGameLiveWithOptions(request, runtime);
  }

  async stopGameSessionWithOptions(request: StopGameSessionRequest, runtime: $Util.RuntimeOptions): Promise<StopGameSessionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.bizParam)) {
      body["BizParam"] = request.bizParam;
    }

    if (!Util.isUnset(request.gameId)) {
      body["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.gameSession)) {
      body["GameSession"] = request.gameSession;
    }

    if (!Util.isUnset(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopGameSession",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopGameSessionResponse>(await this.callApi(params, req, runtime), new StopGameSessionResponse({}));
  }

  async stopGameSession(request: StopGameSessionRequest): Promise<StopGameSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopGameSessionWithOptions(request, runtime);
  }

  async submitDeploymentWithOptions(request: SubmitDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDeploymentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cloudGameInstanceIds)) {
      query["CloudGameInstanceIds"] = request.cloudGameInstanceIds;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDeployment",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDeploymentResponse>(await this.callApi(params, req, runtime), new SubmitDeploymentResponse({}));
  }

  async submitDeployment(request: SubmitDeploymentRequest): Promise<SubmitDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDeploymentWithOptions(request, runtime);
  }

  async submitInternalPurchaseChargeDataWithOptions(request: SubmitInternalPurchaseChargeDataRequest, runtime: $Util.RuntimeOptions): Promise<SubmitInternalPurchaseChargeDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeUserRetentionRateOneDay)) {
      query["ActiveUserRetentionRateOneDay"] = request.activeUserRetentionRateOneDay;
    }

    if (!Util.isUnset(request.activeUserRetentionRateSevenDay)) {
      query["ActiveUserRetentionRateSevenDay"] = request.activeUserRetentionRateSevenDay;
    }

    if (!Util.isUnset(request.activeUserRetentionRateThirtyDay)) {
      query["ActiveUserRetentionRateThirtyDay"] = request.activeUserRetentionRateThirtyDay;
    }

    if (!Util.isUnset(request.arpu)) {
      query["Arpu"] = request.arpu;
    }

    if (!Util.isUnset(request.chargeDate)) {
      query["ChargeDate"] = request.chargeDate;
    }

    if (!Util.isUnset(request.dau)) {
      query["Dau"] = request.dau;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.mau)) {
      query["Mau"] = request.mau;
    }

    if (!Util.isUnset(request.newUserRetentionRateOneDay)) {
      query["NewUserRetentionRateOneDay"] = request.newUserRetentionRateOneDay;
    }

    if (!Util.isUnset(request.newUserRetentionRateSevenDay)) {
      query["NewUserRetentionRateSevenDay"] = request.newUserRetentionRateSevenDay;
    }

    if (!Util.isUnset(request.newUserRetentionRateThirtyDay)) {
      query["NewUserRetentionRateThirtyDay"] = request.newUserRetentionRateThirtyDay;
    }

    if (!Util.isUnset(request.paymentConversionRate)) {
      query["PaymentConversionRate"] = request.paymentConversionRate;
    }

    if (!Util.isUnset(request.playTimeAverageOneDay)) {
      query["PlayTimeAverageOneDay"] = request.playTimeAverageOneDay;
    }

    if (!Util.isUnset(request.playTimeAverageThirtyDay)) {
      query["PlayTimeAverageThirtyDay"] = request.playTimeAverageThirtyDay;
    }

    if (!Util.isUnset(request.playTimeNinetyPointsOneDay)) {
      query["PlayTimeNinetyPointsOneDay"] = request.playTimeNinetyPointsOneDay;
    }

    if (!Util.isUnset(request.playTimeNinetyPointsThirtyDay)) {
      query["PlayTimeNinetyPointsThirtyDay"] = request.playTimeNinetyPointsThirtyDay;
    }

    if (!Util.isUnset(request.playTimeRangeOneDay)) {
      query["PlayTimeRangeOneDay"] = request.playTimeRangeOneDay;
    }

    if (!Util.isUnset(request.playTimeRangeThirtyDay)) {
      query["PlayTimeRangeThirtyDay"] = request.playTimeRangeThirtyDay;
    }

    if (!Util.isUnset(request.userActivationRate)) {
      query["UserActivationRate"] = request.userActivationRate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitInternalPurchaseChargeData",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitInternalPurchaseChargeDataResponse>(await this.callApi(params, req, runtime), new SubmitInternalPurchaseChargeDataResponse({}));
  }

  async submitInternalPurchaseChargeData(request: SubmitInternalPurchaseChargeDataRequest): Promise<SubmitInternalPurchaseChargeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitInternalPurchaseChargeDataWithOptions(request, runtime);
  }

  async submitInternalPurchaseOrdersWithOptions(request: SubmitInternalPurchaseOrdersRequest, runtime: $Util.RuntimeOptions): Promise<SubmitInternalPurchaseOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderList)) {
      query["OrderList"] = request.orderList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitInternalPurchaseOrders",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitInternalPurchaseOrdersResponse>(await this.callApi(params, req, runtime), new SubmitInternalPurchaseOrdersResponse({}));
  }

  async submitInternalPurchaseOrders(request: SubmitInternalPurchaseOrdersRequest): Promise<SubmitInternalPurchaseOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitInternalPurchaseOrdersWithOptions(request, runtime);
  }

  async submitInternalPurchaseReadyFlagWithOptions(request: SubmitInternalPurchaseReadyFlagRequest, runtime: $Util.RuntimeOptions): Promise<SubmitInternalPurchaseReadyFlagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchInfoList)) {
      query["BatchInfoList"] = request.batchInfoList;
    }

    if (!Util.isUnset(request.chargeDate)) {
      query["ChargeDate"] = request.chargeDate;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.orderTotalCount)) {
      query["OrderTotalCount"] = request.orderTotalCount;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitInternalPurchaseReadyFlag",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitInternalPurchaseReadyFlagResponse>(await this.callApi(params, req, runtime), new SubmitInternalPurchaseReadyFlagResponse({}));
  }

  async submitInternalPurchaseReadyFlag(request: SubmitInternalPurchaseReadyFlagRequest): Promise<SubmitInternalPurchaseReadyFlagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitInternalPurchaseReadyFlagWithOptions(request, runtime);
  }

  async uploadGameVersionByDownloadWithOptions(request: UploadGameVersionByDownloadRequest, runtime: $Util.RuntimeOptions): Promise<UploadGameVersionByDownloadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.downloadType)) {
      query["DownloadType"] = request.downloadType;
    }

    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.gameVersion)) {
      query["GameVersion"] = request.gameVersion;
    }

    if (!Util.isUnset(request.hash)) {
      query["Hash"] = request.hash;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadGameVersionByDownload",
      version: "2020-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadGameVersionByDownloadResponse>(await this.callApi(params, req, runtime), new UploadGameVersionByDownloadResponse({}));
  }

  async uploadGameVersionByDownload(request: UploadGameVersionByDownloadRequest): Promise<UploadGameVersionByDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadGameVersionByDownloadWithOptions(request, runtime);
  }

}
