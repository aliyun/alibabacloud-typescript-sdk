// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * If the **AuthType** parameter is set to **APP**, you must include this parameter to specify the signature algorithm. If you do not specify a value, HmacSHA256 is used by default. Valid values:
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
   * This parameter is required.
   * 
   * @example
   * baacc592e63a4cb6a41920d9d3f91f38
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * testModifyApiName
   */
  apiName?: string;
  /**
   * @remarks
   * If the **AuthType** parameter is set to **APP**, the valid values are:
   * 
   * *   **DEFAULT**: The default value that is used if no other values are passed. This value indicates that the settings of the group are used.
   * *   **DISABLE**: The authentication is disabled.
   * *   **HEADER**: AppCode can be placed in the Header parameter for authentication.
   * *   **HEADER_QUERY**: AppCode can be placed in the Header or Query parameter for authentication.
   * 
   * @example
   * DEFAULT
   */
  appCodeAuthType?: string;
  /**
   * @remarks
   * API安全认证类型，目前可以取值：
   * 
   * - **APP**：只允许已授权的APP调用
   * - **ANONYMOUS**：允许匿名调用，设置为允许匿名调用需要注意：
   *      - 任何能够获取该API服务信息的人，都将能够调用该API。网关不会对调用者做身份认证，也无法设置按用户的流量控制，若开放该API请设置好按API的流量控制；
   *      - AppCodeAuthType的值不会生效。
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * The name of the backend service. This parameter takes effect only when the UseBackendService parameter is set to TRUE.
   * 
   * @example
   * testBackendService
   */
  backendName?: string;
  /**
   * @remarks
   * This parameter takes effect only when the **RequestMode** parameter is set to **MAPPING**.
   * 
   * The format in which data is transmitted to the server for POST and PUT requests. Valid values: **FORM** and **STREAM**. FORM indicates that data is transmitted in the key-value pair format. STREAM indicates that data is transmitted as byte streams.
   * 
   * @example
   * STREAM
   */
  bodyFormat?: string;
  /**
   * @remarks
   * The body model.
   * 
   * @example
   * https://apigateway.aliyun.com/models/f4e7333c****40dcbaf7c9da553ccd8d/3ab61f775b****d4bc35e993****87aa8
   */
  bodyModel?: string;
  /**
   * @remarks
   * The ContentType configuration of the backend request.
   * 
   * *   DEFAULT: the default configuration in API Gateway
   * *   CUSTOM: a custom configuration
   * 
   * @example
   * DEFAULT
   */
  contentTypeCategory?: string;
  /**
   * @remarks
   * The value of the ContentType header when the ServiceProtocol parameter is set to HTTP and the ContentTypeCatagory parameter is set to DEFAULT or CUSTOM.
   * 
   * @example
   * application/x-www-form-urlencoded; charset=UTF-8
   */
  contentTypeValue?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * TestModifyDescription
   */
  description?: string;
  /**
   * @remarks
   * *   Specifies whether to call the API only in an internal network. If the **DisableInternet** parameter is set to **true**, the API can be called only in an internal network.
   * *   If the **DisableInternet** parameter is set to **false**, the API can be called over the Internet and in an internal network.
   * 
   * @example
   * false
   */
  disableInternet?: boolean;
  /**
   * @remarks
   * The sample error codes returned by the backend service.
   * 
   * For more information, see [ErrorCodeSample](https://help.aliyun.com/document_detail/44392.html).
   * 
   * @example
   * [{"Code":"400","Message":"Missing the userId","Description":"param invalid"}]
   */
  errorCodeSamples?: string;
  /**
   * @remarks
   * The sample error response from the backend service. This value is used only to generate documents. It does not affect the returned result.
   * 
   * @example
   * {"errorCode":"fail","errorMessage":"param invalid"}
   */
  failResultSample?: string;
  /**
   * @remarks
   * *   Specifies whether to forcibly check X-Ca-Nonce. If the **ForceNonceCheck** parameter is set to **true**, X-Ca-Nonce is forcibly checked. X-Ca-Nonce is the unique identifier of the request and is generally identified by UUID. After receiving this parameter, API Gateway verifies the validity of this parameter. The same value can be used only once within 15 minutes. This helps prevent replay attacks.
   * *   If the **ForceNonceCheck** parameter is set to **false**, X-Ca-Nonce is not checked. If you do not modify this parameter when you modify an API, the original value is used.
   * 
   * @example
   * true
   */
  forceNonceCheck?: boolean;
  /**
   * @remarks
   * The Function Compute configuration.
   * 
   * @example
   * {"FcType":"FCEvent","FcRegionId":"cn-hangzhou","RoleArn":"acs:ram::xxxxxxxx:role/aliyunserviceroleforapigateway","selectServiceName":"fcTest","FunctionName":"funcTest","selectFunctionName":"funcTest","Qualifier":"LATEST","Path":"","FcBaseUrl":"","ServiceName":"fcTest"}
   */
  functionComputeConfig?: string;
  /**
   * @remarks
   * The HTTP configuration.
   * 
   * @example
   * {"serviceAddress":"http://test.api.com","servicePath":"/test/api","serviceHttpMethod":"GET"}
   */
  httpConfig?: string;
  /**
   * @remarks
   * The Mock configuration.
   * 
   * @example
   * {"MockResult":"test","MockHeaders":[{"HeaderName":"testHeader","HeaderValue":"testHeader"}],"MockStatusCode":"400"}
   */
  mockConfig?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * Test
   */
  modelName?: string;
  /**
   * @remarks
   * The OSS configuration.
   * 
   * @example
   * {"OssRegionId":"cn-hangzhou","Key":"/test.html","BucketName":"test-api-oss","Action":"GetObject"}
   */
  ossConfig?: string;
  /**
   * @remarks
   * The description of the request body.
   * 
   * @example
   * The description of the request body
   */
  postBodyDescription?: string;
  /**
   * @remarks
   * The HTTP method used to make the request. Valid values: GET, POST, DELETE, PUT, HEADER, TRACE, PATCH, CONNECT, and OPTIONS.
   * 
   * @example
   * GET
   */
  requestHttpMethod?: string;
  /**
   * @remarks
   * The request mode. Valid values:
   * 
   * *   MAPPING: Parameters are mapped. Unknown parameters are filtered out.
   * *   PASSTHROUGH: Parameters are passed through.
   * *   MAPPING_PASSTHROUGH: Parameters are mapped. Unknown parameters are passed through.
   * 
   * @example
   * MAPPING
   */
  requestMode?: string;
  /**
   * @remarks
   * The parameters of API requests sent by the consumer to API Gateway.
   * 
   * For more information, see [RequestParameter](https://help.aliyun.com/document_detail/43986.html).
   * 
   * @example
   * [{"ParameterLocation":{"name":"Head","orderNumber":2},"ParameterType":"String","Required":"OPTIONAL","isHide":false,"ApiParameterName":"header1","DefaultValue":"123124","Location":"Head"},{"ParameterLocation":{"name":"Head","orderNumber":2},"ParameterType":"String","Required":"REQUIRED","isHide":false,"ApiParameterName":"header2","DefaultValue":"","Location":"Head"},{"ParameterLocation":{"name":"Query","orderNumber":3},"ParameterType":"String","Required":"OPTIONAL","isHide":false,"ApiParameterName":"query1","DefaultValue":"1245","Location":"Query"},{"ApiParameterName":"CaClientIp","ParameterLocation":{"name":"Query","orderNumber":0},"Location":"Query","ParameterType":"String","Required":"REQUIRED","Description":"ClientIP"},{"ApiParameterName":"testConstant","ParameterLocation":{"name":"Head","orderNumber":0},"Location":"Head","ParameterType":"String","Required":"REQUIRED","DefaultValue":"111"}]
   */
  requestParameters?: string;
  /**
   * @remarks
   * The path of the API request. If the complete API URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the path of the API request is `/object/add`.
   * 
   * @example
   * /test/api
   */
  requestPath?: string;
  /**
   * @remarks
   * The protocol type supported by the API. Valid values: HTTP and HTTPS. Separate multiple values with commas (,), such as "HTTP,HTTPS".
   * 
   * @example
   * HTTP
   */
  requestProtocol?: string;
  /**
   * @remarks
   * The sample response from the backend service. This value is used only to generate documents. It does not affect the returned result.
   * 
   * @example
   * {\\n  \\"status\\": 0,\\n  \\"data\\": {\\n    \\"count\\": 1,\\n    \\"list\\": [\\n      \\"352\\"\\n    ]\\n  },\\n  \\"message\\": \\"success\\"\\n}
   */
  resultSample?: string;
  /**
   * @remarks
   * The format of the response from the backend service. Valid values: JSON, TEXT, BINARY, XML, and HTML. This value is used only to generate documents. It does not affect the returned result.
   * 
   * @example
   * JSON
   */
  resultType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The parameters of API requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameter](https://help.aliyun.com/document_detail/43988.html).
   * 
   * @example
   * [{"ServiceParameterName":"header1","Location":"Head","Type":"String","ParameterCatalog":"REQUEST"},{"ServiceParameterName":"header2","Location":"Query","Type":"String","ParameterCatalog":"REQUEST"},{"ServiceParameterName":"query1","Location":"Head","Type":"String","ParameterCatalog":"REQUEST"},{"ServiceParameterName":"ipp","Location":"Query","Type":"String","ParameterCatalog":"SYSTEM"},{"ServiceParameterName":"testConstant","Location":"Head","Type":"String","ParameterCatalog":"CONSTANT"}]
   */
  serviceParameters?: string;
  /**
   * @remarks
   * The mappings between parameters of requests sent by the consumer to API Gateway and parameters of requests sent by API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameterMap](https://help.aliyun.com/document_detail/43989.html).
   * 
   * @example
   * [{"ServiceParameterName":"header1","RequestParameterName":"header1"},{"ServiceParameterName":"header2","RequestParameterName":"header2"},{"ServiceParameterName":"query1","RequestParameterName":"query1"},{"ServiceParameterName":"ipp","RequestParameterName":"CaClientIp"},{"ServiceParameterName":"testConstant","RequestParameterName":"testConstant"}]
   */
  serviceParametersMap?: string;
  /**
   * @remarks
   * The protocol that is used to access backend services. Valid values:
   * 
   * *   Http: for backend services that use HTTP or HTTPS
   * *   Vpc: for backend services that use VPC
   * *   FC: for Function Compute
   * *   OSS: for Object Storage Service
   * *   Mock: for backend services that use the Mock mode
   * *   EventBridge: for EventBridge
   * 
   * You must specify the config value for the corresponding backend service.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The timeout period of the backend service. Unit: milliseconds.
   * 
   * @example
   * 10000
   */
  serviceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use the information about the created backend service. Valid values:
   * 
   * *   TRUE: uses the information about the created backend service.
   * *   FALSE: uses the information about the custom backend service.
   * 
   * @example
   * TRUE
   */
  useBackendService?: boolean;
  /**
   * @remarks
   * Specifies whether to make the API public. Valid values:
   * 
   * *   **PUBLIC:** The API is public. If this parameter is set to PUBLIC, the API is displayed on the APIs page for all users after the API is published to the production environment.
   * *   **PRIVATE:** The API is private. Private APIs are not displayed in the Alibaba Cloud Marketplace after the API group to which they belong is made available.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  /**
   * @remarks
   * The VPC configuration.
   * 
   * @example
   * {"VpcId":"vpc-xxxxxxx","Name":"testVpc","InstanceId":"i-p0ssssss","Port":80,"servicePath":"/test/vpc","serviceHttpMethod":"HEAD"}
   */
  vpcConfig?: string;
  static names(): { [key: string]: string } {
    return {
      allowSignatureMethod: 'AllowSignatureMethod',
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCodeAuthType: 'AppCodeAuthType',
      authType: 'AuthType',
      backendName: 'BackendName',
      bodyFormat: 'BodyFormat',
      bodyModel: 'BodyModel',
      contentTypeCategory: 'ContentTypeCategory',
      contentTypeValue: 'ContentTypeValue',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      functionComputeConfig: 'FunctionComputeConfig',
      httpConfig: 'HttpConfig',
      mockConfig: 'MockConfig',
      modelName: 'ModelName',
      ossConfig: 'OssConfig',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestParameters: 'RequestParameters',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      securityToken: 'SecurityToken',
      serviceParameters: 'ServiceParameters',
      serviceParametersMap: 'ServiceParametersMap',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      useBackendService: 'UseBackendService',
      visibility: 'Visibility',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSignatureMethod: 'string',
      apiId: 'string',
      apiName: 'string',
      appCodeAuthType: 'string',
      authType: 'string',
      backendName: 'string',
      bodyFormat: 'string',
      bodyModel: 'string',
      contentTypeCategory: 'string',
      contentTypeValue: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: 'string',
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      functionComputeConfig: 'string',
      httpConfig: 'string',
      mockConfig: 'string',
      modelName: 'string',
      ossConfig: 'string',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestParameters: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
      resultSample: 'string',
      resultType: 'string',
      securityToken: 'string',
      serviceParameters: 'string',
      serviceParametersMap: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      useBackendService: 'boolean',
      visibility: 'string',
      vpcConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

