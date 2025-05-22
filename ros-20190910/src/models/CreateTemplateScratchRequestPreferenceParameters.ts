// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateScratchRequestPreferenceParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * > 
   * 
   * *   PreferenceParameters is optional. If you specify PreferenceParameters, you must specify ParameterKey and ParameterValue.
   * 
   * *   You must set ParameterKey to DeletionPolicy when TemplateScratchType is set to ResourceImport.
   * 
   * This parameter is required.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value. The value is an assignment to the parameter key.
   * 
   * For more information about the valid values of ParameterValue, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >  PreferenceParameters is optional. If you specify PreferenceParameters, you must specify ParameterKey and ParameterValue.
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

