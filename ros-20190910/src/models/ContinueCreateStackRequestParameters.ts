// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ContinueCreateStackRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of template parameter N that you want to use to override a specific parameter. If you do not specify the name and value of a template parameter, ROS uses the name and value specified in the previous operation that was performed to create the stack. Maximum value of N: 200.
   * 
   * > This parameter takes effect only when Mode is set to Recreate.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of template parameter N that you want to use to override a specific parameter. Maximum value of N: 200.
   * 
   * For ROS stacks, the template parameters that you use to override specific parameters are subject to the following limits:
   * 
   * *   You cannot change the condition values in the Conditions section of a template from true to false or from false to true.
   * *   The template parameters can be referenced only by resources that ROS continues to create.
   * 
   * > This parameter takes effect only when Mode is set to Recreate.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

