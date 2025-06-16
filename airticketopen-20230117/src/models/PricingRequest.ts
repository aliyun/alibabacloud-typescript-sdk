// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PricingRequest extends $dara.Model {
  /**
   * @remarks
   * solution_id returned by Enrich
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

