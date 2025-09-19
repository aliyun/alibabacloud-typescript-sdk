// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientAlertModeRequest extends $dara.Model {
  /**
   * @remarks
   * The protection mode. Valid values:
   * 
   * *   **strict**: The strict mode. False positives may be generated. We recommend that you enable this mode during major events.
   * *   **balance**: The balanced mode. More risks can be detected with less false positives in this mode.
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

