// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptPartnerNotificationRequest extends $tea.Model {
  bizId?: string;
  material?: string;
  operation?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      material: 'Material',
      operation: 'Operation',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      material: 'string',
      operation: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptPartnerNotificationResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptPartnerNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AcceptPartnerNotificationResponseBody;
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
      body: AcceptPartnerNotificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNotaryPostRequest extends $tea.Model {
  notaryOrderId?: number;
  receiverAddress?: string;
  receiverName?: string;
  receiverPhone?: string;
  static names(): { [key: string]: string } {
    return {
      notaryOrderId: 'NotaryOrderId',
      receiverAddress: 'ReceiverAddress',
      receiverName: 'ReceiverName',
      receiverPhone: 'ReceiverPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryOrderId: 'number',
      receiverAddress: 'string',
      receiverName: 'string',
      receiverPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNotaryPostResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNotaryPostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyNotaryPostResponseBody;
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
      body: ApplyNotaryPostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskAdjudicationFileRequest extends $tea.Model {
  bizId?: string;
  contactAddress?: string;
  contactCity?: string;
  contactCounty?: string;
  contactDistrict?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactCounty: 'ContactCounty',
      contactDistrict: 'ContactDistrict',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactCounty: 'string',
      contactDistrict: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskAdjudicationFileResponseBody extends $tea.Model {
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

export class AskAdjudicationFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AskAdjudicationFileResponseBody;
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
      body: AskAdjudicationFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindMaterialRequest extends $tea.Model {
  bizId?: string;
  legalNoticeKey?: string;
  loaOssKey?: string;
  materialId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      legalNoticeKey: 'LegalNoticeKey',
      loaOssKey: 'LoaOssKey',
      materialId: 'MaterialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      legalNoticeKey: 'string',
      loaOssKey: 'string',
      materialId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindMaterialResponseBody extends $tea.Model {
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

export class BindMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindMaterialResponseBody;
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
      body: BindMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTradeOrderRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTradeOrderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTradeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelTradeOrderResponseBody;
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
      body: CancelTradeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFlsmFillRequest extends $tea.Model {
  applicantType?: string;
  ossKey?: string;
  personalType?: string;
  wtrName?: string;
  static names(): { [key: string]: string } {
    return {
      applicantType: 'ApplicantType',
      ossKey: 'OssKey',
      personalType: 'PersonalType',
      wtrName: 'WtrName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantType: 'string',
      ossKey: 'string',
      personalType: 'string',
      wtrName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFlsmFillResponseBody extends $tea.Model {
  requestId?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFlsmFillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckFlsmFillResponseBody;
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
      body: CheckFlsmFillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIfCollectedRequest extends $tea.Model {
  itemIdList?: string;
  pageNum?: number;
  pageSize?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      itemIdList: 'ItemIdList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemIdList: 'string',
      pageNum: 'number',
      pageSize: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIfCollectedResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: CheckIfCollectedResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: CheckIfCollectedResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIfCollectedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckIfCollectedResponseBody;
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
      body: CheckIfCollectedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillRequest extends $tea.Model {
  applicantType?: string;
  bizType?: string;
  contactName?: string;
  contactNumber?: string;
  contactZipcode?: string;
  ossKey?: string;
  personalType?: string;
  principalName?: string;
  type?: string;
  wtrName?: string;
  static names(): { [key: string]: string } {
    return {
      applicantType: 'ApplicantType',
      bizType: 'BizType',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactZipcode: 'ContactZipcode',
      ossKey: 'OssKey',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      type: 'Type',
      wtrName: 'WtrName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantType: 'string',
      bizType: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactZipcode: 'string',
      ossKey: 'string',
      personalType: 'string',
      principalName: 'string',
      type: 'string',
      wtrName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillResponseBody extends $tea.Model {
  data?: CheckLoaFillResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckLoaFillResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckLoaFillResponseBody;
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
      body: CheckLoaFillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkIconRequest extends $tea.Model {
  eventSceneType?: number;
  trademarkIconOssKey?: string;
  static names(): { [key: string]: string } {
    return {
      eventSceneType: 'EventSceneType',
      trademarkIconOssKey: 'TrademarkIconOssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSceneType: 'number',
      trademarkIconOssKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkIconResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkIconResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckTrademarkIconResponseBody;
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
      body: CheckTrademarkIconResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkOrderRequest extends $tea.Model {
  agreementId?: string;
  bizId?: string;
  channel?: string;
  isBlackIcon?: boolean;
  loaOssKey?: string;
  logoGoodsId?: string;
  materialId?: string;
  orderData?: string;
  partnerCode?: string;
  phoneNum?: string;
  realUserName?: string;
  registerName?: string;
  registerNumber?: string;
  renewInfoId?: string;
  rootCode?: string;
  tmComment?: string;
  tmIcon?: string;
  tmName?: string;
  tmNameType?: string;
  type?: number;
  uid?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      bizId: 'BizId',
      channel: 'Channel',
      isBlackIcon: 'IsBlackIcon',
      loaOssKey: 'LoaOssKey',
      logoGoodsId: 'LogoGoodsId',
      materialId: 'MaterialId',
      orderData: 'OrderData',
      partnerCode: 'PartnerCode',
      phoneNum: 'PhoneNum',
      realUserName: 'RealUserName',
      registerName: 'RegisterName',
      registerNumber: 'RegisterNumber',
      renewInfoId: 'RenewInfoId',
      rootCode: 'RootCode',
      tmComment: 'TmComment',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNameType: 'TmNameType',
      type: 'Type',
      uid: 'Uid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      bizId: 'string',
      channel: 'string',
      isBlackIcon: 'boolean',
      loaOssKey: 'string',
      logoGoodsId: 'string',
      materialId: 'string',
      orderData: 'string',
      partnerCode: 'string',
      phoneNum: 'string',
      realUserName: 'string',
      registerName: 'string',
      registerNumber: 'string',
      renewInfoId: 'string',
      rootCode: 'string',
      tmComment: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNameType: 'string',
      type: 'number',
      uid: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkOrderResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckTrademarkOrderResponseBody;
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
      body: CheckTrademarkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineLoaRequest extends $tea.Model {
  address?: string;
  applicantType?: string;
  contactName?: string;
  contactPhone?: string;
  contactPostcode?: string;
  materialId?: string;
  materialName?: string;
  nationality?: string;
  personalType?: string;
  principalName?: number;
  tmNumber?: string;
  tmProduceType?: string;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantType: 'ApplicantType',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      contactPostcode: 'ContactPostcode',
      materialId: 'MaterialId',
      materialName: 'MaterialName',
      nationality: 'Nationality',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      tmNumber: 'TmNumber',
      tmProduceType: 'TmProduceType',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applicantType: 'string',
      contactName: 'string',
      contactPhone: 'string',
      contactPostcode: 'string',
      materialId: 'string',
      materialName: 'string',
      nationality: 'string',
      personalType: 'string',
      principalName: 'number',
      tmNumber: 'string',
      tmProduceType: 'string',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineLoaResponseBody extends $tea.Model {
  requestId?: string;
  templateCombineUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateCombineUrl: 'TemplateCombineUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateCombineUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineLoaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CombineLoaResponseBody;
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
      body: CombineLoaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineWTSRequest extends $tea.Model {
  address?: string;
  contact?: string;
  contactAddressPost?: string;
  contactMobile?: string;
  materialId?: string;
  materialName?: string;
  nationality?: string;
  principalName?: string;
  tmNum?: string;
  tmProduceType?: string;
  trademarkName?: string;
  wtsType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      contact: 'Contact',
      contactAddressPost: 'ContactAddressPost',
      contactMobile: 'ContactMobile',
      materialId: 'MaterialId',
      materialName: 'MaterialName',
      nationality: 'Nationality',
      principalName: 'PrincipalName',
      tmNum: 'TmNum',
      tmProduceType: 'TmProduceType',
      trademarkName: 'TrademarkName',
      wtsType: 'WtsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      contact: 'string',
      contactAddressPost: 'string',
      contactMobile: 'string',
      materialId: 'string',
      materialName: 'string',
      nationality: 'string',
      principalName: 'string',
      tmNum: 'string',
      tmProduceType: 'string',
      trademarkName: 'string',
      wtsType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineWTSResponseBody extends $tea.Model {
  requestId?: string;
  templateCombineUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateCombineUrl: 'TemplateCombineUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateCombineUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineWTSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CombineWTSResponseBody;
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
      body: CombineWTSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplementIntentionUserIdRequest extends $tea.Model {
  aliyunKp?: string;
  bid?: string;
  bizId?: string;
  callerParentId?: number;
  callerType?: string;
  complementUserId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunKp: 'AliyunKp',
      bid: 'Bid',
      bizId: 'BizId',
      callerParentId: 'CallerParentId',
      callerType: 'CallerType',
      complementUserId: 'ComplementUserId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunKp: 'string',
      bid: 'string',
      bizId: 'string',
      callerParentId: 'number',
      callerType: 'string',
      complementUserId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplementIntentionUserIdResponseBody extends $tea.Model {
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

export class ComplementIntentionUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ComplementIntentionUserIdResponseBody;
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
      body: ComplementIntentionUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmAdditionalMaterialRequest extends $tea.Model {
  bizId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmAdditionalMaterialResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmAdditionalMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfirmAdditionalMaterialResponseBody;
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
      body: ConfirmAdditionalMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmApplicantRequest extends $tea.Model {
  bizId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmApplicantResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmApplicantResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfirmApplicantResponseBody;
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
      body: ConfirmApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDissentOriginalRequest extends $tea.Model {
  bizId?: string;
  contactAddress?: string;
  contactCity?: string;
  contactCounty?: string;
  contactDistrict?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactCounty: 'ContactCounty',
      contactDistrict: 'ContactDistrict',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactCounty: 'string',
      contactDistrict: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDissentOriginalResponseBody extends $tea.Model {
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

export class ConfirmDissentOriginalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfirmDissentOriginalResponseBody;
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
      body: ConfirmDissentOriginalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertImageToGrayRequest extends $tea.Model {
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertImageToGrayResponseBody extends $tea.Model {
  requestId?: string;
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertImageToGrayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConvertImageToGrayResponseBody;
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
      body: ConvertImageToGrayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyApplicantRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyApplicantResponseBody extends $tea.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyApplicantResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CopyApplicantResponseBody;
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
      body: CopyApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderRequest extends $tea.Model {
  channel?: string;
  intentionBizId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      intentionBizId: 'IntentionBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      intentionBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderResponseBody extends $tea.Model {
  data?: CreateIntentionOrderResponseBodyData;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateIntentionOrderResponseBodyData,
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIntentionOrderResponseBody;
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
      body: CreateIntentionOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderGeneratingPayRequest extends $tea.Model {
  channel?: string;
  intentionBizId?: string;
  paymentCallback?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      intentionBizId: 'IntentionBizId',
      paymentCallback: 'PaymentCallback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      intentionBizId: 'string',
      paymentCallback: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderGeneratingPayResponseBody extends $tea.Model {
  errorMsg?: string;
  orderIds?: number[];
  payUrl?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      orderIds: 'OrderIds',
      payUrl: 'PayUrl',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      orderIds: { 'type': 'array', 'itemType': 'number' },
      payUrl: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderGeneratingPayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIntentionOrderGeneratingPayResponseBody;
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
      body: CreateIntentionOrderGeneratingPayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkOrderRequest extends $tea.Model {
  agreementId?: string;
  bigDipperSource?: string;
  bizId?: string;
  channel?: string;
  isBlackIcon?: boolean;
  legalNoticeKey?: string;
  loaOssKey?: string;
  materialId?: string;
  orderData?: string;
  partnerCode?: string;
  phoneNum?: string;
  principalName?: number;
  realUserName?: string;
  registerName?: string;
  registerNumber?: string;
  renewInfoId?: string;
  rootCode?: string;
  sessionId?: string;
  tmComment?: string;
  tmIcon?: string;
  tmName?: string;
  tmNameType?: string;
  type?: number;
  ua?: string;
  uid?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      bigDipperSource: 'BigDipperSource',
      bizId: 'BizId',
      channel: 'Channel',
      isBlackIcon: 'IsBlackIcon',
      legalNoticeKey: 'LegalNoticeKey',
      loaOssKey: 'LoaOssKey',
      materialId: 'MaterialId',
      orderData: 'OrderData',
      partnerCode: 'PartnerCode',
      phoneNum: 'PhoneNum',
      principalName: 'PrincipalName',
      realUserName: 'RealUserName',
      registerName: 'RegisterName',
      registerNumber: 'RegisterNumber',
      renewInfoId: 'RenewInfoId',
      rootCode: 'RootCode',
      sessionId: 'SessionId',
      tmComment: 'TmComment',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNameType: 'TmNameType',
      type: 'Type',
      ua: 'Ua',
      uid: 'Uid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      bigDipperSource: 'string',
      bizId: 'string',
      channel: 'string',
      isBlackIcon: 'boolean',
      legalNoticeKey: 'string',
      loaOssKey: 'string',
      materialId: 'string',
      orderData: 'string',
      partnerCode: 'string',
      phoneNum: 'string',
      principalName: 'number',
      realUserName: 'string',
      registerName: 'string',
      registerNumber: 'string',
      renewInfoId: 'string',
      rootCode: 'string',
      sessionId: 'string',
      tmComment: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNameType: 'string',
      type: 'number',
      ua: 'string',
      uid: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkOrderResponseBody extends $tea.Model {
  errorMsg?: string;
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTrademarkOrderResponseBody;
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
      body: CreateTrademarkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMaterialResponseBody;
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
      body: DeleteMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTmMonitorRuleRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTmMonitorRuleResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTmMonitorRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTmMonitorRuleResponseBody;
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
      body: DeleteTmMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrademarkApplicationRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrademarkApplicationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrademarkApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTrademarkApplicationResponseBody;
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
      body: DeleteTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DenySupplementRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DenySupplementResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DenySupplementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DenySupplementResponseBody;
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
      body: DenySupplementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkRequest extends $tea.Model {
  accurateMatch?: boolean;
  classification?: string;
  name?: string;
  ownerName?: string;
  pageNumber?: number;
  pageSize?: number;
  products?: string;
  registrationNumber?: string;
  similarGroups?: string;
  static names(): { [key: string]: string } {
    return {
      accurateMatch: 'AccurateMatch',
      classification: 'Classification',
      name: 'Name',
      ownerName: 'OwnerName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      products: 'Products',
      registrationNumber: 'RegistrationNumber',
      similarGroups: 'SimilarGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accurateMatch: 'boolean',
      classification: 'string',
      name: 'string',
      ownerName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      products: 'string',
      registrationNumber: 'string',
      similarGroups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponseBody extends $tea.Model {
  currentPageNumber?: number;
  data?: DescirbeCombineTrademarkResponseBodyData[];
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  totalItemNumber?: number;
  totalPageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNumber: 'CurrentPageNumber',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNumber: 'TotalItemNumber',
      totalPageNumber: 'TotalPageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNumber: 'number',
      data: { 'type': 'array', 'itemType': DescirbeCombineTrademarkResponseBodyData },
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNumber: 'number',
      totalPageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescirbeCombineTrademarkResponseBody;
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
      body: DescirbeCombineTrademarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FillLogisticsRequest extends $tea.Model {
  bizId?: string;
  logistics?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      logistics: 'Logistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      logistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FillLogisticsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FillLogisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FillLogisticsResponseBody;
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
      body: FillLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUnavailableCodesRequest extends $tea.Model {
  codes?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUnavailableCodesShrinkRequest extends $tea.Model {
  codesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      codesShrink: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUnavailableCodesResponseBody extends $tea.Model {
  data?: FilterUnavailableCodesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: FilterUnavailableCodesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUnavailableCodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FilterUnavailableCodesResponseBody;
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
      body: FilterUnavailableCodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceUploadTrademarkOnsaleRequest extends $tea.Model {
  beginTime?: number;
  classificationCode?: string;
  description?: string;
  endTime?: number;
  label?: string;
  originalPrice?: number;
  ownerEnName?: string;
  ownerName?: string;
  reason?: string;
  regAnnDate?: number;
  secondaryClassification?: string;
  thirdClassification?: string;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      classificationCode: 'ClassificationCode',
      description: 'Description',
      endTime: 'EndTime',
      label: 'Label',
      originalPrice: 'OriginalPrice',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      reason: 'Reason',
      regAnnDate: 'RegAnnDate',
      secondaryClassification: 'SecondaryClassification',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      classificationCode: 'string',
      description: 'string',
      endTime: 'number',
      label: 'string',
      originalPrice: 'number',
      ownerEnName: 'string',
      ownerName: 'string',
      reason: 'string',
      regAnnDate: 'number',
      secondaryClassification: 'string',
      thirdClassification: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceUploadTrademarkOnsaleResponseBody extends $tea.Model {
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

export class ForceUploadTrademarkOnsaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ForceUploadTrademarkOnsaleResponseBody;
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
      body: ForceUploadTrademarkOnsaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateQrCodeRequest extends $tea.Model {
  fieldKey?: string;
  ossKey?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      ossKey: 'OssKey',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      ossKey: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateQrCodeResponseBody extends $tea.Model {
  expireTime?: number;
  fieldKey?: string;
  qrcodeUrl?: string;
  requestId?: string;
  success?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      fieldKey: 'FieldKey',
      qrcodeUrl: 'QrcodeUrl',
      requestId: 'RequestId',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      fieldKey: 'string',
      qrcodeUrl: 'string',
      requestId: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateQrCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateQrCodeResponseBody;
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
      body: GenerateQrCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyRequest extends $tea.Model {
  bizId?: string;
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyResponseBody extends $tea.Model {
  accessId?: string;
  encodedPolicy?: string;
  expireTime?: number;
  fileDir?: string;
  host?: string;
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      encodedPolicy: 'EncodedPolicy',
      expireTime: 'ExpireTime',
      fileDir: 'FileDir',
      host: 'Host',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      encodedPolicy: 'string',
      expireTime: 'number',
      fileDir: 'string',
      host: 'string',
      requestId: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateUploadFilePolicyResponseBody;
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
      body: GenerateUploadFilePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationLetterVersionRequest extends $tea.Model {
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationLetterVersionResponseBody extends $tea.Model {
  requestId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationLetterVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAuthorizationLetterVersionResponseBody;
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
      body: GetAuthorizationLetterVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultPrincipalResponseBody extends $tea.Model {
  principalDescription?: string;
  principalName?: string;
  principalValue?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      principalDescription: 'PrincipalDescription',
      principalName: 'PrincipalName',
      principalValue: 'PrincipalValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalDescription: 'string',
      principalName: 'string',
      principalValue: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultPrincipalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDefaultPrincipalResponseBody;
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
      body: GetDefaultPrincipalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultPrincipalNameRequest extends $tea.Model {
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultPrincipalNameResponseBody extends $tea.Model {
  principalName?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultPrincipalNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDefaultPrincipalNameResponseBody;
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
      body: GetDefaultPrincipalNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotaryOrderRequest extends $tea.Model {
  notaryOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      notaryOrderId: 'NotaryOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotaryOrderResponseBody extends $tea.Model {
  aliyunOrderId?: string;
  applyPostStatus?: number;
  bizId?: string;
  businessLicense?: string;
  businessLicenseId?: string;
  companyContactName?: string;
  companyContactPhone?: string;
  errorCode?: string;
  errorMsg?: string;
  legalPersonIdCard?: string;
  legalPersonName?: string;
  legalPersonPhone?: string;
  name?: string;
  notaryAcceptDate?: number;
  notaryCertificate?: string;
  notaryFailedDate?: number;
  notaryFailedReason?: string;
  notaryOrderId?: number;
  notaryPlatformName?: string;
  notaryPostReceipt?: string;
  notaryStatus?: number;
  notarySucceedDate?: number;
  notaryType?: number;
  orderDate?: number;
  orderPrice?: number;
  phone?: string;
  receiverAddress?: string;
  receiverName?: string;
  receiverPhone?: string;
  receiverPostalCode?: string;
  requestId?: string;
  sellerBackOfIdCard?: string;
  sellerCompanyName?: string;
  sellerFrontOfIdCard?: string;
  success?: boolean;
  tmAcceptCertificate?: string;
  tmClassification?: string;
  tmImage?: string;
  tmName?: string;
  tmRegisterCertificate?: string;
  tmRegisterChangeCertificate?: string;
  tmRegisterNo?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunOrderId: 'AliyunOrderId',
      applyPostStatus: 'ApplyPostStatus',
      bizId: 'BizId',
      businessLicense: 'BusinessLicense',
      businessLicenseId: 'BusinessLicenseId',
      companyContactName: 'CompanyContactName',
      companyContactPhone: 'CompanyContactPhone',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      legalPersonIdCard: 'LegalPersonIdCard',
      legalPersonName: 'LegalPersonName',
      legalPersonPhone: 'LegalPersonPhone',
      name: 'Name',
      notaryAcceptDate: 'NotaryAcceptDate',
      notaryCertificate: 'NotaryCertificate',
      notaryFailedDate: 'NotaryFailedDate',
      notaryFailedReason: 'NotaryFailedReason',
      notaryOrderId: 'NotaryOrderId',
      notaryPlatformName: 'NotaryPlatformName',
      notaryPostReceipt: 'NotaryPostReceipt',
      notaryStatus: 'NotaryStatus',
      notarySucceedDate: 'NotarySucceedDate',
      notaryType: 'NotaryType',
      orderDate: 'OrderDate',
      orderPrice: 'OrderPrice',
      phone: 'Phone',
      receiverAddress: 'ReceiverAddress',
      receiverName: 'ReceiverName',
      receiverPhone: 'ReceiverPhone',
      receiverPostalCode: 'ReceiverPostalCode',
      requestId: 'RequestId',
      sellerBackOfIdCard: 'SellerBackOfIdCard',
      sellerCompanyName: 'SellerCompanyName',
      sellerFrontOfIdCard: 'SellerFrontOfIdCard',
      success: 'Success',
      tmAcceptCertificate: 'TmAcceptCertificate',
      tmClassification: 'TmClassification',
      tmImage: 'TmImage',
      tmName: 'TmName',
      tmRegisterCertificate: 'TmRegisterCertificate',
      tmRegisterChangeCertificate: 'TmRegisterChangeCertificate',
      tmRegisterNo: 'TmRegisterNo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunOrderId: 'string',
      applyPostStatus: 'number',
      bizId: 'string',
      businessLicense: 'string',
      businessLicenseId: 'string',
      companyContactName: 'string',
      companyContactPhone: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      legalPersonIdCard: 'string',
      legalPersonName: 'string',
      legalPersonPhone: 'string',
      name: 'string',
      notaryAcceptDate: 'number',
      notaryCertificate: 'string',
      notaryFailedDate: 'number',
      notaryFailedReason: 'string',
      notaryOrderId: 'number',
      notaryPlatformName: 'string',
      notaryPostReceipt: 'string',
      notaryStatus: 'number',
      notarySucceedDate: 'number',
      notaryType: 'number',
      orderDate: 'number',
      orderPrice: 'number',
      phone: 'string',
      receiverAddress: 'string',
      receiverName: 'string',
      receiverPhone: 'string',
      receiverPostalCode: 'string',
      requestId: 'string',
      sellerBackOfIdCard: 'string',
      sellerCompanyName: 'string',
      sellerFrontOfIdCard: 'string',
      success: 'boolean',
      tmAcceptCertificate: 'string',
      tmClassification: 'string',
      tmImage: 'string',
      tmName: 'string',
      tmRegisterCertificate: 'string',
      tmRegisterChangeCertificate: 'string',
      tmRegisterNo: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotaryOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNotaryOrderResponseBody;
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
      body: GetNotaryOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportPrincipalNameResponseBody extends $tea.Model {
  principals?: GetSupportPrincipalNameResponseBodyPrincipals[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      principals: 'Principals',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principals: { 'type': 'array', 'itemType': GetSupportPrincipalNameResponseBodyPrincipals },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportPrincipalNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSupportPrincipalNameResponseBody;
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
      body: GetSupportPrincipalNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertMaterialRequest extends $tea.Model {
  address?: string;
  businessLicenceOssKey?: string;
  cardNumber?: string;
  city?: string;
  contactAddress?: string;
  contactCity?: string;
  contactCounty?: string;
  contactDistrict?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipcode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardName?: string;
  idCardNumber?: string;
  idCardOssKey?: string;
  legalNoticeOssKey?: string;
  loaOssKey?: string;
  name?: string;
  passportOssKey?: string;
  personalType?: number;
  principalName?: number;
  province?: string;
  region?: number;
  town?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
      city: 'City',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactCounty: 'ContactCounty',
      contactDistrict: 'ContactDistrict',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardOssKey: 'IdCardOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      passportOssKey: 'PassportOssKey',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      province: 'Province',
      region: 'Region',
      town: 'Town',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
      city: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactCounty: 'string',
      contactDistrict: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipcode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardOssKey: 'string',
      legalNoticeOssKey: 'string',
      loaOssKey: 'string',
      name: 'string',
      passportOssKey: 'string',
      personalType: 'number',
      principalName: 'number',
      province: 'string',
      region: 'number',
      town: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertMaterialResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertMaterialResponseBody;
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
      body: InsertMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRenewInfoRequest extends $tea.Model {
  address?: string;
  engAddress?: string;
  engName?: string;
  name?: string;
  registerTime?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      engAddress: 'EngAddress',
      engName: 'EngName',
      name: 'Name',
      registerTime: 'RegisterTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      engAddress: 'string',
      engName: 'string',
      name: 'string',
      registerTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRenewInfoResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  id?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      id: 'Id',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      id: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRenewInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertRenewInfoResponseBody;
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
      body: InsertRenewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleRequest extends $tea.Model {
  classification?: { [key: string]: any };
  endApplyDate?: string;
  notifyStatus?: { [key: string]: any };
  ruleKeyword?: string;
  ruleName?: string;
  ruleSource?: string;
  ruleType?: number;
  startApplyDate?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      endApplyDate: 'EndApplyDate',
      notifyStatus: 'NotifyStatus',
      ruleKeyword: 'RuleKeyword',
      ruleName: 'RuleName',
      ruleSource: 'RuleSource',
      ruleType: 'RuleType',
      startApplyDate: 'StartApplyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endApplyDate: 'string',
      notifyStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ruleKeyword: 'string',
      ruleName: 'string',
      ruleSource: 'string',
      ruleType: 'number',
      startApplyDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleShrinkRequest extends $tea.Model {
  classificationShrink?: string;
  endApplyDate?: string;
  notifyStatusShrink?: string;
  ruleKeyword?: string;
  ruleName?: string;
  ruleSource?: string;
  ruleType?: number;
  startApplyDate?: string;
  static names(): { [key: string]: string } {
    return {
      classificationShrink: 'Classification',
      endApplyDate: 'EndApplyDate',
      notifyStatusShrink: 'NotifyStatus',
      ruleKeyword: 'RuleKeyword',
      ruleName: 'RuleName',
      ruleSource: 'RuleSource',
      ruleType: 'RuleType',
      startApplyDate: 'StartApplyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationShrink: 'string',
      endApplyDate: 'string',
      notifyStatusShrink: 'string',
      ruleKeyword: 'string',
      ruleName: 'string',
      ruleSource: 'string',
      ruleType: 'number',
      startApplyDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertTmMonitorRuleResponseBody;
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
      body: InsertTmMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosRequest extends $tea.Model {
  bizOrderNo?: string;
  notaryType?: number;
  pageNum?: number;
  pageSize?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bizOrderNo: 'BizOrderNo',
      notaryType: 'NotaryType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizOrderNo: 'string',
      notaryType: 'number',
      pageNum: 'number',
      pageSize: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListNotaryInfosResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  success?: boolean;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: ListNotaryInfosResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNotaryInfosResponseBody;
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
      body: ListNotaryInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersRequest extends $tea.Model {
  aliyunOrderId?: string;
  bizId?: string;
  endOrderDate?: number;
  notaryStatus?: number;
  notaryType?: number;
  pageNum?: number;
  pageSize?: number;
  sortByType?: string;
  sortKeyType?: number;
  startOrderDate?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunOrderId: 'AliyunOrderId',
      bizId: 'BizId',
      endOrderDate: 'EndOrderDate',
      notaryStatus: 'NotaryStatus',
      notaryType: 'NotaryType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortByType: 'SortByType',
      sortKeyType: 'SortKeyType',
      startOrderDate: 'StartOrderDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunOrderId: 'string',
      bizId: 'string',
      endOrderDate: 'number',
      notaryStatus: 'number',
      notaryType: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortByType: 'string',
      sortKeyType: 'number',
      startOrderDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListNotaryOrdersResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  success?: boolean;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: ListNotaryOrdersResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNotaryOrdersResponseBody;
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
      body: ListNotaryOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSbjKeyRequest extends $tea.Model {
  principalKey?: string;
  principalName?: string;
  static names(): { [key: string]: string } {
    return {
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalKey: 'string',
      principalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSbjKeyResponseBody extends $tea.Model {
  requestId?: string;
  tmSbjKeyInfo?: ListTrademarkSbjKeyResponseBodyTmSbjKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tmSbjKeyInfo: 'TmSbjKeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tmSbjKeyInfo: { 'type': 'array', 'itemType': ListTrademarkSbjKeyResponseBodyTmSbjKeyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSbjKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrademarkSbjKeyResponseBody;
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
      body: ListTrademarkSbjKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubmitTransferMaterailRequest extends $tea.Model {
  addr?: string;
  assigneeProxy?: string;
  bizId?: string;
  buyerBusinessLicense?: string;
  buyerBusinessLicenseTranslation?: string;
  buyerIdCard?: string;
  cardNo?: string;
  cardType?: string;
  complete?: boolean;
  contactEmail?: string;
  contactMobile?: string;
  contactName?: string;
  name?: string;
  notarization?: string;
  note?: string;
  other?: { [key: string]: any };
  registrationCert?: string;
  sellerApply?: string;
  sellerBusinessLicense?: string;
  sellerBusinessLicenseTranslation?: string;
  sellerIdCard?: string;
  sellerProxy?: string;
  tradeMaterialFullUpdate?: boolean;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      assigneeProxy: 'AssigneeProxy',
      bizId: 'BizId',
      buyerBusinessLicense: 'BuyerBusinessLicense',
      buyerBusinessLicenseTranslation: 'BuyerBusinessLicenseTranslation',
      buyerIdCard: 'BuyerIdCard',
      cardNo: 'CardNo',
      cardType: 'CardType',
      complete: 'Complete',
      contactEmail: 'ContactEmail',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      name: 'Name',
      notarization: 'Notarization',
      note: 'Note',
      other: 'Other',
      registrationCert: 'RegistrationCert',
      sellerApply: 'SellerApply',
      sellerBusinessLicense: 'SellerBusinessLicense',
      sellerBusinessLicenseTranslation: 'SellerBusinessLicenseTranslation',
      sellerIdCard: 'SellerIdCard',
      sellerProxy: 'SellerProxy',
      tradeMaterialFullUpdate: 'TradeMaterialFullUpdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      assigneeProxy: 'string',
      bizId: 'string',
      buyerBusinessLicense: 'string',
      buyerBusinessLicenseTranslation: 'string',
      buyerIdCard: 'string',
      cardNo: 'string',
      cardType: 'string',
      complete: 'boolean',
      contactEmail: 'string',
      contactMobile: 'string',
      contactName: 'string',
      name: 'string',
      notarization: 'string',
      note: 'string',
      other: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      registrationCert: 'string',
      sellerApply: 'string',
      sellerBusinessLicense: 'string',
      sellerBusinessLicenseTranslation: 'string',
      sellerIdCard: 'string',
      sellerProxy: 'string',
      tradeMaterialFullUpdate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubmitTransferMaterailShrinkRequest extends $tea.Model {
  addr?: string;
  assigneeProxy?: string;
  bizId?: string;
  buyerBusinessLicense?: string;
  buyerBusinessLicenseTranslation?: string;
  buyerIdCard?: string;
  cardNo?: string;
  cardType?: string;
  complete?: boolean;
  contactEmail?: string;
  contactMobile?: string;
  contactName?: string;
  name?: string;
  notarization?: string;
  note?: string;
  otherShrink?: string;
  registrationCert?: string;
  sellerApply?: string;
  sellerBusinessLicense?: string;
  sellerBusinessLicenseTranslation?: string;
  sellerIdCard?: string;
  sellerProxy?: string;
  tradeMaterialFullUpdate?: boolean;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      assigneeProxy: 'AssigneeProxy',
      bizId: 'BizId',
      buyerBusinessLicense: 'BuyerBusinessLicense',
      buyerBusinessLicenseTranslation: 'BuyerBusinessLicenseTranslation',
      buyerIdCard: 'BuyerIdCard',
      cardNo: 'CardNo',
      cardType: 'CardType',
      complete: 'Complete',
      contactEmail: 'ContactEmail',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      name: 'Name',
      notarization: 'Notarization',
      note: 'Note',
      otherShrink: 'Other',
      registrationCert: 'RegistrationCert',
      sellerApply: 'SellerApply',
      sellerBusinessLicense: 'SellerBusinessLicense',
      sellerBusinessLicenseTranslation: 'SellerBusinessLicenseTranslation',
      sellerIdCard: 'SellerIdCard',
      sellerProxy: 'SellerProxy',
      tradeMaterialFullUpdate: 'TradeMaterialFullUpdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      assigneeProxy: 'string',
      bizId: 'string',
      buyerBusinessLicense: 'string',
      buyerBusinessLicenseTranslation: 'string',
      buyerIdCard: 'string',
      cardNo: 'string',
      cardType: 'string',
      complete: 'boolean',
      contactEmail: 'string',
      contactMobile: 'string',
      contactName: 'string',
      name: 'string',
      notarization: 'string',
      note: 'string',
      otherShrink: 'string',
      registrationCert: 'string',
      sellerApply: 'string',
      sellerBusinessLicense: 'string',
      sellerBusinessLicenseTranslation: 'string',
      sellerIdCard: 'string',
      sellerProxy: 'string',
      tradeMaterialFullUpdate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubmitTransferMaterailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubmitTransferMaterailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySubmitTransferMaterailResponseBody;
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
      body: ModifySubmitTransferMaterailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateProduceRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  extMap?: string;
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      extMap: 'ExtMap',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extMap: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateProduceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateProduceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OperateProduceResponseBody;
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
      body: OperateProduceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartnerUpdateTrademarkNameRequest extends $tea.Model {
  aliyunKp?: string;
  bid?: string;
  bizId?: string;
  callerParentId?: number;
  callerType?: string;
  eventSceneType?: number;
  intentionBizId?: string;
  tmComment?: string;
  tmIcon?: string;
  tmName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunKp: 'AliyunKp',
      bid: 'Bid',
      bizId: 'BizId',
      callerParentId: 'CallerParentId',
      callerType: 'CallerType',
      eventSceneType: 'EventSceneType',
      intentionBizId: 'IntentionBizId',
      tmComment: 'TmComment',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunKp: 'string',
      bid: 'string',
      bizId: 'string',
      callerParentId: 'number',
      callerType: 'string',
      eventSceneType: 'number',
      intentionBizId: 'string',
      tmComment: 'string',
      tmIcon: 'string',
      tmName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartnerUpdateTrademarkNameResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartnerUpdateTrademarkNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PartnerUpdateTrademarkNameResponseBody;
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
      body: PartnerUpdateTrademarkNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsRequest extends $tea.Model {
  bizId?: string;
  pageNum?: number;
  pageSize?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsResponseBody extends $tea.Model {
  data?: QueryCommunicationLogsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryCommunicationLogsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCommunicationLogsResponseBody;
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
      body: QueryCommunicationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoRequest extends $tea.Model {
  companyName?: string;
  materialType?: string;
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      materialType: 'MaterialType',
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      materialType: 'string',
      ossKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoResponseBody extends $tea.Model {
  credentialsInfo?: QueryCredentialsInfoResponseBodyCredentialsInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialsInfo: 'CredentialsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialsInfo: QueryCredentialsInfoResponseBodyCredentialsInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCredentialsInfoResponseBody;
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
      body: QueryCredentialsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtensionAttributeRequest extends $tea.Model {
  attributeKey?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtensionAttributeResponseBody extends $tea.Model {
  attributeValue?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeValue: 'AttributeValue',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValue: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtensionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryExtensionAttributeResponseBody;
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
      body: QueryExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionDetailRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionDetailResponseBody extends $tea.Model {
  bizId?: string;
  classification?: string;
  createTime?: number;
  description?: string;
  mobile?: string;
  partnerMobile?: string;
  registerNumber?: string;
  relationBizId?: string;
  requestId?: string;
  status?: number;
  type?: number;
  updateTime?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      classification: 'Classification',
      createTime: 'CreateTime',
      description: 'Description',
      mobile: 'Mobile',
      partnerMobile: 'PartnerMobile',
      registerNumber: 'RegisterNumber',
      relationBizId: 'RelationBizId',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      classification: 'string',
      createTime: 'number',
      description: 'string',
      mobile: 'string',
      partnerMobile: 'string',
      registerNumber: 'string',
      relationBizId: 'string',
      requestId: 'string',
      status: 'number',
      type: 'number',
      updateTime: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryIntentionDetailResponseBody;
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
      body: QueryIntentionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  sortFiled?: string;
  sortOrder?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      sortFiled: 'string',
      sortOrder: 'string',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryIntentionListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryIntentionListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryIntentionListResponseBody;
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
      body: QueryIntentionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionOwnerRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionOwnerResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  module?: QueryIntentionOwnerResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      module: QueryIntentionOwnerResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryIntentionOwnerResponseBody;
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
      body: QueryIntentionOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceRequest extends $tea.Model {
  channel?: string;
  intentionBizId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      intentionBizId: 'IntentionBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      intentionBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryIntentionPriceResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryIntentionPriceResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryIntentionPriceResponseBody;
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
      body: QueryIntentionPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialRequest extends $tea.Model {
  id?: number;
  queryUnconfirmedInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queryUnconfirmedInfo: 'QueryUnconfirmedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      queryUnconfirmedInfo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialResponseBody extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  city?: string;
  contactAddress?: string;
  contactCity?: string;
  contactCounty?: string;
  contactDistrict?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipcode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  evidenceCatalogPath?: string;
  evidenceOfservicePath?: string;
  evidencePath?: string;
  expirationDate?: number;
  factandreasonPdfPath?: string;
  fgsqPath?: string;
  fileBgPath?: string;
  fileFsSqPath?: string;
  fileGtPath?: string;
  fileYgPath?: string;
  id?: number;
  idCardName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  legalNoticeKey?: string;
  legalNoticeUrl?: string;
  loaStatus?: number;
  loaUrl?: string;
  materialVersion?: string;
  name?: string;
  note?: string;
  passportUrl?: string;
  personalType?: number;
  principalDescription?: string;
  principalName?: number;
  province?: string;
  reason?: string;
  region?: number;
  requestId?: string;
  reviewAdditionalFiles?: QueryMaterialResponseBodyReviewAdditionalFiles;
  reviewApplicationFile?: string;
  status?: number;
  supplementEvidenceCatalogFile?: string;
  supplementEvidenceMaterialFile?: string;
  supplementReasonFile?: string;
  systemVersion?: string;
  town?: string;
  type?: number;
  validDate?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      city: 'City',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactCounty: 'ContactCounty',
      contactDistrict: 'ContactDistrict',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      evidenceCatalogPath: 'EvidenceCatalogPath',
      evidenceOfservicePath: 'EvidenceOfservicePath',
      evidencePath: 'EvidencePath',
      expirationDate: 'ExpirationDate',
      factandreasonPdfPath: 'FactandreasonPdfPath',
      fgsqPath: 'FgsqPath',
      fileBgPath: 'FileBgPath',
      fileFsSqPath: 'FileFsSqPath',
      fileGtPath: 'FileGtPath',
      fileYgPath: 'FileYgPath',
      id: 'Id',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      legalNoticeKey: 'LegalNoticeKey',
      legalNoticeUrl: 'LegalNoticeUrl',
      loaStatus: 'LoaStatus',
      loaUrl: 'LoaUrl',
      materialVersion: 'MaterialVersion',
      name: 'Name',
      note: 'Note',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      principalDescription: 'PrincipalDescription',
      principalName: 'PrincipalName',
      province: 'Province',
      reason: 'Reason',
      region: 'Region',
      requestId: 'RequestId',
      reviewAdditionalFiles: 'ReviewAdditionalFiles',
      reviewApplicationFile: 'ReviewApplicationFile',
      status: 'Status',
      supplementEvidenceCatalogFile: 'SupplementEvidenceCatalogFile',
      supplementEvidenceMaterialFile: 'SupplementEvidenceMaterialFile',
      supplementReasonFile: 'SupplementReasonFile',
      systemVersion: 'SystemVersion',
      town: 'Town',
      type: 'Type',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      city: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactCounty: 'string',
      contactDistrict: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipcode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      evidenceCatalogPath: 'string',
      evidenceOfservicePath: 'string',
      evidencePath: 'string',
      expirationDate: 'number',
      factandreasonPdfPath: 'string',
      fgsqPath: 'string',
      fileBgPath: 'string',
      fileFsSqPath: 'string',
      fileGtPath: 'string',
      fileYgPath: 'string',
      id: 'number',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      legalNoticeKey: 'string',
      legalNoticeUrl: 'string',
      loaStatus: 'number',
      loaUrl: 'string',
      materialVersion: 'string',
      name: 'string',
      note: 'string',
      passportUrl: 'string',
      personalType: 'number',
      principalDescription: 'string',
      principalName: 'number',
      province: 'string',
      reason: 'string',
      region: 'number',
      requestId: 'string',
      reviewAdditionalFiles: QueryMaterialResponseBodyReviewAdditionalFiles,
      reviewApplicationFile: 'string',
      status: 'number',
      supplementEvidenceCatalogFile: 'string',
      supplementEvidenceMaterialFile: 'string',
      supplementReasonFile: 'string',
      systemVersion: 'string',
      town: 'string',
      type: 'number',
      validDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMaterialResponseBody;
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
      body: QueryMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListRequest extends $tea.Model {
  cardNumber?: string;
  materialId?: number;
  materialVersion?: string;
  name?: string;
  pageNum?: number;
  pageSize?: number;
  principalName?: number;
  region?: number;
  status?: number;
  systemVersion?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cardNumber: 'CardNumber',
      materialId: 'MaterialId',
      materialVersion: 'MaterialVersion',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      principalName: 'PrincipalName',
      region: 'Region',
      status: 'Status',
      systemVersion: 'SystemVersion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNumber: 'string',
      materialId: 'number',
      materialVersion: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      principalName: 'number',
      region: 'number',
      status: 'number',
      systemVersion: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryMaterialListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryMaterialListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMaterialListResponseBody;
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
      body: QueryMaterialListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorKeywordsRequest extends $tea.Model {
  keywords?: string[];
  ruleType?: number;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
      ruleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorKeywordsResponseBody extends $tea.Model {
  data?: QueryMonitorKeywordsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryMonitorKeywordsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorKeywordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMonitorKeywordsResponseBody;
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
      body: QueryMonitorKeywordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryOfficialFileCustomListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryOfficialFileCustomListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOfficialFileCustomListResponseBody;
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
      body: QueryOfficialFileCustomListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsListRequest extends $tea.Model {
  fileType?: string;
  pageNum?: number;
  pageSize?: number;
  produceOrderId?: string;
  registerNumber?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      produceOrderId: 'ProduceOrderId',
      registerNumber: 'RegisterNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      produceOrderId: 'string',
      registerNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryOrderLogisticsListResponseBodyData[];
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryOrderLogisticsListResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderLogisticsListResponseBody;
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
      body: QueryOrderLogisticsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOssResourcesRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOssResourcesResponseBody extends $tea.Model {
  data?: QueryOssResourcesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryOssResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOssResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOssResourcesResponseBody;
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
      body: QueryOssResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailRequest extends $tea.Model {
  applyNo?: string;
  bizId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      applyNo: 'ApplyNo',
      bizId: 'BizId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNo: 'string',
      bizId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailResponseBody extends $tea.Model {
  acceptUrl?: string;
  agreementId?: string;
  bizId?: string;
  cnInfoUrl?: string;
  extendInfo?: { [key: string]: any };
  flags?: QueryProduceDetailResponseBodyFlags;
  grayIconUrl?: string;
  issueDate?: string;
  leafCodes?: QueryProduceDetailResponseBodyLeafCodes;
  loaUrl?: string;
  materialDetail?: QueryProduceDetailResponseBodyMaterialDetail;
  note?: string;
  orderId?: string;
  principalName?: number;
  requestId?: string;
  rootCode?: QueryProduceDetailResponseBodyRootCode;
  status?: number;
  submitCount?: number;
  tmIcon?: string;
  tmName?: string;
  tmNameType?: number;
  tmNumber?: string;
  tmOrderId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      acceptUrl: 'AcceptUrl',
      agreementId: 'AgreementId',
      bizId: 'BizId',
      cnInfoUrl: 'CnInfoUrl',
      extendInfo: 'ExtendInfo',
      flags: 'Flags',
      grayIconUrl: 'GrayIconUrl',
      issueDate: 'IssueDate',
      leafCodes: 'LeafCodes',
      loaUrl: 'LoaUrl',
      materialDetail: 'MaterialDetail',
      note: 'Note',
      orderId: 'OrderId',
      principalName: 'PrincipalName',
      requestId: 'RequestId',
      rootCode: 'RootCode',
      status: 'Status',
      submitCount: 'SubmitCount',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNameType: 'TmNameType',
      tmNumber: 'TmNumber',
      tmOrderId: 'TmOrderId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptUrl: 'string',
      agreementId: 'string',
      bizId: 'string',
      cnInfoUrl: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flags: QueryProduceDetailResponseBodyFlags,
      grayIconUrl: 'string',
      issueDate: 'string',
      leafCodes: QueryProduceDetailResponseBodyLeafCodes,
      loaUrl: 'string',
      materialDetail: QueryProduceDetailResponseBodyMaterialDetail,
      note: 'string',
      orderId: 'string',
      principalName: 'number',
      requestId: 'string',
      rootCode: QueryProduceDetailResponseBodyRootCode,
      status: 'number',
      submitCount: 'number',
      tmIcon: 'string',
      tmName: 'string',
      tmNameType: 'number',
      tmNumber: 'string',
      tmOrderId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryProduceDetailResponseBody;
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
      body: QueryProduceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceListRequest extends $tea.Model {
  bizId?: string;
  createTimeLeft?: number;
  createTimeRight?: number;
  materialName?: string;
  orderId?: string;
  pageNum?: number;
  pageSize?: number;
  status?: number;
  tmName?: string;
  tmNumber?: string;
  type?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTimeLeft: 'CreateTimeLeft',
      createTimeRight: 'CreateTimeRight',
      materialName: 'MaterialName',
      orderId: 'OrderId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTimeLeft: 'number',
      createTimeRight: 'number',
      materialName: 'string',
      orderId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      tmName: 'string',
      tmNumber: 'string',
      type: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryProduceListResponseBodyData;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryProduceListResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryProduceListResponseBody;
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
      body: QueryProduceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQrCodeUploadStatusRequest extends $tea.Model {
  fieldKey?: string;
  ossKey?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      ossKey: 'OssKey',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      ossKey: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQrCodeUploadStatusResponseBody extends $tea.Model {
  ossKey?: string;
  ossUrl?: string;
  requestId?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
      ossUrl: 'OssUrl',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      ossUrl: 'string',
      requestId: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQrCodeUploadStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryQrCodeUploadStatusResponseBody;
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
      body: QueryQrCodeUploadStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySbjRuleRequest extends $tea.Model {
  bizType?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySbjRuleResponseBody extends $tea.Model {
  bizType?: string;
  requestId?: string;
  ruleId?: string;
  sbjRuleList?: QuerySbjRuleResponseBodySbjRuleList;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      sbjRuleList: 'SbjRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      requestId: 'string',
      ruleId: 'string',
      sbjRuleList: QuerySbjRuleResponseBodySbjRuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySbjRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySbjRuleResponseBody;
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
      body: QuerySbjRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplementDetailRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplementDetailResponseBody extends $tea.Model {
  acceptDeadTime?: number;
  acceptTime?: number;
  content?: string;
  fileName?: string;
  fileTemplateUrls?: QuerySupplementDetailResponseBodyFileTemplateUrls;
  id?: number;
  operateTime?: number;
  reason?: string;
  requestId?: string;
  sbjDeadTime?: number;
  sendTime?: number;
  serialNumber?: string;
  status?: number;
  tmNumber?: string;
  type?: number;
  uploadFileTemplateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptDeadTime: 'AcceptDeadTime',
      acceptTime: 'AcceptTime',
      content: 'Content',
      fileName: 'FileName',
      fileTemplateUrls: 'FileTemplateUrls',
      id: 'Id',
      operateTime: 'OperateTime',
      reason: 'Reason',
      requestId: 'RequestId',
      sbjDeadTime: 'SbjDeadTime',
      sendTime: 'SendTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
      tmNumber: 'TmNumber',
      type: 'Type',
      uploadFileTemplateUrl: 'UploadFileTemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptDeadTime: 'number',
      acceptTime: 'number',
      content: 'string',
      fileName: 'string',
      fileTemplateUrls: QuerySupplementDetailResponseBodyFileTemplateUrls,
      id: 'number',
      operateTime: 'number',
      reason: 'string',
      requestId: 'string',
      sbjDeadTime: 'number',
      sendTime: 'number',
      serialNumber: 'string',
      status: 'number',
      tmNumber: 'string',
      type: 'number',
      uploadFileTemplateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplementDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySupplementDetailResponseBody;
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
      body: QuerySupplementDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListRequest extends $tea.Model {
  bizType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTaskListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTaskListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTaskListResponseBody;
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
      body: QueryTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmCollectionPageListRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmCollectionPageListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTmCollectionPageListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTmCollectionPageListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmCollectionPageListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTmCollectionPageListResponseBody;
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
      body: QueryTmCollectionPageListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceRequest extends $tea.Model {
  highPriorityBizTypeStr?: string;
  highPriorityMaterialNameStr?: string;
  highPriorityOrderIdStr?: string;
  highPriorityUserIdStr?: string;
  principalKey?: string;
  principalName?: string;
  producerType?: string;
  queryOrderPageSize?: number;
  static names(): { [key: string]: string } {
    return {
      highPriorityBizTypeStr: 'HighPriorityBizTypeStr',
      highPriorityMaterialNameStr: 'HighPriorityMaterialNameStr',
      highPriorityOrderIdStr: 'HighPriorityOrderIdStr',
      highPriorityUserIdStr: 'HighPriorityUserIdStr',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      producerType: 'ProducerType',
      queryOrderPageSize: 'QueryOrderPageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highPriorityBizTypeStr: 'string',
      highPriorityMaterialNameStr: 'string',
      highPriorityOrderIdStr: 'string',
      highPriorityUserIdStr: 'string',
      principalKey: 'string',
      principalName: 'string',
      producerType: 'string',
      queryOrderPageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceResponseBody extends $tea.Model {
  moudle?: QueryTmSbjProduceResponseBodyMoudle;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moudle: 'Moudle',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moudle: QueryTmSbjProduceResponseBodyMoudle,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTmSbjProduceResponseBody;
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
      body: QueryTmSbjProduceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailRequest extends $tea.Model {
  bizId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailResponseBody extends $tea.Model {
  acceptUrl?: string;
  bizId?: string;
  cnInfoUrl?: string;
  extendInfo?: { [key: string]: any };
  flags?: QueryTmSbjProduceDetailResponseBodyFlags;
  grayIconUrl?: string;
  issueDate?: string;
  leafCodes?: QueryTmSbjProduceDetailResponseBodyLeafCodes;
  loaUrl?: string;
  materialDetail?: QueryTmSbjProduceDetailResponseBodyMaterialDetail;
  materialName?: string;
  note?: string;
  orderId?: string;
  principalName?: number;
  requestId?: string;
  rootCode?: QueryTmSbjProduceDetailResponseBodyRootCode;
  status?: number;
  submitCount?: number;
  submitStatus?: string;
  tmIcon?: string;
  tmName?: string;
  tmNameType?: number;
  tmNumber?: string;
  tmOrderId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      acceptUrl: 'AcceptUrl',
      bizId: 'BizId',
      cnInfoUrl: 'CnInfoUrl',
      extendInfo: 'ExtendInfo',
      flags: 'Flags',
      grayIconUrl: 'GrayIconUrl',
      issueDate: 'IssueDate',
      leafCodes: 'LeafCodes',
      loaUrl: 'LoaUrl',
      materialDetail: 'MaterialDetail',
      materialName: 'MaterialName',
      note: 'Note',
      orderId: 'OrderId',
      principalName: 'PrincipalName',
      requestId: 'RequestId',
      rootCode: 'RootCode',
      status: 'Status',
      submitCount: 'SubmitCount',
      submitStatus: 'SubmitStatus',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNameType: 'TmNameType',
      tmNumber: 'TmNumber',
      tmOrderId: 'TmOrderId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptUrl: 'string',
      bizId: 'string',
      cnInfoUrl: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flags: QueryTmSbjProduceDetailResponseBodyFlags,
      grayIconUrl: 'string',
      issueDate: 'string',
      leafCodes: QueryTmSbjProduceDetailResponseBodyLeafCodes,
      loaUrl: 'string',
      materialDetail: QueryTmSbjProduceDetailResponseBodyMaterialDetail,
      materialName: 'string',
      note: 'string',
      orderId: 'string',
      principalName: 'number',
      requestId: 'string',
      rootCode: QueryTmSbjProduceDetailResponseBodyRootCode,
      status: 'number',
      submitCount: 'number',
      submitStatus: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNameType: 'number',
      tmNumber: 'string',
      tmOrderId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTmSbjProduceDetailResponseBody;
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
      body: QueryTmSbjProduceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListRequest extends $tea.Model {
  begin?: number;
  bizId?: string;
  end?: number;
  pageNum?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      bizId: 'BizId',
      end: 'End',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      bizId: 'string',
      end: 'number',
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTradeIntentionUserListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTradeIntentionUserListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTradeIntentionUserListResponseBody;
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
      body: QueryTradeIntentionUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBody extends $tea.Model {
  acceptUrl?: string;
  adminUploads?: QueryTradeMarkApplicationDetailResponseBodyAdminUploads;
  bizId?: string;
  createTime?: number;
  extendInfo?: { [key: string]: any };
  firstClassification?: QueryTradeMarkApplicationDetailResponseBodyFirstClassification;
  flags?: QueryTradeMarkApplicationDetailResponseBodyFlags;
  grayIconUrl?: string;
  judgeResultUrl?: QueryTradeMarkApplicationDetailResponseBodyJudgeResultUrl;
  legalNoticeUrl?: string;
  loaUrl?: string;
  logisticsCertificateUrl?: string;
  logisticsNo?: string;
  materialDetail?: QueryTradeMarkApplicationDetailResponseBodyMaterialDetail;
  materialId?: number;
  notAcceptUrl?: string;
  note?: string;
  orderId?: string;
  orderPrice?: number;
  partnerCode?: string;
  partnerMobile?: string;
  partnerName?: string;
  principalName?: number;
  receiptUrl?: QueryTradeMarkApplicationDetailResponseBodyReceiptUrl;
  recvUserLogistics?: string;
  renewResponse?: QueryTradeMarkApplicationDetailResponseBodyRenewResponse;
  requestId?: string;
  reviewOfficialFiles?: QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFiles;
  sendSbjLogistics?: string;
  sendTime?: string;
  sendUserLogistics?: string;
  servicePrice?: number;
  specification?: number;
  status?: number;
  submitAuditTime?: number;
  submitTime?: number;
  supplements?: QueryTradeMarkApplicationDetailResponseBodySupplements;
  systemVersion?: string;
  thirdClassification?: QueryTradeMarkApplicationDetailResponseBodyThirdClassification;
  tmIcon?: string;
  tmName?: string;
  tmNameType?: number;
  tmNumber?: string;
  totalPrice?: number;
  type?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      acceptUrl: 'AcceptUrl',
      adminUploads: 'AdminUploads',
      bizId: 'BizId',
      createTime: 'CreateTime',
      extendInfo: 'ExtendInfo',
      firstClassification: 'FirstClassification',
      flags: 'Flags',
      grayIconUrl: 'GrayIconUrl',
      judgeResultUrl: 'JudgeResultUrl',
      legalNoticeUrl: 'LegalNoticeUrl',
      loaUrl: 'LoaUrl',
      logisticsCertificateUrl: 'LogisticsCertificateUrl',
      logisticsNo: 'LogisticsNo',
      materialDetail: 'MaterialDetail',
      materialId: 'MaterialId',
      notAcceptUrl: 'NotAcceptUrl',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      partnerCode: 'PartnerCode',
      partnerMobile: 'PartnerMobile',
      partnerName: 'PartnerName',
      principalName: 'PrincipalName',
      receiptUrl: 'ReceiptUrl',
      recvUserLogistics: 'RecvUserLogistics',
      renewResponse: 'RenewResponse',
      requestId: 'RequestId',
      reviewOfficialFiles: 'ReviewOfficialFiles',
      sendSbjLogistics: 'SendSbjLogistics',
      sendTime: 'SendTime',
      sendUserLogistics: 'SendUserLogistics',
      servicePrice: 'ServicePrice',
      specification: 'Specification',
      status: 'Status',
      submitAuditTime: 'SubmitAuditTime',
      submitTime: 'SubmitTime',
      supplements: 'Supplements',
      systemVersion: 'SystemVersion',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNameType: 'TmNameType',
      tmNumber: 'TmNumber',
      totalPrice: 'TotalPrice',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptUrl: 'string',
      adminUploads: QueryTradeMarkApplicationDetailResponseBodyAdminUploads,
      bizId: 'string',
      createTime: 'number',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      firstClassification: QueryTradeMarkApplicationDetailResponseBodyFirstClassification,
      flags: QueryTradeMarkApplicationDetailResponseBodyFlags,
      grayIconUrl: 'string',
      judgeResultUrl: QueryTradeMarkApplicationDetailResponseBodyJudgeResultUrl,
      legalNoticeUrl: 'string',
      loaUrl: 'string',
      logisticsCertificateUrl: 'string',
      logisticsNo: 'string',
      materialDetail: QueryTradeMarkApplicationDetailResponseBodyMaterialDetail,
      materialId: 'number',
      notAcceptUrl: 'string',
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      partnerCode: 'string',
      partnerMobile: 'string',
      partnerName: 'string',
      principalName: 'number',
      receiptUrl: QueryTradeMarkApplicationDetailResponseBodyReceiptUrl,
      recvUserLogistics: 'string',
      renewResponse: QueryTradeMarkApplicationDetailResponseBodyRenewResponse,
      requestId: 'string',
      reviewOfficialFiles: QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFiles,
      sendSbjLogistics: 'string',
      sendTime: 'string',
      sendUserLogistics: 'string',
      servicePrice: 'number',
      specification: 'number',
      status: 'number',
      submitAuditTime: 'number',
      submitTime: 'number',
      supplements: QueryTradeMarkApplicationDetailResponseBodySupplements,
      systemVersion: 'string',
      thirdClassification: QueryTradeMarkApplicationDetailResponseBodyThirdClassification,
      tmIcon: 'string',
      tmName: 'string',
      tmNameType: 'number',
      tmNumber: 'string',
      totalPrice: 'number',
      type: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTradeMarkApplicationDetailResponseBody;
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
      body: QueryTradeMarkApplicationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationLogsRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationLogsResponseBody extends $tea.Model {
  data?: QueryTradeMarkApplicationLogsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTradeMarkApplicationLogsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTradeMarkApplicationLogsResponseBody;
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
      body: QueryTradeMarkApplicationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsRequest extends $tea.Model {
  bizId?: string;
  classificationCode?: string;
  hidden?: number;
  intentionBizId?: string;
  logisticsNo?: string;
  materialName?: string;
  orderId?: string;
  pageNum?: number;
  pageSize?: number;
  productType?: number;
  sortFiled?: string;
  sortOrder?: string;
  specification?: number;
  status?: number;
  statusList?: number[];
  supplementStatus?: number;
  tmName?: string;
  tmNumber?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      classificationCode: 'ClassificationCode',
      hidden: 'Hidden',
      intentionBizId: 'IntentionBizId',
      logisticsNo: 'LogisticsNo',
      materialName: 'MaterialName',
      orderId: 'OrderId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productType: 'ProductType',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
      specification: 'Specification',
      status: 'Status',
      statusList: 'StatusList',
      supplementStatus: 'SupplementStatus',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      classificationCode: 'string',
      hidden: 'number',
      intentionBizId: 'string',
      logisticsNo: 'string',
      materialName: 'string',
      orderId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productType: 'number',
      sortFiled: 'string',
      sortOrder: 'string',
      specification: 'number',
      status: 'number',
      statusList: { 'type': 'array', 'itemType': 'number' },
      supplementStatus: 'number',
      tmName: 'string',
      tmNumber: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsShrinkRequest extends $tea.Model {
  bizId?: string;
  classificationCode?: string;
  hidden?: number;
  intentionBizId?: string;
  logisticsNo?: string;
  materialName?: string;
  orderId?: string;
  pageNum?: number;
  pageSize?: number;
  productType?: number;
  sortFiled?: string;
  sortOrder?: string;
  specification?: number;
  status?: number;
  statusListShrink?: string;
  supplementStatus?: number;
  tmName?: string;
  tmNumber?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      classificationCode: 'ClassificationCode',
      hidden: 'Hidden',
      intentionBizId: 'IntentionBizId',
      logisticsNo: 'LogisticsNo',
      materialName: 'MaterialName',
      orderId: 'OrderId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productType: 'ProductType',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
      specification: 'Specification',
      status: 'Status',
      statusListShrink: 'StatusList',
      supplementStatus: 'SupplementStatus',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      classificationCode: 'string',
      hidden: 'number',
      intentionBizId: 'string',
      logisticsNo: 'string',
      materialName: 'string',
      orderId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productType: 'number',
      sortFiled: 'string',
      sortOrder: 'string',
      specification: 'number',
      status: 'number',
      statusListShrink: 'string',
      supplementStatus: 'number',
      tmName: 'string',
      tmNumber: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTradeMarkApplicationsResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTradeMarkApplicationsResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTradeMarkApplicationsResponseBody;
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
      body: QueryTradeMarkApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionRequest extends $tea.Model {
  channel?: string;
  intentionBizId?: string;
  pageNum?: number;
  pageSize?: number;
  tmProduceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tmProduceStatus: 'TmProduceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tmProduceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTradeMarkApplicationsByIntentionResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTradeMarkApplicationsByIntentionResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTradeMarkApplicationsByIntentionResponseBody;
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
      body: QueryTradeMarkApplicationsByIntentionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceDetailRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceDetailResponseBody extends $tea.Model {
  data?: QueryTradeProduceDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTradeProduceDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTradeProduceDetailResponseBody;
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
      body: QueryTradeProduceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListRequest extends $tea.Model {
  bizId?: string;
  buyerStatus?: number;
  pageNum?: number;
  pageSize?: number;
  preOrderId?: string;
  registerNumber?: string;
  sortFiled?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      buyerStatus: 'BuyerStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      preOrderId: 'PreOrderId',
      registerNumber: 'RegisterNumber',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      buyerStatus: 'number',
      pageNum: 'number',
      pageSize: 'number',
      preOrderId: 'string',
      registerNumber: 'string',
      sortFiled: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTradeProduceListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTradeProduceListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTradeProduceListResponseBody;
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
      body: QueryTradeProduceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberRequest extends $tea.Model {
  applyNumber?: string;
  env?: string;
  static names(): { [key: string]: string } {
    return {
      applyNumber: 'ApplyNumber',
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNumber: 'string',
      env: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberResponseBody extends $tea.Model {
  moudle?: QueryTrademarkDetailByApplyNumberResponseBodyMoudle;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moudle: 'Moudle',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moudle: QueryTrademarkDetailByApplyNumberResponseBodyMoudle,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkDetailByApplyNumberResponseBody;
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
      body: QueryTrademarkDetailByApplyNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspRequest extends $tea.Model {
  applyNumber?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      applyNumber: 'ApplyNumber',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNumber: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspResponseBody extends $tea.Model {
  moudle?: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudle;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moudle: 'Moudle',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moudle: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudle,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkDetailByApplyNumberEspResponseBody;
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
      body: QueryTrademarkDetailByApplyNumberEspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailRequest extends $tea.Model {
  bizId?: string;
  env?: string;
  orderId?: string;
  reviewSupplementMaterial?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      env: 'Env',
      orderId: 'OrderId',
      reviewSupplementMaterial: 'ReviewSupplementMaterial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      env: 'string',
      orderId: 'string',
      reviewSupplementMaterial: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailResponseBody extends $tea.Model {
  moudle?: QueryTrademarkModelDetailResponseBodyMoudle;
  static names(): { [key: string]: string } {
    return {
      moudle: 'Moudle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moudle: QueryTrademarkModelDetailResponseBodyMoudle,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkModelDetailResponseBody;
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
      body: QueryTrademarkModelDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailResponseBody extends $tea.Model {
  moudle?: QueryTrademarkModelEspDetailResponseBodyMoudle;
  static names(): { [key: string]: string } {
    return {
      moudle: 'Moudle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moudle: QueryTrademarkModelEspDetailResponseBodyMoudle,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkModelEspDetailResponseBody;
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
      body: QueryTrademarkModelEspDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListRequest extends $tea.Model {
  additionalSubmitStatus?: string;
  additionalSubmitTime?: string;
  bizId?: string;
  bizType?: string;
  env?: string;
  existStatus?: string[];
  orderId?: string;
  orderIdsStr?: string;
  orderInstanceId?: string;
  pageNum?: number;
  pageSize?: number;
  principalKey?: string;
  principalName?: string;
  status?: string;
  submitStatus?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      additionalSubmitStatus: 'AdditionalSubmitStatus',
      additionalSubmitTime: 'AdditionalSubmitTime',
      bizId: 'BizId',
      bizType: 'BizType',
      env: 'Env',
      existStatus: 'ExistStatus',
      orderId: 'OrderId',
      orderIdsStr: 'OrderIdsStr',
      orderInstanceId: 'OrderInstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      status: 'Status',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalSubmitStatus: 'string',
      additionalSubmitTime: 'string',
      bizId: 'string',
      bizType: 'string',
      env: 'string',
      existStatus: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      orderIdsStr: 'string',
      orderInstanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      principalKey: 'string',
      principalName: 'string',
      status: 'string',
      submitStatus: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListShrinkRequest extends $tea.Model {
  additionalSubmitStatus?: string;
  additionalSubmitTime?: string;
  bizId?: string;
  bizType?: string;
  env?: string;
  existStatusShrink?: string;
  orderId?: string;
  orderIdsStr?: string;
  orderInstanceId?: string;
  pageNum?: number;
  pageSize?: number;
  principalKey?: string;
  principalName?: string;
  status?: string;
  submitStatus?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      additionalSubmitStatus: 'AdditionalSubmitStatus',
      additionalSubmitTime: 'AdditionalSubmitTime',
      bizId: 'BizId',
      bizType: 'BizType',
      env: 'Env',
      existStatusShrink: 'ExistStatus',
      orderId: 'OrderId',
      orderIdsStr: 'OrderIdsStr',
      orderInstanceId: 'OrderInstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      status: 'Status',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalSubmitStatus: 'string',
      additionalSubmitTime: 'string',
      bizId: 'string',
      bizType: 'string',
      env: 'string',
      existStatusShrink: 'string',
      orderId: 'string',
      orderIdsStr: 'string',
      orderInstanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      principalKey: 'string',
      principalName: 'string',
      status: 'string',
      submitStatus: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBody extends $tea.Model {
  moudle?: QueryTrademarkModelEspListResponseBodyMoudle;
  static names(): { [key: string]: string } {
    return {
      moudle: 'Moudle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moudle: QueryTrademarkModelEspListResponseBodyMoudle,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkModelEspListResponseBody;
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
      body: QueryTrademarkModelEspListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListRequest extends $tea.Model {
  env?: string;
  orderIdsStr?: string;
  pageNum?: number;
  pageSize?: number;
  principalKey?: string;
  principalName?: string;
  produceTypesStr?: string;
  status?: string;
  submitStart?: string;
  submitStatus?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      orderIdsStr: 'OrderIdsStr',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      produceTypesStr: 'ProduceTypesStr',
      status: 'Status',
      submitStart: 'SubmitStart',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      orderIdsStr: 'string',
      pageNum: 'number',
      pageSize: 'number',
      principalKey: 'string',
      principalName: 'string',
      produceTypesStr: 'string',
      status: 'string',
      submitStart: 'string',
      submitStatus: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBody extends $tea.Model {
  moudle?: QueryTrademarkModelListResponseBodyMoudle;
  static names(): { [key: string]: string } {
    return {
      moudle: 'Moudle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moudle: QueryTrademarkModelListResponseBodyMoudle,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkModelListResponseBody;
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
      body: QueryTrademarkModelListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsRequest extends $tea.Model {
  actionType?: number;
  applyYear?: string;
  classification?: string;
  pageNum?: number;
  pageSize?: number;
  procedureStatus?: number;
  registrationNumber?: string;
  ruleId?: number;
  tmName?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      applyYear: 'ApplyYear',
      classification: 'Classification',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      procedureStatus: 'ProcedureStatus',
      registrationNumber: 'RegistrationNumber',
      ruleId: 'RuleId',
      tmName: 'TmName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      applyYear: 'string',
      classification: 'string',
      pageNum: 'number',
      pageSize: 'number',
      procedureStatus: 'number',
      registrationNumber: 'string',
      ruleId: 'number',
      tmName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTrademarkMonitorResultsResponseBodyData;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTrademarkMonitorResultsResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkMonitorResultsResponseBody;
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
      body: QueryTrademarkMonitorResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesRequest extends $tea.Model {
  id?: string;
  notifyUpdate?: number;
  pageNum?: number;
  pageSize?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      notifyUpdate: 'NotifyUpdate',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      notifyUpdate: 'number',
      pageNum: 'number',
      pageSize: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTrademarkMonitorRulesResponseBodyData;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTrademarkMonitorRulesResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkMonitorRulesResponseBody;
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
      body: QueryTrademarkMonitorRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkOnSaleRequest extends $tea.Model {
  classification?: string;
  pageNum?: number;
  pageSize?: number;
  registerCode?: string;
  registerNumber?: string;
  tmType?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      registerCode: 'RegisterCode',
      registerNumber: 'RegisterNumber',
      tmType: 'TmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      pageNum: 'number',
      pageSize: 'number',
      registerCode: 'string',
      registerNumber: 'string',
      tmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkOnSaleResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  totalPageNumber?: number;
  trademarks?: QueryTrademarkOnSaleResponseBodyTrademarks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNumber: 'TotalPageNumber',
      trademarks: 'Trademarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNumber: 'number',
      trademarks: { 'type': 'array', 'itemType': QueryTrademarkOnSaleResponseBodyTrademarks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkOnSaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkOnSaleResponseBody;
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
      body: QueryTrademarkOnSaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceRequest extends $tea.Model {
  orderData?: { [key: string]: any };
  tmIcon?: string;
  tmName?: string;
  type?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      orderData: 'OrderData',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tmIcon: 'string',
      tmName: 'string',
      type: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceShrinkRequest extends $tea.Model {
  orderDataShrink?: string;
  tmIcon?: string;
  tmName?: string;
  type?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      orderDataShrink: 'OrderData',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDataShrink: 'string',
      tmIcon: 'string',
      tmName: 'string',
      type: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceResponseBody extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  prices?: QueryTrademarkPriceResponseBodyPrices;
  requestId?: string;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      prices: 'Prices',
      requestId: 'RequestId',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      prices: QueryTrademarkPriceResponseBodyPrices,
      requestId: 'string',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkPriceResponseBody;
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
      body: QueryTrademarkPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkUploadAuditResultRequest extends $tea.Model {
  classification?: string;
  pageNum?: number;
  pageSize?: number;
  registerCode?: string;
  registerNumber?: string;
  tmType?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      registerCode: 'RegisterCode',
      registerNumber: 'RegisterNumber',
      tmType: 'TmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      pageNum: 'number',
      pageSize: 'number',
      registerCode: 'string',
      registerNumber: 'string',
      tmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkUploadAuditResultResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  totalPageNumber?: number;
  trademarks?: QueryTrademarkUploadAuditResultResponseBodyTrademarks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNumber: 'TotalPageNumber',
      trademarks: 'Trademarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNumber: 'number',
      trademarks: { 'type': 'array', 'itemType': QueryTrademarkUploadAuditResultResponseBodyTrademarks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkUploadAuditResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrademarkUploadAuditResultResponseBody;
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
      body: QueryTrademarkUploadAuditResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordBankBalanceRequest extends $tea.Model {
  actionDate?: number;
  balance?: string;
  principalName?: string;
  static names(): { [key: string]: string } {
    return {
      actionDate: 'ActionDate',
      balance: 'Balance',
      principalName: 'PrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDate: 'number',
      balance: 'string',
      principalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordBankBalanceResponseBody extends $tea.Model {
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

export class RecordBankBalanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecordBankBalanceResponseBody;
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
      body: RecordBankBalanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundProduceRequest extends $tea.Model {
  bizId?: string;
  refundType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      refundType: 'RefundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      refundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundProduceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundProduceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundProduceResponseBody;
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
      body: RefundProduceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseAdditionalMaterialRequest extends $tea.Model {
  bizId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseAdditionalMaterialResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseAdditionalMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefuseAdditionalMaterialResponseBody;
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
      body: RefuseAdditionalMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseApplicantRequest extends $tea.Model {
  bizId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseApplicantResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseApplicantResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefuseApplicantResponseBody;
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
      body: RefuseApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectApplicantRequest extends $tea.Model {
  instanceId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectApplicantResponseBody extends $tea.Model {
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

export class RejectApplicantResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RejectApplicantResponseBody;
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
      body: RejectApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveClassificationConditionsRequest extends $tea.Model {
  bizId?: string;
  condition?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      condition: 'Condition',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      condition: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveClassificationConditionsResponseBody extends $tea.Model {
  errorMsg?: string;
  invalidList?: SaveClassificationConditionsResponseBodyInvalidList[];
  requestId?: string;
  success?: boolean;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      invalidList: 'InvalidList',
      requestId: 'RequestId',
      success: 'Success',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      invalidList: { 'type': 'array', 'itemType': SaveClassificationConditionsResponseBodyInvalidList },
      requestId: 'string',
      success: 'boolean',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveClassificationConditionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveClassificationConditionsResponseBody;
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
      body: SaveClassificationConditionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveExtensionAttributeRequest extends $tea.Model {
  attributeKey?: string;
  attributeValue?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      attributeValue: 'AttributeValue',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      attributeValue: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveExtensionAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveExtensionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveExtensionAttributeResponseBody;
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
      body: SaveExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskRequest extends $tea.Model {
  bizType?: string;
  request?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      request: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskResponseBody extends $tea.Model {
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

export class SaveTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveTaskResponseBody;
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
      body: SaveTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForOfficialFileCustomRequest extends $tea.Model {
  endAcceptTime?: number;
  startAcceptTime?: number;
  static names(): { [key: string]: string } {
    return {
      endAcceptTime: 'EndAcceptTime',
      startAcceptTime: 'StartAcceptTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endAcceptTime: 'number',
      startAcceptTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForOfficialFileCustomResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForOfficialFileCustomResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveTaskForOfficialFileCustomResponseBody;
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
      body: SaveTaskForOfficialFileCustomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTradeMarkReviewMaterialDetailRequest extends $tea.Model {
  additionalOssKeyList?: { [key: string]: any };
  address?: string;
  applicationOssKey?: string;
  bizId?: string;
  businessLicenceOssKey?: string;
  cardNumber?: string;
  changeName?: boolean;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  country?: string;
  engAddress?: string;
  engName?: string;
  idCardOssKey?: string;
  legalNoticeOssKey?: string;
  loaOssKey?: string;
  name?: string;
  passportOssKey?: string;
  province?: string;
  region?: number;
  reviewMaterialAdditionalJson?: string;
  separate?: boolean;
  submitOnline?: boolean;
  submitType?: number;
  supplementFlag?: boolean;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      additionalOssKeyList: 'AdditionalOssKeyList',
      address: 'Address',
      applicationOssKey: 'ApplicationOssKey',
      bizId: 'BizId',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
      changeName: 'ChangeName',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      country: 'Country',
      engAddress: 'EngAddress',
      engName: 'EngName',
      idCardOssKey: 'IdCardOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      passportOssKey: 'PassportOssKey',
      province: 'Province',
      region: 'Region',
      reviewMaterialAdditionalJson: 'ReviewMaterialAdditionalJson',
      separate: 'Separate',
      submitOnline: 'SubmitOnline',
      submitType: 'SubmitType',
      supplementFlag: 'SupplementFlag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalOssKeyList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      address: 'string',
      applicationOssKey: 'string',
      bizId: 'string',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
      changeName: 'boolean',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      country: 'string',
      engAddress: 'string',
      engName: 'string',
      idCardOssKey: 'string',
      legalNoticeOssKey: 'string',
      loaOssKey: 'string',
      name: 'string',
      passportOssKey: 'string',
      province: 'string',
      region: 'number',
      reviewMaterialAdditionalJson: 'string',
      separate: 'boolean',
      submitOnline: 'boolean',
      submitType: 'number',
      supplementFlag: 'boolean',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTradeMarkReviewMaterialDetailShrinkRequest extends $tea.Model {
  additionalOssKeyListShrink?: string;
  address?: string;
  applicationOssKey?: string;
  bizId?: string;
  businessLicenceOssKey?: string;
  cardNumber?: string;
  changeName?: boolean;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  country?: string;
  engAddress?: string;
  engName?: string;
  idCardOssKey?: string;
  legalNoticeOssKey?: string;
  loaOssKey?: string;
  name?: string;
  passportOssKey?: string;
  province?: string;
  region?: number;
  reviewMaterialAdditionalJson?: string;
  separate?: boolean;
  submitOnline?: boolean;
  submitType?: number;
  supplementFlag?: boolean;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      additionalOssKeyListShrink: 'AdditionalOssKeyList',
      address: 'Address',
      applicationOssKey: 'ApplicationOssKey',
      bizId: 'BizId',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
      changeName: 'ChangeName',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      country: 'Country',
      engAddress: 'EngAddress',
      engName: 'EngName',
      idCardOssKey: 'IdCardOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      passportOssKey: 'PassportOssKey',
      province: 'Province',
      region: 'Region',
      reviewMaterialAdditionalJson: 'ReviewMaterialAdditionalJson',
      separate: 'Separate',
      submitOnline: 'SubmitOnline',
      submitType: 'SubmitType',
      supplementFlag: 'SupplementFlag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalOssKeyListShrink: 'string',
      address: 'string',
      applicationOssKey: 'string',
      bizId: 'string',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
      changeName: 'boolean',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      country: 'string',
      engAddress: 'string',
      engName: 'string',
      idCardOssKey: 'string',
      legalNoticeOssKey: 'string',
      loaOssKey: 'string',
      name: 'string',
      passportOssKey: 'string',
      province: 'string',
      region: 'number',
      reviewMaterialAdditionalJson: 'string',
      separate: 'boolean',
      submitOnline: 'boolean',
      submitType: 'number',
      supplementFlag: 'boolean',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTradeMarkReviewMaterialDetailResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTradeMarkReviewMaterialDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveTradeMarkReviewMaterialDetailResponseBody;
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
      body: SaveTradeMarkReviewMaterialDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbjOperateRequest extends $tea.Model {
  amount?: string;
  applyNo?: string;
  auditStatus?: boolean;
  bizId?: string;
  fileDate?: string;
  fileOssKey?: string;
  message?: string;
  operateType?: string;
  orderNo?: string;
  receiptOssKey?: string;
  submittedSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      applyNo: 'ApplyNo',
      auditStatus: 'AuditStatus',
      bizId: 'BizId',
      fileDate: 'FileDate',
      fileOssKey: 'FileOssKey',
      message: 'Message',
      operateType: 'OperateType',
      orderNo: 'OrderNo',
      receiptOssKey: 'ReceiptOssKey',
      submittedSuccess: 'SubmittedSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      applyNo: 'string',
      auditStatus: 'boolean',
      bizId: 'string',
      fileDate: 'string',
      fileOssKey: 'string',
      message: 'string',
      operateType: 'string',
      orderNo: 'string',
      receiptOssKey: 'string',
      submittedSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbjOperateResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbjOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SbjOperateResponseBody;
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
      body: SbjOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbjOperateNewRequest extends $tea.Model {
  addSubmitCount?: boolean;
  allowResubmit?: boolean;
  amount?: string;
  applyNo?: string;
  auditStatus?: boolean;
  bizId?: string;
  changeStatus?: boolean;
  errorMsgScreenshot?: string;
  fileDate?: string;
  fileOssKey?: string;
  message?: string;
  operateType?: string;
  orderNo?: string;
  receiptOssKey?: string;
  submittedSuccess?: boolean;
  successType?: string;
  static names(): { [key: string]: string } {
    return {
      addSubmitCount: 'AddSubmitCount',
      allowResubmit: 'AllowResubmit',
      amount: 'Amount',
      applyNo: 'ApplyNo',
      auditStatus: 'AuditStatus',
      bizId: 'BizId',
      changeStatus: 'ChangeStatus',
      errorMsgScreenshot: 'ErrorMsgScreenshot',
      fileDate: 'FileDate',
      fileOssKey: 'FileOssKey',
      message: 'Message',
      operateType: 'OperateType',
      orderNo: 'OrderNo',
      receiptOssKey: 'ReceiptOssKey',
      submittedSuccess: 'SubmittedSuccess',
      successType: 'SuccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSubmitCount: 'boolean',
      allowResubmit: 'boolean',
      amount: 'string',
      applyNo: 'string',
      auditStatus: 'boolean',
      bizId: 'string',
      changeStatus: 'boolean',
      errorMsgScreenshot: 'string',
      fileDate: 'string',
      fileOssKey: 'string',
      message: 'string',
      operateType: 'string',
      orderNo: 'string',
      receiptOssKey: 'string',
      submittedSuccess: 'boolean',
      successType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbjOperateNewResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbjOperateNewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SbjOperateNewResponseBody;
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
      body: SbjOperateNewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceExecuteRequest extends $tea.Model {
  executeParams?: { [key: string]: any };
  productCode?: string;
  referenceNo?: string;
  referenceType?: string;
  sceneCode?: string;
  schemeId?: number;
  servicePlace?: string;
  source?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      executeParams: 'ExecuteParams',
      productCode: 'ProductCode',
      referenceNo: 'ReferenceNo',
      referenceType: 'ReferenceType',
      sceneCode: 'SceneCode',
      schemeId: 'SchemeId',
      servicePlace: 'ServicePlace',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      productCode: 'string',
      referenceNo: 'string',
      referenceType: 'string',
      sceneCode: 'string',
      schemeId: 'number',
      servicePlace: 'string',
      source: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceExecuteShrinkRequest extends $tea.Model {
  executeParamsShrink?: string;
  productCode?: string;
  referenceNo?: string;
  referenceType?: string;
  sceneCode?: string;
  schemeId?: number;
  servicePlace?: string;
  source?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      executeParamsShrink: 'ExecuteParams',
      productCode: 'ProductCode',
      referenceNo: 'ReferenceNo',
      referenceType: 'ReferenceType',
      sceneCode: 'SceneCode',
      schemeId: 'SchemeId',
      servicePlace: 'ServicePlace',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeParamsShrink: 'string',
      productCode: 'string',
      referenceNo: 'string',
      referenceType: 'string',
      sceneCode: 'string',
      schemeId: 'number',
      servicePlace: 'string',
      source: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceExecuteResponseBody extends $tea.Model {
  data?: any;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceExecuteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SbrainServiceExecuteResponseBody;
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
      body: SbrainServiceExecuteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceHasRunningTaskBatchQueryRequest extends $tea.Model {
  productCode?: string;
  referenceNos?: string[];
  referenceType?: string;
  source?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      referenceNos: 'ReferenceNos',
      referenceType: 'ReferenceType',
      source: 'Source',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      referenceNos: { 'type': 'array', 'itemType': 'string' },
      referenceType: 'string',
      source: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceHasRunningTaskBatchQueryShrinkRequest extends $tea.Model {
  productCode?: string;
  referenceNosShrink?: string;
  referenceType?: string;
  source?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      referenceNosShrink: 'ReferenceNos',
      referenceType: 'ReferenceType',
      source: 'Source',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      referenceNosShrink: 'string',
      referenceType: 'string',
      source: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceHasRunningTaskBatchQueryResponseBody extends $tea.Model {
  data?: any;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceHasRunningTaskBatchQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SbrainServiceHasRunningTaskBatchQueryResponseBody;
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
      body: SbrainServiceHasRunningTaskBatchQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceSchemeMatchRequest extends $tea.Model {
  matchParams?: { [key: string]: any };
  productCode?: string;
  referenceNo?: string;
  referenceType?: string;
  sceneCode?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      matchParams: 'MatchParams',
      productCode: 'ProductCode',
      referenceNo: 'ReferenceNo',
      referenceType: 'ReferenceType',
      sceneCode: 'SceneCode',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      productCode: 'string',
      referenceNo: 'string',
      referenceType: 'string',
      sceneCode: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceSchemeMatchShrinkRequest extends $tea.Model {
  matchParamsShrink?: string;
  productCode?: string;
  referenceNo?: string;
  referenceType?: string;
  sceneCode?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      matchParamsShrink: 'MatchParams',
      productCode: 'ProductCode',
      referenceNo: 'ReferenceNo',
      referenceType: 'ReferenceType',
      sceneCode: 'SceneCode',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchParamsShrink: 'string',
      productCode: 'string',
      referenceNo: 'string',
      referenceType: 'string',
      sceneCode: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceSchemeMatchResponseBody extends $tea.Model {
  data?: SbrainServiceSchemeMatchResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SbrainServiceSchemeMatchResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceSchemeMatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SbrainServiceSchemeMatchResponseBody;
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
      body: SbrainServiceSchemeMatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesRequest extends $tea.Model {
  classification?: string;
  keyword?: string;
  orderPriceLeft?: number;
  orderPriceRight?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  queryAll?: boolean;
  regLeft?: number;
  regRight?: number;
  registerNumber?: string;
  sortName?: string;
  sortOrder?: string;
  tag?: string;
  tmName?: string;
  topSearch?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      keyword: 'Keyword',
      orderPriceLeft: 'OrderPriceLeft',
      orderPriceRight: 'OrderPriceRight',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      queryAll: 'QueryAll',
      regLeft: 'RegLeft',
      regRight: 'RegRight',
      registerNumber: 'RegisterNumber',
      sortName: 'SortName',
      sortOrder: 'SortOrder',
      tag: 'Tag',
      tmName: 'TmName',
      topSearch: 'TopSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      keyword: 'string',
      orderPriceLeft: 'number',
      orderPriceRight: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      queryAll: 'boolean',
      regLeft: 'number',
      regRight: 'number',
      registerNumber: 'string',
      sortName: 'string',
      sortOrder: 'string',
      tag: 'string',
      tmName: 'string',
      topSearch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  totalPageNumber?: number;
  trademarks?: SearchTmOnsalesResponseBodyTrademarks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNumber: 'TotalPageNumber',
      trademarks: 'Trademarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNumber: 'number',
      trademarks: { 'type': 'array', 'itemType': SearchTmOnsalesResponseBodyTrademarks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchTmOnsalesResponseBody;
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
      body: SearchTmOnsalesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNotaryRequest extends $tea.Model {
  notaryOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      notaryOrderId: 'NotaryOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNotaryResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  notaryUrl?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      notaryUrl: 'NotaryUrl',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      notaryUrl: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNotaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartNotaryResponseBody;
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
      body: StartNotaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StoreMaterialTemporarilyRequest extends $tea.Model {
  address?: string;
  businessLicenceOssKey?: string;
  cardNumber?: string;
  city?: string;
  contactAddress?: string;
  contactCity?: string;
  contactCounty?: string;
  contactDistrict?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipcode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardName?: string;
  idCardNumber?: string;
  idCardOssKey?: string;
  legalNoticeOssKey?: string;
  loaOssKey?: string;
  name?: string;
  passportOssKey?: string;
  personalType?: number;
  principalName?: number;
  province?: string;
  region?: string;
  town?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
      city: 'City',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactCounty: 'ContactCounty',
      contactDistrict: 'ContactDistrict',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardOssKey: 'IdCardOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      passportOssKey: 'PassportOssKey',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      province: 'Province',
      region: 'Region',
      town: 'Town',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
      city: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactCounty: 'string',
      contactDistrict: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipcode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardOssKey: 'string',
      legalNoticeOssKey: 'string',
      loaOssKey: 'string',
      name: 'string',
      passportOssKey: 'string',
      personalType: 'number',
      principalName: 'number',
      province: 'string',
      region: 'string',
      town: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StoreMaterialTemporarilyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StoreMaterialTemporarilyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StoreMaterialTemporarilyResponseBody;
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
      body: StoreMaterialTemporarilyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementRequest extends $tea.Model {
  content?: string;
  id?: number;
  operateType?: string;
  uploadOssKeyList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      operateType: 'OperateType',
      uploadOssKeyList: 'UploadOssKeyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      operateType: 'string',
      uploadOssKeyList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementShrinkRequest extends $tea.Model {
  content?: string;
  id?: number;
  operateType?: string;
  uploadOssKeyListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      operateType: 'OperateType',
      uploadOssKeyListShrink: 'UploadOssKeyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      operateType: 'string',
      uploadOssKeyListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSupplementResponseBody;
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
      body: SubmitSupplementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTrademarkApplicationComplaintRequest extends $tea.Model {
  bizId?: string;
  content?: string;
  files?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      content: 'Content',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      content: 'string',
      files: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTrademarkApplicationComplaintShrinkRequest extends $tea.Model {
  bizId?: string;
  content?: string;
  filesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      content: 'Content',
      filesShrink: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      content: 'string',
      filesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTrademarkApplicationComplaintResponseBody extends $tea.Model {
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

export class SubmitTrademarkApplicationComplaintResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTrademarkApplicationComplaintResponseBody;
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
      body: SubmitTrademarkApplicationComplaintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncTrademarkRequest extends $tea.Model {
  beginTime?: number;
  classificationCode?: string;
  description?: string;
  endTime?: number;
  label?: string;
  originalPrice?: number;
  ownerEnName?: string;
  ownerName?: string;
  reason?: string;
  regAnnDate?: number;
  secondaryClassification?: string;
  status?: string;
  thirdClassification?: string;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      classificationCode: 'ClassificationCode',
      description: 'Description',
      endTime: 'EndTime',
      label: 'Label',
      originalPrice: 'OriginalPrice',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      reason: 'Reason',
      regAnnDate: 'RegAnnDate',
      secondaryClassification: 'SecondaryClassification',
      status: 'Status',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      classificationCode: 'string',
      description: 'string',
      endTime: 'number',
      label: 'string',
      originalPrice: 'number',
      ownerEnName: 'string',
      ownerName: 'string',
      reason: 'string',
      regAnnDate: 'number',
      secondaryClassification: 'string',
      status: 'string',
      thirdClassification: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncTrademarkResponseBody extends $tea.Model {
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

export class SyncTrademarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncTrademarkResponseBody;
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
      body: SyncTrademarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicantContacterRequest extends $tea.Model {
  applicantId?: number;
  bizId?: string;
  contactAddress?: string;
  contactCity?: string;
  contactDistrict?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipCode?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      bizId: 'BizId',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactDistrict: 'ContactDistrict',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipCode: 'ContactZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'number',
      bizId: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactDistrict: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicantContacterResponseBody extends $tea.Model {
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

export class UpdateApplicantContacterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateApplicantContacterResponseBody;
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
      body: UpdateApplicantContacterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialRequest extends $tea.Model {
  address?: string;
  businessLicenceOssKey?: string;
  cardNumber?: string;
  city?: string;
  contactAddress?: string;
  contactCity?: string;
  contactCounty?: string;
  contactDistrict?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipcode?: string;
  EAddress?: string;
  EName?: string;
  id?: number;
  idCardName?: string;
  idCardNumber?: string;
  idCardOssKey?: string;
  legalNoticeOssKey?: string;
  loaId?: number;
  loaOssKey?: string;
  name?: string;
  passportOssKey?: string;
  personalType?: number;
  province?: string;
  town?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
      city: 'City',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactCounty: 'ContactCounty',
      contactDistrict: 'ContactDistrict',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipcode: 'ContactZipcode',
      EAddress: 'EAddress',
      EName: 'EName',
      id: 'Id',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardOssKey: 'IdCardOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      loaId: 'LoaId',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      passportOssKey: 'PassportOssKey',
      personalType: 'PersonalType',
      province: 'Province',
      town: 'Town',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
      city: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactCounty: 'string',
      contactDistrict: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipcode: 'string',
      EAddress: 'string',
      EName: 'string',
      id: 'number',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardOssKey: 'string',
      legalNoticeOssKey: 'string',
      loaId: 'number',
      loaOssKey: 'string',
      name: 'string',
      passportOssKey: 'string',
      personalType: 'number',
      province: 'string',
      town: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMaterialResponseBody;
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
      body: UpdateMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProduceRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  extMap?: string;
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      extMap: 'ExtMap',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extMap: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProduceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProduceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProduceResponseBody;
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
      body: UpdateProduceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProduceLoaIdRequest extends $tea.Model {
  bizId?: string;
  loaOssKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      loaOssKey: 'LoaOssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      loaOssKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProduceLoaIdResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProduceLoaIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProduceLoaIdResponseBody;
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
      body: UpdateProduceLoaIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSendMaterialNumRequest extends $tea.Model {
  bizId?: string;
  num?: string;
  operateType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      num: 'Num',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      num: 'string',
      operateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSendMaterialNumResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSendMaterialNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSendMaterialNumResponseBody;
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
      body: UpdateSendMaterialNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkNameRequest extends $tea.Model {
  bizId?: string;
  clientToken?: string;
  tmComment?: string;
  tmIcon?: string;
  tmName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      clientToken: 'ClientToken',
      tmComment: 'TmComment',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      clientToken: 'string',
      tmComment: 'string',
      tmIcon: 'string',
      tmName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkNameResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTrademarkNameResponseBody;
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
      body: UpdateTrademarkNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkOnsaleRequest extends $tea.Model {
  beginTime?: number;
  classificationCode?: string;
  description?: string;
  endTime?: number;
  label?: string;
  originalPrice?: number;
  ownerEnName?: string;
  ownerName?: string;
  reason?: string;
  regAnnDate?: number;
  secondaryClassification?: string;
  thirdClassification?: string;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  tmType?: string;
  tradeTmDetailJson?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      classificationCode: 'ClassificationCode',
      description: 'Description',
      endTime: 'EndTime',
      label: 'Label',
      originalPrice: 'OriginalPrice',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      reason: 'Reason',
      regAnnDate: 'RegAnnDate',
      secondaryClassification: 'SecondaryClassification',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      tmType: 'TmType',
      tradeTmDetailJson: 'TradeTmDetailJson',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      classificationCode: 'string',
      description: 'string',
      endTime: 'number',
      label: 'string',
      originalPrice: 'number',
      ownerEnName: 'string',
      ownerName: 'string',
      reason: 'string',
      regAnnDate: 'number',
      secondaryClassification: 'string',
      thirdClassification: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      tmType: 'string',
      tradeTmDetailJson: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkOnsaleResponseBody extends $tea.Model {
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

export class UpdateTrademarkOnsaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTrademarkOnsaleResponseBody;
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
      body: UpdateTrademarkOnsaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadNotaryDataRequest extends $tea.Model {
  bizOrderNo?: string;
  notaryType?: number;
  uploadContext?: string;
  static names(): { [key: string]: string } {
    return {
      bizOrderNo: 'BizOrderNo',
      notaryType: 'NotaryType',
      uploadContext: 'UploadContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizOrderNo: 'string',
      notaryType: 'number',
      uploadContext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadNotaryDataResponseBody extends $tea.Model {
  requestId?: string;
  userAuthUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userAuthUrl: 'UserAuthUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userAuthUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadNotaryDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadNotaryDataResponseBody;
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
      body: UploadNotaryDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadTrademarkOnSaleRequest extends $tea.Model {
  beginTime?: number;
  classificationCode?: string;
  description?: string;
  endTime?: number;
  label?: string;
  originalPrice?: number;
  ownerEnName?: string;
  ownerName?: string;
  reason?: string;
  regAnnDate?: number;
  secondaryClassification?: string;
  status?: string;
  thirdClassification?: string;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  tmType?: string;
  tradeTmDetailJson?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      classificationCode: 'ClassificationCode',
      description: 'Description',
      endTime: 'EndTime',
      label: 'Label',
      originalPrice: 'OriginalPrice',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      reason: 'Reason',
      regAnnDate: 'RegAnnDate',
      secondaryClassification: 'SecondaryClassification',
      status: 'Status',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      tmType: 'TmType',
      tradeTmDetailJson: 'TradeTmDetailJson',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      classificationCode: 'string',
      description: 'string',
      endTime: 'number',
      label: 'string',
      originalPrice: 'number',
      ownerEnName: 'string',
      ownerName: 'string',
      reason: 'string',
      regAnnDate: 'number',
      secondaryClassification: 'string',
      status: 'string',
      thirdClassification: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      tmType: 'string',
      tradeTmDetailJson: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadTrademarkOnSaleResponseBody extends $tea.Model {
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

export class UploadTrademarkOnSaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadTrademarkOnSaleResponseBody;
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
      body: UploadTrademarkOnSaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteCommunicationLogRequest extends $tea.Model {
  bizId?: string;
  note?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      note: 'Note',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      note: 'string',
      targetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteCommunicationLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteCommunicationLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: WriteCommunicationLogResponseBody;
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
      body: WriteCommunicationLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteIntentionCommunicationLogRequest extends $tea.Model {
  bizId?: string;
  note?: string;
  reject?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      note: 'Note',
      reject: 'Reject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      note: 'string',
      reject: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteIntentionCommunicationLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteIntentionCommunicationLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: WriteIntentionCommunicationLogResponseBody;
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
      body: WriteIntentionCommunicationLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIfCollectedResponseBodyDataTrademark extends $tea.Model {
  id?: number;
  itemIdList?: string;
  name?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      itemIdList: 'ItemIdList',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      itemIdList: 'string',
      name: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIfCollectedResponseBodyData extends $tea.Model {
  trademark?: CheckIfCollectedResponseBodyDataTrademark[];
  static names(): { [key: string]: string } {
    return {
      trademark: 'Trademark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademark: { 'type': 'array', 'itemType': CheckIfCollectedResponseBodyDataTrademark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillResponseBodyDataErrorMsgs extends $tea.Model {
  errorMsg?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillResponseBodyData extends $tea.Model {
  addressFill?: boolean;
  countryFill?: boolean;
  errorMsgs?: CheckLoaFillResponseBodyDataErrorMsgs;
  materialNameFill?: boolean;
  nationalityFill?: boolean;
  stampFill?: boolean;
  templateUrl?: string;
  tips?: string;
  tradeMarkNameFill?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressFill: 'AddressFill',
      countryFill: 'CountryFill',
      errorMsgs: 'ErrorMsgs',
      materialNameFill: 'MaterialNameFill',
      nationalityFill: 'NationalityFill',
      stampFill: 'StampFill',
      templateUrl: 'TemplateUrl',
      tips: 'Tips',
      tradeMarkNameFill: 'TradeMarkNameFill',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFill: 'boolean',
      countryFill: 'boolean',
      errorMsgs: CheckLoaFillResponseBodyDataErrorMsgs,
      materialNameFill: 'boolean',
      nationalityFill: 'boolean',
      stampFill: 'boolean',
      templateUrl: 'string',
      tips: 'string',
      tradeMarkNameFill: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderResponseBodyData extends $tea.Model {
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponseBodyDataAnnouncementList extends $tea.Model {
  annDate?: string;
  annNumber?: string;
  annTypeCode?: string;
  annTypeName?: string;
  imageUrl?: string;
  originalImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      annDate: 'AnnDate',
      annNumber: 'AnnNumber',
      annTypeCode: 'AnnTypeCode',
      annTypeName: 'AnnTypeName',
      imageUrl: 'ImageUrl',
      originalImageUrl: 'OriginalImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annDate: 'string',
      annNumber: 'string',
      annTypeCode: 'string',
      annTypeName: 'string',
      imageUrl: 'string',
      originalImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponseBodyDataProcedures extends $tea.Model {
  procedureCode?: string;
  procedureDate?: string;
  procedureName?: string;
  procedureResult?: string;
  procedureStep?: string;
  static names(): { [key: string]: string } {
    return {
      procedureCode: 'ProcedureCode',
      procedureDate: 'ProcedureDate',
      procedureName: 'ProcedureName',
      procedureResult: 'ProcedureResult',
      procedureStep: 'ProcedureStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      procedureCode: 'string',
      procedureDate: 'string',
      procedureName: 'string',
      procedureResult: 'string',
      procedureStep: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponseBodyData extends $tea.Model {
  agency?: string;
  announcementList?: DescirbeCombineTrademarkResponseBodyDataAnnouncementList[];
  applyDate?: string;
  classification?: string;
  exclusiveDateLimit?: string;
  firstAnnoNumber?: string;
  firstAnnoType?: string;
  image?: string;
  indexId?: string;
  intlRegDate?: string;
  lastProcedureStatus?: string;
  lawFinalStatus?: string;
  name?: string;
  onSale?: number;
  ownerAddress?: string;
  ownerEnAddress?: string;
  ownerEnName?: string;
  ownerName?: string;
  preAnnDate?: string;
  preAnnNumber?: string;
  priorityDate?: string;
  procedures?: DescirbeCombineTrademarkResponseBodyDataProcedures[];
  productDescription?: string;
  regAnnDate?: string;
  regAnnNumber?: string;
  registrationNumber?: string;
  registrationType?: string;
  secondAnnoNumber?: string;
  secondAnnoType?: string;
  share?: string;
  similarGroup?: string;
  status?: string;
  subsequentDesignationDate?: string;
  static names(): { [key: string]: string } {
    return {
      agency: 'Agency',
      announcementList: 'AnnouncementList',
      applyDate: 'ApplyDate',
      classification: 'Classification',
      exclusiveDateLimit: 'ExclusiveDateLimit',
      firstAnnoNumber: 'FirstAnnoNumber',
      firstAnnoType: 'FirstAnnoType',
      image: 'Image',
      indexId: 'IndexId',
      intlRegDate: 'IntlRegDate',
      lastProcedureStatus: 'LastProcedureStatus',
      lawFinalStatus: 'LawFinalStatus',
      name: 'Name',
      onSale: 'OnSale',
      ownerAddress: 'OwnerAddress',
      ownerEnAddress: 'OwnerEnAddress',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      preAnnDate: 'PreAnnDate',
      preAnnNumber: 'PreAnnNumber',
      priorityDate: 'PriorityDate',
      procedures: 'Procedures',
      productDescription: 'ProductDescription',
      regAnnDate: 'RegAnnDate',
      regAnnNumber: 'RegAnnNumber',
      registrationNumber: 'RegistrationNumber',
      registrationType: 'RegistrationType',
      secondAnnoNumber: 'SecondAnnoNumber',
      secondAnnoType: 'SecondAnnoType',
      share: 'Share',
      similarGroup: 'SimilarGroup',
      status: 'Status',
      subsequentDesignationDate: 'SubsequentDesignationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agency: 'string',
      announcementList: { 'type': 'array', 'itemType': DescirbeCombineTrademarkResponseBodyDataAnnouncementList },
      applyDate: 'string',
      classification: 'string',
      exclusiveDateLimit: 'string',
      firstAnnoNumber: 'string',
      firstAnnoType: 'string',
      image: 'string',
      indexId: 'string',
      intlRegDate: 'string',
      lastProcedureStatus: 'string',
      lawFinalStatus: 'string',
      name: 'string',
      onSale: 'number',
      ownerAddress: 'string',
      ownerEnAddress: 'string',
      ownerEnName: 'string',
      ownerName: 'string',
      preAnnDate: 'string',
      preAnnNumber: 'string',
      priorityDate: 'string',
      procedures: { 'type': 'array', 'itemType': DescirbeCombineTrademarkResponseBodyDataProcedures },
      productDescription: 'string',
      regAnnDate: 'string',
      regAnnNumber: 'string',
      registrationNumber: 'string',
      registrationType: 'string',
      secondAnnoNumber: 'string',
      secondAnnoType: 'string',
      share: 'string',
      similarGroup: 'string',
      status: 'string',
      subsequentDesignationDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUnavailableCodesResponseBodyData extends $tea.Model {
  codes?: string[];
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportPrincipalNameResponseBodyPrincipals extends $tea.Model {
  defaultPrincipal?: boolean;
  principalDescription?: string;
  principalValue?: number;
  static names(): { [key: string]: string } {
    return {
      defaultPrincipal: 'DefaultPrincipal',
      principalDescription: 'PrincipalDescription',
      principalValue: 'PrincipalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPrincipal: 'boolean',
      principalDescription: 'string',
      principalValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosResponseBodyDataNotaryInfo extends $tea.Model {
  bizOrderNo?: string;
  gmtModified?: number;
  notaryFailedReason?: string;
  notaryStatus?: number;
  tmClassification?: string;
  tmRegisterNo?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bizOrderNo: 'BizOrderNo',
      gmtModified: 'GmtModified',
      notaryFailedReason: 'NotaryFailedReason',
      notaryStatus: 'NotaryStatus',
      tmClassification: 'TmClassification',
      tmRegisterNo: 'TmRegisterNo',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizOrderNo: 'string',
      gmtModified: 'number',
      notaryFailedReason: 'string',
      notaryStatus: 'number',
      tmClassification: 'string',
      tmRegisterNo: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosResponseBodyData extends $tea.Model {
  notaryInfo?: ListNotaryInfosResponseBodyDataNotaryInfo[];
  static names(): { [key: string]: string } {
    return {
      notaryInfo: 'NotaryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryInfo: { 'type': 'array', 'itemType': ListNotaryInfosResponseBodyDataNotaryInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersResponseBodyDataNotaryOrder extends $tea.Model {
  aliyunOrderId?: string;
  applyPostStatus?: string;
  bizId?: string;
  gmtModified?: number;
  notaryCertificate?: string;
  notaryOrderId?: number;
  notaryPlatformName?: string;
  notaryStatus?: number;
  notaryType?: number;
  orderDate?: number;
  orderPrice?: number;
  tmClassification?: string;
  tmImage?: string;
  tmName?: string;
  tmRegisterNo?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunOrderId: 'AliyunOrderId',
      applyPostStatus: 'ApplyPostStatus',
      bizId: 'BizId',
      gmtModified: 'GmtModified',
      notaryCertificate: 'NotaryCertificate',
      notaryOrderId: 'NotaryOrderId',
      notaryPlatformName: 'NotaryPlatformName',
      notaryStatus: 'NotaryStatus',
      notaryType: 'NotaryType',
      orderDate: 'OrderDate',
      orderPrice: 'OrderPrice',
      tmClassification: 'TmClassification',
      tmImage: 'TmImage',
      tmName: 'TmName',
      tmRegisterNo: 'TmRegisterNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunOrderId: 'string',
      applyPostStatus: 'string',
      bizId: 'string',
      gmtModified: 'number',
      notaryCertificate: 'string',
      notaryOrderId: 'number',
      notaryPlatformName: 'string',
      notaryStatus: 'number',
      notaryType: 'number',
      orderDate: 'number',
      orderPrice: 'number',
      tmClassification: 'string',
      tmImage: 'string',
      tmName: 'string',
      tmRegisterNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersResponseBodyData extends $tea.Model {
  notaryOrder?: ListNotaryOrdersResponseBodyDataNotaryOrder[];
  static names(): { [key: string]: string } {
    return {
      notaryOrder: 'NotaryOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryOrder: { 'type': 'array', 'itemType': ListNotaryOrdersResponseBodyDataNotaryOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSbjKeyResponseBodyTmSbjKeyInfo extends $tea.Model {
  agentId?: string;
  agreeProt?: string;
  certInfo?: string;
  clearData?: string;
  hashData?: string;
  keyType?: number;
  name?: string;
  pin?: string;
  principalKey?: string;
  principalName?: string;
  signCert?: string;
  signData?: string;
  startValidDate?: string;
  submitSignData?: string;
  typeCert?: string;
  username?: string;
  validDate?: string;
  tmurl?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agreeProt: 'AgreeProt',
      certInfo: 'CertInfo',
      clearData: 'ClearData',
      hashData: 'HashData',
      keyType: 'KeyType',
      name: 'Name',
      pin: 'Pin',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      signCert: 'SignCert',
      signData: 'SignData',
      startValidDate: 'StartValidDate',
      submitSignData: 'SubmitSignData',
      typeCert: 'TypeCert',
      username: 'Username',
      validDate: 'ValidDate',
      tmurl: 'tmurl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agreeProt: 'string',
      certInfo: 'string',
      clearData: 'string',
      hashData: 'string',
      keyType: 'number',
      name: 'string',
      pin: 'string',
      principalKey: 'string',
      principalName: 'string',
      signCert: 'string',
      signData: 'string',
      startValidDate: 'string',
      submitSignData: 'string',
      typeCert: 'string',
      username: 'string',
      validDate: 'string',
      tmurl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsResponseBodyDataTaskList extends $tea.Model {
  bizId?: string;
  createTime?: number;
  note?: string;
  partnerCode?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      note: 'Note',
      partnerCode: 'PartnerCode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      note: 'string',
      partnerCode: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsResponseBodyData extends $tea.Model {
  taskList?: QueryCommunicationLogsResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': QueryCommunicationLogsResponseBodyDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoResponseBodyCredentialsInfo extends $tea.Model {
  address?: string;
  cardNumber?: string;
  companyName?: string;
  personName?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      cardNumber: 'CardNumber',
      companyName: 'CompanyName',
      personName: 'PersonName',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cardNumber: 'string',
      companyName: 'string',
      personName: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListResponseBodyDataIntention extends $tea.Model {
  bizId?: string;
  classification?: string;
  createTime?: number;
  description?: string;
  registerNumber?: string;
  status?: number;
  type?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      classification: 'Classification',
      createTime: 'CreateTime',
      description: 'Description',
      registerNumber: 'RegisterNumber',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      classification: 'string',
      createTime: 'number',
      description: 'string',
      registerNumber: 'string',
      status: 'number',
      type: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListResponseBodyData extends $tea.Model {
  intention?: QueryIntentionListResponseBodyDataIntention[];
  static names(): { [key: string]: string } {
    return {
      intention: 'Intention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intention: { 'type': 'array', 'itemType': QueryIntentionListResponseBodyDataIntention },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionOwnerResponseBodyModule extends $tea.Model {
  ownerId?: number;
  ownerName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBodyDataTmProducesFirstClassification extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBodyDataTmProducesThirdClassificationThirdClassifications extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBodyDataTmProducesThirdClassification extends $tea.Model {
  thirdClassifications?: QueryIntentionPriceResponseBodyDataTmProducesThirdClassificationThirdClassifications[];
  static names(): { [key: string]: string } {
    return {
      thirdClassifications: 'ThirdClassifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdClassifications: { 'type': 'array', 'itemType': QueryIntentionPriceResponseBodyDataTmProducesThirdClassificationThirdClassifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBodyDataTmProduces extends $tea.Model {
  bizId?: string;
  createTime?: number;
  firstClassification?: QueryIntentionPriceResponseBodyDataTmProducesFirstClassification;
  loaUrl?: string;
  materialId?: string;
  materialName?: string;
  note?: string;
  orderPrice?: number;
  servicePrice?: number;
  status?: number;
  supplementId?: number;
  supplementStatus?: number;
  thirdClassification?: QueryIntentionPriceResponseBodyDataTmProducesThirdClassification;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  totalPrice?: number;
  type?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      firstClassification: 'FirstClassification',
      loaUrl: 'LoaUrl',
      materialId: 'MaterialId',
      materialName: 'MaterialName',
      note: 'Note',
      orderPrice: 'OrderPrice',
      servicePrice: 'ServicePrice',
      status: 'Status',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      totalPrice: 'TotalPrice',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      firstClassification: QueryIntentionPriceResponseBodyDataTmProducesFirstClassification,
      loaUrl: 'string',
      materialId: 'string',
      materialName: 'string',
      note: 'string',
      orderPrice: 'number',
      servicePrice: 'number',
      status: 'number',
      supplementId: 'number',
      supplementStatus: 'number',
      thirdClassification: QueryIntentionPriceResponseBodyDataTmProducesThirdClassification,
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      totalPrice: 'number',
      type: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBodyData extends $tea.Model {
  tmProduces?: QueryIntentionPriceResponseBodyDataTmProduces[];
  static names(): { [key: string]: string } {
    return {
      tmProduces: 'TmProduces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmProduces: { 'type': 'array', 'itemType': QueryIntentionPriceResponseBodyDataTmProduces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialResponseBodyReviewAdditionalFiles extends $tea.Model {
  reviewAdditionalFile?: string[];
  static names(): { [key: string]: string } {
    return {
      reviewAdditionalFile: 'ReviewAdditionalFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewAdditionalFile: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListResponseBodyDataTrademark extends $tea.Model {
  cardNumber?: string;
  contactName?: string;
  id?: number;
  loaKey?: string;
  loaStatus?: number;
  materialVersion?: string;
  name?: string;
  principalDescription?: string;
  principalName?: number;
  reason?: string;
  region?: number;
  status?: number;
  systemVersion?: string;
  type?: number;
  validDate?: number;
  static names(): { [key: string]: string } {
    return {
      cardNumber: 'CardNumber',
      contactName: 'ContactName',
      id: 'Id',
      loaKey: 'LoaKey',
      loaStatus: 'LoaStatus',
      materialVersion: 'MaterialVersion',
      name: 'Name',
      principalDescription: 'PrincipalDescription',
      principalName: 'PrincipalName',
      reason: 'Reason',
      region: 'Region',
      status: 'Status',
      systemVersion: 'SystemVersion',
      type: 'Type',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNumber: 'string',
      contactName: 'string',
      id: 'number',
      loaKey: 'string',
      loaStatus: 'number',
      materialVersion: 'string',
      name: 'string',
      principalDescription: 'string',
      principalName: 'number',
      reason: 'string',
      region: 'number',
      status: 'number',
      systemVersion: 'string',
      type: 'number',
      validDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListResponseBodyData extends $tea.Model {
  trademark?: QueryMaterialListResponseBodyDataTrademark[];
  static names(): { [key: string]: string } {
    return {
      trademark: 'Trademark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademark: { 'type': 'array', 'itemType': QueryMaterialListResponseBodyDataTrademark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorKeywordsResponseBodyData extends $tea.Model {
  keywords?: string[];
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListResponseBodyDataCustomList extends $tea.Model {
  createTime?: number;
  downloadUrl?: string;
  endAcceptTime?: number;
  expireTime?: number;
  remark?: string;
  startAcceptTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      endAcceptTime: 'EndAcceptTime',
      expireTime: 'ExpireTime',
      remark: 'Remark',
      startAcceptTime: 'StartAcceptTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      downloadUrl: 'string',
      endAcceptTime: 'number',
      expireTime: 'number',
      remark: 'string',
      startAcceptTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListResponseBodyData extends $tea.Model {
  customList?: QueryOfficialFileCustomListResponseBodyDataCustomList[];
  static names(): { [key: string]: string } {
    return {
      customList: 'CustomList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customList: { 'type': 'array', 'itemType': QueryOfficialFileCustomListResponseBodyDataCustomList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsListResponseBodyData extends $tea.Model {
  bizId?: string;
  fileIdentifier?: string;
  fileType?: string;
  logisticsNo?: string;
  produceOrderId?: string;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileIdentifier: 'FileIdentifier',
      fileType: 'FileType',
      logisticsNo: 'LogisticsNo',
      produceOrderId: 'ProduceOrderId',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileIdentifier: 'string',
      fileType: 'string',
      logisticsNo: 'string',
      produceOrderId: 'string',
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOssResourcesResponseBodyDataTaskList extends $tea.Model {
  bizId?: string;
  createTime?: number;
  name?: string;
  ossUrl?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      name: 'Name',
      ossUrl: 'OssUrl',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      name: 'string',
      ossUrl: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOssResourcesResponseBodyData extends $tea.Model {
  taskList?: QueryOssResourcesResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': QueryOssResourcesResponseBodyDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailResponseBodyFlags extends $tea.Model {
  flags?: string[];
  static names(): { [key: string]: string } {
    return {
      flags: 'Flags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailResponseBodyLeafCodesLeafCodes extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailResponseBodyLeafCodes extends $tea.Model {
  leafCodes?: QueryProduceDetailResponseBodyLeafCodesLeafCodes[];
  static names(): { [key: string]: string } {
    return {
      leafCodes: 'LeafCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCodes: { 'type': 'array', 'itemType': QueryProduceDetailResponseBodyLeafCodesLeafCodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailResponseBodyMaterialDetail extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  city?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactZipcode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  expirationDate?: string;
  idCardUrl?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  province?: string;
  region?: number;
  status?: number;
  town?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      city: 'City',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      expirationDate: 'ExpirationDate',
      idCardUrl: 'IdCardUrl',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      province: 'Province',
      region: 'Region',
      status: 'Status',
      town: 'Town',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      city: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactZipcode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      expirationDate: 'string',
      idCardUrl: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      province: 'string',
      region: 'number',
      status: 'number',
      town: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceDetailResponseBodyRootCode extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceListResponseBodyDataTmProducesClassification extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceListResponseBodyDataTmProduces extends $tea.Model {
  agreementId?: string;
  bizId?: string;
  classification?: QueryProduceListResponseBodyDataTmProducesClassification;
  createTime?: number;
  loaUrl?: string;
  materialName?: string;
  note?: string;
  orderId?: string;
  orderPrice?: number;
  principalName?: number;
  receiptUrl?: string;
  status?: number;
  submitCount?: number;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  type?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      bizId: 'BizId',
      classification: 'Classification',
      createTime: 'CreateTime',
      loaUrl: 'LoaUrl',
      materialName: 'MaterialName',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalName: 'PrincipalName',
      receiptUrl: 'ReceiptUrl',
      status: 'Status',
      submitCount: 'SubmitCount',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      bizId: 'string',
      classification: QueryProduceListResponseBodyDataTmProducesClassification,
      createTime: 'number',
      loaUrl: 'string',
      materialName: 'string',
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalName: 'number',
      receiptUrl: 'string',
      status: 'number',
      submitCount: 'number',
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      type: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProduceListResponseBodyData extends $tea.Model {
  tmProduces?: QueryProduceListResponseBodyDataTmProduces[];
  static names(): { [key: string]: string } {
    return {
      tmProduces: 'TmProduces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmProduces: { 'type': 'array', 'itemType': QueryProduceListResponseBodyDataTmProduces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySbjRuleResponseBodySbjRuleListSbjRuleItemFrontendOptionsFrontendOption extends $tea.Model {
  title?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySbjRuleResponseBodySbjRuleListSbjRuleItemFrontendOptions extends $tea.Model {
  frontendOption?: QuerySbjRuleResponseBodySbjRuleListSbjRuleItemFrontendOptionsFrontendOption[];
  static names(): { [key: string]: string } {
    return {
      frontendOption: 'FrontendOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendOption: { 'type': 'array', 'itemType': QuerySbjRuleResponseBodySbjRuleListSbjRuleItemFrontendOptionsFrontendOption },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySbjRuleResponseBodySbjRuleListSbjRuleItem extends $tea.Model {
  defaultValue?: string;
  espExtFieldName?: string;
  fieldName?: string;
  fileType?: string;
  frontendOptions?: QuerySbjRuleResponseBodySbjRuleListSbjRuleItemFrontendOptions;
  frontendType?: string;
  requiredExpression?: string;
  sbjFieldId?: string;
  showExpression?: string;
  trademarkServiceExpression?: string;
  validateRegularExpression?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      espExtFieldName: 'EspExtFieldName',
      fieldName: 'FieldName',
      fileType: 'FileType',
      frontendOptions: 'FrontendOptions',
      frontendType: 'FrontendType',
      requiredExpression: 'RequiredExpression',
      sbjFieldId: 'SbjFieldId',
      showExpression: 'ShowExpression',
      trademarkServiceExpression: 'TrademarkServiceExpression',
      validateRegularExpression: 'ValidateRegularExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      espExtFieldName: 'string',
      fieldName: 'string',
      fileType: 'string',
      frontendOptions: QuerySbjRuleResponseBodySbjRuleListSbjRuleItemFrontendOptions,
      frontendType: 'string',
      requiredExpression: 'string',
      sbjFieldId: 'string',
      showExpression: 'string',
      trademarkServiceExpression: 'string',
      validateRegularExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySbjRuleResponseBodySbjRuleList extends $tea.Model {
  sbjRuleItem?: QuerySbjRuleResponseBodySbjRuleListSbjRuleItem[];
  static names(): { [key: string]: string } {
    return {
      sbjRuleItem: 'SbjRuleItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sbjRuleItem: { 'type': 'array', 'itemType': QuerySbjRuleResponseBodySbjRuleListSbjRuleItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplementDetailResponseBodyFileTemplateUrls extends $tea.Model {
  fileTemplateUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      fileTemplateUrls: 'FileTemplateUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileTemplateUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBodyDataTaskList extends $tea.Model {
  completeTime?: number;
  createTime?: number;
  errMsg?: string;
  fileName?: string;
  result?: string;
  taskStatus?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      errMsg: 'ErrMsg',
      fileName: 'FileName',
      result: 'Result',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'number',
      createTime: 'number',
      errMsg: 'string',
      fileName: 'string',
      result: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBodyData extends $tea.Model {
  taskList?: QueryTaskListResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': QueryTaskListResponseBodyDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmCollectionPageListResponseBodyDataTrademark extends $tea.Model {
  classification?: string;
  collected?: boolean;
  collectionContent?: string;
  id?: number;
  itemId?: string;
  tmName?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      collected: 'Collected',
      collectionContent: 'CollectionContent',
      id: 'Id',
      itemId: 'ItemId',
      tmName: 'TmName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      collected: 'boolean',
      collectionContent: 'string',
      id: 'number',
      itemId: 'string',
      tmName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmCollectionPageListResponseBodyData extends $tea.Model {
  trademark?: QueryTmCollectionPageListResponseBodyDataTrademark[];
  static names(): { [key: string]: string } {
    return {
      trademark: 'Trademark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademark: { 'type': 'array', 'itemType': QueryTmCollectionPageListResponseBodyDataTrademark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceResponseBodyMoudleTmSbjProduceListExtend extends $tea.Model {
  bid?: number;
  blackIcon?: boolean;
  loaOssKey?: string;
  logoGoodsId?: string;
  materialId?: string;
  submitCount?: number;
  tmNametype?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      blackIcon: 'BlackIcon',
      loaOssKey: 'LoaOssKey',
      logoGoodsId: 'LogoGoodsId',
      materialId: 'MaterialId',
      submitCount: 'SubmitCount',
      tmNametype: 'TmNametype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      blackIcon: 'boolean',
      loaOssKey: 'string',
      logoGoodsId: 'string',
      materialId: 'string',
      submitCount: 'number',
      tmNametype: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceResponseBodyMoudleTmSbjProduceList extends $tea.Model {
  bitFlag?: number;
  bizId?: string;
  classificationCode?: string;
  deleteFlag?: string;
  env?: string;
  extend?: QueryTmSbjProduceResponseBodyMoudleTmSbjProduceListExtend;
  loaId?: number;
  mainOrderId?: string;
  materialId?: number;
  materialName?: string;
  orderId?: string;
  orderPrice?: number;
  principalKey?: string;
  principalName?: string;
  productType?: string;
  riskSource?: string;
  status?: string;
  submitAuditTime?: number;
  submitStatus?: string;
  submitTime?: number;
  submitTimes?: number;
  tmCode?: string;
  tmIcon?: string;
  tmName?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bitFlag: 'BitFlag',
      bizId: 'BizId',
      classificationCode: 'ClassificationCode',
      deleteFlag: 'DeleteFlag',
      env: 'Env',
      extend: 'Extend',
      loaId: 'LoaId',
      mainOrderId: 'MainOrderId',
      materialId: 'MaterialId',
      materialName: 'MaterialName',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      productType: 'ProductType',
      riskSource: 'RiskSource',
      status: 'Status',
      submitAuditTime: 'SubmitAuditTime',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
      submitTimes: 'SubmitTimes',
      tmCode: 'TmCode',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitFlag: 'number',
      bizId: 'string',
      classificationCode: 'string',
      deleteFlag: 'string',
      env: 'string',
      extend: QueryTmSbjProduceResponseBodyMoudleTmSbjProduceListExtend,
      loaId: 'number',
      mainOrderId: 'string',
      materialId: 'number',
      materialName: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalKey: 'string',
      principalName: 'string',
      productType: 'string',
      riskSource: 'string',
      status: 'string',
      submitAuditTime: 'number',
      submitStatus: 'string',
      submitTime: 'number',
      submitTimes: 'number',
      tmCode: 'string',
      tmIcon: 'string',
      tmName: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceResponseBodyMoudle extends $tea.Model {
  tmSbjProduceList?: QueryTmSbjProduceResponseBodyMoudleTmSbjProduceList[];
  static names(): { [key: string]: string } {
    return {
      tmSbjProduceList: 'TmSbjProduceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmSbjProduceList: { 'type': 'array', 'itemType': QueryTmSbjProduceResponseBodyMoudleTmSbjProduceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailResponseBodyFlags extends $tea.Model {
  flags?: string[];
  static names(): { [key: string]: string } {
    return {
      flags: 'Flags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailResponseBodyLeafCodesLeafCodes extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailResponseBodyLeafCodes extends $tea.Model {
  leafCodes?: QueryTmSbjProduceDetailResponseBodyLeafCodesLeafCodes[];
  static names(): { [key: string]: string } {
    return {
      leafCodes: 'LeafCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCodes: { 'type': 'array', 'itemType': QueryTmSbjProduceDetailResponseBodyLeafCodesLeafCodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailResponseBodyMaterialDetail extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  city?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipcode?: string;
  country?: string;
  detailedContactAddress?: string;
  EAddress?: string;
  EName?: string;
  expirationDate?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  personalType?: number;
  province?: string;
  region?: number;
  status?: number;
  town?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      city: 'City',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      detailedContactAddress: 'DetailedContactAddress',
      EAddress: 'EAddress',
      EName: 'EName',
      expirationDate: 'ExpirationDate',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      province: 'Province',
      region: 'Region',
      status: 'Status',
      town: 'Town',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      city: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipcode: 'string',
      country: 'string',
      detailedContactAddress: 'string',
      EAddress: 'string',
      EName: 'string',
      expirationDate: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'number',
      province: 'string',
      region: 'number',
      status: 'number',
      town: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTmSbjProduceDetailResponseBodyRootCode extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListResponseBodyDataTrademark extends $tea.Model {
  bizId?: string;
  classification?: string;
  description?: string;
  documentDate?: string;
  documentName?: string;
  documentUrl?: string;
  grade?: number;
  mobile?: string;
  registerNumber?: string;
  status?: number;
  type?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      classification: 'Classification',
      description: 'Description',
      documentDate: 'DocumentDate',
      documentName: 'DocumentName',
      documentUrl: 'DocumentUrl',
      grade: 'Grade',
      mobile: 'Mobile',
      registerNumber: 'RegisterNumber',
      status: 'Status',
      type: 'Type',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      classification: 'string',
      description: 'string',
      documentDate: 'string',
      documentName: 'string',
      documentUrl: 'string',
      grade: 'number',
      mobile: 'string',
      registerNumber: 'string',
      status: 'number',
      type: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListResponseBodyData extends $tea.Model {
  trademark?: QueryTradeIntentionUserListResponseBodyDataTrademark[];
  static names(): { [key: string]: string } {
    return {
      trademark: 'Trademark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademark: { 'type': 'array', 'itemType': QueryTradeIntentionUserListResponseBodyDataTrademark },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyAdminUploads extends $tea.Model {
  licensePicUrl?: string;
  loaPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      licensePicUrl: 'LicensePicUrl',
      loaPicUrl: 'LoaPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePicUrl: 'string',
      loaPicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyFirstClassification extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyFlags extends $tea.Model {
  flag?: number[];
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyJudgeResultUrl extends $tea.Model {
  judgeResultUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      judgeResultUrl: 'JudgeResultUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      judgeResultUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyMaterialDetailReviewAdditionalFiles extends $tea.Model {
  reviewAdditionalFile?: string[];
  static names(): { [key: string]: string } {
    return {
      reviewAdditionalFile: 'ReviewAdditionalFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewAdditionalFile: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyMaterialDetail extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  city?: string;
  contactAddress?: string;
  contactCity?: string;
  contactDistrict?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipcode?: string;
  country?: string;
  detailedContactAddress?: string;
  EAddress?: string;
  EName?: string;
  expirationDate?: string;
  factAndReasonPdfPath?: string;
  idCardName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  legalNoticeUrl?: string;
  loaUrl?: string;
  materialVersion?: string;
  name?: string;
  passportUrl?: string;
  personalType?: number;
  principalName?: number;
  province?: string;
  region?: number;
  reviewAdditionalFiles?: QueryTradeMarkApplicationDetailResponseBodyMaterialDetailReviewAdditionalFiles;
  reviewApplicationFile?: string;
  status?: number;
  supplementEvidenceCatalogFile?: string;
  supplementEvidenceMaterialFile?: string;
  supplementReasonFile?: string;
  town?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      city: 'City',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactDistrict: 'ContactDistrict',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      detailedContactAddress: 'DetailedContactAddress',
      EAddress: 'EAddress',
      EName: 'EName',
      expirationDate: 'ExpirationDate',
      factAndReasonPdfPath: 'FactAndReasonPdfPath',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      legalNoticeUrl: 'LegalNoticeUrl',
      loaUrl: 'LoaUrl',
      materialVersion: 'MaterialVersion',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      province: 'Province',
      region: 'Region',
      reviewAdditionalFiles: 'ReviewAdditionalFiles',
      reviewApplicationFile: 'ReviewApplicationFile',
      status: 'Status',
      supplementEvidenceCatalogFile: 'SupplementEvidenceCatalogFile',
      supplementEvidenceMaterialFile: 'SupplementEvidenceMaterialFile',
      supplementReasonFile: 'SupplementReasonFile',
      town: 'Town',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      city: 'string',
      contactAddress: 'string',
      contactCity: 'string',
      contactDistrict: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipcode: 'string',
      country: 'string',
      detailedContactAddress: 'string',
      EAddress: 'string',
      EName: 'string',
      expirationDate: 'string',
      factAndReasonPdfPath: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      legalNoticeUrl: 'string',
      loaUrl: 'string',
      materialVersion: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'number',
      principalName: 'number',
      province: 'string',
      region: 'number',
      reviewAdditionalFiles: QueryTradeMarkApplicationDetailResponseBodyMaterialDetailReviewAdditionalFiles,
      reviewApplicationFile: 'string',
      status: 'number',
      supplementEvidenceCatalogFile: 'string',
      supplementEvidenceMaterialFile: 'string',
      supplementReasonFile: 'string',
      town: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyReceiptUrl extends $tea.Model {
  receiptUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      receiptUrl: 'ReceiptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiptUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyRenewResponse extends $tea.Model {
  address?: string;
  engAddress?: string;
  engName?: string;
  name?: string;
  registerTime?: number;
  submitSbjtime?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      engAddress: 'EngAddress',
      engName: 'EngName',
      name: 'Name',
      registerTime: 'RegisterTime',
      submitSbjtime: 'SubmitSbjtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      engAddress: 'string',
      engName: 'string',
      name: 'string',
      registerTime: 'number',
      submitSbjtime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFilesReviewSupplements extends $tea.Model {
  reviewSupplement?: string[];
  static names(): { [key: string]: string } {
    return {
      reviewSupplement: 'ReviewSupplement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewSupplement: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFiles extends $tea.Model {
  reviewAudit?: string;
  reviewKeep?: string;
  reviewPart?: string;
  reviewPass?: string;
  reviewSupplements?: QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFilesReviewSupplements;
  static names(): { [key: string]: string } {
    return {
      reviewAudit: 'ReviewAudit',
      reviewKeep: 'ReviewKeep',
      reviewPart: 'ReviewPart',
      reviewPass: 'ReviewPass',
      reviewSupplements: 'ReviewSupplements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewAudit: 'string',
      reviewKeep: 'string',
      reviewPart: 'string',
      reviewPass: 'string',
      reviewSupplements: QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFilesReviewSupplements,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodySupplementsSupplementsFileTemplateUrls extends $tea.Model {
  fileTemplateUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      fileTemplateUrls: 'FileTemplateUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileTemplateUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodySupplementsSupplements extends $tea.Model {
  acceptDeadTime?: number;
  acceptTime?: number;
  batchNum?: string;
  content?: string;
  fileTemplateUrls?: QueryTradeMarkApplicationDetailResponseBodySupplementsSupplementsFileTemplateUrls;
  filename?: string;
  id?: number;
  operateTime?: number;
  orderId?: string;
  sbjDeadTime?: number;
  sendTime?: number;
  serialNumber?: string;
  status?: number;
  tmNumber?: string;
  type?: number;
  uploadFileTemplateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptDeadTime: 'AcceptDeadTime',
      acceptTime: 'AcceptTime',
      batchNum: 'BatchNum',
      content: 'Content',
      fileTemplateUrls: 'FileTemplateUrls',
      filename: 'Filename',
      id: 'Id',
      operateTime: 'OperateTime',
      orderId: 'OrderId',
      sbjDeadTime: 'SbjDeadTime',
      sendTime: 'SendTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
      tmNumber: 'TmNumber',
      type: 'Type',
      uploadFileTemplateUrl: 'UploadFileTemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptDeadTime: 'number',
      acceptTime: 'number',
      batchNum: 'string',
      content: 'string',
      fileTemplateUrls: QueryTradeMarkApplicationDetailResponseBodySupplementsSupplementsFileTemplateUrls,
      filename: 'string',
      id: 'number',
      operateTime: 'number',
      orderId: 'string',
      sbjDeadTime: 'number',
      sendTime: 'number',
      serialNumber: 'string',
      status: 'number',
      tmNumber: 'string',
      type: 'number',
      uploadFileTemplateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodySupplements extends $tea.Model {
  supplements?: QueryTradeMarkApplicationDetailResponseBodySupplementsSupplements[];
  static names(): { [key: string]: string } {
    return {
      supplements: 'Supplements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplements: { 'type': 'array', 'itemType': QueryTradeMarkApplicationDetailResponseBodySupplementsSupplements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyThirdClassificationThirdClassifications extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyThirdClassification extends $tea.Model {
  thirdClassifications?: QueryTradeMarkApplicationDetailResponseBodyThirdClassificationThirdClassifications[];
  static names(): { [key: string]: string } {
    return {
      thirdClassifications: 'ThirdClassifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdClassifications: { 'type': 'array', 'itemType': QueryTradeMarkApplicationDetailResponseBodyThirdClassificationThirdClassifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationLogsResponseBodyDataData extends $tea.Model {
  bizId?: string;
  bizStatus?: number;
  extendContent?: string;
  note?: string;
  operateTime?: number;
  operateType?: number;
  toBizStatus?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizStatus: 'BizStatus',
      extendContent: 'ExtendContent',
      note: 'Note',
      operateTime: 'OperateTime',
      operateType: 'OperateType',
      toBizStatus: 'ToBizStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizStatus: 'number',
      extendContent: 'string',
      note: 'string',
      operateTime: 'number',
      operateType: 'number',
      toBizStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationLogsResponseBodyData extends $tea.Model {
  data?: QueryTradeMarkApplicationLogsResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTradeMarkApplicationLogsResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesFirstClassification extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesFlags extends $tea.Model {
  flags?: string[];
  static names(): { [key: string]: string } {
    return {
      flags: 'Flags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesRenewResponse extends $tea.Model {
  address?: string;
  engAddress?: string;
  engName?: string;
  name?: string;
  registerTime?: number;
  submitSbjtime?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      engAddress: 'EngAddress',
      engName: 'EngName',
      name: 'Name',
      registerTime: 'RegisterTime',
      submitSbjtime: 'SubmitSbjtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      engAddress: 'string',
      engName: 'string',
      name: 'string',
      registerTime: 'number',
      submitSbjtime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassificationThirdClassifications extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassification extends $tea.Model {
  thirdClassifications?: QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassificationThirdClassifications[];
  static names(): { [key: string]: string } {
    return {
      thirdClassifications: 'ThirdClassifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdClassifications: { 'type': 'array', 'itemType': QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassificationThirdClassifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProduces extends $tea.Model {
  agreementId?: string;
  bizId?: string;
  createTime?: number;
  firstClassification?: QueryTradeMarkApplicationsResponseBodyDataTmProducesFirstClassification;
  flags?: QueryTradeMarkApplicationsResponseBodyDataTmProducesFlags;
  loaUrl?: string;
  materialId?: number;
  materialName?: string;
  note?: string;
  orderId?: string;
  orderPrice?: number;
  principalName?: number;
  remark?: string;
  renewResponse?: QueryTradeMarkApplicationsResponseBodyDataTmProducesRenewResponse;
  servicePrice?: number;
  showGoToDefendButton?: boolean;
  specification?: number;
  status?: number;
  submitAuditTime?: number;
  submitTime?: number;
  supplementId?: number;
  supplementStatus?: number;
  systemVersion?: string;
  thirdClassification?: QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassification;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  totalPrice?: number;
  type?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      bizId: 'BizId',
      createTime: 'CreateTime',
      firstClassification: 'FirstClassification',
      flags: 'Flags',
      loaUrl: 'LoaUrl',
      materialId: 'MaterialId',
      materialName: 'MaterialName',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalName: 'PrincipalName',
      remark: 'Remark',
      renewResponse: 'RenewResponse',
      servicePrice: 'ServicePrice',
      showGoToDefendButton: 'ShowGoToDefendButton',
      specification: 'Specification',
      status: 'Status',
      submitAuditTime: 'SubmitAuditTime',
      submitTime: 'SubmitTime',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      systemVersion: 'SystemVersion',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      totalPrice: 'TotalPrice',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      bizId: 'string',
      createTime: 'number',
      firstClassification: QueryTradeMarkApplicationsResponseBodyDataTmProducesFirstClassification,
      flags: QueryTradeMarkApplicationsResponseBodyDataTmProducesFlags,
      loaUrl: 'string',
      materialId: 'number',
      materialName: 'string',
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalName: 'number',
      remark: 'string',
      renewResponse: QueryTradeMarkApplicationsResponseBodyDataTmProducesRenewResponse,
      servicePrice: 'number',
      showGoToDefendButton: 'boolean',
      specification: 'number',
      status: 'number',
      submitAuditTime: 'number',
      submitTime: 'number',
      supplementId: 'number',
      supplementStatus: 'number',
      systemVersion: 'string',
      thirdClassification: QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassification,
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      totalPrice: 'number',
      type: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyData extends $tea.Model {
  tmProduces?: QueryTradeMarkApplicationsResponseBodyDataTmProduces[];
  static names(): { [key: string]: string } {
    return {
      tmProduces: 'TmProduces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmProduces: { 'type': 'array', 'itemType': QueryTradeMarkApplicationsResponseBodyDataTmProduces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesFirstClassification extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassificationThirdClassifications extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassification extends $tea.Model {
  thirdClassifications?: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassificationThirdClassifications[];
  static names(): { [key: string]: string } {
    return {
      thirdClassifications: 'ThirdClassifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdClassifications: { 'type': 'array', 'itemType': QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassificationThirdClassifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProduces extends $tea.Model {
  bizId?: string;
  createTime?: number;
  firstClassification?: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesFirstClassification;
  loaUrl?: string;
  materialId?: string;
  materialName?: string;
  note?: string;
  orderPrice?: number;
  principalDescription?: string;
  principalValue?: number;
  servicePrice?: number;
  status?: number;
  supplementId?: number;
  supplementStatus?: number;
  thirdClassification?: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassification;
  tmIcon?: string;
  tmName?: string;
  tmNumber?: string;
  totalPrice?: number;
  type?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      firstClassification: 'FirstClassification',
      loaUrl: 'LoaUrl',
      materialId: 'MaterialId',
      materialName: 'MaterialName',
      note: 'Note',
      orderPrice: 'OrderPrice',
      principalDescription: 'PrincipalDescription',
      principalValue: 'PrincipalValue',
      servicePrice: 'ServicePrice',
      status: 'Status',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      thirdClassification: 'ThirdClassification',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      tmNumber: 'TmNumber',
      totalPrice: 'TotalPrice',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      firstClassification: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesFirstClassification,
      loaUrl: 'string',
      materialId: 'string',
      materialName: 'string',
      note: 'string',
      orderPrice: 'number',
      principalDescription: 'string',
      principalValue: 'number',
      servicePrice: 'number',
      status: 'number',
      supplementId: 'number',
      supplementStatus: 'number',
      thirdClassification: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassification,
      tmIcon: 'string',
      tmName: 'string',
      tmNumber: 'string',
      totalPrice: 'number',
      type: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponseBodyData extends $tea.Model {
  tmProduces?: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProduces[];
  static names(): { [key: string]: string } {
    return {
      tmProduces: 'TmProduces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmProduces: { 'type': 'array', 'itemType': QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProduces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceDetailResponseBodyData extends $tea.Model {
  allowCancel?: boolean;
  bizId?: string;
  buyerStatus?: number;
  classification?: string;
  confiscateAmount?: number;
  createTime?: number;
  exclusiveDateLimit?: string;
  extend?: { [key: string]: any };
  finalAmount?: number;
  icon?: string;
  operateNote?: string;
  paidAmount?: number;
  preAmount?: number;
  preOrderId?: string;
  refundAmount?: number;
  registerNumber?: string;
  share?: string;
  source?: number;
  thirdCode?: string;
  tmName?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      bizId: 'BizId',
      buyerStatus: 'BuyerStatus',
      classification: 'Classification',
      confiscateAmount: 'ConfiscateAmount',
      createTime: 'CreateTime',
      exclusiveDateLimit: 'ExclusiveDateLimit',
      extend: 'Extend',
      finalAmount: 'FinalAmount',
      icon: 'Icon',
      operateNote: 'OperateNote',
      paidAmount: 'PaidAmount',
      preAmount: 'PreAmount',
      preOrderId: 'PreOrderId',
      refundAmount: 'RefundAmount',
      registerNumber: 'RegisterNumber',
      share: 'Share',
      source: 'Source',
      thirdCode: 'ThirdCode',
      tmName: 'TmName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'boolean',
      bizId: 'string',
      buyerStatus: 'number',
      classification: 'string',
      confiscateAmount: 'number',
      createTime: 'number',
      exclusiveDateLimit: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      finalAmount: 'number',
      icon: 'string',
      operateNote: 'string',
      paidAmount: 'number',
      preAmount: 'number',
      preOrderId: 'string',
      refundAmount: 'number',
      registerNumber: 'string',
      share: 'string',
      source: 'number',
      thirdCode: 'string',
      tmName: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListResponseBodyDataTradeProduces extends $tea.Model {
  allowCancel?: boolean;
  bizId?: string;
  buyerStatus?: number;
  classification?: string;
  createTime?: number;
  failReason?: number;
  finalAmount?: number;
  icon?: string;
  operateNote?: string;
  preAmount?: number;
  preOrderId?: string;
  registerNumber?: string;
  source?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      bizId: 'BizId',
      buyerStatus: 'BuyerStatus',
      classification: 'Classification',
      createTime: 'CreateTime',
      failReason: 'FailReason',
      finalAmount: 'FinalAmount',
      icon: 'Icon',
      operateNote: 'OperateNote',
      preAmount: 'PreAmount',
      preOrderId: 'PreOrderId',
      registerNumber: 'RegisterNumber',
      source: 'Source',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'boolean',
      bizId: 'string',
      buyerStatus: 'number',
      classification: 'string',
      createTime: 'number',
      failReason: 'number',
      finalAmount: 'number',
      icon: 'string',
      operateNote: 'string',
      preAmount: 'number',
      preOrderId: 'string',
      registerNumber: 'string',
      source: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListResponseBodyData extends $tea.Model {
  tradeProduces?: QueryTradeProduceListResponseBodyDataTradeProduces[];
  static names(): { [key: string]: string } {
    return {
      tradeProduces: 'TradeProduces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tradeProduces: { 'type': 'array', 'itemType': QueryTradeProduceListResponseBodyDataTradeProduces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberResponseBodyMoudleLeafCodesLeafCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberResponseBodyMoudleLeafCodes extends $tea.Model {
  leafCode?: QueryTrademarkDetailByApplyNumberResponseBodyMoudleLeafCodesLeafCode[];
  static names(): { [key: string]: string } {
    return {
      leafCode: 'leafCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCode: { 'type': 'array', 'itemType': QueryTrademarkDetailByApplyNumberResponseBodyMoudleLeafCodesLeafCode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberResponseBodyMoudleMaterialInfo extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  cnInfoUrl?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactPhoneNumber?: string;
  contactZipCode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  loaKey?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  personalType?: number;
  postCode?: string;
  province?: string;
  reasonFileOssKey?: string;
  region?: number;
  reviewFileMap?: { [key: string]: any };
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      cnInfoUrl: 'CnInfoUrl',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactPhoneNumber: 'ContactPhoneNumber',
      contactZipCode: 'ContactZipCode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      loaKey: 'LoaKey',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      postCode: 'PostCode',
      province: 'Province',
      reasonFileOssKey: 'ReasonFileOssKey',
      region: 'Region',
      reviewFileMap: 'ReviewFileMap',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      cnInfoUrl: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactPhoneNumber: 'string',
      contactZipCode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      loaKey: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'number',
      postCode: 'string',
      province: 'string',
      reasonFileOssKey: 'string',
      region: 'number',
      reviewFileMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberResponseBodyMoudleRootCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberResponseBodyMoudle extends $tea.Model {
  bitFlag?: number;
  bizId?: string;
  bizType?: string;
  extendInfo?: { [key: string]: any };
  grayIconUrl?: string;
  icon?: string;
  leafCodes?: QueryTrademarkDetailByApplyNumberResponseBodyMoudleLeafCodes;
  materialInfo?: QueryTrademarkDetailByApplyNumberResponseBodyMoudleMaterialInfo;
  orderId?: string;
  partnerCode?: string;
  principalKey?: string;
  principalName?: string;
  produceType?: string;
  rootCode?: QueryTrademarkDetailByApplyNumberResponseBodyMoudleRootCode;
  status?: string;
  statusStr?: string;
  submitAuditTimeStr?: string;
  submitAuditTimeValue?: number;
  submitStatus?: string;
  submitTimeStr?: string;
  submitTimeValue?: number;
  submitTimes?: number;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bitFlag: 'BitFlag',
      bizId: 'BizId',
      bizType: 'BizType',
      extendInfo: 'ExtendInfo',
      grayIconUrl: 'GrayIconUrl',
      icon: 'Icon',
      leafCodes: 'LeafCodes',
      materialInfo: 'MaterialInfo',
      orderId: 'OrderId',
      partnerCode: 'PartnerCode',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      produceType: 'ProduceType',
      rootCode: 'RootCode',
      status: 'Status',
      statusStr: 'StatusStr',
      submitAuditTimeStr: 'SubmitAuditTimeStr',
      submitAuditTimeValue: 'SubmitAuditTimeValue',
      submitStatus: 'SubmitStatus',
      submitTimeStr: 'SubmitTimeStr',
      submitTimeValue: 'SubmitTimeValue',
      submitTimes: 'SubmitTimes',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitFlag: 'number',
      bizId: 'string',
      bizType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      grayIconUrl: 'string',
      icon: 'string',
      leafCodes: QueryTrademarkDetailByApplyNumberResponseBodyMoudleLeafCodes,
      materialInfo: QueryTrademarkDetailByApplyNumberResponseBodyMoudleMaterialInfo,
      orderId: 'string',
      partnerCode: 'string',
      principalKey: 'string',
      principalName: 'string',
      produceType: 'string',
      rootCode: QueryTrademarkDetailByApplyNumberResponseBodyMoudleRootCode,
      status: 'string',
      statusStr: 'string',
      submitAuditTimeStr: 'string',
      submitAuditTimeValue: 'number',
      submitStatus: 'string',
      submitTimeStr: 'string',
      submitTimeValue: 'number',
      submitTimes: 'number',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleLeafCodesLeafCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleLeafCodes extends $tea.Model {
  leafCode?: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleLeafCodesLeafCode[];
  static names(): { [key: string]: string } {
    return {
      leafCode: 'leafCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCode: { 'type': 'array', 'itemType': QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleLeafCodesLeafCode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleMaterialInfo extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  cnInfoUrl?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactPhoneNumber?: string;
  contactZipCode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  loaKey?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  personalType?: number;
  postCode?: string;
  province?: string;
  reasonFileOssKey?: string;
  region?: number;
  reviewFileMap?: { [key: string]: any };
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      cnInfoUrl: 'CnInfoUrl',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactPhoneNumber: 'ContactPhoneNumber',
      contactZipCode: 'ContactZipCode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      loaKey: 'LoaKey',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      postCode: 'PostCode',
      province: 'Province',
      reasonFileOssKey: 'ReasonFileOssKey',
      region: 'Region',
      reviewFileMap: 'ReviewFileMap',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      cnInfoUrl: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactPhoneNumber: 'string',
      contactZipCode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      loaKey: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'number',
      postCode: 'string',
      province: 'string',
      reasonFileOssKey: 'string',
      region: 'number',
      reviewFileMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleRootCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkDetailByApplyNumberEspResponseBodyMoudle extends $tea.Model {
  bitFlag?: number;
  bizId?: string;
  bizType?: string;
  extendInfo?: { [key: string]: any };
  grayIconUrl?: string;
  icon?: string;
  leafCodes?: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleLeafCodes;
  materialInfo?: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleMaterialInfo;
  orderId?: string;
  partnerCode?: string;
  principalKey?: string;
  principalName?: string;
  produceType?: string;
  rootCode?: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleRootCode;
  status?: string;
  statusStr?: string;
  submitAuditTimeStr?: string;
  submitAuditTimeValue?: number;
  submitStatus?: string;
  submitTimeStr?: string;
  submitTimeValue?: number;
  submitTimes?: number;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bitFlag: 'BitFlag',
      bizId: 'BizId',
      bizType: 'BizType',
      extendInfo: 'ExtendInfo',
      grayIconUrl: 'GrayIconUrl',
      icon: 'Icon',
      leafCodes: 'LeafCodes',
      materialInfo: 'MaterialInfo',
      orderId: 'OrderId',
      partnerCode: 'PartnerCode',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      produceType: 'ProduceType',
      rootCode: 'RootCode',
      status: 'Status',
      statusStr: 'StatusStr',
      submitAuditTimeStr: 'SubmitAuditTimeStr',
      submitAuditTimeValue: 'SubmitAuditTimeValue',
      submitStatus: 'SubmitStatus',
      submitTimeStr: 'SubmitTimeStr',
      submitTimeValue: 'SubmitTimeValue',
      submitTimes: 'SubmitTimes',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitFlag: 'number',
      bizId: 'string',
      bizType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      grayIconUrl: 'string',
      icon: 'string',
      leafCodes: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleLeafCodes,
      materialInfo: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleMaterialInfo,
      orderId: 'string',
      partnerCode: 'string',
      principalKey: 'string',
      principalName: 'string',
      produceType: 'string',
      rootCode: QueryTrademarkDetailByApplyNumberEspResponseBodyMoudleRootCode,
      status: 'string',
      statusStr: 'string',
      submitAuditTimeStr: 'string',
      submitAuditTimeValue: 'number',
      submitStatus: 'string',
      submitTimeStr: 'string',
      submitTimeValue: 'number',
      submitTimes: 'number',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailResponseBodyMoudleLeafCodesLeafCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailResponseBodyMoudleLeafCodes extends $tea.Model {
  leafCode?: QueryTrademarkModelDetailResponseBodyMoudleLeafCodesLeafCode[];
  static names(): { [key: string]: string } {
    return {
      leafCode: 'leafCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCode: { 'type': 'array', 'itemType': QueryTrademarkModelDetailResponseBodyMoudleLeafCodesLeafCode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailResponseBodyMoudleMaterialInfo extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  cnInfoUrl?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactPhoneNumber?: string;
  contactZipCode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  loaKey?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  personalType?: number;
  postCode?: string;
  province?: string;
  reasonFileOssKey?: string;
  region?: number;
  reviewFileMap?: { [key: string]: any };
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      cnInfoUrl: 'CnInfoUrl',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactPhoneNumber: 'ContactPhoneNumber',
      contactZipCode: 'ContactZipCode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      loaKey: 'LoaKey',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      postCode: 'PostCode',
      province: 'Province',
      reasonFileOssKey: 'ReasonFileOssKey',
      region: 'Region',
      reviewFileMap: 'ReviewFileMap',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      cnInfoUrl: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactPhoneNumber: 'string',
      contactZipCode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      loaKey: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'number',
      postCode: 'string',
      province: 'string',
      reasonFileOssKey: 'string',
      region: 'number',
      reviewFileMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailResponseBodyMoudleRootCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelDetailResponseBodyMoudle extends $tea.Model {
  bitFlag?: number;
  bizId?: string;
  bizType?: string;
  extendInfo?: { [key: string]: any };
  grayIconUrl?: string;
  icon?: string;
  leafCodes?: QueryTrademarkModelDetailResponseBodyMoudleLeafCodes;
  materialInfo?: QueryTrademarkModelDetailResponseBodyMoudleMaterialInfo;
  orderId?: string;
  partnerCode?: string;
  principalKey?: string;
  principalName?: string;
  produceType?: string;
  requestId?: string;
  rootCode?: QueryTrademarkModelDetailResponseBodyMoudleRootCode;
  status?: string;
  statusStr?: string;
  submitAuditTimeStr?: string;
  submitAuditTimeValue?: number;
  submitStatus?: string;
  submitTimeStr?: string;
  submitTimeValue?: number;
  submitTimes?: number;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bitFlag: 'BitFlag',
      bizId: 'BizId',
      bizType: 'BizType',
      extendInfo: 'ExtendInfo',
      grayIconUrl: 'GrayIconUrl',
      icon: 'Icon',
      leafCodes: 'LeafCodes',
      materialInfo: 'MaterialInfo',
      orderId: 'OrderId',
      partnerCode: 'PartnerCode',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      produceType: 'ProduceType',
      requestId: 'RequestId',
      rootCode: 'RootCode',
      status: 'Status',
      statusStr: 'StatusStr',
      submitAuditTimeStr: 'SubmitAuditTimeStr',
      submitAuditTimeValue: 'SubmitAuditTimeValue',
      submitStatus: 'SubmitStatus',
      submitTimeStr: 'SubmitTimeStr',
      submitTimeValue: 'SubmitTimeValue',
      submitTimes: 'SubmitTimes',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitFlag: 'number',
      bizId: 'string',
      bizType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      grayIconUrl: 'string',
      icon: 'string',
      leafCodes: QueryTrademarkModelDetailResponseBodyMoudleLeafCodes,
      materialInfo: QueryTrademarkModelDetailResponseBodyMoudleMaterialInfo,
      orderId: 'string',
      partnerCode: 'string',
      principalKey: 'string',
      principalName: 'string',
      produceType: 'string',
      requestId: 'string',
      rootCode: QueryTrademarkModelDetailResponseBodyMoudleRootCode,
      status: 'string',
      statusStr: 'string',
      submitAuditTimeStr: 'string',
      submitAuditTimeValue: 'number',
      submitStatus: 'string',
      submitTimeStr: 'string',
      submitTimeValue: 'number',
      submitTimes: 'number',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailResponseBodyMoudleLeafCodesLeafCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailResponseBodyMoudleLeafCodes extends $tea.Model {
  leafCode?: QueryTrademarkModelEspDetailResponseBodyMoudleLeafCodesLeafCode[];
  static names(): { [key: string]: string } {
    return {
      leafCode: 'leafCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCode: { 'type': 'array', 'itemType': QueryTrademarkModelEspDetailResponseBodyMoudleLeafCodesLeafCode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailResponseBodyMoudleMaterialInfo extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  cnInfoUrl?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactZipCode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  loaKey?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  personalType?: string;
  postCode?: string;
  province?: string;
  reasonFileOssKey?: string;
  region?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      cnInfoUrl: 'CnInfoUrl',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactZipCode: 'ContactZipCode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      loaKey: 'LoaKey',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      postCode: 'PostCode',
      province: 'Province',
      reasonFileOssKey: 'ReasonFileOssKey',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      cnInfoUrl: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactZipCode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      loaKey: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'string',
      postCode: 'string',
      province: 'string',
      reasonFileOssKey: 'string',
      region: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailResponseBodyMoudleRootCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspDetailResponseBodyMoudle extends $tea.Model {
  bitFlag?: number;
  bizId?: string;
  bizType?: string;
  extendInfo?: { [key: string]: any };
  grayIconUrl?: string;
  icon?: string;
  leafCodes?: QueryTrademarkModelEspDetailResponseBodyMoudleLeafCodes;
  materialInfo?: QueryTrademarkModelEspDetailResponseBodyMoudleMaterialInfo;
  orderId?: string;
  partnerCode?: string;
  principalKey?: string;
  principalName?: string;
  produceType?: string;
  requestId?: string;
  rootCode?: QueryTrademarkModelEspDetailResponseBodyMoudleRootCode;
  status?: string;
  statusStr?: string;
  submitAuditTime?: number;
  submitStatus?: string;
  submitTime?: number;
  submitTimes?: number;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bitFlag: 'BitFlag',
      bizId: 'BizId',
      bizType: 'BizType',
      extendInfo: 'ExtendInfo',
      grayIconUrl: 'GrayIconUrl',
      icon: 'Icon',
      leafCodes: 'LeafCodes',
      materialInfo: 'MaterialInfo',
      orderId: 'OrderId',
      partnerCode: 'PartnerCode',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      produceType: 'ProduceType',
      requestId: 'RequestId',
      rootCode: 'RootCode',
      status: 'Status',
      statusStr: 'StatusStr',
      submitAuditTime: 'SubmitAuditTime',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
      submitTimes: 'SubmitTimes',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitFlag: 'number',
      bizId: 'string',
      bizType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      grayIconUrl: 'string',
      icon: 'string',
      leafCodes: QueryTrademarkModelEspDetailResponseBodyMoudleLeafCodes,
      materialInfo: QueryTrademarkModelEspDetailResponseBodyMoudleMaterialInfo,
      orderId: 'string',
      partnerCode: 'string',
      principalKey: 'string',
      principalName: 'string',
      produceType: 'string',
      requestId: 'string',
      rootCode: QueryTrademarkModelEspDetailResponseBodyMoudleRootCode,
      status: 'string',
      statusStr: 'string',
      submitAuditTime: 'number',
      submitStatus: 'string',
      submitTime: 'number',
      submitTimes: 'number',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBodyMoudleDataItemLeafCodesLeafCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBodyMoudleDataItemLeafCodes extends $tea.Model {
  leafCode?: QueryTrademarkModelEspListResponseBodyMoudleDataItemLeafCodesLeafCode[];
  static names(): { [key: string]: string } {
    return {
      leafCode: 'leafCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCode: { 'type': 'array', 'itemType': QueryTrademarkModelEspListResponseBodyMoudleDataItemLeafCodesLeafCode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBodyMoudleDataItemMaterialInfo extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  cnInfoUrl?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactZipCode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  loaKey?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  personalType?: string;
  postCode?: string;
  province?: string;
  reasonFileOssKey?: string;
  region?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      cnInfoUrl: 'CnInfoUrl',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactZipCode: 'ContactZipCode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      loaKey: 'LoaKey',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      postCode: 'PostCode',
      province: 'Province',
      reasonFileOssKey: 'ReasonFileOssKey',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      cnInfoUrl: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactZipCode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      loaKey: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'string',
      postCode: 'string',
      province: 'string',
      reasonFileOssKey: 'string',
      region: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBodyMoudleDataItemRootCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBodyMoudleDataItem extends $tea.Model {
  bitFlag?: number;
  bizId?: string;
  bizType?: string;
  extendInfo?: { [key: string]: any };
  grayIconUrl?: string;
  icon?: string;
  leafCodes?: QueryTrademarkModelEspListResponseBodyMoudleDataItemLeafCodes;
  materialInfo?: QueryTrademarkModelEspListResponseBodyMoudleDataItemMaterialInfo;
  orderId?: string;
  partnerCode?: string;
  principalKey?: string;
  principalName?: string;
  produceType?: string;
  rootCode?: QueryTrademarkModelEspListResponseBodyMoudleDataItemRootCode;
  status?: string;
  statusStr?: string;
  submitAuditTime?: number;
  submitStatus?: string;
  submitTime?: number;
  submitTimes?: number;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bitFlag: 'BitFlag',
      bizId: 'BizId',
      bizType: 'BizType',
      extendInfo: 'ExtendInfo',
      grayIconUrl: 'GrayIconUrl',
      icon: 'Icon',
      leafCodes: 'LeafCodes',
      materialInfo: 'MaterialInfo',
      orderId: 'OrderId',
      partnerCode: 'PartnerCode',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      produceType: 'ProduceType',
      rootCode: 'RootCode',
      status: 'Status',
      statusStr: 'StatusStr',
      submitAuditTime: 'SubmitAuditTime',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
      submitTimes: 'SubmitTimes',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitFlag: 'number',
      bizId: 'string',
      bizType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      grayIconUrl: 'string',
      icon: 'string',
      leafCodes: QueryTrademarkModelEspListResponseBodyMoudleDataItemLeafCodes,
      materialInfo: QueryTrademarkModelEspListResponseBodyMoudleDataItemMaterialInfo,
      orderId: 'string',
      partnerCode: 'string',
      principalKey: 'string',
      principalName: 'string',
      produceType: 'string',
      rootCode: QueryTrademarkModelEspListResponseBodyMoudleDataItemRootCode,
      status: 'string',
      statusStr: 'string',
      submitAuditTime: 'number',
      submitStatus: 'string',
      submitTime: 'number',
      submitTimes: 'number',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBodyMoudleData extends $tea.Model {
  item?: QueryTrademarkModelEspListResponseBodyMoudleDataItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryTrademarkModelEspListResponseBodyMoudleDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelEspListResponseBodyMoudle extends $tea.Model {
  data?: QueryTrademarkModelEspListResponseBodyMoudleData;
  requestId?: string;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTrademarkModelEspListResponseBodyMoudleData,
      requestId: 'string',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBodyMoudleDataItemLeafCodesLeafCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBodyMoudleDataItemLeafCodes extends $tea.Model {
  leafCode?: QueryTrademarkModelListResponseBodyMoudleDataItemLeafCodesLeafCode[];
  static names(): { [key: string]: string } {
    return {
      leafCode: 'leafCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leafCode: { 'type': 'array', 'itemType': QueryTrademarkModelListResponseBodyMoudleDataItemLeafCodesLeafCode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBodyMoudleDataItemMaterialInfo extends $tea.Model {
  address?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  cnInfoUrl?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactZipCode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  loaKey?: string;
  loaUrl?: string;
  name?: string;
  passportUrl?: string;
  personalType?: number;
  postCode?: string;
  province?: string;
  reasonFileOssKey?: string;
  region?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      cnInfoUrl: 'CnInfoUrl',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactZipCode: 'ContactZipCode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      loaKey: 'LoaKey',
      loaUrl: 'LoaUrl',
      name: 'Name',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      postCode: 'PostCode',
      province: 'Province',
      reasonFileOssKey: 'ReasonFileOssKey',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      cnInfoUrl: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactZipCode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      loaKey: 'string',
      loaUrl: 'string',
      name: 'string',
      passportUrl: 'string',
      personalType: 'number',
      postCode: 'string',
      province: 'string',
      reasonFileOssKey: 'string',
      region: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBodyMoudleDataItemRootCode extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBodyMoudleDataItem extends $tea.Model {
  bitFlag?: number;
  bizId?: string;
  bizType?: string;
  extendInfo?: { [key: string]: any };
  grayIconUrl?: string;
  icon?: string;
  leafCodes?: QueryTrademarkModelListResponseBodyMoudleDataItemLeafCodes;
  materialInfo?: QueryTrademarkModelListResponseBodyMoudleDataItemMaterialInfo;
  orderId?: string;
  partnerCode?: string;
  principalKey?: string;
  principalName?: string;
  produceType?: string;
  rootCode?: QueryTrademarkModelListResponseBodyMoudleDataItemRootCode;
  status?: string;
  statusStr?: string;
  submitAuditTimeStr?: string;
  submitAuditTimeValue?: number;
  submitStatus?: string;
  submitTimeStr?: string;
  submitTimeValue?: number;
  submitTimes?: number;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bitFlag: 'BitFlag',
      bizId: 'BizId',
      bizType: 'BizType',
      extendInfo: 'ExtendInfo',
      grayIconUrl: 'GrayIconUrl',
      icon: 'Icon',
      leafCodes: 'LeafCodes',
      materialInfo: 'MaterialInfo',
      orderId: 'OrderId',
      partnerCode: 'PartnerCode',
      principalKey: 'PrincipalKey',
      principalName: 'PrincipalName',
      produceType: 'ProduceType',
      rootCode: 'RootCode',
      status: 'Status',
      statusStr: 'StatusStr',
      submitAuditTimeStr: 'SubmitAuditTimeStr',
      submitAuditTimeValue: 'SubmitAuditTimeValue',
      submitStatus: 'SubmitStatus',
      submitTimeStr: 'SubmitTimeStr',
      submitTimeValue: 'SubmitTimeValue',
      submitTimes: 'SubmitTimes',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitFlag: 'number',
      bizId: 'string',
      bizType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      grayIconUrl: 'string',
      icon: 'string',
      leafCodes: QueryTrademarkModelListResponseBodyMoudleDataItemLeafCodes,
      materialInfo: QueryTrademarkModelListResponseBodyMoudleDataItemMaterialInfo,
      orderId: 'string',
      partnerCode: 'string',
      principalKey: 'string',
      principalName: 'string',
      produceType: 'string',
      rootCode: QueryTrademarkModelListResponseBodyMoudleDataItemRootCode,
      status: 'string',
      statusStr: 'string',
      submitAuditTimeStr: 'string',
      submitAuditTimeValue: 'number',
      submitStatus: 'string',
      submitTimeStr: 'string',
      submitTimeValue: 'number',
      submitTimes: 'number',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBodyMoudleData extends $tea.Model {
  item?: QueryTrademarkModelListResponseBodyMoudleDataItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryTrademarkModelListResponseBodyMoudleDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkModelListResponseBodyMoudle extends $tea.Model {
  data?: QueryTrademarkModelListResponseBodyMoudleData;
  requestId?: string;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTrademarkModelListResponseBodyMoudleData,
      requestId: 'string',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsResponseBodyDataTmMonitorResult extends $tea.Model {
  applyDate?: string;
  chesanEndDate?: string;
  classification?: string;
  dataCreateTime?: number;
  dataUpdateTime?: number;
  ownerEnName?: string;
  ownerName?: string;
  registrationNumber?: string;
  ruleId?: string;
  tmImage?: string;
  tmName?: string;
  tmProcedureStatusDesc?: string;
  tmUid?: string;
  userId?: string;
  wuxiaoEndDate?: string;
  xuzhanEndDate?: string;
  yiyiEndDate?: string;
  static names(): { [key: string]: string } {
    return {
      applyDate: 'ApplyDate',
      chesanEndDate: 'ChesanEndDate',
      classification: 'Classification',
      dataCreateTime: 'DataCreateTime',
      dataUpdateTime: 'DataUpdateTime',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      registrationNumber: 'RegistrationNumber',
      ruleId: 'RuleId',
      tmImage: 'TmImage',
      tmName: 'TmName',
      tmProcedureStatusDesc: 'TmProcedureStatusDesc',
      tmUid: 'TmUid',
      userId: 'UserId',
      wuxiaoEndDate: 'WuxiaoEndDate',
      xuzhanEndDate: 'XuzhanEndDate',
      yiyiEndDate: 'YiyiEndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDate: 'string',
      chesanEndDate: 'string',
      classification: 'string',
      dataCreateTime: 'number',
      dataUpdateTime: 'number',
      ownerEnName: 'string',
      ownerName: 'string',
      registrationNumber: 'string',
      ruleId: 'string',
      tmImage: 'string',
      tmName: 'string',
      tmProcedureStatusDesc: 'string',
      tmUid: 'string',
      userId: 'string',
      wuxiaoEndDate: 'string',
      xuzhanEndDate: 'string',
      yiyiEndDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsResponseBodyData extends $tea.Model {
  tmMonitorResult?: QueryTrademarkMonitorResultsResponseBodyDataTmMonitorResult[];
  static names(): { [key: string]: string } {
    return {
      tmMonitorResult: 'TmMonitorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmMonitorResult: { 'type': 'array', 'itemType': QueryTrademarkMonitorResultsResponseBodyDataTmMonitorResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesResponseBodyDataTmMonitorRule extends $tea.Model {
  createTime?: string;
  endTime?: string;
  env?: string;
  id?: string;
  lastFinishTime?: string;
  lastRunTime?: string;
  lastUpdateTime?: string;
  notifyUpdate?: number;
  ruleDetail?: string;
  ruleExtend?: string;
  ruleKeyword?: string;
  ruleName?: string;
  ruleSource?: string;
  ruleStatus?: string;
  ruleType?: number;
  startTime?: string;
  updateTime?: string;
  userId?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      env: 'Env',
      id: 'Id',
      lastFinishTime: 'LastFinishTime',
      lastRunTime: 'LastRunTime',
      lastUpdateTime: 'LastUpdateTime',
      notifyUpdate: 'NotifyUpdate',
      ruleDetail: 'RuleDetail',
      ruleExtend: 'RuleExtend',
      ruleKeyword: 'RuleKeyword',
      ruleName: 'RuleName',
      ruleSource: 'RuleSource',
      ruleStatus: 'RuleStatus',
      ruleType: 'RuleType',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      env: 'string',
      id: 'string',
      lastFinishTime: 'string',
      lastRunTime: 'string',
      lastUpdateTime: 'string',
      notifyUpdate: 'number',
      ruleDetail: 'string',
      ruleExtend: 'string',
      ruleKeyword: 'string',
      ruleName: 'string',
      ruleSource: 'string',
      ruleStatus: 'string',
      ruleType: 'number',
      startTime: 'string',
      updateTime: 'string',
      userId: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesResponseBodyData extends $tea.Model {
  tmMonitorRule?: QueryTrademarkMonitorRulesResponseBodyDataTmMonitorRule[];
  static names(): { [key: string]: string } {
    return {
      tmMonitorRule: 'TmMonitorRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmMonitorRule: { 'type': 'array', 'itemType': QueryTrademarkMonitorRulesResponseBodyDataTmMonitorRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkOnSaleResponseBodyTrademarks extends $tea.Model {
  auditResult?: string;
  classification?: string;
  icon?: string;
  orderPrice?: string;
  registrationNumber?: string;
  status?: number;
  tmType?: string;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      auditResult: 'AuditResult',
      classification: 'Classification',
      icon: 'Icon',
      orderPrice: 'OrderPrice',
      registrationNumber: 'RegistrationNumber',
      status: 'Status',
      tmType: 'TmType',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditResult: 'string',
      classification: 'string',
      icon: 'string',
      orderPrice: 'string',
      registrationNumber: 'string',
      status: 'number',
      tmType: 'string',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceResponseBodyPricesPrices extends $tea.Model {
  classificationCode?: string;
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceResponseBodyPrices extends $tea.Model {
  prices?: QueryTrademarkPriceResponseBodyPricesPrices[];
  static names(): { [key: string]: string } {
    return {
      prices: 'Prices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prices: { 'type': 'array', 'itemType': QueryTrademarkPriceResponseBodyPricesPrices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkUploadAuditResultResponseBodyTrademarks extends $tea.Model {
  auditResult?: string;
  classification?: string;
  icon?: string;
  orderPrice?: string;
  registrationNumber?: string;
  status?: number;
  tmType?: string;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      auditResult: 'AuditResult',
      classification: 'Classification',
      icon: 'Icon',
      orderPrice: 'OrderPrice',
      registrationNumber: 'RegistrationNumber',
      status: 'Status',
      tmType: 'TmType',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditResult: 'string',
      classification: 'string',
      icon: 'string',
      orderPrice: 'string',
      registrationNumber: 'string',
      status: 'number',
      tmType: 'string',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveClassificationConditionsResponseBodyInvalidList extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  officialCode?: string;
  parentCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
      officialCode: 'OfficialCode',
      parentCode: 'ParentCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
      officialCode: 'string',
      parentCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceSchemeMatchResponseBodyDataSchemeContentContentModules extends $tea.Model {
  tag?: string;
  action?: string;
  moduleData?: string;
  moduleDataSource?: string;
  moduleDataSourceType?: string;
  name?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      action: 'action',
      moduleData: 'moduleData',
      moduleDataSource: 'moduleDataSource',
      moduleDataSourceType: 'moduleDataSourceType',
      name: 'name',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      action: 'string',
      moduleData: 'string',
      moduleDataSource: 'string',
      moduleDataSourceType: 'string',
      name: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceSchemeMatchResponseBodyDataSchemeContent extends $tea.Model {
  contentIndex?: number;
  contentModules?: SbrainServiceSchemeMatchResponseBodyDataSchemeContentContentModules[];
  display?: string;
  static names(): { [key: string]: string } {
    return {
      contentIndex: 'ContentIndex',
      contentModules: 'ContentModules',
      display: 'Display',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentIndex: 'number',
      contentModules: { 'type': 'array', 'itemType': SbrainServiceSchemeMatchResponseBodyDataSchemeContentContentModules },
      display: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SbrainServiceSchemeMatchResponseBodyData extends $tea.Model {
  sceneCode?: string;
  schemeContent?: SbrainServiceSchemeMatchResponseBodyDataSchemeContent;
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneCode: 'SceneCode',
      schemeContent: 'SchemeContent',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneCode: 'string',
      schemeContent: SbrainServiceSchemeMatchResponseBodyDataSchemeContent,
      schemeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesResponseBodyTrademarks extends $tea.Model {
  classification?: string;
  icon?: string;
  orderPrice?: string;
  partnerCode?: string;
  productCode?: string;
  productDesc?: string;
  registrationNumber?: string;
  status?: number;
  trademarkName?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      icon: 'Icon',
      orderPrice: 'OrderPrice',
      partnerCode: 'PartnerCode',
      productCode: 'ProductCode',
      productDesc: 'ProductDesc',
      registrationNumber: 'RegistrationNumber',
      status: 'Status',
      trademarkName: 'TrademarkName',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      icon: 'string',
      orderPrice: 'string',
      partnerCode: 'string',
      productCode: 'string',
      productDesc: 'string',
      registrationNumber: 'string',
      status: 'number',
      trademarkName: 'string',
      uid: 'string',
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
    this._endpoint = this.getEndpoint("trademark", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acceptPartnerNotificationWithOptions(request: AcceptPartnerNotificationRequest, runtime: $Util.RuntimeOptions): Promise<AcceptPartnerNotificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.material)) {
      query["Material"] = request.material;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AcceptPartnerNotification",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AcceptPartnerNotificationResponse>(await this.callApi(params, req, runtime), new AcceptPartnerNotificationResponse({}));
  }

  async acceptPartnerNotification(request: AcceptPartnerNotificationRequest): Promise<AcceptPartnerNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptPartnerNotificationWithOptions(request, runtime);
  }

  async applyNotaryPostWithOptions(request: ApplyNotaryPostRequest, runtime: $Util.RuntimeOptions): Promise<ApplyNotaryPostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.notaryOrderId)) {
      query["NotaryOrderId"] = request.notaryOrderId;
    }

    if (!Util.isUnset(request.receiverAddress)) {
      query["ReceiverAddress"] = request.receiverAddress;
    }

    if (!Util.isUnset(request.receiverName)) {
      query["ReceiverName"] = request.receiverName;
    }

    if (!Util.isUnset(request.receiverPhone)) {
      query["ReceiverPhone"] = request.receiverPhone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyNotaryPost",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyNotaryPostResponse>(await this.callApi(params, req, runtime), new ApplyNotaryPostResponse({}));
  }

  async applyNotaryPost(request: ApplyNotaryPostRequest): Promise<ApplyNotaryPostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyNotaryPostWithOptions(request, runtime);
  }

  async askAdjudicationFileWithOptions(request: AskAdjudicationFileRequest, runtime: $Util.RuntimeOptions): Promise<AskAdjudicationFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.contactAddress)) {
      query["ContactAddress"] = request.contactAddress;
    }

    if (!Util.isUnset(request.contactCity)) {
      query["ContactCity"] = request.contactCity;
    }

    if (!Util.isUnset(request.contactCounty)) {
      query["ContactCounty"] = request.contactCounty;
    }

    if (!Util.isUnset(request.contactDistrict)) {
      query["ContactDistrict"] = request.contactDistrict;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.contactProvince)) {
      query["ContactProvince"] = request.contactProvince;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AskAdjudicationFile",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AskAdjudicationFileResponse>(await this.callApi(params, req, runtime), new AskAdjudicationFileResponse({}));
  }

  async askAdjudicationFile(request: AskAdjudicationFileRequest): Promise<AskAdjudicationFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.askAdjudicationFileWithOptions(request, runtime);
  }

  async bindMaterialWithOptions(request: BindMaterialRequest, runtime: $Util.RuntimeOptions): Promise<BindMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.legalNoticeKey)) {
      query["LegalNoticeKey"] = request.legalNoticeKey;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      query["LoaOssKey"] = request.loaOssKey;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindMaterial",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindMaterialResponse>(await this.callApi(params, req, runtime), new BindMaterialResponse({}));
  }

  async bindMaterial(request: BindMaterialRequest): Promise<BindMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindMaterialWithOptions(request, runtime);
  }

  async cancelTradeOrderWithOptions(request: CancelTradeOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelTradeOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelTradeOrder",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelTradeOrderResponse>(await this.callApi(params, req, runtime), new CancelTradeOrderResponse({}));
  }

  async cancelTradeOrder(request: CancelTradeOrderRequest): Promise<CancelTradeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTradeOrderWithOptions(request, runtime);
  }

  async checkFlsmFillWithOptions(request: CheckFlsmFillRequest, runtime: $Util.RuntimeOptions): Promise<CheckFlsmFillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantType)) {
      query["ApplicantType"] = request.applicantType;
    }

    if (!Util.isUnset(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    if (!Util.isUnset(request.wtrName)) {
      query["WtrName"] = request.wtrName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckFlsmFill",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckFlsmFillResponse>(await this.callApi(params, req, runtime), new CheckFlsmFillResponse({}));
  }

  async checkFlsmFill(request: CheckFlsmFillRequest): Promise<CheckFlsmFillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFlsmFillWithOptions(request, runtime);
  }

  async checkIfCollectedWithOptions(request: CheckIfCollectedRequest, runtime: $Util.RuntimeOptions): Promise<CheckIfCollectedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.itemIdList)) {
      query["ItemIdList"] = request.itemIdList;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckIfCollected",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckIfCollectedResponse>(await this.callApi(params, req, runtime), new CheckIfCollectedResponse({}));
  }

  async checkIfCollected(request: CheckIfCollectedRequest): Promise<CheckIfCollectedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkIfCollectedWithOptions(request, runtime);
  }

  async checkLoaFillWithOptions(request: CheckLoaFillRequest, runtime: $Util.RuntimeOptions): Promise<CheckLoaFillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantType)) {
      query["ApplicantType"] = request.applicantType;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.contactZipcode)) {
      query["ContactZipcode"] = request.contactZipcode;
    }

    if (!Util.isUnset(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.wtrName)) {
      query["WtrName"] = request.wtrName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckLoaFill",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckLoaFillResponse>(await this.callApi(params, req, runtime), new CheckLoaFillResponse({}));
  }

  async checkLoaFill(request: CheckLoaFillRequest): Promise<CheckLoaFillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkLoaFillWithOptions(request, runtime);
  }

  async checkTrademarkIconWithOptions(request: CheckTrademarkIconRequest, runtime: $Util.RuntimeOptions): Promise<CheckTrademarkIconResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventSceneType)) {
      query["EventSceneType"] = request.eventSceneType;
    }

    if (!Util.isUnset(request.trademarkIconOssKey)) {
      query["TrademarkIconOssKey"] = request.trademarkIconOssKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckTrademarkIcon",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckTrademarkIconResponse>(await this.callApi(params, req, runtime), new CheckTrademarkIconResponse({}));
  }

  async checkTrademarkIcon(request: CheckTrademarkIconRequest): Promise<CheckTrademarkIconResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTrademarkIconWithOptions(request, runtime);
  }

  async checkTrademarkOrderWithOptions(request: CheckTrademarkOrderRequest, runtime: $Util.RuntimeOptions): Promise<CheckTrademarkOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agreementId)) {
      query["AgreementId"] = request.agreementId;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.isBlackIcon)) {
      query["IsBlackIcon"] = request.isBlackIcon;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      query["LoaOssKey"] = request.loaOssKey;
    }

    if (!Util.isUnset(request.logoGoodsId)) {
      query["LogoGoodsId"] = request.logoGoodsId;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.orderData)) {
      query["OrderData"] = request.orderData;
    }

    if (!Util.isUnset(request.partnerCode)) {
      query["PartnerCode"] = request.partnerCode;
    }

    if (!Util.isUnset(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!Util.isUnset(request.realUserName)) {
      query["RealUserName"] = request.realUserName;
    }

    if (!Util.isUnset(request.registerName)) {
      query["RegisterName"] = request.registerName;
    }

    if (!Util.isUnset(request.registerNumber)) {
      query["RegisterNumber"] = request.registerNumber;
    }

    if (!Util.isUnset(request.renewInfoId)) {
      query["RenewInfoId"] = request.renewInfoId;
    }

    if (!Util.isUnset(request.rootCode)) {
      query["RootCode"] = request.rootCode;
    }

    if (!Util.isUnset(request.tmComment)) {
      query["TmComment"] = request.tmComment;
    }

    if (!Util.isUnset(request.tmIcon)) {
      query["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNameType)) {
      query["TmNameType"] = request.tmNameType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckTrademarkOrder",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckTrademarkOrderResponse>(await this.callApi(params, req, runtime), new CheckTrademarkOrderResponse({}));
  }

  async checkTrademarkOrder(request: CheckTrademarkOrderRequest): Promise<CheckTrademarkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTrademarkOrderWithOptions(request, runtime);
  }

  async combineLoaWithOptions(request: CombineLoaRequest, runtime: $Util.RuntimeOptions): Promise<CombineLoaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.applicantType)) {
      query["ApplicantType"] = request.applicantType;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactPhone)) {
      query["ContactPhone"] = request.contactPhone;
    }

    if (!Util.isUnset(request.contactPostcode)) {
      query["ContactPostcode"] = request.contactPostcode;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.materialName)) {
      query["MaterialName"] = request.materialName;
    }

    if (!Util.isUnset(request.nationality)) {
      query["Nationality"] = request.nationality;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.tmNumber)) {
      query["TmNumber"] = request.tmNumber;
    }

    if (!Util.isUnset(request.tmProduceType)) {
      query["TmProduceType"] = request.tmProduceType;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CombineLoa",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CombineLoaResponse>(await this.callApi(params, req, runtime), new CombineLoaResponse({}));
  }

  async combineLoa(request: CombineLoaRequest): Promise<CombineLoaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.combineLoaWithOptions(request, runtime);
  }

  async combineWTSWithOptions(request: CombineWTSRequest, runtime: $Util.RuntimeOptions): Promise<CombineWTSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.contact)) {
      query["Contact"] = request.contact;
    }

    if (!Util.isUnset(request.contactAddressPost)) {
      query["ContactAddressPost"] = request.contactAddressPost;
    }

    if (!Util.isUnset(request.contactMobile)) {
      query["ContactMobile"] = request.contactMobile;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.materialName)) {
      query["MaterialName"] = request.materialName;
    }

    if (!Util.isUnset(request.nationality)) {
      query["Nationality"] = request.nationality;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.tmNum)) {
      query["TmNum"] = request.tmNum;
    }

    if (!Util.isUnset(request.tmProduceType)) {
      query["TmProduceType"] = request.tmProduceType;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    if (!Util.isUnset(request.wtsType)) {
      query["WtsType"] = request.wtsType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CombineWTS",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CombineWTSResponse>(await this.callApi(params, req, runtime), new CombineWTSResponse({}));
  }

  async combineWTS(request: CombineWTSRequest): Promise<CombineWTSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.combineWTSWithOptions(request, runtime);
  }

  async complementIntentionUserIdWithOptions(request: ComplementIntentionUserIdRequest, runtime: $Util.RuntimeOptions): Promise<ComplementIntentionUserIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!Util.isUnset(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.callerType)) {
      query["CallerType"] = request.callerType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.complementUserId)) {
      body["ComplementUserId"] = request.complementUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ComplementIntentionUserId",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ComplementIntentionUserIdResponse>(await this.callApi(params, req, runtime), new ComplementIntentionUserIdResponse({}));
  }

  async complementIntentionUserId(request: ComplementIntentionUserIdRequest): Promise<ComplementIntentionUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.complementIntentionUserIdWithOptions(request, runtime);
  }

  async confirmAdditionalMaterialWithOptions(request: ConfirmAdditionalMaterialRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmAdditionalMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmAdditionalMaterial",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmAdditionalMaterialResponse>(await this.callApi(params, req, runtime), new ConfirmAdditionalMaterialResponse({}));
  }

  async confirmAdditionalMaterial(request: ConfirmAdditionalMaterialRequest): Promise<ConfirmAdditionalMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmAdditionalMaterialWithOptions(request, runtime);
  }

  async confirmApplicantWithOptions(request: ConfirmApplicantRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmApplicant",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmApplicantResponse>(await this.callApi(params, req, runtime), new ConfirmApplicantResponse({}));
  }

  async confirmApplicant(request: ConfirmApplicantRequest): Promise<ConfirmApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmApplicantWithOptions(request, runtime);
  }

  async confirmDissentOriginalWithOptions(request: ConfirmDissentOriginalRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmDissentOriginalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.contactAddress)) {
      query["ContactAddress"] = request.contactAddress;
    }

    if (!Util.isUnset(request.contactCity)) {
      query["ContactCity"] = request.contactCity;
    }

    if (!Util.isUnset(request.contactCounty)) {
      query["ContactCounty"] = request.contactCounty;
    }

    if (!Util.isUnset(request.contactDistrict)) {
      query["ContactDistrict"] = request.contactDistrict;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.contactProvince)) {
      query["ContactProvince"] = request.contactProvince;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmDissentOriginal",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmDissentOriginalResponse>(await this.callApi(params, req, runtime), new ConfirmDissentOriginalResponse({}));
  }

  async confirmDissentOriginal(request: ConfirmDissentOriginalRequest): Promise<ConfirmDissentOriginalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmDissentOriginalWithOptions(request, runtime);
  }

  async convertImageToGrayWithOptions(request: ConvertImageToGrayRequest, runtime: $Util.RuntimeOptions): Promise<ConvertImageToGrayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConvertImageToGray",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertImageToGrayResponse>(await this.callApi(params, req, runtime), new ConvertImageToGrayResponse({}));
  }

  async convertImageToGray(request: ConvertImageToGrayRequest): Promise<ConvertImageToGrayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertImageToGrayWithOptions(request, runtime);
  }

  async copyApplicantWithOptions(request: CopyApplicantRequest, runtime: $Util.RuntimeOptions): Promise<CopyApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyApplicant",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyApplicantResponse>(await this.callApi(params, req, runtime), new CopyApplicantResponse({}));
  }

  async copyApplicant(request: CopyApplicantRequest): Promise<CopyApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyApplicantWithOptions(request, runtime);
  }

  async createIntentionOrderWithOptions(request: CreateIntentionOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentionOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIntentionOrder",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIntentionOrderResponse>(await this.callApi(params, req, runtime), new CreateIntentionOrderResponse({}));
  }

  async createIntentionOrder(request: CreateIntentionOrderRequest): Promise<CreateIntentionOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentionOrderWithOptions(request, runtime);
  }

  async createIntentionOrderGeneratingPayWithOptions(request: CreateIntentionOrderGeneratingPayRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentionOrderGeneratingPayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.paymentCallback)) {
      query["PaymentCallback"] = request.paymentCallback;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIntentionOrderGeneratingPay",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIntentionOrderGeneratingPayResponse>(await this.callApi(params, req, runtime), new CreateIntentionOrderGeneratingPayResponse({}));
  }

  async createIntentionOrderGeneratingPay(request: CreateIntentionOrderGeneratingPayRequest): Promise<CreateIntentionOrderGeneratingPayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentionOrderGeneratingPayWithOptions(request, runtime);
  }

  async createTrademarkOrderWithOptions(request: CreateTrademarkOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrademarkOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agreementId)) {
      query["AgreementId"] = request.agreementId;
    }

    if (!Util.isUnset(request.bigDipperSource)) {
      query["BigDipperSource"] = request.bigDipperSource;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.isBlackIcon)) {
      query["IsBlackIcon"] = request.isBlackIcon;
    }

    if (!Util.isUnset(request.legalNoticeKey)) {
      query["LegalNoticeKey"] = request.legalNoticeKey;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      query["LoaOssKey"] = request.loaOssKey;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.orderData)) {
      query["OrderData"] = request.orderData;
    }

    if (!Util.isUnset(request.partnerCode)) {
      query["PartnerCode"] = request.partnerCode;
    }

    if (!Util.isUnset(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.realUserName)) {
      query["RealUserName"] = request.realUserName;
    }

    if (!Util.isUnset(request.registerName)) {
      query["RegisterName"] = request.registerName;
    }

    if (!Util.isUnset(request.registerNumber)) {
      query["RegisterNumber"] = request.registerNumber;
    }

    if (!Util.isUnset(request.renewInfoId)) {
      query["RenewInfoId"] = request.renewInfoId;
    }

    if (!Util.isUnset(request.rootCode)) {
      query["RootCode"] = request.rootCode;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tmComment)) {
      query["TmComment"] = request.tmComment;
    }

    if (!Util.isUnset(request.tmIcon)) {
      query["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNameType)) {
      query["TmNameType"] = request.tmNameType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.ua)) {
      query["Ua"] = request.ua;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrademarkOrder",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrademarkOrderResponse>(await this.callApi(params, req, runtime), new CreateTrademarkOrderResponse({}));
  }

  async createTrademarkOrder(request: CreateTrademarkOrderRequest): Promise<CreateTrademarkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrademarkOrderWithOptions(request, runtime);
  }

  async deleteMaterialWithOptions(request: DeleteMaterialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMaterial",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMaterialResponse>(await this.callApi(params, req, runtime), new DeleteMaterialResponse({}));
  }

  async deleteMaterial(request: DeleteMaterialRequest): Promise<DeleteMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMaterialWithOptions(request, runtime);
  }

  async deleteTmMonitorRuleWithOptions(request: DeleteTmMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTmMonitorRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTmMonitorRule",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTmMonitorRuleResponse>(await this.callApi(params, req, runtime), new DeleteTmMonitorRuleResponse({}));
  }

  async deleteTmMonitorRule(request: DeleteTmMonitorRuleRequest): Promise<DeleteTmMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTmMonitorRuleWithOptions(request, runtime);
  }

  async deleteTrademarkApplicationWithOptions(request: DeleteTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrademarkApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrademarkApplication",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrademarkApplicationResponse>(await this.callApi(params, req, runtime), new DeleteTrademarkApplicationResponse({}));
  }

  async deleteTrademarkApplication(request: DeleteTrademarkApplicationRequest): Promise<DeleteTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrademarkApplicationWithOptions(request, runtime);
  }

  async denySupplementWithOptions(request: DenySupplementRequest, runtime: $Util.RuntimeOptions): Promise<DenySupplementResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DenySupplement",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DenySupplementResponse>(await this.callApi(params, req, runtime), new DenySupplementResponse({}));
  }

  async denySupplement(request: DenySupplementRequest): Promise<DenySupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.denySupplementWithOptions(request, runtime);
  }

  async descirbeCombineTrademarkWithOptions(request: DescirbeCombineTrademarkRequest, runtime: $Util.RuntimeOptions): Promise<DescirbeCombineTrademarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accurateMatch)) {
      query["AccurateMatch"] = request.accurateMatch;
    }

    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerName)) {
      query["OwnerName"] = request.ownerName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.products)) {
      query["Products"] = request.products;
    }

    if (!Util.isUnset(request.registrationNumber)) {
      query["RegistrationNumber"] = request.registrationNumber;
    }

    if (!Util.isUnset(request.similarGroups)) {
      query["SimilarGroups"] = request.similarGroups;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescirbeCombineTrademark",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescirbeCombineTrademarkResponse>(await this.callApi(params, req, runtime), new DescirbeCombineTrademarkResponse({}));
  }

  async descirbeCombineTrademark(request: DescirbeCombineTrademarkRequest): Promise<DescirbeCombineTrademarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descirbeCombineTrademarkWithOptions(request, runtime);
  }

  async fillLogisticsWithOptions(request: FillLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<FillLogisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.logistics)) {
      query["Logistics"] = request.logistics;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FillLogistics",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FillLogisticsResponse>(await this.callApi(params, req, runtime), new FillLogisticsResponse({}));
  }

  async fillLogistics(request: FillLogisticsRequest): Promise<FillLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fillLogisticsWithOptions(request, runtime);
  }

  async filterUnavailableCodesWithOptions(tmpReq: FilterUnavailableCodesRequest, runtime: $Util.RuntimeOptions): Promise<FilterUnavailableCodesResponse> {
    Util.validateModel(tmpReq);
    let request = new FilterUnavailableCodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.codes)) {
      request.codesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codes, "Codes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.codesShrink)) {
      query["Codes"] = request.codesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FilterUnavailableCodes",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FilterUnavailableCodesResponse>(await this.callApi(params, req, runtime), new FilterUnavailableCodesResponse({}));
  }

  async filterUnavailableCodes(request: FilterUnavailableCodesRequest): Promise<FilterUnavailableCodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.filterUnavailableCodesWithOptions(request, runtime);
  }

  async forceUploadTrademarkOnsaleWithOptions(request: ForceUploadTrademarkOnsaleRequest, runtime: $Util.RuntimeOptions): Promise<ForceUploadTrademarkOnsaleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.classificationCode)) {
      query["ClassificationCode"] = request.classificationCode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.originalPrice)) {
      query["OriginalPrice"] = request.originalPrice;
    }

    if (!Util.isUnset(request.ownerEnName)) {
      query["OwnerEnName"] = request.ownerEnName;
    }

    if (!Util.isUnset(request.ownerName)) {
      query["OwnerName"] = request.ownerName;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.regAnnDate)) {
      query["RegAnnDate"] = request.regAnnDate;
    }

    if (!Util.isUnset(request.secondaryClassification)) {
      query["SecondaryClassification"] = request.secondaryClassification;
    }

    if (!Util.isUnset(request.thirdClassification)) {
      query["ThirdClassification"] = request.thirdClassification;
    }

    if (!Util.isUnset(request.tmIcon)) {
      query["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNumber)) {
      query["TmNumber"] = request.tmNumber;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ForceUploadTrademarkOnsale",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ForceUploadTrademarkOnsaleResponse>(await this.callApi(params, req, runtime), new ForceUploadTrademarkOnsaleResponse({}));
  }

  async forceUploadTrademarkOnsale(request: ForceUploadTrademarkOnsaleRequest): Promise<ForceUploadTrademarkOnsaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forceUploadTrademarkOnsaleWithOptions(request, runtime);
  }

  async generateQrCodeWithOptions(request: GenerateQrCodeRequest, runtime: $Util.RuntimeOptions): Promise<GenerateQrCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fieldKey)) {
      query["FieldKey"] = request.fieldKey;
    }

    if (!Util.isUnset(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateQrCode",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateQrCodeResponse>(await this.callApi(params, req, runtime), new GenerateQrCodeResponse({}));
  }

  async generateQrCode(request: GenerateQrCodeRequest): Promise<GenerateQrCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateQrCodeWithOptions(request, runtime);
  }

  async generateUploadFilePolicyWithOptions(request: GenerateUploadFilePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadFilePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadFilePolicy",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateUploadFilePolicyResponse>(await this.callApi(params, req, runtime), new GenerateUploadFilePolicyResponse({}));
  }

  async generateUploadFilePolicy(request: GenerateUploadFilePolicyRequest): Promise<GenerateUploadFilePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadFilePolicyWithOptions(request, runtime);
  }

  async getAuthorizationLetterVersionWithOptions(request: GetAuthorizationLetterVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationLetterVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthorizationLetterVersion",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthorizationLetterVersionResponse>(await this.callApi(params, req, runtime), new GetAuthorizationLetterVersionResponse({}));
  }

  async getAuthorizationLetterVersion(request: GetAuthorizationLetterVersionRequest): Promise<GetAuthorizationLetterVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationLetterVersionWithOptions(request, runtime);
  }

  async getDefaultPrincipalWithOptions(runtime: $Util.RuntimeOptions): Promise<GetDefaultPrincipalResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetDefaultPrincipal",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultPrincipalResponse>(await this.callApi(params, req, runtime), new GetDefaultPrincipalResponse({}));
  }

  async getDefaultPrincipal(): Promise<GetDefaultPrincipalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultPrincipalWithOptions(runtime);
  }

  async getDefaultPrincipalNameWithOptions(request: GetDefaultPrincipalNameRequest, runtime: $Util.RuntimeOptions): Promise<GetDefaultPrincipalNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDefaultPrincipalName",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultPrincipalNameResponse>(await this.callApi(params, req, runtime), new GetDefaultPrincipalNameResponse({}));
  }

  async getDefaultPrincipalName(request: GetDefaultPrincipalNameRequest): Promise<GetDefaultPrincipalNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultPrincipalNameWithOptions(request, runtime);
  }

  async getNotaryOrderWithOptions(request: GetNotaryOrderRequest, runtime: $Util.RuntimeOptions): Promise<GetNotaryOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.notaryOrderId)) {
      query["NotaryOrderId"] = request.notaryOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNotaryOrder",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNotaryOrderResponse>(await this.callApi(params, req, runtime), new GetNotaryOrderResponse({}));
  }

  async getNotaryOrder(request: GetNotaryOrderRequest): Promise<GetNotaryOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNotaryOrderWithOptions(request, runtime);
  }

  async getSupportPrincipalNameWithOptions(runtime: $Util.RuntimeOptions): Promise<GetSupportPrincipalNameResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetSupportPrincipalName",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSupportPrincipalNameResponse>(await this.callApi(params, req, runtime), new GetSupportPrincipalNameResponse({}));
  }

  async getSupportPrincipalName(): Promise<GetSupportPrincipalNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupportPrincipalNameWithOptions(runtime);
  }

  async insertMaterialWithOptions(request: InsertMaterialRequest, runtime: $Util.RuntimeOptions): Promise<InsertMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.businessLicenceOssKey)) {
      query["BusinessLicenceOssKey"] = request.businessLicenceOssKey;
    }

    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.contactAddress)) {
      query["ContactAddress"] = request.contactAddress;
    }

    if (!Util.isUnset(request.contactCity)) {
      query["ContactCity"] = request.contactCity;
    }

    if (!Util.isUnset(request.contactCounty)) {
      query["ContactCounty"] = request.contactCounty;
    }

    if (!Util.isUnset(request.contactDistrict)) {
      query["ContactDistrict"] = request.contactDistrict;
    }

    if (!Util.isUnset(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.contactProvince)) {
      query["ContactProvince"] = request.contactProvince;
    }

    if (!Util.isUnset(request.contactZipcode)) {
      query["ContactZipcode"] = request.contactZipcode;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.EAddress)) {
      query["EAddress"] = request.EAddress;
    }

    if (!Util.isUnset(request.EName)) {
      query["EName"] = request.EName;
    }

    if (!Util.isUnset(request.idCardName)) {
      query["IdCardName"] = request.idCardName;
    }

    if (!Util.isUnset(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!Util.isUnset(request.idCardOssKey)) {
      query["IdCardOssKey"] = request.idCardOssKey;
    }

    if (!Util.isUnset(request.legalNoticeOssKey)) {
      query["LegalNoticeOssKey"] = request.legalNoticeOssKey;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      query["LoaOssKey"] = request.loaOssKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.passportOssKey)) {
      query["PassportOssKey"] = request.passportOssKey;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.town)) {
      query["Town"] = request.town;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertMaterial",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertMaterialResponse>(await this.callApi(params, req, runtime), new InsertMaterialResponse({}));
  }

  async insertMaterial(request: InsertMaterialRequest): Promise<InsertMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertMaterialWithOptions(request, runtime);
  }

  async insertRenewInfoWithOptions(request: InsertRenewInfoRequest, runtime: $Util.RuntimeOptions): Promise<InsertRenewInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.engAddress)) {
      query["EngAddress"] = request.engAddress;
    }

    if (!Util.isUnset(request.engName)) {
      query["EngName"] = request.engName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.registerTime)) {
      query["RegisterTime"] = request.registerTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertRenewInfo",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertRenewInfoResponse>(await this.callApi(params, req, runtime), new InsertRenewInfoResponse({}));
  }

  async insertRenewInfo(request: InsertRenewInfoRequest): Promise<InsertRenewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertRenewInfoWithOptions(request, runtime);
  }

  async insertTmMonitorRuleWithOptions(tmpReq: InsertTmMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<InsertTmMonitorRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertTmMonitorRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.classification)) {
      request.classificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.classification, "Classification", "json");
    }

    if (!Util.isUnset(tmpReq.notifyStatus)) {
      request.notifyStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyStatus, "NotifyStatus", "json");
    }

    let query = { };
    if (!Util.isUnset(request.classificationShrink)) {
      query["Classification"] = request.classificationShrink;
    }

    if (!Util.isUnset(request.endApplyDate)) {
      query["EndApplyDate"] = request.endApplyDate;
    }

    if (!Util.isUnset(request.notifyStatusShrink)) {
      query["NotifyStatus"] = request.notifyStatusShrink;
    }

    if (!Util.isUnset(request.ruleKeyword)) {
      query["RuleKeyword"] = request.ruleKeyword;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleSource)) {
      query["RuleSource"] = request.ruleSource;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startApplyDate)) {
      query["StartApplyDate"] = request.startApplyDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertTmMonitorRule",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertTmMonitorRuleResponse>(await this.callApi(params, req, runtime), new InsertTmMonitorRuleResponse({}));
  }

  async insertTmMonitorRule(request: InsertTmMonitorRuleRequest): Promise<InsertTmMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertTmMonitorRuleWithOptions(request, runtime);
  }

  async listNotaryInfosWithOptions(request: ListNotaryInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListNotaryInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizOrderNo)) {
      query["BizOrderNo"] = request.bizOrderNo;
    }

    if (!Util.isUnset(request.notaryType)) {
      query["NotaryType"] = request.notaryType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNotaryInfos",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNotaryInfosResponse>(await this.callApi(params, req, runtime), new ListNotaryInfosResponse({}));
  }

  async listNotaryInfos(request: ListNotaryInfosRequest): Promise<ListNotaryInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotaryInfosWithOptions(request, runtime);
  }

  async listNotaryOrdersWithOptions(request: ListNotaryOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListNotaryOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.endOrderDate)) {
      query["EndOrderDate"] = request.endOrderDate;
    }

    if (!Util.isUnset(request.notaryStatus)) {
      query["NotaryStatus"] = request.notaryStatus;
    }

    if (!Util.isUnset(request.notaryType)) {
      query["NotaryType"] = request.notaryType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortByType)) {
      query["SortByType"] = request.sortByType;
    }

    if (!Util.isUnset(request.sortKeyType)) {
      query["SortKeyType"] = request.sortKeyType;
    }

    if (!Util.isUnset(request.startOrderDate)) {
      query["StartOrderDate"] = request.startOrderDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNotaryOrders",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNotaryOrdersResponse>(await this.callApi(params, req, runtime), new ListNotaryOrdersResponse({}));
  }

  async listNotaryOrders(request: ListNotaryOrdersRequest): Promise<ListNotaryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotaryOrdersWithOptions(request, runtime);
  }

  async listTrademarkSbjKeyWithOptions(request: ListTrademarkSbjKeyRequest, runtime: $Util.RuntimeOptions): Promise<ListTrademarkSbjKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.principalKey)) {
      query["PrincipalKey"] = request.principalKey;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrademarkSbjKey",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrademarkSbjKeyResponse>(await this.callApi(params, req, runtime), new ListTrademarkSbjKeyResponse({}));
  }

  async listTrademarkSbjKey(request: ListTrademarkSbjKeyRequest): Promise<ListTrademarkSbjKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrademarkSbjKeyWithOptions(request, runtime);
  }

  async modifySubmitTransferMaterailWithOptions(tmpReq: ModifySubmitTransferMaterailRequest, runtime: $Util.RuntimeOptions): Promise<ModifySubmitTransferMaterailResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifySubmitTransferMaterailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.other)) {
      request.otherShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.other, "Other", "json");
    }

    let query = { };
    if (!Util.isUnset(request.assigneeProxy)) {
      query["AssigneeProxy"] = request.assigneeProxy;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.buyerBusinessLicenseTranslation)) {
      query["BuyerBusinessLicenseTranslation"] = request.buyerBusinessLicenseTranslation;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.sellerBusinessLicenseTranslation)) {
      query["SellerBusinessLicenseTranslation"] = request.sellerBusinessLicenseTranslation;
    }

    if (!Util.isUnset(request.tradeMaterialFullUpdate)) {
      query["TradeMaterialFullUpdate"] = request.tradeMaterialFullUpdate;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addr)) {
      body["Addr"] = request.addr;
    }

    if (!Util.isUnset(request.buyerBusinessLicense)) {
      body["BuyerBusinessLicense"] = request.buyerBusinessLicense;
    }

    if (!Util.isUnset(request.buyerIdCard)) {
      body["BuyerIdCard"] = request.buyerIdCard;
    }

    if (!Util.isUnset(request.cardNo)) {
      body["CardNo"] = request.cardNo;
    }

    if (!Util.isUnset(request.cardType)) {
      body["CardType"] = request.cardType;
    }

    if (!Util.isUnset(request.complete)) {
      body["Complete"] = request.complete;
    }

    if (!Util.isUnset(request.contactEmail)) {
      body["ContactEmail"] = request.contactEmail;
    }

    if (!Util.isUnset(request.contactMobile)) {
      body["ContactMobile"] = request.contactMobile;
    }

    if (!Util.isUnset(request.contactName)) {
      body["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.notarization)) {
      body["Notarization"] = request.notarization;
    }

    if (!Util.isUnset(request.otherShrink)) {
      body["Other"] = request.otherShrink;
    }

    if (!Util.isUnset(request.registrationCert)) {
      body["RegistrationCert"] = request.registrationCert;
    }

    if (!Util.isUnset(request.sellerApply)) {
      body["SellerApply"] = request.sellerApply;
    }

    if (!Util.isUnset(request.sellerBusinessLicense)) {
      body["SellerBusinessLicense"] = request.sellerBusinessLicense;
    }

    if (!Util.isUnset(request.sellerIdCard)) {
      body["SellerIdCard"] = request.sellerIdCard;
    }

    if (!Util.isUnset(request.sellerProxy)) {
      body["SellerProxy"] = request.sellerProxy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifySubmitTransferMaterail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySubmitTransferMaterailResponse>(await this.callApi(params, req, runtime), new ModifySubmitTransferMaterailResponse({}));
  }

  async modifySubmitTransferMaterail(request: ModifySubmitTransferMaterailRequest): Promise<ModifySubmitTransferMaterailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySubmitTransferMaterailWithOptions(request, runtime);
  }

  async operateProduceWithOptions(request: OperateProduceRequest, runtime: $Util.RuntimeOptions): Promise<OperateProduceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.extMap)) {
      query["ExtMap"] = request.extMap;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateProduce",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateProduceResponse>(await this.callApi(params, req, runtime), new OperateProduceResponse({}));
  }

  async operateProduce(request: OperateProduceRequest): Promise<OperateProduceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateProduceWithOptions(request, runtime);
  }

  async partnerUpdateTrademarkNameWithOptions(request: PartnerUpdateTrademarkNameRequest, runtime: $Util.RuntimeOptions): Promise<PartnerUpdateTrademarkNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!Util.isUnset(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.callerType)) {
      query["CallerType"] = request.callerType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.eventSceneType)) {
      body["EventSceneType"] = request.eventSceneType;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      body["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.tmComment)) {
      body["TmComment"] = request.tmComment;
    }

    if (!Util.isUnset(request.tmIcon)) {
      body["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      body["TmName"] = request.tmName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PartnerUpdateTrademarkName",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PartnerUpdateTrademarkNameResponse>(await this.callApi(params, req, runtime), new PartnerUpdateTrademarkNameResponse({}));
  }

  async partnerUpdateTrademarkName(request: PartnerUpdateTrademarkNameRequest): Promise<PartnerUpdateTrademarkNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.partnerUpdateTrademarkNameWithOptions(request, runtime);
  }

  async queryCommunicationLogsWithOptions(request: QueryCommunicationLogsRequest, runtime: $Util.RuntimeOptions): Promise<QueryCommunicationLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCommunicationLogs",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCommunicationLogsResponse>(await this.callApi(params, req, runtime), new QueryCommunicationLogsResponse({}));
  }

  async queryCommunicationLogs(request: QueryCommunicationLogsRequest): Promise<QueryCommunicationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCommunicationLogsWithOptions(request, runtime);
  }

  async queryCredentialsInfoWithOptions(request: QueryCredentialsInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCredentialsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.materialType)) {
      body["MaterialType"] = request.materialType;
    }

    if (!Util.isUnset(request.ossKey)) {
      body["OssKey"] = request.ossKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryCredentialsInfo",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCredentialsInfoResponse>(await this.callApi(params, req, runtime), new QueryCredentialsInfoResponse({}));
  }

  async queryCredentialsInfo(request: QueryCredentialsInfoRequest): Promise<QueryCredentialsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCredentialsInfoWithOptions(request, runtime);
  }

  async queryExtensionAttributeWithOptions(request: QueryExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<QueryExtensionAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attributeKey)) {
      query["AttributeKey"] = request.attributeKey;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryExtensionAttribute",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryExtensionAttributeResponse>(await this.callApi(params, req, runtime), new QueryExtensionAttributeResponse({}));
  }

  async queryExtensionAttribute(request: QueryExtensionAttributeRequest): Promise<QueryExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryExtensionAttributeWithOptions(request, runtime);
  }

  async queryIntentionDetailWithOptions(request: QueryIntentionDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentionDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryIntentionDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryIntentionDetailResponse>(await this.callApi(params, req, runtime), new QueryIntentionDetailResponse({}));
  }

  async queryIntentionDetail(request: QueryIntentionDetailRequest): Promise<QueryIntentionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentionDetailWithOptions(request, runtime);
  }

  async queryIntentionListWithOptions(request: QueryIntentionListRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentionListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortFiled)) {
      query["SortFiled"] = request.sortFiled;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryIntentionList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryIntentionListResponse>(await this.callApi(params, req, runtime), new QueryIntentionListResponse({}));
  }

  async queryIntentionList(request: QueryIntentionListRequest): Promise<QueryIntentionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentionListWithOptions(request, runtime);
  }

  async queryIntentionOwnerWithOptions(request: QueryIntentionOwnerRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentionOwnerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryIntentionOwner",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryIntentionOwnerResponse>(await this.callApi(params, req, runtime), new QueryIntentionOwnerResponse({}));
  }

  async queryIntentionOwner(request: QueryIntentionOwnerRequest): Promise<QueryIntentionOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentionOwnerWithOptions(request, runtime);
  }

  async queryIntentionPriceWithOptions(request: QueryIntentionPriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentionPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryIntentionPrice",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryIntentionPriceResponse>(await this.callApi(params, req, runtime), new QueryIntentionPriceResponse({}));
  }

  async queryIntentionPrice(request: QueryIntentionPriceRequest): Promise<QueryIntentionPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentionPriceWithOptions(request, runtime);
  }

  async queryMaterialWithOptions(request: QueryMaterialRequest, runtime: $Util.RuntimeOptions): Promise<QueryMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.queryUnconfirmedInfo)) {
      query["QueryUnconfirmedInfo"] = request.queryUnconfirmedInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMaterial",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMaterialResponse>(await this.callApi(params, req, runtime), new QueryMaterialResponse({}));
  }

  async queryMaterial(request: QueryMaterialRequest): Promise<QueryMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMaterialWithOptions(request, runtime);
  }

  async queryMaterialListWithOptions(request: QueryMaterialListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMaterialListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.materialVersion)) {
      query["MaterialVersion"] = request.materialVersion;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMaterialList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMaterialListResponse>(await this.callApi(params, req, runtime), new QueryMaterialListResponse({}));
  }

  async queryMaterialList(request: QueryMaterialListRequest): Promise<QueryMaterialListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMaterialListWithOptions(request, runtime);
  }

  async queryMonitorKeywordsWithOptions(request: QueryMonitorKeywordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonitorKeywordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMonitorKeywords",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMonitorKeywordsResponse>(await this.callApi(params, req, runtime), new QueryMonitorKeywordsResponse({}));
  }

  async queryMonitorKeywords(request: QueryMonitorKeywordsRequest): Promise<QueryMonitorKeywordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonitorKeywordsWithOptions(request, runtime);
  }

  async queryOfficialFileCustomListWithOptions(request: QueryOfficialFileCustomListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOfficialFileCustomListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOfficialFileCustomList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOfficialFileCustomListResponse>(await this.callApi(params, req, runtime), new QueryOfficialFileCustomListResponse({}));
  }

  async queryOfficialFileCustomList(request: QueryOfficialFileCustomListRequest): Promise<QueryOfficialFileCustomListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOfficialFileCustomListWithOptions(request, runtime);
  }

  async queryOrderLogisticsListWithOptions(request: QueryOrderLogisticsListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderLogisticsListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.produceOrderId)) {
      body["ProduceOrderId"] = request.produceOrderId;
    }

    if (!Util.isUnset(request.registerNumber)) {
      body["RegisterNumber"] = request.registerNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderLogisticsList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderLogisticsListResponse>(await this.callApi(params, req, runtime), new QueryOrderLogisticsListResponse({}));
  }

  async queryOrderLogisticsList(request: QueryOrderLogisticsListRequest): Promise<QueryOrderLogisticsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderLogisticsListWithOptions(request, runtime);
  }

  async queryOssResourcesWithOptions(request: QueryOssResourcesRequest, runtime: $Util.RuntimeOptions): Promise<QueryOssResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOssResources",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOssResourcesResponse>(await this.callApi(params, req, runtime), new QueryOssResourcesResponse({}));
  }

  async queryOssResources(request: QueryOssResourcesRequest): Promise<QueryOssResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOssResourcesWithOptions(request, runtime);
  }

  async queryProduceDetailWithOptions(request: QueryProduceDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryProduceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyNo)) {
      query["ApplyNo"] = request.applyNo;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryProduceDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryProduceDetailResponse>(await this.callApi(params, req, runtime), new QueryProduceDetailResponse({}));
  }

  async queryProduceDetail(request: QueryProduceDetailRequest): Promise<QueryProduceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProduceDetailWithOptions(request, runtime);
  }

  async queryProduceListWithOptions(request: QueryProduceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryProduceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.createTimeLeft)) {
      query["CreateTimeLeft"] = request.createTimeLeft;
    }

    if (!Util.isUnset(request.createTimeRight)) {
      query["CreateTimeRight"] = request.createTimeRight;
    }

    if (!Util.isUnset(request.materialName)) {
      query["MaterialName"] = request.materialName;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNumber)) {
      query["TmNumber"] = request.tmNumber;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryProduceList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryProduceListResponse>(await this.callApi(params, req, runtime), new QueryProduceListResponse({}));
  }

  async queryProduceList(request: QueryProduceListRequest): Promise<QueryProduceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProduceListWithOptions(request, runtime);
  }

  async queryQrCodeUploadStatusWithOptions(request: QueryQrCodeUploadStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryQrCodeUploadStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fieldKey)) {
      query["FieldKey"] = request.fieldKey;
    }

    if (!Util.isUnset(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryQrCodeUploadStatus",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryQrCodeUploadStatusResponse>(await this.callApi(params, req, runtime), new QueryQrCodeUploadStatusResponse({}));
  }

  async queryQrCodeUploadStatus(request: QueryQrCodeUploadStatusRequest): Promise<QueryQrCodeUploadStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryQrCodeUploadStatusWithOptions(request, runtime);
  }

  async querySbjRuleWithOptions(request: QuerySbjRuleRequest, runtime: $Util.RuntimeOptions): Promise<QuerySbjRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySbjRule",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySbjRuleResponse>(await this.callApi(params, req, runtime), new QuerySbjRuleResponse({}));
  }

  async querySbjRule(request: QuerySbjRuleRequest): Promise<QuerySbjRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySbjRuleWithOptions(request, runtime);
  }

  async querySupplementDetailWithOptions(request: QuerySupplementDetailRequest, runtime: $Util.RuntimeOptions): Promise<QuerySupplementDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySupplementDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySupplementDetailResponse>(await this.callApi(params, req, runtime), new QuerySupplementDetailResponse({}));
  }

  async querySupplementDetail(request: QuerySupplementDetailRequest): Promise<QuerySupplementDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySupplementDetailWithOptions(request, runtime);
  }

  async queryTaskListWithOptions(request: QueryTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskListResponse>(await this.callApi(params, req, runtime), new QueryTaskListResponse({}));
  }

  async queryTaskList(request: QueryTaskListRequest): Promise<QueryTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  async queryTmCollectionPageListWithOptions(request: QueryTmCollectionPageListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTmCollectionPageListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTmCollectionPageList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTmCollectionPageListResponse>(await this.callApi(params, req, runtime), new QueryTmCollectionPageListResponse({}));
  }

  async queryTmCollectionPageList(request: QueryTmCollectionPageListRequest): Promise<QueryTmCollectionPageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTmCollectionPageListWithOptions(request, runtime);
  }

  async queryTmSbjProduceWithOptions(request: QueryTmSbjProduceRequest, runtime: $Util.RuntimeOptions): Promise<QueryTmSbjProduceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.highPriorityBizTypeStr)) {
      query["HighPriorityBizTypeStr"] = request.highPriorityBizTypeStr;
    }

    if (!Util.isUnset(request.highPriorityMaterialNameStr)) {
      query["HighPriorityMaterialNameStr"] = request.highPriorityMaterialNameStr;
    }

    if (!Util.isUnset(request.highPriorityOrderIdStr)) {
      query["HighPriorityOrderIdStr"] = request.highPriorityOrderIdStr;
    }

    if (!Util.isUnset(request.highPriorityUserIdStr)) {
      query["HighPriorityUserIdStr"] = request.highPriorityUserIdStr;
    }

    if (!Util.isUnset(request.principalKey)) {
      query["PrincipalKey"] = request.principalKey;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.producerType)) {
      query["ProducerType"] = request.producerType;
    }

    if (!Util.isUnset(request.queryOrderPageSize)) {
      query["QueryOrderPageSize"] = request.queryOrderPageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTmSbjProduce",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTmSbjProduceResponse>(await this.callApi(params, req, runtime), new QueryTmSbjProduceResponse({}));
  }

  async queryTmSbjProduce(request: QueryTmSbjProduceRequest): Promise<QueryTmSbjProduceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTmSbjProduceWithOptions(request, runtime);
  }

  async queryTmSbjProduceDetailWithOptions(request: QueryTmSbjProduceDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTmSbjProduceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTmSbjProduceDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTmSbjProduceDetailResponse>(await this.callApi(params, req, runtime), new QueryTmSbjProduceDetailResponse({}));
  }

  async queryTmSbjProduceDetail(request: QueryTmSbjProduceDetailRequest): Promise<QueryTmSbjProduceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTmSbjProduceDetailWithOptions(request, runtime);
  }

  async queryTradeIntentionUserListWithOptions(request: QueryTradeIntentionUserListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeIntentionUserListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.begin)) {
      query["Begin"] = request.begin;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTradeIntentionUserList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTradeIntentionUserListResponse>(await this.callApi(params, req, runtime), new QueryTradeIntentionUserListResponse({}));
  }

  async queryTradeIntentionUserList(request: QueryTradeIntentionUserListRequest): Promise<QueryTradeIntentionUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeIntentionUserListWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationDetailWithOptions(request: QueryTradeMarkApplicationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTradeMarkApplicationDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTradeMarkApplicationDetailResponse>(await this.callApi(params, req, runtime), new QueryTradeMarkApplicationDetailResponse({}));
  }

  async queryTradeMarkApplicationDetail(request: QueryTradeMarkApplicationDetailRequest): Promise<QueryTradeMarkApplicationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationDetailWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationLogsWithOptions(request: QueryTradeMarkApplicationLogsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTradeMarkApplicationLogs",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTradeMarkApplicationLogsResponse>(await this.callApi(params, req, runtime), new QueryTradeMarkApplicationLogsResponse({}));
  }

  async queryTradeMarkApplicationLogs(request: QueryTradeMarkApplicationLogsRequest): Promise<QueryTradeMarkApplicationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationLogsWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationsWithOptions(tmpReq: QueryTradeMarkApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryTradeMarkApplicationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.classificationCode)) {
      query["ClassificationCode"] = request.classificationCode;
    }

    if (!Util.isUnset(request.hidden)) {
      query["Hidden"] = request.hidden;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.logisticsNo)) {
      query["LogisticsNo"] = request.logisticsNo;
    }

    if (!Util.isUnset(request.materialName)) {
      query["MaterialName"] = request.materialName;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.sortFiled)) {
      query["SortFiled"] = request.sortFiled;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!Util.isUnset(request.supplementStatus)) {
      query["SupplementStatus"] = request.supplementStatus;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNumber)) {
      query["TmNumber"] = request.tmNumber;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTradeMarkApplications",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTradeMarkApplicationsResponse>(await this.callApi(params, req, runtime), new QueryTradeMarkApplicationsResponse({}));
  }

  async queryTradeMarkApplications(request: QueryTradeMarkApplicationsRequest): Promise<QueryTradeMarkApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationsWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationsByIntentionWithOptions(request: QueryTradeMarkApplicationsByIntentionRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationsByIntentionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tmProduceStatus)) {
      query["TmProduceStatus"] = request.tmProduceStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTradeMarkApplicationsByIntention",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTradeMarkApplicationsByIntentionResponse>(await this.callApi(params, req, runtime), new QueryTradeMarkApplicationsByIntentionResponse({}));
  }

  async queryTradeMarkApplicationsByIntention(request: QueryTradeMarkApplicationsByIntentionRequest): Promise<QueryTradeMarkApplicationsByIntentionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationsByIntentionWithOptions(request, runtime);
  }

  async queryTradeProduceDetailWithOptions(request: QueryTradeProduceDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeProduceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTradeProduceDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTradeProduceDetailResponse>(await this.callApi(params, req, runtime), new QueryTradeProduceDetailResponse({}));
  }

  async queryTradeProduceDetail(request: QueryTradeProduceDetailRequest): Promise<QueryTradeProduceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeProduceDetailWithOptions(request, runtime);
  }

  async queryTradeProduceListWithOptions(request: QueryTradeProduceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeProduceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.buyerStatus)) {
      query["BuyerStatus"] = request.buyerStatus;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.preOrderId)) {
      query["PreOrderId"] = request.preOrderId;
    }

    if (!Util.isUnset(request.registerNumber)) {
      query["RegisterNumber"] = request.registerNumber;
    }

    if (!Util.isUnset(request.sortFiled)) {
      query["SortFiled"] = request.sortFiled;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTradeProduceList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTradeProduceListResponse>(await this.callApi(params, req, runtime), new QueryTradeProduceListResponse({}));
  }

  async queryTradeProduceList(request: QueryTradeProduceListRequest): Promise<QueryTradeProduceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeProduceListWithOptions(request, runtime);
  }

  async queryTrademarkDetailByApplyNumberWithOptions(request: QueryTrademarkDetailByApplyNumberRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkDetailByApplyNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyNumber)) {
      query["ApplyNumber"] = request.applyNumber;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkDetailByApplyNumber",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkDetailByApplyNumberResponse>(await this.callApi(params, req, runtime), new QueryTrademarkDetailByApplyNumberResponse({}));
  }

  async queryTrademarkDetailByApplyNumber(request: QueryTrademarkDetailByApplyNumberRequest): Promise<QueryTrademarkDetailByApplyNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkDetailByApplyNumberWithOptions(request, runtime);
  }

  async queryTrademarkDetailByApplyNumberEspWithOptions(request: QueryTrademarkDetailByApplyNumberEspRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkDetailByApplyNumberEspResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyNumber)) {
      query["ApplyNumber"] = request.applyNumber;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkDetailByApplyNumberEsp",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkDetailByApplyNumberEspResponse>(await this.callApi(params, req, runtime), new QueryTrademarkDetailByApplyNumberEspResponse({}));
  }

  async queryTrademarkDetailByApplyNumberEsp(request: QueryTrademarkDetailByApplyNumberEspRequest): Promise<QueryTrademarkDetailByApplyNumberEspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkDetailByApplyNumberEspWithOptions(request, runtime);
  }

  async queryTrademarkModelDetailWithOptions(request: QueryTrademarkModelDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkModelDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.reviewSupplementMaterial)) {
      query["ReviewSupplementMaterial"] = request.reviewSupplementMaterial;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkModelDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkModelDetailResponse>(await this.callApi(params, req, runtime), new QueryTrademarkModelDetailResponse({}));
  }

  async queryTrademarkModelDetail(request: QueryTrademarkModelDetailRequest): Promise<QueryTrademarkModelDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkModelDetailWithOptions(request, runtime);
  }

  async queryTrademarkModelEspDetailWithOptions(request: QueryTrademarkModelEspDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkModelEspDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkModelEspDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkModelEspDetailResponse>(await this.callApi(params, req, runtime), new QueryTrademarkModelEspDetailResponse({}));
  }

  async queryTrademarkModelEspDetail(request: QueryTrademarkModelEspDetailRequest): Promise<QueryTrademarkModelEspDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkModelEspDetailWithOptions(request, runtime);
  }

  async queryTrademarkModelEspListWithOptions(tmpReq: QueryTrademarkModelEspListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkModelEspListResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryTrademarkModelEspListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.existStatus)) {
      request.existStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.existStatus, "ExistStatus", "json");
    }

    let query = { };
    if (!Util.isUnset(request.additionalSubmitStatus)) {
      query["AdditionalSubmitStatus"] = request.additionalSubmitStatus;
    }

    if (!Util.isUnset(request.additionalSubmitTime)) {
      query["AdditionalSubmitTime"] = request.additionalSubmitTime;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.existStatusShrink)) {
      query["ExistStatus"] = request.existStatusShrink;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.orderIdsStr)) {
      query["OrderIdsStr"] = request.orderIdsStr;
    }

    if (!Util.isUnset(request.orderInstanceId)) {
      query["OrderInstanceId"] = request.orderInstanceId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.principalKey)) {
      query["PrincipalKey"] = request.principalKey;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.submitStatus)) {
      query["SubmitStatus"] = request.submitStatus;
    }

    if (!Util.isUnset(request.submitTime)) {
      query["SubmitTime"] = request.submitTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkModelEspList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkModelEspListResponse>(await this.callApi(params, req, runtime), new QueryTrademarkModelEspListResponse({}));
  }

  async queryTrademarkModelEspList(request: QueryTrademarkModelEspListRequest): Promise<QueryTrademarkModelEspListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkModelEspListWithOptions(request, runtime);
  }

  async queryTrademarkModelListWithOptions(request: QueryTrademarkModelListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkModelListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.orderIdsStr)) {
      query["OrderIdsStr"] = request.orderIdsStr;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.principalKey)) {
      query["PrincipalKey"] = request.principalKey;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.produceTypesStr)) {
      query["ProduceTypesStr"] = request.produceTypesStr;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.submitStart)) {
      query["SubmitStart"] = request.submitStart;
    }

    if (!Util.isUnset(request.submitStatus)) {
      query["SubmitStatus"] = request.submitStatus;
    }

    if (!Util.isUnset(request.submitTime)) {
      query["SubmitTime"] = request.submitTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkModelList",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkModelListResponse>(await this.callApi(params, req, runtime), new QueryTrademarkModelListResponse({}));
  }

  async queryTrademarkModelList(request: QueryTrademarkModelListRequest): Promise<QueryTrademarkModelListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkModelListWithOptions(request, runtime);
  }

  async queryTrademarkMonitorResultsWithOptions(request: QueryTrademarkMonitorResultsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkMonitorResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.applyYear)) {
      query["ApplyYear"] = request.applyYear;
    }

    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.procedureStatus)) {
      query["ProcedureStatus"] = request.procedureStatus;
    }

    if (!Util.isUnset(request.registrationNumber)) {
      query["RegistrationNumber"] = request.registrationNumber;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkMonitorResults",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkMonitorResultsResponse>(await this.callApi(params, req, runtime), new QueryTrademarkMonitorResultsResponse({}));
  }

  async queryTrademarkMonitorResults(request: QueryTrademarkMonitorResultsRequest): Promise<QueryTrademarkMonitorResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkMonitorResultsWithOptions(request, runtime);
  }

  async queryTrademarkMonitorRulesWithOptions(request: QueryTrademarkMonitorRulesRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkMonitorRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.notifyUpdate)) {
      query["NotifyUpdate"] = request.notifyUpdate;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkMonitorRules",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkMonitorRulesResponse>(await this.callApi(params, req, runtime), new QueryTrademarkMonitorRulesResponse({}));
  }

  async queryTrademarkMonitorRules(request: QueryTrademarkMonitorRulesRequest): Promise<QueryTrademarkMonitorRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkMonitorRulesWithOptions(request, runtime);
  }

  async queryTrademarkOnSaleWithOptions(request: QueryTrademarkOnSaleRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkOnSaleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.registerCode)) {
      query["RegisterCode"] = request.registerCode;
    }

    if (!Util.isUnset(request.registerNumber)) {
      query["RegisterNumber"] = request.registerNumber;
    }

    if (!Util.isUnset(request.tmType)) {
      query["TmType"] = request.tmType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkOnSale",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkOnSaleResponse>(await this.callApi(params, req, runtime), new QueryTrademarkOnSaleResponse({}));
  }

  async queryTrademarkOnSale(request: QueryTrademarkOnSaleRequest): Promise<QueryTrademarkOnSaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkOnSaleWithOptions(request, runtime);
  }

  async queryTrademarkPriceWithOptions(tmpReq: QueryTrademarkPriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkPriceResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryTrademarkPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.orderData)) {
      request.orderDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderData, "OrderData", "json");
    }

    let query = { };
    if (!Util.isUnset(request.orderDataShrink)) {
      query["OrderData"] = request.orderDataShrink;
    }

    if (!Util.isUnset(request.tmIcon)) {
      query["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkPrice",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkPriceResponse>(await this.callApi(params, req, runtime), new QueryTrademarkPriceResponse({}));
  }

  async queryTrademarkPrice(request: QueryTrademarkPriceRequest): Promise<QueryTrademarkPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkPriceWithOptions(request, runtime);
  }

  async queryTrademarkUploadAuditResultWithOptions(request: QueryTrademarkUploadAuditResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkUploadAuditResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.registerCode)) {
      query["RegisterCode"] = request.registerCode;
    }

    if (!Util.isUnset(request.registerNumber)) {
      query["RegisterNumber"] = request.registerNumber;
    }

    if (!Util.isUnset(request.tmType)) {
      query["TmType"] = request.tmType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrademarkUploadAuditResult",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrademarkUploadAuditResultResponse>(await this.callApi(params, req, runtime), new QueryTrademarkUploadAuditResultResponse({}));
  }

  async queryTrademarkUploadAuditResult(request: QueryTrademarkUploadAuditResultRequest): Promise<QueryTrademarkUploadAuditResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkUploadAuditResultWithOptions(request, runtime);
  }

  async recordBankBalanceWithOptions(request: RecordBankBalanceRequest, runtime: $Util.RuntimeOptions): Promise<RecordBankBalanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionDate)) {
      query["ActionDate"] = request.actionDate;
    }

    if (!Util.isUnset(request.balance)) {
      query["Balance"] = request.balance;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecordBankBalance",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecordBankBalanceResponse>(await this.callApi(params, req, runtime), new RecordBankBalanceResponse({}));
  }

  async recordBankBalance(request: RecordBankBalanceRequest): Promise<RecordBankBalanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordBankBalanceWithOptions(request, runtime);
  }

  async refundProduceWithOptions(request: RefundProduceRequest, runtime: $Util.RuntimeOptions): Promise<RefundProduceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.refundType)) {
      query["RefundType"] = request.refundType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundProduce",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundProduceResponse>(await this.callApi(params, req, runtime), new RefundProduceResponse({}));
  }

  async refundProduce(request: RefundProduceRequest): Promise<RefundProduceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundProduceWithOptions(request, runtime);
  }

  async refuseAdditionalMaterialWithOptions(request: RefuseAdditionalMaterialRequest, runtime: $Util.RuntimeOptions): Promise<RefuseAdditionalMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefuseAdditionalMaterial",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefuseAdditionalMaterialResponse>(await this.callApi(params, req, runtime), new RefuseAdditionalMaterialResponse({}));
  }

  async refuseAdditionalMaterial(request: RefuseAdditionalMaterialRequest): Promise<RefuseAdditionalMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseAdditionalMaterialWithOptions(request, runtime);
  }

  async refuseApplicantWithOptions(request: RefuseApplicantRequest, runtime: $Util.RuntimeOptions): Promise<RefuseApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefuseApplicant",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefuseApplicantResponse>(await this.callApi(params, req, runtime), new RefuseApplicantResponse({}));
  }

  async refuseApplicant(request: RefuseApplicantRequest): Promise<RefuseApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseApplicantWithOptions(request, runtime);
  }

  async rejectApplicantWithOptions(request: RejectApplicantRequest, runtime: $Util.RuntimeOptions): Promise<RejectApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RejectApplicant",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectApplicantResponse>(await this.callApi(params, req, runtime), new RejectApplicantResponse({}));
  }

  async rejectApplicant(request: RejectApplicantRequest): Promise<RejectApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectApplicantWithOptions(request, runtime);
  }

  async saveClassificationConditionsWithOptions(request: SaveClassificationConditionsRequest, runtime: $Util.RuntimeOptions): Promise<SaveClassificationConditionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveClassificationConditions",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveClassificationConditionsResponse>(await this.callApi(params, req, runtime), new SaveClassificationConditionsResponse({}));
  }

  async saveClassificationConditions(request: SaveClassificationConditionsRequest): Promise<SaveClassificationConditionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveClassificationConditionsWithOptions(request, runtime);
  }

  async saveExtensionAttributeWithOptions(request: SaveExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SaveExtensionAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attributeKey)) {
      query["AttributeKey"] = request.attributeKey;
    }

    if (!Util.isUnset(request.attributeValue)) {
      query["AttributeValue"] = request.attributeValue;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveExtensionAttribute",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveExtensionAttributeResponse>(await this.callApi(params, req, runtime), new SaveExtensionAttributeResponse({}));
  }

  async saveExtensionAttribute(request: SaveExtensionAttributeRequest): Promise<SaveExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveExtensionAttributeWithOptions(request, runtime);
  }

  async saveTaskWithOptions(request: SaveTaskRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.request)) {
      query["Request"] = request.request;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveTask",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTaskResponse>(await this.callApi(params, req, runtime), new SaveTaskResponse({}));
  }

  async saveTask(request: SaveTaskRequest): Promise<SaveTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskWithOptions(request, runtime);
  }

  async saveTaskForOfficialFileCustomWithOptions(request: SaveTaskForOfficialFileCustomRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForOfficialFileCustomResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endAcceptTime)) {
      query["EndAcceptTime"] = request.endAcceptTime;
    }

    if (!Util.isUnset(request.startAcceptTime)) {
      query["StartAcceptTime"] = request.startAcceptTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveTaskForOfficialFileCustom",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTaskForOfficialFileCustomResponse>(await this.callApi(params, req, runtime), new SaveTaskForOfficialFileCustomResponse({}));
  }

  async saveTaskForOfficialFileCustom(request: SaveTaskForOfficialFileCustomRequest): Promise<SaveTaskForOfficialFileCustomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForOfficialFileCustomWithOptions(request, runtime);
  }

  async saveTradeMarkReviewMaterialDetailWithOptions(tmpReq: SaveTradeMarkReviewMaterialDetailRequest, runtime: $Util.RuntimeOptions): Promise<SaveTradeMarkReviewMaterialDetailResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveTradeMarkReviewMaterialDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.additionalOssKeyList)) {
      request.additionalOssKeyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalOssKeyList, "AdditionalOssKeyList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalOssKeyListShrink)) {
      body["AdditionalOssKeyList"] = request.additionalOssKeyListShrink;
    }

    if (!Util.isUnset(request.address)) {
      body["Address"] = request.address;
    }

    if (!Util.isUnset(request.applicationOssKey)) {
      body["ApplicationOssKey"] = request.applicationOssKey;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.businessLicenceOssKey)) {
      body["BusinessLicenceOssKey"] = request.businessLicenceOssKey;
    }

    if (!Util.isUnset(request.cardNumber)) {
      body["CardNumber"] = request.cardNumber;
    }

    if (!Util.isUnset(request.changeName)) {
      body["ChangeName"] = request.changeName;
    }

    if (!Util.isUnset(request.contactAddress)) {
      body["ContactAddress"] = request.contactAddress;
    }

    if (!Util.isUnset(request.contactEmail)) {
      body["ContactEmail"] = request.contactEmail;
    }

    if (!Util.isUnset(request.contactName)) {
      body["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      body["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.country)) {
      body["Country"] = request.country;
    }

    if (!Util.isUnset(request.engAddress)) {
      body["EngAddress"] = request.engAddress;
    }

    if (!Util.isUnset(request.engName)) {
      body["EngName"] = request.engName;
    }

    if (!Util.isUnset(request.idCardOssKey)) {
      body["IdCardOssKey"] = request.idCardOssKey;
    }

    if (!Util.isUnset(request.legalNoticeOssKey)) {
      body["LegalNoticeOssKey"] = request.legalNoticeOssKey;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      body["LoaOssKey"] = request.loaOssKey;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.passportOssKey)) {
      body["PassportOssKey"] = request.passportOssKey;
    }

    if (!Util.isUnset(request.province)) {
      body["Province"] = request.province;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.reviewMaterialAdditionalJson)) {
      body["ReviewMaterialAdditionalJson"] = request.reviewMaterialAdditionalJson;
    }

    if (!Util.isUnset(request.separate)) {
      body["Separate"] = request.separate;
    }

    if (!Util.isUnset(request.submitOnline)) {
      body["SubmitOnline"] = request.submitOnline;
    }

    if (!Util.isUnset(request.submitType)) {
      body["SubmitType"] = request.submitType;
    }

    if (!Util.isUnset(request.supplementFlag)) {
      body["SupplementFlag"] = request.supplementFlag;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveTradeMarkReviewMaterialDetail",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTradeMarkReviewMaterialDetailResponse>(await this.callApi(params, req, runtime), new SaveTradeMarkReviewMaterialDetailResponse({}));
  }

  async saveTradeMarkReviewMaterialDetail(request: SaveTradeMarkReviewMaterialDetailRequest): Promise<SaveTradeMarkReviewMaterialDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTradeMarkReviewMaterialDetailWithOptions(request, runtime);
  }

  async sbjOperateWithOptions(request: SbjOperateRequest, runtime: $Util.RuntimeOptions): Promise<SbjOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.applyNo)) {
      query["ApplyNo"] = request.applyNo;
    }

    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.fileDate)) {
      query["FileDate"] = request.fileDate;
    }

    if (!Util.isUnset(request.fileOssKey)) {
      query["FileOssKey"] = request.fileOssKey;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.orderNo)) {
      query["OrderNo"] = request.orderNo;
    }

    if (!Util.isUnset(request.receiptOssKey)) {
      query["ReceiptOssKey"] = request.receiptOssKey;
    }

    if (!Util.isUnset(request.submittedSuccess)) {
      query["SubmittedSuccess"] = request.submittedSuccess;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SbjOperate",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SbjOperateResponse>(await this.callApi(params, req, runtime), new SbjOperateResponse({}));
  }

  async sbjOperate(request: SbjOperateRequest): Promise<SbjOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sbjOperateWithOptions(request, runtime);
  }

  async sbjOperateNewWithOptions(request: SbjOperateNewRequest, runtime: $Util.RuntimeOptions): Promise<SbjOperateNewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addSubmitCount)) {
      query["AddSubmitCount"] = request.addSubmitCount;
    }

    if (!Util.isUnset(request.allowResubmit)) {
      query["AllowResubmit"] = request.allowResubmit;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.applyNo)) {
      query["ApplyNo"] = request.applyNo;
    }

    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.changeStatus)) {
      query["ChangeStatus"] = request.changeStatus;
    }

    if (!Util.isUnset(request.errorMsgScreenshot)) {
      query["ErrorMsgScreenshot"] = request.errorMsgScreenshot;
    }

    if (!Util.isUnset(request.fileDate)) {
      query["FileDate"] = request.fileDate;
    }

    if (!Util.isUnset(request.fileOssKey)) {
      query["FileOssKey"] = request.fileOssKey;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.orderNo)) {
      query["OrderNo"] = request.orderNo;
    }

    if (!Util.isUnset(request.receiptOssKey)) {
      query["ReceiptOssKey"] = request.receiptOssKey;
    }

    if (!Util.isUnset(request.submittedSuccess)) {
      query["SubmittedSuccess"] = request.submittedSuccess;
    }

    if (!Util.isUnset(request.successType)) {
      query["SuccessType"] = request.successType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SbjOperateNew",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SbjOperateNewResponse>(await this.callApi(params, req, runtime), new SbjOperateNewResponse({}));
  }

  async sbjOperateNew(request: SbjOperateNewRequest): Promise<SbjOperateNewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sbjOperateNewWithOptions(request, runtime);
  }

  async sbrainServiceExecuteWithOptions(tmpReq: SbrainServiceExecuteRequest, runtime: $Util.RuntimeOptions): Promise<SbrainServiceExecuteResponse> {
    Util.validateModel(tmpReq);
    let request = new SbrainServiceExecuteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.executeParams)) {
      request.executeParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executeParams, "ExecuteParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.executeParamsShrink)) {
      query["ExecuteParams"] = request.executeParamsShrink;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.referenceNo)) {
      query["ReferenceNo"] = request.referenceNo;
    }

    if (!Util.isUnset(request.referenceType)) {
      query["ReferenceType"] = request.referenceType;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.schemeId)) {
      query["SchemeId"] = request.schemeId;
    }

    if (!Util.isUnset(request.servicePlace)) {
      query["ServicePlace"] = request.servicePlace;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SbrainServiceExecute",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SbrainServiceExecuteResponse>(await this.callApi(params, req, runtime), new SbrainServiceExecuteResponse({}));
  }

  async sbrainServiceExecute(request: SbrainServiceExecuteRequest): Promise<SbrainServiceExecuteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sbrainServiceExecuteWithOptions(request, runtime);
  }

  async sbrainServiceHasRunningTaskBatchQueryWithOptions(tmpReq: SbrainServiceHasRunningTaskBatchQueryRequest, runtime: $Util.RuntimeOptions): Promise<SbrainServiceHasRunningTaskBatchQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new SbrainServiceHasRunningTaskBatchQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceNos)) {
      request.referenceNosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceNos, "ReferenceNos", "json");
    }

    let query = { };
    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.referenceNosShrink)) {
      query["ReferenceNos"] = request.referenceNosShrink;
    }

    if (!Util.isUnset(request.referenceType)) {
      query["ReferenceType"] = request.referenceType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SbrainServiceHasRunningTaskBatchQuery",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SbrainServiceHasRunningTaskBatchQueryResponse>(await this.callApi(params, req, runtime), new SbrainServiceHasRunningTaskBatchQueryResponse({}));
  }

  async sbrainServiceHasRunningTaskBatchQuery(request: SbrainServiceHasRunningTaskBatchQueryRequest): Promise<SbrainServiceHasRunningTaskBatchQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sbrainServiceHasRunningTaskBatchQueryWithOptions(request, runtime);
  }

  async sbrainServiceSchemeMatchWithOptions(tmpReq: SbrainServiceSchemeMatchRequest, runtime: $Util.RuntimeOptions): Promise<SbrainServiceSchemeMatchResponse> {
    Util.validateModel(tmpReq);
    let request = new SbrainServiceSchemeMatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.matchParams)) {
      request.matchParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchParams, "MatchParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.matchParamsShrink)) {
      query["MatchParams"] = request.matchParamsShrink;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.referenceNo)) {
      query["ReferenceNo"] = request.referenceNo;
    }

    if (!Util.isUnset(request.referenceType)) {
      query["ReferenceType"] = request.referenceType;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SbrainServiceSchemeMatch",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SbrainServiceSchemeMatchResponse>(await this.callApi(params, req, runtime), new SbrainServiceSchemeMatchResponse({}));
  }

  async sbrainServiceSchemeMatch(request: SbrainServiceSchemeMatchRequest): Promise<SbrainServiceSchemeMatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sbrainServiceSchemeMatchWithOptions(request, runtime);
  }

  async searchTmOnsalesWithOptions(request: SearchTmOnsalesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTmOnsalesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.orderPriceLeft)) {
      query["OrderPriceLeft"] = request.orderPriceLeft;
    }

    if (!Util.isUnset(request.orderPriceRight)) {
      query["OrderPriceRight"] = request.orderPriceRight;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.queryAll)) {
      query["QueryAll"] = request.queryAll;
    }

    if (!Util.isUnset(request.regLeft)) {
      query["RegLeft"] = request.regLeft;
    }

    if (!Util.isUnset(request.regRight)) {
      query["RegRight"] = request.regRight;
    }

    if (!Util.isUnset(request.registerNumber)) {
      query["RegisterNumber"] = request.registerNumber;
    }

    if (!Util.isUnset(request.sortName)) {
      query["SortName"] = request.sortName;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.topSearch)) {
      query["TopSearch"] = request.topSearch;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTmOnsales",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTmOnsalesResponse>(await this.callApi(params, req, runtime), new SearchTmOnsalesResponse({}));
  }

  async searchTmOnsales(request: SearchTmOnsalesRequest): Promise<SearchTmOnsalesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTmOnsalesWithOptions(request, runtime);
  }

  async startNotaryWithOptions(request: StartNotaryRequest, runtime: $Util.RuntimeOptions): Promise<StartNotaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.notaryOrderId)) {
      query["NotaryOrderId"] = request.notaryOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartNotary",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartNotaryResponse>(await this.callApi(params, req, runtime), new StartNotaryResponse({}));
  }

  async startNotary(request: StartNotaryRequest): Promise<StartNotaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startNotaryWithOptions(request, runtime);
  }

  async storeMaterialTemporarilyWithOptions(request: StoreMaterialTemporarilyRequest, runtime: $Util.RuntimeOptions): Promise<StoreMaterialTemporarilyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.businessLicenceOssKey)) {
      query["BusinessLicenceOssKey"] = request.businessLicenceOssKey;
    }

    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.contactAddress)) {
      query["ContactAddress"] = request.contactAddress;
    }

    if (!Util.isUnset(request.contactCity)) {
      query["ContactCity"] = request.contactCity;
    }

    if (!Util.isUnset(request.contactCounty)) {
      query["ContactCounty"] = request.contactCounty;
    }

    if (!Util.isUnset(request.contactDistrict)) {
      query["ContactDistrict"] = request.contactDistrict;
    }

    if (!Util.isUnset(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.contactProvince)) {
      query["ContactProvince"] = request.contactProvince;
    }

    if (!Util.isUnset(request.contactZipcode)) {
      query["ContactZipcode"] = request.contactZipcode;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.EAddress)) {
      query["EAddress"] = request.EAddress;
    }

    if (!Util.isUnset(request.EName)) {
      query["EName"] = request.EName;
    }

    if (!Util.isUnset(request.idCardName)) {
      query["IdCardName"] = request.idCardName;
    }

    if (!Util.isUnset(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!Util.isUnset(request.idCardOssKey)) {
      query["IdCardOssKey"] = request.idCardOssKey;
    }

    if (!Util.isUnset(request.legalNoticeOssKey)) {
      query["LegalNoticeOssKey"] = request.legalNoticeOssKey;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      query["LoaOssKey"] = request.loaOssKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.passportOssKey)) {
      query["PassportOssKey"] = request.passportOssKey;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.town)) {
      query["Town"] = request.town;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StoreMaterialTemporarily",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StoreMaterialTemporarilyResponse>(await this.callApi(params, req, runtime), new StoreMaterialTemporarilyResponse({}));
  }

  async storeMaterialTemporarily(request: StoreMaterialTemporarilyRequest): Promise<StoreMaterialTemporarilyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.storeMaterialTemporarilyWithOptions(request, runtime);
  }

  async submitSupplementWithOptions(tmpReq: SubmitSupplementRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSupplementResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSupplementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.uploadOssKeyList)) {
      request.uploadOssKeyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uploadOssKeyList, "UploadOssKeyList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.uploadOssKeyListShrink)) {
      query["UploadOssKeyList"] = request.uploadOssKeyListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSupplement",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSupplementResponse>(await this.callApi(params, req, runtime), new SubmitSupplementResponse({}));
  }

  async submitSupplement(request: SubmitSupplementRequest): Promise<SubmitSupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSupplementWithOptions(request, runtime);
  }

  async submitTrademarkApplicationComplaintWithOptions(tmpReq: SubmitTrademarkApplicationComplaintRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTrademarkApplicationComplaintResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTrademarkApplicationComplaintShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.filesShrink)) {
      query["Files"] = request.filesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTrademarkApplicationComplaint",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTrademarkApplicationComplaintResponse>(await this.callApi(params, req, runtime), new SubmitTrademarkApplicationComplaintResponse({}));
  }

  async submitTrademarkApplicationComplaint(request: SubmitTrademarkApplicationComplaintRequest): Promise<SubmitTrademarkApplicationComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTrademarkApplicationComplaintWithOptions(request, runtime);
  }

  async syncTrademarkWithOptions(request: SyncTrademarkRequest, runtime: $Util.RuntimeOptions): Promise<SyncTrademarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.classificationCode)) {
      query["ClassificationCode"] = request.classificationCode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.originalPrice)) {
      query["OriginalPrice"] = request.originalPrice;
    }

    if (!Util.isUnset(request.ownerEnName)) {
      query["OwnerEnName"] = request.ownerEnName;
    }

    if (!Util.isUnset(request.ownerName)) {
      query["OwnerName"] = request.ownerName;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.regAnnDate)) {
      query["RegAnnDate"] = request.regAnnDate;
    }

    if (!Util.isUnset(request.secondaryClassification)) {
      query["SecondaryClassification"] = request.secondaryClassification;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.thirdClassification)) {
      query["ThirdClassification"] = request.thirdClassification;
    }

    if (!Util.isUnset(request.tmIcon)) {
      query["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNumber)) {
      query["TmNumber"] = request.tmNumber;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncTrademark",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncTrademarkResponse>(await this.callApi(params, req, runtime), new SyncTrademarkResponse({}));
  }

  async syncTrademark(request: SyncTrademarkRequest): Promise<SyncTrademarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncTrademarkWithOptions(request, runtime);
  }

  async updateApplicantContacterWithOptions(request: UpdateApplicantContacterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicantContacterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.contactAddress)) {
      query["ContactAddress"] = request.contactAddress;
    }

    if (!Util.isUnset(request.contactCity)) {
      query["ContactCity"] = request.contactCity;
    }

    if (!Util.isUnset(request.contactDistrict)) {
      query["ContactDistrict"] = request.contactDistrict;
    }

    if (!Util.isUnset(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.contactProvince)) {
      query["ContactProvince"] = request.contactProvince;
    }

    if (!Util.isUnset(request.contactZipCode)) {
      query["ContactZipCode"] = request.contactZipCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicantContacter",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicantContacterResponse>(await this.callApi(params, req, runtime), new UpdateApplicantContacterResponse({}));
  }

  async updateApplicantContacter(request: UpdateApplicantContacterRequest): Promise<UpdateApplicantContacterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicantContacterWithOptions(request, runtime);
  }

  async updateMaterialWithOptions(request: UpdateMaterialRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.businessLicenceOssKey)) {
      query["BusinessLicenceOssKey"] = request.businessLicenceOssKey;
    }

    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.contactAddress)) {
      query["ContactAddress"] = request.contactAddress;
    }

    if (!Util.isUnset(request.contactCity)) {
      query["ContactCity"] = request.contactCity;
    }

    if (!Util.isUnset(request.contactCounty)) {
      query["ContactCounty"] = request.contactCounty;
    }

    if (!Util.isUnset(request.contactDistrict)) {
      query["ContactDistrict"] = request.contactDistrict;
    }

    if (!Util.isUnset(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!Util.isUnset(request.contactProvince)) {
      query["ContactProvince"] = request.contactProvince;
    }

    if (!Util.isUnset(request.contactZipcode)) {
      query["ContactZipcode"] = request.contactZipcode;
    }

    if (!Util.isUnset(request.EAddress)) {
      query["EAddress"] = request.EAddress;
    }

    if (!Util.isUnset(request.EName)) {
      query["EName"] = request.EName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.idCardName)) {
      query["IdCardName"] = request.idCardName;
    }

    if (!Util.isUnset(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!Util.isUnset(request.idCardOssKey)) {
      query["IdCardOssKey"] = request.idCardOssKey;
    }

    if (!Util.isUnset(request.legalNoticeOssKey)) {
      query["LegalNoticeOssKey"] = request.legalNoticeOssKey;
    }

    if (!Util.isUnset(request.loaId)) {
      query["LoaId"] = request.loaId;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      query["LoaOssKey"] = request.loaOssKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.passportOssKey)) {
      query["PassportOssKey"] = request.passportOssKey;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.town)) {
      query["Town"] = request.town;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMaterial",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMaterialResponse>(await this.callApi(params, req, runtime), new UpdateMaterialResponse({}));
  }

  async updateMaterial(request: UpdateMaterialRequest): Promise<UpdateMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMaterialWithOptions(request, runtime);
  }

  async updateProduceWithOptions(request: UpdateProduceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProduceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.extMap)) {
      query["ExtMap"] = request.extMap;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProduce",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProduceResponse>(await this.callApi(params, req, runtime), new UpdateProduceResponse({}));
  }

  async updateProduce(request: UpdateProduceRequest): Promise<UpdateProduceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProduceWithOptions(request, runtime);
  }

  async updateProduceLoaIdWithOptions(request: UpdateProduceLoaIdRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProduceLoaIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.loaOssKey)) {
      body["LoaOssKey"] = request.loaOssKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProduceLoaId",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProduceLoaIdResponse>(await this.callApi(params, req, runtime), new UpdateProduceLoaIdResponse({}));
  }

  async updateProduceLoaId(request: UpdateProduceLoaIdRequest): Promise<UpdateProduceLoaIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProduceLoaIdWithOptions(request, runtime);
  }

  async updateSendMaterialNumWithOptions(request: UpdateSendMaterialNumRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSendMaterialNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSendMaterialNum",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSendMaterialNumResponse>(await this.callApi(params, req, runtime), new UpdateSendMaterialNumResponse({}));
  }

  async updateSendMaterialNum(request: UpdateSendMaterialNumRequest): Promise<UpdateSendMaterialNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSendMaterialNumWithOptions(request, runtime);
  }

  async updateTrademarkNameWithOptions(request: UpdateTrademarkNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrademarkNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.tmComment)) {
      body["TmComment"] = request.tmComment;
    }

    if (!Util.isUnset(request.tmIcon)) {
      body["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      body["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrademarkName",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrademarkNameResponse>(await this.callApi(params, req, runtime), new UpdateTrademarkNameResponse({}));
  }

  async updateTrademarkName(request: UpdateTrademarkNameRequest): Promise<UpdateTrademarkNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrademarkNameWithOptions(request, runtime);
  }

  async updateTrademarkOnsaleWithOptions(request: UpdateTrademarkOnsaleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrademarkOnsaleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.classificationCode)) {
      query["ClassificationCode"] = request.classificationCode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.originalPrice)) {
      query["OriginalPrice"] = request.originalPrice;
    }

    if (!Util.isUnset(request.ownerEnName)) {
      query["OwnerEnName"] = request.ownerEnName;
    }

    if (!Util.isUnset(request.ownerName)) {
      query["OwnerName"] = request.ownerName;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.regAnnDate)) {
      query["RegAnnDate"] = request.regAnnDate;
    }

    if (!Util.isUnset(request.secondaryClassification)) {
      query["SecondaryClassification"] = request.secondaryClassification;
    }

    if (!Util.isUnset(request.thirdClassification)) {
      query["ThirdClassification"] = request.thirdClassification;
    }

    if (!Util.isUnset(request.tmIcon)) {
      query["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNumber)) {
      query["TmNumber"] = request.tmNumber;
    }

    if (!Util.isUnset(request.tmType)) {
      query["TmType"] = request.tmType;
    }

    if (!Util.isUnset(request.tradeTmDetailJson)) {
      query["TradeTmDetailJson"] = request.tradeTmDetailJson;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrademarkOnsale",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrademarkOnsaleResponse>(await this.callApi(params, req, runtime), new UpdateTrademarkOnsaleResponse({}));
  }

  async updateTrademarkOnsale(request: UpdateTrademarkOnsaleRequest): Promise<UpdateTrademarkOnsaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrademarkOnsaleWithOptions(request, runtime);
  }

  async uploadNotaryDataWithOptions(request: UploadNotaryDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadNotaryDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizOrderNo)) {
      query["BizOrderNo"] = request.bizOrderNo;
    }

    if (!Util.isUnset(request.notaryType)) {
      query["NotaryType"] = request.notaryType;
    }

    if (!Util.isUnset(request.uploadContext)) {
      query["UploadContext"] = request.uploadContext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadNotaryData",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadNotaryDataResponse>(await this.callApi(params, req, runtime), new UploadNotaryDataResponse({}));
  }

  async uploadNotaryData(request: UploadNotaryDataRequest): Promise<UploadNotaryDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadNotaryDataWithOptions(request, runtime);
  }

  async uploadTrademarkOnSaleWithOptions(request: UploadTrademarkOnSaleRequest, runtime: $Util.RuntimeOptions): Promise<UploadTrademarkOnSaleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.classificationCode)) {
      query["ClassificationCode"] = request.classificationCode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.originalPrice)) {
      query["OriginalPrice"] = request.originalPrice;
    }

    if (!Util.isUnset(request.ownerEnName)) {
      query["OwnerEnName"] = request.ownerEnName;
    }

    if (!Util.isUnset(request.ownerName)) {
      query["OwnerName"] = request.ownerName;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.regAnnDate)) {
      query["RegAnnDate"] = request.regAnnDate;
    }

    if (!Util.isUnset(request.secondaryClassification)) {
      query["SecondaryClassification"] = request.secondaryClassification;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.thirdClassification)) {
      query["ThirdClassification"] = request.thirdClassification;
    }

    if (!Util.isUnset(request.tmIcon)) {
      query["TmIcon"] = request.tmIcon;
    }

    if (!Util.isUnset(request.tmName)) {
      query["TmName"] = request.tmName;
    }

    if (!Util.isUnset(request.tmNumber)) {
      query["TmNumber"] = request.tmNumber;
    }

    if (!Util.isUnset(request.tmType)) {
      query["TmType"] = request.tmType;
    }

    if (!Util.isUnset(request.tradeTmDetailJson)) {
      query["TradeTmDetailJson"] = request.tradeTmDetailJson;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadTrademarkOnSale",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadTrademarkOnSaleResponse>(await this.callApi(params, req, runtime), new UploadTrademarkOnSaleResponse({}));
  }

  async uploadTrademarkOnSale(request: UploadTrademarkOnSaleRequest): Promise<UploadTrademarkOnSaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadTrademarkOnSaleWithOptions(request, runtime);
  }

  async writeCommunicationLogWithOptions(request: WriteCommunicationLogRequest, runtime: $Util.RuntimeOptions): Promise<WriteCommunicationLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WriteCommunicationLog",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<WriteCommunicationLogResponse>(await this.callApi(params, req, runtime), new WriteCommunicationLogResponse({}));
  }

  async writeCommunicationLog(request: WriteCommunicationLogRequest): Promise<WriteCommunicationLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.writeCommunicationLogWithOptions(request, runtime);
  }

  async writeIntentionCommunicationLogWithOptions(request: WriteIntentionCommunicationLogRequest, runtime: $Util.RuntimeOptions): Promise<WriteIntentionCommunicationLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.reject)) {
      query["Reject"] = request.reject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WriteIntentionCommunicationLog",
      version: "2018-07-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<WriteIntentionCommunicationLogResponse>(await this.callApi(params, req, runtime), new WriteIntentionCommunicationLogResponse({}));
  }

  async writeIntentionCommunicationLog(request: WriteIntentionCommunicationLogRequest): Promise<WriteIntentionCommunicationLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.writeIntentionCommunicationLogWithOptions(request, runtime);
  }

}
