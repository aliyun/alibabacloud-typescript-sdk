// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesResponseBodyDataConnectConfigs extends $dara.Model {
  connectScript?: string;
  peripheralPid?: string;
  peripheralVid?: string;
  redirectPolicy?: number;
  static names(): { [key: string]: string } {
    return {
      connectScript: 'ConnectScript',
      peripheralPid: 'PeripheralPid',
      peripheralVid: 'PeripheralVid',
      redirectPolicy: 'RedirectPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectScript: 'string',
      peripheralPid: 'string',
      peripheralVid: 'string',
      redirectPolicy: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

