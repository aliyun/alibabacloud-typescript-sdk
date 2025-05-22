// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewStackRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter N. If you do not specify the name and value of a parameter, Resource Orchestration Service (ROS) uses the default name and value that are specified in the template. Maximum value of N: 200.
   * 
   * > If you specify Parameters, you must specify Parameters.N.ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::AccountId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N. Maximum value of N: 200.
   * 
   * > If you specify Parameters, you must specify Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 151266687691****
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

