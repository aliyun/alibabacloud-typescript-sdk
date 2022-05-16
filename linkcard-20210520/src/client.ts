// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CardStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: CardStatisticsResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CardStatisticsResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CardStatisticsResponseBody;
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
      body: CardStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceActivationRequest extends $tea.Model {
  dateType?: string;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceActivationResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceActivationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ForceActivationResponseBody;
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
      body: ForceActivationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailRequest extends $tea.Model {
  destroyCard?: boolean;
  iccid?: string;
  instanceId?: string;
  showPsim?: boolean;
  static names(): { [key: string]: string } {
    return {
      destroyCard: 'DestroyCard',
      iccid: 'Iccid',
      instanceId: 'InstanceId',
      showPsim: 'ShowPsim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destroyCard: 'boolean',
      iccid: 'string',
      instanceId: 'string',
      showPsim: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetCardDetailResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCardDetailResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardDetailResponseBody;
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
      body: GetCardDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoRequest extends $tea.Model {
  dateList?: string[];
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      dateList: 'DateList',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateList: { 'type': 'array', 'itemType': 'string' },
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetCardFlowInfoResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCardFlowInfoResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardFlowInfoResponseBody;
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
      body: GetCardFlowInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsRequest extends $tea.Model {
  credentialNO?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      credentialNO: 'CredentialNO',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialNO: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: GetCredentialPoolStatisticsResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCredentialPoolStatisticsResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCredentialPoolStatisticsResponseBody;
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
      body: GetCredentialPoolStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoRequest extends $tea.Model {
  activeTimeEnd?: string;
  activeTimeStart?: string;
  aliFee?: string;
  aliyunOrderId?: string;
  apnName?: string;
  certifyType?: string;
  credentialNo?: string;
  dataLevel?: string;
  dataType?: string;
  directionalGroupId?: string;
  expireTimeEnd?: string;
  expireTimeStart?: string;
  iccid?: string;
  imsi?: string;
  isAutoRecharge?: boolean;
  msisdn?: string;
  notifyId?: string;
  osStatus?: string;
  pageNo?: number;
  pageSize?: number;
  period?: string;
  poolId?: string;
  simType?: string;
  status?: string;
  tagName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      activeTimeEnd: 'ActiveTimeEnd',
      activeTimeStart: 'ActiveTimeStart',
      aliFee: 'AliFee',
      aliyunOrderId: 'AliyunOrderId',
      apnName: 'ApnName',
      certifyType: 'CertifyType',
      credentialNo: 'CredentialNo',
      dataLevel: 'DataLevel',
      dataType: 'DataType',
      directionalGroupId: 'DirectionalGroupId',
      expireTimeEnd: 'ExpireTimeEnd',
      expireTimeStart: 'ExpireTimeStart',
      iccid: 'Iccid',
      imsi: 'Imsi',
      isAutoRecharge: 'IsAutoRecharge',
      msisdn: 'Msisdn',
      notifyId: 'NotifyId',
      osStatus: 'OsStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      period: 'Period',
      poolId: 'PoolId',
      simType: 'SimType',
      status: 'Status',
      tagName: 'TagName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTimeEnd: 'string',
      activeTimeStart: 'string',
      aliFee: 'string',
      aliyunOrderId: 'string',
      apnName: 'string',
      certifyType: 'string',
      credentialNo: 'string',
      dataLevel: 'string',
      dataType: 'string',
      directionalGroupId: 'string',
      expireTimeEnd: 'string',
      expireTimeStart: 'string',
      iccid: 'string',
      imsi: 'string',
      isAutoRecharge: 'boolean',
      msisdn: 'string',
      notifyId: 'string',
      osStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      period: 'string',
      poolId: 'string',
      simType: 'string',
      status: 'string',
      tagName: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBody extends $tea.Model {
  code?: string;
  data?: ListCardInfoResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCardInfoResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCardInfoResponseBody;
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
      body: ListCardInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderRequest extends $tea.Model {
  endDate?: string;
  orderId?: string;
  orderStatus?: string;
  orderType?: string;
  pageNo?: number;
  pageSize?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      orderId: 'string',
      orderStatus: 'string',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBody extends $tea.Model {
  code?: string;
  data?: ListOrderResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListOrderResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOrderResponseBody;
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
      body: ListOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardRequest extends $tea.Model {
  iccid?: string;
  optMsisdns?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdns: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdns: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardShrinkRequest extends $tea.Model {
  iccid?: string;
  optMsisdnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdnsShrink: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdnsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebindResumeSingleCardResponseBody;
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
      body: RebindResumeSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  buyNum?: number;
  iccid?: string;
  offerCode?: string;
  rechargeType?: string;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      buyNum: 'BuyNum',
      iccid: 'Iccid',
      offerCode: 'OfferCode',
      rechargeType: 'RechargeType',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      buyNum: 'number',
      iccid: 'string',
      offerCode: 'string',
      rechargeType: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResponseBody extends $tea.Model {
  code?: string;
  data?: RenewResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RenewResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewResponseBody;
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
      body: RenewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardRequest extends $tea.Model {
  iccid?: string;
  optMsisdns?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdns: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdns: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardShrinkRequest extends $tea.Model {
  iccid?: string;
  optMsisdnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdnsShrink: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdnsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeSingleCardResponseBody;
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
      body: ResumeSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCardStopRuleRequest extends $tea.Model {
  autoRestore?: boolean;
  flowLimit?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      autoRestore: 'AutoRestore',
      flowLimit: 'FlowLimit',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRestore: 'boolean',
      flowLimit: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCardStopRuleResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCardStopRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetCardStopRuleResponseBody;
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
      body: SetCardStopRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardRequest extends $tea.Model {
  iccid?: string;
  optMsisdns?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdns: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdns: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardShrinkRequest extends $tea.Model {
  iccid?: string;
  optMsisdnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdnsShrink: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdnsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopSingleCardResponseBody;
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
      body: StopSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoRechargeSwitchRequest extends $tea.Model {
  iccid?: string;
  open?: boolean;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      open: 'Open',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      open: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoRechargeSwitchResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoRechargeSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAutoRechargeSwitchResponseBody;
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
      body: UpdateAutoRechargeSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataErrorStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataExhaustStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataExpireStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataFlowOutStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataManageStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataRiskWaringStatisticsDTO extends $tea.Model {
  stopCount?: number;
  waringTotalCount?: number;
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      stopCount: 'StopCount',
      waringTotalCount: 'WaringTotalCount',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopCount: 'number',
      waringTotalCount: 'number',
      warningCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataUnCertifiedStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataUnbindResumeStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyDataWeekWarnStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardStatisticsResponseBodyData extends $tea.Model {
  errorStopStatisticsDTO?: CardStatisticsResponseBodyDataErrorStopStatisticsDTO;
  exhaustStopStatisticsDTO?: CardStatisticsResponseBodyDataExhaustStopStatisticsDTO;
  expireStopStatisticsDTO?: CardStatisticsResponseBodyDataExpireStopStatisticsDTO;
  flowOutStatisticsDTO?: CardStatisticsResponseBodyDataFlowOutStatisticsDTO;
  manageStopStatisticsDTO?: CardStatisticsResponseBodyDataManageStopStatisticsDTO;
  riskWaringStatisticsDTO?: CardStatisticsResponseBodyDataRiskWaringStatisticsDTO;
  unCertifiedStopStatisticsDTO?: CardStatisticsResponseBodyDataUnCertifiedStopStatisticsDTO;
  unbindResumeStatisticsDTO?: CardStatisticsResponseBodyDataUnbindResumeStatisticsDTO;
  weekWarnStatisticsDTO?: CardStatisticsResponseBodyDataWeekWarnStatisticsDTO;
  static names(): { [key: string]: string } {
    return {
      errorStopStatisticsDTO: 'ErrorStopStatisticsDTO',
      exhaustStopStatisticsDTO: 'ExhaustStopStatisticsDTO',
      expireStopStatisticsDTO: 'ExpireStopStatisticsDTO',
      flowOutStatisticsDTO: 'FlowOutStatisticsDTO',
      manageStopStatisticsDTO: 'ManageStopStatisticsDTO',
      riskWaringStatisticsDTO: 'RiskWaringStatisticsDTO',
      unCertifiedStopStatisticsDTO: 'UnCertifiedStopStatisticsDTO',
      unbindResumeStatisticsDTO: 'UnbindResumeStatisticsDTO',
      weekWarnStatisticsDTO: 'WeekWarnStatisticsDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorStopStatisticsDTO: CardStatisticsResponseBodyDataErrorStopStatisticsDTO,
      exhaustStopStatisticsDTO: CardStatisticsResponseBodyDataExhaustStopStatisticsDTO,
      expireStopStatisticsDTO: CardStatisticsResponseBodyDataExpireStopStatisticsDTO,
      flowOutStatisticsDTO: CardStatisticsResponseBodyDataFlowOutStatisticsDTO,
      manageStopStatisticsDTO: CardStatisticsResponseBodyDataManageStopStatisticsDTO,
      riskWaringStatisticsDTO: CardStatisticsResponseBodyDataRiskWaringStatisticsDTO,
      unCertifiedStopStatisticsDTO: CardStatisticsResponseBodyDataUnCertifiedStopStatisticsDTO,
      unbindResumeStatisticsDTO: CardStatisticsResponseBodyDataUnbindResumeStatisticsDTO,
      weekWarnStatisticsDTO: CardStatisticsResponseBodyDataWeekWarnStatisticsDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyDataListPsimCards extends $tea.Model {
  apnName?: string;
  certifyStatus?: string;
  iccid?: string;
  imsi?: string[];
  ip?: string[];
  msisdn?: string[];
  openSms?: boolean;
  osStatus?: string;
  periodAddFlow?: string;
  periodSmsUse?: string;
  privateNetworkSegment?: string;
  status?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      apnName: 'ApnName',
      certifyStatus: 'CertifyStatus',
      iccid: 'Iccid',
      imsi: 'Imsi',
      ip: 'Ip',
      msisdn: 'Msisdn',
      openSms: 'OpenSms',
      osStatus: 'OsStatus',
      periodAddFlow: 'PeriodAddFlow',
      periodSmsUse: 'PeriodSmsUse',
      privateNetworkSegment: 'PrivateNetworkSegment',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apnName: 'string',
      certifyStatus: 'string',
      iccid: 'string',
      imsi: { 'type': 'array', 'itemType': 'string' },
      ip: { 'type': 'array', 'itemType': 'string' },
      msisdn: { 'type': 'array', 'itemType': 'string' },
      openSms: 'boolean',
      osStatus: 'string',
      periodAddFlow: 'string',
      periodSmsUse: 'string',
      privateNetworkSegment: 'string',
      status: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyDataVsimCardInfoTagList extends $tea.Model {
  id?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyDataVsimCardInfo extends $tea.Model {
  activeTime?: string;
  activeType?: string;
  aliFee?: string;
  aliyunOrderId?: string;
  apnName?: string;
  autoLimitResume?: boolean;
  autoRebindReuse?: boolean;
  cardLimitSpeedThreshold?: number;
  cardLimitStopThreshold?: number;
  certifyStatus?: string;
  certifyType?: string;
  credentialInstanceId?: string;
  credentialLimitSpeedThreshold?: number;
  credentialLimitStopThreshold?: number;
  credentialNo?: string;
  credentialType?: string;
  dataLevel?: string;
  dataType?: string;
  deviceImei?: string;
  directionalGroupId?: string;
  directionalGroupName?: string;
  expireTime?: string;
  flowThresholdUnit?: string;
  iccid?: string;
  imsi?: string[];
  ip?: string[];
  isAutoRecharge?: boolean;
  msisdn?: string[];
  notifyId?: string;
  openAccountTime?: string;
  openSms?: boolean;
  osStatus?: string;
  period?: string;
  periodAddFlow?: string;
  periodRestFlow?: string;
  periodSmsUse?: string;
  privateNetworkSegment?: string;
  simType?: string;
  status?: string;
  tagList?: GetCardDetailResponseBodyDataVsimCardInfoTagList[];
  vendor?: string;
  vsimInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      activeType: 'ActiveType',
      aliFee: 'AliFee',
      aliyunOrderId: 'AliyunOrderId',
      apnName: 'ApnName',
      autoLimitResume: 'AutoLimitResume',
      autoRebindReuse: 'AutoRebindReuse',
      cardLimitSpeedThreshold: 'CardLimitSpeedThreshold',
      cardLimitStopThreshold: 'CardLimitStopThreshold',
      certifyStatus: 'CertifyStatus',
      certifyType: 'CertifyType',
      credentialInstanceId: 'CredentialInstanceId',
      credentialLimitSpeedThreshold: 'CredentialLimitSpeedThreshold',
      credentialLimitStopThreshold: 'CredentialLimitStopThreshold',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      dataLevel: 'DataLevel',
      dataType: 'DataType',
      deviceImei: 'DeviceImei',
      directionalGroupId: 'DirectionalGroupId',
      directionalGroupName: 'DirectionalGroupName',
      expireTime: 'ExpireTime',
      flowThresholdUnit: 'FlowThresholdUnit',
      iccid: 'Iccid',
      imsi: 'Imsi',
      ip: 'Ip',
      isAutoRecharge: 'IsAutoRecharge',
      msisdn: 'Msisdn',
      notifyId: 'NotifyId',
      openAccountTime: 'OpenAccountTime',
      openSms: 'OpenSms',
      osStatus: 'OsStatus',
      period: 'Period',
      periodAddFlow: 'PeriodAddFlow',
      periodRestFlow: 'PeriodRestFlow',
      periodSmsUse: 'PeriodSmsUse',
      privateNetworkSegment: 'PrivateNetworkSegment',
      simType: 'SimType',
      status: 'Status',
      tagList: 'TagList',
      vendor: 'Vendor',
      vsimInstanceId: 'VsimInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      activeType: 'string',
      aliFee: 'string',
      aliyunOrderId: 'string',
      apnName: 'string',
      autoLimitResume: 'boolean',
      autoRebindReuse: 'boolean',
      cardLimitSpeedThreshold: 'number',
      cardLimitStopThreshold: 'number',
      certifyStatus: 'string',
      certifyType: 'string',
      credentialInstanceId: 'string',
      credentialLimitSpeedThreshold: 'number',
      credentialLimitStopThreshold: 'number',
      credentialNo: 'string',
      credentialType: 'string',
      dataLevel: 'string',
      dataType: 'string',
      deviceImei: 'string',
      directionalGroupId: 'string',
      directionalGroupName: 'string',
      expireTime: 'string',
      flowThresholdUnit: 'string',
      iccid: 'string',
      imsi: { 'type': 'array', 'itemType': 'string' },
      ip: { 'type': 'array', 'itemType': 'string' },
      isAutoRecharge: 'boolean',
      msisdn: { 'type': 'array', 'itemType': 'string' },
      notifyId: 'string',
      openAccountTime: 'string',
      openSms: 'boolean',
      osStatus: 'string',
      period: 'string',
      periodAddFlow: 'string',
      periodRestFlow: 'string',
      periodSmsUse: 'string',
      privateNetworkSegment: 'string',
      simType: 'string',
      status: 'string',
      tagList: { 'type': 'array', 'itemType': GetCardDetailResponseBodyDataVsimCardInfoTagList },
      vendor: 'string',
      vsimInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyData extends $tea.Model {
  listPsimCards?: GetCardDetailResponseBodyDataListPsimCards[];
  vsimCardInfo?: GetCardDetailResponseBodyDataVsimCardInfo;
  static names(): { [key: string]: string } {
    return {
      listPsimCards: 'ListPsimCards',
      vsimCardInfo: 'VsimCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listPsimCards: { 'type': 'array', 'itemType': GetCardDetailResponseBodyDataListPsimCards },
      vsimCardInfo: GetCardDetailResponseBodyDataVsimCardInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListCardMonthFlowListDayFlow extends $tea.Model {
  day?: string;
  flow?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      flow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListCardMonthFlow extends $tea.Model {
  flowCount?: string;
  listDayFlow?: GetCardFlowInfoResponseBodyDataListCardMonthFlowListDayFlow[];
  month?: string;
  static names(): { [key: string]: string } {
    return {
      flowCount: 'FlowCount',
      listDayFlow: 'ListDayFlow',
      month: 'Month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCount: 'string',
      listDayFlow: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListCardMonthFlowListDayFlow },
      month: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListPackageDTO extends $tea.Model {
  effectiveTime?: string;
  expireTime?: string;
  packageName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      packageName: 'PackageName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      expireTime: 'string',
      packageName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListVendorDetail extends $tea.Model {
  netWorkDelay?: string;
  ratio?: string;
  signalStrength?: string;
  usedFlow?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      netWorkDelay: 'NetWorkDelay',
      ratio: 'Ratio',
      signalStrength: 'SignalStrength',
      usedFlow: 'UsedFlow',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netWorkDelay: 'string',
      ratio: 'string',
      signalStrength: 'string',
      usedFlow: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyData extends $tea.Model {
  listCardMonthFlow?: GetCardFlowInfoResponseBodyDataListCardMonthFlow[];
  listPackageDTO?: GetCardFlowInfoResponseBodyDataListPackageDTO[];
  listVendorDetail?: GetCardFlowInfoResponseBodyDataListVendorDetail[];
  static names(): { [key: string]: string } {
    return {
      listCardMonthFlow: 'ListCardMonthFlow',
      listPackageDTO: 'ListPackageDTO',
      listVendorDetail: 'ListVendorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listCardMonthFlow: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListCardMonthFlow },
      listPackageDTO: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListPackageDTO },
      listVendorDetail: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListVendorDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsResponseBodyData extends $tea.Model {
  cardActiveNum?: number;
  cardTotalNum?: number;
  credentialInstanceId?: string;
  credentialNO?: string;
  credentialType?: string;
  effectiveAvailableFlow?: string;
  effectiveTotalFlow?: string;
  monthFeatureFee?: number;
  poolAvaiable?: string;
  poolGrandTotal?: string;
  poolGrandTotalUsed?: string;
  poolOutUsed?: string;
  poolUsed?: string;
  smsUsed?: number;
  static names(): { [key: string]: string } {
    return {
      cardActiveNum: 'CardActiveNum',
      cardTotalNum: 'CardTotalNum',
      credentialInstanceId: 'CredentialInstanceId',
      credentialNO: 'CredentialNO',
      credentialType: 'CredentialType',
      effectiveAvailableFlow: 'EffectiveAvailableFlow',
      effectiveTotalFlow: 'EffectiveTotalFlow',
      monthFeatureFee: 'MonthFeatureFee',
      poolAvaiable: 'PoolAvaiable',
      poolGrandTotal: 'PoolGrandTotal',
      poolGrandTotalUsed: 'PoolGrandTotalUsed',
      poolOutUsed: 'PoolOutUsed',
      poolUsed: 'PoolUsed',
      smsUsed: 'SmsUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardActiveNum: 'number',
      cardTotalNum: 'number',
      credentialInstanceId: 'string',
      credentialNO: 'string',
      credentialType: 'string',
      effectiveAvailableFlow: 'string',
      effectiveTotalFlow: 'string',
      monthFeatureFee: 'number',
      poolAvaiable: 'string',
      poolGrandTotal: 'string',
      poolGrandTotalUsed: 'string',
      poolOutUsed: 'string',
      poolUsed: 'string',
      smsUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBodyDataListTagList extends $tea.Model {
  id?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBodyDataList extends $tea.Model {
  activeTime?: string;
  activeType?: string;
  aliFee?: string;
  aliyunOrderId?: string;
  apnName?: string;
  certifyType?: string;
  credentialInstanceId?: string;
  credentialNo?: string;
  credentialType?: string;
  dataLevel?: string;
  dataType?: string;
  directionalGroupName?: string;
  expireTime?: string;
  iccid?: string;
  imsi?: string[];
  isAutoRecharge?: boolean;
  msisdn?: string[];
  notifyId?: string;
  openAccountTime?: string;
  osStatus?: string;
  period?: string;
  periodAddFlow?: string;
  periodRestFlow?: string;
  periodSmsUse?: string;
  privateNetworkSegment?: string;
  remark?: string;
  simType?: string;
  status?: string;
  tagList?: ListCardInfoResponseBodyDataListTagList[];
  vendor?: string;
  vsimInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      activeType: 'ActiveType',
      aliFee: 'AliFee',
      aliyunOrderId: 'AliyunOrderId',
      apnName: 'ApnName',
      certifyType: 'CertifyType',
      credentialInstanceId: 'CredentialInstanceId',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      dataLevel: 'DataLevel',
      dataType: 'DataType',
      directionalGroupName: 'DirectionalGroupName',
      expireTime: 'ExpireTime',
      iccid: 'Iccid',
      imsi: 'Imsi',
      isAutoRecharge: 'IsAutoRecharge',
      msisdn: 'Msisdn',
      notifyId: 'NotifyId',
      openAccountTime: 'OpenAccountTime',
      osStatus: 'OsStatus',
      period: 'Period',
      periodAddFlow: 'PeriodAddFlow',
      periodRestFlow: 'PeriodRestFlow',
      periodSmsUse: 'PeriodSmsUse',
      privateNetworkSegment: 'PrivateNetworkSegment',
      remark: 'Remark',
      simType: 'SimType',
      status: 'Status',
      tagList: 'TagList',
      vendor: 'Vendor',
      vsimInstanceId: 'VsimInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      activeType: 'string',
      aliFee: 'string',
      aliyunOrderId: 'string',
      apnName: 'string',
      certifyType: 'string',
      credentialInstanceId: 'string',
      credentialNo: 'string',
      credentialType: 'string',
      dataLevel: 'string',
      dataType: 'string',
      directionalGroupName: 'string',
      expireTime: 'string',
      iccid: 'string',
      imsi: { 'type': 'array', 'itemType': 'string' },
      isAutoRecharge: 'boolean',
      msisdn: { 'type': 'array', 'itemType': 'string' },
      notifyId: 'string',
      openAccountTime: 'string',
      osStatus: 'string',
      period: 'string',
      periodAddFlow: 'string',
      periodRestFlow: 'string',
      periodSmsUse: 'string',
      privateNetworkSegment: 'string',
      remark: 'string',
      simType: 'string',
      status: 'string',
      tagList: { 'type': 'array', 'itemType': ListCardInfoResponseBodyDataListTagList },
      vendor: 'string',
      vsimInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBodyData extends $tea.Model {
  list?: ListCardInfoResponseBodyDataList[];
  pageCount?: number;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCardInfoResponseBodyDataList },
      pageCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBodyDataListDeliveryInfo extends $tea.Model {
  address?: string;
  buyerMessage?: string;
  mail?: string;
  receiver?: string;
  zipCode?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      buyerMessage: 'BuyerMessage',
      mail: 'Mail',
      receiver: 'Receiver',
      zipCode: 'ZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      buyerMessage: 'string',
      mail: 'string',
      receiver: 'string',
      zipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBodyDataList extends $tea.Model {
  aliFee?: string;
  billingCycle?: string;
  buyNum?: number;
  cardPayCount?: number;
  credentialNo?: string;
  credentialPackage?: string;
  dataLevel?: string;
  deliveryInfo?: ListOrderResponseBodyDataListDeliveryInfo;
  expressNoList?: string[];
  flowType?: string;
  functionFee?: number;
  orderDetailUrl?: string;
  orderId?: string;
  orderInfo?: string;
  orderStatus?: string;
  orderType?: string;
  payDuration?: string;
  payTime?: string;
  poolCapacity?: string;
  poolCapacityUnit?: string;
  poolNo?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      aliFee: 'AliFee',
      billingCycle: 'BillingCycle',
      buyNum: 'BuyNum',
      cardPayCount: 'CardPayCount',
      credentialNo: 'CredentialNo',
      credentialPackage: 'CredentialPackage',
      dataLevel: 'DataLevel',
      deliveryInfo: 'DeliveryInfo',
      expressNoList: 'ExpressNoList',
      flowType: 'FlowType',
      functionFee: 'FunctionFee',
      orderDetailUrl: 'OrderDetailUrl',
      orderId: 'OrderId',
      orderInfo: 'OrderInfo',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      payDuration: 'PayDuration',
      payTime: 'PayTime',
      poolCapacity: 'PoolCapacity',
      poolCapacityUnit: 'PoolCapacityUnit',
      poolNo: 'PoolNo',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliFee: 'string',
      billingCycle: 'string',
      buyNum: 'number',
      cardPayCount: 'number',
      credentialNo: 'string',
      credentialPackage: 'string',
      dataLevel: 'string',
      deliveryInfo: ListOrderResponseBodyDataListDeliveryInfo,
      expressNoList: { 'type': 'array', 'itemType': 'string' },
      flowType: 'string',
      functionFee: 'number',
      orderDetailUrl: 'string',
      orderId: 'string',
      orderInfo: 'string',
      orderStatus: 'string',
      orderType: 'string',
      payDuration: 'string',
      payTime: 'string',
      poolCapacity: 'string',
      poolCapacityUnit: 'string',
      poolNo: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBodyData extends $tea.Model {
  list?: ListOrderResponseBodyDataList[];
  pageCount?: number;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListOrderResponseBodyDataList },
      pageCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResponseBodyData extends $tea.Model {
  orderNo?: string;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
      serialNo: 'string',
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
    this._endpoint = this.getEndpoint("linkcard", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cardStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<CardStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CardStatistics",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CardStatisticsResponse>(await this.callApi(params, req, runtime), new CardStatisticsResponse({}));
  }

  async cardStatistics(): Promise<CardStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cardStatisticsWithOptions(runtime);
  }

  async forceActivationWithOptions(request: ForceActivationRequest, runtime: $Util.RuntimeOptions): Promise<ForceActivationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dateType)) {
      query["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ForceActivation",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ForceActivationResponse>(await this.callApi(params, req, runtime), new ForceActivationResponse({}));
  }

  async forceActivation(request: ForceActivationRequest): Promise<ForceActivationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forceActivationWithOptions(request, runtime);
  }

  async getCardDetailWithOptions(request: GetCardDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetCardDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destroyCard)) {
      query["DestroyCard"] = request.destroyCard;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.showPsim)) {
      query["ShowPsim"] = request.showPsim;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCardDetail",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardDetailResponse>(await this.callApi(params, req, runtime), new GetCardDetailResponse({}));
  }

  async getCardDetail(request: GetCardDetailRequest): Promise<GetCardDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardDetailWithOptions(request, runtime);
  }

  async getCardFlowInfoWithOptions(request: GetCardFlowInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCardFlowInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dateList)) {
      query["DateList"] = request.dateList;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCardFlowInfo",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardFlowInfoResponse>(await this.callApi(params, req, runtime), new GetCardFlowInfoResponse({}));
  }

  async getCardFlowInfo(request: GetCardFlowInfoRequest): Promise<GetCardFlowInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardFlowInfoWithOptions(request, runtime);
  }

  async getCredentialPoolStatisticsWithOptions(request: GetCredentialPoolStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetCredentialPoolStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.credentialNO)) {
      query["CredentialNO"] = request.credentialNO;
    }

    if (!Util.isUnset(request.date)) {
      query["Date"] = request.date;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCredentialPoolStatistics",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCredentialPoolStatisticsResponse>(await this.callApi(params, req, runtime), new GetCredentialPoolStatisticsResponse({}));
  }

  async getCredentialPoolStatistics(request: GetCredentialPoolStatisticsRequest): Promise<GetCredentialPoolStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCredentialPoolStatisticsWithOptions(request, runtime);
  }

  async listCardInfoWithOptions(request: ListCardInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListCardInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeTimeEnd)) {
      query["ActiveTimeEnd"] = request.activeTimeEnd;
    }

    if (!Util.isUnset(request.activeTimeStart)) {
      query["ActiveTimeStart"] = request.activeTimeStart;
    }

    if (!Util.isUnset(request.aliFee)) {
      query["AliFee"] = request.aliFee;
    }

    if (!Util.isUnset(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
    }

    if (!Util.isUnset(request.apnName)) {
      query["ApnName"] = request.apnName;
    }

    if (!Util.isUnset(request.certifyType)) {
      query["CertifyType"] = request.certifyType;
    }

    if (!Util.isUnset(request.credentialNo)) {
      query["CredentialNo"] = request.credentialNo;
    }

    if (!Util.isUnset(request.dataLevel)) {
      query["DataLevel"] = request.dataLevel;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.directionalGroupId)) {
      query["DirectionalGroupId"] = request.directionalGroupId;
    }

    if (!Util.isUnset(request.expireTimeEnd)) {
      query["ExpireTimeEnd"] = request.expireTimeEnd;
    }

    if (!Util.isUnset(request.expireTimeStart)) {
      query["ExpireTimeStart"] = request.expireTimeStart;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.imsi)) {
      query["Imsi"] = request.imsi;
    }

    if (!Util.isUnset(request.isAutoRecharge)) {
      query["IsAutoRecharge"] = request.isAutoRecharge;
    }

    if (!Util.isUnset(request.msisdn)) {
      query["Msisdn"] = request.msisdn;
    }

    if (!Util.isUnset(request.notifyId)) {
      query["NotifyId"] = request.notifyId;
    }

    if (!Util.isUnset(request.osStatus)) {
      query["OsStatus"] = request.osStatus;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.poolId)) {
      query["PoolId"] = request.poolId;
    }

    if (!Util.isUnset(request.simType)) {
      query["SimType"] = request.simType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCardInfo",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCardInfoResponse>(await this.callApi(params, req, runtime), new ListCardInfoResponse({}));
  }

  async listCardInfo(request: ListCardInfoRequest): Promise<ListCardInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCardInfoWithOptions(request, runtime);
  }

  async listOrderWithOptions(request: ListOrderRequest, runtime: $Util.RuntimeOptions): Promise<ListOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrder",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrderResponse>(await this.callApi(params, req, runtime), new ListOrderResponse({}));
  }

  async listOrder(request: ListOrderRequest): Promise<ListOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrderWithOptions(request, runtime);
  }

  async rebindResumeSingleCardWithOptions(tmpReq: RebindResumeSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<RebindResumeSingleCardResponse> {
    Util.validateModel(tmpReq);
    let request = new RebindResumeSingleCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optMsisdns)) {
      request.optMsisdnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optMsisdns, "OptMsisdns", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.optMsisdnsShrink)) {
      query["OptMsisdns"] = request.optMsisdnsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebindResumeSingleCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebindResumeSingleCardResponse>(await this.callApi(params, req, runtime), new RebindResumeSingleCardResponse({}));
  }

  async rebindResumeSingleCard(request: RebindResumeSingleCardRequest): Promise<RebindResumeSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebindResumeSingleCardWithOptions(request, runtime);
  }

  async renewWithOptions(request: RenewRequest, runtime: $Util.RuntimeOptions): Promise<RenewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.buyNum)) {
      query["BuyNum"] = request.buyNum;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.offerCode)) {
      query["OfferCode"] = request.offerCode;
    }

    if (!Util.isUnset(request.rechargeType)) {
      query["RechargeType"] = request.rechargeType;
    }

    if (!Util.isUnset(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiProduct)) {
      body["ApiProduct"] = request.apiProduct;
    }

    if (!Util.isUnset(request.apiRevision)) {
      body["ApiRevision"] = request.apiRevision;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Renew",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewResponse>(await this.callApi(params, req, runtime), new RenewResponse({}));
  }

  async renew(request: RenewRequest): Promise<RenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewWithOptions(request, runtime);
  }

  async resumeSingleCardWithOptions(tmpReq: ResumeSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<ResumeSingleCardResponse> {
    Util.validateModel(tmpReq);
    let request = new ResumeSingleCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optMsisdns)) {
      request.optMsisdnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optMsisdns, "OptMsisdns", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.optMsisdnsShrink)) {
      query["OptMsisdns"] = request.optMsisdnsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeSingleCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeSingleCardResponse>(await this.callApi(params, req, runtime), new ResumeSingleCardResponse({}));
  }

  async resumeSingleCard(request: ResumeSingleCardRequest): Promise<ResumeSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeSingleCardWithOptions(request, runtime);
  }

  async setCardStopRuleWithOptions(request: SetCardStopRuleRequest, runtime: $Util.RuntimeOptions): Promise<SetCardStopRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRestore)) {
      query["AutoRestore"] = request.autoRestore;
    }

    if (!Util.isUnset(request.flowLimit)) {
      query["FlowLimit"] = request.flowLimit;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCardStopRule",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCardStopRuleResponse>(await this.callApi(params, req, runtime), new SetCardStopRuleResponse({}));
  }

  async setCardStopRule(request: SetCardStopRuleRequest): Promise<SetCardStopRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCardStopRuleWithOptions(request, runtime);
  }

  async stopSingleCardWithOptions(tmpReq: StopSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<StopSingleCardResponse> {
    Util.validateModel(tmpReq);
    let request = new StopSingleCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optMsisdns)) {
      request.optMsisdnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optMsisdns, "OptMsisdns", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.optMsisdnsShrink)) {
      query["OptMsisdns"] = request.optMsisdnsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopSingleCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopSingleCardResponse>(await this.callApi(params, req, runtime), new StopSingleCardResponse({}));
  }

  async stopSingleCard(request: StopSingleCardRequest): Promise<StopSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopSingleCardWithOptions(request, runtime);
  }

  async updateAutoRechargeSwitchWithOptions(request: UpdateAutoRechargeSwitchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAutoRechargeSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.open)) {
      query["Open"] = request.open;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAutoRechargeSwitch",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAutoRechargeSwitchResponse>(await this.callApi(params, req, runtime), new UpdateAutoRechargeSwitchResponse({}));
  }

  async updateAutoRechargeSwitch(request: UpdateAutoRechargeSwitchRequest): Promise<UpdateAutoRechargeSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutoRechargeSwitchWithOptions(request, runtime);
  }

}
