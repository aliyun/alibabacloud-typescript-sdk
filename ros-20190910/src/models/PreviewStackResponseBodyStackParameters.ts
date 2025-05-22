// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewStackResponseBodyStackParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ALIYUN::AccountId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
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

