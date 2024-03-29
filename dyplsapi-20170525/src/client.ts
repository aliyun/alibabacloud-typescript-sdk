// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAxnTrackNoRequest extends $tea.Model {
  ownerId?: number;
  phoneNoX?: string;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subsId?: string;
  trackNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
      trackNo: 'trackNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'string',
      trackNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAxnTrackNoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAxnTrackNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAxnTrackNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddAxnTrackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistRequest extends $tea.Model {
  blackNo?: string;
  blackType?: string;
  poolKey?: string;
  remark?: string;
  wayControl?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      blackType: 'BlackType',
      poolKey: 'PoolKey',
      remark: 'Remark',
      wayControl: 'WayControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      blackType: 'string',
      poolKey: 'string',
      remark: 'string',
      wayControl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSecretBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSecretBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbRequest extends $tea.Model {
  ASRModelId?: string;
  ASRStatus?: boolean;
  callDisplayType?: number;
  callRestrict?: string;
  callTimeout?: number;
  dtmfConfig?: string;
  expectCity?: string;
  expiration?: string;
  isRecordingEnabled?: boolean;
  outId?: string;
  outOrderId?: string;
  ownerId?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      callTimeout: 'CallTimeout',
      dtmfConfig: 'DtmfConfig',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      callTimeout: 'number',
      dtmfConfig: 'string',
      expectCity: 'string',
      expiration: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretBindDTO?: BindAxbResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxbResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindAxbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindAxbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgRequest extends $tea.Model {
  ASRModelId?: string;
  ASRStatus?: boolean;
  callDisplayType?: number;
  callRestrict?: string;
  expectCity?: string;
  expiration?: string;
  groupId?: string;
  isRecordingEnabled?: boolean;
  outId?: string;
  outOrderId?: string;
  ownerId?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expectCity: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretBindDTO?: BindAxgResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxgResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindAxgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindAxgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnRequest extends $tea.Model {
  ASRModelId?: string;
  ASRStatus?: boolean;
  callDisplayType?: number;
  callRestrict?: string;
  callTimeout?: number;
  expectCity?: string;
  expiration?: string;
  isRecordingEnabled?: boolean;
  noType?: string;
  outId?: string;
  outOrderId?: string;
  ownerId?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      callTimeout: 'CallTimeout',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      isRecordingEnabled: 'IsRecordingEnabled',
      noType: 'NoType',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      callTimeout: 'number',
      expectCity: 'string',
      expiration: 'string',
      isRecordingEnabled: 'boolean',
      noType: 'string',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretBindDTO?: BindAxnResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxnResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindAxnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindAxnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionRequest extends $tea.Model {
  ASRModelId?: string;
  ASRStatus?: boolean;
  callDisplayType?: number;
  callRestrict?: string;
  expectCity?: string;
  expiration?: string;
  extension?: string;
  isRecordingEnabled?: boolean;
  outId?: string;
  outOrderId?: string;
  ownerId?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      extension: 'Extension',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expectCity: 'string',
      expiration: 'string',
      extension: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretBindDTO?: BindAxnExtensionResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxnExtensionResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindAxnExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindAxnExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgRequest extends $tea.Model {
  axgBindList?: BindBatchAxgRequestAxgBindList[];
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      axgBindList: 'AxgBindList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axgBindList: { 'type': 'array', 'itemType': BindBatchAxgRequestAxgBindList },
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgShrinkRequest extends $tea.Model {
  axgBindListShrink?: string;
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      axgBindListShrink: 'AxgBindList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axgBindListShrink: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretBindList?: BindBatchAxgResponseBodySecretBindList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindList: 'SecretBindList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindList: BindBatchAxgResponseBodySecretBindList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindBatchAxgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindBatchAxgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoRequest extends $tea.Model {
  city?: string;
  displayPool?: boolean;
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      displayPool: 'DisplayPool',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      displayPool: 'boolean',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretBuyInfoDTO?: BuySecretNoResponseBodySecretBuyInfoDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBuyInfoDTO: 'SecretBuyInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBuyInfoDTO: BuySecretNoResponseBodySecretBuyInfoDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BuySecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BuySecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillRequest extends $tea.Model {
  cancelDesc?: string;
  outerOrderCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cancelDesc: 'CancelDesc',
      outerOrderCode: 'OuterOrderCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelDesc: 'string',
      outerOrderCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillResponseBody extends $tea.Model {
  code?: string;
  data?: CancelPickUpWaybillResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CancelPickUpWaybillResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelPickUpWaybillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelPickUpWaybillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupRequest extends $tea.Model {
  name?: string;
  numbers?: string;
  ownerId?: number;
  poolKey?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      numbers: 'string',
      ownerId: 'number',
      poolKey: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupResponseBody extends $tea.Model {
  code?: string;
  groupId?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupId: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAxgGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequest extends $tea.Model {
  appointGotEndTime?: string;
  appointGotStartTime?: string;
  bizType?: number;
  consigneeAddress?: CreatePickUpWaybillRequestConsigneeAddress;
  consigneeMobile?: string;
  consigneeName?: string;
  consigneePhone?: string;
  cpCode?: string;
  goodsInfos?: CreatePickUpWaybillRequestGoodsInfos[];
  orderChannels?: string;
  outerOrderCode?: string;
  remark?: string;
  sendAddress?: CreatePickUpWaybillRequestSendAddress;
  sendMobile?: string;
  sendName?: string;
  sendPhone?: string;
  static names(): { [key: string]: string } {
    return {
      appointGotEndTime: 'AppointGotEndTime',
      appointGotStartTime: 'AppointGotStartTime',
      bizType: 'BizType',
      consigneeAddress: 'ConsigneeAddress',
      consigneeMobile: 'ConsigneeMobile',
      consigneeName: 'ConsigneeName',
      consigneePhone: 'ConsigneePhone',
      cpCode: 'CpCode',
      goodsInfos: 'GoodsInfos',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      remark: 'Remark',
      sendAddress: 'SendAddress',
      sendMobile: 'SendMobile',
      sendName: 'SendName',
      sendPhone: 'SendPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointGotEndTime: 'string',
      appointGotStartTime: 'string',
      bizType: 'number',
      consigneeAddress: CreatePickUpWaybillRequestConsigneeAddress,
      consigneeMobile: 'string',
      consigneeName: 'string',
      consigneePhone: 'string',
      cpCode: 'string',
      goodsInfos: { 'type': 'array', 'itemType': CreatePickUpWaybillRequestGoodsInfos },
      orderChannels: 'string',
      outerOrderCode: 'string',
      remark: 'string',
      sendAddress: CreatePickUpWaybillRequestSendAddress,
      sendMobile: 'string',
      sendName: 'string',
      sendPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillShrinkRequest extends $tea.Model {
  appointGotEndTime?: string;
  appointGotStartTime?: string;
  bizType?: number;
  consigneeAddressShrink?: string;
  consigneeMobile?: string;
  consigneeName?: string;
  consigneePhone?: string;
  cpCode?: string;
  goodsInfosShrink?: string;
  orderChannels?: string;
  outerOrderCode?: string;
  remark?: string;
  sendAddressShrink?: string;
  sendMobile?: string;
  sendName?: string;
  sendPhone?: string;
  static names(): { [key: string]: string } {
    return {
      appointGotEndTime: 'AppointGotEndTime',
      appointGotStartTime: 'AppointGotStartTime',
      bizType: 'BizType',
      consigneeAddressShrink: 'ConsigneeAddress',
      consigneeMobile: 'ConsigneeMobile',
      consigneeName: 'ConsigneeName',
      consigneePhone: 'ConsigneePhone',
      cpCode: 'CpCode',
      goodsInfosShrink: 'GoodsInfos',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      remark: 'Remark',
      sendAddressShrink: 'SendAddress',
      sendMobile: 'SendMobile',
      sendName: 'SendName',
      sendPhone: 'SendPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointGotEndTime: 'string',
      appointGotStartTime: 'string',
      bizType: 'number',
      consigneeAddressShrink: 'string',
      consigneeMobile: 'string',
      consigneeName: 'string',
      consigneePhone: 'string',
      cpCode: 'string',
      goodsInfosShrink: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      remark: 'string',
      sendAddressShrink: 'string',
      sendMobile: 'string',
      sendName: 'string',
      sendPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillResponseBody extends $tea.Model {
  data?: CreatePickUpWaybillResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePickUpWaybillResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePickUpWaybillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePickUpWaybillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequest extends $tea.Model {
  consigneeInfo?: CreatePickUpWaybillPreQueryRequestConsigneeInfo;
  cpCode?: string;
  orderChannels?: string;
  outerOrderCode?: string;
  preWeight?: string;
  senderInfo?: CreatePickUpWaybillPreQueryRequestSenderInfo;
  static names(): { [key: string]: string } {
    return {
      consigneeInfo: 'ConsigneeInfo',
      cpCode: 'CpCode',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      preWeight: 'PreWeight',
      senderInfo: 'SenderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consigneeInfo: CreatePickUpWaybillPreQueryRequestConsigneeInfo,
      cpCode: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      preWeight: 'string',
      senderInfo: CreatePickUpWaybillPreQueryRequestSenderInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryShrinkRequest extends $tea.Model {
  consigneeInfoShrink?: string;
  cpCode?: string;
  orderChannels?: string;
  outerOrderCode?: string;
  preWeight?: string;
  senderInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      consigneeInfoShrink: 'ConsigneeInfo',
      cpCode: 'CpCode',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      preWeight: 'PreWeight',
      senderInfoShrink: 'SenderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consigneeInfoShrink: 'string',
      cpCode: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      preWeight: 'string',
      senderInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBody extends $tea.Model {
  data?: CreatePickUpWaybillPreQueryResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePickUpWaybillPreQueryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePickUpWaybillPreQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePickUpWaybillPreQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAxgGroupRequest extends $tea.Model {
  groupId?: number;
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAxgGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAxgGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAxgGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistRequest extends $tea.Model {
  blackNo?: string;
  blackType?: string;
  poolKey?: string;
  remark?: string;
  wayControl?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      blackType: 'BlackType',
      poolKey: 'PoolKey',
      remark: 'Remark',
      wayControl: 'WayControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      blackType: 'string',
      poolKey: 'string',
      remark: 'string',
      wayControl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecretBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecretBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailRequest extends $tea.Model {
  callId?: string;
  callTime?: string;
  poolKey?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      poolKey: 'PoolKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      poolKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetSecretAsrDetailResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSecretAsrDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSecretAsrDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSecretAsrDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlRequest extends $tea.Model {
  callId?: string;
  callTime?: string;
  checkSubs?: boolean;
  ownerId?: number;
  partnerKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      checkSubs: 'CheckSubs',
      ownerId: 'OwnerId',
      partnerKey: 'PartnerKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      checkSubs: 'boolean',
      ownerId: 'number',
      partnerKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetTotalPublicUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTotalPublicUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTotalPublicUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTotalPublicUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoRequest extends $tea.Model {
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LockSecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LockSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupRequest extends $tea.Model {
  groupId?: number;
  numbers?: string;
  operateType?: string;
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      numbers: 'Numbers',
      operateType: 'OperateType',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      numbers: 'string',
      operateType: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OperateAxgGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OperateAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoRequest extends $tea.Model {
  blackNo?: string;
  operateType?: string;
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      operateType: 'OperateType',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      operateType: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OperateBlackNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OperateBlackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoRequest extends $tea.Model {
  cabinetNo?: string;
  ownerId?: number;
  phoneNoX?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trackNo?: string;
  static names(): { [key: string]: string } {
    return {
      cabinetNo: 'CabinetNo',
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trackNo: 'trackNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinetNo: 'string',
      ownerId: 'number',
      phoneNoX: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trackNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: QueryPhoneNoAByTrackNoResponseBodyModule[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': QueryPhoneNoAByTrackNoResponseBodyModule },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPhoneNoAByTrackNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPhoneNoAByTrackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlRequest extends $tea.Model {
  callId?: string;
  callTime?: string;
  ownerId?: number;
  poolKey?: string;
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      ownerId: 'number',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  downloadUrl?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadUrl: 'DownloadUrl',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadUrl: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordFileDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordFileDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailRequest extends $tea.Model {
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretNoInfoDTO?: QuerySecretNoDetailResponseBodySecretNoInfoDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretNoInfoDTO: 'SecretNoInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretNoInfoDTO: QuerySecretNoDetailResponseBodySecretNoInfoDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySecretNoDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySecretNoDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainRequest extends $tea.Model {
  city?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretRemainDTO?: QuerySecretNoRemainResponseBodySecretRemainDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretRemainDTO: 'SecretRemainDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretRemainDTO: QuerySecretNoRemainResponseBodySecretRemainDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySecretNoRemainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySecretNoRemainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdRequest extends $tea.Model {
  ownerId?: number;
  phoneNoX?: string;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySubsIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySubsIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailRequest extends $tea.Model {
  ownerId?: number;
  phoneNoX?: string;
  poolKey?: string;
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  secretBindDetailDTO?: QuerySubscriptionDetailResponseBodySecretBindDetailDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDetailDTO: 'SecretBindDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDetailDTO: QuerySubscriptionDetailResponseBodySecretBindDetailDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySubscriptionDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySubscriptionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoRequest extends $tea.Model {
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseSecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionRequest extends $tea.Model {
  ownerId?: number;
  poolKey?: string;
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionResponseBody extends $tea.Model {
  chargeId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeId: 'ChargeId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoRequest extends $tea.Model {
  ownerId?: number;
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnlockSecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnlockSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequest extends $tea.Model {
  ASRModelId?: string;
  ASRStatus?: boolean;
  callDisplayType?: number;
  callRestrict?: string;
  expiration?: string;
  groupId?: string;
  isRecordingEnabled?: boolean;
  operateType?: string;
  outId?: string;
  ownerId?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  poolKey?: string;
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ringConfig?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      operateType: 'OperateType',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      operateType: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  secretNo?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  secretNo?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  secretNo?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  secretNo?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgRequestAxgBindList extends $tea.Model {
  ASRModelId?: string;
  ASRStatus?: boolean;
  callDisplayType?: number;
  callRestrict?: string;
  expectCity?: string;
  expiration?: string;
  groupId?: string;
  isRecordingEnabled?: boolean;
  outId?: string;
  outOrderId?: string;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expectCity: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponseBodySecretBindListSecretBind extends $tea.Model {
  code?: string;
  extension?: string;
  groupId?: string;
  message?: string;
  phoneNoA?: string;
  secretNo?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extension: 'Extension',
      groupId: 'GroupId',
      message: 'Message',
      phoneNoA: 'PhoneNoA',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extension: 'string',
      groupId: 'string',
      message: 'string',
      phoneNoA: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponseBodySecretBindList extends $tea.Model {
  secretBind?: BindBatchAxgResponseBodySecretBindListSecretBind[];
  static names(): { [key: string]: string } {
    return {
      secretBind: 'SecretBind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBind: { 'type': 'array', 'itemType': BindBatchAxgResponseBodySecretBindListSecretBind },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponseBodySecretBuyInfoDTO extends $tea.Model {
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillResponseBodyData extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequestConsigneeAddress extends $tea.Model {
  addressDetail?: string;
  areaName?: string;
  cityName?: string;
  provinceName?: string;
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequestGoodsInfos extends $tea.Model {
  name?: string;
  quantity?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      quantity: 'Quantity',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quantity: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequestSendAddress extends $tea.Model {
  addressDetail?: string;
  areaName?: string;
  cityName?: string;
  provinceName?: string;
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillResponseBodyData extends $tea.Model {
  cpCode?: string;
  errorCode?: string;
  errorMsg?: string;
  gotCode?: string;
  mailNo?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      cpCode: 'CpCode',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      gotCode: 'GotCode',
      mailNo: 'MailNo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpCode: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      gotCode: 'string',
      mailNo: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo extends $tea.Model {
  addressDetail?: string;
  areaName?: string;
  cityName?: string;
  provinceName?: string;
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestConsigneeInfo extends $tea.Model {
  addressInfo?: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo;
  mobile?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo,
      mobile: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo extends $tea.Model {
  addressDetail?: string;
  areaName?: string;
  cityName?: string;
  provinceName?: string;
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestSenderInfo extends $tea.Model {
  addressInfo?: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo;
  mobile?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo,
      mobile: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList extends $tea.Model {
  endTime?: string;
  selectDisableTip?: string;
  selectable?: boolean;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes extends $tea.Model {
  date?: string;
  dateSelectable?: boolean;
  timeList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList[];
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateSelectable: 'DateSelectable',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dateSelectable: 'boolean',
      timeList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime extends $tea.Model {
  name?: string;
  selectDisableTip?: string;
  selectable?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList extends $tea.Model {
  appointTimes?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes[];
  prePrice?: string;
  realTime?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime;
  static names(): { [key: string]: string } {
    return {
      appointTimes: 'AppointTimes',
      prePrice: 'PrePrice',
      realTime: 'RealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointTimes: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes },
      prePrice: 'string',
      realTime: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyData extends $tea.Model {
  code?: string;
  cpTimeSelectList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList[];
  errorCode?: string;
  errorMsg?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpTimeSelectList: 'CpTimeSelectList',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpTimeSelectList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList },
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBodyDataSentences extends $tea.Model {
  beginTime?: number;
  channelId?: number;
  emotionValue?: string;
  endTime?: number;
  silenceDuration?: number;
  speechRate?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'string',
      endTime: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBodyData extends $tea.Model {
  bizDuration?: number;
  businessId?: string;
  businessKey?: string;
  code?: string;
  msg?: string;
  requestId?: string;
  sentences?: GetSecretAsrDetailResponseBodyDataSentences[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizDuration: 'BizDuration',
      businessId: 'BusinessId',
      businessKey: 'BusinessKey',
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      sentences: 'Sentences',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDuration: 'number',
      businessId: 'string',
      businessKey: 'string',
      code: 'string',
      msg: 'string',
      requestId: 'string',
      sentences: { 'type': 'array', 'itemType': GetSecretAsrDetailResponseBodyDataSentences },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponseBodyData extends $tea.Model {
  phonePublicUrl?: string;
  ringPublicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      phonePublicUrl: 'PhonePublicUrl',
      ringPublicUrl: 'RingPublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phonePublicUrl: 'string',
      ringPublicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponseBodyModule extends $tea.Model {
  extension?: string;
  phoneNoA?: string;
  phoneNoX?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      phoneNoA: 'PhoneNoA',
      phoneNoX: 'PhoneNoX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      phoneNoA: 'string',
      phoneNoX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailResponseBodySecretNoInfoDTO extends $tea.Model {
  certifyStatus?: number;
  city?: string;
  province?: string;
  purchaseTime?: string;
  secretStatus?: number;
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      certifyStatus: 'CertifyStatus',
      city: 'City',
      province: 'Province',
      purchaseTime: 'PurchaseTime',
      secretStatus: 'SecretStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyStatus: 'number',
      city: 'string',
      province: 'string',
      purchaseTime: 'string',
      secretStatus: 'number',
      vendor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO extends $tea.Model {
  amount?: number;
  city?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      city: 'City',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      city: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList extends $tea.Model {
  remainDTO?: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO[];
  static names(): { [key: string]: string } {
    return {
      remainDTO: 'remainDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainDTO: { 'type': 'array', 'itemType': QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBodySecretRemainDTO extends $tea.Model {
  amount?: number;
  city?: string;
  remainDTOList?: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      city: 'City',
      remainDTOList: 'RemainDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      city: 'string',
      remainDTOList: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponseBodySecretBindDetailDTO extends $tea.Model {
  ASRModelId?: string;
  ASRStatus?: boolean;
  callRestrict?: string;
  expireDate?: string;
  extension?: string;
  gmtCreate?: string;
  groupId?: number;
  needRecord?: boolean;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  status?: number;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callRestrict: 'CallRestrict',
      expireDate: 'ExpireDate',
      extension: 'Extension',
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      needRecord: 'NeedRecord',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      status: 'Status',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callRestrict: 'string',
      expireDate: 'string',
      extension: 'string',
      gmtCreate: 'string',
      groupId: 'number',
      needRecord: 'boolean',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      status: 'number',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dyplsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAxnTrackNoWithOptions(request: AddAxnTrackNoRequest, runtime: $Util.RuntimeOptions): Promise<AddAxnTrackNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    if (!Util.isUnset(request.trackNo)) {
      query["trackNo"] = request.trackNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAxnTrackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAxnTrackNoResponse>(await this.callApi(params, req, runtime), new AddAxnTrackNoResponse({}));
  }

  async addAxnTrackNo(request: AddAxnTrackNoRequest): Promise<AddAxnTrackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAxnTrackNoWithOptions(request, runtime);
  }

  async addSecretBlacklistWithOptions(request: AddSecretBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<AddSecretBlacklistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.wayControl)) {
      query["WayControl"] = request.wayControl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSecretBlacklist",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSecretBlacklistResponse>(await this.callApi(params, req, runtime), new AddSecretBlacklistResponse({}));
  }

  async addSecretBlacklist(request: AddSecretBlacklistRequest): Promise<AddSecretBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSecretBlacklistWithOptions(request, runtime);
  }

  async bindAxbWithOptions(request: BindAxbRequest, runtime: $Util.RuntimeOptions): Promise<BindAxbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!Util.isUnset(request.dtmfConfig)) {
      query["DtmfConfig"] = request.dtmfConfig;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxbResponse>(await this.callApi(params, req, runtime), new BindAxbResponse({}));
  }

  async bindAxb(request: BindAxbRequest): Promise<BindAxbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxbWithOptions(request, runtime);
  }

  async bindAxgWithOptions(request: BindAxgRequest, runtime: $Util.RuntimeOptions): Promise<BindAxgResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxg",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxgResponse>(await this.callApi(params, req, runtime), new BindAxgResponse({}));
  }

  async bindAxg(request: BindAxgRequest): Promise<BindAxgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxgWithOptions(request, runtime);
  }

  async bindAxnWithOptions(request: BindAxnRequest, runtime: $Util.RuntimeOptions): Promise<BindAxnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.noType)) {
      query["NoType"] = request.noType;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxn",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxnResponse>(await this.callApi(params, req, runtime), new BindAxnResponse({}));
  }

  async bindAxn(request: BindAxnRequest): Promise<BindAxnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxnWithOptions(request, runtime);
  }

  async bindAxnExtensionWithOptions(request: BindAxnExtensionRequest, runtime: $Util.RuntimeOptions): Promise<BindAxnExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxnExtension",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxnExtensionResponse>(await this.callApi(params, req, runtime), new BindAxnExtensionResponse({}));
  }

  async bindAxnExtension(request: BindAxnExtensionRequest): Promise<BindAxnExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxnExtensionWithOptions(request, runtime);
  }

  async bindBatchAxgWithOptions(tmpReq: BindBatchAxgRequest, runtime: $Util.RuntimeOptions): Promise<BindBatchAxgResponse> {
    Util.validateModel(tmpReq);
    let request = new BindBatchAxgShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.axgBindList)) {
      request.axgBindListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.axgBindList, "AxgBindList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.axgBindListShrink)) {
      query["AxgBindList"] = request.axgBindListShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "BindBatchAxg",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindBatchAxgResponse>(await this.callApi(params, req, runtime), new BindBatchAxgResponse({}));
  }

  async bindBatchAxg(request: BindBatchAxgRequest): Promise<BindBatchAxgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindBatchAxgWithOptions(request, runtime);
  }

  async buySecretNoWithOptions(request: BuySecretNoRequest, runtime: $Util.RuntimeOptions): Promise<BuySecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.displayPool)) {
      query["DisplayPool"] = request.displayPool;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BuySecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BuySecretNoResponse>(await this.callApi(params, req, runtime), new BuySecretNoResponse({}));
  }

  async buySecretNo(request: BuySecretNoRequest): Promise<BuySecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.buySecretNoWithOptions(request, runtime);
  }

  async cancelPickUpWaybillWithOptions(request: CancelPickUpWaybillRequest, runtime: $Util.RuntimeOptions): Promise<CancelPickUpWaybillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cancelDesc)) {
      query["CancelDesc"] = request.cancelDesc;
    }

    if (!Util.isUnset(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
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
      action: "CancelPickUpWaybill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelPickUpWaybillResponse>(await this.callApi(params, req, runtime), new CancelPickUpWaybillResponse({}));
  }

  async cancelPickUpWaybill(request: CancelPickUpWaybillRequest): Promise<CancelPickUpWaybillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPickUpWaybillWithOptions(request, runtime);
  }

  async createAxgGroupWithOptions(request: CreateAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAxgGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.numbers)) {
      query["Numbers"] = request.numbers;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
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
      action: "CreateAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAxgGroupResponse>(await this.callApi(params, req, runtime), new CreateAxgGroupResponse({}));
  }

  async createAxgGroup(request: CreateAxgGroupRequest): Promise<CreateAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAxgGroupWithOptions(request, runtime);
  }

  async createPickUpWaybillWithOptions(tmpReq: CreatePickUpWaybillRequest, runtime: $Util.RuntimeOptions): Promise<CreatePickUpWaybillResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePickUpWaybillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.consigneeAddress)) {
      request.consigneeAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.consigneeAddress, "ConsigneeAddress", "json");
    }

    if (!Util.isUnset(tmpReq.goodsInfos)) {
      request.goodsInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.goodsInfos, "GoodsInfos", "json");
    }

    if (!Util.isUnset(tmpReq.sendAddress)) {
      request.sendAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sendAddress, "SendAddress", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appointGotEndTime)) {
      query["AppointGotEndTime"] = request.appointGotEndTime;
    }

    if (!Util.isUnset(request.appointGotStartTime)) {
      query["AppointGotStartTime"] = request.appointGotStartTime;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.consigneeAddressShrink)) {
      query["ConsigneeAddress"] = request.consigneeAddressShrink;
    }

    if (!Util.isUnset(request.consigneeMobile)) {
      query["ConsigneeMobile"] = request.consigneeMobile;
    }

    if (!Util.isUnset(request.consigneeName)) {
      query["ConsigneeName"] = request.consigneeName;
    }

    if (!Util.isUnset(request.consigneePhone)) {
      query["ConsigneePhone"] = request.consigneePhone;
    }

    if (!Util.isUnset(request.cpCode)) {
      query["CpCode"] = request.cpCode;
    }

    if (!Util.isUnset(request.goodsInfosShrink)) {
      query["GoodsInfos"] = request.goodsInfosShrink;
    }

    if (!Util.isUnset(request.orderChannels)) {
      query["OrderChannels"] = request.orderChannels;
    }

    if (!Util.isUnset(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.sendAddressShrink)) {
      query["SendAddress"] = request.sendAddressShrink;
    }

    if (!Util.isUnset(request.sendMobile)) {
      query["SendMobile"] = request.sendMobile;
    }

    if (!Util.isUnset(request.sendName)) {
      query["SendName"] = request.sendName;
    }

    if (!Util.isUnset(request.sendPhone)) {
      query["SendPhone"] = request.sendPhone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePickUpWaybill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePickUpWaybillResponse>(await this.callApi(params, req, runtime), new CreatePickUpWaybillResponse({}));
  }

  async createPickUpWaybill(request: CreatePickUpWaybillRequest): Promise<CreatePickUpWaybillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPickUpWaybillWithOptions(request, runtime);
  }

  async createPickUpWaybillPreQueryWithOptions(tmpReq: CreatePickUpWaybillPreQueryRequest, runtime: $Util.RuntimeOptions): Promise<CreatePickUpWaybillPreQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePickUpWaybillPreQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.consigneeInfo)) {
      request.consigneeInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.consigneeInfo, "ConsigneeInfo", "json");
    }

    if (!Util.isUnset(tmpReq.senderInfo)) {
      request.senderInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.senderInfo, "SenderInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.consigneeInfoShrink)) {
      query["ConsigneeInfo"] = request.consigneeInfoShrink;
    }

    if (!Util.isUnset(request.cpCode)) {
      query["CpCode"] = request.cpCode;
    }

    if (!Util.isUnset(request.orderChannels)) {
      query["OrderChannels"] = request.orderChannels;
    }

    if (!Util.isUnset(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!Util.isUnset(request.preWeight)) {
      query["PreWeight"] = request.preWeight;
    }

    if (!Util.isUnset(request.senderInfoShrink)) {
      query["SenderInfo"] = request.senderInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePickUpWaybillPreQuery",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePickUpWaybillPreQueryResponse>(await this.callApi(params, req, runtime), new CreatePickUpWaybillPreQueryResponse({}));
  }

  async createPickUpWaybillPreQuery(request: CreatePickUpWaybillPreQueryRequest): Promise<CreatePickUpWaybillPreQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPickUpWaybillPreQueryWithOptions(request, runtime);
  }

  async deleteAxgGroupWithOptions(request: DeleteAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAxgGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "DeleteAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAxgGroupResponse>(await this.callApi(params, req, runtime), new DeleteAxgGroupResponse({}));
  }

  async deleteAxgGroup(request: DeleteAxgGroupRequest): Promise<DeleteAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAxgGroupWithOptions(request, runtime);
  }

  async deleteSecretBlacklistWithOptions(request: DeleteSecretBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretBlacklistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.wayControl)) {
      query["WayControl"] = request.wayControl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecretBlacklist",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecretBlacklistResponse>(await this.callApi(params, req, runtime), new DeleteSecretBlacklistResponse({}));
  }

  async deleteSecretBlacklist(request: DeleteSecretBlacklistRequest): Promise<DeleteSecretBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretBlacklistWithOptions(request, runtime);
  }

  async getSecretAsrDetailWithOptions(request: GetSecretAsrDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretAsrDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretAsrDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretAsrDetailResponse>(await this.callApi(params, req, runtime), new GetSecretAsrDetailResponse({}));
  }

  async getSecretAsrDetail(request: GetSecretAsrDetailRequest): Promise<GetSecretAsrDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretAsrDetailWithOptions(request, runtime);
  }

  async getTotalPublicUrlWithOptions(request: GetTotalPublicUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetTotalPublicUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.checkSubs)) {
      query["CheckSubs"] = request.checkSubs;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.partnerKey)) {
      query["PartnerKey"] = request.partnerKey;
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
      action: "GetTotalPublicUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTotalPublicUrlResponse>(await this.callApi(params, req, runtime), new GetTotalPublicUrlResponse({}));
  }

  async getTotalPublicUrl(request: GetTotalPublicUrlRequest): Promise<GetTotalPublicUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTotalPublicUrlWithOptions(request, runtime);
  }

  async lockSecretNoWithOptions(request: LockSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<LockSecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockSecretNoResponse>(await this.callApi(params, req, runtime), new LockSecretNoResponse({}));
  }

  async lockSecretNo(request: LockSecretNoRequest): Promise<LockSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockSecretNoWithOptions(request, runtime);
  }

  async operateAxgGroupWithOptions(request: OperateAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<OperateAxgGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.numbers)) {
      query["Numbers"] = request.numbers;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "OperateAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateAxgGroupResponse>(await this.callApi(params, req, runtime), new OperateAxgGroupResponse({}));
  }

  async operateAxgGroup(request: OperateAxgGroupRequest): Promise<OperateAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateAxgGroupWithOptions(request, runtime);
  }

  async operateBlackNoWithOptions(request: OperateBlackNoRequest, runtime: $Util.RuntimeOptions): Promise<OperateBlackNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tips)) {
      query["Tips"] = request.tips;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateBlackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateBlackNoResponse>(await this.callApi(params, req, runtime), new OperateBlackNoResponse({}));
  }

  async operateBlackNo(request: OperateBlackNoRequest): Promise<OperateBlackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateBlackNoWithOptions(request, runtime);
  }

  async queryPhoneNoAByTrackNoWithOptions(request: QueryPhoneNoAByTrackNoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPhoneNoAByTrackNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cabinetNo)) {
      query["CabinetNo"] = request.cabinetNo;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trackNo)) {
      query["trackNo"] = request.trackNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPhoneNoAByTrackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPhoneNoAByTrackNoResponse>(await this.callApi(params, req, runtime), new QueryPhoneNoAByTrackNoResponse({}));
  }

  async queryPhoneNoAByTrackNo(request: QueryPhoneNoAByTrackNoRequest): Promise<QueryPhoneNoAByTrackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneNoAByTrackNoWithOptions(request, runtime);
  }

  async queryRecordFileDownloadUrlWithOptions(request: QueryRecordFileDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordFileDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
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
      action: "QueryRecordFileDownloadUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordFileDownloadUrlResponse>(await this.callApi(params, req, runtime), new QueryRecordFileDownloadUrlResponse({}));
  }

  async queryRecordFileDownloadUrl(request: QueryRecordFileDownloadUrlRequest): Promise<QueryRecordFileDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordFileDownloadUrlWithOptions(request, runtime);
  }

  async querySecretNoDetailWithOptions(request: QuerySecretNoDetailRequest, runtime: $Util.RuntimeOptions): Promise<QuerySecretNoDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySecretNoDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySecretNoDetailResponse>(await this.callApi(params, req, runtime), new QuerySecretNoDetailResponse({}));
  }

  async querySecretNoDetail(request: QuerySecretNoDetailRequest): Promise<QuerySecretNoDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySecretNoDetailWithOptions(request, runtime);
  }

  async querySecretNoRemainWithOptions(request: QuerySecretNoRemainRequest, runtime: $Util.RuntimeOptions): Promise<QuerySecretNoRemainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
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

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySecretNoRemain",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySecretNoRemainResponse>(await this.callApi(params, req, runtime), new QuerySecretNoRemainResponse({}));
  }

  async querySecretNoRemain(request: QuerySecretNoRemainRequest): Promise<QuerySecretNoRemainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySecretNoRemainWithOptions(request, runtime);
  }

  async querySubsIdWithOptions(request: QuerySubsIdRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubsIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "QuerySubsId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySubsIdResponse>(await this.callApi(params, req, runtime), new QuerySubsIdResponse({}));
  }

  async querySubsId(request: QuerySubsIdRequest): Promise<QuerySubsIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubsIdWithOptions(request, runtime);
  }

  async querySubscriptionDetailWithOptions(request: QuerySubscriptionDetailRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubscriptionDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySubscriptionDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySubscriptionDetailResponse>(await this.callApi(params, req, runtime), new QuerySubscriptionDetailResponse({}));
  }

  async querySubscriptionDetail(request: QuerySubscriptionDetailRequest): Promise<QuerySubscriptionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubscriptionDetailWithOptions(request, runtime);
  }

  async releaseSecretNoWithOptions(request: ReleaseSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseSecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseSecretNoResponse>(await this.callApi(params, req, runtime), new ReleaseSecretNoResponse({}));
  }

  async releaseSecretNo(request: ReleaseSecretNoRequest): Promise<ReleaseSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseSecretNoWithOptions(request, runtime);
  }

  async unbindSubscriptionWithOptions(request: UnbindSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindSubscription",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindSubscriptionResponse>(await this.callApi(params, req, runtime), new UnbindSubscriptionResponse({}));
  }

  async unbindSubscription(request: UnbindSubscriptionRequest): Promise<UnbindSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSubscriptionWithOptions(request, runtime);
  }

  async unlockSecretNoWithOptions(request: UnlockSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<UnlockSecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockSecretNoResponse>(await this.callApi(params, req, runtime), new UnlockSecretNoResponse({}));
  }

  async unlockSecretNo(request: UnlockSecretNoRequest): Promise<UnlockSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockSecretNoWithOptions(request, runtime);
  }

  async updateSubscriptionWithOptions(request: UpdateSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubscription",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubscriptionResponse>(await this.callApi(params, req, runtime), new UpdateSubscriptionResponse({}));
  }

  async updateSubscription(request: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
  }

}
