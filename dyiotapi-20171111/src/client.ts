// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DoIotChgBindOrUnBindRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  imei?: string;
  newImei?: string;
  opionType?: string;
  midChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
      imei: 'Imei',
      newImei: 'NewImei',
      opionType: 'OpionType',
      midChannelId: 'MidChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
      imei: 'string',
      newImei: 'string',
      opionType: 'string',
      midChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotChgBindOrUnBindResponseBody extends $tea.Model {
  iotModBind?: DoIotChgBindOrUnBindResponseBodyIotModBind;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      iotModBind: 'IotModBind',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotModBind: DoIotChgBindOrUnBindResponseBodyIotModBind,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotChgBindOrUnBindResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotChgBindOrUnBindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotChgBindOrUnBindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotIsImeiExistRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  imei?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      imei: 'Imei',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      imei: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotIsImeiExistResponseBody extends $tea.Model {
  iotImeiExist?: DoIotIsImeiExistResponseBodyIotImeiExist;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      iotImeiExist: 'IotImeiExist',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotImeiExist: DoIotIsImeiExistResponseBodyIotImeiExist,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotIsImeiExistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotIsImeiExistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotIsImeiExistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotPostImeiRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  imei?: string;
  comments?: string;
  deviceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      imei: 'Imei',
      comments: 'Comments',
      deviceType: 'DeviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      imei: 'string',
      comments: 'string',
      deviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotPostImeiResponseBody extends $tea.Model {
  iotPostImei?: DoIotPostImeiResponseBodyIotPostImei;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      iotPostImei: 'IotPostImei',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotPostImei: DoIotPostImeiResponseBodyIotPostImei,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotPostImeiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotPostImeiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotPostImeiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotRechargeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  offerIds?: string;
  outId?: string;
  amount?: number;
  effCode?: string;
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
      offerIds: 'OfferIds',
      outId: 'OutId',
      amount: 'Amount',
      effCode: 'EffCode',
      orderNum: 'OrderNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
      offerIds: 'string',
      outId: 'string',
      amount: 'number',
      effCode: 'string',
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotRechargeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  iotRecharge?: DoIotRechargeResponseBodyIotRecharge;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      iotRecharge: 'IotRecharge',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      iotRecharge: DoIotRechargeResponseBodyIotRecharge,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotRechargeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotRechargeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotRechargeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotSetAbsoluteRemindConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  bizType?: string;
  bizId?: string;
  configInfo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bizType: 'BizType',
      bizId: 'BizId',
      configInfo: 'ConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bizType: 'string',
      bizId: 'string',
      configInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotSetAbsoluteRemindConfigResponseBody extends $tea.Model {
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

export class DoIotSetAbsoluteRemindConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotSetAbsoluteRemindConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotSetAbsoluteRemindConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotSetRemindConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  bizType?: string;
  bizId?: string;
  operationType?: string;
  configInfo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bizType: 'BizType',
      bizId: 'BizId',
      operationType: 'OperationType',
      configInfo: 'ConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bizType: 'string',
      bizId: 'string',
      operationType: 'string',
      configInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotSetRemindConfigResponseBody extends $tea.Model {
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

export class DoIotSetRemindConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotSetRemindConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotSetRemindConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotUnbindResumeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotUnbindResumeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
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
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotUnbindResumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotUnbindResumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotUnbindResumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotUserStopResumeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  optionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
      optionType: 'OptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
      optionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotUserStopResumeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DoIotUserStopResumeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DoIotUserStopResumeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotUserStopResumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoIotUserStopResumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoIotUserStopResumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoSendIotSmsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  templateCode?: string;
  phoneNumbers?: string;
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      phoneNumbers: 'PhoneNumbers',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      templateCode: 'string',
      phoneNumbers: 'string',
      templateParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoSendIotSmsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  module?: string;
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
      module: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoSendIotSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoSendIotSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoSendIotSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardFlowInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardFlowInfoResponseBody extends $tea.Model {
  cardFlowInfos?: QueryCardFlowInfoResponseBodyCardFlowInfos;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      cardFlowInfos: 'CardFlowInfos',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardFlowInfos: QueryCardFlowInfoResponseBodyCardFlowInfos,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardFlowInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCardFlowInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCardFlowInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardHistoryFlowInfoRequest extends $tea.Model {
  iccid?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardHistoryFlowInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryCardHistoryFlowInfoResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': QueryCardHistoryFlowInfoResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardHistoryFlowInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCardHistoryFlowInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCardHistoryFlowInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  cardInfo?: QueryCardInfoResponseBodyCardInfo;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      cardInfo: 'CardInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      cardInfo: QueryCardInfoResponseBodyCardInfo,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCardInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCardInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardsInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardsInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  cardsInfo?: QueryCardsInfoResponseBodyCardsInfo[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      cardsInfo: 'CardsInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      cardsInfo: { 'type': 'array', 'itemType': QueryCardsInfoResponseBodyCardsInfo },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCardsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCardsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardStatusRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  cardStatus?: QueryCardStatusResponseBodyCardStatus;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      cardStatus: 'CardStatus',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      cardStatus: QueryCardStatusResponseBodyCardStatus,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCardStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCardStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotCardOfferDtlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotCardOfferDtlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  cardOfferDetail?: QueryIotCardOfferDtlResponseBodyCardOfferDetail;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      cardOfferDetail: 'CardOfferDetail',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      cardOfferDetail: QueryIotCardOfferDtlResponseBodyCardOfferDetail,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotCardOfferDtlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryIotCardOfferDtlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryIotCardOfferDtlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPersonalInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPersonalInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  module?: string;
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
      module: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPersonalInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPersonalInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPersonalInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotChgBindOrUnBindResponseBodyIotModBind extends $tea.Model {
  isModSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isModSuccess: 'IsModSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isModSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotIsImeiExistResponseBodyIotImeiExist extends $tea.Model {
  isImeiExist?: boolean;
  static names(): { [key: string]: string } {
    return {
      isImeiExist: 'IsImeiExist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isImeiExist: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotPostImeiResponseBodyIotPostImei extends $tea.Model {
  isPostSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isPostSuccess: 'IsPostSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPostSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotRechargeResponseBodyIotRecharge extends $tea.Model {
  orderNo?: string;
  doneCode?: string;
  orderResult?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
      doneCode: 'DoneCode',
      orderResult: 'OrderResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
      doneCode: 'string',
      orderResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoIotUserStopResumeResponseBodyResult extends $tea.Model {
  controlResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      controlResult: 'ControlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardFlowInfoResponseBodyCardFlowInfosCardFlowInfo extends $tea.Model {
  validDate?: string;
  voiceUsed?: number;
  resourceType?: string;
  flowUsed?: number;
  voiceTotal?: number;
  expireDate?: string;
  smsUsed?: number;
  restOfFlow?: number;
  flowResource?: number;
  resName?: string;
  static names(): { [key: string]: string } {
    return {
      validDate: 'ValidDate',
      voiceUsed: 'VoiceUsed',
      resourceType: 'ResourceType',
      flowUsed: 'FlowUsed',
      voiceTotal: 'VoiceTotal',
      expireDate: 'ExpireDate',
      smsUsed: 'SmsUsed',
      restOfFlow: 'RestOfFlow',
      flowResource: 'FlowResource',
      resName: 'ResName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      validDate: 'string',
      voiceUsed: 'number',
      resourceType: 'string',
      flowUsed: 'number',
      voiceTotal: 'number',
      expireDate: 'string',
      smsUsed: 'number',
      restOfFlow: 'number',
      flowResource: 'number',
      resName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardFlowInfoResponseBodyCardFlowInfos extends $tea.Model {
  cardFlowInfo?: QueryCardFlowInfoResponseBodyCardFlowInfosCardFlowInfo[];
  static names(): { [key: string]: string } {
    return {
      cardFlowInfo: 'CardFlowInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardFlowInfo: { 'type': 'array', 'itemType': QueryCardFlowInfoResponseBodyCardFlowInfosCardFlowInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardHistoryFlowInfoResponseBodyDataDayUsageList extends $tea.Model {
  day?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardHistoryFlowInfoResponseBodyData extends $tea.Model {
  dayUsageList?: QueryCardHistoryFlowInfoResponseBodyDataDayUsageList[];
  month?: number;
  curValue?: number;
  static names(): { [key: string]: string } {
    return {
      dayUsageList: 'DayUsageList',
      month: 'Month',
      curValue: 'CurValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayUsageList: { 'type': 'array', 'itemType': QueryCardHistoryFlowInfoResponseBodyDataDayUsageList },
      month: 'number',
      curValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardInfoResponseBodyCardInfo extends $tea.Model {
  imsi?: string;
  msisdn?: string;
  gprsStatus?: string;
  voiceStatus?: string;
  smsStatus?: string;
  iccid?: string;
  firstActiveTime?: string;
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      imsi: 'Imsi',
      msisdn: 'Msisdn',
      gprsStatus: 'GprsStatus',
      voiceStatus: 'VoiceStatus',
      smsStatus: 'SmsStatus',
      iccid: 'Iccid',
      firstActiveTime: 'FirstActiveTime',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imsi: 'string',
      msisdn: 'string',
      gprsStatus: 'string',
      voiceStatus: 'string',
      smsStatus: 'string',
      iccid: 'string',
      firstActiveTime: 'string',
      openTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardsInfoResponseBodyCardsInfo extends $tea.Model {
  imsi?: string;
  msisdn?: string;
  gprsStatus?: string;
  voiceStatus?: string;
  smsStatus?: string;
  iccid?: string;
  firstActiveTime?: string;
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      imsi: 'Imsi',
      msisdn: 'Msisdn',
      gprsStatus: 'GprsStatus',
      voiceStatus: 'VoiceStatus',
      smsStatus: 'SmsStatus',
      iccid: 'Iccid',
      firstActiveTime: 'FirstActiveTime',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imsi: 'string',
      msisdn: 'string',
      gprsStatus: 'string',
      voiceStatus: 'string',
      smsStatus: 'string',
      iccid: 'string',
      firstActiveTime: 'string',
      openTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardStatusResponseBodyCardStatus extends $tea.Model {
  msisdn?: string;
  userStatus?: string;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      msisdn: 'Msisdn',
      userStatus: 'UserStatus',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msisdn: 'string',
      userStatus: 'string',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotCardOfferDtlResponseBodyCardOfferDetailDetail extends $tea.Model {
  effectiveTime?: string;
  offerId?: string;
  offerName?: string;
  expireTime?: string;
  orderTime?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      offerId: 'OfferId',
      offerName: 'OfferName',
      expireTime: 'ExpireTime',
      orderTime: 'OrderTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      offerId: 'string',
      offerName: 'string',
      expireTime: 'string',
      orderTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotCardOfferDtlResponseBodyCardOfferDetail extends $tea.Model {
  detail?: QueryIotCardOfferDtlResponseBodyCardOfferDetailDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': QueryIotCardOfferDtlResponseBodyCardOfferDetailDetail },
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
    this._endpoint = this.getEndpoint("dyiotapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async doIotChgBindOrUnBindWithOptions(request: DoIotChgBindOrUnBindRequest, runtime: $Util.RuntimeOptions): Promise<DoIotChgBindOrUnBindResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotChgBindOrUnBindResponse>(await this.doRPCRequest("DoIotChgBindOrUnBind", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotChgBindOrUnBindResponse({}));
  }

  async doIotChgBindOrUnBind(request: DoIotChgBindOrUnBindRequest): Promise<DoIotChgBindOrUnBindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotChgBindOrUnBindWithOptions(request, runtime);
  }

  async doIotIsImeiExistWithOptions(request: DoIotIsImeiExistRequest, runtime: $Util.RuntimeOptions): Promise<DoIotIsImeiExistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotIsImeiExistResponse>(await this.doRPCRequest("DoIotIsImeiExist", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotIsImeiExistResponse({}));
  }

  async doIotIsImeiExist(request: DoIotIsImeiExistRequest): Promise<DoIotIsImeiExistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotIsImeiExistWithOptions(request, runtime);
  }

  async doIotPostImeiWithOptions(request: DoIotPostImeiRequest, runtime: $Util.RuntimeOptions): Promise<DoIotPostImeiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotPostImeiResponse>(await this.doRPCRequest("DoIotPostImei", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotPostImeiResponse({}));
  }

  async doIotPostImei(request: DoIotPostImeiRequest): Promise<DoIotPostImeiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotPostImeiWithOptions(request, runtime);
  }

  async doIotRechargeWithOptions(request: DoIotRechargeRequest, runtime: $Util.RuntimeOptions): Promise<DoIotRechargeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotRechargeResponse>(await this.doRPCRequest("DoIotRecharge", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotRechargeResponse({}));
  }

  async doIotRecharge(request: DoIotRechargeRequest): Promise<DoIotRechargeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotRechargeWithOptions(request, runtime);
  }

  async doIotSetAbsoluteRemindConfigWithOptions(request: DoIotSetAbsoluteRemindConfigRequest, runtime: $Util.RuntimeOptions): Promise<DoIotSetAbsoluteRemindConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotSetAbsoluteRemindConfigResponse>(await this.doRPCRequest("DoIotSetAbsoluteRemindConfig", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotSetAbsoluteRemindConfigResponse({}));
  }

  async doIotSetAbsoluteRemindConfig(request: DoIotSetAbsoluteRemindConfigRequest): Promise<DoIotSetAbsoluteRemindConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotSetAbsoluteRemindConfigWithOptions(request, runtime);
  }

  async doIotSetRemindConfigWithOptions(request: DoIotSetRemindConfigRequest, runtime: $Util.RuntimeOptions): Promise<DoIotSetRemindConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotSetRemindConfigResponse>(await this.doRPCRequest("DoIotSetRemindConfig", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotSetRemindConfigResponse({}));
  }

  async doIotSetRemindConfig(request: DoIotSetRemindConfigRequest): Promise<DoIotSetRemindConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotSetRemindConfigWithOptions(request, runtime);
  }

  async doIotUnbindResumeWithOptions(request: DoIotUnbindResumeRequest, runtime: $Util.RuntimeOptions): Promise<DoIotUnbindResumeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotUnbindResumeResponse>(await this.doRPCRequest("DoIotUnbindResume", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotUnbindResumeResponse({}));
  }

  async doIotUnbindResume(request: DoIotUnbindResumeRequest): Promise<DoIotUnbindResumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotUnbindResumeWithOptions(request, runtime);
  }

  async doIotUserStopResumeWithOptions(request: DoIotUserStopResumeRequest, runtime: $Util.RuntimeOptions): Promise<DoIotUserStopResumeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoIotUserStopResumeResponse>(await this.doRPCRequest("DoIotUserStopResume", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoIotUserStopResumeResponse({}));
  }

  async doIotUserStopResume(request: DoIotUserStopResumeRequest): Promise<DoIotUserStopResumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doIotUserStopResumeWithOptions(request, runtime);
  }

  async doSendIotSmsWithOptions(request: DoSendIotSmsRequest, runtime: $Util.RuntimeOptions): Promise<DoSendIotSmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoSendIotSmsResponse>(await this.doRPCRequest("DoSendIotSms", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DoSendIotSmsResponse({}));
  }

  async doSendIotSms(request: DoSendIotSmsRequest): Promise<DoSendIotSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doSendIotSmsWithOptions(request, runtime);
  }

  async queryCardFlowInfoWithOptions(request: QueryCardFlowInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCardFlowInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCardFlowInfoResponse>(await this.doRPCRequest("QueryCardFlowInfo", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCardFlowInfoResponse({}));
  }

  async queryCardFlowInfo(request: QueryCardFlowInfoRequest): Promise<QueryCardFlowInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCardFlowInfoWithOptions(request, runtime);
  }

  async queryCardHistoryFlowInfoWithOptions(request: QueryCardHistoryFlowInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCardHistoryFlowInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCardHistoryFlowInfoResponse>(await this.doRPCRequest("QueryCardHistoryFlowInfo", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCardHistoryFlowInfoResponse({}));
  }

  async queryCardHistoryFlowInfo(request: QueryCardHistoryFlowInfoRequest): Promise<QueryCardHistoryFlowInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCardHistoryFlowInfoWithOptions(request, runtime);
  }

  async queryCardInfoWithOptions(request: QueryCardInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCardInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCardInfoResponse>(await this.doRPCRequest("QueryCardInfo", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCardInfoResponse({}));
  }

  async queryCardInfo(request: QueryCardInfoRequest): Promise<QueryCardInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCardInfoWithOptions(request, runtime);
  }

  async queryCardsInfoWithOptions(request: QueryCardsInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCardsInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCardsInfoResponse>(await this.doRPCRequest("QueryCardsInfo", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCardsInfoResponse({}));
  }

  async queryCardsInfo(request: QueryCardsInfoRequest): Promise<QueryCardsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCardsInfoWithOptions(request, runtime);
  }

  async queryCardStatusWithOptions(request: QueryCardStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryCardStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCardStatusResponse>(await this.doRPCRequest("QueryCardStatus", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCardStatusResponse({}));
  }

  async queryCardStatus(request: QueryCardStatusRequest): Promise<QueryCardStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCardStatusWithOptions(request, runtime);
  }

  async queryIotCardOfferDtlWithOptions(request: QueryIotCardOfferDtlRequest, runtime: $Util.RuntimeOptions): Promise<QueryIotCardOfferDtlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryIotCardOfferDtlResponse>(await this.doRPCRequest("QueryIotCardOfferDtl", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryIotCardOfferDtlResponse({}));
  }

  async queryIotCardOfferDtl(request: QueryIotCardOfferDtlRequest): Promise<QueryIotCardOfferDtlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIotCardOfferDtlWithOptions(request, runtime);
  }

  async queryPersonalInfoWithOptions(request: QueryPersonalInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPersonalInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPersonalInfoResponse>(await this.doRPCRequest("QueryPersonalInfo", "2017-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPersonalInfoResponse({}));
  }

  async queryPersonalInfo(request: QueryPersonalInfoRequest): Promise<QueryPersonalInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPersonalInfoWithOptions(request, runtime);
  }

}
