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

export class CancelOperationAuditRequest extends $tea.Model {
  auditRecordId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      auditRecordId: 'AuditRecordId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecordId: 'number',
      lang: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOperationAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelOperationAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelQualificationVerificationRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  qualificationType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      qualificationType: 'QualificationType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      qualificationType: 'string',
      userClientIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelQualificationVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelQualificationVerificationResponseBody,
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

export class ChangeResourceGroupRequest extends $tea.Model {
  lang?: string;
  newResourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newResourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
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

export class CheckMaxYearOfServerLockRequest extends $tea.Model {
  checkAction?: string;
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      checkAction: 'CheckAction',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAction: 'string',
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaxYearOfServerLockResponseBody extends $tea.Model {
  maxYear?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxYear: 'MaxYear',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxYear: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaxYearOfServerLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckMaxYearOfServerLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckMaxYearOfServerLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProcessingServerLockApplyRequest extends $tea.Model {
  domainName?: string;
  feePeriod?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      feePeriod: 'FeePeriod',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      feePeriod: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProcessingServerLockApplyResponseBody extends $tea.Model {
  exists?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exists: 'Exists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exists: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProcessingServerLockApplyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckProcessingServerLockApplyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckProcessingServerLockApplyResponseBody,
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

export class DeleteContactTemplatesRequest extends $tea.Model {
  registrantProfileIds?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileIds: 'RegistrantProfileIds',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileIds: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactTemplatesResponseBody extends $tea.Model {
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

export class DeleteContactTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteContactTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteContactTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainGroupRequest extends $tea.Model {
  domainGroupId?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
      lang: 'string',
      userClientIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainGroupResponseBody,
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

export class DomainSpecialBizCancelRequest extends $tea.Model {
  bizId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainSpecialBizCancelResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  module?: any;
  requestId?: string;
  success?: boolean;
  synchro?: boolean;
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
      synchro: 'Synchro',
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
      module: 'any',
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainSpecialBizCancelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DomainSpecialBizCancelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DomainSpecialBizCancelResponseBody,
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

export class GetOperationOssUploadPolicyRequest extends $tea.Model {
  auditType?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      auditType: 'AuditType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditType: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationOssUploadPolicyResponseBody extends $tea.Model {
  accessid?: string;
  encodedPolicy?: string;
  expireTime?: string;
  fileDir?: string;
  host?: string;
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
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
      accessid: 'string',
      encodedPolicy: 'string',
      expireTime: 'string',
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

export class GetOperationOssUploadPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOperationOssUploadPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  accessid?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  prefix?: string;
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      prefix: 'Prefix',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      prefix: 'string',
      requestId: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationUploadPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualificationUploadPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualificationUploadPolicyResponseBody,
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

export class ListServerLockRequest extends $tea.Model {
  beginStartDate?: number;
  domainName?: string;
  endExpireDate?: number;
  endStartDate?: number;
  lang?: string;
  lockProductId?: string;
  orderBy?: string;
  orderByType?: string;
  pageNum?: number;
  pageSize?: number;
  serverLockStatus?: number;
  startExpireDate?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginStartDate: 'BeginStartDate',
      domainName: 'DomainName',
      endExpireDate: 'EndExpireDate',
      endStartDate: 'EndStartDate',
      lang: 'Lang',
      lockProductId: 'LockProductId',
      orderBy: 'OrderBy',
      orderByType: 'OrderByType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      serverLockStatus: 'ServerLockStatus',
      startExpireDate: 'StartExpireDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginStartDate: 'number',
      domainName: 'string',
      endExpireDate: 'number',
      endStartDate: 'number',
      lang: 'string',
      lockProductId: 'string',
      orderBy: 'string',
      orderByType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      serverLockStatus: 'number',
      startExpireDate: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerLockResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: ListServerLockResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListServerLockResponseBodyData },
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

export class ListServerLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServerLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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

export class QueryAdvancedDomainListRequest extends $tea.Model {
  domainGroupId?: number;
  domainNameSort?: boolean;
  domainStatus?: number;
  endExpirationDate?: number;
  endLength?: number;
  endRegistrationDate?: number;
  excluded?: string;
  excludedPrefix?: boolean;
  excludedSuffix?: boolean;
  expirationDateSort?: boolean;
  form?: number;
  keyWord?: string;
  keyWordPrefix?: boolean;
  keyWordSuffix?: boolean;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  productDomainType?: string;
  productDomainTypeSort?: boolean;
  registrationDateSort?: boolean;
  resourceGroupId?: string;
  startExpirationDate?: number;
  startLength?: number;
  startRegistrationDate?: number;
  suffixs?: string;
  tag?: QueryAdvancedDomainListRequestTag[];
  tradeType?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      domainNameSort: 'DomainNameSort',
      domainStatus: 'DomainStatus',
      endExpirationDate: 'EndExpirationDate',
      endLength: 'EndLength',
      endRegistrationDate: 'EndRegistrationDate',
      excluded: 'Excluded',
      excludedPrefix: 'ExcludedPrefix',
      excludedSuffix: 'ExcludedSuffix',
      expirationDateSort: 'ExpirationDateSort',
      form: 'Form',
      keyWord: 'KeyWord',
      keyWordPrefix: 'KeyWordPrefix',
      keyWordSuffix: 'KeyWordSuffix',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productDomainType: 'ProductDomainType',
      productDomainTypeSort: 'ProductDomainTypeSort',
      registrationDateSort: 'RegistrationDateSort',
      resourceGroupId: 'ResourceGroupId',
      startExpirationDate: 'StartExpirationDate',
      startLength: 'StartLength',
      startRegistrationDate: 'StartRegistrationDate',
      suffixs: 'Suffixs',
      tag: 'Tag',
      tradeType: 'TradeType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
      domainNameSort: 'boolean',
      domainStatus: 'number',
      endExpirationDate: 'number',
      endLength: 'number',
      endRegistrationDate: 'number',
      excluded: 'string',
      excludedPrefix: 'boolean',
      excludedSuffix: 'boolean',
      expirationDateSort: 'boolean',
      form: 'number',
      keyWord: 'string',
      keyWordPrefix: 'boolean',
      keyWordSuffix: 'boolean',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productDomainType: 'string',
      productDomainTypeSort: 'boolean',
      registrationDateSort: 'boolean',
      resourceGroupId: 'string',
      startExpirationDate: 'number',
      startLength: 'number',
      startRegistrationDate: 'number',
      suffixs: 'string',
      tag: { 'type': 'array', 'itemType': QueryAdvancedDomainListRequestTag },
      tradeType: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryAdvancedDomainListResponseBodyData;
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
      data: QueryAdvancedDomainListResponseBodyData,
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

export class QueryAdvancedDomainListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAdvancedDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
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
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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
  adminDivisions?: QueryDomainAdminDivisionResponseBodyAdminDivisions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adminDivisions: 'AdminDivisions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminDivisions: QueryDomainAdminDivisionResponseBodyAdminDivisions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainAdminDivisionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainAdminDivisionResponseBody,
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
  domainGroupId?: number;
  domainGroupName?: string;
  domainName?: string;
  domainNameProxyService?: boolean;
  domainNameVerificationStatus?: string;
  domainStatus?: string;
  domainType?: string;
  email?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  expirationCurrDateDiff?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  expirationDateStatus?: string;
  instanceId?: string;
  premium?: boolean;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrantUpdatingStatus?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  remark?: string;
  requestId?: string;
  resourceGroupId?: string;
  tag?: QueryDomainByDomainNameResponseBodyTag;
  transferOutStatus?: string;
  transferProhibitionLock?: string;
  updateProhibitionLock?: string;
  userId?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainName: 'DomainName',
      domainNameProxyService: 'DomainNameProxyService',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      email: 'Email',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      transferOutStatus: 'TransferOutStatus',
      transferProhibitionLock: 'TransferProhibitionLock',
      updateProhibitionLock: 'UpdateProhibitionLock',
      userId: 'UserId',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: QueryDomainByDomainNameResponseBodyDnsList,
      domainGroupId: 'number',
      domainGroupName: 'string',
      domainName: 'string',
      domainNameProxyService: 'boolean',
      domainNameVerificationStatus: 'string',
      domainStatus: 'string',
      domainType: 'string',
      email: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tag: QueryDomainByDomainNameResponseBodyTag,
      transferOutStatus: 'string',
      transferProhibitionLock: 'string',
      updateProhibitionLock: 'string',
      userId: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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
  domainGroupId?: number;
  domainGroupName?: string;
  domainName?: string;
  domainNameProxyService?: boolean;
  domainNameVerificationStatus?: string;
  domainStatus?: string;
  domainType?: string;
  email?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  expirationCurrDateDiff?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  expirationDateStatus?: string;
  instanceId?: string;
  premium?: boolean;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrantUpdatingStatus?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  remark?: string;
  requestId?: string;
  resourceGroupId?: string;
  tag?: QueryDomainByInstanceIdResponseBodyTag;
  transferOutStatus?: string;
  transferProhibitionLock?: string;
  updateProhibitionLock?: string;
  userId?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainName: 'DomainName',
      domainNameProxyService: 'DomainNameProxyService',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      email: 'Email',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      transferOutStatus: 'TransferOutStatus',
      transferProhibitionLock: 'TransferProhibitionLock',
      updateProhibitionLock: 'UpdateProhibitionLock',
      userId: 'UserId',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: QueryDomainByInstanceIdResponseBodyDnsList,
      domainGroupId: 'number',
      domainGroupName: 'string',
      domainName: 'string',
      domainNameProxyService: 'boolean',
      domainNameVerificationStatus: 'string',
      domainStatus: 'string',
      domainType: 'string',
      email: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tag: QueryDomainByInstanceIdResponseBodyTag,
      transferOutStatus: 'string',
      transferProhibitionLock: 'string',
      updateProhibitionLock: 'string',
      userId: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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

export class QueryDomainGroupListRequest extends $tea.Model {
  domainGroupName?: string;
  lang?: string;
  showDeletingGroup?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupName: 'DomainGroupName',
      lang: 'Lang',
      showDeletingGroup: 'ShowDeletingGroup',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupName: 'string',
      lang: 'string',
      showDeletingGroup: 'boolean',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponseBody extends $tea.Model {
  data?: QueryDomainGroupListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryDomainGroupListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListRequest extends $tea.Model {
  ccompany?: string;
  domainGroupId?: string;
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
  resourceGroupId?: string;
  startExpirationDate?: number;
  startRegistrationDate?: number;
  tag?: QueryDomainListRequestTag[];
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      ccompany: 'Ccompany',
      domainGroupId: 'DomainGroupId',
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
      resourceGroupId: 'ResourceGroupId',
      startExpirationDate: 'StartExpirationDate',
      startRegistrationDate: 'StartRegistrationDate',
      tag: 'Tag',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccompany: 'string',
      domainGroupId: 'string',
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
      resourceGroupId: 'string',
      startExpirationDate: 'number',
      startRegistrationDate: 'number',
      tag: { 'type': 'array', 'itemType': QueryDomainListRequestTag },
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

export class QueryDomainSpecialBizDetailRequest extends $tea.Model {
  bizId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  module?: QueryDomainSpecialBizDetailResponseBodyModule;
  requestId?: string;
  success?: boolean;
  synchro?: boolean;
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
      synchro: 'Synchro',
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
      module: QueryDomainSpecialBizDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainSpecialBizDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainSpecialBizDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizInfoByDomainRequest extends $tea.Model {
  bizType?: string;
  domainName?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      domainName: 'DomainName',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      domainName: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizInfoByDomainResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  module?: QueryDomainSpecialBizInfoByDomainResponseBodyModule;
  requestId?: string;
  success?: boolean;
  synchro?: boolean;
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
      synchro: 'Synchro',
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
      module: QueryDomainSpecialBizInfoByDomainResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizInfoByDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainSpecialBizInfoByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainSpecialBizInfoByDomainResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainSuffixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainSuffixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmailVerificationRequest extends $tea.Model {
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

export class QueryEmailVerificationResponseBody extends $tea.Model {
  confirmIp?: string;
  email?: string;
  emailVerificationNo?: string;
  gmtCreate?: string;
  gmtModified?: string;
  requestId?: string;
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

export class QueryEmailVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEmailVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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

export class QueryFailingReasonListForQualificationRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  limit?: number;
  qualificationType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      limit: 'Limit',
      qualificationType: 'QualificationType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      limit: 'number',
      qualificationType: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailingReasonListForQualificationResponseBody extends $tea.Model {
  data?: QueryFailingReasonListForQualificationResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryFailingReasonListForQualificationResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailingReasonListForQualificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFailingReasonListForQualificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFailingReasonListForQualificationResponseBody,
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

export class QueryOperationAuditInfoDetailRequest extends $tea.Model {
  auditRecordId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      auditRecordId: 'AuditRecordId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecordId: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoDetailResponseBody extends $tea.Model {
  auditInfo?: string;
  auditStatus?: number;
  auditType?: number;
  businessName?: string;
  createTime?: number;
  domainName?: string;
  id?: string;
  remark?: string;
  requestId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditStatus: 'AuditStatus',
      auditType: 'AuditType',
      businessName: 'BusinessName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      id: 'Id',
      remark: 'Remark',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditStatus: 'number',
      auditType: 'number',
      businessName: 'string',
      createTime: 'number',
      domainName: 'string',
      id: 'string',
      remark: 'string',
      requestId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOperationAuditInfoDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOperationAuditInfoDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoListRequest extends $tea.Model {
  auditStatus?: number;
  auditType?: number;
  domainName?: string;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      auditType: 'AuditType',
      domainName: 'DomainName',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      auditType: 'number',
      domainName: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoListResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryOperationAuditInfoListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryOperationAuditInfoListResponseBodyData },
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

export class QueryOperationAuditInfoListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOperationAuditInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOperationAuditInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  qualificationType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      qualificationType: 'QualificationType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      qualificationType: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponseBody extends $tea.Model {
  auditStatus?: number;
  credentials?: QueryQualificationDetailResponseBodyCredentials;
  requestId?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      credentials: 'Credentials',
      requestId: 'RequestId',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      credentials: QueryQualificationDetailResponseBodyCredentials,
      requestId: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryQualificationDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryQualificationDetailResponseBody,
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
  zhRegistrantOrganization?: string;
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
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      zhRegistrantOrganization: 'string',
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

export class QueryServerLockRequest extends $tea.Model {
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

export class QueryServerLockResponseBody extends $tea.Model {
  domainInstanceId?: string;
  domainName?: string;
  expireDate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  lockInstanceId?: string;
  lockProductId?: string;
  requestId?: string;
  serverLockStatus?: number;
  startDate?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInstanceId: 'DomainInstanceId',
      domainName: 'DomainName',
      expireDate: 'ExpireDate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      lockInstanceId: 'LockInstanceId',
      lockProductId: 'LockProductId',
      requestId: 'RequestId',
      serverLockStatus: 'ServerLockStatus',
      startDate: 'StartDate',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInstanceId: 'string',
      domainName: 'string',
      expireDate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      lockInstanceId: 'string',
      lockProductId: 'string',
      requestId: 'string',
      serverLockStatus: 'number',
      startDate: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServerLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryServerLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryServerLockResponseBody,
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

export class ResetQualificationVerificationRequest extends $tea.Model {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetQualificationVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetQualificationVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchDomainRemarkRequest extends $tea.Model {
  instanceIds?: string;
  lang?: string;
  remark?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lang: 'Lang',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      lang: 'string',
      remark: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchDomainRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchDomainRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForApplyQuickTransferOutOpenlyRequest extends $tea.Model {
  domainNames?: string[];
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForApplyQuickTransferOutOpenlyResponseBody extends $tea.Model {
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

export class SaveBatchTaskForApplyQuickTransferOutOpenlyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForApplyQuickTransferOutOpenlyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForApplyQuickTransferOutOpenlyResponseBody,
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

export class SaveBatchTaskForGenerateDomainCertificateRequest extends $tea.Model {
  domainNames?: string[];
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForGenerateDomainCertificateShrinkRequest extends $tea.Model {
  domainNamesShrink?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainNamesShrink: 'DomainNames',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNamesShrink: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForGenerateDomainCertificateResponseBody extends $tea.Model {
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

export class SaveBatchTaskForGenerateDomainCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForGenerateDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForGenerateDomainCertificateResponseBody,
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
  registrantType?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  transferOutProhibited?: boolean;
  userClientIp?: string;
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
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
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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

export class SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest extends $tea.Model {
  contactType?: string;
  domainName?: string[];
  lang?: string;
  registrantProfileId?: number;
  transferOutProhibited?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      domainName: 'DomainName',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDomainGroupRequest extends $tea.Model {
  domainGroupId?: number;
  domainGroupName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
      domainGroupName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDomainGroupResponseBody extends $tea.Model {
  beingDeleted?: boolean;
  creationDate?: string;
  domainGroupId?: number;
  domainGroupName?: string;
  domainGroupStatus?: string;
  modificationDate?: string;
  requestId?: string;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      beingDeleted: 'BeingDeleted',
      creationDate: 'CreationDate',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainGroupStatus: 'DomainGroupStatus',
      modificationDate: 'ModificationDate',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beingDeleted: 'boolean',
      creationDate: 'string',
      domainGroupId: 'number',
      domainGroupName: 'string',
      domainGroupStatus: 'string',
      modificationDate: 'string',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDomainGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveDomainGroupResponseBody,
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
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
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
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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

export class SaveRegistrantProfileRealNameVerificationRequest extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  email?: string;
  identityCredential?: string;
  identityCredentialNo?: string;
  identityCredentialType?: string;
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
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      email: 'Email',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
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
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      email: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
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
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRegistrantProfileRealNameVerificationResponseBody extends $tea.Model {
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

export class SaveRegistrantProfileRealNameVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveRegistrantProfileRealNameVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveRegistrantProfileRealNameVerificationResponseBody,
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

export class SaveSingleTaskForApplyQuickTransferOutOpenlyRequest extends $tea.Model {
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

export class SaveSingleTaskForApplyQuickTransferOutOpenlyResponseBody extends $tea.Model {
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

export class SaveSingleTaskForApplyQuickTransferOutOpenlyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForApplyQuickTransferOutOpenlyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForApplyQuickTransferOutOpenlyResponseBody,
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
  resourceGroupId?: string;
  subscriptionDuration?: number;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  trademarkDomainActivation?: boolean;
  useCoupon?: boolean;
  usePromotion?: boolean;
  userClientIp?: string;
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
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
      resourceGroupId: 'ResourceGroupId',
      subscriptionDuration: 'SubscriptionDuration',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      trademarkDomainActivation: 'TrademarkDomainActivation',
      useCoupon: 'UseCoupon',
      usePromotion: 'UsePromotion',
      userClientIp: 'UserClientIp',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      resourceGroupId: 'string',
      subscriptionDuration: 'number',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      trademarkDomainActivation: 'boolean',
      useCoupon: 'boolean',
      usePromotion: 'boolean',
      userClientIp: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      instanceId: 'string',
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

export class SaveSingleTaskForGenerateDomainCertificateRequest extends $tea.Model {
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

export class SaveSingleTaskForGenerateDomainCertificateResponseBody extends $tea.Model {
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

export class SaveSingleTaskForGenerateDomainCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForGenerateDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForGenerateDomainCertificateResponseBody,
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
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
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
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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

export class ScrollDomainListRequest extends $tea.Model {
  domainGroupId?: number;
  domainStatus?: number;
  endExpirationDate?: number;
  endLength?: number;
  endRegistrationDate?: number;
  excluded?: string;
  excludedPrefix?: boolean;
  excludedSuffix?: boolean;
  form?: number;
  keyWord?: string;
  keyWordPrefix?: boolean;
  keyWordSuffix?: boolean;
  lang?: string;
  pageSize?: number;
  productDomainType?: string;
  resourceGroupId?: string;
  scrollId?: string;
  startExpirationDate?: number;
  startLength?: number;
  startRegistrationDate?: number;
  suffixs?: string;
  tradeType?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      domainStatus: 'DomainStatus',
      endExpirationDate: 'EndExpirationDate',
      endLength: 'EndLength',
      endRegistrationDate: 'EndRegistrationDate',
      excluded: 'Excluded',
      excludedPrefix: 'ExcludedPrefix',
      excludedSuffix: 'ExcludedSuffix',
      form: 'Form',
      keyWord: 'KeyWord',
      keyWordPrefix: 'KeyWordPrefix',
      keyWordSuffix: 'KeyWordSuffix',
      lang: 'Lang',
      pageSize: 'PageSize',
      productDomainType: 'ProductDomainType',
      resourceGroupId: 'ResourceGroupId',
      scrollId: 'ScrollId',
      startExpirationDate: 'StartExpirationDate',
      startLength: 'StartLength',
      startRegistrationDate: 'StartRegistrationDate',
      suffixs: 'Suffixs',
      tradeType: 'TradeType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
      domainStatus: 'number',
      endExpirationDate: 'number',
      endLength: 'number',
      endRegistrationDate: 'number',
      excluded: 'string',
      excludedPrefix: 'boolean',
      excludedSuffix: 'boolean',
      form: 'number',
      keyWord: 'string',
      keyWordPrefix: 'boolean',
      keyWordSuffix: 'boolean',
      lang: 'string',
      pageSize: 'number',
      productDomainType: 'string',
      resourceGroupId: 'string',
      scrollId: 'string',
      startExpirationDate: 'number',
      startLength: 'number',
      startRegistrationDate: 'number',
      suffixs: 'string',
      tradeType: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBody extends $tea.Model {
  data?: ScrollDomainListResponseBodyData;
  pageSize?: number;
  requestId?: string;
  scrollId?: string;
  totalItemNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scrollId: 'ScrollId',
      totalItemNum: 'TotalItemNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScrollDomainListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      scrollId: 'string',
      totalItemNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScrollDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScrollDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultRegistrantProfileRequest extends $tea.Model {
  registrantProfileId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultRegistrantProfileResponseBody extends $tea.Model {
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

export class SetDefaultRegistrantProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDefaultRegistrantProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDefaultRegistrantProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDomainAutoRenewRequest extends $tea.Model {
  instanceId?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDomainAutoRenewResponseBody extends $tea.Model {
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

export class SetupDomainAutoRenewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetupDomainAutoRenewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetupDomainAutoRenewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDomainSpecialBizCredentialsRequest extends $tea.Model {
  bizId?: number;
  credentials?: string;
  extend?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      credentials: 'Credentials',
      extend: 'Extend',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      credentials: 'string',
      extend: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDomainSpecialBizCredentialsResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  module?: any;
  requestId?: string;
  success?: boolean;
  synchro?: boolean;
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
      synchro: 'Synchro',
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
      module: 'any',
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDomainSpecialBizCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDomainSpecialBizCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitDomainSpecialBizCredentialsResponseBody,
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

export class SubmitOperationAuditInfoRequest extends $tea.Model {
  auditInfo?: string;
  auditType?: number;
  domainName?: string;
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditType: 'AuditType',
      domainName: 'DomainName',
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditType: 'number',
      domainName: 'string',
      id: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationAuditInfoResponseBody extends $tea.Model {
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

export class SubmitOperationAuditInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitOperationAuditInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitOperationAuditInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationCredentialsRequest extends $tea.Model {
  auditRecordId?: number;
  auditType?: number;
  credentials?: string;
  lang?: string;
  regType?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecordId: 'AuditRecordId',
      auditType: 'AuditType',
      credentials: 'Credentials',
      lang: 'Lang',
      regType: 'RegType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecordId: 'number',
      auditType: 'number',
      credentials: 'string',
      lang: 'string',
      regType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitOperationCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitOperationCredentialsResponseBody,
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

export class UpdateDomainToDomainGroupRequest extends $tea.Model {
  dataSource?: number;
  domainGroupId?: number;
  domainName?: string[];
  fileToUpload?: string;
  lang?: string;
  replace?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      domainGroupId: 'DomainGroupId',
      domainName: 'DomainName',
      fileToUpload: 'FileToUpload',
      lang: 'Lang',
      replace: 'Replace',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'number',
      domainGroupId: 'number',
      domainName: { 'type': 'array', 'itemType': 'string' },
      fileToUpload: 'string',
      lang: 'string',
      replace: 'boolean',
      userClientIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDomainToDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDomainToDomainGroupResponseBody,
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
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
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
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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

export class ListServerLockResponseBodyData extends $tea.Model {
  domainInstanceId?: string;
  domainName?: string;
  expireDate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  lockInstanceId?: string;
  lockProductId?: string;
  serverLockStatus?: string;
  startDate?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInstanceId: 'DomainInstanceId',
      domainName: 'DomainName',
      expireDate: 'ExpireDate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      lockInstanceId: 'LockInstanceId',
      lockProductId: 'LockProductId',
      serverLockStatus: 'ServerLockStatus',
      startDate: 'StartDate',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInstanceId: 'string',
      domainName: 'string',
      expireDate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      lockInstanceId: 'string',
      lockProductId: 'string',
      serverLockStatus: 'string',
      startDate: 'string',
      userId: 'string',
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

export class QueryAdvancedDomainListRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
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

export class QueryAdvancedDomainListResponseBodyDataDomainTagTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListResponseBodyDataDomainTag extends $tea.Model {
  tag?: QueryAdvancedDomainListResponseBodyDataDomainTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryAdvancedDomainListResponseBodyDataDomainTagTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListResponseBodyDataDomain extends $tea.Model {
  dnsList?: QueryAdvancedDomainListResponseBodyDataDomainDnsList;
  domainAuditStatus?: string;
  domainGroupId?: string;
  domainGroupName?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  email?: string;
  expirationCurrDateDiff?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  expirationDateStatus?: string;
  instanceId?: string;
  premium?: boolean;
  productId?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  remark?: string;
  resourceGroupId?: string;
  tag?: QueryAdvancedDomainListResponseBodyDataDomainTag;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      email: 'Email',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      productId: 'ProductId',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: QueryAdvancedDomainListResponseBodyDataDomainDnsList,
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      email: 'string',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      productId: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      tag: QueryAdvancedDomainListResponseBodyDataDomainTag,
      zhRegistrantOrganization: 'string',
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
  children?: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren;
  divisionName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      divisionName: 'DivisionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren,
      divisionName: 'string',
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

export class QueryDomainByDomainNameResponseBodyTagTag extends $tea.Model {
  key?: string;
  vaue?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      vaue: 'Vaue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      vaue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameResponseBodyTag extends $tea.Model {
  tag?: QueryDomainByDomainNameResponseBodyTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryDomainByDomainNameResponseBodyTagTag },
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

export class QueryDomainByInstanceIdResponseBodyTagTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponseBodyTag extends $tea.Model {
  tag?: QueryDomainByInstanceIdResponseBodyTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryDomainByInstanceIdResponseBodyTagTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponseBodyDataDomainGroup extends $tea.Model {
  beingDeleted?: boolean;
  creationDate?: string;
  domainGroupId?: string;
  domainGroupName?: string;
  domainGroupStatus?: string;
  modificationDate?: string;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      beingDeleted: 'BeingDeleted',
      creationDate: 'CreationDate',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainGroupStatus: 'DomainGroupStatus',
      modificationDate: 'ModificationDate',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beingDeleted: 'boolean',
      creationDate: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      domainGroupStatus: 'string',
      modificationDate: 'string',
      totalNumber: 'number',
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

export class QueryDomainListRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBodyDataDomainTagTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBodyDataDomainTag extends $tea.Model {
  tag?: QueryDomainListResponseBodyDataDomainTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryDomainListResponseBodyDataDomainTagTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBodyDataDomain extends $tea.Model {
  ccompany?: string;
  domainAuditStatus?: string;
  domainGroupId?: string;
  domainGroupName?: string;
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
  resourceGroupId?: string;
  tag?: QueryDomainListResponseBodyDataDomainTag;
  static names(): { [key: string]: string } {
    return {
      ccompany: 'Ccompany',
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
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
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccompany: 'string',
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
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
      resourceGroupId: 'string',
      tag: QueryDomainListResponseBodyDataDomainTag,
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

export class QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizContact extends $tea.Model {
  bizId?: number;
  CCity?: string;
  CCompany?: string;
  CCountry?: string;
  CName?: string;
  CProvince?: string;
  CVenu?: string;
  ECity?: string;
  ECompany?: string;
  EName?: string;
  EProvince?: string;
  EVenu?: string;
  email?: string;
  extend?: string;
  faxArea?: string;
  faxExt?: string;
  faxMain?: string;
  mobile?: string;
  postalcode?: string;
  regType?: number;
  registrantId?: string;
  telArea?: string;
  telExt?: string;
  telMain?: string;
  vspContactId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      CCity: 'CCity',
      CCompany: 'CCompany',
      CCountry: 'CCountry',
      CName: 'CName',
      CProvince: 'CProvince',
      CVenu: 'CVenu',
      ECity: 'ECity',
      ECompany: 'ECompany',
      EName: 'EName',
      EProvince: 'EProvince',
      EVenu: 'EVenu',
      email: 'Email',
      extend: 'Extend',
      faxArea: 'FaxArea',
      faxExt: 'FaxExt',
      faxMain: 'FaxMain',
      mobile: 'Mobile',
      postalcode: 'Postalcode',
      regType: 'RegType',
      registrantId: 'RegistrantId',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telMain: 'TelMain',
      vspContactId: 'VspContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      CCity: 'string',
      CCompany: 'string',
      CCountry: 'string',
      CName: 'string',
      CProvince: 'string',
      CVenu: 'string',
      ECity: 'string',
      ECompany: 'string',
      EName: 'string',
      EProvince: 'string',
      EVenu: 'string',
      email: 'string',
      extend: 'string',
      faxArea: 'string',
      faxExt: 'string',
      faxMain: 'string',
      mobile: 'string',
      postalcode: 'string',
      regType: 'number',
      registrantId: 'string',
      telArea: 'string',
      telExt: 'string',
      telMain: 'string',
      vspContactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizCredentials extends $tea.Model {
  bizId?: number;
  credentialNo?: string;
  credentialType?: string;
  credentialUrl?: string;
  domainName?: string;
  holderCert?: number;
  saleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      credentialUrl: 'CredentialUrl',
      domainName: 'DomainName',
      holderCert: 'HolderCert',
      saleId: 'SaleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      credentialNo: 'string',
      credentialType: 'string',
      credentialUrl: 'string',
      domainName: 'string',
      holderCert: 'number',
      saleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialOrderResult extends $tea.Model {
  actionType?: string;
  orderAmount?: number;
  orderCurrency?: string;
  orderId?: string;
  orderStatus?: string;
  orderTime?: string;
  orderYear?: number;
  saleId?: string;
  subOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      orderAmount: 'OrderAmount',
      orderCurrency: 'OrderCurrency',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderTime: 'OrderTime',
      orderYear: 'OrderYear',
      saleId: 'SaleId',
      subOrderId: 'SubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      orderAmount: 'number',
      orderCurrency: 'string',
      orderId: 'string',
      orderStatus: 'string',
      orderTime: 'string',
      orderYear: 'number',
      saleId: 'string',
      subOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBodyModule extends $tea.Model {
  auditMsg?: string;
  bizName?: string;
  bizNo?: string;
  bizStatus?: string;
  bizType?: string;
  createTime?: number;
  domainName?: string;
  domainSpecialBizContact?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizContact;
  domainSpecialBizCredentials?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizCredentials[];
  domainSpecialOrderResult?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialOrderResult;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  orderId?: string;
  productId?: string;
  saleId?: string;
  status?: number;
  statusDesc?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      auditMsg: 'AuditMsg',
      bizName: 'BizName',
      bizNo: 'BizNo',
      bizStatus: 'BizStatus',
      bizType: 'BizType',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      domainSpecialBizContact: 'DomainSpecialBizContact',
      domainSpecialBizCredentials: 'DomainSpecialBizCredentials',
      domainSpecialOrderResult: 'DomainSpecialOrderResult',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      orderId: 'OrderId',
      productId: 'ProductId',
      saleId: 'SaleId',
      status: 'Status',
      statusDesc: 'StatusDesc',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMsg: 'string',
      bizName: 'string',
      bizNo: 'string',
      bizStatus: 'string',
      bizType: 'string',
      createTime: 'number',
      domainName: 'string',
      domainSpecialBizContact: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizContact,
      domainSpecialBizCredentials: { 'type': 'array', 'itemType': QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizCredentials },
      domainSpecialOrderResult: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialOrderResult,
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      orderId: 'string',
      productId: 'string',
      saleId: 'string',
      status: 'number',
      statusDesc: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizContact extends $tea.Model {
  bizId?: number;
  CCity?: string;
  CCompany?: string;
  CCountry?: string;
  CName?: string;
  CProvince?: string;
  CVenu?: string;
  ECity?: string;
  ECompany?: string;
  EName?: string;
  EProvince?: string;
  EVenu?: string;
  email?: string;
  extend?: string;
  faxArea?: string;
  faxExt?: string;
  faxMain?: string;
  mobile?: string;
  postalcode?: string;
  regType?: number;
  registrantId?: string;
  telArea?: string;
  telExt?: string;
  telMain?: string;
  vspContactId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      CCity: 'CCity',
      CCompany: 'CCompany',
      CCountry: 'CCountry',
      CName: 'CName',
      CProvince: 'CProvince',
      CVenu: 'CVenu',
      ECity: 'ECity',
      ECompany: 'ECompany',
      EName: 'EName',
      EProvince: 'EProvince',
      EVenu: 'EVenu',
      email: 'Email',
      extend: 'Extend',
      faxArea: 'FaxArea',
      faxExt: 'FaxExt',
      faxMain: 'FaxMain',
      mobile: 'Mobile',
      postalcode: 'Postalcode',
      regType: 'RegType',
      registrantId: 'RegistrantId',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telMain: 'TelMain',
      vspContactId: 'VspContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      CCity: 'string',
      CCompany: 'string',
      CCountry: 'string',
      CName: 'string',
      CProvince: 'string',
      CVenu: 'string',
      ECity: 'string',
      ECompany: 'string',
      EName: 'string',
      EProvince: 'string',
      EVenu: 'string',
      email: 'string',
      extend: 'string',
      faxArea: 'string',
      faxExt: 'string',
      faxMain: 'string',
      mobile: 'string',
      postalcode: 'string',
      regType: 'number',
      registrantId: 'string',
      telArea: 'string',
      telExt: 'string',
      telMain: 'string',
      vspContactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizCredentials extends $tea.Model {
  bizId?: number;
  credentialNo?: string;
  credentialType?: string;
  credentialUrl?: string;
  domainName?: string;
  holderCert?: number;
  saleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      credentialUrl: 'CredentialUrl',
      domainName: 'DomainName',
      holderCert: 'HolderCert',
      saleId: 'SaleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      credentialNo: 'string',
      credentialType: 'string',
      credentialUrl: 'string',
      domainName: 'string',
      holderCert: 'number',
      saleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizInfoByDomainResponseBodyModule extends $tea.Model {
  auditMsg?: string;
  bizName?: string;
  bizNo?: string;
  bizStatus?: string;
  bizType?: string;
  createTime?: number;
  domainName?: string;
  domainSpecialBizContact?: QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizContact;
  domainSpecialBizCredentials?: QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizCredentials[];
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  orderId?: string;
  productId?: string;
  saleId?: string;
  status?: number;
  statusDesc?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      auditMsg: 'AuditMsg',
      bizName: 'BizName',
      bizNo: 'BizNo',
      bizStatus: 'BizStatus',
      bizType: 'BizType',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      domainSpecialBizContact: 'DomainSpecialBizContact',
      domainSpecialBizCredentials: 'DomainSpecialBizCredentials',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      orderId: 'OrderId',
      productId: 'ProductId',
      saleId: 'SaleId',
      status: 'Status',
      statusDesc: 'StatusDesc',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMsg: 'string',
      bizName: 'string',
      bizNo: 'string',
      bizStatus: 'string',
      bizType: 'string',
      createTime: 'number',
      domainName: 'string',
      domainSpecialBizContact: QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizContact,
      domainSpecialBizCredentials: { 'type': 'array', 'itemType': QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizCredentials },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      orderId: 'string',
      productId: 'string',
      saleId: 'string',
      status: 'number',
      statusDesc: 'string',
      updateTime: 'number',
      userId: 'string',
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

export class QueryFailReasonForDomainRealNameVerificationResponseBodyData extends $tea.Model {
  date?: string;
  domainNameVerificationStatus?: string;
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      domainNameVerificationStatus: 'string',
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

export class QueryOperationAuditInfoListResponseBodyData extends $tea.Model {
  auditInfo?: string;
  auditStatus?: number;
  auditType?: number;
  businessName?: string;
  createTime?: number;
  domainName?: string;
  id?: number;
  remark?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditStatus: 'AuditStatus',
      auditType: 'AuditType',
      businessName: 'BusinessName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      id: 'Id',
      remark: 'Remark',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditStatus: 'number',
      auditType: 'number',
      businessName: 'string',
      createTime: 'number',
      domainName: 'string',
      id: 'number',
      remark: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponseBodyCredentialsQualificationCredential extends $tea.Model {
  credentialNo?: string;
  credentialType?: string;
  credentialUrl?: string;
  static names(): { [key: string]: string } {
    return {
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      credentialUrl: 'CredentialUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialNo: 'string',
      credentialType: 'string',
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
  address?: string;
  city?: string;
  country?: string;
  createTime?: string;
  credentialNo?: string;
  credentialType?: string;
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
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      createTime: 'CreateTime',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
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
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      createTime: 'string',
      credentialNo: 'string',
      credentialType: 'string',
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
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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
  resourceGroupId?: string;
  subscriptionDuration?: number;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  trademarkDomainActivation?: boolean;
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
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
      resourceGroupId: 'ResourceGroupId',
      subscriptionDuration: 'SubscriptionDuration',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      trademarkDomainActivation: 'TrademarkDomainActivation',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
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
      resourceGroupId: 'string',
      subscriptionDuration: 'number',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      trademarkDomainActivation: 'boolean',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
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

export class ScrollDomainListResponseBodyDataDomainTagTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBodyDataDomainTag extends $tea.Model {
  tag?: ScrollDomainListResponseBodyDataDomainTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ScrollDomainListResponseBodyDataDomainTagTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBodyDataDomain extends $tea.Model {
  dnsList?: ScrollDomainListResponseBodyDataDomainDnsList;
  domainAuditStatus?: string;
  domainGroupId?: string;
  domainGroupName?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  email?: string;
  expirationCurrDateDiff?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  expirationDateStatus?: string;
  instanceId?: string;
  premium?: boolean;
  productId?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  remark?: string;
  resourceGroupId?: string;
  tag?: ScrollDomainListResponseBodyDataDomainTag;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      email: 'Email',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      productId: 'ProductId',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: ScrollDomainListResponseBodyDataDomainDnsList,
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      email: 'string',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      productId: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      tag: ScrollDomainListResponseBodyDataDomainTag,
      zhRegistrantOrganization: 'string',
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
      version: "2018-01-29",
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

  async acknowledgeTaskResult(request: AcknowledgeTaskResultRequest): Promise<AcknowledgeTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acknowledgeTaskResultWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async batchFuzzyMatchDomainSensitiveWord(request: BatchFuzzyMatchDomainSensitiveWordRequest): Promise<BatchFuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchFuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async cancelDomainVerification(request: CancelDomainVerificationRequest): Promise<CancelDomainVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelDomainVerificationWithOptions(request, runtime);
  }

  async cancelOperationAuditWithOptions(request: CancelOperationAuditRequest, runtime: $Util.RuntimeOptions): Promise<CancelOperationAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditRecordId)) {
      query["AuditRecordId"] = request.auditRecordId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOperationAudit",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOperationAuditResponse>(await this.callApi(params, req, runtime), new CancelOperationAuditResponse({}));
  }

  async cancelOperationAudit(request: CancelOperationAuditRequest): Promise<CancelOperationAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOperationAuditWithOptions(request, runtime);
  }

  async cancelQualificationVerificationWithOptions(request: CancelQualificationVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CancelQualificationVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.qualificationType)) {
      query["QualificationType"] = request.qualificationType;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelQualificationVerification",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelQualificationVerificationResponse>(await this.callApi(params, req, runtime), new CancelQualificationVerificationResponse({}));
  }

  async cancelQualificationVerification(request: CancelQualificationVerificationRequest): Promise<CancelQualificationVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelQualificationVerificationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async cancelTask(request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDomain",
      version: "2018-01-29",
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

  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async checkDomainSunriseClaim(request: CheckDomainSunriseClaimRequest): Promise<CheckDomainSunriseClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainSunriseClaimWithOptions(request, runtime);
  }

  async checkMaxYearOfServerLockWithOptions(request: CheckMaxYearOfServerLockRequest, runtime: $Util.RuntimeOptions): Promise<CheckMaxYearOfServerLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkAction)) {
      query["CheckAction"] = request.checkAction;
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
      action: "CheckMaxYearOfServerLock",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMaxYearOfServerLockResponse>(await this.callApi(params, req, runtime), new CheckMaxYearOfServerLockResponse({}));
  }

  async checkMaxYearOfServerLock(request: CheckMaxYearOfServerLockRequest): Promise<CheckMaxYearOfServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMaxYearOfServerLockWithOptions(request, runtime);
  }

  async checkProcessingServerLockApplyWithOptions(request: CheckProcessingServerLockApplyRequest, runtime: $Util.RuntimeOptions): Promise<CheckProcessingServerLockApplyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
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
      action: "CheckProcessingServerLockApply",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckProcessingServerLockApplyResponse>(await this.callApi(params, req, runtime), new CheckProcessingServerLockApplyResponse({}));
  }

  async checkProcessingServerLockApply(request: CheckProcessingServerLockApplyRequest): Promise<CheckProcessingServerLockApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkProcessingServerLockApplyWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async checkTransferInFeasibility(request: CheckTransferInFeasibilityRequest): Promise<CheckTransferInFeasibilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTransferInFeasibilityWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async confirmTransferInEmail(request: ConfirmTransferInEmailRequest): Promise<ConfirmTransferInEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmTransferInEmailWithOptions(request, runtime);
  }

  async deleteContactTemplatesWithOptions(request: DeleteContactTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.registrantProfileIds)) {
      query["RegistrantProfileIds"] = request.registrantProfileIds;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContactTemplates",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteContactTemplatesResponse({}));
  }

  async deleteContactTemplates(request: DeleteContactTemplatesRequest): Promise<DeleteContactTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactTemplatesWithOptions(request, runtime);
  }

  async deleteDomainGroupWithOptions(request: DeleteDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainGroupId)) {
      query["DomainGroupId"] = request.domainGroupId;
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
      action: "DeleteDomainGroup",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainGroupResponse>(await this.callApi(params, req, runtime), new DeleteDomainGroupResponse({}));
  }

  async deleteDomainGroup(request: DeleteDomainGroupRequest): Promise<DeleteDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainGroupWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async deleteEmailVerification(request: DeleteEmailVerificationRequest): Promise<DeleteEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEmailVerificationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async deleteRegistrantProfile(request: DeleteRegistrantProfileRequest): Promise<DeleteRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRegistrantProfileWithOptions(request, runtime);
  }

  async domainSpecialBizCancelWithOptions(request: DomainSpecialBizCancelRequest, runtime: $Util.RuntimeOptions): Promise<DomainSpecialBizCancelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DomainSpecialBizCancel",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DomainSpecialBizCancelResponse>(await this.callApi(params, req, runtime), new DomainSpecialBizCancelResponse({}));
  }

  async domainSpecialBizCancel(request: DomainSpecialBizCancelRequest): Promise<DomainSpecialBizCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.domainSpecialBizCancelWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async emailVerified(request: EmailVerifiedRequest): Promise<EmailVerifiedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emailVerifiedWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async fuzzyMatchDomainSensitiveWord(request: FuzzyMatchDomainSensitiveWordRequest): Promise<FuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  async getOperationOssUploadPolicyWithOptions(request: GetOperationOssUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetOperationOssUploadPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditType)) {
      query["AuditType"] = request.auditType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOperationOssUploadPolicy",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOperationOssUploadPolicyResponse>(await this.callApi(params, req, runtime), new GetOperationOssUploadPolicyResponse({}));
  }

  async getOperationOssUploadPolicy(request: GetOperationOssUploadPolicyRequest): Promise<GetOperationOssUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationOssUploadPolicyWithOptions(request, runtime);
  }

  async getQualificationUploadPolicyWithOptions(request: GetQualificationUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetQualificationUploadPolicyResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "GetQualificationUploadPolicy",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualificationUploadPolicyResponse>(await this.callApi(params, req, runtime), new GetQualificationUploadPolicyResponse({}));
  }

  async getQualificationUploadPolicy(request: GetQualificationUploadPolicyRequest): Promise<GetQualificationUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualificationUploadPolicyWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async listEmailVerification(request: ListEmailVerificationRequest): Promise<ListEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmailVerificationWithOptions(request, runtime);
  }

  async listServerLockWithOptions(request: ListServerLockRequest, runtime: $Util.RuntimeOptions): Promise<ListServerLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginStartDate)) {
      query["BeginStartDate"] = request.beginStartDate;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endExpireDate)) {
      query["EndExpireDate"] = request.endExpireDate;
    }

    if (!Util.isUnset(request.endStartDate)) {
      query["EndStartDate"] = request.endStartDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lockProductId)) {
      query["LockProductId"] = request.lockProductId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderByType)) {
      query["OrderByType"] = request.orderByType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serverLockStatus)) {
      query["ServerLockStatus"] = request.serverLockStatus;
    }

    if (!Util.isUnset(request.startExpireDate)) {
      query["StartExpireDate"] = request.startExpireDate;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServerLock",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServerLockResponse>(await this.callApi(params, req, runtime), new ListServerLockResponse({}));
  }

  async listServerLock(request: ListServerLockRequest): Promise<ListServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerLockWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async lookupTmchNotice(request: LookupTmchNoticeRequest): Promise<LookupTmchNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupTmchNoticeWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async pollTaskResult(request: PollTaskResultRequest): Promise<PollTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pollTaskResultWithOptions(request, runtime);
  }

  async queryAdvancedDomainListWithOptions(request: QueryAdvancedDomainListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAdvancedDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainGroupId)) {
      query["DomainGroupId"] = request.domainGroupId;
    }

    if (!Util.isUnset(request.domainNameSort)) {
      query["DomainNameSort"] = request.domainNameSort;
    }

    if (!Util.isUnset(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!Util.isUnset(request.endExpirationDate)) {
      query["EndExpirationDate"] = request.endExpirationDate;
    }

    if (!Util.isUnset(request.endLength)) {
      query["EndLength"] = request.endLength;
    }

    if (!Util.isUnset(request.endRegistrationDate)) {
      query["EndRegistrationDate"] = request.endRegistrationDate;
    }

    if (!Util.isUnset(request.excluded)) {
      query["Excluded"] = request.excluded;
    }

    if (!Util.isUnset(request.excludedPrefix)) {
      query["ExcludedPrefix"] = request.excludedPrefix;
    }

    if (!Util.isUnset(request.excludedSuffix)) {
      query["ExcludedSuffix"] = request.excludedSuffix;
    }

    if (!Util.isUnset(request.expirationDateSort)) {
      query["ExpirationDateSort"] = request.expirationDateSort;
    }

    if (!Util.isUnset(request.form)) {
      query["Form"] = request.form;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.keyWordPrefix)) {
      query["KeyWordPrefix"] = request.keyWordPrefix;
    }

    if (!Util.isUnset(request.keyWordSuffix)) {
      query["KeyWordSuffix"] = request.keyWordSuffix;
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

    if (!Util.isUnset(request.productDomainType)) {
      query["ProductDomainType"] = request.productDomainType;
    }

    if (!Util.isUnset(request.productDomainTypeSort)) {
      query["ProductDomainTypeSort"] = request.productDomainTypeSort;
    }

    if (!Util.isUnset(request.registrationDateSort)) {
      query["RegistrationDateSort"] = request.registrationDateSort;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startExpirationDate)) {
      query["StartExpirationDate"] = request.startExpirationDate;
    }

    if (!Util.isUnset(request.startLength)) {
      query["StartLength"] = request.startLength;
    }

    if (!Util.isUnset(request.startRegistrationDate)) {
      query["StartRegistrationDate"] = request.startRegistrationDate;
    }

    if (!Util.isUnset(request.suffixs)) {
      query["Suffixs"] = request.suffixs;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tradeType)) {
      query["TradeType"] = request.tradeType;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAdvancedDomainList",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAdvancedDomainListResponse>(await this.callApi(params, req, runtime), new QueryAdvancedDomainListResponse({}));
  }

  async queryAdvancedDomainList(request: QueryAdvancedDomainListRequest): Promise<QueryAdvancedDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAdvancedDomainListWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryArtExtension(request: QueryArtExtensionRequest): Promise<QueryArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryArtExtensionWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryChangeLogList(request: QueryChangeLogListRequest): Promise<QueryChangeLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChangeLogListWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryContactInfo(request: QueryContactInfoRequest): Promise<QueryContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryContactInfoWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryDSRecord(request: QueryDSRecordRequest): Promise<QueryDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDSRecordWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryDnsHost(request: QueryDnsHostRequest): Promise<QueryDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDnsHostWithOptions(request, runtime);
  }

  async queryDomainAdminDivisionWithOptions(request: QueryDomainAdminDivisionRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainAdminDivisionResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "QueryDomainAdminDivision",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainAdminDivisionResponse>(await this.callApi(params, req, runtime), new QueryDomainAdminDivisionResponse({}));
  }

  async queryDomainAdminDivision(request: QueryDomainAdminDivisionRequest): Promise<QueryDomainAdminDivisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainAdminDivisionWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryDomainByDomainName(request: QueryDomainByDomainNameRequest): Promise<QueryDomainByDomainNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByDomainNameWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryDomainByInstanceId(request: QueryDomainByInstanceIdRequest): Promise<QueryDomainByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByInstanceIdWithOptions(request, runtime);
  }

  async queryDomainGroupListWithOptions(request: QueryDomainGroupListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainGroupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainGroupName)) {
      query["DomainGroupName"] = request.domainGroupName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.showDeletingGroup)) {
      query["ShowDeletingGroup"] = request.showDeletingGroup;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainGroupList",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainGroupListResponse>(await this.callApi(params, req, runtime), new QueryDomainGroupListResponse({}));
  }

  async queryDomainGroupList(request: QueryDomainGroupListRequest): Promise<QueryDomainGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainGroupListWithOptions(request, runtime);
  }

  async queryDomainListWithOptions(request: QueryDomainListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccompany)) {
      query["Ccompany"] = request.ccompany;
    }

    if (!Util.isUnset(request.domainGroupId)) {
      query["DomainGroupId"] = request.domainGroupId;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startExpirationDate)) {
      query["StartExpirationDate"] = request.startExpirationDate;
    }

    if (!Util.isUnset(request.startRegistrationDate)) {
      query["StartRegistrationDate"] = request.startRegistrationDate;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainList",
      version: "2018-01-29",
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

  async queryDomainList(request: QueryDomainListRequest): Promise<QueryDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainListWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryDomainRealNameVerificationInfo(request: QueryDomainRealNameVerificationInfoRequest): Promise<QueryDomainRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainRealNameVerificationInfoWithOptions(request, runtime);
  }

  async queryDomainSpecialBizDetailWithOptions(request: QueryDomainSpecialBizDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainSpecialBizDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainSpecialBizDetail",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainSpecialBizDetailResponse>(await this.callApi(params, req, runtime), new QueryDomainSpecialBizDetailResponse({}));
  }

  async queryDomainSpecialBizDetail(request: QueryDomainSpecialBizDetailRequest): Promise<QueryDomainSpecialBizDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainSpecialBizDetailWithOptions(request, runtime);
  }

  async queryDomainSpecialBizInfoByDomainWithOptions(request: QueryDomainSpecialBizInfoByDomainRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainSpecialBizInfoByDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainSpecialBizInfoByDomain",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainSpecialBizInfoByDomainResponse>(await this.callApi(params, req, runtime), new QueryDomainSpecialBizInfoByDomainResponse({}));
  }

  async queryDomainSpecialBizInfoByDomain(request: QueryDomainSpecialBizInfoByDomainRequest): Promise<QueryDomainSpecialBizInfoByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainSpecialBizInfoByDomainWithOptions(request, runtime);
  }

  async queryDomainSuffixWithOptions(request: QueryDomainSuffixRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainSuffixResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "QueryDomainSuffix",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainSuffixResponse>(await this.callApi(params, req, runtime), new QueryDomainSuffixResponse({}));
  }

  async queryDomainSuffix(request: QueryDomainSuffixRequest): Promise<QueryDomainSuffixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainSuffixWithOptions(request, runtime);
  }

  async queryEmailVerificationWithOptions(request: QueryEmailVerificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryEmailVerificationResponse> {
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
      action: "QueryEmailVerification",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEmailVerificationResponse>(await this.callApi(params, req, runtime), new QueryEmailVerificationResponse({}));
  }

  async queryEmailVerification(request: QueryEmailVerificationRequest): Promise<QueryEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEmailVerificationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryEnsAssociation(request: QueryEnsAssociationRequest): Promise<QueryEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEnsAssociationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryFailReasonForDomainRealNameVerification(request: QueryFailReasonForDomainRealNameVerificationRequest): Promise<QueryFailReasonForDomainRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForDomainRealNameVerificationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryFailReasonForRegistrantProfileRealNameVerification(request: QueryFailReasonForRegistrantProfileRealNameVerificationRequest): Promise<QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  async queryFailingReasonListForQualificationWithOptions(request: QueryFailingReasonListForQualificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFailingReasonListForQualificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.qualificationType)) {
      query["QualificationType"] = request.qualificationType;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFailingReasonListForQualification",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFailingReasonListForQualificationResponse>(await this.callApi(params, req, runtime), new QueryFailingReasonListForQualificationResponse({}));
  }

  async queryFailingReasonListForQualification(request: QueryFailingReasonListForQualificationRequest): Promise<QueryFailingReasonListForQualificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailingReasonListForQualificationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryLocalEnsAssociation(request: QueryLocalEnsAssociationRequest): Promise<QueryLocalEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLocalEnsAssociationWithOptions(request, runtime);
  }

  async queryOperationAuditInfoDetailWithOptions(request: QueryOperationAuditInfoDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryOperationAuditInfoDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditRecordId)) {
      query["AuditRecordId"] = request.auditRecordId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOperationAuditInfoDetail",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOperationAuditInfoDetailResponse>(await this.callApi(params, req, runtime), new QueryOperationAuditInfoDetailResponse({}));
  }

  async queryOperationAuditInfoDetail(request: QueryOperationAuditInfoDetailRequest): Promise<QueryOperationAuditInfoDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOperationAuditInfoDetailWithOptions(request, runtime);
  }

  async queryOperationAuditInfoListWithOptions(request: QueryOperationAuditInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOperationAuditInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.auditType)) {
      query["AuditType"] = request.auditType;
    }

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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOperationAuditInfoList",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOperationAuditInfoListResponse>(await this.callApi(params, req, runtime), new QueryOperationAuditInfoListResponse({}));
  }

  async queryOperationAuditInfoList(request: QueryOperationAuditInfoListRequest): Promise<QueryOperationAuditInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOperationAuditInfoListWithOptions(request, runtime);
  }

  async queryQualificationDetailWithOptions(request: QueryQualificationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryQualificationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.qualificationType)) {
      query["QualificationType"] = request.qualificationType;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryQualificationDetail",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryQualificationDetailResponse>(await this.callApi(params, req, runtime), new QueryQualificationDetailResponse({}));
  }

  async queryQualificationDetail(request: QueryQualificationDetailRequest): Promise<QueryQualificationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryQualificationDetailWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryRegistrantProfileRealNameVerificationInfo(request: QueryRegistrantProfileRealNameVerificationInfoRequest): Promise<QueryRegistrantProfileRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfileRealNameVerificationInfoWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.zhRegistrantOrganization)) {
      query["ZhRegistrantOrganization"] = request.zhRegistrantOrganization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRegistrantProfiles",
      version: "2018-01-29",
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

  async queryRegistrantProfiles(request: QueryRegistrantProfilesRequest): Promise<QueryRegistrantProfilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfilesWithOptions(request, runtime);
  }

  async queryServerLockWithOptions(request: QueryServerLockRequest, runtime: $Util.RuntimeOptions): Promise<QueryServerLockResponse> {
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
      action: "QueryServerLock",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryServerLockResponse>(await this.callApi(params, req, runtime), new QueryServerLockResponse({}));
  }

  async queryServerLock(request: QueryServerLockRequest): Promise<QueryServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServerLockWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryTaskDetailHistory(request: QueryTaskDetailHistoryRequest): Promise<QueryTaskDetailHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailHistoryWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryTaskDetailList(request: QueryTaskDetailListRequest): Promise<QueryTaskDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailListWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryTaskInfoHistory(request: QueryTaskInfoHistoryRequest): Promise<QueryTaskInfoHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskInfoHistoryWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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
      version: "2018-01-29",
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

  async queryTransferInByInstanceId(request: QueryTransferInByInstanceIdRequest): Promise<QueryTransferInByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInByInstanceIdWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryTransferInList(request: QueryTransferInListRequest): Promise<QueryTransferInListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInListWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async queryTransferOutInfo(request: QueryTransferOutInfoRequest): Promise<QueryTransferOutInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferOutInfoWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async registrantProfileRealNameVerification(request: RegistrantProfileRealNameVerificationRequest): Promise<RegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registrantProfileRealNameVerificationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async resendEmailVerification(request: ResendEmailVerificationRequest): Promise<ResendEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendEmailVerificationWithOptions(request, runtime);
  }

  async resetQualificationVerificationWithOptions(request: ResetQualificationVerificationRequest, runtime: $Util.RuntimeOptions): Promise<ResetQualificationVerificationResponse> {
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
      action: "ResetQualificationVerification",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetQualificationVerificationResponse>(await this.callApi(params, req, runtime), new ResetQualificationVerificationResponse({}));
  }

  async resetQualificationVerification(request: ResetQualificationVerificationRequest): Promise<ResetQualificationVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetQualificationVerificationWithOptions(request, runtime);
  }

  async saveBatchDomainRemarkWithOptions(request: SaveBatchDomainRemarkRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchDomainRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchDomainRemark",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchDomainRemarkResponse>(await this.callApi(params, req, runtime), new SaveBatchDomainRemarkResponse({}));
  }

  async saveBatchDomainRemark(request: SaveBatchDomainRemarkRequest): Promise<SaveBatchDomainRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchDomainRemarkWithOptions(request, runtime);
  }

  async saveBatchTaskForApplyQuickTransferOutOpenlyWithOptions(request: SaveBatchTaskForApplyQuickTransferOutOpenlyRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForApplyQuickTransferOutOpenlyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
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
      action: "SaveBatchTaskForApplyQuickTransferOutOpenly",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForApplyQuickTransferOutOpenlyResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForApplyQuickTransferOutOpenlyResponse({}));
  }

  async saveBatchTaskForApplyQuickTransferOutOpenly(request: SaveBatchTaskForApplyQuickTransferOutOpenlyRequest): Promise<SaveBatchTaskForApplyQuickTransferOutOpenlyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForApplyQuickTransferOutOpenlyWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForCreatingOrderActivate(request: SaveBatchTaskForCreatingOrderActivateRequest): Promise<SaveBatchTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForCreatingOrderRedeem(request: SaveBatchTaskForCreatingOrderRedeemRequest): Promise<SaveBatchTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForCreatingOrderRenew(request: SaveBatchTaskForCreatingOrderRenewRequest): Promise<SaveBatchTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForCreatingOrderTransfer(request: SaveBatchTaskForCreatingOrderTransferRequest): Promise<SaveBatchTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  async saveBatchTaskForDomainNameProxyServiceWithOptions(request: SaveBatchTaskForDomainNameProxyServiceRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForDomainNameProxyServiceResponse> {
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
      action: "SaveBatchTaskForDomainNameProxyService",
      version: "2018-01-29",
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

  async saveBatchTaskForDomainNameProxyService(request: SaveBatchTaskForDomainNameProxyServiceRequest): Promise<SaveBatchTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  async saveBatchTaskForGenerateDomainCertificateWithOptions(tmpReq: SaveBatchTaskForGenerateDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForGenerateDomainCertificateResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveBatchTaskForGenerateDomainCertificateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.domainNames)) {
      request.domainNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.domainNames, "DomainNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.domainNamesShrink)) {
      query["DomainNames"] = request.domainNamesShrink;
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
      action: "SaveBatchTaskForGenerateDomainCertificate",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForGenerateDomainCertificateResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForGenerateDomainCertificateResponse({}));
  }

  async saveBatchTaskForGenerateDomainCertificate(request: SaveBatchTaskForGenerateDomainCertificateRequest): Promise<SaveBatchTaskForGenerateDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForGenerateDomainCertificateWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForModifyingDomainDns(request: SaveBatchTaskForModifyingDomainDnsRequest): Promise<SaveBatchTaskForModifyingDomainDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForModifyingDomainDnsWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForReserveDropListDomain(request: SaveBatchTaskForReserveDropListDomainRequest): Promise<SaveBatchTaskForReserveDropListDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForReserveDropListDomainWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForTransferProhibitionLock(request: SaveBatchTaskForTransferProhibitionLockRequest): Promise<SaveBatchTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveBatchTaskForUpdateProhibitionLock(request: SaveBatchTaskForUpdateProhibitionLockRequest): Promise<SaveBatchTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.zhAddress)) {
      query["ZhAddress"] = request.zhAddress;
    }

    if (!Util.isUnset(request.zhCity)) {
      query["ZhCity"] = request.zhCity;
    }

    if (!Util.isUnset(request.zhProvince)) {
      query["ZhProvince"] = request.zhProvince;
    }

    if (!Util.isUnset(request.zhRegistrantName)) {
      query["ZhRegistrantName"] = request.zhRegistrantName;
    }

    if (!Util.isUnset(request.zhRegistrantOrganization)) {
      query["ZhRegistrantOrganization"] = request.zhRegistrantOrganization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForUpdatingContactInfoByNewContact",
      version: "2018-01-29",
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

  async saveBatchTaskForUpdatingContactInfoByNewContact(request: SaveBatchTaskForUpdatingContactInfoByNewContactRequest): Promise<SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request, runtime);
  }

  async saveBatchTaskForUpdatingContactInfoByRegistrantProfileIdWithOptions(request: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse> {
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
      action: "SaveBatchTaskForUpdatingContactInfoByRegistrantProfileId",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse({}));
  }

  async saveBatchTaskForUpdatingContactInfoByRegistrantProfileId(request: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest): Promise<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByRegistrantProfileIdWithOptions(request, runtime);
  }

  async saveDomainGroupWithOptions(request: SaveDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<SaveDomainGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainGroupId)) {
      query["DomainGroupId"] = request.domainGroupId;
    }

    if (!Util.isUnset(request.domainGroupName)) {
      query["DomainGroupName"] = request.domainGroupName;
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
      action: "SaveDomainGroup",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveDomainGroupResponse>(await this.callApi(params, req, runtime), new SaveDomainGroupResponse({}));
  }

  async saveDomainGroup(request: SaveDomainGroupRequest): Promise<SaveDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveDomainGroupWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.zhAddress)) {
      query["ZhAddress"] = request.zhAddress;
    }

    if (!Util.isUnset(request.zhCity)) {
      query["ZhCity"] = request.zhCity;
    }

    if (!Util.isUnset(request.zhProvince)) {
      query["ZhProvince"] = request.zhProvince;
    }

    if (!Util.isUnset(request.zhRegistrantName)) {
      query["ZhRegistrantName"] = request.zhRegistrantName;
    }

    if (!Util.isUnset(request.zhRegistrantOrganization)) {
      query["ZhRegistrantOrganization"] = request.zhRegistrantOrganization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveRegistrantProfile",
      version: "2018-01-29",
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

  async saveRegistrantProfile(request: SaveRegistrantProfileRequest): Promise<SaveRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRegistrantProfileWithOptions(request, runtime);
  }

  async saveRegistrantProfileRealNameVerificationWithOptions(request: SaveRegistrantProfileRealNameVerificationRequest, runtime: $Util.RuntimeOptions): Promise<SaveRegistrantProfileRealNameVerificationResponse> {
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

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.identityCredential)) {
      query["IdentityCredential"] = request.identityCredential;
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

    if (!Util.isUnset(request.zhAddress)) {
      query["ZhAddress"] = request.zhAddress;
    }

    if (!Util.isUnset(request.zhCity)) {
      query["ZhCity"] = request.zhCity;
    }

    if (!Util.isUnset(request.zhProvince)) {
      query["ZhProvince"] = request.zhProvince;
    }

    if (!Util.isUnset(request.zhRegistrantName)) {
      query["ZhRegistrantName"] = request.zhRegistrantName;
    }

    if (!Util.isUnset(request.zhRegistrantOrganization)) {
      query["ZhRegistrantOrganization"] = request.zhRegistrantOrganization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveRegistrantProfileRealNameVerification",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveRegistrantProfileRealNameVerificationResponse>(await this.callApi(params, req, runtime), new SaveRegistrantProfileRealNameVerificationResponse({}));
  }

  async saveRegistrantProfileRealNameVerification(request: SaveRegistrantProfileRealNameVerificationRequest): Promise<SaveRegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRegistrantProfileRealNameVerificationWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForAddingDSRecord(request: SaveSingleTaskForAddingDSRecordRequest): Promise<SaveSingleTaskForAddingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAddingDSRecordWithOptions(request, runtime);
  }

  async saveSingleTaskForApplyQuickTransferOutOpenlyWithOptions(request: SaveSingleTaskForApplyQuickTransferOutOpenlyRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForApplyQuickTransferOutOpenlyResponse> {
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
      action: "SaveSingleTaskForApplyQuickTransferOutOpenly",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForApplyQuickTransferOutOpenlyResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForApplyQuickTransferOutOpenlyResponse({}));
  }

  async saveSingleTaskForApplyQuickTransferOutOpenly(request: SaveSingleTaskForApplyQuickTransferOutOpenlyRequest): Promise<SaveSingleTaskForApplyQuickTransferOutOpenlyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForApplyQuickTransferOutOpenlyWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForApprovingTransferOut(request: SaveSingleTaskForApprovingTransferOutRequest): Promise<SaveSingleTaskForApprovingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForApprovingTransferOutWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForAssociatingEns(request: SaveSingleTaskForAssociatingEnsRequest): Promise<SaveSingleTaskForAssociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAssociatingEnsWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForCancelingTransferIn(request: SaveSingleTaskForCancelingTransferInRequest): Promise<SaveSingleTaskForCancelingTransferInResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferInWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForCancelingTransferOut(request: SaveSingleTaskForCancelingTransferOutRequest): Promise<SaveSingleTaskForCancelingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferOutWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForCreatingDnsHost(request: SaveSingleTaskForCreatingDnsHostRequest): Promise<SaveSingleTaskForCreatingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingDnsHostWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

    if (!Util.isUnset(request.zhAddress)) {
      query["ZhAddress"] = request.zhAddress;
    }

    if (!Util.isUnset(request.zhCity)) {
      query["ZhCity"] = request.zhCity;
    }

    if (!Util.isUnset(request.zhProvince)) {
      query["ZhProvince"] = request.zhProvince;
    }

    if (!Util.isUnset(request.zhRegistrantName)) {
      query["ZhRegistrantName"] = request.zhRegistrantName;
    }

    if (!Util.isUnset(request.zhRegistrantOrganization)) {
      query["ZhRegistrantOrganization"] = request.zhRegistrantOrganization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForCreatingOrderActivate",
      version: "2018-01-29",
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

  async saveSingleTaskForCreatingOrderActivate(request: SaveSingleTaskForCreatingOrderActivateRequest): Promise<SaveSingleTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForCreatingOrderRedeem(request: SaveSingleTaskForCreatingOrderRedeemRequest): Promise<SaveSingleTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForCreatingOrderRenew(request: SaveSingleTaskForCreatingOrderRenewRequest): Promise<SaveSingleTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForCreatingOrderTransfer(request: SaveSingleTaskForCreatingOrderTransferRequest): Promise<SaveSingleTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForDeletingDSRecord(request: SaveSingleTaskForDeletingDSRecordRequest): Promise<SaveSingleTaskForDeletingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDSRecordWithOptions(request, runtime);
  }

  async saveSingleTaskForDeletingDnsHostWithOptions(request: SaveSingleTaskForDeletingDnsHostRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForDeletingDnsHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dnsName)) {
      query["DnsName"] = request.dnsName;
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
      action: "SaveSingleTaskForDeletingDnsHost",
      version: "2018-01-29",
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

  async saveSingleTaskForDeletingDnsHost(request: SaveSingleTaskForDeletingDnsHostRequest): Promise<SaveSingleTaskForDeletingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDnsHostWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForDisassociatingEns(request: SaveSingleTaskForDisassociatingEnsRequest): Promise<SaveSingleTaskForDisassociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDisassociatingEnsWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForDomainNameProxyService(request: SaveSingleTaskForDomainNameProxyServiceRequest): Promise<SaveSingleTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  async saveSingleTaskForGenerateDomainCertificateWithOptions(request: SaveSingleTaskForGenerateDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForGenerateDomainCertificateResponse> {
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
      action: "SaveSingleTaskForGenerateDomainCertificate",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForGenerateDomainCertificateResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForGenerateDomainCertificateResponse({}));
  }

  async saveSingleTaskForGenerateDomainCertificate(request: SaveSingleTaskForGenerateDomainCertificateRequest): Promise<SaveSingleTaskForGenerateDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForGenerateDomainCertificateWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForModifyingDSRecord(request: SaveSingleTaskForModifyingDSRecordRequest): Promise<SaveSingleTaskForModifyingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDSRecordWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForModifyingDnsHost(request: SaveSingleTaskForModifyingDnsHostRequest): Promise<SaveSingleTaskForModifyingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDnsHostWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForQueryingTransferAuthorizationCode(request: SaveSingleTaskForQueryingTransferAuthorizationCodeRequest): Promise<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForSaveArtExtension(request: SaveSingleTaskForSaveArtExtensionRequest): Promise<SaveSingleTaskForSaveArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSaveArtExtensionWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForSynchronizingDSRecord(request: SaveSingleTaskForSynchronizingDSRecordRequest): Promise<SaveSingleTaskForSynchronizingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDSRecordWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForSynchronizingDnsHost(request: SaveSingleTaskForSynchronizingDnsHostRequest): Promise<SaveSingleTaskForSynchronizingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDnsHostWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForTransferProhibitionLock(request: SaveSingleTaskForTransferProhibitionLockRequest): Promise<SaveSingleTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForUpdateProhibitionLock(request: SaveSingleTaskForUpdateProhibitionLockRequest): Promise<SaveSingleTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveSingleTaskForUpdatingContactInfo(request: SaveSingleTaskForUpdatingContactInfoRequest): Promise<SaveSingleTaskForUpdatingContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdatingContactInfoWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveTaskForSubmittingDomainDelete(request: SaveTaskForSubmittingDomainDeleteRequest): Promise<SaveTaskForSubmittingDomainDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainDeleteWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(request: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(request: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.zhAddress)) {
      query["ZhAddress"] = request.zhAddress;
    }

    if (!Util.isUnset(request.zhCity)) {
      query["ZhCity"] = request.zhCity;
    }

    if (!Util.isUnset(request.zhProvince)) {
      query["ZhProvince"] = request.zhProvince;
    }

    if (!Util.isUnset(request.zhRegistrantName)) {
      query["ZhRegistrantName"] = request.zhRegistrantName;
    }

    if (!Util.isUnset(request.zhRegistrantOrganization)) {
      query["ZhRegistrantOrganization"] = request.zhRegistrantOrganization;
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
      version: "2018-01-29",
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

  async saveTaskForUpdatingRegistrantInfoByIdentityCredential(request: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest): Promise<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileID(request: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest): Promise<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request, runtime);
  }

  /**
    * If you have a large number of domain names, a slow response may occur when you call an API operation to query domain names. In this case, you can call this operation to query domain names more quickly. When you call this operation for the first time, specify the request parameters except ScrollId. A scroll ID is returned without other data. In the second request, use the scroll ID obtained from the previous response. In subsequent requests, the newly specified request parameters do not take effect, and the request parameters that are specified in the first request prevail.
    *
    * @param request ScrollDomainListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ScrollDomainListResponse
   */
  async scrollDomainListWithOptions(request: ScrollDomainListRequest, runtime: $Util.RuntimeOptions): Promise<ScrollDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainGroupId)) {
      query["DomainGroupId"] = request.domainGroupId;
    }

    if (!Util.isUnset(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!Util.isUnset(request.endExpirationDate)) {
      query["EndExpirationDate"] = request.endExpirationDate;
    }

    if (!Util.isUnset(request.endLength)) {
      query["EndLength"] = request.endLength;
    }

    if (!Util.isUnset(request.endRegistrationDate)) {
      query["EndRegistrationDate"] = request.endRegistrationDate;
    }

    if (!Util.isUnset(request.excluded)) {
      query["Excluded"] = request.excluded;
    }

    if (!Util.isUnset(request.excludedPrefix)) {
      query["ExcludedPrefix"] = request.excludedPrefix;
    }

    if (!Util.isUnset(request.excludedSuffix)) {
      query["ExcludedSuffix"] = request.excludedSuffix;
    }

    if (!Util.isUnset(request.form)) {
      query["Form"] = request.form;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.keyWordPrefix)) {
      query["KeyWordPrefix"] = request.keyWordPrefix;
    }

    if (!Util.isUnset(request.keyWordSuffix)) {
      query["KeyWordSuffix"] = request.keyWordSuffix;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productDomainType)) {
      query["ProductDomainType"] = request.productDomainType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scrollId)) {
      query["ScrollId"] = request.scrollId;
    }

    if (!Util.isUnset(request.startExpirationDate)) {
      query["StartExpirationDate"] = request.startExpirationDate;
    }

    if (!Util.isUnset(request.startLength)) {
      query["StartLength"] = request.startLength;
    }

    if (!Util.isUnset(request.startRegistrationDate)) {
      query["StartRegistrationDate"] = request.startRegistrationDate;
    }

    if (!Util.isUnset(request.suffixs)) {
      query["Suffixs"] = request.suffixs;
    }

    if (!Util.isUnset(request.tradeType)) {
      query["TradeType"] = request.tradeType;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScrollDomainList",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScrollDomainListResponse>(await this.callApi(params, req, runtime), new ScrollDomainListResponse({}));
  }

  /**
    * If you have a large number of domain names, a slow response may occur when you call an API operation to query domain names. In this case, you can call this operation to query domain names more quickly. When you call this operation for the first time, specify the request parameters except ScrollId. A scroll ID is returned without other data. In the second request, use the scroll ID obtained from the previous response. In subsequent requests, the newly specified request parameters do not take effect, and the request parameters that are specified in the first request prevail.
    *
    * @param request ScrollDomainListRequest
    * @return ScrollDomainListResponse
   */
  async scrollDomainList(request: ScrollDomainListRequest): Promise<ScrollDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scrollDomainListWithOptions(request, runtime);
  }

  async setDefaultRegistrantProfileWithOptions(request: SetDefaultRegistrantProfileRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultRegistrantProfileResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "SetDefaultRegistrantProfile",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultRegistrantProfileResponse>(await this.callApi(params, req, runtime), new SetDefaultRegistrantProfileResponse({}));
  }

  async setDefaultRegistrantProfile(request: SetDefaultRegistrantProfileRequest): Promise<SetDefaultRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultRegistrantProfileWithOptions(request, runtime);
  }

  async setupDomainAutoRenewWithOptions(request: SetupDomainAutoRenewRequest, runtime: $Util.RuntimeOptions): Promise<SetupDomainAutoRenewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetupDomainAutoRenew",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetupDomainAutoRenewResponse>(await this.callApi(params, req, runtime), new SetupDomainAutoRenewResponse({}));
  }

  async setupDomainAutoRenew(request: SetupDomainAutoRenewRequest): Promise<SetupDomainAutoRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupDomainAutoRenewWithOptions(request, runtime);
  }

  async submitDomainSpecialBizCredentialsWithOptions(request: SubmitDomainSpecialBizCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDomainSpecialBizCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.credentials)) {
      body["Credentials"] = request.credentials;
    }

    if (!Util.isUnset(request.extend)) {
      body["Extend"] = request.extend;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDomainSpecialBizCredentials",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDomainSpecialBizCredentialsResponse>(await this.callApi(params, req, runtime), new SubmitDomainSpecialBizCredentialsResponse({}));
  }

  async submitDomainSpecialBizCredentials(request: SubmitDomainSpecialBizCredentialsRequest): Promise<SubmitDomainSpecialBizCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDomainSpecialBizCredentialsWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async submitEmailVerification(request: SubmitEmailVerificationRequest): Promise<SubmitEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitEmailVerificationWithOptions(request, runtime);
  }

