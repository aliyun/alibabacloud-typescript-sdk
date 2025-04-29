// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodyBackendConfig } from "./DescribeApiHistoryResponseBodyBackendConfig";
import { DescribeApiHistoryResponseBodyConstantParameters } from "./DescribeApiHistoryResponseBodyConstantParameters";
import { DescribeApiHistoryResponseBodyCustomSystemParameters } from "./DescribeApiHistoryResponseBodyCustomSystemParameters";
import { DescribeApiHistoryResponseBodyErrorCodeSamples } from "./DescribeApiHistoryResponseBodyErrorCodeSamples";
import { DescribeApiHistoryResponseBodyOpenIdConnectConfig } from "./DescribeApiHistoryResponseBodyOpenIdConnectConfig";
import { DescribeApiHistoryResponseBodyRequestConfig } from "./DescribeApiHistoryResponseBodyRequestConfig";
import { DescribeApiHistoryResponseBodyRequestParameters } from "./DescribeApiHistoryResponseBodyRequestParameters";
import { DescribeApiHistoryResponseBodyResultDescriptions } from "./DescribeApiHistoryResponseBodyResultDescriptions";
import { DescribeApiHistoryResponseBodyServiceConfig } from "./DescribeApiHistoryResponseBodyServiceConfig";
import { DescribeApiHistoryResponseBodyServiceParameters } from "./DescribeApiHistoryResponseBodyServiceParameters";
import { DescribeApiHistoryResponseBodyServiceParametersMap } from "./DescribeApiHistoryResponseBodyServiceParametersMap";
import { DescribeApiHistoryResponseBodySystemParameters } from "./DescribeApiHistoryResponseBodySystemParameters";


