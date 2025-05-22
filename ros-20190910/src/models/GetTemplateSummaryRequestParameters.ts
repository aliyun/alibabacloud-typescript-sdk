// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateSummaryRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of parameter N that is defined in the template. If you do not specify the name and value of a parameter, Resource Orchestration Service (ROS) uses the default name and value that are defined in the template.
   * 
   * Maximum value of N: 200.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * InstanceId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that is defined in the template.
   * 
   * Maximum value of N: 200.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * i-rotp2e20whfrs2****
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

