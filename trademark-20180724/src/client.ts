// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class QueryTradeProduceListRequest extends $tea.Model {
  registerNumber?: string;
  pageNum?: number;
  pageSize?: number;
  preOrderId?: string;
  buyerStatus?: number;
  sortOrder?: string;
  sortFiled?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      registerNumber: 'RegisterNumber',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      preOrderId: 'PreOrderId',
      buyerStatus: 'BuyerStatus',
      sortOrder: 'SortOrder',
      sortFiled: 'SortFiled',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerNumber: 'string',
      pageNum: 'number',
      pageSize: 'number',
      preOrderId: 'string',
      buyerStatus: 'number',
      sortOrder: 'string',
      sortFiled: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryTradeProduceListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryTradeProduceListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTradeProduceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTradeProduceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsRequest extends $tea.Model {
  ruleId?: number;
  actionType?: number;
  procedureStatus?: number;
  tmName?: string;
  applyYear?: string;
  registrationNumber?: string;
  classification?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      actionType: 'ActionType',
      procedureStatus: 'ProcedureStatus',
      tmName: 'TmName',
      applyYear: 'ApplyYear',
      registrationNumber: 'RegistrationNumber',
      classification: 'Classification',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      actionType: 'number',
      procedureStatus: 'number',
      tmName: 'string',
      applyYear: 'string',
      registrationNumber: 'string',
      classification: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsResponseBody extends $tea.Model {
  nextPage?: boolean;
  requestId?: string;
  prePage?: boolean;
  totalItemNum?: number;
  currentPageNum?: number;
  totalPageNum?: number;
  pageSize?: number;
  data?: QueryTrademarkMonitorResultsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextPage: 'NextPage',
      requestId: 'RequestId',
      prePage: 'PrePage',
      totalItemNum: 'TotalItemNum',
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPage: 'boolean',
      requestId: 'string',
      prePage: 'boolean',
      totalItemNum: 'number',
      currentPageNum: 'number',
      totalPageNum: 'number',
      pageSize: 'number',
      data: QueryTrademarkMonitorResultsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTrademarkMonitorResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTrademarkMonitorResultsResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTradeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelTradeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelTradeOrderResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTmMonitorRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTmMonitorRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTmMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadNotaryDataRequest extends $tea.Model {
  notaryType?: number;
  bizOrderNo?: string;
  uploadContext?: string;
  static names(): { [key: string]: string } {
    return {
      notaryType: 'NotaryType',
      bizOrderNo: 'BizOrderNo',
      uploadContext: 'UploadContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryType: 'number',
      bizOrderNo: 'string',
      uploadContext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadNotaryDataResponseBody extends $tea.Model {
  userAuthUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      userAuthUrl: 'UserAuthUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAuthUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadNotaryDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadNotaryDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadNotaryDataResponseBody,
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
  body: CopyApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartnerUpdateTrademarkNameRequest extends $tea.Model {
  tmIcon?: string;
  aliyunKp?: string;
  type?: number;
  bizId?: string;
  callerType?: string;
  callerParentId?: number;
  tmComment?: string;
  tmName?: string;
  bid?: string;
  eventSceneType?: string;
  static names(): { [key: string]: string } {
    return {
      tmIcon: 'TmIcon',
      aliyunKp: 'AliyunKp',
      type: 'Type',
      bizId: 'BizId',
      callerType: 'CallerType',
      callerParentId: 'CallerParentId',
      tmComment: 'TmComment',
      tmName: 'TmName',
      bid: 'Bid',
      eventSceneType: 'EventSceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmIcon: 'string',
      aliyunKp: 'string',
      type: 'number',
      bizId: 'string',
      callerType: 'string',
      callerParentId: 'number',
      tmComment: 'string',
      tmName: 'string',
      bid: 'string',
      eventSceneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartnerUpdateTrademarkNameResponseBody extends $tea.Model {
  allowRetry?: boolean;
  requestId?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  dynamicCode?: string;
  errorCode?: string;
  dynamicMessage?: string;
  success?: boolean;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      requestId: 'RequestId',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      dynamicCode: 'DynamicCode',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      success: 'Success',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      requestId: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      dynamicCode: 'string',
      errorCode: 'string',
      dynamicMessage: 'string',
      success: 'boolean',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartnerUpdateTrademarkNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PartnerUpdateTrademarkNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PartnerUpdateTrademarkNameResponseBody,
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
  status?: number;
  type?: number;
  updateTime?: number;
  relationBizId?: string;
  createTime?: number;
  userId?: string;
  bizId?: string;
  partnerMobile?: string;
  requestId?: string;
  description?: string;
  mobile?: string;
  registerNumber?: string;
  classification?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      relationBizId: 'RelationBizId',
      createTime: 'CreateTime',
      userId: 'UserId',
      bizId: 'BizId',
      partnerMobile: 'PartnerMobile',
      requestId: 'RequestId',
      description: 'Description',
      mobile: 'Mobile',
      registerNumber: 'RegisterNumber',
      classification: 'Classification',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      updateTime: 'number',
      relationBizId: 'string',
      createTime: 'number',
      userId: 'string',
      bizId: 'string',
      partnerMobile: 'string',
      requestId: 'string',
      description: 'string',
      mobile: 'string',
      registerNumber: 'string',
      classification: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryIntentionDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryIntentionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceRequest extends $tea.Model {
  intentionBizId?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      intentionBizId: 'IntentionBizId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentionBizId: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryIntentionPriceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryIntentionPriceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryIntentionPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryIntentionPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListRequest extends $tea.Model {
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryOfficialFileCustomListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryOfficialFileCustomListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOfficialFileCustomListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOfficialFileCustomListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOfficialFileCustomListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkIconRequest extends $tea.Model {
  trademarkIconOssKey?: string;
  eventSceneType?: number;
  static names(): { [key: string]: string } {
    return {
      trademarkIconOssKey: 'TrademarkIconOssKey',
      eventSceneType: 'EventSceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademarkIconOssKey: 'string',
      eventSceneType: 'number',
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
  body: CheckTrademarkIconResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckTrademarkIconResponseBody,
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
  operateTime?: number;
  serialNumber?: string;
  status?: number;
  type?: number;
  sbjDeadTime?: number;
  acceptDeadTime?: number;
  sendTime?: number;
  acceptTime?: number;
  requestId?: string;
  tmNumber?: string;
  uploadFileTemplateUrl?: string;
  content?: string;
  id?: number;
  fileTemplateUrls?: QuerySupplementDetailResponseBodyFileTemplateUrls;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'OperateTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
      type: 'Type',
      sbjDeadTime: 'SbjDeadTime',
      acceptDeadTime: 'AcceptDeadTime',
      sendTime: 'SendTime',
      acceptTime: 'AcceptTime',
      requestId: 'RequestId',
      tmNumber: 'TmNumber',
      uploadFileTemplateUrl: 'UploadFileTemplateUrl',
      content: 'Content',
      id: 'Id',
      fileTemplateUrls: 'FileTemplateUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'number',
      serialNumber: 'string',
      status: 'number',
      type: 'number',
      sbjDeadTime: 'number',
      acceptDeadTime: 'number',
      sendTime: 'number',
      acceptTime: 'number',
      requestId: 'string',
      tmNumber: 'string',
      uploadFileTemplateUrl: 'string',
      content: 'string',
      id: 'number',
      fileTemplateUrls: QuerySupplementDetailResponseBodyFileTemplateUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplementDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySupplementDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySupplementDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadTrademarkOnSaleRequest extends $tea.Model {
  classificationCode?: string;
  tmName?: string;
  tmIcon?: string;
  originalPrice?: number;
  tmNumber?: string;
  endTime?: number;
  beginTime?: number;
  description?: string;
  label?: string;
  regAnnDate?: number;
  ownerName?: string;
  ownerEnName?: string;
  secondaryClassification?: string;
  thirdClassification?: string;
  type?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      originalPrice: 'OriginalPrice',
      tmNumber: 'TmNumber',
      endTime: 'EndTime',
      beginTime: 'BeginTime',
      description: 'Description',
      label: 'Label',
      regAnnDate: 'RegAnnDate',
      ownerName: 'OwnerName',
      ownerEnName: 'OwnerEnName',
      secondaryClassification: 'SecondaryClassification',
      thirdClassification: 'ThirdClassification',
      type: 'Type',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      tmName: 'string',
      tmIcon: 'string',
      originalPrice: 'number',
      tmNumber: 'string',
      endTime: 'number',
      beginTime: 'number',
      description: 'string',
      label: 'string',
      regAnnDate: 'number',
      ownerName: 'string',
      ownerEnName: 'string',
      secondaryClassification: 'string',
      thirdClassification: 'string',
      type: 'string',
      reason: 'string',
      status: 'string',
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
  body: UploadTrademarkOnSaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadTrademarkOnSaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNotaryPostRequest extends $tea.Model {
  notaryOrderId?: number;
  receiverName?: string;
  receiverAddress?: string;
  receiverPhone?: string;
  static names(): { [key: string]: string } {
    return {
      notaryOrderId: 'NotaryOrderId',
      receiverName: 'ReceiverName',
      receiverAddress: 'ReceiverAddress',
      receiverPhone: 'ReceiverPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryOrderId: 'number',
      receiverName: 'string',
      receiverAddress: 'string',
      receiverPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNotaryPostResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNotaryPostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyNotaryPostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyNotaryPostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionRequest extends $tea.Model {
  intentionBizId?: string;
  channel?: string;
  pageNum?: number;
  pageSize?: number;
  tmProduceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      intentionBizId: 'IntentionBizId',
      channel: 'Channel',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tmProduceStatus: 'TmProduceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentionBizId: 'string',
      channel: 'string',
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
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryTradeMarkApplicationsByIntentionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryTradeMarkApplicationsByIntentionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTradeMarkApplicationsByIntentionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTradeMarkApplicationsByIntentionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveExtensionAttributeRequest extends $tea.Model {
  bizId?: string;
  attributeKey?: string;
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      attributeKey: 'AttributeKey',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      attributeKey: 'string',
      attributeValue: 'string',
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
  body: SaveExtensionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptPartnerNotificationRequest extends $tea.Model {
  bizId?: string;
  operation?: string;
  material?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      operation: 'Operation',
      material: 'Material',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      operation: 'string',
      material: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptPartnerNotificationResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptPartnerNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AcceptPartnerNotificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AcceptPartnerNotificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementRequest extends $tea.Model {
  id?: number;
  uploadOssKeyList?: { [key: string]: any };
  content?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      uploadOssKeyList: 'UploadOssKeyList',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      uploadOssKeyList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementShrinkRequest extends $tea.Model {
  id?: number;
  uploadOssKeyListShrink?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      uploadOssKeyListShrink: 'UploadOssKeyList',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      uploadOssKeyListShrink: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSupplementResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSupplementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSupplementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceUploadTrademarkOnsaleRequest extends $tea.Model {
  classificationCode?: string;
  tmName?: string;
  tmIcon?: string;
  originalPrice?: number;
  tmNumber?: string;
  endTime?: number;
  beginTime?: number;
  description?: string;
  label?: string;
  regAnnDate?: number;
  ownerName?: string;
  ownerEnName?: string;
  secondaryClassification?: string;
  thirdClassification?: string;
  type?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      originalPrice: 'OriginalPrice',
      tmNumber: 'TmNumber',
      endTime: 'EndTime',
      beginTime: 'BeginTime',
      description: 'Description',
      label: 'Label',
      regAnnDate: 'RegAnnDate',
      ownerName: 'OwnerName',
      ownerEnName: 'OwnerEnName',
      secondaryClassification: 'SecondaryClassification',
      thirdClassification: 'ThirdClassification',
      type: 'Type',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      tmName: 'string',
      tmIcon: 'string',
      originalPrice: 'number',
      tmNumber: 'string',
      endTime: 'number',
      beginTime: 'number',
      description: 'string',
      label: 'string',
      regAnnDate: 'number',
      ownerName: 'string',
      ownerEnName: 'string',
      secondaryClassification: 'string',
      thirdClassification: 'string',
      type: 'string',
      reason: 'string',
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
  body: ForceUploadTrademarkOnsaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ForceUploadTrademarkOnsaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindMaterialRequest extends $tea.Model {
  materialId?: string;
  bizId?: string;
  loaOssKey?: string;
  legalNoticeKey?: string;
  static names(): { [key: string]: string } {
    return {
      materialId: 'MaterialId',
      bizId: 'BizId',
      loaOssKey: 'LoaOssKey',
      legalNoticeKey: 'LegalNoticeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialId: 'string',
      bizId: 'string',
      loaOssKey: 'string',
      legalNoticeKey: 'string',
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
  body: BindMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultPrincipalResponseBody extends $tea.Model {
  principalDescription?: string;
  principalName?: string;
  requestId?: string;
  principalValue?: number;
  static names(): { [key: string]: string } {
    return {
      principalDescription: 'PrincipalDescription',
      principalName: 'PrincipalName',
      requestId: 'RequestId',
      principalValue: 'PrincipalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalDescription: 'string',
      principalName: 'string',
      requestId: 'string',
      principalValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultPrincipalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDefaultPrincipalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDefaultPrincipalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsRequest extends $tea.Model {
  bizId?: string;
  type?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      type: 'Type',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      type: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryCommunicationLogsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryCommunicationLogsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommunicationLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCommunicationLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCommunicationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateQrCodeRequest extends $tea.Model {
  uuid?: string;
  ossKey?: string;
  fieldKey?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      ossKey: 'OssKey',
      fieldKey: 'FieldKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      ossKey: 'string',
      fieldKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateQrCodeResponseBody extends $tea.Model {
  uuid?: string;
  requestId?: string;
  expireTime?: number;
  success?: boolean;
  qrcodeUrl?: string;
  fieldKey?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      requestId: 'RequestId',
      expireTime: 'ExpireTime',
      success: 'Success',
      qrcodeUrl: 'QrcodeUrl',
      fieldKey: 'FieldKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      requestId: 'string',
      expireTime: 'number',
      success: 'boolean',
      qrcodeUrl: 'string',
      fieldKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateQrCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateQrCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateQrCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDissentOriginalRequest extends $tea.Model {
  bizId?: string;
  contactName?: string;
  contactAddress?: string;
  contactNumber?: string;
  contactProvince?: string;
  contactCity?: string;
  contactDistrict?: string;
  contactCounty?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      contactName: 'ContactName',
      contactAddress: 'ContactAddress',
      contactNumber: 'ContactNumber',
      contactProvince: 'ContactProvince',
      contactCity: 'ContactCity',
      contactDistrict: 'ContactDistrict',
      contactCounty: 'ContactCounty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      contactName: 'string',
      contactAddress: 'string',
      contactNumber: 'string',
      contactProvince: 'string',
      contactCity: 'string',
      contactDistrict: 'string',
      contactCounty: 'string',
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
  body: ConfirmDissentOriginalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  signatureUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertImageToGrayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertImageToGrayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertImageToGrayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListRequest extends $tea.Model {
  type?: number;
  status?: number;
  pageSize?: number;
  pageNum?: number;
  sortFiled?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      pageSize: 'number',
      pageNum: 'number',
      sortFiled: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryIntentionListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryIntentionListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryIntentionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryIntentionListResponseBody,
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
  version?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationLetterVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuthorizationLetterVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuthorizationLetterVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceRequest extends $tea.Model {
  userId?: number;
  tmName?: string;
  tmIcon?: string;
  type?: number;
  orderData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      type: 'Type',
      orderData: 'OrderData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      tmName: 'string',
      tmIcon: 'string',
      type: 'number',
      orderData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceShrinkRequest extends $tea.Model {
  userId?: number;
  tmName?: string;
  tmIcon?: string;
  type?: number;
  orderDataShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      type: 'Type',
      orderDataShrink: 'OrderData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      tmName: 'string',
      tmIcon: 'string',
      type: 'number',
      orderDataShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceResponseBody extends $tea.Model {
  originalPrice?: number;
  requestId?: string;
  discountPrice?: number;
  currency?: string;
  tradePrice?: number;
  prices?: QueryTrademarkPriceResponseBodyPrices;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      requestId: 'RequestId',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      tradePrice: 'TradePrice',
      prices: 'Prices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      requestId: 'string',
      discountPrice: 'number',
      currency: 'string',
      tradePrice: 'number',
      prices: QueryTrademarkPriceResponseBodyPrices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTrademarkPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTrademarkPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleRequest extends $tea.Model {
  ruleSource?: string;
  ruleName?: string;
  ruleType?: number;
  ruleKeyword?: string;
  startApplyDate?: string;
  endApplyDate?: string;
  classification?: { [key: string]: any };
  notifyStatus?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ruleSource: 'RuleSource',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      ruleKeyword: 'RuleKeyword',
      startApplyDate: 'StartApplyDate',
      endApplyDate: 'EndApplyDate',
      classification: 'Classification',
      notifyStatus: 'NotifyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleSource: 'string',
      ruleName: 'string',
      ruleType: 'number',
      ruleKeyword: 'string',
      startApplyDate: 'string',
      endApplyDate: 'string',
      classification: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      notifyStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleShrinkRequest extends $tea.Model {
  ruleSource?: string;
  ruleName?: string;
  ruleType?: number;
  ruleKeyword?: string;
  startApplyDate?: string;
  endApplyDate?: string;
  classificationShrink?: string;
  notifyStatusShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ruleSource: 'RuleSource',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      ruleKeyword: 'RuleKeyword',
      startApplyDate: 'StartApplyDate',
      endApplyDate: 'EndApplyDate',
      classificationShrink: 'Classification',
      notifyStatusShrink: 'NotifyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleSource: 'string',
      ruleName: 'string',
      ruleType: 'number',
      ruleKeyword: 'string',
      startApplyDate: 'string',
      endApplyDate: 'string',
      classificationShrink: 'string',
      notifyStatusShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTmMonitorRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertTmMonitorRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertTmMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesRequest extends $tea.Model {
  id?: string;
  ruleName?: string;
  notifyUpdate?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ruleName: 'RuleName',
      notifyUpdate: 'NotifyUpdate',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ruleName: 'string',
      notifyUpdate: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesResponseBody extends $tea.Model {
  nextPage?: boolean;
  requestId?: string;
  prePage?: boolean;
  totalItemNum?: number;
  currentPageNum?: number;
  totalPageNum?: number;
  pageSize?: number;
  data?: QueryTrademarkMonitorRulesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextPage: 'NextPage',
      requestId: 'RequestId',
      prePage: 'PrePage',
      totalItemNum: 'TotalItemNum',
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPage: 'boolean',
      requestId: 'string',
      prePage: 'boolean',
      totalItemNum: 'number',
      currentPageNum: 'number',
      totalPageNum: 'number',
      pageSize: 'number',
      data: QueryTrademarkMonitorRulesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrademarkMonitorRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTrademarkMonitorRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTrademarkMonitorRulesResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DenySupplementResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DenySupplementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DenySupplementResponseBody,
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
  type?: number;
  status?: number;
  reviewApplicationFile?: string;
  contactDistrict?: string;
  businessLicenceUrl?: string;
  passportUrl?: string;
  contactProvince?: string;
  legalNoticeUrl?: string;
  city?: string;
  EAddress?: string;
  contactCounty?: string;
  contactEmail?: string;
  requestId?: string;
  contactCity?: string;
  region?: number;
  loaUrl?: string;
  address?: string;
  note?: string;
  principalName?: number;
  name?: string;
  principalDescription?: string;
  contactNumber?: string;
  contactAddress?: string;
  contactZipcode?: string;
  contactName?: string;
  EName?: string;
  validDate?: number;
  idCardUrl?: string;
  expirationDate?: number;
  cardNumber?: string;
  country?: string;
  town?: string;
  loaStatus?: number;
  reason?: string;
  id?: number;
  province?: string;
  legalNoticeKey?: string;
  reviewAdditionalFiles?: QueryMaterialResponseBodyReviewAdditionalFiles;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      reviewApplicationFile: 'ReviewApplicationFile',
      contactDistrict: 'ContactDistrict',
      businessLicenceUrl: 'BusinessLicenceUrl',
      passportUrl: 'PassportUrl',
      contactProvince: 'ContactProvince',
      legalNoticeUrl: 'LegalNoticeUrl',
      city: 'City',
      EAddress: 'EAddress',
      contactCounty: 'ContactCounty',
      contactEmail: 'ContactEmail',
      requestId: 'RequestId',
      contactCity: 'ContactCity',
      region: 'Region',
      loaUrl: 'LoaUrl',
      address: 'Address',
      note: 'Note',
      principalName: 'PrincipalName',
      name: 'Name',
      principalDescription: 'PrincipalDescription',
      contactNumber: 'ContactNumber',
      contactAddress: 'ContactAddress',
      contactZipcode: 'ContactZipcode',
      contactName: 'ContactName',
      EName: 'EName',
      validDate: 'ValidDate',
      idCardUrl: 'IdCardUrl',
      expirationDate: 'ExpirationDate',
      cardNumber: 'CardNumber',
      country: 'Country',
      town: 'Town',
      loaStatus: 'LoaStatus',
      reason: 'Reason',
      id: 'Id',
      province: 'Province',
      legalNoticeKey: 'LegalNoticeKey',
      reviewAdditionalFiles: 'ReviewAdditionalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      reviewApplicationFile: 'string',
      contactDistrict: 'string',
      businessLicenceUrl: 'string',
      passportUrl: 'string',
      contactProvince: 'string',
      legalNoticeUrl: 'string',
      city: 'string',
      EAddress: 'string',
      contactCounty: 'string',
      contactEmail: 'string',
      requestId: 'string',
      contactCity: 'string',
      region: 'number',
      loaUrl: 'string',
      address: 'string',
      note: 'string',
      principalName: 'number',
      name: 'string',
      principalDescription: 'string',
      contactNumber: 'string',
      contactAddress: 'string',
      contactZipcode: 'string',
      contactName: 'string',
      EName: 'string',
      validDate: 'number',
      idCardUrl: 'string',
      expirationDate: 'number',
      cardNumber: 'string',
      country: 'string',
      town: 'string',
      loaStatus: 'number',
      reason: 'string',
      id: 'number',
      province: 'string',
      legalNoticeKey: 'string',
      reviewAdditionalFiles: QueryMaterialResponseBodyReviewAdditionalFiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkOrderRequest extends $tea.Model {
  userId?: number;
  tmName?: string;
  tmIcon?: string;
  type?: number;
  orderData?: string;
  materialId?: string;
  loaOssKey?: string;
  isBlackIcon?: boolean;
  renewInfoId?: string;
  rootCode?: string;
  channel?: string;
  registerNumber?: string;
  tmNameType?: string;
  registerName?: string;
  tmComment?: string;
  bizId?: string;
  uid?: string;
  partnerCode?: string;
  realUserName?: string;
  phoneNum?: string;
  principalName?: number;
  bigDipperSource?: string;
  ua?: string;
  legalNoticeKey?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      type: 'Type',
      orderData: 'OrderData',
      materialId: 'MaterialId',
      loaOssKey: 'LoaOssKey',
      isBlackIcon: 'IsBlackIcon',
      renewInfoId: 'RenewInfoId',
      rootCode: 'RootCode',
      channel: 'Channel',
      registerNumber: 'RegisterNumber',
      tmNameType: 'TmNameType',
      registerName: 'RegisterName',
      tmComment: 'TmComment',
      bizId: 'BizId',
      uid: 'Uid',
      partnerCode: 'PartnerCode',
      realUserName: 'RealUserName',
      phoneNum: 'PhoneNum',
      principalName: 'PrincipalName',
      bigDipperSource: 'BigDipperSource',
      ua: 'Ua',
      legalNoticeKey: 'LegalNoticeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      tmName: 'string',
      tmIcon: 'string',
      type: 'number',
      orderData: 'string',
      materialId: 'string',
      loaOssKey: 'string',
      isBlackIcon: 'boolean',
      renewInfoId: 'string',
      rootCode: 'string',
      channel: 'string',
      registerNumber: 'string',
      tmNameType: 'string',
      registerName: 'string',
      tmComment: 'string',
      bizId: 'string',
      uid: 'string',
      partnerCode: 'string',
      realUserName: 'string',
      phoneNum: 'string',
      principalName: 'number',
      bigDipperSource: 'string',
      ua: 'string',
      legalNoticeKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkOrderResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrademarkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTrademarkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTrademarkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListRequest extends $tea.Model {
  name?: string;
  type?: number;
  region?: number;
  status?: number;
  pageNum?: number;
  pageSize?: number;
  cardNumber?: string;
  principalName?: number;
  materialId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      region: 'Region',
      status: 'Status',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      cardNumber: 'CardNumber',
      principalName: 'PrincipalName',
      materialId: 'MaterialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'number',
      region: 'number',
      status: 'number',
      pageNum: 'number',
      pageSize: 'number',
      cardNumber: 'string',
      principalName: 'number',
      materialId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryMaterialListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryMaterialListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMaterialListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMaterialListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMaterialListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrademarkOrderRequest extends $tea.Model {
  userId?: number;
  tmName?: string;
  tmIcon?: string;
  type?: number;
  orderData?: string;
  materialId?: string;
  loaOssKey?: string;
  isBlackIcon?: boolean;
  renewInfoId?: string;
  rootCode?: string;
  channel?: string;
  registerNumber?: string;
  tmNameType?: string;
  registerName?: string;
  tmComment?: string;
  bizId?: string;
  uid?: string;
  partnerCode?: string;
  realUserName?: string;
  phoneNum?: string;
  logoGoodsId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      type: 'Type',
      orderData: 'OrderData',
      materialId: 'MaterialId',
      loaOssKey: 'LoaOssKey',
      isBlackIcon: 'IsBlackIcon',
      renewInfoId: 'RenewInfoId',
      rootCode: 'RootCode',
      channel: 'Channel',
      registerNumber: 'RegisterNumber',
      tmNameType: 'TmNameType',
      registerName: 'RegisterName',
      tmComment: 'TmComment',
      bizId: 'BizId',
      uid: 'Uid',
      partnerCode: 'PartnerCode',
      realUserName: 'RealUserName',
      phoneNum: 'PhoneNum',
      logoGoodsId: 'LogoGoodsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      tmName: 'string',
      tmIcon: 'string',
      type: 'number',
      orderData: 'string',
      materialId: 'string',
      loaOssKey: 'string',
      isBlackIcon: 'boolean',
      renewInfoId: 'string',
      rootCode: 'string',
      channel: 'string',
      registerNumber: 'string',
      tmNameType: 'string',
      registerName: 'string',
      tmComment: 'string',
      bizId: 'string',
      uid: 'string',
      partnerCode: 'string',
      realUserName: 'string',
      phoneNum: 'string',
      logoGoodsId: 'string',
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
  body: CheckTrademarkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckTrademarkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsRequest extends $tea.Model {
  tmName?: string;
  pageNum?: number;
  pageSize?: number;
  materialName?: string;
  tmNumber?: string;
  orderId?: string;
  status?: number;
  supplementStatus?: number;
  sortOrder?: string;
  type?: string;
  bizId?: string;
  intentionBizId?: string;
  hidden?: number;
  productType?: number;
  logisticsNo?: string;
  classificationCode?: string;
  sortFiled?: string;
  static names(): { [key: string]: string } {
    return {
      tmName: 'TmName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      materialName: 'MaterialName',
      tmNumber: 'TmNumber',
      orderId: 'OrderId',
      status: 'Status',
      supplementStatus: 'SupplementStatus',
      sortOrder: 'SortOrder',
      type: 'Type',
      bizId: 'BizId',
      intentionBizId: 'IntentionBizId',
      hidden: 'Hidden',
      productType: 'ProductType',
      logisticsNo: 'LogisticsNo',
      classificationCode: 'ClassificationCode',
      sortFiled: 'SortFiled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      materialName: 'string',
      tmNumber: 'string',
      orderId: 'string',
      status: 'number',
      supplementStatus: 'number',
      sortOrder: 'string',
      type: 'string',
      bizId: 'string',
      intentionBizId: 'string',
      hidden: 'number',
      productType: 'number',
      logisticsNo: 'string',
      classificationCode: 'string',
      sortFiled: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryTradeMarkApplicationsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryTradeMarkApplicationsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTradeMarkApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTradeMarkApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicantContacterRequest extends $tea.Model {
  contactAddress?: string;
  contactName?: string;
  contactNumber?: string;
  contactEmail?: string;
  applicantId?: number;
  contactZipCode?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      contactAddress: 'ContactAddress',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactEmail: 'ContactEmail',
      applicantId: 'ApplicantId',
      contactZipCode: 'ContactZipCode',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactAddress: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactEmail: 'string',
      applicantId: 'number',
      contactZipCode: 'string',
      bizId: 'string',
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
  body: UpdateApplicantContacterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApplicantContacterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskRequest extends $tea.Model {
  request?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: 'string',
      bizType: 'string',
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
  body: SaveTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTrademarkApplicationComplaintRequest extends $tea.Model {
  bizId?: string;
  files?: { [key: string]: any };
  content?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      files: 'Files',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      files: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTrademarkApplicationComplaintShrinkRequest extends $tea.Model {
  bizId?: string;
  filesShrink?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      filesShrink: 'Files',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      filesShrink: 'string',
      content: 'string',
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
  body: SubmitTrademarkApplicationComplaintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitTrademarkApplicationComplaintResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteIntentionCommunicationLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WriteIntentionCommunicationLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WriteIntentionCommunicationLogResponseBody,
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
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForOfficialFileCustomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveTaskForOfficialFileCustomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTaskForOfficialFileCustomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkRequest extends $tea.Model {
  registrationNumber?: string;
  name?: string;
  ownerName?: string;
  products?: string;
  accurateMatch?: boolean;
  pageNumber?: number;
  pageSize?: number;
  classification?: string;
  similarGroups?: string;
  static names(): { [key: string]: string } {
    return {
      registrationNumber: 'RegistrationNumber',
      name: 'Name',
      ownerName: 'OwnerName',
      products: 'Products',
      accurateMatch: 'AccurateMatch',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      classification: 'Classification',
      similarGroups: 'SimilarGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationNumber: 'string',
      name: 'string',
      ownerName: 'string',
      products: 'string',
      accurateMatch: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      classification: 'string',
      similarGroups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponseBody extends $tea.Model {
  nextPage?: boolean;
  requestId?: string;
  totalPageNumber?: number;
  prePage?: boolean;
  currentPageNumber?: number;
  totalItemNumber?: number;
  pageSize?: number;
  data?: DescirbeCombineTrademarkResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      nextPage: 'NextPage',
      requestId: 'RequestId',
      totalPageNumber: 'TotalPageNumber',
      prePage: 'PrePage',
      currentPageNumber: 'CurrentPageNumber',
      totalItemNumber: 'TotalItemNumber',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPage: 'boolean',
      requestId: 'string',
      totalPageNumber: 'number',
      prePage: 'boolean',
      currentPageNumber: 'number',
      totalItemNumber: 'number',
      pageSize: 'number',
      data: { 'type': 'array', 'itemType': DescirbeCombineTrademarkResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescirbeCombineTrademarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescirbeCombineTrademarkResponseBody,
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
  type?: string;
  orderPrice?: number;
  legalPersonIdCard?: string;
  businessLicenseId?: string;
  notaryPostReceipt?: string;
  companyContactName?: string;
  notaryStatus?: number;
  sellerBackOfIdCard?: string;
  tmRegisterChangeCertificate?: string;
  requestId?: string;
  legalPersonName?: string;
  tmImage?: string;
  notaryAcceptDate?: number;
  errorCode?: string;
  aliyunOrderId?: string;
  notarySucceedDate?: number;
  applyPostStatus?: number;
  errorMsg?: string;
  name?: string;
  businessLicense?: string;
  receiverName?: string;
  orderDate?: number;
  companyContactPhone?: string;
  notaryType?: number;
  notaryFailedDate?: number;
  tmClassification?: string;
  success?: boolean;
  bizId?: string;
  notaryOrderId?: number;
  phone?: string;
  receiverPhone?: string;
  tmRegisterCertificate?: string;
  tmName?: string;
  tmRegisterNo?: string;
  sellerCompanyName?: string;
  tmAcceptCertificate?: string;
  receiverPostalCode?: string;
  notaryCertificate?: string;
  legalPersonPhone?: string;
  notaryFailedReason?: string;
  sellerFrontOfIdCard?: string;
  receiverAddress?: string;
  notaryPlatformName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      orderPrice: 'OrderPrice',
      legalPersonIdCard: 'LegalPersonIdCard',
      businessLicenseId: 'BusinessLicenseId',
      notaryPostReceipt: 'NotaryPostReceipt',
      companyContactName: 'CompanyContactName',
      notaryStatus: 'NotaryStatus',
      sellerBackOfIdCard: 'SellerBackOfIdCard',
      tmRegisterChangeCertificate: 'TmRegisterChangeCertificate',
      requestId: 'RequestId',
      legalPersonName: 'LegalPersonName',
      tmImage: 'TmImage',
      notaryAcceptDate: 'NotaryAcceptDate',
      errorCode: 'ErrorCode',
      aliyunOrderId: 'AliyunOrderId',
      notarySucceedDate: 'NotarySucceedDate',
      applyPostStatus: 'ApplyPostStatus',
      errorMsg: 'ErrorMsg',
      name: 'Name',
      businessLicense: 'BusinessLicense',
      receiverName: 'ReceiverName',
      orderDate: 'OrderDate',
      companyContactPhone: 'CompanyContactPhone',
      notaryType: 'NotaryType',
      notaryFailedDate: 'NotaryFailedDate',
      tmClassification: 'TmClassification',
      success: 'Success',
      bizId: 'BizId',
      notaryOrderId: 'NotaryOrderId',
      phone: 'Phone',
      receiverPhone: 'ReceiverPhone',
      tmRegisterCertificate: 'TmRegisterCertificate',
      tmName: 'TmName',
      tmRegisterNo: 'TmRegisterNo',
      sellerCompanyName: 'SellerCompanyName',
      tmAcceptCertificate: 'TmAcceptCertificate',
      receiverPostalCode: 'ReceiverPostalCode',
      notaryCertificate: 'NotaryCertificate',
      legalPersonPhone: 'LegalPersonPhone',
      notaryFailedReason: 'NotaryFailedReason',
      sellerFrontOfIdCard: 'SellerFrontOfIdCard',
      receiverAddress: 'ReceiverAddress',
      notaryPlatformName: 'NotaryPlatformName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      orderPrice: 'number',
      legalPersonIdCard: 'string',
      businessLicenseId: 'string',
      notaryPostReceipt: 'string',
      companyContactName: 'string',
      notaryStatus: 'number',
      sellerBackOfIdCard: 'string',
      tmRegisterChangeCertificate: 'string',
      requestId: 'string',
      legalPersonName: 'string',
      tmImage: 'string',
      notaryAcceptDate: 'number',
      errorCode: 'string',
      aliyunOrderId: 'string',
      notarySucceedDate: 'number',
      applyPostStatus: 'number',
      errorMsg: 'string',
      name: 'string',
      businessLicense: 'string',
      receiverName: 'string',
      orderDate: 'number',
      companyContactPhone: 'string',
      notaryType: 'number',
      notaryFailedDate: 'number',
      tmClassification: 'string',
      success: 'boolean',
      bizId: 'string',
      notaryOrderId: 'number',
      phone: 'string',
      receiverPhone: 'string',
      tmRegisterCertificate: 'string',
      tmName: 'string',
      tmRegisterNo: 'string',
      sellerCompanyName: 'string',
      tmAcceptCertificate: 'string',
      receiverPostalCode: 'string',
      notaryCertificate: 'string',
      legalPersonPhone: 'string',
      notaryFailedReason: 'string',
      sellerFrontOfIdCard: 'string',
      receiverAddress: 'string',
      notaryPlatformName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotaryOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNotaryOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNotaryOrderResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmAdditionalMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmAdditionalMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmAdditionalMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRenewInfoRequest extends $tea.Model {
  name?: string;
  engName?: string;
  address?: string;
  engAddress?: string;
  registerTime?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      engName: 'EngName',
      address: 'Address',
      engAddress: 'EngAddress',
      registerTime: 'RegisterTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      engName: 'string',
      address: 'string',
      engAddress: 'string',
      registerTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRenewInfoResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRenewInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertRenewInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertRenewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoRequest extends $tea.Model {
  ossKey?: string;
  materialType?: string;
  companyName?: string;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
      materialType: 'MaterialType',
      companyName: 'CompanyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      materialType: 'string',
      companyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoResponseBody extends $tea.Model {
  requestId?: string;
  credentialsInfo?: QueryCredentialsInfoResponseBodyCredentialsInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      credentialsInfo: 'CredentialsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      credentialsInfo: QueryCredentialsInfoResponseBodyCredentialsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCredentialsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCredentialsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesRequest extends $tea.Model {
  keyword?: string;
  classification?: string;
  productCode?: string;
  pageNum?: number;
  pageSize?: number;
  registerNumber?: string;
  tmName?: string;
  topSearch?: string;
  tag?: string;
  orderPriceLeft?: number;
  orderPriceRight?: number;
  regLeft?: number;
  regRight?: number;
  sortName?: string;
  sortOrder?: string;
  queryAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      classification: 'Classification',
      productCode: 'ProductCode',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      registerNumber: 'RegisterNumber',
      tmName: 'TmName',
      topSearch: 'TopSearch',
      tag: 'Tag',
      orderPriceLeft: 'OrderPriceLeft',
      orderPriceRight: 'OrderPriceRight',
      regLeft: 'RegLeft',
      regRight: 'RegRight',
      sortName: 'SortName',
      sortOrder: 'SortOrder',
      queryAll: 'QueryAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      classification: 'string',
      productCode: 'string',
      pageNum: 'number',
      pageSize: 'number',
      registerNumber: 'string',
      tmName: 'string',
      topSearch: 'string',
      tag: 'string',
      orderPriceLeft: 'number',
      orderPriceRight: 'number',
      regLeft: 'number',
      regRight: 'number',
      sortName: 'string',
      sortOrder: 'string',
      queryAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  totalPageNumber?: number;
  totalCount?: number;
  trademarks?: SearchTmOnsalesResponseBodyTrademarks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalPageNumber: 'TotalPageNumber',
      totalCount: 'TotalCount',
      trademarks: 'Trademarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalPageNumber: 'number',
      totalCount: 'number',
      trademarks: { 'type': 'array', 'itemType': SearchTmOnsalesResponseBodyTrademarks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTmOnsalesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTmOnsalesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyRequest extends $tea.Model {
  fileType?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyResponseBody extends $tea.Model {
  signature?: string;
  host?: string;
  requestId?: string;
  expireTime?: number;
  encodedPolicy?: string;
  fileDir?: string;
  accessId?: string;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      host: 'Host',
      requestId: 'RequestId',
      expireTime: 'ExpireTime',
      encodedPolicy: 'EncodedPolicy',
      fileDir: 'FileDir',
      accessId: 'AccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      host: 'string',
      requestId: 'string',
      expireTime: 'number',
      encodedPolicy: 'string',
      fileDir: 'string',
      accessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateUploadFilePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateUploadFilePolicyResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMaterialResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteCommunicationLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WriteCommunicationLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WriteCommunicationLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTradeIntentionUserRequest extends $tea.Model {
  registerNumber?: string;
  classification?: string;
  type?: number;
  mobile?: string;
  vcode?: string;
  partnerCode?: string;
  userName?: string;
  description?: string;
  channel?: string;
  token?: string;
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      registerNumber: 'RegisterNumber',
      classification: 'Classification',
      type: 'Type',
      mobile: 'Mobile',
      vcode: 'Vcode',
      partnerCode: 'PartnerCode',
      userName: 'UserName',
      description: 'Description',
      channel: 'Channel',
      token: 'Token',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerNumber: 'string',
      classification: 'string',
      type: 'number',
      mobile: 'string',
      vcode: 'string',
      partnerCode: 'string',
      userName: 'string',
      description: 'string',
      channel: 'string',
      token: 'string',
      ua: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTradeIntentionUserResponseBody extends $tea.Model {
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

export class InsertTradeIntentionUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertTradeIntentionUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertTradeIntentionUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtensionAttributeRequest extends $tea.Model {
  bizId?: string;
  attributeKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      attributeKey: 'AttributeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      attributeKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtensionAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      attributeValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtensionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryExtensionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkOnsaleRequest extends $tea.Model {
  classificationCode?: string;
  tmName?: string;
  tmIcon?: string;
  originalPrice?: number;
  tmNumber?: string;
  endTime?: number;
  beginTime?: number;
  description?: string;
  label?: string;
  regAnnDate?: number;
  ownerName?: string;
  ownerEnName?: string;
  secondaryClassification?: string;
  thirdClassification?: string;
  type?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      originalPrice: 'OriginalPrice',
      tmNumber: 'TmNumber',
      endTime: 'EndTime',
      beginTime: 'BeginTime',
      description: 'Description',
      label: 'Label',
      regAnnDate: 'RegAnnDate',
      ownerName: 'OwnerName',
      ownerEnName: 'OwnerEnName',
      secondaryClassification: 'SecondaryClassification',
      thirdClassification: 'ThirdClassification',
      type: 'Type',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      tmName: 'string',
      tmIcon: 'string',
      originalPrice: 'number',
      tmNumber: 'string',
      endTime: 'number',
      beginTime: 'number',
      description: 'string',
      label: 'string',
      regAnnDate: 'number',
      ownerName: 'string',
      ownerEnName: 'string',
      secondaryClassification: 'string',
      thirdClassification: 'string',
      type: 'string',
      reason: 'string',
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
  body: UpdateTrademarkOnsaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTrademarkOnsaleResponseBody,
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
  requestId?: string;
  data?: QueryTradeProduceDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryTradeProduceDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTradeProduceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTradeProduceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQrCodeUploadStatusRequest extends $tea.Model {
  ossKey?: string;
  fieldKey?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
      fieldKey: 'FieldKey',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      fieldKey: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQrCodeUploadStatusResponseBody extends $tea.Model {
  status?: number;
  requestId?: string;
  ossUrl?: string;
  ossKey?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      ossUrl: 'OssUrl',
      ossKey: 'OssKey',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      requestId: 'string',
      ossUrl: 'string',
      ossKey: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQrCodeUploadStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryQrCodeUploadStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryQrCodeUploadStatusResponseBody,
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
  body: RejectApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RejectApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListRequest extends $tea.Model {
  begin?: number;
  end?: number;
  pageSize?: number;
  pageNum?: number;
  bizId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      bizId: 'BizId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      pageSize: 'number',
      pageNum: 'number',
      bizId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryTradeIntentionUserListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryTradeIntentionUserListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTradeIntentionUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTradeIntentionUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StoreMaterialTemporarilyRequest extends $tea.Model {
  contactZipcode?: string;
  type?: string;
  region?: string;
  contactName?: string;
  contactNumber?: string;
  contactEmail?: string;
  contactAddress?: string;
  loaOssKey?: string;
  name?: string;
  cardNumber?: string;
  province?: string;
  city?: string;
  town?: string;
  address?: string;
  EName?: string;
  EAddress?: string;
  country?: string;
  idCardOssKey?: string;
  businessLicenceOssKey?: string;
  passportOssKey?: string;
  legalNoticeOssKey?: string;
  principalName?: number;
  contactProvince?: string;
  contactCity?: string;
  contactDistrict?: string;
  contactCounty?: string;
  static names(): { [key: string]: string } {
    return {
      contactZipcode: 'ContactZipcode',
      type: 'Type',
      region: 'Region',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactEmail: 'ContactEmail',
      contactAddress: 'ContactAddress',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      cardNumber: 'CardNumber',
      province: 'Province',
      city: 'City',
      town: 'Town',
      address: 'Address',
      EName: 'EName',
      EAddress: 'EAddress',
      country: 'Country',
      idCardOssKey: 'IdCardOssKey',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      passportOssKey: 'PassportOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      principalName: 'PrincipalName',
      contactProvince: 'ContactProvince',
      contactCity: 'ContactCity',
      contactDistrict: 'ContactDistrict',
      contactCounty: 'ContactCounty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactZipcode: 'string',
      type: 'string',
      region: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactEmail: 'string',
      contactAddress: 'string',
      loaOssKey: 'string',
      name: 'string',
      cardNumber: 'string',
      province: 'string',
      city: 'string',
      town: 'string',
      address: 'string',
      EName: 'string',
      EAddress: 'string',
      country: 'string',
      idCardOssKey: 'string',
      businessLicenceOssKey: 'string',
      passportOssKey: 'string',
      legalNoticeOssKey: 'string',
      principalName: 'number',
      contactProvince: 'string',
      contactCity: 'string',
      contactDistrict: 'string',
      contactCounty: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StoreMaterialTemporarilyResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StoreMaterialTemporarilyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StoreMaterialTemporarilyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StoreMaterialTemporarilyResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseAdditionalMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefuseAdditionalMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefuseAdditionalMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosRequest extends $tea.Model {
  notaryType?: number;
  bizOrderNo?: string;
  token?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      notaryType: 'NotaryType',
      bizOrderNo: 'BizOrderNo',
      token: 'Token',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notaryType: 'number',
      bizOrderNo: 'string',
      token: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosResponseBody extends $tea.Model {
  nextPage?: boolean;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  totalItemNum?: number;
  prePage?: boolean;
  currentPageNum?: number;
  errorMsg?: string;
  totalPageNum?: number;
  pageSize?: number;
  data?: ListNotaryInfosResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextPage: 'NextPage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      totalItemNum: 'TotalItemNum',
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      errorMsg: 'ErrorMsg',
      totalPageNum: 'TotalPageNum',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      totalItemNum: 'number',
      prePage: 'boolean',
      currentPageNum: 'number',
      errorMsg: 'string',
      totalPageNum: 'number',
      pageSize: 'number',
      data: ListNotaryInfosResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNotaryInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNotaryInfosResponseBody,
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
  body: GetDefaultPrincipalNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDefaultPrincipalNameResponseBody,
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
  type?: number;
  status?: number;
  acceptUrl?: string;
  orderPrice?: number;
  submitAuditTime?: number;
  updateTime?: number;
  createTime?: number;
  notAcceptUrl?: string;
  sendTime?: string;
  servicePrice?: number;
  partnerMobile?: string;
  recvUserLogistics?: string;
  requestId?: string;
  grayIconUrl?: string;
  materialId?: number;
  sendSbjLogistics?: string;
  sendUserLogistics?: string;
  loaUrl?: string;
  tmNumber?: string;
  note?: string;
  principalName?: number;
  partnerName?: string;
  logisticsCertificateUrl?: string;
  bizId?: string;
  partnerCode?: string;
  tmNameType?: number;
  extendInfo?: { [key: string]: any };
  tmIcon?: string;
  tmName?: string;
  logisticsNo?: string;
  totalPrice?: number;
  submitTime?: number;
  orderId?: string;
  receiptUrl?: QueryTradeMarkApplicationDetailResponseBodyReceiptUrl;
  judgeResultUrl?: QueryTradeMarkApplicationDetailResponseBodyJudgeResultUrl;
  flags?: QueryTradeMarkApplicationDetailResponseBodyFlags;
  adminUploads?: QueryTradeMarkApplicationDetailResponseBodyAdminUploads;
  firstClassification?: QueryTradeMarkApplicationDetailResponseBodyFirstClassification;
  materialDetail?: QueryTradeMarkApplicationDetailResponseBodyMaterialDetail;
  renewResponse?: QueryTradeMarkApplicationDetailResponseBodyRenewResponse;
  reviewOfficialFiles?: QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFiles;
  supplements?: QueryTradeMarkApplicationDetailResponseBodySupplements;
  thirdClassification?: QueryTradeMarkApplicationDetailResponseBodyThirdClassification;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      acceptUrl: 'AcceptUrl',
      orderPrice: 'OrderPrice',
      submitAuditTime: 'SubmitAuditTime',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      notAcceptUrl: 'NotAcceptUrl',
      sendTime: 'SendTime',
      servicePrice: 'ServicePrice',
      partnerMobile: 'PartnerMobile',
      recvUserLogistics: 'RecvUserLogistics',
      requestId: 'RequestId',
      grayIconUrl: 'GrayIconUrl',
      materialId: 'MaterialId',
      sendSbjLogistics: 'SendSbjLogistics',
      sendUserLogistics: 'SendUserLogistics',
      loaUrl: 'LoaUrl',
      tmNumber: 'TmNumber',
      note: 'Note',
      principalName: 'PrincipalName',
      partnerName: 'PartnerName',
      logisticsCertificateUrl: 'LogisticsCertificateUrl',
      bizId: 'BizId',
      partnerCode: 'PartnerCode',
      tmNameType: 'TmNameType',
      extendInfo: 'ExtendInfo',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      logisticsNo: 'LogisticsNo',
      totalPrice: 'TotalPrice',
      submitTime: 'SubmitTime',
      orderId: 'OrderId',
      receiptUrl: 'ReceiptUrl',
      judgeResultUrl: 'JudgeResultUrl',
      flags: 'Flags',
      adminUploads: 'AdminUploads',
      firstClassification: 'FirstClassification',
      materialDetail: 'MaterialDetail',
      renewResponse: 'RenewResponse',
      reviewOfficialFiles: 'ReviewOfficialFiles',
      supplements: 'Supplements',
      thirdClassification: 'ThirdClassification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      acceptUrl: 'string',
      orderPrice: 'number',
      submitAuditTime: 'number',
      updateTime: 'number',
      createTime: 'number',
      notAcceptUrl: 'string',
      sendTime: 'string',
      servicePrice: 'number',
      partnerMobile: 'string',
      recvUserLogistics: 'string',
      requestId: 'string',
      grayIconUrl: 'string',
      materialId: 'number',
      sendSbjLogistics: 'string',
      sendUserLogistics: 'string',
      loaUrl: 'string',
      tmNumber: 'string',
      note: 'string',
      principalName: 'number',
      partnerName: 'string',
      logisticsCertificateUrl: 'string',
      bizId: 'string',
      partnerCode: 'string',
      tmNameType: 'number',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tmIcon: 'string',
      tmName: 'string',
      logisticsNo: 'string',
      totalPrice: 'number',
      submitTime: 'number',
      orderId: 'string',
      receiptUrl: QueryTradeMarkApplicationDetailResponseBodyReceiptUrl,
      judgeResultUrl: QueryTradeMarkApplicationDetailResponseBodyJudgeResultUrl,
      flags: QueryTradeMarkApplicationDetailResponseBodyFlags,
      adminUploads: QueryTradeMarkApplicationDetailResponseBodyAdminUploads,
      firstClassification: QueryTradeMarkApplicationDetailResponseBodyFirstClassification,
      materialDetail: QueryTradeMarkApplicationDetailResponseBodyMaterialDetail,
      renewResponse: QueryTradeMarkApplicationDetailResponseBodyRenewResponse,
      reviewOfficialFiles: QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFiles,
      supplements: QueryTradeMarkApplicationDetailResponseBodySupplements,
      thirdClassification: QueryTradeMarkApplicationDetailResponseBodyThirdClassification,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTradeMarkApplicationDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTradeMarkApplicationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveClassificationConditionsRequest extends $tea.Model {
  type?: number;
  bizId?: string;
  condition?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      condition: 'Condition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      condition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveClassificationConditionsResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  tagName?: string;
  success?: boolean;
  invalidList?: SaveClassificationConditionsResponseBodyInvalidList[];
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      tagName: 'TagName',
      success: 'Success',
      invalidList: 'InvalidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      tagName: 'string',
      success: 'boolean',
      invalidList: { 'type': 'array', 'itemType': SaveClassificationConditionsResponseBodyInvalidList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveClassificationConditionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveClassificationConditionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveClassificationConditionsResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FillLogisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FillLogisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FillLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialRequest extends $tea.Model {
  loaId?: number;
  contactAddress?: string;
  contactName?: string;
  contactNumber?: string;
  contactEmail?: string;
  id?: number;
  contactZipcode?: string;
  name?: string;
  cardNumber?: string;
  province?: string;
  city?: string;
  town?: string;
  address?: string;
  EName?: string;
  EAddress?: string;
  idCardOssKey?: string;
  businessLicenceOssKey?: string;
  passportOssKey?: string;
  loaOssKey?: string;
  legalNoticeOssKey?: string;
  contactProvince?: string;
  contactCity?: string;
  contactDistrict?: string;
  contactCounty?: string;
  static names(): { [key: string]: string } {
    return {
      loaId: 'LoaId',
      contactAddress: 'ContactAddress',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactEmail: 'ContactEmail',
      id: 'Id',
      contactZipcode: 'ContactZipcode',
      name: 'Name',
      cardNumber: 'CardNumber',
      province: 'Province',
      city: 'City',
      town: 'Town',
      address: 'Address',
      EName: 'EName',
      EAddress: 'EAddress',
      idCardOssKey: 'IdCardOssKey',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      passportOssKey: 'PassportOssKey',
      loaOssKey: 'LoaOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      contactProvince: 'ContactProvince',
      contactCity: 'ContactCity',
      contactDistrict: 'ContactDistrict',
      contactCounty: 'ContactCounty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loaId: 'number',
      contactAddress: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactEmail: 'string',
      id: 'number',
      contactZipcode: 'string',
      name: 'string',
      cardNumber: 'string',
      province: 'string',
      city: 'string',
      town: 'string',
      address: 'string',
      EName: 'string',
      EAddress: 'string',
      idCardOssKey: 'string',
      businessLicenceOssKey: 'string',
      passportOssKey: 'string',
      loaOssKey: 'string',
      legalNoticeOssKey: 'string',
      contactProvince: 'string',
      contactCity: 'string',
      contactDistrict: 'string',
      contactCounty: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMaterialResponseBody,
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
  requestId?: string;
  data?: QueryTradeMarkApplicationLogsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryTradeMarkApplicationLogsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTradeMarkApplicationLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTradeMarkApplicationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundProduceRequest extends $tea.Model {
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

export class RefundProduceResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundProduceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefundProduceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefundProduceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncTrademarkRequest extends $tea.Model {
  classificationCode?: string;
  tmName?: string;
  tmIcon?: string;
  originalPrice?: number;
  tmNumber?: string;
  status?: string;
  endTime?: number;
  beginTime?: number;
  description?: string;
  label?: string;
  regAnnDate?: number;
  ownerName?: string;
  ownerEnName?: string;
  secondaryClassification?: string;
  thirdClassification?: string;
  type?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      classificationCode: 'ClassificationCode',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      originalPrice: 'OriginalPrice',
      tmNumber: 'TmNumber',
      status: 'Status',
      endTime: 'EndTime',
      beginTime: 'BeginTime',
      description: 'Description',
      label: 'Label',
      regAnnDate: 'RegAnnDate',
      ownerName: 'OwnerName',
      ownerEnName: 'OwnerEnName',
      secondaryClassification: 'SecondaryClassification',
      thirdClassification: 'ThirdClassification',
      type: 'Type',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationCode: 'string',
      tmName: 'string',
      tmIcon: 'string',
      originalPrice: 'number',
      tmNumber: 'string',
      status: 'string',
      endTime: 'number',
      beginTime: 'number',
      description: 'string',
      label: 'string',
      regAnnDate: 'number',
      ownerName: 'string',
      ownerEnName: 'string',
      secondaryClassification: 'string',
      thirdClassification: 'string',
      type: 'string',
      reason: 'string',
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
  body: SyncTrademarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncTrademarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineLoaRequest extends $tea.Model {
  materialId?: string;
  trademarkName?: string;
  materialName?: string;
  nationality?: string;
  address?: string;
  tmProduceType?: string;
  principalName?: number;
  static names(): { [key: string]: string } {
    return {
      materialId: 'MaterialId',
      trademarkName: 'TrademarkName',
      materialName: 'MaterialName',
      nationality: 'Nationality',
      address: 'Address',
      tmProduceType: 'TmProduceType',
      principalName: 'PrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialId: 'string',
      trademarkName: 'string',
      materialName: 'string',
      nationality: 'string',
      address: 'string',
      tmProduceType: 'string',
      principalName: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineLoaResponseBody extends $tea.Model {
  templateCombineUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      templateCombineUrl: 'TemplateCombineUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCombineUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CombineLoaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CombineLoaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CombineLoaResponseBody,
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
  requestId?: string;
  data?: FilterUnavailableCodesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: FilterUnavailableCodesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUnavailableCodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FilterUnavailableCodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FilterUnavailableCodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertMaterialRequest extends $tea.Model {
  contactZipcode?: string;
  type?: number;
  region?: number;
  contactName?: string;
  contactNumber?: string;
  contactEmail?: string;
  contactAddress?: string;
  loaOssKey?: string;
  name?: string;
  cardNumber?: string;
  province?: string;
  city?: string;
  town?: string;
  address?: string;
  EName?: string;
  EAddress?: string;
  country?: string;
  idCardOssKey?: string;
  businessLicenceOssKey?: string;
  passportOssKey?: string;
  legalNoticeOssKey?: string;
  principalName?: number;
  contactProvince?: string;
  contactCity?: string;
  contactDistrict?: string;
  contactCounty?: string;
  static names(): { [key: string]: string } {
    return {
      contactZipcode: 'ContactZipcode',
      type: 'Type',
      region: 'Region',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactEmail: 'ContactEmail',
      contactAddress: 'ContactAddress',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      cardNumber: 'CardNumber',
      province: 'Province',
      city: 'City',
      town: 'Town',
      address: 'Address',
      EName: 'EName',
      EAddress: 'EAddress',
      country: 'Country',
      idCardOssKey: 'IdCardOssKey',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      passportOssKey: 'PassportOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      principalName: 'PrincipalName',
      contactProvince: 'ContactProvince',
      contactCity: 'ContactCity',
      contactDistrict: 'ContactDistrict',
      contactCounty: 'ContactCounty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactZipcode: 'string',
      type: 'number',
      region: 'number',
      contactName: 'string',
      contactNumber: 'string',
      contactEmail: 'string',
      contactAddress: 'string',
      loaOssKey: 'string',
      name: 'string',
      cardNumber: 'string',
      province: 'string',
      city: 'string',
      town: 'string',
      address: 'string',
      EName: 'string',
      EAddress: 'string',
      country: 'string',
      idCardOssKey: 'string',
      businessLicenceOssKey: 'string',
      passportOssKey: 'string',
      legalNoticeOssKey: 'string',
      principalName: 'number',
      contactProvince: 'string',
      contactCity: 'string',
      contactDistrict: 'string',
      contactCounty: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertMaterialResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTradeMarkReviewMaterialDetailRequest extends $tea.Model {
  bizId?: string;
  type?: number;
  region?: number;
  country?: string;
  contactName?: string;
  contactNumber?: string;
  contactEmail?: string;
  contactAddress?: string;
  loaOssKey?: string;
  name?: string;
  cardNumber?: string;
  province?: string;
  address?: string;
  engName?: string;
  engAddress?: string;
  idCardOssKey?: string;
  businessLicenceOssKey?: string;
  passportOssKey?: string;
  legalNoticeOssKey?: string;
  applicationOssKey?: string;
  additionalOssKeyList?: { [key: string]: any };
  submitType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      type: 'Type',
      region: 'Region',
      country: 'Country',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactEmail: 'ContactEmail',
      contactAddress: 'ContactAddress',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      cardNumber: 'CardNumber',
      province: 'Province',
      address: 'Address',
      engName: 'EngName',
      engAddress: 'EngAddress',
      idCardOssKey: 'IdCardOssKey',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      passportOssKey: 'PassportOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      applicationOssKey: 'ApplicationOssKey',
      additionalOssKeyList: 'AdditionalOssKeyList',
      submitType: 'SubmitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      type: 'number',
      region: 'number',
      country: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactEmail: 'string',
      contactAddress: 'string',
      loaOssKey: 'string',
      name: 'string',
      cardNumber: 'string',
      province: 'string',
      address: 'string',
      engName: 'string',
      engAddress: 'string',
      idCardOssKey: 'string',
      businessLicenceOssKey: 'string',
      passportOssKey: 'string',
      legalNoticeOssKey: 'string',
      applicationOssKey: 'string',
      additionalOssKeyList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTradeMarkReviewMaterialDetailShrinkRequest extends $tea.Model {
  bizId?: string;
  type?: number;
  region?: number;
  country?: string;
  contactName?: string;
  contactNumber?: string;
  contactEmail?: string;
  contactAddress?: string;
  loaOssKey?: string;
  name?: string;
  cardNumber?: string;
  province?: string;
  address?: string;
  engName?: string;
  engAddress?: string;
  idCardOssKey?: string;
  businessLicenceOssKey?: string;
  passportOssKey?: string;
  legalNoticeOssKey?: string;
  applicationOssKey?: string;
  additionalOssKeyListShrink?: string;
  submitType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      type: 'Type',
      region: 'Region',
      country: 'Country',
      contactName: 'ContactName',
      contactNumber: 'ContactNumber',
      contactEmail: 'ContactEmail',
      contactAddress: 'ContactAddress',
      loaOssKey: 'LoaOssKey',
      name: 'Name',
      cardNumber: 'CardNumber',
      province: 'Province',
      address: 'Address',
      engName: 'EngName',
      engAddress: 'EngAddress',
      idCardOssKey: 'IdCardOssKey',
      businessLicenceOssKey: 'BusinessLicenceOssKey',
      passportOssKey: 'PassportOssKey',
      legalNoticeOssKey: 'LegalNoticeOssKey',
      applicationOssKey: 'ApplicationOssKey',
      additionalOssKeyListShrink: 'AdditionalOssKeyList',
      submitType: 'SubmitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      type: 'number',
      region: 'number',
      country: 'string',
      contactName: 'string',
      contactNumber: 'string',
      contactEmail: 'string',
      contactAddress: 'string',
      loaOssKey: 'string',
      name: 'string',
      cardNumber: 'string',
      province: 'string',
      address: 'string',
      engName: 'string',
      engAddress: 'string',
      idCardOssKey: 'string',
      businessLicenceOssKey: 'string',
      passportOssKey: 'string',
      legalNoticeOssKey: 'string',
      applicationOssKey: 'string',
      additionalOssKeyListShrink: 'string',
      submitType: 'number',
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
  body: SaveTradeMarkReviewMaterialDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTradeMarkReviewMaterialDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorKeywordsRequest extends $tea.Model {
  ruleType?: number;
  keywords?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorKeywordsResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryMonitorKeywordsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryMonitorKeywordsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorKeywordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMonitorKeywordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMonitorKeywordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListRequest extends $tea.Model {
  bizType?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBody extends $tea.Model {
  currentPageNum?: number;
  totalPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalItemNum?: number;
  data?: QueryTaskListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      totalPageNum: 'TotalPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      totalPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalItemNum: 'number',
      data: QueryTaskListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkNameRequest extends $tea.Model {
  clientToken?: string;
  bizId?: string;
  tmName?: string;
  tmIcon?: string;
  tmComment?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      bizId: 'BizId',
      tmName: 'TmName',
      tmIcon: 'TmIcon',
      tmComment: 'TmComment',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      bizId: 'string',
      tmName: 'string',
      tmIcon: 'string',
      tmComment: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkNameResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrademarkNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTrademarkNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTrademarkNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillRequest extends $tea.Model {
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillResponseBody extends $tea.Model {
  requestId?: string;
  data?: CheckLoaFillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CheckLoaFillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLoaFillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckLoaFillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckLoaFillResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmApplicantResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderRequest extends $tea.Model {
  intentionBizId?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      intentionBizId: 'IntentionBizId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentionBizId: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  data?: CreateIntentionOrderResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      data: CreateIntentionOrderResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIntentionOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIntentionOrderResponseBody,
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
  requestId?: string;
  data?: QueryOssResourcesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryOssResourcesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOssResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOssResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOssResourcesResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseApplicantResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefuseApplicantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefuseApplicantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderGeneratingPayRequest extends $tea.Model {
  intentionBizId?: string;
  paymentCallback?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      intentionBizId: 'IntentionBizId',
      paymentCallback: 'PaymentCallback',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentionBizId: 'string',
      paymentCallback: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderGeneratingPayResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  payUrl?: string;
  success?: boolean;
  orderIds?: number[];
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      payUrl: 'PayUrl',
      success: 'Success',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      payUrl: 'string',
      success: 'boolean',
      orderIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentionOrderGeneratingPayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIntentionOrderGeneratingPayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIntentionOrderGeneratingPayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersRequest extends $tea.Model {
  startOrderDate?: number;
  endOrderDate?: number;
  notaryStatus?: number;
  aliyunOrderId?: string;
  sortByType?: string;
  sortKeyType?: number;
  pageNum?: number;
  pageSize?: number;
  bizId?: string;
  notaryType?: number;
  static names(): { [key: string]: string } {
    return {
      startOrderDate: 'StartOrderDate',
      endOrderDate: 'EndOrderDate',
      notaryStatus: 'NotaryStatus',
      aliyunOrderId: 'AliyunOrderId',
      sortByType: 'SortByType',
      sortKeyType: 'SortKeyType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      bizId: 'BizId',
      notaryType: 'NotaryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startOrderDate: 'number',
      endOrderDate: 'number',
      notaryStatus: 'number',
      aliyunOrderId: 'string',
      sortByType: 'string',
      sortKeyType: 'number',
      pageNum: 'number',
      pageSize: 'number',
      bizId: 'string',
      notaryType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersResponseBody extends $tea.Model {
  nextPage?: boolean;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  totalItemNum?: number;
  prePage?: boolean;
  currentPageNum?: number;
  errorMsg?: string;
  totalPageNum?: number;
  pageSize?: number;
  data?: ListNotaryOrdersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextPage: 'NextPage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      totalItemNum: 'TotalItemNum',
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      errorMsg: 'ErrorMsg',
      totalPageNum: 'TotalPageNum',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      totalItemNum: 'number',
      prePage: 'boolean',
      currentPageNum: 'number',
      errorMsg: 'string',
      totalPageNum: 'number',
      pageSize: 'number',
      data: ListNotaryOrdersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotaryOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNotaryOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNotaryOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportPrincipalNameResponseBody extends $tea.Model {
  requestId?: string;
  principals?: GetSupportPrincipalNameResponseBodyPrincipals[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      principals: 'Principals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      principals: { 'type': 'array', 'itemType': GetSupportPrincipalNameResponseBodyPrincipals },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportPrincipalNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSupportPrincipalNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSupportPrincipalNameResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  notaryUrl?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      notaryUrl: 'NotaryUrl',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      notaryUrl: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNotaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartNotaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartNotaryResponseBody,
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
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSendMaterialNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSendMaterialNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSendMaterialNumResponseBody,
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
  body: DeleteTrademarkApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTrademarkApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceListResponseBodyDataTradeProduces extends $tea.Model {
  updateTime?: number;
  preAmount?: number;
  createTime?: number;
  userId?: string;
  bizId?: string;
  icon?: string;
  buyerStatus?: number;
  source?: number;
  operateNote?: string;
  preOrderId?: string;
  allowCancel?: boolean;
  registerNumber?: string;
  classification?: string;
  finalAmount?: number;
  failReason?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      preAmount: 'PreAmount',
      createTime: 'CreateTime',
      userId: 'UserId',
      bizId: 'BizId',
      icon: 'Icon',
      buyerStatus: 'BuyerStatus',
      source: 'Source',
      operateNote: 'OperateNote',
      preOrderId: 'PreOrderId',
      allowCancel: 'AllowCancel',
      registerNumber: 'RegisterNumber',
      classification: 'Classification',
      finalAmount: 'FinalAmount',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      preAmount: 'number',
      createTime: 'number',
      userId: 'string',
      bizId: 'string',
      icon: 'string',
      buyerStatus: 'number',
      source: 'number',
      operateNote: 'string',
      preOrderId: 'string',
      allowCancel: 'boolean',
      registerNumber: 'string',
      classification: 'string',
      finalAmount: 'number',
      failReason: 'number',
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

export class QueryTrademarkMonitorResultsResponseBodyDataTmMonitorResult extends $tea.Model {
  tmProcedureStatusDesc?: string;
  wuxiaoEndDate?: string;
  userId?: string;
  ownerEnName?: string;
  tmUid?: string;
  ownerName?: string;
  dataUpdateTime?: number;
  chesanEndDate?: string;
  xuzhanEndDate?: string;
  ruleId?: string;
  registrationNumber?: string;
  tmName?: string;
  tmImage?: string;
  dataCreateTime?: number;
  yiyiEndDate?: string;
  classification?: string;
  applyDate?: string;
  static names(): { [key: string]: string } {
    return {
      tmProcedureStatusDesc: 'TmProcedureStatusDesc',
      wuxiaoEndDate: 'WuxiaoEndDate',
      userId: 'UserId',
      ownerEnName: 'OwnerEnName',
      tmUid: 'TmUid',
      ownerName: 'OwnerName',
      dataUpdateTime: 'DataUpdateTime',
      chesanEndDate: 'ChesanEndDate',
      xuzhanEndDate: 'XuzhanEndDate',
      ruleId: 'RuleId',
      registrationNumber: 'RegistrationNumber',
      tmName: 'TmName',
      tmImage: 'TmImage',
      dataCreateTime: 'DataCreateTime',
      yiyiEndDate: 'YiyiEndDate',
      classification: 'Classification',
      applyDate: 'ApplyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tmProcedureStatusDesc: 'string',
      wuxiaoEndDate: 'string',
      userId: 'string',
      ownerEnName: 'string',
      tmUid: 'string',
      ownerName: 'string',
      dataUpdateTime: 'number',
      chesanEndDate: 'string',
      xuzhanEndDate: 'string',
      ruleId: 'string',
      registrationNumber: 'string',
      tmName: 'string',
      tmImage: 'string',
      dataCreateTime: 'number',
      yiyiEndDate: 'string',
      classification: 'string',
      applyDate: 'string',
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

export class QueryIntentionPriceResponseBodyDataTmProducesThirdClassificationThirdClassifications extends $tea.Model {
  classificationName?: string;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationName: 'ClassificationName',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationName: 'string',
      classificationCode: 'string',
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

export class QueryIntentionPriceResponseBodyDataTmProducesFirstClassification extends $tea.Model {
  classificationName?: string;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationName: 'ClassificationName',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationName: 'string',
      classificationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentionPriceResponseBodyDataTmProduces extends $tea.Model {
  type?: number;
  status?: number;
  orderPrice?: number;
  updateTime?: number;
  materialName?: string;
  createTime?: number;
  bizId?: string;
  servicePrice?: number;
  tmIcon?: string;
  tmName?: string;
  materialId?: string;
  supplementId?: number;
  loaUrl?: string;
  tmNumber?: string;
  note?: string;
  supplementStatus?: number;
  totalPrice?: number;
  thirdClassification?: QueryIntentionPriceResponseBodyDataTmProducesThirdClassification;
  firstClassification?: QueryIntentionPriceResponseBodyDataTmProducesFirstClassification;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      orderPrice: 'OrderPrice',
      updateTime: 'UpdateTime',
      materialName: 'MaterialName',
      createTime: 'CreateTime',
      bizId: 'BizId',
      servicePrice: 'ServicePrice',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      materialId: 'MaterialId',
      supplementId: 'SupplementId',
      loaUrl: 'LoaUrl',
      tmNumber: 'TmNumber',
      note: 'Note',
      supplementStatus: 'SupplementStatus',
      totalPrice: 'TotalPrice',
      thirdClassification: 'ThirdClassification',
      firstClassification: 'FirstClassification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      orderPrice: 'number',
      updateTime: 'number',
      materialName: 'string',
      createTime: 'number',
      bizId: 'string',
      servicePrice: 'number',
      tmIcon: 'string',
      tmName: 'string',
      materialId: 'string',
      supplementId: 'number',
      loaUrl: 'string',
      tmNumber: 'string',
      note: 'string',
      supplementStatus: 'number',
      totalPrice: 'number',
      thirdClassification: QueryIntentionPriceResponseBodyDataTmProducesThirdClassification,
      firstClassification: QueryIntentionPriceResponseBodyDataTmProducesFirstClassification,
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

export class QueryOfficialFileCustomListResponseBodyDataCustomList extends $tea.Model {
  status?: string;
  expireTime?: number;
  remark?: string;
  downloadUrl?: string;
  createTime?: number;
  endAcceptTime?: number;
  startAcceptTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      remark: 'Remark',
      downloadUrl: 'DownloadUrl',
      createTime: 'CreateTime',
      endAcceptTime: 'EndAcceptTime',
      startAcceptTime: 'StartAcceptTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'number',
      remark: 'string',
      downloadUrl: 'string',
      createTime: 'number',
      endAcceptTime: 'number',
      startAcceptTime: 'number',
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

export class QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassificationThirdClassifications extends $tea.Model {
  classificationName?: string;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationName: 'ClassificationName',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationName: 'string',
      classificationCode: 'string',
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

export class QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesFirstClassification extends $tea.Model {
  classificationName?: string;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationName: 'ClassificationName',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationName: 'string',
      classificationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProduces extends $tea.Model {
  principalDescription?: string;
  type?: number;
  status?: number;
  orderPrice?: number;
  updateTime?: number;
  materialName?: string;
  principalValue?: number;
  createTime?: number;
  bizId?: string;
  servicePrice?: number;
  tmIcon?: string;
  tmName?: string;
  materialId?: string;
  supplementId?: number;
  loaUrl?: string;
  tmNumber?: string;
  note?: string;
  supplementStatus?: number;
  totalPrice?: number;
  thirdClassification?: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassification;
  firstClassification?: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesFirstClassification;
  static names(): { [key: string]: string } {
    return {
      principalDescription: 'PrincipalDescription',
      type: 'Type',
      status: 'Status',
      orderPrice: 'OrderPrice',
      updateTime: 'UpdateTime',
      materialName: 'MaterialName',
      principalValue: 'PrincipalValue',
      createTime: 'CreateTime',
      bizId: 'BizId',
      servicePrice: 'ServicePrice',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      materialId: 'MaterialId',
      supplementId: 'SupplementId',
      loaUrl: 'LoaUrl',
      tmNumber: 'TmNumber',
      note: 'Note',
      supplementStatus: 'SupplementStatus',
      totalPrice: 'TotalPrice',
      thirdClassification: 'ThirdClassification',
      firstClassification: 'FirstClassification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalDescription: 'string',
      type: 'number',
      status: 'number',
      orderPrice: 'number',
      updateTime: 'number',
      materialName: 'string',
      principalValue: 'number',
      createTime: 'number',
      bizId: 'string',
      servicePrice: 'number',
      tmIcon: 'string',
      tmName: 'string',
      materialId: 'string',
      supplementId: 'number',
      loaUrl: 'string',
      tmNumber: 'string',
      note: 'string',
      supplementStatus: 'number',
      totalPrice: 'number',
      thirdClassification: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesThirdClassification,
      firstClassification: QueryTradeMarkApplicationsByIntentionResponseBodyDataTmProducesFirstClassification,
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

export class QueryCommunicationLogsResponseBodyDataTaskList extends $tea.Model {
  note?: string;
  bizId?: string;
  updateTime?: number;
  partnerCode?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      bizId: 'BizId',
      updateTime: 'UpdateTime',
      partnerCode: 'PartnerCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      bizId: 'string',
      updateTime: 'number',
      partnerCode: 'string',
      createTime: 'number',
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

export class QueryIntentionListResponseBodyDataIntention extends $tea.Model {
  type?: number;
  status?: number;
  updateTime?: number;
  description?: string;
  registerNumber?: string;
  createTime?: number;
  userId?: string;
  bizId?: string;
  classification?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      updateTime: 'UpdateTime',
      description: 'Description',
      registerNumber: 'RegisterNumber',
      createTime: 'CreateTime',
      userId: 'UserId',
      bizId: 'BizId',
      classification: 'Classification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      updateTime: 'number',
      description: 'string',
      registerNumber: 'string',
      createTime: 'number',
      userId: 'string',
      bizId: 'string',
      classification: 'string',
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

export class QueryTrademarkPriceResponseBodyPricesPrices extends $tea.Model {
  originalPrice?: number;
  discountPrice?: number;
  currency?: string;
  tradePrice?: number;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      tradePrice: 'TradePrice',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      currency: 'string',
      tradePrice: 'number',
      classificationCode: 'string',
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

export class QueryTrademarkMonitorRulesResponseBodyDataTmMonitorRule extends $tea.Model {
  ruleStatus?: string;
  lastFinishTime?: string;
  updateTime?: string;
  ruleType?: number;
  createTime?: string;
  userId?: string;
  ruleExtend?: string;
  ruleName?: string;
  endTime?: string;
  startTime?: string;
  ruleKeyword?: string;
  lastRunTime?: string;
  version?: number;
  ruleSource?: string;
  lastUpdateTime?: string;
  env?: string;
  notifyUpdate?: number;
  ruleDetail?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ruleStatus: 'RuleStatus',
      lastFinishTime: 'LastFinishTime',
      updateTime: 'UpdateTime',
      ruleType: 'RuleType',
      createTime: 'CreateTime',
      userId: 'UserId',
      ruleExtend: 'RuleExtend',
      ruleName: 'RuleName',
      endTime: 'EndTime',
      startTime: 'StartTime',
      ruleKeyword: 'RuleKeyword',
      lastRunTime: 'LastRunTime',
      version: 'Version',
      ruleSource: 'RuleSource',
      lastUpdateTime: 'LastUpdateTime',
      env: 'Env',
      notifyUpdate: 'NotifyUpdate',
      ruleDetail: 'RuleDetail',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleStatus: 'string',
      lastFinishTime: 'string',
      updateTime: 'string',
      ruleType: 'number',
      createTime: 'string',
      userId: 'string',
      ruleExtend: 'string',
      ruleName: 'string',
      endTime: 'string',
      startTime: 'string',
      ruleKeyword: 'string',
      lastRunTime: 'string',
      version: 'number',
      ruleSource: 'string',
      lastUpdateTime: 'string',
      env: 'string',
      notifyUpdate: 'number',
      ruleDetail: 'string',
      id: 'string',
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
  principalDescription?: string;
  status?: number;
  type?: number;
  contactName?: string;
  cardNumber?: string;
  validDate?: number;
  region?: number;
  principalName?: number;
  loaStatus?: number;
  name?: string;
  loaKey?: string;
  id?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      principalDescription: 'PrincipalDescription',
      status: 'Status',
      type: 'Type',
      contactName: 'ContactName',
      cardNumber: 'CardNumber',
      validDate: 'ValidDate',
      region: 'Region',
      principalName: 'PrincipalName',
      loaStatus: 'LoaStatus',
      name: 'Name',
      loaKey: 'LoaKey',
      id: 'Id',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalDescription: 'string',
      status: 'number',
      type: 'number',
      contactName: 'string',
      cardNumber: 'string',
      validDate: 'number',
      region: 'number',
      principalName: 'number',
      loaStatus: 'number',
      name: 'string',
      loaKey: 'string',
      id: 'number',
      reason: 'string',
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

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassificationThirdClassifications extends $tea.Model {
  classificationName?: string;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationName: 'ClassificationName',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationName: 'string',
      classificationCode: 'string',
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

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesFirstClassification extends $tea.Model {
  classificationName?: string;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      classificationName: 'ClassificationName',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationName: 'string',
      classificationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProducesRenewResponse extends $tea.Model {
  engName?: string;
  registerTime?: number;
  engAddress?: string;
  address?: string;
  name?: string;
  submitSbjtime?: number;
  static names(): { [key: string]: string } {
    return {
      engName: 'EngName',
      registerTime: 'RegisterTime',
      engAddress: 'EngAddress',
      address: 'Address',
      name: 'Name',
      submitSbjtime: 'SubmitSbjtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engName: 'string',
      registerTime: 'number',
      engAddress: 'string',
      address: 'string',
      name: 'string',
      submitSbjtime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationsResponseBodyDataTmProduces extends $tea.Model {
  type?: number;
  status?: number;
  orderPrice?: number;
  submitAuditTime?: number;
  updateTime?: number;
  materialName?: string;
  remark?: string;
  createTime?: number;
  userId?: string;
  bizId?: string;
  servicePrice?: number;
  tmIcon?: string;
  tmName?: string;
  materialId?: number;
  supplementId?: number;
  loaUrl?: string;
  tmNumber?: string;
  note?: string;
  supplementStatus?: number;
  principalName?: number;
  totalPrice?: number;
  submitTime?: number;
  orderId?: string;
  thirdClassification?: QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassification;
  flags?: QueryTradeMarkApplicationsResponseBodyDataTmProducesFlags;
  firstClassification?: QueryTradeMarkApplicationsResponseBodyDataTmProducesFirstClassification;
  renewResponse?: QueryTradeMarkApplicationsResponseBodyDataTmProducesRenewResponse;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      orderPrice: 'OrderPrice',
      submitAuditTime: 'SubmitAuditTime',
      updateTime: 'UpdateTime',
      materialName: 'MaterialName',
      remark: 'Remark',
      createTime: 'CreateTime',
      userId: 'UserId',
      bizId: 'BizId',
      servicePrice: 'ServicePrice',
      tmIcon: 'TmIcon',
      tmName: 'TmName',
      materialId: 'MaterialId',
      supplementId: 'SupplementId',
      loaUrl: 'LoaUrl',
      tmNumber: 'TmNumber',
      note: 'Note',
      supplementStatus: 'SupplementStatus',
      principalName: 'PrincipalName',
      totalPrice: 'TotalPrice',
      submitTime: 'SubmitTime',
      orderId: 'OrderId',
      thirdClassification: 'ThirdClassification',
      flags: 'Flags',
      firstClassification: 'FirstClassification',
      renewResponse: 'RenewResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      orderPrice: 'number',
      submitAuditTime: 'number',
      updateTime: 'number',
      materialName: 'string',
      remark: 'string',
      createTime: 'number',
      userId: 'string',
      bizId: 'string',
      servicePrice: 'number',
      tmIcon: 'string',
      tmName: 'string',
      materialId: 'number',
      supplementId: 'number',
      loaUrl: 'string',
      tmNumber: 'string',
      note: 'string',
      supplementStatus: 'number',
      principalName: 'number',
      totalPrice: 'number',
      submitTime: 'number',
      orderId: 'string',
      thirdClassification: QueryTradeMarkApplicationsResponseBodyDataTmProducesThirdClassification,
      flags: QueryTradeMarkApplicationsResponseBodyDataTmProducesFlags,
      firstClassification: QueryTradeMarkApplicationsResponseBodyDataTmProducesFirstClassification,
      renewResponse: QueryTradeMarkApplicationsResponseBodyDataTmProducesRenewResponse,
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

export class DescirbeCombineTrademarkResponseBodyDataAnnouncementList extends $tea.Model {
  imageUrl?: string;
  annDate?: string;
  originalImageUrl?: string;
  annTypeName?: string;
  annNumber?: string;
  annTypeCode?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      annDate: 'AnnDate',
      originalImageUrl: 'OriginalImageUrl',
      annTypeName: 'AnnTypeName',
      annNumber: 'AnnNumber',
      annTypeCode: 'AnnTypeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      annDate: 'string',
      originalImageUrl: 'string',
      annTypeName: 'string',
      annNumber: 'string',
      annTypeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponseBodyDataProcedures extends $tea.Model {
  procedureStep?: string;
  procedureResult?: string;
  procedureCode?: string;
  procedureDate?: string;
  procedureName?: string;
  static names(): { [key: string]: string } {
    return {
      procedureStep: 'ProcedureStep',
      procedureResult: 'ProcedureResult',
      procedureCode: 'ProcedureCode',
      procedureDate: 'ProcedureDate',
      procedureName: 'ProcedureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      procedureStep: 'string',
      procedureResult: 'string',
      procedureCode: 'string',
      procedureDate: 'string',
      procedureName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeCombineTrademarkResponseBodyData extends $tea.Model {
  status?: string;
  ownerAddress?: string;
  preAnnDate?: string;
  preAnnNumber?: string;
  intlRegDate?: string;
  share?: string;
  ownerEnName?: string;
  subsequentDesignationDate?: string;
  indexId?: string;
  regAnnNumber?: string;
  registrationNumber?: string;
  secondAnnoType?: string;
  agency?: string;
  ownerEnAddress?: string;
  classification?: string;
  name?: string;
  applyDate?: string;
  priorityDate?: string;
  productDescription?: string;
  image?: string;
  secondAnnoNumber?: string;
  registrationType?: string;
  firstAnnoNumber?: string;
  ownerName?: string;
  regAnnDate?: string;
  similarGroup?: string;
  onSale?: number;
  exclusiveDateLimit?: string;
  firstAnnoType?: string;
  lastProcedureStatus?: string;
  lawFinalStatus?: string;
  announcementList?: DescirbeCombineTrademarkResponseBodyDataAnnouncementList[];
  procedures?: DescirbeCombineTrademarkResponseBodyDataProcedures[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ownerAddress: 'OwnerAddress',
      preAnnDate: 'PreAnnDate',
      preAnnNumber: 'PreAnnNumber',
      intlRegDate: 'IntlRegDate',
      share: 'Share',
      ownerEnName: 'OwnerEnName',
      subsequentDesignationDate: 'SubsequentDesignationDate',
      indexId: 'IndexId',
      regAnnNumber: 'RegAnnNumber',
      registrationNumber: 'RegistrationNumber',
      secondAnnoType: 'SecondAnnoType',
      agency: 'Agency',
      ownerEnAddress: 'OwnerEnAddress',
      classification: 'Classification',
      name: 'Name',
      applyDate: 'ApplyDate',
      priorityDate: 'PriorityDate',
      productDescription: 'ProductDescription',
      image: 'Image',
      secondAnnoNumber: 'SecondAnnoNumber',
      registrationType: 'RegistrationType',
      firstAnnoNumber: 'FirstAnnoNumber',
      ownerName: 'OwnerName',
      regAnnDate: 'RegAnnDate',
      similarGroup: 'SimilarGroup',
      onSale: 'OnSale',
      exclusiveDateLimit: 'ExclusiveDateLimit',
      firstAnnoType: 'FirstAnnoType',
      lastProcedureStatus: 'LastProcedureStatus',
      lawFinalStatus: 'LawFinalStatus',
      announcementList: 'AnnouncementList',
      procedures: 'Procedures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ownerAddress: 'string',
      preAnnDate: 'string',
      preAnnNumber: 'string',
      intlRegDate: 'string',
      share: 'string',
      ownerEnName: 'string',
      subsequentDesignationDate: 'string',
      indexId: 'string',
      regAnnNumber: 'string',
      registrationNumber: 'string',
      secondAnnoType: 'string',
      agency: 'string',
      ownerEnAddress: 'string',
      classification: 'string',
      name: 'string',
      applyDate: 'string',
      priorityDate: 'string',
      productDescription: 'string',
      image: 'string',
      secondAnnoNumber: 'string',
      registrationType: 'string',
      firstAnnoNumber: 'string',
      ownerName: 'string',
      regAnnDate: 'string',
      similarGroup: 'string',
      onSale: 'number',
      exclusiveDateLimit: 'string',
      firstAnnoType: 'string',
      lastProcedureStatus: 'string',
      lawFinalStatus: 'string',
      announcementList: { 'type': 'array', 'itemType': DescirbeCombineTrademarkResponseBodyDataAnnouncementList },
      procedures: { 'type': 'array', 'itemType': DescirbeCombineTrademarkResponseBodyDataProcedures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCredentialsInfoResponseBodyCredentialsInfo extends $tea.Model {
  cardNumber?: string;
  address?: string;
  personName?: string;
  province?: string;
  companyName?: string;
  static names(): { [key: string]: string } {
    return {
      cardNumber: 'CardNumber',
      address: 'Address',
      personName: 'PersonName',
      province: 'Province',
      companyName: 'CompanyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNumber: 'string',
      address: 'string',
      personName: 'string',
      province: 'string',
      companyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTmOnsalesResponseBodyTrademarks extends $tea.Model {
  trademarkName?: string;
  status?: number;
  productDesc?: string;
  registrationNumber?: string;
  icon?: string;
  partnerCode?: string;
  classification?: string;
  uid?: string;
  productCode?: string;
  orderPrice?: string;
  static names(): { [key: string]: string } {
    return {
      trademarkName: 'TrademarkName',
      status: 'Status',
      productDesc: 'ProductDesc',
      registrationNumber: 'RegistrationNumber',
      icon: 'Icon',
      partnerCode: 'PartnerCode',
      classification: 'Classification',
      uid: 'Uid',
      productCode: 'ProductCode',
      orderPrice: 'OrderPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademarkName: 'string',
      status: 'number',
      productDesc: 'string',
      registrationNumber: 'string',
      icon: 'string',
      partnerCode: 'string',
      classification: 'string',
      uid: 'string',
      productCode: 'string',
      orderPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeProduceDetailResponseBodyData extends $tea.Model {
  updateTime?: number;
  thirdCode?: string;
  share?: string;
  preAmount?: number;
  createTime?: number;
  userId?: string;
  refundAmount?: number;
  icon?: string;
  bizId?: string;
  buyerStatus?: number;
  source?: number;
  confiscateAmount?: number;
  operateNote?: string;
  preOrderId?: string;
  extend?: { [key: string]: any };
  tmName?: string;
  exclusiveDateLimit?: string;
  allowCancel?: boolean;
  registerNumber?: string;
  finalAmount?: number;
  classification?: string;
  paidAmount?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      thirdCode: 'ThirdCode',
      share: 'Share',
      preAmount: 'PreAmount',
      createTime: 'CreateTime',
      userId: 'UserId',
      refundAmount: 'RefundAmount',
      icon: 'Icon',
      bizId: 'BizId',
      buyerStatus: 'BuyerStatus',
      source: 'Source',
      confiscateAmount: 'ConfiscateAmount',
      operateNote: 'OperateNote',
      preOrderId: 'PreOrderId',
      extend: 'Extend',
      tmName: 'TmName',
      exclusiveDateLimit: 'ExclusiveDateLimit',
      allowCancel: 'AllowCancel',
      registerNumber: 'RegisterNumber',
      finalAmount: 'FinalAmount',
      classification: 'Classification',
      paidAmount: 'PaidAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      thirdCode: 'string',
      share: 'string',
      preAmount: 'number',
      createTime: 'number',
      userId: 'string',
      refundAmount: 'number',
      icon: 'string',
      bizId: 'string',
      buyerStatus: 'number',
      source: 'number',
      confiscateAmount: 'number',
      operateNote: 'string',
      preOrderId: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tmName: 'string',
      exclusiveDateLimit: 'string',
      allowCancel: 'boolean',
      registerNumber: 'string',
      finalAmount: 'number',
      classification: 'string',
      paidAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeIntentionUserListResponseBodyDataTrademark extends $tea.Model {
  type?: number;
  status?: number;
  description?: string;
  mobile?: string;
  registerNumber?: string;
  bizId?: string;
  classification?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      description: 'Description',
      mobile: 'Mobile',
      registerNumber: 'RegisterNumber',
      bizId: 'BizId',
      classification: 'Classification',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      description: 'string',
      mobile: 'string',
      registerNumber: 'string',
      bizId: 'string',
      classification: 'string',
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

export class ListNotaryInfosResponseBodyDataNotaryInfo extends $tea.Model {
  token?: string;
  tmRegisterNo?: string;
  tmClassification?: string;
  notaryFailedReason?: string;
  gmtModified?: number;
  notaryStatus?: number;
  bizOrderNo?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      tmRegisterNo: 'TmRegisterNo',
      tmClassification: 'TmClassification',
      notaryFailedReason: 'NotaryFailedReason',
      gmtModified: 'GmtModified',
      notaryStatus: 'NotaryStatus',
      bizOrderNo: 'BizOrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      tmRegisterNo: 'string',
      tmClassification: 'string',
      notaryFailedReason: 'string',
      gmtModified: 'number',
      notaryStatus: 'number',
      bizOrderNo: 'string',
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

export class QueryTradeMarkApplicationDetailResponseBodyAdminUploads extends $tea.Model {
  loaPicUrl?: string;
  licensePicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      loaPicUrl: 'LoaPicUrl',
      licensePicUrl: 'LicensePicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loaPicUrl: 'string',
      licensePicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyFirstClassification extends $tea.Model {
  name?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      code: 'string',
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
  type?: number;
  reviewApplicationFile?: string;
  status?: number;
  businessLicenceUrl?: string;
  passportUrl?: string;
  city?: string;
  legalNoticeUrl?: string;
  EAddress?: string;
  contactEmail?: string;
  region?: number;
  loaUrl?: string;
  address?: string;
  principalName?: number;
  name?: string;
  contactNumber?: string;
  contactAddress?: string;
  contactZipcode?: string;
  contactName?: string;
  EName?: string;
  cardNumber?: string;
  expirationDate?: string;
  idCardUrl?: string;
  country?: string;
  town?: string;
  province?: string;
  detailedContactAddress?: string;
  reviewAdditionalFiles?: QueryTradeMarkApplicationDetailResponseBodyMaterialDetailReviewAdditionalFiles;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      reviewApplicationFile: 'ReviewApplicationFile',
      status: 'Status',
      businessLicenceUrl: 'BusinessLicenceUrl',
      passportUrl: 'PassportUrl',
      city: 'City',
      legalNoticeUrl: 'LegalNoticeUrl',
      EAddress: 'EAddress',
      contactEmail: 'ContactEmail',
      region: 'Region',
      loaUrl: 'LoaUrl',
      address: 'Address',
      principalName: 'PrincipalName',
      name: 'Name',
      contactNumber: 'ContactNumber',
      contactAddress: 'ContactAddress',
      contactZipcode: 'ContactZipcode',
      contactName: 'ContactName',
      EName: 'EName',
      cardNumber: 'CardNumber',
      expirationDate: 'ExpirationDate',
      idCardUrl: 'IdCardUrl',
      country: 'Country',
      town: 'Town',
      province: 'Province',
      detailedContactAddress: 'DetailedContactAddress',
      reviewAdditionalFiles: 'ReviewAdditionalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      reviewApplicationFile: 'string',
      status: 'number',
      businessLicenceUrl: 'string',
      passportUrl: 'string',
      city: 'string',
      legalNoticeUrl: 'string',
      EAddress: 'string',
      contactEmail: 'string',
      region: 'number',
      loaUrl: 'string',
      address: 'string',
      principalName: 'number',
      name: 'string',
      contactNumber: 'string',
      contactAddress: 'string',
      contactZipcode: 'string',
      contactName: 'string',
      EName: 'string',
      cardNumber: 'string',
      expirationDate: 'string',
      idCardUrl: 'string',
      country: 'string',
      town: 'string',
      province: 'string',
      detailedContactAddress: 'string',
      reviewAdditionalFiles: QueryTradeMarkApplicationDetailResponseBodyMaterialDetailReviewAdditionalFiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationDetailResponseBodyRenewResponse extends $tea.Model {
  engName?: string;
  registerTime?: number;
  engAddress?: string;
  address?: string;
  name?: string;
  submitSbjtime?: number;
  static names(): { [key: string]: string } {
    return {
      engName: 'EngName',
      registerTime: 'RegisterTime',
      engAddress: 'EngAddress',
      address: 'Address',
      name: 'Name',
      submitSbjtime: 'SubmitSbjtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engName: 'string',
      registerTime: 'number',
      engAddress: 'string',
      address: 'string',
      name: 'string',
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
  reviewKeep?: string;
  reviewAudit?: string;
  reviewPart?: string;
  reviewPass?: string;
  reviewSupplements?: QueryTradeMarkApplicationDetailResponseBodyReviewOfficialFilesReviewSupplements;
  static names(): { [key: string]: string } {
    return {
      reviewKeep: 'ReviewKeep',
      reviewAudit: 'ReviewAudit',
      reviewPart: 'ReviewPart',
      reviewPass: 'ReviewPass',
      reviewSupplements: 'ReviewSupplements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeep: 'string',
      reviewAudit: 'string',
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
  type?: number;
  operateTime?: number;
  serialNumber?: string;
  status?: number;
  sbjDeadTime?: number;
  acceptDeadTime?: number;
  sendTime?: number;
  batchNum?: string;
  acceptTime?: number;
  tmNumber?: string;
  uploadFileTemplateUrl?: string;
  content?: string;
  id?: number;
  orderId?: string;
  fileTemplateUrls?: QueryTradeMarkApplicationDetailResponseBodySupplementsSupplementsFileTemplateUrls;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      operateTime: 'OperateTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
      sbjDeadTime: 'SbjDeadTime',
      acceptDeadTime: 'AcceptDeadTime',
      sendTime: 'SendTime',
      batchNum: 'BatchNum',
      acceptTime: 'AcceptTime',
      tmNumber: 'TmNumber',
      uploadFileTemplateUrl: 'UploadFileTemplateUrl',
      content: 'Content',
      id: 'Id',
      orderId: 'OrderId',
      fileTemplateUrls: 'FileTemplateUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      operateTime: 'number',
      serialNumber: 'string',
      status: 'number',
      sbjDeadTime: 'number',
      acceptDeadTime: 'number',
      sendTime: 'number',
      batchNum: 'string',
      acceptTime: 'number',
      tmNumber: 'string',
      uploadFileTemplateUrl: 'string',
      content: 'string',
      id: 'number',
      orderId: 'string',
      fileTemplateUrls: QueryTradeMarkApplicationDetailResponseBodySupplementsSupplementsFileTemplateUrls,
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
  name?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      code: 'string',
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

export class SaveClassificationConditionsResponseBodyInvalidList extends $tea.Model {
  parentCode?: string;
  officialCode?: string;
  classificationName?: string;
  classificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      parentCode: 'ParentCode',
      officialCode: 'OfficialCode',
      classificationName: 'ClassificationName',
      classificationCode: 'ClassificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCode: 'string',
      officialCode: 'string',
      classificationName: 'string',
      classificationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTradeMarkApplicationLogsResponseBodyDataData extends $tea.Model {
  operateTime?: number;
  operateType?: number;
  extendContent?: string;
  bizId?: string;
  note?: string;
  bizStatus?: number;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'OperateTime',
      operateType: 'OperateType',
      extendContent: 'ExtendContent',
      bizId: 'BizId',
      note: 'Note',
      bizStatus: 'BizStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'number',
      operateType: 'number',
      extendContent: 'string',
      bizId: 'string',
      note: 'string',
      bizStatus: 'number',
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

export class QueryTaskListResponseBodyDataTaskList extends $tea.Model {
  taskType?: string;
  result?: string;
  taskStatus?: string;
  completeTime?: number;
  createTime?: number;
  errMsg?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      result: 'Result',
      taskStatus: 'TaskStatus',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      errMsg: 'ErrMsg',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      result: 'string',
      taskStatus: 'string',
      completeTime: 'number',
      createTime: 'number',
      errMsg: 'string',
      fileName: 'string',
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
  templateUrl?: string;
  countryFill?: boolean;
  nationalityFill?: boolean;
  stampFill?: boolean;
  tradeMarkNameFill?: boolean;
  materialNameFill?: boolean;
  errorMsgs?: CheckLoaFillResponseBodyDataErrorMsgs;
  static names(): { [key: string]: string } {
    return {
      addressFill: 'AddressFill',
      templateUrl: 'TemplateUrl',
      countryFill: 'CountryFill',
      nationalityFill: 'NationalityFill',
      stampFill: 'StampFill',
      tradeMarkNameFill: 'TradeMarkNameFill',
      materialNameFill: 'MaterialNameFill',
      errorMsgs: 'ErrorMsgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFill: 'boolean',
      templateUrl: 'string',
      countryFill: 'boolean',
      nationalityFill: 'boolean',
      stampFill: 'boolean',
      tradeMarkNameFill: 'boolean',
      materialNameFill: 'boolean',
      errorMsgs: CheckLoaFillResponseBodyDataErrorMsgs,
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

export class QueryOssResourcesResponseBodyDataTaskList extends $tea.Model {
  bizId?: string;
  updateTime?: number;
  ossUrl?: string;
  name?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      updateTime: 'UpdateTime',
      ossUrl: 'OssUrl',
      name: 'Name',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      updateTime: 'number',
      ossUrl: 'string',
      name: 'string',
      createTime: 'number',
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

export class ListNotaryOrdersResponseBodyDataNotaryOrder extends $tea.Model {
  orderDate?: number;
  orderPrice?: number;
  notaryType?: number;
  tmClassification?: string;
  bizId?: string;
  gmtModified?: number;
  notaryStatus?: number;
  notaryOrderId?: number;
  tmName?: string;
  tmRegisterNo?: string;
  tmImage?: string;
  aliyunOrderId?: string;
  applyPostStatus?: string;
  notaryCertificate?: string;
  notaryPlatformName?: string;
  static names(): { [key: string]: string } {
    return {
      orderDate: 'OrderDate',
      orderPrice: 'OrderPrice',
      notaryType: 'NotaryType',
      tmClassification: 'TmClassification',
      bizId: 'BizId',
      gmtModified: 'GmtModified',
      notaryStatus: 'NotaryStatus',
      notaryOrderId: 'NotaryOrderId',
      tmName: 'TmName',
      tmRegisterNo: 'TmRegisterNo',
      tmImage: 'TmImage',
      aliyunOrderId: 'AliyunOrderId',
      applyPostStatus: 'ApplyPostStatus',
      notaryCertificate: 'NotaryCertificate',
      notaryPlatformName: 'NotaryPlatformName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDate: 'number',
      orderPrice: 'number',
      notaryType: 'number',
      tmClassification: 'string',
      bizId: 'string',
      gmtModified: 'number',
      notaryStatus: 'number',
      notaryOrderId: 'number',
      tmName: 'string',
      tmRegisterNo: 'string',
      tmImage: 'string',
      aliyunOrderId: 'string',
      applyPostStatus: 'string',
      notaryCertificate: 'string',
      notaryPlatformName: 'string',
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

export class GetSupportPrincipalNameResponseBodyPrincipals extends $tea.Model {
  principalDescription?: string;
  defaultPrincipal?: boolean;
  principalValue?: number;
  static names(): { [key: string]: string } {
    return {
      principalDescription: 'PrincipalDescription',
      defaultPrincipal: 'DefaultPrincipal',
      principalValue: 'PrincipalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalDescription: 'string',
      defaultPrincipal: 'boolean',
      principalValue: 'number',
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

  async queryTradeProduceListWithOptions(request: QueryTradeProduceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeProduceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTradeProduceListResponse>(await this.doRPCRequest("QueryTradeProduceList", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTradeProduceListResponse({}));
  }

  async queryTradeProduceList(request: QueryTradeProduceListRequest): Promise<QueryTradeProduceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeProduceListWithOptions(request, runtime);
  }

  async queryTrademarkMonitorResultsWithOptions(request: QueryTrademarkMonitorResultsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkMonitorResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTrademarkMonitorResultsResponse>(await this.doRPCRequest("QueryTrademarkMonitorResults", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTrademarkMonitorResultsResponse({}));
  }

  async queryTrademarkMonitorResults(request: QueryTrademarkMonitorResultsRequest): Promise<QueryTrademarkMonitorResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkMonitorResultsWithOptions(request, runtime);
  }

  async cancelTradeOrderWithOptions(request: CancelTradeOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelTradeOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelTradeOrderResponse>(await this.doRPCRequest("CancelTradeOrder", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CancelTradeOrderResponse({}));
  }

  async cancelTradeOrder(request: CancelTradeOrderRequest): Promise<CancelTradeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTradeOrderWithOptions(request, runtime);
  }

  async deleteTmMonitorRuleWithOptions(request: DeleteTmMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTmMonitorRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTmMonitorRuleResponse>(await this.doRPCRequest("DeleteTmMonitorRule", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTmMonitorRuleResponse({}));
  }

  async deleteTmMonitorRule(request: DeleteTmMonitorRuleRequest): Promise<DeleteTmMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTmMonitorRuleWithOptions(request, runtime);
  }

  async uploadNotaryDataWithOptions(request: UploadNotaryDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadNotaryDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadNotaryDataResponse>(await this.doRPCRequest("UploadNotaryData", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new UploadNotaryDataResponse({}));
  }

  async uploadNotaryData(request: UploadNotaryDataRequest): Promise<UploadNotaryDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadNotaryDataWithOptions(request, runtime);
  }

  async copyApplicantWithOptions(request: CopyApplicantRequest, runtime: $Util.RuntimeOptions): Promise<CopyApplicantResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyApplicantResponse>(await this.doRPCRequest("CopyApplicant", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CopyApplicantResponse({}));
  }

  async copyApplicant(request: CopyApplicantRequest): Promise<CopyApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyApplicantWithOptions(request, runtime);
  }

  async partnerUpdateTrademarkNameWithOptions(request: PartnerUpdateTrademarkNameRequest, runtime: $Util.RuntimeOptions): Promise<PartnerUpdateTrademarkNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PartnerUpdateTrademarkNameResponse>(await this.doRPCRequest("PartnerUpdateTrademarkName", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new PartnerUpdateTrademarkNameResponse({}));
  }

  async partnerUpdateTrademarkName(request: PartnerUpdateTrademarkNameRequest): Promise<PartnerUpdateTrademarkNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.partnerUpdateTrademarkNameWithOptions(request, runtime);
  }

  async queryIntentionDetailWithOptions(request: QueryIntentionDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentionDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryIntentionDetailResponse>(await this.doRPCRequest("QueryIntentionDetail", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryIntentionDetailResponse({}));
  }

  async queryIntentionDetail(request: QueryIntentionDetailRequest): Promise<QueryIntentionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentionDetailWithOptions(request, runtime);
  }

  async queryIntentionPriceWithOptions(request: QueryIntentionPriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentionPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryIntentionPriceResponse>(await this.doRPCRequest("QueryIntentionPrice", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryIntentionPriceResponse({}));
  }

  async queryIntentionPrice(request: QueryIntentionPriceRequest): Promise<QueryIntentionPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentionPriceWithOptions(request, runtime);
  }

  async queryOfficialFileCustomListWithOptions(request: QueryOfficialFileCustomListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOfficialFileCustomListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOfficialFileCustomListResponse>(await this.doRPCRequest("QueryOfficialFileCustomList", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOfficialFileCustomListResponse({}));
  }

  async queryOfficialFileCustomList(request: QueryOfficialFileCustomListRequest): Promise<QueryOfficialFileCustomListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOfficialFileCustomListWithOptions(request, runtime);
  }

  async checkTrademarkIconWithOptions(request: CheckTrademarkIconRequest, runtime: $Util.RuntimeOptions): Promise<CheckTrademarkIconResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckTrademarkIconResponse>(await this.doRPCRequest("CheckTrademarkIcon", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CheckTrademarkIconResponse({}));
  }

  async checkTrademarkIcon(request: CheckTrademarkIconRequest): Promise<CheckTrademarkIconResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTrademarkIconWithOptions(request, runtime);
  }

  async querySupplementDetailWithOptions(request: QuerySupplementDetailRequest, runtime: $Util.RuntimeOptions): Promise<QuerySupplementDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySupplementDetailResponse>(await this.doRPCRequest("QuerySupplementDetail", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySupplementDetailResponse({}));
  }

  async querySupplementDetail(request: QuerySupplementDetailRequest): Promise<QuerySupplementDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySupplementDetailWithOptions(request, runtime);
  }

  async uploadTrademarkOnSaleWithOptions(request: UploadTrademarkOnSaleRequest, runtime: $Util.RuntimeOptions): Promise<UploadTrademarkOnSaleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadTrademarkOnSaleResponse>(await this.doRPCRequest("UploadTrademarkOnSale", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new UploadTrademarkOnSaleResponse({}));
  }

  async uploadTrademarkOnSale(request: UploadTrademarkOnSaleRequest): Promise<UploadTrademarkOnSaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadTrademarkOnSaleWithOptions(request, runtime);
  }

  async applyNotaryPostWithOptions(request: ApplyNotaryPostRequest, runtime: $Util.RuntimeOptions): Promise<ApplyNotaryPostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyNotaryPostResponse>(await this.doRPCRequest("ApplyNotaryPost", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyNotaryPostResponse({}));
  }

  async applyNotaryPost(request: ApplyNotaryPostRequest): Promise<ApplyNotaryPostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyNotaryPostWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationsByIntentionWithOptions(request: QueryTradeMarkApplicationsByIntentionRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationsByIntentionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTradeMarkApplicationsByIntentionResponse>(await this.doRPCRequest("QueryTradeMarkApplicationsByIntention", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTradeMarkApplicationsByIntentionResponse({}));
  }

  async queryTradeMarkApplicationsByIntention(request: QueryTradeMarkApplicationsByIntentionRequest): Promise<QueryTradeMarkApplicationsByIntentionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationsByIntentionWithOptions(request, runtime);
  }

  async saveExtensionAttributeWithOptions(request: SaveExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SaveExtensionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveExtensionAttributeResponse>(await this.doRPCRequest("SaveExtensionAttribute", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SaveExtensionAttributeResponse({}));
  }

  async saveExtensionAttribute(request: SaveExtensionAttributeRequest): Promise<SaveExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveExtensionAttributeWithOptions(request, runtime);
  }

  async acceptPartnerNotificationWithOptions(request: AcceptPartnerNotificationRequest, runtime: $Util.RuntimeOptions): Promise<AcceptPartnerNotificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AcceptPartnerNotificationResponse>(await this.doRPCRequest("AcceptPartnerNotification", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new AcceptPartnerNotificationResponse({}));
  }

  async acceptPartnerNotification(request: AcceptPartnerNotificationRequest): Promise<AcceptPartnerNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptPartnerNotificationWithOptions(request, runtime);
  }

  async submitSupplementWithOptions(tmpReq: SubmitSupplementRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSupplementResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSupplementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.uploadOssKeyList)) {
      request.uploadOssKeyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uploadOssKeyList, "UploadOssKeyList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSupplementResponse>(await this.doRPCRequest("SubmitSupplement", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSupplementResponse({}));
  }

  async submitSupplement(request: SubmitSupplementRequest): Promise<SubmitSupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSupplementWithOptions(request, runtime);
  }

  async forceUploadTrademarkOnsaleWithOptions(request: ForceUploadTrademarkOnsaleRequest, runtime: $Util.RuntimeOptions): Promise<ForceUploadTrademarkOnsaleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ForceUploadTrademarkOnsaleResponse>(await this.doRPCRequest("ForceUploadTrademarkOnsale", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ForceUploadTrademarkOnsaleResponse({}));
  }

  async forceUploadTrademarkOnsale(request: ForceUploadTrademarkOnsaleRequest): Promise<ForceUploadTrademarkOnsaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forceUploadTrademarkOnsaleWithOptions(request, runtime);
  }

  async bindMaterialWithOptions(request: BindMaterialRequest, runtime: $Util.RuntimeOptions): Promise<BindMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindMaterialResponse>(await this.doRPCRequest("BindMaterial", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new BindMaterialResponse({}));
  }

  async bindMaterial(request: BindMaterialRequest): Promise<BindMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindMaterialWithOptions(request, runtime);
  }

  async getDefaultPrincipalWithOptions(runtime: $Util.RuntimeOptions): Promise<GetDefaultPrincipalResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetDefaultPrincipalResponse>(await this.doRPCRequest("GetDefaultPrincipal", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new GetDefaultPrincipalResponse({}));
  }

  async getDefaultPrincipal(): Promise<GetDefaultPrincipalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultPrincipalWithOptions(runtime);
  }

  async queryCommunicationLogsWithOptions(request: QueryCommunicationLogsRequest, runtime: $Util.RuntimeOptions): Promise<QueryCommunicationLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCommunicationLogsResponse>(await this.doRPCRequest("QueryCommunicationLogs", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCommunicationLogsResponse({}));
  }

  async queryCommunicationLogs(request: QueryCommunicationLogsRequest): Promise<QueryCommunicationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCommunicationLogsWithOptions(request, runtime);
  }

  async generateQrCodeWithOptions(request: GenerateQrCodeRequest, runtime: $Util.RuntimeOptions): Promise<GenerateQrCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateQrCodeResponse>(await this.doRPCRequest("GenerateQrCode", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateQrCodeResponse({}));
  }

  async generateQrCode(request: GenerateQrCodeRequest): Promise<GenerateQrCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateQrCodeWithOptions(request, runtime);
  }

  async confirmDissentOriginalWithOptions(request: ConfirmDissentOriginalRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmDissentOriginalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmDissentOriginalResponse>(await this.doRPCRequest("ConfirmDissentOriginal", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmDissentOriginalResponse({}));
  }

  async confirmDissentOriginal(request: ConfirmDissentOriginalRequest): Promise<ConfirmDissentOriginalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmDissentOriginalWithOptions(request, runtime);
  }

  async convertImageToGrayWithOptions(request: ConvertImageToGrayRequest, runtime: $Util.RuntimeOptions): Promise<ConvertImageToGrayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertImageToGrayResponse>(await this.doRPCRequest("ConvertImageToGray", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertImageToGrayResponse({}));
  }

  async convertImageToGray(request: ConvertImageToGrayRequest): Promise<ConvertImageToGrayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertImageToGrayWithOptions(request, runtime);
  }

  async queryIntentionListWithOptions(request: QueryIntentionListRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentionListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryIntentionListResponse>(await this.doRPCRequest("QueryIntentionList", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryIntentionListResponse({}));
  }

  async queryIntentionList(request: QueryIntentionListRequest): Promise<QueryIntentionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentionListWithOptions(request, runtime);
  }

  async getAuthorizationLetterVersionWithOptions(request: GetAuthorizationLetterVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationLetterVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuthorizationLetterVersionResponse>(await this.doRPCRequest("GetAuthorizationLetterVersion", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuthorizationLetterVersionResponse({}));
  }

  async getAuthorizationLetterVersion(request: GetAuthorizationLetterVersionRequest): Promise<GetAuthorizationLetterVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationLetterVersionWithOptions(request, runtime);
  }

  async queryTrademarkPriceWithOptions(tmpReq: QueryTrademarkPriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkPriceResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryTrademarkPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.orderData)) {
      request.orderDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderData, "OrderData", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTrademarkPriceResponse>(await this.doRPCRequest("QueryTrademarkPrice", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTrademarkPriceResponse({}));
  }

  async queryTrademarkPrice(request: QueryTrademarkPriceRequest): Promise<QueryTrademarkPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkPriceWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertTmMonitorRuleResponse>(await this.doRPCRequest("InsertTmMonitorRule", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new InsertTmMonitorRuleResponse({}));
  }

  async insertTmMonitorRule(request: InsertTmMonitorRuleRequest): Promise<InsertTmMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertTmMonitorRuleWithOptions(request, runtime);
  }

  async queryTrademarkMonitorRulesWithOptions(request: QueryTrademarkMonitorRulesRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrademarkMonitorRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTrademarkMonitorRulesResponse>(await this.doRPCRequest("QueryTrademarkMonitorRules", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTrademarkMonitorRulesResponse({}));
  }

  async queryTrademarkMonitorRules(request: QueryTrademarkMonitorRulesRequest): Promise<QueryTrademarkMonitorRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrademarkMonitorRulesWithOptions(request, runtime);
  }

  async denySupplementWithOptions(request: DenySupplementRequest, runtime: $Util.RuntimeOptions): Promise<DenySupplementResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DenySupplementResponse>(await this.doRPCRequest("DenySupplement", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new DenySupplementResponse({}));
  }

  async denySupplement(request: DenySupplementRequest): Promise<DenySupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.denySupplementWithOptions(request, runtime);
  }

  async queryMaterialWithOptions(request: QueryMaterialRequest, runtime: $Util.RuntimeOptions): Promise<QueryMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMaterialResponse>(await this.doRPCRequest("QueryMaterial", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMaterialResponse({}));
  }

  async queryMaterial(request: QueryMaterialRequest): Promise<QueryMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMaterialWithOptions(request, runtime);
  }

  async createTrademarkOrderWithOptions(request: CreateTrademarkOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrademarkOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTrademarkOrderResponse>(await this.doRPCRequest("CreateTrademarkOrder", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTrademarkOrderResponse({}));
  }

  async createTrademarkOrder(request: CreateTrademarkOrderRequest): Promise<CreateTrademarkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrademarkOrderWithOptions(request, runtime);
  }

  async queryMaterialListWithOptions(request: QueryMaterialListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMaterialListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMaterialListResponse>(await this.doRPCRequest("QueryMaterialList", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMaterialListResponse({}));
  }

  async queryMaterialList(request: QueryMaterialListRequest): Promise<QueryMaterialListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMaterialListWithOptions(request, runtime);
  }

  async checkTrademarkOrderWithOptions(request: CheckTrademarkOrderRequest, runtime: $Util.RuntimeOptions): Promise<CheckTrademarkOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckTrademarkOrderResponse>(await this.doRPCRequest("CheckTrademarkOrder", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CheckTrademarkOrderResponse({}));
  }

  async checkTrademarkOrder(request: CheckTrademarkOrderRequest): Promise<CheckTrademarkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTrademarkOrderWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationsWithOptions(request: QueryTradeMarkApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTradeMarkApplicationsResponse>(await this.doRPCRequest("QueryTradeMarkApplications", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTradeMarkApplicationsResponse({}));
  }

  async queryTradeMarkApplications(request: QueryTradeMarkApplicationsRequest): Promise<QueryTradeMarkApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationsWithOptions(request, runtime);
  }

  async updateApplicantContacterWithOptions(request: UpdateApplicantContacterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicantContacterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateApplicantContacterResponse>(await this.doRPCRequest("UpdateApplicantContacter", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateApplicantContacterResponse({}));
  }

  async updateApplicantContacter(request: UpdateApplicantContacterRequest): Promise<UpdateApplicantContacterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicantContacterWithOptions(request, runtime);
  }

  async saveTaskWithOptions(request: SaveTaskRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTaskResponse>(await this.doRPCRequest("SaveTask", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTaskResponse({}));
  }

  async saveTask(request: SaveTaskRequest): Promise<SaveTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskWithOptions(request, runtime);
  }

  async submitTrademarkApplicationComplaintWithOptions(tmpReq: SubmitTrademarkApplicationComplaintRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTrademarkApplicationComplaintResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTrademarkApplicationComplaintShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitTrademarkApplicationComplaintResponse>(await this.doRPCRequest("SubmitTrademarkApplicationComplaint", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitTrademarkApplicationComplaintResponse({}));
  }

  async submitTrademarkApplicationComplaint(request: SubmitTrademarkApplicationComplaintRequest): Promise<SubmitTrademarkApplicationComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTrademarkApplicationComplaintWithOptions(request, runtime);
  }

  async writeIntentionCommunicationLogWithOptions(request: WriteIntentionCommunicationLogRequest, runtime: $Util.RuntimeOptions): Promise<WriteIntentionCommunicationLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WriteIntentionCommunicationLogResponse>(await this.doRPCRequest("WriteIntentionCommunicationLog", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new WriteIntentionCommunicationLogResponse({}));
  }

  async writeIntentionCommunicationLog(request: WriteIntentionCommunicationLogRequest): Promise<WriteIntentionCommunicationLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.writeIntentionCommunicationLogWithOptions(request, runtime);
  }

  async saveTaskForOfficialFileCustomWithOptions(request: SaveTaskForOfficialFileCustomRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForOfficialFileCustomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTaskForOfficialFileCustomResponse>(await this.doRPCRequest("SaveTaskForOfficialFileCustom", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTaskForOfficialFileCustomResponse({}));
  }

  async saveTaskForOfficialFileCustom(request: SaveTaskForOfficialFileCustomRequest): Promise<SaveTaskForOfficialFileCustomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForOfficialFileCustomWithOptions(request, runtime);
  }

  async descirbeCombineTrademarkWithOptions(request: DescirbeCombineTrademarkRequest, runtime: $Util.RuntimeOptions): Promise<DescirbeCombineTrademarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescirbeCombineTrademarkResponse>(await this.doRPCRequest("DescirbeCombineTrademark", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new DescirbeCombineTrademarkResponse({}));
  }

  async descirbeCombineTrademark(request: DescirbeCombineTrademarkRequest): Promise<DescirbeCombineTrademarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descirbeCombineTrademarkWithOptions(request, runtime);
  }

  async getNotaryOrderWithOptions(request: GetNotaryOrderRequest, runtime: $Util.RuntimeOptions): Promise<GetNotaryOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNotaryOrderResponse>(await this.doRPCRequest("GetNotaryOrder", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new GetNotaryOrderResponse({}));
  }

  async getNotaryOrder(request: GetNotaryOrderRequest): Promise<GetNotaryOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNotaryOrderWithOptions(request, runtime);
  }

  async confirmAdditionalMaterialWithOptions(request: ConfirmAdditionalMaterialRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmAdditionalMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmAdditionalMaterialResponse>(await this.doRPCRequest("ConfirmAdditionalMaterial", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmAdditionalMaterialResponse({}));
  }

  async confirmAdditionalMaterial(request: ConfirmAdditionalMaterialRequest): Promise<ConfirmAdditionalMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmAdditionalMaterialWithOptions(request, runtime);
  }

  async insertRenewInfoWithOptions(request: InsertRenewInfoRequest, runtime: $Util.RuntimeOptions): Promise<InsertRenewInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertRenewInfoResponse>(await this.doRPCRequest("InsertRenewInfo", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new InsertRenewInfoResponse({}));
  }

  async insertRenewInfo(request: InsertRenewInfoRequest): Promise<InsertRenewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertRenewInfoWithOptions(request, runtime);
  }

  async queryCredentialsInfoWithOptions(request: QueryCredentialsInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCredentialsInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCredentialsInfoResponse>(await this.doRPCRequest("QueryCredentialsInfo", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCredentialsInfoResponse({}));
  }

  async queryCredentialsInfo(request: QueryCredentialsInfoRequest): Promise<QueryCredentialsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCredentialsInfoWithOptions(request, runtime);
  }

  async searchTmOnsalesWithOptions(request: SearchTmOnsalesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTmOnsalesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTmOnsalesResponse>(await this.doRPCRequest("SearchTmOnsales", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTmOnsalesResponse({}));
  }

  async searchTmOnsales(request: SearchTmOnsalesRequest): Promise<SearchTmOnsalesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTmOnsalesWithOptions(request, runtime);
  }

  async generateUploadFilePolicyWithOptions(request: GenerateUploadFilePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadFilePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateUploadFilePolicyResponse>(await this.doRPCRequest("GenerateUploadFilePolicy", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateUploadFilePolicyResponse({}));
  }

  async generateUploadFilePolicy(request: GenerateUploadFilePolicyRequest): Promise<GenerateUploadFilePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadFilePolicyWithOptions(request, runtime);
  }

  async deleteMaterialWithOptions(request: DeleteMaterialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMaterialResponse>(await this.doRPCRequest("DeleteMaterial", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMaterialResponse({}));
  }

  async deleteMaterial(request: DeleteMaterialRequest): Promise<DeleteMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMaterialWithOptions(request, runtime);
  }

  async writeCommunicationLogWithOptions(request: WriteCommunicationLogRequest, runtime: $Util.RuntimeOptions): Promise<WriteCommunicationLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WriteCommunicationLogResponse>(await this.doRPCRequest("WriteCommunicationLog", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new WriteCommunicationLogResponse({}));
  }

  async writeCommunicationLog(request: WriteCommunicationLogRequest): Promise<WriteCommunicationLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.writeCommunicationLogWithOptions(request, runtime);
  }

  async insertTradeIntentionUserWithOptions(request: InsertTradeIntentionUserRequest, runtime: $Util.RuntimeOptions): Promise<InsertTradeIntentionUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertTradeIntentionUserResponse>(await this.doRPCRequest("InsertTradeIntentionUser", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new InsertTradeIntentionUserResponse({}));
  }

  async insertTradeIntentionUser(request: InsertTradeIntentionUserRequest): Promise<InsertTradeIntentionUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertTradeIntentionUserWithOptions(request, runtime);
  }

  async queryExtensionAttributeWithOptions(request: QueryExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<QueryExtensionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryExtensionAttributeResponse>(await this.doRPCRequest("QueryExtensionAttribute", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryExtensionAttributeResponse({}));
  }

  async queryExtensionAttribute(request: QueryExtensionAttributeRequest): Promise<QueryExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryExtensionAttributeWithOptions(request, runtime);
  }

  async updateTrademarkOnsaleWithOptions(request: UpdateTrademarkOnsaleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrademarkOnsaleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTrademarkOnsaleResponse>(await this.doRPCRequest("UpdateTrademarkOnsale", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTrademarkOnsaleResponse({}));
  }

  async updateTrademarkOnsale(request: UpdateTrademarkOnsaleRequest): Promise<UpdateTrademarkOnsaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrademarkOnsaleWithOptions(request, runtime);
  }

  async queryTradeProduceDetailWithOptions(request: QueryTradeProduceDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeProduceDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTradeProduceDetailResponse>(await this.doRPCRequest("QueryTradeProduceDetail", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTradeProduceDetailResponse({}));
  }

  async queryTradeProduceDetail(request: QueryTradeProduceDetailRequest): Promise<QueryTradeProduceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeProduceDetailWithOptions(request, runtime);
  }

  async queryQrCodeUploadStatusWithOptions(request: QueryQrCodeUploadStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryQrCodeUploadStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryQrCodeUploadStatusResponse>(await this.doRPCRequest("QueryQrCodeUploadStatus", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryQrCodeUploadStatusResponse({}));
  }

  async queryQrCodeUploadStatus(request: QueryQrCodeUploadStatusRequest): Promise<QueryQrCodeUploadStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryQrCodeUploadStatusWithOptions(request, runtime);
  }

  async rejectApplicantWithOptions(request: RejectApplicantRequest, runtime: $Util.RuntimeOptions): Promise<RejectApplicantResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RejectApplicantResponse>(await this.doRPCRequest("RejectApplicant", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new RejectApplicantResponse({}));
  }

  async rejectApplicant(request: RejectApplicantRequest): Promise<RejectApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectApplicantWithOptions(request, runtime);
  }

  async queryTradeIntentionUserListWithOptions(request: QueryTradeIntentionUserListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeIntentionUserListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTradeIntentionUserListResponse>(await this.doRPCRequest("QueryTradeIntentionUserList", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTradeIntentionUserListResponse({}));
  }

  async queryTradeIntentionUserList(request: QueryTradeIntentionUserListRequest): Promise<QueryTradeIntentionUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeIntentionUserListWithOptions(request, runtime);
  }

  async storeMaterialTemporarilyWithOptions(request: StoreMaterialTemporarilyRequest, runtime: $Util.RuntimeOptions): Promise<StoreMaterialTemporarilyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StoreMaterialTemporarilyResponse>(await this.doRPCRequest("StoreMaterialTemporarily", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new StoreMaterialTemporarilyResponse({}));
  }

  async storeMaterialTemporarily(request: StoreMaterialTemporarilyRequest): Promise<StoreMaterialTemporarilyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.storeMaterialTemporarilyWithOptions(request, runtime);
  }

  async refuseAdditionalMaterialWithOptions(request: RefuseAdditionalMaterialRequest, runtime: $Util.RuntimeOptions): Promise<RefuseAdditionalMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefuseAdditionalMaterialResponse>(await this.doRPCRequest("RefuseAdditionalMaterial", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new RefuseAdditionalMaterialResponse({}));
  }

  async refuseAdditionalMaterial(request: RefuseAdditionalMaterialRequest): Promise<RefuseAdditionalMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseAdditionalMaterialWithOptions(request, runtime);
  }

  async listNotaryInfosWithOptions(request: ListNotaryInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListNotaryInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNotaryInfosResponse>(await this.doRPCRequest("ListNotaryInfos", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ListNotaryInfosResponse({}));
  }

  async listNotaryInfos(request: ListNotaryInfosRequest): Promise<ListNotaryInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotaryInfosWithOptions(request, runtime);
  }

  async getDefaultPrincipalNameWithOptions(request: GetDefaultPrincipalNameRequest, runtime: $Util.RuntimeOptions): Promise<GetDefaultPrincipalNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDefaultPrincipalNameResponse>(await this.doRPCRequest("GetDefaultPrincipalName", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new GetDefaultPrincipalNameResponse({}));
  }

  async getDefaultPrincipalName(request: GetDefaultPrincipalNameRequest): Promise<GetDefaultPrincipalNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultPrincipalNameWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationDetailWithOptions(request: QueryTradeMarkApplicationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTradeMarkApplicationDetailResponse>(await this.doRPCRequest("QueryTradeMarkApplicationDetail", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTradeMarkApplicationDetailResponse({}));
  }

  async queryTradeMarkApplicationDetail(request: QueryTradeMarkApplicationDetailRequest): Promise<QueryTradeMarkApplicationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationDetailWithOptions(request, runtime);
  }

  async saveClassificationConditionsWithOptions(request: SaveClassificationConditionsRequest, runtime: $Util.RuntimeOptions): Promise<SaveClassificationConditionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveClassificationConditionsResponse>(await this.doRPCRequest("SaveClassificationConditions", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SaveClassificationConditionsResponse({}));
  }

  async saveClassificationConditions(request: SaveClassificationConditionsRequest): Promise<SaveClassificationConditionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveClassificationConditionsWithOptions(request, runtime);
  }

  async fillLogisticsWithOptions(request: FillLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<FillLogisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FillLogisticsResponse>(await this.doRPCRequest("FillLogistics", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new FillLogisticsResponse({}));
  }

  async fillLogistics(request: FillLogisticsRequest): Promise<FillLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fillLogisticsWithOptions(request, runtime);
  }

  async updateMaterialWithOptions(request: UpdateMaterialRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMaterialResponse>(await this.doRPCRequest("UpdateMaterial", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMaterialResponse({}));
  }

  async updateMaterial(request: UpdateMaterialRequest): Promise<UpdateMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMaterialWithOptions(request, runtime);
  }

  async queryTradeMarkApplicationLogsWithOptions(request: QueryTradeMarkApplicationLogsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTradeMarkApplicationLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTradeMarkApplicationLogsResponse>(await this.doRPCRequest("QueryTradeMarkApplicationLogs", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTradeMarkApplicationLogsResponse({}));
  }

  async queryTradeMarkApplicationLogs(request: QueryTradeMarkApplicationLogsRequest): Promise<QueryTradeMarkApplicationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTradeMarkApplicationLogsWithOptions(request, runtime);
  }

  async refundProduceWithOptions(request: RefundProduceRequest, runtime: $Util.RuntimeOptions): Promise<RefundProduceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefundProduceResponse>(await this.doRPCRequest("RefundProduce", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new RefundProduceResponse({}));
  }

  async refundProduce(request: RefundProduceRequest): Promise<RefundProduceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundProduceWithOptions(request, runtime);
  }

  async syncTrademarkWithOptions(request: SyncTrademarkRequest, runtime: $Util.RuntimeOptions): Promise<SyncTrademarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncTrademarkResponse>(await this.doRPCRequest("SyncTrademark", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SyncTrademarkResponse({}));
  }

  async syncTrademark(request: SyncTrademarkRequest): Promise<SyncTrademarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncTrademarkWithOptions(request, runtime);
  }

  async combineLoaWithOptions(request: CombineLoaRequest, runtime: $Util.RuntimeOptions): Promise<CombineLoaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CombineLoaResponse>(await this.doRPCRequest("CombineLoa", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CombineLoaResponse({}));
  }

  async combineLoa(request: CombineLoaRequest): Promise<CombineLoaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.combineLoaWithOptions(request, runtime);
  }

  async filterUnavailableCodesWithOptions(tmpReq: FilterUnavailableCodesRequest, runtime: $Util.RuntimeOptions): Promise<FilterUnavailableCodesResponse> {
    Util.validateModel(tmpReq);
    let request = new FilterUnavailableCodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.codes)) {
      request.codesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codes, "Codes", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FilterUnavailableCodesResponse>(await this.doRPCRequest("FilterUnavailableCodes", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new FilterUnavailableCodesResponse({}));
  }

  async filterUnavailableCodes(request: FilterUnavailableCodesRequest): Promise<FilterUnavailableCodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.filterUnavailableCodesWithOptions(request, runtime);
  }

  async insertMaterialWithOptions(request: InsertMaterialRequest, runtime: $Util.RuntimeOptions): Promise<InsertMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertMaterialResponse>(await this.doRPCRequest("InsertMaterial", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new InsertMaterialResponse({}));
  }

  async insertMaterial(request: InsertMaterialRequest): Promise<InsertMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertMaterialWithOptions(request, runtime);
  }

  async saveTradeMarkReviewMaterialDetailWithOptions(tmpReq: SaveTradeMarkReviewMaterialDetailRequest, runtime: $Util.RuntimeOptions): Promise<SaveTradeMarkReviewMaterialDetailResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveTradeMarkReviewMaterialDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.additionalOssKeyList)) {
      request.additionalOssKeyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalOssKeyList, "AdditionalOssKeyList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTradeMarkReviewMaterialDetailResponse>(await this.doRPCRequest("SaveTradeMarkReviewMaterialDetail", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTradeMarkReviewMaterialDetailResponse({}));
  }

  async saveTradeMarkReviewMaterialDetail(request: SaveTradeMarkReviewMaterialDetailRequest): Promise<SaveTradeMarkReviewMaterialDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTradeMarkReviewMaterialDetailWithOptions(request, runtime);
  }

  async queryMonitorKeywordsWithOptions(request: QueryMonitorKeywordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonitorKeywordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMonitorKeywordsResponse>(await this.doRPCRequest("QueryMonitorKeywords", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMonitorKeywordsResponse({}));
  }

  async queryMonitorKeywords(request: QueryMonitorKeywordsRequest): Promise<QueryMonitorKeywordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonitorKeywordsWithOptions(request, runtime);
  }

  async queryTaskListWithOptions(request: QueryTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskListResponse>(await this.doRPCRequest("QueryTaskList", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskListResponse({}));
  }

  async queryTaskList(request: QueryTaskListRequest): Promise<QueryTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  async updateTrademarkNameWithOptions(request: UpdateTrademarkNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrademarkNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTrademarkNameResponse>(await this.doRPCRequest("UpdateTrademarkName", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTrademarkNameResponse({}));
  }

  async updateTrademarkName(request: UpdateTrademarkNameRequest): Promise<UpdateTrademarkNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrademarkNameWithOptions(request, runtime);
  }

  async checkLoaFillWithOptions(request: CheckLoaFillRequest, runtime: $Util.RuntimeOptions): Promise<CheckLoaFillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckLoaFillResponse>(await this.doRPCRequest("CheckLoaFill", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CheckLoaFillResponse({}));
  }

  async checkLoaFill(request: CheckLoaFillRequest): Promise<CheckLoaFillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkLoaFillWithOptions(request, runtime);
  }

  async confirmApplicantWithOptions(request: ConfirmApplicantRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmApplicantResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmApplicantResponse>(await this.doRPCRequest("ConfirmApplicant", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmApplicantResponse({}));
  }

  async confirmApplicant(request: ConfirmApplicantRequest): Promise<ConfirmApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmApplicantWithOptions(request, runtime);
  }

  async createIntentionOrderWithOptions(request: CreateIntentionOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentionOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIntentionOrderResponse>(await this.doRPCRequest("CreateIntentionOrder", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIntentionOrderResponse({}));
  }

  async createIntentionOrder(request: CreateIntentionOrderRequest): Promise<CreateIntentionOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentionOrderWithOptions(request, runtime);
  }

  async queryOssResourcesWithOptions(request: QueryOssResourcesRequest, runtime: $Util.RuntimeOptions): Promise<QueryOssResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOssResourcesResponse>(await this.doRPCRequest("QueryOssResources", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOssResourcesResponse({}));
  }

  async queryOssResources(request: QueryOssResourcesRequest): Promise<QueryOssResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOssResourcesWithOptions(request, runtime);
  }

  async refuseApplicantWithOptions(request: RefuseApplicantRequest, runtime: $Util.RuntimeOptions): Promise<RefuseApplicantResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefuseApplicantResponse>(await this.doRPCRequest("RefuseApplicant", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new RefuseApplicantResponse({}));
  }

  async refuseApplicant(request: RefuseApplicantRequest): Promise<RefuseApplicantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseApplicantWithOptions(request, runtime);
  }

  async createIntentionOrderGeneratingPayWithOptions(request: CreateIntentionOrderGeneratingPayRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentionOrderGeneratingPayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIntentionOrderGeneratingPayResponse>(await this.doRPCRequest("CreateIntentionOrderGeneratingPay", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIntentionOrderGeneratingPayResponse({}));
  }

  async createIntentionOrderGeneratingPay(request: CreateIntentionOrderGeneratingPayRequest): Promise<CreateIntentionOrderGeneratingPayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentionOrderGeneratingPayWithOptions(request, runtime);
  }

  async listNotaryOrdersWithOptions(request: ListNotaryOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListNotaryOrdersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNotaryOrdersResponse>(await this.doRPCRequest("ListNotaryOrders", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new ListNotaryOrdersResponse({}));
  }

  async listNotaryOrders(request: ListNotaryOrdersRequest): Promise<ListNotaryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotaryOrdersWithOptions(request, runtime);
  }

  async getSupportPrincipalNameWithOptions(runtime: $Util.RuntimeOptions): Promise<GetSupportPrincipalNameResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetSupportPrincipalNameResponse>(await this.doRPCRequest("GetSupportPrincipalName", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new GetSupportPrincipalNameResponse({}));
  }

  async getSupportPrincipalName(): Promise<GetSupportPrincipalNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupportPrincipalNameWithOptions(runtime);
  }

  async startNotaryWithOptions(request: StartNotaryRequest, runtime: $Util.RuntimeOptions): Promise<StartNotaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartNotaryResponse>(await this.doRPCRequest("StartNotary", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new StartNotaryResponse({}));
  }

  async startNotary(request: StartNotaryRequest): Promise<StartNotaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startNotaryWithOptions(request, runtime);
  }

  async updateSendMaterialNumWithOptions(request: UpdateSendMaterialNumRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSendMaterialNumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSendMaterialNumResponse>(await this.doRPCRequest("UpdateSendMaterialNum", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSendMaterialNumResponse({}));
  }

  async updateSendMaterialNum(request: UpdateSendMaterialNumRequest): Promise<UpdateSendMaterialNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSendMaterialNumWithOptions(request, runtime);
  }

  async deleteTrademarkApplicationWithOptions(request: DeleteTrademarkApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrademarkApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTrademarkApplicationResponse>(await this.doRPCRequest("DeleteTrademarkApplication", "2018-07-24", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTrademarkApplicationResponse({}));
  }

  async deleteTrademarkApplication(request: DeleteTrademarkApplicationRequest): Promise<DeleteTrademarkApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrademarkApplicationWithOptions(request, runtime);
  }

}
