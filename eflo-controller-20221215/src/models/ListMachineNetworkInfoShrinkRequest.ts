// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoShrinkRequest extends $dara.Model {
  machineHpnInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      machineHpnInfoShrink: 'MachineHpnInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineHpnInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

