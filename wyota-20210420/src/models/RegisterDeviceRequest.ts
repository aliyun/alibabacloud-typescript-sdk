// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterDeviceRequest extends $dara.Model {
  bluetooth?: string;
  buildId?: string;
  chipId?: string;
  clientId?: string;
  clientType?: number;
  cpu?: string;
  customId?: string;
  etherMac?: string;
  memory?: string;
  model?: string;
  serialNo?: string;
  storage?: string;
  token?: string;
  wlan?: string;
  static names(): { [key: string]: string } {
    return {
      bluetooth: 'Bluetooth',
      buildId: 'BuildId',
      chipId: 'ChipId',
      clientId: 'ClientId',
      clientType: 'ClientType',
      cpu: 'Cpu',
      customId: 'CustomId',
      etherMac: 'EtherMac',
      memory: 'Memory',
      model: 'Model',
      serialNo: 'SerialNo',
      storage: 'Storage',
      token: 'Token',
      wlan: 'Wlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bluetooth: 'string',
      buildId: 'string',
      chipId: 'string',
      clientId: 'string',
      clientType: 'number',
      cpu: 'string',
      customId: 'string',
      etherMac: 'string',
      memory: 'string',
      model: 'string',
      serialNo: 'string',
      storage: 'string',
      token: 'string',
      wlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

