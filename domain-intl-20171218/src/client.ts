// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcknowledgeTaskResultRequest extends $tea.Model {
  lang?: string;
  taskDetailNo?: string[];
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskDetailNo: 'TaskDetailNo',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskDetailNo: { 'type': 'array', 'itemType': 'string' },
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcknowledgeTaskResultResponseBody extends $tea.Model {
  requestId?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcknowledgeTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcknowledgeTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AcknowledgeTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordResponseBody extends $tea.Model {
  requestId?: string;
  sensitiveWordMatchResultList?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sensitiveWordMatchResultList: 'SensitiveWordMatchResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sensitiveWordMatchResultList: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchFuzzyMatchDomainSensitiveWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchFuzzyMatchDomainSensitiveWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDomainVerificationRequest extends $tea.Model {
  actionType?: string;
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDomainVerificationResponseBody extends $tea.Model {
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

export class CancelDomainVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelDomainVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelDomainVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskRequest extends $tea.Model {
  lang?: string;
  taskNo?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskNo: 'TaskNo',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskNo: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponseBody extends $tea.Model {
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

export class CancelTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainRequest extends $tea.Model {
  domainName?: string;
  feeCommand?: string;
  feeCurrency?: string;
  feePeriod?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      feeCommand: 'FeeCommand',
      feeCurrency: 'FeeCurrency',
      feePeriod: 'FeePeriod',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      feeCommand: 'string',
      feeCurrency: 'string',
      feePeriod: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBody extends $tea.Model {
  avail?: string;
  domainName?: string;
  dynamicCheck?: boolean;
  premium?: string;
  price?: number;
  reason?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avail: 'Avail',
      domainName: 'DomainName',
      dynamicCheck: 'DynamicCheck',
      premium: 'Premium',
      price: 'Price',
      reason: 'Reason',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avail: 'string',
      domainName: 'string',
      dynamicCheck: 'boolean',
      premium: 'string',
      price: 'number',
      reason: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainSunriseClaimRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainSunriseClaimResponseBody extends $tea.Model {
  claimKey?: string;
  requestId?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      claimKey: 'ClaimKey',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimKey: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainSunriseClaimResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDomainSunriseClaimResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDomainSunriseClaimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransferInFeasibilityRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  transferAuthorizationCode?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      transferAuthorizationCode: 'TransferAuthorizationCode',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      transferAuthorizationCode: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransferInFeasibilityResponseBody extends $tea.Model {
  canTransfer?: boolean;
  code?: string;
  message?: string;
  productId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canTransfer: 'CanTransfer',
      code: 'Code',
      message: 'Message',
      productId: 'ProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTransfer: 'boolean',
      code: 'string',
      message: 'string',
      productId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransferInFeasibilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckTransferInFeasibilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckTransferInFeasibilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailRequest extends $tea.Model {
  domainName?: string[];
  email?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      email: 'Email',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponseBody extends $tea.Model {
  failList?: ConfirmTransferInEmailResponseBodyFailList;
  requestId?: string;
  successList?: ConfirmTransferInEmailResponseBodySuccessList;
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: ConfirmTransferInEmailResponseBodyFailList,
      requestId: 'string',
      successList: ConfirmTransferInEmailResponseBodySuccessList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmTransferInEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfirmTransferInEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationRequest extends $tea.Model {
  email?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBody extends $tea.Model {
  failList?: DeleteEmailVerificationResponseBodyFailList[];
  requestId?: string;
  successList?: DeleteEmailVerificationResponseBodySuccessList[];
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: { 'type': 'array', 'itemType': DeleteEmailVerificationResponseBodyFailList },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': DeleteEmailVerificationResponseBodySuccessList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrantProfileRequest extends $tea.Model {
  lang?: string;
  registrantProfileId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrantProfileResponseBody extends $tea.Model {
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

export class DeleteRegistrantProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRegistrantProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRegistrantProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmailVerifiedRequest extends $tea.Model {
  email?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmailVerifiedResponseBody extends $tea.Model {
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

export class EmailVerifiedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EmailVerifiedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EmailVerifiedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordResponseBody extends $tea.Model {
  exist?: boolean;
  keyword?: string;
  matchedSentiveWords?: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
      keyword: 'Keyword',
      matchedSentiveWords: 'MatchedSentiveWords',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'boolean',
      keyword: 'string',
      matchedSentiveWords: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FuzzyMatchDomainSensitiveWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FuzzyMatchDomainSensitiveWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationRequest extends $tea.Model {
  beginCreateTime?: number;
  email?: string;
  endCreateTime?: number;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  userClientIp?: string;
  verificationStatus?: number;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      email: 'Email',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'number',
      email: 'string',
      endCreateTime: 'number',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userClientIp: 'string',
      verificationStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListEmailVerificationResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListEmailVerificationResponseBodyData },
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

export class ListEmailVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeRequest extends $tea.Model {
  claimKey?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      claimKey: 'ClaimKey',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimKey: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBody extends $tea.Model {
  claims?: LookupTmchNoticeResponseBodyClaims;
  id?: number;
  label?: string;
  notAfter?: string;
  notBefore?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      claims: 'Claims',
      id: 'Id',
      label: 'Label',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claims: LookupTmchNoticeResponseBodyClaims,
      id: 'number',
      label: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LookupTmchNoticeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LookupTmchNoticeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollTaskResultRequest extends $tea.Model {
  domainName?: string;
  instanceId?: string;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  taskNo?: string;
  taskResultStatus?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      taskNo: 'TaskNo',
      taskResultStatus: 'TaskResultStatus',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      taskNo: 'string',
      taskResultStatus: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollTaskResultResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: PollTaskResultResponseBodyData;
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
      data: PollTaskResultResponseBodyData,
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

export class PollTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PollTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PollTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryArtExtensionRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryArtExtensionResponseBody extends $tea.Model {
  dateOrPeriod?: string;
  dimensions?: string;
  features?: string;
  inscriptionsAndMarkings?: string;
  maker?: string;
  materialsAndTechniques?: string;
  objectType?: string;
  reference?: string;
  requestId?: string;
  subject?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      dateOrPeriod: 'DateOrPeriod',
      dimensions: 'Dimensions',
      features: 'Features',
      inscriptionsAndMarkings: 'InscriptionsAndMarkings',
      maker: 'Maker',
      materialsAndTechniques: 'MaterialsAndTechniques',
      objectType: 'ObjectType',
      reference: 'Reference',
      requestId: 'RequestId',
      subject: 'Subject',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateOrPeriod: 'string',
      dimensions: 'string',
      features: 'string',
      inscriptionsAndMarkings: 'string',
      maker: 'string',
      materialsAndTechniques: 'string',
      objectType: 'string',
      reference: 'string',
      requestId: 'string',
      subject: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryArtExtensionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryArtExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryArtExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListRequest extends $tea.Model {
  domainName?: string;
  endDate?: number;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  startDate?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'number',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startDate: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryChangeLogListResponseBodyData;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  resultLimit?: boolean;
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
      resultLimit: 'ResultLimit',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryChangeLogListResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      resultLimit: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryChangeLogListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryChangeLogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactInfoRequest extends $tea.Model {
  contactType?: string;
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactInfoResponseBody extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  createDate?: string;
  email?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  requestId?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      createDate: 'CreateDate',
      email: 'Email',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      requestId: 'RequestId',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      createDate: 'string',
      email: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      requestId: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContactInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryContactInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordResponseBody extends $tea.Model {
  DSRecordList?: QueryDSRecordResponseBodyDSRecordList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DSRecordList: 'DSRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DSRecordList: { 'type': 'array', 'itemType': QueryDSRecordResponseBodyDSRecordList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDnsHostRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDnsHostResponseBody extends $tea.Model {
  dnsHostList?: QueryDnsHostResponseBodyDnsHostList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsHostList: 'DnsHostList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsHostList: { 'type': 'array', 'itemType': QueryDnsHostResponseBodyDnsHostList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDnsHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameResponseBody extends $tea.Model {
  dnsList?: QueryDomainByDomainNameResponseBodyDnsList;
  domainName?: string;
  domainNameProxyService?: boolean;
  domainNameVerificationStatus?: string;
  email?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  instanceId?: string;
  premium?: boolean;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrantUpdatingStatus?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  requestId?: string;
  transferOutStatus?: string;
  transferProhibitionLock?: string;
  updateProhibitionLock?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainName: 'DomainName',
      domainNameProxyService: 'DomainNameProxyService',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      email: 'Email',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      instanceId: 'InstanceId',
      premium: 'Premium',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      requestId: 'RequestId',
      transferOutStatus: 'TransferOutStatus',
      transferProhibitionLock: 'TransferProhibitionLock',
      updateProhibitionLock: 'UpdateProhibitionLock',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: QueryDomainByDomainNameResponseBodyDnsList,
      domainName: 'string',
      domainNameProxyService: 'boolean',
      domainNameVerificationStatus: 'string',
      email: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      instanceId: 'string',
      premium: 'boolean',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      requestId: 'string',
      transferOutStatus: 'string',
      transferProhibitionLock: 'string',
      updateProhibitionLock: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainByDomainNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainByDomainNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponseBody extends $tea.Model {
  dnsList?: QueryDomainByInstanceIdResponseBodyDnsList;
  domainName?: string;
  domainNameProxyService?: boolean;
  domainNameVerificationStatus?: string;
  email?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  instanceId?: string;
  premium?: boolean;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrantUpdatingStatus?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  requestId?: string;
  transferOutStatus?: string;
  transferProhibitionLock?: string;
  updateProhibitionLock?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainName: 'DomainName',
      domainNameProxyService: 'DomainNameProxyService',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      email: 'Email',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      instanceId: 'InstanceId',
      premium: 'Premium',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      requestId: 'RequestId',
      transferOutStatus: 'TransferOutStatus',
      transferProhibitionLock: 'TransferProhibitionLock',
      updateProhibitionLock: 'UpdateProhibitionLock',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: QueryDomainByInstanceIdResponseBodyDnsList,
      domainName: 'string',
      domainNameProxyService: 'boolean',
      domainNameVerificationStatus: 'string',
      email: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      instanceId: 'string',
      premium: 'boolean',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      requestId: 'string',
      transferOutStatus: 'string',
      transferProhibitionLock: 'string',
      updateProhibitionLock: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainByInstanceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListRequest extends $tea.Model {
  ccompany?: string;
  domainName?: string;
  endExpirationDate?: number;
  endRegistrationDate?: number;
  lang?: string;
  orderByType?: string;
  orderKeyType?: string;
  pageNum?: number;
  pageSize?: number;
  productDomainType?: string;
  queryType?: string;
  startExpirationDate?: number;
  startRegistrationDate?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      ccompany: 'Ccompany',
      domainName: 'DomainName',
      endExpirationDate: 'EndExpirationDate',
      endRegistrationDate: 'EndRegistrationDate',
      lang: 'Lang',
      orderByType: 'OrderByType',
      orderKeyType: 'OrderKeyType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productDomainType: 'ProductDomainType',
      queryType: 'QueryType',
      startExpirationDate: 'StartExpirationDate',
      startRegistrationDate: 'StartRegistrationDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccompany: 'string',
      domainName: 'string',
      endExpirationDate: 'number',
      endRegistrationDate: 'number',
      lang: 'string',
      orderByType: 'string',
      orderKeyType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productDomainType: 'string',
      queryType: 'string',
      startExpirationDate: 'number',
      startRegistrationDate: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryDomainListResponseBodyData;
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
      data: QueryDomainListResponseBodyData,
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

export class QueryDomainListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealNameVerificationInfoRequest extends $tea.Model {
  domainName?: string;
  fetchImage?: boolean;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      fetchImage: 'FetchImage',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      fetchImage: 'boolean',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealNameVerificationInfoResponseBody extends $tea.Model {
  domainName?: string;
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
  identityCredentialUrl?: string;
  instanceId?: string;
  requestId?: string;
  submissionDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      identityCredentialUrl: 'IdentityCredentialUrl',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      submissionDate: 'SubmissionDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      identityCredentialUrl: 'string',
      instanceId: 'string',
      requestId: 'string',
      submissionDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealNameVerificationInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainRealNameVerificationInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainRealNameVerificationInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnsAssociationRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnsAssociationResponseBody extends $tea.Model {
  address?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnsAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEnsAssociationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEnsAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  realNameVerificationAction?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      realNameVerificationAction: 'RealNameVerificationAction',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      realNameVerificationAction: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationResponseBody extends $tea.Model {
  data?: QueryFailReasonForDomainRealNameVerificationResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryFailReasonForDomainRealNameVerificationResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFailReasonForDomainRealNameVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFailReasonForDomainRealNameVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForRegistrantProfileRealNameVerificationRequest extends $tea.Model {
  lang?: string;
  registrantProfileID?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      registrantProfileID: 'RegistrantProfileID',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      registrantProfileID: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForRegistrantProfileRealNameVerificationResponseBody extends $tea.Model {
  data?: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForRegistrantProfileRealNameVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalEnsAssociationRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalEnsAssociationResponseBody extends $tea.Model {
  address?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalEnsAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryLocalEnsAssociationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryLocalEnsAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfileRealNameVerificationInfoRequest extends $tea.Model {
  fetchImage?: boolean;
  lang?: string;
  registrantProfileId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      fetchImage: 'FetchImage',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchImage: 'boolean',
      lang: 'string',
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfileRealNameVerificationInfoResponseBody extends $tea.Model {
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
  identityCredentialUrl?: string;
  modificationDate?: string;
  registrantProfileId?: number;
  requestId?: string;
  submissionDate?: string;
  static names(): { [key: string]: string } {
    return {
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      identityCredentialUrl: 'IdentityCredentialUrl',
      modificationDate: 'ModificationDate',
      registrantProfileId: 'RegistrantProfileId',
      requestId: 'RequestId',
      submissionDate: 'SubmissionDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      identityCredentialUrl: 'string',
      modificationDate: 'string',
      registrantProfileId: 'number',
      requestId: 'string',
      submissionDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfileRealNameVerificationInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRegistrantProfileRealNameVerificationInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRegistrantProfileRealNameVerificationInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesRequest extends $tea.Model {
  defaultRegistrantProfile?: boolean;
  email?: string;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  realNameStatus?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantProfileType?: string;
  registrantType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      realNameStatus: 'RealNameStatus',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      realNameStatus: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponseBody extends $tea.Model {
  currentPageNum?: number;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  registrantProfiles?: QueryRegistrantProfilesResponseBodyRegistrantProfiles;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      registrantProfiles: 'RegistrantProfiles',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      registrantProfiles: QueryRegistrantProfilesResponseBodyRegistrantProfiles,
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRegistrantProfilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRegistrantProfilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryRequest extends $tea.Model {
  domainName?: string;
  domainNameCursor?: string;
  lang?: string;
  pageSize?: number;
  taskDetailNoCursor?: string;
  taskNo?: string;
  taskStatus?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainNameCursor: 'DomainNameCursor',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskDetailNoCursor: 'TaskDetailNoCursor',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainNameCursor: 'string',
      lang: 'string',
      pageSize: 'number',
      taskDetailNoCursor: 'string',
      taskNo: 'string',
      taskStatus: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBody extends $tea.Model {
  currentPageCursor?: QueryTaskDetailHistoryResponseBodyCurrentPageCursor;
  nextPageCursor?: QueryTaskDetailHistoryResponseBodyNextPageCursor;
  objects?: QueryTaskDetailHistoryResponseBodyObjects[];
  pageSize?: number;
  prePageCursor?: QueryTaskDetailHistoryResponseBodyPrePageCursor;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPageCursor: 'CurrentPageCursor',
      nextPageCursor: 'NextPageCursor',
      objects: 'Objects',
      pageSize: 'PageSize',
      prePageCursor: 'PrePageCursor',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageCursor: QueryTaskDetailHistoryResponseBodyCurrentPageCursor,
      nextPageCursor: QueryTaskDetailHistoryResponseBodyNextPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskDetailHistoryResponseBodyObjects },
      pageSize: 'number',
      prePageCursor: QueryTaskDetailHistoryResponseBodyPrePageCursor,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskDetailHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTaskDetailHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListRequest extends $tea.Model {
  domainName?: string;
  instanceId?: string;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  taskNo?: string;
  taskStatus?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      taskNo: 'string',
      taskStatus: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTaskDetailListResponseBodyData;
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
      data: QueryTaskDetailListResponseBodyData,
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

export class QueryTaskDetailListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskDetailListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTaskDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryRequest extends $tea.Model {
  beginCreateTime?: number;
  createTimeCursor?: number;
  endCreateTime?: number;
  lang?: string;
  pageSize?: number;
  taskNoCursor?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      createTimeCursor: 'CreateTimeCursor',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskNoCursor: 'TaskNoCursor',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'number',
      createTimeCursor: 'number',
      endCreateTime: 'number',
      lang: 'string',
      pageSize: 'number',
      taskNoCursor: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBody extends $tea.Model {
  currentPageCursor?: QueryTaskInfoHistoryResponseBodyCurrentPageCursor;
  nextPageCursor?: QueryTaskInfoHistoryResponseBodyNextPageCursor;
  objects?: QueryTaskInfoHistoryResponseBodyObjects[];
  pageSize?: number;
  prePageCursor?: QueryTaskInfoHistoryResponseBodyPrePageCursor;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPageCursor: 'CurrentPageCursor',
      nextPageCursor: 'NextPageCursor',
      objects: 'Objects',
      pageSize: 'PageSize',
      prePageCursor: 'PrePageCursor',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageCursor: QueryTaskInfoHistoryResponseBodyCurrentPageCursor,
      nextPageCursor: QueryTaskInfoHistoryResponseBodyNextPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskInfoHistoryResponseBodyObjects },
      pageSize: 'number',
      prePageCursor: QueryTaskInfoHistoryResponseBodyPrePageCursor,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskInfoHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTaskInfoHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListRequest extends $tea.Model {
  beginCreateTime?: number;
  endCreateTime?: number;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'number',
      endCreateTime: 'number',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTaskListResponseBodyData;
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
      data: QueryTaskListResponseBodyData,
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

export class QueryTaskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryTransferInByInstanceIdRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInByInstanceIdResponseBody extends $tea.Model {
  domainName?: string;
  email?: string;
  expirationDate?: string;
  expirationDateLong?: number;
  instanceId?: string;
  modificationDate?: string;
  modificationDateLong?: number;
  needMailCheck?: boolean;
  progressBarType?: number;
  requestId?: string;
  resultCode?: string;
  resultDate?: string;
  resultDateLong?: number;
  resultMsg?: string;
  simpleTransferInStatus?: string;
  status?: number;
  submissionDate?: string;
  submissionDateLong?: number;
  transferAuthorizationCodeSubmissionDate?: string;
  transferAuthorizationCodeSubmissionDateLong?: number;
  userId?: string;
  whoisMailStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      email: 'Email',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      instanceId: 'InstanceId',
      modificationDate: 'ModificationDate',
      modificationDateLong: 'ModificationDateLong',
      needMailCheck: 'NeedMailCheck',
      progressBarType: 'ProgressBarType',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultDate: 'ResultDate',
      resultDateLong: 'ResultDateLong',
      resultMsg: 'ResultMsg',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      status: 'Status',
      submissionDate: 'SubmissionDate',
      submissionDateLong: 'SubmissionDateLong',
      transferAuthorizationCodeSubmissionDate: 'TransferAuthorizationCodeSubmissionDate',
      transferAuthorizationCodeSubmissionDateLong: 'TransferAuthorizationCodeSubmissionDateLong',
      userId: 'UserId',
      whoisMailStatus: 'WhoisMailStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      email: 'string',
      expirationDate: 'string',
      expirationDateLong: 'number',
      instanceId: 'string',
      modificationDate: 'string',
      modificationDateLong: 'number',
      needMailCheck: 'boolean',
      progressBarType: 'number',
      requestId: 'string',
      resultCode: 'string',
      resultDate: 'string',
      resultDateLong: 'number',
      resultMsg: 'string',
      simpleTransferInStatus: 'string',
      status: 'number',
      submissionDate: 'string',
      submissionDateLong: 'number',
      transferAuthorizationCodeSubmissionDate: 'string',
      transferAuthorizationCodeSubmissionDateLong: 'number',
      userId: 'string',
      whoisMailStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInByInstanceIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTransferInByInstanceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTransferInByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  simpleTransferInStatus?: string;
  submissionEndDate?: number;
  submissionStartDate?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      submissionEndDate: 'SubmissionEndDate',
      submissionStartDate: 'SubmissionStartDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      simpleTransferInStatus: 'string',
      submissionEndDate: 'number',
      submissionStartDate: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryTransferInListResponseBodyData;
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
      data: QueryTransferInListResponseBodyData,
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

export class QueryTransferInListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTransferInListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTransferInListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferOutInfoRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferOutInfoResponseBody extends $tea.Model {
  email?: string;
  expirationDate?: string;
  pendingRequestDate?: string;
  requestId?: string;
  resultCode?: string;
  resultMsg?: string;
  status?: number;
  transferAuthorizationCodeSendDate?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      expirationDate: 'ExpirationDate',
      pendingRequestDate: 'PendingRequestDate',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      status: 'Status',
      transferAuthorizationCodeSendDate: 'TransferAuthorizationCodeSendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expirationDate: 'string',
      pendingRequestDate: 'string',
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      status: 'number',
      transferAuthorizationCodeSendDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferOutInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTransferOutInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTransferOutInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistrantProfileRealNameVerificationRequest extends $tea.Model {
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
  lang?: string;
  registrantProfileID?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      lang: 'Lang',
      registrantProfileID: 'RegistrantProfileID',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      lang: 'string',
      registrantProfileID: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistrantProfileRealNameVerificationResponseBody extends $tea.Model {
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

export class RegistrantProfileRealNameVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegistrantProfileRealNameVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegistrantProfileRealNameVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationRequest extends $tea.Model {
  email?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponseBody extends $tea.Model {
  failList?: ResendEmailVerificationResponseBodyFailList[];
  requestId?: string;
  successList?: ResendEmailVerificationResponseBodySuccessList[];
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: { 'type': 'array', 'itemType': ResendEmailVerificationResponseBodyFailList },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': ResendEmailVerificationResponseBodySuccessList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResendEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResendEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderActivateRequest extends $tea.Model {
  couponNo?: string;
  lang?: string;
  orderActivateParam?: SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam[];
  promotionNo?: string;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      lang: 'Lang',
      orderActivateParam: 'OrderActivateParam',
      promotionNo: 'PromotionNo',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      lang: 'string',
      orderActivateParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderActivateResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderActivateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForCreatingOrderActivateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForCreatingOrderActivateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRedeemRequest extends $tea.Model {
  couponNo?: string;
  lang?: string;
  orderRedeemParam?: SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam[];
  promotionNo?: string;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      lang: 'Lang',
      orderRedeemParam: 'OrderRedeemParam',
      promotionNo: 'PromotionNo',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      lang: 'string',
      orderRedeemParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRedeemResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRedeemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForCreatingOrderRedeemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForCreatingOrderRedeemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRenewRequest extends $tea.Model {
  couponNo?: string;
  lang?: string;
  orderRenewParam?: SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam[];
  promotionNo?: string;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      lang: 'Lang',
      orderRenewParam: 'OrderRenewParam',
      promotionNo: 'PromotionNo',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      lang: 'string',
      orderRenewParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRenewResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRenewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForCreatingOrderRenewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForCreatingOrderRenewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderTransferRequest extends $tea.Model {
  couponNo?: string;
  lang?: string;
  orderTransferParam?: SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam[];
  promotionNo?: string;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      lang: 'Lang',
      orderTransferParam: 'OrderTransferParam',
      promotionNo: 'PromotionNo',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      lang: 'string',
      orderTransferParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam },
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderTransferResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderTransferResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForCreatingOrderTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForCreatingOrderTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForDomainNameProxyServiceRequest extends $tea.Model {
  domainName?: string[];
  lang?: string;
  userClientIp?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForDomainNameProxyServiceResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForDomainNameProxyServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForDomainNameProxyServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForDomainNameProxyServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForModifyingDomainDnsRequest extends $tea.Model {
  aliyunDns?: boolean;
  domainName?: string[];
  domainNameServer?: string[];
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunDns: 'AliyunDns',
      domainName: 'DomainName',
      domainNameServer: 'DomainNameServer',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunDns: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
      domainNameServer: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForModifyingDomainDnsResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForModifyingDomainDnsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForModifyingDomainDnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForModifyingDomainDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForReserveDropListDomainRequest extends $tea.Model {
  contactTemplateId?: string;
  domains?: SaveBatchTaskForReserveDropListDomainRequestDomains[];
  static names(): { [key: string]: string } {
    return {
      contactTemplateId: 'ContactTemplateId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'string',
      domains: { 'type': 'array', 'itemType': SaveBatchTaskForReserveDropListDomainRequestDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForReserveDropListDomainResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForReserveDropListDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForReserveDropListDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForReserveDropListDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForTransferProhibitionLockRequest extends $tea.Model {
  domainName?: string[];
  lang?: string;
  status?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      status: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForTransferProhibitionLockResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForTransferProhibitionLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForTransferProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForTransferProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdateProhibitionLockRequest extends $tea.Model {
  domainName?: string[];
  lang?: string;
  status?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      status: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdateProhibitionLockResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdateProhibitionLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForUpdateProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForUpdateProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoRequest extends $tea.Model {
  addTransferLock?: boolean;
  contactType?: string;
  domainName?: string[];
  lang?: string;
  registrantProfileId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      addTransferLock: 'AddTransferLock',
      contactType: 'ContactType',
      domainName: 'DomainName',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTransferLock: 'boolean',
      contactType: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForUpdatingContactInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForUpdatingContactInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoByNewContactRequest extends $tea.Model {
  address?: string;
  city?: string;
  contactType?: string;
  country?: string;
  domainName?: string[];
  email?: string;
  lang?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  transferOutProhibited?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      contactType: 'ContactType',
      country: 'Country',
      domainName: 'DomainName',
      email: 'Email',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      contactType: 'string',
      country: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoByNewContactResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoByNewContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForUpdatingContactInfoByNewContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForUpdatingContactInfoByNewContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRegistrantProfileRequest extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  defaultRegistrantProfile?: boolean;
  email?: string;
  lang?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantProfileType?: string;
  registrantType?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRegistrantProfileResponseBody extends $tea.Model {
  registrantProfileId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileId: 'RegistrantProfileId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRegistrantProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveRegistrantProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveRegistrantProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAddingDSRecordRequest extends $tea.Model {
  algorithm?: number;
  digest?: string;
  digestType?: number;
  domainName?: string;
  keyTag?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      domainName: 'DomainName',
      keyTag: 'KeyTag',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      digest: 'string',
      digestType: 'number',
      domainName: 'string',
      keyTag: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAddingDSRecordResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAddingDSRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForAddingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForAddingDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForApprovingTransferOutRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForApprovingTransferOutResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForApprovingTransferOutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForApprovingTransferOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForApprovingTransferOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAssociatingEnsRequest extends $tea.Model {
  address?: string;
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAssociatingEnsResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAssociatingEnsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForAssociatingEnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForAssociatingEnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCancelingTransferInRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCancelingTransferInResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCancelingTransferInResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForCancelingTransferInResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForCancelingTransferInResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCancelingTransferOutRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCancelingTransferOutResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCancelingTransferOutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForCancelingTransferOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForCancelingTransferOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingDnsHostRequest extends $tea.Model {
  dnsName?: string;
  instanceId?: string;
  ip?: string[];
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      instanceId: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingDnsHostResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingDnsHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForCreatingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForCreatingDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderActivateRequest extends $tea.Model {
  address?: string;
  aliyunDns?: boolean;
  city?: string;
  country?: string;
  couponNo?: string;
  dns1?: string;
  dns2?: string;
  domainName?: string;
  email?: string;
  enableDomainProxy?: boolean;
  lang?: string;
  permitPremiumActivation?: boolean;
  postalCode?: string;
  promotionNo?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantType?: string;
  subscriptionDuration?: number;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  trademarkDomainActivation?: boolean;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      aliyunDns: 'AliyunDns',
      city: 'City',
      country: 'Country',
      couponNo: 'CouponNo',
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
      email: 'Email',
      enableDomainProxy: 'EnableDomainProxy',
      lang: 'Lang',
      permitPremiumActivation: 'PermitPremiumActivation',
      postalCode: 'PostalCode',
      promotionNo: 'PromotionNo',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantType: 'RegistrantType',
      subscriptionDuration: 'SubscriptionDuration',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      trademarkDomainActivation: 'TrademarkDomainActivation',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      aliyunDns: 'boolean',
      city: 'string',
      country: 'string',
      couponNo: 'string',
      dns1: 'string',
      dns2: 'string',
      domainName: 'string',
      email: 'string',
      enableDomainProxy: 'boolean',
      lang: 'string',
      permitPremiumActivation: 'boolean',
      postalCode: 'string',
      promotionNo: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantType: 'string',
      subscriptionDuration: 'number',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      trademarkDomainActivation: 'boolean',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderActivateResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderActivateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForCreatingOrderActivateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForCreatingOrderActivateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRedeemRequest extends $tea.Model {
  couponNo?: string;
  currentExpirationDate?: number;
  domainName?: string;
  lang?: string;
  promotionNo?: string;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
      lang: 'Lang',
      promotionNo: 'PromotionNo',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      currentExpirationDate: 'number',
      domainName: 'string',
      lang: 'string',
      promotionNo: 'string',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRedeemResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRedeemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForCreatingOrderRedeemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForCreatingOrderRedeemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRenewRequest extends $tea.Model {
  couponNo?: string;
  currentExpirationDate?: number;
  domainName?: string;
  lang?: string;
  promotionNo?: string;
  subscriptionDuration?: number;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
      lang: 'Lang',
      promotionNo: 'PromotionNo',
      subscriptionDuration: 'SubscriptionDuration',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      currentExpirationDate: 'number',
      domainName: 'string',
      lang: 'string',
      promotionNo: 'string',
      subscriptionDuration: 'number',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRenewResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRenewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForCreatingOrderRenewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForCreatingOrderRenewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderTransferRequest extends $tea.Model {
  authorizationCode?: string;
  couponNo?: string;
  domainName?: string;
  lang?: string;
  permitPremiumTransfer?: boolean;
  promotionNo?: string;
  registrantProfileId?: number;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      couponNo: 'CouponNo',
      domainName: 'DomainName',
      lang: 'Lang',
      permitPremiumTransfer: 'PermitPremiumTransfer',
      promotionNo: 'PromotionNo',
      registrantProfileId: 'RegistrantProfileId',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      couponNo: 'string',
      domainName: 'string',
      lang: 'string',
      permitPremiumTransfer: 'boolean',
      promotionNo: 'string',
      registrantProfileId: 'number',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderTransferResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderTransferResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForCreatingOrderTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForCreatingOrderTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDSRecordRequest extends $tea.Model {
  domainName?: string;
  keyTag?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      keyTag: 'KeyTag',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      keyTag: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDSRecordResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDSRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForDeletingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForDeletingDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDnsHostRequest extends $tea.Model {
  dnsName?: string;
  instanceId?: string;
  ip?: string[];
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      instanceId: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDnsHostResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDnsHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForDeletingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForDeletingDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDisassociatingEnsRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDisassociatingEnsResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDisassociatingEnsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForDisassociatingEnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForDisassociatingEnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDomainNameProxyServiceRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  status?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      status: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDomainNameProxyServiceResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDomainNameProxyServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForDomainNameProxyServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForDomainNameProxyServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDSRecordRequest extends $tea.Model {
  algorithm?: number;
  digest?: string;
  digestType?: number;
  domainName?: string;
  keyTag?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      domainName: 'DomainName',
      keyTag: 'KeyTag',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      digest: 'string',
      digestType: 'number',
      domainName: 'string',
      keyTag: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDSRecordResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDSRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForModifyingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForModifyingDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDnsHostRequest extends $tea.Model {
  dnsName?: string;
  instanceId?: string;
  ip?: string[];
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      instanceId: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDnsHostResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDnsHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForModifyingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForModifyingDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForQueryingTransferAuthorizationCodeRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForQueryingTransferAuthorizationCodeResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForQueryingTransferAuthorizationCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForQueryingTransferAuthorizationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForQueryingTransferAuthorizationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSaveArtExtensionRequest extends $tea.Model {
  dateOrPeriod?: string;
  dimensions?: string;
  domainName?: string;
  features?: string;
  inscriptionsAndMarkings?: string;
  lang?: string;
  maker?: string;
  materialsAndTechniques?: string;
  objectType?: string;
  reference?: string;
  subject?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      dateOrPeriod: 'DateOrPeriod',
      dimensions: 'Dimensions',
      domainName: 'DomainName',
      features: 'Features',
      inscriptionsAndMarkings: 'InscriptionsAndMarkings',
      lang: 'Lang',
      maker: 'Maker',
      materialsAndTechniques: 'MaterialsAndTechniques',
      objectType: 'ObjectType',
      reference: 'Reference',
      subject: 'Subject',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateOrPeriod: 'string',
      dimensions: 'string',
      domainName: 'string',
      features: 'string',
      inscriptionsAndMarkings: 'string',
      lang: 'string',
      maker: 'string',
      materialsAndTechniques: 'string',
      objectType: 'string',
      reference: 'string',
      subject: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSaveArtExtensionResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSaveArtExtensionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForSaveArtExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForSaveArtExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSynchronizingDSRecordRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSynchronizingDSRecordResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSynchronizingDSRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForSynchronizingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForSynchronizingDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSynchronizingDnsHostRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSynchronizingDnsHostResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSynchronizingDnsHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForSynchronizingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForSynchronizingDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForTransferProhibitionLockRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  status?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      status: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForTransferProhibitionLockResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForTransferProhibitionLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForTransferProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForTransferProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdateProhibitionLockRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  status?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      status: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdateProhibitionLockResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdateProhibitionLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForUpdateProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForUpdateProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdatingContactInfoRequest extends $tea.Model {
  addTransferLock?: boolean;
  contactType?: string;
  domainName?: string;
  instanceId?: string;
  lang?: string;
  registrantProfileId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      addTransferLock: 'AddTransferLock',
      contactType: 'ContactType',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTransferLock: 'boolean',
      contactType: 'string',
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdatingContactInfoResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdatingContactInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForUpdatingContactInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForUpdatingContactInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainDeleteRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainDeleteResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainDeleteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveTaskForSubmittingDomainDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveTaskForSubmittingDomainDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest extends $tea.Model {
  domainName?: string[];
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest extends $tea.Model {
  domainName?: string;
  instanceId?: string;
  lang?: string;
  registrantProfileId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  domainName?: string[];
  email?: string;
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
  lang?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  transferOutProhibited?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      domainName: 'DomainName',
      email: 'Email',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest extends $tea.Model {
  domainName?: string[];
  lang?: string;
  registrantProfileId?: number;
  transferOutProhibited?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      registrantProfileId: 'number',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponseBody extends $tea.Model {
  requestId?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationRequest extends $tea.Model {
  email?: string;
  lang?: string;
  sendIfExist?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      sendIfExist: 'SendIfExist',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      sendIfExist: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBody extends $tea.Model {
  existList?: SubmitEmailVerificationResponseBodyExistList[];
  failList?: SubmitEmailVerificationResponseBodyFailList[];
  requestId?: string;
  successList?: SubmitEmailVerificationResponseBodySuccessList[];
  static names(): { [key: string]: string } {
    return {
      existList: 'ExistList',
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodyExistList },
      failList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodyFailList },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodySuccessList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenRequest extends $tea.Model {
  lang?: string;
  token?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      token: 'Token',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      token: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenResponseBody extends $tea.Model {
  failList?: TransferInCheckMailTokenResponseBodyFailList;
  requestId?: string;
  successList?: TransferInCheckMailTokenResponseBodySuccessList;
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: TransferInCheckMailTokenResponseBodyFailList,
      requestId: 'string',
      successList: TransferInCheckMailTokenResponseBodySuccessList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferInCheckMailTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferInCheckMailTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInReenterTransferAuthorizationCodeRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  transferAuthorizationCode?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      transferAuthorizationCode: 'TransferAuthorizationCode',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      transferAuthorizationCode: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInReenterTransferAuthorizationCodeResponseBody extends $tea.Model {
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

export class TransferInReenterTransferAuthorizationCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferInReenterTransferAuthorizationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferInReenterTransferAuthorizationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInRefetchWhoisEmailRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInRefetchWhoisEmailResponseBody extends $tea.Model {
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

export class TransferInRefetchWhoisEmailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferInRefetchWhoisEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferInRefetchWhoisEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInResendMailTokenRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInResendMailTokenResponseBody extends $tea.Model {
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

export class TransferInResendMailTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferInResendMailTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferInResendMailTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyContactFieldRequest extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  domainName?: string;
  email?: string;
  lang?: string;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      domainName: 'DomainName',
      email: 'Email',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      domainName: 'string',
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyContactFieldResponseBody extends $tea.Model {
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

export class VerifyContactFieldResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyContactFieldResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyContactFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyEmailRequest extends $tea.Model {
  lang?: string;
  token?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      token: 'Token',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      token: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyEmailResponseBody extends $tea.Model {
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

export class VerifyEmailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWordsMatchedSensitiveWord extends $tea.Model {
  word?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWords extends $tea.Model {
  matchedSensitiveWord?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWordsMatchedSensitiveWord[];
  static names(): { [key: string]: string } {
    return {
      matchedSensitiveWord: 'MatchedSensitiveWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchedSensitiveWord: { 'type': 'array', 'itemType': BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWordsMatchedSensitiveWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResult extends $tea.Model {
  exist?: boolean;
  keyword?: string;
  matchedSentiveWords?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWords;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
      keyword: 'Keyword',
      matchedSentiveWords: 'MatchedSentiveWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'boolean',
      keyword: 'string',
      matchedSentiveWords: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultList extends $tea.Model {
  sensitiveWordMatchResult?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResult[];
  static names(): { [key: string]: string } {
    return {
      sensitiveWordMatchResult: 'SensitiveWordMatchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveWordMatchResult: { 'type': 'array', 'itemType': BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponseBodyFailList extends $tea.Model {
  failDomain?: string[];
  static names(): { [key: string]: string } {
    return {
      failDomain: 'FailDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failDomain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponseBodySuccessList extends $tea.Model {
  successDomain?: string[];
  static names(): { [key: string]: string } {
    return {
      successDomain: 'SuccessDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDomain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBodyFailList extends $tea.Model {
  code?: string;
  email?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBodySuccessList extends $tea.Model {
  code?: string;
  email?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWordsMatchedSensitiveWord extends $tea.Model {
  word?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords extends $tea.Model {
  matchedSensitiveWord?: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWordsMatchedSensitiveWord[];
  static names(): { [key: string]: string } {
    return {
      matchedSensitiveWord: 'MatchedSensitiveWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchedSensitiveWord: { 'type': 'array', 'itemType': FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWordsMatchedSensitiveWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationResponseBodyData extends $tea.Model {
  confirmIp?: string;
  email?: string;
  emailVerificationNo?: string;
  gmtCreate?: string;
  gmtModified?: string;
  sendIp?: string;
  tokenSendTime?: string;
  userId?: string;
  verificationStatus?: number;
  verificationTime?: string;
  static names(): { [key: string]: string } {
    return {
      confirmIp: 'ConfirmIp',
      email: 'Email',
      emailVerificationNo: 'EmailVerificationNo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      sendIp: 'SendIp',
      tokenSendTime: 'TokenSendTime',
      userId: 'UserId',
      verificationStatus: 'VerificationStatus',
      verificationTime: 'VerificationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmIp: 'string',
      email: 'string',
      emailVerificationNo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      sendIp: 'string',
      tokenSendTime: 'string',
      userId: 'string',
      verificationStatus: 'number',
      verificationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimClassDescsClassDesc extends $tea.Model {
  classNum?: number;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      classNum: 'ClassNum',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classNum: 'number',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimClassDescs extends $tea.Model {
  classDesc?: LookupTmchNoticeResponseBodyClaimsClaimClassDescsClassDesc[];
  static names(): { [key: string]: string } {
    return {
      classDesc: 'ClassDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classDesc: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaimClassDescsClassDesc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet extends $tea.Model {
  street?: string[];
  static names(): { [key: string]: string } {
    return {
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      street: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr extends $tea.Model {
  cc?: string;
  city?: string;
  pc?: string;
  sp?: string;
  street?: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      city: 'City',
      pc: 'Pc',
      sp: 'Sp',
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      city: 'string',
      pc: 'string',
      sp: 'string',
      street: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContactsContact extends $tea.Model {
  addr?: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr;
  email?: string;
  fax?: string;
  name?: string;
  org?: string;
  type?: string;
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      email: 'Email',
      fax: 'Fax',
      name: 'Name',
      org: 'Org',
      type: 'Type',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr,
      email: 'string',
      fax: 'string',
      name: 'string',
      org: 'string',
      type: 'string',
      voice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContacts extends $tea.Model {
  contact?: LookupTmchNoticeResponseBodyClaimsClaimContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaimContactsContact },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet extends $tea.Model {
  street?: string[];
  static names(): { [key: string]: string } {
    return {
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      street: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr extends $tea.Model {
  cc?: string;
  city?: string;
  pc?: string;
  sp?: string;
  street?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      city: 'City',
      pc: 'Pc',
      sp: 'Sp',
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      city: 'string',
      pc: 'string',
      sp: 'string',
      street: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHoldersHolder extends $tea.Model {
  addr?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr;
  entitlement?: string;
  org?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      entitlement: 'Entitlement',
      org: 'Org',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr,
      entitlement: 'string',
      org: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHolders extends $tea.Model {
  holder?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolder[];
  static names(): { [key: string]: string } {
    return {
      holder: 'Holder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holder: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaimHoldersHolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimJurDesc extends $tea.Model {
  desc?: string;
  jurCC?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      jurCC: 'JurCC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      jurCC: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaim extends $tea.Model {
  classDescs?: LookupTmchNoticeResponseBodyClaimsClaimClassDescs;
  contacts?: LookupTmchNoticeResponseBodyClaimsClaimContacts;
  goodsAndServices?: string;
  holders?: LookupTmchNoticeResponseBodyClaimsClaimHolders;
  jurDesc?: LookupTmchNoticeResponseBodyClaimsClaimJurDesc;
  markName?: string;
  static names(): { [key: string]: string } {
    return {
      classDescs: 'ClassDescs',
      contacts: 'Contacts',
      goodsAndServices: 'GoodsAndServices',
      holders: 'Holders',
      jurDesc: 'JurDesc',
      markName: 'MarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classDescs: LookupTmchNoticeResponseBodyClaimsClaimClassDescs,
      contacts: LookupTmchNoticeResponseBodyClaimsClaimContacts,
      goodsAndServices: 'string',
      holders: LookupTmchNoticeResponseBodyClaimsClaimHolders,
      jurDesc: LookupTmchNoticeResponseBodyClaimsClaimJurDesc,
      markName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaims extends $tea.Model {
  claim?: LookupTmchNoticeResponseBodyClaimsClaim[];
  static names(): { [key: string]: string } {
    return {
      claim: 'Claim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claim: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaim },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollTaskResultResponseBodyDataTaskDetail extends $tea.Model {
  createTime?: string;
  domainName?: string;
  errorMsg?: string;
  instanceId?: string;
  taskDetailNo?: string;
  taskNo?: string;
  taskResult?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskResult: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollTaskResultResponseBodyData extends $tea.Model {
  taskDetail?: PollTaskResultResponseBodyDataTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskDetail: { 'type': 'array', 'itemType': PollTaskResultResponseBodyDataTaskDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponseBodyDataChangeLog extends $tea.Model {
  details?: string;
  domainName?: string;
  operation?: string;
  operationIPAddress?: string;
  result?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      domainName: 'DomainName',
      operation: 'Operation',
      operationIPAddress: 'OperationIPAddress',
      result: 'Result',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: 'string',
      domainName: 'string',
      operation: 'string',
      operationIPAddress: 'string',
      result: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponseBodyData extends $tea.Model {
  changeLog?: QueryChangeLogListResponseBodyDataChangeLog[];
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: { 'type': 'array', 'itemType': QueryChangeLogListResponseBodyDataChangeLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordResponseBodyDSRecordList extends $tea.Model {
  algorithm?: number;
  digest?: string;
  digestType?: number;
  keyTag?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      keyTag: 'KeyTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      digest: 'string',
      digestType: 'number',
      keyTag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDnsHostResponseBodyDnsHostList extends $tea.Model {
  dnsName?: string;
  ipList?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameResponseBodyDnsList extends $tea.Model {
  dns?: string[];
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponseBodyDnsList extends $tea.Model {
  dns?: string[];
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBodyDataDomain extends $tea.Model {
  domainAuditStatus?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  expirationCurrDateDiff?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  expirationDateStatus?: string;
  instanceId?: string;
  premium?: boolean;
  productId?: string;
  registrantType?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      domainAuditStatus: 'DomainAuditStatus',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      productId: 'ProductId',
      registrantType: 'RegistrantType',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAuditStatus: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      productId: 'string',
      registrantType: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBodyData extends $tea.Model {
  domain?: QueryDomainListResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': QueryDomainListResponseBodyDataDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationResponseBodyData extends $tea.Model {
  date?: string;
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      failReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData extends $tea.Model {
  date?: string;
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      failReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  createTime?: string;
  defaultRegistrantProfile?: boolean;
  email?: string;
  emailVerificationStatus?: number;
  postalCode?: string;
  province?: string;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantProfileType?: string;
  registrantType?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      createTime: 'CreateTime',
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      emailVerificationStatus: 'EmailVerificationStatus',
      postalCode: 'PostalCode',
      province: 'Province',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      createTime: 'string',
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      emailVerificationStatus: 'number',
      postalCode: 'string',
      province: 'string',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponseBodyRegistrantProfiles extends $tea.Model {
  registrantProfile?: QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile[];
  static names(): { [key: string]: string } {
    return {
      registrantProfile: 'RegistrantProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfile: { 'type': 'array', 'itemType': QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyCurrentPageCursor extends $tea.Model {
  createTime?: string;
  domainName?: string;
  errorMsg?: string;
  instanceId?: string;
  taskDetailNo?: string;
  taskNo?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyNextPageCursor extends $tea.Model {
  createTime?: string;
  domainName?: string;
  errorMsg?: string;
  instanceId?: string;
  taskDetailNo?: string;
  taskNo?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyObjects extends $tea.Model {
  createTime?: string;
  domainName?: string;
  errorMsg?: string;
  instanceId?: string;
  taskDetailNo?: string;
  taskNo?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyPrePageCursor extends $tea.Model {
  createTime?: string;
  domainName?: string;
  errorMsg?: string;
  instanceId?: string;
  taskDetailNo?: string;
  taskNo?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListResponseBodyDataTaskDetail extends $tea.Model {
  createTime?: string;
  domainName?: string;
  errorMsg?: string;
  instanceId?: string;
  taskDetailNo?: string;
  taskNo?: string;
  taskResult?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskResult: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListResponseBodyData extends $tea.Model {
  taskDetail?: QueryTaskDetailListResponseBodyDataTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskDetail: { 'type': 'array', 'itemType': QueryTaskDetailListResponseBodyDataTaskDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyCurrentPageCursor extends $tea.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyNextPageCursor extends $tea.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyObjects extends $tea.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyPrePageCursor extends $tea.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBodyDataTaskInfo extends $tea.Model {
  clientip?: string;
  createTime?: string;
  taskCancelStatus?: string;
  taskCancelStatusCode?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      taskCancelStatus: 'TaskCancelStatus',
      taskCancelStatusCode: 'TaskCancelStatusCode',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      taskCancelStatus: 'string',
      taskCancelStatusCode: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBodyData extends $tea.Model {
  taskInfo?: QueryTaskListResponseBodyDataTaskInfo[];
  static names(): { [key: string]: string } {
    return {
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfo: { 'type': 'array', 'itemType': QueryTaskListResponseBodyDataTaskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListResponseBodyDataTransferInInfo extends $tea.Model {
  domainName?: string;
  email?: string;
  expirationDate?: string;
  expirationDateLong?: number;
  instanceId?: string;
  modificationDate?: string;
  modificationDateLong?: number;
  needMailCheck?: boolean;
  progressBarType?: number;
  resultCode?: string;
  resultDate?: string;
  resultDateLong?: number;
  resultMsg?: string;
  simpleTransferInStatus?: string;
  status?: number;
  submissionDate?: string;
  submissionDateLong?: number;
  transferAuthorizationCodeSubmissionDate?: string;
  transferAuthorizationCodeSubmissionDateLong?: number;
  userId?: string;
  whoisMailStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      email: 'Email',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      instanceId: 'InstanceId',
      modificationDate: 'ModificationDate',
      modificationDateLong: 'ModificationDateLong',
      needMailCheck: 'NeedMailCheck',
      progressBarType: 'ProgressBarType',
      resultCode: 'ResultCode',
      resultDate: 'ResultDate',
      resultDateLong: 'ResultDateLong',
      resultMsg: 'ResultMsg',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      status: 'Status',
      submissionDate: 'SubmissionDate',
      submissionDateLong: 'SubmissionDateLong',
      transferAuthorizationCodeSubmissionDate: 'TransferAuthorizationCodeSubmissionDate',
      transferAuthorizationCodeSubmissionDateLong: 'TransferAuthorizationCodeSubmissionDateLong',
      userId: 'UserId',
      whoisMailStatus: 'WhoisMailStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      email: 'string',
      expirationDate: 'string',
      expirationDateLong: 'number',
      instanceId: 'string',
      modificationDate: 'string',
      modificationDateLong: 'number',
      needMailCheck: 'boolean',
      progressBarType: 'number',
      resultCode: 'string',
      resultDate: 'string',
      resultDateLong: 'number',
      resultMsg: 'string',
      simpleTransferInStatus: 'string',
      status: 'number',
      submissionDate: 'string',
      submissionDateLong: 'number',
      transferAuthorizationCodeSubmissionDate: 'string',
      transferAuthorizationCodeSubmissionDateLong: 'number',
      userId: 'string',
      whoisMailStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListResponseBodyData extends $tea.Model {
  transferInInfo?: QueryTransferInListResponseBodyDataTransferInInfo[];
  static names(): { [key: string]: string } {
    return {
      transferInInfo: 'TransferInInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferInInfo: { 'type': 'array', 'itemType': QueryTransferInListResponseBodyDataTransferInInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponseBodyFailList extends $tea.Model {
  code?: string;
  email?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponseBodySuccessList extends $tea.Model {
  code?: string;
  email?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam extends $tea.Model {
  address?: string;
  aliyunDns?: boolean;
  city?: string;
  country?: string;
  dns1?: string;
  dns2?: string;
  domainName?: string;
  email?: string;
  enableDomainProxy?: boolean;
  permitPremiumActivation?: boolean;
  postalCode?: string;
  province?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantType?: string;
  subscriptionDuration?: number;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  trademarkDomainActivation?: boolean;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      aliyunDns: 'AliyunDns',
      city: 'City',
      country: 'Country',
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
      email: 'Email',
      enableDomainProxy: 'EnableDomainProxy',
      permitPremiumActivation: 'PermitPremiumActivation',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantType: 'RegistrantType',
      subscriptionDuration: 'SubscriptionDuration',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      trademarkDomainActivation: 'TrademarkDomainActivation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      aliyunDns: 'boolean',
      city: 'string',
      country: 'string',
      dns1: 'string',
      dns2: 'string',
      domainName: 'string',
      email: 'string',
      enableDomainProxy: 'boolean',
      permitPremiumActivation: 'boolean',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantType: 'string',
      subscriptionDuration: 'number',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      trademarkDomainActivation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam extends $tea.Model {
  currentExpirationDate?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentExpirationDate: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam extends $tea.Model {
  currentExpirationDate?: number;
  domainName?: string;
  subscriptionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      currentExpirationDate: 'CurrentExpirationDate',
      domainName: 'DomainName',
      subscriptionDuration: 'SubscriptionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentExpirationDate: 'number',
      domainName: 'string',
      subscriptionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam extends $tea.Model {
  authorizationCode?: string;
  domainName?: string;
  permitPremiumTransfer?: boolean;
  registrantProfileId?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      domainName: 'DomainName',
      permitPremiumTransfer: 'PermitPremiumTransfer',
      registrantProfileId: 'RegistrantProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      domainName: 'string',
      permitPremiumTransfer: 'boolean',
      registrantProfileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForReserveDropListDomainRequestDomains extends $tea.Model {
  dns1?: string;
  dns2?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns1: 'string',
      dns2: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBodyExistList extends $tea.Model {
  code?: string;
  email?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBodyFailList extends $tea.Model {
  code?: string;
  email?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBodySuccessList extends $tea.Model {
  code?: string;
  email?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenResponseBodyFailList extends $tea.Model {
  failDomain?: string[];
  static names(): { [key: string]: string } {
    return {
      failDomain: 'FailDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failDomain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenResponseBodySuccessList extends $tea.Model {
  successDomain?: string[];
  static names(): { [key: string]: string } {
    return {
      successDomain: 'SuccessDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDomain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("domain-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @param request AcknowledgeTaskResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AcknowledgeTaskResultResponse
   */
  async acknowledgeTaskResultWithOptions(request: AcknowledgeTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<AcknowledgeTaskResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.taskDetailNo)) {
      query["TaskDetailNo"] = request.taskDetailNo;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AcknowledgeTaskResult",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AcknowledgeTaskResultResponse>(await this.callApi(params, req, runtime), new AcknowledgeTaskResultResponse({}));
  }

  /**
   * @param request AcknowledgeTaskResultRequest
   * @return AcknowledgeTaskResultResponse
   */
  async acknowledgeTaskResult(request: AcknowledgeTaskResultRequest): Promise<AcknowledgeTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acknowledgeTaskResultWithOptions(request, runtime);
  }

  /**
   * @param request BatchFuzzyMatchDomainSensitiveWordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchFuzzyMatchDomainSensitiveWordResponse
   */
  async batchFuzzyMatchDomainSensitiveWordWithOptions(request: BatchFuzzyMatchDomainSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<BatchFuzzyMatchDomainSensitiveWordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchFuzzyMatchDomainSensitiveWord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchFuzzyMatchDomainSensitiveWordResponse>(await this.callApi(params, req, runtime), new BatchFuzzyMatchDomainSensitiveWordResponse({}));
  }

  /**
   * @param request BatchFuzzyMatchDomainSensitiveWordRequest
   * @return BatchFuzzyMatchDomainSensitiveWordResponse
   */
  async batchFuzzyMatchDomainSensitiveWord(request: BatchFuzzyMatchDomainSensitiveWordRequest): Promise<BatchFuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchFuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  /**
   * @param request CancelDomainVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelDomainVerificationResponse
   */
  async cancelDomainVerificationWithOptions(request: CancelDomainVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CancelDomainVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelDomainVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelDomainVerificationResponse>(await this.callApi(params, req, runtime), new CancelDomainVerificationResponse({}));
  }

  /**
   * @param request CancelDomainVerificationRequest
   * @return CancelDomainVerificationResponse
   */
  async cancelDomainVerification(request: CancelDomainVerificationRequest): Promise<CancelDomainVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelDomainVerificationWithOptions(request, runtime);
  }

  /**
   * @param request CancelTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelTaskResponse
   */
  async cancelTaskWithOptions(request: CancelTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelTask",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
  }

  /**
   * @param request CancelTaskRequest
   * @return CancelTaskResponse
   */
  async cancelTask(request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  /**
   * @param request CheckDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckDomainResponse
   */
  async checkDomainWithOptions(request: CheckDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.feeCommand)) {
      query["FeeCommand"] = request.feeCommand;
    }

    if (!Util.isUnset(request.feeCurrency)) {
      query["FeeCurrency"] = request.feeCurrency;
    }

    if (!Util.isUnset(request.feePeriod)) {
      query["FeePeriod"] = request.feePeriod;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDomain",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDomainResponse>(await this.callApi(params, req, runtime), new CheckDomainResponse({}));
  }

  /**
   * @param request CheckDomainRequest
   * @return CheckDomainResponse
   */
  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  /**
   * @param request CheckDomainSunriseClaimRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckDomainSunriseClaimResponse
   */
  async checkDomainSunriseClaimWithOptions(request: CheckDomainSunriseClaimRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainSunriseClaimResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDomainSunriseClaim",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDomainSunriseClaimResponse>(await this.callApi(params, req, runtime), new CheckDomainSunriseClaimResponse({}));
  }

  /**
   * @param request CheckDomainSunriseClaimRequest
   * @return CheckDomainSunriseClaimResponse
   */
  async checkDomainSunriseClaim(request: CheckDomainSunriseClaimRequest): Promise<CheckDomainSunriseClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainSunriseClaimWithOptions(request, runtime);
  }

  /**
   * @param request CheckTransferInFeasibilityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckTransferInFeasibilityResponse
   */
  async checkTransferInFeasibilityWithOptions(request: CheckTransferInFeasibilityRequest, runtime: $Util.RuntimeOptions): Promise<CheckTransferInFeasibilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.transferAuthorizationCode)) {
      query["TransferAuthorizationCode"] = request.transferAuthorizationCode;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckTransferInFeasibility",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckTransferInFeasibilityResponse>(await this.callApi(params, req, runtime), new CheckTransferInFeasibilityResponse({}));
  }

  /**
   * @param request CheckTransferInFeasibilityRequest
   * @return CheckTransferInFeasibilityResponse
   */
  async checkTransferInFeasibility(request: CheckTransferInFeasibilityRequest): Promise<CheckTransferInFeasibilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTransferInFeasibilityWithOptions(request, runtime);
  }

  /**
   * @param request ConfirmTransferInEmailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ConfirmTransferInEmailResponse
   */
  async confirmTransferInEmailWithOptions(request: ConfirmTransferInEmailRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmTransferInEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmTransferInEmail",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmTransferInEmailResponse>(await this.callApi(params, req, runtime), new ConfirmTransferInEmailResponse({}));
  }

  /**
   * @param request ConfirmTransferInEmailRequest
   * @return ConfirmTransferInEmailResponse
   */
  async confirmTransferInEmail(request: ConfirmTransferInEmailRequest): Promise<ConfirmTransferInEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmTransferInEmailWithOptions(request, runtime);
  }

  /**
   * @param request DeleteEmailVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEmailVerificationResponse
   */
  async deleteEmailVerificationWithOptions(request: DeleteEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEmailVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEmailVerificationResponse>(await this.callApi(params, req, runtime), new DeleteEmailVerificationResponse({}));
  }

  /**
   * @param request DeleteEmailVerificationRequest
   * @return DeleteEmailVerificationResponse
   */
  async deleteEmailVerification(request: DeleteEmailVerificationRequest): Promise<DeleteEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request DeleteRegistrantProfileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRegistrantProfileResponse
   */
  async deleteRegistrantProfileWithOptions(request: DeleteRegistrantProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRegistrantProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRegistrantProfile",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRegistrantProfileResponse>(await this.callApi(params, req, runtime), new DeleteRegistrantProfileResponse({}));
  }

  /**
   * @param request DeleteRegistrantProfileRequest
   * @return DeleteRegistrantProfileResponse
   */
  async deleteRegistrantProfile(request: DeleteRegistrantProfileRequest): Promise<DeleteRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRegistrantProfileWithOptions(request, runtime);
  }

  /**
   * @param request EmailVerifiedRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EmailVerifiedResponse
   */
  async emailVerifiedWithOptions(request: EmailVerifiedRequest, runtime: $Util.RuntimeOptions): Promise<EmailVerifiedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EmailVerified",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EmailVerifiedResponse>(await this.callApi(params, req, runtime), new EmailVerifiedResponse({}));
  }

  /**
   * @param request EmailVerifiedRequest
   * @return EmailVerifiedResponse
   */
  async emailVerified(request: EmailVerifiedRequest): Promise<EmailVerifiedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emailVerifiedWithOptions(request, runtime);
  }

  /**
   * @param request FuzzyMatchDomainSensitiveWordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FuzzyMatchDomainSensitiveWordResponse
   */
  async fuzzyMatchDomainSensitiveWordWithOptions(request: FuzzyMatchDomainSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<FuzzyMatchDomainSensitiveWordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FuzzyMatchDomainSensitiveWord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FuzzyMatchDomainSensitiveWordResponse>(await this.callApi(params, req, runtime), new FuzzyMatchDomainSensitiveWordResponse({}));
  }

  /**
   * @param request FuzzyMatchDomainSensitiveWordRequest
   * @return FuzzyMatchDomainSensitiveWordResponse
   */
  async fuzzyMatchDomainSensitiveWord(request: FuzzyMatchDomainSensitiveWordRequest): Promise<FuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  /**
   * @param request ListEmailVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEmailVerificationResponse
   */
  async listEmailVerificationWithOptions(request: ListEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<ListEmailVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginCreateTime)) {
      query["BeginCreateTime"] = request.beginCreateTime;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.verificationStatus)) {
      query["VerificationStatus"] = request.verificationStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEmailVerificationResponse>(await this.callApi(params, req, runtime), new ListEmailVerificationResponse({}));
  }

  /**
   * @param request ListEmailVerificationRequest
   * @return ListEmailVerificationResponse
   */
  async listEmailVerification(request: ListEmailVerificationRequest): Promise<ListEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request LookupTmchNoticeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return LookupTmchNoticeResponse
   */
  async lookupTmchNoticeWithOptions(request: LookupTmchNoticeRequest, runtime: $Util.RuntimeOptions): Promise<LookupTmchNoticeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.claimKey)) {
      query["ClaimKey"] = request.claimKey;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LookupTmchNotice",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LookupTmchNoticeResponse>(await this.callApi(params, req, runtime), new LookupTmchNoticeResponse({}));
  }

  /**
   * @param request LookupTmchNoticeRequest
   * @return LookupTmchNoticeResponse
   */
  async lookupTmchNotice(request: LookupTmchNoticeRequest): Promise<LookupTmchNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupTmchNoticeWithOptions(request, runtime);
  }

  /**
   * @param request PollTaskResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PollTaskResultResponse
   */
  async pollTaskResultWithOptions(request: PollTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<PollTaskResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!Util.isUnset(request.taskResultStatus)) {
      query["TaskResultStatus"] = request.taskResultStatus;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PollTaskResult",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PollTaskResultResponse>(await this.callApi(params, req, runtime), new PollTaskResultResponse({}));
  }

  /**
   * @param request PollTaskResultRequest
   * @return PollTaskResultResponse
   */
  async pollTaskResult(request: PollTaskResultRequest): Promise<PollTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pollTaskResultWithOptions(request, runtime);
  }

  /**
   * @param request QueryArtExtensionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryArtExtensionResponse
   */
  async queryArtExtensionWithOptions(request: QueryArtExtensionRequest, runtime: $Util.RuntimeOptions): Promise<QueryArtExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryArtExtension",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryArtExtensionResponse>(await this.callApi(params, req, runtime), new QueryArtExtensionResponse({}));
  }

  /**
   * @param request QueryArtExtensionRequest
   * @return QueryArtExtensionResponse
   */
  async queryArtExtension(request: QueryArtExtensionRequest): Promise<QueryArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryArtExtensionWithOptions(request, runtime);
  }

  /**
   * @param request QueryChangeLogListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryChangeLogListResponse
   */
  async queryChangeLogListWithOptions(request: QueryChangeLogListRequest, runtime: $Util.RuntimeOptions): Promise<QueryChangeLogListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryChangeLogList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryChangeLogListResponse>(await this.callApi(params, req, runtime), new QueryChangeLogListResponse({}));
  }

  /**
   * @param request QueryChangeLogListRequest
   * @return QueryChangeLogListResponse
   */
  async queryChangeLogList(request: QueryChangeLogListRequest): Promise<QueryChangeLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChangeLogListWithOptions(request, runtime);
  }

  /**
   * @param request QueryContactInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryContactInfoResponse
   */
  async queryContactInfoWithOptions(request: QueryContactInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryContactInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryContactInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryContactInfoResponse>(await this.callApi(params, req, runtime), new QueryContactInfoResponse({}));
  }

  /**
   * @param request QueryContactInfoRequest
   * @return QueryContactInfoResponse
   */
  async queryContactInfo(request: QueryContactInfoRequest): Promise<QueryContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryContactInfoWithOptions(request, runtime);
  }

  /**
   * @param request QueryDSRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryDSRecordResponse
   */
  async queryDSRecordWithOptions(request: QueryDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryDSRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDSRecordResponse>(await this.callApi(params, req, runtime), new QueryDSRecordResponse({}));
  }

  /**
   * @param request QueryDSRecordRequest
   * @return QueryDSRecordResponse
   */
  async queryDSRecord(request: QueryDSRecordRequest): Promise<QueryDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request QueryDnsHostRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryDnsHostResponse
   */
  async queryDnsHostWithOptions(request: QueryDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<QueryDnsHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDnsHostResponse>(await this.callApi(params, req, runtime), new QueryDnsHostResponse({}));
  }

  /**
   * @param request QueryDnsHostRequest
   * @return QueryDnsHostResponse
   */
  async queryDnsHost(request: QueryDnsHostRequest): Promise<QueryDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request QueryDomainByDomainNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryDomainByDomainNameResponse
   */
  async queryDomainByDomainNameWithOptions(request: QueryDomainByDomainNameRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainByDomainNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainByDomainName",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainByDomainNameResponse>(await this.callApi(params, req, runtime), new QueryDomainByDomainNameResponse({}));
  }

  /**
   * @param request QueryDomainByDomainNameRequest
   * @return QueryDomainByDomainNameResponse
   */
  async queryDomainByDomainName(request: QueryDomainByDomainNameRequest): Promise<QueryDomainByDomainNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByDomainNameWithOptions(request, runtime);
  }

  /**
   * @param request QueryDomainByInstanceIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryDomainByInstanceIdResponse
   */
  async queryDomainByInstanceIdWithOptions(request: QueryDomainByInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainByInstanceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainByInstanceId",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainByInstanceIdResponse>(await this.callApi(params, req, runtime), new QueryDomainByInstanceIdResponse({}));
  }

  /**
   * @param request QueryDomainByInstanceIdRequest
   * @return QueryDomainByInstanceIdResponse
   */
  async queryDomainByInstanceId(request: QueryDomainByInstanceIdRequest): Promise<QueryDomainByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByInstanceIdWithOptions(request, runtime);
  }

  /**
   * @param request QueryDomainListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryDomainListResponse
   */
  async queryDomainListWithOptions(request: QueryDomainListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccompany)) {
      query["Ccompany"] = request.ccompany;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endExpirationDate)) {
      query["EndExpirationDate"] = request.endExpirationDate;
    }

    if (!Util.isUnset(request.endRegistrationDate)) {
      query["EndRegistrationDate"] = request.endRegistrationDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderByType)) {
      query["OrderByType"] = request.orderByType;
    }

    if (!Util.isUnset(request.orderKeyType)) {
      query["OrderKeyType"] = request.orderKeyType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productDomainType)) {
      query["ProductDomainType"] = request.productDomainType;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.startExpirationDate)) {
      query["StartExpirationDate"] = request.startExpirationDate;
    }

    if (!Util.isUnset(request.startRegistrationDate)) {
      query["StartRegistrationDate"] = request.startRegistrationDate;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainListResponse>(await this.callApi(params, req, runtime), new QueryDomainListResponse({}));
  }

  /**
   * @param request QueryDomainListRequest
   * @return QueryDomainListResponse
   */
  async queryDomainList(request: QueryDomainListRequest): Promise<QueryDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainListWithOptions(request, runtime);
  }

  /**
   * @param request QueryDomainRealNameVerificationInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryDomainRealNameVerificationInfoResponse
   */
  async queryDomainRealNameVerificationInfoWithOptions(request: QueryDomainRealNameVerificationInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainRealNameVerificationInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.fetchImage)) {
      query["FetchImage"] = request.fetchImage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainRealNameVerificationInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainRealNameVerificationInfoResponse>(await this.callApi(params, req, runtime), new QueryDomainRealNameVerificationInfoResponse({}));
  }

  /**
   * @param request QueryDomainRealNameVerificationInfoRequest
   * @return QueryDomainRealNameVerificationInfoResponse
   */
  async queryDomainRealNameVerificationInfo(request: QueryDomainRealNameVerificationInfoRequest): Promise<QueryDomainRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainRealNameVerificationInfoWithOptions(request, runtime);
  }

  /**
   * @param request QueryEnsAssociationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryEnsAssociationResponse
   */
  async queryEnsAssociationWithOptions(request: QueryEnsAssociationRequest, runtime: $Util.RuntimeOptions): Promise<QueryEnsAssociationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEnsAssociation",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEnsAssociationResponse>(await this.callApi(params, req, runtime), new QueryEnsAssociationResponse({}));
  }

  /**
   * @param request QueryEnsAssociationRequest
   * @return QueryEnsAssociationResponse
   */
  async queryEnsAssociation(request: QueryEnsAssociationRequest): Promise<QueryEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEnsAssociationWithOptions(request, runtime);
  }

  /**
   * @param request QueryFailReasonForDomainRealNameVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryFailReasonForDomainRealNameVerificationResponse
   */
  async queryFailReasonForDomainRealNameVerificationWithOptions(request: QueryFailReasonForDomainRealNameVerificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFailReasonForDomainRealNameVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.realNameVerificationAction)) {
      query["RealNameVerificationAction"] = request.realNameVerificationAction;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFailReasonForDomainRealNameVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFailReasonForDomainRealNameVerificationResponse>(await this.callApi(params, req, runtime), new QueryFailReasonForDomainRealNameVerificationResponse({}));
  }

  /**
   * @param request QueryFailReasonForDomainRealNameVerificationRequest
   * @return QueryFailReasonForDomainRealNameVerificationResponse
   */
  async queryFailReasonForDomainRealNameVerification(request: QueryFailReasonForDomainRealNameVerificationRequest): Promise<QueryFailReasonForDomainRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForDomainRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request QueryFailReasonForRegistrantProfileRealNameVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryFailReasonForRegistrantProfileRealNameVerificationResponse
   */
  async queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request: QueryFailReasonForRegistrantProfileRealNameVerificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileID)) {
      query["RegistrantProfileID"] = request.registrantProfileID;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFailReasonForRegistrantProfileRealNameVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFailReasonForRegistrantProfileRealNameVerificationResponse>(await this.callApi(params, req, runtime), new QueryFailReasonForRegistrantProfileRealNameVerificationResponse({}));
  }

  /**
   * @param request QueryFailReasonForRegistrantProfileRealNameVerificationRequest
   * @return QueryFailReasonForRegistrantProfileRealNameVerificationResponse
   */
  async queryFailReasonForRegistrantProfileRealNameVerification(request: QueryFailReasonForRegistrantProfileRealNameVerificationRequest): Promise<QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request QueryLocalEnsAssociationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryLocalEnsAssociationResponse
   */
  async queryLocalEnsAssociationWithOptions(request: QueryLocalEnsAssociationRequest, runtime: $Util.RuntimeOptions): Promise<QueryLocalEnsAssociationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryLocalEnsAssociation",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryLocalEnsAssociationResponse>(await this.callApi(params, req, runtime), new QueryLocalEnsAssociationResponse({}));
  }

  /**
   * @param request QueryLocalEnsAssociationRequest
   * @return QueryLocalEnsAssociationResponse
   */
  async queryLocalEnsAssociation(request: QueryLocalEnsAssociationRequest): Promise<QueryLocalEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLocalEnsAssociationWithOptions(request, runtime);
  }

  /**
   * @param request QueryRegistrantProfileRealNameVerificationInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryRegistrantProfileRealNameVerificationInfoResponse
   */
  async queryRegistrantProfileRealNameVerificationInfoWithOptions(request: QueryRegistrantProfileRealNameVerificationInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryRegistrantProfileRealNameVerificationInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fetchImage)) {
      query["FetchImage"] = request.fetchImage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRegistrantProfileRealNameVerificationInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRegistrantProfileRealNameVerificationInfoResponse>(await this.callApi(params, req, runtime), new QueryRegistrantProfileRealNameVerificationInfoResponse({}));
  }

  /**
   * @param request QueryRegistrantProfileRealNameVerificationInfoRequest
   * @return QueryRegistrantProfileRealNameVerificationInfoResponse
   */
  async queryRegistrantProfileRealNameVerificationInfo(request: QueryRegistrantProfileRealNameVerificationInfoRequest): Promise<QueryRegistrantProfileRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfileRealNameVerificationInfoWithOptions(request, runtime);
  }

  /**
   * @param request QueryRegistrantProfilesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryRegistrantProfilesResponse
   */
  async queryRegistrantProfilesWithOptions(request: QueryRegistrantProfilesRequest, runtime: $Util.RuntimeOptions): Promise<QueryRegistrantProfilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultRegistrantProfile)) {
      query["DefaultRegistrantProfile"] = request.defaultRegistrantProfile;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.realNameStatus)) {
      query["RealNameStatus"] = request.realNameStatus;
    }

    if (!Util.isUnset(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.registrantProfileType)) {
      query["RegistrantProfileType"] = request.registrantProfileType;
    }

    if (!Util.isUnset(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRegistrantProfiles",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRegistrantProfilesResponse>(await this.callApi(params, req, runtime), new QueryRegistrantProfilesResponse({}));
  }

  /**
   * @param request QueryRegistrantProfilesRequest
   * @return QueryRegistrantProfilesResponse
   */
  async queryRegistrantProfiles(request: QueryRegistrantProfilesRequest): Promise<QueryRegistrantProfilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfilesWithOptions(request, runtime);
  }

  /**
   * @param request QueryTaskDetailHistoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTaskDetailHistoryResponse
   */
  async queryTaskDetailHistoryWithOptions(request: QueryTaskDetailHistoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskDetailHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainNameCursor)) {
      query["DomainNameCursor"] = request.domainNameCursor;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskDetailNoCursor)) {
      query["TaskDetailNoCursor"] = request.taskDetailNoCursor;
    }

    if (!Util.isUnset(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!Util.isUnset(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskDetailHistory",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskDetailHistoryResponse>(await this.callApi(params, req, runtime), new QueryTaskDetailHistoryResponse({}));
  }

  /**
   * @param request QueryTaskDetailHistoryRequest
   * @return QueryTaskDetailHistoryResponse
   */
  async queryTaskDetailHistory(request: QueryTaskDetailHistoryRequest): Promise<QueryTaskDetailHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailHistoryWithOptions(request, runtime);
  }

  /**
   * @param request QueryTaskDetailListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTaskDetailListResponse
   */
  async queryTaskDetailListWithOptions(request: QueryTaskDetailListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskDetailListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!Util.isUnset(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskDetailList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskDetailListResponse>(await this.callApi(params, req, runtime), new QueryTaskDetailListResponse({}));
  }

  /**
   * @param request QueryTaskDetailListRequest
   * @return QueryTaskDetailListResponse
   */
  async queryTaskDetailList(request: QueryTaskDetailListRequest): Promise<QueryTaskDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailListWithOptions(request, runtime);
  }

  /**
   * @param request QueryTaskInfoHistoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTaskInfoHistoryResponse
   */
  async queryTaskInfoHistoryWithOptions(request: QueryTaskInfoHistoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskInfoHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginCreateTime)) {
      query["BeginCreateTime"] = request.beginCreateTime;
    }

    if (!Util.isUnset(request.createTimeCursor)) {
      query["CreateTimeCursor"] = request.createTimeCursor;
    }

    if (!Util.isUnset(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskNoCursor)) {
      query["TaskNoCursor"] = request.taskNoCursor;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskInfoHistory",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskInfoHistoryResponse>(await this.callApi(params, req, runtime), new QueryTaskInfoHistoryResponse({}));
  }

  /**
   * @param request QueryTaskInfoHistoryRequest
   * @return QueryTaskInfoHistoryResponse
   */
  async queryTaskInfoHistory(request: QueryTaskInfoHistoryRequest): Promise<QueryTaskInfoHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskInfoHistoryWithOptions(request, runtime);
  }

  /**
   * @param request QueryTaskListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTaskListResponse
   */
  async queryTaskListWithOptions(request: QueryTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginCreateTime)) {
      query["BeginCreateTime"] = request.beginCreateTime;
    }

    if (!Util.isUnset(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskList",
      version: "2017-12-18",
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

  /**
   * @param request QueryTaskListRequest
   * @return QueryTaskListResponse
   */
  async queryTaskList(request: QueryTaskListRequest): Promise<QueryTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  /**
   * @param request QueryTransferInByInstanceIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTransferInByInstanceIdResponse
   */
  async queryTransferInByInstanceIdWithOptions(request: QueryTransferInByInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferInByInstanceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTransferInByInstanceId",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTransferInByInstanceIdResponse>(await this.callApi(params, req, runtime), new QueryTransferInByInstanceIdResponse({}));
  }

  /**
   * @param request QueryTransferInByInstanceIdRequest
   * @return QueryTransferInByInstanceIdResponse
   */
  async queryTransferInByInstanceId(request: QueryTransferInByInstanceIdRequest): Promise<QueryTransferInByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInByInstanceIdWithOptions(request, runtime);
  }

  /**
   * @param request QueryTransferInListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTransferInListResponse
   */
  async queryTransferInListWithOptions(request: QueryTransferInListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferInListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.simpleTransferInStatus)) {
      query["SimpleTransferInStatus"] = request.simpleTransferInStatus;
    }

    if (!Util.isUnset(request.submissionEndDate)) {
      query["SubmissionEndDate"] = request.submissionEndDate;
    }

    if (!Util.isUnset(request.submissionStartDate)) {
      query["SubmissionStartDate"] = request.submissionStartDate;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTransferInList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTransferInListResponse>(await this.callApi(params, req, runtime), new QueryTransferInListResponse({}));
  }

  /**
   * @param request QueryTransferInListRequest
   * @return QueryTransferInListResponse
   */
  async queryTransferInList(request: QueryTransferInListRequest): Promise<QueryTransferInListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInListWithOptions(request, runtime);
  }

  /**
   * @param request QueryTransferOutInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTransferOutInfoResponse
   */
  async queryTransferOutInfoWithOptions(request: QueryTransferOutInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferOutInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTransferOutInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTransferOutInfoResponse>(await this.callApi(params, req, runtime), new QueryTransferOutInfoResponse({}));
  }

  /**
   * @param request QueryTransferOutInfoRequest
   * @return QueryTransferOutInfoResponse
   */
  async queryTransferOutInfo(request: QueryTransferOutInfoRequest): Promise<QueryTransferOutInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferOutInfoWithOptions(request, runtime);
  }

  /**
   * @param request RegistrantProfileRealNameVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RegistrantProfileRealNameVerificationResponse
   */
  async registrantProfileRealNameVerificationWithOptions(request: RegistrantProfileRealNameVerificationRequest, runtime: $Util.RuntimeOptions): Promise<RegistrantProfileRealNameVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identityCredentialNo)) {
      query["IdentityCredentialNo"] = request.identityCredentialNo;
    }

    if (!Util.isUnset(request.identityCredentialType)) {
      query["IdentityCredentialType"] = request.identityCredentialType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileID)) {
      query["RegistrantProfileID"] = request.registrantProfileID;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identityCredential)) {
      body["IdentityCredential"] = request.identityCredential;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegistrantProfileRealNameVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegistrantProfileRealNameVerificationResponse>(await this.callApi(params, req, runtime), new RegistrantProfileRealNameVerificationResponse({}));
  }

  /**
   * @param request RegistrantProfileRealNameVerificationRequest
   * @return RegistrantProfileRealNameVerificationResponse
   */
  async registrantProfileRealNameVerification(request: RegistrantProfileRealNameVerificationRequest): Promise<RegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request ResendEmailVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResendEmailVerificationResponse
   */
  async resendEmailVerificationWithOptions(request: ResendEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<ResendEmailVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResendEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResendEmailVerificationResponse>(await this.callApi(params, req, runtime), new ResendEmailVerificationResponse({}));
  }

  /**
   * @param request ResendEmailVerificationRequest
   * @return ResendEmailVerificationResponse
   */
  async resendEmailVerification(request: ResendEmailVerificationRequest): Promise<ResendEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderActivateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForCreatingOrderActivateResponse
   */
  async saveBatchTaskForCreatingOrderActivateWithOptions(request: SaveBatchTaskForCreatingOrderActivateRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderActivateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderActivateParam)) {
      query["OrderActivateParam"] = request.orderActivateParam;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForCreatingOrderActivate",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderActivateResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForCreatingOrderActivateResponse({}));
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderActivateRequest
   * @return SaveBatchTaskForCreatingOrderActivateResponse
   */
  async saveBatchTaskForCreatingOrderActivate(request: SaveBatchTaskForCreatingOrderActivateRequest): Promise<SaveBatchTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderRedeemRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForCreatingOrderRedeemResponse
   */
  async saveBatchTaskForCreatingOrderRedeemWithOptions(request: SaveBatchTaskForCreatingOrderRedeemRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderRedeemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderRedeemParam)) {
      query["OrderRedeemParam"] = request.orderRedeemParam;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForCreatingOrderRedeem",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderRedeemResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForCreatingOrderRedeemResponse({}));
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderRedeemRequest
   * @return SaveBatchTaskForCreatingOrderRedeemResponse
   */
  async saveBatchTaskForCreatingOrderRedeem(request: SaveBatchTaskForCreatingOrderRedeemRequest): Promise<SaveBatchTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderRenewRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForCreatingOrderRenewResponse
   */
  async saveBatchTaskForCreatingOrderRenewWithOptions(request: SaveBatchTaskForCreatingOrderRenewRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderRenewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderRenewParam)) {
      query["OrderRenewParam"] = request.orderRenewParam;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForCreatingOrderRenew",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderRenewResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForCreatingOrderRenewResponse({}));
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderRenewRequest
   * @return SaveBatchTaskForCreatingOrderRenewResponse
   */
  async saveBatchTaskForCreatingOrderRenew(request: SaveBatchTaskForCreatingOrderRenewRequest): Promise<SaveBatchTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderTransferRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForCreatingOrderTransferResponse
   */
  async saveBatchTaskForCreatingOrderTransferWithOptions(request: SaveBatchTaskForCreatingOrderTransferRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderTransferResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderTransferParam)) {
      query["OrderTransferParam"] = request.orderTransferParam;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForCreatingOrderTransfer",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderTransferResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForCreatingOrderTransferResponse({}));
  }

  /**
   * @param request SaveBatchTaskForCreatingOrderTransferRequest
   * @return SaveBatchTaskForCreatingOrderTransferResponse
   */
  async saveBatchTaskForCreatingOrderTransfer(request: SaveBatchTaskForCreatingOrderTransferRequest): Promise<SaveBatchTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForDomainNameProxyServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForDomainNameProxyServiceResponse
   */
  async saveBatchTaskForDomainNameProxyServiceWithOptions(request: SaveBatchTaskForDomainNameProxyServiceRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForDomainNameProxyServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForDomainNameProxyService",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForDomainNameProxyServiceResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForDomainNameProxyServiceResponse({}));
  }

  /**
   * @param request SaveBatchTaskForDomainNameProxyServiceRequest
   * @return SaveBatchTaskForDomainNameProxyServiceResponse
   */
  async saveBatchTaskForDomainNameProxyService(request: SaveBatchTaskForDomainNameProxyServiceRequest): Promise<SaveBatchTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForModifyingDomainDnsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForModifyingDomainDnsResponse
   */
  async saveBatchTaskForModifyingDomainDnsWithOptions(request: SaveBatchTaskForModifyingDomainDnsRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForModifyingDomainDnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunDns)) {
      query["AliyunDns"] = request.aliyunDns;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainNameServer)) {
      query["DomainNameServer"] = request.domainNameServer;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForModifyingDomainDns",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForModifyingDomainDnsResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForModifyingDomainDnsResponse({}));
  }

  /**
   * @param request SaveBatchTaskForModifyingDomainDnsRequest
   * @return SaveBatchTaskForModifyingDomainDnsResponse
   */
  async saveBatchTaskForModifyingDomainDns(request: SaveBatchTaskForModifyingDomainDnsRequest): Promise<SaveBatchTaskForModifyingDomainDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForModifyingDomainDnsWithOptions(request, runtime);
  }

  /**
   * @summary 国际站删除抢注批量接口
   *
   * @param request SaveBatchTaskForReserveDropListDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForReserveDropListDomainResponse
   */
  async saveBatchTaskForReserveDropListDomainWithOptions(request: SaveBatchTaskForReserveDropListDomainRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForReserveDropListDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForReserveDropListDomain",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForReserveDropListDomainResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForReserveDropListDomainResponse({}));
  }

  /**
   * @summary 国际站删除抢注批量接口
   *
   * @param request SaveBatchTaskForReserveDropListDomainRequest
   * @return SaveBatchTaskForReserveDropListDomainResponse
   */
  async saveBatchTaskForReserveDropListDomain(request: SaveBatchTaskForReserveDropListDomainRequest): Promise<SaveBatchTaskForReserveDropListDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForReserveDropListDomainWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForTransferProhibitionLockRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForTransferProhibitionLockResponse
   */
  async saveBatchTaskForTransferProhibitionLockWithOptions(request: SaveBatchTaskForTransferProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForTransferProhibitionLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForTransferProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForTransferProhibitionLockResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForTransferProhibitionLockResponse({}));
  }

  /**
   * @param request SaveBatchTaskForTransferProhibitionLockRequest
   * @return SaveBatchTaskForTransferProhibitionLockResponse
   */
  async saveBatchTaskForTransferProhibitionLock(request: SaveBatchTaskForTransferProhibitionLockRequest): Promise<SaveBatchTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForUpdateProhibitionLockRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForUpdateProhibitionLockResponse
   */
  async saveBatchTaskForUpdateProhibitionLockWithOptions(request: SaveBatchTaskForUpdateProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForUpdateProhibitionLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForUpdateProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForUpdateProhibitionLockResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForUpdateProhibitionLockResponse({}));
  }

  /**
   * @param request SaveBatchTaskForUpdateProhibitionLockRequest
   * @return SaveBatchTaskForUpdateProhibitionLockResponse
   */
  async saveBatchTaskForUpdateProhibitionLock(request: SaveBatchTaskForUpdateProhibitionLockRequest): Promise<SaveBatchTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForUpdatingContactInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForUpdatingContactInfoResponse
   */
  async saveBatchTaskForUpdatingContactInfoWithOptions(request: SaveBatchTaskForUpdatingContactInfoRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForUpdatingContactInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addTransferLock)) {
      query["AddTransferLock"] = request.addTransferLock;
    }

    if (!Util.isUnset(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForUpdatingContactInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForUpdatingContactInfoResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForUpdatingContactInfoResponse({}));
  }

  /**
   * @param request SaveBatchTaskForUpdatingContactInfoRequest
   * @return SaveBatchTaskForUpdatingContactInfoResponse
   */
  async saveBatchTaskForUpdatingContactInfo(request: SaveBatchTaskForUpdatingContactInfoRequest): Promise<SaveBatchTaskForUpdatingContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoWithOptions(request, runtime);
  }

  /**
   * @param request SaveBatchTaskForUpdatingContactInfoByNewContactRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveBatchTaskForUpdatingContactInfoByNewContactResponse
   */
  async saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request: SaveBatchTaskForUpdatingContactInfoByNewContactRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!Util.isUnset(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!Util.isUnset(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!Util.isUnset(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!Util.isUnset(request.transferOutProhibited)) {
      query["TransferOutProhibited"] = request.transferOutProhibited;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForUpdatingContactInfoByNewContact",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForUpdatingContactInfoByNewContactResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForUpdatingContactInfoByNewContactResponse({}));
  }

  /**
   * @param request SaveBatchTaskForUpdatingContactInfoByNewContactRequest
   * @return SaveBatchTaskForUpdatingContactInfoByNewContactResponse
   */
  async saveBatchTaskForUpdatingContactInfoByNewContact(request: SaveBatchTaskForUpdatingContactInfoByNewContactRequest): Promise<SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request, runtime);
  }

  /**
   * @param request SaveRegistrantProfileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveRegistrantProfileResponse
   */
  async saveRegistrantProfileWithOptions(request: SaveRegistrantProfileRequest, runtime: $Util.RuntimeOptions): Promise<SaveRegistrantProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.defaultRegistrantProfile)) {
      query["DefaultRegistrantProfile"] = request.defaultRegistrantProfile;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!Util.isUnset(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.registrantProfileType)) {
      query["RegistrantProfileType"] = request.registrantProfileType;
    }

    if (!Util.isUnset(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!Util.isUnset(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!Util.isUnset(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveRegistrantProfile",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveRegistrantProfileResponse>(await this.callApi(params, req, runtime), new SaveRegistrantProfileResponse({}));
  }

  /**
   * @param request SaveRegistrantProfileRequest
   * @return SaveRegistrantProfileResponse
   */
  async saveRegistrantProfile(request: SaveRegistrantProfileRequest): Promise<SaveRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRegistrantProfileWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForAddingDSRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForAddingDSRecordResponse
   */
  async saveSingleTaskForAddingDSRecordWithOptions(request: SaveSingleTaskForAddingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForAddingDSRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!Util.isUnset(request.digestType)) {
      query["DigestType"] = request.digestType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.keyTag)) {
      query["KeyTag"] = request.keyTag;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForAddingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForAddingDSRecordResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForAddingDSRecordResponse({}));
  }

  /**
   * @param request SaveSingleTaskForAddingDSRecordRequest
   * @return SaveSingleTaskForAddingDSRecordResponse
   */
  async saveSingleTaskForAddingDSRecord(request: SaveSingleTaskForAddingDSRecordRequest): Promise<SaveSingleTaskForAddingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAddingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForApprovingTransferOutRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForApprovingTransferOutResponse
   */
  async saveSingleTaskForApprovingTransferOutWithOptions(request: SaveSingleTaskForApprovingTransferOutRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForApprovingTransferOutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForApprovingTransferOut",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForApprovingTransferOutResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForApprovingTransferOutResponse({}));
  }

  /**
   * @param request SaveSingleTaskForApprovingTransferOutRequest
   * @return SaveSingleTaskForApprovingTransferOutResponse
   */
  async saveSingleTaskForApprovingTransferOut(request: SaveSingleTaskForApprovingTransferOutRequest): Promise<SaveSingleTaskForApprovingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForApprovingTransferOutWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForAssociatingEnsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForAssociatingEnsResponse
   */
  async saveSingleTaskForAssociatingEnsWithOptions(request: SaveSingleTaskForAssociatingEnsRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForAssociatingEnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForAssociatingEns",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForAssociatingEnsResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForAssociatingEnsResponse({}));
  }

  /**
   * @param request SaveSingleTaskForAssociatingEnsRequest
   * @return SaveSingleTaskForAssociatingEnsResponse
   */
  async saveSingleTaskForAssociatingEns(request: SaveSingleTaskForAssociatingEnsRequest): Promise<SaveSingleTaskForAssociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAssociatingEnsWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForCancelingTransferInRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForCancelingTransferInResponse
   */
  async saveSingleTaskForCancelingTransferInWithOptions(request: SaveSingleTaskForCancelingTransferInRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCancelingTransferInResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCancelingTransferIn",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForCancelingTransferInResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForCancelingTransferInResponse({}));
  }

  /**
   * @param request SaveSingleTaskForCancelingTransferInRequest
   * @return SaveSingleTaskForCancelingTransferInResponse
   */
  async saveSingleTaskForCancelingTransferIn(request: SaveSingleTaskForCancelingTransferInRequest): Promise<SaveSingleTaskForCancelingTransferInResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferInWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForCancelingTransferOutRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForCancelingTransferOutResponse
   */
  async saveSingleTaskForCancelingTransferOutWithOptions(request: SaveSingleTaskForCancelingTransferOutRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCancelingTransferOutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCancelingTransferOut",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForCancelingTransferOutResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForCancelingTransferOutResponse({}));
  }

  /**
   * @param request SaveSingleTaskForCancelingTransferOutRequest
   * @return SaveSingleTaskForCancelingTransferOutResponse
   */
  async saveSingleTaskForCancelingTransferOut(request: SaveSingleTaskForCancelingTransferOutRequest): Promise<SaveSingleTaskForCancelingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferOutWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForCreatingDnsHostRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForCreatingDnsHostResponse
   */
  async saveSingleTaskForCreatingDnsHostWithOptions(request: SaveSingleTaskForCreatingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingDnsHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dnsName)) {
      query["DnsName"] = request.dnsName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCreatingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForCreatingDnsHostResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForCreatingDnsHostResponse({}));
  }

  /**
   * @param request SaveSingleTaskForCreatingDnsHostRequest
   * @return SaveSingleTaskForCreatingDnsHostResponse
   */
  async saveSingleTaskForCreatingDnsHost(request: SaveSingleTaskForCreatingDnsHostRequest): Promise<SaveSingleTaskForCreatingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderActivateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForCreatingOrderActivateResponse
   */
  async saveSingleTaskForCreatingOrderActivateWithOptions(request: SaveSingleTaskForCreatingOrderActivateRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderActivateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.aliyunDns)) {
      query["AliyunDns"] = request.aliyunDns;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.dns1)) {
      query["Dns1"] = request.dns1;
    }

    if (!Util.isUnset(request.dns2)) {
      query["Dns2"] = request.dns2;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.enableDomainProxy)) {
      query["EnableDomainProxy"] = request.enableDomainProxy;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.permitPremiumActivation)) {
      query["PermitPremiumActivation"] = request.permitPremiumActivation;
    }

    if (!Util.isUnset(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!Util.isUnset(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!Util.isUnset(request.subscriptionDuration)) {
      query["SubscriptionDuration"] = request.subscriptionDuration;
    }

    if (!Util.isUnset(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!Util.isUnset(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!Util.isUnset(request.trademarkDomainActivation)) {
      query["TrademarkDomainActivation"] = request.trademarkDomainActivation;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCreatingOrderActivate",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderActivateResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForCreatingOrderActivateResponse({}));
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderActivateRequest
   * @return SaveSingleTaskForCreatingOrderActivateResponse
   */
  async saveSingleTaskForCreatingOrderActivate(request: SaveSingleTaskForCreatingOrderActivateRequest): Promise<SaveSingleTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderRedeemRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForCreatingOrderRedeemResponse
   */
  async saveSingleTaskForCreatingOrderRedeemWithOptions(request: SaveSingleTaskForCreatingOrderRedeemRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderRedeemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.currentExpirationDate)) {
      query["CurrentExpirationDate"] = request.currentExpirationDate;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCreatingOrderRedeem",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderRedeemResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForCreatingOrderRedeemResponse({}));
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderRedeemRequest
   * @return SaveSingleTaskForCreatingOrderRedeemResponse
   */
  async saveSingleTaskForCreatingOrderRedeem(request: SaveSingleTaskForCreatingOrderRedeemRequest): Promise<SaveSingleTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderRenewRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForCreatingOrderRenewResponse
   */
  async saveSingleTaskForCreatingOrderRenewWithOptions(request: SaveSingleTaskForCreatingOrderRenewRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderRenewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.currentExpirationDate)) {
      query["CurrentExpirationDate"] = request.currentExpirationDate;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.subscriptionDuration)) {
      query["SubscriptionDuration"] = request.subscriptionDuration;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCreatingOrderRenew",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderRenewResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForCreatingOrderRenewResponse({}));
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderRenewRequest
   * @return SaveSingleTaskForCreatingOrderRenewResponse
   */
  async saveSingleTaskForCreatingOrderRenew(request: SaveSingleTaskForCreatingOrderRenewRequest): Promise<SaveSingleTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderTransferRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForCreatingOrderTransferResponse
   */
  async saveSingleTaskForCreatingOrderTransferWithOptions(request: SaveSingleTaskForCreatingOrderTransferRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderTransferResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationCode)) {
      query["AuthorizationCode"] = request.authorizationCode;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.permitPremiumTransfer)) {
      query["PermitPremiumTransfer"] = request.permitPremiumTransfer;
    }

    if (!Util.isUnset(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!Util.isUnset(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCreatingOrderTransfer",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderTransferResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForCreatingOrderTransferResponse({}));
  }

  /**
   * @param request SaveSingleTaskForCreatingOrderTransferRequest
   * @return SaveSingleTaskForCreatingOrderTransferResponse
   */
  async saveSingleTaskForCreatingOrderTransfer(request: SaveSingleTaskForCreatingOrderTransferRequest): Promise<SaveSingleTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForDeletingDSRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForDeletingDSRecordResponse
   */
  async saveSingleTaskForDeletingDSRecordWithOptions(request: SaveSingleTaskForDeletingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDeletingDSRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.keyTag)) {
      query["KeyTag"] = request.keyTag;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForDeletingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForDeletingDSRecordResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForDeletingDSRecordResponse({}));
  }

  /**
   * @param request SaveSingleTaskForDeletingDSRecordRequest
   * @return SaveSingleTaskForDeletingDSRecordResponse
   */
  async saveSingleTaskForDeletingDSRecord(request: SaveSingleTaskForDeletingDSRecordRequest): Promise<SaveSingleTaskForDeletingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForDeletingDnsHostRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForDeletingDnsHostResponse
   */
  async saveSingleTaskForDeletingDnsHostWithOptions(request: SaveSingleTaskForDeletingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDeletingDnsHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dnsName)) {
      query["DnsName"] = request.dnsName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForDeletingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForDeletingDnsHostResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForDeletingDnsHostResponse({}));
  }

  /**
   * @param request SaveSingleTaskForDeletingDnsHostRequest
   * @return SaveSingleTaskForDeletingDnsHostResponse
   */
  async saveSingleTaskForDeletingDnsHost(request: SaveSingleTaskForDeletingDnsHostRequest): Promise<SaveSingleTaskForDeletingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForDisassociatingEnsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForDisassociatingEnsResponse
   */
  async saveSingleTaskForDisassociatingEnsWithOptions(request: SaveSingleTaskForDisassociatingEnsRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDisassociatingEnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForDisassociatingEns",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForDisassociatingEnsResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForDisassociatingEnsResponse({}));
  }

  /**
   * @param request SaveSingleTaskForDisassociatingEnsRequest
   * @return SaveSingleTaskForDisassociatingEnsResponse
   */
  async saveSingleTaskForDisassociatingEns(request: SaveSingleTaskForDisassociatingEnsRequest): Promise<SaveSingleTaskForDisassociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDisassociatingEnsWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForDomainNameProxyServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForDomainNameProxyServiceResponse
   */
  async saveSingleTaskForDomainNameProxyServiceWithOptions(request: SaveSingleTaskForDomainNameProxyServiceRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDomainNameProxyServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForDomainNameProxyService",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForDomainNameProxyServiceResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForDomainNameProxyServiceResponse({}));
  }

  /**
   * @param request SaveSingleTaskForDomainNameProxyServiceRequest
   * @return SaveSingleTaskForDomainNameProxyServiceResponse
   */
  async saveSingleTaskForDomainNameProxyService(request: SaveSingleTaskForDomainNameProxyServiceRequest): Promise<SaveSingleTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForModifyingDSRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForModifyingDSRecordResponse
   */
  async saveSingleTaskForModifyingDSRecordWithOptions(request: SaveSingleTaskForModifyingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForModifyingDSRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!Util.isUnset(request.digestType)) {
      query["DigestType"] = request.digestType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.keyTag)) {
      query["KeyTag"] = request.keyTag;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForModifyingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForModifyingDSRecordResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForModifyingDSRecordResponse({}));
  }

  /**
   * @param request SaveSingleTaskForModifyingDSRecordRequest
   * @return SaveSingleTaskForModifyingDSRecordResponse
   */
  async saveSingleTaskForModifyingDSRecord(request: SaveSingleTaskForModifyingDSRecordRequest): Promise<SaveSingleTaskForModifyingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForModifyingDnsHostRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForModifyingDnsHostResponse
   */
  async saveSingleTaskForModifyingDnsHostWithOptions(request: SaveSingleTaskForModifyingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForModifyingDnsHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dnsName)) {
      query["DnsName"] = request.dnsName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForModifyingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForModifyingDnsHostResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForModifyingDnsHostResponse({}));
  }

  /**
   * @param request SaveSingleTaskForModifyingDnsHostRequest
   * @return SaveSingleTaskForModifyingDnsHostResponse
   */
  async saveSingleTaskForModifyingDnsHost(request: SaveSingleTaskForModifyingDnsHostRequest): Promise<SaveSingleTaskForModifyingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForQueryingTransferAuthorizationCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForQueryingTransferAuthorizationCodeResponse
   */
  async saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request: SaveSingleTaskForQueryingTransferAuthorizationCodeRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForQueryingTransferAuthorizationCode",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForQueryingTransferAuthorizationCodeResponse({}));
  }

  /**
   * @param request SaveSingleTaskForQueryingTransferAuthorizationCodeRequest
   * @return SaveSingleTaskForQueryingTransferAuthorizationCodeResponse
   */
  async saveSingleTaskForQueryingTransferAuthorizationCode(request: SaveSingleTaskForQueryingTransferAuthorizationCodeRequest): Promise<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForSaveArtExtensionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForSaveArtExtensionResponse
   */
  async saveSingleTaskForSaveArtExtensionWithOptions(request: SaveSingleTaskForSaveArtExtensionRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForSaveArtExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dateOrPeriod)) {
      query["DateOrPeriod"] = request.dateOrPeriod;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.features)) {
      query["Features"] = request.features;
    }

    if (!Util.isUnset(request.inscriptionsAndMarkings)) {
      query["InscriptionsAndMarkings"] = request.inscriptionsAndMarkings;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maker)) {
      query["Maker"] = request.maker;
    }

    if (!Util.isUnset(request.materialsAndTechniques)) {
      query["MaterialsAndTechniques"] = request.materialsAndTechniques;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.reference)) {
      query["Reference"] = request.reference;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForSaveArtExtension",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForSaveArtExtensionResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForSaveArtExtensionResponse({}));
  }

  /**
   * @param request SaveSingleTaskForSaveArtExtensionRequest
   * @return SaveSingleTaskForSaveArtExtensionResponse
   */
  async saveSingleTaskForSaveArtExtension(request: SaveSingleTaskForSaveArtExtensionRequest): Promise<SaveSingleTaskForSaveArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSaveArtExtensionWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForSynchronizingDSRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForSynchronizingDSRecordResponse
   */
  async saveSingleTaskForSynchronizingDSRecordWithOptions(request: SaveSingleTaskForSynchronizingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForSynchronizingDSRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForSynchronizingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForSynchronizingDSRecordResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForSynchronizingDSRecordResponse({}));
  }

  /**
   * @param request SaveSingleTaskForSynchronizingDSRecordRequest
   * @return SaveSingleTaskForSynchronizingDSRecordResponse
   */
  async saveSingleTaskForSynchronizingDSRecord(request: SaveSingleTaskForSynchronizingDSRecordRequest): Promise<SaveSingleTaskForSynchronizingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForSynchronizingDnsHostRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForSynchronizingDnsHostResponse
   */
  async saveSingleTaskForSynchronizingDnsHostWithOptions(request: SaveSingleTaskForSynchronizingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForSynchronizingDnsHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForSynchronizingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForSynchronizingDnsHostResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForSynchronizingDnsHostResponse({}));
  }

  /**
   * @param request SaveSingleTaskForSynchronizingDnsHostRequest
   * @return SaveSingleTaskForSynchronizingDnsHostResponse
   */
  async saveSingleTaskForSynchronizingDnsHost(request: SaveSingleTaskForSynchronizingDnsHostRequest): Promise<SaveSingleTaskForSynchronizingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForTransferProhibitionLockRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForTransferProhibitionLockResponse
   */
  async saveSingleTaskForTransferProhibitionLockWithOptions(request: SaveSingleTaskForTransferProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForTransferProhibitionLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForTransferProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForTransferProhibitionLockResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForTransferProhibitionLockResponse({}));
  }

  /**
   * @param request SaveSingleTaskForTransferProhibitionLockRequest
   * @return SaveSingleTaskForTransferProhibitionLockResponse
   */
  async saveSingleTaskForTransferProhibitionLock(request: SaveSingleTaskForTransferProhibitionLockRequest): Promise<SaveSingleTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForUpdateProhibitionLockRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForUpdateProhibitionLockResponse
   */
  async saveSingleTaskForUpdateProhibitionLockWithOptions(request: SaveSingleTaskForUpdateProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForUpdateProhibitionLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForUpdateProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForUpdateProhibitionLockResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForUpdateProhibitionLockResponse({}));
  }

  /**
   * @param request SaveSingleTaskForUpdateProhibitionLockRequest
   * @return SaveSingleTaskForUpdateProhibitionLockResponse
   */
  async saveSingleTaskForUpdateProhibitionLock(request: SaveSingleTaskForUpdateProhibitionLockRequest): Promise<SaveSingleTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request SaveSingleTaskForUpdatingContactInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveSingleTaskForUpdatingContactInfoResponse
   */
  async saveSingleTaskForUpdatingContactInfoWithOptions(request: SaveSingleTaskForUpdatingContactInfoRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForUpdatingContactInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addTransferLock)) {
      query["AddTransferLock"] = request.addTransferLock;
    }

    if (!Util.isUnset(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForUpdatingContactInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForUpdatingContactInfoResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForUpdatingContactInfoResponse({}));
  }

  /**
   * @param request SaveSingleTaskForUpdatingContactInfoRequest
   * @return SaveSingleTaskForUpdatingContactInfoResponse
   */
  async saveSingleTaskForUpdatingContactInfo(request: SaveSingleTaskForUpdatingContactInfoRequest): Promise<SaveSingleTaskForUpdatingContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdatingContactInfoWithOptions(request, runtime);
  }

  /**
   * @param request SaveTaskForSubmittingDomainDeleteRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveTaskForSubmittingDomainDeleteResponse
   */
  async saveTaskForSubmittingDomainDeleteWithOptions(request: SaveTaskForSubmittingDomainDeleteRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForSubmittingDomainDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveTaskForSubmittingDomainDelete",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTaskForSubmittingDomainDeleteResponse>(await this.callApi(params, req, runtime), new SaveTaskForSubmittingDomainDeleteResponse({}));
  }

  /**
   * @param request SaveTaskForSubmittingDomainDeleteRequest
   * @return SaveTaskForSubmittingDomainDeleteResponse
   */
  async saveTaskForSubmittingDomainDelete(request: SaveTaskForSubmittingDomainDeleteRequest): Promise<SaveTaskForSubmittingDomainDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainDeleteWithOptions(request, runtime);
  }

  /**
   * @param request SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.identityCredentialNo)) {
      query["IdentityCredentialNo"] = request.identityCredentialNo;
    }

    if (!Util.isUnset(request.identityCredentialType)) {
      query["IdentityCredentialType"] = request.identityCredentialType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identityCredential)) {
      body["IdentityCredential"] = request.identityCredential;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse>(await this.callApi(params, req, runtime), new SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse({}));
  }

  /**
   * @param request SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest
   * @return SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(request: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request, runtime);
  }

  /**
   * @param request SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse>(await this.callApi(params, req, runtime), new SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse({}));
  }

  /**
   * @param request SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest
   * @return SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(request: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request, runtime);
  }

  /**
   * @param request SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse
   */
  async saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.identityCredentialNo)) {
      query["IdentityCredentialNo"] = request.identityCredentialNo;
    }

    if (!Util.isUnset(request.identityCredentialType)) {
      query["IdentityCredentialType"] = request.identityCredentialType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!Util.isUnset(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!Util.isUnset(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!Util.isUnset(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!Util.isUnset(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!Util.isUnset(request.transferOutProhibited)) {
      query["TransferOutProhibited"] = request.transferOutProhibited;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identityCredential)) {
      body["IdentityCredential"] = request.identityCredential;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveTaskForUpdatingRegistrantInfoByIdentityCredential",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse>(await this.callApi(params, req, runtime), new SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse({}));
  }

  /**
   * @param request SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest
   * @return SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse
   */
  async saveTaskForUpdatingRegistrantInfoByIdentityCredential(request: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest): Promise<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request, runtime);
  }

  /**
   * @param request SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse
   */
  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!Util.isUnset(request.transferOutProhibited)) {
      query["TransferOutProhibited"] = request.transferOutProhibited;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse>(await this.callApi(params, req, runtime), new SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse({}));
  }

  /**
   * @param request SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest
   * @return SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse
   */
  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileID(request: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest): Promise<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request, runtime);
  }

  /**
   * @param request SubmitEmailVerificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitEmailVerificationResponse
   */
  async submitEmailVerificationWithOptions(request: SubmitEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<SubmitEmailVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sendIfExist)) {
      query["SendIfExist"] = request.sendIfExist;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitEmailVerificationResponse>(await this.callApi(params, req, runtime), new SubmitEmailVerificationResponse({}));
  }

  /**
   * @param request SubmitEmailVerificationRequest
   * @return SubmitEmailVerificationResponse
   */
  async submitEmailVerification(request: SubmitEmailVerificationRequest): Promise<SubmitEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request TransferInCheckMailTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TransferInCheckMailTokenResponse
   */
  async transferInCheckMailTokenWithOptions(request: TransferInCheckMailTokenRequest, runtime: $Util.RuntimeOptions): Promise<TransferInCheckMailTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferInCheckMailToken",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferInCheckMailTokenResponse>(await this.callApi(params, req, runtime), new TransferInCheckMailTokenResponse({}));
  }

  /**
   * @param request TransferInCheckMailTokenRequest
   * @return TransferInCheckMailTokenResponse
   */
  async transferInCheckMailToken(request: TransferInCheckMailTokenRequest): Promise<TransferInCheckMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInCheckMailTokenWithOptions(request, runtime);
  }

  /**
   * @param request TransferInReenterTransferAuthorizationCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TransferInReenterTransferAuthorizationCodeResponse
   */
  async transferInReenterTransferAuthorizationCodeWithOptions(request: TransferInReenterTransferAuthorizationCodeRequest, runtime: $Util.RuntimeOptions): Promise<TransferInReenterTransferAuthorizationCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.transferAuthorizationCode)) {
      query["TransferAuthorizationCode"] = request.transferAuthorizationCode;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferInReenterTransferAuthorizationCode",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferInReenterTransferAuthorizationCodeResponse>(await this.callApi(params, req, runtime), new TransferInReenterTransferAuthorizationCodeResponse({}));
  }

  /**
   * @param request TransferInReenterTransferAuthorizationCodeRequest
   * @return TransferInReenterTransferAuthorizationCodeResponse
   */
  async transferInReenterTransferAuthorizationCode(request: TransferInReenterTransferAuthorizationCodeRequest): Promise<TransferInReenterTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInReenterTransferAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * @param request TransferInRefetchWhoisEmailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TransferInRefetchWhoisEmailResponse
   */
  async transferInRefetchWhoisEmailWithOptions(request: TransferInRefetchWhoisEmailRequest, runtime: $Util.RuntimeOptions): Promise<TransferInRefetchWhoisEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferInRefetchWhoisEmail",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferInRefetchWhoisEmailResponse>(await this.callApi(params, req, runtime), new TransferInRefetchWhoisEmailResponse({}));
  }

  /**
   * @param request TransferInRefetchWhoisEmailRequest
   * @return TransferInRefetchWhoisEmailResponse
   */
  async transferInRefetchWhoisEmail(request: TransferInRefetchWhoisEmailRequest): Promise<TransferInRefetchWhoisEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInRefetchWhoisEmailWithOptions(request, runtime);
  }

  /**
   * @param request TransferInResendMailTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TransferInResendMailTokenResponse
   */
  async transferInResendMailTokenWithOptions(request: TransferInResendMailTokenRequest, runtime: $Util.RuntimeOptions): Promise<TransferInResendMailTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferInResendMailToken",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferInResendMailTokenResponse>(await this.callApi(params, req, runtime), new TransferInResendMailTokenResponse({}));
  }

  /**
   * @param request TransferInResendMailTokenRequest
   * @return TransferInResendMailTokenResponse
   */
  async transferInResendMailToken(request: TransferInResendMailTokenRequest): Promise<TransferInResendMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInResendMailTokenWithOptions(request, runtime);
  }

  /**
   * @param request VerifyContactFieldRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyContactFieldResponse
   */
  async verifyContactFieldWithOptions(request: VerifyContactFieldRequest, runtime: $Util.RuntimeOptions): Promise<VerifyContactFieldResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!Util.isUnset(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!Util.isUnset(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!Util.isUnset(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!Util.isUnset(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyContactField",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyContactFieldResponse>(await this.callApi(params, req, runtime), new VerifyContactFieldResponse({}));
  }

  /**
   * @param request VerifyContactFieldRequest
   * @return VerifyContactFieldResponse
   */
  async verifyContactField(request: VerifyContactFieldRequest): Promise<VerifyContactFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyContactFieldWithOptions(request, runtime);
  }

  /**
   * @param request VerifyEmailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyEmailResponse
   */
  async verifyEmailWithOptions(request: VerifyEmailRequest, runtime: $Util.RuntimeOptions): Promise<VerifyEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyEmail",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyEmailResponse>(await this.callApi(params, req, runtime), new VerifyEmailResponse({}));
  }

  /**
   * @param request VerifyEmailRequest
   * @return VerifyEmailResponse
   */
  async verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyEmailWithOptions(request, runtime);
  }

}
