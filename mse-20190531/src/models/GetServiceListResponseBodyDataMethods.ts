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

