// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConstraintRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the constraint.
   * 
   * Format: { "LocalRoleName": "\\<role_name>" }.
   * 
   * This parameter is required.
   * 
   * @example
   * { "LocalRoleName": "TestRole" }
   */
  config?: string;
  /**
   * @remarks
   * The ID of the constraint.
   * 
   * This parameter is required.
   * 
   * @example
   * cons-bp1yx7x42v****
   */
  constraintId?: string;
  /**
   * @remarks
   * The description of the constraint.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * Launch as local role TestRole
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      constraintId: 'ConstraintId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      constraintId: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

