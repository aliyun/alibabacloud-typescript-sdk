// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackInstancesRequestParameterOverrides extends $dara.Model {
  /**
   * @remarks
   * The key of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the name that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * >-   ParameterOverrides is optional.
   * >-   If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the value that you specify when you create the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * >-  ParameterOverrides is optional.
   * >-  If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

