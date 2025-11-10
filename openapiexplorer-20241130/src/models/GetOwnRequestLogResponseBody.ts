// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOwnRequestLogResponseBodyLogInfoAuthenticationInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   AK: includes a permanent AccessKey pair, a temporary AccessKey pair, and a STS token.
   * *   PRIVATEKEY: an AccessKey pair for an asymmetric cryptography algorithm.
   * *   BEARETOKEN: an authentication mechanism that is widely used in the OAuth 2.0 framework and cloud services.
   * *   CUSTOM_SPI: an efficient and secure authentication method that is suitable for the delivery and management of Software as a Service (SaaS) services in Alibaba Cloud Marketplace.
   * *   Anonymous: anonymous access.
   * *   DPS: an authentication method that is similar to AK. Its signature algorithm is different from that of Alibaba Cloud services and is exclusive to specific products.
   * 
   * @example
   * AK
   */
  authenticationType?: string;
  /**
   * @remarks
   * The signature algorithm. Valid values:
   * 
   * *   HMAC-SHA1
   * *   HMAC-SHA256
   * 
   * @example
   * HMAC-SHA256
   */
  signatureMethod?: string;
  /**
   * @remarks
   * The signature version.
   * 
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

export class GetOwnRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The operation that the operator does not have permissions to perform.
   * 
   * @example
   * openapiexplorer:GetRequestLog
   */
  authAction?: string;
  /**
   * @remarks
   * The identity.
   * 
   * @example
   * 205618123456123456
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the current identity belongs.
   * 
   * @example
   * 1001234561234567
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type of the operator.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The information after encoding, which can be used for troubleshooting. You can call the DecodeDiagnosticMessage operation of Resource Access Management (RAM) for further diagnostics.
   * 
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The cause of the permission-related error.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that causes the permission-related error.
   * 
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

export class GetOwnRequestLogResponseBodyLogInfoBasicInfoApiDoc extends $dara.Model {
  /**
   * @remarks
   * The documentation URL on the international site (alibabacloud.com).
   * 
   * @example
   * https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances
   */
  alibabacloudSite?: string;
  /**
   * @remarks
   * The documentation URL on the China site (aliyun.com).
   * 
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

export class GetOwnRequestLogResponseBodyLogInfoBasicInfoProductName extends $dara.Model {
  /**
   * @remarks
   * The product name in Chinese.
   */
  cnName?: string;
  /**
   * @remarks
   * The product name in English.
   * 
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

export class GetOwnRequestLogResponseBodyLogInfoBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the operator does not have the required permissions.
   */
  accessDeniedDetail?: GetOwnRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * RunInstances
   */
  api?: string;
  /**
   * @remarks
   * The information about the API documentation.
   */
  apiDoc?: GetOwnRequestLogResponseBodyLogInfoBasicInfoApiDoc;
  /**
   * @remarks
   * The API style. Valid values: roa and rpc.
   * 
   * @example
   * rpc
   */
  apiStyle?: string;
  /**
   * @remarks
   * The version of the API.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * The endpoint of the service region.
   * 
   * @example
   * ecs.cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The error code in the log. This parameter is left empty if no error is reported in the API call.
   * 
   * @example
   * IncorrectStatus.TransitRouter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message in the log. This parameter is left empty if no error is reported in the API call.
   * 
   * @example
   * The resource is not in a valid state for the operation.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the gateway receives the request. Indicate the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-01-21T07:43:06Z
   */
  gatewayProcessTime?: string;
  /**
   * @remarks
   * The HTTP request method.
   * 
   * @example
   * GET
   */
  httpMethod?: string;
  /**
   * @remarks
   * The HTTP status code in the log.
   * 
   * @example
   * 400
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 123E4567-E89B-12D3-A456-426614174000
   */
  logRequestId?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * Ecs
   */
  product?: string;
  /**
   * @remarks
   * The product name, which includes the Chinese name and English name.
   */
  productName?: GetOwnRequestLogResponseBodyLogInfoBasicInfoProductName;
  /**
   * @remarks
   * The service region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The duration from when the gateway receives the request to when the client receives a response. Unit: milliseconds.
   * 
   * @example
   * 188
   */
  requestDuration?: string;
  /**
   * @remarks
   * The time when the request is initiated. Indicate the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-01-21T07:43:06Z
   */
  sdkRequestTime?: string;
  /**
   * @remarks
   * The throttling result. Valid values: FC.PASS: The task is not blocked by throttling. FC.DENY: The task is blocked by throttling.
   * 
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
  /**
   * @remarks
   * The account ID of the caller.
   * 
   * @example
   * 241009849925897811
   */
  callerAccountId?: string;
  /**
   * @remarks
   * The IP address of the caller.
   * 
   * @example
   * 100.68.xxx.xxx
   */
  callerIp?: string;
  /**
   * @remarks
   * The type of the caller. Valid values:
   * 
   * 1.  customer: an Alibaba Cloud account
   * 2.  sub: a RAM user
   * 3.  AssumedRoleUser: a user that uses a temporary Security Token Service (STS) token
   * 
   * @example
   * sub
   */
  callerType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1973374733454118
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The information about the user agent.
   * 
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

export class GetOwnRequestLogResponseBodyLogInfoParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the request parameter.
   * 
   * @example
   * InstanceType
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the request parameter is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The type of the request parameter.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The value of the request parameter.
   * 
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

export class GetOwnRequestLogResponseBodyLogInfoResponses extends $dara.Model {
  /**
   * @remarks
   * The response body.
   * 
   * @example
   * -
   */
  responseBody?: string;
  /**
   * @remarks
   * The type of the response body. Valid values: JSON, XML, and HTML.
   * 
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

export class GetOwnRequestLogResponseBodyLogInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication information.
   */
  authenticationInfo?: GetOwnRequestLogResponseBodyLogInfoAuthenticationInfo;
  /**
   * @remarks
   * The basic information about the log of the API call.
   */
  basicInfo?: GetOwnRequestLogResponseBodyLogInfoBasicInfo;
  /**
   * @remarks
   * The information about the caller.
   */
  callerInfo?: GetOwnRequestLogResponseBodyLogInfoCallerInfo;
  /**
   * @remarks
   * The information about the request parameters.
   */
  parameters?: GetOwnRequestLogResponseBodyLogInfoParameters[];
  /**
   * @remarks
   * The information that is returned for the request.
   */
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

export class GetOwnRequestLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the log of the API call.
   */
  logInfo?: GetOwnRequestLogResponseBodyLogInfo;
  /**
   * @remarks
   * The request ID.
   * 
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

