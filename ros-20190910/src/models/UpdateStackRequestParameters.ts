// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of parameter N. If you do not specify the name and value of a parameter, ROS uses the default name and value in the template.
   * 
   * Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N. Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

