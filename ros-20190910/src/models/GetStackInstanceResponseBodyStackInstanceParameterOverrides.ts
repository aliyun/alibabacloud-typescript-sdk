// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackInstanceResponseBodyStackInstanceParameterOverrides extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter that is used to override a specific parameter.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter that is used to override a specific parameter.
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

