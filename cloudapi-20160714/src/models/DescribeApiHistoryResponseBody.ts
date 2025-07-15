// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * a0305308908c4740aba9cbfd63ba99b7
   */
  backendId?: string;
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * zmapi
   */
  backendName?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyConstantParametersConstantParameter extends $dara.Model {
  /**
   * @remarks
   * The value of the constant parameter.
   * 
   * @example
   * constance
   */
  constantValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * for_test1
   */
  description?: string;
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The mapped parameter name in the backend service.
   * 
   * @example
   * constance
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      constantValue: 'ConstantValue',
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantValue: 'string',
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyConstantParameters extends $dara.Model {
  constantParameter?: DescribeApiHistoryResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyConstantParametersConstantParameter },
    };
  }

  validate() {
    if(Array.isArray(this.constantParameter)) {
      $dara.Model.validateArray(this.constantParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter extends $dara.Model {
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 192.168.1.1
   */
  demoValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * balabala
   */
  description?: string;
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * CaClientIp
   */
  parameterName?: string;
  /**
   * @remarks
   * The mapped parameter name in the backend service.
   * 
   * @example
   * clientIp
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
      serviceParameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyCustomSystemParameters extends $dara.Model {
  customSystemParameter?: DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter },
    };
  }

  validate() {
    if(Array.isArray(this.customSystemParameter)) {
      $dara.Model.validateArray(this.customSystemParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample extends $dara.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * Missing the parameter UserId
   */
  description?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * MissingParameter
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyErrorCodeSamples extends $dara.Model {
  errorCodeSample?: DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample },
    };
  }

  validate() {
    if(Array.isArray(this.errorCodeSample)) {
      $dara.Model.validateArray(this.errorCodeSample);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyOpenIdConnectConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter that corresponds to the token.
   * 
   * @example
   * xxx
   */
  idTokenParamName?: string;
  /**
   * @remarks
   * The configuration of OpenID Connect authentication. Valid values:
   * 
   * *   **IDTOKEN: indicates the APIs that are called by clients to obtain tokens. If you specify this value, the PublicKeyId parameter and the PublicKey parameter are required.**
   * *   **BUSINESS: indicates business APIs. Tokens are used to call the business APIs. If you specify this value, the IdTokenParamName parameter is required.
   * 
   * @example
   * IDTOKEN
   */
  openIdApiType?: string;
  /**
   * @remarks
   * The public key of the API.
   * 
   * @example
   * EB1837F8693CCED0BF750B3AD48467BEB569E780A14591CF92
   */
  publicKey?: string;
  /**
   * @remarks
   * The ID of the public key.
   * 
   * @example
   * 88483727556929326703309904351185815489
   */
  publicKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      idTokenParamName: 'IdTokenParamName',
      openIdApiType: 'OpenIdApiType',
      publicKey: 'PublicKey',
      publicKeyId: 'PublicKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idTokenParamName: 'string',
      openIdApiType: 'string',
      publicKey: 'string',
      publicKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The server data transmission method used for POST and PUT requests. Valid values: FORM and STREAM. FORM indicates that data in key-value pairs is transmitted as forms. STREAM indicates that data is transmitted as byte streams. This parameter takes effect only when the RequestMode parameter is set to MAPPING.
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
   * https://apigateway.aliyun.com/models/3a240a1XXXXXXXXd9ab1bf7e947b4095/9e2df550e85b4XXXXXXXX619eaab
   */
  bodyModel?: string;
  /**
   * @remarks
   * Whether to escape the Path parameter, if true, the [param] on the Path will be treated as a regular character.
   * 
   * @example
   * true
   */
  escapePathParam?: boolean;
  /**
   * @remarks
   * The description of the request body.
   * 
   * @example
   * fwefwef
   */
  postBodyDescription?: string;
  /**
   * @remarks
   * The HTTP method. Valid values: GET, POST, DELETE, PUT, HEADER, TRACE, PATCH, CONNECT, and OPTIONS.
   * 
   * @example
   * POST
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
   * API path
   * 
   * @example
   * /api/billing/test/[type]
   */
  requestPath?: string;
  /**
   * @remarks
   * The protocol type supported by the API. Valid values: HTTP, HTTPS, and WebSocket. Separate multiple values with commas (,), such as "HTTP,HTTPS".
   * 
   * @example
   * HTTP
   */
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
      bodyModel: 'BodyModel',
      escapePathParam: 'EscapePathParam',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyFormat: 'string',
      bodyModel: 'string',
      escapePathParam: 'boolean',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestParametersRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter in the API request.
   * 
   * @example
   * age
   */
  apiParameterName?: string;
  /**
   * @remarks
   * The type of the array element.
   * 
   * @example
   * String
   */
  arrayItemsType?: string;
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * 20
   */
  defaultValue?: string;
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 20
   */
  demoValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * modidyTest
   */
  description?: string;
  /**
   * @remarks
   * The order in which the parameter is sorted in the document.
   * 
   * @example
   * 0
   */
  docOrder?: number;
  /**
   * @remarks
   * Indicates whether the document is public. Valid values: **PUBLIC** and **PRIVATE**.
   * 
   * @example
   * PUBLIC
   */
  docShow?: string;
  /**
   * @remarks
   * The hash values that are supported when **ParameterType** is set to Int, Long, Float, Double, or String. Separate values with commas (,). Examples: 1,2,3,4,9 and A,B,C,E,F.
   * 
   * @example
   * boy,girl
   */
  enumValue?: string;
  /**
   * @remarks
   * JSON scheme
   * 
   * @example
   * {}
   */
  jsonScheme?: string;
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The maximum parameter length when **ParameterType** is set to String.
   * 
   * @example
   * 123456
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum parameter value when **ParameterType** is set to Int, Long, Float, or Double.
   * 
   * @example
   * 123456
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum parameter length when **ParameterType** is set to String.
   * 
   * @example
   * 123456
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum parameter value when **ParameterType** is set to Int, Long, Float, or Double.
   * 
   * @example
   * 123456
   */
  minValue?: number;
  /**
   * @remarks
   * The data type of the parameter. Valid values: String, Int, Long, Float, Double, and Boolean.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The regular expression that is used for parameter validation when **ParameterType** is set to String.
   * 
   * @example
   * xxx
   */
  regularExpression?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values: **REQUIRED** and **OPTIONAL**.
   * 
   * @example
   * OPTIONAL
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      apiParameterName: 'ApiParameterName',
      arrayItemsType: 'ArrayItemsType',
      defaultValue: 'DefaultValue',
      demoValue: 'DemoValue',
      description: 'Description',
      docOrder: 'DocOrder',
      docShow: 'DocShow',
      enumValue: 'EnumValue',
      jsonScheme: 'JsonScheme',
      location: 'Location',
      maxLength: 'MaxLength',
      maxValue: 'MaxValue',
      minLength: 'MinLength',
      minValue: 'MinValue',
      parameterType: 'ParameterType',
      regularExpression: 'RegularExpression',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParameterName: 'string',
      arrayItemsType: 'string',
      defaultValue: 'string',
      demoValue: 'string',
      description: 'string',
      docOrder: 'number',
      docShow: 'string',
      enumValue: 'string',
      jsonScheme: 'string',
      location: 'string',
      maxLength: 'number',
      maxValue: 'number',
      minLength: 'number',
      minValue: 'number',
      parameterType: 'string',
      regularExpression: 'string',
      required: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyRequestParameters extends $dara.Model {
  requestParameter?: DescribeApiHistoryResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyRequestParametersRequestParameter },
    };
  }

  validate() {
    if(Array.isArray(this.requestParameter)) {
      $dara.Model.validateArray(this.requestParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyResultDescriptionsResultDescription extends $dara.Model {
  /**
   * @remarks
   * The subnode description.
   * 
   * @example
   * for_test1
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether a subnode exists.
   * 
   * @example
   * true
   */
  hasChild?: boolean;
  /**
   * @remarks
   * The result ID.
   * 
   * @example
   * id
   */
  id?: string;
  /**
   * @remarks
   * The primary key of the result.
   * 
   * @example
   * groupName
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  mandatory?: boolean;
  /**
   * @remarks
   * The result name.
   * 
   * @example
   * fwqf
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent node.
   * 
   * @example
   * pid
   */
  pid?: string;
  /**
   * @remarks
   * The result type.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasChild: 'HasChild',
      id: 'Id',
      key: 'Key',
      mandatory: 'Mandatory',
      name: 'Name',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasChild: 'boolean',
      id: 'string',
      key: 'string',
      mandatory: 'boolean',
      name: 'string',
      pid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyResultDescriptions extends $dara.Model {
  resultDescription?: DescribeApiHistoryResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyResultDescriptionsResultDescription },
    };
  }

  validate() {
    if(Array.isArray(this.resultDescription)) {
      $dara.Model.validateArray(this.resultDescription);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the EventBridge instance is located.
   * 
   * @example
   * cn-beijing
   */
  eventBridgeRegionId?: string;
  /**
   * @remarks
   * The event bus.
   * 
   * @example
   * testBus
   */
  eventBus?: string;
  /**
   * @remarks
   * The event source of the managed rule.
   * 
   * @example
   * baas_driver
   */
  eventSource?: string;
  /**
   * @remarks
   * The Arn that is authorized by a RAM user to EventBridge.
   * 
   * @example
   * acs:ram::1933122015759***:role/adminoidcaliyun
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      eventBridgeRegionId: 'EventBridgeRegionId',
      eventBus: 'EventBus',
      eventSource: 'EventSource',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeRegionId: 'string',
      eventBus: 'string',
      eventSource: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig extends $dara.Model {
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   **DEFAULT: the default header type in API Gateway.**
   * *   **CUSTOM: a custom header type.**
   * *   **CLIENT: the ContentType header type of the client.
   * 
   * @example
   * DEFAULT
   */
  contentTypeCatagory?: string;
  /**
   * @remarks
   * The value of the ContentType header when the ServiceProtocol parameter is set to HTTP and the ContentTypeCatagory parameter is set to DEFAULT or CUSTOM.
   * 
   * @example
   * application/json
   */
  contentTypeValue?: string;
  /**
   * @remarks
   * The root path of Function Compute.
   * 
   * @example
   * https://122xxxxxxx.fc.aliyun.com/2016xxxx/proxy/testSxxx.xxx/testHttp/
   */
  fcBaseUrl?: string;
  /**
   * @remarks
   * The type of the Function Compute instance.
   * 
   * @example
   * HttpTrigger
   */
  fcType?: string;
  /**
   * @remarks
   * The function name defined in Function Compute.
   * 
   * @example
   * domain_business_control
   */
  functionName?: string;
  /**
   * @remarks
   * The request method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The backend only receives the service path.
   * 
   * @example
   * false
   */
  onlyBusinessPath?: boolean;
  /**
   * @remarks
   * The API request path.
   * 
   * @example
   * /api/offline/cacheData
   */
  path?: string;
  /**
   * @remarks
   * The alias of the function.
   * 
   * @example
   * 2
   */
  qualifier?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role to be assumed by API Gateway to access Function Compute.
   * 
   * @example
   * acs:ram::111***:role/aliyunserviceroleforsas
   */
  roleArn?: string;
  /**
   * @remarks
   * The service name defined in Function Compute.
   * 
   * @example
   * fcservicename
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      fcBaseUrl: 'FcBaseUrl',
      fcType: 'FcType',
      functionName: 'FunctionName',
      method: 'Method',
      onlyBusinessPath: 'OnlyBusinessPath',
      path: 'Path',
      qualifier: 'Qualifier',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      fcBaseUrl: 'string',
      fcType: 'string',
      functionName: 'string',
      method: 'string',
      onlyBusinessPath: 'boolean',
      path: 'string',
      qualifier: 'string',
      regionId: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader extends $dara.Model {
  /**
   * @remarks
   * The HTTP headers.
   * 
   * @example
   * Content-Type
   */
  headerName?: string;
  /**
   * @remarks
   * The values of the HTTP headers.
   * 
   * @example
   * 86400
   */
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigMockHeaders extends $dara.Model {
  mockHeader?: DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader },
    };
  }

  validate() {
    if(Array.isArray(this.mockHeader)) {
      $dara.Model.validateArray(this.mockHeader);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigOssConfig extends $dara.Model {
  /**
   * @remarks
   * The operation options on OSS. Valid values:
   * 
   * *   GetObject
   * *   PostObject
   * *   DeleteObject
   * *   PutObject
   * *   HeadObject
   * *   GetObjectMeta
   * *   AppendObject
   * 
   * @example
   * GetObject
   */
  action?: string;
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * phototest02
   */
  bucketName?: string;
  /**
   * @remarks
   * The stored object or folder path.
   * 
   * @example
   * ENV
   */
  key?: string;
  /**
   * @remarks
   * The ID of the region where the OSS instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      bucketName: 'BucketName',
      key: 'Key',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      bucketName: 'string',
      key: 'string',
      ossRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ELB and SLB instances in the VPC.
   * 
   * @example
   * i-bp1h497hkijewv2***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * glmall-app-test
   */
  name?: string;
  /**
   * @remarks
   * The port number that corresponds to the instance.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2zeafsc3fygk1***
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC protocol.
   * 
   * @example
   * HTTP
   */
  vpcScheme?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcId: 'string',
      vpcScheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceConfig extends $dara.Model {
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   DEFAULT: the default header type in API Gateway
   * *   CUSTOM: a custom header type
   * *   CLIENT: the ContentType header type of the client
   * 
   * @example
   * CUSTOM
   */
  contentTypeCatagory?: string;
  /**
   * @remarks
   * The value of the ContentType header when the ServiceProtocol parameter is set to HTTP and the ContentTypeCatagory parameter is set to DEFAULT or CUSTOM.
   * 
   * @example
   * application/json
   */
  contentTypeValue?: string;
  /**
   * @remarks
   * Configuration items of EventBridge
   */
  eventBridgeConfig?: DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig;
  /**
   * @remarks
   * Backend configuration items when the backend service is Function Compute
   */
  functionComputeConfig?: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig;
  /**
   * @remarks
   * Specifies whether to enable the MOCK mode. Valid values:
   * 
   * *   TRUE: The Mock mode is enabled.
   * *   FALSE: The Mock mode is not enabled.
   * 
   * @example
   * TRUE
   */
  mock?: string;
  /**
   * @remarks
   * The simulated Headers.
   */
  mockHeaders?: DescribeApiHistoryResponseBodyServiceConfigMockHeaders;
  /**
   * @remarks
   * The result returned when the Mock mode is enabled.
   * 
   * @example
   * test result
   */
  mockResult?: string;
  /**
   * @remarks
   * The status code returned for service mocking.
   * 
   * @example
   * 200
   */
  mockStatusCode?: number;
  /**
   * @remarks
   * Information when the backend service is OSS
   */
  ossConfig?: DescribeApiHistoryResponseBodyServiceConfigOssConfig;
  /**
   * @remarks
   * The URL used to call the backend service.
   * 
   * @example
   * http://api.a.com:8080
   */
  serviceAddress?: string;
  /**
   * @remarks
   * The HTTP request method used when calling the backend service. Valid values: PUT, GET, POST, DELETE, PATCH, HEAD, OPTIONS, and ANY.
   * 
   * @example
   * POST
   */
  serviceHttpMethod?: string;
  /**
   * @remarks
   * The path used when you call the backend service.
   * 
   * @example
   * /object/add
   */
  servicePath?: string;
  /**
   * @remarks
   * The backend service protocol. Currently, only HTTP, HTTPS, and FunctionCompute are supported.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The timeout period of the backend service, in millisecond.
   * 
   * @example
   * 1000
   */
  serviceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the VPC channel. Valid values:
   * 
   * *   TRUE: The VPC channel is enabled.
   * *   FALSE: The VPC channel is not enabled.
   * 
   * You must create the corresponding VPC access authorization before you can enable a VPC channel.
   * 
   * @example
   * TRUE
   */
  serviceVpcEnable?: string;
  /**
   * @remarks
   * Configuration items related to VPC channels
   */
  vpcConfig?: DescribeApiHistoryResponseBodyServiceConfigVpcConfig;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6kg9x8sx2tbxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      eventBridgeConfig: 'EventBridgeConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
      ossConfig: 'OssConfig',
      serviceAddress: 'ServiceAddress',
      serviceHttpMethod: 'ServiceHttpMethod',
      servicePath: 'ServicePath',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      vpcConfig: 'VpcConfig',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      eventBridgeConfig: DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig,
      functionComputeConfig: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeApiHistoryResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      ossConfig: DescribeApiHistoryResponseBodyServiceConfigOssConfig,
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeApiHistoryResponseBodyServiceConfigVpcConfig,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.eventBridgeConfig && typeof (this.eventBridgeConfig as any).validate === 'function') {
      (this.eventBridgeConfig as any).validate();
    }
    if(this.functionComputeConfig && typeof (this.functionComputeConfig as any).validate === 'function') {
      (this.functionComputeConfig as any).validate();
    }
    if(this.mockHeaders && typeof (this.mockHeaders as any).validate === 'function') {
      (this.mockHeaders as any).validate();
    }
    if(this.ossConfig && typeof (this.ossConfig as any).validate === 'function') {
      (this.ossConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParametersServiceParameter extends $dara.Model {
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The data type of the parameter. Valid values: STRING, NUMBER, and BOOLEAN.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The mapped parameter name in the backend service.
   * 
   * @example
   * clientIp
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      parameterType: 'ParameterType',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      parameterType: 'string',
      serviceParameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParameters extends $dara.Model {
  serviceParameter?: DescribeApiHistoryResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyServiceParametersServiceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameter)) {
      $dara.Model.validateArray(this.serviceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParametersMapServiceParameterMap extends $dara.Model {
  /**
   * @remarks
   * The corresponding frontend parameter name. The value must be contained in RequestParametersObject and match RequestParam.ApiParameterName.
   * 
   * @example
   * sex
   */
  requestParameterName?: string;
  /**
   * @remarks
   * The mapped parameter name in the backend service.
   * 
   * @example
   * sex
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      requestParameterName: 'RequestParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameterName: 'string',
      serviceParameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodyServiceParametersMap extends $dara.Model {
  serviceParameterMap?: DescribeApiHistoryResponseBodyServiceParametersMapServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyServiceParametersMapServiceParameterMap },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameterMap)) {
      $dara.Model.validateArray(this.serviceParameterMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodySystemParametersSystemParameter extends $dara.Model {
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 192.168.1.1
   */
  demoValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * system parameters description
   */
  description?: string;
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The system parameter. Valid values: CaClientIp, CaDomain, CaRequestHandleTime, CaAppId, CaRequestId, CaHttpSchema, and CaProxy.
   * 
   * @example
   * CaClientIp
   */
  parameterName?: string;
  /**
   * @remarks
   * The mapped parameter name in the backend service.
   * 
   * @example
   * clientIp
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
      serviceParameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoryResponseBodySystemParameters extends $dara.Model {
  systemParameter?: DescribeApiHistoryResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodySystemParametersSystemParameter },
    };
  }

  validate() {
    if(Array.isArray(this.systemParameter)) {
      $dara.Model.validateArray(this.systemParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

