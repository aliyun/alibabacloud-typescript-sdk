// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConstraintResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the constraint.
   * 
   * @example
   * cons-bp1yx7x42v****
   */
  constraintId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      constraintId: 'ConstraintId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

