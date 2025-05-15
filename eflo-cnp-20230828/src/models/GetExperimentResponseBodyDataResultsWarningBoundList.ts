// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBodyDataResultsWarningBoundList extends $dara.Model {
  /**
   * @remarks
   * Iteration
   * 
   * @example
   * 10
   */
  iteration?: number;
  /**
   * @remarks
   * LOWER
   * 
   * @example
   * 14
   */
  lower?: number;
  /**
   * @remarks
   * UPPER
   * 
   * @example
   * 56
   */
  upper?: number;
  static names(): { [key: string]: string } {
    return {
      iteration: 'Iteration',
      lower: 'Lower',
      upper: 'Upper',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iteration: 'number',
      lower: 'number',
      upper: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