  async submitOperationAuditInfoWithOptions(request: SubmitOperationAuditInfoRequest, runtime: $Util.RuntimeOptions): Promise<SubmitOperationAuditInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditInfo)) {
      query["AuditInfo"] = request.auditInfo;
    }

    if (!Util.isUnset(request.auditType)) {
      query["AuditType"] = request.auditType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitOperationAuditInfo",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitOperationAuditInfoResponse>(await this.callApi(params, req, runtime), new SubmitOperationAuditInfoResponse({}));
  }

  async submitOperationAuditInfo(request: SubmitOperationAuditInfoRequest): Promise<SubmitOperationAuditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOperationAuditInfoWithOptions(request, runtime);
  }

  async submitOperationCredentialsWithOptions(request: SubmitOperationCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitOperationCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditRecordId)) {
      query["AuditRecordId"] = request.auditRecordId;
    }

    if (!Util.isUnset(request.auditType)) {
      query["AuditType"] = request.auditType;
    }

    if (!Util.isUnset(request.credentials)) {
      query["Credentials"] = request.credentials;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regType)) {
      query["RegType"] = request.regType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitOperationCredentials",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitOperationCredentialsResponse>(await this.callApi(params, req, runtime), new SubmitOperationCredentialsResponse({}));
  }

  async submitOperationCredentials(request: SubmitOperationCredentialsRequest): Promise<SubmitOperationCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOperationCredentialsWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async transferInCheckMailToken(request: TransferInCheckMailTokenRequest): Promise<TransferInCheckMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInCheckMailTokenWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async transferInReenterTransferAuthorizationCode(request: TransferInReenterTransferAuthorizationCodeRequest): Promise<TransferInReenterTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInReenterTransferAuthorizationCodeWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async transferInRefetchWhoisEmail(request: TransferInRefetchWhoisEmailRequest): Promise<TransferInRefetchWhoisEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInRefetchWhoisEmailWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async transferInResendMailToken(request: TransferInResendMailTokenRequest): Promise<TransferInResendMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInResendMailTokenWithOptions(request, runtime);
  }

  async updateDomainToDomainGroupWithOptions(request: UpdateDomainToDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainToDomainGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.domainGroupId)) {
      query["DomainGroupId"] = request.domainGroupId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileToUpload)) {
      body["FileToUpload"] = request.fileToUpload;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomainToDomainGroup",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainToDomainGroupResponse>(await this.callApi(params, req, runtime), new UpdateDomainToDomainGroupResponse({}));
  }

  async updateDomainToDomainGroup(request: UpdateDomainToDomainGroupRequest): Promise<UpdateDomainToDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainToDomainGroupWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.zhAddress)) {
      query["ZhAddress"] = request.zhAddress;
    }

    if (!Util.isUnset(request.zhCity)) {
      query["ZhCity"] = request.zhCity;
    }

    if (!Util.isUnset(request.zhProvince)) {
      query["ZhProvince"] = request.zhProvince;
    }

    if (!Util.isUnset(request.zhRegistrantName)) {
      query["ZhRegistrantName"] = request.zhRegistrantName;
    }

    if (!Util.isUnset(request.zhRegistrantOrganization)) {
      query["ZhRegistrantOrganization"] = request.zhRegistrantOrganization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyContactField",
      version: "2018-01-29",
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

  async verifyContactField(request: VerifyContactFieldRequest): Promise<VerifyContactFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyContactFieldWithOptions(request, runtime);
  }

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
      version: "2018-01-29",
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

  async verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyEmailWithOptions(request, runtime);
  }

}
