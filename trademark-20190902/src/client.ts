// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BindApplicantRequest extends $tea.Model {
  applicantId?: string;
  authorizationOssKey?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      authorizationOssKey: 'AuthorizationOssKey',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'string',
      authorizationOssKey: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindApplicantResponseBody extends $tea.Model {
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

export class BindApplicantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBody extends $tea.Model {
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

export class CancelOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthorizationLetterRequest extends $tea.Model {
  applicantType?: string;
  color?: string;
  contactName?: string;
  contactNumber?: string;
  contactZipcode?: string;
  ossKey?: string;
  personalType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      applicantType: 'ApplicantType',
      color: 'Color',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactZipcode: 'ContactZipcode',
      ossKey: 'OssKey',
      personalType: 'PersonalType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantType: 'string',
      color: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactZipcode: 'string',
      ossKey: 'string',
      personalType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthorizationLetterResponseBody extends $tea.Model {
  requestId?: string;
  templateUrl?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateUrl: 'TemplateUrl',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateUrl: 'string',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthorizationLetterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAuthorizationLetterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAuthorizationLetterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBizAvailableRequest extends $tea.Model {
  biz?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBizAvailableResponseBody extends $tea.Model {
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

export class CheckBizAvailableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckBizAvailableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckBizAvailableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateApplicantRiskRequest extends $tea.Model {
  applicantName?: string;
  eventSceneType?: number;
  static names(): { [key: string]: string } {
    return {
      applicantName: 'ApplicantName',
      eventSceneType: 'EventSceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantName: 'string',
      eventSceneType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateApplicantRiskResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateApplicantRiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDuplicateApplicantRiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDuplicateApplicantRiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateClassificationRequest extends $tea.Model {
  classification?: string;
  eventSceneType?: number;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      eventSceneType: 'EventSceneType',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      eventSceneType: 'number',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateClassificationResponseBody extends $tea.Model {
  code?: string;
  data?: CheckDuplicateClassificationResponseBodyData;
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
      data: CheckDuplicateClassificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateClassificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDuplicateClassificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDuplicateClassificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateTrademarkRequest extends $tea.Model {
  classification?: string;
  eventSceneType?: number;
  materialName?: string;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      eventSceneType: 'EventSceneType',
      materialName: 'MaterialName',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      eventSceneType: 'number',
      materialName: 'string',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateTrademarkResponseBody extends $tea.Model {
  code?: string;
  duplicateTrademark?: string;
  message?: string;
  requestId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duplicateTrademark: 'DuplicateTrademark',
      message: 'Message',
      requestId: 'RequestId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duplicateTrademark: 'string',
      message: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateTrademarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDuplicateTrademarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDuplicateTrademarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaterialValidityRequest extends $tea.Model {
  businessLicenseOssKey?: string;
  cardNumber?: string;
  idCardName?: string;
  idCardNumber?: string;
  idCardOssKey?: string;
  materialId?: number;
  materialRegion?: number;
  materialType?: number;
  name?: string;
  personalType?: number;
  static names(): { [key: string]: string } {
    return {
      businessLicenseOssKey: 'BusinessLicenseOssKey',
      cardNumber: 'CardNumber',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardOssKey: 'IdCardOssKey',
      materialId: 'MaterialId',
      materialRegion: 'MaterialRegion',
      materialType: 'MaterialType',
      name: 'Name',
      personalType: 'PersonalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessLicenseOssKey: 'string',
      cardNumber: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardOssKey: 'string',
      materialId: 'number',
      materialRegion: 'number',
      materialType: 'number',
      name: 'string',
      personalType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaterialValidityResponseBody extends $tea.Model {
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

export class CheckMaterialValidityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckMaterialValidityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckMaterialValidityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkNameRequest extends $tea.Model {
  eventSceneType?: number;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      eventSceneType: 'EventSceneType',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSceneType: 'number',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkNameResponseBody extends $tea.Model {
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

export class CheckTrademarkNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckTrademarkNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckTrademarkNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTrademarkApplicationRequest extends $tea.Model {
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

export class CloseTrademarkApplicationResponseBody extends $tea.Model {
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

export class CloseTrademarkApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseTrademarkApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineAuthorizationLetterRequest extends $tea.Model {
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
      tmProduceType: 'string',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineAuthorizationLetterResponseBody extends $tea.Model {
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

export class CombineAuthorizationLetterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CombineAuthorizationLetterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CombineAuthorizationLetterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplementTrademarkApplicationRequest extends $tea.Model {
  agreementId?: string;
  authorizationOssKey?: string;
  bizId?: string;
  isBlackIcon?: boolean;
  materialId?: string;
  orderData?: string;
  source?: string;
  trademarkComment?: string;
  trademarkIconOssKey?: string;
  trademarkName?: string;
  trademarkNameType?: string;
  trademarkType?: number;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      authorizationOssKey: 'AuthorizationOssKey',
      bizId: 'BizId',
      isBlackIcon: 'IsBlackIcon',
      materialId: 'MaterialId',
      orderData: 'OrderData',
      source: 'Source',
      trademarkComment: 'TrademarkComment',
      trademarkIconOssKey: 'TrademarkIconOssKey',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkType: 'TrademarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      authorizationOssKey: 'string',
      bizId: 'string',
      isBlackIcon: 'boolean',
      materialId: 'string',
      orderData: 'string',
      source: 'string',
      trademarkComment: 'string',
      trademarkIconOssKey: 'string',
      trademarkName: 'string',
      trademarkNameType: 'string',
      trademarkType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplementTrademarkApplicationResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ComplementTrademarkApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ComplementTrademarkApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ComplementTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmExpertSolutionRequest extends $tea.Model {
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

export class ConfirmExpertSolutionResponseBody extends $tea.Model {
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

export class ConfirmExpertSolutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmExpertSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfirmExpertSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicantRequest extends $tea.Model {
  address?: string;
  applicantName?: string;
  applicantRegion?: number;
  applicantType?: number;
  authorizationOssKey?: string;
  businessLicenceOssKey?: string;
  cardNumber?: string;
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
  passportOssKey?: string;
  personalType?: number;
  principalName?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantName: 'ApplicantName',
      applicantRegion: 'ApplicantRegion',
      applicantType: 'ApplicantType',
      authorizationOssKey: 'AuthorizationOssKey',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
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
      passportOssKey: 'PassportOssKey',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applicantName: 'string',
      applicantRegion: 'number',
      applicantType: 'number',
      authorizationOssKey: 'string',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
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
      passportOssKey: 'string',
      personalType: 'number',
      principalName: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicantResponseBody extends $tea.Model {
  applicantId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommodityOrderRequest extends $tea.Model {
  autoPay?: boolean;
  bizType?: string;
  chargeType?: string;
  clientToken?: string;
  commodityCode?: string;
  components?: { [key: string]: any };
  duration?: number;
  instanceId?: string;
  orderParams?: { [key: string]: any };
  orderType?: string;
  pricingCycle?: string;
  quantity?: number;
  specCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bizType: 'BizType',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      components: 'Components',
      duration: 'Duration',
      instanceId: 'InstanceId',
      orderParams: 'OrderParams',
      orderType: 'OrderType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      specCode: 'SpecCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bizType: 'string',
      chargeType: 'string',
      clientToken: 'string',
      commodityCode: 'string',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      duration: 'number',
      instanceId: 'string',
      orderParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      specCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommodityOrderShrinkRequest extends $tea.Model {
  autoPay?: boolean;
  bizType?: string;
  chargeType?: string;
  clientToken?: string;
  commodityCode?: string;
  componentsShrink?: string;
  duration?: number;
  instanceId?: string;
  orderParamsShrink?: string;
  orderType?: string;
  pricingCycle?: string;
  quantity?: number;
  specCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bizType: 'BizType',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      componentsShrink: 'Components',
      duration: 'Duration',
      instanceId: 'InstanceId',
      orderParamsShrink: 'OrderParams',
      orderType: 'OrderType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      specCode: 'SpecCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bizType: 'string',
      chargeType: 'string',
      clientToken: 'string',
      commodityCode: 'string',
      componentsShrink: 'string',
      duration: 'number',
      instanceId: 'string',
      orderParamsShrink: 'string',
      orderType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      specCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommodityOrderResponseBody extends $tea.Model {
  data?: number[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommodityOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCommodityOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCommodityOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  agreementId?: string;
  applicantId?: string;
  applicationType?: number;
  authorizationOssKey?: string;
  autoPay?: boolean;
  blackAndWhiteIcon?: string;
  channel?: string;
  classifications?: string;
  idempotentId?: string;
  legalNoticeKey?: string;
  payType?: string;
  paymentCallback?: string;
  principalName?: number;
  source?: string;
  trademarkComment?: string;
  trademarkIcon?: string;
  trademarkName?: string;
  trademarkNameType?: string;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      applicantId: 'ApplicantId',
      applicationType: 'ApplicationType',
      authorizationOssKey: 'AuthorizationOssKey',
      autoPay: 'AutoPay',
      blackAndWhiteIcon: 'BlackAndWhiteIcon',
      channel: 'Channel',
      classifications: 'Classifications',
      idempotentId: 'IdempotentId',
      legalNoticeKey: 'LegalNoticeKey',
      payType: 'PayType',
      paymentCallback: 'PaymentCallback',
      principalName: 'PrincipalName',
      source: 'Source',
      trademarkComment: 'TrademarkComment',
      trademarkIcon: 'TrademarkIcon',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      applicantId: 'string',
      applicationType: 'number',
      authorizationOssKey: 'string',
      autoPay: 'boolean',
      blackAndWhiteIcon: 'string',
      channel: 'string',
      classifications: 'string',
      idempotentId: 'string',
      legalNoticeKey: 'string',
      payType: 'string',
      paymentCallback: 'string',
      principalName: 'number',
      source: 'string',
      trademarkComment: 'string',
      trademarkIcon: 'string',
      trademarkName: 'string',
      trademarkNameType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  message?: string;
  orderIds?: { [key: string]: any };
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      orderIds: 'OrderIds',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      orderIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateTrademarkApplicationRequest extends $tea.Model {
  agreementId?: string;
  applicantId?: string;
  applicationType?: number;
  authorizationOssKey?: string;
  autoPay?: boolean;
  blackAndWhiteIcon?: string;
  channel?: string;
  classifications?: string;
  idempotentId?: string;
  legalNoticeKey?: string;
  principalName?: number;
  source?: string;
  trademarkComment?: string;
  trademarkIcon?: string;
  trademarkName?: string;
  trademarkNameType?: string;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      applicantId: 'ApplicantId',
      applicationType: 'ApplicationType',
      authorizationOssKey: 'AuthorizationOssKey',
      autoPay: 'AutoPay',
      blackAndWhiteIcon: 'BlackAndWhiteIcon',
      channel: 'Channel',
      classifications: 'Classifications',
      idempotentId: 'IdempotentId',
      legalNoticeKey: 'LegalNoticeKey',
      principalName: 'PrincipalName',
      source: 'Source',
      trademarkComment: 'TrademarkComment',
      trademarkIcon: 'TrademarkIcon',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      applicantId: 'string',
      applicationType: 'number',
      authorizationOssKey: 'string',
      autoPay: 'boolean',
      blackAndWhiteIcon: 'string',
      channel: 'string',
      classifications: 'string',
      idempotentId: 'string',
      legalNoticeKey: 'string',
      principalName: 'number',
      source: 'string',
      trademarkComment: 'string',
      trademarkIcon: 'string',
      trademarkName: 'string',
      trademarkNameType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkApplicationResponseBody extends $tea.Model {
  message?: string;
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrademarkApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSearchConditionRequest extends $tea.Model {
  conditionId?: number;
  sessionId?: string;
  umid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionId: 'ConditionId',
      sessionId: 'SessionId',
      umid: 'Umid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionId: 'number',
      sessionId: 'string',
      umid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSearchConditionResponseBody extends $tea.Model {
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

export class DeleteSearchConditionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSearchConditionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSearchConditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdminTrademarkApplicationRequest extends $tea.Model {
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

export class DescribeAdminTrademarkApplicationResponseBody extends $tea.Model {
  acceptUrl?: string;
  applicant?: DescribeAdminTrademarkApplicationResponseBodyApplicant;
  applicantId?: number;
  applicationStatus?: number;
  applicationType?: number;
  authorizationUrl?: string;
  bizId?: string;
  blackAndWhiteIconUrl?: string;
  createTime?: number;
  extendInfo?: { [key: string]: any };
  firstClassification?: DescribeAdminTrademarkApplicationResponseBodyFirstClassification;
  judgeResultUrls?: string[];
  note?: string;
  orderId?: string;
  orderPrice?: number;
  principalName?: number;
  receiptUrls?: string[];
  recvUserLogistics?: string;
  requestId?: string;
  sendSbjLogistics?: string;
  sendUserLogistics?: string;
  servicePrice?: number;
  supplements?: DescribeAdminTrademarkApplicationResponseBodySupplements[];
  thirdClassifications?: DescribeAdminTrademarkApplicationResponseBodyThirdClassifications[];
  totalPrice?: number;
  trademarkIcon?: string;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptUrl: 'AcceptUrl',
      applicant: 'Applicant',
      applicantId: 'ApplicantId',
      applicationStatus: 'ApplicationStatus',
      applicationType: 'ApplicationType',
      authorizationUrl: 'AuthorizationUrl',
      bizId: 'BizId',
      blackAndWhiteIconUrl: 'BlackAndWhiteIconUrl',
      createTime: 'CreateTime',
      extendInfo: 'ExtendInfo',
      firstClassification: 'FirstClassification',
      judgeResultUrls: 'JudgeResultUrls',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalName: 'PrincipalName',
      receiptUrls: 'ReceiptUrls',
      recvUserLogistics: 'RecvUserLogistics',
      requestId: 'RequestId',
      sendSbjLogistics: 'SendSbjLogistics',
      sendUserLogistics: 'SendUserLogistics',
      servicePrice: 'ServicePrice',
      supplements: 'Supplements',
      thirdClassifications: 'ThirdClassifications',
      totalPrice: 'TotalPrice',
      trademarkIcon: 'TrademarkIcon',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptUrl: 'string',
      applicant: DescribeAdminTrademarkApplicationResponseBodyApplicant,
      applicantId: 'number',
      applicationStatus: 'number',
      applicationType: 'number',
      authorizationUrl: 'string',
      bizId: 'string',
      blackAndWhiteIconUrl: 'string',
      createTime: 'number',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      firstClassification: DescribeAdminTrademarkApplicationResponseBodyFirstClassification,
      judgeResultUrls: { 'type': 'array', 'itemType': 'string' },
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalName: 'number',
      receiptUrls: { 'type': 'array', 'itemType': 'string' },
      recvUserLogistics: 'string',
      requestId: 'string',
      sendSbjLogistics: 'string',
      sendUserLogistics: 'string',
      servicePrice: 'number',
      supplements: { 'type': 'array', 'itemType': DescribeAdminTrademarkApplicationResponseBodySupplements },
      thirdClassifications: { 'type': 'array', 'itemType': DescribeAdminTrademarkApplicationResponseBodyThirdClassifications },
      totalPrice: 'number',
      trademarkIcon: 'string',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdminTrademarkApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdminTrademarkApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdminTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicantRequest extends $tea.Model {
  applicantId?: number;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicantResponseBody extends $tea.Model {
  address?: string;
  applicantId?: number;
  applicantName?: string;
  applicantRegion?: number;
  applicantType?: number;
  applicantVersion?: string;
  auditStatus?: number;
  authorizationAuditStatus?: number;
  authorizationUrl?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
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
  idCardUrl?: string;
  legalNoticeUrl?: string;
  note?: string;
  passportUrl?: string;
  personalType?: number;
  principalName?: number;
  province?: string;
  requestId?: string;
  validDate?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      applicantRegion: 'ApplicantRegion',
      applicantType: 'ApplicantType',
      applicantVersion: 'ApplicantVersion',
      auditStatus: 'AuditStatus',
      authorizationAuditStatus: 'AuthorizationAuditStatus',
      authorizationUrl: 'AuthorizationUrl',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
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
      idCardUrl: 'IdCardUrl',
      legalNoticeUrl: 'LegalNoticeUrl',
      note: 'Note',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      province: 'Province',
      requestId: 'RequestId',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applicantId: 'number',
      applicantName: 'string',
      applicantRegion: 'number',
      applicantType: 'number',
      applicantVersion: 'string',
      auditStatus: 'number',
      authorizationAuditStatus: 'number',
      authorizationUrl: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
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
      idCardUrl: 'string',
      legalNoticeUrl: 'string',
      note: 'string',
      passportUrl: 'string',
      personalType: 'number',
      principalName: 'number',
      province: 'string',
      requestId: 'string',
      validDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePartnerTrademarkApplicationRequest extends $tea.Model {
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

export class DescribePartnerTrademarkApplicationResponseBody extends $tea.Model {
  acceptUrl?: string;
  applicant?: DescribePartnerTrademarkApplicationResponseBodyApplicant;
  applicantId?: number;
  applicationStatus?: number;
  applicationType?: number;
  authorizationUrl?: string;
  bizId?: string;
  blackAndWhiteIconUrl?: string;
  createTime?: number;
  extendInfo?: { [key: string]: any };
  firstClassification?: DescribePartnerTrademarkApplicationResponseBodyFirstClassification;
  judgeResultUrls?: string[];
  note?: string;
  orderId?: string;
  orderPrice?: number;
  principalName?: number;
  receiptUrls?: string[];
  recvUserLogistics?: string;
  requestId?: string;
  sendSbjLogistics?: string;
  sendUserLogistics?: string;
  servicePrice?: number;
  supplements?: DescribePartnerTrademarkApplicationResponseBodySupplements[];
  thirdClassifications?: DescribePartnerTrademarkApplicationResponseBodyThirdClassifications[];
  totalPrice?: number;
  trademarkIcon?: string;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      acceptUrl: 'AcceptUrl',
      applicant: 'Applicant',
      applicantId: 'ApplicantId',
      applicationStatus: 'ApplicationStatus',
      applicationType: 'ApplicationType',
      authorizationUrl: 'AuthorizationUrl',
      bizId: 'BizId',
      blackAndWhiteIconUrl: 'BlackAndWhiteIconUrl',
      createTime: 'CreateTime',
      extendInfo: 'ExtendInfo',
      firstClassification: 'FirstClassification',
      judgeResultUrls: 'JudgeResultUrls',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalName: 'PrincipalName',
      receiptUrls: 'ReceiptUrls',
      recvUserLogistics: 'RecvUserLogistics',
      requestId: 'RequestId',
      sendSbjLogistics: 'SendSbjLogistics',
      sendUserLogistics: 'SendUserLogistics',
      servicePrice: 'ServicePrice',
      supplements: 'Supplements',
      thirdClassifications: 'ThirdClassifications',
      totalPrice: 'TotalPrice',
      trademarkIcon: 'TrademarkIcon',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptUrl: 'string',
      applicant: DescribePartnerTrademarkApplicationResponseBodyApplicant,
      applicantId: 'number',
      applicationStatus: 'number',
      applicationType: 'number',
      authorizationUrl: 'string',
      bizId: 'string',
      blackAndWhiteIconUrl: 'string',
      createTime: 'number',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      firstClassification: DescribePartnerTrademarkApplicationResponseBodyFirstClassification,
      judgeResultUrls: { 'type': 'array', 'itemType': 'string' },
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalName: 'number',
      receiptUrls: { 'type': 'array', 'itemType': 'string' },
      recvUserLogistics: 'string',
      requestId: 'string',
      sendSbjLogistics: 'string',
      sendUserLogistics: 'string',
      servicePrice: 'number',
      supplements: { 'type': 'array', 'itemType': DescribePartnerTrademarkApplicationResponseBodySupplements },
      thirdClassifications: { 'type': 'array', 'itemType': DescribePartnerTrademarkApplicationResponseBodyThirdClassifications },
      totalPrice: 'number',
      trademarkIcon: 'string',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePartnerTrademarkApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePartnerTrademarkApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePartnerTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualificationStatusRequest extends $tea.Model {
  tbUid?: string;
  static names(): { [key: string]: string } {
    return {
      tbUid: 'TbUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tbUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualificationStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualificationStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualificationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualificationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupplementRequest extends $tea.Model {
  supplementId?: number;
  static names(): { [key: string]: string } {
    return {
      supplementId: 'SupplementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplementId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupplementResponseBody extends $tea.Model {
  acceptExpirationDate?: number;
  acceptTime?: number;
  applicationType?: number;
  content?: string;
  officialFile?: string;
  operateTime?: number;
  requestId?: string;
  sbjExpirationDate?: number;
  sendTime?: number;
  serialNumber?: string;
  supplementId?: number;
  supplementStatus?: number;
  trademarkNumber?: string;
  userFiles?: DescribeSupplementResponseBodyUserFiles;
  static names(): { [key: string]: string } {
    return {
      acceptExpirationDate: 'AcceptExpirationDate',
      acceptTime: 'AcceptTime',
      applicationType: 'ApplicationType',
      content: 'Content',
      officialFile: 'OfficialFile',
      operateTime: 'OperateTime',
      requestId: 'RequestId',
      sbjExpirationDate: 'SbjExpirationDate',
      sendTime: 'SendTime',
      serialNumber: 'SerialNumber',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      trademarkNumber: 'TrademarkNumber',
      userFiles: 'UserFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptExpirationDate: 'number',
      acceptTime: 'number',
      applicationType: 'number',
      content: 'string',
      officialFile: 'string',
      operateTime: 'number',
      requestId: 'string',
      sbjExpirationDate: 'number',
      sendTime: 'number',
      serialNumber: 'string',
      supplementId: 'number',
      supplementStatus: 'number',
      trademarkNumber: 'string',
      userFiles: DescribeSupplementResponseBodyUserFiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupplementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSupplementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSupplementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkApplicationRequest extends $tea.Model {
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

export class DescribeTrademarkApplicationResponseBody extends $tea.Model {
  acceptUrl?: string;
  agreementId?: string;
  applicant?: DescribeTrademarkApplicationResponseBodyApplicant;
  applicantId?: number;
  applicationStatus?: number;
  applicationType?: number;
  authorizationUrl?: string;
  bizId?: string;
  blackAndWhiteIconUrl?: string;
  createTime?: number;
  extendInfo?: { [key: string]: any };
  firstClassification?: DescribeTrademarkApplicationResponseBodyFirstClassification;
  flags?: DescribeTrademarkApplicationResponseBodyFlags;
  judgeResultUrls?: DescribeTrademarkApplicationResponseBodyJudgeResultUrls;
  note?: string;
  orderId?: string;
  orderPrice?: number;
  principalName?: number;
  receiptUrls?: DescribeTrademarkApplicationResponseBodyReceiptUrls;
  recvUserLogistics?: string;
  requestId?: string;
  sendSbjLogistics?: string;
  sendUserLogistics?: string;
  servicePrice?: number;
  supplements?: DescribeTrademarkApplicationResponseBodySupplements;
  thirdClassifications?: DescribeTrademarkApplicationResponseBodyThirdClassifications;
  totalPrice?: number;
  trademarkIcon?: string;
  trademarkName?: string;
  trademarkNameType?: number;
  trademarkNumber?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      acceptUrl: 'AcceptUrl',
      agreementId: 'AgreementId',
      applicant: 'Applicant',
      applicantId: 'ApplicantId',
      applicationStatus: 'ApplicationStatus',
      applicationType: 'ApplicationType',
      authorizationUrl: 'AuthorizationUrl',
      bizId: 'BizId',
      blackAndWhiteIconUrl: 'BlackAndWhiteIconUrl',
      createTime: 'CreateTime',
      extendInfo: 'ExtendInfo',
      firstClassification: 'FirstClassification',
      flags: 'Flags',
      judgeResultUrls: 'JudgeResultUrls',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalName: 'PrincipalName',
      receiptUrls: 'ReceiptUrls',
      recvUserLogistics: 'RecvUserLogistics',
      requestId: 'RequestId',
      sendSbjLogistics: 'SendSbjLogistics',
      sendUserLogistics: 'SendUserLogistics',
      servicePrice: 'ServicePrice',
      supplements: 'Supplements',
      thirdClassifications: 'ThirdClassifications',
      totalPrice: 'TotalPrice',
      trademarkIcon: 'TrademarkIcon',
      trademarkName: 'TrademarkName',
      trademarkNameType: 'TrademarkNameType',
      trademarkNumber: 'TrademarkNumber',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptUrl: 'string',
      agreementId: 'string',
      applicant: DescribeTrademarkApplicationResponseBodyApplicant,
      applicantId: 'number',
      applicationStatus: 'number',
      applicationType: 'number',
      authorizationUrl: 'string',
      bizId: 'string',
      blackAndWhiteIconUrl: 'string',
      createTime: 'number',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      firstClassification: DescribeTrademarkApplicationResponseBodyFirstClassification,
      flags: DescribeTrademarkApplicationResponseBodyFlags,
      judgeResultUrls: DescribeTrademarkApplicationResponseBodyJudgeResultUrls,
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalName: 'number',
      receiptUrls: DescribeTrademarkApplicationResponseBodyReceiptUrls,
      recvUserLogistics: 'string',
      requestId: 'string',
      sendSbjLogistics: 'string',
      sendUserLogistics: 'string',
      servicePrice: 'number',
      supplements: DescribeTrademarkApplicationResponseBodySupplements,
      thirdClassifications: DescribeTrademarkApplicationResponseBodyThirdClassifications,
      totalPrice: 'number',
      trademarkIcon: 'string',
      trademarkName: 'string',
      trademarkNameType: 'number',
      trademarkNumber: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrademarkApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkDetailForInnerRequest extends $tea.Model {
  uid?: string;
  umid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      umid: 'Umid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      umid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkDetailForInnerResponseBody extends $tea.Model {
  agency?: string;
  applyDate?: string;
  classification?: string;
  exclusiveDateLimit?: string;
  flowList?: DescribeTrademarkDetailForInnerResponseBodyFlowList[];
  image?: string;
  imageElement?: string;
  intlRegDate?: string;
  lastProcedureStatus?: string;
  name?: string;
  noticeList?: DescribeTrademarkDetailForInnerResponseBodyNoticeList[];
  ownerAddress?: string;
  ownerEnAddress?: string;
  ownerEnName?: string;
  ownerName?: string;
  preAnnDate?: string;
  preAnnNum?: string;
  priorityDate?: string;
  product?: string;
  productDescription?: string;
  regAnnDate?: string;
  regAnnNum?: number;
  registrationNumber?: string;
  registrationType?: string;
  requestId?: string;
  share?: string;
  similarGroup?: string;
  status?: string;
  subsequentDesignationDate?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      agency: 'Agency',
      applyDate: 'ApplyDate',
      classification: 'Classification',
      exclusiveDateLimit: 'ExclusiveDateLimit',
      flowList: 'FlowList',
      image: 'Image',
      imageElement: 'ImageElement',
      intlRegDate: 'IntlRegDate',
      lastProcedureStatus: 'LastProcedureStatus',
      name: 'Name',
      noticeList: 'NoticeList',
      ownerAddress: 'OwnerAddress',
      ownerEnAddress: 'OwnerEnAddress',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      preAnnDate: 'PreAnnDate',
      preAnnNum: 'PreAnnNum',
      priorityDate: 'PriorityDate',
      product: 'Product',
      productDescription: 'ProductDescription',
      regAnnDate: 'RegAnnDate',
      regAnnNum: 'RegAnnNum',
      registrationNumber: 'RegistrationNumber',
      registrationType: 'RegistrationType',
      requestId: 'RequestId',
      share: 'Share',
      similarGroup: 'SimilarGroup',
      status: 'Status',
      subsequentDesignationDate: 'SubsequentDesignationDate',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agency: 'string',
      applyDate: 'string',
      classification: 'string',
      exclusiveDateLimit: 'string',
      flowList: { 'type': 'array', 'itemType': DescribeTrademarkDetailForInnerResponseBodyFlowList },
      image: 'string',
      imageElement: 'string',
      intlRegDate: 'string',
      lastProcedureStatus: 'string',
      name: 'string',
      noticeList: { 'type': 'array', 'itemType': DescribeTrademarkDetailForInnerResponseBodyNoticeList },
      ownerAddress: 'string',
      ownerEnAddress: 'string',
      ownerEnName: 'string',
      ownerName: 'string',
      preAnnDate: 'string',
      preAnnNum: 'string',
      priorityDate: 'string',
      product: 'string',
      productDescription: 'string',
      regAnnDate: 'string',
      regAnnNum: 'number',
      registrationNumber: 'string',
      registrationType: 'string',
      requestId: 'string',
      share: 'string',
      similarGroup: 'string',
      status: 'string',
      subsequentDesignationDate: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkDetailForInnerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrademarkDetailForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrademarkDetailForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyRequest extends $tea.Model {
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateUploadFilePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetAlipayUrlRequest extends $tea.Model {
  bizType?: string;
  orderId?: number;
  returnUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      orderId: 'OrderId',
      returnUrl: 'ReturnUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      orderId: 'number',
      returnUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlipayUrlResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlipayUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlipayUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlipayUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderConfirmUrlRequest extends $tea.Model {
  items?: GetOrderConfirmUrlRequestItems[];
  outTraceCode?: string;
  outTraceType?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      outTraceCode: 'OutTraceCode',
      outTraceType: 'OutTraceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetOrderConfirmUrlRequestItems },
      outTraceCode: 'string',
      outTraceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderConfirmUrlResponseBody extends $tea.Model {
  confirmUrl?: string;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      confirmUrl: 'ConfirmUrl',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmUrl: 'string',
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

export class GetOrderConfirmUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrderConfirmUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOrderConfirmUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsByTaobaoUidRequest extends $tea.Model {
  aliyunUid?: string;
  tbUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      tbUid: 'TbUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      tbUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsByTaobaoUidResponseBody extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  errorCode?: string;
  errorMessage?: string;
  expiration?: string;
  requestId?: string;
  securityToken?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      expiration: 'Expiration',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      expiration: 'string',
      requestId: 'string',
      securityToken: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsByTaobaoUidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStsByTaobaoUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetStsByTaobaoUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminTrademarkApplicationLogsRequest extends $tea.Model {
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

export class ListAdminTrademarkApplicationLogsResponseBody extends $tea.Model {
  requestId?: string;
  trademarkApplicationLogs?: ListAdminTrademarkApplicationLogsResponseBodyTrademarkApplicationLogs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trademarkApplicationLogs: 'TrademarkApplicationLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trademarkApplicationLogs: { 'type': 'array', 'itemType': ListAdminTrademarkApplicationLogsResponseBodyTrademarkApplicationLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminTrademarkApplicationLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAdminTrademarkApplicationLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAdminTrademarkApplicationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminTrademarkApplicationsRequest extends $tea.Model {
  applicantName?: string;
  applicationStatus?: number;
  applicationType?: string;
  bizId?: string;
  orderId?: string;
  pageNumber?: number;
  pageSize?: number;
  sortOrder?: string;
  supplementStatus?: number;
  trademarkName?: string;
  trademarkNumber?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicantName: 'ApplicantName',
      applicationStatus: 'ApplicationStatus',
      applicationType: 'ApplicationType',
      bizId: 'BizId',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortOrder: 'SortOrder',
      supplementStatus: 'SupplementStatus',
      trademarkName: 'TrademarkName',
      trademarkNumber: 'TrademarkNumber',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantName: 'string',
      applicationStatus: 'number',
      applicationType: 'string',
      bizId: 'string',
      orderId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortOrder: 'string',
      supplementStatus: 'number',
      trademarkName: 'string',
      trademarkNumber: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminTrademarkApplicationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  trademarkApplications?: ListAdminTrademarkApplicationsResponseBodyTrademarkApplications[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trademarkApplications: 'TrademarkApplications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      trademarkApplications: { 'type': 'array', 'itemType': ListAdminTrademarkApplicationsResponseBodyTrademarkApplications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminTrademarkApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAdminTrademarkApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAdminTrademarkApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicantsRequest extends $tea.Model {
  applicantName?: string;
  applicantRegion?: number;
  applicantType?: number;
  applicantVersion?: string;
  auditStatus?: number;
  cardNumber?: string;
  pageNumber?: number;
  pageSize?: number;
  principalName?: number;
  systemVersion?: string;
  static names(): { [key: string]: string } {
    return {
      applicantName: 'ApplicantName',
      applicantRegion: 'ApplicantRegion',
      applicantType: 'ApplicantType',
      applicantVersion: 'ApplicantVersion',
      auditStatus: 'AuditStatus',
      cardNumber: 'CardNumber',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      principalName: 'PrincipalName',
      systemVersion: 'SystemVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantName: 'string',
      applicantRegion: 'number',
      applicantType: 'number',
      applicantVersion: 'string',
      auditStatus: 'number',
      cardNumber: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      principalName: 'number',
      systemVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicantsResponseBody extends $tea.Model {
  applicants?: ListApplicantsResponseBodyApplicants;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicants: 'Applicants',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicants: ListApplicantsResponseBodyApplicants,
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

export class ListApplicantsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreasRequest extends $tea.Model {
  bizType?: string;
  parentCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      parentCode: 'ParentCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      parentCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreasResponseBody extends $tea.Model {
  datas?: ListAreasResponseBodyDatas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: { 'type': 'array', 'itemType': ListAreasResponseBodyDatas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAreasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationConditionsRequest extends $tea.Model {
  tagName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationConditionsResponseBody extends $tea.Model {
  data?: ListClassificationConditionsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListClassificationConditionsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationConditionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClassificationConditionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClassificationConditionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationsRequest extends $tea.Model {
  parentCode?: string;
  static names(): { [key: string]: string } {
    return {
      parentCode: 'ParentCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationsResponseBody extends $tea.Model {
  classifications?: ListClassificationsResponseBodyClassifications;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      classifications: 'Classifications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifications: ListClassificationsResponseBodyClassifications,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClassificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClassificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationLogsRequest extends $tea.Model {
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

export class ListTrademarkApplicationLogsResponseBody extends $tea.Model {
  requestId?: string;
  trademarkApplicationLogs?: ListTrademarkApplicationLogsResponseBodyTrademarkApplicationLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trademarkApplicationLogs: 'TrademarkApplicationLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trademarkApplicationLogs: ListTrademarkApplicationLogsResponseBodyTrademarkApplicationLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrademarkApplicationLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrademarkApplicationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationsRequest extends $tea.Model {
  applicantName?: string;
  applicationStatus?: number;
  applicationType?: string;
  bizId?: string;
  createTimeLeft?: number;
  createTimeRight?: number;
  flag?: number;
  orderId?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: number;
  queryVoucherOrderDoneFlag?: boolean;
  queryVoucherOrderFlag?: boolean;
  sortFiled?: string;
  sortOrder?: string;
  supplementStatus?: number;
  trademarkName?: string;
  trademarkNumber?: string;
  static names(): { [key: string]: string } {
    return {
      applicantName: 'ApplicantName',
      applicationStatus: 'ApplicationStatus',
      applicationType: 'ApplicationType',
      bizId: 'BizId',
      createTimeLeft: 'CreateTimeLeft',
      createTimeRight: 'CreateTimeRight',
      flag: 'Flag',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      queryVoucherOrderDoneFlag: 'QueryVoucherOrderDoneFlag',
      queryVoucherOrderFlag: 'QueryVoucherOrderFlag',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
      supplementStatus: 'SupplementStatus',
      trademarkName: 'TrademarkName',
      trademarkNumber: 'TrademarkNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantName: 'string',
      applicationStatus: 'number',
      applicationType: 'string',
      bizId: 'string',
      createTimeLeft: 'number',
      createTimeRight: 'number',
      flag: 'number',
      orderId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'number',
      queryVoucherOrderDoneFlag: 'boolean',
      queryVoucherOrderFlag: 'boolean',
      sortFiled: 'string',
      sortOrder: 'string',
      supplementStatus: 'number',
      trademarkName: 'string',
      trademarkNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  trademarkApplications?: ListTrademarkApplicationsResponseBodyTrademarkApplications;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trademarkApplications: 'TrademarkApplications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      trademarkApplications: ListTrademarkApplicationsResponseBodyTrademarkApplications,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrademarkApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrademarkApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSearchForInnerRequest extends $tea.Model {
  applyBeginTime?: string;
  applyEndTime?: string;
  classification?: string;
  ifPrecision?: boolean;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  searchPreference?: string;
  searchType?: string;
  status?: string;
  umid?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyBeginTime: 'ApplyBeginTime',
      applyEndTime: 'ApplyEndTime',
      classification: 'Classification',
      ifPrecision: 'IfPrecision',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      searchPreference: 'SearchPreference',
      searchType: 'SearchType',
      status: 'Status',
      umid: 'Umid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBeginTime: 'string',
      applyEndTime: 'string',
      classification: 'string',
      ifPrecision: 'boolean',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      searchPreference: 'string',
      searchType: 'string',
      status: 'string',
      umid: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSearchForInnerResponseBody extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  products?: string[];
  requestId?: string;
  totalCount?: string;
  trademarkSearchContents?: ListTrademarkSearchForInnerResponseBodyTrademarkSearchContents[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      products: 'Products',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trademarkSearchContents: 'TrademarkSearchContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      products: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'string',
      trademarkSearchContents: { 'type': 'array', 'itemType': ListTrademarkSearchForInnerResponseBodyTrademarkSearchContents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSearchForInnerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrademarkSearchForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrademarkSearchForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMeasureDataRequest extends $tea.Model {
  bizType?: string;
  data?: string;
  dataType?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      data: 'Data',
      dataType: 'DataType',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      data: 'string',
      dataType: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMeasureDataResponseBody extends $tea.Model {
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

export class PutMeasureDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutMeasureDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutMeasureDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMeasureReadyFlagRequest extends $tea.Model {
  bizType?: string;
  dataType?: string;
  endTime?: string;
  readyFlag?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      dataType: 'DataType',
      endTime: 'EndTime',
      readyFlag: 'ReadyFlag',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      dataType: 'string',
      endTime: 'string',
      readyFlag: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMeasureReadyFlagResponseBody extends $tea.Model {
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

export class PutMeasureReadyFlagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutMeasureReadyFlagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutMeasureReadyFlagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsRequest extends $tea.Model {
  activityId?: number;
  extendInfo?: string;
  floorIndex?: number;
  mock?: boolean;
  pageIndex?: number;
  pageSize?: number;
  refresh?: boolean;
  umId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      extendInfo: 'ExtendInfo',
      floorIndex: 'FloorIndex',
      mock: 'Mock',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      refresh: 'Refresh',
      umId: 'UmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      extendInfo: 'string',
      floorIndex: 'number',
      mock: 'boolean',
      pageIndex: 'number',
      pageSize: 'number',
      refresh: 'boolean',
      umId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBody extends $tea.Model {
  module?: QueryActivityItemsResponseBodyModule;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: QueryActivityItemsResponseBodyModule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryActivityItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryActivityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliyunUidRequest extends $tea.Model {
  tbUid?: string;
  static names(): { [key: string]: string } {
    return {
      tbUid: 'TbUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tbUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliyunUidResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliyunUidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAliyunUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAliyunUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailItemRequest extends $tea.Model {
  detailConvertType?: string;
  detailId?: string;
  detailType?: string;
  mock?: boolean;
  static names(): { [key: string]: string } {
    return {
      detailConvertType: 'DetailConvertType',
      detailId: 'DetailId',
      detailType: 'DetailType',
      mock: 'Mock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailConvertType: 'string',
      detailId: 'string',
      detailType: 'string',
      mock: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailItemResponseBody extends $tea.Model {
  module?: QueryDetailItemResponseBodyModule;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: QueryDetailItemResponseBodyModule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDetailItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDetailItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRemainResourcesRequest extends $tea.Model {
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

export class QueryRemainResourcesResponseBody extends $tea.Model {
  data?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRemainResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRemainResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRemainResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseSupplementRequest extends $tea.Model {
  supplementId?: number;
  static names(): { [key: string]: string } {
    return {
      supplementId: 'SupplementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplementId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseSupplementResponseBody extends $tea.Model {
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

export class RefuseSupplementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefuseSupplementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefuseSupplementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectExpertSolutionRequest extends $tea.Model {
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

export class RejectExpertSolutionResponseBody extends $tea.Model {
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

export class RejectExpertSolutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RejectExpertSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RejectExpertSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApplicantRequest extends $tea.Model {
  applicantId?: number;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApplicantResponseBody extends $tea.Model {
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

export class RemoveApplicantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSearchConditionRequest extends $tea.Model {
  conditionContent?: string;
  sessionId?: string;
  tagName?: string;
  type?: number;
  umid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionContent: 'ConditionContent',
      sessionId: 'SessionId',
      tagName: 'TagName',
      type: 'Type',
      umid: 'Umid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionContent: 'string',
      sessionId: 'string',
      tagName: 'string',
      type: 'number',
      umid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSearchConditionResponseBody extends $tea.Model {
  code?: string;
  conditionContent?: string;
  conditionId?: number;
  message?: string;
  requestId?: string;
  sessionId?: string;
  success?: boolean;
  tagName?: string;
  type?: number;
  umid?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      conditionContent: 'ConditionContent',
      conditionId: 'ConditionId',
      message: 'Message',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      success: 'Success',
      tagName: 'TagName',
      type: 'Type',
      umid: 'Umid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      conditionContent: 'string',
      conditionId: 'number',
      message: 'string',
      requestId: 'string',
      sessionId: 'string',
      success: 'boolean',
      tagName: 'string',
      type: 'number',
      umid: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSearchConditionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSearchConditionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSearchConditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTemporaryApplicantRequest extends $tea.Model {
  address?: string;
  applicantId?: number;
  businessLicenceOssKey?: string;
  cardNumber?: string;
  city?: string;
  completeApplicant?: boolean;
  contactAddress?: string;
  contactCity?: string;
  contactCounty?: string;
  contactDistrict?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactZipCode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardOssKey?: string;
  legalNoticeOssKey?: string;
  loaOssKey?: string;
  name?: string;
  passportOssKey?: string;
  principalName?: number;
  province?: string;
  region?: string;
  town?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantId: 'ApplicantId',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
      city: 'City',
      completeApplicant: 'CompleteApplicant',
      contactAddress: 'ContactAddress',
      contactCity: 'ContactCity',
      contactCounty: 'ContactCounty',
      contactDistrict: 'ContactDistrict',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactZipCode: 'ContactZipCode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardOssKey: 'IdCardOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      passportOssKey: 'PassportOssKey',
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
      applicantId: 'number',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
      city: 'string',
      completeApplicant: 'boolean',
      contactAddress: 'string',
      contactCity: 'string',
      contactCounty: 'string',
      contactDistrict: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactZipCode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardOssKey: 'string',
      legalNoticeOssKey: 'string',
      loaOssKey: 'string',
      name: 'string',
      passportOssKey: 'string',
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

export class SaveTemporaryApplicantResponseBody extends $tea.Model {
  applicantId?: number;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'number',
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

export class SaveTemporaryApplicantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveTemporaryApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveTemporaryApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemsRequest extends $tea.Model {
  excludedTags?: string;
  excludedUids?: string;
  feedsType?: boolean;
  intCls?: string;
  keywords?: string;
  mock?: boolean;
  pageIndex?: number;
  pageSize?: number;
  priceLeft?: string;
  priceRight?: string;
  products?: string;
  registerNumber?: string;
  sort?: string;
  sortType?: number;
  tags?: string;
  trademarkNameLength?: number;
  trademarkNameType?: string;
  umId?: string;
  static names(): { [key: string]: string } {
    return {
      excludedTags: 'ExcludedTags',
      excludedUids: 'ExcludedUids',
      feedsType: 'FeedsType',
      intCls: 'IntCls',
      keywords: 'Keywords',
      mock: 'Mock',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      priceLeft: 'PriceLeft',
      priceRight: 'PriceRight',
      products: 'Products',
      registerNumber: 'RegisterNumber',
      sort: 'Sort',
      sortType: 'SortType',
      tags: 'Tags',
      trademarkNameLength: 'TrademarkNameLength',
      trademarkNameType: 'TrademarkNameType',
      umId: 'UmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludedTags: 'string',
      excludedUids: 'string',
      feedsType: 'boolean',
      intCls: 'string',
      keywords: 'string',
      mock: 'boolean',
      pageIndex: 'number',
      pageSize: 'number',
      priceLeft: 'string',
      priceRight: 'string',
      products: 'string',
      registerNumber: 'string',
      sort: 'string',
      sortType: 'number',
      tags: 'string',
      trademarkNameLength: 'number',
      trademarkNameType: 'string',
      umId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemsResponseBody extends $tea.Model {
  module?: SearchItemsResponseBodyModule;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: SearchItemsResponseBodyModule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityRequest extends $tea.Model {
  classifications?: { [key: string]: any };
  limit?: number;
  nameUriList?: SearchSimilarityRequestNameUriList[];
  searchType?: string;
  showDetail?: boolean;
  similarGroups?: { [key: string]: any };
  sorter?: string;
  umid?: string;
  static names(): { [key: string]: string } {
    return {
      classifications: 'Classifications',
      limit: 'Limit',
      nameUriList: 'NameUriList',
      searchType: 'SearchType',
      showDetail: 'ShowDetail',
      similarGroups: 'SimilarGroups',
      sorter: 'Sorter',
      umid: 'Umid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifications: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      limit: 'number',
      nameUriList: { 'type': 'array', 'itemType': SearchSimilarityRequestNameUriList },
      searchType: 'string',
      showDetail: 'boolean',
      similarGroups: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sorter: 'string',
      umid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityShrinkRequest extends $tea.Model {
  classificationsShrink?: string;
  limit?: number;
  nameUriList?: SearchSimilarityShrinkRequestNameUriList[];
  searchType?: string;
  showDetail?: boolean;
  similarGroupsShrink?: string;
  sorter?: string;
  umid?: string;
  static names(): { [key: string]: string } {
    return {
      classificationsShrink: 'Classifications',
      limit: 'Limit',
      nameUriList: 'NameUriList',
      searchType: 'SearchType',
      showDetail: 'ShowDetail',
      similarGroupsShrink: 'SimilarGroups',
      sorter: 'Sorter',
      umid: 'Umid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationsShrink: 'string',
      limit: 'number',
      nameUriList: { 'type': 'array', 'itemType': SearchSimilarityShrinkRequestNameUriList },
      searchType: 'string',
      showDetail: 'boolean',
      similarGroupsShrink: 'string',
      sorter: 'string',
      umid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityResponseBody extends $tea.Model {
  dataList?: SearchSimilarityResponseBodyDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': SearchSimilarityResponseBodyDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchSimilarityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchSimilarityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityListRequest extends $tea.Model {
  classifications?: { [key: string]: any };
  name?: string;
  orderId?: string;
  pageNumber?: number;
  pageSize?: number;
  similarGroups?: { [key: string]: any };
  status?: number;
  successSearchType?: string;
  umid?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      classifications: 'Classifications',
      name: 'Name',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      similarGroups: 'SimilarGroups',
      status: 'Status',
      successSearchType: 'SuccessSearchType',
      umid: 'Umid',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifications: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      orderId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      similarGroups: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'number',
      successSearchType: 'string',
      umid: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityListShrinkRequest extends $tea.Model {
  classificationsShrink?: string;
  name?: string;
  orderId?: string;
  pageNumber?: number;
  pageSize?: number;
  similarGroupsShrink?: string;
  status?: number;
  successSearchType?: string;
  umid?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      classificationsShrink: 'Classifications',
      name: 'Name',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      similarGroupsShrink: 'SimilarGroups',
      status: 'Status',
      successSearchType: 'SuccessSearchType',
      umid: 'Umid',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationsShrink: 'string',
      name: 'string',
      orderId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      similarGroupsShrink: 'string',
      status: 'number',
      successSearchType: 'string',
      umid: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityListResponseBody extends $tea.Model {
  data?: SearchSimilarityListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': SearchSimilarityListResponseBodyData },
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

export class SearchSimilarityListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchSimilarityListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchSimilarityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToUserRequest extends $tea.Model {
  receiverNickName?: string;
  senderNickName?: string;
  templateData?: { [key: string]: any };
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      receiverNickName: 'ReceiverNickName',
      senderNickName: 'SenderNickName',
      templateData: 'TemplateData',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverNickName: 'string',
      senderNickName: 'string',
      templateData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToUserShrinkRequest extends $tea.Model {
  receiverNickName?: string;
  senderNickName?: string;
  templateDataShrink?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      receiverNickName: 'ReceiverNickName',
      senderNickName: 'SenderNickName',
      templateDataShrink: 'TemplateData',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverNickName: 'string',
      senderNickName: 'string',
      templateDataShrink: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToUserResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SendMessageToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendMessageToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendMessageToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementRequest extends $tea.Model {
  content?: string;
  supplementId?: number;
  userFiles?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      supplementId: 'SupplementId',
      userFiles: 'UserFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      supplementId: 'number',
      userFiles: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementShrinkRequest extends $tea.Model {
  content?: string;
  supplementId?: number;
  userFilesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      supplementId: 'SupplementId',
      userFilesShrink: 'UserFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      supplementId: 'number',
      userFilesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementResponseBody extends $tea.Model {
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

export class SubmitSupplementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSupplementResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateApplicantRequest extends $tea.Model {
  address?: string;
  applicantId?: number;
  applicantName?: string;
  authorizationOssKey?: string;
  businessLicenceOssKey?: string;
  cardNumber?: string;
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
  idCardName?: string;
  idCardNumber?: string;
  idCardOssKey?: string;
  legalNoticeOssKey?: string;
  passportOssKey?: string;
  personalType?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      authorizationOssKey: 'AuthorizationOssKey',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      cardNumber: 'CardNumber',
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
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardOssKey: 'IdCardOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      passportOssKey: 'PassportOssKey',
      personalType: 'PersonalType',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applicantId: 'number',
      applicantName: 'string',
      authorizationOssKey: 'string',
      businessLicenceOssKey: 'string',
      cardNumber: 'string',
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
      idCardName: 'string',
      idCardNumber: 'string',
      idCardOssKey: 'string',
      legalNoticeOssKey: 'string',
      passportOssKey: 'string',
      personalType: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicantResponseBody extends $tea.Model {
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

export class UpdateApplicantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateClassificationResponseBodyDataDuplicateSecondaryClassification extends $tea.Model {
  secondaryClassification?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryClassification: 'SecondaryClassification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryClassification: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDuplicateClassificationResponseBodyData extends $tea.Model {
  duplicateSecondaryClassification?: CheckDuplicateClassificationResponseBodyDataDuplicateSecondaryClassification;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      duplicateSecondaryClassification: 'DuplicateSecondaryClassification',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplicateSecondaryClassification: CheckDuplicateClassificationResponseBodyDataDuplicateSecondaryClassification,
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdminTrademarkApplicationResponseBodyApplicant extends $tea.Model {
  address?: string;
  applicantName?: string;
  applicantRegion?: number;
  applicantType?: number;
  auditStatus?: number;
  authorizationUrl?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactZipcode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardUrl?: string;
  legalNoticeUrl?: string;
  passportUrl?: string;
  principalName?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantName: 'ApplicantName',
      applicantRegion: 'ApplicantRegion',
      applicantType: 'ApplicantType',
      auditStatus: 'AuditStatus',
      authorizationUrl: 'AuthorizationUrl',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardUrl: 'IdCardUrl',
      legalNoticeUrl: 'LegalNoticeUrl',
      passportUrl: 'PassportUrl',
      principalName: 'PrincipalName',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applicantName: 'string',
      applicantRegion: 'number',
      applicantType: 'number',
      auditStatus: 'number',
      authorizationUrl: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactZipcode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardUrl: 'string',
      legalNoticeUrl: 'string',
      passportUrl: 'string',
      principalName: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdminTrademarkApplicationResponseBodyFirstClassification extends $tea.Model {
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

export class DescribeAdminTrademarkApplicationResponseBodySupplements extends $tea.Model {
  acceptExpirationDate?: number;
  acceptTime?: number;
  applicationType?: number;
  content?: string;
  officialFile?: string;
  operateTime?: number;
  orderId?: string;
  sbjExpirationDate?: number;
  sendTime?: number;
  serialNumber?: string;
  supplementId?: number;
  supplementStatus?: number;
  trademarkNumber?: string;
  userFiles?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptExpirationDate: 'AcceptExpirationDate',
      acceptTime: 'AcceptTime',
      applicationType: 'ApplicationType',
      content: 'Content',
      officialFile: 'OfficialFile',
      operateTime: 'OperateTime',
      orderId: 'OrderId',
      sbjExpirationDate: 'SbjExpirationDate',
      sendTime: 'SendTime',
      serialNumber: 'SerialNumber',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      trademarkNumber: 'TrademarkNumber',
      userFiles: 'UserFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptExpirationDate: 'number',
      acceptTime: 'number',
      applicationType: 'number',
      content: 'string',
      officialFile: 'string',
      operateTime: 'number',
      orderId: 'string',
      sbjExpirationDate: 'number',
      sendTime: 'number',
      serialNumber: 'string',
      supplementId: 'number',
      supplementStatus: 'number',
      trademarkNumber: 'string',
      userFiles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdminTrademarkApplicationResponseBodyThirdClassifications extends $tea.Model {
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

export class DescribePartnerTrademarkApplicationResponseBodyApplicant extends $tea.Model {
  address?: string;
  applicantName?: string;
  applicantRegion?: number;
  applicantType?: number;
  auditStatus?: number;
  authorizationUrl?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactZipcode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardUrl?: string;
  legalNoticeUrl?: string;
  passportUrl?: string;
  principalName?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantName: 'ApplicantName',
      applicantRegion: 'ApplicantRegion',
      applicantType: 'ApplicantType',
      auditStatus: 'AuditStatus',
      authorizationUrl: 'AuthorizationUrl',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardUrl: 'IdCardUrl',
      legalNoticeUrl: 'LegalNoticeUrl',
      passportUrl: 'PassportUrl',
      principalName: 'PrincipalName',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applicantName: 'string',
      applicantRegion: 'number',
      applicantType: 'number',
      auditStatus: 'number',
      authorizationUrl: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactZipcode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardUrl: 'string',
      legalNoticeUrl: 'string',
      passportUrl: 'string',
      principalName: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePartnerTrademarkApplicationResponseBodyFirstClassification extends $tea.Model {
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

export class DescribePartnerTrademarkApplicationResponseBodySupplements extends $tea.Model {
  acceptExpirationDate?: number;
  acceptTime?: number;
  applicationType?: number;
  content?: string;
  officialFile?: string;
  operateTime?: number;
  orderId?: string;
  sbjExpirationDate?: number;
  sendTime?: number;
  serialNumber?: string;
  supplementId?: number;
  supplementStatus?: number;
  trademarkNumber?: string;
  userFiles?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptExpirationDate: 'AcceptExpirationDate',
      acceptTime: 'AcceptTime',
      applicationType: 'ApplicationType',
      content: 'Content',
      officialFile: 'OfficialFile',
      operateTime: 'OperateTime',
      orderId: 'OrderId',
      sbjExpirationDate: 'SbjExpirationDate',
      sendTime: 'SendTime',
      serialNumber: 'SerialNumber',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      trademarkNumber: 'TrademarkNumber',
      userFiles: 'UserFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptExpirationDate: 'number',
      acceptTime: 'number',
      applicationType: 'number',
      content: 'string',
      officialFile: 'string',
      operateTime: 'number',
      orderId: 'string',
      sbjExpirationDate: 'number',
      sendTime: 'number',
      serialNumber: 'string',
      supplementId: 'number',
      supplementStatus: 'number',
      trademarkNumber: 'string',
      userFiles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePartnerTrademarkApplicationResponseBodyThirdClassifications extends $tea.Model {
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

export class DescribeSupplementResponseBodyUserFiles extends $tea.Model {
  userFile?: string[];
  static names(): { [key: string]: string } {
    return {
      userFile: 'UserFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userFile: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkApplicationResponseBodyApplicant extends $tea.Model {
  address?: string;
  applicantName?: string;
  applicantRegion?: number;
  applicantType?: number;
  auditStatus?: number;
  authorizationUrl?: string;
  businessLicenceUrl?: string;
  cardNumber?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactName?: string;
  contactNumber?: string;
  contactZipcode?: string;
  country?: string;
  EAddress?: string;
  EName?: string;
  idCardName?: string;
  idCardNumber?: string;
  idCardUrl?: string;
  legalNoticeUrl?: string;
  passportUrl?: string;
  personalType?: number;
  principalName?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      applicantName: 'ApplicantName',
      applicantRegion: 'ApplicantRegion',
      applicantType: 'ApplicantType',
      auditStatus: 'AuditStatus',
      authorizationUrl: 'AuthorizationUrl',
      businessLicenceUrl: 'BusinessLicenceUrl',
      cardNumber: 'CardNumber',
      contactAddress: 'ContactAddress',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactZipcode: 'ContactZipcode',
      country: 'Country',
      EAddress: 'EAddress',
      EName: 'EName',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardUrl: 'IdCardUrl',
      legalNoticeUrl: 'LegalNoticeUrl',
      passportUrl: 'PassportUrl',
      personalType: 'PersonalType',
      principalName: 'PrincipalName',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      applicantName: 'string',
      applicantRegion: 'number',
      applicantType: 'number',
      auditStatus: 'number',
      authorizationUrl: 'string',
      businessLicenceUrl: 'string',
      cardNumber: 'string',
      contactAddress: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactZipcode: 'string',
      country: 'string',
      EAddress: 'string',
      EName: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardUrl: 'string',
      legalNoticeUrl: 'string',
      passportUrl: 'string',
      personalType: 'number',
      principalName: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkApplicationResponseBodyFirstClassification extends $tea.Model {
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

export class DescribeTrademarkApplicationResponseBodyFlags extends $tea.Model {
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

export class DescribeTrademarkApplicationResponseBodyJudgeResultUrls extends $tea.Model {
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

export class DescribeTrademarkApplicationResponseBodyReceiptUrls extends $tea.Model {
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

export class DescribeTrademarkApplicationResponseBodySupplementsSupplementUserFiles extends $tea.Model {
  userFile?: string[];
  static names(): { [key: string]: string } {
    return {
      userFile: 'UserFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userFile: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkApplicationResponseBodySupplementsSupplement extends $tea.Model {
  acceptExpirationDate?: number;
  acceptTime?: number;
  applicationType?: number;
  content?: string;
  officialFile?: string;
  operateTime?: number;
  orderId?: string;
  sbjExpirationDate?: number;
  sendTime?: number;
  serialNumber?: string;
  supplementId?: number;
  supplementStatus?: number;
  trademarkNumber?: string;
  userFiles?: DescribeTrademarkApplicationResponseBodySupplementsSupplementUserFiles;
  static names(): { [key: string]: string } {
    return {
      acceptExpirationDate: 'AcceptExpirationDate',
      acceptTime: 'AcceptTime',
      applicationType: 'ApplicationType',
      content: 'Content',
      officialFile: 'OfficialFile',
      operateTime: 'OperateTime',
      orderId: 'OrderId',
      sbjExpirationDate: 'SbjExpirationDate',
      sendTime: 'SendTime',
      serialNumber: 'SerialNumber',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      trademarkNumber: 'TrademarkNumber',
      userFiles: 'UserFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptExpirationDate: 'number',
      acceptTime: 'number',
      applicationType: 'number',
      content: 'string',
      officialFile: 'string',
      operateTime: 'number',
      orderId: 'string',
      sbjExpirationDate: 'number',
      sendTime: 'number',
      serialNumber: 'string',
      supplementId: 'number',
      supplementStatus: 'number',
      trademarkNumber: 'string',
      userFiles: DescribeTrademarkApplicationResponseBodySupplementsSupplementUserFiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkApplicationResponseBodySupplements extends $tea.Model {
  supplement?: DescribeTrademarkApplicationResponseBodySupplementsSupplement[];
  static names(): { [key: string]: string } {
    return {
      supplement: 'Supplement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplement: { 'type': 'array', 'itemType': DescribeTrademarkApplicationResponseBodySupplementsSupplement },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkApplicationResponseBodyThirdClassificationsThirdClassification extends $tea.Model {
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

export class DescribeTrademarkApplicationResponseBodyThirdClassifications extends $tea.Model {
  thirdClassification?: DescribeTrademarkApplicationResponseBodyThirdClassificationsThirdClassification[];
  static names(): { [key: string]: string } {
    return {
      thirdClassification: 'ThirdClassification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdClassification: { 'type': 'array', 'itemType': DescribeTrademarkApplicationResponseBodyThirdClassificationsThirdClassification },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkDetailForInnerResponseBodyFlowList extends $tea.Model {
  date?: string;
  procedureCode?: string;
  procedureDate?: string;
  procedureName?: string;
  procedureResult?: string;
  procedureStep?: string;
  registrationNumber?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      procedureCode: 'ProcedureCode',
      procedureDate: 'ProcedureDate',
      procedureName: 'ProcedureName',
      procedureResult: 'ProcedureResult',
      procedureStep: 'ProcedureStep',
      registrationNumber: 'RegistrationNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      procedureCode: 'string',
      procedureDate: 'string',
      procedureName: 'string',
      procedureResult: 'string',
      procedureStep: 'string',
      registrationNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrademarkDetailForInnerResponseBodyNoticeList extends $tea.Model {
  annDate?: string;
  annId?: string;
  annNum?: string;
  annTypeCode?: string;
  annTypeName?: string;
  applicant?: string;
  date?: string;
  imageUrl?: string;
  originalImageUrl?: string;
  pageNo?: string;
  reactNum?: string;
  registrationNumber?: string;
  trademarkName?: string;
  static names(): { [key: string]: string } {
    return {
      annDate: 'AnnDate',
      annId: 'AnnId',
      annNum: 'AnnNum',
      annTypeCode: 'AnnTypeCode',
      annTypeName: 'AnnTypeName',
      applicant: 'Applicant',
      date: 'Date',
      imageUrl: 'ImageUrl',
      originalImageUrl: 'OriginalImageUrl',
      pageNo: 'PageNo',
      reactNum: 'ReactNum',
      registrationNumber: 'RegistrationNumber',
      trademarkName: 'TrademarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annDate: 'string',
      annId: 'string',
      annNum: 'string',
      annTypeCode: 'string',
      annTypeName: 'string',
      applicant: 'string',
      date: 'string',
      imageUrl: 'string',
      originalImageUrl: 'string',
      pageNo: 'string',
      reactNum: 'string',
      registrationNumber: 'string',
      trademarkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderConfirmUrlRequestItems extends $tea.Model {
  itemCode?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemCode: 'ItemCode',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCode: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminTrademarkApplicationLogsResponseBodyTrademarkApplicationLogs extends $tea.Model {
  bizId?: string;
  bizStatus?: number;
  note?: string;
  operateTime?: number;
  operateType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizStatus: 'BizStatus',
      note: 'Note',
      operateTime: 'OperateTime',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizStatus: 'number',
      note: 'string',
      operateTime: 'number',
      operateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminTrademarkApplicationsResponseBodyTrademarkApplicationsFirstClassification extends $tea.Model {
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

export class ListAdminTrademarkApplicationsResponseBodyTrademarkApplicationsThirdClassification extends $tea.Model {
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

export class ListAdminTrademarkApplicationsResponseBodyTrademarkApplications extends $tea.Model {
  applicantId?: number;
  applicantName?: string;
  applicationStatus?: number;
  applicationType?: number;
  authorizationUrl?: string;
  bizId?: string;
  createTime?: number;
  firstClassification?: ListAdminTrademarkApplicationsResponseBodyTrademarkApplicationsFirstClassification;
  flags?: string[];
  note?: string;
  orderId?: string;
  orderPrice?: number;
  principalName?: number;
  servicePrice?: number;
  supplementId?: number;
  supplementStatus?: number;
  systemVersion?: string;
  thirdClassification?: ListAdminTrademarkApplicationsResponseBodyTrademarkApplicationsThirdClassification[];
  totalPrice?: number;
  trademarkIcon?: string;
  trademarkName?: string;
  trademarkNumber?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      applicationStatus: 'ApplicationStatus',
      applicationType: 'ApplicationType',
      authorizationUrl: 'AuthorizationUrl',
      bizId: 'BizId',
      createTime: 'CreateTime',
      firstClassification: 'FirstClassification',
      flags: 'Flags',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalName: 'PrincipalName',
      servicePrice: 'ServicePrice',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      systemVersion: 'SystemVersion',
      thirdClassification: 'ThirdClassification',
      totalPrice: 'TotalPrice',
      trademarkIcon: 'TrademarkIcon',
      trademarkName: 'TrademarkName',
      trademarkNumber: 'TrademarkNumber',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'number',
      applicantName: 'string',
      applicationStatus: 'number',
      applicationType: 'number',
      authorizationUrl: 'string',
      bizId: 'string',
      createTime: 'number',
      firstClassification: ListAdminTrademarkApplicationsResponseBodyTrademarkApplicationsFirstClassification,
      flags: { 'type': 'array', 'itemType': 'string' },
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalName: 'number',
      servicePrice: 'number',
      supplementId: 'number',
      supplementStatus: 'number',
      systemVersion: 'string',
      thirdClassification: { 'type': 'array', 'itemType': ListAdminTrademarkApplicationsResponseBodyTrademarkApplicationsThirdClassification },
      totalPrice: 'number',
      trademarkIcon: 'string',
      trademarkName: 'string',
      trademarkNumber: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicantsResponseBodyApplicantsApplicant extends $tea.Model {
  applicantId?: number;
  applicantName?: string;
  applicantRegion?: number;
  applicantType?: number;
  applicantVersion?: string;
  auditStatus?: number;
  authorizationAuditStatus?: number;
  authorizationUrl?: string;
  cardNumber?: string;
  contactName?: string;
  principalName?: number;
  systemVersion?: string;
  validDate?: number;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      applicantRegion: 'ApplicantRegion',
      applicantType: 'ApplicantType',
      applicantVersion: 'ApplicantVersion',
      auditStatus: 'AuditStatus',
      authorizationAuditStatus: 'AuthorizationAuditStatus',
      authorizationUrl: 'AuthorizationUrl',
      cardNumber: 'CardNumber',
      contactName: 'ContactName',
      principalName: 'PrincipalName',
      systemVersion: 'SystemVersion',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'number',
      applicantName: 'string',
      applicantRegion: 'number',
      applicantType: 'number',
      applicantVersion: 'string',
      auditStatus: 'number',
      authorizationAuditStatus: 'number',
      authorizationUrl: 'string',
      cardNumber: 'string',
      contactName: 'string',
      principalName: 'number',
      systemVersion: 'string',
      validDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicantsResponseBodyApplicants extends $tea.Model {
  applicant?: ListApplicantsResponseBodyApplicantsApplicant[];
  static names(): { [key: string]: string } {
    return {
      applicant: 'Applicant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: { 'type': 'array', 'itemType': ListApplicantsResponseBodyApplicantsApplicant },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreasResponseBodyDatasSubArea extends $tea.Model {
  code?: string;
  name?: string;
  parentCode?: string;
  sortNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      parentCode: 'ParentCode',
      sortNum: 'SortNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      parentCode: 'string',
      sortNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreasResponseBodyDatas extends $tea.Model {
  code?: string;
  name?: string;
  parentCode?: string;
  sortNum?: number;
  subArea?: ListAreasResponseBodyDatasSubArea[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      parentCode: 'ParentCode',
      sortNum: 'SortNum',
      subArea: 'SubArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      parentCode: 'string',
      sortNum: 'number',
      subArea: { 'type': 'array', 'itemType': ListAreasResponseBodyDatasSubArea },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationConditionsResponseBodyData extends $tea.Model {
  conditionContent?: string;
  createTime?: number;
  id?: number;
  sessionId?: string;
  tagName?: string;
  type?: number;
  umid?: string;
  updateTime?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      conditionContent: 'ConditionContent',
      createTime: 'CreateTime',
      id: 'Id',
      sessionId: 'SessionId',
      tagName: 'TagName',
      type: 'Type',
      umid: 'Umid',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionContent: 'string',
      createTime: 'number',
      id: 'number',
      sessionId: 'string',
      tagName: 'string',
      type: 'number',
      umid: 'string',
      updateTime: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationsResponseBodyClassificationsClassification extends $tea.Model {
  classificationCode?: string;
  classificationName?: string;
  id?: number;
  level?: number;
  officialCode?: string;
  parentCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      classificationName: 'ClassificationName',
      id: 'Id',
      level: 'Level',
      officialCode: 'OfficialCode',
      parentCode: 'ParentCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      classificationName: 'string',
      id: 'number',
      level: 'number',
      officialCode: 'string',
      parentCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationsResponseBodyClassifications extends $tea.Model {
  classification?: ListClassificationsResponseBodyClassificationsClassification[];
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: { 'type': 'array', 'itemType': ListClassificationsResponseBodyClassificationsClassification },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationLogsResponseBodyTrademarkApplicationLogsTrademarkApplicationLog extends $tea.Model {
  bizId?: string;
  bizStatus?: number;
  note?: string;
  operateTime?: number;
  operateType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizStatus: 'BizStatus',
      note: 'Note',
      operateTime: 'OperateTime',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizStatus: 'number',
      note: 'string',
      operateTime: 'number',
      operateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationLogsResponseBodyTrademarkApplicationLogs extends $tea.Model {
  trademarkApplicationLog?: ListTrademarkApplicationLogsResponseBodyTrademarkApplicationLogsTrademarkApplicationLog[];
  static names(): { [key: string]: string } {
    return {
      trademarkApplicationLog: 'TrademarkApplicationLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademarkApplicationLog: { 'type': 'array', 'itemType': ListTrademarkApplicationLogsResponseBodyTrademarkApplicationLogsTrademarkApplicationLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationFirstClassification extends $tea.Model {
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

export class ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationFlags extends $tea.Model {
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

export class ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationThirdClassificationThirdClassification extends $tea.Model {
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

export class ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationThirdClassification extends $tea.Model {
  thirdClassification?: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationThirdClassificationThirdClassification[];
  static names(): { [key: string]: string } {
    return {
      thirdClassification: 'ThirdClassification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdClassification: { 'type': 'array', 'itemType': ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationThirdClassificationThirdClassification },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplication extends $tea.Model {
  agreementId?: string;
  applicantId?: number;
  applicantName?: string;
  applicationStatus?: number;
  applicationType?: number;
  authorizationUrl?: string;
  bizId?: string;
  createTime?: number;
  firstClassification?: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationFirstClassification;
  flags?: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationFlags;
  note?: string;
  orderId?: string;
  orderPrice?: number;
  principalName?: number;
  servicePrice?: number;
  supplementId?: number;
  supplementStatus?: number;
  systemVersion?: string;
  thirdClassification?: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationThirdClassification;
  totalPrice?: number;
  trademarkIcon?: string;
  trademarkName?: string;
  trademarkNumber?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agreementId: 'AgreementId',
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      applicationStatus: 'ApplicationStatus',
      applicationType: 'ApplicationType',
      authorizationUrl: 'AuthorizationUrl',
      bizId: 'BizId',
      createTime: 'CreateTime',
      firstClassification: 'FirstClassification',
      flags: 'Flags',
      note: 'Note',
      orderId: 'OrderId',
      orderPrice: 'OrderPrice',
      principalName: 'PrincipalName',
      servicePrice: 'ServicePrice',
      supplementId: 'SupplementId',
      supplementStatus: 'SupplementStatus',
      systemVersion: 'SystemVersion',
      thirdClassification: 'ThirdClassification',
      totalPrice: 'TotalPrice',
      trademarkIcon: 'TrademarkIcon',
      trademarkName: 'TrademarkName',
      trademarkNumber: 'TrademarkNumber',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementId: 'string',
      applicantId: 'number',
      applicantName: 'string',
      applicationStatus: 'number',
      applicationType: 'number',
      authorizationUrl: 'string',
      bizId: 'string',
      createTime: 'number',
      firstClassification: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationFirstClassification,
      flags: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationFlags,
      note: 'string',
      orderId: 'string',
      orderPrice: 'number',
      principalName: 'number',
      servicePrice: 'number',
      supplementId: 'number',
      supplementStatus: 'number',
      systemVersion: 'string',
      thirdClassification: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplicationThirdClassification,
      totalPrice: 'number',
      trademarkIcon: 'string',
      trademarkName: 'string',
      trademarkNumber: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkApplicationsResponseBodyTrademarkApplications extends $tea.Model {
  trademarkApplication?: ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplication[];
  static names(): { [key: string]: string } {
    return {
      trademarkApplication: 'TrademarkApplication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademarkApplication: { 'type': 'array', 'itemType': ListTrademarkApplicationsResponseBodyTrademarkApplicationsTrademarkApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrademarkSearchForInnerResponseBodyTrademarkSearchContents extends $tea.Model {
  applyDate?: string;
  classification?: string;
  exclusiveDateLimit?: string;
  id?: number;
  image?: string;
  lastProcedureStatus?: string;
  name?: string;
  nameCharSection?: string;
  nameOrigin?: string;
  nameSimplifiedChinese?: string;
  nameSort?: string;
  onSale?: string;
  ownerAddress?: string;
  ownerEnAddress?: string;
  ownerEnName?: string;
  ownerName?: string;
  preAnnDate?: string;
  preAnnNum?: string;
  product?: string;
  productDel?: string[];
  productDescription?: string;
  regAnnNum?: string;
  registrationNumber?: string;
  share?: string;
  similarGroupDel?: string[];
  uid?: string;
  wellKnow?: string;
  static names(): { [key: string]: string } {
    return {
      applyDate: 'ApplyDate',
      classification: 'Classification',
      exclusiveDateLimit: 'ExclusiveDateLimit',
      id: 'Id',
      image: 'Image',
      lastProcedureStatus: 'LastProcedureStatus',
      name: 'Name',
      nameCharSection: 'NameCharSection',
      nameOrigin: 'NameOrigin',
      nameSimplifiedChinese: 'NameSimplifiedChinese',
      nameSort: 'NameSort',
      onSale: 'OnSale',
      ownerAddress: 'OwnerAddress',
      ownerEnAddress: 'OwnerEnAddress',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      preAnnDate: 'PreAnnDate',
      preAnnNum: 'PreAnnNum',
      product: 'Product',
      productDel: 'ProductDel',
      productDescription: 'ProductDescription',
      regAnnNum: 'RegAnnNum',
      registrationNumber: 'RegistrationNumber',
      share: 'Share',
      similarGroupDel: 'SimilarGroupDel',
      uid: 'Uid',
      wellKnow: 'WellKnow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDate: 'string',
      classification: 'string',
      exclusiveDateLimit: 'string',
      id: 'number',
      image: 'string',
      lastProcedureStatus: 'string',
      name: 'string',
      nameCharSection: 'string',
      nameOrigin: 'string',
      nameSimplifiedChinese: 'string',
      nameSort: 'string',
      onSale: 'string',
      ownerAddress: 'string',
      ownerEnAddress: 'string',
      ownerEnName: 'string',
      ownerName: 'string',
      preAnnDate: 'string',
      preAnnNum: 'string',
      product: 'string',
      productDel: { 'type': 'array', 'itemType': 'string' },
      productDescription: 'string',
      regAnnNum: 'string',
      registrationNumber: 'string',
      share: 'string',
      similarGroupDel: { 'type': 'array', 'itemType': 'string' },
      uid: 'string',
      wellKnow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloorSubTitlesSubFloor extends $tea.Model {
  icon?: string;
  name?: string;
  title?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      name: 'Name',
      title: 'Title',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      name: 'string',
      title: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloorSubTitles extends $tea.Model {
  subFloor?: QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloorSubTitlesSubFloor[];
  static names(): { [key: string]: string } {
    return {
      subFloor: 'subFloor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subFloor: { 'type': 'array', 'itemType': QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloorSubTitlesSubFloor },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloor extends $tea.Model {
  icon?: string;
  index?: number;
  name?: string;
  subTitles?: QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloorSubTitles;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      index: 'Index',
      name: 'Name',
      subTitles: 'SubTitles',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      index: 'number',
      name: 'string',
      subTitles: QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloorSubTitles,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyModuleFloorDisplayInfos extends $tea.Model {
  floor?: QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloor[];
  static names(): { [key: string]: string } {
    return {
      floor: 'floor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      floor: { 'type': 'array', 'itemType': QueryActivityItemsResponseBodyModuleFloorDisplayInfosFloor },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyModule extends $tea.Model {
  data?: string;
  floorDisplayInfos?: QueryActivityItemsResponseBodyModuleFloorDisplayInfos;
  floorItems?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      floorDisplayInfos: 'FloorDisplayInfos',
      floorItems: 'FloorItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      floorDisplayInfos: QueryActivityItemsResponseBodyModuleFloorDisplayInfos,
      floorItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailItemResponseBodyModuleAttributesAttribute extends $tea.Model {
  name?: string;
  title?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      title: 'Title',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      title: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailItemResponseBodyModuleAttributes extends $tea.Model {
  attribute?: QueryDetailItemResponseBodyModuleAttributesAttribute[];
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'array', 'itemType': QueryDetailItemResponseBodyModuleAttributesAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailItemResponseBodyModuleDetailPicUrl extends $tea.Model {
  picUlr?: string[];
  static names(): { [key: string]: string } {
    return {
      picUlr: 'picUlr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUlr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailItemResponseBodyModule extends $tea.Model {
  attributes?: QueryDetailItemResponseBodyModuleAttributes;
  detailDescription?: string;
  detailObjectJson?: string;
  detailPagePicUrl?: string;
  detailPicUrl?: QueryDetailItemResponseBodyModuleDetailPicUrl;
  label?: string;
  mainPicUrl?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      detailDescription: 'DetailDescription',
      detailObjectJson: 'DetailObjectJson',
      detailPagePicUrl: 'DetailPagePicUrl',
      detailPicUrl: 'DetailPicUrl',
      label: 'Label',
      mainPicUrl: 'MainPicUrl',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: QueryDetailItemResponseBodyModuleAttributes,
      detailDescription: 'string',
      detailObjectJson: 'string',
      detailPagePicUrl: 'string',
      detailPicUrl: QueryDetailItemResponseBodyModuleDetailPicUrl,
      label: 'string',
      mainPicUrl: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemsResponseBodyModuleDateItem extends $tea.Model {
  detailViewObjectSourceDatum?: string;
  detailViewObjectSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      detailViewObjectSourceDatum: 'DetailViewObjectSourceDatum',
      detailViewObjectSourceType: 'DetailViewObjectSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailViewObjectSourceDatum: 'string',
      detailViewObjectSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemsResponseBodyModuleDate extends $tea.Model {
  item?: SearchItemsResponseBodyModuleDateItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': SearchItemsResponseBodyModuleDateItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemsResponseBodyModule extends $tea.Model {
  currentPageNum?: number;
  date?: SearchItemsResponseBodyModuleDate;
  pageSize?: number;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      date: 'Date',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      date: SearchItemsResponseBodyModuleDate,
      pageSize: 'number',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityRequestNameUriList extends $tea.Model {
  name?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityShrinkRequestNameUriList extends $tea.Model {
  name?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityResponseBodyDataListClassificationSimilarityListSimilarGroupListDetailList extends $tea.Model {
  code?: string;
  name?: string;
  rate?: number;
  tmNumber?: string;
  uid?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      rate: 'Rate',
      tmNumber: 'TmNumber',
      uid: 'Uid',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      rate: 'number',
      tmNumber: 'string',
      uid: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityResponseBodyDataListClassificationSimilarityListSimilarGroupList extends $tea.Model {
  detailList?: SearchSimilarityResponseBodyDataListClassificationSimilarityListSimilarGroupListDetailList[];
  rate?: number;
  similarGroup?: string;
  similarGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      rate: 'Rate',
      similarGroup: 'SimilarGroup',
      similarGroupName: 'SimilarGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': SearchSimilarityResponseBodyDataListClassificationSimilarityListSimilarGroupListDetailList },
      rate: 'number',
      similarGroup: 'string',
      similarGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityResponseBodyDataListClassificationSimilarityList extends $tea.Model {
  classification?: number;
  classificationName?: string;
  rate?: number;
  similarGroupList?: SearchSimilarityResponseBodyDataListClassificationSimilarityListSimilarGroupList[];
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      classificationName: 'ClassificationName',
      rate: 'Rate',
      similarGroupList: 'SimilarGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'number',
      classificationName: 'string',
      rate: 'number',
      similarGroupList: { 'type': 'array', 'itemType': SearchSimilarityResponseBodyDataListClassificationSimilarityListSimilarGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityResponseBodyDataList extends $tea.Model {
  classificationSimilarityList?: SearchSimilarityResponseBodyDataListClassificationSimilarityList[];
  name?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      classificationSimilarityList: 'ClassificationSimilarityList',
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationSimilarityList: { 'type': 'array', 'itemType': SearchSimilarityResponseBodyDataListClassificationSimilarityList },
      name: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarityListResponseBodyData extends $tea.Model {
  applyDate?: string;
  classification?: string;
  exclusiveDateLimit?: string;
  id?: number;
  image?: string;
  lastProcedureStatus?: string;
  name?: string;
  onSale?: number;
  ownerAddress?: string;
  ownerEnAddress?: string;
  ownerEnName?: string;
  ownerName?: string;
  preAnnDate?: string;
  preAnnNum?: string;
  product?: string;
  productDesc?: string;
  regAnnDate?: string;
  regAnnNum?: string;
  registrationNumber?: string;
  share?: string;
  status?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      applyDate: 'ApplyDate',
      classification: 'Classification',
      exclusiveDateLimit: 'ExclusiveDateLimit',
      id: 'Id',
      image: 'Image',
      lastProcedureStatus: 'LastProcedureStatus',
      name: 'Name',
      onSale: 'OnSale',
      ownerAddress: 'OwnerAddress',
      ownerEnAddress: 'OwnerEnAddress',
      ownerEnName: 'OwnerEnName',
      ownerName: 'OwnerName',
      preAnnDate: 'PreAnnDate',
      preAnnNum: 'PreAnnNum',
      product: 'Product',
      productDesc: 'ProductDesc',
      regAnnDate: 'RegAnnDate',
      regAnnNum: 'RegAnnNum',
      registrationNumber: 'RegistrationNumber',
      share: 'Share',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDate: 'string',
      classification: 'string',
      exclusiveDateLimit: 'string',
      id: 'number',
      image: 'string',
      lastProcedureStatus: 'string',
      name: 'string',
      onSale: 'number',
      ownerAddress: 'string',
      ownerEnAddress: 'string',
      ownerEnName: 'string',
      ownerName: 'string',
      preAnnDate: 'string',
      preAnnNum: 'string',
      product: 'string',
      productDesc: 'string',
      regAnnDate: 'string',
      regAnnNum: 'string',
      registrationNumber: 'string',
      share: 'string',
      status: 'string',
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

  async bindApplicantWithOptions(request: BindApplicantRequest, runtime: $Util.RuntimeOptions): Promise<BindApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
    }

    if (!Util.isUnset(request.authorizationOssKey)) {
      query["AuthorizationOssKey"] = request.authorizationOssKey;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindApplicant",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindApplicantResponse>(await this.callApi(params, req, runtime), new BindApplicantResponse({}));
  }

  async bindApplicant(request: BindApplicantRequest): Promise<BindApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindApplicantWithOptions(request, runtime);
  }

  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrder",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderResponse>(await this.callApi(params, req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  async checkAuthorizationLetterWithOptions(request: CheckAuthorizationLetterRequest, runtime: $Util.RuntimeOptions): Promise<CheckAuthorizationLetterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantType)) {
      query["ApplicantType"] = request.applicantType;
    }

    if (!Util.isUnset(request.color)) {
      query["Color"] = request.color;
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAuthorizationLetter",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAuthorizationLetterResponse>(await this.callApi(params, req, runtime), new CheckAuthorizationLetterResponse({}));
  }

  async checkAuthorizationLetter(request: CheckAuthorizationLetterRequest): Promise<CheckAuthorizationLetterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAuthorizationLetterWithOptions(request, runtime);
  }

  async checkBizAvailableWithOptions(request: CheckBizAvailableRequest, runtime: $Util.RuntimeOptions): Promise<CheckBizAvailableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.biz)) {
      query["Biz"] = request.biz;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckBizAvailable",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckBizAvailableResponse>(await this.callApi(params, req, runtime), new CheckBizAvailableResponse({}));
  }

  async checkBizAvailable(request: CheckBizAvailableRequest): Promise<CheckBizAvailableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkBizAvailableWithOptions(request, runtime);
  }

  async checkDuplicateApplicantRiskWithOptions(request: CheckDuplicateApplicantRiskRequest, runtime: $Util.RuntimeOptions): Promise<CheckDuplicateApplicantRiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantName)) {
      query["ApplicantName"] = request.applicantName;
    }

    if (!Util.isUnset(request.eventSceneType)) {
      query["EventSceneType"] = request.eventSceneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDuplicateApplicantRisk",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDuplicateApplicantRiskResponse>(await this.callApi(params, req, runtime), new CheckDuplicateApplicantRiskResponse({}));
  }

  async checkDuplicateApplicantRisk(request: CheckDuplicateApplicantRiskRequest): Promise<CheckDuplicateApplicantRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDuplicateApplicantRiskWithOptions(request, runtime);
  }

  async checkDuplicateClassificationWithOptions(request: CheckDuplicateClassificationRequest, runtime: $Util.RuntimeOptions): Promise<CheckDuplicateClassificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.eventSceneType)) {
      query["EventSceneType"] = request.eventSceneType;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDuplicateClassification",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDuplicateClassificationResponse>(await this.callApi(params, req, runtime), new CheckDuplicateClassificationResponse({}));
  }

  async checkDuplicateClassification(request: CheckDuplicateClassificationRequest): Promise<CheckDuplicateClassificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDuplicateClassificationWithOptions(request, runtime);
  }

  async checkDuplicateTrademarkWithOptions(request: CheckDuplicateTrademarkRequest, runtime: $Util.RuntimeOptions): Promise<CheckDuplicateTrademarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.eventSceneType)) {
      query["EventSceneType"] = request.eventSceneType;
    }

    if (!Util.isUnset(request.materialName)) {
      query["MaterialName"] = request.materialName;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDuplicateTrademark",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDuplicateTrademarkResponse>(await this.callApi(params, req, runtime), new CheckDuplicateTrademarkResponse({}));
  }

  async checkDuplicateTrademark(request: CheckDuplicateTrademarkRequest): Promise<CheckDuplicateTrademarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDuplicateTrademarkWithOptions(request, runtime);
  }

  async checkMaterialValidityWithOptions(request: CheckMaterialValidityRequest, runtime: $Util.RuntimeOptions): Promise<CheckMaterialValidityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessLicenseOssKey)) {
      query["BusinessLicenseOssKey"] = request.businessLicenseOssKey;
    }

    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
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

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.materialRegion)) {
      query["MaterialRegion"] = request.materialRegion;
    }

    if (!Util.isUnset(request.materialType)) {
      query["MaterialType"] = request.materialType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckMaterialValidity",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMaterialValidityResponse>(await this.callApi(params, req, runtime), new CheckMaterialValidityResponse({}));
  }

  async checkMaterialValidity(request: CheckMaterialValidityRequest): Promise<CheckMaterialValidityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMaterialValidityWithOptions(request, runtime);
  }

  async checkTrademarkNameWithOptions(request: CheckTrademarkNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckTrademarkNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventSceneType)) {
      query["EventSceneType"] = request.eventSceneType;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckTrademarkName",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckTrademarkNameResponse>(await this.callApi(params, req, runtime), new CheckTrademarkNameResponse({}));
  }

  async checkTrademarkName(request: CheckTrademarkNameRequest): Promise<CheckTrademarkNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTrademarkNameWithOptions(request, runtime);
  }

  async closeTrademarkApplicationWithOptions(request: CloseTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CloseTrademarkApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseTrademarkApplication",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseTrademarkApplicationResponse>(await this.callApi(params, req, runtime), new CloseTrademarkApplicationResponse({}));
  }

  async closeTrademarkApplication(request: CloseTrademarkApplicationRequest): Promise<CloseTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeTrademarkApplicationWithOptions(request, runtime);
  }

  async combineAuthorizationLetterWithOptions(request: CombineAuthorizationLetterRequest, runtime: $Util.RuntimeOptions): Promise<CombineAuthorizationLetterResponse> {
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
      action: "CombineAuthorizationLetter",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CombineAuthorizationLetterResponse>(await this.callApi(params, req, runtime), new CombineAuthorizationLetterResponse({}));
  }

  async combineAuthorizationLetter(request: CombineAuthorizationLetterRequest): Promise<CombineAuthorizationLetterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.combineAuthorizationLetterWithOptions(request, runtime);
  }

  async complementTrademarkApplicationWithOptions(request: ComplementTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ComplementTrademarkApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agreementId)) {
      query["AgreementId"] = request.agreementId;
    }

    if (!Util.isUnset(request.authorizationOssKey)) {
      query["AuthorizationOssKey"] = request.authorizationOssKey;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.isBlackIcon)) {
      query["IsBlackIcon"] = request.isBlackIcon;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    if (!Util.isUnset(request.orderData)) {
      query["OrderData"] = request.orderData;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.trademarkComment)) {
      query["TrademarkComment"] = request.trademarkComment;
    }

    if (!Util.isUnset(request.trademarkIconOssKey)) {
      query["TrademarkIconOssKey"] = request.trademarkIconOssKey;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    if (!Util.isUnset(request.trademarkNameType)) {
      query["TrademarkNameType"] = request.trademarkNameType;
    }

    if (!Util.isUnset(request.trademarkType)) {
      query["TrademarkType"] = request.trademarkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ComplementTrademarkApplication",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ComplementTrademarkApplicationResponse>(await this.callApi(params, req, runtime), new ComplementTrademarkApplicationResponse({}));
  }

  async complementTrademarkApplication(request: ComplementTrademarkApplicationRequest): Promise<ComplementTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.complementTrademarkApplicationWithOptions(request, runtime);
  }

  async confirmExpertSolutionWithOptions(request: ConfirmExpertSolutionRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmExpertSolutionResponse> {
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
      action: "ConfirmExpertSolution",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmExpertSolutionResponse>(await this.callApi(params, req, runtime), new ConfirmExpertSolutionResponse({}));
  }

  async confirmExpertSolution(request: ConfirmExpertSolutionRequest): Promise<ConfirmExpertSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmExpertSolutionWithOptions(request, runtime);
  }

  async createApplicantWithOptions(request: CreateApplicantRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.applicantName)) {
      query["ApplicantName"] = request.applicantName;
    }

    if (!Util.isUnset(request.applicantRegion)) {
      query["ApplicantRegion"] = request.applicantRegion;
    }

    if (!Util.isUnset(request.applicantType)) {
      query["ApplicantType"] = request.applicantType;
    }

    if (!Util.isUnset(request.authorizationOssKey)) {
      query["AuthorizationOssKey"] = request.authorizationOssKey;
    }

    if (!Util.isUnset(request.businessLicenceOssKey)) {
      query["BusinessLicenceOssKey"] = request.businessLicenceOssKey;
    }

    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicant",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicantResponse>(await this.callApi(params, req, runtime), new CreateApplicantResponse({}));
  }

  async createApplicant(request: CreateApplicantRequest): Promise<CreateApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicantWithOptions(request, runtime);
  }

  async createCommodityOrderWithOptions(tmpReq: CreateCommodityOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCommodityOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCommodityOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!Util.isUnset(tmpReq.orderParams)) {
      request.orderParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderParams, "OrderParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.componentsShrink)) {
      query["Components"] = request.componentsShrink;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderParamsShrink)) {
      query["OrderParams"] = request.orderParamsShrink;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.specCode)) {
      query["SpecCode"] = request.specCode;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCommodityOrder",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCommodityOrderResponse>(await this.callApi(params, req, runtime), new CreateCommodityOrderResponse({}));
  }

  async createCommodityOrder(request: CreateCommodityOrderRequest): Promise<CreateCommodityOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCommodityOrderWithOptions(request, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agreementId)) {
      query["AgreementId"] = request.agreementId;
    }

    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
    }

    if (!Util.isUnset(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.authorizationOssKey)) {
      query["AuthorizationOssKey"] = request.authorizationOssKey;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.blackAndWhiteIcon)) {
      query["BlackAndWhiteIcon"] = request.blackAndWhiteIcon;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.classifications)) {
      query["Classifications"] = request.classifications;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.legalNoticeKey)) {
      query["LegalNoticeKey"] = request.legalNoticeKey;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.paymentCallback)) {
      query["PaymentCallback"] = request.paymentCallback;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.trademarkComment)) {
      query["TrademarkComment"] = request.trademarkComment;
    }

    if (!Util.isUnset(request.trademarkIcon)) {
      query["TrademarkIcon"] = request.trademarkIcon;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    if (!Util.isUnset(request.trademarkNameType)) {
      query["TrademarkNameType"] = request.trademarkNameType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrder",
      version: "2019-09-02",
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

  async createTrademarkApplicationWithOptions(request: CreateTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrademarkApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agreementId)) {
      query["AgreementId"] = request.agreementId;
    }

    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
    }

    if (!Util.isUnset(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.authorizationOssKey)) {
      query["AuthorizationOssKey"] = request.authorizationOssKey;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.blackAndWhiteIcon)) {
      query["BlackAndWhiteIcon"] = request.blackAndWhiteIcon;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.classifications)) {
      query["Classifications"] = request.classifications;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.legalNoticeKey)) {
      query["LegalNoticeKey"] = request.legalNoticeKey;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.trademarkComment)) {
      query["TrademarkComment"] = request.trademarkComment;
    }

    if (!Util.isUnset(request.trademarkIcon)) {
      query["TrademarkIcon"] = request.trademarkIcon;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    if (!Util.isUnset(request.trademarkNameType)) {
      query["TrademarkNameType"] = request.trademarkNameType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrademarkApplication",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrademarkApplicationResponse>(await this.callApi(params, req, runtime), new CreateTrademarkApplicationResponse({}));
  }

  async createTrademarkApplication(request: CreateTrademarkApplicationRequest): Promise<CreateTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrademarkApplicationWithOptions(request, runtime);
  }

  async deleteSearchConditionWithOptions(request: DeleteSearchConditionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSearchConditionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conditionId)) {
      query["ConditionId"] = request.conditionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.umid)) {
      query["Umid"] = request.umid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSearchCondition",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSearchConditionResponse>(await this.callApi(params, req, runtime), new DeleteSearchConditionResponse({}));
  }

  async deleteSearchCondition(request: DeleteSearchConditionRequest): Promise<DeleteSearchConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSearchConditionWithOptions(request, runtime);
  }

  async describeAdminTrademarkApplicationWithOptions(request: DescribeAdminTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdminTrademarkApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdminTrademarkApplication",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdminTrademarkApplicationResponse>(await this.callApi(params, req, runtime), new DescribeAdminTrademarkApplicationResponse({}));
  }

  async describeAdminTrademarkApplication(request: DescribeAdminTrademarkApplicationRequest): Promise<DescribeAdminTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdminTrademarkApplicationWithOptions(request, runtime);
  }

  async describeApplicantWithOptions(request: DescribeApplicantRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicant",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicantResponse>(await this.callApi(params, req, runtime), new DescribeApplicantResponse({}));
  }

  async describeApplicant(request: DescribeApplicantRequest): Promise<DescribeApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicantWithOptions(request, runtime);
  }

  async describePartnerTrademarkApplicationWithOptions(request: DescribePartnerTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DescribePartnerTrademarkApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePartnerTrademarkApplication",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePartnerTrademarkApplicationResponse>(await this.callApi(params, req, runtime), new DescribePartnerTrademarkApplicationResponse({}));
  }

  async describePartnerTrademarkApplication(request: DescribePartnerTrademarkApplicationRequest): Promise<DescribePartnerTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePartnerTrademarkApplicationWithOptions(request, runtime);
  }

  async describeQualificationStatusWithOptions(request: DescribeQualificationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQualificationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tbUid)) {
      query["TbUid"] = request.tbUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualificationStatus",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualificationStatusResponse>(await this.callApi(params, req, runtime), new DescribeQualificationStatusResponse({}));
  }

  async describeQualificationStatus(request: DescribeQualificationStatusRequest): Promise<DescribeQualificationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualificationStatusWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request DescribeSupplementRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSupplementResponse
   */
  async describeSupplementWithOptions(request: DescribeSupplementRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSupplementResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.supplementId)) {
      query["SupplementId"] = request.supplementId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSupplement",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSupplementResponse>(await this.callApi(params, req, runtime), new DescribeSupplementResponse({}));
  }

  /**
    * ****
    *
    * @param request DescribeSupplementRequest
    * @return DescribeSupplementResponse
   */
  async describeSupplement(request: DescribeSupplementRequest): Promise<DescribeSupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupplementWithOptions(request, runtime);
  }

  async describeTrademarkApplicationWithOptions(request: DescribeTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrademarkApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrademarkApplication",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrademarkApplicationResponse>(await this.callApi(params, req, runtime), new DescribeTrademarkApplicationResponse({}));
  }

  async describeTrademarkApplication(request: DescribeTrademarkApplicationRequest): Promise<DescribeTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrademarkApplicationWithOptions(request, runtime);
  }

  async describeTrademarkDetailForInnerWithOptions(request: DescribeTrademarkDetailForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrademarkDetailForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.umid)) {
      query["Umid"] = request.umid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrademarkDetailForInner",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrademarkDetailForInnerResponse>(await this.callApi(params, req, runtime), new DescribeTrademarkDetailForInnerResponse({}));
  }

  async describeTrademarkDetailForInner(request: DescribeTrademarkDetailForInnerRequest): Promise<DescribeTrademarkDetailForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrademarkDetailForInnerWithOptions(request, runtime);
  }

  async generateUploadFilePolicyWithOptions(request: GenerateUploadFilePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadFilePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadFilePolicy",
      version: "2019-09-02",
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

  async getAlipayUrlWithOptions(request: GetAlipayUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAlipayUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlipayUrl",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlipayUrlResponse>(await this.callApi(params, req, runtime), new GetAlipayUrlResponse({}));
  }

  async getAlipayUrl(request: GetAlipayUrlRequest): Promise<GetAlipayUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlipayUrlWithOptions(request, runtime);
  }

  async getOrderConfirmUrlWithOptions(request: GetOrderConfirmUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderConfirmUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.items)) {
      query["Items"] = request.items;
    }

    if (!Util.isUnset(request.outTraceCode)) {
      query["OutTraceCode"] = request.outTraceCode;
    }

    if (!Util.isUnset(request.outTraceType)) {
      query["OutTraceType"] = request.outTraceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrderConfirmUrl",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOrderConfirmUrlResponse>(await this.callApi(params, req, runtime), new GetOrderConfirmUrlResponse({}));
  }

  async getOrderConfirmUrl(request: GetOrderConfirmUrlRequest): Promise<GetOrderConfirmUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderConfirmUrlWithOptions(request, runtime);
  }

  async getStsByTaobaoUidWithOptions(request: GetStsByTaobaoUidRequest, runtime: $Util.RuntimeOptions): Promise<GetStsByTaobaoUidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    if (!Util.isUnset(request.tbUid)) {
      query["TbUid"] = request.tbUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStsByTaobaoUid",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStsByTaobaoUidResponse>(await this.callApi(params, req, runtime), new GetStsByTaobaoUidResponse({}));
  }

  async getStsByTaobaoUid(request: GetStsByTaobaoUidRequest): Promise<GetStsByTaobaoUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStsByTaobaoUidWithOptions(request, runtime);
  }

  async listAdminTrademarkApplicationLogsWithOptions(request: ListAdminTrademarkApplicationLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListAdminTrademarkApplicationLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAdminTrademarkApplicationLogs",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAdminTrademarkApplicationLogsResponse>(await this.callApi(params, req, runtime), new ListAdminTrademarkApplicationLogsResponse({}));
  }

  async listAdminTrademarkApplicationLogs(request: ListAdminTrademarkApplicationLogsRequest): Promise<ListAdminTrademarkApplicationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAdminTrademarkApplicationLogsWithOptions(request, runtime);
  }

  async listAdminTrademarkApplicationsWithOptions(request: ListAdminTrademarkApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAdminTrademarkApplicationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantName)) {
      query["ApplicantName"] = request.applicantName;
    }

    if (!Util.isUnset(request.applicationStatus)) {
      query["ApplicationStatus"] = request.applicationStatus;
    }

    if (!Util.isUnset(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.supplementStatus)) {
      query["SupplementStatus"] = request.supplementStatus;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    if (!Util.isUnset(request.trademarkNumber)) {
      query["TrademarkNumber"] = request.trademarkNumber;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAdminTrademarkApplications",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAdminTrademarkApplicationsResponse>(await this.callApi(params, req, runtime), new ListAdminTrademarkApplicationsResponse({}));
  }

  async listAdminTrademarkApplications(request: ListAdminTrademarkApplicationsRequest): Promise<ListAdminTrademarkApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAdminTrademarkApplicationsWithOptions(request, runtime);
  }

  async listApplicantsWithOptions(request: ListApplicantsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicantsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantName)) {
      query["ApplicantName"] = request.applicantName;
    }

    if (!Util.isUnset(request.applicantRegion)) {
      query["ApplicantRegion"] = request.applicantRegion;
    }

    if (!Util.isUnset(request.applicantType)) {
      query["ApplicantType"] = request.applicantType;
    }

    if (!Util.isUnset(request.applicantVersion)) {
      query["ApplicantVersion"] = request.applicantVersion;
    }

    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.systemVersion)) {
      query["SystemVersion"] = request.systemVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicants",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicantsResponse>(await this.callApi(params, req, runtime), new ListApplicantsResponse({}));
  }

  async listApplicants(request: ListApplicantsRequest): Promise<ListApplicantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicantsWithOptions(request, runtime);
  }

  async listAreasWithOptions(request: ListAreasRequest, runtime: $Util.RuntimeOptions): Promise<ListAreasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.parentCode)) {
      query["ParentCode"] = request.parentCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAreas",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAreasResponse>(await this.callApi(params, req, runtime), new ListAreasResponse({}));
  }

  async listAreas(request: ListAreasRequest): Promise<ListAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAreasWithOptions(request, runtime);
  }

  async listClassificationConditionsWithOptions(request: ListClassificationConditionsRequest, runtime: $Util.RuntimeOptions): Promise<ListClassificationConditionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClassificationConditions",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClassificationConditionsResponse>(await this.callApi(params, req, runtime), new ListClassificationConditionsResponse({}));
  }

  async listClassificationConditions(request: ListClassificationConditionsRequest): Promise<ListClassificationConditionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClassificationConditionsWithOptions(request, runtime);
  }

  async listClassificationsWithOptions(request: ListClassificationsRequest, runtime: $Util.RuntimeOptions): Promise<ListClassificationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.parentCode)) {
      query["ParentCode"] = request.parentCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClassifications",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClassificationsResponse>(await this.callApi(params, req, runtime), new ListClassificationsResponse({}));
  }

  async listClassifications(request: ListClassificationsRequest): Promise<ListClassificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClassificationsWithOptions(request, runtime);
  }

  async listTrademarkApplicationLogsWithOptions(request: ListTrademarkApplicationLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListTrademarkApplicationLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrademarkApplicationLogs",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrademarkApplicationLogsResponse>(await this.callApi(params, req, runtime), new ListTrademarkApplicationLogsResponse({}));
  }

  async listTrademarkApplicationLogs(request: ListTrademarkApplicationLogsRequest): Promise<ListTrademarkApplicationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrademarkApplicationLogsWithOptions(request, runtime);
  }

  async listTrademarkApplicationsWithOptions(request: ListTrademarkApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListTrademarkApplicationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantName)) {
      query["ApplicantName"] = request.applicantName;
    }

    if (!Util.isUnset(request.applicationStatus)) {
      query["ApplicationStatus"] = request.applicationStatus;
    }

    if (!Util.isUnset(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.createTimeLeft)) {
      query["CreateTimeLeft"] = request.createTimeLeft;
    }

    if (!Util.isUnset(request.createTimeRight)) {
      query["CreateTimeRight"] = request.createTimeRight;
    }

    if (!Util.isUnset(request.flag)) {
      query["Flag"] = request.flag;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.queryVoucherOrderDoneFlag)) {
      query["QueryVoucherOrderDoneFlag"] = request.queryVoucherOrderDoneFlag;
    }

    if (!Util.isUnset(request.queryVoucherOrderFlag)) {
      query["QueryVoucherOrderFlag"] = request.queryVoucherOrderFlag;
    }

    if (!Util.isUnset(request.sortFiled)) {
      query["SortFiled"] = request.sortFiled;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.supplementStatus)) {
      query["SupplementStatus"] = request.supplementStatus;
    }

    if (!Util.isUnset(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    if (!Util.isUnset(request.trademarkNumber)) {
      query["TrademarkNumber"] = request.trademarkNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrademarkApplications",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrademarkApplicationsResponse>(await this.callApi(params, req, runtime), new ListTrademarkApplicationsResponse({}));
  }

  async listTrademarkApplications(request: ListTrademarkApplicationsRequest): Promise<ListTrademarkApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrademarkApplicationsWithOptions(request, runtime);
  }

  async listTrademarkSearchForInnerWithOptions(request: ListTrademarkSearchForInnerRequest, runtime: $Util.RuntimeOptions): Promise<ListTrademarkSearchForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyBeginTime)) {
      query["ApplyBeginTime"] = request.applyBeginTime;
    }

    if (!Util.isUnset(request.applyEndTime)) {
      query["ApplyEndTime"] = request.applyEndTime;
    }

    if (!Util.isUnset(request.classification)) {
      query["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.ifPrecision)) {
      query["IfPrecision"] = request.ifPrecision;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.searchPreference)) {
      query["SearchPreference"] = request.searchPreference;
    }

    if (!Util.isUnset(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.umid)) {
      query["Umid"] = request.umid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrademarkSearchForInner",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrademarkSearchForInnerResponse>(await this.callApi(params, req, runtime), new ListTrademarkSearchForInnerResponse({}));
  }

  async listTrademarkSearchForInner(request: ListTrademarkSearchForInnerRequest): Promise<ListTrademarkSearchForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrademarkSearchForInnerWithOptions(request, runtime);
  }

  async putMeasureDataWithOptions(request: PutMeasureDataRequest, runtime: $Util.RuntimeOptions): Promise<PutMeasureDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutMeasureData",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMeasureDataResponse>(await this.callApi(params, req, runtime), new PutMeasureDataResponse({}));
  }

  async putMeasureData(request: PutMeasureDataRequest): Promise<PutMeasureDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMeasureDataWithOptions(request, runtime);
  }

  async putMeasureReadyFlagWithOptions(request: PutMeasureReadyFlagRequest, runtime: $Util.RuntimeOptions): Promise<PutMeasureReadyFlagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.readyFlag)) {
      query["ReadyFlag"] = request.readyFlag;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMeasureReadyFlag",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMeasureReadyFlagResponse>(await this.callApi(params, req, runtime), new PutMeasureReadyFlagResponse({}));
  }

  async putMeasureReadyFlag(request: PutMeasureReadyFlagRequest): Promise<PutMeasureReadyFlagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMeasureReadyFlagWithOptions(request, runtime);
  }

  async queryActivityItemsWithOptions(request: QueryActivityItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryActivityItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.extendInfo)) {
      query["ExtendInfo"] = request.extendInfo;
    }

    if (!Util.isUnset(request.floorIndex)) {
      query["FloorIndex"] = request.floorIndex;
    }

    if (!Util.isUnset(request.mock)) {
      query["Mock"] = request.mock;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.refresh)) {
      query["Refresh"] = request.refresh;
    }

    if (!Util.isUnset(request.umId)) {
      query["UmId"] = request.umId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryActivityItems",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryActivityItemsResponse>(await this.callApi(params, req, runtime), new QueryActivityItemsResponse({}));
  }

  async queryActivityItems(request: QueryActivityItemsRequest): Promise<QueryActivityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryActivityItemsWithOptions(request, runtime);
  }

  async queryAliyunUidWithOptions(request: QueryAliyunUidRequest, runtime: $Util.RuntimeOptions): Promise<QueryAliyunUidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tbUid)) {
      query["TbUid"] = request.tbUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAliyunUid",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAliyunUidResponse>(await this.callApi(params, req, runtime), new QueryAliyunUidResponse({}));
  }

  async queryAliyunUid(request: QueryAliyunUidRequest): Promise<QueryAliyunUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAliyunUidWithOptions(request, runtime);
  }

  async queryDetailItemWithOptions(request: QueryDetailItemRequest, runtime: $Util.RuntimeOptions): Promise<QueryDetailItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.detailConvertType)) {
      query["DetailConvertType"] = request.detailConvertType;
    }

    if (!Util.isUnset(request.detailId)) {
      query["DetailId"] = request.detailId;
    }

    if (!Util.isUnset(request.detailType)) {
      query["DetailType"] = request.detailType;
    }

    if (!Util.isUnset(request.mock)) {
      query["Mock"] = request.mock;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDetailItem",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDetailItemResponse>(await this.callApi(params, req, runtime), new QueryDetailItemResponse({}));
  }

  async queryDetailItem(request: QueryDetailItemRequest): Promise<QueryDetailItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDetailItemWithOptions(request, runtime);
  }

  async queryRemainResourcesWithOptions(request: QueryRemainResourcesRequest, runtime: $Util.RuntimeOptions): Promise<QueryRemainResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRemainResources",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRemainResourcesResponse>(await this.callApi(params, req, runtime), new QueryRemainResourcesResponse({}));
  }

  async queryRemainResources(request: QueryRemainResourcesRequest): Promise<QueryRemainResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRemainResourcesWithOptions(request, runtime);
  }

  async refuseSupplementWithOptions(request: RefuseSupplementRequest, runtime: $Util.RuntimeOptions): Promise<RefuseSupplementResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.supplementId)) {
      query["SupplementId"] = request.supplementId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefuseSupplement",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefuseSupplementResponse>(await this.callApi(params, req, runtime), new RefuseSupplementResponse({}));
  }

  async refuseSupplement(request: RefuseSupplementRequest): Promise<RefuseSupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseSupplementWithOptions(request, runtime);
  }

  async rejectExpertSolutionWithOptions(request: RejectExpertSolutionRequest, runtime: $Util.RuntimeOptions): Promise<RejectExpertSolutionResponse> {
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
      action: "RejectExpertSolution",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectExpertSolutionResponse>(await this.callApi(params, req, runtime), new RejectExpertSolutionResponse({}));
  }

  async rejectExpertSolution(request: RejectExpertSolutionRequest): Promise<RejectExpertSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectExpertSolutionWithOptions(request, runtime);
  }

  async removeApplicantWithOptions(request: RemoveApplicantRequest, runtime: $Util.RuntimeOptions): Promise<RemoveApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveApplicant",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveApplicantResponse>(await this.callApi(params, req, runtime), new RemoveApplicantResponse({}));
  }

  async removeApplicant(request: RemoveApplicantRequest): Promise<RemoveApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeApplicantWithOptions(request, runtime);
  }

  async saveSearchConditionWithOptions(request: SaveSearchConditionRequest, runtime: $Util.RuntimeOptions): Promise<SaveSearchConditionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conditionContent)) {
      body["ConditionContent"] = request.conditionContent;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tagName)) {
      body["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.umid)) {
      body["Umid"] = request.umid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveSearchCondition",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSearchConditionResponse>(await this.callApi(params, req, runtime), new SaveSearchConditionResponse({}));
  }

  async saveSearchCondition(request: SaveSearchConditionRequest): Promise<SaveSearchConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSearchConditionWithOptions(request, runtime);
  }

  async saveTemporaryApplicantWithOptions(request: SaveTemporaryApplicantRequest, runtime: $Util.RuntimeOptions): Promise<SaveTemporaryApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
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

    if (!Util.isUnset(request.completeApplicant)) {
      query["CompleteApplicant"] = request.completeApplicant;
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

    if (!Util.isUnset(request.contactZipCode)) {
      query["ContactZipCode"] = request.contactZipCode;
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
      action: "SaveTemporaryApplicant",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTemporaryApplicantResponse>(await this.callApi(params, req, runtime), new SaveTemporaryApplicantResponse({}));
  }

  async saveTemporaryApplicant(request: SaveTemporaryApplicantRequest): Promise<SaveTemporaryApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTemporaryApplicantWithOptions(request, runtime);
  }

  async searchItemsWithOptions(request: SearchItemsRequest, runtime: $Util.RuntimeOptions): Promise<SearchItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.excludedTags)) {
      query["ExcludedTags"] = request.excludedTags;
    }

    if (!Util.isUnset(request.excludedUids)) {
      query["ExcludedUids"] = request.excludedUids;
    }

    if (!Util.isUnset(request.feedsType)) {
      query["FeedsType"] = request.feedsType;
    }

    if (!Util.isUnset(request.intCls)) {
      query["IntCls"] = request.intCls;
    }

    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.mock)) {
      query["Mock"] = request.mock;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.priceLeft)) {
      query["PriceLeft"] = request.priceLeft;
    }

    if (!Util.isUnset(request.priceRight)) {
      query["PriceRight"] = request.priceRight;
    }

    if (!Util.isUnset(request.products)) {
      query["Products"] = request.products;
    }

    if (!Util.isUnset(request.registerNumber)) {
      query["RegisterNumber"] = request.registerNumber;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.trademarkNameLength)) {
      query["TrademarkNameLength"] = request.trademarkNameLength;
    }

    if (!Util.isUnset(request.trademarkNameType)) {
      query["TrademarkNameType"] = request.trademarkNameType;
    }

    if (!Util.isUnset(request.umId)) {
      query["UmId"] = request.umId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchItems",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchItemsResponse>(await this.callApi(params, req, runtime), new SearchItemsResponse({}));
  }

  async searchItems(request: SearchItemsRequest): Promise<SearchItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchItemsWithOptions(request, runtime);
  }

  async searchSimilarityWithOptions(tmpReq: SearchSimilarityRequest, runtime: $Util.RuntimeOptions): Promise<SearchSimilarityResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchSimilarityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.classifications)) {
      request.classificationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.classifications, "Classifications", "json");
    }

    if (!Util.isUnset(tmpReq.similarGroups)) {
      request.similarGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.similarGroups, "SimilarGroups", "json");
    }

    let query = { };
    if (!Util.isUnset(request.classificationsShrink)) {
      query["Classifications"] = request.classificationsShrink;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nameUriList)) {
      query["NameUriList"] = request.nameUriList;
    }

    if (!Util.isUnset(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!Util.isUnset(request.showDetail)) {
      query["ShowDetail"] = request.showDetail;
    }

    if (!Util.isUnset(request.similarGroupsShrink)) {
      query["SimilarGroups"] = request.similarGroupsShrink;
    }

    if (!Util.isUnset(request.sorter)) {
      query["Sorter"] = request.sorter;
    }

    if (!Util.isUnset(request.umid)) {
      query["Umid"] = request.umid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchSimilarity",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchSimilarityResponse>(await this.callApi(params, req, runtime), new SearchSimilarityResponse({}));
  }

  async searchSimilarity(request: SearchSimilarityRequest): Promise<SearchSimilarityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchSimilarityWithOptions(request, runtime);
  }

  async searchSimilarityListWithOptions(tmpReq: SearchSimilarityListRequest, runtime: $Util.RuntimeOptions): Promise<SearchSimilarityListResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchSimilarityListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.classifications)) {
      request.classificationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.classifications, "Classifications", "json");
    }

    if (!Util.isUnset(tmpReq.similarGroups)) {
      request.similarGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.similarGroups, "SimilarGroups", "json");
    }

    let query = { };
    if (!Util.isUnset(request.classificationsShrink)) {
      query["Classifications"] = request.classificationsShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.similarGroupsShrink)) {
      query["SimilarGroups"] = request.similarGroupsShrink;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.successSearchType)) {
      query["SuccessSearchType"] = request.successSearchType;
    }

    if (!Util.isUnset(request.umid)) {
      query["Umid"] = request.umid;
    }

    if (!Util.isUnset(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchSimilarityList",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchSimilarityListResponse>(await this.callApi(params, req, runtime), new SearchSimilarityListResponse({}));
  }

  async searchSimilarityList(request: SearchSimilarityListRequest): Promise<SearchSimilarityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchSimilarityListWithOptions(request, runtime);
  }

  async sendMessageToUserWithOptions(tmpReq: SendMessageToUserRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageToUserResponse> {
    Util.validateModel(tmpReq);
    let request = new SendMessageToUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.templateData)) {
      request.templateDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateData, "TemplateData", "json");
    }

    let query = { };
    if (!Util.isUnset(request.receiverNickName)) {
      query["ReceiverNickName"] = request.receiverNickName;
    }

    if (!Util.isUnset(request.senderNickName)) {
      query["SenderNickName"] = request.senderNickName;
    }

    if (!Util.isUnset(request.templateDataShrink)) {
      query["TemplateData"] = request.templateDataShrink;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMessageToUser",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageToUserResponse>(await this.callApi(params, req, runtime), new SendMessageToUserResponse({}));
  }

  async sendMessageToUser(request: SendMessageToUserRequest): Promise<SendMessageToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageToUserWithOptions(request, runtime);
  }

  /**
    * ***
    *
    * @param tmpReq SubmitSupplementRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SubmitSupplementResponse
   */
  async submitSupplementWithOptions(tmpReq: SubmitSupplementRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSupplementResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSupplementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userFiles)) {
      request.userFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userFiles, "UserFiles", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.supplementId)) {
      query["SupplementId"] = request.supplementId;
    }

    if (!Util.isUnset(request.userFilesShrink)) {
      query["UserFiles"] = request.userFilesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSupplement",
      version: "2019-09-02",
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

  /**
    * ***
    *
    * @param request SubmitSupplementRequest
    * @return SubmitSupplementResponse
   */
  async submitSupplement(request: SubmitSupplementRequest): Promise<SubmitSupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSupplementWithOptions(request, runtime);
  }

  async updateApplicantWithOptions(request: UpdateApplicantRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.applicantId)) {
      query["ApplicantId"] = request.applicantId;
    }

    if (!Util.isUnset(request.applicantName)) {
      query["ApplicantName"] = request.applicantName;
    }

    if (!Util.isUnset(request.authorizationOssKey)) {
      query["AuthorizationOssKey"] = request.authorizationOssKey;
    }

    if (!Util.isUnset(request.businessLicenceOssKey)) {
      query["BusinessLicenceOssKey"] = request.businessLicenceOssKey;
    }

    if (!Util.isUnset(request.cardNumber)) {
      query["CardNumber"] = request.cardNumber;
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

    if (!Util.isUnset(request.passportOssKey)) {
      query["PassportOssKey"] = request.passportOssKey;
    }

    if (!Util.isUnset(request.personalType)) {
      query["PersonalType"] = request.personalType;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicant",
      version: "2019-09-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicantResponse>(await this.callApi(params, req, runtime), new UpdateApplicantResponse({}));
  }

  async updateApplicant(request: UpdateApplicantRequest): Promise<UpdateApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicantWithOptions(request, runtime);
  }

}
