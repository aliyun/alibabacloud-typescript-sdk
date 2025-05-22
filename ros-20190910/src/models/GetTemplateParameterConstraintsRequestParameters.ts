// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of parameter N in the template.
   * 
   * >  The Parameters parameter is optional. If you specify the Parameters parameter, you must specify the Parameters.N.ParameterKey parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ZoneInfo
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N in the template.
   * 
   * >  The Parameters parameter is optional. If you specify the Parameters parameter, you must specify the Parameters.N.ParameterValue parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
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

