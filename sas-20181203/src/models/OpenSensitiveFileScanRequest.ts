// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenSensitiveFileScanRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable sensitive file scan. Valid values:
   * 
   * *   **on**: enables sensitive file scan
   * *   **off**: disables sensitive file scan
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

