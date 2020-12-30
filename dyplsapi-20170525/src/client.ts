// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAxnTrackNoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  phoneNoX?: string;
  trackNo?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      phoneNoX: 'PhoneNoX',
      trackNo: 'trackNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      phoneNoX: 'string',
      trackNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAxnTrackNoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAxnTrackNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAxnTrackNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAxnTrackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  blackNo?: string;
  remark?: string;
  blackType?: string;
  wayControl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      blackNo: 'BlackNo',
      remark: 'Remark',
      blackType: 'BlackType',
      wayControl: 'WayControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      blackNo: 'string',
      remark: 'string',
      blackType: 'string',
      wayControl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSecretBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSecretBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  expiration?: string;
  expectCity?: string;
  isRecordingEnabled?: boolean;
  outId?: string;
  outOrderId?: string;
  callRestrict?: string;
  callDisplayType?: number;
  ringConfig?: string;
  ASRStatus?: boolean;
  ASRModelId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      expiration: 'Expiration',
      expectCity: 'ExpectCity',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      callRestrict: 'CallRestrict',
      callDisplayType: 'CallDisplayType',
      ringConfig: 'RingConfig',
      ASRStatus: 'ASRStatus',
      ASRModelId: 'ASRModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      expiration: 'string',
      expectCity: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      callRestrict: 'string',
      callDisplayType: 'number',
      ringConfig: 'string',
      ASRStatus: 'boolean',
      ASRModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponseBody extends $tea.Model {
  secretBindDTO?: BindAxbResponseBodySecretBindDTO;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      secretBindDTO: 'SecretBindDTO',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBindDTO: BindAxbResponseBodySecretBindDTO,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindAxbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindAxbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  phoneNoA?: string;
  groupId?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  expiration?: string;
  expectCity?: string;
  isRecordingEnabled?: boolean;
  outId?: string;
  outOrderId?: string;
  callDisplayType?: number;
  ringConfig?: string;
  ASRStatus?: boolean;
  ASRModelId?: string;
  callRestrict?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      phoneNoA: 'PhoneNoA',
      groupId: 'GroupId',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      expiration: 'Expiration',
      expectCity: 'ExpectCity',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      callDisplayType: 'CallDisplayType',
      ringConfig: 'RingConfig',
      ASRStatus: 'ASRStatus',
      ASRModelId: 'ASRModelId',
      callRestrict: 'CallRestrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      phoneNoA: 'string',
      groupId: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      expiration: 'string',
      expectCity: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      callDisplayType: 'number',
      ringConfig: 'string',
      ASRStatus: 'boolean',
      ASRModelId: 'string',
      callRestrict: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponseBody extends $tea.Model {
  secretBindDTO?: BindAxgResponseBodySecretBindDTO;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      secretBindDTO: 'SecretBindDTO',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBindDTO: BindAxgResponseBodySecretBindDTO,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindAxgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindAxgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  phoneNoA?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  expiration?: string;
  expectCity?: string;
  isRecordingEnabled?: boolean;
  noType?: string;
  outId?: string;
  outOrderId?: string;
  callDisplayType?: number;
  ringConfig?: string;
  ASRStatus?: boolean;
  ASRModelId?: string;
  callTimeout?: number;
  callRestrict?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      expiration: 'Expiration',
      expectCity: 'ExpectCity',
      isRecordingEnabled: 'IsRecordingEnabled',
      noType: 'NoType',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      callDisplayType: 'CallDisplayType',
      ringConfig: 'RingConfig',
      ASRStatus: 'ASRStatus',
      ASRModelId: 'ASRModelId',
      callTimeout: 'CallTimeout',
      callRestrict: 'CallRestrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      expiration: 'string',
      expectCity: 'string',
      isRecordingEnabled: 'boolean',
      noType: 'string',
      outId: 'string',
      outOrderId: 'string',
      callDisplayType: 'number',
      ringConfig: 'string',
      ASRStatus: 'boolean',
      ASRModelId: 'string',
      callTimeout: 'number',
      callRestrict: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponseBody extends $tea.Model {
  secretBindDTO?: BindAxnResponseBodySecretBindDTO;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      secretBindDTO: 'SecretBindDTO',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBindDTO: BindAxnResponseBodySecretBindDTO,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindAxnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindAxnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  phoneNoA?: string;
  extension?: string;
  phoneNoB?: string;
  phoneNoX?: string;
  expiration?: string;
  expectCity?: string;
  isRecordingEnabled?: boolean;
  outId?: string;
  outOrderId?: string;
  callDisplayType?: number;
  ringConfig?: string;
  ASRStatus?: boolean;
  ASRModelId?: string;
  callRestrict?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      phoneNoA: 'PhoneNoA',
      extension: 'Extension',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      expiration: 'Expiration',
      expectCity: 'ExpectCity',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      callDisplayType: 'CallDisplayType',
      ringConfig: 'RingConfig',
      ASRStatus: 'ASRStatus',
      ASRModelId: 'ASRModelId',
      callRestrict: 'CallRestrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      phoneNoA: 'string',
      extension: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      expiration: 'string',
      expectCity: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      callDisplayType: 'number',
      ringConfig: 'string',
      ASRStatus: 'boolean',
      ASRModelId: 'string',
      callRestrict: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponseBody extends $tea.Model {
  secretBindDTO?: BindAxnExtensionResponseBodySecretBindDTO;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      secretBindDTO: 'SecretBindDTO',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBindDTO: BindAxnExtensionResponseBodySecretBindDTO,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindAxnExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindAxnExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  specId?: number;
  city?: string;
  secretNo?: string;
  displayPool?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      specId: 'SpecId',
      city: 'City',
      secretNo: 'SecretNo',
      displayPool: 'DisplayPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      specId: 'number',
      city: 'string',
      secretNo: 'string',
      displayPool: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  secretBuyInfoDTO?: BuySecretNoResponseBodySecretBuyInfoDTO;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      secretBuyInfoDTO: 'SecretBuyInfoDTO',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      secretBuyInfoDTO: BuySecretNoResponseBodySecretBuyInfoDTO,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BuySecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BuySecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  name?: string;
  remark?: string;
  numbers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      name: 'Name',
      remark: 'Remark',
      numbers: 'Numbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      name: 'string',
      remark: 'string',
      numbers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAxgGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  secretNo?: string;
  phoneNo?: string;
  bindToken?: string;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      secretNo: 'SecretNo',
      phoneNo: 'PhoneNo',
      bindToken: 'BindToken',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      secretNo: 'string',
      phoneNo: 'string',
      bindToken: 'string',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateSubscriptionResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateSubscriptionResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  blackNo?: string;
  remark?: string;
  blackType?: string;
  wayControl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      blackNo: 'BlackNo',
      remark: 'Remark',
      blackType: 'BlackType',
      wayControl: 'WayControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      blackNo: 'string',
      remark: 'string',
      blackType: 'string',
      wayControl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSecretBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSecretBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceVerifyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      verifyToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceVerifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetFaceVerifyResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetFaceVerifyResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFaceVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  callId?: string;
  callTime?: string;
  poolKey?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      callId: 'CallId',
      callTime: 'CallTime',
      poolKey: 'PoolKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecretAsrDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecretAsrDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  poolKey?: string;
  subsId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      poolKey: 'PoolKey',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      poolKey: 'string',
      subsId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetSubscriptionDetailResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetSubscriptionDetailResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSubscriptionDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSubscriptionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  checkSubs?: boolean;
  partnerKey?: string;
  callId?: string;
  callTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      checkSubs: 'CheckSubs',
      partnerKey: 'PartnerKey',
      callId: 'CallId',
      callTime: 'CallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      checkSubs: 'boolean',
      partnerKey: 'string',
      callId: 'string',
      callTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTotalPublicUrlResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetTotalPublicUrlResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTotalPublicUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTotalPublicUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  metaInfo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      metaInfo: 'MetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      metaInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InitFaceVerifyResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: InitFaceVerifyResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitFaceVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitFaceVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LockSecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LockSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  groupId?: number;
  operateType?: string;
  numbers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      groupId: 'GroupId',
      operateType: 'OperateType',
      numbers: 'Numbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      groupId: 'number',
      operateType: 'string',
      numbers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateAxgGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  blackNo?: string;
  operateType?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      blackNo: 'BlackNo',
      operateType: 'OperateType',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      blackNo: 'string',
      operateType: 'string',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateBlackNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateBlackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallStatusRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  subsId?: string;
  callNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      subsId: 'SubsId',
      callNo: 'CallNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      subsId: 'string',
      callNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  secretCallStatusDTO?: QueryCallStatusResponseBodySecretCallStatusDTO;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      secretCallStatusDTO: 'SecretCallStatusDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      secretCallStatusDTO: QueryCallStatusResponseBodySecretCallStatusDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCallStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCallStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNoX?: string;
  trackNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNoX: 'PhoneNoX',
      trackNo: 'trackNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNoX: 'string',
      trackNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  module?: QueryPhoneNoAByTrackNoResponseBodyModule;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      module: 'Module',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      module: QueryPhoneNoAByTrackNoResponseBodyModule,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPhoneNoAByTrackNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPhoneNoAByTrackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  productType?: string;
  callId?: string;
  callTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      callId: 'CallId',
      callTime: 'CallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      productType: 'string',
      callId: 'string',
      callTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordFileDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordFileDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  specId?: number;
  city?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specId: 'SpecId',
      city: 'City',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specId: 'number',
      city: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  secretRemainDTO?: QuerySecretNoRemainResponseBodySecretRemainDTO;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      secretRemainDTO: 'SecretRemainDTO',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      secretRemainDTO: QuerySecretNoRemainResponseBodySecretRemainDTO,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySecretNoRemainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySecretNoRemainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  productType?: string;
  subsId?: string;
  phoneNoX?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      subsId: 'SubsId',
      phoneNoX: 'PhoneNoX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      productType: 'string',
      subsId: 'string',
      phoneNoX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponseBody extends $tea.Model {
  secretBindDetailDTO?: QuerySubscriptionDetailResponseBodySecretBindDetailDTO;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      secretBindDetailDTO: 'SecretBindDetailDTO',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBindDetailDTO: QuerySubscriptionDetailResponseBodySecretBindDetailDTO,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySubscriptionDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySubscriptionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  phoneNoX?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      phoneNoX: 'PhoneNoX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      phoneNoX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySubsIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySubsIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseSecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  productType?: string;
  subsId?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      productType: 'string',
      subsId: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  chargeId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      chargeId: 'ChargeId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      chargeId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnlockSecretNoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnlockSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultBRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  poolKey?: string;
  subsId?: number;
  secretNo?: string;
  phoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      poolKey: 'PoolKey',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
      phoneNo: 'PhoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      poolKey: 'string',
      subsId: 'number',
      secretNo: 'string',
      phoneNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultBResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDefaultBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDefaultBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneNumberRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  poolKey?: string;
  subsId?: number;
  secretNo?: string;
  newPhoneNo?: string;
  bindToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      poolKey: 'PoolKey',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
      newPhoneNo: 'NewPhoneNo',
      bindToken: 'BindToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      poolKey: 'string',
      subsId: 'number',
      secretNo: 'string',
      newPhoneNo: 'string',
      bindToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneNumberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneSwitchRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  subsId?: number;
  secretNo?: string;
  switchStatus?: number;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
      switchStatus: 'SwitchStatus',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      subsId: 'number',
      secretNo: 'string',
      switchStatus: 'number',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneSwitchResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePhoneSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePhoneSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  poolKey?: string;
  productType?: string;
  subsId?: string;
  phoneNoX?: string;
  phoneNoA?: string;
  phoneNoB?: string;
  groupId?: string;
  callRestrict?: string;
  expiration?: string;
  callDisplayType?: number;
  outId?: string;
  isRecordingEnabled?: boolean;
  operateType?: string;
  ringConfig?: string;
  ASRStatus?: boolean;
  ASRModelId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      subsId: 'SubsId',
      phoneNoX: 'PhoneNoX',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      groupId: 'GroupId',
      callRestrict: 'CallRestrict',
      expiration: 'Expiration',
      callDisplayType: 'CallDisplayType',
      outId: 'OutId',
      isRecordingEnabled: 'IsRecordingEnabled',
      operateType: 'OperateType',
      ringConfig: 'RingConfig',
      ASRStatus: 'ASRStatus',
      ASRModelId: 'ASRModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      poolKey: 'string',
      productType: 'string',
      subsId: 'string',
      phoneNoX: 'string',
      phoneNoA: 'string',
      phoneNoB: 'string',
      groupId: 'string',
      callRestrict: 'string',
      expiration: 'string',
      callDisplayType: 'number',
      outId: 'string',
      isRecordingEnabled: 'boolean',
      operateType: 'string',
      ringConfig: 'string',
      ASRStatus: 'boolean',
      ASRModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  subsId?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      subsId: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  subsId?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      subsId: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  subsId?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      subsId: 'string',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponseBodySecretBindDTO extends $tea.Model {
  extension?: string;
  subsId?: string;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      subsId: 'string',
      secretNo: 'string',
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

export class CreateSubscriptionResponseBodyData extends $tea.Model {
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceVerifyResponseBodyData extends $tea.Model {
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionDetailResponseBodyData extends $tea.Model {
  phoneNo?: string;
  city?: string;
  switchStatus?: number;
  subsId?: number;
  secretNo?: string;
  vendor?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNo: 'PhoneNo',
      city: 'City',
      switchStatus: 'SwitchStatus',
      subsId: 'SubsId',
      secretNo: 'SecretNo',
      vendor: 'Vendor',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNo: 'string',
      city: 'string',
      switchStatus: 'number',
      subsId: 'number',
      secretNo: 'string',
      vendor: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponseBodyData extends $tea.Model {
  ringPublicUrl?: string;
  phonePublicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ringPublicUrl: 'RingPublicUrl',
      phonePublicUrl: 'PhonePublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ringPublicUrl: 'string',
      phonePublicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBodyData extends $tea.Model {
  certifyId?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallStatusResponseBodySecretCallStatusDTO extends $tea.Model {
  status?: number;
  calledNo?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      calledNo: 'CalledNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      calledNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponseBodyModulePhoneNoAInfo extends $tea.Model {
  phoneNoX?: string;
  phoneNoA?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNoX: 'PhoneNoX',
      phoneNoA: 'PhoneNoA',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNoX: 'string',
      phoneNoA: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponseBodyModule extends $tea.Model {
  phoneNoAInfo?: QueryPhoneNoAByTrackNoResponseBodyModulePhoneNoAInfo[];
  static names(): { [key: string]: string } {
    return {
      phoneNoAInfo: 'phoneNoAInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNoAInfo: { 'type': 'array', 'itemType': QueryPhoneNoAByTrackNoResponseBodyModulePhoneNoAInfo },
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
  status?: number;
  extension?: string;
  groupId?: number;
  phoneNoB?: string;
  ASRStatus?: boolean;
  needRecord?: boolean;
  gmtCreate?: string;
  expireDate?: string;
  subsId?: string;
  callRestrict?: string;
  phoneNoX?: string;
  ASRModelId?: string;
  phoneNoA?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      extension: 'Extension',
      groupId: 'GroupId',
      phoneNoB: 'PhoneNoB',
      ASRStatus: 'ASRStatus',
      needRecord: 'NeedRecord',
      gmtCreate: 'GmtCreate',
      expireDate: 'ExpireDate',
      subsId: 'SubsId',
      callRestrict: 'CallRestrict',
      phoneNoX: 'PhoneNoX',
      ASRModelId: 'ASRModelId',
      phoneNoA: 'PhoneNoA',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      extension: 'string',
      groupId: 'number',
      phoneNoB: 'string',
      ASRStatus: 'boolean',
      needRecord: 'boolean',
      gmtCreate: 'string',
      expireDate: 'string',
      subsId: 'string',
      callRestrict: 'string',
      phoneNoX: 'string',
      ASRModelId: 'string',
      phoneNoA: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAxnTrackNoResponse>(await this.doRPCRequest("AddAxnTrackNo", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new AddAxnTrackNoResponse({}));
  }

  async addAxnTrackNo(request: AddAxnTrackNoRequest): Promise<AddAxnTrackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAxnTrackNoWithOptions(request, runtime);
  }

  async addSecretBlacklistWithOptions(request: AddSecretBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<AddSecretBlacklistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSecretBlacklistResponse>(await this.doRPCRequest("AddSecretBlacklist", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new AddSecretBlacklistResponse({}));
  }

  async addSecretBlacklist(request: AddSecretBlacklistRequest): Promise<AddSecretBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSecretBlacklistWithOptions(request, runtime);
  }

  async bindAxbWithOptions(request: BindAxbRequest, runtime: $Util.RuntimeOptions): Promise<BindAxbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindAxbResponse>(await this.doRPCRequest("BindAxb", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new BindAxbResponse({}));
  }

  async bindAxb(request: BindAxbRequest): Promise<BindAxbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxbWithOptions(request, runtime);
  }

  async bindAxgWithOptions(request: BindAxgRequest, runtime: $Util.RuntimeOptions): Promise<BindAxgResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindAxgResponse>(await this.doRPCRequest("BindAxg", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new BindAxgResponse({}));
  }

  async bindAxg(request: BindAxgRequest): Promise<BindAxgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxgWithOptions(request, runtime);
  }

  async bindAxnWithOptions(request: BindAxnRequest, runtime: $Util.RuntimeOptions): Promise<BindAxnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindAxnResponse>(await this.doRPCRequest("BindAxn", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new BindAxnResponse({}));
  }

  async bindAxn(request: BindAxnRequest): Promise<BindAxnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxnWithOptions(request, runtime);
  }

  async bindAxnExtensionWithOptions(request: BindAxnExtensionRequest, runtime: $Util.RuntimeOptions): Promise<BindAxnExtensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindAxnExtensionResponse>(await this.doRPCRequest("BindAxnExtension", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new BindAxnExtensionResponse({}));
  }

  async bindAxnExtension(request: BindAxnExtensionRequest): Promise<BindAxnExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxnExtensionWithOptions(request, runtime);
  }

  async buySecretNoWithOptions(request: BuySecretNoRequest, runtime: $Util.RuntimeOptions): Promise<BuySecretNoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BuySecretNoResponse>(await this.doRPCRequest("BuySecretNo", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new BuySecretNoResponse({}));
  }

  async buySecretNo(request: BuySecretNoRequest): Promise<BuySecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.buySecretNoWithOptions(request, runtime);
  }

  async createAxgGroupWithOptions(request: CreateAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAxgGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAxgGroupResponse>(await this.doRPCRequest("CreateAxgGroup", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAxgGroupResponse({}));
  }

  async createAxgGroup(request: CreateAxgGroupRequest): Promise<CreateAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAxgGroupWithOptions(request, runtime);
  }

  async createSubscriptionWithOptions(request: CreateSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubscriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSubscriptionResponse>(await this.doRPCRequest("CreateSubscription", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSubscriptionResponse({}));
  }

  async createSubscription(request: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubscriptionWithOptions(request, runtime);
  }

  async deleteSecretBlacklistWithOptions(request: DeleteSecretBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretBlacklistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSecretBlacklistResponse>(await this.doRPCRequest("DeleteSecretBlacklist", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSecretBlacklistResponse({}));
  }

  async deleteSecretBlacklist(request: DeleteSecretBlacklistRequest): Promise<DeleteSecretBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretBlacklistWithOptions(request, runtime);
  }

  async getFaceVerifyWithOptions(request: GetFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFaceVerifyResponse>(await this.doRPCRequest("GetFaceVerify", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetFaceVerifyResponse({}));
  }

  async getFaceVerify(request: GetFaceVerifyRequest): Promise<GetFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceVerifyWithOptions(request, runtime);
  }

  async getSecretAsrDetailWithOptions(request: GetSecretAsrDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretAsrDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSecretAsrDetailResponse>(await this.doRPCRequest("GetSecretAsrDetail", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetSecretAsrDetailResponse({}));
  }

  async getSecretAsrDetail(request: GetSecretAsrDetailRequest): Promise<GetSecretAsrDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretAsrDetailWithOptions(request, runtime);
  }

  async getSubscriptionDetailWithOptions(request: GetSubscriptionDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSubscriptionDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSubscriptionDetailResponse>(await this.doRPCRequest("GetSubscriptionDetail", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetSubscriptionDetailResponse({}));
  }

  async getSubscriptionDetail(request: GetSubscriptionDetailRequest): Promise<GetSubscriptionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubscriptionDetailWithOptions(request, runtime);
  }

  async getTotalPublicUrlWithOptions(request: GetTotalPublicUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetTotalPublicUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTotalPublicUrlResponse>(await this.doRPCRequest("GetTotalPublicUrl", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetTotalPublicUrlResponse({}));
  }

  async getTotalPublicUrl(request: GetTotalPublicUrlRequest): Promise<GetTotalPublicUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTotalPublicUrlWithOptions(request, runtime);
  }

  async initFaceVerifyWithOptions(request: InitFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<InitFaceVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitFaceVerifyResponse>(await this.doRPCRequest("InitFaceVerify", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new InitFaceVerifyResponse({}));
  }

  async initFaceVerify(request: InitFaceVerifyRequest): Promise<InitFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initFaceVerifyWithOptions(request, runtime);
  }

  async lockSecretNoWithOptions(request: LockSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<LockSecretNoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LockSecretNoResponse>(await this.doRPCRequest("LockSecretNo", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new LockSecretNoResponse({}));
  }

  async lockSecretNo(request: LockSecretNoRequest): Promise<LockSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockSecretNoWithOptions(request, runtime);
  }

  async operateAxgGroupWithOptions(request: OperateAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<OperateAxgGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperateAxgGroupResponse>(await this.doRPCRequest("OperateAxgGroup", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new OperateAxgGroupResponse({}));
  }

  async operateAxgGroup(request: OperateAxgGroupRequest): Promise<OperateAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateAxgGroupWithOptions(request, runtime);
  }

  async operateBlackNoWithOptions(request: OperateBlackNoRequest, runtime: $Util.RuntimeOptions): Promise<OperateBlackNoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperateBlackNoResponse>(await this.doRPCRequest("OperateBlackNo", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new OperateBlackNoResponse({}));
  }

  async operateBlackNo(request: OperateBlackNoRequest): Promise<OperateBlackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateBlackNoWithOptions(request, runtime);
  }

  async queryCallStatusWithOptions(request: QueryCallStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCallStatusResponse>(await this.doRPCRequest("QueryCallStatus", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCallStatusResponse({}));
  }

  async queryCallStatus(request: QueryCallStatusRequest): Promise<QueryCallStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallStatusWithOptions(request, runtime);
  }

  async queryPhoneNoAByTrackNoWithOptions(request: QueryPhoneNoAByTrackNoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPhoneNoAByTrackNoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPhoneNoAByTrackNoResponse>(await this.doRPCRequest("QueryPhoneNoAByTrackNo", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPhoneNoAByTrackNoResponse({}));
  }

  async queryPhoneNoAByTrackNo(request: QueryPhoneNoAByTrackNoRequest): Promise<QueryPhoneNoAByTrackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneNoAByTrackNoWithOptions(request, runtime);
  }

  async queryRecordFileDownloadUrlWithOptions(request: QueryRecordFileDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordFileDownloadUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordFileDownloadUrlResponse>(await this.doRPCRequest("QueryRecordFileDownloadUrl", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordFileDownloadUrlResponse({}));
  }

  async queryRecordFileDownloadUrl(request: QueryRecordFileDownloadUrlRequest): Promise<QueryRecordFileDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordFileDownloadUrlWithOptions(request, runtime);
  }

  async querySecretNoRemainWithOptions(request: QuerySecretNoRemainRequest, runtime: $Util.RuntimeOptions): Promise<QuerySecretNoRemainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySecretNoRemainResponse>(await this.doRPCRequest("QuerySecretNoRemain", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySecretNoRemainResponse({}));
  }

  async querySecretNoRemain(request: QuerySecretNoRemainRequest): Promise<QuerySecretNoRemainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySecretNoRemainWithOptions(request, runtime);
  }

  async querySubscriptionDetailWithOptions(request: QuerySubscriptionDetailRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubscriptionDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySubscriptionDetailResponse>(await this.doRPCRequest("QuerySubscriptionDetail", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySubscriptionDetailResponse({}));
  }

  async querySubscriptionDetail(request: QuerySubscriptionDetailRequest): Promise<QuerySubscriptionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubscriptionDetailWithOptions(request, runtime);
  }

  async querySubsIdWithOptions(request: QuerySubsIdRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubsIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySubsIdResponse>(await this.doRPCRequest("QuerySubsId", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySubsIdResponse({}));
  }

  async querySubsId(request: QuerySubsIdRequest): Promise<QuerySubsIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubsIdWithOptions(request, runtime);
  }

  async releaseSecretNoWithOptions(request: ReleaseSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseSecretNoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseSecretNoResponse>(await this.doRPCRequest("ReleaseSecretNo", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseSecretNoResponse({}));
  }

  async releaseSecretNo(request: ReleaseSecretNoRequest): Promise<ReleaseSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseSecretNoWithOptions(request, runtime);
  }

  async unbindSubscriptionWithOptions(request: UnbindSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSubscriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindSubscriptionResponse>(await this.doRPCRequest("UnbindSubscription", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindSubscriptionResponse({}));
  }

  async unbindSubscription(request: UnbindSubscriptionRequest): Promise<UnbindSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSubscriptionWithOptions(request, runtime);
  }

  async unlockSecretNoWithOptions(request: UnlockSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<UnlockSecretNoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnlockSecretNoResponse>(await this.doRPCRequest("UnlockSecretNo", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UnlockSecretNoResponse({}));
  }

  async unlockSecretNo(request: UnlockSecretNoRequest): Promise<UnlockSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockSecretNoWithOptions(request, runtime);
  }

  async updateDefaultBWithOptions(request: UpdateDefaultBRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDefaultBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDefaultBResponse>(await this.doRPCRequest("UpdateDefaultB", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDefaultBResponse({}));
  }

  async updateDefaultB(request: UpdateDefaultBRequest): Promise<UpdateDefaultBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDefaultBWithOptions(request, runtime);
  }

  async updatePhoneNumberWithOptions(request: UpdatePhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePhoneNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePhoneNumberResponse>(await this.doRPCRequest("UpdatePhoneNumber", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePhoneNumberResponse({}));
  }

  async updatePhoneNumber(request: UpdatePhoneNumberRequest): Promise<UpdatePhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneNumberWithOptions(request, runtime);
  }

  async updatePhoneSwitchWithOptions(request: UpdatePhoneSwitchRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePhoneSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePhoneSwitchResponse>(await this.doRPCRequest("UpdatePhoneSwitch", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePhoneSwitchResponse({}));
  }

  async updatePhoneSwitch(request: UpdatePhoneSwitchRequest): Promise<UpdatePhoneSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneSwitchWithOptions(request, runtime);
  }

  async updateSubscriptionWithOptions(request: UpdateSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubscriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSubscriptionResponse>(await this.doRPCRequest("UpdateSubscription", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSubscriptionResponse({}));
  }

  async updateSubscription(request: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
  }

}
