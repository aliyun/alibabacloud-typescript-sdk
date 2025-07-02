// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos extends $dara.Model {
  currentVersion?: string;
  deviceId?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      deviceId: 'DeviceId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      deviceId: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

