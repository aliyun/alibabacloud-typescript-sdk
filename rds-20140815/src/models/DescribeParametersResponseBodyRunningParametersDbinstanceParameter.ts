// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyRunningParametersDBInstanceParameter extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 100
   */
  parameterDefaultValue?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * This parameter sets the default fill factor value at the server scope. A fill factor is provided to optimize index data storage and performance.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * fill factor
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 0
   */
  parameterValue?: string;
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * 1~100
   */
  parameterValueRange?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDefaultValue: 'ParameterDefaultValue',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      parameterValueRange: 'ParameterValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDefaultValue: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      parameterValueRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

