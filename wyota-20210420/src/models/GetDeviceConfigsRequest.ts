// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceConfigsRequest extends $dara.Model {
  deviceId?: string;
  networkType?: string;
  region?: string;
  serialNo?: string;
  urclVersion?: string;
  userCustomId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      networkType: 'NetworkType',
      region: 'Region',
      serialNo: 'SerialNo',
      urclVersion: 'UrclVersion',
      userCustomId: 'UserCustomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      networkType: 'string',
      region: 'string',
      serialNo: 'string',
      urclVersion: 'string',
      userCustomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

