// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample extends $dara.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * Error
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * Unauthorized
   */
  description?: string;
  /**
   * @remarks
   * The returned error message.
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

export class DescribeApiDocResponseBodyErrorCodeSamples extends $dara.Model {
  errorCodeSample?: DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample },
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

export class DescribeApiDocResponseBodyRequestConfig extends $dara.Model {
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
   * The protocol type supported by the API. Valid values: HTTP and HTTPS. Separate multiple values with commas (,), such as "HTTP,HTTPS".
   * 
   * @example
   * HTTP
   */
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
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

export class DescribeApiDocResponseBodyRequestParametersRequestParameter extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter in the API request.
   * 
   * @example
   * Length
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
   * Parameters
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
   * The maximum length.
   * 
   * @example
   * 123456
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 200
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum length.
   * 
   * @example
   * 2
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 123456
   */
  minValue?: number;
  /**
   * @remarks
   * The data type of the parameter.
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
   * Indicates whether the parameter is required.
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

export class DescribeApiDocResponseBodyRequestParameters extends $dara.Model {
  requestParameter?: DescribeApiDocResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeApiDocResponseBodyRequestParametersRequestParameter },
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

export class DescribeApiDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * b24be7e59a104e52bffbf432cc9272af
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API
   * 
   * @example
   * ObtainKeywordQRCodeAddress
   */
  apiName?: string;
  /**
   * @remarks
   * The security authentication method. Valid values: APP, ANONYMOUS, and APPOPENID, indicating respectively Alibaba Cloud application authentication, anonymous authentication, and third-party OpenID Connect account authentication.
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * The publishing time.
   * 
   * @example
   * 2022-07-13T16:00:33Z
   */
  deployedTime?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * Lynk\\&Co Digital Mall OMS-UAT
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
   */
  errorCodeSamples?: DescribeApiDocResponseBodyErrorCodeSamples;
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
   * f51d08c5b7c84342905544ebaec26d35
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * Member Age Transaction Service
   */
  groupName?: string;
  /**
   * @remarks
   * The region ID of the API group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The returned API frontend definition. It is an array consisting of RequestConfig data.
   */
  requestConfig?: DescribeApiDocResponseBodyRequestConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F253FB5F-9AE1-5DDA-99B5-46BE00A3719E
   */
  requestId?: string;
  /**
   * @remarks
   * The returned frontend input parameters in the API. It is an array consisting of RequestParameter data.
   */
  requestParameters?: DescribeApiDocResponseBodyRequestParameters;
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
   * The return value type.
   * 
   * @example
   * JSON
   */
  resultType?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * Indicates whether the API is public. Valid values: PUBLIC and PRIVATE.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      deployedTime: 'DeployedTime',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiDocResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      requestConfig: DescribeApiDocResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeApiDocResponseBodyRequestParameters,
      resultSample: 'string',
      resultType: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  validate() {
    if(this.errorCodeSamples && typeof (this.errorCodeSamples as any).validate === 'function') {
      (this.errorCodeSamples as any).validate();
    }
    if(this.requestConfig && typeof (this.requestConfig as any).validate === 'function') {
      (this.requestConfig as any).validate();
    }
    if(this.requestParameters && typeof (this.requestParameters as any).validate === 'function') {
      (this.requestParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

