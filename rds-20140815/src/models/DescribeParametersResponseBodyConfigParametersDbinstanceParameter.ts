// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyConfigParametersDBInstanceParameter extends $dara.Model {
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
   * 50
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
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

