// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display non-essential information. Non-essential information currently includes labels.
   * Valid values:
   * 
   * - false (default): Does not display non-essential information.
   * 
   * - true: Displays non-essential information.
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

