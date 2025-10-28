// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMethodsResponseBodyServiceMethodListServiceMethodInputParams extends $dara.Model {
  inputParam?: string[];
  static names(): { [key: string]: string } {
    return {
      inputParam: 'InputParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParam: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.inputParam)) {
      $dara.Model.validateArray(this.inputParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes extends $dara.Model {
  paramType?: string[];
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paramType)) {
      $dara.Model.validateArray(this.paramType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBodyServiceMethodListServiceMethod extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * App
   */
  appName?: string;
  inputParams?: ListMethodsResponseBodyServiceMethodListServiceMethodInputParams;
  /**
   * @remarks
   * The name of the service method.
   * 
   * @example
   * echo
   */
  methodName?: string;
  /**
   * @remarks
   * The return type of the service method.
   * 
   * @example
   * java.lang.string
   */
  output?: string;
  paramTypes?: ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * com.alibaba.edas.demo.EchoService
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      inputParams: 'InputParams',
      methodName: 'MethodName',
      output: 'Output',
      paramTypes: 'ParamTypes',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      inputParams: ListMethodsResponseBodyServiceMethodListServiceMethodInputParams,
      methodName: 'string',
      output: 'string',
      paramTypes: ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes,
      serviceName: 'string',
    };
  }

  validate() {
    if(this.inputParams && typeof (this.inputParams as any).validate === 'function') {
      (this.inputParams as any).validate();
    }
    if(this.paramTypes && typeof (this.paramTypes as any).validate === 'function') {
      (this.paramTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBodyServiceMethodList extends $dara.Model {
  serviceMethod?: ListMethodsResponseBodyServiceMethodListServiceMethod[];
  static names(): { [key: string]: string } {
    return {
      serviceMethod: 'ServiceMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMethod: { 'type': 'array', 'itemType': ListMethodsResponseBodyServiceMethodListServiceMethod },
    };
  }

  validate() {
    if(Array.isArray(this.serviceMethod)) {
      $dara.Model.validateArray(this.serviceMethod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message that indicates whether the request is successful.
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
   * 69AD2AA7-DB47-449B-941B-B14409DF****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about service methods.
   */
  serviceMethodList?: ListMethodsResponseBodyServiceMethodList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      serviceMethodList: 'ServiceMethodList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      serviceMethodList: ListMethodsResponseBodyServiceMethodList,
    };
  }

  validate() {
    if(this.serviceMethodList && typeof (this.serviceMethodList as any).validate === 'function') {
      (this.serviceMethodList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

