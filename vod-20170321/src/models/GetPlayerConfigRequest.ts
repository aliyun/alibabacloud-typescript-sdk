// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayerConfigRequest extends $dara.Model {
  apiVersion?: string;
  authInfo?: string;
  authTimestamp?: number;
  deviceBrand?: string;
  deviceModel?: string;
  osName?: string;
  reserved?: string;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      authInfo: 'AuthInfo',
      authTimestamp: 'AuthTimestamp',
      deviceBrand: 'DeviceBrand',
      deviceModel: 'DeviceModel',
      osName: 'OsName',
      reserved: 'Reserved',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      authInfo: 'string',
      authTimestamp: 'number',
      deviceBrand: 'string',
      deviceModel: 'string',
      osName: 'string',
      reserved: 'string',
      rule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

