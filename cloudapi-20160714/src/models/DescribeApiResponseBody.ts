// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 0038e00c3dca44fcba3a94015d8f5bbf
   */
  backendId?: string;
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * testoss
   */
  backendName?: string;
  /**
   * @remarks
   * Backend service type
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

export class DescribeApiResponseBodyConstantParametersConstantParameter extends $dara.Model {
  /**
   * @remarks
   * The constant parameter value.
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
   * constance
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

export class DescribeApiResponseBodyConstantParameters extends $dara.Model {
  constantParameter?: DescribeApiResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyConstantParametersConstantParameter },
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

export class DescribeApiResponseBodyCustomSystemParametersCustomSystemParameter extends $dara.Model {
  /**
   * @remarks
   * The example value.
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
   * Client IP Address
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
   * The name of the system parameter. Valid values: CaClientIp, CaDomain, CaRequestHandleTime, CaAppId, CaRequestId, CaHttpSchema, and CaProxy.
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

export class DescribeApiResponseBodyCustomSystemParameters extends $dara.Model {
  customSystemParameter?: DescribeApiResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyCustomSystemParametersCustomSystemParameter },
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

export class DescribeApiResponseBodyDeployedInfosDeployedInfo extends $dara.Model {
  /**
   * @remarks
   * The deployment status. Valid values: DEPLOYED and NONDEPLOYED.
   * 
   * @example
   * DEPLOYED
   */
  deployedStatus?: string;
  /**
   * @remarks
   * The effective version.
   * 
   * @example
   * xxx
   */
  effectiveVersion?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values: RELEASE and TEST.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      deployedStatus: 'DeployedStatus',
      effectiveVersion: 'EffectiveVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedStatus: 'string',
      effectiveVersion: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyDeployedInfos extends $dara.Model {
  deployedInfo?: DescribeApiResponseBodyDeployedInfosDeployedInfo[];
  static names(): { [key: string]: string } {
    return {
      deployedInfo: 'DeployedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedInfo: { 'type': 'array', 'itemType': DescribeApiResponseBodyDeployedInfosDeployedInfo },
    };
  }

  validate() {
    if(Array.isArray(this.deployedInfo)) {
      $dara.Model.validateArray(this.deployedInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample extends $dara.Model {
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
   * The UserId parameter is missing from the request.
   */
  description?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Missing the parameter UserId
   */
  message?: string;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * [\\"*\\"]
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyErrorCodeSamples extends $dara.Model {
  errorCodeSample?: DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample },
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

export class DescribeApiResponseBodyOpenIdConnectConfig extends $dara.Model {
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
   * The OpenID Connect mode. Valid values:
   * 
   * *   **IDTOKEN**: indicates the APIs that are called by clients to obtain tokens. If you specify this value, the PublicKeyId parameter and the PublicKey parameter are required.
   * *   **BUSINESS**: indicates business APIs. Tokens are used to call the business APIs. If you specify this value, the IdTokenParamName parameter is required.
   * 
   * @example
   * IDTOKEN
   */
  openIdApiType?: string;
  /**
   * @remarks
   * The public key.
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

export class DescribeApiResponseBodyRequestConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter takes effect only when the RequestMode parameter is set to MAPPING.********
   * 
   * The server data transmission method used for POST and PUT requests. Valid values: FORM and STREAM. FORM indicates that data in key-value pairs is transmitted as forms. STREAM indicates that data is transmitted as byte streams.
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
   * https://apigateway.aliyun.com/models/3a240a127dcc4afd9ab1bf7e947b4095/9e2df550e85b4121a79ec33e2619eaab
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
   * The HTTP method used to make the request. Valid values: GET, POST, DELETE, PUT, HEADER, TRACE, PATCH, CONNECT, and OPTIONS.
   * 
   * @example
   * POST
   */
  requestHttpMethod?: string;
  /**
   * @remarks
   * The request mode. Valid values: MAPPING and PASSTHROUGH.
   * 
   * @example
   * MAPPING
   */
  requestMode?: string;
  /**
   * @remarks
   * The API request path. If the complete API URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the API request path is ` /object/add  `.
   * 
   * @example
   * /api/billing/test/[type]
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

export class DescribeApiResponseBodyRequestParametersRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
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
   * The example value.
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
   * Age
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
   * The JSON Schema used for JSON validation when **ParameterType** is set to String.
   * 
   * @example
   * JSON
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

export class DescribeApiResponseBodyRequestParameters extends $dara.Model {
  requestParameter?: DescribeApiResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyRequestParametersRequestParameter },
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

export class DescribeApiResponseBodyServiceConfigEventBridgeConfig extends $dara.Model {
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
   * The event source.
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

export class DescribeApiResponseBodyServiceConfigFunctionComputeConfig extends $dara.Model {
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   **DEFAULT**: the default header type in API Gateway
   * *   **CUSTOM**: a custom header type
   * *   **CLIENT**: the ContentType header type of the client
   * 
   * @example
   * DEFAULT
   */
  contentTypeCatagory?: string;
  /**
   * @remarks
   * The value of the ContentType header when the ContentTypeCatagory parameter is set to DEFAULT or CUSTOM.
   * 
   * @example
   * application/x-www-form-urlencoded; charset=UTF-8
   */
  contentTypeValue?: string;
  /**
   * @remarks
   * The root path of Function Compute.
   * 
   * @example
   * https://1227****64334133.ap-southeast-1-int***al.fc.aliyuncs.com/201****-15/proxy/test****ice.LATEST/testHttp/
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
  fcVersion?: string;
  /**
   * @remarks
   * The function name defined in Function Compute.
   * 
   * @example
   * edge_function
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
   * The region where the Function Compute instance is located.
   * 
   * @example
   * cn-qingdao
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
  /**
   * @remarks
   * The name of the trigger.
   * 
   * You can specify the TriggerName or TriggerUrl parameter. The TriggerName parameter is optional.
   * 
   * @example
   * test1
   */
  triggerName?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      fcBaseUrl: 'FcBaseUrl',
      fcType: 'FcType',
      fcVersion: 'FcVersion',
      functionName: 'FunctionName',
      method: 'Method',
      onlyBusinessPath: 'OnlyBusinessPath',
      path: 'Path',
      qualifier: 'Qualifier',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      triggerName: 'TriggerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      fcBaseUrl: 'string',
      fcType: 'string',
      fcVersion: 'string',
      functionName: 'string',
      method: 'string',
      onlyBusinessPath: 'boolean',
      path: 'string',
      qualifier: 'string',
      regionId: 'string',
      roleArn: 'string',
      serviceName: 'string',
      triggerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyServiceConfigMockHeadersMockHeader extends $dara.Model {
  /**
   * @remarks
   * The HTTP header.
   * 
   * @example
   * Content-Length
   */
  headerName?: string;
  /**
   * @remarks
   * The value of the HTTP header.
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

export class DescribeApiResponseBodyServiceConfigMockHeaders extends $dara.Model {
  mockHeader?: DescribeApiResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceConfigMockHeadersMockHeader },
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

export class DescribeApiResponseBodyServiceConfigOssConfig extends $dara.Model {
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
   * cbg-db
   */
  bucketName?: string;
  /**
   * @remarks
   * The stored object or folder path.
   * 
   * @example
   * /folder/test.json
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

export class DescribeApiResponseBodyServiceConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS or SLB instance in the VPC.
   * 
   * @example
   * i-bp1h497hkijewv2***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC access authorization.
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

export class DescribeApiResponseBodyServiceConfig extends $dara.Model {
  /**
   * @remarks
   * The application name in AONE.
   * 
   * @example
   * ib-blank
   */
  aoneAppName?: string;
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   **DEFAULT**: the default header type in API Gateway
   * *   **CUSTOM**: a custom header type
   * *   **CLIENT**: the ContentType header type of the client
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
   * application/x-www-form-urlencoded; charset=UTF-8
   */
  contentTypeValue?: string;
  /**
   * @remarks
   * Configuration items of EventBridge
   */
  eventBridgeConfig?: DescribeApiResponseBodyServiceConfigEventBridgeConfig;
  /**
   * @remarks
   * Backend configuration items when the backend service is Function Compute
   */
  functionComputeConfig?: DescribeApiResponseBodyServiceConfigFunctionComputeConfig;
  /**
   * @remarks
   * Specifies whether to enable the Mock mode. Valid values:
   * 
   * *   **TRUE**: The Mock mode is enabled.
   * *   **FALSE**: The Mock mode is not enabled.
   * 
   * @example
   * TRUE
   */
  mock?: string;
  /**
   * @remarks
   * The simulated headers.
   */
  mockHeaders?: DescribeApiResponseBodyServiceConfigMockHeaders;
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
   * The information returned when the backend service is Object Storage Service (OSS).
   */
  ossConfig?: DescribeApiResponseBodyServiceConfigOssConfig;
  /**
   * @remarks
   * The URL used to call the back-end service. If the complete back-end service URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the value of ServiceAddress is **http://api.a.com:8080**.``
   * 
   * @example
   * http://api.a.com:8080
   */
  serviceAddress?: string;
  /**
   * @remarks
   * The HTTP method used to call a backend service. Valid values: GET, POST, DELETE, PUT, HEADER, TRACE, PATCH, CONNECT, and OPTIONS.
   * 
   * @example
   * POST
   */
  serviceHttpMethod?: string;
  /**
   * @example
   * /object/add
   */
  servicePath?: string;
  /**
   * @remarks
   * The protocol used by the backend service. Valid values: HTTP and HTTPS.
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
   * 1000
   */
  serviceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the VPC channel. Valid values:
   * 
   * *   **TRUE**: The VPC channel is enabled. You must create the corresponding VPC access authorization before you can enable a VPC channel.
   * *   **FALSE**: The VPC channel is not enabled.
   * 
   * @example
   * TRUE
   */
  serviceVpcEnable?: string;
  /**
   * @remarks
   * Configuration items related to VPC channels
   */
  vpcConfig?: DescribeApiResponseBodyServiceConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      aoneAppName: 'AoneAppName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneAppName: 'string',
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      eventBridgeConfig: DescribeApiResponseBodyServiceConfigEventBridgeConfig,
      functionComputeConfig: DescribeApiResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeApiResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      ossConfig: DescribeApiResponseBodyServiceConfigOssConfig,
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeApiResponseBodyServiceConfigVpcConfig,
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

export class DescribeApiResponseBodyServiceParametersServiceParameter extends $dara.Model {
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

export class DescribeApiResponseBodyServiceParameters extends $dara.Model {
  serviceParameter?: DescribeApiResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceParametersServiceParameter },
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

export class DescribeApiResponseBodyServiceParametersMapServiceParameterMap extends $dara.Model {
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

export class DescribeApiResponseBodyServiceParametersMap extends $dara.Model {
  serviceParameterMap?: DescribeApiResponseBodyServiceParametersMapServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceParametersMapServiceParameterMap },
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

export class DescribeApiResponseBodySystemParametersSystemParameter extends $dara.Model {
  /**
   * @remarks
   * The example value.
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
   * Client IP Address
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

export class DescribeApiResponseBodySystemParameters extends $dara.Model {
  systemParameter?: DescribeApiResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodySystemParametersSystemParameter },
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

export class DescribeApiResponseBodyTagListTag extends $dara.Model {
  /**
   * @remarks
   * Label key.
   * 
   * @example
   * APP
   */
  tagKey?: string;
  /**
   * @remarks
   * Label value.
   * 
   * @example
   * value3
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiResponseBodyTagList extends $dara.Model {
  tag?: DescribeApiResponseBodyTagListTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeApiResponseBodyTagListTag },
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

