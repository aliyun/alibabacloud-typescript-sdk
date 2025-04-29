// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiRequest extends $dara.Model {
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
   * HmacSHA256
   */
  allowSignatureMethod?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 8afff6c8c4c6447abb035812e4d66b65
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API. The name must be unique within the API group. The name must be 4 to 50 characters in length. It must start with a letter and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * ApiName
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * DEFAULT
   */
  appCodeAuthType?: string;
  /**
   * @remarks
   * The configuration items of API requests sent by the consumer to API Gateway.
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * Configuration Mode
   * 
   * @example
   * true
   */
  backendEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable backend services.
   * 
   * @example
   * 0d105f80a8f340408bd34954d4e4ff22
   */
  backendId?: string;
  constantParameters?: string;
  /**
   * @remarks
   * The description of the API. The description can be up to 180 characters in length.
   * 
   * @example
   * Api description
   */
  description?: string;
  /**
   * @remarks
   * The AppCode authentication type supported. Valid values:
   * 
   * *   DEFAULT: supported after being made available in Alibaba Cloud Marketplace
   * *   DISABLE: not supported
   * *   HEADER : supported only in the Header parameter
   * *   HEADER_QUERY: supported in the Header or Query parameter
   * 
   * @example
   * true
   */
  disableInternet?: boolean;
  errorCodeSamples?: string;
  failResultSample?: string;
  /**
   * @remarks
   * *   Specifies whether to set DisableInternet to **true** to limit API calls to within the VPC.
   * *   If you set DisableInternet to **false**, the limit if lifted.
   * 
   * >  If you do not set this parameter, the original value is used.
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
   * 927d50c0f2e54b359919923d908bb015
   */
  groupId?: string;
  /**
   * @remarks
   * The client-side request signature method of the API. Valid values:
   * 
   * *   HmacSHA256
   * *   HmacSHA1,HmacSHA256
   * 
   * @example
   * {\\"OpenIdApiType\\":\\"IDTOKEN\\",\\"PublicKey\\":\\"lzlj1573\\",\\"IdTokenParamName\\":\\"\\",\\"PublicKeyId\\":\\"lzljorders\\"}
   */
  openIdConnectConfig?: string;
  /**
   * @remarks
   * The configuration items of API requests sent by API Gateway to the backend service.
   * 
   * This parameter is required.
   * 
   * @example
   * {"RequestProtocol":"HTTP","RequestHttpMethod":"GET","RequestPath":"/v3/getUserTest/[userId]","BodyFormat":"FORM","PostBodyDescription":""}
   */
  requestConfig?: string;
  requestParameters?: string;
  /**
   * @remarks
   * *   Specifies whether to set **ForceNonceCheck** to **true** to force the check of X-Ca-Nonce during the request. This is the unique identifier of the request and is generally identified by UUID. After receiving this parameter, API Gateway verifies the validity of this parameter. The same value can be used only once within 15 minutes. This helps prevent replay attacks.
   * *   If you set **ForceNonceCheck** to **false**, the check is not performed. If you do not set this parameter, the original value is used.
   * 
   * @example
   * {}
   */
  resultBodyModel?: string;
  resultDescriptions?: string;
  resultSample?: string;
  /**
   * @remarks
   * The sample response from the backend service.
   * 
   * @example
   * HTML
   */
  resultType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The parameters of API requests sent by the consumer to API Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ServiceProtocol":"HTTP","ServiceHttpMethod":"GET","ServiceAddress":"http://www.customerdomain.com","ServiceTimeout":"1000","ServicePath":"/v3/getUserTest/[userId]"}
   */
  serviceConfig?: string;
  serviceParameters?: string;
  serviceParametersMap?: string;
  systemParameters?: string;
  /**
   * @remarks
   * Specifies whether the API is public. Valid values:
   * 
   * *   **PUBLIC**: Make the API public. If you set this parameter to PUBLIC, this API is displayed on the APIs page for all users after the API is published to the production environment.
   * *   **PRIVATE**: Make the API private. Private APIs are not displayed in the Alibaba Cloud Marketplace after the API group to which they belong is made available.
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  /**
   * @remarks
   * The returned description of the API.
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
      backendEnable: 'BackendEnable',
      backendId: 'BackendId',
      constantParameters: 'ConstantParameters',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      openIdConnectConfig: 'OpenIdConnectConfig',
      requestConfig: 'RequestConfig',
      requestParameters: 'RequestParameters',
      resultBodyModel: 'ResultBodyModel',
      resultDescriptions: 'ResultDescriptions',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      securityToken: 'SecurityToken',
      serviceConfig: 'ServiceConfig',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
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
      backendEnable: 'boolean',
      backendId: 'string',
      constantParameters: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: 'string',
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      openIdConnectConfig: 'string',
      requestConfig: 'string',
      requestParameters: 'string',
      resultBodyModel: 'string',
      resultDescriptions: 'string',
      resultSample: 'string',
      resultType: 'string',
      securityToken: 'string',
      serviceConfig: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      systemParameters: 'string',
      visibility: 'string',
      webSocketApiType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

