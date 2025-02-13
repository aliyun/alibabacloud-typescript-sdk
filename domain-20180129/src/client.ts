// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcknowledgeTaskResultRequest extends $tea.Model {
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2659c29493e94416b297a7691340ccc4
   */
  taskDetailNo?: string[];
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * D6CB3623-4726-4947-AC2B-2C6E673B447C
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com,aliyundoc.com
   */
  keyword?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * C560A803-B975-481D-A66B-A4395EA863A1
   */
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
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * *   **DOMAINAUDIT**: review a domain name review.
   * *   **AUDITCONTACT**: review a contact.
   * 
   * This parameter is required.
   * 
   * @example
   * AUDITCONTACT
   */
  actionType?: string;
  /**
   * @remarks
   * Thee instance ID of the domain name. You can call the [QueryDomainList](https://help.aliyun.com/document_detail/67712.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * S2019270W570xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client. Set the value to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AC0AF67-D303-4EB9-B20E-B4D4B2C3F97B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @example
   * en
   */
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
  /**
   * @example
   * 9KFCF6F8-243C-40EC-8035-4B12KKFD7D90
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * knet
   */
  qualificationType?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7f217ae0-61f5-42e2-a1c3-42bad0124****
   */
  taskNo?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 010E55C9-C64C-4C85-9BB2-7C225ADA6C86
   */
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
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-aek2tcx7os7bkmq
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20227H17A561968
   */
  resourceId?: string;
  /**
   * @example
   * Domain
   */
  resourceType?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 4EA05A10-D4BC-47EA-AD9E-370A46BB4FB9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test**.xin
   */
  domainName?: string;
  /**
   * @example
   * create
   */
  feeCommand?: string;
  /**
   * @example
   * USD
   */
  feeCurrency?: string;
  /**
   * @example
   * 1
   */
  feePeriod?: number;
  /**
   * @example
   * en
   */
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
  /**
   * @example
   * 1
   */
  avail?: string;
  /**
   * @example
   * test**.xin
   */
  domainName?: string;
  /**
   * @example
   * true
   */
  dynamicCheck?: boolean;
  /**
   * @example
   * true
   */
  premium?: string;
  /**
   * @example
   * 1286
   */
  price?: number;
  /**
   * @example
   * In use
   */
  reason?: string;
  /**
   * @example
   * BA7A4FD4-EB9A-4A20-BB0C-9AEB15634DC1
   */
  requestId?: string;
  staticPriceInfo?: CheckDomainResponseBodyStaticPriceInfo;
  static names(): { [key: string]: string } {
    return {
      avail: 'Avail',
      domainName: 'DomainName',
      dynamicCheck: 'DynamicCheck',
      premium: 'Premium',
      price: 'Price',
      reason: 'Reason',
      requestId: 'RequestId',
      staticPriceInfo: 'StaticPriceInfo',
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
      staticPriceInfo: CheckDomainResponseBodyStaticPriceInfo,
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 2017092100/8/2/1/kDfu9htHGEx_y-LJ3XSlKMZ70000020001
   */
  claimKey?: string;
  /**
   * @example
   * BA7A4FD4-EB9A-4A20-BB0C-9AEB15634DC1
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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

export class CheckIntlFixPriceDomainStatusRequest extends $tea.Model {
  /**
   * @example
   * appp16.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIntlFixPriceDomainStatusResponseBody extends $tea.Model {
  module?: CheckIntlFixPriceDomainStatusResponseBodyModule;
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: CheckIntlFixPriceDomainStatusResponseBodyModule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIntlFixPriceDomainStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckIntlFixPriceDomainStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckIntlFixPriceDomainStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMaxYearOfServerLockRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * activate
   */
  checkAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 10
   */
  maxYear?: number;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  feePeriod?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * test
   */
  transferAuthorizationCode?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * false
   */
  canTransfer?: boolean;
  /**
   * @example
   * CheckTransferResult.DomainTransferProhibited
   */
  code?: string;
  /**
   * @example
   * This domain name is in transfer prohibited status, so it cannot be transferred. You can contact your original registrar to change its status.
   */
  message?: string;
  /**
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @example
   * FC0D6B89-2353-4D64-BD80-6606A7DBD7C1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  domainName?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@test.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
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

export class CreateIntlFixedPriceDomainOrderRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * 13350500
   */
  contactId?: number;
  /**
   * @example
   * appp16.com
   */
  domain?: string;
  /**
   * @example
   * 58.00
   */
  expectedPrice?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      contactId: 'ContactId',
      domain: 'Domain',
      expectedPrice: 'ExpectedPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      contactId: 'number',
      domain: 'string',
      expectedPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntlFixedPriceDomainOrderResponseBody extends $tea.Model {
  module?: CreateIntlFixedPriceDomainOrderResponseBodyModule;
  /**
   * @example
   * E879DC07-38EE-4408-9F33-73B30CD965CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: CreateIntlFixedPriceDomainOrderResponseBodyModule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntlFixedPriceDomainOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIntlFixedPriceDomainOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIntlFixedPriceDomainOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  registrantProfileIds?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 4D73432C-7600-4779-ACBB-C3B5CA145D32
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1@aliyun.com,test2@aliyun.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 7A3D0E4A-0D4B-4BD0-90D7-A61DF8DD26AE
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3600000
   */
  registrantProfileId?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * C50E41A0-09F1-4491-8DB8-AF55BD2D0CC8
   */
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
  /**
   * @remarks
   * The business ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3666
   */
  bizId?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application for which the error code is returned.
   * 
   * @example
   * test-com
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * -
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The array of error parameters that are returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 110001
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code that is directly returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * -
   */
  module?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 096DCF79-A89A-5CED-B7DE-1B04761023B9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether to perform synchronous processing.
   * 
   * @example
   * True
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc@aliyun.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * BF014B60-C708-4253-B5F2-3F9B493F398B
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx**.cn
   */
  keyword?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * true
   */
  exist?: boolean;
  /**
   * @example
   * xxx**.cn
   */
  keyword?: string;
  matchedSentiveWords?: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords;
  /**
   * @example
   * D15F91FD-0B34-4E48-8CBF-EFA5D2A31586
   */
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

export class GetIntlFixPriceDomainListUrlRequest extends $tea.Model {
  /**
   * @example
   * 20240809
   */
  listDate?: string;
  static names(): { [key: string]: string } {
    return {
      listDate: 'ListDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlFixPriceDomainListUrlResponseBody extends $tea.Model {
  module?: GetIntlFixPriceDomainListUrlResponseBodyModule;
  /**
   * @example
   * BF014B60-C708-4253-B5F2-3F9B493F398B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: GetIntlFixPriceDomainListUrlResponseBodyModule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlFixPriceDomainListUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIntlFixPriceDomainListUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIntlFixPriceDomainListUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationOssUploadPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @example
   * en
   */
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
  /**
   * @example
   * hObpgEXoca42****
   */
  accessid?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAaMC0wNy0wMlQxKToyMDoxMS44ODRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiMTIxOTU0MTE2MTIxMzA1Ny9PRkZMSU5FX1RSQU5TRkVSLzE1OTM2ODg1MTE4ODMi****
   */
  encodedPolicy?: string;
  /**
   * @example
   * 1593688811881
   */
  expireTime?: string;
  /**
   * @example
   * 1219541161213157/OFFLINE_TRANSFER/159368851****
   */
  fileDir?: string;
  /**
   * @remarks
   * OSS Endpoint。
   * 
   * @example
   * //***-basic-cert.oss-cn-***.aliyuncs.com/
   */
  host?: string;
  /**
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D011
   */
  requestId?: string;
  /**
   * @example
   * pNVECGkyL0tl4bKXekV5ErZ****
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * hObpgEXoca42****
   */
  accessid?: string;
  /**
   * @example
   * 20211220/131953297274****_4de3db85-4f98-488d-845b-d75bf035b13d
   */
  dir?: string;
  /**
   * @example
   * 1593688811881
   */
  expire?: string;
  /**
   * @example
   * https://********-review.oss-cn-********.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAaMC0wNy0wMlQxKToyMDoxMS44ODRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiMTIxOTU0MTE2MTIxMzA1Ny9PRkZMSU5FX1RSQU5TRkVSLzE1OTM2ODg1MTE4ODMi****
   */
  policy?: string;
  /**
   * @example
   * 20211220/131953297274****_4de3db85-4f98-488d-845b-d75bf035b13d_${filename}
   */
  prefix?: string;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @example
   * pNVECGkyL0tl4bKXekV5ErZ****
   */
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
  /**
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: ListEmailVerificationResponseBodyData[];
  /**
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * 78C60CC3-FF0A-44E2-989A-DDE0597791C3
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalItemNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * @example
   * 2021-07-10 17:37:36
   */
  beginStartDate?: number;
  /**
   * @remarks
   * The domain name for which you want to query the enabled registry lock.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the expiration time.
   * 
   * @example
   * 2021-07-10 17:37:36
   */
  endExpireDate?: number;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-07-10 17:37:36
   */
  endStartDate?: number;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the product to which the domain name with the registry lock enabled belongs.
   * 
   * @example
   * 1807**
   */
  lockProductId?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   EXPIRE_DATE
   * 
   * @example
   * EXPIRE_DATE
   */
  orderBy?: string;
  /**
   * @remarks
   * The order of the information based on which you want to sort the domain names, such as the registration date and expiration date. Valid values: ASC and DESC. The value ASC specifies the ascending order. The value DESC specifies the descending order. If this parameter is not configured, the default value DESC is used.
   * 
   * @example
   * DESC
   */
  orderByType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the registry lock. Valid values:
   * 
   * *   1: The registry lock is not enabled.
   * *   2: The registry lock is enabled.
   * *   3: The registry lock is disabled.
   * 
   * @example
   * 1
   */
  serverLockStatus?: number;
  /**
   * @remarks
   * The start of the expiration time.
   * 
   * @example
   * 2020-07-10 17:37:36
   */
  startExpireDate?: number;
  /**
   * @remarks
   * The IP address of the client. For example, you can set the value to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 0
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListServerLockResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the current page is preceded by a page.
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017092100/8/2/1/kDfu9htHGEx_y-LJ3XSlKMZ70000020001
   */
  claimKey?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 586608000000
   */
  id?: number;
  /**
   * @example
   * noted
   */
  label?: string;
  /**
   * @example
   * 2018-10-15T00:00:00.0Z
   */
  notAfter?: string;
  /**
   * @example
   * 2018-10-13T00:00:00.0Z
   */
  notBefore?: string;
  /**
   * @example
   * 01C10C8E-0468-468C-BCD9-E709BDD0AE8F
   */
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
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * S20181T0WLI85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * 2
   */
  taskResultStatus?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: PollTaskResultResponseBodyData;
  /**
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * E879DC07-38EE-4408-9F33-73B30CD965CD
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalItemNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * -1
   */
  domainGroupId?: number;
  /**
   * @example
   * false
   */
  domainNameSort?: boolean;
  /**
   * @example
   * 1
   */
  domainStatus?: number;
  /**
   * @example
   * 1522080000000
   */
  endExpirationDate?: number;
  /**
   * @example
   * 5
   */
  endLength?: number;
  /**
   * @example
   * 1522080000000
   */
  endRegistrationDate?: number;
  /**
   * @example
   * test
   */
  excluded?: string;
  /**
   * @example
   * false
   */
  excludedPrefix?: boolean;
  /**
   * @example
   * false
   */
  excludedSuffix?: boolean;
  /**
   * @example
   * false
   */
  expirationDateSort?: boolean;
  /**
   * @example
   * 1
   */
  form?: number;
  isPremiumDomain?: boolean;
  /**
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @example
   * false
   */
  keyWordPrefix?: boolean;
  /**
   * @example
   * true
   */
  keyWordSuffix?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * gTLD
   */
  productDomainType?: string;
  /**
   * @example
   * false
   */
  productDomainTypeSort?: boolean;
  /**
   * @example
   * false
   */
  registrationDateSort?: boolean;
  /**
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1522080000000
   */
  startExpirationDate?: number;
  /**
   * @example
   * 5
   */
  startLength?: number;
  /**
   * @example
   * 1522080000000
   */
  startRegistrationDate?: number;
  /**
   * @example
   * com.cn
   */
  suffixs?: string;
  tag?: QueryAdvancedDomainListRequestTag[];
  /**
   * @example
   * -1
   */
  tradeType?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
      isPremiumDomain: 'IsPremiumDomain',
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
      isPremiumDomain: 'boolean',
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
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryAdvancedDomainListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * D200000-C0B9-4CD3-B92A-9B44A000000
   */
  requestId?: string;
  /**
   * @example
   * 549
   */
  totalItemNum?: number;
  /**
   * @example
   * 275
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.art
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 2019-10-01
   */
  dateOrPeriod?: string;
  /**
   * @example
   * 20 cm
   */
  dimensions?: string;
  /**
   * @example
   * iconicity
   */
  features?: string;
  /**
   * @example
   * realism
   */
  inscriptionsAndMarkings?: string;
  /**
   * @example
   * zhang san
   */
  maker?: string;
  /**
   * @example
   * silk
   */
  materialsAndTechniques?: string;
  /**
   * @example
   * The embroidery
   */
  objectType?: string;
  /**
   * @example
   * drawings
   */
  reference?: string;
  /**
   * @example
   * 814B2AF0-ED6F-4C13-B41C-8AC0B1023583
   */
  requestId?: string;
  /**
   * @example
   * peace
   */
  subject?: string;
  /**
   * @example
   * Peace and friendship
   */
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
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 1522080000000
   */
  endDate?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 1522080000000
   */
  startDate?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryChangeLogListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * 2DEDFF32-7827-46B1-BE90-3DB8ABD91A58
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  resultLimit?: boolean;
  /**
   * @example
   * 1000
   */
  totalItemNum?: number;
  /**
   * @example
   * 1000
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * admin
   */
  contactType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * xi hu qu *** jiedao *** xiaoqu *** zhuang 101
   */
  address?: string;
  /**
   * @example
   * hang zhou shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * 2019-03-20 11:37:29
   */
  createDate?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 310024
   */
  postalCode?: string;
  /**
   * @example
   * zhe jiang
   */
  province?: string;
  /**
   * @example
   * zhang san
   */
  registrantName?: string;
  /**
   * @example
   * zhang san
   */
  registrantOrganization?: string;
  /**
   * @example
   * C39ECA8A-BB5E-4F92-B013-6A032FA06B04
   */
  requestId?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 1820000****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 814B2AF0-ED6F-4C13-B41C-8AC0B1023583
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ST2017120814571100001303
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 18A313DD-3AF3-40AA-84F9-56BA45DC511F
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 4EA05A10-D4BC-47EA-AD9E-370A46BB4FB9
   */
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
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The Domain Name System (DNS) servers of the domain name.
   */
  dnsList?: QueryDomainByDomainNameResponseBodyDnsList;
  /**
   * @remarks
   * The ID of the domain name group. You can call the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) operation to query the ID of the domain name group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * The name of the domain name group.
   */
  domainGroupName?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether privacy protection is enabled for the domain name.
   * 
   * @example
   * false
   */
  domainNameProxyService?: boolean;
  /**
   * @remarks
   * The status of name auditing for the domain name. Valid values:
   * 
   * *   **NONAUDIT**: The name auditing for the domain name is not performed.
   * *   **SUCCEED**: The name auditing for the domain name is successful.
   * *   **FAILED**: The name auditing for the domain name fails.
   * *   **AUDITING**: The name auditing for the domain name is in progress.
   * 
   * @example
   * SUCCEED
   */
  domainNameVerificationStatus?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   1: The domain name needs to be renewed.
   * *   2: The domain name needs to be redeemed.
   * *   3: The domain name is normal.
   * 
   * @example
   * 3
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   New gTLD
   * *   gTLD
   * *   ccTLD
   * 
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @remarks
   * The email address of the domain name registrant.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the domain name is in the ClientHold state.
   * 
   * @example
   * false
   */
  emailVerificationClientHold?: boolean;
  /**
   * @remarks
   * Indicates whether the email address passes verification. Valid values:
   * 
   * *   **0**: The email address fails the verification.
   * *   **1**: The email address passes the verification.
   * 
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  /**
   * @remarks
   * The number of days from the expiration date of the domain name to the current date.
   * 
   * @example
   * 356
   */
  expirationCurrDateDiff?: number;
  /**
   * @remarks
   * The expiration date.
   * 
   * @example
   * 2019-12-07 17:02:13
   */
  expirationDate?: string;
  /**
   * @remarks
   * The timestamp generated when the domain name expired.
   * 
   * @example
   * 1625111915000
   */
  expirationDateLong?: number;
  /**
   * @remarks
   * Indicates whether the domain name expires. Valid values:
   * 
   * *   **1**: The domain name does not expire.
   * *   **2**: The domain name expires.
   * 
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * @example
   * S20179H1BBI9****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the domain name is a premium domain name.
   * 
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @remarks
   * The status of real-name verification for the domain name. Valid values:
   * 
   * *   **NONAUDIT**: The real-name verification is not performed.
   * *   **SUCCEED**: The real-name verification is successful.
   * *   **FAILED**: The real-name verification fails.
   * *   **AUDITING**: The real-name verification is in progress.
   * 
   * @example
   * NONAUDIT
   */
  realNameStatus?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * Test litm
   */
  registrantName?: string;
  /**
   * @remarks
   * The registrant of the domain name.
   * 
   * @example
   * Test litm
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The type of contact who registers the domain name. Valid values:
   * 
   * *   **1**: individual.
   * *   **2**: enterprise.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The status of the information about the domain name registrant. Valid values:
   * 
   * *   **PENDING**: The information about the domain name registrant is being modified.
   * *   **NORMAL**: normal.
   * 
   * @example
   * NORMAL
   */
  registrantUpdatingStatus?: string;
  /**
   * @remarks
   * The time when the domain name was registered.
   * 
   * @example
   * 2017-12-07 17:02:13
   */
  registrationDate?: string;
  /**
   * @remarks
   * The timestamp generated when the domain name was registered.
   * 
   * @example
   * 1584675448000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The remarks on the domain name.
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 44101664-3E70-4F0E-89E5-CCB74BF*****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: QueryDomainByDomainNameResponseBodyTag;
  /**
   * @remarks
   * The transfer status of the domain name. Valid values:
   * 
   * *   **NORMAL**: The domain name is normal.
   * *   **PENDING**: The domain name is being transferred out from Alibaba Cloud.
   * 
   * @example
   * NORMAL
   */
  transferOutStatus?: string;
  /**
   * @remarks
   * The status of the transfer lock for the domain name. Valid values:
   * 
   * *   **NONE_SETTING**: No transfer lock is configured.
   * *   **OPEN**: The transfer lock is enabled.
   * *   **CLOSE**: The transfer lock is disabled.
   * 
   * @example
   * CLOSE
   */
  transferProhibitionLock?: string;
  /**
   * @remarks
   * The status of the security lock for the domain name. Valid values:
   * 
   * *   **NONE_SETTING**: No security lock is configured.
   * *   **OPEN**: The security lock is enabled.
   * *   **CLOSE**: The security lock is disabled.
   * 
   * @example
   * CLOSE
   */
  updateProhibitionLock?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 121000000****
   */
  userId?: string;
  /**
   * @remarks
   * The Chinese name of the domain name contact.
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * The Chinese name of the domain name registrant.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20131205001****
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1234
   */
  domainGroupId?: number;
  domainGroupName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  domainNameProxyService?: boolean;
  /**
   * @example
   * NONAUDIT
   */
  domainNameVerificationStatus?: string;
  /**
   * @example
   * 1
   */
  domainStatus?: string;
  /**
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * false
   */
  emailVerificationClientHold?: boolean;
  /**
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  /**
   * @example
   * 356
   */
  expirationCurrDateDiff?: number;
  /**
   * @example
   * 2019-12-07 17:02:13
   */
  expirationDate?: string;
  /**
   * @example
   * 1625111915000
   */
  expirationDateLong?: number;
  /**
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @example
   * S20179H1BBI9test
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @example
   * NONAUDIT
   */
  realNameStatus?: string;
  /**
   * @example
   * Test litm
   */
  registrantName?: string;
  /**
   * @example
   * Test litm
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * NORMAL
   */
  registrantUpdatingStatus?: string;
  /**
   * @example
   * 2017-12-07 17:02:13
   */
  registrationDate?: string;
  /**
   * @example
   * 1625111915000
   */
  registrationDateLong?: number;
  remark?: string;
  /**
   * @example
   * 23C9B3C4-9E2C-4405-A88D-BD33E459D140
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  tag?: QueryDomainByInstanceIdResponseBodyTag;
  /**
   * @example
   * NORMAL
   */
  transferOutStatus?: string;
  /**
   * @example
   * CLOSE
   */
  transferProhibitionLock?: string;
  /**
   * @example
   * CLOSE
   */
  updateProhibitionLock?: string;
  /**
   * @example
   * 121000000****
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * false
   */
  showDeletingGroup?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 80011ABC-F573-4795-B0E8-377BFBBA3422
   */
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
  /**
   * @remarks
   * The name of the domain name registrant.
   * 
   * @example
   * Guangzhou Jinye Renewable Resources Recycling Co., Ltd
   */
  ccompany?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: string;
  /**
   * @remarks
   * The domain name that you want to search for.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query domain names based on expiration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  endExpirationDate?: number;
  /**
   * @remarks
   * The end of the time range to query domain names based on registration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  endRegistrationDate?: number;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The order of the information based on which the domain names are sorted, such as the registration date and expiration date. Valid values:
   * 
   * *   **ASC**: ascending order
   * *   **DESC**: descending order
   * 
   * >  If this parameter is not specified, the default value **DESC** is used.
   * 
   * @example
   * ASC
   */
  orderByType?: string;
  /**
   * @remarks
   * The field that you use to sort the domain names. Valid values:
   * 
   * *   **RegistrationDate**: registration date
   * *   **ExpirationDate**: expiration date
   * 
   * >  If this parameter is not specified, the domain names are sorted by the time when they were added to the database.
   * 
   * @example
   * RegistrationDate
   */
  orderKeyType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **New gTLD**: new generic top-level domain names
   * *   **gTLD**: generic top-level domain names
   * *   **ccTLD**: country code top-level domain names
   * 
   * @example
   * New gTLD
   */
  productDomainType?: string;
  /**
   * @remarks
   * The category of the domain names that you want to query. Valid values:
   * 
   * *   **1**: the domain names that need to be renewed
   * *   **2**: the domain names that need to be redeemed
   * 
   * @example
   * 1
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2indvyxgpfti
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query domain names based on expiration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  startExpirationDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query domain names based on registration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  startRegistrationDate?: number;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: QueryDomainListRequestTag[];
  /**
   * @remarks
   * The IP address of the client. Set the value to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 0
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The domain names.
   */
  data?: QueryDomainListResponseBodyData;
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the current page is preceded by a page.
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B7AB5469-5E38-4AA9-A920-C65B7A9C8E6E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names returned.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  fetchImage?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @example
   * 5****************9
   */
  identityCredentialNo?: string;
  /**
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * http://dbu-nap-p.oss-cn-hangzhou.aliyuncs.com/20190219/140692647406xxxx_5d6baea3e7314fd986afdd86e33exxxx.jpg
   */
  identityCredentialUrl?: string;
  /**
   * @example
   * S2019270W570****
   */
  instanceId?: string;
  /**
   * @example
   * 4DF9D693-0D5B-4EB7-8922-7ECA6BD59314
   */
  requestId?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
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
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 123
   */
  bizId?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application for which the error code is returned.
   * 
   * @example
   * test-com
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * -
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The array of error parameters that are returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 110001
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code that is directly returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned data.
   */
  module?: QueryDomainSpecialBizDetailResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A83E1D74-E46B-505C-947A-8C6B7E41C011
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether to perform synchronous processing.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * govRegister
   */
  bizType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application for which the error code is returned.
   * 
   * @example
   * test-com
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * -
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The array of error parameters that are returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 110001
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code that is directly returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned data.
   */
  module?: QueryDomainSpecialBizInfoByDomainResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97663DFF-D24D-55AE-A577-6CC5AF20B732
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether to perform synchronous processing.
   * 
   * @example
   * true
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * D1C9DE44-1D7F-4F66-9653-00000
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc@aliyun.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 42.*.*.31
   */
  confirmIp?: string;
  /**
   * @example
   * abc@aliyun.com
   */
  email?: string;
  /**
   * @example
   * 72b36ba0572e423bbb3f19640896****
   */
  emailVerificationNo?: string;
  /**
   * @example
   * 2019-02-19 16:38:07
   */
  gmtCreate?: string;
  /**
   * @example
   * 2019-02-19 16:40:38
   */
  gmtModified?: string;
  /**
   * @example
   * FC4F7D02-8A83-4E37-B935-2D48A1B8423E
   */
  requestId?: string;
  /**
   * @example
   * 42.*.*.115
   */
  sendIp?: string;
  /**
   * @example
   * 2019-02-19 16:38:07
   */
  tokenSendTime?: string;
  /**
   * @example
   * 140692647406****
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  verificationStatus?: number;
  /**
   * @example
   * 2019-02-19 16:40:38
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.luxe
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 0x123456789012345678901234567890123456****
   */
  address?: string;
  /**
   * @example
   * 3ECD5439-39A2-477D-9A19-64FCA1F77EEB
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ACTIVATE
   */
  realNameVerificationAction?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1F1BA893-AD33-4248-8CB8-1657E3733052
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileID?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 548C407F-AEA2-4B5D-90DF-EC11EBB1D76F
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * knet
   */
  qualificationType?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
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

export class QueryIntlFixedPriceOrderListRequest extends $tea.Model {
  /**
   * @example
   * T2024061115213700****
   */
  bizId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 6
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntlFixedPriceOrderListResponseBody extends $tea.Model {
  module?: QueryIntlFixedPriceOrderListResponseBodyModule;
  /**
   * @example
   * D6CB3623-4726-4947-AC2B-2C6E673B447C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: QueryIntlFixedPriceOrderListResponseBodyModule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntlFixedPriceOrderListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryIntlFixedPriceOrderListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryIntlFixedPriceOrderListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalEnsAssociationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.luxe
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 3ECD5439-39A2-477D-9A19-64FCA1F77EEB
   */
  address?: string;
  /**
   * @example
   * 0x1234567890123456789012345678901234567890
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @example
   * en
   */
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
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @example
   * 1
   */
  auditType?: number;
  businessName?: string;
  /**
   * @example
   * 1581919010100
   */
  createTime?: number;
  /**
   * @example
   * example.com,aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  remark?: string;
  /**
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D1L
   */
  requestId?: string;
  /**
   * @example
   * 1581919010101
   */
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
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * 2
   */
  currentPageNum?: number;
  data?: QueryOperationAuditInfoListResponseBodyData[];
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  prePage?: boolean;
  /**
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @example
   * 199
   */
  totalItemNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * knet
   */
  qualificationType?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  credentials?: QueryQualificationDetailResponseBodyCredentials;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @example
   * 943a1662898a****0acbdbeca91
   */
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
  /**
   * @example
   * false
   */
  fetchImage?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @example
   * 4111111111111110**
   */
  identityCredentialNo?: string;
  /**
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg
   */
  identityCredentialUrl?: string;
  /**
   * @example
   * 2017-05-22 19:04:49
   */
  modificationDate?: string;
  /**
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * 4D73432C-7600-4779-ACBB-C3B5CA145D32
   */
  requestId?: string;
  /**
   * @example
   * 2017-05-22 19:04:49
   */
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
  /**
   * @example
   * false
   */
  defaultRegistrantProfile?: boolean;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @example
   * SUCCEED
   */
  realNameStatus?: string;
  /**
   * @example
   * li si
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * common
   */
  registrantProfileType?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  remark?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
      remark: 'Remark',
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
      remark: 'string',
      userClientIp: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  registrantProfiles?: QueryRegistrantProfilesResponseBodyRegistrantProfiles;
  /**
   * @example
   * 94053D79-7455-4F71-BF06-20EB2DEDE6BD
   */
  requestId?: string;
  /**
   * @example
   * 9
   */
  totalItemNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * S20190N1DAI4****
   */
  domainInstanceId?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2030-07-10 17:37:36
   */
  expireDate?: string;
  /**
   * @example
   * 2021-07-10 17:37:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-07-10 17:37:36
   */
  gmtModified?: string;
  /**
   * @example
   * S2021591IQ28****
   */
  lockInstanceId?: string;
  /**
   * @example
   * 1807**
   */
  lockProductId?: string;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  serverLockStatus?: number;
  /**
   * @example
   * 2021-07-10 17:37:36
   */
  startDate?: string;
  /**
   * @example
   * 121000000****
   */
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
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * example.com
   */
  domainNameCursor?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec
   */
  taskDetailNoCursor?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 2
   */
  pageSize?: number;
  prePageCursor?: QueryTaskDetailHistoryResponseBodyPrePageCursor;
  /**
   * @example
   * 548CAE74-88F8-402F-8C12-97E747389C51
   */
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
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * S20179H1BBI9test
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @example
   * 127.0.0.0
   */
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
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryTaskDetailListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * 6A2320E4-D870-49C9-A6DC-test
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @example
   * 1522080000000
   */
  createTimeCursor?: number;
  /**
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNoCursor?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 2
   */
  pageSize?: number;
  prePageCursor?: QueryTaskInfoHistoryResponseBodyPrePageCursor;
  /**
   * @example
   * EB3FCCBA-CA1F-4D31-9F34-test
   */
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
  /**
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryTaskListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * 8D7D294A-8E99-481F-B64C-017EFC793059
   */
  requestId?: string;
  /**
   * @example
   * 43
   */
  totalItemNum?: number;
  /**
   * @example
   * 22
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20181T0WLI85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  expirationDate?: string;
  /**
   * @example
   * 1514428524669
   */
  expirationDateLong?: number;
  /**
   * @example
   * S20181T0WLI85212
   */
  instanceId?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  modificationDate?: string;
  /**
   * @example
   * 1514428524669
   */
  modificationDateLong?: number;
  /**
   * @example
   * true
   */
  needMailCheck?: boolean;
  /**
   * @example
   * 0
   */
  progressBarType?: number;
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @example
   * clientCancelled
   */
  resultCode?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  resultDate?: string;
  /**
   * @example
   * 1514428524669
   */
  resultDateLong?: number;
  resultMsg?: string;
  /**
   * @example
   * SUCCESS
   */
  simpleTransferInStatus?: string;
  /**
   * @example
   * 11
   */
  status?: number;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  submissionDate?: string;
  /**
   * @example
   * 1514428524669
   */
  submissionDateLong?: number;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  transferAuthorizationCodeSubmissionDate?: string;
  /**
   * @example
   * 1514428524669
   */
  transferAuthorizationCodeSubmissionDateLong?: number;
  /**
   * @example
   * 123456
   */
  userId?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * INIT
   */
  simpleTransferInStatus?: string;
  /**
   * @example
   * 1514428524669
   */
  submissionEndDate?: number;
  /**
   * @example
   * 1514428524669
   */
  submissionStartDate?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryTransferInListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @example
   * 40
   */
  totalItemNum?: number;
  /**
   * @example
   * 2
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 2018-04-13 19:57:56
   */
  expirationDate?: string;
  /**
   * @example
   * 2018-04-13 19:57:56
   */
  pendingRequestDate?: string;
  /**
   * @example
   * BBEC5A50-DFDF-482E-8343-B4EB0105E055
   */
  requestId?: string;
  /**
   * @example
   * clientRejected
   */
  resultCode?: string;
  /**
   * @example
   * Transfer out rejected
   */
  resultMsg?: string;
  /**
   * @example
   * 8
   */
  status?: number;
  /**
   * @example
   * 2018-04-13 19:57:56
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 43012512345678****
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileID?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 51D584A2-0CCD-4336-AD7D-1AD4C67B5545
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1@aliyun.com,test2@aliyun.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 0EA54E99-DB48-4CE3-A099-6ED8E451B8AC
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * D6CB3623-4726-4947-AC2B-2C6E673B447C
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S12344567
   */
  instanceIds?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * MyRemarkInfo
   */
  remark?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 4189E320-961E-4786-8E15-0000
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * D6CB3623-4726-4947-AC2B-2C6E673B447C
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderActivateParam?: SaveBatchTaskForCreatingOrderActivateRequestOrderActivateParam[];
  /**
   * @example
   * 123124
   */
  promotionNo?: string;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderRedeemParam?: SaveBatchTaskForCreatingOrderRedeemRequestOrderRedeemParam[];
  /**
   * @example
   * 123213123
   */
  promotionNo?: string;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @example
   * 12312412
   */
  couponNo?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderRenewParam?: SaveBatchTaskForCreatingOrderRenewRequestOrderRenewParam[];
  /**
   * @example
   * 123123123
   */
  promotionNo?: string;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderTransferParam?: SaveBatchTaskForCreatingOrderTransferRequestOrderTransferParam[];
  /**
   * @example
   * 123123
   */
  promotionNo?: string;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1.com,test2.com,test3.com
   */
  domainName?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f54923
   */
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
  /**
   * @remarks
   * The domain names.
   * 
   * This parameter is required.
   */
  domainNames?: string[];
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The domain names.
   * 
   * This parameter is required.
   */
  domainNamesShrink?: string;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8b1cd755-4928-4b02-adee-e5d41d7b1939
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  aliyunDns?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @example
   * ns1.test.com
   */
  domainNameServer?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 6A862A8A-E7AB-4C4E-8946-A74122D9CC4B
   */
  requestId?: string;
  /**
   * @example
   * 35fb2fb7-d4d6-4478-9408-22cb63696b86
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  contactTemplateId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * B7AB5469-5E38-4AA9-A920-C65B7A9C8E6E
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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

export class SaveBatchTaskForTransferOutByAuthorizationCodeRequest extends $tea.Model {
  /**
   * @example
   * en
   */
  long?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transferOutParamList?: SaveBatchTaskForTransferOutByAuthorizationCodeRequestTransferOutParamList[];
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      long: 'Long',
      transferOutParamList: 'TransferOutParamList',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      long: 'string',
      transferOutParamList: { 'type': 'array', 'itemType': SaveBatchTaskForTransferOutByAuthorizationCodeRequestTransferOutParamList },
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForTransferOutByAuthorizationCodeResponseBody extends $tea.Model {
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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

export class SaveBatchTaskForTransferOutByAuthorizationCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveBatchTaskForTransferOutByAuthorizationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBatchTaskForTransferOutByAuthorizationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForTransferProhibitionLockRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1.com
   */
  domainName?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyundoc.com
   */
  domainName?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registrant
   */
  contactType?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alibabacloud.com
   */
  domainName?: string[];
  /**
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 123456
   */
  postalCode?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1235
   */
  telExt?: string;
  /**
   * @example
   * 1234567890
   */
  telephone?: string;
  /**
   * @example
   * false
   */
  transferOutProhibited?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 464AF466-CA8E-43A8-B61D-test
   */
  requestId?: string;
  /**
   * @example
   * 65de2165-ca09-491f-9fe0-test
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registrant
   */
  contactType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantProfileId?: number;
  /**
   * @example
   * true
   */
  transferOutProhibited?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * EDC28FEC-6BE0-4583-95BC
   */
  requestId?: string;
  /**
   * @example
   * 880f1579-be51-4dd3-a69d
   */
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
  /**
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  domainGroupName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * false
   */
  beingDeleted?: boolean;
  /**
   * @example
   * 2018-04-02 15:59:06
   */
  creationDate?: string;
  /**
   * @example
   * 123456
   */
  domainGroupId?: number;
  domainGroupName?: string;
  /**
   * @example
   * COMPLETE
   */
  domainGroupStatus?: string;
  /**
   * @example
   * 2018-04-02 15:59:06
   */
  modificationDate?: string;
  /**
   * @example
   * 80011ABC-F573-4795-B0E8-377BFBBA3422
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * zhe jiang sheng hang zhou shi shi li qu shi li zhen shi li da sha 1001 hao
   */
  address?: string;
  /**
   * @example
   * hang zhou shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * false
   */
  defaultRegistrantProfile?: boolean;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 310024
   */
  postalCode?: string;
  /**
   * @example
   * zhe jiang
   */
  province?: string;
  /**
   * @example
   * li si
   */
  registrantName?: string;
  /**
   * @example
   * li si
   */
  registrantOrganization?: string;
  /**
   * @example
   * 3600000
   */
  registrantProfileId?: number;
  /**
   * @example
   * common
   */
  registrantProfileType?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 1829756****
   */
  telephone?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 3600000
   */
  registrantProfileId?: number;
  /**
   * @example
   * D09B153B-294D-42F1-BB61-F1C72136DFD3
   */
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
  /**
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @example
   * 4111111111111110**
   */
  identityCredentialNo?: string;
  /**
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1234567
   */
  postalCode?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * common
   */
  registrantProfileType?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * 4D73432C-7600-****-ACBB-C3B5CA145D32
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598
   */
  digest?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  digestType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  keyTag?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e142
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * D200000-C0B9-4CD3-B92A-9B44A000000
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0x1234567890123456789012345678901234567890
   */
  address?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.luxe
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e142
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dns1
   */
  dnsName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S1234567890
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 218.xx.xx.236
   */
  ip?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 0F1B3547-BE50-4206-8F78-9540FFB85BC1
   */
  requestId?: string;
  /**
   * @example
   * e9b8e8b4-7334-4548-9cec-c30b6891f292
   */
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
  /**
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @example
   * true
   */
  aliyunDns?: boolean;
  /**
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @example
   * ns1.aliyun.com
   */
  dns1?: string;
  /**
   * @example
   * ns2.aliyun.com
   */
  dns2?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * false
   */
  enableDomainProxy?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * false
   */
  permitPremiumActivation?: boolean;
  /**
   * @example
   * 1234567
   */
  postalCode?: string;
  /**
   * @example
   * 123123
   */
  promotionNo?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @example
   * 123
   */
  registrantProfileId?: number;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * rg-XX
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1
   */
  subscriptionDuration?: number;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @example
   * false
   */
  trademarkDomainActivation?: boolean;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0000
   */
  currentExpirationDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 123123
   */
  promotionNo?: string;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @example
   * 123123
   */
  couponNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0000
   */
  currentExpirationDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 123132
   */
  promotionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  subscriptionDuration?: number;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testCode
   */
  authorizationCode?: string;
  /**
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * false
   */
  permitPremiumTransfer?: boolean;
  /**
   * @example
   * 123456
   */
  promotionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  registrantProfileId?: number;
  /**
   * @example
   * false
   */
  useCoupon?: boolean;
  /**
   * @example
   * false
   */
  usePromotion?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  keyTag?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e142
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dns1
   */
  dnsName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S2019270W570xxxx
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 8fc97e44-837a-447d-ac61-ea28d2fe8a38
   */
  requestId?: string;
  /**
   * @example
   * 8fc97e44-837a-447d-ac61-ea28d2fexxxx
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.luxe
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e142
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E68AB12-3D1F-5B9A-A358-F6B7852AD0B6
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2741a831-d9ea-4dfb-af94-61948c0478c3
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598
   */
  digest?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  digestType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  keyTag?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e142
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dns1
   */
  dnsName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 218.xx.xx.236
   */
  ip?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 0F1B3547-BE50-4206-8F78-9540FFB85BC1
   */
  requestId?: string;
  /**
   * @example
   * e9b8e8b4-7334-4548-9cec-c30b6891f292
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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

export class SaveSingleTaskForReserveDropListDomainRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactTemplateId?: string;
  dns1?: string;
  dns2?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      contactTemplateId: 'ContactTemplateId',
      dns1: 'Dns1',
      dns2: 'Dns2',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'string',
      dns1: 'string',
      dns2: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForReserveDropListDomainResponseBody extends $tea.Model {
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

export class SaveSingleTaskForReserveDropListDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForReserveDropListDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForReserveDropListDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForSaveArtExtensionRequest extends $tea.Model {
  /**
   * @example
   * 2019-10-01
   */
  dateOrPeriod?: string;
  /**
   * @example
   * 20 cm
   */
  dimensions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.art
   */
  domainName?: string;
  /**
   * @example
   * iconicity
   */
  features?: string;
  /**
   * @example
   * realism
   */
  inscriptionsAndMarkings?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * zhang san
   */
  maker?: string;
  /**
   * @example
   * silk
   */
  materialsAndTechniques?: string;
  /**
   * @example
   * The embroidery
   */
  objectType?: string;
  /**
   * @example
   * drawings
   */
  reference?: string;
  /**
   * @example
   * peace
   */
  subject?: string;
  /**
   * @example
   * Peace and friendship
   */
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
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AB
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e141
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e142
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ST2017120814571100001303
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 0F1B3547-BE50-4206-8F78-9540FFB85BC1
   */
  requestId?: string;
  /**
   * @example
   * e9b8e8b4-7334-4548-9cec-c30b6891f292
   */
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

export class SaveSingleTaskForTransferOutByAuthorizationCodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Test2o#Lck
   */
  authorizationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForTransferOutByAuthorizationCodeResponseBody extends $tea.Model {
  /**
   * @example
   * C560A803-B975-481D-A66B-A4395EA863A1
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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

export class SaveSingleTaskForTransferOutByAuthorizationCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSingleTaskForTransferOutByAuthorizationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSingleTaskForTransferOutByAuthorizationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSingleTaskForTransferProhibitionLockRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
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
  /**
   * @example
   * false
   */
  addTransferLock?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registrant
   */
  contactType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantProfileId?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 23C9B3C4-9E2C-4405-A88D-BD33E459D140
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredential?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alibabacloud.com
   */
  domainName?: string[];
  /**
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h6UPhXz/ADP/2Q==
   */
  identityCredential?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5****************9
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 123456
   */
  postalCode?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 12345
   */
  telExt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  transferOutProhibited?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * EDC28FEC-6BE0-4583-95BC-test
   */
  requestId?: string;
  /**
   * @example
   * 880f1579-be51-4dd3-a69d-test
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  transferOutProhibited?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
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
  /**
   * @remarks
   * The ID of the domain name group. You can call the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) operation to obtain the ID of the domain name group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **0**: All.
   * *   **1**: The domain name needs to be renewed.
   * *   **2**: The domain name needs to be redeemed.
   * *   **3**: The domain name is normal.
   * *   **4**: The domain name is being transferred from Alibaba Cloud.
   * *   **5**: The information about the domain name registrant is being modified.
   * *   **6**: Real-name verification is not performed on the domain name.
   * *   **7**: Real-name verification for the domain name fails. Real-name reverification is required.
   * *   **8**: The domain name is being reviewed.
   * 
   * @example
   * 0
   */
  domainStatus?: number;
  /**
   * @remarks
   * The end of the time range to query domain names based on expiration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  endExpirationDate?: number;
  /**
   * @remarks
   * The end of domain name length to query.
   * 
   * @example
   * 3
   */
  endLength?: number;
  /**
   * @remarks
   * The end of the time range to query domain names based on registration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  endRegistrationDate?: number;
  /**
   * @remarks
   * The keyword that is used to exclude domain names.
   * 
   * @example
   * test
   */
  excluded?: string;
  /**
   * @remarks
   * Specifies whether to exclude the prefix keyword.
   * 
   * @example
   * false
   */
  excludedPrefix?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude the suffix keyword.
   * 
   * @example
   * true
   */
  excludedSuffix?: boolean;
  /**
   * @remarks
   * The composition of the domain name.
   * 
   * @example
   * 1
   */
  form?: number;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * Specifies whether the keyword is the prefix.
   * 
   * @example
   * true
   */
  keyWordPrefix?: boolean;
  /**
   * @remarks
   * Specifies whether the keyword is the suffix.
   * 
   * @example
   * false
   */
  keyWordSuffix?: boolean;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **New gTLD**
   * *   **gTLD**
   * *   **ccTLD**
   * *   **other**
   * 
   * @example
   * gTLD
   */
  productDomainType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scroll ID. This parameter is a technical parameter.
   * 
   * @example
   * test
   */
  scrollId?: string;
  /**
   * @remarks
   * The beginning of the time range to query domain names based on expiration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  startExpirationDate?: number;
  /**
   * @remarks
   * The start of the domain name length to query.
   * 
   * @example
   * 0
   */
  startLength?: number;
  /**
   * @remarks
   * The beginning of the time range to query domain names based on registration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  startRegistrationDate?: number;
  /**
   * @remarks
   * The suffixes of domain names to be queried. Separate multiple suffixes with commas (,).
   * 
   * @example
   * com
   */
  suffixs?: string;
  /**
   * @remarks
   * The publishing status of the domain name. Valid values:
   * 
   * *   **2**: The domain name is published at a fixed price.
   * *   **3**: The domain name is published with the price negotiable.
   * *   **4**: The domain name is published for bidding.
   * *   **6**: The domain name is published with price push.
   * *   **-1**: The domain name is not published.
   * 
   * @example
   * -1
   */
  tradeType?: number;
  /**
   * @remarks
   * The IP address of the client. Set the value to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * The domain names.
   */
  data?: ScrollDomainListResponseBodyData;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 722AB7F5-61F0-408C-A012-4784AFD34083
   */
  requestId?: string;
  /**
   * @remarks
   * The scroll ID.
   * 
   * @example
   * test
   */
  scrollId?: string;
  /**
   * @remarks
   * The number of remaining domain names to be queried.
   * 
   * @example
   * 200
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 4D73432C-7600-4779-ACBB-C3B5CA145D32
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S2019270W570xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SET
   */
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
  /**
   * @example
   * 8fc97e44-837a-447d-ac61-ea28d2fe8a38
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 219
   */
  bizId?: number;
  /**
   * @remarks
   * The certificate information.
   */
  credentials?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {\\"addTransferLock\\":true}
   */
  extend?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
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
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application for which the error code is returned.
   * 
   * @example
   * test-com
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * -
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The array of error parameters that are returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 110001
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code that is directly returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * -
   */
  module?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A83E1D74-E46B-505C-947A-8C6B7E41C011
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether to perform synchronous processing.
   * 
   * @example
   * True
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * false
   */
  sendIfExist?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * E2A8A5EF-DF8A-4C48-8FD4-9F6BD71AB26D
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com,example.org
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * en
   */
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
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 9DKCF6F8-243C-40EC-8035-4B12FEFD7C22
   */
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
  /**
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @example
   * 1
   */
  auditType?: number;
  credentials?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFX7D98
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3bdbaa0e-faa2-4ad2-98f4-bcfeb0237054
   */
  token?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testCode
   */
  transferAuthorizationCode?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSource?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  domainGroupId?: number;
  /**
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @example
   * dGVzdA==
   */
  fileToUpload?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
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
  /**
   * @example
   * Rd. xitucheng
   */
  address?: string;
  /**
   * @example
   * Bei jing
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  postalCode?: string;
  /**
   * @example
   * Bei jing
   */
  province?: string;
  /**
   * @example
   * wang xian sheng
   */
  registrantName?: string;
  /**
   * @example
   * wang xian sheng
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 01
   */
  telExt?: string;
  /**
   * @example
   * 1390000****
   */
  telephone?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * ABAC3BAC-FCFA-4DAE-B47C-FA4105CB07C6
   */
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
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0b32247496409441e9e179ea7c2e0****
   */
  token?: string;
  /**
   * @example
   * 127.0.0.1
   */
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
  /**
   * @example
   * FD3AD289-83EE-4E32-803A-CF1B3A8EEE64
   */
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
  /**
   * @example
   * xxx
   */
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
  /**
   * @example
   * true
   */
  exist?: boolean;
  /**
   * @example
   * example.com,aliyundoc.com
   */
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

export class CheckDomainResponseBodyStaticPriceInfoPriceInfo extends $tea.Model {
  action?: string;
  money?: number;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      money: 'money',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      money: 'number',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBodyStaticPriceInfo extends $tea.Model {
  priceInfo?: CheckDomainResponseBodyStaticPriceInfoPriceInfo[];
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: { 'type': 'array', 'itemType': CheckDomainResponseBodyStaticPriceInfoPriceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIntlFixPriceDomainStatusResponseBodyModule extends $tea.Model {
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * 1567353497
   */
  deadDate?: number;
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * 1567353497
   */
  endTime?: number;
  /**
   * @example
   * true
   */
  premium?: boolean;
  /**
   * @example
   * 20.00
   */
  price?: number;
  /**
   * @example
   * 1566353497
   */
  regDate?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      deadDate: 'DeadDate',
      domain: 'Domain',
      endTime: 'EndTime',
      premium: 'Premium',
      price: 'Price',
      regDate: 'RegDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      deadDate: 'number',
      domain: 'string',
      endTime: 'number',
      premium: 'boolean',
      price: 'number',
      regDate: 'number',
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

export class CreateIntlFixedPriceDomainOrderResponseBodyModule extends $tea.Model {
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * 31199295f2074ce895645d386cb2****
   */
  orderNo?: string;
  /**
   * @example
   * 100.00
   */
  payPrice?: number;
  /**
   * @example
   * https://
   */
  payUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      orderNo: 'OrderNo',
      payPrice: 'PayPrice',
      payUrl: 'PayUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      orderNo: 'string',
      payPrice: 'number',
      payUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEmailVerificationResponseBodyFailList extends $tea.Model {
  /**
   * @example
   * ParameterIllegall
   */
  code?: string;
  /**
   * @example
   * test1@aliyun.com
   */
  email?: string;
  /**
   * @example
   * Parameter error
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * test2@aliyun.com
   */
  email?: string;
  /**
   * @example
   * Success
   */
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
  /**
   * @example
   * xxx
   */
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

export class GetIntlFixPriceDomainListUrlResponseBodyModule extends $tea.Model {
  /**
   * @example
   * http://intl-fixed-price.oss-cn-zhangjiakou.aliyuncs.com/aliyun_intl_fixed_price_domain_20240827.gz?Expires=1724830838&OSSAccessKeyId=LTAI5tPMAybR4gfSEjdfAk1F&Signature=tb0SPs6tKb9gLKyQ5ibpQnBUuTY%3D
   */
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationResponseBodyData extends $tea.Model {
  /**
   * @example
   * 127.0.0.1
   */
  confirmIp?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 00000a21fd374da99d9c95b48500000
   */
  emailVerificationNo?: string;
  /**
   * @example
   * 2017-12-25 03:38:46
   */
  gmtCreate?: string;
  /**
   * @example
   * 2017-12-25 03:41:11
   */
  gmtModified?: string;
  /**
   * @example
   * 127.0.0.1
   */
  sendIp?: string;
  /**
   * @example
   * 2017-12-25 03:38:46
   */
  tokenSendTime?: string;
  /**
   * @example
   * 0000
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  verificationStatus?: number;
  /**
   * @example
   * 2017-12-25 03:41:11
   */
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
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * @example
   * S20190N1DAI4****
   */
  domainInstanceId?: string;
  /**
   * @remarks
   * The domain name that has valid registry lock information.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2030-07-10 17:37:36
   */
  expireDate?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-02-19 16:38:07
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the domain name was last modified.
   * 
   * @example
   * 2022-02-19 16:40:38
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID of the domain name for which the registry lock is enabled.
   * 
   * @example
   * S2021591IQ28****
   */
  lockInstanceId?: string;
  /**
   * @remarks
   * The ID of the product to which the domain name with the registry lock enabled belongs.
   * 
   * @example
   * 1807**
   */
  lockProductId?: string;
  /**
   * @remarks
   * The status of the registry lock.
   * 
   * @example
   * 2
   */
  serverLockStatus?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-07-10 17:37:36
   */
  startDate?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 121000000****
   */
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
  /**
   * @example
   * 18
   */
  classNum?: number;
  /**
   * @example
   * New Zealand
   */
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
  /**
   * @example
   * NZ
   */
  cc?: string;
  /**
   * @example
   * Auckland
   */
  city?: string;
  /**
   * @example
   * 1010
   */
  pc?: string;
  /**
   * @example
   * Auckland
   */
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
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 4472335**8
   */
  fax?: string;
  /**
   * @example
   * Tom
   */
  name?: string;
  /**
   * @example
   * Tom
   */
  org?: string;
  /**
   * @example
   * agent
   */
  type?: string;
  /**
   * @example
   * 1390000****
   */
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
  /**
   * @example
   * NZ
   */
  cc?: string;
  /**
   * @example
   * Wellington
   */
  city?: string;
  /**
   * @example
   * 6011
   */
  pc?: string;
  /**
   * @example
   * Wellington
   */
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
  /**
   * @example
   * owner
   */
  entitlement?: string;
  /**
   * @example
   * Whitcoulls 2011 Limited
   */
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
  /**
   * @example
   * New Zealand
   */
  desc?: string;
  /**
   * @example
   * NZ
   */
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
  /**
   * @example
   * Class 9: Calculators; bags, coverings,containers, carriers and holders for mobile phones, personal handheld computers and notebooks; headphones; speakers; blank storage media;batteries. Class 16: Paper
   */
  goodsAndServices?: string;
  holders?: LookupTmchNoticeResponseBodyClaimsClaimHolders;
  jurDesc?: LookupTmchNoticeResponseBodyClaimsClaimJurDesc;
  /**
   * @example
   * POTED
   */
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
  /**
   * @example
   * 2018-03-26 15:08:20
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * The operation is successful.
   */
  errorMsg?: string;
  /**
   * @example
   * S201817141000000
   */
  instanceId?: string;
  /**
   * @example
   * 15fee9d10d514bada66bd08c5723c583
   */
  taskDetailNo?: string;
  /**
   * @example
   * b95bc334-f7d8-4f39-8a62-4c4302a243d8
   */
  taskNo?: string;
  /**
   * @example
   * test
   */
  taskResult?: string;
  /**
   * @example
   * EXECUTE_SUCCESS
   */
  taskStatus?: string;
  /**
   * @example
   * 2
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 0
   */
  tryCount?: number;
  /**
   * @example
   * 2018-03-26 15:22:18
   */
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
  /**
   * @example
   * SUCCEED
   */
  domainAuditStatus?: string;
  /**
   * @example
   * -1
   */
  domainGroupId?: string;
  domainGroupName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 5
   */
  domainStatus?: string;
  /**
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 356
   */
  expirationCurrDateDiff?: number;
  /**
   * @example
   * 2019-04-09 17:07:03
   */
  expirationDate?: string;
  /**
   * @example
   * 1554800823000
   */
  expirationDateLong?: number;
  /**
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @example
   * S20182000000000
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @example
   * Tom
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 2018-04-09 17:07:03
   */
  registrationDate?: string;
  /**
   * @example
   * 1523264823000
   */
  registrationDateLong?: number;
  remark?: string;
  /**
   * @example
   * rg-aek2yyciz557g3q
   */
  resourceGroupId?: string;
  tag?: QueryAdvancedDomainListResponseBodyDataDomainTag;
  /**
   * @example
   * Tom
   */
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
  /**
   * @example
   * dns1;dns2 -> dns3;dns4
   */
  details?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * DNS modification
   */
  operation?: string;
  /**
   * @example
   * 127.0.0.1
   */
  operationIPAddress?: string;
  /**
   * @example
   * Failed
   */
  result?: string;
  /**
   * @example
   * 2017-12-26 12:00:00
   */
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
  /**
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @example
   * f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598
   */
  digest?: string;
  /**
   * @example
   * 2
   */
  digestType?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * ns3
   */
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
  /**
   * @remarks
   * The tag key.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   */
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
  /**
   * @example
   * false
   */
  beingDeleted?: boolean;
  /**
   * @example
   * 2018-04-02 15:59:06
   */
  creationDate?: string;
  /**
   * @example
   * -1
   */
  domainGroupId?: string;
  domainGroupName?: string;
  /**
   * @example
   * COMPLETE
   */
  domainGroupStatus?: string;
  /**
   * @example
   * 2018-04-02 15:59:06
   */
  modificationDate?: string;
  /**
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The key of the tag to add to the resource.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource.
   * 
   * @example
   * testValue
   */
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
  /**
   * @remarks
   * The key of the tag added to the resource.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag added to the resource.
   * 
   * @example
   * testValue
   */
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
  /**
   * @remarks
   * The name of the domain name registrant.
   * 
   * @example
   * Guangzhou Forest Advertising Decoration Co., LTD
   */
  ccompany?: string;
  chgholderStatus?: string;
  /**
   * @remarks
   * The state of real-name verification for the domain name. Valid values:
   * 
   * *   **FAILED**: Real-name verification for the domain name fails.
   * *   **SUCCEED**: Real-name verification for the domain name is successful.
   * *   **NONAUDIT**: Real-name verification for the domain name is not performed.
   * *   **AUDITING**: Real-name verification for the domain name is in progress.
   * 
   * @example
   * FAILED
   */
  domainAuditStatus?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: string;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * 测试分组
   */
  domainGroupName?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The state of the domain name. Valid values:
   * 
   * *   **1**: The domain name needs to be renewed.
   * *   **2**: The domain name needs to be redeemed.
   * *   **3**: The domain name is normal.
   * 
   * @example
   * 3
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **New gTLD**
   * *   **gTLD**
   * *   **ccTLD**
   * 
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @remarks
   * The number of days from the expiration date of the domain name to the current date.
   * 
   * @example
   * -30
   */
  expirationCurrDateDiff?: number;
  /**
   * @remarks
   * The time when the domain name expires.
   * 
   * @example
   * 2017-11-02 04:00:45
   */
  expirationDate?: string;
  /**
   * @remarks
   * The validity period of the domain name. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1522080000000
   */
  expirationDateLong?: number;
  /**
   * @remarks
   * Indicates whether the domain name expires. Valid values:
   * 
   * *   **1**: The domain name does not expire.
   * *   **2**: The domain name expires.
   * 
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ST20151102120031118
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the domain name is a premium domain name.
   * 
   * @example
   * true
   */
  premium?: boolean;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @remarks
   * The registration type of the domain name. Valid values:
   * 
   * *   **1**: individual
   * *   **2**: enterprise
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The time when the domain name was registered.
   * 
   * @example
   * 2017-11-02 04:00:45
   */
  registrationDate?: string;
  /**
   * @remarks
   * Indicates how long the domain name has been registered. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1522080000000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The remarks of the domain name.
   * 
   * @example
   * 备注
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the domain name belongs.
   * 
   * @example
   * rg-aek2yyciz557g3q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the resource.
   */
  tag?: QueryDomainListResponseBodyDataDomainTag;
  static names(): { [key: string]: string } {
    return {
      ccompany: 'Ccompany',
      chgholderStatus: 'ChgholderStatus',
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
      chgholderStatus: 'string',
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
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 258
   */
  bizId?: number;
  /**
   * @remarks
   * The city.
   */
  CCity?: string;
  /**
   * @remarks
   * The organization name.
   */
  CCompany?: string;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * CN
   */
  CCountry?: string;
  /**
   * @remarks
   * The contact name.
   */
  CName?: string;
  /**
   * @remarks
   * The province.
   */
  CProvince?: string;
  /**
   * @remarks
   * The address.
   */
  CVenu?: string;
  /**
   * @remarks
   * The city in English.
   * 
   * @example
   * an shan Shi
   */
  ECity?: string;
  /**
   * @remarks
   * The organization name in English.
   * 
   * @example
   * hebeihuiheguandaozhizaoyouxiangongsi
   */
  ECompany?: string;
  /**
   * @remarks
   * The contact name in English.
   * 
   * @example
   * tong da wei
   */
  EName?: string;
  /**
   * @remarks
   * The province in English.
   * 
   * @example
   * liao ning
   */
  EProvince?: string;
  /**
   * @remarks
   * The address in English.
   * 
   * @example
   * tie xi qu xin kai jie 59-4 hao
   */
  EVenu?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * -
   */
  extend?: string;
  /**
   * @remarks
   * The fax country code.
   * 
   * @example
   * 86
   */
  faxArea?: string;
  /**
   * @remarks
   * The fax extension number.
   * 
   * @example
   * 61284565
   */
  faxExt?: string;
  /**
   * @remarks
   * The fax number with an area code or mobile number.
   * 
   * @example
   * 16604121234
   */
  faxMain?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 156********
   */
  mobile?: string;
  /**
   * @remarks
   * The zip code.
   * 
   * @example
   * 100000
   */
  postalcode?: string;
  /**
   * @remarks
   * The contact type. Valid values: 1: individual. 2: enterprise.
   * 
   * @example
   * 1
   */
  regType?: number;
  /**
   * @remarks
   * The registrant ID.
   * 
   * @example
   * 121000002****
   */
  registrantId?: string;
  /**
   * @remarks
   * The calling code of the country or region where the domain name contact is located.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * The telephone extension number.
   * 
   * @example
   * 61284565
   */
  telExt?: string;
  /**
   * @remarks
   * The landline number with an area code or mobile number.
   * 
   * @example
   * 16604121234
   */
  telMain?: string;
  /**
   * @remarks
   * The VSP contact ID.
   * 
   * @example
   * 121000001****
   */
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
  /**
   * @remarks
   * The ID of the associated workflow.
   * 
   * @example
   * T20220831150014000001
   */
  bizId?: number;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 4111111111111110**
   */
  credentialNo?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * SFZ
   */
  credentialType?: string;
  /**
   * @remarks
   * The certificate URL.
   * 
   * @example
   * http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg
   */
  credentialUrl?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the certificate belongs to the registrant.
   * 
   * @example
   * 1
   */
  holderCert?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S20172315BJ37809
   */
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
  /**
   * @remarks
   * The cost type.
   * 
   * @example
   * activate
   */
  actionType?: string;
  /**
   * @remarks
   * The amount of the order.
   * 
   * @example
   * 0.0
   */
  orderAmount?: number;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  orderCurrency?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * S201601060123456
   */
  orderId?: string;
  /**
   * @remarks
   * The order status.
   * 
   * @example
   * ORDER_WAIT_PAY
   */
  orderStatus?: string;
  /**
   * @remarks
   * The time when the order was placed.
   * 
   * @example
   * 2023-09-19T14:28Z
   */
  orderTime?: string;
  /**
   * @remarks
   * The validity period.
   * 
   * @example
   * 1
   */
  orderYear?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S201601063418719
   */
  saleId?: string;
  /**
   * @remarks
   * The suborder ID.
   * 
   * @example
   * S201601061234567
   */
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
  /**
   * @remarks
   * The review information.
   */
  auditMsg?: string;
  /**
   * @remarks
   * The business name.
   */
  bizName?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * A83E1D74-E46B-505C-947A-8C6B7E41C012
   */
  bizNo?: string;
  /**
   * @remarks
   * The business status.
   * 
   * @example
   * REGISTRANT_VSP_AUDIT_SUCCESS
   */
  bizStatus?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * govRegister
   */
  bizType?: string;
  /**
   * @remarks
   * The time when the business was created.
   * 
   * @example
   * 2023-01-17 11:31:10
   */
  createTime?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The contact information.
   */
  domainSpecialBizContact?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizContact;
  /**
   * @remarks
   * The certificate information.
   */
  domainSpecialBizCredentials?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizCredentials[];
  /**
   * @remarks
   * The information about the order.
   */
  domainSpecialOrderResult?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialOrderResult;
  /**
   * @remarks
   * The time when the business was created.
   * 
   * @example
   * 2023-03-21 15:10:04.0
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the business was modified.
   * 
   * @example
   * 2023-03-21 15:10:04.0
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 34083
   */
  id?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123
   */
  orderId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  productId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S20172315BJ37809
   */
  saleId?: string;
  /**
   * @remarks
   * The business status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The description of business status.
   */
  statusDesc?: string;
  /**
   * @remarks
   * The time when the business was updated.
   * 
   * @example
   * 2020-11-17 18:11:15
   */
  updateTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 121000000****
   */
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
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 258
   */
  bizId?: number;
  /**
   * @remarks
   * The city.
   */
  CCity?: string;
  /**
   * @remarks
   * The organization name.
   */
  CCompany?: string;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * CN
   */
  CCountry?: string;
  /**
   * @remarks
   * The contact name.
   */
  CName?: string;
  /**
   * @remarks
   * The province.
   */
  CProvince?: string;
  /**
   * @remarks
   * The address.
   */
  CVenu?: string;
  /**
   * @remarks
   * The city in English.
   * 
   * @example
   * an shan Shi
   */
  ECity?: string;
  /**
   * @remarks
   * The organization name in English.
   * 
   * @example
   * hebeihuiheguandaozhizaoyouxiangongsi
   */
  ECompany?: string;
  /**
   * @remarks
   * The contact name in English.
   * 
   * @example
   * tong da wei
   */
  EName?: string;
  /**
   * @remarks
   * The province in English.
   * 
   * @example
   * liao ning
   */
  EProvince?: string;
  /**
   * @remarks
   * The address in English.
   * 
   * @example
   * tie xi qu xin kai jie 59-4 hao
   */
  EVenu?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * -
   */
  extend?: string;
  /**
   * @remarks
   * The fax country code.
   * 
   * @example
   * 86
   */
  faxArea?: string;
  /**
   * @remarks
   * The fax extension number.
   * 
   * @example
   * 61284565
   */
  faxExt?: string;
  /**
   * @remarks
   * The fax number with an area code or mobile number.
   * 
   * @example
   * 16604121234
   */
  faxMain?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 156********
   */
  mobile?: string;
  /**
   * @remarks
   * The zip code.
   * 
   * @example
   * 100000
   */
  postalcode?: string;
  /**
   * @remarks
   * The contact type. Valid values: 1: individual. 2: enterprise.
   * 
   * @example
   * 1
   */
  regType?: number;
  /**
   * @remarks
   * The registrant ID.
   * 
   * @example
   * 121000002****
   */
  registrantId?: string;
  /**
   * @remarks
   * The calling code of the country or region where the domain name contact is located.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * The telephone extension number.
   * 
   * @example
   * 2756
   */
  telExt?: string;
  /**
   * @remarks
   * The landline number with an area code or mobile number.
   * 
   * @example
   * 16604121234
   */
  telMain?: string;
  /**
   * @remarks
   * The VSP contact ID.
   * 
   * @example
   * 121000001****
   */
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
  /**
   * @remarks
   * The ID of the associated workflow.
   * 
   * @example
   * T20220831150014000001
   */
  bizId?: number;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 4111111111111110**
   */
  credentialNo?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * SFZ
   */
  credentialType?: string;
  /**
   * @remarks
   * The certificate URL.
   * 
   * @example
   * http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg
   */
  credentialUrl?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the certificate belongs to the registrant.
   * 
   * @example
   * 1
   */
  holderCert?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S20172315BJ37809
   */
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
  /**
   * @remarks
   * The review information.
   */
  auditMsg?: string;
  /**
   * @remarks
   * The business name.
   */
  bizName?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * A83E1D74-E46B-505C-947A-8C6B7E41C012
   */
  bizNo?: string;
  /**
   * @remarks
   * The business status.
   * 
   * @example
   * REGISTRANT_VSP_AUDIT_SUCCESS
   */
  bizStatus?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * govRegister
   */
  bizType?: string;
  /**
   * @remarks
   * The time when the business was created.
   * 
   * @example
   * 2023-01-17 11:31:10
   */
  createTime?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The contact information.
   */
  domainSpecialBizContact?: QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizContact;
  /**
   * @remarks
   * The certificate information.
   */
  domainSpecialBizCredentials?: QueryDomainSpecialBizInfoByDomainResponseBodyModuleDomainSpecialBizCredentials[];
  /**
   * @remarks
   * The time when the business was created.
   * 
   * @example
   * 2023-03-21 15:10:04.0
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the business was modified.
   * 
   * @example
   * 2023-03-21 15:10:04.0
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 34083
   */
  id?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123
   */
  orderId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  productId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S20172315BJ37809
   */
  saleId?: string;
  /**
   * @remarks
   * The business status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The description of business status.
   */
  statusDesc?: string;
  /**
   * @remarks
   * The time when the business was updated.
   * 
   * @example
   * 2020-11-17 18:11:15
   */
  updateTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 121000000****
   */
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
  /**
   * @example
   * 2017-03-17 11:08:02
   */
  date?: string;
  /**
   * @example
   * SUCCEED
   */
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
  /**
   * @example
   * 2017-03-17 11:08:02
   */
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
  /**
   * @example
   * 2017-03-17 11:08:02
   */
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

export class QueryIntlFixedPriceOrderListResponseBodyModuleData extends $tea.Model {
  bizId?: string;
  createTime?: number;
  domain?: string;
  orderType?: number;
  price?: number;
  status?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      domain: 'Domain',
      orderType: 'OrderType',
      price: 'Price',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      domain: 'string',
      orderType: 'number',
      price: 'number',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntlFixedPriceOrderListResponseBodyModule extends $tea.Model {
  currentPageNum?: number;
  data?: QueryIntlFixedPriceOrderListResponseBodyModuleData[];
  pageSize?: number;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryIntlFixedPriceOrderListResponseBodyModuleData },
      pageSize: 'number',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoListResponseBodyData extends $tea.Model {
  auditInfo?: string;
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @example
   * 1
   */
  auditType?: number;
  businessName?: string;
  /**
   * @example
   * 1581919010101
   */
  createTime?: number;
  /**
   * @example
   * example.com,aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  remark?: string;
  /**
   * @example
   * 1581919010101
   */
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
  /**
   * @example
   * 92610725MA7G2E****
   */
  credentialNo?: string;
  /**
   * @example
   * SHSQB
   */
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
  /**
   * @example
   * zhe jiang sheng hang zhou shi shi li qu shi li zhen shi li da sha 1001 hao
   */
  address?: string;
  /**
   * @example
   * hang zhou shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * 2019-02-18 10:46:47
   */
  createTime?: string;
  credentialNo?: string;
  credentialType?: string;
  /**
   * @example
   * false
   */
  defaultRegistrantProfile?: boolean;
  /**
   * @example
   * 82106****@qq.com
   */
  email?: string;
  /**
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  /**
   * @example
   * 310024
   */
  postalCode?: string;
  /**
   * @example
   * zhe jiang
   */
  province?: string;
  /**
   * @example
   * SUCCEED
   */
  realNameStatus?: string;
  /**
   * @example
   * li si
   */
  registrantName?: string;
  /**
   * @example
   * li si
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1000001
   */
  registrantProfileId?: number;
  /**
   * @example
   * common
   */
  registrantProfileType?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  remark?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 1829756****
   */
  telephone?: string;
  /**
   * @example
   * 2019-03-15 15:32:45
   */
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
      remark: 'Remark',
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
      remark: 'string',
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
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S1234456789
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-2342
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_SUCCESS
   */
  taskStatus?: string;
  /**
   * @example
   * 2
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 0
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
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
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S1234567890
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-2424
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
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
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-4234
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
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
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-123
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
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
  /**
   * @example
   * 2018-01-25 20:46:57
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * The operation is successful.
   */
  errorMsg?: string;
  failReason?: string;
  /**
   * @example
   * S20179H1BBI9test
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskDetailNo?: string;
  /**
   * @example
   * 60d6e201-8ee5-47ab-8fdc-test
   */
  taskNo?: string;
  /**
   * @example
   * 12345
   */
  taskResult?: string;
  /**
   * @example
   * EXECUTE_SUCCESS
   */
  taskStatus?: string;
  /**
   * @example
   * 2
   */
  taskStatusCode?: number;
  /**
   * @example
   * ORDER_RENEW
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 0
   */
  tryCount?: number;
  /**
   * @example
   * 2018-01-25 20:47:01
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      failReason: 'FailReason',
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
      failReason: 'string',
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-11-01 17:22:51
   */
  createTime?: string;
  /**
   * @example
   * 1509528171000
   */
  createTimeLong?: number;
  /**
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNo?: string;
  /**
   * @example
   * 1
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-10-27 13:07:07
   */
  createTime?: string;
  /**
   * @example
   * 1509080827000
   */
  createTimeLong?: number;
  /**
   * @example
   * 8f112aa1-98be-48c3-82f8-test
   */
  taskNo?: string;
  /**
   * @example
   * 15
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-11-01 17:22:51
   */
  createTime?: string;
  /**
   * @example
   * 1509528171000
   */
  createTimeLong?: number;
  /**
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNo?: string;
  /**
   * @example
   * 1
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-11-01 17:19:47
   */
  createTime?: string;
  /**
   * @example
   * 1509527987000
   */
  createTimeLong?: number;
  /**
   * @example
   * f9baa3d5-33b9-4c81-8847-test
   */
  taskNo?: string;
  /**
   * @example
   * 15
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * Dec 26,2017 11:00:54
   */
  createTime?: string;
  /**
   * @example
   * INIT
   */
  taskCancelStatus?: string;
  /**
   * @example
   * 0
   */
  taskCancelStatusCode?: number;
  /**
   * @example
   * 8b1cd755-4928-4b02-adee-e5d41d7b1939
   */
  taskNo?: string;
  /**
   * @example
   * 1
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @example
   * 1
   */
  taskStatusCode?: number;
  /**
   * @example
   * CREATE_DNSHOST
   */
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
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  expirationDate?: string;
  /**
   * @example
   * 1514428524669
   */
  expirationDateLong?: number;
  /**
   * @example
   * S20181T0WLI85212
   */
  instanceId?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  modificationDate?: string;
  /**
   * @example
   * 1514428524669
   */
  modificationDateLong?: number;
  /**
   * @example
   * true
   */
  needMailCheck?: boolean;
  /**
   * @example
   * 0
   */
  progressBarType?: number;
  /**
   * @example
   * clientCancelled
   */
  resultCode?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  resultDate?: string;
  /**
   * @example
   * 1514428524669
   */
  resultDateLong?: number;
  resultMsg?: string;
  /**
   * @example
   * FAIL
   */
  simpleTransferInStatus?: string;
  /**
   * @example
   * 11
   */
  status?: number;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  submissionDate?: string;
  /**
   * @example
   * 1514428524669
   */
  submissionDateLong?: number;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  transferAuthorizationCodeSubmissionDate?: string;
  /**
   * @example
   * 1514428524669
   */
  transferAuthorizationCodeSubmissionDateLong?: number;
  /**
   * @example
   * 123456
   */
  userId?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * SendTokenQuotaExceeded
   */
  code?: string;
  /**
   * @example
   * test1@aliyun.com
   */
  email?: string;
  /**
   * @example
   * The maximum number of attempts allowed to send the email verification link is exceeded.
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * test2@aliyun.com
   */
  email?: string;
  /**
   * @example
   * Success
   */
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
  /**
   * @example
   * chao yan qu *** dasha *** hao
   */
  address?: string;
  /**
   * @example
   * true
   */
  aliyunDns?: boolean;
  /**
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * ns2.aliyun.com
   */
  dns1?: string;
  /**
   * @example
   * ns1.aliyun.com
   */
  dns2?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * true
   */
  enableDomainProxy?: boolean;
  /**
   * @example
   * true
   */
  permitPremiumActivation?: boolean;
  /**
   * @example
   * 102629
   */
  postalCode?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * zhang san
   */
  registrantName?: string;
  /**
   * @example
   * zhang san
   */
  registrantOrganization?: string;
  /**
   * @example
   * 000000
   */
  registrantProfileId?: number;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * rg-XX
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1
   */
  subscriptionDuration?: number;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 1820000****
   */
  telephone?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * 000000
   */
  currentExpirationDate?: number;
  /**
   * @example
   * Aliyun.com
   */
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
  /**
   * @example
   * 1522080000000
   */
  currentExpirationDate?: number;
  /**
   * @example
   * Aliyun.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * testCode
   */
  authorizationCode?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  permitPremiumTransfer?: boolean;
  /**
   * @example
   * 123456
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
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

export class SaveBatchTaskForTransferOutByAuthorizationCodeRequestTransferOutParamList extends $tea.Model {
  /**
   * @example
   * Test2o#Lck
   */
  authorizationCode?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ScrollDomainListResponseBodyDataDomainTagTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
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
  /**
   * @remarks
   * The Domain Name System (DNS) servers of the domain name.
   */
  dnsList?: ScrollDomainListResponseBodyDataDomainDnsList;
  /**
   * @remarks
   * The status of real-name verification for the domain name. Valid values:
   * 
   * *   **FAILED**: Real-name verification for the domain name fails.
   * *   **SUCCEED**: Real-name verification for the domain name is successful.
   * *   **NONAUDIT**: Real-name verification for the domain name is not performed.
   * *   **AUDITING**: Real-name verification for the domain name is in progress.
   * 
   * @example
   * NONAUDIT
   */
  domainAuditStatus?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 1234
   */
  domainGroupId?: string;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * test group
   */
  domainGroupName?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1**: The domain name needs to be renewed.
   * *   **2**: The domain name needs to be redeemed.
   * *   **3**: The domain name is normal.
   * *   **4**: The domain name is being transferred out.
   * *   **5**: The information about the domain name registrant is being modified.
   * *   **6**: Real-name verification is not performed on the domain name.
   * *   **7**: Real-name verification for the domain name fails.
   * *   **8**: The real-name verification is being reviewed.
   * 
   * @example
   * 3
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **New gTLD**
   * *   **gTLD**
   * *   **ccTLD**
   * 
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The number of days from the expiration date of the domain name to the current date.
   * 
   * @example
   * 10
   */
  expirationCurrDateDiff?: number;
  /**
   * @remarks
   * The time when the domain name expires.
   * 
   * @example
   * 2019-02-15 17:30:35
   */
  expirationDate?: string;
  /**
   * @remarks
   * The time when the domain name expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1550223035000
   */
  expirationDateLong?: number;
  /**
   * @remarks
   * Indicates whether the domain name expires. Valid values:
   * 
   * *   **1**: The domain name does not expire.
   * *   **2**: The domain name expires.
   * 
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * @example
   * S1234
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the domain name is a premium domain name.
   * 
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @remarks
   * The registrant of the domain name.
   * 
   * @example
   * alibaba cloud
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The registration type of the domain name. Valid values:
   * 
   * *   **1**: individual.
   * *   **2**: enterprise.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The time when the domain name was registered.
   * 
   * @example
   * 2017-02-15 00:00:00
   */
  registrationDate?: string;
  /**
   * @remarks
   * The time when the domain name was registered. This value is a UNIX timestamp that indicates the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1487088000000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The remarks on the domain name.
   * 
   * @example
   * test domain
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2yyciz557g3q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource tag.
   */
  tag?: ScrollDomainListResponseBodyDataDomainTag;
  /**
   * @remarks
   * The Chinese name of the domain name registrant.
   * 
   * @example
   * 阿里云
   */
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
  /**
   * @example
   * SendTokenQuotaExceeded
   */
  code?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * The maximum number of attempts allowed to send the email verification link is exceeded.
   */
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
  /**
   * @example
   * SendTokenQuotaExceeded
   */
  code?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * The maximum number of attempts allowed to send the email verification link is exceeded
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * Success
   */
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

  /**
   * 确认任务结果
   * 
   * @param request - AcknowledgeTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcknowledgeTaskResultResponse
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

  /**
   * 确认任务结果
   * 
   * @param request - AcknowledgeTaskResultRequest
   * @returns AcknowledgeTaskResultResponse
   */
  async acknowledgeTaskResult(request: AcknowledgeTaskResultRequest): Promise<AcknowledgeTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acknowledgeTaskResultWithOptions(request, runtime);
  }

  /**
   * 通过关键字进行批量模糊匹配
   * 
   * @param request - BatchFuzzyMatchDomainSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchFuzzyMatchDomainSensitiveWordResponse
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

  /**
   * 通过关键字进行批量模糊匹配
   * 
   * @param request - BatchFuzzyMatchDomainSensitiveWordRequest
   * @returns BatchFuzzyMatchDomainSensitiveWordResponse
   */
  async batchFuzzyMatchDomainSensitiveWord(request: BatchFuzzyMatchDomainSensitiveWordRequest): Promise<BatchFuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchFuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  /**
   * Cancels real-name verification for a domain name.
   * 
   * @param request - CancelDomainVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDomainVerificationResponse
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

  /**
   * Cancels real-name verification for a domain name.
   * 
   * @param request - CancelDomainVerificationRequest
   * @returns CancelDomainVerificationResponse
   */
  async cancelDomainVerification(request: CancelDomainVerificationRequest): Promise<CancelDomainVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelDomainVerificationWithOptions(request, runtime);
  }

  /**
   * 取消审核
   * 
   * @param request - CancelOperationAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOperationAuditResponse
   */
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

  /**
   * 取消审核
   * 
   * @param request - CancelOperationAuditRequest
   * @returns CancelOperationAuditResponse
   */
  async cancelOperationAudit(request: CancelOperationAuditRequest): Promise<CancelOperationAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOperationAuditWithOptions(request, runtime);
  }

  /**
   * @param request - CancelQualificationVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelQualificationVerificationResponse
   */
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

  /**
   * @param request - CancelQualificationVerificationRequest
   * @returns CancelQualificationVerificationResponse
   */
  async cancelQualificationVerification(request: CancelQualificationVerificationRequest): Promise<CancelQualificationVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelQualificationVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - CancelTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
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

  /**
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  /**
   * 修改实例所在资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
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

  /**
   * 修改实例所在资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainResponse
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

  /**
   * @param request - CheckDomainRequest
   * @returns CheckDomainResponse
   */
  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDomainSunriseClaimRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainSunriseClaimResponse
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

  /**
   * @param request - CheckDomainSunriseClaimRequest
   * @returns CheckDomainSunriseClaimResponse
   */
  async checkDomainSunriseClaim(request: CheckDomainSunriseClaimRequest): Promise<CheckDomainSunriseClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainSunriseClaimWithOptions(request, runtime);
  }

  /**
   * 校验在售国际一口价域名状态和询价
   * 
   * @param request - CheckIntlFixPriceDomainStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckIntlFixPriceDomainStatusResponse
   */
  async checkIntlFixPriceDomainStatusWithOptions(request: CheckIntlFixPriceDomainStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckIntlFixPriceDomainStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckIntlFixPriceDomainStatus",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckIntlFixPriceDomainStatusResponse>(await this.callApi(params, req, runtime), new CheckIntlFixPriceDomainStatusResponse({}));
  }

  /**
   * 校验在售国际一口价域名状态和询价
   * 
   * @param request - CheckIntlFixPriceDomainStatusRequest
   * @returns CheckIntlFixPriceDomainStatusResponse
   */
  async checkIntlFixPriceDomainStatus(request: CheckIntlFixPriceDomainStatusRequest): Promise<CheckIntlFixPriceDomainStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkIntlFixPriceDomainStatusWithOptions(request, runtime);
  }

  /**
   * @param request - CheckMaxYearOfServerLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMaxYearOfServerLockResponse
   */
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

  /**
   * @param request - CheckMaxYearOfServerLockRequest
   * @returns CheckMaxYearOfServerLockResponse
   */
  async checkMaxYearOfServerLock(request: CheckMaxYearOfServerLockRequest): Promise<CheckMaxYearOfServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMaxYearOfServerLockWithOptions(request, runtime);
  }

  /**
   * @param request - CheckProcessingServerLockApplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckProcessingServerLockApplyResponse
   */
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

  /**
   * @param request - CheckProcessingServerLockApplyRequest
   * @returns CheckProcessingServerLockApplyResponse
   */
  async checkProcessingServerLockApply(request: CheckProcessingServerLockApplyRequest): Promise<CheckProcessingServerLockApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkProcessingServerLockApplyWithOptions(request, runtime);
  }

  /**
   * @param request - CheckTransferInFeasibilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckTransferInFeasibilityResponse
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

  /**
   * @param request - CheckTransferInFeasibilityRequest
   * @returns CheckTransferInFeasibilityResponse
   */
  async checkTransferInFeasibility(request: CheckTransferInFeasibilityRequest): Promise<CheckTransferInFeasibilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTransferInFeasibilityWithOptions(request, runtime);
  }

  /**
   * @param request - ConfirmTransferInEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmTransferInEmailResponse
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

  /**
   * @param request - ConfirmTransferInEmailRequest
   * @returns ConfirmTransferInEmailResponse
   */
  async confirmTransferInEmail(request: ConfirmTransferInEmailRequest): Promise<ConfirmTransferInEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmTransferInEmailWithOptions(request, runtime);
  }

  /**
   * 创建国际一口价订单
   * 
   * @param request - CreateIntlFixedPriceDomainOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntlFixedPriceDomainOrderResponse
   */
  async createIntlFixedPriceDomainOrderWithOptions(request: CreateIntlFixedPriceDomainOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntlFixedPriceDomainOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.expectedPrice)) {
      query["ExpectedPrice"] = request.expectedPrice;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIntlFixedPriceDomainOrder",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIntlFixedPriceDomainOrderResponse>(await this.callApi(params, req, runtime), new CreateIntlFixedPriceDomainOrderResponse({}));
  }

  /**
   * 创建国际一口价订单
   * 
   * @param request - CreateIntlFixedPriceDomainOrderRequest
   * @returns CreateIntlFixedPriceDomainOrderResponse
   */
  async createIntlFixedPriceDomainOrder(request: CreateIntlFixedPriceDomainOrderRequest): Promise<CreateIntlFixedPriceDomainOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntlFixedPriceDomainOrderWithOptions(request, runtime);
  }

  /**
   * 批量删除联系人模板
   * 
   * @param request - DeleteContactTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactTemplatesResponse
   */
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

  /**
   * 批量删除联系人模板
   * 
   * @param request - DeleteContactTemplatesRequest
   * @returns DeleteContactTemplatesResponse
   */
  async deleteContactTemplates(request: DeleteContactTemplatesRequest): Promise<DeleteContactTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactTemplatesWithOptions(request, runtime);
  }

  /**
   * 删除域名分组
   * 
   * @param request - DeleteDomainGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainGroupResponse
   */
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

  /**
   * 删除域名分组
   * 
   * @param request - DeleteDomainGroupRequest
   * @returns DeleteDomainGroupResponse
   */
  async deleteDomainGroup(request: DeleteDomainGroupRequest): Promise<DeleteDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainGroupWithOptions(request, runtime);
  }

  /**
   * 删除邮箱验证
   * 
   * @param request - DeleteEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEmailVerificationResponse
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

  /**
   * 删除邮箱验证
   * 
   * @param request - DeleteEmailVerificationRequest
   * @returns DeleteEmailVerificationResponse
   */
  async deleteEmailVerification(request: DeleteEmailVerificationRequest): Promise<DeleteEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEmailVerificationWithOptions(request, runtime);
  }

  /**
   * 删除联系人模板
   * 
   * @param request - DeleteRegistrantProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistrantProfileResponse
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

  /**
   * 删除联系人模板
   * 
   * @param request - DeleteRegistrantProfileRequest
   * @returns DeleteRegistrantProfileResponse
   */
  async deleteRegistrantProfile(request: DeleteRegistrantProfileRequest): Promise<DeleteRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRegistrantProfileWithOptions(request, runtime);
  }

  /**
   * 取消域名特殊业务流程
   * 
   * @param request - DomainSpecialBizCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DomainSpecialBizCancelResponse
   */
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

  /**
   * 取消域名特殊业务流程
   * 
   * @param request - DomainSpecialBizCancelRequest
   * @returns DomainSpecialBizCancelResponse
   */
  async domainSpecialBizCancel(request: DomainSpecialBizCancelRequest): Promise<DomainSpecialBizCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.domainSpecialBizCancelWithOptions(request, runtime);
  }

  /**
   * 邮箱验证通过
   * 
   * @param request - EmailVerifiedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EmailVerifiedResponse
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

  /**
   * 邮箱验证通过
   * 
   * @param request - EmailVerifiedRequest
   * @returns EmailVerifiedResponse
   */
  async emailVerified(request: EmailVerifiedRequest): Promise<EmailVerifiedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emailVerifiedWithOptions(request, runtime);
  }

  /**
   * 通过关键字进行模糊匹配
   * 
   * @param request - FuzzyMatchDomainSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FuzzyMatchDomainSensitiveWordResponse
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

  /**
   * 通过关键字进行模糊匹配
   * 
   * @param request - FuzzyMatchDomainSensitiveWordRequest
   * @returns FuzzyMatchDomainSensitiveWordResponse
   */
  async fuzzyMatchDomainSensitiveWord(request: FuzzyMatchDomainSensitiveWordRequest): Promise<FuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  /**
   * 查询国际一口价在售域名列表
   * 
   * @param request - GetIntlFixPriceDomainListUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntlFixPriceDomainListUrlResponse
   */
  async getIntlFixPriceDomainListUrlWithOptions(request: GetIntlFixPriceDomainListUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetIntlFixPriceDomainListUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listDate)) {
      query["ListDate"] = request.listDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIntlFixPriceDomainListUrl",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIntlFixPriceDomainListUrlResponse>(await this.callApi(params, req, runtime), new GetIntlFixPriceDomainListUrlResponse({}));
  }

  /**
   * 查询国际一口价在售域名列表
   * 
   * @param request - GetIntlFixPriceDomainListUrlRequest
   * @returns GetIntlFixPriceDomainListUrlResponse
   */
  async getIntlFixPriceDomainListUrl(request: GetIntlFixPriceDomainListUrlRequest): Promise<GetIntlFixPriceDomainListUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntlFixPriceDomainListUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetOperationOssUploadPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOperationOssUploadPolicyResponse
   */
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

  /**
   * @param request - GetOperationOssUploadPolicyRequest
   * @returns GetOperationOssUploadPolicyResponse
   */
  async getOperationOssUploadPolicy(request: GetOperationOssUploadPolicyRequest): Promise<GetOperationOssUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationOssUploadPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualificationUploadPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualificationUploadPolicyResponse
   */
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

  /**
   * @param request - GetQualificationUploadPolicyRequest
   * @returns GetQualificationUploadPolicyResponse
   */
  async getQualificationUploadPolicy(request: GetQualificationUploadPolicyRequest): Promise<GetQualificationUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualificationUploadPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - ListEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEmailVerificationResponse
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

  /**
   * @param request - ListEmailVerificationRequest
   * @returns ListEmailVerificationResponse
   */
  async listEmailVerification(request: ListEmailVerificationRequest): Promise<ListEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmailVerificationWithOptions(request, runtime);
  }

  /**
   * Queries information about domain names for which registry locks are enabled.
   * 
   * @param request - ListServerLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerLockResponse
   */
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

  /**
   * Queries information about domain names for which registry locks are enabled.
   * 
   * @param request - ListServerLockRequest
   * @returns ListServerLockResponse
   */
  async listServerLock(request: ListServerLockRequest): Promise<ListServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerLockWithOptions(request, runtime);
  }

  /**
   * @param request - LookupTmchNoticeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LookupTmchNoticeResponse
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

  /**
   * @param request - LookupTmchNoticeRequest
   * @returns LookupTmchNoticeResponse
   */
  async lookupTmchNotice(request: LookupTmchNoticeRequest): Promise<LookupTmchNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupTmchNoticeWithOptions(request, runtime);
  }

  /**
   * @param request - PollTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PollTaskResultResponse
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

  /**
   * @param request - PollTaskResultRequest
   * @returns PollTaskResultResponse
   */
  async pollTaskResult(request: PollTaskResultRequest): Promise<PollTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pollTaskResultWithOptions(request, runtime);
  }

  /**
   * 搜索域名列表
   * 
   * @param request - QueryAdvancedDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAdvancedDomainListResponse
   */
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

    if (!Util.isUnset(request.isPremiumDomain)) {
      query["IsPremiumDomain"] = request.isPremiumDomain;
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

  /**
   * 搜索域名列表
   * 
   * @param request - QueryAdvancedDomainListRequest
   * @returns QueryAdvancedDomainListResponse
   */
  async queryAdvancedDomainList(request: QueryAdvancedDomainListRequest): Promise<QueryAdvancedDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAdvancedDomainListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryArtExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryArtExtensionResponse
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

  /**
   * @param request - QueryArtExtensionRequest
   * @returns QueryArtExtensionResponse
   */
  async queryArtExtension(request: QueryArtExtensionRequest): Promise<QueryArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryArtExtensionWithOptions(request, runtime);
  }

  /**
   * @param request - QueryChangeLogListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChangeLogListResponse
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

  /**
   * @param request - QueryChangeLogListRequest
   * @returns QueryChangeLogListResponse
   */
  async queryChangeLogList(request: QueryChangeLogListRequest): Promise<QueryChangeLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChangeLogListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryContactInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContactInfoResponse
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

  /**
   * @param request - QueryContactInfoRequest
   * @returns QueryContactInfoResponse
   */
  async queryContactInfo(request: QueryContactInfoRequest): Promise<QueryContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryContactInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDSRecordResponse
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

  /**
   * @param request - QueryDSRecordRequest
   * @returns QueryDSRecordResponse
   */
  async queryDSRecord(request: QueryDSRecordRequest): Promise<QueryDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDnsHostResponse
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

  /**
   * @param request - QueryDnsHostRequest
   * @returns QueryDnsHostResponse
   */
  async queryDnsHost(request: QueryDnsHostRequest): Promise<QueryDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainAdminDivisionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainAdminDivisionResponse
   */
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

  /**
   * @param request - QueryDomainAdminDivisionRequest
   * @returns QueryDomainAdminDivisionResponse
   */
  async queryDomainAdminDivision(request: QueryDomainAdminDivisionRequest): Promise<QueryDomainAdminDivisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainAdminDivisionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a domain name.
   * 
   * @param request - QueryDomainByDomainNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainByDomainNameResponse
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

  /**
   * Queries the information about a domain name.
   * 
   * @param request - QueryDomainByDomainNameRequest
   * @returns QueryDomainByDomainNameResponse
   */
  async queryDomainByDomainName(request: QueryDomainByDomainNameRequest): Promise<QueryDomainByDomainNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByDomainNameWithOptions(request, runtime);
  }

  /**
   * 根据实例id查询域名信息
   * 
   * @param request - QueryDomainByInstanceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainByInstanceIdResponse
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

  /**
   * 根据实例id查询域名信息
   * 
   * @param request - QueryDomainByInstanceIdRequest
   * @returns QueryDomainByInstanceIdResponse
   */
  async queryDomainByInstanceId(request: QueryDomainByInstanceIdRequest): Promise<QueryDomainByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByInstanceIdWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainGroupListResponse
   */
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

  /**
   * @param request - QueryDomainGroupListRequest
   * @returns QueryDomainGroupListResponse
   */
  async queryDomainGroupList(request: QueryDomainGroupListRequest): Promise<QueryDomainGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainGroupListWithOptions(request, runtime);
  }

  /**
   * Queries a list of domain names within your Alibaba Cloud account by page.
   * 
   * @param request - QueryDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainListResponse
   */
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

  /**
   * Queries a list of domain names within your Alibaba Cloud account by page.
   * 
   * @param request - QueryDomainListRequest
   * @returns QueryDomainListResponse
   */
  async queryDomainList(request: QueryDomainListRequest): Promise<QueryDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainRealNameVerificationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainRealNameVerificationInfoResponse
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

  /**
   * @param request - QueryDomainRealNameVerificationInfoRequest
   * @returns QueryDomainRealNameVerificationInfoResponse
   */
  async queryDomainRealNameVerificationInfo(request: QueryDomainRealNameVerificationInfoRequest): Promise<QueryDomainRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainRealNameVerificationInfoWithOptions(request, runtime);
  }

  /**
   * 查询域名特殊业务详情
   * 
   * @param request - QueryDomainSpecialBizDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainSpecialBizDetailResponse
   */
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

  /**
   * 查询域名特殊业务详情
   * 
   * @param request - QueryDomainSpecialBizDetailRequest
   * @returns QueryDomainSpecialBizDetailResponse
   */
  async queryDomainSpecialBizDetail(request: QueryDomainSpecialBizDetailRequest): Promise<QueryDomainSpecialBizDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainSpecialBizDetailWithOptions(request, runtime);
  }

  /**
   * 通过域名查询域名特殊业务详情
   * 
   * @param request - QueryDomainSpecialBizInfoByDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainSpecialBizInfoByDomainResponse
   */
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

  /**
   * 通过域名查询域名特殊业务详情
   * 
   * @param request - QueryDomainSpecialBizInfoByDomainRequest
   * @returns QueryDomainSpecialBizInfoByDomainResponse
   */
  async queryDomainSpecialBizInfoByDomain(request: QueryDomainSpecialBizInfoByDomainRequest): Promise<QueryDomainSpecialBizInfoByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainSpecialBizInfoByDomainWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainSuffixRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainSuffixResponse
   */
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

  /**
   * @param request - QueryDomainSuffixRequest
   * @returns QueryDomainSuffixResponse
   */
  async queryDomainSuffix(request: QueryDomainSuffixRequest): Promise<QueryDomainSuffixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainSuffixWithOptions(request, runtime);
  }

  /**
   * 查询邮箱验证状态
   * 
   * @param request - QueryEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmailVerificationResponse
   */
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

  /**
   * 查询邮箱验证状态
   * 
   * @param request - QueryEmailVerificationRequest
   * @returns QueryEmailVerificationResponse
   */
  async queryEmailVerification(request: QueryEmailVerificationRequest): Promise<QueryEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryEnsAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnsAssociationResponse
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

  /**
   * @param request - QueryEnsAssociationRequest
   * @returns QueryEnsAssociationResponse
   */
  async queryEnsAssociation(request: QueryEnsAssociationRequest): Promise<QueryEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEnsAssociationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFailReasonForDomainRealNameVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailReasonForDomainRealNameVerificationResponse
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

  /**
   * @param request - QueryFailReasonForDomainRealNameVerificationRequest
   * @returns QueryFailReasonForDomainRealNameVerificationResponse
   */
  async queryFailReasonForDomainRealNameVerification(request: QueryFailReasonForDomainRealNameVerificationRequest): Promise<QueryFailReasonForDomainRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForDomainRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFailReasonForRegistrantProfileRealNameVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailReasonForRegistrantProfileRealNameVerificationResponse
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

  /**
   * @param request - QueryFailReasonForRegistrantProfileRealNameVerificationRequest
   * @returns QueryFailReasonForRegistrantProfileRealNameVerificationResponse
   */
  async queryFailReasonForRegistrantProfileRealNameVerification(request: QueryFailReasonForRegistrantProfileRealNameVerificationRequest): Promise<QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFailingReasonListForQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailingReasonListForQualificationResponse
   */
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

  /**
   * @param request - QueryFailingReasonListForQualificationRequest
   * @returns QueryFailingReasonListForQualificationResponse
   */
  async queryFailingReasonListForQualification(request: QueryFailingReasonListForQualificationRequest): Promise<QueryFailingReasonListForQualificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFailingReasonListForQualificationWithOptions(request, runtime);
  }

  /**
   * 查询国际一口价订单列表
   * 
   * @param request - QueryIntlFixedPriceOrderListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIntlFixedPriceOrderListResponse
   */
  async queryIntlFixedPriceOrderListWithOptions(request: QueryIntlFixedPriceOrderListRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntlFixedPriceOrderListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryIntlFixedPriceOrderList",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryIntlFixedPriceOrderListResponse>(await this.callApi(params, req, runtime), new QueryIntlFixedPriceOrderListResponse({}));
  }

  /**
   * 查询国际一口价订单列表
   * 
   * @param request - QueryIntlFixedPriceOrderListRequest
   * @returns QueryIntlFixedPriceOrderListResponse
   */
  async queryIntlFixedPriceOrderList(request: QueryIntlFixedPriceOrderListRequest): Promise<QueryIntlFixedPriceOrderListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntlFixedPriceOrderListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryLocalEnsAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLocalEnsAssociationResponse
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

  /**
   * @param request - QueryLocalEnsAssociationRequest
   * @returns QueryLocalEnsAssociationResponse
   */
  async queryLocalEnsAssociation(request: QueryLocalEnsAssociationRequest): Promise<QueryLocalEnsAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLocalEnsAssociationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOperationAuditInfoDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOperationAuditInfoDetailResponse
   */
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

  /**
   * @param request - QueryOperationAuditInfoDetailRequest
   * @returns QueryOperationAuditInfoDetailResponse
   */
  async queryOperationAuditInfoDetail(request: QueryOperationAuditInfoDetailRequest): Promise<QueryOperationAuditInfoDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOperationAuditInfoDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOperationAuditInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOperationAuditInfoListResponse
   */
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

  /**
   * @param request - QueryOperationAuditInfoListRequest
   * @returns QueryOperationAuditInfoListResponse
   */
  async queryOperationAuditInfoList(request: QueryOperationAuditInfoListRequest): Promise<QueryOperationAuditInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOperationAuditInfoListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryQualificationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryQualificationDetailResponse
   */
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

  /**
   * @param request - QueryQualificationDetailRequest
   * @returns QueryQualificationDetailResponse
   */
  async queryQualificationDetail(request: QueryQualificationDetailRequest): Promise<QueryQualificationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryQualificationDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryRegistrantProfileRealNameVerificationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRegistrantProfileRealNameVerificationInfoResponse
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

  /**
   * @param request - QueryRegistrantProfileRealNameVerificationInfoRequest
   * @returns QueryRegistrantProfileRealNameVerificationInfoResponse
   */
  async queryRegistrantProfileRealNameVerificationInfo(request: QueryRegistrantProfileRealNameVerificationInfoRequest): Promise<QueryRegistrantProfileRealNameVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfileRealNameVerificationInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryRegistrantProfilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRegistrantProfilesResponse
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

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
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

  /**
   * @param request - QueryRegistrantProfilesRequest
   * @returns QueryRegistrantProfilesResponse
   */
  async queryRegistrantProfiles(request: QueryRegistrantProfilesRequest): Promise<QueryRegistrantProfilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRegistrantProfilesWithOptions(request, runtime);
  }

  /**
   * @param request - QueryServerLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryServerLockResponse
   */
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

  /**
   * @param request - QueryServerLockRequest
   * @returns QueryServerLockResponse
   */
  async queryServerLock(request: QueryServerLockRequest): Promise<QueryServerLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServerLockWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskDetailHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskDetailHistoryResponse
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

  /**
   * @param request - QueryTaskDetailHistoryRequest
   * @returns QueryTaskDetailHistoryResponse
   */
  async queryTaskDetailHistory(request: QueryTaskDetailHistoryRequest): Promise<QueryTaskDetailHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailHistoryWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskDetailListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskDetailListResponse
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

  /**
   * @param request - QueryTaskDetailListRequest
   * @returns QueryTaskDetailListResponse
   */
  async queryTaskDetailList(request: QueryTaskDetailListRequest): Promise<QueryTaskDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskInfoHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskInfoHistoryResponse
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

  /**
   * @param request - QueryTaskInfoHistoryRequest
   * @returns QueryTaskInfoHistoryResponse
   */
  async queryTaskInfoHistory(request: QueryTaskInfoHistoryRequest): Promise<QueryTaskInfoHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskInfoHistoryWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskListResponse
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

  /**
   * @param request - QueryTaskListRequest
   * @returns QueryTaskListResponse
   */
  async queryTaskList(request: QueryTaskListRequest): Promise<QueryTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTransferInByInstanceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTransferInByInstanceIdResponse
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

  /**
   * @param request - QueryTransferInByInstanceIdRequest
   * @returns QueryTransferInByInstanceIdResponse
   */
  async queryTransferInByInstanceId(request: QueryTransferInByInstanceIdRequest): Promise<QueryTransferInByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInByInstanceIdWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTransferInListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTransferInListResponse
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

  /**
   * @param request - QueryTransferInListRequest
   * @returns QueryTransferInListResponse
   */
  async queryTransferInList(request: QueryTransferInListRequest): Promise<QueryTransferInListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferInListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTransferOutInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTransferOutInfoResponse
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

  /**
   * @param request - QueryTransferOutInfoRequest
   * @returns QueryTransferOutInfoResponse
   */
  async queryTransferOutInfo(request: QueryTransferOutInfoRequest): Promise<QueryTransferOutInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferOutInfoWithOptions(request, runtime);
  }

  /**
   * 保存联系人模板实名资料
   * 
   * @param request - RegistrantProfileRealNameVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegistrantProfileRealNameVerificationResponse
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

  /**
   * 保存联系人模板实名资料
   * 
   * @param request - RegistrantProfileRealNameVerificationRequest
   * @returns RegistrantProfileRealNameVerificationResponse
   */
  async registrantProfileRealNameVerification(request: RegistrantProfileRealNameVerificationRequest): Promise<RegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * 重新发送验证邮件
   * 
   * @param request - ResendEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendEmailVerificationResponse
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

  /**
   * 重新发送验证邮件
   * 
   * @param request - ResendEmailVerificationRequest
   * @returns ResendEmailVerificationResponse
   */
  async resendEmailVerification(request: ResendEmailVerificationRequest): Promise<ResendEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendEmailVerificationWithOptions(request, runtime);
  }

  /**
   * 重置资质审核状态
   * 
   * @param request - ResetQualificationVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetQualificationVerificationResponse
   */
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

  /**
   * 重置资质审核状态
   * 
   * @param request - ResetQualificationVerificationRequest
   * @returns ResetQualificationVerificationResponse
   */
  async resetQualificationVerification(request: ResetQualificationVerificationRequest): Promise<ResetQualificationVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetQualificationVerificationWithOptions(request, runtime);
  }

  /**
   * 批量保存域名备注信息
   * 
   * @param request - SaveBatchDomainRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchDomainRemarkResponse
   */
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

  /**
   * 批量保存域名备注信息
   * 
   * @param request - SaveBatchDomainRemarkRequest
   * @returns SaveBatchDomainRemarkResponse
   */
  async saveBatchDomainRemark(request: SaveBatchDomainRemarkRequest): Promise<SaveBatchDomainRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchDomainRemarkWithOptions(request, runtime);
  }

  /**
   * 批量申请域名快速转出
   * 
   * @param request - SaveBatchTaskForApplyQuickTransferOutOpenlyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForApplyQuickTransferOutOpenlyResponse
   */
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

  /**
   * 批量申请域名快速转出
   * 
   * @param request - SaveBatchTaskForApplyQuickTransferOutOpenlyRequest
   * @returns SaveBatchTaskForApplyQuickTransferOutOpenlyResponse
   */
  async saveBatchTaskForApplyQuickTransferOutOpenly(request: SaveBatchTaskForApplyQuickTransferOutOpenlyRequest): Promise<SaveBatchTaskForApplyQuickTransferOutOpenlyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForApplyQuickTransferOutOpenlyWithOptions(request, runtime);
  }

  /**
   * 保存批量任务-注册订单
   * 
   * @param request - SaveBatchTaskForCreatingOrderActivateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderActivateResponse
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

  /**
   * 保存批量任务-注册订单
   * 
   * @param request - SaveBatchTaskForCreatingOrderActivateRequest
   * @returns SaveBatchTaskForCreatingOrderActivateResponse
   */
  async saveBatchTaskForCreatingOrderActivate(request: SaveBatchTaskForCreatingOrderActivateRequest): Promise<SaveBatchTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderRedeemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderRedeemResponse
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

  /**
   * @param request - SaveBatchTaskForCreatingOrderRedeemRequest
   * @returns SaveBatchTaskForCreatingOrderRedeemResponse
   */
  async saveBatchTaskForCreatingOrderRedeem(request: SaveBatchTaskForCreatingOrderRedeemRequest): Promise<SaveBatchTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  /**
   * 保存批量任务-续费订单
   * 
   * @param request - SaveBatchTaskForCreatingOrderRenewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderRenewResponse
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

  /**
   * 保存批量任务-续费订单
   * 
   * @param request - SaveBatchTaskForCreatingOrderRenewRequest
   * @returns SaveBatchTaskForCreatingOrderRenewResponse
   */
  async saveBatchTaskForCreatingOrderRenew(request: SaveBatchTaskForCreatingOrderRenewRequest): Promise<SaveBatchTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderTransferResponse
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

  /**
   * @param request - SaveBatchTaskForCreatingOrderTransferRequest
   * @returns SaveBatchTaskForCreatingOrderTransferResponse
   */
  async saveBatchTaskForCreatingOrderTransfer(request: SaveBatchTaskForCreatingOrderTransferRequest): Promise<SaveBatchTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  /**
   * 保存批量任务-开启/关闭whois隐私保护锁
   * 
   * @param request - SaveBatchTaskForDomainNameProxyServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForDomainNameProxyServiceResponse
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

  /**
   * 保存批量任务-开启/关闭whois隐私保护锁
   * 
   * @param request - SaveBatchTaskForDomainNameProxyServiceRequest
   * @returns SaveBatchTaskForDomainNameProxyServiceResponse
   */
  async saveBatchTaskForDomainNameProxyService(request: SaveBatchTaskForDomainNameProxyServiceRequest): Promise<SaveBatchTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  /**
   * 提交批量生成证书的任务
   * 
   * @param tmpReq - SaveBatchTaskForGenerateDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForGenerateDomainCertificateResponse
   */
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

  /**
   * 提交批量生成证书的任务
   * 
   * @param request - SaveBatchTaskForGenerateDomainCertificateRequest
   * @returns SaveBatchTaskForGenerateDomainCertificateResponse
   */
  async saveBatchTaskForGenerateDomainCertificate(request: SaveBatchTaskForGenerateDomainCertificateRequest): Promise<SaveBatchTaskForGenerateDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForGenerateDomainCertificateWithOptions(request, runtime);
  }

  /**
   * 批量修改dns
   * 
   * @param request - SaveBatchTaskForModifyingDomainDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForModifyingDomainDnsResponse
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

  /**
   * 批量修改dns
   * 
   * @param request - SaveBatchTaskForModifyingDomainDnsRequest
   * @returns SaveBatchTaskForModifyingDomainDnsResponse
   */
  async saveBatchTaskForModifyingDomainDns(request: SaveBatchTaskForModifyingDomainDnsRequest): Promise<SaveBatchTaskForModifyingDomainDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForModifyingDomainDnsWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForReserveDropListDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForReserveDropListDomainResponse
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

  /**
   * @param request - SaveBatchTaskForReserveDropListDomainRequest
   * @returns SaveBatchTaskForReserveDropListDomainResponse
   */
  async saveBatchTaskForReserveDropListDomain(request: SaveBatchTaskForReserveDropListDomainRequest): Promise<SaveBatchTaskForReserveDropListDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForReserveDropListDomainWithOptions(request, runtime);
  }

  /**
   * 基于转移码的批量转出任务提交
   * 
   * @param request - SaveBatchTaskForTransferOutByAuthorizationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForTransferOutByAuthorizationCodeResponse
   */
  async saveBatchTaskForTransferOutByAuthorizationCodeWithOptions(request: SaveBatchTaskForTransferOutByAuthorizationCodeRequest, runtime: $Util.RuntimeOptions): Promise<SaveBatchTaskForTransferOutByAuthorizationCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.long)) {
      query["Long"] = request.long;
    }

    if (!Util.isUnset(request.transferOutParamList)) {
      query["TransferOutParamList"] = request.transferOutParamList;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBatchTaskForTransferOutByAuthorizationCode",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBatchTaskForTransferOutByAuthorizationCodeResponse>(await this.callApi(params, req, runtime), new SaveBatchTaskForTransferOutByAuthorizationCodeResponse({}));
  }

  /**
   * 基于转移码的批量转出任务提交
   * 
   * @param request - SaveBatchTaskForTransferOutByAuthorizationCodeRequest
   * @returns SaveBatchTaskForTransferOutByAuthorizationCodeResponse
   */
  async saveBatchTaskForTransferOutByAuthorizationCode(request: SaveBatchTaskForTransferOutByAuthorizationCodeRequest): Promise<SaveBatchTaskForTransferOutByAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForTransferOutByAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * 保存批量任务-开启/关闭禁止转移锁
   * 
   * @param request - SaveBatchTaskForTransferProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForTransferProhibitionLockResponse
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

  /**
   * 保存批量任务-开启/关闭禁止转移锁
   * 
   * @param request - SaveBatchTaskForTransferProhibitionLockRequest
   * @returns SaveBatchTaskForTransferProhibitionLockResponse
   */
  async saveBatchTaskForTransferProhibitionLock(request: SaveBatchTaskForTransferProhibitionLockRequest): Promise<SaveBatchTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForUpdateProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForUpdateProhibitionLockResponse
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

  /**
   * @param request - SaveBatchTaskForUpdateProhibitionLockRequest
   * @returns SaveBatchTaskForUpdateProhibitionLockResponse
   */
  async saveBatchTaskForUpdateProhibitionLock(request: SaveBatchTaskForUpdateProhibitionLockRequest): Promise<SaveBatchTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  /**
   * 使用联系人信息修改联系人的批量任务
   * 
   * @param request - SaveBatchTaskForUpdatingContactInfoByNewContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForUpdatingContactInfoByNewContactResponse
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

  /**
   * 使用联系人信息修改联系人的批量任务
   * 
   * @param request - SaveBatchTaskForUpdatingContactInfoByNewContactRequest
   * @returns SaveBatchTaskForUpdatingContactInfoByNewContactResponse
   */
  async saveBatchTaskForUpdatingContactInfoByNewContact(request: SaveBatchTaskForUpdatingContactInfoByNewContactRequest): Promise<SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request, runtime);
  }

  /**
   * 使用模板修改联系人的批量任务
   * 
   * @param request - SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse
   */
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

  /**
   * 使用模板修改联系人的批量任务
   * 
   * @param request - SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest
   * @returns SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse
   */
  async saveBatchTaskForUpdatingContactInfoByRegistrantProfileId(request: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest): Promise<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByRegistrantProfileIdWithOptions(request, runtime);
  }

  /**
   * 创建/更新域名分组
   * 
   * @param request - SaveDomainGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveDomainGroupResponse
   */
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

  /**
   * 创建/更新域名分组
   * 
   * @param request - SaveDomainGroupRequest
   * @returns SaveDomainGroupResponse
   */
  async saveDomainGroup(request: SaveDomainGroupRequest): Promise<SaveDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveDomainGroupWithOptions(request, runtime);
  }

  /**
   * 保存联系人模板
   * 
   * @param request - SaveRegistrantProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveRegistrantProfileResponse
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

  /**
   * 保存联系人模板
   * 
   * @param request - SaveRegistrantProfileRequest
   * @returns SaveRegistrantProfileResponse
   */
  async saveRegistrantProfile(request: SaveRegistrantProfileRequest): Promise<SaveRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRegistrantProfileWithOptions(request, runtime);
  }

  /**
   * 保存联系人模板和凭据
   * 
   * @param request - SaveRegistrantProfileRealNameVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveRegistrantProfileRealNameVerificationResponse
   */
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

  /**
   * 保存联系人模板和凭据
   * 
   * @param request - SaveRegistrantProfileRealNameVerificationRequest
   * @returns SaveRegistrantProfileRealNameVerificationResponse
   */
  async saveRegistrantProfileRealNameVerification(request: SaveRegistrantProfileRealNameVerificationRequest): Promise<SaveRegistrantProfileRealNameVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRegistrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * 添加dnsSec记录
   * 
   * @param request - SaveSingleTaskForAddingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForAddingDSRecordResponse
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

  /**
   * 添加dnsSec记录
   * 
   * @param request - SaveSingleTaskForAddingDSRecordRequest
   * @returns SaveSingleTaskForAddingDSRecordResponse
   */
  async saveSingleTaskForAddingDSRecord(request: SaveSingleTaskForAddingDSRecordRequest): Promise<SaveSingleTaskForAddingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAddingDSRecordWithOptions(request, runtime);
  }

  /**
   * 申请域名快速转出
   * 
   * @param request - SaveSingleTaskForApplyQuickTransferOutOpenlyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForApplyQuickTransferOutOpenlyResponse
   */
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

  /**
   * 申请域名快速转出
   * 
   * @param request - SaveSingleTaskForApplyQuickTransferOutOpenlyRequest
   * @returns SaveSingleTaskForApplyQuickTransferOutOpenlyResponse
   */
  async saveSingleTaskForApplyQuickTransferOutOpenly(request: SaveSingleTaskForApplyQuickTransferOutOpenlyRequest): Promise<SaveSingleTaskForApplyQuickTransferOutOpenlyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForApplyQuickTransferOutOpenlyWithOptions(request, runtime);
  }

  /**
   * 确认转出
   * 
   * @param request - SaveSingleTaskForApprovingTransferOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForApprovingTransferOutResponse
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

  /**
   * 确认转出
   * 
   * @param request - SaveSingleTaskForApprovingTransferOutRequest
   * @returns SaveSingleTaskForApprovingTransferOutResponse
   */
  async saveSingleTaskForApprovingTransferOut(request: SaveSingleTaskForApprovingTransferOutRequest): Promise<SaveSingleTaskForApprovingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForApprovingTransferOutWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForAssociatingEnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForAssociatingEnsResponse
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

  /**
   * @param request - SaveSingleTaskForAssociatingEnsRequest
   * @returns SaveSingleTaskForAssociatingEnsResponse
   */
  async saveSingleTaskForAssociatingEns(request: SaveSingleTaskForAssociatingEnsRequest): Promise<SaveSingleTaskForAssociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForAssociatingEnsWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCancelingTransferInRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCancelingTransferInResponse
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

  /**
   * @param request - SaveSingleTaskForCancelingTransferInRequest
   * @returns SaveSingleTaskForCancelingTransferInResponse
   */
  async saveSingleTaskForCancelingTransferIn(request: SaveSingleTaskForCancelingTransferInRequest): Promise<SaveSingleTaskForCancelingTransferInResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferInWithOptions(request, runtime);
  }

  /**
   * 取消转出
   * 
   * @param request - SaveSingleTaskForCancelingTransferOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCancelingTransferOutResponse
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

  /**
   * 取消转出
   * 
   * @param request - SaveSingleTaskForCancelingTransferOutRequest
   * @returns SaveSingleTaskForCancelingTransferOutResponse
   */
  async saveSingleTaskForCancelingTransferOut(request: SaveSingleTaskForCancelingTransferOutRequest): Promise<SaveSingleTaskForCancelingTransferOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferOutWithOptions(request, runtime);
  }

  /**
   * 保存创建dns服务器的任务请求
   * 
   * @param request - SaveSingleTaskForCreatingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingDnsHostResponse
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

  /**
   * 保存创建dns服务器的任务请求
   * 
   * @param request - SaveSingleTaskForCreatingDnsHostRequest
   * @returns SaveSingleTaskForCreatingDnsHostResponse
   */
  async saveSingleTaskForCreatingDnsHost(request: SaveSingleTaskForCreatingDnsHostRequest): Promise<SaveSingleTaskForCreatingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingDnsHostWithOptions(request, runtime);
  }

  /**
   * 保存单个任务-注册订单
   * 
   * @param request - SaveSingleTaskForCreatingOrderActivateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderActivateResponse
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

  /**
   * 保存单个任务-注册订单
   * 
   * @param request - SaveSingleTaskForCreatingOrderActivateRequest
   * @returns SaveSingleTaskForCreatingOrderActivateResponse
   */
  async saveSingleTaskForCreatingOrderActivate(request: SaveSingleTaskForCreatingOrderActivateRequest): Promise<SaveSingleTaskForCreatingOrderActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderRedeemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderRedeemResponse
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

  /**
   * @param request - SaveSingleTaskForCreatingOrderRedeemRequest
   * @returns SaveSingleTaskForCreatingOrderRedeemResponse
   */
  async saveSingleTaskForCreatingOrderRedeem(request: SaveSingleTaskForCreatingOrderRedeemRequest): Promise<SaveSingleTaskForCreatingOrderRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  /**
   * 保存单个任务-续费订单
   * 
   * @param request - SaveSingleTaskForCreatingOrderRenewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderRenewResponse
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

  /**
   * 保存单个任务-续费订单
   * 
   * @param request - SaveSingleTaskForCreatingOrderRenewRequest
   * @returns SaveSingleTaskForCreatingOrderRenewResponse
   */
  async saveSingleTaskForCreatingOrderRenew(request: SaveSingleTaskForCreatingOrderRenewRequest): Promise<SaveSingleTaskForCreatingOrderRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderTransferResponse
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

  /**
   * @param request - SaveSingleTaskForCreatingOrderTransferRequest
   * @returns SaveSingleTaskForCreatingOrderTransferResponse
   */
  async saveSingleTaskForCreatingOrderTransfer(request: SaveSingleTaskForCreatingOrderTransferRequest): Promise<SaveSingleTaskForCreatingOrderTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  /**
   * 删除dnsSec记录
   * 
   * @param request - SaveSingleTaskForDeletingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDeletingDSRecordResponse
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

  /**
   * 删除dnsSec记录
   * 
   * @param request - SaveSingleTaskForDeletingDSRecordRequest
   * @returns SaveSingleTaskForDeletingDSRecordResponse
   */
  async saveSingleTaskForDeletingDSRecord(request: SaveSingleTaskForDeletingDSRecordRequest): Promise<SaveSingleTaskForDeletingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDSRecordWithOptions(request, runtime);
  }

  /**
   * 删除DNS HOST任务
   * 
   * @param request - SaveSingleTaskForDeletingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDeletingDnsHostResponse
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

  /**
   * 删除DNS HOST任务
   * 
   * @param request - SaveSingleTaskForDeletingDnsHostRequest
   * @returns SaveSingleTaskForDeletingDnsHostResponse
   */
  async saveSingleTaskForDeletingDnsHost(request: SaveSingleTaskForDeletingDnsHostRequest): Promise<SaveSingleTaskForDeletingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForDisassociatingEnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDisassociatingEnsResponse
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

  /**
   * @param request - SaveSingleTaskForDisassociatingEnsRequest
   * @returns SaveSingleTaskForDisassociatingEnsResponse
   */
  async saveSingleTaskForDisassociatingEns(request: SaveSingleTaskForDisassociatingEnsRequest): Promise<SaveSingleTaskForDisassociatingEnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDisassociatingEnsWithOptions(request, runtime);
  }

  /**
   * 保存单个任务-开启/关闭whois隐私保护锁
   * 
   * @param request - SaveSingleTaskForDomainNameProxyServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDomainNameProxyServiceResponse
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

  /**
   * 保存单个任务-开启/关闭whois隐私保护锁
   * 
   * @param request - SaveSingleTaskForDomainNameProxyServiceRequest
   * @returns SaveSingleTaskForDomainNameProxyServiceResponse
   */
  async saveSingleTaskForDomainNameProxyService(request: SaveSingleTaskForDomainNameProxyServiceRequest): Promise<SaveSingleTaskForDomainNameProxyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  /**
   * 提交生成域名证书任务
   * 
   * @param request - SaveSingleTaskForGenerateDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForGenerateDomainCertificateResponse
   */
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

  /**
   * 提交生成域名证书任务
   * 
   * @param request - SaveSingleTaskForGenerateDomainCertificateRequest
   * @returns SaveSingleTaskForGenerateDomainCertificateResponse
   */
  async saveSingleTaskForGenerateDomainCertificate(request: SaveSingleTaskForGenerateDomainCertificateRequest): Promise<SaveSingleTaskForGenerateDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForGenerateDomainCertificateWithOptions(request, runtime);
  }

  /**
   * 修改DnsSec记录
   * 
   * @param request - SaveSingleTaskForModifyingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForModifyingDSRecordResponse
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

  /**
   * 修改DnsSec记录
   * 
   * @param request - SaveSingleTaskForModifyingDSRecordRequest
   * @returns SaveSingleTaskForModifyingDSRecordResponse
   */
  async saveSingleTaskForModifyingDSRecord(request: SaveSingleTaskForModifyingDSRecordRequest): Promise<SaveSingleTaskForModifyingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDSRecordWithOptions(request, runtime);
  }

  /**
   * 保存修改dns服务器的任务请求
   * 
   * @param request - SaveSingleTaskForModifyingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForModifyingDnsHostResponse
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

  /**
   * 保存修改dns服务器的任务请求
   * 
   * @param request - SaveSingleTaskForModifyingDnsHostRequest
   * @returns SaveSingleTaskForModifyingDnsHostResponse
   */
  async saveSingleTaskForModifyingDnsHost(request: SaveSingleTaskForModifyingDnsHostRequest): Promise<SaveSingleTaskForModifyingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDnsHostWithOptions(request, runtime);
  }

  /**
   * 发送转移码
   * 
   * @param request - SaveSingleTaskForQueryingTransferAuthorizationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForQueryingTransferAuthorizationCodeResponse
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

  /**
   * 发送转移码
   * 
   * @param request - SaveSingleTaskForQueryingTransferAuthorizationCodeRequest
   * @returns SaveSingleTaskForQueryingTransferAuthorizationCodeResponse
   */
  async saveSingleTaskForQueryingTransferAuthorizationCode(request: SaveSingleTaskForQueryingTransferAuthorizationCodeRequest): Promise<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * 单笔抢注批量接口
   * 
   * @param request - SaveSingleTaskForReserveDropListDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForReserveDropListDomainResponse
   */
  async saveSingleTaskForReserveDropListDomainWithOptions(request: SaveSingleTaskForReserveDropListDomainRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForReserveDropListDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveSingleTaskForReserveDropListDomain",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForReserveDropListDomainResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForReserveDropListDomainResponse({}));
  }

  /**
   * 单笔抢注批量接口
   * 
   * @param request - SaveSingleTaskForReserveDropListDomainRequest
   * @returns SaveSingleTaskForReserveDropListDomainResponse
   */
  async saveSingleTaskForReserveDropListDomain(request: SaveSingleTaskForReserveDropListDomainRequest): Promise<SaveSingleTaskForReserveDropListDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForReserveDropListDomainWithOptions(request, runtime);
  }

  /**
   * 保存art扩展信息任务
   * 
   * @param request - SaveSingleTaskForSaveArtExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForSaveArtExtensionResponse
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

  /**
   * 保存art扩展信息任务
   * 
   * @param request - SaveSingleTaskForSaveArtExtensionRequest
   * @returns SaveSingleTaskForSaveArtExtensionResponse
   */
  async saveSingleTaskForSaveArtExtension(request: SaveSingleTaskForSaveArtExtensionRequest): Promise<SaveSingleTaskForSaveArtExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSaveArtExtensionWithOptions(request, runtime);
  }

  /**
   * 同步DnsSec记录
   * 
   * @param request - SaveSingleTaskForSynchronizingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForSynchronizingDSRecordResponse
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

  /**
   * 同步DnsSec记录
   * 
   * @param request - SaveSingleTaskForSynchronizingDSRecordRequest
   * @returns SaveSingleTaskForSynchronizingDSRecordResponse
   */
  async saveSingleTaskForSynchronizingDSRecord(request: SaveSingleTaskForSynchronizingDSRecordRequest): Promise<SaveSingleTaskForSynchronizingDSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDSRecordWithOptions(request, runtime);
  }

  /**
   * 保存同步dns服务器的任务请求
   * 
   * @param request - SaveSingleTaskForSynchronizingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForSynchronizingDnsHostResponse
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

  /**
   * 保存同步dns服务器的任务请求
   * 
   * @param request - SaveSingleTaskForSynchronizingDnsHostRequest
   * @returns SaveSingleTaskForSynchronizingDnsHostResponse
   */
  async saveSingleTaskForSynchronizingDnsHost(request: SaveSingleTaskForSynchronizingDnsHostRequest): Promise<SaveSingleTaskForSynchronizingDnsHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDnsHostWithOptions(request, runtime);
  }

  /**
   * 基于转移码的单个转出任务提交
   * 
   * @param request - SaveSingleTaskForTransferOutByAuthorizationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForTransferOutByAuthorizationCodeResponse
   */
  async saveSingleTaskForTransferOutByAuthorizationCodeWithOptions(request: SaveSingleTaskForTransferOutByAuthorizationCodeRequest, runtime: $Util.RuntimeOptions): Promise<SaveSingleTaskForTransferOutByAuthorizationCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationCode)) {
      query["AuthorizationCode"] = request.authorizationCode;
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
      action: "SaveSingleTaskForTransferOutByAuthorizationCode",
      version: "2018-01-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveSingleTaskForTransferOutByAuthorizationCodeResponse>(await this.callApi(params, req, runtime), new SaveSingleTaskForTransferOutByAuthorizationCodeResponse({}));
  }

  /**
   * 基于转移码的单个转出任务提交
   * 
   * @param request - SaveSingleTaskForTransferOutByAuthorizationCodeRequest
   * @returns SaveSingleTaskForTransferOutByAuthorizationCodeResponse
   */
  async saveSingleTaskForTransferOutByAuthorizationCode(request: SaveSingleTaskForTransferOutByAuthorizationCodeRequest): Promise<SaveSingleTaskForTransferOutByAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForTransferOutByAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * 保存单个任务-开启/关闭禁止转移锁
   * 
   * @param request - SaveSingleTaskForTransferProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForTransferProhibitionLockResponse
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

  /**
   * 保存单个任务-开启/关闭禁止转移锁
   * 
   * @param request - SaveSingleTaskForTransferProhibitionLockRequest
   * @returns SaveSingleTaskForTransferProhibitionLockResponse
   */
  async saveSingleTaskForTransferProhibitionLock(request: SaveSingleTaskForTransferProhibitionLockRequest): Promise<SaveSingleTaskForTransferProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  /**
   * 保存单个任务-开启/关闭信息安全锁
   * 
   * @param request - SaveSingleTaskForUpdateProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForUpdateProhibitionLockResponse
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

  /**
   * 保存单个任务-开启/关闭信息安全锁
   * 
   * @param request - SaveSingleTaskForUpdateProhibitionLockRequest
   * @returns SaveSingleTaskForUpdateProhibitionLockResponse
   */
  async saveSingleTaskForUpdateProhibitionLock(request: SaveSingleTaskForUpdateProhibitionLockRequest): Promise<SaveSingleTaskForUpdateProhibitionLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  /**
   * 保存修改联系人的任务
   * 
   * @param request - SaveSingleTaskForUpdatingContactInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForUpdatingContactInfoResponse
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

  /**
   * 保存修改联系人的任务
   * 
   * @param request - SaveSingleTaskForUpdatingContactInfoRequest
   * @returns SaveSingleTaskForUpdatingContactInfoResponse
   */
  async saveSingleTaskForUpdatingContactInfo(request: SaveSingleTaskForUpdatingContactInfoRequest): Promise<SaveSingleTaskForUpdatingContactInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdatingContactInfoWithOptions(request, runtime);
  }

  /**
   * 保存删除域名的任务
   * 
   * @param request - SaveTaskForSubmittingDomainDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainDeleteResponse
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

  /**
   * 保存删除域名的任务
   * 
   * @param request - SaveTaskForSubmittingDomainDeleteRequest
   * @returns SaveTaskForSubmittingDomainDeleteResponse
   */
  async saveTaskForSubmittingDomainDelete(request: SaveTaskForSubmittingDomainDeleteRequest): Promise<SaveTaskForSubmittingDomainDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainDeleteWithOptions(request, runtime);
  }

  /**
   * 批量提交域名资料
   * 
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse
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

  /**
   * 批量提交域名资料
   * 
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(request: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request, runtime);
  }

  /**
   * 根据模板保存域名的实名认证信息
   * 
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse
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

  /**
   * 根据模板保存域名的实名认证信息
   * 
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(request: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request, runtime);
  }

  /**
   * 根据联系人信息批量修改注册联系人信息
   * 
   * @param request - SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse
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

  /**
   * 根据联系人信息批量修改注册联系人信息
   * 
   * @param request - SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest
   * @returns SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse
   */
  async saveTaskForUpdatingRegistrantInfoByIdentityCredential(request: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest): Promise<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request, runtime);
  }

  /**
   * 根据模板批量修改注册联系人
   * 
   * @param request - SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse
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

  /**
   * 根据模板批量修改注册联系人
   * 
   * @param request - SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest
   * @returns SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse
   */
  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileID(request: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest): Promise<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request, runtime);
  }

  /**
   * Traverses domain names.
   * 
   * @remarks
   * If you have a large number of domain names, a slow response may occur when you call an API operation to query domain names. In this case, you can call this operation to query domain names more quickly. When you call this operation for the first time, specify the request parameters except ScrollId. A scroll ID is returned without other data. In the second request, use the scroll ID obtained from the previous response. In subsequent requests, the newly specified request parameters do not take effect, and the request parameters that are specified in the first request prevail.
   * 
   * @param request - ScrollDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScrollDomainListResponse
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
   * Traverses domain names.
   * 
   * @remarks
   * If you have a large number of domain names, a slow response may occur when you call an API operation to query domain names. In this case, you can call this operation to query domain names more quickly. When you call this operation for the first time, specify the request parameters except ScrollId. A scroll ID is returned without other data. In the second request, use the scroll ID obtained from the previous response. In subsequent requests, the newly specified request parameters do not take effect, and the request parameters that are specified in the first request prevail.
   * 
   * @param request - ScrollDomainListRequest
   * @returns ScrollDomainListResponse
   */
  async scrollDomainList(request: ScrollDomainListRequest): Promise<ScrollDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scrollDomainListWithOptions(request, runtime);
  }

  /**
   * 设置默认模板
   * 
   * @param request - SetDefaultRegistrantProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultRegistrantProfileResponse
   */
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

  /**
   * 设置默认模板
   * 
   * @param request - SetDefaultRegistrantProfileRequest
   * @returns SetDefaultRegistrantProfileResponse
   */
  async setDefaultRegistrantProfile(request: SetDefaultRegistrantProfileRequest): Promise<SetDefaultRegistrantProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultRegistrantProfileWithOptions(request, runtime);
  }

  /**
   * 域名设置自动续费
   * 
   * @param request - SetupDomainAutoRenewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupDomainAutoRenewResponse
   */
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

  /**
   * 域名设置自动续费
   * 
   * @param request - SetupDomainAutoRenewRequest
   * @returns SetupDomainAutoRenewResponse
   */
  async setupDomainAutoRenew(request: SetupDomainAutoRenewRequest): Promise<SetupDomainAutoRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupDomainAutoRenewWithOptions(request, runtime);
  }

  /**
   * 域名特殊业务提交资料
   * 
   * @param request - SubmitDomainSpecialBizCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDomainSpecialBizCredentialsResponse
   */
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

  /**
   * 域名特殊业务提交资料
   * 
   * @param request - SubmitDomainSpecialBizCredentialsRequest
   * @returns SubmitDomainSpecialBizCredentialsResponse
   */
  async submitDomainSpecialBizCredentials(request: SubmitDomainSpecialBizCredentialsRequest): Promise<SubmitDomainSpecialBizCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDomainSpecialBizCredentialsWithOptions(request, runtime);
  }

  /**
   * 提交邮箱验证
   * 
   * @param request - SubmitEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEmailVerificationResponse
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

  /**
   * 提交邮箱验证
   * 
   * @param request - SubmitEmailVerificationRequest
   * @returns SubmitEmailVerificationResponse
   */
  async submitEmailVerification(request: SubmitEmailVerificationRequest): Promise<SubmitEmailVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitEmailVerificationWithOptions(request, runtime);
  }

  /**
   * 提交申请信息
   * 
   * @param request - SubmitOperationAuditInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitOperationAuditInfoResponse
   */
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

  /**
   * 提交申请信息
   * 
   * @param request - SubmitOperationAuditInfoRequest
   * @returns SubmitOperationAuditInfoResponse
   */
  async submitOperationAuditInfo(request: SubmitOperationAuditInfoRequest): Promise<SubmitOperationAuditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOperationAuditInfoWithOptions(request, runtime);
  }

  /**
   * 提交证件资料
   * 
   * @param request - SubmitOperationCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitOperationCredentialsResponse
   */
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

  /**
   * 提交证件资料
   * 
   * @param request - SubmitOperationCredentialsRequest
   * @returns SubmitOperationCredentialsResponse
   */
  async submitOperationCredentials(request: SubmitOperationCredentialsRequest): Promise<SubmitOperationCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOperationCredentialsWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInCheckMailTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInCheckMailTokenResponse
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

  /**
   * @param request - TransferInCheckMailTokenRequest
   * @returns TransferInCheckMailTokenResponse
   */
  async transferInCheckMailToken(request: TransferInCheckMailTokenRequest): Promise<TransferInCheckMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInCheckMailTokenWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInReenterTransferAuthorizationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInReenterTransferAuthorizationCodeResponse
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

  /**
   * @param request - TransferInReenterTransferAuthorizationCodeRequest
   * @returns TransferInReenterTransferAuthorizationCodeResponse
   */
  async transferInReenterTransferAuthorizationCode(request: TransferInReenterTransferAuthorizationCodeRequest): Promise<TransferInReenterTransferAuthorizationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInReenterTransferAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInRefetchWhoisEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInRefetchWhoisEmailResponse
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

  /**
   * @param request - TransferInRefetchWhoisEmailRequest
   * @returns TransferInRefetchWhoisEmailResponse
   */
  async transferInRefetchWhoisEmail(request: TransferInRefetchWhoisEmailRequest): Promise<TransferInRefetchWhoisEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInRefetchWhoisEmailWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInResendMailTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInResendMailTokenResponse
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

  /**
   * @param request - TransferInResendMailTokenRequest
   * @returns TransferInResendMailTokenResponse
   */
  async transferInResendMailToken(request: TransferInResendMailTokenRequest): Promise<TransferInResendMailTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInResendMailTokenWithOptions(request, runtime);
  }

  /**
   * 向分组设置域名
   * 
   * @param request - UpdateDomainToDomainGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainToDomainGroupResponse
   */
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

  /**
   * 向分组设置域名
   * 
   * @param request - UpdateDomainToDomainGroupRequest
   * @returns UpdateDomainToDomainGroupResponse
   */
  async updateDomainToDomainGroup(request: UpdateDomainToDomainGroupRequest): Promise<UpdateDomainToDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainToDomainGroupWithOptions(request, runtime);
  }

  /**
   * 校验联系人信息
   * 
   * @param request - VerifyContactFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyContactFieldResponse
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

  /**
   * 校验联系人信息
   * 
   * @param request - VerifyContactFieldRequest
   * @returns VerifyContactFieldResponse
   */
  async verifyContactField(request: VerifyContactFieldRequest): Promise<VerifyContactFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyContactFieldWithOptions(request, runtime);
  }

  /**
   * 验证邮箱Token
   * 
   * @param request - VerifyEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyEmailResponse
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

  /**
   * 验证邮箱Token
   * 
   * @param request - VerifyEmailRequest
   * @returns VerifyEmailResponse
   */
  async verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyEmailWithOptions(request, runtime);
  }

}
