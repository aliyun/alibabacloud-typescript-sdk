// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcknowledgeTaskResultRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  taskDetailNo?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      taskDetailNo: 'TaskDetailNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      taskDetailNo: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: AcknowledgeTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: BatchFuzzyMatchDomainSensitiveWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchFuzzyMatchDomainSensitiveWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDomainVerificationRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      actionType: 'string',
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
  headers: { [key: string]: string };
  body: CancelDomainVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelDomainVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOperationAuditRequest extends $tea.Model {
  lang?: string;
  auditRecordId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      auditRecordId: 'AuditRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      auditRecordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOperationAuditResponseBody extends $tea.Model {
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

export class CancelOperationAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOperationAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOperationAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelQualificationVerificationRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  qualificationType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      qualificationType: 'QualificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      qualificationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelQualificationVerificationResponseBody extends $tea.Model {
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

export class CancelQualificationVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelQualificationVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelQualificationVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      taskNo: 'string',
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
  headers: { [key: string]: string };
  body: CancelTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      feeCommand: 'FeeCommand',
      feeCurrency: 'FeeCurrency',
      feePeriod: 'FeePeriod',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      feeCommand: 'string',
      feeCurrency: 'string',
      feePeriod: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBody extends $tea.Model {
  requestId?: string;
  avail?: string;
  price?: number;
  domainName?: string;
  premium?: string;
  dynamicCheck?: boolean;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      avail: 'Avail',
      price: 'Price',
      domainName: 'DomainName',
      premium: 'Premium',
      dynamicCheck: 'DynamicCheck',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      avail: 'string',
      price: 'number',
      domainName: 'string',
      premium: 'string',
      dynamicCheck: 'boolean',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CheckDomainSunriseClaimResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckDomainSunriseClaimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaxYearOfServerLockRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  checkAction?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      checkAction: 'CheckAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
      checkAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaxYearOfServerLockResponseBody extends $tea.Model {
  requestId?: string;
  maxYear?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      maxYear: 'MaxYear',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      maxYear: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaxYearOfServerLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckMaxYearOfServerLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckMaxYearOfServerLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProcessingServerLockApplyRequest extends $tea.Model {
  feePeriod?: number;
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      feePeriod: 'FeePeriod',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feePeriod: 'number',
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProcessingServerLockApplyResponseBody extends $tea.Model {
  requestId?: string;
  exists?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exists: 'Exists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exists: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProcessingServerLockApplyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckProcessingServerLockApplyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckProcessingServerLockApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransferInFeasibilityRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  transferAuthorizationCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      transferAuthorizationCode: 'TransferAuthorizationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      transferAuthorizationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransferInFeasibilityResponseBody extends $tea.Model {
  canTransfer?: boolean;
  message?: string;
  requestId?: string;
  productId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      canTransfer: 'CanTransfer',
      message: 'Message',
      requestId: 'RequestId',
      productId: 'ProductId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTransfer: 'boolean',
      message: 'string',
      requestId: 'string',
      productId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransferInFeasibilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckTransferInFeasibilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckTransferInFeasibilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  email?: string;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      email: 'Email',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      email: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponseBody extends $tea.Model {
  requestId?: string;
  successList?: ConfirmTransferInEmailResponseBodySuccessList;
  failList?: ConfirmTransferInEmailResponseBodyFailList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      successList: 'SuccessList',
      failList: 'FailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      successList: ConfirmTransferInEmailResponseBodySuccessList,
      failList: ConfirmTransferInEmailResponseBodyFailList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmTransferInEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmTransferInEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainGroupRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainGroupId: 'DomainGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainGroupResponseBody extends $tea.Model {
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

export class DeleteDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationRequest extends $tea.Model {
  lang?: string;
  email?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      email: 'Email',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      email: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBody extends $tea.Model {
  requestId?: string;
  successList?: DeleteEmailVerificationResponseBodySuccessList[];
  failList?: DeleteEmailVerificationResponseBodyFailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      successList: 'SuccessList',
      failList: 'FailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': DeleteEmailVerificationResponseBodySuccessList },
      failList: { 'type': 'array', 'itemType': DeleteEmailVerificationResponseBodyFailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrantProfileRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  registrantProfileId?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      registrantProfileId: 'number',
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
  headers: { [key: string]: string };
  body: DeleteRegistrantProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRegistrantProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmailVerifiedRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      email: 'string',
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
  headers: { [key: string]: string };
  body: EmailVerifiedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  keyword?: string;
  matchedSentiveWords?: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
      requestId: 'RequestId',
      keyword: 'Keyword',
      matchedSentiveWords: 'MatchedSentiveWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'boolean',
      requestId: 'string',
      keyword: 'string',
      matchedSentiveWords: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FuzzyMatchDomainSensitiveWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FuzzyMatchDomainSensitiveWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationOssUploadPolicyRequest extends $tea.Model {
  lang?: string;
  auditType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      auditType: 'AuditType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      auditType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationOssUploadPolicyResponseBody extends $tea.Model {
  fileDir?: string;
  encodedPolicy?: string;
  requestId?: string;
  accessid?: string;
  signature?: string;
  host?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileDir: 'FileDir',
      encodedPolicy: 'EncodedPolicy',
      requestId: 'RequestId',
      accessid: 'Accessid',
      signature: 'Signature',
      host: 'Host',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDir: 'string',
      encodedPolicy: 'string',
      requestId: 'string',
      accessid: 'string',
      signature: 'string',
      host: 'string',
      expireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationOssUploadPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOperationOssUploadPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOperationOssUploadPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationUploadPolicyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationUploadPolicyResponseBody extends $tea.Model {
  policy?: string;
  expire?: string;
  requestId?: string;
  accessid?: string;
  signature?: string;
  host?: string;
  prefix?: string;
  dir?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      expire: 'Expire',
      requestId: 'RequestId',
      accessid: 'Accessid',
      signature: 'Signature',
      host: 'Host',
      prefix: 'Prefix',
      dir: 'Dir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      expire: 'string',
      requestId: 'string',
      accessid: 'string',
      signature: 'string',
      host: 'string',
      prefix: 'string',
      dir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationUploadPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualificationUploadPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualificationUploadPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationRequest extends $tea.Model {
  lang?: string;
  beginCreateTime?: number;
  endCreateTime?: number;
  email?: string;
  verificationStatus?: number;
  pageNum?: number;
  pageSize?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      beginCreateTime: 'BeginCreateTime',
      endCreateTime: 'EndCreateTime',
      email: 'Email',
      verificationStatus: 'VerificationStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      beginCreateTime: 'number',
      endCreateTime: 'number',
      email: 'string',
      verificationStatus: 'number',
      pageNum: 'number',
      pageSize: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: ListEmailVerificationResponseBodyData[];
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListEmailVerificationResponseBodyData },
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerLockRequest extends $tea.Model {
  domainName?: string;
  endStartDate?: number;
  beginStartDate?: number;
  pageNum?: number;
  pageSize?: number;
  lang?: string;
  lockProductId?: string;
  serverLockStatus?: number;
  startExpireDate?: number;
  endExpireDate?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endStartDate: 'EndStartDate',
      beginStartDate: 'BeginStartDate',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      lang: 'Lang',
      lockProductId: 'LockProductId',
      serverLockStatus: 'ServerLockStatus',
      startExpireDate: 'StartExpireDate',
      endExpireDate: 'EndExpireDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endStartDate: 'number',
      beginStartDate: 'number',
      pageNum: 'number',
      pageSize: 'number',
      lang: 'string',
      lockProductId: 'string',
      serverLockStatus: 'number',
      startExpireDate: 'number',
      endExpireDate: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerLockResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: ListServerLockResponseBodyData[];
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListServerLockResponseBodyData },
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServerLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServerLockResponseBody,
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
  requestId?: string;
  label?: string;
  id?: number;
  notBefore?: string;
  notAfter?: string;
  static names(): { [key: string]: string } {
    return {
      claims: 'Claims',
      requestId: 'RequestId',
      label: 'Label',
      id: 'Id',
      notBefore: 'NotBefore',
      notAfter: 'NotAfter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claims: LookupTmchNoticeResponseBodyClaims,
      requestId: 'string',
      label: 'string',
      id: 'number',
      notBefore: 'string',
      notAfter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LookupTmchNoticeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LookupTmchNoticeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollTaskResultRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  taskNo?: string;
  domainName?: string;
  instanceId?: string;
  taskResultStatus?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      taskNo: 'TaskNo',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      taskResultStatus: 'TaskResultStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      taskNo: 'string',
      domainName: 'string',
      instanceId: 'string',
      taskResultStatus: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollTaskResultResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: PollTaskResultResponseBodyData;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: PollTaskResultResponseBodyData,
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollTaskResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PollTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PollTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListRequest extends $tea.Model {
  endExpirationDate?: number;
  userClientIp?: string;
  lang?: string;
  startExpirationDate?: number;
  productDomainType?: string;
  pageNum?: number;
  pageSize?: number;
  domainGroupId?: number;
  domainNameSort?: boolean;
  domainStatus?: number;
  endLength?: number;
  excluded?: string;
  excludedPrefix?: boolean;
  excludedSuffix?: boolean;
  expirationDateSort?: boolean;
  form?: number;
  keyWord?: string;
  keyWordPrefix?: boolean;
  keyWordSuffix?: boolean;
  productDomainTypeSort?: boolean;
  registrationDateSort?: boolean;
  startLength?: number;
  tradeType?: number;
  suffixs?: string;
  startRegistrationDate?: number;
  endRegistrationDate?: number;
  static names(): { [key: string]: string } {
    return {
      endExpirationDate: 'EndExpirationDate',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      startExpirationDate: 'StartExpirationDate',
      productDomainType: 'ProductDomainType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      domainGroupId: 'DomainGroupId',
      domainNameSort: 'DomainNameSort',
      domainStatus: 'DomainStatus',
      endLength: 'EndLength',
      excluded: 'Excluded',
      excludedPrefix: 'ExcludedPrefix',
      excludedSuffix: 'ExcludedSuffix',
      expirationDateSort: 'ExpirationDateSort',
      form: 'Form',
      keyWord: 'KeyWord',
      keyWordPrefix: 'KeyWordPrefix',
      keyWordSuffix: 'KeyWordSuffix',
      productDomainTypeSort: 'ProductDomainTypeSort',
      registrationDateSort: 'RegistrationDateSort',
      startLength: 'StartLength',
      tradeType: 'TradeType',
      suffixs: 'Suffixs',
      startRegistrationDate: 'StartRegistrationDate',
      endRegistrationDate: 'EndRegistrationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endExpirationDate: 'number',
      userClientIp: 'string',
      lang: 'string',
      startExpirationDate: 'number',
      productDomainType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      domainGroupId: 'number',
      domainNameSort: 'boolean',
      domainStatus: 'number',
      endLength: 'number',
      excluded: 'string',
      excludedPrefix: 'boolean',
      excludedSuffix: 'boolean',
      expirationDateSort: 'boolean',
      form: 'number',
      keyWord: 'string',
      keyWordPrefix: 'boolean',
      keyWordSuffix: 'boolean',
      productDomainTypeSort: 'boolean',
      registrationDateSort: 'boolean',
      startLength: 'number',
      tradeType: 'number',
      suffixs: 'string',
      startRegistrationDate: 'number',
      endRegistrationDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: QueryAdvancedDomainListResponseBodyData;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: QueryAdvancedDomainListResponseBodyData,
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAdvancedDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAdvancedDomainListResponseBody,
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
  objectType?: string;
  materialsAndTechniques?: string;
  inscriptionsAndMarkings?: string;
  requestId?: string;
  reference?: string;
  dateOrPeriod?: string;
  dimensions?: string;
  title?: string;
  features?: string;
  subject?: string;
  maker?: string;
  static names(): { [key: string]: string } {
    return {
      objectType: 'ObjectType',
      materialsAndTechniques: 'MaterialsAndTechniques',
      inscriptionsAndMarkings: 'InscriptionsAndMarkings',
      requestId: 'RequestId',
      reference: 'Reference',
      dateOrPeriod: 'DateOrPeriod',
      dimensions: 'Dimensions',
      title: 'Title',
      features: 'Features',
      subject: 'Subject',
      maker: 'Maker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectType: 'string',
      materialsAndTechniques: 'string',
      inscriptionsAndMarkings: 'string',
      requestId: 'string',
      reference: 'string',
      dateOrPeriod: 'string',
      dimensions: 'string',
      title: 'string',
      features: 'string',
      subject: 'string',
      maker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryArtExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryArtExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryArtExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  pageNum?: number;
  pageSize?: number;
  startDate?: number;
  endDate?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startDate: 'number',
      endDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: QueryChangeLogListResponseBodyData;
  resultLimit?: boolean;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      resultLimit: 'ResultLimit',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: QueryChangeLogListResponseBodyData,
      resultLimit: 'boolean',
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryChangeLogListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryChangeLogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactInfoRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  contactType?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      contactType: 'ContactType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      contactType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactInfoResponseBody extends $tea.Model {
  zhProvince?: string;
  email?: string;
  telephone?: string;
  requestId?: string;
  address?: string;
  postalCode?: string;
  zhRegistrantName?: string;
  city?: string;
  createDate?: string;
  province?: string;
  zhCity?: string;
  registrantName?: string;
  zhRegistrantOrganization?: string;
  country?: string;
  registrantOrganization?: string;
  telExt?: string;
  telArea?: string;
  zhAddress?: string;
  static names(): { [key: string]: string } {
    return {
      zhProvince: 'ZhProvince',
      email: 'Email',
      telephone: 'Telephone',
      requestId: 'RequestId',
      address: 'Address',
      postalCode: 'PostalCode',
      zhRegistrantName: 'ZhRegistrantName',
      city: 'City',
      createDate: 'CreateDate',
      province: 'Province',
      zhCity: 'ZhCity',
      registrantName: 'RegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      country: 'Country',
      registrantOrganization: 'RegistrantOrganization',
      telExt: 'TelExt',
      telArea: 'TelArea',
      zhAddress: 'ZhAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zhProvince: 'string',
      email: 'string',
      telephone: 'string',
      requestId: 'string',
      address: 'string',
      postalCode: 'string',
      zhRegistrantName: 'string',
      city: 'string',
      createDate: 'string',
      province: 'string',
      zhCity: 'string',
      registrantName: 'string',
      zhRegistrantOrganization: 'string',
      country: 'string',
      registrantOrganization: 'string',
      telExt: 'string',
      telArea: 'string',
      zhAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryContactInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryContactInfoResponseBody,
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
  requestId?: string;
  dnsHostList?: QueryDnsHostResponseBodyDnsHostList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dnsHostList: 'DnsHostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dnsHostList: { 'type': 'array', 'itemType': QueryDnsHostResponseBodyDnsHostList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDnsHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBody extends $tea.Model {
  requestId?: string;
  adminDivisions?: QueryDomainAdminDivisionResponseBodyAdminDivisions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      adminDivisions: 'AdminDivisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      adminDivisions: QueryDomainAdminDivisionResponseBodyAdminDivisions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainAdminDivisionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainAdminDivisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameResponseBody extends $tea.Model {
  email?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  realNameStatus?: string;
  premium?: boolean;
  domainNameVerificationStatus?: string;
  expirationDateLong?: number;
  dnsList?: QueryDomainByDomainNameResponseBodyDnsList;
  transferOutStatus?: string;
  zhRegistrantOrganization?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  registrantOrganization?: string;
  transferProhibitionLock?: string;
  domainNameProxyService?: boolean;
  registrantType?: string;
  registrantUpdatingStatus?: string;
  requestId?: string;
  domainName?: string;
  instanceId?: string;
  zhRegistrantName?: string;
  expirationDate?: string;
  registrantName?: string;
  userId?: string;
  updateProhibitionLock?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      realNameStatus: 'RealNameStatus',
      premium: 'Premium',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      expirationDateLong: 'ExpirationDateLong',
      dnsList: 'DnsList',
      transferOutStatus: 'TransferOutStatus',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      registrantOrganization: 'RegistrantOrganization',
      transferProhibitionLock: 'TransferProhibitionLock',
      domainNameProxyService: 'DomainNameProxyService',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      requestId: 'RequestId',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      zhRegistrantName: 'ZhRegistrantName',
      expirationDate: 'ExpirationDate',
      registrantName: 'RegistrantName',
      userId: 'UserId',
      updateProhibitionLock: 'UpdateProhibitionLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      realNameStatus: 'string',
      premium: 'boolean',
      domainNameVerificationStatus: 'string',
      expirationDateLong: 'number',
      dnsList: QueryDomainByDomainNameResponseBodyDnsList,
      transferOutStatus: 'string',
      zhRegistrantOrganization: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      registrantOrganization: 'string',
      transferProhibitionLock: 'string',
      domainNameProxyService: 'boolean',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      requestId: 'string',
      domainName: 'string',
      instanceId: 'string',
      zhRegistrantName: 'string',
      expirationDate: 'string',
      registrantName: 'string',
      userId: 'string',
      updateProhibitionLock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainByDomainNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainByDomainNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponseBody extends $tea.Model {
  email?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  realNameStatus?: string;
  premium?: boolean;
  domainNameVerificationStatus?: string;
  expirationDateLong?: number;
  dnsList?: QueryDomainByInstanceIdResponseBodyDnsList;
  transferOutStatus?: string;
  zhRegistrantOrganization?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  registrantOrganization?: string;
  transferProhibitionLock?: string;
  domainNameProxyService?: boolean;
  registrantType?: string;
  registrantUpdatingStatus?: string;
  requestId?: string;
  domainName?: string;
  instanceId?: string;
  zhRegistrantName?: string;
  expirationDate?: string;
  registrantName?: string;
  userId?: string;
  updateProhibitionLock?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      realNameStatus: 'RealNameStatus',
      premium: 'Premium',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      expirationDateLong: 'ExpirationDateLong',
      dnsList: 'DnsList',
      transferOutStatus: 'TransferOutStatus',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      registrantOrganization: 'RegistrantOrganization',
      transferProhibitionLock: 'TransferProhibitionLock',
      domainNameProxyService: 'DomainNameProxyService',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      requestId: 'RequestId',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      zhRegistrantName: 'ZhRegistrantName',
      expirationDate: 'ExpirationDate',
      registrantName: 'RegistrantName',
      userId: 'UserId',
      updateProhibitionLock: 'UpdateProhibitionLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      realNameStatus: 'string',
      premium: 'boolean',
      domainNameVerificationStatus: 'string',
      expirationDateLong: 'number',
      dnsList: QueryDomainByInstanceIdResponseBodyDnsList,
      transferOutStatus: 'string',
      zhRegistrantOrganization: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      registrantOrganization: 'string',
      transferProhibitionLock: 'string',
      domainNameProxyService: 'boolean',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      requestId: 'string',
      domainName: 'string',
      instanceId: 'string',
      zhRegistrantName: 'string',
      expirationDate: 'string',
      registrantName: 'string',
      userId: 'string',
      updateProhibitionLock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainByInstanceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainGroupName?: string;
  showDeletingGroup?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainGroupName: 'DomainGroupName',
      showDeletingGroup: 'ShowDeletingGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainGroupName: 'string',
      showDeletingGroup: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDomainGroupListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryDomainGroupListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListRequest extends $tea.Model {
  endExpirationDate?: number;
  startExpirationDate?: number;
  userClientIp?: string;
  lang?: string;
  queryType?: string;
  startRegistrationDate?: number;
  endRegistrationDate?: number;
  domainName?: string;
  orderByType?: string;
  orderKeyType?: string;
  productDomainType?: string;
  pageNum?: number;
  pageSize?: number;
  domainGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endExpirationDate: 'EndExpirationDate',
      startExpirationDate: 'StartExpirationDate',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      queryType: 'QueryType',
      startRegistrationDate: 'StartRegistrationDate',
      endRegistrationDate: 'EndRegistrationDate',
      domainName: 'DomainName',
      orderByType: 'OrderByType',
      orderKeyType: 'OrderKeyType',
      productDomainType: 'ProductDomainType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      domainGroupId: 'DomainGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endExpirationDate: 'number',
      startExpirationDate: 'number',
      userClientIp: 'string',
      lang: 'string',
      queryType: 'string',
      startRegistrationDate: 'number',
      endRegistrationDate: 'number',
      domainName: 'string',
      orderByType: 'string',
      orderKeyType: 'string',
      productDomainType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      domainGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: QueryDomainListResponseBodyData;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: QueryDomainListResponseBodyData,
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealNameVerificationInfoRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  fetchImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      fetchImage: 'FetchImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      fetchImage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealNameVerificationInfoResponseBody extends $tea.Model {
  identityCredentialType?: string;
  requestId?: string;
  instanceId?: string;
  domainName?: string;
  identityCredential?: string;
  submissionDate?: string;
  identityCredentialNo?: string;
  identityCredentialUrl?: string;
  static names(): { [key: string]: string } {
    return {
      identityCredentialType: 'IdentityCredentialType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      identityCredential: 'IdentityCredential',
      submissionDate: 'SubmissionDate',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialUrl: 'IdentityCredentialUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCredentialType: 'string',
      requestId: 'string',
      instanceId: 'string',
      domainName: 'string',
      identityCredential: 'string',
      submissionDate: 'string',
      identityCredentialNo: 'string',
      identityCredentialUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealNameVerificationInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainRealNameVerificationInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainRealNameVerificationInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSuffixRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSuffixResponseBody extends $tea.Model {
  requestId?: string;
  suffixList?: QueryDomainSuffixResponseBodySuffixList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suffixList: 'SuffixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suffixList: QueryDomainSuffixResponseBodySuffixList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSuffixResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainSuffixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainSuffixResponseBody,
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
  requestId?: string;
  DSRecordList?: QueryDSRecordResponseBodyDSRecordList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DSRecordList: 'DSRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DSRecordList: { 'type': 'array', 'itemType': QueryDSRecordResponseBodyDSRecordList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmailVerificationRequest extends $tea.Model {
  lang?: string;
  email?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      email: 'Email',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      email: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmailVerificationResponseBody extends $tea.Model {
  verificationStatus?: number;
  gmtCreate?: string;
  email?: string;
  emailVerificationNo?: string;
  confirmIp?: string;
  requestId?: string;
  userId?: string;
  gmtModified?: string;
  sendIp?: string;
  verificationTime?: string;
  tokenSendTime?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gmtCreate: 'GmtCreate',
      email: 'Email',
      emailVerificationNo: 'EmailVerificationNo',
      confirmIp: 'ConfirmIp',
      requestId: 'RequestId',
      userId: 'UserId',
      gmtModified: 'GmtModified',
      sendIp: 'SendIp',
      verificationTime: 'VerificationTime',
      tokenSendTime: 'TokenSendTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'number',
      gmtCreate: 'string',
      email: 'string',
      emailVerificationNo: 'string',
      confirmIp: 'string',
      requestId: 'string',
      userId: 'string',
      gmtModified: 'string',
      sendIp: 'string',
      verificationTime: 'string',
      tokenSendTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmailVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEmailVerificationResponseBody,
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
  headers: { [key: string]: string };
  body: QueryEnsAssociationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEnsAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailingReasonListForQualificationRequest extends $tea.Model {
  qualificationType?: string;
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      qualificationType: 'QualificationType',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualificationType: 'string',
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailingReasonListForQualificationResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFailingReasonListForQualificationResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': QueryFailingReasonListForQualificationResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailingReasonListForQualificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFailingReasonListForQualificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFailingReasonListForQualificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  realNameVerificationAction?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      realNameVerificationAction: 'RealNameVerificationAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      realNameVerificationAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFailReasonForDomainRealNameVerificationResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': QueryFailReasonForDomainRealNameVerificationResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFailReasonForDomainRealNameVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFailReasonForDomainRealNameVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForRegistrantProfileRealNameVerificationRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  registrantProfileID?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      registrantProfileID: 'RegistrantProfileID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      registrantProfileID: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForRegistrantProfileRealNameVerificationResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForRegistrantProfileRealNameVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalEnsAssociationRequest extends $tea.Model {
  userClientIp?: string;
  domainName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      domainName: 'string',
      lang: 'string',
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
  headers: { [key: string]: string };
  body: QueryLocalEnsAssociationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryLocalEnsAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoDetailRequest extends $tea.Model {
  lang?: string;
  auditRecordId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      auditRecordId: 'AuditRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      auditRecordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoDetailResponseBody extends $tea.Model {
  auditInfo?: string;
  auditStatus?: number;
  requestId?: string;
  businessName?: string;
  auditType?: number;
  domainName?: string;
  createTime?: number;
  updateTime?: number;
  id?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditStatus: 'AuditStatus',
      requestId: 'RequestId',
      businessName: 'BusinessName',
      auditType: 'AuditType',
      domainName: 'DomainName',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      id: 'Id',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditStatus: 'number',
      requestId: 'string',
      businessName: 'string',
      auditType: 'number',
      domainName: 'string',
      createTime: 'number',
      updateTime: 'number',
      id: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOperationAuditInfoDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOperationAuditInfoDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoListRequest extends $tea.Model {
  lang?: string;
  domainName?: string;
  auditType?: number;
  auditStatus?: number;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      domainName: 'DomainName',
      auditType: 'AuditType',
      auditStatus: 'AuditStatus',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      domainName: 'string',
      auditType: 'number',
      auditStatus: 'number',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoListResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: QueryOperationAuditInfoListResponseBodyData[];
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryOperationAuditInfoListResponseBodyData },
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOperationAuditInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOperationAuditInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailRequest extends $tea.Model {
  instanceId?: string;
  userClientIp?: string;
  lang?: string;
  qualificationType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      qualificationType: 'QualificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userClientIp: 'string',
      lang: 'string',
      qualificationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponseBody extends $tea.Model {
  auditStatus?: number;
  requestId?: string;
  credentials?: QueryQualificationDetailResponseBodyCredentials;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      requestId: 'RequestId',
      credentials: 'Credentials',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      requestId: 'string',
      credentials: QueryQualificationDetailResponseBodyCredentials,
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryQualificationDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryQualificationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfileRealNameVerificationInfoRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  registrantProfileId?: number;
  fetchImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      fetchImage: 'FetchImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      fetchImage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfileRealNameVerificationInfoResponseBody extends $tea.Model {
  identityCredentialType?: string;
  requestId?: string;
  modificationDate?: string;
  identityCredential?: string;
  submissionDate?: string;
  identityCredentialNo?: string;
  registrantProfileId?: number;
  identityCredentialUrl?: string;
  static names(): { [key: string]: string } {
    return {
      identityCredentialType: 'IdentityCredentialType',
      requestId: 'RequestId',
      modificationDate: 'ModificationDate',
      identityCredential: 'IdentityCredential',
      submissionDate: 'SubmissionDate',
      identityCredentialNo: 'IdentityCredentialNo',
      registrantProfileId: 'RegistrantProfileId',
      identityCredentialUrl: 'IdentityCredentialUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCredentialType: 'string',
      requestId: 'string',
      modificationDate: 'string',
      identityCredential: 'string',
      submissionDate: 'string',
      identityCredentialNo: 'string',
      registrantProfileId: 'number',
      identityCredentialUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfileRealNameVerificationInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRegistrantProfileRealNameVerificationInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRegistrantProfileRealNameVerificationInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesRequest extends $tea.Model {
  lang?: string;
  registrantOrganization?: string;
  userClientIp?: string;
  registrantProfileId?: number;
  defaultRegistrantProfile?: boolean;
  pageNum?: number;
  pageSize?: number;
  zhRegistrantOrganization?: string;
  registrantType?: string;
  realNameStatus?: string;
  email?: string;
  registrantProfileType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      registrantOrganization: 'RegistrantOrganization',
      userClientIp: 'UserClientIp',
      registrantProfileId: 'RegistrantProfileId',
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      registrantType: 'RegistrantType',
      realNameStatus: 'RealNameStatus',
      email: 'Email',
      registrantProfileType: 'RegistrantProfileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      registrantOrganization: 'string',
      userClientIp: 'string',
      registrantProfileId: 'number',
      defaultRegistrantProfile: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      zhRegistrantOrganization: 'string',
      registrantType: 'string',
      realNameStatus: 'string',
      email: 'string',
      registrantProfileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  registrantProfiles?: QueryRegistrantProfilesResponseBodyRegistrantProfiles;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      registrantProfiles: 'RegistrantProfiles',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      registrantProfiles: QueryRegistrantProfilesResponseBodyRegistrantProfiles,
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRegistrantProfilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRegistrantProfilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServerLockRequest extends $tea.Model {
  lang?: string;
  instanceId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      instanceId: 'InstanceId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      instanceId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServerLockResponseBody extends $tea.Model {
  startDate?: string;
  gmtCreate?: string;
  requestId?: string;
  expireDate?: string;
  domainName?: string;
  userId?: string;
  gmtModified?: string;
  domainInstanceId?: string;
  lockInstanceId?: string;
  serverLockStatus?: number;
  lockProductId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      gmtCreate: 'GmtCreate',
      requestId: 'RequestId',
      expireDate: 'ExpireDate',
      domainName: 'DomainName',
      userId: 'UserId',
      gmtModified: 'GmtModified',
      domainInstanceId: 'DomainInstanceId',
      lockInstanceId: 'LockInstanceId',
      serverLockStatus: 'ServerLockStatus',
      lockProductId: 'LockProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'string',
      gmtCreate: 'string',
      requestId: 'string',
      expireDate: 'string',
      domainName: 'string',
      userId: 'string',
      gmtModified: 'string',
      domainInstanceId: 'string',
      lockInstanceId: 'string',
      serverLockStatus: 'number',
      lockProductId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServerLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryServerLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryServerLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  taskNo?: string;
  domainName?: string;
  domainNameCursor?: string;
  taskStatus?: number;
  pageSize?: number;
  taskDetailNoCursor?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      taskNo: 'TaskNo',
      domainName: 'DomainName',
      domainNameCursor: 'DomainNameCursor',
      taskStatus: 'TaskStatus',
      pageSize: 'PageSize',
      taskDetailNoCursor: 'TaskDetailNoCursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      taskNo: 'string',
      domainName: 'string',
      domainNameCursor: 'string',
      taskStatus: 'number',
      pageSize: 'number',
      taskDetailNoCursor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  currentPageCursor?: QueryTaskDetailHistoryResponseBodyCurrentPageCursor;
  objects?: QueryTaskDetailHistoryResponseBodyObjects[];
  prePageCursor?: QueryTaskDetailHistoryResponseBodyPrePageCursor;
  nextPageCursor?: QueryTaskDetailHistoryResponseBodyNextPageCursor;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPageCursor: 'CurrentPageCursor',
      objects: 'Objects',
      prePageCursor: 'PrePageCursor',
      nextPageCursor: 'NextPageCursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      currentPageCursor: QueryTaskDetailHistoryResponseBodyCurrentPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskDetailHistoryResponseBodyObjects },
      prePageCursor: QueryTaskDetailHistoryResponseBodyPrePageCursor,
      nextPageCursor: QueryTaskDetailHistoryResponseBodyNextPageCursor,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskDetailHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskDetailHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListRequest extends $tea.Model {
  taskStatus?: number;
  lang?: string;
  taskNo?: string;
  domainName?: string;
  instanceId?: string;
  userClientIp?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      taskStatus: 'TaskStatus',
      lang: 'Lang',
      taskNo: 'TaskNo',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      userClientIp: 'UserClientIp',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatus: 'number',
      lang: 'string',
      taskNo: 'string',
      domainName: 'string',
      instanceId: 'string',
      userClientIp: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: QueryTaskDetailListResponseBodyData;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: QueryTaskDetailListResponseBodyData,
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskDetailListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  beginCreateTime?: number;
  endCreateTime?: number;
  pageSize?: number;
  createTimeCursor?: number;
  taskNoCursor?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      beginCreateTime: 'BeginCreateTime',
      endCreateTime: 'EndCreateTime',
      pageSize: 'PageSize',
      createTimeCursor: 'CreateTimeCursor',
      taskNoCursor: 'TaskNoCursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      beginCreateTime: 'number',
      endCreateTime: 'number',
      pageSize: 'number',
      createTimeCursor: 'number',
      taskNoCursor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  currentPageCursor?: QueryTaskInfoHistoryResponseBodyCurrentPageCursor;
  objects?: QueryTaskInfoHistoryResponseBodyObjects[];
  prePageCursor?: QueryTaskInfoHistoryResponseBodyPrePageCursor;
  nextPageCursor?: QueryTaskInfoHistoryResponseBodyNextPageCursor;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPageCursor: 'CurrentPageCursor',
      objects: 'Objects',
      prePageCursor: 'PrePageCursor',
      nextPageCursor: 'NextPageCursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      currentPageCursor: QueryTaskInfoHistoryResponseBodyCurrentPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskInfoHistoryResponseBodyObjects },
      prePageCursor: QueryTaskInfoHistoryResponseBodyPrePageCursor,
      nextPageCursor: QueryTaskInfoHistoryResponseBodyNextPageCursor,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskInfoHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskInfoHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  beginCreateTime?: number;
  endCreateTime?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      beginCreateTime: 'BeginCreateTime',
      endCreateTime: 'EndCreateTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      beginCreateTime: 'number',
      endCreateTime: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: QueryTaskListResponseBodyData;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: QueryTaskListResponseBodyData,
      totalItemNum: 'number',
      nextPage: 'boolean',
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
  status?: number;
  transferAuthorizationCodeSubmissionDate?: string;
  email?: string;
  progressBarType?: number;
  requestId?: string;
  instanceId?: string;
  domainName?: string;
  submissionDateLong?: number;
  submissionDate?: string;
  simpleTransferInStatus?: string;
  transferAuthorizationCodeSubmissionDateLong?: number;
  expirationDateLong?: number;
  expirationDate?: string;
  needMailCheck?: boolean;
  userId?: string;
  modificationDate?: string;
  resultDateLong?: number;
  resultMsg?: string;
  whoisMailStatus?: boolean;
  modificationDateLong?: number;
  resultCode?: string;
  resultDate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      transferAuthorizationCodeSubmissionDate: 'TransferAuthorizationCodeSubmissionDate',
      email: 'Email',
      progressBarType: 'ProgressBarType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      submissionDateLong: 'SubmissionDateLong',
      submissionDate: 'SubmissionDate',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      transferAuthorizationCodeSubmissionDateLong: 'TransferAuthorizationCodeSubmissionDateLong',
      expirationDateLong: 'ExpirationDateLong',
      expirationDate: 'ExpirationDate',
      needMailCheck: 'NeedMailCheck',
      userId: 'UserId',
      modificationDate: 'ModificationDate',
      resultDateLong: 'ResultDateLong',
      resultMsg: 'ResultMsg',
      whoisMailStatus: 'WhoisMailStatus',
      modificationDateLong: 'ModificationDateLong',
      resultCode: 'ResultCode',
      resultDate: 'ResultDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      transferAuthorizationCodeSubmissionDate: 'string',
      email: 'string',
      progressBarType: 'number',
      requestId: 'string',
      instanceId: 'string',
      domainName: 'string',
      submissionDateLong: 'number',
      submissionDate: 'string',
      simpleTransferInStatus: 'string',
      transferAuthorizationCodeSubmissionDateLong: 'number',
      expirationDateLong: 'number',
      expirationDate: 'string',
      needMailCheck: 'boolean',
      userId: 'string',
      modificationDate: 'string',
      resultDateLong: 'number',
      resultMsg: 'string',
      whoisMailStatus: 'boolean',
      modificationDateLong: 'number',
      resultCode: 'string',
      resultDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInByInstanceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTransferInByInstanceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTransferInByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  submissionStartDate?: number;
  submissionEndDate?: number;
  domainName?: string;
  simpleTransferInStatus?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      submissionStartDate: 'SubmissionStartDate',
      submissionEndDate: 'SubmissionEndDate',
      domainName: 'DomainName',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      submissionStartDate: 'number',
      submissionEndDate: 'number',
      domainName: 'string',
      simpleTransferInStatus: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListResponseBody extends $tea.Model {
  prePage?: boolean;
  currentPageNum?: number;
  requestId?: string;
  pageSize?: number;
  totalPageNum?: number;
  data?: QueryTransferInListResponseBodyData;
  totalItemNum?: number;
  nextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      prePage: 'PrePage',
      currentPageNum: 'CurrentPageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPageNum: 'TotalPageNum',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
      nextPage: 'NextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prePage: 'boolean',
      currentPageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPageNum: 'number',
      data: QueryTransferInListResponseBodyData,
      totalItemNum: 'number',
      nextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTransferInListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: number;
  email?: string;
  expirationDate?: string;
  requestId?: string;
  resultMsg?: string;
  pendingRequestDate?: string;
  resultCode?: string;
  transferAuthorizationCodeSendDate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      email: 'Email',
      expirationDate: 'ExpirationDate',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      pendingRequestDate: 'PendingRequestDate',
      resultCode: 'ResultCode',
      transferAuthorizationCodeSendDate: 'TransferAuthorizationCodeSendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      email: 'string',
      expirationDate: 'string',
      requestId: 'string',
      resultMsg: 'string',
      pendingRequestDate: 'string',
      resultCode: 'string',
      transferAuthorizationCodeSendDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferOutInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTransferOutInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTransferOutInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistrantProfileRealNameVerificationRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  registrantProfileID?: number;
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      registrantProfileID: 'RegistrantProfileID',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      registrantProfileID: 'number',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
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
  headers: { [key: string]: string };
  body: RegistrantProfileRealNameVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegistrantProfileRealNameVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationRequest extends $tea.Model {
  lang?: string;
  email?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      email: 'Email',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      email: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponseBody extends $tea.Model {
  requestId?: string;
  successList?: ResendEmailVerificationResponseBodySuccessList[];
  failList?: ResendEmailVerificationResponseBodyFailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      successList: 'SuccessList',
      failList: 'FailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': ResendEmailVerificationResponseBodySuccessList },
      failList: { 'type': 'array', 'itemType': ResendEmailVerificationResponseBodyFailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResendEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResendEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetQualificationVerificationRequest extends $tea.Model {
  instanceId?: string;
  userClientIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userClientIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetQualificationVerificationResponseBody extends $tea.Model {
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

export class ResetQualificationVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetQualificationVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetQualificationVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchDomainRemarkRequest extends $tea.Model {
  lang?: string;
  remark?: string;
  instanceIds?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      remark: 'Remark',
      instanceIds: 'InstanceIds',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      remark: 'string',
      instanceIds: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchDomainRemarkResponseBody extends $tea.Model {
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

export class SaveBatchDomainRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveBatchDomainRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchDomainRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderActivateRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  orderActivateParam?: SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
      orderActivateParam: 'OrderActivateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
      orderActivateParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForCreatingOrderActivateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForCreatingOrderActivateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRedeemRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  orderRedeemParam?: SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
      orderRedeemParam: 'OrderRedeemParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
      orderRedeemParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForCreatingOrderRedeemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForCreatingOrderRedeemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRenewRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  orderRenewParam?: SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
      orderRenewParam: 'OrderRenewParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
      orderRenewParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForCreatingOrderRenewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForCreatingOrderRenewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderTransferRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  orderTransferParam?: SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
      orderTransferParam: 'OrderTransferParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
      orderTransferParam: { 'type': 'array', 'itemType': SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForCreatingOrderTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForCreatingOrderTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForDomainNameProxyServiceRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  status?: boolean;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      status: 'Status',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      status: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForDomainNameProxyServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForDomainNameProxyServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForModifyingDomainDnsRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  aliyunDns?: boolean;
  domainName?: string[];
  domainNameServer?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      aliyunDns: 'AliyunDns',
      domainName: 'DomainName',
      domainNameServer: 'DomainNameServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      aliyunDns: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
      domainNameServer: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForModifyingDomainDnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForModifyingDomainDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForTransferProhibitionLockRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  status?: boolean;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      status: 'Status',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      status: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForTransferProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForTransferProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdateProhibitionLockRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  status?: boolean;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      status: 'Status',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      status: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForUpdateProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForUpdateProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoByNewContactRequest extends $tea.Model {
  address?: string;
  userClientIp?: string;
  lang?: string;
  city?: string;
  registrantOrganization?: string;
  registrantName?: string;
  province?: string;
  country?: string;
  email?: string;
  postalCode?: string;
  telArea?: string;
  telephone?: string;
  telExt?: string;
  zhCity?: string;
  zhRegistrantOrganization?: string;
  zhRegistrantName?: string;
  zhProvince?: string;
  zhAddress?: string;
  contactType?: string;
  registrantType?: string;
  transferOutProhibited?: boolean;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      city: 'City',
      registrantOrganization: 'RegistrantOrganization',
      registrantName: 'RegistrantName',
      province: 'Province',
      country: 'Country',
      email: 'Email',
      postalCode: 'PostalCode',
      telArea: 'TelArea',
      telephone: 'Telephone',
      telExt: 'TelExt',
      zhCity: 'ZhCity',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      zhRegistrantName: 'ZhRegistrantName',
      zhProvince: 'ZhProvince',
      zhAddress: 'ZhAddress',
      contactType: 'ContactType',
      registrantType: 'RegistrantType',
      transferOutProhibited: 'TransferOutProhibited',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      userClientIp: 'string',
      lang: 'string',
      city: 'string',
      registrantOrganization: 'string',
      registrantName: 'string',
      province: 'string',
      country: 'string',
      email: 'string',
      postalCode: 'string',
      telArea: 'string',
      telephone: 'string',
      telExt: 'string',
      zhCity: 'string',
      zhRegistrantOrganization: 'string',
      zhRegistrantName: 'string',
      zhProvince: 'string',
      zhAddress: 'string',
      contactType: 'string',
      registrantType: 'string',
      transferOutProhibited: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveBatchTaskForUpdatingContactInfoByNewContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForUpdatingContactInfoByNewContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  registrantProfileId?: number;
  contactType?: string;
  transferOutProhibited?: boolean;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      contactType: 'ContactType',
      transferOutProhibited: 'TransferOutProhibited',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      contactType: 'string',
      transferOutProhibited: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponseBody extends $tea.Model {
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

export class SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDomainGroupRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainGroupName?: string;
  domainGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainGroupName: 'DomainGroupName',
      domainGroupId: 'DomainGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainGroupName: 'string',
      domainGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDomainGroupResponseBody extends $tea.Model {
  beingDeleted?: boolean;
  creationDate?: string;
  requestId?: string;
  domainGroupName?: string;
  modificationDate?: string;
  domainGroupStatus?: string;
  domainGroupId?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      beingDeleted: 'BeingDeleted',
      creationDate: 'CreationDate',
      requestId: 'RequestId',
      domainGroupName: 'DomainGroupName',
      modificationDate: 'ModificationDate',
      domainGroupStatus: 'DomainGroupStatus',
      domainGroupId: 'DomainGroupId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beingDeleted: 'boolean',
      creationDate: 'string',
      requestId: 'string',
      domainGroupName: 'string',
      modificationDate: 'string',
      domainGroupStatus: 'string',
      domainGroupId: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRegistrantProfileRequest extends $tea.Model {
  defaultRegistrantProfile?: boolean;
  country?: string;
  userClientIp?: string;
  lang?: string;
  registrantProfileId?: number;
  city?: string;
  registrantOrganization?: string;
  registrantName?: string;
  province?: string;
  address?: string;
  email?: string;
  postalCode?: string;
  telArea?: string;
  telephone?: string;
  telExt?: string;
  zhRegistrantOrganization?: string;
  zhRegistrantName?: string;
  zhProvince?: string;
  zhAddress?: string;
  zhCity?: string;
  registrantType?: string;
  registrantProfileType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      country: 'Country',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      city: 'City',
      registrantOrganization: 'RegistrantOrganization',
      registrantName: 'RegistrantName',
      province: 'Province',
      address: 'Address',
      email: 'Email',
      postalCode: 'PostalCode',
      telArea: 'TelArea',
      telephone: 'Telephone',
      telExt: 'TelExt',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      zhRegistrantName: 'ZhRegistrantName',
      zhProvince: 'ZhProvince',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      registrantType: 'RegistrantType',
      registrantProfileType: 'RegistrantProfileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRegistrantProfile: 'boolean',
      country: 'string',
      userClientIp: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      city: 'string',
      registrantOrganization: 'string',
      registrantName: 'string',
      province: 'string',
      address: 'string',
      email: 'string',
      postalCode: 'string',
      telArea: 'string',
      telephone: 'string',
      telExt: 'string',
      zhRegistrantOrganization: 'string',
      zhRegistrantName: 'string',
      zhProvince: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      registrantType: 'string',
      registrantProfileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRegistrantProfileResponseBody extends $tea.Model {
  requestId?: string;
  registrantProfileId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      registrantProfileId: 'RegistrantProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      registrantProfileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRegistrantProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveRegistrantProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveRegistrantProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAddingDSRecordRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  keyTag?: number;
  userClientIp?: string;
  algorithm?: number;
  digestType?: number;
  digest?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      keyTag: 'KeyTag',
      userClientIp: 'UserClientIp',
      algorithm: 'Algorithm',
      digestType: 'DigestType',
      digest: 'Digest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      keyTag: 'number',
      userClientIp: 'string',
      algorithm: 'number',
      digestType: 'number',
      digest: 'string',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForAddingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForApprovingTransferOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForApprovingTransferOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForAssociatingEnsRequest extends $tea.Model {
  userClientIp?: string;
  domainName?: string;
  lang?: string;
  address?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      lang: 'Lang',
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      domainName: 'string',
      lang: 'string',
      address: 'string',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForAssociatingEnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForCancelingTransferInResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForCancelingTransferOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForCancelingTransferOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingDnsHostRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  dnsName?: string;
  userClientIp?: string;
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      dnsName: 'DnsName',
      userClientIp: 'UserClientIp',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      dnsName: 'string',
      userClientIp: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForCreatingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForCreatingDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderActivateRequest extends $tea.Model {
  zhRegistrantName?: string;
  lang?: string;
  domainName?: string;
  subscriptionDuration?: number;
  registrantProfileId?: number;
  enableDomainProxy?: boolean;
  permitPremiumActivation?: boolean;
  aliyunDns?: boolean;
  dns1?: string;
  userClientIp?: string;
  zhCity?: string;
  zhRegistrantOrganization?: string;
  country?: string;
  dns2?: string;
  zhProvince?: string;
  zhAddress?: string;
  city?: string;
  registrantOrganization?: string;
  registrantName?: string;
  province?: string;
  address?: string;
  email?: string;
  postalCode?: string;
  telArea?: string;
  telephone?: string;
  telExt?: string;
  registrantType?: string;
  trademarkDomainActivation?: boolean;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  static names(): { [key: string]: string } {
    return {
      zhRegistrantName: 'ZhRegistrantName',
      lang: 'Lang',
      domainName: 'DomainName',
      subscriptionDuration: 'SubscriptionDuration',
      registrantProfileId: 'RegistrantProfileId',
      enableDomainProxy: 'EnableDomainProxy',
      permitPremiumActivation: 'PermitPremiumActivation',
      aliyunDns: 'AliyunDns',
      dns1: 'Dns1',
      userClientIp: 'UserClientIp',
      zhCity: 'ZhCity',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      country: 'Country',
      dns2: 'Dns2',
      zhProvince: 'ZhProvince',
      zhAddress: 'ZhAddress',
      city: 'City',
      registrantOrganization: 'RegistrantOrganization',
      registrantName: 'RegistrantName',
      province: 'Province',
      address: 'Address',
      email: 'Email',
      postalCode: 'PostalCode',
      telArea: 'TelArea',
      telephone: 'Telephone',
      telExt: 'TelExt',
      registrantType: 'RegistrantType',
      trademarkDomainActivation: 'TrademarkDomainActivation',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zhRegistrantName: 'string',
      lang: 'string',
      domainName: 'string',
      subscriptionDuration: 'number',
      registrantProfileId: 'number',
      enableDomainProxy: 'boolean',
      permitPremiumActivation: 'boolean',
      aliyunDns: 'boolean',
      dns1: 'string',
      userClientIp: 'string',
      zhCity: 'string',
      zhRegistrantOrganization: 'string',
      country: 'string',
      dns2: 'string',
      zhProvince: 'string',
      zhAddress: 'string',
      city: 'string',
      registrantOrganization: 'string',
      registrantName: 'string',
      province: 'string',
      address: 'string',
      email: 'string',
      postalCode: 'string',
      telArea: 'string',
      telephone: 'string',
      telExt: 'string',
      registrantType: 'string',
      trademarkDomainActivation: 'boolean',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForCreatingOrderActivateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForCreatingOrderActivateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRedeemRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  currentExpirationDate?: number;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      currentExpirationDate: 'CurrentExpirationDate',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      currentExpirationDate: 'number',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForCreatingOrderRedeemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForCreatingOrderRedeemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderRenewRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  subscriptionDuration?: number;
  currentExpirationDate?: number;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      subscriptionDuration: 'SubscriptionDuration',
      currentExpirationDate: 'CurrentExpirationDate',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      subscriptionDuration: 'number',
      currentExpirationDate: 'number',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForCreatingOrderRenewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForCreatingOrderRenewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForCreatingOrderTransferRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  authorizationCode?: string;
  registrantProfileId?: number;
  permitPremiumTransfer?: boolean;
  couponNo?: string;
  useCoupon?: boolean;
  promotionNo?: string;
  usePromotion?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      authorizationCode: 'AuthorizationCode',
      registrantProfileId: 'RegistrantProfileId',
      permitPremiumTransfer: 'PermitPremiumTransfer',
      couponNo: 'CouponNo',
      useCoupon: 'UseCoupon',
      promotionNo: 'PromotionNo',
      usePromotion: 'UsePromotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      authorizationCode: 'string',
      registrantProfileId: 'number',
      permitPremiumTransfer: 'boolean',
      couponNo: 'string',
      useCoupon: 'boolean',
      promotionNo: 'string',
      usePromotion: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForCreatingOrderTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForCreatingOrderTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDnsHostRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  dnsName?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      dnsName: 'DnsName',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      dnsName: 'string',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForDeletingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForDeletingDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDeletingDSRecordRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  keyTag?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      keyTag: 'KeyTag',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      keyTag: 'number',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForDeletingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForDeletingDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDisassociatingEnsRequest extends $tea.Model {
  userClientIp?: string;
  domainName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      domainName: 'string',
      lang: 'string',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForDisassociatingEnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForDisassociatingEnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForDomainNameProxyServiceRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      status: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForDomainNameProxyServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForDomainNameProxyServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDnsHostRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  dnsName?: string;
  userClientIp?: string;
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      dnsName: 'DnsName',
      userClientIp: 'UserClientIp',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      dnsName: 'string',
      userClientIp: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForModifyingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForModifyingDnsHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForModifyingDSRecordRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  keyTag?: number;
  userClientIp?: string;
  algorithm?: number;
  digestType?: number;
  digest?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      keyTag: 'KeyTag',
      userClientIp: 'UserClientIp',
      algorithm: 'Algorithm',
      digestType: 'DigestType',
      digest: 'Digest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      keyTag: 'number',
      userClientIp: 'string',
      algorithm: 'number',
      digestType: 'number',
      digest: 'string',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForModifyingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForModifyingDSRecordResponseBody,
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForQueryingTransferAuthorizationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForQueryingTransferAuthorizationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSaveArtExtensionRequest extends $tea.Model {
  domainName?: string;
  objectType?: string;
  materialsAndTechniques?: string;
  dimensions?: string;
  title?: string;
  dateOrPeriod?: string;
  maker?: string;
  inscriptionsAndMarkings?: string;
  subject?: string;
  features?: string;
  reference?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      objectType: 'ObjectType',
      materialsAndTechniques: 'MaterialsAndTechniques',
      dimensions: 'Dimensions',
      title: 'Title',
      dateOrPeriod: 'DateOrPeriod',
      maker: 'Maker',
      inscriptionsAndMarkings: 'InscriptionsAndMarkings',
      subject: 'Subject',
      features: 'Features',
      reference: 'Reference',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      objectType: 'string',
      materialsAndTechniques: 'string',
      dimensions: 'string',
      title: 'string',
      dateOrPeriod: 'string',
      maker: 'string',
      inscriptionsAndMarkings: 'string',
      subject: 'string',
      features: 'string',
      reference: 'string',
      lang: 'string',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForSaveArtExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForSaveArtExtensionResponseBody,
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForSynchronizingDnsHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForSynchronizingDnsHostResponseBody,
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForSynchronizingDSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForSynchronizingDSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForTransferProhibitionLockRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      status: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForTransferProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForTransferProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdateProhibitionLockRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      status: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForUpdateProhibitionLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForUpdateProhibitionLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForUpdatingContactInfoRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  instanceId?: string;
  registrantProfileId?: number;
  contactType?: string;
  addTransferLock?: boolean;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      registrantProfileId: 'RegistrantProfileId',
      contactType: 'ContactType',
      addTransferLock: 'AddTransferLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      instanceId: 'string',
      registrantProfileId: 'number',
      contactType: 'string',
      addTransferLock: 'boolean',
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
  headers: { [key: string]: string };
  body: SaveSingleTaskForUpdatingContactInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSingleTaskForUpdatingContactInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainDeleteRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
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
  headers: { [key: string]: string };
  body: SaveTaskForSubmittingDomainDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTaskForSubmittingDomainDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  instanceId?: string;
  registrantProfileId?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      registrantProfileId: 'RegistrantProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      instanceId: 'string',
      registrantProfileId: 'number',
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
  headers: { [key: string]: string };
  body: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest extends $tea.Model {
  postalCode?: string;
  address?: string;
  userClientIp?: string;
  lang?: string;
  city?: string;
  registrantOrganization?: string;
  registrantName?: string;
  province?: string;
  email?: string;
  country?: string;
  telArea?: string;
  telephone?: string;
  telExt?: string;
  zhCity?: string;
  zhRegistrantOrganization?: string;
  zhRegistrantName?: string;
  zhProvince?: string;
  zhAddress?: string;
  registrantType?: string;
  identityCredentialType?: string;
  identityCredentialNo?: string;
  identityCredential?: string;
  transferOutProhibited?: boolean;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      postalCode: 'PostalCode',
      address: 'Address',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      city: 'City',
      registrantOrganization: 'RegistrantOrganization',
      registrantName: 'RegistrantName',
      province: 'Province',
      email: 'Email',
      country: 'Country',
      telArea: 'TelArea',
      telephone: 'Telephone',
      telExt: 'TelExt',
      zhCity: 'ZhCity',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      zhRegistrantName: 'ZhRegistrantName',
      zhProvince: 'ZhProvince',
      zhAddress: 'ZhAddress',
      registrantType: 'RegistrantType',
      identityCredentialType: 'IdentityCredentialType',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredential: 'IdentityCredential',
      transferOutProhibited: 'TransferOutProhibited',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postalCode: 'string',
      address: 'string',
      userClientIp: 'string',
      lang: 'string',
      city: 'string',
      registrantOrganization: 'string',
      registrantName: 'string',
      province: 'string',
      email: 'string',
      country: 'string',
      telArea: 'string',
      telephone: 'string',
      telExt: 'string',
      zhCity: 'string',
      zhRegistrantOrganization: 'string',
      zhRegistrantName: 'string',
      zhProvince: 'string',
      zhAddress: 'string',
      registrantType: 'string',
      identityCredentialType: 'string',
      identityCredentialNo: 'string',
      identityCredential: 'string',
      transferOutProhibited: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  registrantProfileId?: number;
  transferOutProhibited?: boolean;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      transferOutProhibited: 'TransferOutProhibited',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      transferOutProhibited: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListRequest extends $tea.Model {
  endExpirationDate?: number;
  userClientIp?: string;
  lang?: string;
  startExpirationDate?: number;
  productDomainType?: string;
  pageSize?: number;
  domainGroupId?: number;
  domainStatus?: number;
  endLength?: number;
  excluded?: string;
  excludedPrefix?: boolean;
  excludedSuffix?: boolean;
  form?: number;
  keyWord?: string;
  keyWordPrefix?: boolean;
  keyWordSuffix?: boolean;
  startLength?: number;
  tradeType?: number;
  suffixs?: string;
  startRegistrationDate?: number;
  endRegistrationDate?: number;
  scrollId?: string;
  static names(): { [key: string]: string } {
    return {
      endExpirationDate: 'EndExpirationDate',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      startExpirationDate: 'StartExpirationDate',
      productDomainType: 'ProductDomainType',
      pageSize: 'PageSize',
      domainGroupId: 'DomainGroupId',
      domainStatus: 'DomainStatus',
      endLength: 'EndLength',
      excluded: 'Excluded',
      excludedPrefix: 'ExcludedPrefix',
      excludedSuffix: 'ExcludedSuffix',
      form: 'Form',
      keyWord: 'KeyWord',
      keyWordPrefix: 'KeyWordPrefix',
      keyWordSuffix: 'KeyWordSuffix',
      startLength: 'StartLength',
      tradeType: 'TradeType',
      suffixs: 'Suffixs',
      startRegistrationDate: 'StartRegistrationDate',
      endRegistrationDate: 'EndRegistrationDate',
      scrollId: 'ScrollId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endExpirationDate: 'number',
      userClientIp: 'string',
      lang: 'string',
      startExpirationDate: 'number',
      productDomainType: 'string',
      pageSize: 'number',
      domainGroupId: 'number',
      domainStatus: 'number',
      endLength: 'number',
      excluded: 'string',
      excludedPrefix: 'boolean',
      excludedSuffix: 'boolean',
      form: 'number',
      keyWord: 'string',
      keyWordPrefix: 'boolean',
      keyWordSuffix: 'boolean',
      startLength: 'number',
      tradeType: 'number',
      suffixs: 'string',
      startRegistrationDate: 'number',
      endRegistrationDate: 'number',
      scrollId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  scrollId?: string;
  data?: ScrollDomainListResponseBodyData;
  totalItemNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      scrollId: 'ScrollId',
      data: 'Data',
      totalItemNum: 'TotalItemNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      scrollId: 'string',
      data: ScrollDomainListResponseBodyData,
      totalItemNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScrollDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScrollDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationRequest extends $tea.Model {
  lang?: string;
  email?: string;
  sendIfExist?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      email: 'Email',
      sendIfExist: 'SendIfExist',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      email: 'string',
      sendIfExist: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBody extends $tea.Model {
  requestId?: string;
  existList?: SubmitEmailVerificationResponseBodyExistList[];
  successList?: SubmitEmailVerificationResponseBodySuccessList[];
  failList?: SubmitEmailVerificationResponseBodyFailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      existList: 'ExistList',
      successList: 'SuccessList',
      failList: 'FailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      existList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodyExistList },
      successList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodySuccessList },
      failList: { 'type': 'array', 'itemType': SubmitEmailVerificationResponseBodyFailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitEmailVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationAuditInfoRequest extends $tea.Model {
  lang?: string;
  domainName?: string;
  auditType?: number;
  auditInfo?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      domainName: 'DomainName',
      auditType: 'AuditType',
      auditInfo: 'AuditInfo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      domainName: 'string',
      auditType: 'number',
      auditInfo: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationAuditInfoResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationAuditInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitOperationAuditInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitOperationAuditInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationCredentialsRequest extends $tea.Model {
  lang?: string;
  auditRecordId?: number;
  regType?: number;
  auditType?: number;
  credentials?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      auditRecordId: 'AuditRecordId',
      regType: 'RegType',
      auditType: 'AuditType',
      credentials: 'Credentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      auditRecordId: 'number',
      regType: 'number',
      auditType: 'number',
      credentials: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationCredentialsResponseBody extends $tea.Model {
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

export class SubmitOperationCredentialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitOperationCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitOperationCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenRequest extends $tea.Model {
  token?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenResponseBody extends $tea.Model {
  requestId?: string;
  successList?: TransferInCheckMailTokenResponseBodySuccessList;
  failList?: TransferInCheckMailTokenResponseBodyFailList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      successList: 'SuccessList',
      failList: 'FailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      successList: TransferInCheckMailTokenResponseBodySuccessList,
      failList: TransferInCheckMailTokenResponseBodyFailList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInCheckMailTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferInCheckMailTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  userClientIp?: string;
  transferAuthorizationCode?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      transferAuthorizationCode: 'TransferAuthorizationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
      transferAuthorizationCode: 'string',
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
  headers: { [key: string]: string };
  body: TransferInReenterTransferAuthorizationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: TransferInRefetchWhoisEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: TransferInResendMailTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferInResendMailTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainToDomainGroupRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  fileToUpload?: string;
  domainGroupId?: number;
  replace?: boolean;
  dataSource?: number;
  domainName?: string[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      fileToUpload: 'FileToUpload',
      domainGroupId: 'DomainGroupId',
      replace: 'Replace',
      dataSource: 'DataSource',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      fileToUpload: 'string',
      domainGroupId: 'number',
      replace: 'boolean',
      dataSource: 'number',
      domainName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainToDomainGroupResponseBody extends $tea.Model {
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

export class UpdateDomainToDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDomainToDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDomainToDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyContactFieldRequest extends $tea.Model {
  province?: string;
  userClientIp?: string;
  lang?: string;
  city?: string;
  registrantOrganization?: string;
  country?: string;
  registrantName?: string;
  address?: string;
  email?: string;
  postalCode?: string;
  telArea?: string;
  telephone?: string;
  telExt?: string;
  zhRegistrantOrganization?: string;
  zhRegistrantName?: string;
  zhProvince?: string;
  zhAddress?: string;
  zhCity?: string;
  registrantType?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      province: 'Province',
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      city: 'City',
      registrantOrganization: 'RegistrantOrganization',
      country: 'Country',
      registrantName: 'RegistrantName',
      address: 'Address',
      email: 'Email',
      postalCode: 'PostalCode',
      telArea: 'TelArea',
      telephone: 'Telephone',
      telExt: 'TelExt',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      zhRegistrantName: 'ZhRegistrantName',
      zhProvince: 'ZhProvince',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      registrantType: 'RegistrantType',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      province: 'string',
      userClientIp: 'string',
      lang: 'string',
      city: 'string',
      registrantOrganization: 'string',
      country: 'string',
      registrantName: 'string',
      address: 'string',
      email: 'string',
      postalCode: 'string',
      telArea: 'string',
      telephone: 'string',
      telExt: 'string',
      zhRegistrantOrganization: 'string',
      zhRegistrantName: 'string',
      zhProvince: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      registrantType: 'string',
      domainName: 'string',
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
  headers: { [key: string]: string };
  body: VerifyContactFieldResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: VerifyEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  keyword?: string;
  exist?: boolean;
  matchedSentiveWords?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWords;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      exist: 'Exist',
      matchedSentiveWords: 'MatchedSentiveWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      exist: 'boolean',
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

export class DeleteEmailVerificationResponseBodySuccessList extends $tea.Model {
  email?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBodyFailList extends $tea.Model {
  email?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      code: 'string',
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
  verificationTime?: string;
  email?: string;
  emailVerificationNo?: string;
  userId?: string;
  gmtCreate?: string;
  verificationStatus?: number;
  tokenSendTime?: string;
  sendIp?: string;
  gmtModified?: string;
  confirmIp?: string;
  static names(): { [key: string]: string } {
    return {
      verificationTime: 'VerificationTime',
      email: 'Email',
      emailVerificationNo: 'EmailVerificationNo',
      userId: 'UserId',
      gmtCreate: 'GmtCreate',
      verificationStatus: 'VerificationStatus',
      tokenSendTime: 'TokenSendTime',
      sendIp: 'SendIp',
      gmtModified: 'GmtModified',
      confirmIp: 'ConfirmIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationTime: 'string',
      email: 'string',
      emailVerificationNo: 'string',
      userId: 'string',
      gmtCreate: 'string',
      verificationStatus: 'number',
      tokenSendTime: 'string',
      sendIp: 'string',
      gmtModified: 'string',
      confirmIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerLockResponseBodyData extends $tea.Model {
  serverLockStatus?: string;
  lockInstanceId?: string;
  userId?: string;
  gmtCreate?: string;
  expireDate?: string;
  startDate?: string;
  lockProductId?: string;
  domainInstanceId?: string;
  gmtModified?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      serverLockStatus: 'ServerLockStatus',
      lockInstanceId: 'LockInstanceId',
      userId: 'UserId',
      gmtCreate: 'GmtCreate',
      expireDate: 'ExpireDate',
      startDate: 'StartDate',
      lockProductId: 'LockProductId',
      domainInstanceId: 'DomainInstanceId',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverLockStatus: 'string',
      lockInstanceId: 'string',
      userId: 'string',
      gmtCreate: 'string',
      expireDate: 'string',
      startDate: 'string',
      lockProductId: 'string',
      domainInstanceId: 'string',
      gmtModified: 'string',
      domainName: 'string',
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
  sp?: string;
  pc?: string;
  city?: string;
  street?: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      sp: 'Sp',
      pc: 'Pc',
      city: 'City',
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      sp: 'string',
      pc: 'string',
      city: 'string',
      street: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContactsContact extends $tea.Model {
  type?: string;
  voice?: string;
  email?: string;
  fax?: string;
  addr?: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr;
  org?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      voice: 'Voice',
      email: 'Email',
      fax: 'Fax',
      addr: 'Addr',
      org: 'Org',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      voice: 'string',
      email: 'string',
      fax: 'string',
      addr: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr,
      org: 'string',
      name: 'string',
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
  sp?: string;
  pc?: string;
  city?: string;
  street?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      sp: 'Sp',
      pc: 'Pc',
      city: 'City',
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      sp: 'string',
      pc: 'string',
      city: 'string',
      street: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHoldersHolder extends $tea.Model {
  entitlement?: string;
  addr?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr;
  org?: string;
  static names(): { [key: string]: string } {
    return {
      entitlement: 'Entitlement',
      addr: 'Addr',
      org: 'Org',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entitlement: 'string',
      addr: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr,
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
  jurCC?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      jurCC: 'JurCC',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jurCC: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaim extends $tea.Model {
  goodsAndServices?: string;
  contacts?: LookupTmchNoticeResponseBodyClaimsClaimContacts;
  markName?: string;
  classDescs?: LookupTmchNoticeResponseBodyClaimsClaimClassDescs;
  holders?: LookupTmchNoticeResponseBodyClaimsClaimHolders;
  jurDesc?: LookupTmchNoticeResponseBodyClaimsClaimJurDesc;
  static names(): { [key: string]: string } {
    return {
      goodsAndServices: 'GoodsAndServices',
      contacts: 'Contacts',
      markName: 'MarkName',
      classDescs: 'ClassDescs',
      holders: 'Holders',
      jurDesc: 'JurDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goodsAndServices: 'string',
      contacts: LookupTmchNoticeResponseBodyClaimsClaimContacts,
      markName: 'string',
      classDescs: LookupTmchNoticeResponseBodyClaimsClaimClassDescs,
      holders: LookupTmchNoticeResponseBodyClaimsClaimHolders,
      jurDesc: LookupTmchNoticeResponseBodyClaimsClaimJurDesc,
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
  updateTime?: string;
  taskDetailNo?: string;
  createTime?: string;
  instanceId?: string;
  domainName?: string;
  taskType?: string;
  taskNo?: string;
  taskResult?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      taskDetailNo: 'TaskDetailNo',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskResult: 'TaskResult',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      taskDetailNo: 'string',
      createTime: 'string',
      instanceId: 'string',
      domainName: 'string',
      taskType: 'string',
      taskNo: 'string',
      taskResult: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      errorMsg: 'string',
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

export class QueryAdvancedDomainListResponseBodyDataDomainDnsList extends $tea.Model {
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

export class QueryAdvancedDomainListResponseBodyDataDomain extends $tea.Model {
  domainAuditStatus?: string;
  domainGroupId?: string;
  remark?: string;
  domainGroupName?: string;
  zhRegistrantOrganization?: string;
  registrantOrganization?: string;
  registrationDate?: string;
  instanceId?: string;
  domainName?: string;
  expirationDateStatus?: string;
  expirationDate?: string;
  dnsList?: QueryAdvancedDomainListResponseBodyDataDomainDnsList;
  email?: string;
  registrantType?: string;
  expirationDateLong?: number;
  expirationCurrDateDiff?: number;
  premium?: boolean;
  registrationDateLong?: number;
  productId?: string;
  domainStatus?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      remark: 'Remark',
      domainGroupName: 'DomainGroupName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      registrantOrganization: 'RegistrantOrganization',
      registrationDate: 'RegistrationDate',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      expirationDateStatus: 'ExpirationDateStatus',
      expirationDate: 'ExpirationDate',
      dnsList: 'DnsList',
      email: 'Email',
      registrantType: 'RegistrantType',
      expirationDateLong: 'ExpirationDateLong',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      premium: 'Premium',
      registrationDateLong: 'RegistrationDateLong',
      productId: 'ProductId',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      remark: 'string',
      domainGroupName: 'string',
      zhRegistrantOrganization: 'string',
      registrantOrganization: 'string',
      registrationDate: 'string',
      instanceId: 'string',
      domainName: 'string',
      expirationDateStatus: 'string',
      expirationDate: 'string',
      dnsList: QueryAdvancedDomainListResponseBodyDataDomainDnsList,
      email: 'string',
      registrantType: 'string',
      expirationDateLong: 'number',
      expirationCurrDateDiff: 'number',
      premium: 'boolean',
      registrationDateLong: 'number',
      productId: 'string',
      domainStatus: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListResponseBodyData extends $tea.Model {
  domain?: QueryAdvancedDomainListResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': QueryAdvancedDomainListResponseBodyDataDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChangeLogListResponseBodyDataChangeLog extends $tea.Model {
  operation?: string;
  time?: string;
  result?: string;
  domainName?: string;
  operationIPAddress?: string;
  details?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      time: 'Time',
      result: 'Result',
      domainName: 'DomainName',
      operationIPAddress: 'OperationIPAddress',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      time: 'string',
      result: 'string',
      domainName: 'string',
      operationIPAddress: 'string',
      details: 'string',
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

export class QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildrenChildren extends $tea.Model {
  childDivisionName?: string;
  static names(): { [key: string]: string } {
    return {
      childDivisionName: 'ChildDivisionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childDivisionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren extends $tea.Model {
  children?: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildrenChildren[];
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildrenChildren },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivision extends $tea.Model {
  divisionName?: string;
  children?: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren;
  static names(): { [key: string]: string } {
    return {
      divisionName: 'DivisionName',
      children: 'Children',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionName: 'string',
      children: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBodyAdminDivisions extends $tea.Model {
  adminDivision?: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivision[];
  static names(): { [key: string]: string } {
    return {
      adminDivision: 'AdminDivision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminDivision: { 'type': 'array', 'itemType': QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivision },
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

export class QueryDomainGroupListResponseBodyDataDomainGroup extends $tea.Model {
  beingDeleted?: boolean;
  domainGroupStatus?: string;
  domainGroupId?: string;
  domainGroupName?: string;
  modificationDate?: string;
  totalNumber?: number;
  creationDate?: string;
  static names(): { [key: string]: string } {
    return {
      beingDeleted: 'BeingDeleted',
      domainGroupStatus: 'DomainGroupStatus',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      modificationDate: 'ModificationDate',
      totalNumber: 'TotalNumber',
      creationDate: 'CreationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beingDeleted: 'boolean',
      domainGroupStatus: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      modificationDate: 'string',
      totalNumber: 'number',
      creationDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponseBodyData extends $tea.Model {
  domainGroup?: QueryDomainGroupListResponseBodyDataDomainGroup[];
  static names(): { [key: string]: string } {
    return {
      domainGroup: 'DomainGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroup: { 'type': 'array', 'itemType': QueryDomainGroupListResponseBodyDataDomainGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBodyDataDomain extends $tea.Model {
  domainAuditStatus?: string;
  domainGroupId?: string;
  remark?: string;
  domainGroupName?: string;
  registrationDate?: string;
  instanceId?: string;
  domainName?: string;
  expirationDateStatus?: string;
  expirationDate?: string;
  registrantType?: string;
  expirationDateLong?: number;
  expirationCurrDateDiff?: number;
  premium?: boolean;
  registrationDateLong?: number;
  productId?: string;
  domainStatus?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      remark: 'Remark',
      domainGroupName: 'DomainGroupName',
      registrationDate: 'RegistrationDate',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      expirationDateStatus: 'ExpirationDateStatus',
      expirationDate: 'ExpirationDate',
      registrantType: 'RegistrantType',
      expirationDateLong: 'ExpirationDateLong',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      premium: 'Premium',
      registrationDateLong: 'RegistrationDateLong',
      productId: 'ProductId',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      remark: 'string',
      domainGroupName: 'string',
      registrationDate: 'string',
      instanceId: 'string',
      domainName: 'string',
      expirationDateStatus: 'string',
      expirationDate: 'string',
      registrantType: 'string',
      expirationDateLong: 'number',
      expirationCurrDateDiff: 'number',
      premium: 'boolean',
      registrationDateLong: 'number',
      productId: 'string',
      domainStatus: 'string',
      domainType: 'string',
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

export class QueryDomainSuffixResponseBodySuffixList extends $tea.Model {
  suffix?: string[];
  static names(): { [key: string]: string } {
    return {
      suffix: 'Suffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suffix: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordResponseBodyDSRecordList extends $tea.Model {
  digestType?: number;
  digest?: string;
  algorithm?: number;
  keyTag?: number;
  static names(): { [key: string]: string } {
    return {
      digestType: 'DigestType',
      digest: 'Digest',
      algorithm: 'Algorithm',
      keyTag: 'KeyTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digestType: 'number',
      digest: 'string',
      algorithm: 'number',
      keyTag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailingReasonListForQualificationResponseBodyData extends $tea.Model {
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

export class QueryFailReasonForDomainRealNameVerificationResponseBodyData extends $tea.Model {
  date?: string;
  failReason?: string;
  domainNameVerificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      failReason: 'FailReason',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      failReason: 'string',
      domainNameVerificationStatus: 'string',
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

export class QueryOperationAuditInfoListResponseBodyData extends $tea.Model {
  updateTime?: number;
  remark?: string;
  createTime?: number;
  auditType?: number;
  businessName?: string;
  auditInfo?: string;
  domainName?: string;
  auditStatus?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      remark: 'Remark',
      createTime: 'CreateTime',
      auditType: 'AuditType',
      businessName: 'BusinessName',
      auditInfo: 'AuditInfo',
      domainName: 'DomainName',
      auditStatus: 'AuditStatus',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      remark: 'string',
      createTime: 'number',
      auditType: 'number',
      businessName: 'string',
      auditInfo: 'string',
      domainName: 'string',
      auditStatus: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponseBodyCredentialsQualificationCredential extends $tea.Model {
  credentialType?: string;
  credentialNo?: string;
  credentialUrl?: string;
  static names(): { [key: string]: string } {
    return {
      credentialType: 'CredentialType',
      credentialNo: 'CredentialNo',
      credentialUrl: 'CredentialUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialType: 'string',
      credentialNo: 'string',
      credentialUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponseBodyCredentials extends $tea.Model {
  qualificationCredential?: QueryQualificationDetailResponseBodyCredentialsQualificationCredential[];
  static names(): { [key: string]: string } {
    return {
      qualificationCredential: 'QualificationCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualificationCredential: { 'type': 'array', 'itemType': QueryQualificationDetailResponseBodyCredentialsQualificationCredential },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile extends $tea.Model {
  telExt?: string;
  updateTime?: string;
  zhProvince?: string;
  createTime?: string;
  telephone?: string;
  registrantOrganization?: string;
  city?: string;
  zhCity?: string;
  telArea?: string;
  address?: string;
  realNameStatus?: string;
  postalCode?: string;
  registrantProfileType?: string;
  registrantProfileId?: number;
  zhRegistrantOrganization?: string;
  defaultRegistrantProfile?: boolean;
  zhRegistrantName?: string;
  email?: string;
  registrantType?: string;
  country?: string;
  registrantName?: string;
  emailVerificationStatus?: number;
  zhAddress?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      telExt: 'TelExt',
      updateTime: 'UpdateTime',
      zhProvince: 'ZhProvince',
      createTime: 'CreateTime',
      telephone: 'Telephone',
      registrantOrganization: 'RegistrantOrganization',
      city: 'City',
      zhCity: 'ZhCity',
      telArea: 'TelArea',
      address: 'Address',
      realNameStatus: 'RealNameStatus',
      postalCode: 'PostalCode',
      registrantProfileType: 'RegistrantProfileType',
      registrantProfileId: 'RegistrantProfileId',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      zhRegistrantName: 'ZhRegistrantName',
      email: 'Email',
      registrantType: 'RegistrantType',
      country: 'Country',
      registrantName: 'RegistrantName',
      emailVerificationStatus: 'EmailVerificationStatus',
      zhAddress: 'ZhAddress',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telExt: 'string',
      updateTime: 'string',
      zhProvince: 'string',
      createTime: 'string',
      telephone: 'string',
      registrantOrganization: 'string',
      city: 'string',
      zhCity: 'string',
      telArea: 'string',
      address: 'string',
      realNameStatus: 'string',
      postalCode: 'string',
      registrantProfileType: 'string',
      registrantProfileId: 'number',
      zhRegistrantOrganization: 'string',
      defaultRegistrantProfile: 'boolean',
      zhRegistrantName: 'string',
      email: 'string',
      registrantType: 'string',
      country: 'string',
      registrantName: 'string',
      emailVerificationStatus: 'number',
      zhAddress: 'string',
      province: 'string',
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
  updateTime?: string;
  taskDetailNo?: string;
  createTime?: string;
  instanceId?: string;
  domainName?: string;
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      taskDetailNo: 'TaskDetailNo',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      taskDetailNo: 'string',
      createTime: 'string',
      instanceId: 'string',
      domainName: 'string',
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyObjects extends $tea.Model {
  updateTime?: string;
  taskDetailNo?: string;
  createTime?: string;
  instanceId?: string;
  domainName?: string;
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      taskDetailNo: 'TaskDetailNo',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      taskDetailNo: 'string',
      createTime: 'string',
      instanceId: 'string',
      domainName: 'string',
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyPrePageCursor extends $tea.Model {
  updateTime?: string;
  taskDetailNo?: string;
  createTime?: string;
  instanceId?: string;
  domainName?: string;
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      taskDetailNo: 'TaskDetailNo',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      taskDetailNo: 'string',
      createTime: 'string',
      instanceId: 'string',
      domainName: 'string',
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyNextPageCursor extends $tea.Model {
  updateTime?: string;
  taskDetailNo?: string;
  createTime?: string;
  instanceId?: string;
  domainName?: string;
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      taskDetailNo: 'TaskDetailNo',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      taskDetailNo: 'string',
      createTime: 'string',
      instanceId: 'string',
      domainName: 'string',
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListResponseBodyDataTaskDetail extends $tea.Model {
  updateTime?: string;
  taskDetailNo?: string;
  createTime?: string;
  instanceId?: string;
  domainName?: string;
  taskType?: string;
  taskNo?: string;
  taskResult?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      taskDetailNo: 'TaskDetailNo',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskResult: 'TaskResult',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      taskDetailNo: 'string',
      createTime: 'string',
      instanceId: 'string',
      domainName: 'string',
      taskType: 'string',
      taskNo: 'string',
      taskResult: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      errorMsg: 'string',
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
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  taskNum?: number;
  createTime?: string;
  createTimeLong?: number;
  clientip?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      taskNum: 'TaskNum',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      clientip: 'Clientip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      taskNum: 'number',
      createTime: 'string',
      createTimeLong: 'number',
      clientip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyObjects extends $tea.Model {
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  taskNum?: number;
  createTime?: string;
  createTimeLong?: number;
  clientip?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      taskNum: 'TaskNum',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      clientip: 'Clientip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      taskNum: 'number',
      createTime: 'string',
      createTimeLong: 'number',
      clientip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyPrePageCursor extends $tea.Model {
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  taskNum?: number;
  createTime?: string;
  createTimeLong?: number;
  clientip?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      taskNum: 'TaskNum',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      clientip: 'Clientip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      taskNum: 'number',
      createTime: 'string',
      createTimeLong: 'number',
      clientip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyNextPageCursor extends $tea.Model {
  taskType?: string;
  taskNo?: string;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  taskNum?: number;
  createTime?: string;
  createTimeLong?: number;
  clientip?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      taskNo: 'TaskNo',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      taskNum: 'TaskNum',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      clientip: 'Clientip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      taskNo: 'string',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      taskNum: 'number',
      createTime: 'string',
      createTimeLong: 'number',
      clientip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskListResponseBodyDataTaskInfo extends $tea.Model {
  taskType?: string;
  taskCancelStatus?: string;
  taskNo?: string;
  taskCancelStatusCode?: number;
  taskStatusCode?: number;
  taskStatus?: string;
  taskTypeDescription?: string;
  taskNum?: number;
  createTime?: string;
  clientip?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      taskCancelStatus: 'TaskCancelStatus',
      taskNo: 'TaskNo',
      taskCancelStatusCode: 'TaskCancelStatusCode',
      taskStatusCode: 'TaskStatusCode',
      taskStatus: 'TaskStatus',
      taskTypeDescription: 'TaskTypeDescription',
      taskNum: 'TaskNum',
      createTime: 'CreateTime',
      clientip: 'Clientip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      taskCancelStatus: 'string',
      taskNo: 'string',
      taskCancelStatusCode: 'number',
      taskStatusCode: 'number',
      taskStatus: 'string',
      taskTypeDescription: 'string',
      taskNum: 'number',
      createTime: 'string',
      clientip: 'string',
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
  status?: number;
  userId?: string;
  modificationDate?: string;
  transferAuthorizationCodeSubmissionDateLong?: number;
  submissionDateLong?: number;
  resultCode?: string;
  needMailCheck?: boolean;
  modificationDateLong?: number;
  instanceId?: string;
  domainName?: string;
  progressBarType?: number;
  resultMsg?: string;
  resultDateLong?: number;
  expirationDate?: string;
  email?: string;
  whoisMailStatus?: boolean;
  transferAuthorizationCodeSubmissionDate?: string;
  submissionDate?: string;
  expirationDateLong?: number;
  simpleTransferInStatus?: string;
  resultDate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userId: 'UserId',
      modificationDate: 'ModificationDate',
      transferAuthorizationCodeSubmissionDateLong: 'TransferAuthorizationCodeSubmissionDateLong',
      submissionDateLong: 'SubmissionDateLong',
      resultCode: 'ResultCode',
      needMailCheck: 'NeedMailCheck',
      modificationDateLong: 'ModificationDateLong',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      progressBarType: 'ProgressBarType',
      resultMsg: 'ResultMsg',
      resultDateLong: 'ResultDateLong',
      expirationDate: 'ExpirationDate',
      email: 'Email',
      whoisMailStatus: 'WhoisMailStatus',
      transferAuthorizationCodeSubmissionDate: 'TransferAuthorizationCodeSubmissionDate',
      submissionDate: 'SubmissionDate',
      expirationDateLong: 'ExpirationDateLong',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      resultDate: 'ResultDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      userId: 'string',
      modificationDate: 'string',
      transferAuthorizationCodeSubmissionDateLong: 'number',
      submissionDateLong: 'number',
      resultCode: 'string',
      needMailCheck: 'boolean',
      modificationDateLong: 'number',
      instanceId: 'string',
      domainName: 'string',
      progressBarType: 'number',
      resultMsg: 'string',
      resultDateLong: 'number',
      expirationDate: 'string',
      email: 'string',
      whoisMailStatus: 'boolean',
      transferAuthorizationCodeSubmissionDate: 'string',
      submissionDate: 'string',
      expirationDateLong: 'number',
      simpleTransferInStatus: 'string',
      resultDate: 'string',
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

export class ResendEmailVerificationResponseBodySuccessList extends $tea.Model {
  email?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponseBodyFailList extends $tea.Model {
  email?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam extends $tea.Model {
  telExt?: string;
  aliyunDns?: boolean;
  permitPremiumActivation?: boolean;
  zhProvince?: string;
  telephone?: string;
  registrantOrganization?: string;
  city?: string;
  domainName?: string;
  zhCity?: string;
  dns1?: string;
  telArea?: string;
  address?: string;
  enableDomainProxy?: boolean;
  postalCode?: string;
  registrantProfileId?: number;
  zhRegistrantOrganization?: string;
  trademarkDomainActivation?: boolean;
  dns2?: string;
  zhRegistrantName?: string;
  email?: string;
  registrantType?: string;
  country?: string;
  registrantName?: string;
  subscriptionDuration?: number;
  zhAddress?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      telExt: 'TelExt',
      aliyunDns: 'AliyunDns',
      permitPremiumActivation: 'PermitPremiumActivation',
      zhProvince: 'ZhProvince',
      telephone: 'Telephone',
      registrantOrganization: 'RegistrantOrganization',
      city: 'City',
      domainName: 'DomainName',
      zhCity: 'ZhCity',
      dns1: 'Dns1',
      telArea: 'TelArea',
      address: 'Address',
      enableDomainProxy: 'EnableDomainProxy',
      postalCode: 'PostalCode',
      registrantProfileId: 'RegistrantProfileId',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      trademarkDomainActivation: 'TrademarkDomainActivation',
      dns2: 'Dns2',
      zhRegistrantName: 'ZhRegistrantName',
      email: 'Email',
      registrantType: 'RegistrantType',
      country: 'Country',
      registrantName: 'RegistrantName',
      subscriptionDuration: 'SubscriptionDuration',
      zhAddress: 'ZhAddress',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telExt: 'string',
      aliyunDns: 'boolean',
      permitPremiumActivation: 'boolean',
      zhProvince: 'string',
      telephone: 'string',
      registrantOrganization: 'string',
      city: 'string',
      domainName: 'string',
      zhCity: 'string',
      dns1: 'string',
      telArea: 'string',
      address: 'string',
      enableDomainProxy: 'boolean',
      postalCode: 'string',
      registrantProfileId: 'number',
      zhRegistrantOrganization: 'string',
      trademarkDomainActivation: 'boolean',
      dns2: 'string',
      zhRegistrantName: 'string',
      email: 'string',
      registrantType: 'string',
      country: 'string',
      registrantName: 'string',
      subscriptionDuration: 'number',
      zhAddress: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam extends $tea.Model {
  domainName?: string;
  currentExpirationDate?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      currentExpirationDate: 'CurrentExpirationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      currentExpirationDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam extends $tea.Model {
  subscriptionDuration?: number;
  domainName?: string;
  currentExpirationDate?: number;
  static names(): { [key: string]: string } {
    return {
      subscriptionDuration: 'SubscriptionDuration',
      domainName: 'DomainName',
      currentExpirationDate: 'CurrentExpirationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDuration: 'number',
      domainName: 'string',
      currentExpirationDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam extends $tea.Model {
  permitPremiumTransfer?: boolean;
  registrantProfileId?: number;
  authorizationCode?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      permitPremiumTransfer: 'PermitPremiumTransfer',
      registrantProfileId: 'RegistrantProfileId',
      authorizationCode: 'AuthorizationCode',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permitPremiumTransfer: 'boolean',
      registrantProfileId: 'number',
      authorizationCode: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBodyDataDomainDnsList extends $tea.Model {
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

export class ScrollDomainListResponseBodyDataDomain extends $tea.Model {
  domainAuditStatus?: string;
  domainGroupId?: string;
  remark?: string;
  domainGroupName?: string;
  zhRegistrantOrganization?: string;
  registrantOrganization?: string;
  registrationDate?: string;
  instanceId?: string;
  domainName?: string;
  expirationDateStatus?: string;
  expirationDate?: string;
  dnsList?: ScrollDomainListResponseBodyDataDomainDnsList;
  email?: string;
  registrantType?: string;
  expirationDateLong?: number;
  expirationCurrDateDiff?: number;
  premium?: boolean;
  registrationDateLong?: number;
  productId?: string;
  domainStatus?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      remark: 'Remark',
      domainGroupName: 'DomainGroupName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
      registrantOrganization: 'RegistrantOrganization',
      registrationDate: 'RegistrationDate',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      expirationDateStatus: 'ExpirationDateStatus',
      expirationDate: 'ExpirationDate',
      dnsList: 'DnsList',
      email: 'Email',
      registrantType: 'RegistrantType',
      expirationDateLong: 'ExpirationDateLong',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      premium: 'Premium',
      registrationDateLong: 'RegistrationDateLong',
      productId: 'ProductId',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      remark: 'string',
      domainGroupName: 'string',
      zhRegistrantOrganization: 'string',
      registrantOrganization: 'string',
      registrationDate: 'string',
      instanceId: 'string',
      domainName: 'string',
      expirationDateStatus: 'string',
      expirationDate: 'string',
      dnsList: ScrollDomainListResponseBodyDataDomainDnsList,
      email: 'string',
      registrantType: 'string',
      expirationDateLong: 'number',
      expirationCurrDateDiff: 'number',
      premium: 'boolean',
      registrationDateLong: 'number',
      productId: 'string',
      domainStatus: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBodyData extends $tea.Model {
  domain?: ScrollDomainListResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': ScrollDomainListResponseBodyDataDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBodyExistList extends $tea.Model {
  email?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBodySuccessList extends $tea.Model {
  email?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEmailVerificationResponseBodyFailList extends $tea.Model {
  email?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      code: 'string',
      message: 'string',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("domain", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acknowledgeTaskResultWithOptions(request: AcknowledgeTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<AcknowledgeTaskResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AcknowledgeTaskResultResponse>(await this.doRPCRequest("AcknowledgeTaskResult", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new AcknowledgeTaskResultResponse({}));
  }

  async acknowledgeTaskResult(request: AcknowledgeTaskResultRequest): Promise<AcknowledgeTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acknowledgeTaskResultWithOptions(request, runtime);
  }

  async batchFuzzyMatchDomainSensitiveWordWithOptions(request: BatchFuzzyMatchDomainSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<BatchFuzzyMatchDomainSensitiveWordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchFuzzyMatchDomainSensitiveWordResponse>(await this.doRPCRequest("BatchFuzzyMatchDomainSensitiveWord", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new BatchFuzzyMatchDomainSensitiveWordResponse({}));
  }

  async batchFuzzyMatchDomainSensitiveWord(request: BatchFuzzyMatchDomainSensitiveWordRequest): Promise<BatchFuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchFuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  async cancelDomainVerificationWithOptions(request: CancelDomainVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CancelDomainVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelDomainVerificationResponse>(await this.doRPCRequest("CancelDomainVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CancelDomainVerificationResponse({}));
  }

  async cancelDomainVerification(request: CancelDomainVerificationRequest): Promise<CancelDomainVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelDomainVerificationWithOptions(request, runtime);
  }

  async cancelOperationAuditWithOptions(request: CancelOperationAuditRequest, runtime: $Util.RuntimeOptions): Promise<CancelOperationAuditResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOperationAuditResponse>(await this.doRPCRequest("CancelOperationAudit", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOperationAuditResponse({}));
  }

  async cancelOperationAudit(request: CancelOperationAuditRequest): Promise<CancelOperationAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOperationAuditWithOptions(request, runtime);
  }

  async cancelQualificationVerificationWithOptions(request: CancelQualificationVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CancelQualificationVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelQualificationVerificationResponse>(await this.doRPCRequest("CancelQualificationVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CancelQualificationVerificationResponse({}));
  }

  async cancelQualificationVerification(request: CancelQualificationVerificationRequest): Promise<CancelQualificationVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelQualificationVerificationWithOptions(request, runtime);
  }

  async cancelTaskWithOptions(request: CancelTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelTaskResponse>(await this.doRPCRequest("CancelTask", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CancelTaskResponse({}));
  }

  async cancelTask(request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  async checkDomainWithOptions(request: CheckDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDomainResponse>(await this.doRPCRequest("CheckDomain", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDomainResponse({}));
  }

  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  async checkDomainSunriseClaimWithOptions(request: CheckDomainSunriseClaimRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainSunriseClaimResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDomainSunriseClaimResponse>(await this.doRPCRequest("CheckDomainSunriseClaim", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDomainSunriseClaimResponse({}));
  }

  async checkDomainSunriseClaim(request: CheckDomainSunriseClaimRequest): Promise<CheckDomainSunriseClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainSunriseClaimWithOptions(request, runtime);
  }

  async checkMaxYearOfServerLockWithOptions(request: CheckMaxYearOfServerLockRequest, runtime: $Util.RuntimeOptions): Promise<CheckMaxYearOfServerLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckMaxYearOfServerLockResponse>(await this.doRPCRequest("CheckMaxYearOfServerLock", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CheckMaxYearOfServerLockResponse({}));
  }

  async checkMaxYearOfServerLock(request: CheckMaxYearOfServerLockRequest): Promise<CheckMaxYearOfServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMaxYearOfServerLockWithOptions(request, runtime);
  }

  async checkProcessingServerLockApplyWithOptions(request: CheckProcessingServerLockApplyRequest, runtime: $Util.RuntimeOptions): Promise<CheckProcessingServerLockApplyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckProcessingServerLockApplyResponse>(await this.doRPCRequest("CheckProcessingServerLockApply", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CheckProcessingServerLockApplyResponse({}));
  }

  async checkProcessingServerLockApply(request: CheckProcessingServerLockApplyRequest): Promise<CheckProcessingServerLockApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkProcessingServerLockApplyWithOptions(request, runtime);
  }

  async checkTransferInFeasibilityWithOptions(request: CheckTransferInFeasibilityRequest, runtime: $Util.RuntimeOptions): Promise<CheckTransferInFeasibilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckTransferInFeasibilityResponse>(await this.doRPCRequest("CheckTransferInFeasibility", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new CheckTransferInFeasibilityResponse({}));
  }

  async checkTransferInFeasibility(request: CheckTransferInFeasibilityRequest): Promise<CheckTransferInFeasibilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTransferInFeasibilityWithOptions(request, runtime);
  }

  async confirmTransferInEmailWithOptions(request: ConfirmTransferInEmailRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmTransferInEmailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmTransferInEmailResponse>(await this.doRPCRequest("ConfirmTransferInEmail", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmTransferInEmailResponse({}));
  }

  async confirmTransferInEmail(request: ConfirmTransferInEmailRequest): Promise<ConfirmTransferInEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmTransferInEmailWithOptions(request, runtime);
  }

  async deleteDomainGroupWithOptions(request: DeleteDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainGroupResponse>(await this.doRPCRequest("DeleteDomainGroup", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainGroupResponse({}));
  }

  async deleteDomainGroup(request: DeleteDomainGroupRequest): Promise<DeleteDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainGroupWithOptions(request, runtime);
  }

  async deleteEmailVerificationWithOptions(request: DeleteEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEmailVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEmailVerificationResponse>(await this.doRPCRequest("DeleteEmailVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEmailVerificationResponse({}));
  }

  async deleteEmailVerification(request: DeleteEmailVerificationRequest): Promise<DeleteEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEmailVerificationWithOptions(request, runtime);
  }

  async deleteRegistrantProfileWithOptions(request: DeleteRegistrantProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRegistrantProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRegistrantProfileResponse>(await this.doRPCRequest("DeleteRegistrantProfile", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRegistrantProfileResponse({}));
  }

  async deleteRegistrantProfile(request: DeleteRegistrantProfileRequest): Promise<DeleteRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRegistrantProfileWithOptions(request, runtime);
  }

  async emailVerifiedWithOptions(request: EmailVerifiedRequest, runtime: $Util.RuntimeOptions): Promise<EmailVerifiedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EmailVerifiedResponse>(await this.doRPCRequest("EmailVerified", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new EmailVerifiedResponse({}));
  }

  async emailVerified(request: EmailVerifiedRequest): Promise<EmailVerifiedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emailVerifiedWithOptions(request, runtime);
  }

  async fuzzyMatchDomainSensitiveWordWithOptions(request: FuzzyMatchDomainSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<FuzzyMatchDomainSensitiveWordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FuzzyMatchDomainSensitiveWordResponse>(await this.doRPCRequest("FuzzyMatchDomainSensitiveWord", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new FuzzyMatchDomainSensitiveWordResponse({}));
  }

  async fuzzyMatchDomainSensitiveWord(request: FuzzyMatchDomainSensitiveWordRequest): Promise<FuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  async getOperationOssUploadPolicyWithOptions(request: GetOperationOssUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetOperationOssUploadPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOperationOssUploadPolicyResponse>(await this.doRPCRequest("GetOperationOssUploadPolicy", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new GetOperationOssUploadPolicyResponse({}));
  }

  async getOperationOssUploadPolicy(request: GetOperationOssUploadPolicyRequest): Promise<GetOperationOssUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationOssUploadPolicyWithOptions(request, runtime);
  }

  async getQualificationUploadPolicyWithOptions(request: GetQualificationUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetQualificationUploadPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualificationUploadPolicyResponse>(await this.doRPCRequest("GetQualificationUploadPolicy", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualificationUploadPolicyResponse({}));
  }

  async getQualificationUploadPolicy(request: GetQualificationUploadPolicyRequest): Promise<GetQualificationUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualificationUploadPolicyWithOptions(request, runtime);
  }

  async listEmailVerificationWithOptions(request: ListEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<ListEmailVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEmailVerificationResponse>(await this.doRPCRequest("ListEmailVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListEmailVerificationResponse({}));
  }

  async listEmailVerification(request: ListEmailVerificationRequest): Promise<ListEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmailVerificationWithOptions(request, runtime);
  }

  async listServerLockWithOptions(request: ListServerLockRequest, runtime: $Util.RuntimeOptions): Promise<ListServerLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServerLockResponse>(await this.doRPCRequest("ListServerLock", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListServerLockResponse({}));
  }

  async listServerLock(request: ListServerLockRequest): Promise<ListServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerLockWithOptions(request, runtime);
  }

  async lookupTmchNoticeWithOptions(request: LookupTmchNoticeRequest, runtime: $Util.RuntimeOptions): Promise<LookupTmchNoticeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LookupTmchNoticeResponse>(await this.doRPCRequest("LookupTmchNotice", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new LookupTmchNoticeResponse({}));
  }

  async lookupTmchNotice(request: LookupTmchNoticeRequest): Promise<LookupTmchNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupTmchNoticeWithOptions(request, runtime);
  }

  async pollTaskResultWithOptions(request: PollTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<PollTaskResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PollTaskResultResponse>(await this.doRPCRequest("PollTaskResult", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new PollTaskResultResponse({}));
  }

  async pollTaskResult(request: PollTaskResultRequest): Promise<PollTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pollTaskResultWithOptions(request, runtime);
  }

  async queryAdvancedDomainListWithOptions(request: QueryAdvancedDomainListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAdvancedDomainListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAdvancedDomainListResponse>(await this.doRPCRequest("QueryAdvancedDomainList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAdvancedDomainListResponse({}));
  }

  async queryAdvancedDomainList(request: QueryAdvancedDomainListRequest): Promise<QueryAdvancedDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAdvancedDomainListWithOptions(request, runtime);
  }

  async queryArtExtensionWithOptions(request: QueryArtExtensionRequest, runtime: $Util.RuntimeOptions): Promise<QueryArtExtensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryArtExtensionResponse>(await this.doRPCRequest("QueryArtExtension", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryArtExtensionResponse({}));
  }

  async queryArtExtension(request: QueryArtExtensionRequest): Promise<QueryArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryArtExtensionWithOptions(request, runtime);
  }

  async queryChangeLogListWithOptions(request: QueryChangeLogListRequest, runtime: $Util.RuntimeOptions): Promise<QueryChangeLogListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryChangeLogListResponse>(await this.doRPCRequest("QueryChangeLogList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryChangeLogListResponse({}));
  }

  async queryChangeLogList(request: QueryChangeLogListRequest): Promise<QueryChangeLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChangeLogListWithOptions(request, runtime);
  }

  async queryContactInfoWithOptions(request: QueryContactInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryContactInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryContactInfoResponse>(await this.doRPCRequest("QueryContactInfo", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryContactInfoResponse({}));
  }

  async queryContactInfo(request: QueryContactInfoRequest): Promise<QueryContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryContactInfoWithOptions(request, runtime);
  }

  async queryDnsHostWithOptions(request: QueryDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<QueryDnsHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDnsHostResponse>(await this.doRPCRequest("QueryDnsHost", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDnsHostResponse({}));
  }

  async queryDnsHost(request: QueryDnsHostRequest): Promise<QueryDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDnsHostWithOptions(request, runtime);
  }

  async queryDomainAdminDivisionWithOptions(request: QueryDomainAdminDivisionRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainAdminDivisionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainAdminDivisionResponse>(await this.doRPCRequest("QueryDomainAdminDivision", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainAdminDivisionResponse({}));
  }

  async queryDomainAdminDivision(request: QueryDomainAdminDivisionRequest): Promise<QueryDomainAdminDivisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainAdminDivisionWithOptions(request, runtime);
  }

  async queryDomainByDomainNameWithOptions(request: QueryDomainByDomainNameRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainByDomainNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainByDomainNameResponse>(await this.doRPCRequest("QueryDomainByDomainName", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainByDomainNameResponse({}));
  }

  async queryDomainByDomainName(request: QueryDomainByDomainNameRequest): Promise<QueryDomainByDomainNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByDomainNameWithOptions(request, runtime);
  }

  async queryDomainByInstanceIdWithOptions(request: QueryDomainByInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainByInstanceIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainByInstanceIdResponse>(await this.doRPCRequest("QueryDomainByInstanceId", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainByInstanceIdResponse({}));
  }

  async queryDomainByInstanceId(request: QueryDomainByInstanceIdRequest): Promise<QueryDomainByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByInstanceIdWithOptions(request, runtime);
  }

  async queryDomainGroupListWithOptions(request: QueryDomainGroupListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainGroupListResponse>(await this.doRPCRequest("QueryDomainGroupList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainGroupListResponse({}));
  }

  async queryDomainGroupList(request: QueryDomainGroupListRequest): Promise<QueryDomainGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainGroupListWithOptions(request, runtime);
  }

  async queryDomainListWithOptions(request: QueryDomainListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainListResponse>(await this.doRPCRequest("QueryDomainList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainListResponse({}));
  }

  async queryDomainList(request: QueryDomainListRequest): Promise<QueryDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainListWithOptions(request, runtime);
  }

  async queryDomainRealNameVerificationInfoWithOptions(request: QueryDomainRealNameVerificationInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainRealNameVerificationInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainRealNameVerificationInfoResponse>(await this.doRPCRequest("QueryDomainRealNameVerificationInfo", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainRealNameVerificationInfoResponse({}));
  }

  async queryDomainRealNameVerificationInfo(request: QueryDomainRealNameVerificationInfoRequest): Promise<QueryDomainRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainRealNameVerificationInfoWithOptions(request, runtime);
  }

  async queryDomainSuffixWithOptions(request: QueryDomainSuffixRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainSuffixResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainSuffixResponse>(await this.doRPCRequest("QueryDomainSuffix", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainSuffixResponse({}));
  }

  async queryDomainSuffix(request: QueryDomainSuffixRequest): Promise<QueryDomainSuffixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainSuffixWithOptions(request, runtime);
  }

  async queryDSRecordWithOptions(request: QueryDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryDSRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDSRecordResponse>(await this.doRPCRequest("QueryDSRecord", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDSRecordResponse({}));
  }

  async queryDSRecord(request: QueryDSRecordRequest): Promise<QueryDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDSRecordWithOptions(request, runtime);
  }

  async queryEmailVerificationWithOptions(request: QueryEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryEmailVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEmailVerificationResponse>(await this.doRPCRequest("QueryEmailVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEmailVerificationResponse({}));
  }

  async queryEmailVerification(request: QueryEmailVerificationRequest): Promise<QueryEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEmailVerificationWithOptions(request, runtime);
  }

  async queryEnsAssociationWithOptions(request: QueryEnsAssociationRequest, runtime: $Util.RuntimeOptions): Promise<QueryEnsAssociationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEnsAssociationResponse>(await this.doRPCRequest("QueryEnsAssociation", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEnsAssociationResponse({}));
  }

  async queryEnsAssociation(request: QueryEnsAssociationRequest): Promise<QueryEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEnsAssociationWithOptions(request, runtime);
  }

  async queryFailingReasonListForQualificationWithOptions(request: QueryFailingReasonListForQualificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFailingReasonListForQualificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFailingReasonListForQualificationResponse>(await this.doRPCRequest("QueryFailingReasonListForQualification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFailingReasonListForQualificationResponse({}));
  }

  async queryFailingReasonListForQualification(request: QueryFailingReasonListForQualificationRequest): Promise<QueryFailingReasonListForQualificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailingReasonListForQualificationWithOptions(request, runtime);
  }

  async queryFailReasonForDomainRealNameVerificationWithOptions(request: QueryFailReasonForDomainRealNameVerificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFailReasonForDomainRealNameVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFailReasonForDomainRealNameVerificationResponse>(await this.doRPCRequest("QueryFailReasonForDomainRealNameVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFailReasonForDomainRealNameVerificationResponse({}));
  }

  async queryFailReasonForDomainRealNameVerification(request: QueryFailReasonForDomainRealNameVerificationRequest): Promise<QueryFailReasonForDomainRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForDomainRealNameVerificationWithOptions(request, runtime);
  }

  async queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request: QueryFailReasonForRegistrantProfileRealNameVerificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFailReasonForRegistrantProfileRealNameVerificationResponse>(await this.doRPCRequest("QueryFailReasonForRegistrantProfileRealNameVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFailReasonForRegistrantProfileRealNameVerificationResponse({}));
  }

  async queryFailReasonForRegistrantProfileRealNameVerification(request: QueryFailReasonForRegistrantProfileRealNameVerificationRequest): Promise<QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  async queryLocalEnsAssociationWithOptions(request: QueryLocalEnsAssociationRequest, runtime: $Util.RuntimeOptions): Promise<QueryLocalEnsAssociationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryLocalEnsAssociationResponse>(await this.doRPCRequest("QueryLocalEnsAssociation", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryLocalEnsAssociationResponse({}));
  }

  async queryLocalEnsAssociation(request: QueryLocalEnsAssociationRequest): Promise<QueryLocalEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLocalEnsAssociationWithOptions(request, runtime);
  }

  async queryOperationAuditInfoDetailWithOptions(request: QueryOperationAuditInfoDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryOperationAuditInfoDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOperationAuditInfoDetailResponse>(await this.doRPCRequest("QueryOperationAuditInfoDetail", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOperationAuditInfoDetailResponse({}));
  }

  async queryOperationAuditInfoDetail(request: QueryOperationAuditInfoDetailRequest): Promise<QueryOperationAuditInfoDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOperationAuditInfoDetailWithOptions(request, runtime);
  }

  async queryOperationAuditInfoListWithOptions(request: QueryOperationAuditInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOperationAuditInfoListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOperationAuditInfoListResponse>(await this.doRPCRequest("QueryOperationAuditInfoList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOperationAuditInfoListResponse({}));
  }

  async queryOperationAuditInfoList(request: QueryOperationAuditInfoListRequest): Promise<QueryOperationAuditInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOperationAuditInfoListWithOptions(request, runtime);
  }

  async queryQualificationDetailWithOptions(request: QueryQualificationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryQualificationDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryQualificationDetailResponse>(await this.doRPCRequest("QueryQualificationDetail", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryQualificationDetailResponse({}));
  }

  async queryQualificationDetail(request: QueryQualificationDetailRequest): Promise<QueryQualificationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryQualificationDetailWithOptions(request, runtime);
  }

  async queryRegistrantProfileRealNameVerificationInfoWithOptions(request: QueryRegistrantProfileRealNameVerificationInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryRegistrantProfileRealNameVerificationInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRegistrantProfileRealNameVerificationInfoResponse>(await this.doRPCRequest("QueryRegistrantProfileRealNameVerificationInfo", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRegistrantProfileRealNameVerificationInfoResponse({}));
  }

  async queryRegistrantProfileRealNameVerificationInfo(request: QueryRegistrantProfileRealNameVerificationInfoRequest): Promise<QueryRegistrantProfileRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfileRealNameVerificationInfoWithOptions(request, runtime);
  }

  async queryRegistrantProfilesWithOptions(request: QueryRegistrantProfilesRequest, runtime: $Util.RuntimeOptions): Promise<QueryRegistrantProfilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRegistrantProfilesResponse>(await this.doRPCRequest("QueryRegistrantProfiles", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRegistrantProfilesResponse({}));
  }

  async queryRegistrantProfiles(request: QueryRegistrantProfilesRequest): Promise<QueryRegistrantProfilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfilesWithOptions(request, runtime);
  }

  async queryServerLockWithOptions(request: QueryServerLockRequest, runtime: $Util.RuntimeOptions): Promise<QueryServerLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryServerLockResponse>(await this.doRPCRequest("QueryServerLock", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryServerLockResponse({}));
  }

  async queryServerLock(request: QueryServerLockRequest): Promise<QueryServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServerLockWithOptions(request, runtime);
  }

  async queryTaskDetailHistoryWithOptions(request: QueryTaskDetailHistoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskDetailHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskDetailHistoryResponse>(await this.doRPCRequest("QueryTaskDetailHistory", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskDetailHistoryResponse({}));
  }

  async queryTaskDetailHistory(request: QueryTaskDetailHistoryRequest): Promise<QueryTaskDetailHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailHistoryWithOptions(request, runtime);
  }

  async queryTaskDetailListWithOptions(request: QueryTaskDetailListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskDetailListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskDetailListResponse>(await this.doRPCRequest("QueryTaskDetailList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskDetailListResponse({}));
  }

  async queryTaskDetailList(request: QueryTaskDetailListRequest): Promise<QueryTaskDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailListWithOptions(request, runtime);
  }

  async queryTaskInfoHistoryWithOptions(request: QueryTaskInfoHistoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskInfoHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskInfoHistoryResponse>(await this.doRPCRequest("QueryTaskInfoHistory", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskInfoHistoryResponse({}));
  }

  async queryTaskInfoHistory(request: QueryTaskInfoHistoryRequest): Promise<QueryTaskInfoHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskInfoHistoryWithOptions(request, runtime);
  }

  async queryTaskListWithOptions(request: QueryTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskListResponse>(await this.doRPCRequest("QueryTaskList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskListResponse({}));
  }

  async queryTaskList(request: QueryTaskListRequest): Promise<QueryTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  async queryTransferInByInstanceIdWithOptions(request: QueryTransferInByInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferInByInstanceIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTransferInByInstanceIdResponse>(await this.doRPCRequest("QueryTransferInByInstanceId", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTransferInByInstanceIdResponse({}));
  }

  async queryTransferInByInstanceId(request: QueryTransferInByInstanceIdRequest): Promise<QueryTransferInByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInByInstanceIdWithOptions(request, runtime);
  }

  async queryTransferInListWithOptions(request: QueryTransferInListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferInListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTransferInListResponse>(await this.doRPCRequest("QueryTransferInList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTransferInListResponse({}));
  }

  async queryTransferInList(request: QueryTransferInListRequest): Promise<QueryTransferInListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInListWithOptions(request, runtime);
  }

  async queryTransferOutInfoWithOptions(request: QueryTransferOutInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferOutInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTransferOutInfoResponse>(await this.doRPCRequest("QueryTransferOutInfo", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTransferOutInfoResponse({}));
  }

  async queryTransferOutInfo(request: QueryTransferOutInfoRequest): Promise<QueryTransferOutInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferOutInfoWithOptions(request, runtime);
  }

  async registrantProfileRealNameVerificationWithOptions(request: RegistrantProfileRealNameVerificationRequest, runtime: $Util.RuntimeOptions): Promise<RegistrantProfileRealNameVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegistrantProfileRealNameVerificationResponse>(await this.doRPCRequest("RegistrantProfileRealNameVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new RegistrantProfileRealNameVerificationResponse({}));
  }

  async registrantProfileRealNameVerification(request: RegistrantProfileRealNameVerificationRequest): Promise<RegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  async resendEmailVerificationWithOptions(request: ResendEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<ResendEmailVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResendEmailVerificationResponse>(await this.doRPCRequest("ResendEmailVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new ResendEmailVerificationResponse({}));
  }

  async resendEmailVerification(request: ResendEmailVerificationRequest): Promise<ResendEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendEmailVerificationWithOptions(request, runtime);
  }

  async resetQualificationVerificationWithOptions(request: ResetQualificationVerificationRequest, runtime: $Util.RuntimeOptions): Promise<ResetQualificationVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetQualificationVerificationResponse>(await this.doRPCRequest("ResetQualificationVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new ResetQualificationVerificationResponse({}));
  }

  async resetQualificationVerification(request: ResetQualificationVerificationRequest): Promise<ResetQualificationVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetQualificationVerificationWithOptions(request, runtime);
  }

  async saveBatchDomainRemarkWithOptions(request: SaveBatchDomainRemarkRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchDomainRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchDomainRemarkResponse>(await this.doRPCRequest("SaveBatchDomainRemark", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchDomainRemarkResponse({}));
  }

  async saveBatchDomainRemark(request: SaveBatchDomainRemarkRequest): Promise<SaveBatchDomainRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchDomainRemarkWithOptions(request, runtime);
  }

  async saveBatchTaskForCreatingOrderActivateWithOptions(request: SaveBatchTaskForCreatingOrderActivateRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderActivateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderActivateResponse>(await this.doRPCRequest("SaveBatchTaskForCreatingOrderActivate", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForCreatingOrderActivateResponse({}));
  }

  async saveBatchTaskForCreatingOrderActivate(request: SaveBatchTaskForCreatingOrderActivateRequest): Promise<SaveBatchTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  async saveBatchTaskForCreatingOrderRedeemWithOptions(request: SaveBatchTaskForCreatingOrderRedeemRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderRedeemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderRedeemResponse>(await this.doRPCRequest("SaveBatchTaskForCreatingOrderRedeem", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForCreatingOrderRedeemResponse({}));
  }

  async saveBatchTaskForCreatingOrderRedeem(request: SaveBatchTaskForCreatingOrderRedeemRequest): Promise<SaveBatchTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  async saveBatchTaskForCreatingOrderRenewWithOptions(request: SaveBatchTaskForCreatingOrderRenewRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderRenewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderRenewResponse>(await this.doRPCRequest("SaveBatchTaskForCreatingOrderRenew", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForCreatingOrderRenewResponse({}));
  }

  async saveBatchTaskForCreatingOrderRenew(request: SaveBatchTaskForCreatingOrderRenewRequest): Promise<SaveBatchTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  async saveBatchTaskForCreatingOrderTransferWithOptions(request: SaveBatchTaskForCreatingOrderTransferRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForCreatingOrderTransferResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForCreatingOrderTransferResponse>(await this.doRPCRequest("SaveBatchTaskForCreatingOrderTransfer", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForCreatingOrderTransferResponse({}));
  }

  async saveBatchTaskForCreatingOrderTransfer(request: SaveBatchTaskForCreatingOrderTransferRequest): Promise<SaveBatchTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  async saveBatchTaskForDomainNameProxyServiceWithOptions(request: SaveBatchTaskForDomainNameProxyServiceRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForDomainNameProxyServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForDomainNameProxyServiceResponse>(await this.doRPCRequest("SaveBatchTaskForDomainNameProxyService", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForDomainNameProxyServiceResponse({}));
  }

  async saveBatchTaskForDomainNameProxyService(request: SaveBatchTaskForDomainNameProxyServiceRequest): Promise<SaveBatchTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  async saveBatchTaskForModifyingDomainDnsWithOptions(request: SaveBatchTaskForModifyingDomainDnsRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForModifyingDomainDnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForModifyingDomainDnsResponse>(await this.doRPCRequest("SaveBatchTaskForModifyingDomainDns", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForModifyingDomainDnsResponse({}));
  }

  async saveBatchTaskForModifyingDomainDns(request: SaveBatchTaskForModifyingDomainDnsRequest): Promise<SaveBatchTaskForModifyingDomainDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForModifyingDomainDnsWithOptions(request, runtime);
  }

  async saveBatchTaskForTransferProhibitionLockWithOptions(request: SaveBatchTaskForTransferProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForTransferProhibitionLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForTransferProhibitionLockResponse>(await this.doRPCRequest("SaveBatchTaskForTransferProhibitionLock", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForTransferProhibitionLockResponse({}));
  }

  async saveBatchTaskForTransferProhibitionLock(request: SaveBatchTaskForTransferProhibitionLockRequest): Promise<SaveBatchTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  async saveBatchTaskForUpdateProhibitionLockWithOptions(request: SaveBatchTaskForUpdateProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForUpdateProhibitionLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForUpdateProhibitionLockResponse>(await this.doRPCRequest("SaveBatchTaskForUpdateProhibitionLock", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForUpdateProhibitionLockResponse({}));
  }

  async saveBatchTaskForUpdateProhibitionLock(request: SaveBatchTaskForUpdateProhibitionLockRequest): Promise<SaveBatchTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  async saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request: SaveBatchTaskForUpdatingContactInfoByNewContactRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForUpdatingContactInfoByNewContactResponse>(await this.doRPCRequest("SaveBatchTaskForUpdatingContactInfoByNewContact", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForUpdatingContactInfoByNewContactResponse({}));
  }

  async saveBatchTaskForUpdatingContactInfoByNewContact(request: SaveBatchTaskForUpdatingContactInfoByNewContactRequest): Promise<SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request, runtime);
  }

  async saveBatchTaskForUpdatingContactInfoByRegistrantProfileIdWithOptions(request: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse>(await this.doRPCRequest("SaveBatchTaskForUpdatingContactInfoByRegistrantProfileId", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse({}));
  }

  async saveBatchTaskForUpdatingContactInfoByRegistrantProfileId(request: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest): Promise<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByRegistrantProfileIdWithOptions(request, runtime);
  }

  async saveDomainGroupWithOptions(request: SaveDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<SaveDomainGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveDomainGroupResponse>(await this.doRPCRequest("SaveDomainGroup", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveDomainGroupResponse({}));
  }

  async saveDomainGroup(request: SaveDomainGroupRequest): Promise<SaveDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveDomainGroupWithOptions(request, runtime);
  }

  async saveRegistrantProfileWithOptions(request: SaveRegistrantProfileRequest, runtime: $Util.RuntimeOptions): Promise<SaveRegistrantProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveRegistrantProfileResponse>(await this.doRPCRequest("SaveRegistrantProfile", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveRegistrantProfileResponse({}));
  }

  async saveRegistrantProfile(request: SaveRegistrantProfileRequest): Promise<SaveRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRegistrantProfileWithOptions(request, runtime);
  }

  async saveSingleTaskForAddingDSRecordWithOptions(request: SaveSingleTaskForAddingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForAddingDSRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForAddingDSRecordResponse>(await this.doRPCRequest("SaveSingleTaskForAddingDSRecord", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForAddingDSRecordResponse({}));
  }

  async saveSingleTaskForAddingDSRecord(request: SaveSingleTaskForAddingDSRecordRequest): Promise<SaveSingleTaskForAddingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAddingDSRecordWithOptions(request, runtime);
  }

  async saveSingleTaskForApprovingTransferOutWithOptions(request: SaveSingleTaskForApprovingTransferOutRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForApprovingTransferOutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForApprovingTransferOutResponse>(await this.doRPCRequest("SaveSingleTaskForApprovingTransferOut", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForApprovingTransferOutResponse({}));
  }

  async saveSingleTaskForApprovingTransferOut(request: SaveSingleTaskForApprovingTransferOutRequest): Promise<SaveSingleTaskForApprovingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForApprovingTransferOutWithOptions(request, runtime);
  }

  async saveSingleTaskForAssociatingEnsWithOptions(request: SaveSingleTaskForAssociatingEnsRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForAssociatingEnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForAssociatingEnsResponse>(await this.doRPCRequest("SaveSingleTaskForAssociatingEns", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForAssociatingEnsResponse({}));
  }

  async saveSingleTaskForAssociatingEns(request: SaveSingleTaskForAssociatingEnsRequest): Promise<SaveSingleTaskForAssociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAssociatingEnsWithOptions(request, runtime);
  }

  async saveSingleTaskForCancelingTransferInWithOptions(request: SaveSingleTaskForCancelingTransferInRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCancelingTransferInResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForCancelingTransferInResponse>(await this.doRPCRequest("SaveSingleTaskForCancelingTransferIn", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForCancelingTransferInResponse({}));
  }

  async saveSingleTaskForCancelingTransferIn(request: SaveSingleTaskForCancelingTransferInRequest): Promise<SaveSingleTaskForCancelingTransferInResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferInWithOptions(request, runtime);
  }

  async saveSingleTaskForCancelingTransferOutWithOptions(request: SaveSingleTaskForCancelingTransferOutRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCancelingTransferOutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForCancelingTransferOutResponse>(await this.doRPCRequest("SaveSingleTaskForCancelingTransferOut", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForCancelingTransferOutResponse({}));
  }

  async saveSingleTaskForCancelingTransferOut(request: SaveSingleTaskForCancelingTransferOutRequest): Promise<SaveSingleTaskForCancelingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferOutWithOptions(request, runtime);
  }

  async saveSingleTaskForCreatingDnsHostWithOptions(request: SaveSingleTaskForCreatingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingDnsHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForCreatingDnsHostResponse>(await this.doRPCRequest("SaveSingleTaskForCreatingDnsHost", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForCreatingDnsHostResponse({}));
  }

  async saveSingleTaskForCreatingDnsHost(request: SaveSingleTaskForCreatingDnsHostRequest): Promise<SaveSingleTaskForCreatingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingDnsHostWithOptions(request, runtime);
  }

  async saveSingleTaskForCreatingOrderActivateWithOptions(request: SaveSingleTaskForCreatingOrderActivateRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderActivateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderActivateResponse>(await this.doRPCRequest("SaveSingleTaskForCreatingOrderActivate", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForCreatingOrderActivateResponse({}));
  }

  async saveSingleTaskForCreatingOrderActivate(request: SaveSingleTaskForCreatingOrderActivateRequest): Promise<SaveSingleTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  async saveSingleTaskForCreatingOrderRedeemWithOptions(request: SaveSingleTaskForCreatingOrderRedeemRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderRedeemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderRedeemResponse>(await this.doRPCRequest("SaveSingleTaskForCreatingOrderRedeem", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForCreatingOrderRedeemResponse({}));
  }

  async saveSingleTaskForCreatingOrderRedeem(request: SaveSingleTaskForCreatingOrderRedeemRequest): Promise<SaveSingleTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  async saveSingleTaskForCreatingOrderRenewWithOptions(request: SaveSingleTaskForCreatingOrderRenewRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderRenewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderRenewResponse>(await this.doRPCRequest("SaveSingleTaskForCreatingOrderRenew", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForCreatingOrderRenewResponse({}));
  }

  async saveSingleTaskForCreatingOrderRenew(request: SaveSingleTaskForCreatingOrderRenewRequest): Promise<SaveSingleTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  async saveSingleTaskForCreatingOrderTransferWithOptions(request: SaveSingleTaskForCreatingOrderTransferRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForCreatingOrderTransferResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForCreatingOrderTransferResponse>(await this.doRPCRequest("SaveSingleTaskForCreatingOrderTransfer", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForCreatingOrderTransferResponse({}));
  }

  async saveSingleTaskForCreatingOrderTransfer(request: SaveSingleTaskForCreatingOrderTransferRequest): Promise<SaveSingleTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  async saveSingleTaskForDeletingDnsHostWithOptions(request: SaveSingleTaskForDeletingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDeletingDnsHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForDeletingDnsHostResponse>(await this.doRPCRequest("SaveSingleTaskForDeletingDnsHost", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForDeletingDnsHostResponse({}));
  }

  async saveSingleTaskForDeletingDnsHost(request: SaveSingleTaskForDeletingDnsHostRequest): Promise<SaveSingleTaskForDeletingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDnsHostWithOptions(request, runtime);
  }

  async saveSingleTaskForDeletingDSRecordWithOptions(request: SaveSingleTaskForDeletingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDeletingDSRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForDeletingDSRecordResponse>(await this.doRPCRequest("SaveSingleTaskForDeletingDSRecord", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForDeletingDSRecordResponse({}));
  }

  async saveSingleTaskForDeletingDSRecord(request: SaveSingleTaskForDeletingDSRecordRequest): Promise<SaveSingleTaskForDeletingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDSRecordWithOptions(request, runtime);
  }

  async saveSingleTaskForDisassociatingEnsWithOptions(request: SaveSingleTaskForDisassociatingEnsRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDisassociatingEnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForDisassociatingEnsResponse>(await this.doRPCRequest("SaveSingleTaskForDisassociatingEns", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForDisassociatingEnsResponse({}));
  }

  async saveSingleTaskForDisassociatingEns(request: SaveSingleTaskForDisassociatingEnsRequest): Promise<SaveSingleTaskForDisassociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDisassociatingEnsWithOptions(request, runtime);
  }

  async saveSingleTaskForDomainNameProxyServiceWithOptions(request: SaveSingleTaskForDomainNameProxyServiceRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDomainNameProxyServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForDomainNameProxyServiceResponse>(await this.doRPCRequest("SaveSingleTaskForDomainNameProxyService", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForDomainNameProxyServiceResponse({}));
  }

  async saveSingleTaskForDomainNameProxyService(request: SaveSingleTaskForDomainNameProxyServiceRequest): Promise<SaveSingleTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  async saveSingleTaskForModifyingDnsHostWithOptions(request: SaveSingleTaskForModifyingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForModifyingDnsHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForModifyingDnsHostResponse>(await this.doRPCRequest("SaveSingleTaskForModifyingDnsHost", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForModifyingDnsHostResponse({}));
  }

  async saveSingleTaskForModifyingDnsHost(request: SaveSingleTaskForModifyingDnsHostRequest): Promise<SaveSingleTaskForModifyingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDnsHostWithOptions(request, runtime);
  }

  async saveSingleTaskForModifyingDSRecordWithOptions(request: SaveSingleTaskForModifyingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForModifyingDSRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForModifyingDSRecordResponse>(await this.doRPCRequest("SaveSingleTaskForModifyingDSRecord", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForModifyingDSRecordResponse({}));
  }

  async saveSingleTaskForModifyingDSRecord(request: SaveSingleTaskForModifyingDSRecordRequest): Promise<SaveSingleTaskForModifyingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDSRecordWithOptions(request, runtime);
  }

  async saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request: SaveSingleTaskForQueryingTransferAuthorizationCodeRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse>(await this.doRPCRequest("SaveSingleTaskForQueryingTransferAuthorizationCode", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForQueryingTransferAuthorizationCodeResponse({}));
  }

  async saveSingleTaskForQueryingTransferAuthorizationCode(request: SaveSingleTaskForQueryingTransferAuthorizationCodeRequest): Promise<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request, runtime);
  }

  async saveSingleTaskForSaveArtExtensionWithOptions(request: SaveSingleTaskForSaveArtExtensionRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForSaveArtExtensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForSaveArtExtensionResponse>(await this.doRPCRequest("SaveSingleTaskForSaveArtExtension", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForSaveArtExtensionResponse({}));
  }

  async saveSingleTaskForSaveArtExtension(request: SaveSingleTaskForSaveArtExtensionRequest): Promise<SaveSingleTaskForSaveArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSaveArtExtensionWithOptions(request, runtime);
  }

  async saveSingleTaskForSynchronizingDnsHostWithOptions(request: SaveSingleTaskForSynchronizingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForSynchronizingDnsHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForSynchronizingDnsHostResponse>(await this.doRPCRequest("SaveSingleTaskForSynchronizingDnsHost", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForSynchronizingDnsHostResponse({}));
  }

  async saveSingleTaskForSynchronizingDnsHost(request: SaveSingleTaskForSynchronizingDnsHostRequest): Promise<SaveSingleTaskForSynchronizingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDnsHostWithOptions(request, runtime);
  }

  async saveSingleTaskForSynchronizingDSRecordWithOptions(request: SaveSingleTaskForSynchronizingDSRecordRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForSynchronizingDSRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForSynchronizingDSRecordResponse>(await this.doRPCRequest("SaveSingleTaskForSynchronizingDSRecord", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForSynchronizingDSRecordResponse({}));
  }

  async saveSingleTaskForSynchronizingDSRecord(request: SaveSingleTaskForSynchronizingDSRecordRequest): Promise<SaveSingleTaskForSynchronizingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDSRecordWithOptions(request, runtime);
  }

  async saveSingleTaskForTransferProhibitionLockWithOptions(request: SaveSingleTaskForTransferProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForTransferProhibitionLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForTransferProhibitionLockResponse>(await this.doRPCRequest("SaveSingleTaskForTransferProhibitionLock", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForTransferProhibitionLockResponse({}));
  }

  async saveSingleTaskForTransferProhibitionLock(request: SaveSingleTaskForTransferProhibitionLockRequest): Promise<SaveSingleTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  async saveSingleTaskForUpdateProhibitionLockWithOptions(request: SaveSingleTaskForUpdateProhibitionLockRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForUpdateProhibitionLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForUpdateProhibitionLockResponse>(await this.doRPCRequest("SaveSingleTaskForUpdateProhibitionLock", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForUpdateProhibitionLockResponse({}));
  }

  async saveSingleTaskForUpdateProhibitionLock(request: SaveSingleTaskForUpdateProhibitionLockRequest): Promise<SaveSingleTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  async saveSingleTaskForUpdatingContactInfoWithOptions(request: SaveSingleTaskForUpdatingContactInfoRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForUpdatingContactInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveSingleTaskForUpdatingContactInfoResponse>(await this.doRPCRequest("SaveSingleTaskForUpdatingContactInfo", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveSingleTaskForUpdatingContactInfoResponse({}));
  }

  async saveSingleTaskForUpdatingContactInfo(request: SaveSingleTaskForUpdatingContactInfoRequest): Promise<SaveSingleTaskForUpdatingContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdatingContactInfoWithOptions(request, runtime);
  }

  async saveTaskForSubmittingDomainDeleteWithOptions(request: SaveTaskForSubmittingDomainDeleteRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForSubmittingDomainDeleteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTaskForSubmittingDomainDeleteResponse>(await this.doRPCRequest("SaveTaskForSubmittingDomainDelete", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTaskForSubmittingDomainDeleteResponse({}));
  }

  async saveTaskForSubmittingDomainDelete(request: SaveTaskForSubmittingDomainDeleteRequest): Promise<SaveTaskForSubmittingDomainDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainDeleteWithOptions(request, runtime);
  }

  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse>(await this.doRPCRequest("SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse({}));
  }

  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(request: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request, runtime);
  }

  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse>(await this.doRPCRequest("SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse({}));
  }

  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(request: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request, runtime);
  }

  async saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse>(await this.doRPCRequest("SaveTaskForUpdatingRegistrantInfoByIdentityCredential", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse({}));
  }

  async saveTaskForUpdatingRegistrantInfoByIdentityCredential(request: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest): Promise<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request, runtime);
  }

  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest, runtime: $Util.RuntimeOptions): Promise<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse>(await this.doRPCRequest("SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse({}));
  }

  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileID(request: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest): Promise<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request, runtime);
  }

  async scrollDomainListWithOptions(request: ScrollDomainListRequest, runtime: $Util.RuntimeOptions): Promise<ScrollDomainListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ScrollDomainListResponse>(await this.doRPCRequest("ScrollDomainList", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new ScrollDomainListResponse({}));
  }

  async scrollDomainList(request: ScrollDomainListRequest): Promise<ScrollDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scrollDomainListWithOptions(request, runtime);
  }

  async submitEmailVerificationWithOptions(request: SubmitEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<SubmitEmailVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitEmailVerificationResponse>(await this.doRPCRequest("SubmitEmailVerification", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitEmailVerificationResponse({}));
  }

  async submitEmailVerification(request: SubmitEmailVerificationRequest): Promise<SubmitEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitEmailVerificationWithOptions(request, runtime);
  }

  async submitOperationAuditInfoWithOptions(request: SubmitOperationAuditInfoRequest, runtime: $Util.RuntimeOptions): Promise<SubmitOperationAuditInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitOperationAuditInfoResponse>(await this.doRPCRequest("SubmitOperationAuditInfo", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitOperationAuditInfoResponse({}));
  }

  async submitOperationAuditInfo(request: SubmitOperationAuditInfoRequest): Promise<SubmitOperationAuditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOperationAuditInfoWithOptions(request, runtime);
  }

  async submitOperationCredentialsWithOptions(request: SubmitOperationCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitOperationCredentialsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitOperationCredentialsResponse>(await this.doRPCRequest("SubmitOperationCredentials", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitOperationCredentialsResponse({}));
  }

  async submitOperationCredentials(request: SubmitOperationCredentialsRequest): Promise<SubmitOperationCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOperationCredentialsWithOptions(request, runtime);
  }

  async transferInCheckMailTokenWithOptions(request: TransferInCheckMailTokenRequest, runtime: $Util.RuntimeOptions): Promise<TransferInCheckMailTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferInCheckMailTokenResponse>(await this.doRPCRequest("TransferInCheckMailToken", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new TransferInCheckMailTokenResponse({}));
  }

  async transferInCheckMailToken(request: TransferInCheckMailTokenRequest): Promise<TransferInCheckMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInCheckMailTokenWithOptions(request, runtime);
  }

  async transferInReenterTransferAuthorizationCodeWithOptions(request: TransferInReenterTransferAuthorizationCodeRequest, runtime: $Util.RuntimeOptions): Promise<TransferInReenterTransferAuthorizationCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferInReenterTransferAuthorizationCodeResponse>(await this.doRPCRequest("TransferInReenterTransferAuthorizationCode", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new TransferInReenterTransferAuthorizationCodeResponse({}));
  }

  async transferInReenterTransferAuthorizationCode(request: TransferInReenterTransferAuthorizationCodeRequest): Promise<TransferInReenterTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInReenterTransferAuthorizationCodeWithOptions(request, runtime);
  }

  async transferInRefetchWhoisEmailWithOptions(request: TransferInRefetchWhoisEmailRequest, runtime: $Util.RuntimeOptions): Promise<TransferInRefetchWhoisEmailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferInRefetchWhoisEmailResponse>(await this.doRPCRequest("TransferInRefetchWhoisEmail", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new TransferInRefetchWhoisEmailResponse({}));
  }

  async transferInRefetchWhoisEmail(request: TransferInRefetchWhoisEmailRequest): Promise<TransferInRefetchWhoisEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInRefetchWhoisEmailWithOptions(request, runtime);
  }

  async transferInResendMailTokenWithOptions(request: TransferInResendMailTokenRequest, runtime: $Util.RuntimeOptions): Promise<TransferInResendMailTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferInResendMailTokenResponse>(await this.doRPCRequest("TransferInResendMailToken", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new TransferInResendMailTokenResponse({}));
  }

  async transferInResendMailToken(request: TransferInResendMailTokenRequest): Promise<TransferInResendMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInResendMailTokenWithOptions(request, runtime);
  }

  async updateDomainToDomainGroupWithOptions(request: UpdateDomainToDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainToDomainGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDomainToDomainGroupResponse>(await this.doRPCRequest("UpdateDomainToDomainGroup", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDomainToDomainGroupResponse({}));
  }

  async updateDomainToDomainGroup(request: UpdateDomainToDomainGroupRequest): Promise<UpdateDomainToDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainToDomainGroupWithOptions(request, runtime);
  }

  async verifyContactFieldWithOptions(request: VerifyContactFieldRequest, runtime: $Util.RuntimeOptions): Promise<VerifyContactFieldResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyContactFieldResponse>(await this.doRPCRequest("VerifyContactField", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyContactFieldResponse({}));
  }

  async verifyContactField(request: VerifyContactFieldRequest): Promise<VerifyContactFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyContactFieldWithOptions(request, runtime);
  }

  async verifyEmailWithOptions(request: VerifyEmailRequest, runtime: $Util.RuntimeOptions): Promise<VerifyEmailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyEmailResponse>(await this.doRPCRequest("VerifyEmail", "2018-01-29", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyEmailResponse({}));
  }

  async verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyEmailWithOptions(request, runtime);
  }

}
