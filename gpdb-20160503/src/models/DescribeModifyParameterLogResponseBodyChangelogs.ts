// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyParameterLogResponseBodyChangelogs extends $dara.Model {
  /**
   * @remarks
   * The effective time.
   * 
   * @example
   * 2020-05-05T11:22:22Z
   */
  effectTime?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * testkey
   */
  parameterName?: string;
  /**
   * @remarks
   * Indicates whether the modification takes effect.
   * 
   * @example
   * true
   */
  parameterValid?: string;
  /**
   * @remarks
   * The original value of the parameter.
   * 
   * @example
   * 100
   */
  parameterValueAfter?: string;
  /**
   * @remarks
   * The new value of the parameter.
   * 
   * @example
   * 200
   */
  parameterValueBefore?: string;
  static names(): { [key: string]: string } {
    return {
      effectTime: 'EffectTime',
      parameterName: 'ParameterName',
      parameterValid: 'ParameterValid',
      parameterValueAfter: 'ParameterValueAfter',
      parameterValueBefore: 'ParameterValueBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectTime: 'string',
      parameterName: 'string',
      parameterValid: 'string',
      parameterValueAfter: 'string',
      parameterValueBefore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

