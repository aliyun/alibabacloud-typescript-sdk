// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApiRequestTag } from "./CreateApiRequestTag";


export class CreateApiRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the two-way communication API.
   * 
   * *   **COMMON**: normal APIs
   * *   **REGISTER**: registered APIs
   * *   **UNREGISTER**: unregistered APIs
   * *   **NOTIFY**: downstream notification APIs
   * 
   * @example
   * HmacSHA256
   */
  allowSignatureMethod?: string;
  /**
   * @remarks
   * The name of the API that you want to create. The name must be unique within the API group. The name must be 4 to 50 characters in length. It must start with a letter and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * ApiName
   */
  apiName?: string;
  /**
   * @remarks
   * The IDof the backend service
   * 
   * @example
   * HEADER
   */
  appCodeAuthType?: string;
  /**
   * @remarks
   * The configuration items of API requests sent by the consumer to API Gateway.
   * 
   * For more information, see [RequestConfig](https://help.aliyun.com/document_detail/43985.html).
   * 
   * @example
   * APP
   */
  authType?: string;
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
   * Specifies whether to enable backend services.
   * 
   * @example
   * a0305308908c4740aba9cbfd63ba99b7
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
   * If **AuthType** is set to **APP**, the valid values are:
   * 
   * *   **DEFAULT**: The default value that is used if no other values are passed. This value means that the setting of the group is used.
   * *   **DISABLE**: The authentication is disabled.
   * *   **HEADER**: AppCode can be placed in the Header parameter for authentication.
   * *   **HEADER_QUERY**: AppCode can be placed in the Header or Query parameter for authentication.
   * 
   * @example
   * true
   */
  disableInternet?: boolean;
  errorCodeSamples?: string;
  failResultSample?: string;
  /**
   * @remarks
   * *   Specifies whether to set **DisableInternet** to **true** to limit API calls to within the VPC.
   * *   If you set **DisableInternet** to **false**, the limit is lifted. The default value is false when you create an API.
   * 
   * @example
   * true
   */
  forceNonceCheck?: boolean;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 08ae4aa0f95e4321849ee57f4e0b3077
   */
  groupId?: string;
  /**
   * @remarks
   * If the **AuthType** is **APP** authentication, you need to pass this value to specify the signature algorithm. If you do not specify this parameter, the default value HmacSHA256 is used. Valid values:
   * 
   * *   HmacSHA256
   * *   HmacSHA1,HmacSHA256
   * 
   * @example
   * {\\"openIdApiType\\":null,\\"idTokenParamName\\":null,\\"publicKeyId\\":null,\\"publicKey\\":null}
   */
  openIdConnectConfig?: string;
  /**
   * @remarks
   * The configuration items of API requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceConfig](https://help.aliyun.com/document_detail/43987.html).
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
   * *   If you set **ForceNonceCheck** to **false**, the check is not performed. The default value is false when you create an API.
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
   * For more information, see [RequestParameter](https://help.aliyun.com/document_detail/43986.html).
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
   * The list of tags.
   */
  tag?: CreateApiRequestTag[];
  /**
   * @remarks
   * Specifies whether to make the API public. Valid values:
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
   * The return description of the API.
   * 
   * @example
   * COMMON
   */
  webSocketApiType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
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
      tag: 'Tag',
      visibility: 'Visibility',
      webSocketApiType: 'WebSocketApiType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
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
      tag: { 'type': 'array', 'itemType': CreateApiRequestTag },
      visibility: 'string',
      webSocketApiType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

