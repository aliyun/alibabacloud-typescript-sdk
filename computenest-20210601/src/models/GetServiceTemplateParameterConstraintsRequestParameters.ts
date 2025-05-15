// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTemplateParameterConstraintsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter. If you do not specify Parameters, the parameters and values in the template are used.
   * 
   * >  Parameters is an optional parameter. ParameterKey is required if you specify Parameters.
   * 
   * @example
   * InstanceType
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value that is defined in the template.
   * 
   * >  Parameters is an optional parameter. ParameterValue is required if you specify Parameters.
   * 
   * @example
   * cn-hangzhou-j
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

