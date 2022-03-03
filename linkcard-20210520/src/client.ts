// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  body: GetCardDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetCardFlowInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetCredentialPoolStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCredentialPoolStatisticsResponseBody,
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
  body: RebindResumeSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebindResumeSingleCardResponseBody,
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
  body: ResumeSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeSingleCardResponseBody,
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
  body: StopSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopSingleCardResponseBody,
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
  msisdn?: string[];
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
      msisdn: 'Msisdn',
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
      msisdn: { 'type': 'array', 'itemType': 'string' },
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
  signalStrength?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      netWorkDelay: 'NetWorkDelay',
      signalStrength: 'SignalStrength',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netWorkDelay: 'string',
      signalStrength: 'string',
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

}
