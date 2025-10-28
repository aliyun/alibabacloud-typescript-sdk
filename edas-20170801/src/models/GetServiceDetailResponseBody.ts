// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceDetailResponseBodyDataMethodsReturnDefinition extends $dara.Model {
  /**
   * @remarks
   * The ID of the return value.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The type of the response.
   * 
   * @example
   * foo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class GetServiceDetailResponseBodyDataMethods extends $dara.Model {
  /**
   * @remarks
   * The controllers.
   * 
   * @example
   * com.aliware.edas.DemoController
   */
  methodController?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * feign2
   */
  name?: string;
  /**
   * @remarks
   * The specific name.
   * 
   * @example
   * test
   */
  nameDetail?: string;
  /**
   * @remarks
   * The parameter definitions.
   * 
   * @example
   * [{"description":"","name":"arg0","type":"java.lang.String"}]
   */
  parameterDefinitions?: string;
  /**
   * @remarks
   * The parameter details.
   * 
   * @example
   * {}
   */
  parameterDetails?: string;
  /**
   * @remarks
   * The parameter names.
   * 
   * @example
   * test
   */
  parameterNames?: string;
  /**
   * @remarks
   * The parameter types.
   * 
   * @example
   * ["java.lang.String"]
   */
  parameterTypes?: string;
  /**
   * @remarks
   * The method paths.
   * 
   * @example
   * ["/consumer-echo/feign/{str}"]
   */
  paths?: string;
  /**
   * @remarks
   * The request methods.
   * 
   * @example
   * GET
   */
  requestMethods?: string;
  /**
   * @remarks
   * The definition of the value returned by the method.
   */
  returnDefinition?: GetServiceDetailResponseBodyDataMethodsReturnDefinition;
  /**
   * @remarks
   * The response details.
   * 
   * @example
   * test
   */
  returnDetails?: string;
  /**
   * @remarks
   * The type of the response.
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
      parameterNames: 'ParameterNames',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDefinition: 'ReturnDefinition',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: 'string',
      parameterDetails: 'string',
      parameterNames: 'string',
      parameterTypes: 'string',
      paths: 'string',
      requestMethods: 'string',
      returnDefinition: GetServiceDetailResponseBodyDataMethodsReturnDefinition,
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  validate() {
    if(this.returnDefinition && typeof (this.returnDefinition as any).validate === 'function') {
      (this.returnDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the Dubbo application.
   * 
   * @example
   * cartservice
   */
  dubboApplicationName?: string;
  /**
   * @remarks
   * The name of the Enterprise Distributed Application Service (EDAS) application.
   * 
   * @example
   * test123
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
  metadata?: string;
  /**
   * @remarks
   * The methods.
   */
  methods?: GetServiceDetailResponseBodyDataMethods[];
  /**
   * @remarks
   * The type of the service registry.
   * 
   * @example
   * agent
   */
  registryType?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * edas.service.consumer
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the Spring application.
   * 
   * @example
   * edas.service.consumer
   */
  springApplicationName?: string;
  /**
   * @remarks
   * The version number.
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
      metadata: 'string',
      methods: { 'type': 'array', 'itemType': GetServiceDetailResponseBodyDataMethods },
      registryType: 'string',
      serviceName: 'string',
      serviceType: 'string',
      springApplicationName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data structure.
   */
  data?: GetServiceDetailResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceDetailResponseBodyData,
      message: 'string',
      success: 'boolean',
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

