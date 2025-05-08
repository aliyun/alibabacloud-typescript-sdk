// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthPolicyResponseBodyDataResultAuthRuleMethod extends $dara.Model {
  /**
   * @remarks
   * The group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * The method name.
   * 
   * @example
   * hello
   */
  name?: string;
  /**
   * @remarks
   * The types of request parameters.
   */
  parameterTypes?: string[];
  /**
   * @remarks
   * The type of the return value.
   * 
   * @example
   * Boolean
   */
  returnType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * spring-cloud-a
   */
  serviceName?: string;
  /**
   * @remarks
   * The method version.
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
      parameterTypes: 'ParameterTypes',
      returnType: 'ReturnType',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      returnType: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterTypes)) {
      $dara.Model.validateArray(this.parameterTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

