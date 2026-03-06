// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRequestLogResponseBodyLogInfoAuthenticationInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication type.
   * 
   * - AK: An AccessKey pair, which can be a permanent AccessKey pair, a temporary AccessKey pair, or an STS token.
   * 
   * - PRIVATEKEY: An AccessKey pair that uses asymmetric key encryption.
   * 
   * - BEARERTOKEN: An identity verification mechanism that is widely used in the OAuth 2.0 framework and cloud services.
   * 
   * - CUSTOM_SPI: An efficient and secure authentication method that is used for the delivery and management of Software as a Service (SaaS) products in Alibaba Cloud Marketplace.
   * 
   * - Anonymous: Anonymous access.
   * 
   * - DPS: Similar to an AccessKey pair, but uses a signature algorithm that is different from the official Alibaba Cloud algorithm. This method is specific to certain products.
   * 
   * @example
   * AK
   */
  authenticationType?: string;
  /**
   * @remarks
   * The signature method.
   * 
   * - HMAC-SHA1: The request is signed using the HMAC-SHA1 algorithm.
   * 
   * - HMAC-SHA256: The request is signed using the HMAC-SHA256 algorithm.
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

export class GetRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The specific operation that is denied.
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
   * The UID of the Alibaba Cloud account to which the current identity belongs.
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
   * The encoded diagnostic message. To obtain more diagnostic information, call the DecodeDiagnosticMessage operation of RAM.
   * 
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason why the access is denied.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that denies the access.
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

export class GetRequestLogResponseBodyLogInfoBasicInfoApiDoc extends $dara.Model {
  /**
   * @remarks
   * The link to the API reference on the Alibaba Cloud International Website (www\\.alibabacloud.com).
   * 
   * @example
   * https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances
   */
  alibabacloudSite?: string;
  /**
   * @remarks
   * The link to the API reference on the Alibaba Cloud China Website (www\\.aliyun.com).
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

export class GetRequestLogResponseBodyLogInfoBasicInfoProductName extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the product.
   * 
   * @example
   * 云服务器 ECS
   */
  cnName?: string;
  /**
   * @remarks
   * The English name of the product.
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

export class GetRequestLogResponseBodyLogInfoBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error. This field is returned only if an authentication error occurs for the specified request ID.
   */
  accessDeniedDetail?: GetRequestLogResponseBodyLogInfoBasicInfoAccessDeniedDetail;
  /**
   * @remarks
   * The name of the API that was called.
   * 
   * @example
   * RunInstances
   */
  api?: string;
  /**
   * @remarks
   * The API reference information.
   */
  apiDoc?: GetRequestLogResponseBodyLogInfoBasicInfoApiDoc;
  /**
   * @remarks
   * The API style. Valid values: ROA and RPC.
   * 
   * @example
   * roa
   */
  apiStyle?: string;
  /**
   * @remarks
   * The API version.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * The endpoint of the area where the endpoint is deployed.
   * 
   * @example
   * ecs.cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The error code in the log. This field is empty if no error is reported for the request.
   * 
   * @example
   * IncorrectStatus.TransitRouter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message in the log. This field is empty if no error is reported for the request.
   * 
   * @example
   * The resource is not in a valid state for the operation.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the gateway received the request. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-01-21T07:43:06Z
   */
  gatewayProcessTime?: string;
  /**
   * @remarks
   * The HTTP request method. Examples: GET, PUT, and POST.
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
   * 404
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID that you specified.
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
   * The product name, which includes the Chinese and English names.
   */
  productName?: GetRequestLogResponseBodyLogInfoBasicInfoProductName;
  /**
   * @remarks
   * The ID of the area where the endpoint is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time that elapses from when the gateway receives a request to when it returns a response. Unit: milliseconds (ms).
   * 
   * @example
   * 188
   */
  requestDuration?: string;
  /**
   * @remarks
   * The time when the request was initiated. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-01-21T07:43:06Z
   */
  sdkRequestTime?: string;
  /**
   * @remarks
   * The result of the throttling check. FC.PASS: The request was not blocked by the throttling check and no rate limiting occurred. FC.DENY: The request was blocked by the throttling check and rate limiting occurred.
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
   * @remarks
   * The ID of the caller\\"s account.
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
   * The type of the caller.
   * 
   * 1. customer: Alibaba Cloud account
   * 
   * 2. sub: RAM user
   * 
   * 3. AssumedRoleUser: A temporary identity that is created using a Security Token Service (STS) token.
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
   * The user agent.
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

export class GetRequestLogResponseBodyLogInfoParameters extends $dara.Model {
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

export class GetRequestLogResponseBodyLogInfoResponses extends $dara.Model {
  /**
   * @remarks
   * The response information.
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

export class GetRequestLogResponseBodyLogInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication information.
   */
  authenticationInfo?: GetRequestLogResponseBodyLogInfoAuthenticationInfo;
  /**
   * @remarks
   * The basic information about the API request.
   */
  basicInfo?: GetRequestLogResponseBodyLogInfoBasicInfo;
  /**
   * @remarks
   * The information about the caller.
   */
  callerInfo?: GetRequestLogResponseBodyLogInfoCallerInfo;
  /**
   * @remarks
   * The request parameter information.
   */
  parameters?: GetRequestLogResponseBodyLogInfoParameters[];
  /**
   * @remarks
   * The response information that corresponds to the request.
   */
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

export class GetRequestLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the API request log.
   */
  logInfo?: GetRequestLogResponseBodyLogInfo;
  /**
   * @remarks
   * The ID of the request.
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

