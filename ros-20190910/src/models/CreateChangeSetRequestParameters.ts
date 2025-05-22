// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChangeSetRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The key of parameter N that is defined in the template. If you do not specify the key and value of a parameter, ROS uses the default name and value that are defined in the template. Maximum value of N: 200.
   * 
   * >  Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that is defined in the template. Maximum value of N: 200.
   * 
   * >  Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterValue.
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

