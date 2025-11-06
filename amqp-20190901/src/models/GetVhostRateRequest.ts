// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVhostRateRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostNames?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      vhostNames: 'VhostNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      instanceId: 'string',
      vhostNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.vhostNames) {
      $dara.Model.validateMap(this.vhostNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

