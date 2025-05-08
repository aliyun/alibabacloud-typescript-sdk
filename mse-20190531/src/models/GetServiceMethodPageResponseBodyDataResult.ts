// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceMethodPageResponseBodyDataResultParameterDefinitions } from "./GetServiceMethodPageResponseBodyDataResultParameterDefinitions";


export class GetServiceMethodPageResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * com.alibabacloud.mse.demo.a.AController
   */
  methodController?: string;
  /**
   * @example
   * aMethod
   */
  name?: string;
  /**
   * @example
   * 示例接口描述信息。
   */
  nameDetail?: string;
  parameterDefinitions?: GetServiceMethodPageResponseBodyDataResultParameterDefinitions[];
  parameterDetails?: string[];
  parameterTypes?: string[];
  paths?: string[];
  requestMethods?: string[];
  /**
   * @example
   * java.lang.String
   */
  returnDetails?: string;
  /**
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
      parameterDefinitions: { 'type': 'array', 'itemType': GetServiceMethodPageResponseBodyDataResultParameterDefinitions },
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

