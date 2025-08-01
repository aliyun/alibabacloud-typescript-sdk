// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListResponseBodyDataMethods extends $dara.Model {
  /**
   * @remarks
   * The controller of the method.
   * 
   * @example
   * com.alibaba.SayHelloController
   */
  methodController?: string;
  /**
   * @remarks
   * The name of the method.
   * 
   * @example
   * sayHello
   */
  name?: string;
  /**
   * @remarks
   * The data types of the parameters.
   */
  parameterTypes?: string[];
  /**
   * @remarks
   * The paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The methods.
   */
  requestMethods?: string[];
  /**
   * @remarks
   * The type of the return value.
   * 
   * @example
   * int
   */
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      requestMethods: { 'type': 'array', 'itemType': 'string' },
      returnType: 'string',
    };
  }

  validate() {
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

export class GetServiceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the Dubbo application.
   * 
   * @example
   * dubbo-application
   */
  dubboApplicationName?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  edasAppName?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * dubbo
   */
  group?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The methods.
   */
  methods?: GetServiceListResponseBodyDataMethods[];
  /**
   * @remarks
   * The type of the service registry.
   * 
   * @example
   * nacos
   */
  registryType?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * com.alibaba.xxx
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * dubbo
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the Spring application.
   * 
   * @example
   * spring-application
   */
  springApplicationName?: string;
  /**
   * @remarks
   * The version information.
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
      registryType: 'RegistryType',
      serviceName: 'ServiceName',
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
      methods: { 'type': 'array', 'itemType': GetServiceListResponseBodyDataMethods },
      registryType: 'string',
      serviceName: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data entries returned.
   */
  data?: GetServiceListResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
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
   * xxx-xxx-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetServiceListResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

