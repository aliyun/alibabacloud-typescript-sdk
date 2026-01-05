// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConstraintRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      constraintId: 'ConstraintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

