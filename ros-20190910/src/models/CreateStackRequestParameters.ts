// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The key of parameter N that is defined in the template. If you do not specify the name and value of a parameter, ROS uses the default name and value that are specified in the template.
   * 
   * Maximum value of N: 200.\\
   * The name must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that is defined in the template.
   * 
   * Maximum value of N: 200.\\
   * The value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * i-xxxxxx
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

