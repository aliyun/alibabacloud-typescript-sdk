// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackGroupRequestParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retain stacks in a member when you remove the member from the folder.
   * 
   * Valid values:
   * 
   * *   true: retains the stacks.
   * *   false: deletes the stacks.
   * 
   * >  This parameter is required if the Enabled parameter is set to true.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The folders in which you want to use service-managed permissions to update stacks.
   * 
   * This parameter is required.
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

