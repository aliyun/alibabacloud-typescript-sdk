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
   * The name of the parameter.
   * 
   * @example
   * arg0
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter.
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
   * The name of the method.
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
   * The definition of the parameter.
   */
  parameterDefinitions?: DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions[];
  /**
   * @remarks
   * The details of the parameters.
   */
  parameterDetails?: string[];
  /**
   * @remarks
   * The types of the parameters.
   */
  parameterTypes?: string[];
  /**
   * @remarks
   * The request paths. Format:
   * 
   * `/path`
   */
  paths?: string[];
  /**
   * @remarks
   * The request methods. Valid values:
   * 
   * *   **GET**
   * *   **ALL**
   */
  requestMethods?: string[];
  /**
   * @remarks
   * The details of the response.
   * 
   * @example
   * test
   */
  returnDetails?: string;
  /**
   * @remarks
   * The data format of the response.
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
   * The name of the application.
   * 
   * @example
   * cn-zhangjiakou-micro-service-******
   */
  edasAppName?: string;
  /**
   * @remarks
   * The group to which the service belongs. You can create a custom group.
   * 
   * @example
   * springCloud
   */
  group?: string;
  /**
   * @remarks
   * The metadata. Example: `{side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}`.
   * 
   * @example
   * {side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The methods.
   */
  methods?: DescribeAppServiceDetailResponseBodyDataMethods[];
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * service-provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The port used by the service.
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
   * The tag of the service.
   */
  serviceTags?: string[];
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   **dubbo**
   * *   **springCloud**
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
   * The version of the service. You can create a custom version.
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
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: indicates that the call was successful.
   * - **3xx**: indicates that the call was redirected.
   * - **4xx**: indicates that the call failed.
   * - **5xx**: indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: DescribeAppServiceDetailResponseBodyData;
  /**
   * @remarks
   * The returned error code. Valid values:
   * 
   * - If the call is successful, the **ErrorCode** parameter is not returned.
   * - If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2C7874F-F109-5B34-8618-2C10BBA2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the meta data was obtained. Valid values:
   * 
   * *   **true**: The metadata was obtained.
   * *   **false**: The metadata failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
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

