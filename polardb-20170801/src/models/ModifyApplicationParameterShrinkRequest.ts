// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationParameterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * name
   */
  parameterName?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value
   */
  parameterValue?: string;
  /**
   * @remarks
   * The list of parameter names and values for modifying multiple parameters.
   */
  parametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      parametersShrink: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      parametersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

