// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeSetResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the parameter.
   * 
   * @example
   * ALIYUN::Region
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
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

