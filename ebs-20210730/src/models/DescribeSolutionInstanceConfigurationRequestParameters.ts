// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSolutionInstanceConfigurationRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
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

