// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientAlertModeRequest extends $dara.Model {
  /**
   * @remarks
   * The protection mode. Valid values:
   * 
   * - **strict**: Strict mode. This mode has a certain risk of false positives. Use this mode during critical event protection periods.
   * - **balance**: Balanced mode. This mode detects more suspicious risks while reducing false positives.
   * 
   * @example
   * strict
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

