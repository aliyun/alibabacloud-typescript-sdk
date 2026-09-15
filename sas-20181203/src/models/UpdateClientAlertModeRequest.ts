// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientAlertModeRequest extends $dara.Model {
  /**
   * @remarks
   * The protection mode. Valid values:
   * 
   * - **strict**: Strict mode. Defense mode has a risk of false positives. Use Defense mode during critical event protection periods.
   * - **balance**: Balanced mode. Defense mode detects more suspicious risks while reducing false positives.
   * 
   * @example
   * balance
   */
  mode?: string;
  /**
   * @remarks
   * The list of server UUIDs.
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

