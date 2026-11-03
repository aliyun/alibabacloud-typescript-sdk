// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve metrics, parameters, and labels. Default value: false.
   * 
   * @example
   * true
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

