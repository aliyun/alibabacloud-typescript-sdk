// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiResponseBodyBackendConfig } from "./DescribeApiResponseBodyBackendConfig";
import { DescribeApiResponseBodyConstantParameters } from "./DescribeApiResponseBodyConstantParameters";
import { DescribeApiResponseBodyCustomSystemParameters } from "./DescribeApiResponseBodyCustomSystemParameters";
import { DescribeApiResponseBodyDeployedInfos } from "./DescribeApiResponseBodyDeployedInfos";
import { DescribeApiResponseBodyErrorCodeSamples } from "./DescribeApiResponseBodyErrorCodeSamples";
import { DescribeApiResponseBodyOpenIdConnectConfig } from "./DescribeApiResponseBodyOpenIdConnectConfig";
import { DescribeApiResponseBodyRequestConfig } from "./DescribeApiResponseBodyRequestConfig";
import { DescribeApiResponseBodyRequestParameters } from "./DescribeApiResponseBodyRequestParameters";
import { DescribeApiResponseBodyServiceConfig } from "./DescribeApiResponseBodyServiceConfig";
import { DescribeApiResponseBodyServiceParameters } from "./DescribeApiResponseBodyServiceParameters";
import { DescribeApiResponseBodyServiceParametersMap } from "./DescribeApiResponseBodyServiceParametersMap";
import { DescribeApiResponseBodySystemParameters } from "./DescribeApiResponseBodySystemParameters";
import { DescribeApiResponseBodyTagList } from "./DescribeApiResponseBodyTagList";


