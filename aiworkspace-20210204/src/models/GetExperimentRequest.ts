// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve the latest run information for the experiment.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

