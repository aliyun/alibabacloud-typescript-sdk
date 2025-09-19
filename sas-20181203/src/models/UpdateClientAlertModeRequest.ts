// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientAlertModeRequest extends $dara.Model {
  /**
   * @remarks
   * The protection mode. Valid values:
   * 
   * *   **strict**: The strict mode. False positives may be generated. We recommend that you enable this mode during major events.
   * *   **balance**: The balanced mode. More risks can be detected with less false positives in this mode.
   * 
   * @example
   * balance
   */
  mode?: string;
  /**
   * @remarks
   * The UUIDs of servers.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

