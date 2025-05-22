// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * ALIYUN::Region
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * cn-hangzhou
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