export class DescribeApiHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * If **AuthType** is set to **APP**, this value must be passed to specify the signature algorithm. If you do not specify a value, HmacSHA256 is used by default. Valid values:
   * 
   * *   HmacSHA256
   * *   HmacSHA1,HmacSHA256
   * 
   * @example
   * HmacSHA256
   */
  allowSignatureMethod?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * bebf996e4b3d445d83078094b72b0d91
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * Backstage_MengMeng Broadcast_Seven Niu Cloud Push Stream Callback_Official
   */
  apiName?: string;
  /**
   * @remarks
   * The AppCode authentication type supported. Valid values:
   * 
   * *   DEFAULT: supported after being made available in Alibaba Cloud Marketplace
   * *   DISABLE: not supported.
   * *   HEADER : supported only in the Header parameter
   * *   HEADER_QUERY : supported in the Header or Query parameter.
   * 
   * @example
   * HEADER
   */
  appCodeAuthType?: string;
  /**
   * @remarks
   * The security authentication method of the API. Valid values:
   * 
   * *   **APP: Only authorized applications can call the API.**
   * 
   * *   **ANONYMOUS: The API can be anonymously called. In this mode, you must take note of the following rules:**
   * 
   *     *   All users who have obtained the API service information can call this API. API Gateway does not authenticate callers and cannot set user-specific throttling policies. If you make this API public, set API-specific throttling policies.
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * Backend configurations
   */
  backendConfig?: DescribeApiHistoryResponseBodyBackendConfig;
  /**
   * @remarks
   * Specifies whether to enable backend services.
   * 
   * @example
   * true
   */
  backendEnable?: boolean;
  /**
   * @remarks
   * The constant parameters.
   */
  constantParameters?: DescribeApiHistoryResponseBodyConstantParameters;
  /**
   * @remarks
   * The custom system parameters.
   */
  customSystemParameters?: DescribeApiHistoryResponseBodyCustomSystemParameters;
  /**
   * @remarks
   * The publishing time (UTC) of the API.
   * 
   * @example
   * 2021-06-1113:57:38
   */
  deployedTime?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Queries weather based on the region name
   */
  description?: string;
  /**
   * @remarks
   * *   Specifies whether to set **DisableInternet** to **true** to limit API calls to within the VPC.
   * *   If you set **DisableInternet** to **false**, the limit is lifted. The default value is false when you create an API.
   * 
   * @example
   * true
   */
  disableInternet?: boolean;
  /**
   * @remarks
   * The sample error codes returned by the backend service.
   * 
   * For more information, see [ErrorCodeSample](https://help.aliyun.com/document_detail/44392.html).
   */
  errorCodeSamples?: DescribeApiHistoryResponseBodyErrorCodeSamples;
  /**
   * @remarks
   * The sample error response from the backend service.
   * 
   * @example
   * {"errorCode":"fail","errorMessage":"param invalid"}
   */
  failResultSample?: string;
  /**
   * @remarks
   * *   Specifies whether to set **ForceNonceCheck** to **true** to force the check of X-Ca-Nonce during the request. This is the unique identifier of the request and is generally identified by UUID. After receiving this parameter, API Gateway verifies the validity of this parameter. The same value can be used only once within 15 minutes. This helps prevent replay attacks.
   * *   If you set **ForceNonceCheck** to **false**, the check is not performed. The default value is false when you create an API.
   * 
   * @example
   * true
   */
  forceNonceCheck?: boolean;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * cfb6ef799bf54fffabb0f02019ad2581
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * dev_api
   */
  groupName?: string;
  /**
   * @remarks
   * The historical version number.
   * 
   * @example
   * 20211022134156663
   */
  historyVersion?: string;
  /**
   * @remarks
   * The configuration items of the third-party OpenID Connect authentication method.
   */
  openIdConnectConfig?: DescribeApiHistoryResponseBodyOpenIdConnectConfig;
  /**
   * @remarks
   * The region where the API is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The configuration items of API requests sent by the consumer to API Gateway.
   * 
   * For more information, see [RequestConfig](https://help.aliyun.com/document_detail/43985.html).
   */
  requestConfig?: DescribeApiHistoryResponseBodyRequestConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C87A26A-6A18-4B8E-8099-705278381A2C
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters of API requests sent by the consumer to API Gateway.
   * 
   * For more information, see [RequestParameter](https://help.aliyun.com/document_detail/43986.html).
   */
  requestParameters?: DescribeApiHistoryResponseBodyRequestParameters;
  /**
   * @remarks
   * The return description of the API.
   * 
   * @example
   * {}
   */
  resultBodyModel?: string;
  /**
   * @remarks
   * The return description of the API.
   */
  resultDescriptions?: DescribeApiHistoryResponseBodyResultDescriptions;
  /**
   * @remarks
   * The sample response.
   * 
   * @example
   * {\\n  \\"status\\": 0,\\n  \\"data\\": {\\n    \\"count\\": 1,\\n    \\"list\\": [\\n      \\"352\\"\\n    ]\\n  },\\n  \\"message\\": \\"success\\"\\n}
   */
  resultSample?: string;
  /**
   * @remarks
   * The type of the data to return.
   * 
   * @example
   * JSON
   */
  resultType?: string;
  /**
   * @remarks
   * The information about a backend service call.
   */
  serviceConfig?: DescribeApiHistoryResponseBodyServiceConfig;
  /**
   * @remarks
   * The parameters of API requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameter](https://help.aliyun.com/document_detail/43988.html).
   */
  serviceParameters?: DescribeApiHistoryResponseBodyServiceParameters;
  /**
   * @remarks
   * The mappings between parameters of requests sent by the consumer to API Gateway and parameters of requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameterMap](https://help.aliyun.com/document_detail/43989.html).
   */
  serviceParametersMap?: DescribeApiHistoryResponseBodyServiceParametersMap;
  /**
   * @remarks
   * The environment in which the API is requested. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the pre-release environment
   * *   **TEST**: the test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * The invocation status of the API.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The common parameters of the APIs, in JSON format.
   */
  systemParameters?: DescribeApiHistoryResponseBodySystemParameters;
  /**
   * @remarks
   * Specifies whether to make the API public. Valid values:
   * 
   * *   **PUBLIC**: Make the API public. If you set this parameter to PUBLIC, this API is displayed on the APIs page for all users after the API is published to the production environment.
   * *   **PRIVATE**: Make the API private. Private APIs are not displayed in the Alibaba Cloud Marketplace after the API group to which they belong is made available.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  /**
   * @remarks
   * The type of the two-way communication API. Valid values:
   * 
   * *   **COMMON**: general APIs
   * *   **REGISTER**: registered APIs
   * *   **UNREGISTER**: unregistered APIs
   * *   **NOTIFY**: downstream notification
   * 
   * @example
   * COMMON
   */
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      backendConfig: 'BackendConfig',
      backendEnable: 'BackendEnable',
      constantParameters: 'ConstantParameters',
      customSystemParameters: 'CustomSystemParameters',
      deployedTime: 'DeployedTime',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      historyVersion: 'HistoryVersion',
      openIdConnectConfig: 'OpenIdConnectConfig',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      stageName: 'StageName',
      status: 'Status',
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
      webSocketApiType: 'WebSocketApiType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      appCodeAuthType: 'string',
      authType: 'string',
      backendConfig: DescribeApiHistoryResponseBodyBackendConfig,
      backendEnable: 'boolean',
      constantParameters: DescribeApiHistoryResponseBodyConstantParameters,
      customSystemParameters: DescribeApiHistoryResponseBodyCustomSystemParameters,
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiHistoryResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      historyVersion: 'string',
      openIdConnectConfig: DescribeApiHistoryResponseBodyOpenIdConnectConfig,
      regionId: 'string',
      requestConfig: DescribeApiHistoryResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeApiHistoryResponseBodyRequestParameters,
      resultBodyModel: 'string',
      resultDescriptions: DescribeApiHistoryResponseBodyResultDescriptions,
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeApiHistoryResponseBodyServiceConfig,
      serviceParameters: DescribeApiHistoryResponseBodyServiceParameters,
      serviceParametersMap: DescribeApiHistoryResponseBodyServiceParametersMap,
      stageName: 'string',
      status: 'string',
      systemParameters: DescribeApiHistoryResponseBodySystemParameters,
      visibility: 'string',
      webSocketApiType: 'string',
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(this.constantParameters && typeof (this.constantParameters as any).validate === 'function') {
      (this.constantParameters as any).validate();
    }
    if(this.customSystemParameters && typeof (this.customSystemParameters as any).validate === 'function') {
      (this.customSystemParameters as any).validate();
    }
    if(this.errorCodeSamples && typeof (this.errorCodeSamples as any).validate === 'function') {
      (this.errorCodeSamples as any).validate();
    }
    if(this.openIdConnectConfig && typeof (this.openIdConnectConfig as any).validate === 'function') {
      (this.openIdConnectConfig as any).validate();
    }
    if(this.requestConfig && typeof (this.requestConfig as any).validate === 'function') {
      (this.requestConfig as any).validate();
    }
    if(this.requestParameters && typeof (this.requestParameters as any).validate === 'function') {
      (this.requestParameters as any).validate();
    }
    if(this.resultDescriptions && typeof (this.resultDescriptions as any).validate === 'function') {
      (this.resultDescriptions as any).validate();
    }
    if(this.serviceConfig && typeof (this.serviceConfig as any).validate === 'function') {
      (this.serviceConfig as any).validate();
    }
    if(this.serviceParameters && typeof (this.serviceParameters as any).validate === 'function') {
      (this.serviceParameters as any).validate();
    }
    if(this.serviceParametersMap && typeof (this.serviceParametersMap as any).validate === 'function') {
      (this.serviceParametersMap as any).validate();
    }
    if(this.systemParameters && typeof (this.systemParameters as any).validate === 'function') {
      (this.systemParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

