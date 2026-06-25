// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to get information about metrics, parameters, and labels. This parameter is optional. The default value is false.
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

