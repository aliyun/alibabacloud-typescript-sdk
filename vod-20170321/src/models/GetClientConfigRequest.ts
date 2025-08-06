// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientConfigRequest extends $dara.Model {
  brand?: string;
  deviceName?: string;
  osName?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      deviceName: 'DeviceName',
      osName: 'OsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      deviceName: 'string',
      osName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

