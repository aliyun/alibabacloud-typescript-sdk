// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display optional information. Optional information currently includes Labels.
   * 
   * Valid values:
   * - false (default): Optional information is not displayed.
   * - true: Optional information is displayed.
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

