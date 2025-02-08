// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetErrorCodeSolutionsResponseBodySolutions extends $dara.Model {
  content?: string;
  /**
   * @example
   * 0017-00000502
   */
  errorCode?: string;
  errorMessage?: string;
  product?: string;
  productName?: string;
  /**
   * @example
   * 0017-00000502
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      product: 'product',
      productName: 'productName',
      solutionId: 'solutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      product: 'string',
      productName: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoAuthenticationInfo extends $dara.Model {
  authenticationType?: string;
  /**
   * @example
   * HMAC-SHA256
   */
  signatureMethod?: string;
  signatureVersion?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authenticationType',
      signatureMethod: 'signatureMethod',
      signatureVersion: 'signatureVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      signatureMethod: 'string',
      signatureVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'authAction',
      authPrincipalDisplayName: 'authPrincipalDisplayName',
      authPrincipalOwnerId: 'authPrincipalOwnerId',
      authPrincipalType: 'authPrincipalType',
      encodedDiagnosticMessage: 'encodedDiagnosticMessage',
      noPermissionType: 'noPermissionType',
      policyType: 'policyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoBasicInfoApiDoc extends $dara.Model {
  alibabacloudSite?: string;
  aliyunSite?: string;
  static names(): { [key: string]: string } {
    return {
      alibabacloudSite: 'alibabacloudSite',
      aliyunSite: 'aliyunSite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alibabacloudSite: 'string',
      aliyunSite: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoBasicInfoProductName extends $dara.Model {
  cnName?: string;
  enName?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'cnName',
      enName: 'enName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      enName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoBasicInfo extends $dara.Model {
  accessDeniedDetail?: GetOwnRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail;
  api?: string;
  apiDoc?: GetOwnRequestLogResponseBodyLogInfoBasicInfoApiDoc;
  apiStyle?: string;
  apiVersion?: string;
  endpoint?: string;
  errorCode?: string;
  errorMessage?: string;
  gatewayProcessTime?: string;
  httpMethod?: string;
  httpStatusCode?: string;
  logRequestId?: string;
  product?: string;
  productName?: GetOwnRequestLogResponseBodyLogInfoBasicInfoProductName;
  regionId?: string;
  requestDuration?: string;
  sdkRequestTime?: string;
  throttlingResult?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      api: 'api',
      apiDoc: 'apiDoc',
      apiStyle: 'apiStyle',
      apiVersion: 'apiVersion',
      endpoint: 'endpoint',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      gatewayProcessTime: 'gatewayProcessTime',
      httpMethod: 'httpMethod',
      httpStatusCode: 'httpStatusCode',
      logRequestId: 'logRequestId',
      product: 'product',
      productName: 'productName',
      regionId: 'regionId',
      requestDuration: 'requestDuration',
      sdkRequestTime: 'sdkRequestTime',
      throttlingResult: 'throttlingResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetOwnRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail,
      api: 'string',
      apiDoc: GetOwnRequestLogResponseBodyLogInfoBasicInfoApiDoc,
      apiStyle: 'string',
      apiVersion: 'string',
      endpoint: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      gatewayProcessTime: 'string',
      httpMethod: 'string',
      httpStatusCode: 'string',
      logRequestId: 'string',
      product: 'string',
      productName: GetOwnRequestLogResponseBodyLogInfoBasicInfoProductName,
      regionId: 'string',
      requestDuration: 'string',
      sdkRequestTime: 'string',
      throttlingResult: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.apiDoc && typeof (this.apiDoc as any).validate === 'function') {
      (this.apiDoc as any).validate();
    }
    if(this.productName && typeof (this.productName as any).validate === 'function') {
      (this.productName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoCallerInfo extends $dara.Model {
  callerAccountId?: string;
  callerIp?: string;
  callerType?: string;
  masterAccountId?: string;
  userAgent?: string;
  static names(): { [key: string]: string } {
    return {
      callerAccountId: 'callerAccountId',
      callerIp: 'callerIp',
      callerType: 'callerType',
      masterAccountId: 'masterAccountId',
      userAgent: 'userAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerAccountId: 'string',
      callerIp: 'string',
      callerType: 'string',
      masterAccountId: 'string',
      userAgent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoParameters extends $dara.Model {
  name?: string;
  required?: boolean;
  type?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      required: 'required',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'boolean',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfoResponses extends $dara.Model {
  responseBody?: string;
  responseBodyFormat?: string;
  static names(): { [key: string]: string } {
    return {
      responseBody: 'responseBody',
      responseBodyFormat: 'responseBodyFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseBody: 'string',
      responseBodyFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBodyLogInfo extends $dara.Model {
  authenticationInfo?: GetOwnRequestLogResponseBodyLogInfoAuthenticationInfo;
  basicInfo?: GetOwnRequestLogResponseBodyLogInfoBasicInfo;
  callerInfo?: GetOwnRequestLogResponseBodyLogInfoCallerInfo;
  parameters?: GetOwnRequestLogResponseBodyLogInfoParameters[];
  responses?: GetOwnRequestLogResponseBodyLogInfoResponses;
  static names(): { [key: string]: string } {
    return {
      authenticationInfo: 'authenticationInfo',
      basicInfo: 'basicInfo',
      callerInfo: 'callerInfo',
      parameters: 'parameters',
      responses: 'responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationInfo: GetOwnRequestLogResponseBodyLogInfoAuthenticationInfo,
      basicInfo: GetOwnRequestLogResponseBodyLogInfoBasicInfo,
      callerInfo: GetOwnRequestLogResponseBodyLogInfoCallerInfo,
      parameters: { 'type': 'array', 'itemType': GetOwnRequestLogResponseBodyLogInfoParameters },
      responses: GetOwnRequestLogResponseBodyLogInfoResponses,
    };
  }

  validate() {
    if(this.authenticationInfo && typeof (this.authenticationInfo as any).validate === 'function') {
      (this.authenticationInfo as any).validate();
    }
    if(this.basicInfo && typeof (this.basicInfo as any).validate === 'function') {
      (this.basicInfo as any).validate();
    }
    if(this.callerInfo && typeof (this.callerInfo as any).validate === 'function') {
      (this.callerInfo as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.responses && typeof (this.responses as any).validate === 'function') {
      (this.responses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoAuthenticationInfo extends $dara.Model {
  /**
   * @example
   * AK
   */
  authenticationType?: string;
  /**
   * @example
   * HMAC-SHA256
   */
  signatureMethod?: string;
  /**
   * @example
   * unknown
   */
  signatureVersion?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authenticationType',
      signatureMethod: 'signatureMethod',
      signatureVersion: 'signatureVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      signatureMethod: 'string',
      signatureVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * openapiexplorer:GetRequestLog
   */
  authAction?: string;
  /**
   * @example
   * 205618123456123456
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 1001234561234567
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'authAction',
      authPrincipalDisplayName: 'authPrincipalDisplayName',
      authPrincipalOwnerId: 'authPrincipalOwnerId',
      authPrincipalType: 'authPrincipalType',
      encodedDiagnosticMessage: 'encodedDiagnosticMessage',
      noPermissionType: 'noPermissionType',
      policyType: 'policyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoBasicInfoApiDoc extends $dara.Model {
  /**
   * @example
   * https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances
   */
  alibabacloudSite?: string;
  /**
   * @example
   * https://api.aliyun.com/document/Ecs/2014-05-26/RunInstances
   */
  aliyunSite?: string;
  static names(): { [key: string]: string } {
    return {
      alibabacloudSite: 'alibabacloudSite',
      aliyunSite: 'aliyunSite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alibabacloudSite: 'string',
      aliyunSite: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoBasicInfoProductName extends $dara.Model {
  cnName?: string;
  /**
   * @example
   * Elastic Compute Service
   */
  enName?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'cnName',
      enName: 'enName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      enName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoBasicInfo extends $dara.Model {
  accessDeniedDetail?: GetRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail;
  /**
   * @example
   * RunInstances
   */
  api?: string;
  apiDoc?: GetRequestLogResponseBodyLogInfoBasicInfoApiDoc;
  /**
   * @example
   * roa
   */
  apiStyle?: string;
  /**
   * @example
   * 2024-11-30
   */
  apiVersion?: string;
  /**
   * @example
   * ecs.cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * IncorrectStatus.TransitRouter
   */
  errorCode?: string;
  /**
   * @example
   * The resource is not in a valid state for the operation.
   */
  errorMessage?: string;
  /**
   * @example
   * 2025-01-21T07:43:06Z
   */
  gatewayProcessTime?: string;
  /**
   * @example
   * GET
   */
  httpMethod?: string;
  /**
   * @example
   * 404
   */
  httpStatusCode?: string;
  /**
   * @example
   * 123E4567-E89B-12D3-A456-426614174000
   */
  logRequestId?: string;
  /**
   * @example
   * Ecs
   */
  product?: string;
  productName?: GetRequestLogResponseBodyLogInfoBasicInfoProductName;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 188
   */
  requestDuration?: string;
  /**
   * @example
   * 2025-01-21T07:43:06Z
   */
  sdkRequestTime?: string;
  /**
   * @example
   * FC.PASS
   */
  throttlingResult?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      api: 'api',
      apiDoc: 'apiDoc',
      apiStyle: 'apiStyle',
      apiVersion: 'apiVersion',
      endpoint: 'endpoint',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      gatewayProcessTime: 'gatewayProcessTime',
      httpMethod: 'httpMethod',
      httpStatusCode: 'httpStatusCode',
      logRequestId: 'logRequestId',
      product: 'product',
      productName: 'productName',
      regionId: 'regionId',
      requestDuration: 'requestDuration',
      sdkRequestTime: 'sdkRequestTime',
      throttlingResult: 'throttlingResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail,
      api: 'string',
      apiDoc: GetRequestLogResponseBodyLogInfoBasicInfoApiDoc,
      apiStyle: 'string',
      apiVersion: 'string',
      endpoint: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      gatewayProcessTime: 'string',
      httpMethod: 'string',
      httpStatusCode: 'string',
      logRequestId: 'string',
      product: 'string',
      productName: GetRequestLogResponseBodyLogInfoBasicInfoProductName,
      regionId: 'string',
      requestDuration: 'string',
      sdkRequestTime: 'string',
      throttlingResult: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.apiDoc && typeof (this.apiDoc as any).validate === 'function') {
      (this.apiDoc as any).validate();
    }
    if(this.productName && typeof (this.productName as any).validate === 'function') {
      (this.productName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoCallerInfo extends $dara.Model {
  /**
   * @example
   * 241009849925897811
   */
  callerAccountId?: string;
  /**
   * @example
   * 100.68.xxx.xxx
   */
  callerIp?: string;
  /**
   * @example
   * sub
   */
  callerType?: string;
  /**
   * @example
   * 1973374733454118
   */
  masterAccountId?: string;
  /**
   * @example
   * AlibabaCloud API Workbench
   */
  userAgent?: string;
  static names(): { [key: string]: string } {
    return {
      callerAccountId: 'callerAccountId',
      callerIp: 'callerIp',
      callerType: 'callerType',
      masterAccountId: 'masterAccountId',
      userAgent: 'userAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerAccountId: 'string',
      callerIp: 'string',
      callerType: 'string',
      masterAccountId: 'string',
      userAgent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoParameters extends $dara.Model {
  /**
   * @example
   * InstanceType
   */
  name?: string;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * ecs.g6.large
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      required: 'required',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'boolean',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfoResponses extends $dara.Model {
  /**
   * @example
   * -
   */
  responseBody?: string;
  /**
   * @example
   * JSON
   */
  responseBodyFormat?: string;
  static names(): { [key: string]: string } {
    return {
      responseBody: 'responseBody',
      responseBodyFormat: 'responseBodyFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseBody: 'string',
      responseBodyFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBodyLogInfo extends $dara.Model {
  authenticationInfo?: GetRequestLogResponseBodyLogInfoAuthenticationInfo;
  basicInfo?: GetRequestLogResponseBodyLogInfoBasicInfo;
  callerInfo?: GetRequestLogResponseBodyLogInfoCallerInfo;
  parameters?: GetRequestLogResponseBodyLogInfoParameters[];
  responses?: GetRequestLogResponseBodyLogInfoResponses;
  static names(): { [key: string]: string } {
    return {
      authenticationInfo: 'authenticationInfo',
      basicInfo: 'basicInfo',
      callerInfo: 'callerInfo',
      parameters: 'parameters',
      responses: 'responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationInfo: GetRequestLogResponseBodyLogInfoAuthenticationInfo,
      basicInfo: GetRequestLogResponseBodyLogInfoBasicInfo,
      callerInfo: GetRequestLogResponseBodyLogInfoCallerInfo,
      parameters: { 'type': 'array', 'itemType': GetRequestLogResponseBodyLogInfoParameters },
      responses: GetRequestLogResponseBodyLogInfoResponses,
    };
  }

  validate() {
    if(this.authenticationInfo && typeof (this.authenticationInfo as any).validate === 'function') {
      (this.authenticationInfo as any).validate();
    }
    if(this.basicInfo && typeof (this.basicInfo as any).validate === 'function') {
      (this.basicInfo as any).validate();
    }
    if(this.callerInfo && typeof (this.callerInfo as any).validate === 'function') {
      (this.callerInfo as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.responses && typeof (this.responses as any).validate === 'function') {
      (this.responses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorCodeSolutionsRequest extends $dara.Model {
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234-56789012
   */
  errorCode?: string;
  /**
   * @example
   * An error occurred while processing your request.
   */
  errorMessage?: string;
  /**
   * @example
   * oss
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorCodeSolutionsResponseBody extends $dara.Model {
  requestId?: string;
  solutions?: GetErrorCodeSolutionsResponseBodySolutions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      solutions: 'solutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      solutions: { 'type': 'array', 'itemType': GetErrorCodeSolutionsResponseBodySolutions },
    };
  }

  validate() {
    if(Array.isArray(this.solutions)) {
      $dara.Model.validateArray(this.solutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorCodeSolutionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErrorCodeSolutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetErrorCodeSolutionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123E4567-E89B-12D3-A456-426614174000
   */
  logRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      logRequestId: 'logRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponseBody extends $dara.Model {
  logInfo?: GetOwnRequestLogResponseBodyLogInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logInfo: 'logInfo',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: GetOwnRequestLogResponseBodyLogInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logInfo && typeof (this.logInfo as any).validate === 'function') {
      (this.logInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnRequestLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOwnRequestLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOwnRequestLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123E4567-E89B-12D3-A456-426614174000
   */
  logRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      logRequestId: 'logRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponseBody extends $dara.Model {
  logInfo?: GetRequestLogResponseBodyLogInfo;
  /**
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logInfo: 'logInfo',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: GetRequestLogResponseBodyLogInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logInfo && typeof (this.logInfo as any).validate === 'function') {
      (this.logInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRequestLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRequestLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("openapiexplorer", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 根据提供的错误码获取对应的解决方案
   * 
   * @remarks
   * ## 请求说明
   * - 本接口支持通过POST或GET方法调用。
   * - `Accept-Language`请求头必须设置为`zh-CN`或`en-US`之一，用于指定返回结果的语言类型。
   * - 错误码格式需符合特定规则，特别是针对OSS的错误码应遵循正则表达式`[0-9]{4}-[0-9]{8}`。
   * - 当前实现中未使用`maxResults`和`nextToken`参数。
   * - 如果请求失败，将根据不同的错误情况返回相应的错误代码及描述信息。
   * 
   * @param request - GetErrorCodeSolutionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErrorCodeSolutionsResponse
   */
  async getErrorCodeSolutionsWithOptions(request: GetErrorCodeSolutionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetErrorCodeSolutionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.errorCode)) {
      query["errorCode"] = request.errorCode;
    }

    if (!$dara.isNull(request.errorMessage)) {
      query["errorMessage"] = request.errorMessage;
    }

    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErrorCodeSolutions",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/getErrorCodeSolutions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetErrorCodeSolutionsResponse>(await this.callApi(params, req, runtime), new GetErrorCodeSolutionsResponse({}));
    } else {
      return $dara.cast<GetErrorCodeSolutionsResponse>(await this.execute(params, req, runtime), new GetErrorCodeSolutionsResponse({}));
    }

  }

  /**
   * 根据提供的错误码获取对应的解决方案
   * 
   * @remarks
   * ## 请求说明
   * - 本接口支持通过POST或GET方法调用。
   * - `Accept-Language`请求头必须设置为`zh-CN`或`en-US`之一，用于指定返回结果的语言类型。
   * - 错误码格式需符合特定规则，特别是针对OSS的错误码应遵循正则表达式`[0-9]{4}-[0-9]{8}`。
   * - 当前实现中未使用`maxResults`和`nextToken`参数。
   * - 如果请求失败，将根据不同的错误情况返回相应的错误代码及描述信息。
   * 
   * @param request - GetErrorCodeSolutionsRequest
   * @returns GetErrorCodeSolutionsResponse
   */
  async getErrorCodeSolutions(request: GetErrorCodeSolutionsRequest): Promise<GetErrorCodeSolutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getErrorCodeSolutionsWithOptions(request, headers, runtime);
  }

  /**
   * 通过API RequestId 查询当前账号调用OpenAPI的日志详情，用于故障排查。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口主要用于帮助用户通过提供具体的`apiRequestId`来获取相关API请求的详细日志信息。
   * - `apiRequestId`必须是大写形式的UUID，并且应确保该ID确实来自于您之前对某个OpenAPI的实际调用。
   * - 如果提供的`apiRequestId`无效或者没有找到对应的日志记录，系统将返回相应的错误提示。
   * - 在使用此接口时，请注意检查您的网络环境以及权限设置，以保证能够顺利访问到所需资源。
   * 
   * @param request - GetOwnRequestLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOwnRequestLogResponse
   */
  async getOwnRequestLogWithOptions(request: GetOwnRequestLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetOwnRequestLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logRequestId)) {
      query["logRequestId"] = request.logRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOwnRequestLog",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/getOwnRequestLog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOwnRequestLogResponse>(await this.callApi(params, req, runtime), new GetOwnRequestLogResponse({}));
    } else {
      return $dara.cast<GetOwnRequestLogResponse>(await this.execute(params, req, runtime), new GetOwnRequestLogResponse({}));
    }

  }

  /**
   * 通过API RequestId 查询当前账号调用OpenAPI的日志详情，用于故障排查。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口主要用于帮助用户通过提供具体的`apiRequestId`来获取相关API请求的详细日志信息。
   * - `apiRequestId`必须是大写形式的UUID，并且应确保该ID确实来自于您之前对某个OpenAPI的实际调用。
   * - 如果提供的`apiRequestId`无效或者没有找到对应的日志记录，系统将返回相应的错误提示。
   * - 在使用此接口时，请注意检查您的网络环境以及权限设置，以保证能够顺利访问到所需资源。
   * 
   * @param request - GetOwnRequestLogRequest
   * @returns GetOwnRequestLogResponse
   */
  async getOwnRequestLog(request: GetOwnRequestLogRequest): Promise<GetOwnRequestLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOwnRequestLogWithOptions(request, headers, runtime);
  }

  /**
   * 通过API请求ID查询特定请求的日志详情，用于故障排查。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口主要用于帮助用户通过提供具体的`apiRequestId`来获取相关API请求的详细日志信息。
   * - `apiRequestId`必须是大写形式的UUID，并且应确保该ID确实来自于您之前对某个OpenAPI的实际调用。
   * - 如果提供的`apiRequestId`无效或者没有找到对应的日志记录，系统将返回相应的错误提示。
   * - 在使用此接口时，请注意检查您的网络环境以及权限设置，以保证能够顺利访问到所需资源。
   * 
   * @param request - GetRequestLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRequestLogResponse
   */
  async getRequestLogWithOptions(request: GetRequestLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRequestLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logRequestId)) {
      query["logRequestId"] = request.logRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRequestLog",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/getRequestLog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRequestLogResponse>(await this.callApi(params, req, runtime), new GetRequestLogResponse({}));
    } else {
      return $dara.cast<GetRequestLogResponse>(await this.execute(params, req, runtime), new GetRequestLogResponse({}));
    }

  }

  /**
   * 通过API请求ID查询特定请求的日志详情，用于故障排查。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口主要用于帮助用户通过提供具体的`apiRequestId`来获取相关API请求的详细日志信息。
   * - `apiRequestId`必须是大写形式的UUID，并且应确保该ID确实来自于您之前对某个OpenAPI的实际调用。
   * - 如果提供的`apiRequestId`无效或者没有找到对应的日志记录，系统将返回相应的错误提示。
   * - 在使用此接口时，请注意检查您的网络环境以及权限设置，以保证能够顺利访问到所需资源。
   * 
   * @param request - GetRequestLogRequest
   * @returns GetRequestLogResponse
   */
  async getRequestLog(request: GetRequestLogRequest): Promise<GetRequestLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRequestLogWithOptions(request, headers, runtime);
  }

}
