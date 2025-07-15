// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyConstantParametersConstantParameter extends $dara.Model {
  /**
   * @remarks
   * The constant value.
   * 
   * @example
   * constance
   */
  constantValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 123
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
   * The name of the backend service parameter.
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

export class DescribeDeployedApiResponseBodyConstantParameters extends $dara.Model {
  constantParameter?: DescribeDeployedApiResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyConstantParametersConstantParameter },
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

export class DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter extends $dara.Model {
  /**
   * @remarks
   * Example
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
   * 123
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
   * The name of the custom system parameter.
   * 
   * @example
   * appid
   */
  parameterName?: string;
  /**
   * @remarks
   * The name of the corresponding backend parameter.
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

export class DescribeDeployedApiResponseBodyCustomSystemParameters extends $dara.Model {
  customSystemParameter?: DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter },
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

export class DescribeDeployedApiResponseBodyErrorCodeSamplesErrorCodeSample extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Error
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message
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

export class DescribeDeployedApiResponseBodyErrorCodeSamples extends $dara.Model {
  errorCodeSample?: DescribeDeployedApiResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyErrorCodeSamplesErrorCodeSample },
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

export class DescribeDeployedApiResponseBodyOpenIdConnectConfig extends $dara.Model {
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

export class DescribeDeployedApiResponseBodyRequestConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter takes effect only when the RequestMode parameter is set to MAPPING.
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
   * https://apigateway.aliyun.com/models/3a240a127dccXXXXXXXX947b4095/9e2df550e85b4121a79XXXXXxaab
   */
  bodyModel?: string;
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
   * The API request path. If the complete API URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the API request path is ` /object/add  `.
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

export class DescribeDeployedApiResponseBodyRequestParametersRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The name of the API parameter.
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
   * Example
   * 
   * @example
   * 20
   */
  demoValue?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * parameter description
   */
  description?: string;
  /**
   * @remarks
   * The order in the document.
   * 
   * @example
   * 0
   */
  docOrder?: number;
  /**
   * @remarks
   * Specifies whether the document is public. Valid values: PUBLIC and PRIVATE.
   * 
   * @example
   * PUBLIC
   */
  docShow?: string;
  /**
   * @remarks
   * The hash values that can be entered when ParameterType is set to Int, Long, Float, Double, or String. Separate different values with commas (,), such as 1,2,3,4,9 or A,B,C,E,F.
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
   * The maximum parameter length when ParameterType is set to String.
   * 
   * @example
   * 123456
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum parameter value when ParameterType is set to Int, Long, Float, or Double.
   * 
   * @example
   * 123456
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum parameter length when ParameterType is set to String.
   * 
   * @example
   * 123456
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum parameter value when ParameterType is set to Int, Long, Float, or Double.
   * 
   * @example
   * 123456
   */
  minValue?: number;
  /**
   * @remarks
   * The type of a request parameter. Valid values: String, Int, Long, Float, Double, and Boolean.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The regular expression used for parameter validation when ParameterType is set to String.
   * 
   * @example
   * xxx
   */
  regularExpression?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values: REQUIRED and OPTIONAL.
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

export class DescribeDeployedApiResponseBodyRequestParameters extends $dara.Model {
  requestParameter?: DescribeDeployedApiResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyRequestParametersRequestParameter },
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

export class DescribeDeployedApiResponseBodyResultDescriptionsResultDescription extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * result description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether a subnode exists.
   * 
   * @example
   * false
   */
  hasChild?: boolean;
  /**
   * @remarks
   * The ID of the result.
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
   * DEMO
   */
  key?: string;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   * 
   * @example
   * true
   */
  mandatory?: boolean;
  /**
   * @remarks
   * The name of the result.
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
   * The type of the result.
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

export class DescribeDeployedApiResponseBodyResultDescriptions extends $dara.Model {
  resultDescription?: DescribeDeployedApiResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyResultDescriptionsResultDescription },
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

export class DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig extends $dara.Model {
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
   * application/x-www-form-urlencoded; charset=UTF-8
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
   * The region where the API is located.
   * 
   * @example
   * cn-beijing
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

export class DescribeDeployedApiResponseBodyServiceConfigMockHeadersMockHeader extends $dara.Model {
  /**
   * @remarks
   * The name of the HTTP header parameter.
   * 
   * @example
   * Content-Type
   */
  headerName?: string;
  /**
   * @remarks
   * The value of the HTTP header parameter.
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

export class DescribeDeployedApiResponseBodyServiceConfigMockHeaders extends $dara.Model {
  mockHeader?: DescribeDeployedApiResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyServiceConfigMockHeadersMockHeader },
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

export class DescribeDeployedApiResponseBodyServiceConfigVpcConfig extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApiResponseBodyServiceConfig extends $dara.Model {
  /**
   * @remarks
   * Backend configuration items when the backend service is Function Compute
   */
  functionComputeConfig?: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig;
  /**
   * @remarks
   * Specifies whether to enable the Mock mode. Valid values:
   * 
   * *   **TRUE: The Mock mode is enabled.**
   * *   **FALSE: The Mock mode is not enabled.
   * 
   * @example
   * TRUE
   */
  mock?: string;
  /**
   * @remarks
   * The simulated Headers.
   */
  mockHeaders?: DescribeDeployedApiResponseBodyServiceConfigMockHeaders;
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
  vpcConfig?: DescribeDeployedApiResponseBodyServiceConfigVpcConfig;
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
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
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
      functionComputeConfig: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeDeployedApiResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeDeployedApiResponseBodyServiceConfigVpcConfig,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.functionComputeConfig && typeof (this.functionComputeConfig as any).validate === 'function') {
      (this.functionComputeConfig as any).validate();
    }
    if(this.mockHeaders && typeof (this.mockHeaders as any).validate === 'function') {
      (this.mockHeaders as any).validate();
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

export class DescribeDeployedApiResponseBodyServiceParametersServiceParameter extends $dara.Model {
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
   * The data type of the back-end service parameter.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The name of the backend service parameter.
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

export class DescribeDeployedApiResponseBodyServiceParameters extends $dara.Model {
  serviceParameter?: DescribeDeployedApiResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyServiceParametersServiceParameter },
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

export class DescribeDeployedApiResponseBodyServiceParametersMapServiceParameterMap extends $dara.Model {
  /**
   * @remarks
   * The name of the front-end input parameter.
   * 
   * @example
   * sex
   */
  requestParameterName?: string;
  /**
   * @remarks
   * The name of the backend service parameter.
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

export class DescribeDeployedApiResponseBodyServiceParametersMap extends $dara.Model {
  serviceParameterMap?: DescribeDeployedApiResponseBodyServiceParametersMapServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyServiceParametersMapServiceParameterMap },
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

export class DescribeDeployedApiResponseBodySystemParametersSystemParameter extends $dara.Model {
  /**
   * @remarks
   * Examples
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
   * QueryParamDTO
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
   * The name of the corresponding backend parameter.
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

export class DescribeDeployedApiResponseBodySystemParameters extends $dara.Model {
  systemParameter?: DescribeDeployedApiResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodySystemParametersSystemParameter },
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

