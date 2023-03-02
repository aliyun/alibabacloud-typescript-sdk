// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BindProduceAuthorizationRequest extends $tea.Model {
  authorizedUserIds?: string;
  bizId?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserIds: 'AuthorizedUserIds',
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserIds: 'string',
      bizId: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindProduceAuthorizationResponseBody extends $tea.Model {
  data?: BindProduceAuthorizationResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BindProduceAuthorizationResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindProduceAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindProduceAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindProduceAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseIntentionForPartnerRequest extends $tea.Model {
  bizType?: string;
  intentionBizId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseIntentionForPartnerResponseBody extends $tea.Model {
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

export class CloseIntentionForPartnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloseIntentionForPartnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseIntentionForPartnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseUserIntentionRequest extends $tea.Model {
  bizType?: string;
  intentionBizId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseUserIntentionResponseBody extends $tea.Model {
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

export class CloseUserIntentionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloseUserIntentionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseUserIntentionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBusinessOpportunityRequest extends $tea.Model {
  bizType?: string;
  contactName?: string;
  mobile?: string;
  source?: number;
  VCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contactName: 'ContactName',
      mobile: 'Mobile',
      source: 'Source',
      VCode: 'VCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contactName: 'string',
      mobile: 'string',
      source: 'number',
      VCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBusinessOpportunityResponseBody extends $tea.Model {
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

export class CreateBusinessOpportunityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBusinessOpportunityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBusinessOpportunityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProduceForPartnerRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProduceForPartnerResponseBody extends $tea.Model {
  bizId?: string;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
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

export class CreateProduceForPartnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProduceForPartnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProduceForPartnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePartnerConfigRequest extends $tea.Model {
  bizType?: string;
  partnerCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      partnerCode: 'PartnerCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      partnerCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePartnerConfigResponseBody extends $tea.Model {
  contact?: string;
  partnerCode?: string;
  partnerName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
      partnerCode: 'PartnerCode',
      partnerName: 'PartnerName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: 'string',
      partnerCode: 'string',
      partnerName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePartnerConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePartnerConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePartnerConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadFilePolicyRequest extends $tea.Model {
  bizType?: string;
  fileName?: string;
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      fileName: 'string',
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
  expireTime?: string;
  fileDir?: string;
  fileUrl?: string;
  host?: string;
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      encodedPolicy: 'EncodedPolicy',
      expireTime: 'ExpireTime',
      fileDir: 'FileDir',
      fileUrl: 'FileUrl',
      host: 'Host',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      encodedPolicy: 'string',
      expireTime: 'string',
      fileDir: 'string',
      fileUrl: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAlipayUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListIntentionNoteRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  intentionBizId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      intentionBizId: 'IntentionBizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      intentionBizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionNoteResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListIntentionNoteResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListIntentionNoteResponseBodyData },
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

export class ListIntentionNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIntentionNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntentionNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProduceAuthorizationRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProduceAuthorizationResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListProduceAuthorizationResponseBodyData[];
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListProduceAuthorizationResponseBodyData },
      pageSize: 'number',
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

export class ListProduceAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProduceAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProduceAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDetailSolutionsRequest extends $tea.Model {
  bizType?: string;
  intentionBizId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDetailSolutionsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListUserDetailSolutionsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListUserDetailSolutionsResponseBodyData },
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

export class ListUserDetailSolutionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserDetailSolutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserDetailSolutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserIntentionNotesRequest extends $tea.Model {
  bizType?: string;
  intentionBizId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserIntentionNotesResponseBody extends $tea.Model {
  data?: ListUserIntentionNotesResponseBodyData[];
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUserIntentionNotesResponseBodyData },
      pageNum: 'number',
      pageSize: 'number',
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

export class ListUserIntentionNotesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserIntentionNotesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserIntentionNotesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserIntentionsRequest extends $tea.Model {
  area?: string;
  bizType?: string;
  bizTypes?: string;
  intentionBizId?: string;
  pageNum?: number;
  pageSize?: number;
  sortFiled?: string;
  sortOrder?: string;
  status?: number;
  withExtInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bizType: 'BizType',
      bizTypes: 'BizTypes',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortFiled: 'SortFiled',
      sortOrder: 'SortOrder',
      status: 'Status',
      withExtInfo: 'WithExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bizType: 'string',
      bizTypes: 'string',
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sortFiled: 'string',
      sortOrder: 'string',
      status: 'number',
      withExtInfo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserIntentionsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListUserIntentionsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListUserIntentionsResponseBodyData },
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

export class ListUserIntentionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserIntentionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserIntentionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProduceOperateLogsRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProduceOperateLogsResponseBody extends $tea.Model {
  data?: ListUserProduceOperateLogsResponseBodyData[];
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUserProduceOperateLogsResponseBodyData },
      pageNum: 'number',
      pageSize: 'number',
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

export class ListUserProduceOperateLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserProduceOperateLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserProduceOperateLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSolutionsRequest extends $tea.Model {
  existStatus?: number[];
  intentionBizId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      existStatus: 'ExistStatus',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existStatus: { 'type': 'array', 'itemType': 'number' },
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSolutionsShrinkRequest extends $tea.Model {
  existStatusShrink?: string;
  intentionBizId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      existStatusShrink: 'ExistStatus',
      intentionBizId: 'IntentionBizId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existStatusShrink: 'string',
      intentionBizId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSolutionsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListUserSolutionsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListUserSolutionsResponseBodyData },
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

export class ListUserSolutionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserSolutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserSolutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateProduceForPartnerRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  extInfo?: string;
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      extInfo: 'ExtInfo',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extInfo: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateProduceForPartnerResponseBody extends $tea.Model {
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

export class OperateProduceForPartnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OperateProduceForPartnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OperateProduceForPartnerResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PutMeasureDataResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PutMeasureReadyFlagResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryAvailableNumbersRequest extends $tea.Model {
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

export class QueryAvailableNumbersResponseBody extends $tea.Model {
  data?: string[];
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
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

export class QueryAvailableNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAvailableNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAvailableNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBagRemainingRequest extends $tea.Model {
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

export class QueryBagRemainingResponseBody extends $tea.Model {
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

export class QueryBagRemainingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBagRemainingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryBagRemainingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityConfigRequest extends $tea.Model {
  bizType?: string;
  commodityCode?: string;
  queryModule?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      commodityCode: 'CommodityCode',
      queryModule: 'QueryModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      commodityCode: 'string',
      queryModule: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityConfigResponseBody extends $tea.Model {
  data?: QueryCommodityConfigResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryCommodityConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCommodityConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCommodityConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceRequest extends $tea.Model {
  bizType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceResponseBody extends $tea.Model {
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

export class QueryInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPartnerIntentionListRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPartnerIntentionListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryPartnerIntentionListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryPartnerIntentionListResponseBodyData },
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

export class QueryPartnerIntentionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPartnerIntentionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPartnerIntentionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPartnerProduceListRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPartnerProduceListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryPartnerProduceListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryPartnerProduceListResponseBodyData },
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

export class QueryPartnerProduceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPartnerProduceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPartnerProduceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserNeedAuthResponseBody extends $tea.Model {
  needAuth?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      needAuth: 'NeedAuth',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needAuth: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserNeedAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserNeedAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserNeedAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordPostBackRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  contactor?: string;
  content?: string;
  entityKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      contactor: 'contactor',
      content: 'content',
      entityKey: 'entityKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      contactor: 'string',
      content: 'string',
      entityKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordPostBackResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  module?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
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
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordPostBackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecordPostBackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecordPostBackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectSolutionRequest extends $tea.Model {
  note?: string;
  solutionBizId?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      solutionBizId: 'SolutionBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      solutionBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectSolutionResponseBody extends $tea.Model {
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

export class RejectSolutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RejectSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RejectSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectUserSolutionRequest extends $tea.Model {
  bizType?: string;
  note?: string;
  solutionBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      note: 'Note',
      solutionBizId: 'SolutionBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      note: 'string',
      solutionBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectUserSolutionResponseBody extends $tea.Model {
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

export class RejectUserSolutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RejectUserSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RejectUserSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseProduceAuthorizationRequest extends $tea.Model {
  authorizedUserId?: string;
  bizId?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserId: 'AuthorizedUserId',
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserId: 'string',
      bizId: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseProduceAuthorizationResponseBody extends $tea.Model {
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

export class ReleaseProduceAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseProduceAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseProduceAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackToBackCallRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  callCenterNumber?: string;
  caller?: string;
  mobileKey?: string;
  skillType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      callCenterNumber: 'CallCenterNumber',
      caller: 'Caller',
      mobileKey: 'MobileKey',
      skillType: 'SkillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      callCenterNumber: 'string',
      caller: 'string',
      mobileKey: 'string',
      skillType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackToBackCallResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class StartBackToBackCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartBackToBackCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartBackToBackCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIntentionNoteRequest extends $tea.Model {
  intentionBizId?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      intentionBizId: 'IntentionBizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentionBizId: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIntentionNoteResponseBody extends $tea.Model {
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

export class SubmitIntentionNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitIntentionNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitIntentionNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSolutionRequest extends $tea.Model {
  bizType?: string;
  intentionBizId?: string;
  solution?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      solution: 'Solution',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      solution: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSolutionResponseBody extends $tea.Model {
  confirmUrl?: string;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  solutionBizId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      confirmUrl: 'ConfirmUrl',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      solutionBizId: 'SolutionBizId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmUrl: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      solutionBizId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSolutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferIntentionOwnerRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  personId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      personId: 'PersonId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      personId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferIntentionOwnerResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class TransferIntentionOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TransferIntentionOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferIntentionOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferProduceOwnerRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  personId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      personId: 'PersonId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      personId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferProduceOwnerResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class TransferProduceOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TransferProduceOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferProduceOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindProduceAuthorizationResponseBodyDataAuthorizedUserList extends $tea.Model {
  accountValidType?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountValidType: 'AccountValidType',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountValidType: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindProduceAuthorizationResponseBodyData extends $tea.Model {
  authorizedUserList?: BindProduceAuthorizationResponseBodyDataAuthorizedUserList[];
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      authorizedUserList: 'AuthorizedUserList',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserList: { 'type': 'array', 'itemType': BindProduceAuthorizationResponseBodyDataAuthorizedUserList },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionNoteResponseBodyData extends $tea.Model {
  createTime?: string;
  intentionBizId?: string;
  note?: string;
  source?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentionBizId: 'IntentionBizId',
      note: 'Note',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      intentionBizId: 'string',
      note: 'string',
      source: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProduceAuthorizationResponseBodyData extends $tea.Model {
  authorizedUserId?: string;
  authorizedUserName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserId: 'AuthorizedUserId',
      authorizedUserName: 'AuthorizedUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserId: 'string',
      authorizedUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDetailSolutionsResponseBodyData extends $tea.Model {
  bizId?: string;
  bizType?: string;
  createTime?: number;
  deliveryOrderBizId?: string;
  extInfo?: string;
  intentionAssignBizId?: string;
  intentionBizId?: string;
  partnerCode?: string;
  reason?: string;
  status?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      createTime: 'CreateTime',
      deliveryOrderBizId: 'DeliveryOrderBizId',
      extInfo: 'ExtInfo',
      intentionAssignBizId: 'IntentionAssignBizId',
      intentionBizId: 'IntentionBizId',
      partnerCode: 'PartnerCode',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      createTime: 'number',
      deliveryOrderBizId: 'string',
      extInfo: 'string',
      intentionAssignBizId: 'string',
      intentionBizId: 'string',
      partnerCode: 'string',
      reason: 'string',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserIntentionNotesResponseBodyData extends $tea.Model {
  createTime?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserIntentionsResponseBodyData extends $tea.Model {
  area?: string;
  bizId?: string;
  bizType?: string;
  contactName?: string;
  createTime?: number;
  description?: string;
  ext?: string;
  mobile?: string;
  reason?: string;
  status?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bizId: 'BizId',
      bizType: 'BizType',
      contactName: 'ContactName',
      createTime: 'CreateTime',
      description: 'Description',
      ext: 'Ext',
      mobile: 'Mobile',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bizId: 'string',
      bizType: 'string',
      contactName: 'string',
      createTime: 'number',
      description: 'string',
      ext: 'string',
      mobile: 'string',
      reason: 'string',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProduceOperateLogsResponseBodyData extends $tea.Model {
  bizId?: string;
  bizStatus?: number;
  bizType?: string;
  note?: string;
  operateName?: string;
  operateTime?: number;
  operateUserType?: string;
  toBizStatus?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizStatus: 'BizStatus',
      bizType: 'BizType',
      note: 'Note',
      operateName: 'OperateName',
      operateTime: 'OperateTime',
      operateUserType: 'OperateUserType',
      toBizStatus: 'ToBizStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizStatus: 'number',
      bizType: 'string',
      note: 'string',
      operateName: 'string',
      operateTime: 'number',
      operateUserType: 'string',
      toBizStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSolutionsResponseBodyData extends $tea.Model {
  bizId?: string;
  bizType?: string;
  createTime?: number;
  deliveryOrderBizId?: string;
  intentionAssignBizId?: string;
  intentionBizId?: string;
  partnerCode?: string;
  reason?: string;
  status?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      createTime: 'CreateTime',
      deliveryOrderBizId: 'DeliveryOrderBizId',
      intentionAssignBizId: 'IntentionAssignBizId',
      intentionBizId: 'IntentionBizId',
      partnerCode: 'PartnerCode',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      createTime: 'number',
      deliveryOrderBizId: 'string',
      intentionAssignBizId: 'string',
      intentionBizId: 'string',
      partnerCode: 'string',
      reason: 'string',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityConfigResponseBodyDataCommodityModules extends $tea.Model {
  lxModuleCode?: string;
  moduleCode?: string;
  moduleDescription?: string;
  moduleName?: string;
  moduleTip?: string;
  moduleType?: string;
  moduleUrl?: string;
  moduleValue?: string;
  sortNumber?: number;
  static names(): { [key: string]: string } {
    return {
      lxModuleCode: 'LxModuleCode',
      moduleCode: 'ModuleCode',
      moduleDescription: 'ModuleDescription',
      moduleName: 'ModuleName',
      moduleTip: 'ModuleTip',
      moduleType: 'ModuleType',
      moduleUrl: 'ModuleUrl',
      moduleValue: 'ModuleValue',
      sortNumber: 'SortNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lxModuleCode: 'string',
      moduleCode: 'string',
      moduleDescription: 'string',
      moduleName: 'string',
      moduleTip: 'string',
      moduleType: 'string',
      moduleUrl: 'string',
      moduleValue: 'string',
      sortNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityConfigResponseBodyData extends $tea.Model {
  commodityCode?: string;
  commodityModules?: QueryCommodityConfigResponseBodyDataCommodityModules[];
  description?: string;
  iconUrl?: string;
  productLine?: string;
  protocolUrl?: string;
  startingPrice?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityModules: 'CommodityModules',
      description: 'Description',
      iconUrl: 'IconUrl',
      productLine: 'ProductLine',
      protocolUrl: 'ProtocolUrl',
      startingPrice: 'StartingPrice',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityModules: { 'type': 'array', 'itemType': QueryCommodityConfigResponseBodyDataCommodityModules },
      description: 'string',
      iconUrl: 'string',
      productLine: 'string',
      protocolUrl: 'string',
      startingPrice: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPartnerIntentionListResponseBodyData extends $tea.Model {
  bizId?: string;
  bizType?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPartnerProduceListResponseBodyData extends $tea.Model {
  bizId?: string;
  bizType?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      mobile: 'mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      mobile: 'string',
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
    this._endpointMap = {
      'ap-northeast-1': "companyreg.aliyuncs.com",
      'ap-northeast-2-pop': "companyreg.aliyuncs.com",
      'ap-south-1': "companyreg.aliyuncs.com",
      'ap-southeast-1': "companyreg.aliyuncs.com",
      'ap-southeast-2': "companyreg.aliyuncs.com",
      'ap-southeast-3': "companyreg.aliyuncs.com",
      'ap-southeast-5': "companyreg.aliyuncs.com",
      'cn-beijing': "companyreg.aliyuncs.com",
      'cn-beijing-finance-1': "companyreg.aliyuncs.com",
      'cn-beijing-finance-pop': "companyreg.aliyuncs.com",
      'cn-beijing-gov-1': "companyreg.aliyuncs.com",
      'cn-beijing-nu16-b01': "companyreg.aliyuncs.com",
      'cn-chengdu': "companyreg.aliyuncs.com",
      'cn-edge-1': "companyreg.aliyuncs.com",
      'cn-fujian': "companyreg.aliyuncs.com",
      'cn-haidian-cm12-c01': "companyreg.aliyuncs.com",
      'cn-hangzhou-bj-b01': "companyreg.aliyuncs.com",
      'cn-hangzhou-finance': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "companyreg.aliyuncs.com",
      'cn-hangzhou-test-306': "companyreg.aliyuncs.com",
      'cn-hongkong': "companyreg.aliyuncs.com",
      'cn-hongkong-finance-pop': "companyreg.aliyuncs.com",
      'cn-huhehaote': "companyreg.aliyuncs.com",
      'cn-huhehaote-nebula-1': "companyreg.aliyuncs.com",
      'cn-north-2-gov-1': "companyreg.aliyuncs.com",
      'cn-qingdao': "companyreg.aliyuncs.com",
      'cn-qingdao-nebula': "companyreg.aliyuncs.com",
      'cn-shanghai': "companyreg.aliyuncs.com",
      'cn-shanghai-et15-b01': "companyreg.aliyuncs.com",
      'cn-shanghai-et2-b01': "companyreg.aliyuncs.com",
      'cn-shanghai-finance-1': "companyreg.aliyuncs.com",
      'cn-shanghai-inner': "companyreg.aliyuncs.com",
      'cn-shanghai-internal-test-1': "companyreg.aliyuncs.com",
      'cn-shenzhen': "companyreg.aliyuncs.com",
      'cn-shenzhen-finance-1': "companyreg.aliyuncs.com",
      'cn-shenzhen-inner': "companyreg.aliyuncs.com",
      'cn-shenzhen-st4-d01': "companyreg.aliyuncs.com",
      'cn-shenzhen-su18-b01': "companyreg.aliyuncs.com",
      'cn-wuhan': "companyreg.aliyuncs.com",
      'cn-wulanchabu': "companyreg.aliyuncs.com",
      'cn-yushanfang': "companyreg.aliyuncs.com",
      'cn-zhangbei': "companyreg.aliyuncs.com",
      'cn-zhangbei-na61-b01': "companyreg.aliyuncs.com",
      'cn-zhangjiakou': "companyreg.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "companyreg.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "companyreg.aliyuncs.com",
      'eu-central-1': "companyreg.aliyuncs.com",
      'eu-west-1': "companyreg.aliyuncs.com",
      'eu-west-1-oxs': "companyreg.aliyuncs.com",
      'me-east-1': "companyreg.aliyuncs.com",
      'rus-west-1-pop': "companyreg.aliyuncs.com",
      'us-east-1': "companyreg.aliyuncs.com",
      'us-west-1': "companyreg.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("companyreg", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async bindProduceAuthorizationWithOptions(request: BindProduceAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<BindProduceAuthorizationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authorizedUserIds)) {
      body["AuthorizedUserIds"] = request.authorizedUserIds;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindProduceAuthorization",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindProduceAuthorizationResponse>(await this.callApi(params, req, runtime), new BindProduceAuthorizationResponse({}));
  }

  async bindProduceAuthorization(request: BindProduceAuthorizationRequest): Promise<BindProduceAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindProduceAuthorizationWithOptions(request, runtime);
  }

  async closeIntentionForPartnerWithOptions(request: CloseIntentionForPartnerRequest, runtime: $Util.RuntimeOptions): Promise<CloseIntentionForPartnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseIntentionForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseIntentionForPartnerResponse>(await this.callApi(params, req, runtime), new CloseIntentionForPartnerResponse({}));
  }

  async closeIntentionForPartner(request: CloseIntentionForPartnerRequest): Promise<CloseIntentionForPartnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeIntentionForPartnerWithOptions(request, runtime);
  }

  async closeUserIntentionWithOptions(request: CloseUserIntentionRequest, runtime: $Util.RuntimeOptions): Promise<CloseUserIntentionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseUserIntention",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseUserIntentionResponse>(await this.callApi(params, req, runtime), new CloseUserIntentionResponse({}));
  }

  async closeUserIntention(request: CloseUserIntentionRequest): Promise<CloseUserIntentionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeUserIntentionWithOptions(request, runtime);
  }

  async createBusinessOpportunityWithOptions(request: CreateBusinessOpportunityRequest, runtime: $Util.RuntimeOptions): Promise<CreateBusinessOpportunityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.VCode)) {
      query["VCode"] = request.VCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBusinessOpportunity",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBusinessOpportunityResponse>(await this.callApi(params, req, runtime), new CreateBusinessOpportunityResponse({}));
  }

  async createBusinessOpportunity(request: CreateBusinessOpportunityRequest): Promise<CreateBusinessOpportunityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBusinessOpportunityWithOptions(request, runtime);
  }

  async createProduceForPartnerWithOptions(request: CreateProduceForPartnerRequest, runtime: $Util.RuntimeOptions): Promise<CreateProduceForPartnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProduceForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProduceForPartnerResponse>(await this.callApi(params, req, runtime), new CreateProduceForPartnerResponse({}));
  }

  async createProduceForPartner(request: CreateProduceForPartnerRequest): Promise<CreateProduceForPartnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProduceForPartnerWithOptions(request, runtime);
  }

  async describePartnerConfigWithOptions(request: DescribePartnerConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribePartnerConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.partnerCode)) {
      query["PartnerCode"] = request.partnerCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePartnerConfig",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePartnerConfigResponse>(await this.callApi(params, req, runtime), new DescribePartnerConfigResponse({}));
  }

  async describePartnerConfig(request: DescribePartnerConfigRequest): Promise<DescribePartnerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePartnerConfigWithOptions(request, runtime);
  }

  async generateUploadFilePolicyWithOptions(request: GenerateUploadFilePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadFilePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadFilePolicy",
      version: "2020-03-06",
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
      version: "2020-03-06",
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

  async listIntentionNoteWithOptions(request: ListIntentionNoteRequest, runtime: $Util.RuntimeOptions): Promise<ListIntentionNoteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
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
      action: "ListIntentionNote",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntentionNoteResponse>(await this.callApi(params, req, runtime), new ListIntentionNoteResponse({}));
  }

  async listIntentionNote(request: ListIntentionNoteRequest): Promise<ListIntentionNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntentionNoteWithOptions(request, runtime);
  }

  async listProduceAuthorizationWithOptions(request: ListProduceAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<ListProduceAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

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
      action: "ListProduceAuthorization",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProduceAuthorizationResponse>(await this.callApi(params, req, runtime), new ListProduceAuthorizationResponse({}));
  }

  async listProduceAuthorization(request: ListProduceAuthorizationRequest): Promise<ListProduceAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProduceAuthorizationWithOptions(request, runtime);
  }

  async listUserDetailSolutionsWithOptions(request: ListUserDetailSolutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserDetailSolutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserDetailSolutions",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserDetailSolutionsResponse>(await this.callApi(params, req, runtime), new ListUserDetailSolutionsResponse({}));
  }

  async listUserDetailSolutions(request: ListUserDetailSolutionsRequest): Promise<ListUserDetailSolutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDetailSolutionsWithOptions(request, runtime);
  }

  async listUserIntentionNotesWithOptions(request: ListUserIntentionNotesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserIntentionNotesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserIntentionNotes",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserIntentionNotesResponse>(await this.callApi(params, req, runtime), new ListUserIntentionNotesResponse({}));
  }

  async listUserIntentionNotes(request: ListUserIntentionNotesRequest): Promise<ListUserIntentionNotesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserIntentionNotesWithOptions(request, runtime);
  }

  async listUserIntentionsWithOptions(request: ListUserIntentionsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserIntentionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.area)) {
      query["Area"] = request.area;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.bizTypes)) {
      query["BizTypes"] = request.bizTypes;
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

    if (!Util.isUnset(request.sortFiled)) {
      query["SortFiled"] = request.sortFiled;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.withExtInfo)) {
      query["WithExtInfo"] = request.withExtInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserIntentions",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserIntentionsResponse>(await this.callApi(params, req, runtime), new ListUserIntentionsResponse({}));
  }

  async listUserIntentions(request: ListUserIntentionsRequest): Promise<ListUserIntentionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserIntentionsWithOptions(request, runtime);
  }

  async listUserProduceOperateLogsWithOptions(request: ListUserProduceOperateLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserProduceOperateLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

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
      action: "ListUserProduceOperateLogs",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserProduceOperateLogsResponse>(await this.callApi(params, req, runtime), new ListUserProduceOperateLogsResponse({}));
  }

  async listUserProduceOperateLogs(request: ListUserProduceOperateLogsRequest): Promise<ListUserProduceOperateLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserProduceOperateLogsWithOptions(request, runtime);
  }

  async listUserSolutionsWithOptions(tmpReq: ListUserSolutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserSolutionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListUserSolutionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.existStatus)) {
      request.existStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.existStatus, "ExistStatus", "json");
    }

    let query = { };
    if (!Util.isUnset(request.existStatusShrink)) {
      query["ExistStatus"] = request.existStatusShrink;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserSolutions",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserSolutionsResponse>(await this.callApi(params, req, runtime), new ListUserSolutionsResponse({}));
  }

  async listUserSolutions(request: ListUserSolutionsRequest): Promise<ListUserSolutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserSolutionsWithOptions(request, runtime);
  }

  async operateProduceForPartnerWithOptions(request: OperateProduceForPartnerRequest, runtime: $Util.RuntimeOptions): Promise<OperateProduceForPartnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateProduceForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateProduceForPartnerResponse>(await this.callApi(params, req, runtime), new OperateProduceForPartnerResponse({}));
  }

  async operateProduceForPartner(request: OperateProduceForPartnerRequest): Promise<OperateProduceForPartnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateProduceForPartnerWithOptions(request, runtime);
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
      version: "2020-03-06",
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
      version: "2020-03-06",
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

  async queryAvailableNumbersWithOptions(request: QueryAvailableNumbersRequest, runtime: $Util.RuntimeOptions): Promise<QueryAvailableNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvailableNumbers",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAvailableNumbersResponse>(await this.callApi(params, req, runtime), new QueryAvailableNumbersResponse({}));
  }

  async queryAvailableNumbers(request: QueryAvailableNumbersRequest): Promise<QueryAvailableNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvailableNumbersWithOptions(request, runtime);
  }

  async queryBagRemainingWithOptions(request: QueryBagRemainingRequest, runtime: $Util.RuntimeOptions): Promise<QueryBagRemainingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBagRemaining",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBagRemainingResponse>(await this.callApi(params, req, runtime), new QueryBagRemainingResponse({}));
  }

  async queryBagRemaining(request: QueryBagRemainingRequest): Promise<QueryBagRemainingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBagRemainingWithOptions(request, runtime);
  }

  async queryCommodityConfigWithOptions(request: QueryCommodityConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryCommodityConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.queryModule)) {
      query["QueryModule"] = request.queryModule;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCommodityConfig",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCommodityConfigResponse>(await this.callApi(params, req, runtime), new QueryCommodityConfigResponse({}));
  }

  async queryCommodityConfig(request: QueryCommodityConfigRequest): Promise<QueryCommodityConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCommodityConfigWithOptions(request, runtime);
  }

  async queryInstanceWithOptions(request: QueryInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstance",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceResponse>(await this.callApi(params, req, runtime), new QueryInstanceResponse({}));
  }

  async queryInstance(request: QueryInstanceRequest): Promise<QueryInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceWithOptions(request, runtime);
  }

  async queryPartnerIntentionListWithOptions(request: QueryPartnerIntentionListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPartnerIntentionListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

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
      action: "QueryPartnerIntentionList",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPartnerIntentionListResponse>(await this.callApi(params, req, runtime), new QueryPartnerIntentionListResponse({}));
  }

  async queryPartnerIntentionList(request: QueryPartnerIntentionListRequest): Promise<QueryPartnerIntentionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPartnerIntentionListWithOptions(request, runtime);
  }

  async queryPartnerProduceListWithOptions(request: QueryPartnerProduceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPartnerProduceListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPartnerProduceList",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPartnerProduceListResponse>(await this.callApi(params, req, runtime), new QueryPartnerProduceListResponse({}));
  }

  async queryPartnerProduceList(request: QueryPartnerProduceListRequest): Promise<QueryPartnerProduceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPartnerProduceListWithOptions(request, runtime);
  }

  async queryUserNeedAuthWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryUserNeedAuthResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryUserNeedAuth",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserNeedAuthResponse>(await this.callApi(params, req, runtime), new QueryUserNeedAuthResponse({}));
  }

  async queryUserNeedAuth(): Promise<QueryUserNeedAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserNeedAuthWithOptions(runtime);
  }

  async recordPostBackWithOptions(request: RecordPostBackRequest, runtime: $Util.RuntimeOptions): Promise<RecordPostBackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["bizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!Util.isUnset(request.contactor)) {
      query["contactor"] = request.contactor;
    }

    if (!Util.isUnset(request.content)) {
      query["content"] = request.content;
    }

    if (!Util.isUnset(request.entityKey)) {
      query["entityKey"] = request.entityKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecordPostBack",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecordPostBackResponse>(await this.callApi(params, req, runtime), new RecordPostBackResponse({}));
  }

  async recordPostBack(request: RecordPostBackRequest): Promise<RecordPostBackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordPostBackWithOptions(request, runtime);
  }

  async rejectSolutionWithOptions(request: RejectSolutionRequest, runtime: $Util.RuntimeOptions): Promise<RejectSolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.solutionBizId)) {
      query["SolutionBizId"] = request.solutionBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RejectSolution",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectSolutionResponse>(await this.callApi(params, req, runtime), new RejectSolutionResponse({}));
  }

  async rejectSolution(request: RejectSolutionRequest): Promise<RejectSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectSolutionWithOptions(request, runtime);
  }

  async rejectUserSolutionWithOptions(request: RejectUserSolutionRequest, runtime: $Util.RuntimeOptions): Promise<RejectUserSolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.solutionBizId)) {
      query["SolutionBizId"] = request.solutionBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RejectUserSolution",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectUserSolutionResponse>(await this.callApi(params, req, runtime), new RejectUserSolutionResponse({}));
  }

  async rejectUserSolution(request: RejectUserSolutionRequest): Promise<RejectUserSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectUserSolutionWithOptions(request, runtime);
  }

  async releaseProduceAuthorizationWithOptions(request: ReleaseProduceAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseProduceAuthorizationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authorizedUserId)) {
      body["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseProduceAuthorization",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseProduceAuthorizationResponse>(await this.callApi(params, req, runtime), new ReleaseProduceAuthorizationResponse({}));
  }

  async releaseProduceAuthorization(request: ReleaseProduceAuthorizationRequest): Promise<ReleaseProduceAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseProduceAuthorizationWithOptions(request, runtime);
  }

  async startBackToBackCallWithOptions(request: StartBackToBackCallRequest, runtime: $Util.RuntimeOptions): Promise<StartBackToBackCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.callCenterNumber)) {
      query["CallCenterNumber"] = request.callCenterNumber;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.mobileKey)) {
      query["MobileKey"] = request.mobileKey;
    }

    if (!Util.isUnset(request.skillType)) {
      query["SkillType"] = request.skillType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartBackToBackCall",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartBackToBackCallResponse>(await this.callApi(params, req, runtime), new StartBackToBackCallResponse({}));
  }

  async startBackToBackCall(request: StartBackToBackCallRequest): Promise<StartBackToBackCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBackToBackCallWithOptions(request, runtime);
  }

  async submitIntentionNoteWithOptions(request: SubmitIntentionNoteRequest, runtime: $Util.RuntimeOptions): Promise<SubmitIntentionNoteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitIntentionNote",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitIntentionNoteResponse>(await this.callApi(params, req, runtime), new SubmitIntentionNoteResponse({}));
  }

  async submitIntentionNote(request: SubmitIntentionNoteRequest): Promise<SubmitIntentionNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIntentionNoteWithOptions(request, runtime);
  }

  async submitSolutionWithOptions(request: SubmitSolutionRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!Util.isUnset(request.solution)) {
      query["Solution"] = request.solution;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSolution",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSolutionResponse>(await this.callApi(params, req, runtime), new SubmitSolutionResponse({}));
  }

  async submitSolution(request: SubmitSolutionRequest): Promise<SubmitSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSolutionWithOptions(request, runtime);
  }

  async transferIntentionOwnerWithOptions(request: TransferIntentionOwnerRequest, runtime: $Util.RuntimeOptions): Promise<TransferIntentionOwnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.personId)) {
      query["PersonId"] = request.personId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferIntentionOwner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferIntentionOwnerResponse>(await this.callApi(params, req, runtime), new TransferIntentionOwnerResponse({}));
  }

  async transferIntentionOwner(request: TransferIntentionOwnerRequest): Promise<TransferIntentionOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferIntentionOwnerWithOptions(request, runtime);
  }

  async transferProduceOwnerWithOptions(request: TransferProduceOwnerRequest, runtime: $Util.RuntimeOptions): Promise<TransferProduceOwnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.personId)) {
      query["PersonId"] = request.personId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferProduceOwner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferProduceOwnerResponse>(await this.callApi(params, req, runtime), new TransferProduceOwnerResponse({}));
  }

  async transferProduceOwner(request: TransferProduceOwnerRequest): Promise<TransferProduceOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferProduceOwnerWithOptions(request, runtime);
  }

}
