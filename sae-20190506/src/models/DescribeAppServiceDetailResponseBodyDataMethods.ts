// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions } from "./DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions";


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

