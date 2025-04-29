// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodyConstantParameters } from "./DescribeDeployedApiResponseBodyConstantParameters";
import { DescribeDeployedApiResponseBodyCustomSystemParameters } from "./DescribeDeployedApiResponseBodyCustomSystemParameters";
import { DescribeDeployedApiResponseBodyErrorCodeSamples } from "./DescribeDeployedApiResponseBodyErrorCodeSamples";
import { DescribeDeployedApiResponseBodyOpenIdConnectConfig } from "./DescribeDeployedApiResponseBodyOpenIdConnectConfig";
import { DescribeDeployedApiResponseBodyRequestConfig } from "./DescribeDeployedApiResponseBodyRequestConfig";
import { DescribeDeployedApiResponseBodyRequestParameters } from "./DescribeDeployedApiResponseBodyRequestParameters";
import { DescribeDeployedApiResponseBodyResultDescriptions } from "./DescribeDeployedApiResponseBodyResultDescriptions";
import { DescribeDeployedApiResponseBodyServiceConfig } from "./DescribeDeployedApiResponseBodyServiceConfig";
import { DescribeDeployedApiResponseBodyServiceParameters } from "./DescribeDeployedApiResponseBodyServiceParameters";
import { DescribeDeployedApiResponseBodyServiceParametersMap } from "./DescribeDeployedApiResponseBodyServiceParametersMap";
import { DescribeDeployedApiResponseBodySystemParameters } from "./DescribeDeployedApiResponseBodySystemParameters";


export class DescribeDeployedApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The signature method used by the client. Valid values:
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
   * 4eed13a57d4e42fbb51316be8a5329ff
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API
   * 
   * @example
   * weather
   */
  apiName?: string;
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
   * The constant parameters.
   */
  constantParameters?: DescribeDeployedApiResponseBodyConstantParameters;
  /**
   * @remarks
   * The custom system parameters.
   */
  customSystemParameters?: DescribeDeployedApiResponseBodyCustomSystemParameters;
  /**
   * @remarks
   * The deployment time. Format: yyyy-mm-ddhh:mm:ss.
   * 
   * @example
   * 2022-07-25T17:47:51Z
   */
  deployedTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Api description
   */
  description?: string;
  /**
   * @remarks
   * *   Specifies whether to set DisableInternet to **true** to limit API calls to within the VPC.
   * *   If you set DisableInternet to **false**, the limit is lifted.
   * 
   * >  If you do not set this parameter, the original value is not modified.
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
  errorCodeSamples?: DescribeDeployedApiResponseBodyErrorCodeSamples;
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
   * bc77f5b49c974437a9912ea3755cd834
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * Weather
   */
  groupName?: string;
  /**
   * @remarks
   * The configuration items of the third-party OpenID Connect authentication method.
   */
  openIdConnectConfig?: DescribeDeployedApiResponseBodyOpenIdConnectConfig;
  /**
   * @remarks
   * The region to which the API group belongs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Configuration items of API requests sent by the consumer to API Gateway.
   * 
   * For more information, see [RequestConfig](https://help.aliyun.com/document_detail/43985.html).
   */
  requestConfig?: DescribeDeployedApiResponseBodyRequestConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters of API requests sent by the consumer to API Gateway.
   * 
   * For more information, see [RequestParameter](https://help.aliyun.com/document_detail/43986.html).
   */
  requestParameters?: DescribeDeployedApiResponseBodyRequestParameters;
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
  resultDescriptions?: DescribeDeployedApiResponseBodyResultDescriptions;
  /**
   * @remarks
   * The sample response from the backend service.
   * 
   * @example
   * {code: 200, message:\\"success\\", data: \\"\\"}
   */
  resultSample?: string;
  /**
   * @remarks
   * The format of the response from the backend service. Valid values: JSON, TEXT, BINARY, XML, and HTML. Default value: JSON.
   * 
   * @example
   * HTML
   */
  resultType?: string;
  /**
   * @remarks
   * The configuration items of API requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceConfig](https://help.aliyun.com/document_detail/43987.html).
   */
  serviceConfig?: DescribeDeployedApiResponseBodyServiceConfig;
  /**
   * @remarks
   * The parameters of API requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameter](https://help.aliyun.com/document_detail/43988.html).
   */
  serviceParameters?: DescribeDeployedApiResponseBodyServiceParameters;
  /**
   * @remarks
   * The mappings between parameters of requests sent by the consumer to API Gateway and parameters of requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameterMap](https://help.aliyun.com/document_detail/43989.html).
   */
  serviceParametersMap?: DescribeDeployedApiResponseBodyServiceParametersMap;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE: the pre-release environment**
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * System parameters
   */
  systemParameters?: DescribeDeployedApiResponseBodySystemParameters;
  /**
   * @remarks
   * Specifies whether to make the API public. Valid values:
   * 
   * *   **PUBLIC**: Make the API public. If you set this parameter to PUBLIC, this API is displayed on the APIs page for all users after the API is published to the production environment.**
   * *   **PRIVATE**: Make the API private. Private APIs are not displayed in the Alibaba Cloud Marketplace after the API group to which they belong is made available.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
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
      systemParameters: 'SystemParameters',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      constantParameters: DescribeDeployedApiResponseBodyConstantParameters,
      customSystemParameters: DescribeDeployedApiResponseBodyCustomSystemParameters,
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeDeployedApiResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      openIdConnectConfig: DescribeDeployedApiResponseBodyOpenIdConnectConfig,
      regionId: 'string',
      requestConfig: DescribeDeployedApiResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeDeployedApiResponseBodyRequestParameters,
      resultBodyModel: 'string',
      resultDescriptions: DescribeDeployedApiResponseBodyResultDescriptions,
      resultSample: 'string',
      resultType: 'string',
      serviceConfig: DescribeDeployedApiResponseBodyServiceConfig,
      serviceParameters: DescribeDeployedApiResponseBodyServiceParameters,
      serviceParametersMap: DescribeDeployedApiResponseBodyServiceParametersMap,
      stageName: 'string',
      systemParameters: DescribeDeployedApiResponseBodySystemParameters,
      visibility: 'string',
    };
  }

  validate() {
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

