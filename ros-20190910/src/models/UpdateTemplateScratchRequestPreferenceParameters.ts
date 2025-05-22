// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateScratchRequestPreferenceParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >- PreferenceParameters is optional. If you specify PreferenceParameters, you must specify both ParameterKey and ParameterValue.
   * > - If you set TemplateScratchType to ResourceImport, you must set ParameterKey to DeletionPolicy.
   * 
   * This parameter is required.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value. The value of ParameterValue varies based on the value of ParameterKey.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >  PreferenceParameters is optional. If you specify PreferenceParameters, you must specify both ParameterKey and ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Retain
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

