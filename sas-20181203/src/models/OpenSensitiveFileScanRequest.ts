// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenSensitiveFileScanRequest extends $dara.Model {
  /**
   * @remarks
   * The switch operation. Valid values:
   * 
   * - **on**: Enable.
   * - **off**: Disable.
   * 
   * @example
   * on
   */
  switchOn?: string;
  static names(): { [key: string]: string } {
    return {
      switchOn: 'SwitchOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchOn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

