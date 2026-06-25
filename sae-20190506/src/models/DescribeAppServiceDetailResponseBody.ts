// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * arg0
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * java.lang.String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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

export class DescribeAppServiceDetailResponseBodyDataMethods extends $dara.Model {
  /**
   * @remarks
   * The class to which the method belongs.
   * 
   * @example
   * com.serverless.sae.controller.EchoController
   */
  methodController?: string;
  /**
   * @remarks
   * The method name.
   * 
   * @example
   * echo
   */
  name?: string;
  /**
   * @remarks
   * The details of the method.
   * 
   * @example
   * description
   */
  nameDetail?: string;
  /**
   * @remarks
   * The parameter definitions.
   */
  parameterDefinitions?: DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions[];
  /**
   * @remarks
   * The details of the parameters.
   */
  parameterDetails?: string[];
  /**
   * @remarks
   * The parameter types.
   */
  parameterTypes?: string[];
  /**
   * @remarks
   * The request paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The request methods.
   */
  requestMethods?: string[];
  /**
   * @remarks
   * The details of the returned data.
   * 
   * @example
   * test
   */
  returnDetails?: string;
  /**
   * @remarks
   * The return type.
   * 
   * @example
   * java.lang.String
   */
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      parameterDetails: 'ParameterDetails',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: { 'type': 'array', 'itemType': DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions },
      parameterDetails: { 'type': 'array', 'itemType': 'string' },
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      requestMethods: { 'type': 'array', 'itemType': 'string' },
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterDefinitions)) {
      $dara.Model.validateArray(this.parameterDefinitions);
    }
    if(Array.isArray(this.parameterDetails)) {
      $dara.Model.validateArray(this.parameterDetails);
    }
    if(Array.isArray(this.parameterTypes)) {
      $dara.Model.validateArray(this.parameterTypes);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.requestMethods)) {
      $dara.Model.validateArray(this.requestMethods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the Dubbo application.
   * 
   * @example
   * service-consumer
   */
  dubboApplicationName?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * cn-zhangjiakou-micro-service-******
   */
  edasAppName?: string;
  /**
   * @remarks
   * The service group. This is a custom parameter.
   * 
   * @example
   * springCloud
   */
  group?: string;
  /**
   * @remarks
   * The metadata. Example: `{side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}`
   * 
   * @example
   * {side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The list of methods.
   */
  methods?: DescribeAppServiceDetailResponseBodyDataMethods[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * service-provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The ports used by the service.
   */
  servicePorts?: number[];
  /**
   * @remarks
   * The protocol used by the service.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The tags of the service.
   */
  serviceTags?: string[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **dubbo**
   * 
   * - **springCloud**
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the Spring Cloud application.
   * 
   * @example
   * service-provider
   */
  springApplicationName?: string;
  /**
   * @remarks
   * The service version. This is a custom parameter.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dubboApplicationName: 'DubboApplicationName',
      edasAppName: 'EdasAppName',
      group: 'Group',
      metadata: 'Metadata',
      methods: 'Methods',
      serviceName: 'ServiceName',
      servicePorts: 'ServicePorts',
      serviceProtocol: 'ServiceProtocol',
      serviceTags: 'ServiceTags',
      serviceType: 'ServiceType',
      springApplicationName: 'SpringApplicationName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboApplicationName: 'string',
      edasAppName: 'string',
      group: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      methods: { 'type': 'array', 'itemType': DescribeAppServiceDetailResponseBodyDataMethods },
      serviceName: 'string',
      servicePorts: { 'type': 'array', 'itemType': 'number' },
      serviceProtocol: 'string',
      serviceTags: { 'type': 'array', 'itemType': 'string' },
      serviceType: 'string',
      springApplicationName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    if(Array.isArray(this.servicePorts)) {
      $dara.Model.validateArray(this.servicePorts);
    }
    if(Array.isArray(this.serviceTags)) {
      $dara.Model.validateArray(this.serviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API call or a POP error code. Valid values:
   * 
   * - **2xx**: success.
   * 
   * - **3xx**: redirection.
   * 
   * - **4xx**: client error.
   * 
   * - **5xx**: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeAppServiceDetailResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * 
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the list of **error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B2C7874F-F109-5B34-8618-2C10BBA2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the metadata was obtained. Valid values:
   * 
   * - **true**: The metadata was obtained.
   * 
   * - **false**: The metadata failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The call chain ID. Use this ID for a term query of call details.
   * 
   * @example
   * 0b16399316402420740034918e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAppServiceDetailResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