export class DescribeApiResponseBody extends $dara.Model {
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
   * 8afff6c8c4c6447abb035812e4d66b65
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API, which is unique in the group.
   * 
   * @example
   * ApiName
   */
  apiName?: string;
  /**
   * @remarks
   * If **AuthType** is set to **APP**, the valid values are:
   * 
   * *   **DEFAULT**: The default value that is used if no other values are passed. This value means that the setting of the group is used.
   * *   **DISABLE**: The authentication is disabled.
   * *   **HEADER**: AppCode can be placed in the Header parameter for authentication.
   * *   **HEADER_QUERY**: AppCode can be placed in the Header or Query parameter for authentication.
   * 
   * @example
   * HEADER
   */
  appCodeAuthType?: string;
  /**
   * @remarks
   * The security authentication method of the API. Valid values:
   * 
   * *   **APP**: Only authorized applications can call the API.
   * 
   * *   **ANONYMOUS**: The API can be anonymously called. In this mode, you must take note of the following rules:
   * 
   *     *   All users who have obtained the API service information can call this API. API Gateway does not authenticate callers and cannot set user-specific throttling policies. If you make this API public, set API-specific throttling policies.
   *     *   We recommend that you do not make the API whose security authentication method is ANONYMOUS available in Alibaba Cloud Marketplace because API Gateway cannot meter calls on the caller or limit the number of calls on the API. If you want to make the API group to which the API belongs available in Alibaba Cloud Marketplace, we recommend that you move the API to another group, set its type to PRIVATE, or set its security authentication method to APP.
   * 
   * *   **APPOPENID**: The OpenID Connect account authentication method is used. Only applications authorized by OpenID Connect can call the API. If this method is selected, the OpenIdConnectConfig parameter is required.
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * Backend configurations
   */
  backendConfig?: DescribeApiResponseBodyBackendConfig;
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
   * System parameters sent by API Gateway to the backend service
   */
  constantParameters?: DescribeApiResponseBodyConstantParameters;
  /**
   * @remarks
   * The creation time of the API.
   * 
   * @example
   * 2016-07-28T09:50:43Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Custom system parameters
   */
  customSystemParameters?: DescribeApiResponseBodyCustomSystemParameters;
  /**
   * @remarks
   * The API publishing status.
   */
  deployedInfos?: DescribeApiResponseBodyDeployedInfos;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Api description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to limit API calls to within the VPC. Valid values:
   * 
   * *   **true**: Only API calls from the VPC are supported.
   * *   **false**: API calls from the VPC and Internet are both supported.
   * 
   * @example
   * false
   */
  disableInternet?: boolean;
  /**
   * @remarks
   * The sample error codes returned by the backend service.
   */
  errorCodeSamples?: DescribeApiResponseBodyErrorCodeSamples;
  /**
   * @remarks
   * The sample error response from the backend service.
   * 
   * @example
   * 400
   */
  failResultSample?: string;
  /**
   * @remarks
   * Specifies whether to carry the header : X-Ca-Nonce when calling an API. This is the unique identifier of the request and is generally identified by UUID. After receiving this parameter, API Gateway verifies the validity of this parameter. The same value can be used only once within 15 minutes. This helps prevent reply attacks. Valid values:
   * 
   * *   **true**: This field is forcibly checked when an API is requested to prevent replay attacks.
   * *   **false**: This field is not checked.
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
   * 08ae4aa0f95e4321849ee57f4e0b3077
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * ApiTest
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether to enable the Mock mode. Valid values:
   * 
   * *   OPEN: The Mock mode is enabled.
   * *   CLOSED: The Mock mode is not enabled.
   * 
   * @example
   * CLOSED
   */
  mock?: string;
  /**
   * @remarks
   * The result returned for service mocking.
   * 
   * @example
   * test result
   */
  mockResult?: string;
  /**
   * @remarks
   * The last modification time of the API.
   * 
   * @example
   * 2016-07-28T13:13:12Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Configuration items of the third-party OpenID Connect authentication method
   */
  openIdConnectConfig?: DescribeApiResponseBodyOpenIdConnectConfig;
  /**
   * @remarks
   * The region ID of the API.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The configuration items of API requests sent by the consumer to API Gateway.
   */
  requestConfig?: DescribeApiResponseBodyRequestConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D0FF585F-7966-40CF-BC60-75DB070B23D5<
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters of API requests sent by the consumer to API Gateway.
   */
  requestParameters?: DescribeApiResponseBodyRequestParameters;
  /**
   * @remarks
   * The returned description of the API.
   * 
   * @example
   * {}
   */
  resultBodyModel?: string;
  /**
   * @remarks
   * The sample response from the backend service.
   * 
   * @example
   * 200
   */
  resultSample?: string;
  /**
   * @remarks
   * The format of the response from the backend service. Valid values: JSON, TEXT, BINARY, XML, and HTML.
   * 
   * @example
   * JSON
   */
  resultType?: string;
  /**
   * @remarks
   * The configuration items of API requests that API Gateway sends to the backend service.
   */
  serviceConfig?: DescribeApiResponseBodyServiceConfig;
  /**
   * @remarks
   * The parameters of API requests sent by API Gateway to the backend service.
   */
  serviceParameters?: DescribeApiResponseBodyServiceParameters;
  /**
   * @remarks
   * The mappings between parameters of requests sent by the consumer to API Gateway and parameters of requests sent by API Gateway to the backend service.
   */
  serviceParametersMap?: DescribeApiResponseBodyServiceParametersMap;
  /**
   * @remarks
   * System parameters sent by API Gateway to the backend service
   */
  systemParameters?: DescribeApiResponseBodySystemParameters;
  /**
   * @remarks
   * Tag List.
   */
  tagList?: DescribeApiResponseBodyTagList;
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
   * The type of the two-way communication API.
   * 
   * *   **COMMON**: common API
   * *   **REGISTER**: registered API
   * *   **UNREGISTER**: unregistered API
   * *   **NOTIFY**: downstream notification API
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
      createdTime: 'CreatedTime',
      customSystemParameters: 'CustomSystemParameters',
      deployedInfos: 'DeployedInfos',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      mock: 'Mock',
      mockResult: 'MockResult',
      modifiedTime: 'ModifiedTime',
      openIdConnectConfig: 'OpenIdConnectConfig',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      systemParameters: 'SystemParameters',
      tagList: 'TagList',
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
      backendConfig: DescribeApiResponseBodyBackendConfig,
      backendEnable: 'boolean',
      constantParameters: DescribeApiResponseBodyConstantParameters,
      createdTime: 'string',
      customSystemParameters: DescribeApiResponseBodyCustomSystemParameters,
      deployedInfos: DescribeApiResponseBodyDeployedInfos,
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      mock: 'string',
      mockResult: 'string',
      modifiedTime: 'string',
      openIdConnectConfig: DescribeApiResponseBodyOpenIdConnectConfig,
      regionId: 'string',
      requestConfig: DescribeApiResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeApiResponseBodyRequestParameters,
      resultBodyModel: 'string',
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeApiResponseBodyServiceConfig,
      serviceParameters: DescribeApiResponseBodyServiceParameters,
      serviceParametersMap: DescribeApiResponseBodyServiceParametersMap,
      systemParameters: DescribeApiResponseBodySystemParameters,
      tagList: DescribeApiResponseBodyTagList,
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
    if(this.deployedInfos && typeof (this.deployedInfos as any).validate === 'function') {
      (this.deployedInfos as any).validate();
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
    if(this.tagList && typeof (this.tagList as any).validate === 'function') {
      (this.tagList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

